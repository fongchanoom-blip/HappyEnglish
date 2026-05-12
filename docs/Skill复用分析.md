# HappyEnglish - Skill复用分析

## 一、模块复用对照表

| 小树识字模块 | 复用性 | HappyEnglish处理 |
|-------------|--------|------------------|
| **语音服务 speech.js** | ✅ 直接复用 | 复制使用 |
| **语音指令 voice-command.js** | ⚠️ 需修改 | 调整指令集 |
| **智能复习 review-scheduler.js** | ⚠️ 需修改 | 调整复习策略 |
| **音频映射 audio-map.js** | ⚠️ 需重建 | 内容完全不同 |
| **学习页面 learn/** | ⚠️ 需重建 | UI和逻辑完全不同 |
| **家长页面 parent/** | ⚠️ 需重建 | 功能重点不同 |
| **首页 index/** | ⚠️ 需重建 | 目标用户不同 |

---

## 二、可直接复用（复制使用）

### 2.1 services/speech.js - 语音服务
**原因**：语音播放逻辑完全通用

```javascript
// 复用内容
- 本地音频播放
- 语音合成（TTS）
- 录音功能
- 生命周期管理
```

**操作**：直接复制 `miniprogram/services/speech.js`

### 2.2 app.js - 应用入口结构
**原因**：数据存储结构可复用

```javascript
// 复用内容
- globalData结构
- loadUserData()
- saveProgress()
- 学习进度管理
```

**操作**：复制并修改 `miniprogram/app.js`

---

## 三、需修改后复用

### 3.1 services/voice-command.js
**需修改**：
- 指令内容（"下一个" → "下一题"）
- 指令语义（针对题目回答）
- 新增中考相关指令

```javascript
// 新指令示例
'下一题': 'next',
'上一题': 'prev',
'听单词': 'play_word',
'开始听写': 'dictation',
'查看解析': 'show_answer',
```

### 3.2 services/review-scheduler.js
**需修改**：
- 复习策略（调整为中考节奏）
- 薄弱点识别逻辑
- 题目优先级计算

```javascript
// 调整内容
REVIEW_INTERVALS = [1, 2, 4, 7, 14]  // 中考更密集
PRIORITY_WEIGHTS = {                    // 新权重
  mistake: 3,      // 错题优先
  weakness: 2,      // 薄弱点
  normal: 1         // 正常复习
}
```

---

## 四、需重建（不能复用）

| 模块 | 原因 |
|------|------|
| data/characters.js | 内容完全不同（汉字→英语词汇） |
| pages/learn/learn.js | 学习逻辑完全不同 |
| pages/learn/learn.wxml | UI完全不同 |
| pages/learn/learn.wxss | UI风格完全不同 |
| pages/review/review.js | 复习内容完全不同 |
| pages/index/index.js | 目标用户不同 |
| assets/audio/*.mp3 | 内容完全不同 |

---

## 五、复制清单

### 5.1 直接复制

```
D:\claude code\HappyEnglish\src\
├── services\
│   └── speech.js              ← 直接复制
├── app.js                     ← 复制并修改
├── app.json                   ← 复制并修改
├── app.wxss                   ← 复制并修改
└── assets\
    └── audio\                ← 目录结构复制
```

### 5.2 模板参考

```
D:\claude code\HappyEnglish\docs\模板参考\
├── 小树识字_speech.js          ← 服务模板
├── 小树识字_app.js            ← 入口模板
├── 小树识字_数据结构.md       ← 数据结构参考
└── 小树识字_wxss通用样式.md   ← 样式参考
```

---

## 六、开发建议

### 第一步：复制基础框架
1. 复制 speech.js 语音服务
2. 复制 app.js 入口结构
3. 复制 app.json 配置
4. 创建目录结构

### 第二步：重建核心数据
1. 创建中考词汇数据结构
2. 创建语法知识点数据
3. 创建音频映射表
4. 准备音频资源

### 第三步：开发核心页面
1. 首页（学习入口）
2. 词汇学习页
3. 语法练习页
4. 错题本页
5. 家长端

---

*创建时间：2026-05-12*