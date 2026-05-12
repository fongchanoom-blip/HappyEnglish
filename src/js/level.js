/**
 * 掌握度计算模块
 * 根据测试历史计算词汇掌握等级
 */

/**
 * 计算单个词汇的掌握等级
 * @param {Object} progress - 词汇进度数据
 * @returns {string} master/familiar/weak/unknown
 */
export function calculateWordLevel(progress) {
  const {
    correctCount = 0,
    wrongCount = 0,
    totalTests = 0
  } = progress;

  // 无测试记录默认为陌生
  if (totalTests === 0) {
    return 'unknown';
  }

  // 计算正确率
  const accuracy = (correctCount / totalTests) * 100;

  // 分级规则
  // 精通：正确率 >= 90% 且 错误次数 <= 1
  if (accuracy >= 90 && wrongCount <= 1) {
    return 'master';
  }

  // 熟悉：正确率 >= 70%
  if (accuracy >= 70) {
    return 'familiar';
  }

  // 薄弱：正确率 >= 40%
  if (accuracy >= 40) {
    return 'weak';
  }

  // 陌生：正确率 < 40%
  return 'unknown';
}

/**
 * 获取词汇字号（用于热力词云）
 * @param {number} wrongCount - 错误次数
 * @returns {string} large/medium/small/tiny
 */
export function getWordSize(wrongCount) {
  if (wrongCount <= 1) return 'large';   // 42px - 错误最少，字号最大
  if (wrongCount <= 3) return 'medium'; // 32px
  if (wrongCount <= 5) return 'small';   // 22px
  return 'tiny';                          // 14px - 错误最多，字号最小
}

/**
 * 获取所有词汇的掌握度分组
 * @param {Array} allProgress - 所有词汇的进度
 * @param {Array} allWords - 所有词汇数据
 * @returns {Object} { master: [], familiar: [], weak: [], unknown: [] }
 */
export function getWordsByLevel(allProgress, allWords) {
  const levels = {
    master: [],
    familiar: [],
    weak: [],
    unknown: []
  };

  allWords.forEach(word => {
    const progress = allProgress.find(p => p.wordId === word.id) || {};
    const level = calculateWordLevel(progress);

    levels[level].push({
      ...word,
      progress,
      level
    });
  });

  return levels;
}

/**
 * 计算升级奖励积分
 * @param {string} level - 掌握等级
 * @returns {number} 积分
 */
export function getLevelReward(level) {
  const rewards = {
    master: 5,     // 精通词答对+5分
    familiar: 10,  // 熟悉词答对+10分
    weak: 20,      // 薄弱词答对+20分
    unknown: 30    // 陌生词答对+30分
  };
  return rewards[level] || 10;
}

/**
 * 等级颜色映射
 */
export const LEVEL_COLORS = {
  master: '#67C23A',    // 绿色 - 掌握好
  familiar: '#409EFF',  // 蓝色 - 较熟悉
  weak: '#E6A23C',      // 黄色 - 薄弱
  unknown: '#F56C6C'    // 红色 - 陌生
};

/**
 * 等级标签
 */
export const LEVEL_LABELS = {
  master: '精通',
  familiar: '熟悉',
  weak: '薄弱',
  unknown: '陌生'
};

// 测试代码
if (typeof window !== 'undefined' && window.location.search.includes('test=level')) {
  const testCases = [
    { correctCount: 9, wrongCount: 1, totalTests: 10, expected: 'master' },
    { correctCount: 7, wrongCount: 3, totalTests: 10, expected: 'familiar' },
    { correctCount: 5, wrongCount: 5, totalTests: 10, expected: 'weak' },
    { correctCount: 3, wrongCount: 7, totalTests: 10, expected: 'weak' },
    { correctCount: 2, wrongCount: 8, totalTests: 10, expected: 'unknown' },
    { correctCount: 0, wrongCount: 0, totalTests: 0, expected: 'unknown' }
  ];

  console.log('掌握度算法测试：');
  testCases.forEach(tc => {
    const result = calculateWordLevel(tc);
    const pass = result === tc.expected;
    console.log(`${pass ? '✓' : '✗'} correct:${tc.correctCount} wrong:${tc.wrongCount} -> ${result} (expected: ${tc.expected})`);
  });
}