/**
 * AI 主动触发引擎
 * 基于事件驱动的学习伙伴主动触发系统
 */

// 触发条件配置
const TRIGGERS = {
  // 连续错误触发
  consecutive_errors: { count: 3, action: 'comfort' },
  // 学习时长提醒
  study_duration: { minutes: 30, action: 'rest_reminder' },
  // 连续答对触发
  consecutive_correct: { count: 5, action: 'celebrate' },
  // 低正确率提醒
  low_accuracy: { threshold: 0.5, action: 'suggest_review' },
  // 学习间隔提醒
  review_overdue: { hours: 48, action: 'review_reminder' }
};

// 学习状态枚举
const StudyState = {
  IDLE: 'idle',           // 空闲
  STUDYING: 'studying',    // 学习中
  REVIEWING: 'reviewing',  // 复习中
  RESTING: 'resting'       // 休息中
};

class TriggerEngine {
  constructor() {
    // 状态机
    this.state = StudyState.IDLE;
    this.previousState = null;

    // 统计计数器
    this.counters = {
      consecutiveErrors: 0,
      consecutiveCorrect: 0,
      totalAnswered: 0,
      correctAnswered: 0,
      sessionCorrect: 0,
      sessionTotal: 0
    };

    // 计时器
    this.timers = {
      studyStart: null,
      studyDuration: 0,
      reviewTimer: null
    };

    // 配置
    this.config = {
      studyDurationInterval: 5 * 60 * 1000, // 每5分钟检查一次学习时长
      cooldownPeriod: 2 * 60 * 1000,          // 触发冷却期（2分钟）
      maxComfortPerSession: 3                // 每次会话最多安慰3次
    };

    // 冷却记录
    this.cooldowns = {
      comfort: { lastTrigger: 0, count: 0 },
      rest_reminder: { lastTrigger: 0, count: 0 },
      celebrate: { lastTrigger: 0, count: 0 },
      suggest_review: { lastTrigger: 0, count: 0 },
      review_reminder: { lastTrigger: 0, count: 0 }
    };

    // 事件处理函数映射
    this.actionHandlers = {
      comfort: this.handleComfort.bind(this),
      rest_reminder: this.handleRestReminder.bind(this),
      celebrate: this.handleCelebrate.bind(this),
      suggest_review: this.handleSuggestReview.bind(this),
      review_reminder: this.handleReviewReminder.bind(this)
    };

    // 初始化事件监听
    this.initEventListeners();

    // 启动计时器
    this.startTimers();
  }

  // ========== 事件监听 ==========

  /**
   * 初始化事件监听
   */
  initEventListeners() {
    // 监听 learningCompanion 事件
    if (window.learningCompanion) {
      window.learningCompanion.on('milestone', this.onMilestone.bind(this));
      window.learningCompanion.on('suggestion', this.onSuggestion.bind(this));
      window.learningCompanion.on('answer', this.onAnswer.bind(this));
      window.learningCompanion.on('study_start', this.onStudyStart.bind(this));
      window.learningCompanion.on('study_end', this.onStudyEnd.bind(this));
      window.learningCompanion.on('review_start', this.onReviewStart.bind(this));
    }
  }

  /**
   * 里程碑事件处理
   */
  onMilestone(data) {
    console.log('[TriggerEngine] 里程碑事件:', data);
    // 学习伙伴已有里程碑处理，这里可以添加额外逻辑
  }

  /**
   * 建议事件处理
   */
  onSuggestion(data) {
    console.log('[TriggerEngine] 建议事件:', data);
  }

  /**
   * 答题事件处理
   */
  onAnswer(data) {
    const { correct, wordId, attempt } = data;

    // 更新计数器
    this.counters.totalAnswered++;

    if (correct) {
      this.counters.consecutiveErrors = 0;
      this.counters.consecutiveCorrect++;
      this.counters.correctAnswered++;
      this.counters.sessionCorrect++;

      // 检查连续答对触发
      if (this.counters.consecutiveCorrect >= TRIGGERS.consecutive_correct.count) {
        this.triggerAction('celebrate', { wordId, streak: this.counters.consecutiveCorrect });
        this.counters.consecutiveCorrect = 0;
      }
    } else {
      this.counters.consecutiveCorrect = 0;
      this.counters.consecutiveErrors++;

      // 检查连续错误触发
      if (this.counters.consecutiveErrors >= TRIGGERS.consecutive_errors.count) {
        this.triggerAction('comfort', { wordId, attempt });
        this.counters.consecutiveErrors = 0;
      }
    }

    this.counters.sessionTotal++;

    // 更新正确率并检查
    this.checkAccuracy();
  }

  /**
   * 学习开始事件
   */
  onStudyStart(data) {
    this.transitionState(StudyState.STUDYING);
    this.timers.studyStart = Date.now();
    console.log('[TriggerEngine] 学习开始，状态:', this.state);
  }

  /**
   * 学习结束事件
   */
  onStudyEnd(data) {
    this.transitionState(StudyState.IDLE);
    this.timers.studyDuration = 0;
    console.log('[TriggerEngine] 学习结束，状态:', this.state);
  }

  /**
   * 复习开始事件
   */
  onReviewStart(data) {
    this.transitionState(StudyState.REVIEWING);
    console.log('[TriggerEngine] 复习开始，状态:', this.state);
  }

  // ========== 状态机 ==========

  /**
   * 状态转换
   */
  transitionState(newState) {
    if (this.state === newState) return;

    this.previousState = this.state;
    this.state = newState;
    console.log(`[TriggerEngine] 状态转换: ${this.previousState} -> ${this.state}`);

    // 触发状态变化事件
    if (window.learningCompanion) {
      window.learningCompanion.trigger('state_change', {
        from: this.previousState,
        to: this.state
      });
    }
  }

  /**
   * 获取当前状态
   */
  getState() {
    return this.state;
  }

  // ========== 触发动作 ==========

  /**
   * 触发动作
   */
  triggerAction(action, data = {}) {
    // 检查冷却期
    if (!this.checkCooldown(action)) {
      return false;
    }

    const handler = this.actionHandlers[action];
    if (handler) {
      handler(data);
      this.updateCooldown(action);
      return true;
    }
    return false;
  }

  /**
   * 检查冷却期
   */
  checkCooldown(action) {
    const cd = this.cooldowns[action];
    if (!cd) return true;

    const now = Date.now();
    if (now - cd.lastTrigger < this.config.cooldownPeriod) {
      return false;
    }
    return true;
  }

  /**
   * 更新冷却时间
   */
  updateCooldown(action) {
    if (this.cooldowns[action]) {
      this.cooldowns[action].lastTrigger = Date.now();
      this.cooldowns[action].count++;
    }
  }

  /**
   * 重置冷却计数
   */
  resetCooldowns() {
    Object.keys(this.cooldowns).forEach(key => {
      this.cooldowns[key].count = 0;
    });
  }

  // ========== 动作处理器 ==========

  /**
   * 安慰动作 - 连续答错时触发
   */
  handleComfort(data) {
    const { wordId } = data;

    // 检查是否超过最大次数
    if (this.cooldowns.comfort.count >= this.config.maxComfortPerSession) {
      return;
    }

    if (window.learningCompanion) {
      const message = window.learningCompanion.getErrorComfort();
      window.learningCompanion.trigger('message', {
        type: 'comfort',
        message: message,
        data: data
      });
    }

    // 更新心情
    if (window.learningCompanion) {
      window.learningCompanion.mood = 'worried';
    }
  }

  /**
   * 休息提醒动作 - 学习时长达到阈值时触发
   */
  handleRestReminder(data) {
    if (window.learningCompanion) {
      const message = window.learningCompanion.getFatigueReminder();
      window.learningCompanion.trigger('message', {
        type: 'rest_reminder',
        message: message,
        data: data
      });

      // 状态切换到休息
      this.transitionState(StudyState.RESTING);
    }
  }

  /**
   * 庆祝动作 - 连续答对时触发
   */
  handleCelebrate(data) {
    const { streak } = data;

    if (window.learningCompanion) {
      const celebrations = [
        `太棒了！连续答对${streak}题！🌟`,
        `继续保持这个势头！💪`,
        `你是学习小达人！🎉`,
        `太厉害了！${window.learningCompanion.name}为你骄傲！✨`
      ];
      const message = celebrations[Math.floor(Math.random() * celebrations.length)];

      window.learningCompanion.trigger('message', {
        type: 'celebrate',
        message: message,
        data: data
      });

      // 给予经验值
      window.learningCompanion.addExp(5);
    }
  }

  /**
   * 建议复习动作 - 正确率低于阈值时触发
   */
  handleSuggestReview(data) {
    if (window.learningCompanion) {
      const message = `正确率有点低哦，要不要先复习一下之前的内容？📚`;
      window.learningCompanion.trigger('message', {
        type: 'suggest_review',
        message: message,
        data: data
      });
    }
  }

  /**
   * 复习提醒动作 - 学习间隔超过阈值时触发
   */
  handleReviewReminder(data) {
    if (window.learningCompanion) {
      const message = window.learningCompanion.getReminder('review');
      window.learningCompanion.trigger('message', {
        type: 'review_reminder',
        message: message,
        data: data
      });
    }
  }

  // ========== 条件检查 ==========

  /**
   * 检查正确率
   */
  checkAccuracy() {
    if (this.counters.sessionTotal < 5) return; // 至少5题才检查

    const accuracy = this.counters.sessionCorrect / this.counters.sessionTotal;
    if (accuracy < TRIGGERS.low_accuracy.threshold) {
      this.triggerAction('suggest_review', { accuracy });
    }
  }

  /**
   * 检查复习超时
   */
  checkReviewOverdue() {
    const lastReview = localStorage.getItem('last_review_time');
    if (!lastReview) return false;

    const hoursSince = (Date.now() - parseInt(lastReview)) / (1000 * 60 * 60);
    return hoursSince >= TRIGGERS.review_overdue.hours;
  }

  /**
   * 检查并触发复习提醒
   */
  checkAndTriggerReviewReminder() {
    if (this.checkReviewOverdue()) {
      this.triggerAction('review_reminder');
    }
  }

  // ========== 计时器 ==========

  /**
   * 启动计时器
   */
  startTimers() {
    // 学习时长检查
    this.timers.studyTimer = setInterval(() => {
      if (this.state === StudyState.STUDYING) {
        this.timers.studyDuration += this.config.studyDurationInterval;
        const totalMinutes = this.timers.studyDuration / (1000 * 60);

        if (totalMinutes >= TRIGGERS.study_duration.minutes) {
          this.triggerAction('rest_reminder', { duration: totalMinutes });
          this.timers.studyDuration = 0; // 重置计时
        }
      }
    }, this.config.studyDurationInterval);

    // 复习超时检查（每小时一次）
    this.timers.reviewTimer = setInterval(() => {
      this.checkAndTriggerReviewReminder();
    }, 60 * 60 * 1000);
  }

  /**
   * 停止计时器
   */
  stopTimers() {
    if (this.timers.studyTimer) {
      clearInterval(this.timers.studyTimer);
    }
    if (this.timers.reviewTimer) {
      clearInterval(this.timers.reviewTimer);
    }
  }

  // ========== 对外接口 ==========

  /**
   * 开始学习（供外部调用）
   */
  startStudy() {
    this.transitionState(StudyState.STUDYING);
    this.timers.studyStart = Date.now();
    this.resetCooldowns();
  }

  /**
   * 结束学习（供外部调用）
   */
  endStudy() {
    this.transitionState(StudyState.IDLE);

    // 保存最后学习时间
    localStorage.setItem('last_review_time', Date.now().toString());

    // 计算本次学习统计
    const stats = {
      totalAnswered: this.counters.sessionTotal,
      correctAnswered: this.counters.sessionCorrect,
      accuracy: this.counters.sessionTotal > 0
        ? Math.round((this.counters.sessionCorrect / this.counters.sessionTotal) * 100)
        : 0
    };

    // 重置会话计数
    this.counters.sessionTotal = 0;
    this.counters.sessionCorrect = 0;

    return stats;
  }

  /**
   * 开始复习（供外部调用）
   */
  startReview() {
    this.transitionState(StudyState.REVIEWING);
    this.resetCooldowns();
  }

  /**
   * 休息结束（供外部调用）
   */
  finishRest() {
    this.transitionState(StudyState.IDLE);
  }

  /**
   * 记录答题（供外部调用）
   */
  recordAnswer(correct, wordId = '', attempt = 1) {
    this.onAnswer({ correct, wordId, attempt });
  }

  /**
   * 获取统计信息
   */
  getStats() {
    return {
      state: this.state,
      counters: { ...this.counters },
      studyDuration: this.timers.studyDuration,
      cooldowns: { ...this.cooldowns }
    };
  }

  /**
   * 获取触发条件配置
   */
  getTriggers() {
    return { ...TRIGGERS };
  }

  /**
   * 销毁引擎
   */
  destroy() {
    this.stopTimers();
    // 移除事件监听
    if (window.learningCompanion) {
      window.learningCompanion.off('milestone', this.onMilestone);
      window.learningCompanion.off('suggestion', this.onSuggestion);
      window.learningCompanion.off('answer', this.onAnswer);
      window.learningCompanion.off('study_start', this.onStudyStart);
      window.learningCompanion.off('study_end', this.onStudyEnd);
      window.learningCompanion.off('review_start', this.onReviewStart);
    }
  }
}

// 导出为全局对象
window.TriggerEngine = TriggerEngine;