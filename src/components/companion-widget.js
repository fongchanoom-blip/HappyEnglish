/**
 * 学习伙伴小部件
 * 显示消息气泡、鼓励、庆祝等
 */
class CompanionWidget {
  constructor() {
    this.companion = window.learningCompanion;
    this.isVisible = false;
    this.currentBubble = null;
    this.stylesInjected = false;
  }

  // 注入样式
  injectStyles() {
    if (this.stylesInjected || document.getElementById('companion-styles')) {
      return;
    }

    const styles = document.createElement('style');
    styles.id = 'companion-styles';
    styles.textContent = `
      .companion-bubble {
        position: fixed;
        bottom: 80px;
        right: 20px;
        background: white;
        border-radius: 16px;
        padding: 16px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        max-width: 300px;
        min-width: 250px;
        display: flex;
        align-items: flex-start;
        gap: 12px;
        z-index: 1000;
        animation: companionSlideUp 0.3s ease;
      }

      .companion-bubble.speech { border-left: 4px solid #667eea; }
      .companion-bubble.celebration { border-left: 4px solid #f59e0b; background: #fffbeb; }
      .companion-bubble.reminder { border-left: 4px solid #10b981; }
      .companion-bubble.error { border-left: 4px solid #ef4444; background: #fef2f2; }
      .companion-bubble.question { border-left: 4px solid #8b5cf6; background: #faf5ff; }

      .bubble-avatar {
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 18px;
        flex-shrink: 0;
      }

      .bubble-content {
        flex: 1;
        font-size: 14px;
        line-height: 1.6;
        color: #374151;
      }

      .bubble-close {
        background: none;
        border: none;
        font-size: 20px;
        color: #9ca3af;
        cursor: pointer;
        padding: 0;
        line-height: 1;
        flex-shrink: 0;
      }

      .bubble-close:hover {
        color: #6b7280;
      }

      @keyframes companionSlideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* 伙伴状态指示器 */
      .companion-indicator {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 20px;
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        cursor: pointer;
        z-index: 999;
        transition: transform 0.2s;
      }

      .companion-indicator:hover {
        transform: scale(1.1);
      }

      .companion-indicator.happy { background: linear-gradient(135deg, #667eea, #764ba2); }
      .companion-indicator.neutral { background: linear-gradient(135deg, #6b7280, #4b5563); }
      .companion-indicator.worried { background: linear-gradient(135deg, #f59e0b, #d97706); }
    `;

    document.head.appendChild(styles);
    this.stylesInjected = true;
  }

  // 创建消息气泡
  createBubble(message, type = 'speech') {
    this.injectStyles();

    // 移除已有的气泡
    this.close();

    const bubble = document.createElement('div');
    bubble.className = `companion-bubble ${type}`;
    bubble.innerHTML = `
      <div class="bubble-avatar">${this.companion.name[0]}</div>
      <div class="bubble-content">${message}</div>
      <button class="bubble-close" aria-label="关闭">×</button>
    `;

    // 绑定关闭事件
    const closeBtn = bubble.querySelector('.bubble-close');
    closeBtn.onclick = () => this.close();

    document.body.appendChild(bubble);
    this.currentBubble = bubble;
    this.isVisible = true;

    return bubble;
  }

  // 显示消息气泡
  showMessage(message, type = 'speech', duration = 5000) {
    this.createBubble(message, type);

    // 自动消失
    if (duration > 0) {
      setTimeout(() => {
        if (this.currentBubble && document.body.contains(this.currentBubble)) {
          this.close();
        }
      }, duration);
    }

    return this.currentBubble;
  }

  // 关闭气泡
  close() {
    if (this.currentBubble && document.body.contains(this.currentBubble)) {
      this.currentBubble.remove();
      this.currentBubble = null;
      this.isVisible = false;
    }
  }

  // 显示欢迎消息
  showWelcome() {
    const message = this.companion.getWelcomeMessage();
    return this.showMessage(message, 'speech', 6000);
  }

  // 显示鼓励
  showEncouragement(context) {
    if (!this.companion.preferences.encouragement) return null;
    const message = this.companion.getEncouragement(context);
    return this.showMessage(message, 'speech', 5000);
  }

  // 显示庆祝
  showCelebration(milestone) {
    if (!this.companion.preferences.celebration) return null;
    const message = this.companion.getCelebration(milestone);
    return this.showMessage(message, 'celebration', 8000);
  }

  // 显示提醒
  showReminder(type = 'daily') {
    if (!this.companion.preferences.reminder) return null;
    const message = this.companion.getReminder(type);
    return this.showMessage(message, 'reminder', 6000);
  }

  // 显示错误安慰
  showErrorComfort() {
    const message = this.companion.getErrorComfort();
    return this.showMessage(message, 'error', 5000);
  }

  // 显示苏格拉底式提问
  showQuestion(word, context = {}) {
    const message = this.companion.getSocraticQuestion(word, context);
    return this.showMessage(message, 'question', 8000);
  }

  // 显示疲劳提醒
  showFatigueReminder() {
    const message = this.companion.getFatigueReminder();
    return this.showMessage(message, 'reminder', 6000);
  }

  // 检查里程碑并显示庆祝
  checkAndCelebrate(context) {
    const newMilestones = this.companion.checkMilestones(context);
    newMilestones.forEach(milestone => {
      this.showCelebration(milestone);
      this.companion.addExp(20); // 每个里程碑加20经验
    });
    return newMilestones;
  }

  // 创建伙伴状态指示器
  createIndicator() {
    this.injectStyles();

    // 移除已有的指示器
    const existing = document.querySelector('.companion-indicator');
    if (existing) existing.remove();

    const indicator = document.createElement('div');
    indicator.className = `companion-indicator ${this.companion.mood}`;
    indicator.textContent = this.companion.name[0];
    indicator.title = `${this.companion.name} - 点击查看状态`;

    indicator.onclick = () => {
      const status = this.companion.getStatus();
      this.showMessage(
        `${status.name} Lv.${status.level} | 连续${status.streak}天 | 已达成${status.milestonesCount}个成就`,
        'speech',
        4000
      );
    };

    document.body.appendChild(indicator);
    return indicator;
  }

  // 初始化（在页面加载时调用）
  init(showWelcome = true) {
    // 更新连续学习天数
    this.companion.updateStreak();

    // 创建状态指示器
    this.createIndicator();

    // 显示欢迎消息
    if (showWelcome) {
      setTimeout(() => {
        this.showWelcome();
      }, 1000);
    }
  }
}

// 导出为全局对象
window.companionWidget = new CompanionWidget();