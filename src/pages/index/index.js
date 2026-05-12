/**
 * HappyEnglish - 首页
 * 中考英语备考学习入口
 */

const app = getApp();
const vocabulary = require('../../data/vocabulary.js');

Page({
  data: {
    // 学习模式
    studyModes: [
      { id: 'word', name: '词汇学习', icon: 'book', desc: '1600核心词汇', color: '#4A90D9' },
      { id: 'grammar', name: '语法专练', icon: 'document', desc: '50个语法点', color: '#67C23A' },
      { id: 'practice', name: '真题练习', icon: 'edit', desc: '中考真题训练', color: '#E6A23C' },
      { id: 'wrong', name: '错题本', icon: 'warning', desc: '查漏补缺', color: '#F56C6C' }
    ],

    // 学习进度
    progress: {
      wordsLearned: 0,
      wordsTotal: 1600,
      grammarLearned: 0,
      grammarTotal: 15,
      accuracy: 0,
      streak: 0
    },

    // 每日目标
    dailyGoal: {
      words: 20,
      completed: 0
    },

    // 快捷入口
    quickLinks: [
      { text: '今日复习', count: 0, path: '/pages/review/review' },
      { text: '待掌握', count: 0, path: '/pages/words/words?filter=unmastered' },
      { text: '高频考点', count: 0, path: '/pages/words/words?filter=highfreq' }
    ],

    // 鼓励语
    encouragement: '',

    // 统计数据
    stats: {
      todayWords: 0,
      todayTime: 0,
      totalTime: 0
    }
  },

  onLoad() {
    this.loadProgress();
    this.setEncouragement();
  },

  onShow() {
    this.loadProgress();
  },

  // 加载学习进度
  loadProgress() {
    const globalData = app.globalData;
    const progress = globalData.learningProgress;

    // 计算词汇进度
    const wordsLearned = Object.keys(progress.words || {}).length;
    const masteredWords = Object.values(progress.words || {}).filter(w => w.status === 'mastered').length;

    // 获取今日统计
    const dailyStats = wx.getStorageSync('dailyStats') || {};
    const todayWords = dailyStats.wordsLearned || 0;

    this.setData({
      progress: {
        wordsLearned: globalData.learnedWords,
        wordsTotal: 1600,
        grammarLearned: globalData.grammarLearned || 0,
        grammarTotal: 15,
        accuracy: globalData.accuracy || 0,
        streak: globalData.streak || 0
      },
      dailyGoal: {
        words: 20,
        completed: todayWords
      },
      stats: {
        todayWords: todayWords,
        todayTime: dailyStats.timeSpent || 0,
        totalTime: globalData.totalTime || 0
      }
    });

    // 更新快捷入口数量
    this.updateQuickLinks(progress);
  },

  // 更新快捷入口
  updateQuickLinks(progress) {
    const reviewCount = this.getReviewCount(progress);
    const unmasteredCount = this.getUnmasteredCount(progress);

    this.setData({
      quickLinks: [
        { text: '今日复习', count: reviewCount, path: '/pages/review/review' },
        { text: '待掌握', count: unmasteredCount, path: '/pages/words/words?filter=unmastered' },
        { text: '高频考点', count: vocabulary.highFrequency.length, path: '/pages/words/words?filter=highfreq' }
      ]
    });
  },

  // 获取需要复习的数量
  getReviewCount(progress) {
    const now = Date.now();
    let count = 0;
    for (let wordId in progress.words) {
      const word = progress.words[wordId];
      if (word.nextReviewAt && word.nextReviewAt <= now) {
        count++;
      }
    }
    return count;
  },

  // 获取未掌握词汇数
  getUnmasteredCount(progress) {
    return Object.values(progress.words || {}).filter(w => w.status !== 'mastered').length;
  },

  // 设置鼓励语
  setEncouragement() {
    const phrases = [
      '每天进步一点点，中考必定成功！',
      '坚持学习，你比想象中更优秀！',
      '加油！胜利就在前方！',
      '掌握词汇距离梦想更近一步！',
      '努力的你最美！'
    ];
    const index = Math.floor(Math.random() * phrases.length);
    this.setData({ encouragement: phrases[index] });
  },

  // 选择学习模式
  onSelectMode(e) {
    const mode = e.currentTarget.dataset.mode;
    const routes = {
      word: '/pages/words/words',
      grammar: '/pages/grammar/grammar',
      practice: '/pages/practice/practice',
      wrong: '/pages/wrong/wrong'
    };

    wx.navigateTo({
      url: routes[mode] || '/pages/words/words'
    });
  },

  // 点击快捷入口
  onQuickLink(e) {
    const index = e.currentTarget.dataset.index;
    const link = this.data.quickLinks[index];
    if (link && link.path) {
      wx.navigateTo({ url: link.path });
    }
  },

  // 去学习
  goLearn() {
    // 智能推荐下一个学习内容
    const progress = app.globalData.learningProgress;
    const unmastered = this.getUnmasteredCount(progress);

    if (unmastered > 0) {
      wx.navigateTo({ url: '/pages/words/words?filter=unmastered' });
    } else {
      wx.navigateTo({ url: '/pages/words/words' });
    }
  },

  // 语音开始学习
  voiceLearn() {
    // 调用语音识别，识别"开始学习"
    const speech = require('../../services/speech.js');
    // 预留语音交互入口
    wx.showToast({ title: '语音功能开发中', icon: 'none' });
  },

  // 下拉刷新
  onPullDownRefresh() {
    this.loadProgress();
    wx.stopPullDownRefresh();
  }
});
