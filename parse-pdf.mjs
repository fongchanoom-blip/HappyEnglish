import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync, writeFileSync } from 'fs';

async function parsePdf() {
  const data = new Uint8Array(readFileSync('2026年中考英语复习必备单词词汇表(精校打印版).pdf'));

  const loadingTask = pdfjsLib.getDocument({ data });
  const pdf = await loadingTask.promise;

  console.log('总页数:', pdf.numPages);

  let allText = '';

  // 解析所有页
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const text = content.items.map(item => item.str).join('');
    allText += text + '\n';
  }

  // 解析单词
  const words = [];
  const lines = allText.split('\n');

  // 匹配模式:
  // 1 ability [ə'bɪləti] n.能力；才能 have the ability to do sth.
  // 4 about* [ə'baʊt] adv.大约 prep.关于 worry about
  // 2 able ['eɪbl] adj.能够；有才能的 be able to do sth.
  for (const line of lines) {
    // 跳过标题行
    if (!line.trim() ||
        line.includes('页') ||
        line.includes('中考') ||
        line.includes('编者按') ||
        line.includes('课标词汇') ||
        line.includes('序号')) {
      continue;
    }

    // 跳过过长的行（可能是说明文字）
    if (line.length > 300) continue;

    // 匹配: 数字开头，接着是单词
    const match = line.match(/^(\d+)\s+([a-zA-Z\-\/]+(?:\*[a-z])?)\s*(\[.+?\])?\s*(.*)$/);
    if (match) {
      const [, id, word, phonetic, rest] = match;

      // 清理单词
      let cleanWord = word.replace(/\*$/, '');
      if (!/^[a-zA-Z]+$/.test(cleanWord) && !/^[a-zA-Z]+\/[a-zA-Z]+$/.test(cleanWord)) continue;

      // 解析词性和释义
      // 格式: n.能力；才能 或 adj.能够；有才能的 或 adv.大约 prep.关于
      let pos = '';
      let meanings = '';

      // 尝试找到词性标记
      const posMatch = rest.match(/^(n\.?|adj\.?|v\.?|adv\.?|prep\.?|conj\.?|pron\.?|art\.?|num\.?|int\.?|aux\.?|modal\.?|abbr\.?)\s*(.*)$/i);
      if (posMatch) {
        pos = posMatch[1].replace('.', '');
        meanings = posMatch[2] || '';
      } else {
        meanings = rest;
      }

      // 清理释义：移除短语部分
      meanings = meanings.split(/\s+(?=[a-z]+\s)/)[0]; // 保留主要释义

      if (meanings.length > 0) {
        words.push({
          id: `word_${parseInt(id).toString().padStart(4, '0')}`,
          word: cleanWord,
          phonetic: (phonetic || '').replace(/[\[\]]/g, ''),
          pos: pos,
          // meanings 是分号分隔的多个释义
          translations: meanings.split(/[；;]/).map(m => m.trim()).filter(m => m.length > 0)
        });
      }
    }
  }

  console.log('提取到', words.length, '个单词\n');

  // 验证数据
  console.log('前 30 个单词:');
  words.slice(0, 30).forEach(w => {
    console.log(`${w.id}: ${w.word} ${w.phonetic} [${w.pos}] - ${w.translations.join('; ')}`);
  });

  // 保存 JSON
  writeFileSync('vocabulary.json', JSON.stringify(words, null, 2));

  // 保存 JavaScript 格式（用于前端）
  const jsContent = `// HappyEnglish 词汇表 - 共 ${words.length} 个词
// 每条记录包含: id, word, phonetic, pos, translations[]
// translations 是分号分隔的多个中文释义，填写其中任意一个即可判定正确

const vocabulary = ${JSON.stringify(words, null, 2)};

// 导出词汇表和查询函数
export default vocabulary;

// 检查答案是否正确（支持多答案）
export function checkAnswer(word, userAnswer) {
  const entry = vocabulary.find(w => w.word.toLowerCase() === word.toLowerCase());
  if (!entry) return false;

  const normalized = userAnswer.trim();
  return entry.translations.some(t =>
    t === normalized ||
    t.includes(normalized) ||
    normalized.includes(t)
  );
}

// 获取单词信息
export function getWordInfo(word) {
  return vocabulary.find(w => w.word.toLowerCase() === word.toLowerCase());
}
`;

  writeFileSync('vocabulary.js', jsContent);

  console.log('\n数据已保存到 vocabulary.json 和 vocabulary.js');
  console.log('\n文件结构:');
  console.log('- vocabulary.json: 完整数据结构');
  console.log('- vocabulary.js: 前端可用的 ES Module');
  console.log('- 包含 checkAnswer 函数用于判断答案正确性');
}

parsePdf().catch(console.error);