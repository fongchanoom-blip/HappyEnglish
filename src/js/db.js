class Database {
  constructor() {
    this.dbName = 'HappyEnglishDB';
    this.version = 2; // 版本号增加以触发 onupgradeneeded
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
        // 记忆数据 - 存储学生记忆数据，keyPath: wordId
        if (!db.objectStoreNames.contains('memory')) {
          db.createObjectStore('memory', { keyPath: 'wordId' });
        }
        // 故事缓存 - 存储AI生成的故事缓存，keyPath: wordId
        if (!db.objectStoreNames.contains('stories')) {
          db.createObjectStore('stories', { keyPath: 'wordId' });
        }
        // 错误模式 - 存储错误模式记录，keyPath: id (autoIncrement)
        if (!db.objectStoreNames.contains('errors')) {
          const errorStore = db.createObjectStore('errors', { keyPath: 'id', autoIncrement: true });
          errorStore.createIndex('wordId', 'wordId', { unique: false });
          errorStore.createIndex('type', 'type', { unique: false });
        }
      };
    });
  }

  // ========== 记忆系统基础方法 ==========

  /**
   * 初始化记忆系统 stores（如果需要单独初始化）
   */
  async initMemoryStores() {
    const stores = ['memory', 'stories', 'errors'];
    const db = this.db;

    if (!db) return false;

    const transaction = db.transaction(stores, 'readonly');
    const missingStores = [];

    for (const storeName of stores) {
      if (!db.objectStoreNames.contains(storeName)) {
        missingStores.push(storeName);
      }
    }

    if (missingStores.length > 0) {
      console.warn('缺少 stores:', missingStores);
      return false;
    }

    console.log('记忆系统 stores 已初始化');
    return true;
  }

  /**
   * 保存单词掌握度
   * @param {string} wordId - 单词ID
   * @param {Object} state - 掌握度状态
   */
  async saveMastery(wordId, state) {
    if (!this.db) return null;
    try {
      const tx = this.db.transaction('memory', 'readwrite');
      const store = tx.objectStore('memory');

      const existing = await this.getMastery(wordId);
      const updated = {
        ...existing,
        wordId,
        ...state,
        updatedAt: Date.now()
      };

      store.put(updated);

      return new Promise((resolve, reject) => {
        tx.oncomplete = () => resolve(updated);
        tx.onerror = () => reject(tx.error);
      });
    } catch (e) {
      console.error('保存掌握度失败', e);
      return null;
    }
  }

  /**
   * 获取单词掌握度
   * @param {string} wordId - 单词ID
   */
  async getMastery(wordId) {
    if (!this.db) return null;
    const tx = this.db.transaction('memory', 'readonly');
    const store = tx.objectStore('memory');
    return new Promise((resolve, reject) => {
      const request = store.get(wordId);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * 获取所有掌握度数据
   */
  async getAllMastery() {
    if (!this.db) return [];
    const tx = this.db.transaction('memory', 'readonly');
    const store = tx.objectStore('memory');
    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * 保存故事缓存
   * @param {string} wordId - 单词ID
   * @param {string} story - 故事内容
   * @param {Object} metadata - 元数据
   */
  async saveStory(wordId, story, metadata = {}) {
    if (!this.db) return null;
    try {
      const tx = this.db.transaction('stories', 'readwrite');
      const store = tx.objectStore('stories');

      const cached = {
        wordId,
        story,
        ...metadata,
        createdAt: metadata.createdAt || Date.now(),
        updatedAt: Date.now()
      };

      store.put(cached);

      return new Promise((resolve, reject) => {
        tx.oncomplete = () => resolve(cached);
        tx.onerror = () => reject(tx.error);
      });
    } catch (e) {
      console.error('保存故事缓存失败', e);
      return null;
    }
  }

  /**
   * 获取故事缓存
   * @param {string} wordId - 单词ID
   */
  async getStory(wordId) {
    if (!this.db) return null;
    const tx = this.db.transaction('stories', 'readonly');
    const store = tx.objectStore('stories');
    return new Promise((resolve, reject) => {
      const request = store.get(wordId);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * 获取所有故事缓存
   * @returns {Promise<Array>} 所有故事数组
   */
  async getAllStories() {
    if (!this.db) return [];
    const tx = this.db.transaction('stories', 'readonly');
    const store = tx.objectStore('stories');
    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * 清除过期故事缓存
   * @param {number} maxAge - 最大缓存时间（毫秒），默认 7 天
   */
  async clearStories(maxAge = 7 * 24 * 60 * 60 * 1000) {
    if (!this.db) return false;
    try {
      const allStories = await this.getAllStories();
      const now = Date.now();
      const tx = this.db.transaction('stories', 'readwrite');
      const store = tx.objectStore('stories');

      let clearedCount = 0;
      for (const story of allStories) {
        const cacheTime = story.cachedAt || story.createdAt || 0;
        if (now - cacheTime > maxAge) {
          store.delete(story.wordId);
          clearedCount++;
        }
      }

      return new Promise((resolve, reject) => {
        tx.oncomplete = () => {
          console.log(`已清除 ${clearedCount} 条过期故事缓存`);
          resolve(true);
        };
        tx.onerror = () => reject(tx.error);
      });
    } catch (e) {
      console.error('清除故事缓存失败', e);
      return false;
    }
  }

  /**
   * 删除单个故事缓存
   * @param {string} wordId - 单词ID
   */
  async deleteStory(wordId) {
    if (!this.db) return false;
    const tx = this.db.transaction('stories', 'readwrite');
    const store = tx.objectStore('stories');
    store.delete(wordId);

    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  }

  /**
   * 保存错误模式记录
   * @param {Object} pattern - 错误模式
   */
  async saveErrorPattern(pattern) {
    if (!this.db) return null;
    try {
      const tx = this.db.transaction('errors', 'readwrite');
      const store = tx.objectStore('errors');

      const errorRecord = {
        ...pattern,
        lastError: pattern.lastError || Date.now()
      };

      store.put(errorRecord);

      return new Promise((resolve, reject) => {
        tx.oncomplete = () => resolve(errorRecord);
        tx.onerror = () => reject(tx.error);
      });
    } catch (e) {
      console.error('保存错误模式失败', e);
      return null;
    }
  }

  /**
   * 获取所有错误模式记录
   */
  async getErrorPatterns() {
    if (!this.db) return [];
    const tx = this.db.transaction('errors', 'readonly');
    const store = tx.objectStore('errors');
    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * 获取特定单词的错误模式
   * @param {string} wordId - 单词ID
   */
  async getErrorPatternsForWord(wordId) {
    if (!this.db) return [];
    const tx = this.db.transaction('errors', 'readonly');
    const store = tx.objectStore('errors');
    const index = store.index('wordId');

    return new Promise((resolve, reject) => {
      const request = index.getAll(wordId);
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * 根据错误类型获取错误模式
   * @param {string} type - 错误类型
   */
  async getErrorPatternsByType(type) {
    if (!this.db) return [];
    const tx = this.db.transaction('errors', 'readonly');
    const store = tx.objectStore('errors');
    const index = store.index('type');

    return new Promise((resolve, reject) => {
      const request = index.getAll(type);
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * 删除错误模式记录
   * @param {number} id - 错误记录ID
   */
  async deleteErrorPattern(id) {
    if (!this.db) return false;
    const tx = this.db.transaction('errors', 'readwrite');
    const store = tx.objectStore('errors');
    store.delete(id);

    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  }

  /**
   * 清除所有错误记录
   */
  async clearErrorPatterns() {
    if (!this.db) return false;
    const tx = this.db.transaction('errors', 'readwrite');
    const store = tx.objectStore('errors');
    store.clear();

    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  }

  // ========== 原有方法保持不变 ==========

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