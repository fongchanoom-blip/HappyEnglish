# HappyEnglish 软件著作权补正重写 — 设计文档（v2，基于 src/ 新版）

> 日期：2026-09-01
> 版本：v2（基于 src/ 完整新版重写）
> 阶段：brainstorming（设计已批准，进入实施规划）
> 作者：Claude Code（架构师）
> 状态：✅ 用户已批准（"以 src/ 新版为准"）

---

## 0. 背景与目标

### 0.1 任务来源
中国版权保护中心对 HappyEnglish 的软件著作权登记申请下发了**补正通知书**，理由：

> "提交的文档和源程序鉴别材料模板化程度较高，请提交具有独创性、代表性的文档和源程序鉴别材料。"

### 0.2 项目实际情况（基于 src/ 完整新版 v2）

**项目根路径**：`D:\claude code\HappyEnglish\`
**主入口**：`src/index.html`（不是根目录的 `index.html`）

**真实代码统计**（基于 `src/` 新版，**这是软著撰写的事实基础**）：

| 目录 | 文件类型 | 数量 | 行数 |
|------|---------|------|------|
| `src/js/` | JS 模块 | **16 个** | 5165 |
| `src/pages/` | HTML 页面 | 7 个 | 4185 |
| `src/data/` | 数据文件 | 4 个 | 2084 |
| `src/components/` | 组件 | 1 个 | 275 |
| `src/services/` | 服务 | 1 个 | 349 |
| `src/css/` | 样式 | 1 个 | - |
| `api/` | Edge Function | 1 个 | 212 |
| `mcp-server/` | MCP 服务器 | 1 个 | 110 |
| **总计** | | | **约 12000+ 行** |

**实际技术栈**：

| 维度 | 实际情况 | 验证位置 |
|------|---------|---------|
| 前端框架 | Vue 3（CDN：`unpkg.com/vue@3`），Composition API | [src/index.html](D:/claude%20code/HappyEnglish/src/index.html) + [src/js/app.js:1-2](D:/claude%20code/HappyEnglish/src/js/app.js#L1-L2) |
| 状态管理 | 原生 class-based Store（非 Vuex/Pinia） | [src/js/store.js](D:/claude%20code/HappyEnglish/src/js/store.js) |
| 路由 | 自实现 hash 路由（非 vue-router） | [src/js/router.js](D:/claude%20code/HappyEnglish/src/js/router.js) |
| 本地存储 | IndexedDB（多 objectStore + 事务） | [src/js/db.js](D:/claude%20code/HappyEnglish/src/js/db.js) (616 行) |
| 样式 | 原生 CSS（含 CSS 变量主题） | [src/css/styles.css](D:/claude%20code/HappyEnglish/src/css/styles.css) |
| 后端 | Vercel Edge Function | [api/ai-report.js](D:/claude%20code/HappyEnglish/api/ai-report.js) |
| AI 模型 | MiniMax-M3-highspeed | [api/ai-report.js:73](D:/claude%20code/HappyEnglish/api/ai-report.js#L73) |
| 协议 | 自实现 MCP 服务器 | [mcp-server/minimax-server.js](D:/claude%20code/HappyEnglish/mcp-server/minimax-server.js) |
| 部署 | Vercel（Netlify 备用） | CLAUDE.md |

**现有材料与真实情况矛盾表**：

| 维度 | 现有材料写的 | 实际新版 | 处置 |
|------|------------|---------|------|
| 主入口 | "Vue 3 JavaScript 渐进式框架" | ✅ Vue 3（CDN）实际正确 | 保留 |
| 本地存储 | "IndexedDB 本地持久化" | ✅ IndexedDB 实际正确 | 保留 |
| 代码量 | "约 20 个 JS 文件 / 8000 行" | 16 个 JS + 7 HTML + 4 data ≈ **12000 行** | 修正为更精确数字 |
| Vue 组件 | "约 10 个 Vue 组件" | ❌ 实际不是 .vue 文件，是 `src/js/*.js` 原生 ES6 class 模块 + Vue Composition API 入口 | 删除/改写 |
| 词汇数 | "1594 词" | ✅ 数据真实 | 保留 |
| AI 服务 | "MiniMax API" | ✅ 数据真实 | 保留 |

**注**：根目录的早期 demo（`index.html` 老版 853 行 + `assets/js/app.js` 578 行）作为"开发迭代历史"在说明书中一句话提及即可，不作为软著主体。

**被打回主因**：现有《程序设计说明书》仅 890 字，缺少对 src/ 下 16 个独立模块的具体描述，审核员无法判断独创性。

### 0.3 目标
重新撰写三份软著申请材料：
- **与 src/ 新版代码强对齐**（每段描述都有对应代码引用）
- **重点突出 src/ 下 6 个 P0 创新点**（独家、有代表性）
- **简述 ~10 个 P1 模块**（证明方案完整性）
- **过版权保护中心审核**（不再被打回）

---

## 1. 交付物清单 + 文件组织

### 1.1 三份 .docx

| # | 文件 | 字数预估 | 章节数 | 核心变化 |
|---|------|---------|--------|---------|
| 1 | `HappyEnglish-软件著作权申请内容.docx` | ~3000 字 | 11 节 | 修正 Vue 组件描述、代码量更新到 12000 行 |
| 2 | `HappyEnglish-程序设计说明书.docx` | ~15000 字（**核心交付**） | 9 章 | 从 890 字扩到 1.5 万，覆盖 6 P0 + 10 P1 + 架构图 + 流程图 + 数据字典 |
| 3 | `HappyEnglish-源代码.docx` | 60 页（前 30+后 30，每页 50 行） | 2 节 | 精选 src/ 下代表性代码 |

### 1.2 文件位置
- 草稿/中间产物：`D:\claude code\HappyEnglish\docs\软著补正-工作目录\`
- 最终交付：覆盖 `D:\claude code\HappyEnglish\` 下的同名 .docx

### 1.3 关键工具
- **python-docx**：已确认环境可用
- **Mermaid CLI**：渲染为 PNG，嵌入 docx
- 不引入新 npm 依赖

---

## 2. 三份文档的章节结构

### 2.1 文档 1：《软件著作权登记申请内容》— 改写
- 11 节保持不变
- 重点修正："Vue 组件" → "ES6 class 模块"，代码量 → 12000+ 行
- 新增 MCP 协议描述

### 2.2 文档 2：《程序设计说明书》— 从 890 字扩到 ~15000 字

| 章 | 标题 | 字数 | 与代码的强对应 |
|----|------|------|--------------|
| 1 | 概述（简介/背景/特点/运行环境） | 1500 | CLAUDE.md + PRD.md |
| 2 | 需求分析（Use Case + 非功能需求 + 用户角色） | 1500 | 真实用户故事 |
| 3 | 总体设计（架构图 + 模块划分 + 技术选型理由） | 1500 | src/ 下 16 个模块 + 真实选型 |
| 4 | 详细设计（数据模型 + 接口 + 关键算法 + 业务流程） | 3500 | 6 个 P0 核心算法 |
| 5 | 功能模块设计（7 个页面 + 11 个 JS 模块逐一描述） | 3000 | 每个模块对应真实代码段 |
| 6 | 数据结构（词汇/进度/统计/记忆档案 Schema） | 1500 | vocabulary_full.js + db.js 真实字段 |
| 7 | 接口与协议（HTTP API + MCP 消息 + 存储协议） | 1500 | ai-report.js + minimax-server.js |
| 8 | 部署与运维（Vercel + MiniMax + 性能优化） | 800 | 真实部署配置 |
| 9 | 测试与质量保障 | 700 | docs/测试报告.md |

### 2.3 文档 3：《源代码》— 精选 60 页（不堆全文）

| 部分 | 页数 | 选取内容（基于 src/） |
|------|------|---------------------|
| 前 30 页 | `src/js/spaced-repetition.js` 全 + `src/js/db.js` 部分 + `src/data/vocabulary_full.js` 前 200 词 | 核心算法 + 真实数据 |
| 后 30 页 | `src/js/learning-companion.js` + `src/js/trigger-engine.js` + `src/js/personalized-suggestions.js` + `api/ai-report.js` + `mcp-server/minimax-server.js` | 数字人 + 触发引擎 + 个性化 + AI + MCP |

每页约 50 行代码，行号清晰，含必要注释。

---

## 3. 独创性如何体现（应对"模板化"打回的核心）

### 3.1 关键策略
每个创新点都要回答三个问题：
1. **是什么**（定义）
2. **怎么实现**（真实代码 + 流程图）
3. **为什么这么设计**（设计动机 / 对比竞品 / 效果数据）

### 3.2 6 个 P0 重点创新点（基于 src/ 新版，占说明书 70% 篇幅）

#### P0-1：SM-2 改进版艾宾浩斯算法（最强独家）
- **文件**：[src/js/spaced-repetition.js](D:/claude%20code/HappyEnglish/src/js/spaced-repetition.js)（**707 行**）
- **核心**：公式 `R = e^(-t/S)` + 半衰期计算 + 记忆强度估算
- **错误类型权重系统**（独家）：
  - spelling: 15（拼写错误权重最高）
  - meaning: 10（词义混淆次之）
  - phonetic: 8（发音困难）
  - grammar: 5（语法困难权重最低）
- **差异化**：相比标准 SM-2 算法，加入错误类型权重，更贴合中考英语真实场景
- **独家写法**：与标准 SM-2 对比，论证权重选择的实证依据

#### P0-2：场景触发引擎
- **文件**：[src/js/trigger-engine.js](D:/claude%20code/HappyEnglish/src/js/trigger-engine.js)（**523 行**）
- **核心**：基于学习时长、答题情况、时段等场景触发个性化推荐
- **差异化**：将"被动接受"变为"主动推送"，类似规则引擎 + 决策树
- **独家写法**：与"固定推荐列表"对比，论证场景感知的必要性

#### P0-3：学习伴侣 + 数字人组件
- **文件**：
  - [src/js/learning-companion.js](D:/claude%20code/HappyEnglish/src/js/learning-companion.js)（**304 行**）
  - [src/components/companion-widget.js](D:/claude%20code/HappyEnglish/src/components/companion-widget.js)（**275 行**）
- **核心特征**：
  - 角色"小英"，情绪系统（happy/neutral/worried）
  - 等级 + 经验值 + 里程碑 + 偏好 + 事件系统
  - 气泡提示 UI 组件
- **差异化**：从"工具"升级为"陪伴者"，提升用户留存
- **独家写法**：与"纯文字提示"对比，论证情感化设计的心理学依据

#### P0-4：成就系统
- **文件**：[src/js/achievement-system.js](D:/claude%20code/HappyEnglish/src/js/achievement-system.js)（**772 行**）
- **核心**：多维度成就解锁 + 进度追踪 + 视觉反馈
- **差异化**：与游戏化设计结合，覆盖"学习目标-过程-结果"全链路
- **独家写法**：对比 Duolingo 等竞品的成就系统，论证独特维度

#### P0-5：MCP 服务器 + AI Prompt 工程化（合并）
- **文件**：
  - [mcp-server/minimax-server.js](D:/claude%20code/HappyEnglish/mcp-server/minimax-server.js)（**110 行**）
  - [api/ai-report.js](D:/claude%20code/HappyEnglish/api/ai-report.js)（**212 行**）
- **核心**：
  - MCP 协议实现（2024-2025 新兴 LLM 工具调用协议）
  - 5 段式 AI Prompt 工程化（概览/趋势/分析/目标/激励）
- **独家写法**：与 Function Calling 对比，论证 MCP 的解耦优势

#### P0-6：个性化推荐引擎
- **文件**：[src/js/personalized-suggestions.js](D:/claude%20code/HappyEnglish/src/js/personalized-suggestions.js)（**548 行**）
- **核心**：基于用户记忆档案 + 学习历史 + 错误模式生成个性化建议
- **差异化**：与通用推荐算法对比，论证针对中考英语的领域适配

### 3.3 12 个 P1 提及（每项 100-200 字，共 ~2000 字）

| # | 模块 | 文件 | 行数 | 一句话核心 |
|---|------|------|------|----------|
| 1 | IndexedDB 完整封装 | src/js/db.js | 616 | 多 store + 事务封装 |
| 2 | 记忆档案 | src/js/memory-profile.js | 337 | 用户记忆画像建模 |
| 3 | 错题根因 AI 分析 | api/ai-report.js 部分 | - | 教育心理学 + LLM |
| 4 | 奖励系统 | src/js/rewards.js | 197 | 学习奖励发放机制 |
| 5 | 等级系统 | src/js/level.js | 137 | 用户等级与权限 |
| 6 | 词根词缀 | src/js/etymology.js | 114 | 举一反三记忆法 |
| 7 | 自实现 hash 路由 | src/js/router.js | 104 | 基于 hashchange 的 SPA 路由 |
| 8 | 状态管理 store | src/js/store.js | 253 | class-based 响应式 store |
| 9 | 语音服务 | src/services/speech.js | 349 | 朗读 + 语音识别 |
| 10 | AI 服务封装 | src/js/ai-service.js | 444 | AI 调用统一封装 |
| 11 | 1594 词 9 字段 Schema | src/data/vocabulary_full.js | 1619 | 含 examPoints/difficulty |
| 12 | 30 题批量测试 | src/pages/review.html | 1522 | 3 组 × 10 题模式 |

---

## 4. 撰写流程 + 工具链 + 验收标准

### 4.1 撰写顺序（5 阶段）

| 阶段 | 任务 | 时间预估 | 产出 |
|------|------|---------|------|
| 1 | 重读 src/ 下 16 个 JS + 7 HTML，提取真实代码片段、行号、引用关系 | 1h | 一份"代码引用清单.md" |
| 2 | 画架构图/算法流程图/触发引擎时序图（Mermaid） | 1.5h | 6-8 张 PNG |
| 3 | 重写《软件著作权登记申请内容》 | 1h | 申请内容 v2.docx |
| 4 | 重写《程序设计说明书》（9 章 ~15000 字） | 4-5h | 说明书 v2.docx |
| 5 | 整理《源代码》精选 60 页 | 1h | 源代码 v2.docx |

### 4.2 工具链

| 用途 | 工具 |
|------|------|
| 生成 .docx | **python-docx** |
| 画图 | **Mermaid CLI** → PNG → 嵌入 docx |
| 字数统计 | python 脚本 |
| 自查脚本 | python 脚本 |
| 中文字体 | 思源黑体 / 微软雅黑 |

### 4.3 协作模式

```
阶段 1-2（代码 + 图）→ 你过一眼"代码引用清单"
                       → 拍板"可以引用这些"再继续

阶段 3-5（3 份 docx）→ 你逐份审阅
                       → 反馈修订意见
                       → 我改完最终交付
```

### 4.4 验收清单

#### 自动化检查
- [ ] 3 份 .docx 字符编码正常
- [ ] 说明书字数 ≥ 12000 字
- [ ] 源代码 ≥ 60 页（每页 ≥ 40 行）
- [ ] 全局 grep 无禁用词（保留 "Vue 3" 本身）
- [ ] 实际数字一致性：词汇 1594、JS 模块 16 个、HTML 页面 7 个、代码量 ~12000 行

#### 人工复核
- [ ] 每个 P0 创新点都有"代码引用 + 真实代码片段 + 设计动机 + 对比竞品"
- [ ] 每个 P1 提及都有"代码引用 + 一句话描述"
- [ ] 至少 5 张图（架构图 + 算法流程图 + 触发引擎时序图 + ER 图 + 业务流程图）
- [ ] 至少 3 张表（数据字典表 + 接口表 + 模块清单表）
- [ ] 文档前后无矛盾

### 4.5 完成标尺
- 3 份 .docx 全部生成
- 通过所有自动化检查
- 你过目并确认可提交
- 我提供"自查报告"+"提交清单"

---

## 5. 已发现的非软著相关问题（独立任务，不在本次范围）

### 5.1 🚨 API Key 硬编码问题（部分已改进，部分仍存在）

| 文件 | 实际状态 | 验证位置 |
|------|---------|---------|
| `src/index.html` | ✅ 前端已改进：从 `window.envMinimaxApiKey` 或 `sessionStorage` 读取，无硬编码 | [src/index.html:19-21](D:/claude%20code/HappyEnglish/src/index.html#L19-L21) |
| `mcp-server/minimax-server.js` | ✅ MCP 服务端纯环境变量（空 fallback） | [mcp-server/minimax-server.js:16](D:/claude%20code/HappyEnglish/mcp-server/minimax-server.js#L16) |
| `api/ai-report.js` | ❌ **仍有硬编码 fallback**：`process.env.MINIMAX_API_KEY \|\| '<MINIMAX_API_KEY 已轮换，原值见源码 26 行>'` | [api/ai-report.js:26](D:/claude%20code/HappyEnglish/api/ai-report.js#L26) |
| 根目录 `index.html`（旧 demo） | ❌ 旧 demo 第 549 / 776 行硬编码 | — |

**处置**：
- **软著撰写时**：以代码真实情况为准，**不承诺**未实施的安全控制；只用代码里能看到的事实描述
- **另开独立任务**（不属本次范围）：建议将 `api/ai-report.js:26` 的硬编码 fallback 移除，强制要求环境变量；轮换已泄漏的 API Key

### 5.2 其他
- **docs/INDEX.md 路径描述**：写 `D:\claude code\HappyEnglish\src`，实际新版主入口就在 `src/`，**路径正确**；但要避免与根目录 demo 混淆
- **根目录 demo 与 src/ 新版并存**：根目录的 `index.html`（853 行）+ `assets/js/app.js`（578 行）是早期 demo，仅作为"开发历史"提及，不作为软著主体

---

## 6. 风险与回退

| 风险 | 影响 | 回退方案 |
|------|------|---------|
| Mermaid CLI 未安装 | 无法生成 PNG | 改用 Graphviz / 截图方式 |
| python-docx 中文字体支持不全 | 中文渲染乱码 | 显式指定宋体/微软雅黑 |
| 你对软著章节顺序有不同要求 | 章节结构需调整 | 优先满足版权中心标准格式 |
| src/ 模块阅读量大（5165 行 JS） | 阶段 1 可能耗时更长 | 分批读取，先 P0 6 个，后 P1 10 个 |

---

## 7. 关键文件清单（撰写时重点关注）

| 优先级 | 文件 | 行数 | 说明 |
|--------|------|------|------|
| P0 | `src/js/spaced-repetition.js` | 707 | SM-2 艾宾浩斯算法 |
| P0 | `src/js/trigger-engine.js` | 523 | 场景触发引擎 |
| P0 | `src/js/learning-companion.js` | 304 | 学习伴侣 |
| P0 | `src/components/companion-widget.js` | 275 | 数字人 widget |
| P0 | `src/js/achievement-system.js` | 772 | 成就系统 |
| P0 | `src/js/personalized-suggestions.js` | 548 | 个性化推荐 |
| P0 | `mcp-server/minimax-server.js` | 110 | MCP 服务器 |
| P0 | `api/ai-report.js` | 212 | AI 报告 + Edge Function |
| P1 | `src/js/db.js` | 616 | IndexedDB 封装 |
| P1 | `src/js/ai-service.js` | 444 | AI 服务封装 |
| P1 | `src/js/memory-profile.js` | 337 | 记忆档案 |
| P1 | `src/js/store.js` | 253 | 状态管理 |
| P1 | `src/js/rewards.js` | 197 | 奖励系统 |
| P1 | `src/js/level.js` | 137 | 等级系统 |
| P1 | `src/js/etymology.js` | 114 | 词根词缀 |
| P1 | `src/js/router.js` | 104 | hash 路由 |
| P1 | `src/services/speech.js` | 349 | 语音服务 |
| P1 | `src/data/vocabulary_full.js` | 1619 | 词汇数据库 |
| P1 | `src/index.html` | - | Vue 3 入口 |

---

*设计完成（v2）。下一步：等待用户最终审阅 spec，然后调用 writing-plans skill 生成实施计划。*
