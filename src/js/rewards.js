/**
 * 奖励系统模块
 * 积分规则和徽章定义
 */

// 积分奖励规则
export const REWARDS = {
  // 答对奖励（根据掌握等级）
  correct: {
    master: 5,      // 精通词答对+5分
    familiar: 10,   // 熟悉词答对+10分
    weak: 20,       // 薄弱词答对+20分
    unknown: 30     // 陌生词答对+30分
  },

  // 连击奖励
  streak: {
    10: 50,   // 10连击+50分
    20: 100,  // 20连击+100分
    50: 300   // 50连击+300分
  },

  // 其他奖励
  roundComplete: 200,   // 完成一轮+200分
  badgeUnlock: 50,       // 获得徽章+50分
  dailyGoal: 30          // 达成每日目标+30分
};

// 徽章定义
export const BADGES = [
  {
    id: 'first_test',
    name: '初次通关',
    icon: '🎯',
    description: '完成第一次测试',
    condition: (stats) => stats.totalTests >= 1
  },
  {
    id: 'streak_5',
    name: '连胜新星',
    icon: '⭐',
    description: '连续答对5题',
    condition: (stats) => stats.maxStreak >= 5
  },
  {
    id: 'streak_10',
    name: '连击达人',
    icon: '🔥',
    description: '连续答对10题',
    condition: (stats) => stats.maxStreak >= 10
  },
  {
    id: 'streak_20',
    name: '连胜霸主',
    icon: '💥',
    description: '连续答对20题',
    condition: (stats) => stats.maxStreak >= 20
  },
  {
    id: 'master_5',
    name: '词汇专家',
    icon: '🏆',
    description: '掌握5个精通词',
    condition: (stats) => stats.masterCount >= 5
  },
  {
    id: 'master_20',
    name: '词汇大师',
    icon: '👑',
    description: '掌握20个精通词',
    condition: (stats) => stats.masterCount >= 20
  },
  {
    id: 'accuracy_80',
    name: '高正确率',
    icon: '🎯',
    description: '总体正确率达到80%',
    condition: (stats) => stats.totalTests >= 10 && stats.accuracy >= 80
  },
  {
    id: 'words_50',
    name: '学习达人',
    icon: '📚',
    description: '学习50个词',
    condition: (stats) => stats.totalWords >= 50
  },
  {
    id: 'points_500',
    name: '积分达人',
    icon: '💰',
    description: '累计获得500积分',
    condition: (stats) => stats.totalPoints >= 500
  },
  {
    id: 'perfect_round',
    name: '满分一轮',
    icon: '🌟',
    description: '一轮测试全部正确',
    condition: (stats) => stats.perfectRounds >= 1
  }
];

// 计算连击奖励
export function getStreakReward(streak) {
  if (streak >= 50) return REWARDS.streak[50];
  if (streak >= 20) return REWARDS.streak[20];
  if (streak >= 10) return REWARDS.streak[10];
  return 0;
}

// 检查可解锁的徽章
export function checkBadges(stats, earnedBadges) {
  const newBadges = [];

  BADGES.forEach(badge => {
    if (!earnedBadges.includes(badge.id) && badge.condition(stats)) {
      newBadges.push(badge);
    }
  });

  return newBadges;
}

// 等级计算（每100分升一级）
export function calculateLevel(points) {
  return Math.floor(points / 100) + 1;
}

// 段位计算
export function calculateSegment(level) {
  if (level <= 5) return '青铜';
  if (level <= 10) return '白银';
  if (level <= 15) return '黄金';
  if (level <= 20) return '铂金';
  if (level <= 25) return '钻石';
  if (level <= 30) return '星耀';
  return '王者';
}

// ============================================
// 头像配置系统（简化版，使用 Emoji 展示）
// ============================================

// 头像配置
export const AVATAR_CONFIG = {
  // 头发样式（每20级换一次）
  hair: [
    { level: 0, name: '短发', emoji: '👦' },
    { level: 20, name: '长发', emoji: '👧' },
    { level: 40, name: '马尾', emoji: '🧑' },
    { level: 60, name: '皇冠短发', emoji: '👑' }
  ],

  // 服装（每15级换一次）
  cloth: [
    { level: 0, name: '校服', emoji: '🎒' },
    { level: 15, name: '运动服', emoji: '🏃' },
    { level: 30, name: '正装', emoji: '🤵' },
    { level: 50, name: '礼服', emoji: '👸' }
  ],

  // 配饰（每10级换一次）
  accessory: [
    { level: 0, name: '无', emoji: '' },
    { level: 10, name: '红领巾', emoji: '🎗️' },
    { level: 25, name: '眼镜', emoji: '👓' },
    { level: 40, name: '奖牌', emoji: '🏅' },
    { level: 60, name: '金冠', emoji: '👑' }
  ]
};

// 获取当前等级的头像部件
export function getAvatarParts(level) {
  const getPartForLevel = (parts) => {
    let result = parts[0];
    for (const part of parts) {
      if (level >= part.level) {
        result = part;
      }
    }
    return result;
  };

  return {
    hair: getPartForLevel(AVATAR_CONFIG.hair),
    cloth: getPartForLevel(AVATAR_CONFIG.cloth),
    accessory: getPartForLevel(AVATAR_CONFIG.accessory)
  };
}

// 头像展示组件数据
export function getAvatarDisplay(level) {
  return {
    level,
    segment: calculateSegment(level),
    parts: getAvatarParts(level)
  };
}