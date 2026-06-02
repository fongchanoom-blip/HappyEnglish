/**
 * HappyEnglish 补充词汇表解析 v2
 * 格式: 每个字段单独一行
 */

const mammoth = require('mammoth');
const fs = require('fs');

async function parseSupplementary() {
  console.log('========== 解析补充词汇表 v2 ==========\n');

  // 读取补充词汇表
  const result = await mammoth.extractRawText({ path: '2026年上海中考英语复习必背补充词汇表-(含默写版).docx' });
  const text = result.value;

  // 分割并清理行
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  console.log('总行数: ' + lines.length);

  const words = [];
  let i = 0;

  // 跳过标题行
  while (i < lines.length && !lines[i].match(/^\d+$/)) {
    i++;
  }

  // 按组解析：序号、词性、释义、英文单词
  while (i < lines.length) {
    const line = lines[i];

    // 检查是否是序号行
    const seqMatch = line.match(/^(\d+)$/);
    if (seqMatch) {
      const seq = parseInt(seqMatch[1]);

      // 查找词性
      let pos = '';
      if (i + 1 < lines.length) {
        const posLine = lines[i + 1];
        if (posLine.match(/^(n\.?|adj\.?|v\.?|adv\.?|prep\.?|conj\.?|pron\.?|art\.?|num\.?|interj\.?|aux\.?|abbr\.?)/i)) {
          pos = posLine.replace(/\.$/, '');
          // 清理多词性（如 n./v.）
          pos = pos.replace(/\//g, ',');
        }
      }

      // 查找释义
      let translations = '';
      if (i + 2 < lines.length) {
        translations = lines[i + 2];
      }

      // 查找英文单词
      let word = '';
      if (i + 3 < lines.length) {
        word = lines[i + 3].trim();
      }

      // 解析翻译（可能有多个）
      if (word && translations) {
        const transList = translations
          .split(/[；;]/)
          .map(t => t.trim())
          .filter(t => t.length > 0 && t.length < 100);

        // 可能有多个单词（如 prince/princess）
        const wordList = word.split(/[;,]\s*/).map(w => w.trim()).filter(w => w.length > 0);

        wordList.forEach(w => {
          words.push({
            word: w,
            pos: pos,
            translations: transList
          });
        });
      }

      // 移动到下一个序号
      i += 4;

      // 跳过空行
      while (i < lines.length && !lines[i].match(/^\d+$/) && !lines[i].match(/^(n\.?|adj\.?|v\.?|adv\.?|prep\.?|conj\.?|pron\.?|art\.?|num\.?|interj\.?|aux\.?|abbr\.?)/i)) {
        // 检查是否到达地理名称部分
        if (lines[i].includes('地理名称') || lines[i].includes('部分')) {
          break;
        }
        i++;
      }
    } else {
      i++;
    }
  }

  console.log('解析到: ' + words.length + ' 个词\n');

  // 显示前30个
  console.log('前30个词:');
  words.slice(0, 30).forEach((w, i) => {
    console.log((i+1) + '. ' + w.word + ' [' + w.pos + '] - ' + w.translations.join('; '));
  });

  console.log('\n后20个词:');
  words.slice(-20).forEach((w, i) => {
    console.log((words.length - 20 + i + 1) + '. ' + w.word + ' [' + w.pos + '] - ' + w.translations.join('; '));
  });

  return words;
}

parseSupplementary()
  .then(words => console.log('\n解析完成'))
  .catch(err => console.error('Error:', err));