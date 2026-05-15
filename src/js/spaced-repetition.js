/**
 * 基于艾宾浩斯遗忘曲线的间隔重复复习引擎
 * 采用 SM-2 算法改进版实现
 */
class SpacedRepetitionEngine {
  constructor() {
    this.baseEaseFactor = 2.5; // 基础遗忘因子
  }

  /**
   * 基于艾宾浩斯遗忘曲线计算复习间隔
   * SM-2 算法改进版
   * @param {Object} mastery - 当前掌握度数据
   * @param {Object} result - 复习结果 { correct: boolean, quality?: number }
   * @returns {number} 计算后的间隔（天数）
   */
  calculateInterval(mastery, result) {
    const currentInterval = mastery?.interval || 1;
    const easeFactor = mastery?.easeFactor || this.baseEaseFactor;

    if (result.correct) {
      // 正确：增加间隔
      if (currentInterval === 1) {
        return 1; // 第一次复习仍是1天
      }
      return Math.round(currentInterval * easeFactor);
    } else {
      // 错误：减少间隔，回到较短的间隔
      return Math.max(1, Math.round(currentInterval * 0.5));
    }
  }

  /**
   * 动态调整 eFactor（遗忘因子）
   * SM-2 公式改进
   * @param {number} current - 当前 eFactor
   * @param {Object} result - 复习结果
   * @returns {number} 调整后的 eFactor
   */
  adjustEaseFactor(current, result) {
    const quality = result.correct ? (result.quality || 3) : 1;
    // SM-2 公式改进
    const adjustment = 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02);
    return Math.max(1.3, current + adjustment);
  }

  /**
   * 获取需要复习的单词
   * @param {Array} progress - 所有掌握度数据数组
   * @param {number} limit - 返回数量限制
   * @returns {Array} 待复习单词列表
   */
  getWordsForReview(progress, limit = 20, errorPatterns = []) {
    const now = Date.now();
    return progress
      .filter(p => {
        // 有 nextReview 且已到期
        if (!p.nextReview) return true; // 新单词需要复习
        return p.nextReview <= now;
      })
      .sort((a, b) => {
        // 获取错误类型
        const aErrors = errorPatterns.filter(e => e.wordId === a.wordId).map(e => e.type) || [];
        const bErrors = errorPatterns.filter(e => e.wordId === b.wordId).map(e => e.type) || [];

        // 优先级排序
        const aResult = this.calculatePriority(a.wordId, a, aErrors);
        const bResult = this.calculatePriority(b.wordId, b, bErrors);
        return bResult.priority - aResult.priority;
      })
      .slice(0, limit);
  }

  /**
   * 计算优先级分数（增强版）
   * @param {string} wordId - 单词ID
   * @param {Object} mastery - 掌握度数据
   * @param {Array} errorTypes - 错误类型数组 ['spelling', 'meaning', 'phonetic', 'grammar']
   * @returns {Object} { priority: number, nextReview: timestamp, reasons: string[] }
   */
  calculatePriority(wordId, mastery, errorTypes = []) {
    let score = 0;
    const reasons = [];

    // 错误次数权重
    const errors = mastery.errors || 0;
    score += errors * 10;
    if (errors > 0) {
      reasons.push(`错误${errors}次`);
    }

    // 掌握度权重（越低越优先）
    const known = mastery.known || 0;
    const knownWeight = (1 - known) * 20;
    score += knownWeight;
    if (known < 0.5) {
      reasons.push(`掌握度较低(${Math.round(known * 100)}%)`);
    }

    // 错误类型权重（拼写错误权重更高）
    errorTypes.forEach(type => {
      switch (type) {
        case 'spelling':
          score += 15;
          reasons.push('拼写困难');
          break;
        case 'meaning':
          score += 10;
          reasons.push('词义混淆');
          break;
        case 'phonetic':
          score += 8;
          reasons.push('发音困难');
          break;
        case 'grammar':
          score += 5;
          reasons.push('语法困难');
          break;
      }
    });

    // 到期时间权重（越早到期越优先）
    if (mastery.nextReview) {
      const hoursUntilDue = (mastery.nextReview - Date.now()) / (1000 * 60 * 60);
      score -= hoursUntilDue; // 负值表示越早到期分数越高
      if (hoursUntilDue < 0) {
        reasons.push('已逾期');
      }
    } else {
      // 新单词，适度提升优先级
      score += 5;
      reasons.push('新单词');
    }

    // 计算下次复习时间（基于记忆强度衰减）
    let nextReview = mastery.nextReview || Date.now();
    if (!mastery.nextReview) {
      // 新单词安排在1天后
      nextReview = Date.now() + 24 * 60 * 60 * 1000;
    } else if (errors > 2) {
      // 错误次数多，提前复习
      nextReview = Math.min(nextReview, Date.now() + 2 * 60 * 60 * 1000); // 2小时后再试
    }

    return {
      priority: score,
      nextReview,
      reasons
    };
  }

  /**
   * 计算下次复习时间并更新掌握度数据
   * @param {Object} mastery - 当前掌握度数据
   * @param {Object} result - 复习结果 { correct: boolean, quality?: number }
   * @returns {Object} 更新后的掌握度数据
   */
  scheduleNextReview(mastery, result) {
    const interval = this.calculateInterval(mastery, result);
    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + interval);

    return {
      ...mastery,
      interval,
      nextReview: nextReview.getTime(),
      easeFactor: this.adjustEaseFactor(mastery?.easeFactor || this.baseEaseFactor, result),
      lastReview: Date.now()
    };
  }

  /**
   * 根据单词掌握度判断是否"认识"
   * @param {Object} mastery - 掌握度数据
   * @returns {boolean} 是否已掌握
   */
  isKnown(mastery) {
    return (mastery?.known || 0) >= 0.85 && (mastery?.recall || 0) >= 0.8;
  }

  /**
   * 获取复习统计信息
   * @param {Array} progress - 所有掌握度数据
   * @returns {Object} 统计信息
   */
  getReviewStats(progress) {
    const now = Date.now();
    const dueCount = progress.filter(p => !p.nextReview || p.nextReview <= now).length;
    const masteredCount = progress.filter(p => this.isKnown(p)).length;
    const learningCount = progress.length - masteredCount;

    return {
      total: progress.length,
      due: dueCount,
      mastered: masteredCount,
      learning: learningCount,
      masteredRate: progress.length > 0 ? (masteredCount / progress.length * 100).toFixed(1) : 0
    };
  }
}

// 导出单例
window.spacedRepetition = new SpacedRepetitionEngine();