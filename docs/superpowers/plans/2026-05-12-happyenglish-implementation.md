# HappyEnglish 实现计划

> **Agent执行指南：** 使用 `superpowers:subagent-driven-development` 或 `superpowers:executing-plans` 执行任务。任务使用 `TODO` 复选框语法。

**目标：** 构建中考英语单词记忆与测试系统MVP（纯本地版本）

**架构：**
- 前端：Vue 3 CDN（SPA单页应用，响应式数据绑定）
- 存储：IndexedDB（本地优先，验证产品价值后扩展云端）
- 部署：Vercel（静态部署，免费）
- 无云端同步（Phase 2再考虑）

**技术栈：** Vue 3 CDN + IndexedDB + 原生CSS

---

## 项目结构

```
HappyEnglish/
├── index.html              # SPA入口
├── pages/
│   ├── home.html           # 首页（仪表盘）
│   ├── test.html           # 测试页面
│   ├── review.html         # 错题复习
│   ├── stats.html          # 学习报告
│   └── profile.html        # 个人中心
├── src/
│   ├── css/
│   │   └── styles.css      # 全局样式（莫兰迪色系）
│   ├── js/
│   │   ├── app.js          # Vue应用入口
│   │   ├── router.js       # SPA路由
│   │   ├── store.js        # 状态管理
│   │   ├── db.js           # IndexedDB操作
│   │   └── utils.js        # 工具函数
│   └── data/
│       └── vocabulary.js   # 初中1600词数据
├── assets/
│   └── avatars/            # 预设头像（10套）
├── docs/
│   └── superpowers/
│       ├── specs/          # 设计文档
│       └── plans/          # 实现计划
└── .claude/
    └── settings.json
```

---

## Agent 1：核心循环

> **负责人：** 初始化项目 + 词汇数据 + 标准测试
> **预计时间：** 60分钟
> **验收标准：** 能完成一次完整的测试流程

---

### 任务 1.1：项目初始化

**文件：**
- 创建：`index.html`
- 创建：`src/css/styles.css`
- 创建：`src/js/app.js`
- 创建：`src/js/router.js`

- [ ] **Step 1: 创建 index.html**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HappyEnglish - 中考英语备考</title>
  <link rel="stylesheet" href="src/css/styles.css">
</head>
<body>
  <div id="app">
    <!-- Vue SPA 内容 -->
  </div>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="src/js/router.js"></script>
  <script src="src/js/store.js"></script>
  <script src="src/js/db.js"></script>
  <script src="src/js/app.js"></script>
</body>
</html>
```

- [ ] **Step 2: 创建全局样式 src/css/styles.css**

```css
:root {
  /* 莫兰迪色系 */
  --primary: #4A90D9;
  --success: #67C23A;
  --warning: #E6A23C;
  --danger: #F56C6C;
  --text-primary: #303133;
  --text-secondary: #909399;
  --bg-page: #F5F7FA;
  --bg-card: #FFFFFF;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, sans-serif; background: var(--bg-page); }
.container { max-width: 750px; margin: 0 auto; padding: 16px; }
.card { background: var(--bg-card); border-radius: 16px; padding: 20px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
/* 按钮、进度条等样式... */
```

- [ ] **Step 3: 创建 Vue 路由 src/js/router.js**

```javascript
const routes = {
  '/': 'pages/home.html',
  '/test': 'pages/test.html',
  '/review': 'pages/review.html',
  '/stats': 'pages/stats.html',
  '/profile': 'pages/profile.html'
};

class Router {
  async navigate(path) {
    const html = routes[path] || routes['/'];
    const content = await fetch(html).then(r => r.text());
    document.getElementById('app').innerHTML = content;
    window.location.hash = path;
  }

  init() {
    window.addEventListener('hashchange', () => {
      const path = window.location.hash.slice(1) || '/';
      this.navigate(path);
    });
    this.navigate(window.location.hash.slice(1) || '/');
  }
}
window.router = new Router();
```

- [ ] **Step 4: 创建状态管理 src/js/store.js**

```javascript
const store = Vue.createApp({
  data() {
    return {
      user: null,
      words: [],
      currentTest: null,
      streak: 0,
      points: 0,
      level: 1,
      badges: []
    }
  },
  methods: {
    updatePoints(delta) {
      this.points += delta;
      // 检查升级
      if (this.points >= this.level * 100) {
        this.level++;
      }
    },
    updateStreak() {
      this.streak++;
    }
  }
}).mount('#app');
```

- [ ] **Step 5: 提交**

```bash
git add -A
git commit -m "feat: 项目初始化 - Vue3 SPA架构"
```

---

### 任务 1.2：词汇数据

**文件：**
- 创建：`src/data/vocabulary.js`（1600词核心数据）
- 创建：`src/js/db.js`（IndexedDB操作）

- [ ] **Step 1: 创建词汇数据 src/data/vocabulary.js**

```javascript
const vocabulary = {
  // 初中核心词汇（分批导入，先做50个示例）
  words: [
    { id: 'w001', word: 'able', phonetic: '/ˈeɪbl/', translation: '能够', level: 'adj', round: 1 },
    { id: 'w002', word: 'about', phonetic: '/əˈbaʊt/', translation: '关于', level: 'prep', round: 1 },
    { id: 'w003', word: 'above', phonetic: '/əˈbʌv/', translation: '在...上面', level: 'prep', round: 1 },
    // ... 继续添加核心词汇
    // 最终目标：1600词
  ]
};
export default vocabulary;
```

- [ ] **Step 2: 创建 IndexedDB 操作 src/js/db.js**

```javascript
class Database {
  constructor() {
    this.dbName = 'HappyEnglish';
    this.version = 1;
    this.db = null;
  }

  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        // 创建对象存储
        if (!db.objectStoreNames.contains('words')) {
          db.createObjectStore('words', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('progress')) {
          db.createObjectStore('progress', { keyPath: 'wordId' });
        }
        if (!db.objectStoreNames.contains('stats')) {
          db.createObjectStore('stats', { keyPath: 'id' });
        }
      };
    });
  }

  async saveProgress(wordId, result) {
    // 保存单词学习进度
  }

  async getProgress(wordId) {
    // 获取单词进度
  }
}
window.db = new Database();
```

- [ ] **Step 3: 验证数据存储**

打开浏览器控制台，执行：
```javascript
await db.init();
db.saveProgress('w001', { correct: true, timestamp: Date.now() });
```

- [ ] **Step 4: 提交**

```bash
git add -A
git commit -m "feat: 词汇数据 + IndexedDB存储"
```

---

### 任务 1.3：标准测试

**文件：**
- 创建：`pages/test.html`

- [ ] **Step 1: 创建测试页面**

```html
<div class="test-page">
  <div class="test-header">
    <button onclick="router.navigate('/')">← 返回</button>
    <div class="mode-toggle">
      <button :class="{active: mode === 'cn2en'}" @click="mode = 'cn2en'">中→英</button>
      <button :class="{active: mode === 'en2cn'}" @click="mode = 'en2cn'">英→中</button>
    </div>
    <div class="streak">连击: {{streak}}</div>
  </div>

  <div class="question-card">
    <div class="question-text">
      {{ mode === 'cn2en' ? currentWord.translation : currentWord.word }}
    </div>
    <input
      v-model="answer"
      @keyup.enter="submitAnswer"
      placeholder="请输入答案"
      class="answer-input"
      autofocus
    />
    <button @click="submitAnswer" class="submit-btn">确认</button>
  </div>

  <div class="result-feedback" v-if="showResult">
    <div :class="isCorrect ? 'correct' : 'wrong'">
      {{ isCorrect ? '✓ 正确' : '✗ 错误' }}
    </div>
  </div>
</div>
```

- [ ] **Step 2: 实现测试逻辑**

```javascript
const testApp = {
  data() {
    return {
      mode: 'cn2en',  // 中→英 或 英→中
      words: [],
      currentIndex: 0,
      answer: '',
      streak: 0,
      showResult: false,
      isCorrect: false
    }
  },
  computed: {
    currentWord() {
      return this.words[this.currentIndex];
    }
  },
  methods: {
    submitAnswer() {
      const correct = this.answer.trim().toLowerCase() ===
        this.currentWord.word.toLowerCase();

      this.isCorrect = correct;
      this.showResult = true;

      // 保存结果
      db.saveProgress(this.currentWord.id, {
        correct,
        timestamp: Date.now()
      });

      // 更新连击
      if (correct) {
        this.streak++;
        store.updatePoints(10);
      } else {
        this.streak = 0;
      }

      // 下一题
      setTimeout(() => {
        this.showResult = false;
        this.answer = '';
        this.currentIndex = (this.currentIndex + 1) % this.words.length;
      }, 1000);
    }
  }
};
```

- [ ] **Step 3: 测试完整流程**

1. 打开 `/test` 页面
2. 输入答案，验证正确/错误反馈
3. 检查IndexedDB中的记录

- [ ] **Step 4: 提交**

```bash
git add -A
git commit -m "feat: 标准测试功能 - 双向测试+连击+反馈"
```

---

## Agent 2：掌握度系统

> **负责人：** 掌握度计算 + 热力词云可视化
> **预计时间：** 60分钟
> **验收标准：** 绿色/红色词云正确显示动态数量

---

### 任务 2.1：掌握度算法

**文件：**
- 修改：`src/js/db.js`
- 修改：`src/js/store.js`

- [ ] **Step 1: 实现掌握度计算**

```javascript
// src/js/level.js

export function calculateLevel(wordProgress) {
  const { correctCount = 0, wrongCount = 0, totalTests = 0 } = wordProgress;
  const accuracy = totalTests > 0 ? (correctCount / totalTests) * 100 : 0;

  if (accuracy >= 90 && wrongCount <= 1) return 'master';      // 精通
  if (accuracy >= 70) return 'familiar';                      // 熟悉
  if (accuracy >= 40) return 'weak';                            // 薄弱
  return 'unknown';                                              // 陌生
}

export function getWordsByLevel(allProgress) {
  const levels = { master: [], familiar: [], weak: [], unknown: [] };

  for (const [wordId, progress] of Object.entries(allProgress)) {
    const level = calculateLevel(progress);
    levels[level].push(wordId);
  }

  return levels;
}
```

- [ ] **Step 2: 更新 store**

```javascript
// 在 store.js 中添加
updateLevel(wordId) {
  const progress = db.getProgress(wordId);
  const level = calculateLevel(progress);
  this.wordLevels[wordId] = level;
}
```

- [ ] **Step 3: 测试掌握度计算**

```javascript
// 控制台测试
calculateLevel({ correctCount: 9, wrongCount: 1, totalTests: 10 }); // 'master'
calculateLevel({ correctCount: 3, wrongCount: 2, totalTests: 5 });   // 'familiar'
calculateLevel({ correctCount: 2, wrongCount: 3, totalTests: 5 });   // 'weak'
calculateLevel({ correctCount: 0, wrongCount: 2, totalTests: 2 });  // 'unknown'
```

- [ ] **Step 4: 提交**

```bash
git add -A
git commit -m "feat: 掌握度算法 - 四级计算逻辑"
```

---

### 任务 2.2：热力词云（简化版）

**文件：**
- 创建：`pages/home.html`（仪表盘+热力词云）

- [ ] **Step 1: 创建仪表盘页面**

```html
<div class="dashboard">
  <!-- 顶部统计 -->
  <div class="stats-header">
    <div class="stat-item">
      <span class="stat-num">{{ learnedWords }}</span>
      <span class="stat-label">已学词</span>
    </div>
    <div class="stat-item">
      <span class="stat-num">{{ accuracy }}%</span>
      <span class="stat-label">正确率</span>
    </div>
    <div class="stat-item">
      <span class="stat-num">{{ streak }}</span>
      <span class="stat-label">连击</span>
    </div>
  </div>

  <!-- 热力词云 -->
  <div class="word-cloud-section">
    <h3>掌握较好</h3>
    <div class="word-cloud green">
      <span
        v-for="word in masterWords"
        :key="word.id"
        :class="'size-' + getWordSize(word)"
        @click="startTest(word.id)"
      >
        {{ word.word }}
      </span>
    </div>

    <h3 style="margin-top: 20px;">需要加强</h3>
    <div class="word-cloud red">
      <span
        v-for="word in weakWords"
        :key="word.id"
        :class="'size-' + getWordSize(word)"
        @click="startTest(word.id)"
      >
        {{ word.word }}
      </span>
    </div>
  </div>

  <!-- 空状态提示 -->
  <div v-if="masterWords.length === 0 && weakWords.length === 0" class="empty-state">
    <p>还没有学习记录，开始你的第一次测试吧！</p>
    <button @click="router.navigate('/test')">开始测试</button>
  </div>
</div>
```

- [ ] **Step 2: 实现字号计算**

```javascript
getWordSize(word) {
  const progress = db.getProgress(word.id);
  const wrongCount = progress?.wrongCount || 0;

  if (wrongCount <= 1) return 'large';   // 42px
  if (wrongCount <= 3) return 'medium'; // 32px
  if (wrongCount <= 5) return 'small';   // 22px
  return 'tiny';                          // 14px
}
```

- [ ] **Step 3: 样式**

```css
.word-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px;
  background: white;
  border-radius: 12px;
}

.word-cloud span {
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 8px;
  transition: transform 0.2s;
}

.word-cloud span:hover {
  transform: scale(1.1);
}

.word-cloud.green span { background: rgba(103, 194, 58, 0.1); color: #67C23A; }
.word-cloud.red span { background: rgba(245, 108, 108, 0.1); color: #F56C6C; }

.size-large { font-size: 42px; font-weight: 700; }
.size-medium { font-size: 32px; font-weight: 600; }
.size-small { font-size: 22px; }
.size-tiny { font-size: 14px; }
```

- [ ] **Step 4: 测试热力词云**

1. 先完成几道测试题
2. 返回首页，查看热力词云是否正确显示
3. 点击词跳转到测试该词

- [ ] **Step 5: 提交**

```bash
git add -A
git commit -m "feat: 热力词云 - 动态显示掌握度"
```

---

## Agent 3：激励系统

> **负责人：** 积分+徽章+等级+错题复习
> **预计时间：** 90分钟
> **验收标准：** 完整的激励闭环 + 错题导出

---

### 任务 3.1：积分与徽章

**文件：**
- 修改：`src/js/store.js`
- 修改：`pages/profile.html`

- [ ] **Step 1: 实现积分系统**

```javascript
// 在 store.js 中
const rewards = {
  correctAnswer: { master: 5, familiar: 10, weak: 20, unknown: 30 },
  streak: { 10: 50, 20: 100, 50: 300 },  // 连击奖励
  badgeUnlock: 100,
  roundComplete: 200
};

// 计算奖励
calculateReward(wordId, correct) {
  if (!correct) return 0;

  const level = this.getWordLevel(wordId);
  return rewards.correctAnswer[level];
}
```

- [ ] **Step 2: 实现徽章系统**

```javascript
const badges = [
  { id: 'first_test', name: '初次通关', condition: (s) => s.totalTests >= 1 },
  { id: 'streak_10', name: '连胜新星', condition: (s) => s.maxStreak >= 10 },
  { id: 'master_5', name: '掌握5词', condition: (s) => s.masterCount >= 5 },
  // ... 更多徽章
];

checkBadgeUnlock() {
  for (const badge of badges) {
    if (!this.earnedBadges.includes(badge.id) && badge.condition(this.stats)) {
      this.earnedBadges.push(badge.id);
      this.showBadgeNotification(badge);
    }
  }
}
```

- [ ] **Step 3: 徽章页面**

```html
<div class="badges-page">
  <h2>成就徽章</h2>
  <div class="badges-grid">
    <div
      v-for="badge in allBadges"
      :key="badge.id"
      :class="['badge-item', earned(badge.id) ? 'earned' : 'locked']"
    >
      <div class="badge-icon">{{ badge.icon }}</div>
      <div class="badge-name">{{ badge.name }}</div>
      <div class="badge-desc">{{ badge.desc }}</div>
    </div>
  </div>
</div>
```

- [ ] **Step 4: 提交**

```bash
git add -A
git commit -m "feat: 积分+徽章系统"
```

---

### 任务 3.2：等级与头像

**文件：**
- 创建：`assets/avatars/`（预设头像图片）
- 修改：`pages/profile.html`

- [ ] **Step 1: 等级计算**

```javascript
// Lv.1-50，每100分升一级
calculateLevel(points) {
  return Math.floor(points / 100) + 1;
}

// 段位（简化版：每10级一个段位）
getSegment(level) {
  if (level <= 5) return '青铜';
  if (level <= 10) return '白银';
  if (level <= 15) return '黄金';
  if (level <= 20) return '铂金';
  if (level <= 25) return '钻石';
  if (level <= 30) return '星耀';
  return '王者';
}
```

- [ ] **Step 2: 头像升级逻辑**

```javascript
const avatarParts = {
  hair: ['短发', '长发', '马尾'],
  cloth: ['校服', '运动服', '正装'],
  accessory: ['无', '眼镜', '帽子', '领带']
};

// 根据等级解锁
getAvatarAccessories(level) {
  return {
    hair: avatarParts.hair[Math.min(Math.floor(level / 20), 2)],
    cloth: avatarParts.cloth[Math.min(Math.floor(level / 15), 2)],
    accessory: avatarParts.accessory[Math.min(Math.floor(level / 10), 3)]
  };
}
```

- [ ] **Step 3: 个人中心页面**

```html
<div class="profile-page">
  <div class="avatar-display">
    <img :src="'assets/avatars/level-' + level + '.png'" />
    <div class="level-badge">Lv.{{ level }}</div>
  </div>
  <div class="segment-progress">
    <div class="segment-name">{{ segment }}</div>
    <div class="progress-bar">
      <div :style="{width: (points % 100) + '%'}"></div>
    </div>
    <div class="points-text">{{ points }} / {{ (level + 1) * 100 }}</div>
  </div>
</div>
```

- [ ] **Step 4: 提交**

```bash
git add -A
git commit -m "feat: 等级+头像系统"
```

---

### 任务 3.3：错题复习与导出

**文件：**
- 创建：`pages/review.html`

- [ ] **Step 1: 错题列表**

```html
<div class="review-page">
  <h2>错题复习</h2>

  <div class="filter-bar">
    <button :class="{active: filter === 'all'}" @click="filter = 'all'">全部</button>
    <button :class="{active: filter === 'weak'}" @click="filter = 'weak'">薄弱</button>
    <button :class="{active: filter === 'unknown'}" @click="filter = 'unknown'">陌生</button>
  </div>

  <div class="wrong-words-list">
    <div v-for="word in filteredWords" :key="word.id" class="word-item">
      <div class="word-main">
        <span class="word-text">{{ word.word }}</span>
        <span class="word-phonetic">{{ word.phonetic }}</span>
      </div>
      <div class="word-translation">{{ word.translation }}</div>
      <div class="word-stats">
        错误: {{ getWrongCount(word.id) }} 次 |
        <button @click="testWord(word.id)">测试</button>
      </div>
    </div>
  </div>

  <button @click="exportWords" class="export-btn">导出错题</button>
</div>
```

- [ ] **Step 2: 导出功能**

```javascript
async exportWords() {
  const words = this.getWeakWords();
  let content = '单词\t音标\t中文\t错误次数\n';
  words.forEach(w => {
    content += `${w.word}\t${w.phonetic}\t${w.translation}\t${w.wrongCount}\n`;
  });

  // 下载TXT
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'happyenglish-错题本.txt';
  a.click();
}
```

- [ ] **Step 3: 测试导出**

1. 完成几道测试题（故意答错）
2. 打开错题复习页面
3. 点击导出，验证文件下载

- [ ] **Step 4: 提交**

```bash
git add -A
git commit -m "feat: 错题复习+导出功能"
```

---

## 部署检查

在完成所有任务后：

- [ ] 本地测试所有页面
- [ ] 修复发现的问题
- [ ] 部署到 Vercel
- [ ] 最终验证

```bash
# 部署命令
vercel --prod
```

---

## 快速导航

- [ ] Agent 1：完成
- [ ] Agent 2：完成
- [ ] Agent 3：完成
- [ ] 部署：完成