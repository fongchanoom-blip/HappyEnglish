/**
 * 个性化学习建议服务
 * 基于用户学习数据，生成针对性的学习建议和计划
 */
class PersonalizedSuggestions {
  constructor() {
    this.initialized = false;
    this.aiService = null;
    this.db = null;
    this.studentProfile = null;

    // 建议缓存
    this.cache = new Map();
    this.cacheExpiry = 60 * 60 * 1000; // 1小时
  }

  /**
   * 初始化服务
   */
  async init() {
    if (this.initialized) return;

    try {
      this.db = window.db;
      this.aiService = window.aiService;
      this.studentProfile = window.studentProfile;

      // 确保数据库已初始化
      if (this.db && !this.db.initialized) {
        await this.db.init();
      }

      // 加载学生画像数据
      if (this.studentProfile) {
        await this.studentProfile.load();
      }

      // 注册事件监听
      this._registerEventListeners();

      this.initialized = true;
      console.log('个性化建议服务初始化完成');
    } catch (error) {
      console.error('个性化建议服务初始化失败:', error);
    }
  }

  /**
   * 注册事件监听
   */
  _registerEventListeners() {
    if (window.learningCompanion) {
      // 监听学习事件，触发建议
      window.learningCompanion.on('suggestion', (data) => {
        this._handleSuggestionRequest(data);
      });
    }
  }

  /**
   * 处理建议请求
   */
  _handleSuggestionRequest(data) {
    console.log('收到建议请求:', data);
  }

  /**
   * 获取所有掌握度数据
   */
  async getMasteryData() {
    if (!this.db) return [];
    return await this.db.getAllMastery();
  }

  /**
   * 获取错误模式数据
   */
  async getErrorPatterns() {
    if (!this.db) return [];
    return await this.db.getErrorPatterns();
  }

  /**
   * 获取薄弱单词
   */
  async getWeakWords() {
    if (!this.studentProfile) {
      // 备用：从数据库获取
      const masteryData = await this.getMasteryData();
      return masteryData
        .filter(m => m.errors > 2 || (m.accuracy !== undefined && m.accuracy < 70))
        .sort((a, b) => (b.errors || 0) - (a.errors || 0))
        .slice(0, 20);
    }
    return this.studentProfile.getWeakWords(20);
  }

  /**
   * 分析错误类型分布
   * @returns {Object} 错误类型统计
   */
  analyzeErrorTypes() {
    const patterns = this.studentProfile?.getErrorPatterns() || [];
    const distribution = {
      phonetic: 0,   // 发音
      meaning: 0,    // 词义
      spelling: 0,   // 拼写
      grammar: 0     // 语法
    };

    patterns.forEach(p => {
      if (distribution.hasOwnProperty(p.type)) {
        distribution[p.type]++;
      }
    });

    return distribution;
  }

  /**
   * 获取最薄弱的错误类型
   * @returns {string|null} 最需加强的类型
   */
  getWeakestErrorType() {
    const distribution = this.analyzeErrorTypes();
    let maxCount = 0;
    let weakestType = null;

    Object.entries(distribution).forEach(([type, count]) => {
      if (count > maxCount) {
        maxCount = count;
        weakestType = type;
      }
    });

    return weakestType;
  }

  /**
   * 生成每日学习计划建议
   * @returns {Promise<Object>} 每日计划对象
   */
  async generateDailyPlan() {
    const masteryData = await this.getMasteryData();
    const weakWords = await this.getWeakWords();
    const errorPatterns = await this.getErrorPatterns();

    // 分析数据
    const totalWords = masteryData.length;
    const masteredWords = masteryData.filter(m => m.known >= 0.8).length;
    const accuracy = this.calculateAccuracy(masteryData);
    const weakestType = this.getWeakestErrorType();

    // 决定每日目标
    let dailyNewWords = 5;
    let dailyReviewWords = 10;

    if (accuracy >= 85) {
      dailyNewWords = 8;
      dailyReviewWords = 15;
    } else if (accuracy < 60) {
      dailyNewWords = 3;
      dailyReviewWords = 20;
    }

    const plan = {
      wordId: 'daily_plan',
      plan: {
        title: '每日学习计划',
        content: `根据你的学习数据分析：\n` +
          `- 已学习 ${totalWords} 个单词\n` +
          `- 正确率 ${accuracy}%\n` +
          `- 最薄弱环节：${this._getErrorTypeName(weakestType)}\n\n` +
          `今日建议：\n` +
          `1. 学习 ${dailyNewWords} 个新单词\n` +
          `2. 复习 ${dailyReviewWords} 个薄弱单词\n` +
          `3. 重点练习：${this._getErrorTypeName(weakestType)}类题目`,
        actions: [
          { type: 'learn', count: dailyNewWords },
          { type: 'review', words: weakWords.slice(0, dailyReviewWords).map(w => w.wordId) },
          { type: 'practice', mode: weakestType || 'mixed' }
        ]
      }
    };

    // 触发建议事件
    if (window.learningCompanion) {
      window.learningCompanion.triggerSuggestion(plan);
    }

    return plan;
  }

  /**
   * 生成薄弱项专项练习建议
   * @returns {Promise<Object>} 专项练习建议
   */
  async generateWeakPointSuggestion() {
    const weakWords = await this.getWeakWords();
    const weakestType = this.getWeakestErrorType();

    if (weakWords.length === 0) {
      return {
        wordId: 'weak_point',
        plan: {
          title: '继续保持！',
          content: '你没有明显的薄弱项，继续保持当前的学习节奏即可。',
          actions: [
            { type: 'continue' }
          ]
        }
      };
    }

    const suggestion = {
      wordId: 'weak_point',
      plan: {
        title: `${this._getErrorTypeName(weakestType)}专项练习`,
        content: `分析发现，你的薄弱环节集中在${this._getErrorTypeName(weakestType)}方面。\n` +
          `以下是建议重点复习的单词：\n` +
          weakWords.slice(0, 10).map((w, i) => `${i + 1}. ${w.wordId}`).join('\n') + '\n\n' +
          `建议每天花10分钟专门练习这些单词的${this._getErrorTypeName(weakestType)}。`,
        actions: [
          { type: 'review', words: weakWords.slice(0, 10).map(w => w.wordId) },
          { type: 'practice', mode: weakestType || 'spelling', duration: 10 }
        ]
      }
    };

    if (window.learningCompanion) {
      window.learningCompanion.triggerSuggestion(suggestion);
    }

    return suggestion;
  }

  /**
   * 生成学习节奏调整建议
   * @returns {Promise<Object>} 节奏调整建议
   */
  async generateRhythmSuggestion() {
    const behavior = this.studentProfile?.getLearningBehavior() || {};
    const masteryData = await this.getMasteryData();

    // 分析学习时段
    const studyDistribution = behavior.studyDistribution || {};
    const preferredTimes = behavior.preferredTimes || [];

    // 计算最佳学习时段
    let suggestedTime = '19:00';
    if (preferredTimes.includes('morning')) {
      suggestedTime = '08:00';
    } else if (preferredTimes.includes('afternoon')) {
      suggestedTime = '14:00';
    } else if (preferredTimes.includes('evening')) {
      suggestedTime = '20:00';
    }

    // 计算记忆周期建议
    const wordsNeedingReview = masteryData.filter(m => {
      if (!m.nextReview) return false;
      const now = Date.now();
      const nextReview = new Date(m.nextReview).getTime();
      return nextReview <= now;
    }).length;

    let content = '';

    if (wordsNeedingReview > 20) {
      content = `你有 ${wordsNeedingReview} 个单词需要复习，建议：\n` +
        `1. 每次学习前先完成复习（约15分钟）\n` +
        `2. 将新单词学习控制在10个以内\n` +
        `3. 建议学习时段：${suggestedTime}`;
    } else {
      content = `当前学习节奏良好！\n` +
        `1. 建议学习时段：${suggestedTime}\n` +
        `2. 每次学习时间控制在20-30分钟\n` +
        `3. 适当增加新单词学习`;
    }

    const suggestion = {
      wordId: 'rhythm',
      plan: {
        title: '学习节奏优化',
        content,
        actions: [
          { type: 'schedule', time: suggestedTime },
          { type: 'review', count: Math.min(wordsNeedingReview, 20) },
          { type: 'learn', count: wordsNeedingReview > 20 ? 5 : 10 }
        ]
      }
    };

    if (window.learningCompanion) {
      window.learningCompanion.triggerSuggestion(suggestion);
    }

    return suggestion;
  }

  /**
   * 生成复习时间优化建议
   * @returns {Promise<Object>} 复习优化建议
   */
  async generateReviewOptimization() {
    const masteryData = await this.getMasteryData();

    // 分析遗忘曲线
    const reviewSchedule = this.analyzeReviewSchedule(masteryData);

    const suggestion = {
      wordId: 'review_optimization',
      plan: {
        title: '复习时间优化',
        content: `根据艾宾浩斯遗忘曲线，建议采用以下复习节奏：\n` +
          `- 初次学习后 20分钟 复习\n` +
          `- 1天后 再次复习\n` +
          `- 3天后 第三次复习\n` +
          `- 7天后 第四次复习\n` +
          `- 14天后 第五次复习\n\n` +
          `当前待复习：${reviewSchedule.dueToday} 个\n` +
          `本周待复习：${reviewSchedule.dueThisWeek} 个`,
        actions: [
          { type: 'review', schedule: reviewSchedule },
          { type: 'optimize', intervals: [20, 1440, 4320, 10080, 20160] }
        ]
      }
    };

    if (window.learningCompanion) {
      window.learningCompanion.triggerSuggestion(suggestion);
    }

    return suggestion;
  }

  /**
   * 使用 AI 生成综合建议
   * @param {Object} userStats - 用户统计数据
   * @returns {Promise<Object>} AI 生成的建议
   */
  async generateAISuggestion(userStats) {
    if (!this.aiService?.isConfigured()) {
      // 返回本地生成的基础建议
      return this.generateLocalSuggestion(userStats);
    }

    try {
      const prompt = this.buildAISuggestionPrompt(userStats);
      const response = await this.aiService.callAPI(prompt);

      return {
        wordId: 'ai_suggestion',
        plan: {
          title: 'AI 个性化建议',
          content: response,
          actions: this.parseAIActions(response)
        }
      };
    } catch (error) {
      console.error('AI 建议生成失败:', error);
      return this.generateLocalSuggestion(userStats);
    }
  }

  /**
   * 构建 AI 建议 prompt
   */
  buildAISuggestionPrompt(userStats) {
    return `
请为以下学习数据生成个性化建议：

学习统计：
- 已学单词数：${userStats.totalWords || 0}
- 正确率：${userStats.accuracy || 0}%
- 薄弱单词：${userStats.weakWords?.join('、') || '暂无'}
- 连续学习天数：${userStats.streak || 0}
- 薄弱环节：${userStats.weakPoint || '暂无明显薄弱'}

请生成包含以下内容的建议：
1. 【学习计划】适合今天的具体学习安排
2. 【薄弱项建议】如何加强薄弱环节
3. 【记忆技巧】针对薄弱单词的记忆方法
4. 【激励语】鼓励性的话语

语言风格：亲切、鼓励、具体，适合中学生阅读。
字数：200字以内。
`;
  }

  /**
   * 解析 AI 响应中的行动项
   */
  parseAIActions(response) {
    const actions = [];

    // 简单解析 - 实际项目中可以更复杂
    if (response.includes('复习')) {
      actions.push({ type: 'review' });
    }
    if (response.includes('新单词') || response.includes('学习')) {
      actions.push({ type: 'learn' });
    }
    if (response.includes('练习')) {
      actions.push({ type: 'practice' });
    }

    return actions.length > 0 ? actions : [{ type: 'continue' }];
  }

  /**
   * 生成本地建议（无 AI 时使用）
   */
  generateLocalSuggestion(userStats) {
    const { accuracy = 0, totalWords = 0 } = userStats;

    let content = '';
    if (accuracy >= 90) {
      content = '太棒了！正确率超过90%，你已经掌握了大部分单词！' +
        '建议继续挑战更多新单词，保持学习热情。';
    } else if (accuracy >= 70) {
      content = '正确率不错！建议每天复习薄弱单词，' +
        '坚持几天后正确率会有明显提升。';
    } else if (accuracy >= 50) {
      content = '正确率还有提升空间。建议减少新单词学习，' +
        '多花时间复习已学单词，打好基础很重要。';
    } else {
      content = '别灰心！建议从简单的单词开始，每天学习少量新单词，' +
        '同时复习之前学过的内容，慢慢积累。';
    }

    return {
      wordId: 'local_suggestion',
      plan: {
        title: '学习建议',
        content,
        actions: [
          { type: accuracy >= 70 ? 'learn' : 'review' }
        ]
      }
    };
  }

  /**
   * 完整分析并生成所有建议
   * @returns {Promise<Object>} 综合分析结果
   */
  async generateFullAnalysis() {
    const masteryData = await this.getMasteryData();
    const weakWords = await this.getWeakWords();
    const errorPatterns = await this.getErrorPatterns();

    // 计算统计数据
    const stats = {
      totalWords: masteryData.length,
      accuracy: this.calculateAccuracy(masteryData),
      weakWords: weakWords.slice(0, 10).map(w => w.wordId),
      weakPoint: this.getWeakestErrorType(),
      errorDistribution: this.analyzeErrorTypes(),
      streak: this.studentProfile?.getLearningBehavior()?.streakDays || 0
    };

    // 生成各类建议
    const dailyPlan = await this.generateDailyPlan();
    const weakPointSuggestion = await this.generateWeakPointSuggestion();
    const rhythmSuggestion = await this.generateRhythmSuggestion();
    const reviewOptimization = await this.generateReviewOptimization();

    return {
      stats,
      suggestions: {
        dailyPlan,
        weakPoint: weakPointSuggestion,
        rhythm: rhythmSuggestion,
        review: reviewOptimization
      }
    };
  }

  /**
   * 计算整体正确率
   */
  calculateAccuracy(masteryData) {
    if (!masteryData || masteryData.length === 0) return 0;

    let totalCorrect = 0;
    let totalAttempts = 0;

    masteryData.forEach(m => {
      totalCorrect += m.correct || 0;
      totalAttempts += (m.correct || 0) + (m.errors || 0);
    });

    return totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
  }

  /**
   * 分析复习计划
   */
  analyzeReviewSchedule(masteryData) {
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    const oneWeek = 7 * oneDay;

    let dueToday = 0;
    let dueThisWeek = 0;

    masteryData.forEach(m => {
      if (!m.nextReview) return;

      const nextReview = new Date(m.nextReview).getTime();
      if (nextReview <= now) {
        dueToday++;
        dueThisWeek++;
      } else if (nextReview <= now + oneWeek) {
        dueThisWeek++;
      }
    });

    return { dueToday, dueThisWeek };
  }

  /**
   * 获取错误类型中文名称
   */
  _getErrorTypeName(type) {
    const names = {
      phonetic: '发音',
      meaning: '词义',
      spelling: '拼写',
      grammar: '语法'
    };
    return names[type] || '综合';
  }

  /**
   * 清除缓存
   */
  clearCache() {
    this.cache.clear();
  }
}

// 创建并导出全局实例
window.personalizedSuggestions = new PersonalizedSuggestions();

// 导出类
export { PersonalizedSuggestions };
