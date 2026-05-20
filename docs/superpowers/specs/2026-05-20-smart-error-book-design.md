# 智能错题本 设计文档

> 日期：2026-05-20
> 状态：草稿
> 目标：为 HappyEnglish 构建智能错题本功能

---

## 一、概述

### 1.1 背景

HappyEnglish 已有基础的错题记录功能（db.js 中的 errors 表），但缺少统一的错题本管理界面。用户无法快速归类错题、查看 AI 分析、追踪掌握进度。

### 1.2 目标

在 review.html 中新增「错题本」标签，提供：
- 错题快速归类（按错误类型）
- AI 深度分析（错误原因、记忆技巧、相似词辨析）
- 掌握度追踪（直到彻底掌握）

### 1.3 范围

**纳入范围：**
- review.html 新增错题本标签
- 错误类型自动分类逻辑
- AI 错题分析服务（复用 ai-service.js）
- 错题掌握度追踪

**不纳入：**
- 独立的错题本页面（复用 review.html）
- 批量导出功能（已有）
- 复习提醒通知（第二阶段）

---

## 二、交互设计

### 2.1 标签页结构

```
┌─────────────┬─────────────────┬────────────────────┐
│  [错题本]   │   [智能复习]     │    [列表模式]       │
├─────────────┴─────────────────┴────────────────────┤
```

review.html 顶部导航栏已有三个按钮，复用 `btn-smart` 样式新增「错题本」按钮。

### 2.2 错题本标签内容

**无错题空状态：**
```
┌─────────────────────────────────────────────┐
│                                             │
│              🎉                             │
│                                             │
│     暂无错题记录                            │
│     做对的都是练过的题                       │
│                                             │
│     [去学习新单词]                           │
│                                             │
└─────────────────────────────────────────────┘
```

**分类侧边栏：**
- 全部 (all) — 显示所有错题
- 拼写错误 (spelling) — 3道
- 词义混淆 (meaning) — 5道
- 发音困难 (phonetic) — 2道
- 语法困难 (grammar) — 1道

**错题卡片：**
```
┌─────────────────────────────────────────────┐
│ abandon                    [拼写] [薄弱]     │
│ 错误：abandon (选了原形)                    │
│ 正确：abandoned                              │
│                                             │
│ [查看分析]  [开始练习]                       │
└─────────────────────────────────────────────┘
```

**错题详情弹窗（AI 分析）：**
```
┌─────────────────────────────────────────────┐
│ abandon                           [关闭]    │
├─────────────────────────────────────────────┤
│ 错误选择：abandon (动词原形)                 │
│ 正确答案：abandoned (过去分词)               │
│                                             │
│ 【AI 分析】                                  │
│ 错误原因：混淆了动词原形和过去分词形式         │
│                                             │
│ 记忆技巧：                                   │
│ - abandon = 放弃（行为）                     │
│ - abandoned = 被放弃的（状态）                │
│                                             │
│ 相似词辨析：                                 │
│ abandon / abandoned / abandoning              │
│                                             │
│ ────────────────────────────────────────── │
│ 掌握进度：[████████░░] 80%                 │
│ 最后练习：2026-05-19                        │
│ 正确次数：4  错误次数：1                     │
└─────────────────────────────────────────────┘
```

### 2.3 与智能复习的关系

**数据流：**
```
错误发生 → errors 表 → 错题本(独立追踪)
                ↓
         同时更新 memory 表 → 智能复习(通用优先级)
```

**区别：**
| 维度 | 错题本 | 智能复习 |
|------|--------|----------|
| 追踪对象 | 单次错误选择 | 单词整体掌握度 |
| 更新触发 | 专项练习 | 任何练习 |
| 目标 | 解决特定错误 | 优化整体记忆 |

**交互：**
- 错题本「开始练习」→ 进入专项练习模式，只出现同类错误单词
- 练习结果同时更新 errors 表和 memory 表
- 智能复习的优先级根据 memory 表重新计算

### 2.4 状态定义

| 状态 | 定义 | 颜色 |
|------|------|------|
| 陌生 | 错误次数 > 正确次数 | 红色 |
| 薄弱 | 错误次数 ≤ 正确次数，但掌握度 < 80% | 橙色 |
| 掌握中 | 连续3次正确，掌握度 80%-95% | 蓝色 |
| 已掌握 | 连续5次正确，掌握度 ≥ 95% | 绿色 |

---

## 三、功能详细设计

### 3.1 数据模型

**错误记录（errors 表，已存在）：**
```javascript
{
  id: number,           // 自动递增
  wordId: string,       // 单词ID
  type: string,         // 'spelling' | 'meaning' | 'phonetic' | 'grammar'
  wrongAnswer: string,  // 错误答案
  correctAnswer: string, // 正确答案
  timestamp: number,    // 时间戳
  lastError: number     // 最后错误时间
}
```

**新增：错题分析缓存（errorAnalysis 表）：**
```javascript
{
  id: string,               // 唯一ID = wordId + '_' + wrongAnswer (keyPath)
  wordId: string,           // 单词ID
  wrongAnswer: string,      // 错误答案
  analysis: {
    reason: string,         // AI 分析的错误原因
    tips: string[],          // 记忆技巧数组
    similarWords: string[],  // 相似词辨析
    examples: string[]        // 例句
  },
  mastery: {
    correctCount: number,    // 正确次数
    errorCount: number,      // 错误次数
    streakCorrect: number,   // 连续正确次数
    lastPractice: number,     // 最后练习时间
    status: string           // '陌生' | '薄弱' | '掌握中' | '已掌握'
  },
  cachedAt: number,         // 缓存时间
  updatedAt: number         // 更新时间
}
```

### 3.2 核心功能

#### 3.2.1 错题分类

**分类依据：**
- spelling：用户选择的答案与正确答案拼写相似（如 abandon/abandoned）
- meaning：用户选择的答案与正确答案中文释义相近（如 big/large）
- phonetic：用户选择的答案与正确答案发音相似（如 sheep/ship）
- grammar：用户选择的答案语法形式错误（如时态、单复数）

**分类算法：**
```javascript
/**
 * 自动分类错误类型
 * @param {string} wrong - 错误答案
 * @param {string} correct - 正确答案
 * @param {Object} word - 单词完整信息（含音标、词性等）
 * @returns {string} 错误类型
 */
function classifyError(wrong, correct, word) {
  // 1. 拼写检查：编辑距离 < 3 且长度差 < 4
  const editDist = levenshteinDistance(wrong, correct);
  if (editDist < 3 && Math.abs(wrong.length - correct.length) < 4) {
    return 'spelling';
  }

  // 2. 发音检查：前3字符相同（基于音标前缀）
  // 例如：abandon vs abandoned，前3音标相同
  if (wrong.length >= 3 && correct.length >= 3) {
    const wrongPrefix = wrong.slice(0, 3);
    const correctPrefix = correct.slice(0, 3);
    if (wrongPrefix === correctPrefix && editDist < 6) {
      return 'phonetic';
    }
  }

  // 3. 语法检查：常见语法后缀变化
  const grammarSuffixes = ['ing', 'ed', 's', 'es', 'd', 'er', 'est', 'ly'];
  const wrongHasSuffix = grammarSuffixes.some(s => wrong.endsWith(s));
  const correctHasSuffix = grammarSuffixes.some(s => correct.endsWith(s));
  if (wrongHasSuffix && correctHasSuffix && editDist < 5) {
    return 'grammar';
  }

  // 4. 词义检查（默认）
  return 'meaning';
}

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
```

**分类时机：**
- 用户提交答案错误时，自动根据答案特征分类 → 写入 errors 表
- 用户点击「查看分析」时，调用 AI 补充分析 → 写入 errorAnalysis 表

#### 3.2.2 AI 错题分析

**数据流：**
1. 错误发生 → 写入 `errors` 表 + 自动分类
2. 用户点击「查看分析」→ 检查缓存 → 无缓存则调用 AI → 写入 `errorAnalysis` 表
3. 练习更新 → 只更新 `errorAnalysis.mastery`，不触发 AI

**调用时机：**
- 用户首次点击某错题的「查看分析」时
- 缓存过期（7天）后重新生成

**Prompt 模板：**
```
请分析以下错题：

单词：{word}
错误答案：{wrongAnswer}
正确答案：{correctAnswer}

请生成包含以下内容的分析：
1. 错误原因：为什么会选错（50字以内）
2. 记忆技巧：如何记住正确区分（100字以内）
3. 相似词辨析：列出2-3个易混淆词汇（100字以内）

要求：
- 语言简洁，适合中学生理解
- 重点帮助区分相似选项
```

#### 3.2.3 掌握度追踪

**状态计算逻辑：**
```javascript
/**
 * 计算错题掌握状态
 * @param {number} errorCount - 错误次数
 * @param {number} correctCount - 正确次数
 * @param {number} streakCorrect - 连续正确次数
 * @param {number} mastery - 掌握度 (0-1)
 * @returns {string} 状态
 */
function calculateErrorStatus(errorCount, correctCount, streakCorrect, mastery) {
  // 新词从未练习 → 陌生
  if (errorCount === 0 && correctCount === 0) {
    return '陌生';
  }

  // 从未出错且有练习 → 已掌握
  if (errorCount === 0 && correctCount > 0) {
    return '已掌握';
  }

  // 连续5次正确 + 掌握度95%以上 → 已掌握
  if (streakCorrect >= 5 && mastery >= 0.95) {
    return '已掌握';
  }

  // 连续3次正确 + 掌握度80%以上 → 掌握中
  if (streakCorrect >= 3 && mastery >= 0.80) {
    return '掌握中';
  }

  // 正确次数 > 错误次数 → 薄弱
  if (correctCount > errorCount) {
    return '薄弱';
  }

  // 其他 → 陌生
  return '陌生';
}
```

**练习流程：**
1. 用户点击「开始练习」
2. 进入该错题的专项练习（只练习同类错误单词）
3. 答对 → streakCorrect++，correctCount++
4. 答错 → streakCorrect=0，errorCount++
5. 更新掌握度，重新计算状态

### 3.3 关键算法

#### 3.3.1 相似度判断

用于自动分类错误类型：

```javascript
// 计算两个字符串的编辑距离
function levenshteinDistance(a, b) {
  // 简单实现
}

// 判断是否为拼写错误（编辑距离 < 3）
function isSpellingError(wrong, correct) {
  return levenshteinDistance(wrong, correct) < 3;
}

// 判断是否为发音错误（取前3个字符相同）
function isPhoneticError(wrong, correct) {
  return wrong.slice(0, 3) === correct.slice(0, 3);
}
```

---

## 四、技术方案

### 4.1 文件修改

**修改文件：**
- `src/pages/review.html` — 新增错题本标签和界面
- `src/js/db.js` — 新增 errorAnalysis 表和读写方法
- `src/js/ai-service.js` — 新增 generateErrorAnalysis 方法

**新增文件：**
- 无

### 4.2 关键接口

**db.js 新增方法：**
```javascript
// 保存错题分析
async saveErrorAnalysis(wordId, wrongAnswer, analysis, mastery)

// 获取错题分析
async getErrorAnalysis(wordId, wrongAnswer)

// 获取某单词所有错题分析
async getErrorAnalysisForWord(wordId)

// 批量获取错题分析（按类型筛选）
async getErrorAnalysisByType(type)

// 更新错题掌握度
async updateErrorMastery(wordId, wrongAnswer, result)
```

**ai-service.js 新增方法：**
```javascript
// 生成错题分析
async generateErrorAnalysis(word, wrongAnswer, correctAnswer) {
  // 复用现有 callAPI 方法
  // 返回 { reason, tips, similarWords, examples }
}
```

---

## 五、测试要点

### 5.1 单元测试

1. **分类逻辑测试：** 不同错误类型能正确分类
2. **状态计算测试：** 根据练习结果正确更新状态
3. **缓存逻辑测试：** 7天过期重新生成分析

### 5.2 集成测试

1. **完整流程：** 练习一道错题 → 更新状态 → 重新计算优先级
2. **AI 分析：** 首次点击生成分析 → 再次点击使用缓存

---

## 六、交付物检查清单

- [ ] review.html 新增错题本标签
- [ ] review.html 错题分类侧边栏
- [ ] review.html 错题详情弹窗
- [ ] review.html AI 分析结果显示
- [ ] review.html 掌握度追踪进度条
- [ ] db.js errorAnalysis 表定义
- [ ] db.js 错题分析 CRUD 方法
- [ ] ai-service.js generateErrorAnalysis 方法
- [ ] 单元测试覆盖

---

*文档版本：1.0*
*最后更新：2026-05-20*
