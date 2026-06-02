#!/usr/bin/env node

/**
 * MiniMax MCP Server
 * 让Claude Code能够调用MiniMax API
 *
 * 使用方式：
 * 在Claude Code设置中添加MCP Server:
 * npx minimax-server
 */

import { NodeSDK } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const MINIMAX_API_KEY = process.env.MINIMAX_API_KEY || '';
const MINIMAX_BASE_URL = 'https://api.minimax.chat/v1';
const MODEL = 'MiniMax-M3-highspeed';

const server = new NodeSDK({
  name: 'minimax-mcp-server',
  version: '1.0.0',
  server: {
    listNotifications: () => [],
  },
  serverOptions: {
    capabilities: {
      tools: {},
    },
  },
});

server.setRequestHandler({ method: 'tools/list' }, async () => ({
  tools: [
    {
      name: 'minimax_chat',
      description: '调用MiniMax AI进行对话（主要使用MiniMax-M3-highspeed模型）',
      inputSchema: {
        type: 'object',
        properties: {
          prompt: {
            type: 'string',
            description: '对话提示词',
          },
          system: {
            type: 'string',
            description: '系统提示词（可选）',
          },
          max_tokens: {
            type: 'number',
            description: '最大输出token数（默认2000）',
          },
        },
        required: ['prompt'],
      },
    },
  ],
}));

server.setRequestHandler({ method: 'tools/call' }, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === 'minimax_chat') {
    try {
      const { prompt, system = '你是一个有帮助的AI助手。', max_tokens = 2000 } = args;

      const response = await fetch(`${MINIMAX_BASE_URL}/text/chatcompletion_v2`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${MINIMAX_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens,
          messages: [
            { role: 'system', content: system },
            { role: 'user', content: prompt },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content || '';

      return {
        content: [{ type: 'text', text: content }],
      };
    } catch (error) {
      return {
        content: [{ type: 'text', text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  }

  throw new Error(`Unknown tool: ${name}`);
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('MiniMax MCP Server running...');
}

main().catch(console.error);
