// Vue响应式状态管理
const { createApp, ref, computed } = Vue;

// 导入掌握度模块 - 使用动态导入
let getWordsByLevel, calculateWordLevel;

const store = {
  // 用户状态
  user: null,
  points: 0,
  level: 1,
  streak: 0,
  maxStreak: 0,

  // 学习状态
  learnedWords: 0,
  masteredWords: 0,
  accuracy: 0,

  // 徽章
  badges: [],
  earnedBadges: [],

  // 词汇掌握等级
  wordLevels: {},

  // 方法
  init() {
    // 加载存储的数据
    this.load();
  },

  load() {
    try {
      const progress = app.getProgress();
      this.streak = progress.streak || 0;

      // 计算学习统计
      const words = progress.words || {};
      let total = 0, correct = 0;
      for (let wordId in words) {
        total++;
        correct += words[wordId].correctCount || 0;
      }
      this.learnedWords = Object.keys(words).length;
      this.accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    } catch (e) {
      console.error('加载存储失败', e);
    }
  },

  addPoints(delta) {
    this.points += delta;
    // 检查升级
    const newLevel = Math.floor(this.points / 100) + 1;
    if (newLevel > this.level) {
      this.level = newLevel;
      this.showLevelUp();
    }
  },

  updateStreak(correct) {
    if (correct) {
      this.streak++;
      if (this.streak > this.maxStreak) {
        this.maxStreak = this.streak;
      }
    } else {
      this.streak = 0;
    }
  },

  showLevelUp() {
    app.showToast('升级到 Lv.' + this.level + '！');
  },

  showToast(message) {
    app.showToast(message);
  },

  // 获取所有词汇的等级分布
  getLevelDistribution() {
    const progress = app.getProgress();
    const words = progress.words || {};

    const levels = { master: 0, familiar: 0, weak: 0, unknown: 0 };
    const allWords = window.vocabulary?.words || [];

    // 统计有进度的词
    allWords.forEach(word => {
      const wordProgress = words[word.id];
      if (wordProgress) {
        const level = calculateWordLevel ? calculateWordLevel(wordProgress) : 'unknown';
        levels[level]++;
      }
    });

    return {
      master: levels.master,
      familiar: levels.familiar,
      weak: levels.weak,
      unknown: levels.unknown,
      total: allWords.length
    };
  }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  store.init();
});

// 导出到全局
window.store = store;