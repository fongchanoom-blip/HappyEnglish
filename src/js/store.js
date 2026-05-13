/**
 * 状态管理模块
 * 管理用户状态、积分、徽章等数据
 */

// 导入奖励系统模块
import { REWARDS, checkBadges, calculateLevel, calculateSegment, BADGES, getStreakReward } from './rewards.js';

// 导出给其他模块使用
export { REWARDS, checkBadges, calculateLevel, calculateSegment, BADGES, getStreakReward };

// 用户状态
const userState = {
  // 积分相关
  points: 0,
  level: 1,
  segment: '青铜',

  // 徽章相关
  earnedBadges: [],

  // 统计数据
  stats: {
    totalTests: 0,
    maxStreak: 0,
    masterCount: 0,
    totalWords: 0,
    totalPoints: 0,
    accuracy: 0,
    perfectRounds: 0
  },

  // 加载保存的数据
  load() {
    try {
      const savedPoints = localStorage.getItem('happyenglish_points');
      const savedBadges = localStorage.getItem('happyenglish_badges');
      const savedStats = localStorage.getItem('happyenglish_stats');

      if (savedPoints) {
        this.points = parseInt(savedPoints, 10) || 0;
        this.level = calculateLevel(this.points);
        this.segment = calculateSegment(this.level);
      }

      if (savedBadges) {
        this.earnedBadges = JSON.parse(savedBadges) || [];
      }

      if (savedStats) {
        this.stats = { ...this.stats, ...JSON.parse(savedStats) };
      }
    } catch (e) {
      console.error('加载数据失败', e);
    }
  },

  // 保存数据
  save() {
    try {
      localStorage.setItem('happyenglish_points', this.points.toString());
      localStorage.setItem('happyenglish_badges', JSON.stringify(this.earnedBadges));
      localStorage.setItem('happyenglish_stats', JSON.stringify(this.stats));
    } catch (e) {
      console.error('保存数据失败', e);
    }
  },

  // 添加积分
  addPoints(delta, showToast = true) {
    this.points += delta;
    this.stats.totalPoints += delta;

    // 检查升级
    const newLevel = calculateLevel(this.points);
    if (newLevel > this.level) {
      this.level = newLevel;
      this.segment = calculateSegment(this.level);
      if (showToast && window.app) {
        window.app.showToast(`升级！现在是 Lv.${newLevel} ${this.segment}`);
      }
    }

    this.save();
  },

  // 获取答对奖励（根据词汇等级）
  getCorrectReward(wordLevel) {
    return REWARDS.correct[wordLevel] || 10;
  },

  // 更新连击
  updateStreak(correct, onStreakReward = null) {
    if (correct) {
      this.stats.maxStreak++;
      this.save();

      // 检查连击奖励
      const streakReward = getStreakReward(this.stats.maxStreak);
      if (streakReward > 0 && onStreakReward) {
        onStreakReward(streakReward);
      }
    }
    return this.stats.maxStreak;
  },

  // 答对加分
  onCorrectAnswer(wordLevel, correctStreak = 0) {
    const reward = this.getCorrectReward(wordLevel);
    this.addPoints(reward);

    // 检查连击奖励
    const streakReward = getStreakReward(correctStreak);
    if (streakReward > 0) {
      setTimeout(() => {
        if (window.app) {
          window.app.showToast(`连击奖励 +${streakReward} 分！`);
        }
      }, 100);
      this.addPoints(streakReward, false);
    }

    return reward;
  },

  // 完成一轮测试
  onRoundComplete() {
    this.addPoints(REWARDS.roundComplete);
  },

  // 记录一次测试
  onTestComplete(correct, wordLevel) {
    this.stats.totalTests++;

    if (correct) {
      this.stats.maxStreak++;
    }

    this.save();
  },

  // 检查徽章解锁
  checkBadgesUnlock() {
    const newBadges = checkBadges(this.stats, this.earnedBadges);
    newBadges.forEach(badge => {
      this.earnedBadges.push(badge.id);
      this.addPoints(REWARDS.badgeUnlock);
      if (window.app) {
        window.app.showToast(`获得徽章：${badge.name}`);
      }
    });
    this.save();
    return newBadges;
  },

  // 更新统计数据
  updateStats(data) {
    this.stats = { ...this.stats, ...data };
    this.save();

    // 检查徽章
    this.checkBadgesUnlock();
  },

  // 获取等级进度（到下一级还需要多少分）
  getLevelProgress() {
    const currentLevelPoints = (this.level - 1) * 100;
    const nextLevelPoints = this.level * 100;
    const progress = this.points - currentLevelPoints;
    const needed = nextLevelPoints - this.points;
    return { progress, needed, total: 100 };
  },

  // 重置数据
  reset() {
    this.points = 0;
    this.level = 1;
    this.segment = '青铜';
    this.earnedBadges = [];
    this.stats = {
      totalTests: 0,
      maxStreak: 0,
      masterCount: 0,
      totalWords: 0,
      totalPoints: 0,
      accuracy: 0,
      perfectRounds: 0
    };
    this.save();
  }
};

// 页面加载完成后加载数据
document.addEventListener('DOMContentLoaded', function() {
  userState.load();
});

// 导出到全局
window.userState = userState;
window.REWARDS = REWARDS;
window.BADGES = BADGES;

/**
 * ============================================
 * 学生画像接口定义
 * ============================================
 */

/**
 * 学生画像数据结构
 * @typedef {Object} StudentProfile
 * @property {string} studentId - 学生唯一标识
 * @property {Object} vocabularyMastery - 词汇掌握度映射 {wordId: MasteryState}
 * @property {ErrorPattern[]} weakPatterns - 弱项错误模式
 * @property {LearningBehavior} learningBehavior - 学习行为数据
 * @property {Date} createdAt - 创建时间
 * @property {Date} updatedAt - 更新时间
 */

/**
 * 单词掌握状态
 * @typedef {Object} MasteryState
 * @property {string} wordId - 单词ID
 * @property {number} known - 掌握度 0-1
 * @property {number} recall - 回忆率 0-1
 * @property {Date} lastReview - 上次复习时间
 * @property {Date} nextReview - 下次复习时间
 * @property {number} interval - 复习间隔（天）
 * @property {number} errors - 错误次数
 * @property {number} correct - 正确次数
 * @property {number} total - 总练习次数
 */

/**
 * 错误模式
 * @typedef {Object} ErrorPattern
 * @property {number} id - 错误记录ID
 * @property {'phonetic'|'meaning'|'spelling'|'grammar'} type - 错误类型
 * @property {string} wordId - 单词ID
 * @property {string} wrongAnswer - 错误答案
 * @property {number} count - 错误次数
 * @property {Date} lastError - 上次错误时间
 */

/**
 * 学习行为数据
 * @typedef {Object} LearningBehavior
 * @property {number} totalStudyTime - 总学习时间（分钟）
 * @property {number} dailyStudyTime - 今日学习时间（分钟）
 * @property {number} streakDays - 连续学习天数
 * @property {Date} lastStudyDate - 最后学习日期
 * @property {Object} studyDistribution - 学习时间分布 {hour: count}
 * @property {string[]} preferredTimes - 偏好学习时段
 */