# HappyEnglish - 中考英语备考助手

## 项目概述
- **目标用户**：初中生中考英语备考
- **核心功能**：词汇测试、批量测试（3组30题）、AI学习报告、错题分析
- **技术栈**：Vue3 + Vanilla JS + IndexedDB + Minimax API
- **部署**：Netlify（自动部署）

## AI配置
- **模型**：MiniMax-M3-highspeed
- **API**：OpenAI兼容格式
- **端点**：https://api.minimax.chat/v1
- **调用方式**：fetch调用，Bearer token认证

## 数据结构
- **词汇数据**：500词（translations数组格式）
- **进度数据**：IndexedDB 'progress'表，keyPath: wordId
- **错误记录**：IndexedDB 'errorPatterns'表
- **统计数据**：IndexedDB 'stats'表

## 开发规范
- 所有输出使用中文
- 遵循KISS原则（Keep It Simple）
- 优先完善核心功能，避免过度工程化
- 每次commit后更新CHANGELOG

## 快捷命令
- `npm run dev` - 本地开发服务器
- `vercel --prod` - 生产部署
