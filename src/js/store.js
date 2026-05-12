// Vue响应式状态管理
const { createApp, ref, computed } = Vue;

const store = {
  // 用户状态
  user: ref(null),
  points: ref(0),
  level: ref(1),
  streak: ref(0),
  maxStreak: ref(0),

  // 学习状态
  learnedWords: ref(0),
  masteredWords: ref(0),
  accuracy: ref(0),

  // 徽章
  badges: ref([]),
  earnedBadges: ref([]),

  // 方法
  addPoints(delta) {
    this.points.value += delta;
    // 检查升级
    const newLevel = Math.floor(this.points.value / 100) + 1;
    if (newLevel > this.level.value) {
      this.level.value = newLevel;
      this.showLevelUp();
    }
  },

  updateStreak(correct) {
    if (correct) {
      this.streak.value++;
      if (this.streak.value > this.maxStreak.value) {
        this.maxStreak.value = this.streak.value;
      }
    } else {
      this.streak.value = 0;
    }
  },

  showLevelUp() {
    // 显示升级提示
  },

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  }
};

window.store = store;