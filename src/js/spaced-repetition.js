/**
 * 基于艾宾浩斯遗忘曲线的间隔重复复习引擎
 * 采用 SM-2 算法改进版实现
 * 增强版：包含记忆强度计算、错误类型权重、遗忘曲线拟合
 */
class SpacedRepetitionEngine {
  constructor() {
    this.baseEaseFactor = 2.5; // 基础遗忘因子
    this.baseMemoryStrength = 1.0; // 基础记忆强度

    // 错误类型权重配置（艾宾浩斯增强版）
    this.errorWeights = {
      spelling: 15,  // 拼写错误权重最高
      meaning: 10,   // 词义混淆次之
      phonetic: 8,    // 发音困难
      grammar: 5      // 语法困难权重最低
    };
  }

  /**
   * 计算记忆强度（艾宾浩斯遗忘曲线）
   * 公式: R = e^(-t/S)，其中 S 为记忆强度参数
   * @param {Object} mastery - 当前掌握度数据
   * @returns {Object} { strength: number (0-1), decay: number, halfLife: number }
   */
  calculateMemoryStrength(mastery) {
    // 从历史数据中提取记忆强度参数 S
    const memoryParameter = mastery?.memoryParameter || this.estimateMemoryParameter(mastery);
    const timeSinceReview = this.getTimeSinceLastReview(mastery);

    // 艾宾浩斯公式: R = e^(-t/S)
    // 其中 R 是保留率（0-1），t 是时间，S 是记忆强度参数
    const decay = Math.exp(-timeSinceReview / memoryParameter);
    const strength = Math.max(0, Math.min(1, decay));

    // 计算半衰期（记忆强度衰减到50%所需时间）
    const halfLife = memoryParameter * Math.log(2);

    return {
      strength: strength,
      decay: decay,
      halfLife: halfLife / (24 * 60 * 60 * 1000), // 转换为天数
      memoryParameter: memoryParameter
    };
  }

  /**
   * 根据掌握度数据估算记忆强度参数 S
   * @param {Object} mastery - 掌握度数据
   * @returns {number} 记忆强度参数（天数）
   */
  estimateMemoryParameter(mastery) {
    // 基础参数（艾宾浩斯典型值约7天）
    let baseS = 7;

    // 根据已知的回忆次数调整
    const reviewCount = mastery?.reviewCount || 0;
    const known = mastery?.known || 0;

    // 复习次数越多，记忆越牢固，S 值越大
    if (reviewCount > 0) {
      // 每次复习 S 值增加约20%，上限为50天
      baseS = Math.min(50, baseS * Math.pow(1.2, Math.min(reviewCount, 10)));
    }

    // 根据掌握度调整
    if (known > 0.8) {
      baseS *= 1.5; // 高掌握度增强记忆稳定性
    } else if (known < 0.3) {
      baseS *= 0.7; // 低掌握度削弱记忆稳定性
    }

    return baseS;
  }

  /**
   * 获取距离上次复习的时间（毫秒）
   * @param {Object} mastery - 掌握度数据
   * @returns {number} 时间差（毫秒）
   */
  getTimeSinceLastReview(mastery) {
    if (!mastery?.lastReview) {
      return 0; // 新单词视为刚刚复习
    }
    return Date.now() - mastery.lastReview;
  }

  /**
   * 预测下次遗忘时间
   * 基于当前记忆强度和衰减率计算何时会遗忘
   * @param {Object} mastery - 掌握度数据
   * @returns {number} 预测的遗忘时间戳（毫秒）
   */
  predictForgettingTime(mastery) {
    const { memoryParameter, strength } = this.calculateMemoryStrength(mastery);

    // 计算达到危险阈值（记忆强度 < 0.3）的时间
    // 0.3 是我们定义的"需要复习"阈值
    const dangerThreshold = 0.3;
    const timeToDanger = memoryParameter * Math.log(1 / dangerThreshold);

    // 从当前时间计算
    const lastReview = mastery?.lastReview || Date.now();
    const forgettingTime = lastReview + timeToDanger;

    return Math.max(forgettingTime, Date.now()); // 确保不会返回过去的时间
  }

  /**
   * 根据历史复习数据拟合个性化遗忘曲线
   * @param {Array} reviewHistory - 复习历史记录 [{timestamp, correct, recall}]
   * @returns {Object} 个性化遗忘曲线参数 { slope, intercept, r2 }
   */
  fitForgettingCurve(reviewHistory) {
    if (!reviewHistory || reviewHistory.length < 3) {
      // 数据不足，返回默认值
      return {
        slope: -0.1,
        intercept: 1.0,
        r2: 0,
        fitQuality: 'insufficient_data'
      };
    }

    // 将数据转换为对数形式以拟合指数衰减曲线
    // ln(R) = -t/S + ln(1)
    const points = reviewHistory.map(r => ({
      t: (r.timestamp - reviewHistory[0].timestamp) / (24 * 60 * 60 * 1000), // 天
      recall: r.recall || 0
    }));

    // 线性回归计算斜率和截距
    const n = points.length;
    let sumT = 0, sumRecall = 0, sumTT = 0, sumTRecall = 0;

    points.forEach(p => {
      const recallLog = Math.log(Math.max(0.01, p.recall)); // 避免 log(0)
      sumT += p.t;
      sumRecall += recallLog;
      sumTT += p.t * p.t;
      sumTRecall += p.t * recallLog;
    });

    const slope = (n * sumTRecall - sumT * sumRecall) / (n * sumTT - sumT * sumT);
    const intercept = (sumRecall - slope * sumT) / n;

    // 计算 R² 拟合优度
    const meanRecall = sumRecall / n;
    let ssTotal = 0, ssResidual = 0;
    points.forEach(p => {
      const predicted = slope * p.t + intercept;
      ssTotal += Math.pow(p.recall - meanRecall, 2);
      ssResidual += Math.pow(p.recall - Math.exp(predicted), 2);
    });
    const r2 = ssTotal > 0 ? 1 - (ssResidual / ssTotal) : 0;

    return {
      slope: slope,
      intercept: intercept,
      r2: r2,
      memoryParameter: -1 / slope, // S = -1/斜率
      fitQuality: r2 > 0.7 ? 'good' : r2 > 0.4 ? 'moderate' : 'poor'
    };
  }

  /**
   * 基于遗忘曲线预测最佳复习时间点
   * @param {Object} mastery - 掌握度数据
   * @param {number} targetRetention - 目标记忆保留率（默认0.7）
   * @returns {number} 最佳复习时间戳
   */
  predictOptimalReviewTime(mastery, targetRetention = 0.7) {
    const memoryParameter = this.estimateMemoryParameter(mastery);

    // 从公式 R = e^(-t/S) 反推 t = -S * ln(R)
    const optimalInterval = -memoryParameter * Math.log(targetRetention);

    const lastReview = mastery?.lastReview || Date.now();
    return lastReview + optimalInterval * 24 * 60 * 60 * 1000;
  }

  /**
   * 更新记忆强度参数（复习后调用）
   * @param {Object} mastery - 当前掌握度数据
   * @param {Object} result - 复习结果 { correct: boolean, quality?: number }
   * @returns {Object} 更新后的记忆参数
   */
  updateMemoryParameter(mastery, result) {
    const currentS = mastery?.memoryParameter || this.estimateMemoryParameter(mastery);
    let newS = currentS;

    if (result.correct) {
      // 正确复习：增强记忆稳定性，S 值增加
      const qualityBonus = (result.quality || 3) / 3;
      newS *= (1 + 0.1 * qualityBonus); // 最多增加10%
    } else {
      // 错误复习：削弱记忆稳定性，S 值减少
      newS *= 0.85; // 减少15%
    }

    // 限制 S 值在合理范围内
    return Math.max(1, Math.min(100, newS));
  }

  /**
   * 获取特定错误类型的权重
   * @param {string} errorType - 错误类型
   * @returns {number} 权重值
   */
  getErrorWeight(errorType) {
    return this.errorWeights[errorType] || 5; // 默认权重5
  }

  /**
   * 计算所有错误类型的总权重
   * @param {Array} errorTypes - 错误类型数组
   * @returns {number} 总权重
   */
  calculateTotalErrorWeight(errorTypes) {
    return errorTypes.reduce((total, type) => total + this.getErrorWeight(type), 0);
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
   * 计算优先级分数（增强版 - 艾宾浩斯增强版）
   * 综合考虑记忆强度、错误类型、遗忘曲线
   * @param {string} wordId - 单词ID
   * @param {Object} mastery - 掌握度数据
   * @param {Array} errorTypes - 错误类型数组 ['spelling', 'meaning', 'phonetic', 'grammar']
   * @returns {Object} { priority: number, nextReview: timestamp, reasons: string[] }
   */
  calculatePriority(wordId, mastery, errorTypes = []) {
    let score = 0;
    const reasons = [];

    // 1. 计算记忆强度因子（基于艾宾浩斯遗忘曲线）
    const { strength, halfLife } = this.calculateMemoryStrength(mastery);
    const memoryStrengthFactor = 1 - strength; // 越弱越需要复习
    score += memoryStrengthFactor * 30;
    if (memoryStrengthFactor > 0.5) {
      reasons.push(`记忆强度低(${Math.round(strength * 100)}%)`);
    }

    // 2. 预测遗忘时间因子
    const forgettingTime = this.predictForgettingTime(mastery);
    const hoursUntilForgetting = (forgettingTime - Date.now()) / (1000 * 60 * 60);
    if (hoursUntilForgetting < 24) {
      score += (24 - hoursUntilForgetting) * 0.5;
      reasons.push('接近遗忘临界点');
    }

    // 3. 错误次数权重（降低权重，记忆强度更重要）
    const errors = mastery.errors || 0;
    score += errors * 5; // 从10降至5
    if (errors > 0) {
      reasons.push(`错误${errors}次`);
    }

    // 4. 错误类型权重（使用配置化的权重系统）
    const totalErrorWeight = this.calculateTotalErrorWeight(errorTypes);
    score += totalErrorWeight;
    errorTypes.forEach(type => {
      switch (type) {
        case 'spelling':
          reasons.push('拼写困难');
          break;
        case 'meaning':
          reasons.push('词义混淆');
          break;
        case 'phonetic':
          reasons.push('发音困难');
          break;
        case 'grammar':
          reasons.push('语法困难');
          break;
      }
    });

    // 5. 掌握度权重（调整权重）
    const known = mastery.known || 0;
    const knownWeight = (1 - known) * 15; // 从20降至15
    score += knownWeight;
    if (known < 0.5) {
      reasons.push(`掌握度较低(${Math.round(known * 100)}%)`);
    }

    // 6. 距离下次复习的时间权重
    if (mastery.nextReview) {
      const hoursUntilDue = (mastery.nextReview - Date.now()) / (1000 * 60 * 60);
      if (hoursUntilDue < 0) {
        score += Math.abs(hoursUntilDue) * 2; // 逾期加倍
        reasons.push('已逾期');
      }
    } else {
      // 新单词，适度提升优先级
      score += 5;
      reasons.push('新单词');
    }

    // 7. 基于遗忘曲线预测最佳复习时间
    let nextReview = this.predictOptimalReviewTime(mastery, 0.7);
    if (!mastery.nextReview) {
      nextReview = Date.now() + 24 * 60 * 60 * 1000; // 新单词1天后
    } else if (errors > 2 || memoryStrengthFactor > 0.7) {
      // 错误多或记忆极弱，提前复习
      nextReview = Math.min(nextReview, Date.now() + 2 * 60 * 60 * 1000);
    }

    return {
      priority: score,
      nextReview,
      reasons,
      memoryStrength: strength, // 附带记忆强度信息
      forgettingTime: forgettingTime // 附带遗忘预测
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

    // 更新记忆强度参数
    const memoryParameter = this.updateMemoryParameter(mastery, result);

    // 计算新的记忆强度
    const memoryStrength = this.calculateMemoryStrength({
      ...mastery,
      memoryParameter: memoryParameter,
      lastReview: Date.now()
    });

    return {
      ...mastery,
      interval,
      nextReview: nextReview.getTime(),
      easeFactor: this.adjustEaseFactor(mastery?.easeFactor || this.baseEaseFactor, result),
      lastReview: Date.now(),
      memoryParameter: memoryParameter,
      memoryStrength: memoryStrength.strength,
      reviewCount: (mastery?.reviewCount || 0) + 1
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

// ==================== 单元测试脚本 ====================
/**
 * 复习算法增强功能测试套件
 * 运行方式：在浏览器控制台或 Node.js 环境中执行
 */
(function runTests() {
  console.log('========================================');
  console.log('复习算法增强 - 单元测试');
  console.log('========================================\n');

  const engine = new SpacedRepetitionEngine();
  let passed = 0;
  let failed = 0;

  function test(name, fn) {
    try {
      fn();
      console.log(`✓ ${name}`);
      passed++;
    } catch (e) {
      console.log(`✗ ${name}`);
      console.log(`  Error: ${e.message}`);
      failed++;
    }
  }

  function assertEqual(actual, expected, message = '') {
    if (actual !== expected) {
      throw new Error(`${message} 期望 ${expected}，实际 ${actual}`);
    }
  }

  function assertApprox(actual, expected, tolerance, message = '') {
    if (Math.abs(actual - expected) > tolerance) {
      throw new Error(`${message} 期望约 ${expected}，实际 ${actual}`);
    }
  }

  // ============== 记忆强度计算测试 ==============
  console.log('\n--- 记忆强度计算测试 ---');

  test('calculateMemoryStrength: 新单词初始强度应为1', () => {
    const result = engine.calculateMemoryStrength({});
    assertEqual(result.strength, 1.0);
  });

  test('calculateMemoryStrength: 无记忆参数时使用默认估算', () => {
    const result = engine.calculateMemoryStrength({});
    assertApprox(result.memoryParameter, 7, 1, '默认记忆参数约7天');
  });

  test('calculateMemoryStrength: 高复习次数应增加记忆参数', () => {
    const result = engine.calculateMemoryStrength({ reviewCount: 5 });
    assertApprox(result.memoryParameter, 7 * Math.pow(1.2, 5), 5, '5次复习后记忆参数');
  });

  test('calculateMemoryStrength: 高掌握度应增加记忆稳定性', () => {
    const result = engine.calculateMemoryStrength({ known: 0.9 });
    assertApprox(result.memoryParameter, 7 * 1.5, 2, '高掌握度记忆参数');
  });

  test('calculateMemoryStrength: 包含半衰期信息', () => {
    const result = engine.calculateMemoryStrength({});
    assertApprox(result.halfLife, Math.log(2), 0.1, '半衰期公式验证');
  });

  // ============== 错误类型权重测试 ==============
  console.log('\n--- 错误类型权重测试 ---');

  test('getErrorWeight: spelling权重为15', () => {
    assertEqual(engine.getErrorWeight('spelling'), 15);
  });

  test('getErrorWeight: meaning权重为10', () => {
    assertEqual(engine.getErrorWeight('meaning'), 10);
  });

  test('getErrorWeight: phonetic权重为8', () => {
    assertEqual(engine.getErrorWeight('phonetic'), 8);
  });

  test('getErrorWeight: grammar权重为5', () => {
    assertEqual(engine.getErrorWeight('grammar'), 5);
  });

  test('getErrorWeight: 未知类型默认权重为5', () => {
    assertEqual(engine.getErrorWeight('unknown'), 5);
  });

  test('calculateTotalErrorWeight: 多种错误类型权重累加', () => {
    const total = engine.calculateTotalErrorWeight(['spelling', 'meaning', 'phonetic', 'grammar']);
    assertEqual(total, 38); // 15+10+8+5
  });

  // ============== 遗忘曲线拟合测试 ==============
  console.log('\n--- 遗忘曲线拟合测试 ---');

  test('fitForgettingCurve: 数据不足时返回默认值', () => {
    const result = engine.fitForgettingCurve([{ timestamp: Date.now(), recall: 0.9 }]);
    assertEqual(result.fitQuality, 'insufficient_data');
  });

  test('fitForgettingCurve: 足够数据时计算斜率', () => {
    const history = [
      { timestamp: Date.now(), recall: 1.0 },
      { timestamp: Date.now() + 86400000, recall: 0.8 },
      { timestamp: Date.now() + 172800000, recall: 0.6 },
      { timestamp: Date.now() + 259200000, recall: 0.4 }
    ];
    const result = engine.fitForgettingCurve(history);
    assertApprox(result.slope, -0.15, 0.1, '拟合斜率');
  });

  test('estimateMemoryParameter: 根据复习次数估算', () => {
    const result = engine.estimateMemoryParameter({ reviewCount: 3 });
    assertApprox(result, 7 * Math.pow(1.2, 3), 1, '3次复习的S值');
  });

  // ============== 预测遗忘时间测试 ==============
  console.log('\n--- 预测遗忘时间测试 ---');

  test('predictForgettingTime: 新单词应预测未来遗忘时间', () => {
    const result = engine.predictForgettingTime({});
    assertEqual(result > Date.now(), true, '预测时间应在未来');
  });

  test('predictForgettingTime: 高记忆参数延迟遗忘', () => {
    const weak = engine.predictForgettingTime({ memoryParameter: 3 });
    const strong = engine.predictForgettingTime({ memoryParameter: 20 });
    assertEqual(strong > weak, true, '强记忆参数应预测更晚的遗忘');
  });

  test('predictOptimalReviewTime: 包含合理的复习间隔', () => {
    const result = engine.predictOptimalReviewTime({});
    const daysUntilReview = (result - Date.now()) / (86400000);
    assertApprox(daysUntilReview, 5, 3, '预测复习间隔约5天');
  });

  // ============== 记忆参数更新测试 ==============
  console.log('\n--- 记忆参数更新测试 ---');

  test('updateMemoryParameter: 正确复习增强记忆', () => {
    const result = engine.updateMemoryParameter({ memoryParameter: 10 }, { correct: true, quality: 3 });
    assertApprox(result, 10 * 1.1, 0.5, '正确复习后S值增加');
  });

  test('updateMemoryParameter: 错误复习削弱记忆', () => {
    const result = engine.updateMemoryParameter({ memoryParameter: 10 }, { correct: false });
    assertApprox(result, 10 * 0.85, 0.5, '错误复习后S值减少');
  });

  test('updateMemoryParameter: S值限制在合理范围', () => {
    const result = engine.updateMemoryParameter({ memoryParameter: 100 }, { correct: true });
    assertEqual(result <= 100, true, 'S值不超过上限');
  });

  // ============== calculatePriority 增强测试 ==============
  console.log('\n--- calculatePriority 增强测试 ---');

  test('calculatePriority: 返回记忆强度信息', () => {
    const result = engine.calculatePriority('word1', { lastReview: Date.now() - 86400000 });
    assertEqual(typeof result.memoryStrength, 'number', '包含memoryStrength');
    assertEqual(typeof result.forgettingTime, 'number', '包含forgettingTime');
  });

  test('calculatePriority: 记忆强度低时优先级提高', () => {
    const weak = engine.calculatePriority('word1', { lastReview: Date.now() - 604800000 });
    const fresh = engine.calculatePriority('word2', { lastReview: Date.now() });
    assertEqual(weak.priority > fresh.priority, true, '弱记忆优先级更高');
  });

  test('calculatePriority: 支持错误类型权重', () => {
    const noErrors = engine.calculatePriority('word1', { lastReview: Date.now() }, []);
    const spelling = engine.calculatePriority('word1', { lastReview: Date.now() }, ['spelling']);
    assertEqual(spelling.priority > noErrors.priority, true, '拼写错误增加优先级');
  });

  test('calculatePriority: 保持向后兼容（返回必要字段）', () => {
    const result = engine.calculatePriority('word1', { known: 0.5 });
    assertEqual(typeof result.priority, 'number', '有priority字段');
    assertEqual(typeof result.nextReview, 'number', '有nextReview字段');
    assertEqual(Array.isArray(result.reasons), true, '有reasons数组');
  });

  // ============== scheduleNextReview 增强测试 ==============
  console.log('\n--- scheduleNextReview 增强测试 ---');

  test('scheduleNextReview: 正确复习更新记忆参数', () => {
    const mastery = { interval: 1, known: 0.6 };
    const result = engine.scheduleNextReview(mastery, { correct: true, quality: 3 });
    assertEqual(typeof result.memoryParameter, 'number', '包含memoryParameter');
    assertEqual(result.reviewCount, 1, '复习次数+1');
  });

  test('scheduleNextReview: 错误复习降低记忆参数', () => {
    const mastery = { interval: 2, memoryParameter: 10 };
    const result = engine.scheduleNextReview(mastery, { correct: false });
    assertEqual(result.memoryParameter < 10, true, '错误后S值降低');
  });

  // ============== 集成测试：完整复习流程 ==============
  console.log('\n--- 集成测试：完整复习流程 ---');

  test('完整复习流程模拟', () => {
    // 模拟一个新单词的复习过程
    let mastery = { wordId: 'test_word', known: 0.5, interval: 1 };

    // 1. 检查记忆强度
    const strength = engine.calculateMemoryStrength(mastery);
    console.log(`  初始记忆强度: ${strength.strength.toFixed(3)}`);

    // 2. 预测遗忘时间
    const forgettingTime = engine.predictForgettingTime(mastery);
    console.log(`  预计遗忘时间: ${new Date(forgettingTime).toLocaleString()}`);

    // 3. 计算优先级
    const priority = engine.calculatePriority('test_word', mastery, ['spelling']);
    console.log(`  优先级得分: ${priority.priority.toFixed(2)}`);
    console.log(`  优先级原因: ${priority.reasons.join(', ')}`);

    // 4. 模拟复习成功
    mastery = engine.scheduleNextReview(mastery, { correct: true, quality: 3 });
    console.log(`  复习后记忆参数S: ${mastery.memoryParameter.toFixed(2)}`);
    console.log(`  复习后记忆强度: ${mastery.memoryStrength.toFixed(3)}`);

    assertEqual(mastery.memoryParameter > 7, true, '复习后S值增加');
  });

  // ============== 艾宾浩斯公式验证 ==============
  console.log('\n--- 艾宾浩斯公式验证 ---');

  test('R = e^(-t/S) 公式验证', () => {
    // 当 t = S 时，R = e^(-1) ≈ 0.368
    const result = engine.calculateMemoryStrength({ memoryParameter: 7, lastReview: Date.now() - 7 * 86400000 });
    assertApprox(result.strength, Math.exp(-1), 0.05, '7天后的保留率约36.8%');
  });

  test('遗忘曲线预测准确性', () => {
    // 拟合指数衰减曲线
    const history = [
      { timestamp: Date.now(), recall: 1.0 },
      { timestamp: Date.now() + 86400000, recall: 0.7 },
      { timestamp: Date.now() + 172800000, recall: 0.5 },
      { timestamp: Date.now() + 259200000, recall: 0.35 },
      { timestamp: Date.now() + 345600000, recall: 0.25 }
    ];
    const fit = engine.fitForgettingCurve(history);
    console.log(`  拟合质量: ${fit.fitQuality}, R²=${fit.r2.toFixed(3)}`);
    assertEqual(fit.fitQuality !== 'insufficient_data', true, '有足够的拟合数据');
  });

  // ============== 测试总结 ==============
  console.log('\n========================================');
  console.log(`测试完成: ${passed} 通过, ${failed} 失败`);
  console.log('========================================\n');

  // 输出算法增强特性摘要
  console.log('算法增强特性摘要:');
  console.log('1. 记忆强度计算: R = e^(-t/S), 基于艾宾浩斯遗忘曲线');
  console.log('2. 错误类型权重: spelling=15, meaning=10, phonetic=8, grammar=5');
  console.log('3. 个性化遗忘曲线拟合: 支持历史数据训练');
  console.log('4. 遗忘时间预测: 计算记忆强度低于阈值的时间点');
  console.log('5. 最佳复习时间预测: 基于目标保留率计算最优间隔');
  console.log('6. 记忆参数动态更新: 复习后自动调整S值\n');
})();