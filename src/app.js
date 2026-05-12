/**
 * HappyEnglish - 中考英语备考小程序
 *
 * 复用自：小树识字项目
 * 适用：初中生中考英语备考
 */

App({
  onLaunch() {
    console.log('HappyEnglish 小程序启动');
    this.loadUserData();
  },

  globalData: {
    userInfo: null,

    // 学习进度
    learningProgress: {
      words: {},      // 词汇进度
      grammar: {},    // 语法进度
      questions: {}     // 题目进度
    },

    // 当前状态
    currentWord: null,
    currentQuestion: null,

    // 统计数据
    totalWords: 1600,     // 核心词汇量
    totalGrammar: 50,      // 语法知识点
    learnedWords: 0,
    masteredWords: 0,
    accuracy: 0,           // 正确率
    totalPractice: 0       // 练习总数
  },

  /**
   * 加载用户数据
   */
  loadUserData() {
    try {
      const userInfo = wx.getStorageSync('userInfo');
      const progress = wx.getStorageSync('learningProgress');
      const stats = wx.getStorageSync('dailyStats');

      if (userInfo) {
        this.globalData.userInfo = userInfo;
      }
      if (progress) {
        this.globalData.learningProgress = progress;
      }
      if (stats) {
        this.updateDailyStats(stats);
      }

      this.updateLearnedCount();
    } catch (e) {
      console.error('加载用户数据失败', e);
    }
  },

  /**
   * 更新学习统计
   */
  updateLearnedCount() {
    const progress = this.globalData.learningProgress;
    let learned = 0;
    let mastered = 0;
    let total = 0;
    let correct = 0;

    // 统计词汇
    for (let wordId in progress.words) {
      total++;
      if (progress.words[wordId].status === 'mastered') {
        mastered++;
        learned++;
      } else if (progress.words[wordId].status === 'learning') {
        learned++;
      }
      correct += progress.words[wordId].correctCount || 0;
    }

    this.globalData.learnedWords = learned;
    this.globalData.masteredWords = mastered;
    this.globalData.totalWords = total;

    // 计算正确率
    const totalPractice = progress.words.totalPractice || 0;
    if (totalPractice > 0) {
      this.globalData.accuracy = Math.round((correct / totalPractice) * 100);
    }
  },

  /**
   * 更新每日统计
   */
  updateDailyStats(stats) {
    const today = new Date().toDateString();
    if (stats.date !== today) {
      // 新的一天，重置统计
      wx.setStorageSync('dailyStats', {
        date: today,
        wordsLearned: 0,
        questionsDone: 0,
        accuracy: 0,
        timeSpent: 0
      });
    }
  },

  /**
   * 保存学习进度
   */
  saveProgress() {
    try {
      wx.setStorageSync('learningProgress', this.globalData.learningProgress);
    } catch (e) {
      console.error('保存进度失败', e);
    }
  },

  /**
   * 记录单词学习
   */
  recordWordLearn(wordId, result) {
    const progress = this.globalData.learningProgress;
    if (!progress.words[wordId]) {
      progress.words[wordId] = {
        status: 'new',
        correctCount: 0,
        wrongCount: 0,
        lastReviewAt: null,
        reviewCount: 0,
        nextReviewAt: null
      };
    }

    const wordProgress = progress.words[wordId];

    if (result.correct) {
      wordProgress.correctCount = (wordProgress.correctCount || 0) + 1;
      wordProgress.lastAnswerCorrect = true;
    } else {
      wordProgress.wrongCount = (wordProgress.wrongCount || 0) + 1;
      wordProgress.lastAnswerCorrect = false;
      wordProgress.mistakeCount = (wordProgress.mistakeCount || 0) + 1;
    }

    // 更新状态
    const total = (wordProgress.correctCount || 0) + (wordProgress.wrongCount || 0);
    const accuracy = total > 0 ? (wordProgress.correctCount / total) * 100 : 0;

    if (accuracy >= 80 && total >= 3) {
      wordProgress.status = 'mastered';
      wordProgress.masteredAt = Date.now();
    } else if (total >= 1) {
      wordProgress.status = 'learning';
    }

    this.saveProgress();
    this.updateLearnedCount();
  },

  /**
   * 记录每日统计
   */
  recordDailyStat(type, value) {
    const stats = wx.getStorageSync('dailyStats') || {
      date: new Date().toDateString(),
      wordsLearned: 0,
      questionsDone: 0,
      accuracy: 0,
      timeSpent: 0
    };

    if (type === 'word') {
      stats.wordsLearned += value;
    } else if (type === 'question') {
      stats.questionsDone += value;
    } else if (type === 'time') {
      stats.timeSpent += value;
    }

    wx.setStorageSync('dailyStats', stats);
  }
})