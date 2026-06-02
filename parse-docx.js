const mammoth = require('mammoth');
const fs = require('fs');

async function parseVocabulary() {
  console.log('正在读取 docx 文件...');

  const result = await mammoth.extractRawText({ path: '2026年中考英语复习必备单词词汇表(精校打印版).docx' });
  const text = result.value;

  // 分割成行并清理
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

  console.log('总行数:', lines.length);

  // 词性映射（标准化）
  const posMap = {
    'n': 'n', 'noun': 'n',
    'adj': 'adj', 'adjective': 'adj',
    'v': 'v', 'verb': 'v',
    'adv': 'adv', 'adverb': 'adv',
    'prep': 'prep', 'preposition': 'prep',
    'conj': 'conj', 'conjunction': 'conj',
    'pron': 'pron', 'pronoun': 'pron',
    'art': 'art', 'article': 'art',
    'num': 'num', 'number': 'num',
    'interj': 'interj', 'interjection': 'interj',
    'aux': 'aux', 'auxiliary': 'aux',
    'modal': 'modal', 'abbr': 'abbr',
    'pl': 'pl'
  };

  const words = [];
  let currentWord = null;

  // 判断是否为标题行
  const isHeader = (line) => {
    return line.includes('序号') || line.includes('课标词汇') || line.includes('音标') || line.includes('词义') || line.includes('拓展');
  };

  // 判断是否为纯数字（序号）
  const isSequence = (line) => {
    return /^\d+$/.test(line.trim()) && parseInt(line.trim()) < 10000;
  };

  // 判断是否为英文单词
  const isWord = (line) => {
    const cleaned = line.replace(/\*+$/, '').trim();
    return /^[a-zA-Z\-\/]+$/.test(cleaned);
  };

  // 判断是否为音标（包含方括号）
  const isPhonetic = (line) => {
    return line.includes('[') && line.includes(']');
  };

  // 提取词性和释义
  const parseMeaning = (line) => {
    // 格式: n.能力；才能 或 adj.能够或有才能的 或 adv.大约 prep.关于
    // 或者: v.(主观上)接受

    // 匹配词性开头的行
    const patterns = [
      /^(n\.?|adj\.?|v\.?|adv\.?|prep\.?|conj\.?|pron\.?|art\.?|num\.?|interj\.?|aux\.?|modal\.?|abbr\.?)\s*\.?\s*(.+)/i,
      /^(n\.?|adj\.?|v\.?|adv\.?|prep\.?|conj\.?|pron\.?|art\.?|num\.?|interj\.?|aux\.?|modal\.?|abbr\.?)\s+(.+)/i
    ];

    for (const pattern of patterns) {
      const match = line.match(pattern);
      if (match) {
        let pos = match[1].replace('.', '').toLowerCase();
        // 标准化词性
        pos = posMap[pos] || pos;

        // 提取释义
        let meanings = match[2] || '';

        // 处理词性组合：如 v.(主观上) 或 v.&adj.
        // 先移除括号内的说明
        meanings = meanings.split(/\(/)[0];

        // 清理释义
        meanings = meanings.trim();

        return { pos, meanings };
      }
    }

    return null;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 跳过标题行
    if (isHeader(line)) continue;

    // 跳过无意义的行
    if (line === '自测' || line === '') continue;

    // 跳过包含 "第 X 页" 的行
    if (line.includes('第') && line.includes('页')) continue;

    // 跳过 "第 X 天" 的行
    if (line.match(/第\s*\d+\s*天/)) continue;

    // 判断为序号 - 保存上一个单词
    if (isSequence(line)) {
      if (currentWord && currentWord.word && currentWord.word.length > 0) {
        words.push(currentWord);
      }
      currentWord = null;
      continue;
    }

    // 判断为英文单词
    if (isWord(line) && !isPhonetic(line)) {
      // 保存上一个单词
      if (currentWord && currentWord.word && currentWord.word.length > 0) {
        words.push(currentWord);
      }

      // 开始新单词
      let wordText = line.replace(/\*+$/, '').trim();
      // 处理 a/an 格式
      if (wordText.includes('/')) {
        wordText = wordText.split('/')[0];
      }

      currentWord = {
        id: '',
        word: wordText,
        phonetic: '',
        pos: '',
        translations: []
      };
      continue;
    }

    // 判断为音标
    if (isPhonetic(line) && currentWord) {
      const phonetic = line.match(/\[.+?\]/)?.[0] || '';
      currentWord.phonetic = phonetic.replace(/[\[\]]/g, '');
      continue;
    }

    // 判断为词性和释义行
    if (currentWord && line.length > 0 && !isSequence(line)) {
      const parsed = parseMeaning(line);

      if (parsed) {
        // 只在词性为空时设置
        if (!currentWord.pos) {
          currentWord.pos = parsed.pos;
        }

        // 提取释义（分割多个含义）
        if (parsed.meanings) {
          // 分割多个释义（用分号或顿号）
          const translations = parsed.meanings
            .split(/[；;]/)
            .map(t => t.trim())
            .filter(t => {
              // 过滤掉包含大量英文的内容（不是纯中文释义）
              if (t.length > 100) return false;
              // 过滤掉单独的数字
              if (/^\d+$/.test(t)) return false;
              // 过滤掉包含英文短语开头的（通常是例句）
              if (/^[a-zA-Z]{2,}\s/.test(t)) return false;
              return true;
            });

          if (translations.length > 0) {
            currentWord.translations = currentWord.translations.concat(translations);
          }
        }
      }
    }
  }

  // 保存最后一个单词
  if (currentWord && currentWord.word && currentWord.word.length > 0) {
    words.push(currentWord);
  }

  // 分配 ID
  words.forEach((w, idx) => {
    w.id = `word_${(idx + 1).toString().padStart(4, '0')}`;
  });

  console.log('\n解析完成，共提取', words.length, '个单词\n');

  // 验证数据 - 检查一些典型问题词汇
  const checkWords = ['able', 'advise', 'achieve', 'about', 'absent', 'accept', 'account'];
  console.log('=== 检查典型词汇 ===');
  checkWords.forEach(w => {
    const found = words.find(item => item.word === w);
    if (found) {
      console.log(`${found.id}: ${found.word} [${found.pos}] ${found.phonetic} - ${found.translations.join('; ')}`);
    } else {
      console.log(`${w} 未找到`);
    }
  });

  console.log('\n=== 前 30 个单词 ===');
  words.slice(0, 30).forEach(w => {
    console.log(`${w.id}: ${w.word} [${w.pos}] ${w.phonetic} - ${w.translations.join('; ')}`);
  });

  console.log('\n=== 后 20 个单词 ===');
  words.slice(-20).forEach(w => {
    console.log(`${w.id}: ${w.word} [${w.pos}] ${w.phonetic} - ${w.translations.join('; ')}`);
  });

  // 保存 JSON
  fs.writeFileSync('vocabulary.json', JSON.stringify(words, null, 2));

  // 保存 JavaScript 格式
  const jsContent = `// HappyEnglish 词汇表 - 共 ${words.length} 个词
// 格式: { id, word, phonetic, pos, translations[] }
// 用户回答其中任意一个翻译即判定正确

const vocabulary = ${JSON.stringify(words, null, 2)};

// 导出词汇表
export default vocabulary;

// 检查答案是否正确（支持多答案）
export function checkAnswer(word, userAnswer) {
  const entry = vocabulary.find(w =>
    w.word.toLowerCase() === word.toLowerCase()
  );
  if (!entry || !entry.translations || entry.translations.length === 0) {
    return false;
  }

  const normalized = userAnswer.trim();

  // 精确匹配或包含匹配
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

  fs.writeFileSync('vocabulary.js', jsContent);
  console.log('\n已保存到 vocabulary.json 和 vocabulary.js');

  // 统计
  const withPhonetic = words.filter(w => w.phonetic.length > 0).length;
  const withPos = words.filter(w => w.pos.length > 0).length;
  const withTranslations = words.filter(w => w.translations && w.translations.length > 0).length;

  console.log('\n=== 数据统计 ===');
  console.log('总单词数:', words.length);
  console.log('有音标:', withPhonetic);
  console.log('有词性:', withPos);
  console.log('有释义:', withTranslations);

  return words;
}

parseVocabulary()
  .then(() => console.log('\n处理完成'))
  .catch(err => console.error('处理失败:', err));