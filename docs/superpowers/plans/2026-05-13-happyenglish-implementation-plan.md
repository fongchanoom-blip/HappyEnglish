# HappyEnglish 智能记忆系统实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 将 HappyEnglish 打造成具备 AI 记忆增强功能的智能单词学习应用

**Architecture:** Vue3 单文件应用 + IndexedDB 本地存储 + Minimax AI 服务

**Tech Stack:** Vue 3, IndexedDB, Minimax API, PWA

---

## 任务清单

### 阶段一：基础架构（Task 1-3）

#### Task 1: 扩展记忆系统数据模型

**Files:**
- Modify: `src/js/db.js`
- Modify: `src/js/store.js`
- Test: `tests/memory-system.test.js`

- [ ] **Step 1: 更新 IndexedDB schema**

```javascript
// 新增 stores:
// - memory: 记忆系统核心数据
// - stories: AI 生成的故事缓存
// - errors: 错误模式记录

// db.js 添加新方法
async initMemoryStores() {
  const db = this.db;
  if (!db.objectStoreNames.contains('memory')) {
    db.createObjectStore('memory', { keyPath: 'studentId' });
  }
  if (!db.objectStoreNames.contains('stories')) {
    db.createObjectStore('stories', { keyPath: 'wordId' });
  }
  if (!db.objectStoreNames.contains('errors')) {
    db.createObjectStore('errors', { keyPath: 'id', autoIncrement: true });
  }
}
```

- [ ] **Step 2: 创建学生画像接口**

```typescript
interface StudentProfile {
  studentId: string;
  vocabularyMastery: Map<string, MasteryState>;
  weakPatterns: ErrorPattern[];
  learningBehavior: LearningBehavior;
  createdAt: Date;
  updatedAt: Date;
}

interface MasteryState {
  wordId: string;
  known: number;        // 0-1 掌握度
  recall: number;       // 0-1 回忆率
  lastReview: Date;     // 上次复习时间
  nextReview: Date;     // 下次复习时间
  interval: number;      // 复习间隔（天）
  errors: number;        // 错误次数
}

interface ErrorPattern {
  type: 'phonetic' | 'meaning' | 'spelling' | 'grammar';
  wordId: string;
  wrongAnswer: string;
  count: number;
  lastError: Date;
}
```

- [ ] **Step 3: 实现记忆更新逻辑**

```javascript
// 更新单词掌握度
async updateMastery(wordId, result) {
  const existing = await this.getMastery(wordId);
  const updated = this.calculateNewMastery(existing, result);
  await this.saveMastery(updated);
  await this.updateErrorPatterns(wordId, result);
  await this.scheduleNextReview(updated);
}
```

- [ ] **Step 4: 运行测试验证**

```bash
node tests/memory-system.test.js
# 预期：所有测试通过
```

- [ ] **Step 5: 提交**

```bash
git add src/js/db.js src/js/store.js tests/memory-system.test.js
git commit -m "feat: 添加记忆系统数据模型"
```

---

#### Task 2: 实现间隔重复复习引擎

**Files:**
- Create: `src/js/spaced-repetition.js`
- Modify: `src/pages/review.html`
- Test: `tests/spaced-repetition.test.js`

- [ ] **Step 1: 创建复习引擎核心**

```javascript
// spaced-repetition.js
class SpacedRepetitionEngine {
  // 基于艾宾浩斯遗忘曲线计算复习间隔
  calculateInterval(mastery, result) {
    const base = 1; // 基础间隔（天）
    const easeFactor = mastery.easeFactor || 2.5;
    const interval = mastery.interval || 1;

    if (result.correct) {
      // 正确：增加间隔
      return Math.round(interval * easeFactor);
    } else {
      // 错误：减少间隔
      return Math.max(1, Math.round(interval * 0.5));
    }
  }

  // 获取需要复习的单词
  getWordsForReview(progress, limit = 20) {
    const now = Date.now();
    return progress
      .filter(p => p.nextReview && p.nextReview <= now)
      .sort((a, b) => a.nextReview - b.nextReview)
      .slice(0, limit);
  }

  // 动态调整 eFactor（基于 SM-2 算法改进）
  adjustEaseFactor(current, result) {
    const quality = result.correct ? (result.quality || 3) : 1;
    const adjustment = 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02);
    return Math.max(1.3, current + adjustment);
  }
}
```

- [ ] **Step 2: 实现复习计划调度**

```javascript
// 计算下次复习时间
scheduleNextReview(mastery, result) {
  const interval = this.calculateInterval(mastery, result);
  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);

  mastery.interval = interval;
  mastery.nextReview = nextReview.getTime();
  mastery.easeFactor = this.adjustEaseFactor(mastery.easeFactor || 2.5, result);

  return mastery;
}
```

- [ ] **Step 3: 创建复习页面**

```html
<!-- review.html 复习页面增强 -->
<div class="review-container">
  <div class="review-header">
    <h2>复习 ({{ reviewCount }} 个词待复习)</h2>
  </div>

  <div class="review-card" v-if="currentWord">
    <div class="word">{{ currentWord.word }}</div>
    <div class="meaning">{{ currentWord.meaning }}</div>

    <div class="answer-section">
      <button @click="showHint" class="hint-btn">提示</button>
      <button @click="markKnown" class="known-btn">认识</button>
      <button @click="markUnknown" class="unknown-btn">不认识</button>
    </div>
  </div>

  <div class="progress-bar">
    <div class="progress" :style="{ width: progressPercent + '%' }"></div>
  </div>
</div>
```

- [ ] **Step 4: 编写测试**

```javascript
// tests/spaced-repetition.test.js
async function testIntervalCalculation() {
  const engine = new SpacedRepetitionEngine();
  const mastery = { interval: 1, easeFactor: 2.5 };

  const newInterval = engine.calculateInterval(mastery, { correct: true });
  assert(newInterval === 3, '正确后间隔应为 3 天');

  const failInterval = engine.calculateInterval(mastery, { correct: false });
  assert(failInterval === 1, '错误后间隔应为 1 天');
}
```

- [ ] **Step 5: 提交**

```bash
git add src/js/spaced-repetition.js src/pages/review.html tests/spaced-repetition.test.js
git commit -m "feat: 实现间隔重复复习引擎"
```

---

#### Task 3: 构建 AI 服务层

**Files:**
- Create: `src/js/ai-service.js`
- Create: `api/ai-context.js`
- Test: `tests/ai-service.test.js`

- [ ] **Step 1: 创建 AI 服务接口**

```javascript
// src/js/ai-service.js
class AIService {
  constructor() {
    this.apiKey = window.MINIMAX_API_KEY || '';
    this.baseUrl = 'https://api.minimax.chat/v1';
    this.cache = new Map(); // 内存缓存
  }

  // 生成语境故事
  async generateContextStory(word, context = {}) {
    const cacheKey = `story_${word}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    const prompt = this.buildStoryPrompt(word, context);
    const response = await this.callAPI(prompt);

    this.cache.set(cacheKey, response);
    this.saveToStorage(cacheKey, response);

    return response;
  }

  // 生成错题讲解
  async generateExplanation(word, wrongAnswer, correctAnswer) {
    const prompt = `
请为以下单词生成错题讲解：
- 单词：${word}
- 错误答案：${wrongAnswer}
- 正确答案：${correctAnswer}

讲解要求：
1. 分析错误原因
2. 辨析词义差异
3. 给出正确用法示例
4. 100字以内，简洁明了
`;

    return this.callAPI(prompt);
  }

  // 生成学习报告
  async generateReport(stats) {
    const prompt = `
基于以下学习数据生成周报：
- 已学单词数：${stats.totalWords}
- 正确率：${stats.accuracy}%
- 薄弱词：${stats.weakWords.join(', ')}
- 学习时长：${stats.totalMinutes}分钟

生成包含：总体评估、进步亮点、薄弱点分析、下周建议
`;

    return this.callAPI(prompt);
  }

  // 调用 Minimax API
  async callAPI(prompt) {
    const response = await fetch(`${this.baseUrl}/text/chatcompletion_v2`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'sentiance-3',
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content || '';
  }

  // 构建故事 prompt
  buildStoryPrompt(word, context) {
    return `
请为单词 "${word}" 生成一个生活化场景故事（150字以内）。

要求：
1. 包含中文场景描述和英文例句
2. 融入单词的自然使用
3. 添加记忆锚点帮助学生联想
4. 适合中学生理解水平
5. 故事要有趣味性

主题可选：学校、家庭、运动、朋友、日常对话等
`;
  }
}
```

- [ ] **Step 2: 实现缓存策略**

```javascript
// 缓存已生成的内容
async saveToStorage(key, value) {
  try {
    const stories = await db.getAllStories();
    stories[key] = { content: value, timestamp: Date.now() };
    await db.saveStories(stories);
  } catch (e) {
    console.error('缓存失败', e);
  }
}

// 批量预生成（离线时）
async batchGenerateStories(words, batchSize = 10) {
  const results = [];
  for (let i = 0; i < words.length; i += batchSize) {
    const batch = words.slice(i, i + batchSize);
    const batchPromises = batch.map(w => this.generateContextStory(w));
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);
  }
  return results;
}
```

- [ ] **Step 3: 创建 API 代理（保护 API Key）**

```javascript
// api/ai-context.js
import { Router } from 'express';
const router = Router();

router.post('/generate-story', async (req, res) => {
  const { word, context } = req.body;

  // 调用 Minimax API
  const response = await minimaxChat({
    model: 'sentiance-3',
    messages: [{ role: 'user', content: buildPrompt(word, context) }]
  });

  res.json({ content: response });
});

router.post('/generate-explanation', async (req, res) => {
  const { word, wrongAnswer, correctAnswer } = req.body;
  // ... 类似实现
});

export default router;
```

- [ ] **Step 4: 编写测试**

```javascript
// tests/ai-service.test.js
async function testCache() {
  const ai = new AIService();

  // 第一次调用
  const result1 = await ai.generateContextStory('test');
  assert(result1, '应该返回结果');

  // 第二次调用应该使用缓存
  const cached = ai.cache.get('story_test');
  assert(cached, '应该被缓存');
}
```

- [ ] **Step 5: 提交**

```bash
git add src/js/ai-service.js api/ai-context.js tests/ai-service.test.js
git commit -m "feat: 构建 AI 服务层"
```

---

### 阶段二：核心功能（Task 4-6）

#### Task 4: 语境记忆生成界面

**Files:**
- Create: `src/pages/story.html`
- Create: `src/js/story-component.js`
- Modify: `src/index.html`
- Test: `tests/story.test.js`

- [ ] **Step 1: 创建故事展示组件**

```html
<!-- src/pages/story.html -->
<div class="story-container" v-if="currentStory">
  <div class="story-card">
    <div class="story-header">
      <span class="word-tag">{{ currentStory.word }}</span>
      <button class="close-btn" @click="close">×</button>
    </div>

    <div class="story-content">
      <p class="story-text">{{ currentStory.content }}</p>

      <div class="example-sentence">
        <span class="label">例句：</span>
        <span class="sentence">{{ currentStory.example }}</span>
      </div>
    </div>

    <div class="story-footer">
      <button @click="markHelpful" class="helpful-btn">
        {{ currentStory.helpful ? '✓ 有帮助' : '有帮助' }}
      </button>
      <button @click="nextStory" class="next-btn">下一个</button>
    </div>
  </div>
</div>
```

- [ ] **Step 2: 实现故事生成逻辑**

```javascript
// src/js/story-component.js
const StoryComponent = {
  setup() {
    const currentStory = ref(null);
    const isLoading = ref(false);
    const aiService = new AIService();

    const generateStory = async (word) => {
      isLoading.value = true;
      try {
        const story = await aiService.generateContextStory(word);
        currentStory.value = { word, ...story };
      } finally {
        isLoading.value = false;
      }
    };

    const nextStory = () => {
      // 获取下一个需要学习的单词
      const nextWord = getNextLearnedWord();
      if (nextWord) {
        generateStory(nextWord);
      }
    };

    return { currentStory, isLoading, generateStory, nextStory };
  }
};
```

- [ ] **Step 3: 集成到首页**

```html
<!-- src/index.html 增加故事入口 -->
<div class="story-section" @click="showDailyStory">
  <div class="story-icon">📖</div>
  <div class="story-text">
    <h3>今日故事</h3>
    <p>用故事记住单词</p>
  </div>
</div>
```

- [ ] **Step 4: 编写测试**

```javascript
// tests/story.test.js
async function testStoryGeneration() {
  const ai = new AIService();
  const story = await ai.generateContextStory('abandon');

  assert(story.content, '故事内容不能为空');
  assert(story.word === 'abandon', '单词应该匹配');
  assert(story.content.length <= 200, '故事应该在200字以内');
}
```

- [ ] **Step 5: 提交**

```bash
git add src/pages/story.html src/js/story-component.js src/index.html tests/story.test.js
git commit -m "feat: 添加语境记忆生成界面"
```

---

#### Task 5: 智能错题讲解功能

**Files:**
- Create: `src/components/explanation-modal.js`
- Modify: `src/pages/test.html`
- Test: `tests/explanation.test.js`

- [ ] **Step 1: 创建错题讲解弹窗组件**

```javascript
// src/components/explanation-modal.js
const ExplanationModal = {
  props: ['word', 'wrongAnswer', 'correctAnswer'],
  emits: ['close', 'continue'],

  setup(props, { emit }) {
    const explanation = ref('');
    const isLoading = ref(true);
    const aiService = new AIService();

    onMounted(async () => {
      const result = await aiService.generateExplanation(
        props.word,
        props.wrongAnswer,
        props.correctAnswer
      );
      explanation.value = result;
      isLoading.value = false;
    });

    const askQuestion = async (question) => {
      // 支持追问
      return await aiService.askFollowUp(props.word, question);
    };

    return { explanation, isLoading, askQuestion, emit };
  },

  template: `
    <div class="explanation-modal">
      <div class="modal-backdrop" @click="emit('close')"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h3>📚 错题讲解</h3>
          <button @click="emit('close')">×</button>
        </div>

        <div class="modal-body">
          <div v-if="isLoading" class="loading">AI 正在分析...</div>
          <div v-else class="explanation-text">{{ explanation }}</div>
        </div>

        <div class="modal-footer">
          <button @click="emit('continue')" class="continue-btn">
            继续练习 →
          </button>
        </div>
      </div>
    </div>
  `
};
```

- [ ] **Step 2: 集成到测试页面**

```html
<!-- src/pages/test.html 错误处理部分 -->
<div v-if="showExplanation" class="explanation-overlay">
  <explanation-modal
    :word="currentWord"
    :wrong-answer="userAnswer"
    :correct-answer="correctAnswer"
    @close="showExplanation = false"
    @continue="handleContinue"
  ></explanation-modal>
</div>

<script>
const testApp = {
  setup() {
    // ... 其他逻辑

    const handleAnswer = (answer) => {
      if (!checkAnswer(answer)) {
        showExplanation.value = true;
        recordError(answer);
      } else {
        recordCorrect();
        nextQuestion();
      }
    };

    return { handleAnswer, showExplanation };
  }
};
</script>
```

- [ ] **Step 3: 记录错误模式**

```javascript
// 错误模式记录
const recordError = async (wrongAnswer) => {
  const errorRecord = {
    wordId: currentWord.value,
    wrongAnswer,
    correctAnswer: getCorrectAnswer(),
    timestamp: Date.now()
  };

  await db.saveError(errorRecord);

  // 更新学生的错误模式画像
  const patterns = await db.getErrorPatterns();
  const existing = patterns.find(p =>
    p.wordId === currentWord.value &&
    p.wrongAnswer === wrongAnswer
  );

  if (existing) {
    existing.count++;
    existing.lastError = Date.now();
  } else {
    patterns.push({ ...errorRecord, count: 1 });
  }

  await db.saveErrorPatterns(patterns);
};
```

- [ ] **Step 4: 提交**

```bash
git add src/components/explanation-modal.js src/pages/test.html
git commit -m "feat: 添加智能错题讲解功能"
```

---

#### Task 6: 学习报告功能

**Files:**
- Create: `src/pages/report.html`
- Create: `src/js/report-service.js`
- Modify: `src/pages/profile.html`
- Test: `tests/report.test.js`

- [ ] **Step 1: 创建报告页面**

```html
<!-- src/pages/report.html -->
<div class="report-container">
  <div class="report-header">
    <h2>📊 学习报告</h2>
    <span class="date">{{ reportDate }}</span>
  </div>

  <div class="report-summary">
    <div class="stat-card">
      <div class="stat-value">{{ stats.totalWords }}</div>
      <div class="stat-label">已学单词</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{{ stats.accuracy }}%</div>
      <div class="stat-label">正确率</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{{ stats.streak }}</div>
      <div class="stat-label">连续天数</div>
    </div>
  </div>

  <div class="report-chart">
    <canvas ref="chartCanvas"></canvas>
  </div>

  <div class="weak-words">
    <h3>需要加强的单词</h3>
    <div class="word-list">
      <div v-for="word in weakWords" :key="word.id" class="word-item">
        <span class="word">{{ word.text }}</span>
        <span class="accuracy">{{ word.accuracy }}%</span>
      </div>
    </div>
  </div>

  <div class="ai-suggestions" v-if="aiSuggestions">
    <h3>💡 AI 建议</h3>
    <p>{{ aiSuggestions }}</p>
  </div>
</div>
```

- [ ] **Step 2: 创建报告服务**

```javascript
// src/js/report-service.js
class ReportService {
  constructor(aiService) {
    this.ai = aiService;
  }

  async generateWeeklyReport() {
    const stats = await this.collectWeeklyStats();
    const chartData = this.generateChartData(stats);
    const weakWords = await this.getWeakWords();
    const aiSuggestions = await this.ai.generateReport(stats);

    return {
      date: new Date().toLocaleDateString(),
      stats: {
        totalWords: stats.learned,
        accuracy: stats.accuracy,
        streak: stats.streak
      },
      chart: chartData,
      weakWords,
      aiSuggestions
    };
  }

  async collectWeeklyStats() {
    const progress = await db.getAllProgress();
    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;

    const weekProgress = progress.filter(p => p.updatedAt >= weekAgo);

    return {
      learned: weekProgress.length,
      accuracy: this.calculateAccuracy(weekProgress),
      streak: this.calculateStreak(),
      totalMinutes: this.calculateStudyTime(weekProgress)
    };
  }

  calculateAccuracy(progress) {
    if (progress.length === 0) return 0;
    const correct = progress.filter(p => p.correct).length;
    return Math.round((correct / progress.length) * 100);
  }

  async getWeakWords(limit = 10) {
    const progress = await db.getAllProgress();
    return progress
      .filter(p => p.accuracy < 70)
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, limit);
  }
}
```

- [ ] **Step 3: 集成到个人中心**

```html
<!-- src/pages/profile.html 增加报告入口 -->
<div class="report-section" @click="showReport">
  <div class="report-icon">📊</div>
  <div class="report-text">
    <h3>学习报告</h3>
    <p>查看进步轨迹</p>
  </div>
</div>
```

- [ ] **Step 4: 提交**

```bash
git add src/pages/report.html src/js/report-service.js src/pages/profile.html
git commit -m "feat: 添加学习报告功能"
```

---

### 阶段三：增强功能（Task 7-8）

#### Task 7: 发音分析功能

**Files:**
- Create: `src/components/pronunciation-analyzer.js`
- Modify: `src/pages/test.html`
- Test: `tests/pronunciation.test.js`

- [ ] **Step 1: 创建发音分析组件**

```javascript
// src/components/pronunciation-analyzer.js
const PronunciationAnalyzer = {
  props: ['word', 'expectedPinyin'],
  emits: ['complete'],

  setup(props, { emit }) {
    const isRecording = ref(false);
    const audioBlob = ref(null);
    const score = ref(null);
    const feedback = ref('');

    let mediaRecorder = null;
    let audioChunks = [];

    const startRecording = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];

      mediaRecorder.ondataavailable = (e) => {
        audioChunks.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        audioBlob.value = new Blob(audioChunks, { type: 'audio/webm' });
        await analyzeRecording();
      };

      mediaRecorder.start();
      isRecording.value = true;
    };

    const stopRecording = () => {
      if (mediaRecorder) {
        mediaRecorder.stop();
        isRecording.value = false;
      }
    };

    const analyzeRecording = async () => {
      // 使用语音识别分析发音
      const transcript = await this.recognizeSpeech(audioBlob.value);
      const result = this.comparePhonemes(props.expectedPinyin, transcript);

      score.value = result.score;
      feedback.value = result.feedback;
    };

    return {
      isRecording,
      score,
      feedback,
      startRecording,
      stopRecording,
      emit
    };
  },

  template: `
    <div class="pronunciation-analyzer">
      <div class="word-display">{{ word }}</div>

      <button
        class="record-btn"
        :class="{ recording: isRecording }"
        @click="isRecording ? stopRecording() : startRecording()"
      >
        {{ isRecording ? '⏹ 停止' : '🎤 录音' }}
      </button>

      <div v-if="score !== null" class="result">
        <div class="score">{{ score }}分</div>
        <div class="feedback">{{ feedback }}</div>
        <button @click="emit('complete')">继续</button>
      </div>
    </div>
  `
};
```

- [ ] **Step 2: 提交**

```bash
git add src/components/pronunciation-analyzer.js src/pages/test.html
git commit -m "feat: 添加发音分析功能"
```

---

#### Task 8: 集成测试与优化

**Files:**
- Create: `tests/e2e.test.js`
- Modify: `src/index.html`
- Create: `src/js/analytics.js`

- [ ] **Step 1: 创建端到端测试**

```javascript
// tests/e2e.test.js
async function testLearningFlow() {
  // 1. 打开首页
  await page.goto('/');

  // 2. 开始学习
  await page.click('.start-btn');
  await page.waitForSelector('.word-card');

  // 3. 回答问题
  await page.click('.answer-btn');
  await page.waitForSelector('.result');

  // 4. 查看讲解（如有错误）
  const hasError = await page.$('.explanation-modal');
  if (hasError) {
    await page.click('.continue-btn');
  }

  // 5. 检查进度更新
  const progress = await db.getProgress(currentWordId);
  assert(progress, '应该有进度记录');
}
```

- [ ] **Step 2: 添加数据分析**

```javascript
// src/js/analytics.js
class Analytics {
  trackEvent(name, data) {
    const event = {
      name,
      data,
      timestamp: Date.now(),
      sessionId: this.getSessionId()
    };

    // 发送到分析服务（可选）
    if (window.MIXPANEL_TOKEN) {
      mixpanel.track(name, data);
    }

    // 本地存储用于离线分析
    this.saveLocalEvent(event);
  }

  trackLearning(wordId, result, duration) {
    this.trackEvent('word_learned', {
      wordId,
      correct: result.correct,
      duration,
      timestamp: Date.now()
    });
  }
}
```

- [ ] **Step 3: 最终提交**

```bash
git add tests/e2e.test.js src/js/analytics.js
git commit -m "feat: 完成集成测试框架"
git tag -a v2.0 -m "智能记忆系统 v2.0"
```

---

## 实施检查清单

- [ ] Task 1: 记忆系统数据模型
- [ ] Task 2: 间隔重复复习引擎
- [ ] Task 3: AI 服务层
- [ ] Task 4: 语境记忆生成界面
- [ ] Task 5: 智能错题讲解功能
- [ ] Task 6: 学习报告功能
- [ ] Task 7: 发音分析功能
- [ ] Task 8: 集成测试与优化

---

*计划生成时间：2026-05-13*
*来源：核心功能需求文档*