/**
 * HappyEnglish AI 学习报告 API
 * 使用 Minimax API 生成个性化学习报告
 *
 * 端点: /api/ai-report
 * 方法: POST
 * 请求体: {
 *   userStats: {
 *     totalTests: number,      // 总测试次数
 *     correctCount: number,      // 正确次数
 *     wrongCount: number,       // 错误次数
 *     streak: number,           // 当前连击
 *     maxStreak: number,        // 最高连击
 *     weakWords: string[],       // 薄弱词列表
 *     strongWords: string[],    // 掌握好的词列表
 *     recentAccuracy: number,    // 最近正确率
 *     totalWordsLearned: number, // 已学词数
 *     daysActive: number        // 学习天数
 *   }
 * }
 */

const vocab = require('./vocabulary.json');

// Minimax API 配置
const MINIMAX_API_KEY = process.env.MINIMAX_API_KEY || 'sk-cp-2Is80W66tsPfys3wMgI2Xd9Vn5tLGZCkVcMZNo222Nru2bSMEESIfJ6QSpLW0O9keTYnveHdQOtVX-9UY9flpuIAKJh0fOr0o_WxlTIWgVoEtz5k4EmXgUY';
const MINIMAX_API_URL = 'https://api.minimaxi.com/anthropic/v1/messages';

export async function onRequest(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // 处理 OPTIONS 请求
  if (context.request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // 只接受 POST 请求
  if (context.request.method !== 'POST') {
    return new Response(JSON.stringify({ error: '只支持 POST 请求' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  try {
    // 解析请求体
    const body = await context.request.json();
    const { userStats } = body;

    if (!userStats) {
      return new Response(JSON.stringify({ error: '缺少 userStats 参数' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // 构建 Prompt
    const prompt = buildReportPrompt(userStats);

    // 调用 Minimax API
    const response = await fetch(MINIMAX_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MINIMAX_API_KEY}`
      },
      body: JSON.stringify({
        model: 'sentiance-3',
        max_tokens: 2000,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Minimax API Error:', response.status, errorText);
      return new Response(JSON.stringify({
        error: 'AI 服务暂时不可用',
        details: response.status
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const result = await response.json();

    // 解析 AI 响应
    const aiContent = result.choices?.[0]?.message?.content || '';

    // 返回报告
    return new Response(JSON.stringify({
      success: true,
      report: parseReport(aiContent),
      raw: aiContent
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({
      error: '服务器内部错误',
      message: error.message
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

/**
 * 构建学习报告 Prompt
 */
function buildReportPrompt(stats) {
  const accuracy = stats.totalTests > 0
    ? Math.round((stats.correctCount / stats.totalTests) * 100)
    : 0;

  const weakWordDetails = stats.weakWords?.slice(0, 10).map(w => {
    const entry = vocab.find(v => v.word.toLowerCase() === w.toLowerCase());
    if (entry) {
      return `${w} (${entry.translations?.join(', ') || '未知'})`;
    }
    return w;
  }).join('、') || '暂无';

  return `
你是 HappyEnglish 的 AI 学习顾问。用户刚刚完成了一轮英语单词测试，请根据以下数据生成一份个性化的学习报告。

## 用户数据
- 总测试次数: ${stats.totalTests}
- 正确次数: ${stats.correctCount}
- 错误次数: ${stats.wrongCount}
- 当前正确率: ${accuracy}%
- 当前连击: ${stats.streak}
- 最高连击: ${stats.maxStreak}
- 已学习词数: ${stats.totalWordsLearned}
- 学习天数: ${stats.daysActive}天

## 薄弱词（前10个）
${weakWordDetails}

## 请生成以下格式的报告（使用 Markdown）

### 📊 学习概览
[分析整体学习情况，给出简短评价]

### 🔥 学习趋势
- 正确率: ${accuracy}%
- 薄弱词攻克: ${stats.weakWords?.length || 0}个

### 💡 AI 分析
[分析薄弱词的特点，给出记忆建议。注意分析词根、词缀、发音规律等]

### 🎯 下周目标
[给出3-5个具体可行的学习目标]

### 🏆 激励语
[一句鼓励的话]

---
请用中文回复，保持简洁，控制在 500 字以内。
`;
}

/**
 * 解析 AI 返回的报告
 */
function parseReport(content) {
  // 提取各部分内容
  const sections = {
    overview: '',
    trend: '',
    analysis: '',
    goals: '',
    motivation: ''
  };

  // 简单的正则提取（根据 Markdown 标题）
  const matches = content.match(/###\s*([^\n]+)\n([\s\S]*?)(?=###|$)/g) || [];
  matches.forEach(match => {
    const titleMatch = match.match(/###\s*([^\n]+)/);
    const contentMatch = match.match(/###\s*[^\n]+\n([\s\S]*?)$/);
    if (titleMatch && contentMatch) {
      const title = titleMatch[1];
      const text = contentMatch[1].trim();

      if (title.includes('概览')) sections.overview = text;
      else if (title.includes('趋势')) sections.trend = text;
      else if (title.includes('分析')) sections.analysis = text;
      else if (title.includes('目标')) sections.goals = text;
      else if (title.includes('激励')) sections.motivation = text;
    }
  });

  // 如果没有匹配到完整格式，尝试简化解析
  if (!sections.overview && content) {
    sections.overview = content.substring(0, 500);
  }

  return sections;
}