// HappyEnglish Vue应用入口
const { createApp, ref, computed, onMounted } = Vue;

// 简单的Vue应用
const App = {
  setup() {
    const isLoading = ref(true);
    const message = ref('HappyEnglish 加载中...');

    onMounted(async () => {
      try {
        // 初始化数据库
        await window.db.init();
        console.log('数据库初始化完成');
        message.value = '系统就绪';
        isLoading.value = false;
      } catch (error) {
        console.error('初始化失败:', error);
        message.value = '初始化失败，请刷新重试';
      }
    });

    return { isLoading, message };
  },
  template: `
    <div class="app">
      <div v-if="isLoading" class="loading">{{ message }}</div>
      <div v-else class="content">
        <h1>HappyEnglish</h1>
        <p>中考英语备考助手</p>
      </div>
    </div>
  `
};

// 创建并挂载应用
const app = createApp(App);
app.mount('#app');