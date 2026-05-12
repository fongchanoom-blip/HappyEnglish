class Database {
  constructor() {
    this.dbName = 'HappyEnglishDB';
    this.version = 1;
    this.db = null;
  }

  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        console.log('IndexedDB 已初始化');
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
    const tx = this.db.transaction('progress', 'readwrite');
    const store = tx.objectStore('progress');
    const existing = await this.getProgress(wordId);
    const updated = { ...existing, wordId, ...data, updatedAt: Date.now() };
    store.put(updated);
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve(updated);
      tx.onerror = () => reject(tx.error);
    });
  }

  async getProgress(wordId) {
    const tx = this.db.transaction('progress', 'readonly');
    const store = tx.objectStore('progress');
    return new Promise((resolve, reject) => {
      const request = store.get(wordId);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  }

  async getAllProgress() {
    const tx = this.db.transaction('progress', 'readonly');
    const store = tx.objectStore('progress');
    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
  }

  async saveStats(data) {
    const tx = this.db.transaction('stats', 'readwrite');
    const store = tx.objectStore('stats');
    store.put({ id: 'user', ...data });
  }

  async getStats() {
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