/**
 * HappyEnglish 词汇库合并脚本 v2
 * 将补充词汇表合并到主词汇库，处理重复
 */

const mammoth = require('mammoth');
const fs = require('fs');

async function mergeVocabulary() {
  console.log('========== 词汇库合并开始 ==========\n');

  // 1. 读取主词汇库
  console.log('1. 读取主词汇库...');
  const mainVocab = JSON.parse(fs.readFileSync('vocabulary.json', 'utf8'));
  console.log('   主词汇库: ' + mainVocab.length + ' 个词');

  // 2. 解析补充词汇表
  console.log('\n2. 解析补充词汇表...');
  const result = await mammoth.extractRawText({ path: '2026年上海中考英语复习必背补充词汇表-(含默写版).docx' });
  const lines = result.value.split('\n').map(l => l.trim()).filter(l => l.length > 0);

  const supplementary = [];
  let i = 0;

  // 跳过标题行
  while (i < lines.length && !lines[i].match(/^\d+$/)) {
    i++;
  }

  // 按组解析
  while (i < lines.length) {
    const line = lines[i];

    // 检查是否是序号行
    const seqMatch = line.match(/^(\d+)$/);
    if (seqMatch) {
      // 查找词性
      let pos = '';
      if (i + 1 < lines.length) {
        const posLine = lines[i + 1];
        if (posLine.match(/^(n\.?|adj\.?|v\.?|adv\.?|prep\.?|conj\.?|pron\.?|art\.?|num\.?|interj\.?|aux\.?|abbr\.?)/i)) {
          pos = posLine.replace(/\.$/, '').replace(/\//g, ',');
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

      // 解析
      if (word && translations) {
        const transList = translations
          .split(/[；;]/)
          .map(t => t.trim())
          .filter(t => t.length > 0 && t.length < 100);

        // 处理多个单词
        const wordList = word.split(/[;,]\s*/).map(w => w.trim()).filter(w => w.length > 0);

        wordList.forEach(w => {
          // 跳过地理名称等复杂词
          if (!w.match(/^[a-zA-Z\s]+$/)) return;

          supplementary.push({
            word: w,
            pos: pos,
            translations: transList
          });
        });
      }

      // 移动到下一个序号
      i += 4;

      // 跳过空行
      while (i < lines.length && !lines[i].match(/^\d+$/) &&
             !lines[i].match(/^(n\.?|adj\.?|v\.?|adv\.?|prep\.?|conj\.?|pron\.?|art\.?|num\.?|interj\.?|aux\.?|abbr\.?)/i)) {
        if (lines[i].includes('地理名称') || lines[i].includes('部分')) break;
        i++;
      }
    } else {
      i++;
    }
  }

  console.log('   补充词汇表: ' + supplementary.length + ' 个词');

  // 3. 合并词汇
  console.log('\n3. 合并词汇...');

  const existingWords = new Map(mainVocab.map(w => [w.word.toLowerCase(), w]));
  let addedCount = 0;
  let mergedCount = 0;

  supplementary.forEach(supp => {
    const wordKey = supp.word.toLowerCase();

    if (existingWords.has(wordKey)) {
      // 词汇已存在 - 合并翻译
      const existing = existingWords.get(wordKey);
      const existingTrans = new Set(existing.translations || []);

      supp.translations.forEach(t => {
        if (!existingTrans.has(t)) {
          existingTrans.add(t);
          mergedCount++;
        }
      });

      existing.translations = [...existingTrans];
    } else {
      // 新增词汇
      const newWord = {
        id: 'word_' + (mainVocab.length + addedCount + 1).toString().padStart(4, '0'),
        word: supp.word,
        phonetic: '',
        pos: supp.pos,
        translations: supp.translations
      };
      mainVocab.push(newWord);
      existingWords.set(wordKey, newWord);
      addedCount++;
    }
  });

  console.log('   新增词汇: ' + addedCount + ' 个');
  console.log('   合并翻译: ' + mergedCount + ' 个');

  // 4. 验证
  console.log('\n4. 数据统计...');

  const total = mainVocab.length;
  const withTranslations = mainVocab.filter(w => w.translations && w.translations.length > 0).length;
  const noTranslations = mainVocab.filter(w => !w.translations || w.translations.length === 0).length;

  console.log('   总单词数: ' + total);
  console.log('   有释义: ' + withTranslations + ' (' + (withTranslations/total*100).toFixed(1) + '%)');
  console.log('   无释义: ' + noTranslations);

  // 5. 抽样验证新增词汇
  if (addedCount > 0) {
    console.log('\n5. 新增词汇示例 (前10个):');
    mainVocab.slice(-addedCount).slice(0, 10).forEach(w => {
      console.log('   ' + w.id + ': ' + w.word + ' [' + w.pos + '] -> ' + w.translations.join('; '));
    });
  }

  // 6. 保存
  console.log('\n6. 保存词汇库...');

  fs.writeFileSync('vocabulary.json', JSON.stringify(mainVocab, null, 2));

  const jsContent = '// HappyEnglish 词汇表 - 共 ' + mainVocab.length + ' 个词\n' +
    '// 格式: { id, word, phonetic, pos, translations[] }\n' +
    '// translations 中的任意一个答案都视为正确\n\n' +
    'const vocabulary = ' + JSON.stringify(mainVocab, null, 2) + ';\n\n' +
    'export default vocabulary;\n\n' +
    '// 检查答案是否正确（支持多答案）\nexport function checkAnswer(word, userAnswer) {\n' +
    '  const entry = vocabulary.find(w => w.word.toLowerCase() === word.toLowerCase());\n' +
    '  if (!entry || !entry.translations || entry.translations.length === 0) return false;\n' +
    '  const normalized = userAnswer.trim().replace(/\\s+/g, "");\n' +
    '  return entry.translations.some(t => {\n' +
    '    const cleanT = t.replace(/\\s+/g, "");\n' +
    '    return cleanT === normalized || cleanT.includes(normalized) || normalized.includes(cleanT);\n' +
    '  });\n' +
    '}\n\n' +
    '// 获取单词信息\nexport function getWordInfo(word) {\n' +
    '  return vocabulary.find(w => w.word.toLowerCase() === word.toLowerCase());\n' +
    '}\n';

  fs.writeFileSync('vocabulary.js', jsContent);

  console.log('\n========== 合并完成 ==========');
  console.log('\n最终结果:');
  console.log('  主词汇库: 1592 个词');
  console.log('  补充词汇: ' + supplementary.length + ' 个词');
  console.log('  新增: ' + addedCount + ' 个');
  console.log('  合并翻译: ' + mergedCount + ' 次');
  console.log('  最终总数: ' + total + ' 个词');

  return mainVocab;
}

mergeVocabulary()
  .then(() => console.log('\n合并完成'))
  .catch(err => console.error('合并失败:', err));