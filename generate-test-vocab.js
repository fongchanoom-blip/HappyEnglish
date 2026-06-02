/**
 * 生成测试页面词汇数据
 * 从 vocabulary.json 读取并生成内联数据
 */

const fs = require('fs');
const vocab = JSON.parse(fs.readFileSync('vocabulary.json', 'utf8'));

// 生成测试页面用的简化词汇数组
const testWords = vocab.map(w => ({
  id: w.id,
  word: w.word,
  phonetic: w.phonetic,
  translation: w.translations[0], // 第一个翻译作为默认显示
  translations: w.translations // 保留所有翻译用于判断
}));

// 保存测试用词汇
fs.writeFileSync('test-vocabulary.js', `// 测试页面用词汇表
const testVocabulary = ${JSON.stringify(testWords, null, 2)};

// 检查答案是否正确（支持多答案）
function checkAnswer(word, userAnswer) {
  const entry = testVocabulary.find(w => w.word.toLowerCase() === word.toLowerCase());
  if (!entry || !entry.translations) return false;
  const normalized = userAnswer.trim().replace(/\\s+/g, "");
  return entry.translations.some(t => {
    const cleanT = t.replace(/\\s+/g, "");
    return cleanT === normalized || cleanT.includes(normalized) || normalized.includes(cleanT);
  });
}

// 获取单词的所有翻译
function getTranslations(word) {
  const entry = testVocabulary.find(w => w.word.toLowerCase() === word.toLowerCase());
  return entry ? entry.translations : [];
}

export { testVocabulary, checkAnswer, getTranslations };
`);

console.log('生成测试词汇数据: ' + testWords.length + ' 个词');
console.log('保存到 test-vocabulary.js');