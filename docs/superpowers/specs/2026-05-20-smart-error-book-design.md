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

### 2.3 状态定义

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
  wordId: string,           // 单词ID (keyPath)
  wrongAnswer: string,      // 错误答案 (keyPath)
  analysis: {
    reason: string,         // AI 分析的错误原因
    tips: string[],        // 记忆技巧数组
    similarWords: string[], // 相似词辨析
    examples: string[]      // 例句
  },
  mastery: {
    correctCount: number,   // 正确次数
    errorCount: number,     // 错误次数
    streakCorrect: number,  // 连续正确次数
    lastPractice: number,   // 最后练习时间
    status: string          // '陌生' | '薄弱' | '掌握中' | '已掌握'
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

**分类时机：**
- 用户提交答案错误时，自动根据答案特征分类
- 用户点击「查看分析」时，调用 AI 补充分析

#### 3.2.2 AI 错题分析

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
3. 相似词辨析：列出2-3个易混淆词汇（50字以内）

要求：
- 语言简洁，适合中学生理解
- 重点帮助区分相似选项
```

#### 3.2.3 掌握度追踪

**状态计算逻辑：**
```
if (errorCount === 0) → '已掌握'
else if (streakCorrect >= 5 && mastery >= 0.95) → '已掌握'
else if (streakCorrect >= 3 && mastery >= 0.80) → '掌握中'
else if (correctCount > errorCount) → '薄弱'
else → '陌生'
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
