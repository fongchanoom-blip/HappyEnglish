/**
 * AI 服务层 - 封装 Minimax API 调用
 * 实现语境故事生成、错题讲解、学习报告等功能
 */
class AIService {
  constructor() {
    // API 配置 - 使用 sessionStorage 存储，更安全（关闭浏览器后自动清除）
    this.apiKey = sessionStorage.getItem('minimax_api_key') || '';
    this.baseUrl = 'https://api.minimax.chat/v1';
    this.model = 'MiniMax-M2.7-highspeed';

    // 内存缓存 - 添加大小限制防止内存泄漏
    this.cache = new Map();
    this.cacheExpiry = 24 * 60 * 60 * 1000; // 24小时
    this.maxCacheSize = 100; // 最多缓存100条
  }

  /**
   * 检查 API 是否已配置
   */
  isConfigured() {
    return !!this.apiKey;
  }

  /**
   * 更新 API Key - 使用 sessionStorage 更安全
   * @param {string} apiKey - 新的 API Key
   */
  updateApiKey(apiKey) {
    this.apiKey = apiKey;
    sessionStorage.setItem('minimax_api_key', apiKey);
  }

  /**
   * 保存到缓存 - 带 LRU 策略防止内存无限增长
   * @param {string} key - 缓存键
   * @param {Object} data - 缓存数据
   */
  saveToCache(key, data) {
    // LRU 策略：当缓存满时删除最早的条目
    if (this.cache.size >= this.maxCacheSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  /**
   * 生成语境故事
   * @param {string} word - 目标单词
   * @param {Object} context - 上下文信息
   * @returns {Promise<Object>} 包含故事内容、例句、记忆提示的对象
   */
  async generateContextStory(word, context = {}) {
    const cacheKey = `story_${word}`;

    // 检查缓存
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    // 调用 API
    const prompt = this.buildStoryPrompt(word, context);
    const response = await this.callAPI(prompt);

    // 解析响应
    const story = this.parseStoryResponse(response, word);

    // 保存到缓存和数据库
    this.saveToCache(cacheKey, story);
    await this.saveStoryToDB(word, story);

    return story;
  }

  /**
   * 生成错题讲解
   * @param {string} word - 目标单词
   * @param {string} wrongAnswer - 错误答案
   * @param {string} correctAnswer - 正确答案
   * @returns {Promise<Object>} 错题讲解对象
   */
  async generateExplanation(word, wrongAnswer, correctAnswer) {
    const cacheKey = `explain_${word}_${wrongAnswer}`;

    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    const prompt = `
请为以下单词生成错题讲解：

单词：${word}
错误答案：${wrongAnswer}
正确答案：${correctAnswer}

讲解要求：
1. 分析错误原因（为什么学生会选错）
2. 辨析词义差异（正确和错误的区别）
3. 给出正确用法示例（1-2个例句）
4. 记忆技巧提示

字数：100字以内，简洁明了，适合中学生理解。
`;

    const response = await this.callAPI(prompt);
    const explanation = {
      word,
      wrongAnswer,
      correctAnswer,
      content: response,
      timestamp: Date.now()
    };

    this.saveToCache(cacheKey, explanation);
    return explanation;
  }

  /**
   * 生成学习报告
   * @param {Object} stats - 学习统计数据
   * @returns {Promise<string>} 学习报告文本
   */
  async generateReport(stats) {
    const prompt = `
基于以下学习数据生成周报：

学习统计：
- 已学单词数：${stats.totalWords || 0}
- 正确率：${stats.accuracy || 0}%
- 薄弱词：${stats.weakWords?.join('、') || '暂无'}
- 学习时长：${stats.totalMinutes || 0}分钟
- 连续天数：${stats.streak || 0}天

请生成包含以下部分的报告：
1. 【总体评估】简要评价本周学习情况
2. 【进步亮点】1-2个具体进步
3. 【薄弱点分析】哪些地方需要加强
4. 【下周建议】具体可执行的学习建议

语言风格：鼓励为主，具体明确，适合中学生阅读。
`;

    return await this.callAPI(prompt);
  }

  /**
   * 调用 Minimax API
   * @param {string} prompt - 提示词
   * @returns {Promise<string>} API 返回的文本内容
   */
  async callAPI(prompt) {
    if (!this.isConfigured()) {
      // 返回降级内容
      return this.getFallbackResponse(prompt);
    }

    try {
      const response = await fetch(`${this.baseUrl}/text/chatcompletion_v2`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: this.model,
          messages: [{ role: 'user', content: prompt }]
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices?.[0]?.message?.content || '';
    } catch (error) {
      console.error('AI API 调用失败:', error);
      return this.getFallbackResponse(prompt);
    }
  }

  /**
   * 构建故事生成 prompt
   * @param {string} word - 目标单词
   * @param {Object} context - 上下文信息
   * @returns {string} 格式化后的 prompt
   */
  buildStoryPrompt(word, context = {}) {
    return `
请为单词 "${word}" 生成一个生活化场景故事。

要求：
1. 故事长度：150字以内
2. 包含中文场景描述（2-3句话）
3. 包含英文例句（单词要在例句中出现）
4. 添加记忆锚点（帮助学生联想记忆）
5. 适合中学生理解水平
6. 故事要有趣味性，不是干巴巴的描述

格式：
【故事】
[中文故事内容]

【例句】
[英文例句]

【记忆提示】
[简短的记忆技巧]
`;
  }

  /**
   * 解析故事响应
   * @param {string} response - API 返回的原始响应
   * @param {string} word - 目标单词
   * @returns {Object} 解析后的故事对象
   */
  parseStoryResponse(response, word) {
    const result = {
      word,
      content: '',
      example: '',
      memoryTip: '',
      timestamp: Date.now()
    };

    // 尝试解析结构化响应
    const storyMatch = response.match(/【故事】([\s\S]*?)【例句】/);
    const exampleMatch = response.match(/【例句】([\s\S]*?)【记忆提示】/);
    const tipMatch = response.match(/【记忆提示】([\s\S]*?)$/);

    if (storyMatch) {
      result.content = storyMatch[1].trim();
    } else {
      // 如果解析失败，使用整个响应作为故事内容
      result.content = response;
    }

    if (exampleMatch) {
      result.example = exampleMatch[1].trim();
    }

    if (tipMatch) {
      result.memoryTip = tipMatch[1].trim();
    }

    return result;
  }

  /**
   * 从内存缓存获取数据
   * @param {string} key - 缓存键
   * @returns {*} 缓存的数据，如果过期或不存在则返回 null
   */
  getFromCache(key) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheExpiry) {
      return cached.data;
    }
    // 清理过期缓存
    if (cached) {
      this.cache.delete(key);
    }
    return null;
  }

  /**
   * 清除指定缓存
   * @param {string} key - 缓存键
   */
  clearCache(key) {
    this.cache.delete(key);
  }

  /**
   * 清除所有内存缓存
   */
  clearAllCache() {
    this.cache.clear();
  }

  /**
   * 获取降级响应（API 不可用时使用）
   * @param {string} prompt - 原始 prompt
   * @returns {string} 降级响应文本
   */
  getFallbackResponse(prompt) {
    if (prompt.includes('错题讲解')) {
      return '这道题要注意词义辨析，多复习几遍就能记住啦！';
    }
    if (prompt.includes('请分析以下错题')) {
      return '这道题要注意词义辨析，多复习几遍就能记住啦！';
    }
    if (prompt.includes('语境故事') || prompt.includes('生活化场景故事')) {
      return '【故事】\n小明的英语学习之旅正在进行中...\n\n【例句】\nPractice makes perfect.\n\n【记忆提示】\n多读多写，自然记住！';
    }
    return 'AI 功能暂时不可用，请稍后再试。';
  }

  /**
   * 生成错题分析
   * @param {string} word - 目标单词
   * @param {string} wrongAnswer - 错误答案
   * @param {string} correctAnswer - 正确答案
   * @returns {Promise<Object>} 错题分析对象
   */
  async generateErrorAnalysis(word, wrongAnswer, correctAnswer) {
    const cacheKey = `error_${word}_${wrongAnswer}`;

    // 检查缓存
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    const prompt = `
请分析以下错题：

单词：${word}
错误答案：${wrongAnswer}
正确答案：${correctAnswer}

请生成包含以下内容的分析：
1. 错误原因：为什么会选错（50字以内）
2. 记忆技巧：如何记住正确区分（100字以内）
3. 相似词辨析：列出2-3个易混淆词汇（100字以内）

要求：
- 语言简洁，适合中学生理解
- 重点帮助区分相似选项
`;

    const response = await this.callAPI(prompt);
    const analysis = this.parseErrorAnalysisResponse(response);

    this.saveToCache(cacheKey, analysis);
    return analysis;
  }

  /**
   * 解析错题分析响应
   */
  parseErrorAnalysisResponse(response) {
    const result = {
      reason: '',
      tips: [],
      similarWords: []
    };

    // 解析错误原因
    const reasonMatch = response.match(/错误原因[：:]([\s\S]*?)(?=记忆技巧|相似词|$)/i);
    if (reasonMatch) {
      result.reason = reasonMatch[1].trim();
    }

    // 解析记忆技巧
    const tipsMatch = response.match(/记忆技巧[：:]([\s\S]*?)(?=相似词|$)/i);
    if (tipsMatch) {
      const tipsText = tipsMatch[1].trim();
      result.tips = tipsText.split(/[；;]/).map(t => t.trim()).filter(t => t);
    }

    // 解析相似词
    const similarMatch = response.match(/相似词[辨析:]([\s\S]*?)$/i);
    if (similarMatch) {
      const similarText = similarMatch[1].trim();
      result.similarWords = similarText.split(/[,，/]/).map(w => w.trim()).filter(w => w);
    }

    return result;
  }

  /**
   * 保存故事到数据库
   * @param {string} word - 单词
   * @param {Object} story - 故事对象
   */
  async saveStoryToDB(word, story) {
    try {
      const dbInstance = window.db;
      if (dbInstance && dbInstance.db) {
        const tx = dbInstance.db.transaction('stories', 'readwrite');
        const store = tx.objectStore('stories');
        store.put({
          wordId: word,
          ...story,
          cachedAt: Date.now()
        });
      }
    } catch (e) {
      console.error('保存故事失败:', e);
    }
  }

  /**
   * 从数据库获取故事
   * @param {string} word - 单词
   * @returns {Promise<Object|null>} 故事对象
   */
  async getStoryFromDB(word) {
    try {
      const dbInstance = window.db;
      if (dbInstance && dbInstance.getStory) {
        return await dbInstance.getStory(word);
      }
    } catch (e) {
      console.error('获取故事失败:', e);
    }
    return null;
  }

  /**
   * 获取所有故事
   * @returns {Promise<Array>} 所有故事数组
   */
  async getAllStoriesFromDB() {
    try {
      const dbInstance = window.db;
      if (dbInstance && dbInstance.getAllStories) {
        return await dbInstance.getAllStories();
      }
    } catch (e) {
      console.error('获取所有故事失败:', e);
    }
    return [];
  }
}

// 导出单例
window.aiService = new AIService();
