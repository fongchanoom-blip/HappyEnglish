/**
 * 成就系统模块
 * 提供完整的成就徽章管理、进度跟踪和通知系统
 */

/**
 * 成就定义
 */
const ACHIEVEMENTS = {
  // ========== 学习成就 ==========
  learning: [
    {
      id: 'first_word',
      name: '初次学习',
      icon: '🎯',
      category: 'learning',
      description: '学习第一个单词',
      condition: (ctx) => ctx.wordsLearned >= 1,
      progress: (ctx) => ({ current: Math.min(ctx.wordsLearned, 1), target: 1 }),
      points: 20
    },
    {
      id: 'words_10',
      name: '单词新手',
      icon: '📚',
      category: 'learning',
      description: '学习10个单词',
      condition: (ctx) => ctx.wordsLearned >= 10,
      progress: (ctx) => ({ current: Math.min(ctx.wordsLearned, 10), target: 10 }),
      points: 50
    },
    {
      id: 'words_50',
      name: '单词达人',
      icon: '📖',
      category: 'learning',
      description: '学习50个单词',
      condition: (ctx) => ctx.wordsLearned >= 50,
      progress: (ctx) => ({ current: Math.min(ctx.wordsLearned, 50), target: 50 }),
      points: 100
    },
    {
      id: 'words_100',
      name: '词汇积累者',
      icon: '🎓',
      category: 'learning',
      description: '学习100个单词',
      condition: (ctx) => ctx.wordsLearned >= 100,
      progress: (ctx) => ({ current: Math.min(ctx.wordsLearned, 100), target: 100 }),
      points: 200
    },
    {
      id: 'words_500',
      name: '词汇大师',
      icon: '👑',
      category: 'learning',
      description: '学习500个单词',
      condition: (ctx) => ctx.wordsLearned >= 500,
      progress: (ctx) => ({ current: Math.min(ctx.wordsLearned, 500), target: 500 }),
      points: 500
    },
    {
      id: 'mastery_25',
      name: '初窥门径',
      icon: '🌱',
      category: 'learning',
      description: '掌握25个精通词',
      condition: (ctx) => ctx.masteredWords >= 25,
      progress: (ctx) => ({ current: Math.min(ctx.masteredWords, 25), target: 25 }),
      points: 100
    },
    {
      id: 'mastery_50',
      name: '学有小成',
      icon: '🌿',
      category: 'learning',
      description: '掌握50个精通词',
      condition: (ctx) => ctx.masteredWords >= 50,
      progress: (ctx) => ({ current: Math.min(ctx.masteredWords, 50), target: 50 }),
      points: 200
    },
    {
      id: 'mastery_75',
      name: '学有所成',
      icon: '🌳',
      category: 'learning',
      description: '掌握75个精通词',
      condition: (ctx) => ctx.masteredWords >= 75,
      progress: (ctx) => ({ current: Math.min(ctx.masteredWords, 75), target: 75 }),
      points: 300
    },
    {
      id: 'mastery_100',
      name: '精通百词',
      icon: '🏆',
      category: 'learning',
      description: '掌握100个精通词',
      condition: (ctx) => ctx.masteredWords >= 100,
      progress: (ctx) => ({ current: Math.min(ctx.masteredWords, 100), target: 100 }),
      points: 500
    }
  ],

  // ========== 连续成就 ==========
  streak: [
    {
      id: 'streak_3',
      name: '初露锋芒',
      icon: '🔥',
      category: 'streak',
      description: '连续学习3天',
      condition: (ctx) => ctx.streakDays >= 3,
      progress: (ctx) => ({ current: Math.min(ctx.streakDays, 3), target: 3 }),
      points: 50
    },
    {
      id: 'streak_7',
      name: '持之以恒',
      icon: '💪',
      category: 'streak',
      description: '连续学习7天',
      condition: (ctx) => ctx.streakDays >= 7,
      progress: (ctx) => ({ current: Math.min(ctx.streakDays, 7), target: 7 }),
      points: 100
    },
    {
      id: 'streak_14',
      name: '坚持不懈',
      icon: '⭐',
      category: 'streak',
      description: '连续学习14天',
      condition: (ctx) => ctx.streakDays >= 14,
      progress: (ctx) => ({ current: Math.min(ctx.streakDays, 14), target: 14 }),
      points: 200
    },
    {
      id: 'streak_30',
      name: '坚持不懈',
      icon: '🌟',
      category: 'streak',
      description: '连续学习30天',
      condition: (ctx) => ctx.streakDays >= 30,
      progress: (ctx) => ({ current: Math.min(ctx.streakDays, 30), target: 30 }),
      points: 500
    },
    {
      id: 'streak_7_weekly',
      name: '周末学习者',
      icon: '🌈',
      category: 'streak',
      description: '连续7个周末都在学习',
      condition: (ctx) => ctx.weekendStreak >= 7,
      progress: (ctx) => ({ current: Math.min(ctx.weekendStreak, 7), target: 7 }),
      points: 150
    }
  ],

  // ========== 准确率成就 ==========
  accuracy: [
    {
      id: 'accuracy_80',
      name: '高正确率',
      icon: '🎯',
      category: 'accuracy',
      description: '总体正确率达到80%',
      condition: (ctx) => ctx.totalAnswers >= 20 && ctx.accuracy >= 80,
      progress: (ctx) => ({ current: ctx.accuracy, target: 80 }),
      points: 100
    },
    {
      id: 'accuracy_90',
      name: '卓越表现',
      icon: '💯',
      category: 'accuracy',
      description: '总体正确率达到90%',
      condition: (ctx) => ctx.totalAnswers >= 50 && ctx.accuracy >= 90,
      progress: (ctx) => ({ current: ctx.accuracy, target: 90 }),
      points: 200
    },
    {
      id: 'accuracy_95',
      name: '近乎完美',
      icon: '✨',
      category: 'accuracy',
      description: '总体正确率达到95%',
      condition: (ctx) => ctx.totalAnswers >= 100 && ctx.accuracy >= 95,
      progress: (ctx) => ({ current: ctx.accuracy, target: 95 }),
      points: 300
    },
    {
      id: 'perfect_round',
      name: '满分一轮',
      icon: '🌟',
      category: 'accuracy',
      description: '连续答对10题完成一轮',
      condition: (ctx) => ctx.maxStreak >= 10,
      progress: (ctx) => ({ current: Math.min(ctx.maxStreak, 10), target: 10 }),
      points: 100
    }
  ],

  // ========== 探索成就 ==========
  exploration: [
    {
      id: 'use_hint_free',
      name: '独立完成',
      icon: '💡',
      category: 'exploration',
      description: '不使用提示完成一次测试',
      condition: (ctx) => ctx.noHintRounds >= 1,
      progress: (ctx) => ({ current: Math.min(ctx.noHintRounds, 1), target: 1 }),
      points: 50
    },
    {
      id: 'fast_learner',
      name: '速学者',
      icon: '⚡',
      category: 'exploration',
      description: '5分钟内答对5题',
      condition: (ctx) => ctx.fastAnswers >= 5,
      progress: (ctx) => ({ current: Math.min(ctx.fastAnswers, 5), target: 5 }),
      points: 100
    },
    {
      id: 'explore_all',
      name: '探索者',
      icon: '🔍',
      category: 'exploration',
      description: '使用过所有学习功能',
      condition: (ctx) => ctx.featuresUsed >= 5,
      progress: (ctx) => ({ current: Math.min(ctx.featuresUsed, 5), target: 5 }),
      points: 100
    }
  ],

  // ========== AI互动成就 ==========
  aiInteraction: [
    {
      id: 'ask_companion',
      name: '初次对话',
      icon: '💬',
      category: 'ai',
      description: '向学习伙伴提问',
      condition: (ctx) => ctx.companionChats >= 1,
      progress: (ctx) => ({ current: Math.min(ctx.companionChats, 1), target: 1 }),
      points: 30
    },
    {
      id: 'use_story',
      name: '故事爱好者',
      icon: '📚',
      category: 'ai',
      description: '使用语境故事功能',
      condition: (ctx) => ctx.storiesUsed >= 3,
      progress: (ctx) => ({ current: Math.min(ctx.storiesUsed, 3), target: 3 }),
      points: 80
    },
    {
      id: 'deep_conversation',
      name: '深入交流',
      icon: '🤝',
      category: 'ai',
      description: '与学习伙伴进行5次对话',
      condition: (ctx) => ctx.companionChats >= 5,
      progress: (ctx) => ({ current: Math.min(ctx.companionChats, 5), target: 5 }),
      points: 100
    },
    {
      id: 'story_master',
      name: '故事大师',
      icon: '📖',
      category: 'ai',
      description: '使用语境故事10次',
      condition: (ctx) => ctx.storiesUsed >= 10,
      progress: (ctx) => ({ current: Math.min(ctx.storiesUsed, 10), target: 10 }),
      points: 200
    }
  ]
};

// 所有成就类别名称（中文）
const CATEGORY_NAMES = {
  learning: '学习成就',
  streak: '连续成就',
  accuracy: '准确率成就',
  exploration: '探索成就',
  ai: 'AI互动成就'
};

/**
 * 成就系统类
 */
class AchievementSystem {
  constructor() {
    this.achievements = {};
    this.unlockedAchievements = [];
    this.unlockedTimes = {};
    this.context = this.createEmptyContext();

    this.load();
  }

  /**
   * 创建空的上下文对象
   */
  createEmptyContext() {
    return {
      wordsLearned: 0,
      masteredWords: 0,
      streakDays: 0,
      weekendStreak: 0,
      accuracy: 0,
      totalAnswers: 0,
      correctAnswers: 0,
      maxStreak: 0,
      noHintRounds: 0,
      fastAnswers: 0,
      featuresUsed: 0,
      companionChats: 0,
      storiesUsed: 0
    };
  }

  /**
   * 从 localStorage 加载数据
   */
  load() {
    try {
      const data = localStorage.getItem('achievement_data');
      if (data) {
        const parsed = JSON.parse(data);
        this.unlockedAchievements = parsed.unlocked || [];
        this.unlockedTimes = parsed.unlockedTimes || {};
        this.context = { ...this.createEmptyContext(), ...parsed.context };
      }
    } catch (e) {
      console.error('加载成就数据失败:', e);
    }
  }

  /**
   * 保存数据到 localStorage
   */
  save() {
    try {
      const data = {
        unlocked: this.unlockedAchievements,
        unlockedTimes: this.unlockedTimes,
        context: this.context
      };
      localStorage.setItem('achievement_data', JSON.stringify(data));
    } catch (e) {
      console.error('保存成就数据失败:', e);
    }
  }

  /**
   * 获取所有成就（扁平化）
   */
  getAllAchievements() {
    const all = [];
    for (const category in ACHIEVEMENTS) {
      all.push(...ACHIEVEMENTS[category]);
    }
    return all;
  }

  /**
   * 按类别获取成就
   */
  getAchievementsByCategory(category) {
    return ACHIEVEMENTS[category] || [];
  }

  /**
   * 获取所有类别
   */
  getCategories() {
    return Object.keys(ACHIEVEMENTS).map(key => ({
      id: key,
      name: CATEGORY_NAMES[key] || key,
      achievements: ACHIEVEMENTS[key]
    }));
  }

  /**
   * 检查是否已解锁某个成就
   */
  isUnlocked(achievementId) {
    return this.unlockedAchievements.includes(achievementId);
  }

  /**
   * 获取成就的解锁时间
   */
  getUnlockedTime(achievementId) {
    return this.unlockedTimes[achievementId] || null;
  }

  /**
   * 更新上下文数据
   * @param {Object} data - 要更新的数据
   */
  updateContext(data) {
    this.context = { ...this.context, ...data };
    this.save();
    this.checkUnlocks();
  }

  /**
   * 批量更新上下文数据
   * @param {Object} data - 要更新的数据
   */
  updateContextBatch(data) {
    // 处理计数类数据
    for (const key in data) {
      if (typeof data[key] === 'number' && key.startsWith('add_')) {
        const actualKey = key.replace('add_', '');
        this.context[actualKey] = (this.context[actualKey] || 0) + data[key];
      } else {
        this.context[key] = data[key];
      }
    }
    this.save();
    this.checkUnlocks();
  }

  /**
   * 检查并解锁新成就
   */
  checkUnlocks() {
    const all = this.getAllAchievements();
    const newlyUnlocked = [];

    for (const achievement of all) {
      if (!this.isUnlocked(achievement.id) && achievement.condition(this.context)) {
        this.unlock(achievement, newlyUnlocked);
      }
    }

    return newlyUnlocked;
  }

  /**
   * 解锁成就
   * @param {Object} achievement - 成就对象
   * @param {Array} batch - 批量解锁列表（用于通知）
   */
  unlock(achievement, batch = []) {
    if (this.isUnlocked(achievement.id)) return;

    this.unlockedAchievements.push(achievement.id);
    this.unlockedTimes[achievement.id] = new Date().toISOString();
    this.save();

    batch.push(achievement);

    // 触发事件
    this.triggerUnlock(achievement);

    // 触发学习伙伴的成就事件
    if (window.learningCompanion) {
      window.learningCompanion.triggerAchievement({
        achievement: achievement.id,
        details: achievement
      });
    }
  }

  /**
   * 触发成就解锁事件
   */
  triggerUnlock(achievement) {
    const event = new CustomEvent('achievement-unlocked', {
      detail: achievement
    });
    window.dispatchEvent(event);
  }

  /**
   * 获取成就进度
   */
  getProgress(achievementId) {
    const all = this.getAllAchievements();
    const achievement = all.find(a => a.id === achievementId);

    if (!achievement) return null;

    const progress = achievement.progress(this.context);
    return {
      ...achievement,
      progress,
      isUnlocked: this.isUnlocked(achievementId),
      unlockedTime: this.getUnlockedTime(achievementId)
    };
  }

  /**
   * 获取所有成就的进度
   */
  getAllProgress() {
    const all = this.getAllAchievements();
    return all.map(a => this.getProgress(a.id));
  }

  /**
   * 按类别获取成就进度
   */
  getProgressByCategory(category) {
    const achievements = this.getAchievementsByCategory(category);
    return achievements.map(a => this.getProgress(a.id));
  }

  /**
   * 获取统计信息
   */
  getStats() {
    const total = this.getAllAchievements().length;
    const unlocked = this.unlockedAchievements.length;

    return {
      total,
      unlocked,
      locked: total - unlocked,
      percentage: total > 0 ? Math.round((unlocked / total) * 100) : 0,
      totalPoints: this.getTotalPoints(),
      earnedPoints: this.getEarnedPoints()
    };
  }

  /**
   * 获取总积分（所有成就）
   */
  getTotalPoints() {
    const all = this.getAllAchievements();
    return all.reduce((sum, a) => sum + (a.points || 0), 0);
  }

  /**
   * 获取已获得积分
   */
  getEarnedPoints() {
    return this.unlockedAchievements.reduce((sum, id) => {
      const all = this.getAllAchievements();
      const achievement = all.find(a => a.id === id);
      return sum + (achievement?.points || 0);
    }, 0);
  }

  /**
   * 获取最近解锁的成就
   */
  getRecentlyUnlocked(limit = 5) {
    const entries = Object.entries(this.unlockedTimes)
      .sort((a, b) => new Date(b[1]) - new Date(a[1]))
      .slice(0, limit);

    return entries.map(([id, time]) => {
      const progress = this.getProgress(id);
      return { ...progress, unlockedTime: time };
    }).filter(Boolean);
  }

  /**
   * 重置成就数据
   */
  reset() {
    this.unlockedAchievements = [];
    this.unlockedTimes = {};
    this.context = this.createEmptyContext();
    this.save();
  }

  // ==================== 便捷方法 ====================

  /**
   * 单词学习完成
   */
  onWordLearned() {
    this.updateContextBatch({ add_wordsLearned: 1 });
  }

  /**
   * 单词达到精通
   */
  onWordMastered() {
    this.updateContextBatch({ add_masteredWords: 1 });
  }

  /**
   * 更新连续学习天数
   */
  onStreakUpdate(streakDays) {
    this.updateContext({ streakDays });
  }

  /**
   * 更新周末学习连续天数
   */
  onWeekendStreakUpdate(weekendStreak) {
    this.updateContext({ weekendStreak });
  }

  /**
   * 更新准确率统计
   */
  onAnswerRecorded(correct, total) {
    this.updateContext({
      correctAnswers: correct,
      totalAnswers: total,
      accuracy: total > 0 ? Math.round((correct / total) * 100) : 0
    });
  }

  /**
   * 更新最高连击
   */
  onStreakRecord(maxStreak) {
    this.updateContext({ maxStreak });
  }

  /**
   * 完成不使用提示的轮次
   */
  onNoHintRound() {
    this.updateContextBatch({ add_noHintRounds: 1 });
  }

  /**
   * 快速答题（5分钟内答对）
   */
  onFastAnswer() {
    this.updateContextBatch({ add_fastAnswers: 1 });
  }

  /**
   * 使用新功能
   */
  onFeatureUsed() {
    this.updateContextBatch({ add_featuresUsed: 1 });
  }

  /**
   * 与学习伙伴对话
   */
  onCompanionChat() {
    this.updateContextBatch({ add_companionChats: 1 });
  }

  /**
   * 使用语境故事
   */
  onStoryUsed() {
    this.updateContextBatch({ add_storiesUsed: 1 });
  }
}

// 创建单例实例
const achievementSystem = new AchievementSystem();

// 导出到全局
window.achievementSystem = achievementSystem;
window.ACHIEVEMENTS = ACHIEVEMENTS;
window.CATEGORY_NAMES = CATEGORY_NAMES;

// 监听学习伙伴的成就事件，显示通知
if (typeof window !== 'undefined') {
  window.addEventListener('achievement-unlocked', function(e) {
    const achievement = e.detail;
    // 如果有 app 实例，显示 toast
    if (window.app && window.app.showToast) {
      window.app.showToast(`🎉 解锁成就：${achievement.name}`);
    }
  });
}

/**
 * 成就通知动画组件
 */
class AchievementNotification {
  constructor() {
    this.container = null;
    this.init();
  }

  init() {
    // 创建通知容器
    this.container = document.createElement('div');
    this.container.id = 'achievement-notifications';
    this.container.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10000;
      pointer-events: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    `;
    document.body.appendChild(this.container);

    // 监听成就解锁事件
    window.addEventListener('achievement-unlocked', (e) => {
      this.show(e.detail);
    });
  }

  show(achievement) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.style.cssText = `
      background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
      color: #333;
      padding: 16px 24px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(255, 165, 0, 0.4);
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      animation: achievement-slide-in 0.5s ease-out;
      pointer-events: auto;
    `;

    notification.innerHTML = `
      <span style="font-size: 32px;">${achievement.icon}</span>
      <div>
        <div style="font-size: 14px; opacity: 0.8;">成就解锁</div>
        <div style="font-size: 18px; font-weight: 600;">${achievement.name}</div>
      </div>
    `;

    this.container.appendChild(notification);

    // 添加动画样式
    if (!document.getElementById('achievement-animations')) {
      const style = document.createElement('style');
      style.id = 'achievement-animations';
      style.textContent = `
        @keyframes achievement-slide-in {
          0% { opacity: 0; transform: translateY(-20px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes achievement-slide-out {
          0% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-20px) scale(0.8); }
        }
        @keyframes achievement-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `;
      document.head.appendChild(style);
    }

    // 自动移除
    setTimeout(() => {
      notification.style.animation = 'achievement-slide-out 0.5s ease-out forwards';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 500);
    }, 3000);
  }
}

// 初始化通知组件
window.achievementNotification = new AchievementNotification();

export { achievementSystem, ACHIEVEMENTS, CATEGORY_NAMES };