/**
 * 学习伙伴服务
 * 提供 AI 学习伙伴角色，增加学习趣味性和陪伴感
 */
class LearningCompanion {
  constructor() {
    this.name = '小英';
    this.level = parseInt(localStorage.getItem('companion_level') || '1');
    this.exp = parseInt(localStorage.getItem('companion_exp') || '0');
    this.mood = 'happy'; // happy, neutral, worried
    this.streak = parseInt(localStorage.getItem('companion_streak') || '0');
    this.milestones = this.loadMilestones();
    this.preferences = this.loadPreferences();

    // 事件系统
    this._eventHandlers = {};
  }

  // ========== 事件系统 ==========

  /**
   * 监听事件
   * @param {string} event - 事件名
   * @param {Function} handler - 回调函数
   */
  on(event, handler) {
    if (!this._eventHandlers[event]) {
      this._eventHandlers[event] = [];
    }
    this._eventHandlers[event].push(handler);
  }

  /**
   * 取消监听
   * @param {string} event - 事件名
   * @param {Function} handler - 回调函数
   */
  off(event, handler) {
    if (!this._eventHandlers[event]) return;
    this._eventHandlers[event] = this._eventHandlers[event].filter(h => h !== handler);
  }

  /**
   * 触发事件
   * @param {string} event - 事件名
   * @param {*} data - 事件数据
   */
  trigger(event, data) {
    const handlers = this._eventHandlers[event] || [];
    handlers.forEach(handler => {
      try {
        handler(data);
      } catch (e) {
        console.error(`事件处理出错 [${event}]:`, e);
      }
    });
  }

  /**
   * 触发里程碑事件
   * @param {Object} data - { type: string, value: any }
   */
  triggerMilestone(data) {
    this.trigger('milestone', data);
  }

  /**
   * 触发学习建议事件
   * @param {Object} data - { wordId: string, plan: Object }
   */
  triggerSuggestion(data) {
    this.trigger('suggestion', data);
  }

  /**
   * 触发成就事件
   * @param {Object} data - { achievement: string, details: Object }
   */
  triggerAchievement(data) {
    this.trigger('achievement', data);
  }

  // ========== 原有方法 ==========

  // 加载里程碑
  loadMilestones() {
    try {
      const saved = localStorage.getItem('companion_milestones');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  // 加载偏好设置
  loadPreferences() {
    try {
      const saved = localStorage.getItem('companion_preferences');
      return saved ? JSON.parse(saved) : {
        encouragement: true,
        celebration: true,
        reminder: true
      };
    } catch {
      return { encouragement: true, celebration: true, reminder: true };
    }
  }

  // 保存偏好设置
  savePreferences(prefs) {
    this.preferences = { ...this.preferences, ...prefs };
    localStorage.setItem('companion_preferences', JSON.stringify(this.preferences));
  }

  // 获取欢迎语
  getWelcomeMessage() {
    const hour = new Date().getHours();
    let timeGreeting = '';

    if (hour < 6) timeGreeting = '夜深了，';
    else if (hour < 12) timeGreeting = '早上好，';
    else if (hour < 14) timeGreeting = '中午好，';
    else if (hour < 18) timeGreeting = '下午好，';
    else timeGreeting = '晚上好，';

    return `${timeGreeting}学习伙伴${this.name}在这里等你！`;
  }

  // 获取鼓励语
  getEncouragement(context = {}) {
    const { streak = 0, accuracy = 0, wordsLearned = 0 } = context;

    if (streak >= 7) {
      return `太厉害了！你已经连续学习了${streak}天，${this.name}为你骄傲！🌟`;
    }
    if (streak >= 3) {
      return `坚持就是胜利！继续保持，你正在超越很多人！💪`;
    }
    if (accuracy >= 90) {
      return `正确率${accuracy}%！你真的是学习小达人！🎉`;
    }
    if (accuracy >= 70) {
      return `继续保持，你已经掌握了很多单词！👍`;
    }
    if (wordsLearned >= 50) {
      return `你已经学习了${wordsLearned}个单词，继续加油！📚`;
    }

    return `每天进步一点点，你一定能成功！${this.name}相信你！✨`;
  }

  // 获取庆祝语（当达成里程碑时）
  getCelebration(milestone) {
    const celebrations = {
      'first_word': '🎊 恭喜你学习第一个单词！这只是开始，加油！',
      'streak_3': '🔥 连续学习3天！你已经养成了好习惯！',
      'streak_7': '🏆 连续学习一周！你是真正的学习达人！',
      'streak_30': '👑 连续学习一个月！太不可思议了！',
      'accuracy_90': '⭐ 正确率达到90%！继续保持！',
      'words_100': '📖 学习100个单词！你已经积累了不小的词汇量！',
      'words_500': '🎓 学习500个单词！初中词汇你已经掌握很多了！',
      'mastery_50': '💯 50%的词汇已经掌握！你离目标越来越近了！'
    };

    return celebrations[milestone] || '🎉 恭喜达成新成就！';
  }

  // 获取提醒语
  getReminder(type = 'daily') {
    const reminders = {
      daily: `📅 今天还没有学习哦，${this.name}在这里等你！`,
      review: '📝 有些单词需要复习了，花几分钟回顾一下吧！',
      streak_end: '😢 昨天的学习记录中断了，但没关系，今天重新开始吧！',
      weekend: '🌈 今天是周末，可以多花点时间学习哦！'
    };

    return reminders[type] || reminders.daily;
  }

  // 获取苏格拉底式提问
  getSocraticQuestion(word, context = {}) {
    const { wrongAnswer, attempt = 1 } = context;

    // 根据错误类型生成不同的问题
    if (wrongAnswer) {
      return `你觉得 "${word}" 和 "${wrongAnswer}" 有什么区别呢？`;
    }

    if (attempt >= 2) {
      return `别急，让我们想想：这个单词可以分成哪几部分？`;
    }

    // 通用引导问题
    const questions = [
      `你能用 "${word}" 造一个句子吗？`,
      `"${word}" 让你想到了什么？`,
      `如果这个词是一个人的名字，你觉得他/她是什么样的人？`,
      `你能把这个词和已学过的词联系起来吗？`
    ];

    return questions[Math.floor(Math.random() * questions.length)];
  }

  // 获取错误安慰语
  getErrorComfort() {
    const comforts = [
      '没关系，犯错是学习的一部分！🌱',
      '每个专家都曾是初学者，继续加油！💪',
      `这个单词确实有点难，让${this.name}帮你记住它！`,
      '错误是最好的老师，你又学到了！📈',
      '别灰心，多复习几遍就好了！🔄'
    ];

    return comforts[Math.floor(Math.random() * comforts.length)];
  }

  // 获取疲劳提醒
  getFatigueReminder() {
    return `学习也要注意休息哦！休息一下，让${this.name}在这里等你回来！☕`;
  }

  // 记录里程碑
  recordMilestone(milestone) {
    if (!this.milestones.includes(milestone)) {
      this.milestones.push(milestone);
      localStorage.setItem('companion_milestones', JSON.stringify(this.milestones));
      return true; // 返回 true 表示是新里程碑
    }
    return false;
  }

  // 检查并触发里程碑
  checkMilestones(context) {
    const checks = [
      { milestone: 'first_word', condition: () => context.wordsLearned >= 1 },
      { milestone: 'streak_3', condition: () => context.streak >= 3 },
      { milestone: 'streak_7', condition: () => context.streak >= 7 },
      { milestone: 'accuracy_90', condition: () => context.accuracy >= 90 },
      { milestone: 'words_100', condition: () => context.wordsLearned >= 100 },
      { milestone: 'words_500', condition: () => context.wordsLearned >= 500 }
    ];

    const newMilestones = [];
    checks.forEach(check => {
      if (check.condition() && this.recordMilestone(check.milestone)) {
        newMilestones.push(check.milestone);
        // 触发里程碑事件
        this.triggerMilestone({ type: check.milestone, context });
      }
    });

    return newMilestones;
  }

  // 获取伙伴状态
  getStatus() {
    return {
      name: this.name,
      level: this.level,
      exp: this.exp,
      mood: this.mood,
      streak: this.streak,
      milestonesCount: this.milestones.length
    };
  }

  // 增加经验值
  addExp(amount) {
    this.exp += amount;
    // 每100经验升级
    while (this.exp >= 100) {
      this.exp -= 100;
      this.level++;
    }
    localStorage.setItem('companion_level', this.level);
    localStorage.setItem('companion_exp', this.exp);
  }

  // 更新连续学习天数
  updateStreak() {
    const lastStudy = localStorage.getItem('companion_last_study_date');
    const today = new Date().toDateString();

    if (lastStudy === today) {
      return; // 今天已经学习过
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastStudy === yesterday.toDateString()) {
      // 昨天学习了，连续天数+1
      this.streak++;
    } else if (lastStudy !== today) {
      // 昨天没学习，重新开始
      this.streak = 1;
    }

    localStorage.setItem('companion_last_study_date', today);
    localStorage.setItem('companion_streak', this.streak);
  }
}

// 导出为全局对象
window.learningCompanion = new LearningCompanion();