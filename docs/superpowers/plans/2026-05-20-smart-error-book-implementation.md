# 智能错题本 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在 review.html 中新增「错题本」标签，提供错题归类、AI分析、掌握度追踪功能

**Architecture:** 在现有 review.html 基础上新增错题本模式，复用 db.js 的 IndexedDB 存储，新增 errorAnalysis 表存储 AI 分析结果

**Tech Stack:** Vue 3, IndexedDB, Minimax API, Vanilla JS

---

## 文件结构

```
src/
├── js/
│   ├── db.js          ← 修改：新增 errorAnalysis 表和 CRUD 方法
│   └── ai-service.js  ← 修改：新增 generateErrorAnalysis 方法
└── pages/
    └── review.html    ← 修改：新增错题本标签和 UI
```

---

## 任务清单

### Task 1: 数据库层 - errorAnalysis 表

**Files:**
- Modify: `src/js/db.js:1-50` (表定义)
- Modify: `src/js/db.js:260-350` (新增方法)

- [ ] **Step 1: 在 db.js 的 onupgradeneeded 中添加 errorAnalysis 表**

找到 `request.onupgradeneeded = (event) => {` 部分，在 `errors` 表定义之后添加：

```javascript
// 错题分析缓存 - 存储 AI 生成的错题分析
if (!db.objectStoreNames.contains('errorAnalysis')) {
  const analysisStore = db.createObjectStore('errorAnalysis', { keyPath: 'id' });
  analysisStore.createIndex('wordId', 'wordId', { unique: false });
  analysisStore.createIndex('type', 'type', { unique: false });
}
```

- [ ] **Step 2: 添加错误分类辅助函数**

在 db.js 顶部（class Database 之前）添加：

```javascript
/**
 * 计算编辑距离（Levenshtein Distance）
 */
function levenshteinDistance(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

/**
 * 自动分类错误类型
 */
function classifyError(wrong, correct) {
  const editDist = levenshteinDistance(wrong, correct);
  if (editDist < 3 && Math.abs(wrong.length - correct.length) < 4) {
    return 'spelling';
  }
  if (wrong.length >= 3 && correct.length >= 3) {
    const wrongPrefix = wrong.slice(0, 3);
    const correctPrefix = correct.slice(0, 3);
    if (wrongPrefix === correctPrefix && editDist < 6) {
      return 'phonetic';
    }
  }
  const grammarSuffixes = ['ing', 'ed', 's', 'es', 'd', 'er', 'est', 'ly'];
  const wrongHasSuffix = grammarSuffixes.some(s => wrong.endsWith(s));
  const correctHasSuffix = grammarSuffixes.some(s => correct.endsWith(s));
  if (wrongHasSuffix && correctHasSuffix && editDist < 5) {
    return 'grammar';
  }
  return 'meaning';
}

/**
 * 计算错题掌握状态
 */
function calculateErrorStatus(errorCount, correctCount, streakCorrect, mastery) {
  if (errorCount === 0 && correctCount === 0) return '陌生';
  if (errorCount === 0 && correctCount > 0) return '已掌握';
  if (streakCorrect >= 5 && mastery >= 0.95) return '已掌握';
  if (streakCorrect >= 3 && mastery >= 0.80) return '掌握中';
  if (correctCount > errorCount) return '薄弱';
  return '陌生';
}
```

- [ ] **Step 3: 添加 errorAnalysis CRUD 方法**

在 db.js 的 `// ========== 原有方法保持不变 ==========` 注释之前添加：

```javascript
// ========== 错题分析相关方法 ==========

/**
 * 保存错题分析
 */
async saveErrorAnalysis(wordId, wrongAnswer, analysis, mastery) {
  if (!this.db) return null;
  try {
    const tx = this.db.transaction('errorAnalysis', 'readwrite');
    const store = tx.objectStore('errorAnalysis');

    const id = `${wordId}_${wrongAnswer}`;
    const existing = await this.getErrorAnalysis(wordId, wrongAnswer);

    const record = {
      id,
      wordId,
      wrongAnswer,
      analysis: analysis || existing?.analysis,
      mastery: mastery || existing?.mastery || {
        correctCount: 0,
        errorCount: 0,
        streakCorrect: 0,
        lastPractice: null,
        status: '陌生'
      },
      cachedAt: existing?.cachedAt || Date.now(),
      updatedAt: Date.now()
    };

    store.put(record);
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve(record);
      tx.onerror = () => reject(tx.error);
    });
  } catch (e) {
    console.error('保存错题分析失败', e);
    return null;
  }
}

/**
 * 获取错题分析
 */
async getErrorAnalysis(wordId, wrongAnswer) {
  if (!this.db) return null;
  const tx = this.db.transaction('errorAnalysis', 'readonly');
  const store = tx.objectStore('errorAnalysis');
  const id = `${wordId}_${wrongAnswer}`;
  return new Promise((resolve, reject) => {
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}

/**
 * 获取某单词所有错题分析
 */
async getErrorAnalysisForWord(wordId) {
  if (!this.db) return [];
  const tx = this.db.transaction('errorAnalysis', 'readonly');
  const store = tx.objectStore('errorAnalysis');
  const index = store.index('wordId');
  return new Promise((resolve, reject) => {
    const request = index.getAll(wordId);
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

/**
 * 批量获取错题分析（按类型筛选）
 */
async getErrorAnalysisByType(type) {
  if (!this.db) return [];
  const tx = this.db.transaction('errorAnalysis', 'readonly');
  const store = tx.objectStore('errorAnalysis');
  const index = store.index('type');
  return new Promise((resolve, reject) => {
    const request = index.getAll(type);
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

/**
 * 获取所有错题分析
 */
async getAllErrorAnalysis() {
  if (!this.db) return [];
  const tx = this.db.transaction('errorAnalysis', 'readonly');
  const store = tx.objectStore('errorAnalysis');
  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

/**
 * 更新错题掌握度
 */
async updateErrorMastery(wordId, wrongAnswer, correct) {
  const existing = await this.getErrorAnalysis(wordId, wrongAnswer);
  if (!existing) return null;

  const mastery = { ...existing.mastery };

  if (correct) {
    mastery.correctCount = (mastery.correctCount || 0) + 1;
    mastery.streakCorrect = (mastery.streakCorrect || 0) + 1;
  } else {
    mastery.errorCount = (mastery.errorCount || 0) + 1;
    mastery.streakCorrect = 0;
  }

  mastery.lastPractice = Date.now();
  mastery.status = calculateErrorStatus(
    mastery.errorCount,
    mastery.correctCount,
    mastery.streakCorrect,
    (mastery.correctCount || 0) / ((mastery.correctCount || 0) + (mastery.errorCount || 0)) || 0
  );

  return await this.saveErrorAnalysis(wordId, wrongAnswer, existing.analysis, mastery);
}

/**
 * 清除过期错题分析缓存（7天）
 */
async clearExpiredErrorAnalysis() {
  if (!this.db) return false;
  const all = await this.getAllErrorAnalysis();
  const now = Date.now();
  const expireTime = 7 * 24 * 60 * 60 * 1000; // 7天

  const tx = this.db.transaction('errorAnalysis', 'readwrite');
  const store = tx.objectStore('errorAnalysis');

  let cleared = 0;
  for (const item of all) {
    if (now - (item.cachedAt || 0) > expireTime) {
      store.delete(item.id);
      cleared++;
    }
  }

  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve(cleared);
    tx.onerror = () => reject(tx.error);
  });
}
```

- [ ] **Step 4: 提交**

```bash
git add src/js/db.js
git commit -m "feat: 添加 errorAnalysis 表和 CRUD 方法"
```

---

### Task 2: AI 服务层 - generateErrorAnalysis 方法

**Files:**
- Modify: `src/js/ai-service.js:280-310` (在 getFallbackResponse 后添加新方法)

- [ ] **Step 1: 添加 generateErrorAnalysis 方法**

在 ai-service.js 的 `getFallbackResponse` 方法之后添加：

```javascript
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
    similarWords: [],
    examples: []
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
```

- [ ] **Step 2: 在错误发生时自动调用分类**

在 ai-service.js 的 `callAPI` 方法中确保 API 配置存在即可，不需要修改。分类逻辑在 db.js 的 `classifyError` 函数中。

- [ ] **Step 3: 提交**

```bash
git add src/js/ai-service.js
git commit -m "feat: 添加 generateErrorAnalysis AI 错题分析功能"
```

---

### Task 3: 界面层 - 错题本 UI

**Files:**
- Modify: `src/pages/review.html` (在 header 区域添加错题本标签)

- [ ] **Step 1: 在 header 添加错题本标签按钮**

找到 header 区域的按钮定义：
```html
<button class="btn-smart" :class="{active: reviewMode === 'smart'}" @click="toggleReviewMode">
  {{ reviewMode === 'smart' ? '智能复习' : '间隔复习' }}
</button>
```

在这之后添加：
```html
<button class="btn-error-book" :class="{active: reviewMode === 'errorBook'}" @click="toggleErrorBookMode">
  错题本
</button>
```

添加对应样式（在 `<style>` 末尾添加）：
```css
.btn-error-book {
  padding: 6px 12px;
  background: var(--accent, #E6A23C);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
}
.btn-error-book.active {
  background: var(--primary);
}
```

- [ ] **Step 2: 添加错题本数据模型和加载方法**

在 `reviewApp.data()` 中添加：
```javascript
// 错题本相关
reviewMode: 'list', // 'list' | 'smart' | 'errorBook'
errorBookData: [],
errorBookFilter: 'all',
isLoadingAnalysis: false,
selectedError: null,
showErrorDetail: false,
errorTypeLabels: {
  spelling: '拼写',
  meaning: '词义',
  phonetic: '发音',
  grammar: '语法'
},
errorStatusLabels: {
  '陌生': { color: '#F56C6C', bg: 'rgba(245, 108, 108, 0.1)' },
  '薄弱': { color: '#E6A23C', bg: 'rgba(230, 162, 60, 0.1)' },
  '掌握中': { color: '#409EFF', bg: 'rgba(64, 158, 255, 0.1)' },
  '已掌握': { color: '#67C23A', bg: 'rgba(103, 194, 58, 0.1)' }
}
```

- [ ] **Step 3: 添加错题本 computed 属性**

在 computed 中添加：
```javascript
// 错题本相关
errorBookFiltered() {
  if (this.errorBookFilter === 'all') {
    return this.errorBookData;
  }
  return this.errorBookData.filter(e => e.type === this.errorBookFilter);
},
errorBookStats() {
  const stats = {
    all: this.errorBookData.length,
    spelling: 0,
    meaning: 0,
    phonetic: 0,
    grammar: 0
  };
  this.errorBookData.forEach(e => {
    if (stats.hasOwnProperty(e.type)) {
      stats[e.type]++;
    }
  });
  return stats;
}
```

- [ ] **Step 4: 添加错题本方法**

在 methods 中添加：
```javascript
// 错题本相关
async toggleErrorBookMode() {
  if (this.reviewMode === 'errorBook') {
    this.reviewMode = 'list';
  } else {
    this.reviewMode = 'errorBook';
    await this.loadErrorBookData();
  }
},
async loadErrorBookData() {
  this.isLoading = true;
  try {
    // 从 errors 表获取错误记录
    const allErrors = await window.db.getErrorPatterns ? await window.db.getErrorPatterns() : [];
    const allAnalysis = await window.db.getAllErrorAnalysis ? await window.db.getAllErrorAnalysis() : [];

    // 获取单词详情
    const allWords = window.vocabulary?.words || [];

    // 合并数据
    this.errorBookData = allErrors.map(error => {
      const wordInfo = allWords.find(w => w.id === error.wordId) || {};
      const analysis = allAnalysis.find(a => a.wordId === error.wordId && a.wrongAnswer === error.wrongAnswer);

      return {
        id: `${error.wordId}_${error.wrongAnswer}`,
        wordId: error.wordId,
        word: wordInfo.word || error.wordId,
        phonetic: wordInfo.phonetic || '',
        translation: wordInfo.translation || '',
        type: error.type,
        wrongAnswer: error.wrongAnswer,
        correctAnswer: error.correctAnswer,
        analysis: analysis?.analysis || null,
        mastery: analysis?.mastery || {
          correctCount: 0,
          errorCount: 0,
          streakCorrect: 0,
          status: '陌生'
        },
        lastError: error.lastError || error.timestamp
      };
    });

    // 按最后错误时间排序
    this.errorBookData.sort((a, b) => b.lastError - a.lastError);
  } catch (e) {
    console.error('加载错题本数据失败', e);
  } finally {
    this.isLoading = false;
  }
},
async showErrorAnalysis(error) {
  this.selectedError = error;
  this.showErrorDetail = true;

  // 如果没有分析，调用 AI 生成
  if (!error.analysis && window.aiService) {
    this.isLoadingAnalysis = true;
    try {
      const analysis = await window.aiService.generateErrorAnalysis(
        error.word,
        error.wrongAnswer,
        error.correctAnswer
      );

      // 保存到数据库
      await window.db.saveErrorAnalysis(error.wordId, error.wrongAnswer, analysis, error.mastery);

      // 更新本地数据
      error.analysis = analysis;
      this.selectedError = { ...error };
    } catch (e) {
      console.error('生成错题分析失败', e);
    } finally {
      this.isLoadingAnalysis = false;
    }
  }
},
closeErrorDetail() {
  this.showErrorDetail = false;
  this.selectedError = null;
},
async startErrorPractice(error) {
  // 触发专项练习（复用现有练习逻辑）
  window.router.navigate('/test?word=' + error.wordId + '&mode=errorPractice&errorType=' + error.type);
}
```

- [ ] **Step 5: 添加错题本模板 HTML**

在 `</div> <!-- 复习按钮 -->之后、`<!-- 键盘快捷键提示 -->` 之前添加：

```html
<!-- 错题本模式 -->
<div v-if="reviewMode === 'errorBook'" class="error-book-mode">
  <!-- 加载状态 -->
  <div v-if="isLoading" class="loading-state">
    <div class="loading-spinner">加载中...</div>
  </div>

  <!-- 无错题空状态 -->
  <div v-else-if="errorBookData.length === 0" class="empty-state">
    <div class="empty-icon">🎉</div>
    <div class="empty-text">暂无错题记录</div>
    <div class="empty-sub">做对的都是练过的题</div>
    <button class="btn btn-secondary" @click="goBack">去学习新单词</button>
  </div>

  <!-- 错题列表 -->
  <div v-else class="error-book-content">
    <!-- 分类筛选 -->
    <div class="filter-tabs">
      <button :class="{active: errorBookFilter === 'all'}" @click="errorBookFilter = 'all'">
        全部 <span class="count">{{ errorBookStats.all }}</span>
      </button>
      <button :class="{active: errorBookFilter === 'spelling'}" @click="errorBookFilter = 'spelling'">
        拼写 <span class="count">{{ errorBookStats.spelling }}</span>
      </button>
      <button :class="{active: errorBookFilter === 'meaning'}" @click="errorBookFilter = 'meaning'">
        词义 <span class="count">{{ errorBookStats.meaning }}</span>
      </button>
      <button :class="{active: errorBookFilter === 'phonetic'}" @click="errorBookFilter = 'phonetic'">
        发音 <span class="count">{{ errorBookStats.phonetic }}</span>
      </button>
      <button :class="{active: errorBookFilter === 'grammar'}" @click="errorBookFilter = 'grammar'">
        语法 <span class="count">{{ errorBookStats.grammar }}</span>
      </button>
    </div>

    <!-- 错题卡片列表 -->
    <div class="error-list">
      <div v-for="error in errorBookFiltered" :key="error.id" class="error-card" @click="showErrorAnalysis(error)">
        <div class="error-header">
          <span class="error-word">{{ error.word }}</span>
          <span class="error-type" :class="error.type">{{ errorTypeLabels[error.type] || error.type }}</span>
          <span class="error-status" :style="{color: errorStatusLabels[error.mastery?.status]?.color, background: errorStatusLabels[error.mastery?.status]?.bg}">
            {{ error.mastery?.status || '陌生' }}
          </span>
        </div>
        <div class="error-body">
          <div class="error-answers">
            <span class="wrong">错：{{ error.wrongAnswer }}</span>
            <span class="correct">对：{{ error.correctAnswer }}</span>
          </div>
        </div>
        <div class="error-actions">
          <button class="btn-action" @click.stop="showErrorAnalysis(error)">查看分析</button>
          <button class="btn-action primary" @click.stop="startErrorPractice(error)">开始练习</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- 错题详情弹窗 -->
<div v-if="showErrorDetail && selectedError" class="modal" @click.self="closeErrorDetail">
  <div class="modal-content error-detail-modal">
    <div class="modal-header">
      <span class="word-text">{{ selectedError.word }}</span>
      <button class="close-btn" @click="closeErrorDetail">×</button>
    </div>
    <div class="modal-body">
      <div class="error-answers-detail">
        <div class="answer wrong">错误选择：{{ selectedError.wrongAnswer }}</div>
        <div class="answer correct">正确答案：{{ selectedError.correctAnswer }}</div>
      </div>

      <div v-if="isLoadingAnalysis" class="analysis-loading">
        <div class="loading-text">AI 正在分析...</div>
      </div>

      <div v-else-if="selectedError.analysis" class="analysis-content">
        <div class="analysis-section">
          <div class="section-label">【AI 分析】</div>
          <div class="section-title">错误原因</div>
          <div class="section-content">{{ selectedError.analysis.reason }}</div>
        </div>

        <div v-if="selectedError.analysis.tips?.length" class="analysis-section">
          <div class="section-title">记忆技巧</div>
          <ul class="tips-list">
            <li v-for="(tip, idx) in selectedError.analysis.tips" :key="idx">{{ tip }}</li>
          </ul>
        </div>

        <div v-if="selectedError.analysis.similarWords?.length" class="analysis-section">
          <div class="section-title">相似词辨析</div>
          <div class="similar-words">{{ selectedError.analysis.similarWords.join(' / ') }}</div>
        </div>
      </div>

      <div class="mastery-section">
        <div class="mastery-divider">────────────────</div>
        <div class="mastery-info">
          <span>掌握进度：</span>
          <div class="mastery-bar">
            <div class="mastery-fill" :style="{width: ((selectedError.mastery?.correctCount || 0) / ((selectedError.mastery?.correctCount || 0) + (selectedError.mastery?.errorCount || 1))) * 100 + '%'}"></div>
          </div>
          <span>{{ Math.round(((selectedError.mastery?.correctCount || 0) / ((selectedError.mastery?.correctCount || 0) + (selectedError.mastery?.errorCount || 1))) * 100) }}%</span>
        </div>
        <div class="mastery-stats">
          <span>正确：{{ selectedError.mastery?.correctCount || 0 }}</span>
          <span>错误：{{ selectedError.mastery?.errorCount || 0 }}</span>
          <span>状态：{{ selectedError.mastery?.status || '陌生' }}</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

- [ ] **Step 6: 添加错题本样式**

在 `<style>` 末尾添加：

```css
/* 错题本样式 */
.error-book-mode {
  padding: 16px;
}

.filter-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.filter-tabs button {
  padding: 8px 12px;
  background: white;
  border: 1px solid #E4E7ED;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.filter-tabs button.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}
.filter-tabs .count {
  font-size: 11px;
  opacity: 0.7;
}

.error-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.error-card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
}
.error-card:active {
  transform: scale(0.98);
}

.error-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
.error-word {
  font-size: 18px;
  font-weight: 600;
}
.error-type {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
}
.error-type.spelling { background: rgba(245, 108, 108, 0.15); color: #F56C6C; }
.error-type.meaning { background: rgba(230, 162, 60, 0.15); color: #E6A23C; }
.error-type.phonetic { background: rgba(64, 158, 255, 0.15); color: #409EFF; }
.error-type.grammar { background: rgba(156, 39, 176, 0.15); color: #9C27B0; }

.error-status {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  margin-left: auto;
}

.error-body { margin-bottom: 12px; }
.error-answers {
  display: flex;
  gap: 16px;
  font-size: 14px;
}
.error-answers .wrong { color: #F56C6C; }
.error-answers .correct { color: #67C23A; }

.error-actions {
  display: flex;
  gap: 8px;
}
.btn-action {
  flex: 1;
  padding: 8px 12px;
  background: #F5F7FA;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
}
.btn-action.primary {
  background: var(--primary);
  color: white;
}

/* 错题详情弹窗 */
.error-detail-modal {
  max-width: 360px;
}
.error-answers-detail {
  margin-bottom: 16px;
}
.error-answers-detail .answer {
  padding: 8px 12px;
  border-radius: 6px;
  margin-bottom: 8px;
  font-size: 14px;
}
.error-answers-detail .wrong {
  background: rgba(245, 108, 108, 0.1);
  color: #F56C6C;
}
.error-answers-detail .correct {
  background: rgba(103, 194, 58, 0.1);
  color: #67C23A;
}

.analysis-loading {
  text-align: center;
  padding: 20px;
  color: var(--text-secondary);
}

.analysis-section {
  margin-bottom: 16px;
}
.section-label {
  font-size: 12px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}
.section-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}
.section-content {
  font-size: 14px;
  color: var(--text-primary);
  line-height: 1.6;
}

.tips-list {
  margin: 0;
  padding-left: 20px;
  font-size: 14px;
}
.tips-list li {
  margin-bottom: 4px;
}

.similar-words {
  font-size: 14px;
  color: var(--primary);
}

.mastery-section {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #E4E7ED;
}
.mastery-divider {
  color: #E4E7ED;
  text-align: center;
  margin-bottom: 12px;
}
.mastery-info {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
.mastery-bar {
  flex: 1;
  height: 8px;
  background: #E4E7ED;
  border-radius: 4px;
  overflow: hidden;
}
.mastery-fill {
  height: 100%;
  background: linear-gradient(90deg, #67C23A 0%, #85CE61 100%);
  transition: width 0.3s ease;
}
.mastery-stats {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--text-secondary);
}
```

- [ ] **Step 7: 提交**

```bash
git add src/pages/review.html
git commit -m "feat: 添加错题本 UI 和交互功能"
```

---

## 实施检查清单

- [ ] Task 1: errorAnalysis 表定义
- [ ] Task 1: levenshteinDistance 和 classifyError 函数
- [ ] Task 1: calculateErrorStatus 函数
- [ ] Task 1: errorAnalysis CRUD 方法
- [ ] Task 2: generateErrorAnalysis 方法
- [ ] Task 2: parseErrorAnalysisResponse 方法
- [ ] Task 3: 错题本标签按钮
- [ ] Task 3: 错题本数据加载
- [ ] Task 3: 错题分类筛选
- [ ] Task 3: 错题卡片列表
- [ ] Task 3: 错题详情弹窗
- [ ] Task 3: AI 分析调用

---

## 验证步骤

1. 打开 review.html，确认三个标签可切换
2. 进入错题本标签，无错题时显示空状态
3. 在其他页面练习答错几道题
4. 返回错题本，确认错题出现且按类型分类
5. 点击某错题「查看分析」，确认 AI 分析显示
6. 关闭弹窗，确认状态保留

---

*计划生成时间：2026-05-20*
*来源：智能错题本设计文档*
