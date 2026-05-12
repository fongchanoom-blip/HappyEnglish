class Database {
  constructor() {
    this.dbName = 'HappyEnglishDB';
    this.version = 1;
    this.db = null;
    this.initialized = false;
  }

  async init() {
    if (this.initialized) return;
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      request.onerror = () => {
        console.error('IndexedDB 初始化失败', request.error);
        this.initialized = true;
        resolve(null);
      };
      request.onsuccess = () => {
        this.db = request.result;
        console.log('IndexedDB 已初始化');
        this.initialized = true;
        resolve(this.db);
      };
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        // 单词进度
        if (!db.objectStoreNames.contains('progress')) {
          db.createObjectStore('progress', { keyPath: 'wordId' });
        }
        // 用户统计
        if (!db.objectStoreNames.contains('stats')) {
          db.createObjectStore('stats', { keyPath: 'id' });
        }
        // 系统设置
        if (!db.objectStoreNames.contains('settings')) {
          db.createObjectStore('settings', { keyPath: 'key' });
        }
      };
    });
  }

  async saveProgress(wordId, data) {
    // 同时保存到 IndexedDB 和 localStorage
    try {
      const tx = this.db.transaction('progress', 'readwrite');
      const store = tx.objectStore('progress');
      const existing = await this.getProgress(wordId);
      const updated = { ...existing, wordId, ...data, updatedAt: Date.now() };
      store.put(updated);
      await new Promise((resolve, reject) => {
        tx.oncomplete = () => resolve(updated);
        tx.onerror = () => reject(tx.error);
      });

      // 同时更新到 app.js 的 localStorage
      const progress = app.getProgress();
      progress.words[wordId] = { ...progress.words[wordId], ...data };
      app.saveProgress(progress);

      return updated;
    } catch (e) {
      console.error('保存进度失败', e);
      return null;
    }
  }

  async getProgress(wordId) {
    if (!this.db) return null;
    const tx = this.db.transaction('progress', 'readonly');
    const store = tx.objectStore('progress');
    return new Promise((resolve, reject) => {
      const request = store.get(wordId);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  }

  async getAllProgress() {
    // 优先从 localStorage 获取，因为 app.js 使用 localStorage
    const appProgress = app.getProgress();
    const wordsProgress = appProgress.words || {};

    // 转换为数组格式
    const progressArray = Object.keys(wordsProgress).map(wordId => ({
      wordId,
      ...wordsProgress[wordId]
    }));

    return progressArray;
  }

  async saveStats(data) {
    const tx = this.db.transaction('stats', 'readwrite');
    const store = tx.objectStore('stats');
    store.put({ id: 'user', ...data });
  }

  async getStats() {
    if (!this.db) return {};
    const tx = this.db.transaction('stats', 'readonly');
    const store = tx.objectStore('stats');
    return new Promise((resolve, reject) => {
      const request = store.get('user');
      request.onsuccess = () => resolve(request.result || {});
      request.onerror = () => reject(request.error);
    });
  }
}

window.db = new Database();