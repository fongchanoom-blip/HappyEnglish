/**
 * 学生画像类
 * 管理学生的记忆数据、学习行为和错误模式
 */

class StudentProfile {
  constructor() {
    this.studentId = 'default';
    this.vocabularyMastery = new Map();
    this.weakPatterns = [];
    this.learningBehavior = {
      totalStudyTime: 0,
      dailyStudyTime: 0,
      streakDays: 0,
      lastStudyDate: null,
      studyDistribution: {},
      preferredTimes: []
    };
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  /**
   * 从 IndexedDB 加载学生画像数据
   */
  async load() {
    if (!window.db || !window.db.db) {
      console.warn('数据库未初始化');
      return false;
    }

    try {
      const allMastery = await window.db.getAllMastery();
      allMastery.forEach(item => {
        if (item.wordId) {
          this.vocabularyMastery.set(item.wordId, item);
        }
      });

      const errors = await window.db.getErrorPatterns();
      this.weakPatterns = errors || [];

      // 从 IndexedDB 获取学习行为（存储在 memory store 的特殊记录中）
      const behaviorRecord = await window.db.getMastery('_learningBehavior');
      if (behaviorRecord) {
        this.learningBehavior = { ...this.learningBehavior, ...behaviorRecord };
      }

      this.updatedAt = new Date();
      return true;
    } catch (e) {
      console.error('加载学生画像失败', e);
      return false;
    }
  }

  /**
   * 保存学生画像数据到 IndexedDB
   */
  async save() {
    if (!window.db || !window.db.db) {
      console.warn('数据库未初始化');
      return false;
    }

    try {
      // 保存所有掌握度数据
      const masteryPromises = [];
      this.vocabularyMastery.forEach((state, wordId) => {
        masteryPromises.push(window.db.saveMastery(wordId, state));
      });

      // 保存学习行为数据
      const behaviorRecord = {
        ...this.learningBehavior,
        wordId: '_learningBehavior'
      };
      masteryPromises.push(window.db.saveMastery('_learningBehavior', behaviorRecord));

      await Promise.all(masteryPromises);

      this.updatedAt = new Date();
      return true;
    } catch (e) {
      console.error('保存学生画像失败', e);
      return false;
    }
  }

  /**
   * 更新单词掌握度
   * @param {string} wordId - 单词ID
   * @param {Object} data - 掌握度数据
   */
  async updateMastery(wordId, data) {
    const existing = this.vocabularyMastery.get(wordId) || {
      wordId,
      known: 0,
      recall: 0,
      lastReview: null,
      nextReview: null,
      interval: 1,
      errors: 0,
      correct: 0,
      total: 0
    };

    const updated = { ...existing, ...data };
    this.vocabularyMastery.set(wordId, updated);

    await window.db.saveMastery(wordId, updated);
    this.updatedAt = new Date();

    return updated;
  }

  /**
   * 获取单词掌握度
   * @param {string} wordId - 单词ID
   */
  getMastery(wordId) {
    return this.vocabularyMastery.get(wordId) || null;
  }

  /**
   * 获取所有掌握的单词
   */
  getAllMastery() {
    const result = [];
    this.vocabularyMastery.forEach((state, wordId) => {
      if (wordId !== '_learningBehavior') {
        result.push(state);
      }
    });
    return result;
  }

  /**
   * 获取需要复习的单词
   * @param {number} limit - 返回数量限制
   */
  getWordsForReview(limit = 10) {
    const now = Date.now();
    const words = [];

    this.vocabularyMastery.forEach((state, wordId) => {
      if (wordId === '_learningBehavior') return;

      // 检查是否需要复习
      if (!state.nextReview || state.nextReview <= now) {
        // 按错误次数和掌握度排序
        const priority = (state.errors || 0) * 10 + (1 - (state.known || 0)) * 5;
        words.push({ ...state, priority });
      }
    });

    // 按优先级排序并返回
    return words
      .sort((a, b) => b.priority - a.priority)
      .slice(0, limit);
  }

  /**
   * 记录错误
   * @param {string} wordId - 单词ID
   * @param {string} wrongAnswer - 错误答案
   * @param {'phonetic'|'meaning'|'spelling'|'grammar'} type - 错误类型
   */
  async recordError(wordId, wrongAnswer, type) {
    // 参数校验
    if (!wordId || typeof wordId !== 'string') {
      console.warn('recordError: 无效的 wordId 参数');
      return;
    }
    if (!wrongAnswer || typeof wrongAnswer !== 'string') {
      console.warn('recordError: 无效的 wrongAnswer 参数');
      return;
    }
    const validTypes = ['phonetic', 'meaning', 'spelling', 'grammar'];
    if (!validTypes.includes(type)) {
      console.warn('recordError: 无效的 type 参数，应为 ', validTypes);
      return;
    }

    // 查找是否有相同的错误模式
    const existingIndex = this.weakPatterns.findIndex(
      p => p.wordId === wordId && p.wrongAnswer === wrongAnswer && p.type === type
    );

    if (existingIndex >= 0) {
      this.weakPatterns[existingIndex].count++;
      this.weakPatterns[existingIndex].lastError = new Date();
      await window.db.saveErrorPattern(this.weakPatterns[existingIndex]);
    } else {
      const newPattern = {
        type,
        wordId,
        wrongAnswer,
        count: 1,
        lastError: new Date()
      };
      const saved = await window.db.saveErrorPattern(newPattern);
      if (saved && saved.id) {
        newPattern.id = saved.id;
      }
      this.weakPatterns.push(newPattern);
    }

    // 更新单词的错误计数
    const mastery = this.vocabularyMastery.get(wordId) || { wordId, errors: 0 };
    mastery.errors = (mastery.errors || 0) + 1;
    this.vocabularyMastery.set(wordId, mastery);
    await window.db.saveMastery(wordId, mastery);

    this.updatedAt = new Date();
  }

  /**
   * 获取错误模式列表
   */
  getErrorPatterns() {
    return this.weakPatterns;
  }

  /**
   * 获取特定单词的错误模式
   * @param {string} wordId - 单词ID
   */
  getErrorPatternsForWord(wordId) {
    return this.weakPatterns.filter(p => p.wordId === wordId);
  }

  /**
   * 获取按错误次数排序的弱项单词
   * @param {number} limit - 返回数量限制
   */
  getWeakWords(limit = 10) {
    return this.weakPatterns
      .sort((a, b) => b.count - a.count)
      .slice(0, limit);
  }

  /**
   * 更新学习行为
   * @param {Object} data - 学习行为数据
   */
  async updateLearningBehavior(data) {
    this.learningBehavior = { ...this.learningBehavior, ...data };

    // 更新连续学习天数
    if (data.lastStudyDate) {
      const today = new Date().toDateString();
      const lastDate = new Date(data.lastStudyDate).toDateString();

      if (today !== lastDate) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (yesterday.toDateString() === lastDate) {
          // 昨天学习过，连续天数+1
          this.learningBehavior.streakDays++;
        } else {
          // 中断了，重置为1
          this.learningBehavior.streakDays = 1;
        }
      }
    }

    // 保存到 IndexedDB
    await window.db.saveMastery('_learningBehavior', {
      ...this.learningBehavior,
      wordId: '_learningBehavior'
    });

    this.updatedAt = new Date();
    return this.learningBehavior;
  }

  /**
   * 获取学习行为数据
   */
  getLearningBehavior() {
    return this.learningBehavior;
  }

  /**
   * 获取学习统计摘要
   */
  getStatsSummary() {
    const masteryList = this.getAllMastery();
    const totalWords = masteryList.length;
    const masteredWords = masteryList.filter(m => m.known >= 0.8).length;
    const learningWords = masteryList.filter(m => m.known >= 0.3 && m.known < 0.8).length;
    const newWords = masteryList.filter(m => m.known < 0.3).length;

    return {
      totalWords,
      masteredWords,
      learningWords,
      newWords,
      masteryRate: totalWords > 0 ? masteredWords / totalWords : 0,
      streakDays: this.learningBehavior.streakDays,
      totalErrors: this.weakPatterns.length
    };
  }

  /**
   * 重置学生画像数据
   */
  async reset() {
    this.vocabularyMastery.clear();
    this.weakPatterns = [];
    this.learningBehavior = {
      totalStudyTime: 0,
      dailyStudyTime: 0,
      streakDays: 0,
      lastStudyDate: null,
      studyDistribution: {},
      preferredTimes: []
    };
    this.updatedAt = new Date();

    // 清除 IndexedDB 中的数据
    await window.db.clearErrorPatterns();
    const allMastery = await window.db.getAllMastery();
    for (const item of allMastery) {
      if (item.wordId) {
        await window.db.saveMastery(item.wordId, null);
      }
    }
  }
}

// 创建全局实例
window.studentProfile = new StudentProfile();

// 导出类
export { StudentProfile };