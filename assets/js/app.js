/**
 * HappyEnglish - 中考英语备考助手
 * 应用核心模块
 */

// 词汇数据
const vocabulary = {
  categories: [
    { id: 'noun', name: '名词', count: 0 },
    { id: 'verb', name: '动词', count: 0 },
    { id: 'adj', name: '形容词', count: 0 },
    { id: 'adv', name: '副词', count: 0 },
    { id: 'prep', name: '介词', count: 0 },
    { id: 'conj', name: '连词', count: 0 },
    { id: 'pron', name: '代词', count: 0 },
    { id: 'num', name: '数词', count: 0 }
  ],

  highFrequency: [
    { id: 'word_001', word: 'ability', phonetic: '/əˈbɪləti/', translation: '能力', partOfSpeech: 'n.', category: 'noun', examples: ['The ability to learn is important. 学习能力很重要。'], examPoints: ['have the ability to do sth'], difficulty: 2 },
    { id: 'word_002', word: 'able', phonetic: '/ˈeɪbl/', translation: '能够', partOfSpeech: 'adj.', category: 'adj', examples: ['She is able to speak English. 她会说英语。'], examPoints: ['be able to do sth'], difficulty: 1 },
    { id: 'word_003', word: 'about', phonetic: '/əˈbaʊt/', translation: '关于', partOfSpeech: 'prep.', category: 'prep', examples: ['Tell me about your school. 告诉我关于你学校的事。'], examPoints: ['be about to do sth 即将'], difficulty: 1 },
    { id: 'word_004', word: 'above', phonetic: '/əˈbʌv/', translation: '在...上面', partOfSpeech: 'prep.', category: 'prep', examples: ['The bird flew above the clouds. 鸟飞到了云层之上。'], examPoints: ['above all 首先，最重要的是'], difficulty: 2 },
    { id: 'word_005', word: 'abroad', phonetic: '/əˈbrɔːd/', translation: '在国外', partOfSpeech: 'adv.', category: 'adv', examples: ['She wants to study abroad. 她想出国留学。'], examPoints: ['go abroad 出国'], difficulty: 2 },
    { id: 'word_006', word: 'accept', phonetic: '/əkˈsept/', translation: '接受', partOfSpeech: 'v.', category: 'verb', examples: ['Please accept my invitation. 请接受我的邀请。'], examPoints: ['accept ... as 认为...是'], difficulty: 1 },
    { id: 'word_007', word: 'achieve', phonetic: '/əˈtʃiːv/', translation: '达到；获得', partOfSpeech: 'v.', category: 'verb', examples: ['Hard work achieves success. 努力工作才能成功。'], examPoints: ['achieve one\'s goal 实现目标'], difficulty: 2 },
    { id: 'word_008', word: 'across', phonetic: '/əˈkrɒs/', translation: '穿过', partOfSpeech: 'prep.', category: 'prep', examples: ['Cross the road carefully. 过马路要小心。'], examPoints: ['come across 偶然遇到'], difficulty: 2 },
    { id: 'word_009', word: 'action', phonetic: '/ˈækʃn/', translation: '行动', partOfSpeech: 'n.', category: 'noun', examples: ['Actions speak louder than words. 行动胜于言语。'], examPoints: ['take action 采取行动'], difficulty: 2 },
    { id: 'word_010', word: 'active', phonetic: '/ˈæktɪv/', translation: '积极的；活跃的', partOfSpeech: 'adj.', category: 'adj', examples: ['Be active in class. 在课堂上要积极。'], examPoints: ['take an active part in 积极参加'], difficulty: 1 },
    { id: 'word_011', word: 'activity', phonetic: '/ækˈtɪvəti/', translation: '活动', partOfSpeech: 'n.', category: 'noun', examples: ['After-school activities are important. 课外活动很重要。'], examPoints: [], difficulty: 1 },
    { id: 'word_012', word: 'actually', phonetic: '/ˈæktʃuəli/', translation: '实际上', partOfSpeech: 'adv.', category: 'adv', examples: ['I actually don\'t know. 实际上我不知道。'], examPoints: [], difficulty: 2 },
    { id: 'word_013', word: 'add', phonetic: '/æd/', translation: '添加', partOfSpeech: 'v.', category: 'verb', examples: ['Add some sugar to the tea. 往茶里加点糖。'], examPoints: ['add up 把...加起来'], difficulty: 1 },
    { id: 'word_014', word: 'address', phonetic: '/əˈdres/', translation: '地址', partOfSpeech: 'n.', category: 'noun', examples: ['What\'s your home address? 你家的地址是什么？'], examPoints: ['address the problem 解决问题'], difficulty: 1 },
    { id: 'word_015', word: 'advantage', phonetic: '/ədˈvɑːntɪdʒ/', translation: '优势；优点', partOfSpeech: 'n.', category: 'noun', examples: ['Learning English has many advantages. 学英语有很多好处。'], examPoints: ['take advantage of 利用'], difficulty: 2 },
    { id: 'word_016', word: 'advice', phonetic: '/ədˈvaɪs/', translation: '建议', partOfSpeech: 'n.', category: 'noun', examples: ['Could you give me some advice? 你能给我一些建议吗？'], examPoints: ['give advice 给予建议', 'follow advice 听从建议'], difficulty: 2 },
    { id: 'word_017', word: 'advise', phonetic: '/əˈvaɪz/', translation: '建议；劝告', partOfSpeech: 'v.', category: 'verb', examples: ['I advise you to work hard. 我建议你努力学习。'], examPoints: ['advise doing 建议做某事'], difficulty: 2 },
    { id: 'word_018', word: 'afford', phonetic: '/əˈfɔːd/', translation: '负担得起', partOfSpeech: 'v.', category: 'verb', examples: ['I can\'t afford a new car. 我买不起新车。'], examPoints: ['can\'t afford to do 负担不起做某事'], difficulty: 2 },
    { id: 'word_019', word: 'afraid', phonetic: '/əˈfreɪd/', translation: '害怕的', partOfSpeech: 'adj.', category: 'adj', examples: ['Don\'t be afraid of making mistakes. 不要害怕犯错误。'], examPoints: ['be afraid to do 害怕做', 'be afraid of doing 担心发生'], difficulty: 1 },
    { id: 'word_020', word: 'agree', phonetic: '/əˈɡriː/', translation: '同意', partOfSpeech: 'v.', category: 'verb', examples: ['I agree with you. 我同意你的看法。'], examPoints: ['agree to do 同意做', 'agree with 同意某人'], difficulty: 1 },
    { id: 'word_021', word: 'air', phonetic: '/eə/', translation: '空气', partOfSpeech: 'n.', category: 'noun', examples: ['Fresh air is good for health. 新鲜空气对健康有益。'], examPoints: ['by air 乘飞机'], difficulty: 1 },
    { id: 'word_022', word: 'allow', phonetic: '/əˈlaʊ/', translation: '允许', partOfSpeech: 'v.', category: 'verb', examples: ['Smoking is not allowed here. 这里不允许吸烟。'], examPoints: ['allow doing 允许做', 'allow sb to do 允许某人做'], difficulty: 1 },
    { id: 'word_023', word: 'almost', phonetic: '/ˈɔːlməʊst/', translation: '几乎', partOfSpeech: 'adv.', category: 'adv', examples: ['It\'s almost done. 差不多完成了。'], examPoints: ['almost = nearly 几乎'], difficulty: 1 },
    { id: 'word_024', word: 'alone', phonetic: '/əˈləʊn/', translation: '独自', partOfSpeech: 'adj./adv.', category: 'adj', examples: ['She lives alone. 她一个人住。'], examPoints: ['let alone 更不用说'], difficulty: 2 },
    { id: 'word_025', word: 'along', phonetic: '/əˈlɒŋ/', translation: '沿着', partOfSpeech: 'prep./adv.', category: 'prep', examples: ['Walk along this road. 沿着这条路走。'], examPoints: ['get along with 与...相处'], difficulty: 1 },
    { id: 'word_026', word: 'already', phonetic: '/ɔːlˈredi/', translation: '已经', partOfSpeech: 'adv.', category: 'adv', examples: ['I have already finished. 我已经完成了。'], examPoints: ['already用于肯定句，yet用于疑问句/否定句'], difficulty: 1 },
    { id: 'word_027', word: 'also', phonetic: '/ˈɔːlsəʊ/', translation: '也', partOfSpeech: 'adv.', category: 'adv', examples: ['She also likes music. 她也喜欢音乐。'], examPoints: ['also/too/as well 都可以表示"也"'], difficulty: 1 },
    { id: 'word_028', word: 'although', phonetic: '/ɔːlˈðəʊ/', translation: '虽然', partOfSpeech: 'conj.', category: 'conj', examples: ['Although it was raining, we went out. 虽然下雨了，我们还是出去了。'], examPoints: ['although = though 虽然', 'although不与but连用'], difficulty: 2 },
    { id: 'word_029', word: 'always', phonetic: '/ˈɔːlweɪz/', translation: '总是', partOfSpeech: 'adv.', category: 'adv', examples: ['He is always late. 他总是迟到。'], examPoints: ['always与进行时连用表示不满'], difficulty: 1 },
    { id: 'word_030', word: 'among', phonetic: '/əˈmʌŋ/', translation: '在...之中', partOfSpeech: 'prep.', category: 'prep', examples: ['Among the students, she is the best. 学生中她是最好的。'], examPoints: ['among用于三者以上', 'between用于两者之间'], difficulty: 2 },
    { id: 'word_031', word: 'anger', phonetic: '/ˈæŋɡə/', translation: '愤怒', partOfSpeech: 'n.', category: 'noun', examples: ['He couldn\'t hide his anger. 他无法掩饰自己的愤怒。'], examPoints: ['with anger 愤怒地'], difficulty: 2 },
    { id: 'word_032', word: 'angry', phonetic: '/ˈæŋɡri/', translation: '生气的', partOfSpeech: 'adj.', category: 'adj', examples: ['Don\'t be angry with me. 别生我的气。'], examPoints: ['be angry with/at 生某人的气', 'be angry about/at 对某事生气'], difficulty: 1 },
    { id: 'word_033', word: 'animal', phonetic: '/ˈænɪml/', translation: '动物', partOfSpeech: 'n.', category: 'noun', examples: ['There are many animals in the zoo. 动物园里有很多动物。'], examPoints: [], difficulty: 1 },
    { id: 'word_034', word: 'another', phonetic: '/əˈnʌðə/', translation: '另一个', partOfSpeech: 'adj./pron.', category: 'det', examples: ['I have another idea. 我有另一个想法。'], examPoints: ['one after another 一个接一个'], difficulty: 1 },
    { id: 'word_035', word: 'answer', phonetic: '/ˈɑːnsə/', translation: '回答', partOfSpeech: 'v./n.', category: 'verb', examples: ['Please answer my question. 请回答我的问题。'], examPoints: ['answer the phone 接电话'], difficulty: 1 },
    { id: 'word_036', word: 'any', phonetic: '/ˈeni/', translation: '任何', partOfSpeech: 'adj./pron.', category: 'det', examples: ['Do you have any questions? 你有什么问题吗？'], examPoints: ['not ... any = no 没有'], difficulty: 1 },
    { id: 'word_037', word: 'anyone', phonetic: '/ˈeniwʌn/', translation: '任何人', partOfSpeech: 'pron.', category: 'pron', examples: ['Anyone can learn English. 任何人都可以学英语。'], examPoints: [], difficulty: 1 },
    { id: 'word_038', word: 'anything', phonetic: '/ˈeniθɪŋ/', translation: '任何事', partOfSpeech: 'pron.', category: 'pron', examples: ['I can do anything for you. 我可以为你做任何事。'], examPoints: [], difficulty: 1 },
    { id: 'word_039', word: 'appear', phonetic: '/əˈpɪə/', translation: '出现', partOfSpeech: 'v.', category: 'verb', examples: ['The sun appears in the morning. 太阳在早晨出现。'], examPoints: ['appear to do 看起来'], difficulty: 2 },
    { id: 'word_040', word: 'area', phonetic: '/ˈeəriə/', translation: '地区；面积', partOfSpeech: 'n.', category: 'noun', examples: ['This is a residential area. 这是一个住宅区。'], examPoints: [], difficulty: 1 }
  ],

  basic: [
    { id: 'basic_001', word: 'able', phonetic: '/ˈeɪbl/', translation: '能够', partOfSpeech: 'adj.', category: 'adj', examples: ['She is able to swim. 她会游泳。'], examPoints: ['be able to = can'], difficulty: 1 },
    { id: 'basic_002', word: 'about', phonetic: '/əˈbaʊt/', translation: '关于', partOfSpeech: 'prep.', category: 'prep', examples: ['Tell me about your day. 告诉我你今天过得怎么样。'], examPoints: ['be about to 即将'], difficulty: 1 },
    { id: 'basic_003', word: 'after', phonetic: '/ˈɑːftə/', translation: '在...之后', partOfSpeech: 'prep.', category: 'prep', examples: ['We\'ll go home after school. 我们放学后回家。'], examPoints: ['after all 毕竟'], difficulty: 1 },
    { id: 'basic_004', word: 'again', phonetic: '/əˈɡen/', translation: '再一次', partOfSpeech: 'adv.', category: 'adv', examples: ['Try again. 再试一次。'], examPoints: ['again and again 反复地'], difficulty: 1 },
    { id: 'basic_005', word: 'age', phonetic: '/eɪdʒ/', translation: '年龄', partOfSpeech: 'n.', category: 'noun', examples: ['What\'s your age? 你多大了？'], examPoints: ['at the age of 在...岁时'], difficulty: 1 },
    { id: 'basic_006', word: 'air', phonetic: '/eə/', translation: '空气', partOfSpeech: 'n.', category: 'noun', examples: ['Fresh air is good for health. 新鲜空气对健康有益。'], examPoints: ['by air 乘飞机'], difficulty: 1 },
    { id: 'basic_007', word: 'all', phonetic: '/ɔːl/', translation: '全部的', partOfSpeech: 'adj./pron.', category: 'det', examples: ['All students are here. 所有学生都到了。'], examPoints: ['not at all 一点也不', 'in all 总共'], difficulty: 1 },
    { id: 'basic_008', word: 'also', phonetic: '/ˈɔːlsəʊ/', translation: '也', partOfSpeech: 'adv.', category: 'adv', examples: ['She also likes music. 她也喜欢音乐。'], examPoints: ['also/too/as well 都可以表示"也"'], difficulty: 1 },
    { id: 'basic_009', word: 'always', phonetic: '/ˈɔːlweɪz/', translation: '总是', partOfSpeech: 'adv.', category: 'adv', examples: ['He is always late. 他总是迟到。'], examPoints: ['always与进行时连用表示不满'], difficulty: 1 },
    { id: 'basic_010', word: 'and', phonetic: '/ænd/', translation: '和', partOfSpeech: 'conj.', category: 'conj', examples: ['Tom and Jerry are friends. 汤姆和杰瑞是朋友。'], examPoints: [], difficulty: 1 }
  ]
};

// 语法数据
const grammar = {
  categories: [
    { id: 'noun', name: '名词与冠词', count: 3 },
    { id: 'pronoun', name: '代词', count: 2 },
    { id: 'adjective', name: '形容词与副词', count: 4 },
    { id: 'verb', name: '动词时态', count: 8 },
    { id: 'voice', name: '被动语态', count: 2 },
    { id: 'sentence', name: '句型与从句', count: 6 }
  ],

  points: [
    {
      id: 'grammar_001',
      title: '名词的可数与不可数',
      category: 'noun',
      content: '英语名词分为可数和不可数两种。',
      examples: [
        '可数名词：apple, student, book, car',
        '不可数名词：water, rice, music, information'
      ],
      tips: '不可数名词没有复数形式，不能与 a/an 或数字连用',
      exercises: [
        { question: 'There is some _____ on the table.', options: ['apple', 'apples', 'water', 'waters'], answer: 2 }
      ]
    },
    {
      id: 'grammar_002',
      title: '名词所有格',
      category: 'noun',
      content: '表示所属关系，用 \'s 或 of 短语。',
      examples: [
        "Tom's book = the book of Tom",
        "Children's Day 儿童节",
        'the name of the school 学校名称'
      ],
      tips: "'s 常用于有生命的东西，of 用于无生命的东西",
      exercises: [
        { question: "The _____ mother is a teacher.", options: ["Tom's", "Tom", "a Tom", "Tom is"], answer: 0 }
      ]
    },
    {
      id: 'grammar_003',
      title: '人称代词',
      category: 'pronoun',
      content: '人称代词有人称、数和主格/宾格的变化。',
      examples: [
        '主格：I, you, he, she, it, we, they',
        '宾格：me, you, him, her, it, us, them',
        'I like her. (动词后用宾格)'
      ],
      tips: '主格用在动词前，宾格用在动词和介词后',
      exercises: [
        { question: '_____ is my friend. I like _____ very much.', options: ['She / her', 'Her / she', 'She / she', 'Her / her'], answer: 0 }
      ]
    },
    {
      id: 'grammar_004',
      title: '物主代词',
      category: 'pronoun',
      content: '表示所属关系，分为形容词性和名词性两种。',
      examples: [
        '形容词性：my, your, his, her, its, our, their',
        '名词性：mine, yours, his, hers, ours, theirs',
        'This is my book. This book is mine.'
      ],
      tips: '形容词性物主代词后接名词，名词性物主代词单独使用',
      exercises: [
        { question: 'Is this _____ bag? No, it\'s _____.', options: ['your / hers', 'yours / her', 'your / hers', 'yours / hers'], answer: 2 }
      ]
    },
    {
      id: 'grammar_005',
      title: '形容词比较级和最高级',
      category: 'adjective',
      content: '形容词有三个等级：原级、比较级、最高级。',
      examples: [
        '比较级：taller, bigger, more beautiful',
        '最高级：tallest, biggest, most beautiful',
        'Tom is taller than Jack. (比较)',
        'Tom is the tallest in our class. (最高)'
      ],
      tips: '单音节词加 -er/-est，多音节词加 more/most',
      exercises: [
        { question: 'The weather is getting _____.', options: ['cold', 'colder', 'coldest', 'more cold'], answer: 1 }
      ]
    },
    {
      id: 'grammar_006',
      title: '一般现在时',
      category: 'verb',
      content: '表示经常性或习惯性的动作，以及客观事实。',
      examples: [
        'He plays basketball every day.',
        'The sun rises in the east.',
        'She works at a hospital.'
      ],
      tips: '第三人称单数动词要加 -s/-es',
      exercises: [
        { question: 'She _____ English every morning.', options: ['learn', 'learns', 'learning', 'learned'], answer: 1 }
      ]
    },
    {
      id: 'grammar_007',
      title: '现在进行时',
      category: 'verb',
      content: '表示正在进行的动作。',
      examples: [
        'I am reading a book now.',
        'They are playing football at the moment.',
        'She is cooking dinner at home.'
      ],
      tips: '构成：be + 动词-ing',
      exercises: [
        { question: 'Look! The children _____ in the park.', options: ['play', 'plays', 'are playing', 'is playing'], answer: 2 }
      ]
    },
    {
      id: 'grammar_008',
      title: '一般过去时',
      category: 'verb',
      content: '表示过去发生的动作或状态。',
      examples: [
        'I visited Beijing last year.',
        'She was a student five years ago.',
        'They played games yesterday.'
      ],
      tips: '动词过去式有规则和不规则变化',
      exercises: [
        { question: 'He _____ to school yesterday.', options: ['go', 'goes', 'went', 'going'], answer: 2 }
      ]
    },
    {
      id: 'grammar_009',
      title: '一般将来时',
      category: 'verb',
      content: '表示将来发生的动作或状态。',
      examples: [
        'I will go to Shanghai tomorrow.',
        'She is going to visit her grandmother.',
        'They are leaving next week.'
      ],
      tips: 'will + 动词原形 / be going to + 动词原形',
      exercises: [
        { question: 'I think it _____ tomorrow.', options: ['rain', 'rains', 'will rain', 'rained'], answer: 2 }
      ]
    },
    {
      id: 'grammar_010',
      title: '现在完成时',
      category: 'verb',
      content: '表示过去发生但对现在有影响的动作。',
      examples: [
        'I have finished my homework.',
        'She has lived here for 5 years.',
        'We have learned English since 2020.'
      ],
      tips: '构成：have/has + 过去分词',
      exercises: [
        { question: 'She _____ already _____ to Beijing.', options: ['has / gone', 'have / gone', 'has / been', 'have / been'], answer: 2 }
      ]
    },
    {
      id: 'grammar_011',
      title: '被动语态',
      category: 'voice',
      content: '表示主语是动作的承受者。',
      examples: [
        'The letter was written by Tom. (一般过去时)',
        'The window is being cleaned now. (现在进行时)',
        'The work will be done tomorrow. (一般将来时)'
      ],
      tips: '被动语态构成：be + 过去分词',
      exercises: [
        { question: 'The cake _____ by my mother yesterday.', options: ['made', 'was made', 'is made', 'was making'], answer: 1 }
      ]
    },
    {
      id: 'grammar_012',
      title: '宾语从句',
      category: 'sentence',
      content: '在句中作宾语的从句。',
      examples: [
        'I think (that) he is right.',
        'Do you know where she lives?',
        'She asked when the meeting would start.'
      ],
      tips: '注意时态一致和连接词的使用',
      exercises: [
        { question: 'I don\'t know _____ she is.', options: ['who', 'whom', 'whose', 'what'], answer: 0 }
      ]
    }
  ]
};

// 应用核心对象
const app = {
  // 存储键名
  STORAGE_KEYS: {
    PROGRESS: 'happyenglish_progress',
    STATS: 'happyenglish_stats',
    REVIEW_PLAN: 'happyenglish_review_plan'
  },

  // 默认进度数据
  defaultProgress: {
    words: {},
    grammar: {},
    streak: 0,
    lastStudyDate: null,
    totalTime: 0
  },

  // 默认统计数据
  defaultStats: {
    todayWords: 0,
    todayTime: 0,
    lastDate: null,
    totalCorrect: 0,
    totalWrong: 0
  },

  // 初始化
  init() {
    this.checkAndResetDailyStats();
    this.updateStreak();
    console.log('HappyEnglish 应用已初始化');
  },

  // 检查并重置每日统计
  checkAndResetDailyStats() {
    const stats = this.getStats();
    const today = this.getDateString();

    if (stats.lastDate !== today) {
      stats.todayWords = 0;
      stats.todayTime = 0;
      stats.lastDate = today;
      this.saveStats(stats);
    }
  },

  // 更新连续学习天数
  updateStreak() {
    const progress = this.getProgress();
    const today = this.getDateString();

    if (progress.lastStudyDate === today) {
      return; // 今天已经学习过
    }

    const yesterday = this.getDateString(Date.now() - 86400000);

    if (progress.lastStudyDate === yesterday) {
      progress.streak += 1;
    } else if (progress.lastStudyDate !== today) {
      progress.streak = 1;
    }

    progress.lastStudyDate = today;
    this.saveProgress(progress);
  },

  // 获取进度
  getProgress() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEYS.PROGRESS);
      return data ? JSON.parse(data) : { ...this.defaultProgress };
    } catch (e) {
      return { ...this.defaultProgress };
    }
  },

  // 保存进度
  saveProgress(progress) {
    try {
      localStorage.setItem(this.STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
    } catch (e) {
      console.error('保存进度失败', e);
    }
  },

  // 获取统计数据
  getStats() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEYS.STATS);
      return data ? JSON.parse(data) : { ...this.defaultStats };
    } catch (e) {
      return { ...this.defaultStats };
    }
  },

  // 保存统计数据
  saveStats(stats) {
    try {
      localStorage.setItem(this.STORAGE_KEYS.STATS, JSON.stringify(stats));
    } catch (e) {
      console.error('保存统计失败', e);
    }
  },

  // 获取学习进度（用于首页显示）
  getLearningProgress() {
    const progress = this.getProgress();
    const stats = this.getStats();

    let learnedWords = 0;
    let masteredWords = 0;

    for (let wordId in progress.words) {
      const word = progress.words[wordId];
      if (word.status === 'mastered' || word.status === 'learning') {
        learnedWords++;
      }
      if (word.status === 'mastered') {
        masteredWords++;
      }
    }

    // 计算正确率
    const total = stats.totalCorrect + stats.totalWrong;
    const accuracy = total > 0 ? Math.round((stats.totalCorrect / total) * 100) : 0;

    return {
      learnedWords,
      masteredWords,
      totalWords: 1600,
      grammarLearned: Object.keys(progress.grammar).length,
      grammarTotal: 50,
      accuracy,
      streak: progress.streak,
      totalTime: progress.totalTime
    };
  },

  // 获取每日统计
  getDailyStats() {
    const stats = this.getStats();
    return {
      todayWords: stats.todayWords,
      todayTime: stats.todayTime
    };
  },

  // 获取需要复习的单词数量
  getReviewCount() {
    const progress = this.getProgress();
    const now = Date.now();
    let count = 0;

    for (let wordId in progress.words) {
      const word = progress.words[wordId];
      if (word.nextReviewAt && word.nextReviewAt <= now) {
        count++;
      }
    }

    return count;
  },

  // 获取未掌握的单词数量
  getUnmasteredCount() {
    const progress = this.getProgress();
    let count = 0;

    for (let wordId in progress.words) {
      const word = progress.words[wordId];
      if (word.status !== 'mastered') {
        count++;
      }
    }

    return count;
  },

  // 记录单词学习
  recordWordLearn(wordId, correct) {
    const progress = this.getProgress();
    const stats = this.getStats();

    // 初始化单词进度
    if (!progress.words[wordId]) {
      progress.words[wordId] = {
        status: 'new',
        correctCount: 0,
        wrongCount: 0,
        lastReviewAt: null,
        reviewCount: 0,
        nextReviewAt: null
      };
    }

    const wordProgress = progress.words[wordId];

    // 记录正确/错误
    if (correct) {
      wordProgress.correctCount = (wordProgress.correctCount || 0) + 1;
      stats.totalCorrect++;
    } else {
      wordProgress.wrongCount = (wordProgress.wrongCount || 0) + 1;
      stats.totalWrong++;
    }

    // 更新状态
    const total = wordProgress.correctCount + wordProgress.wrongCount;
    const accuracy = total > 0 ? (wordProgress.correctCount / total) * 100 : 0;

    if (accuracy >= 80 && total >= 3) {
      wordProgress.status = 'mastered';
    } else if (total >= 1) {
      wordProgress.status = 'learning';
    }

    // 更新复习时间（艾宾浩斯遗忘曲线）
    wordProgress.lastReviewAt = Date.now();
    wordProgress.reviewCount = (wordProgress.reviewCount || 0) + 1;
    wordProgress.nextReviewAt = this.calculateNextReview(wordProgress.reviewCount);

    // 更新统计
    stats.todayWords++;
    this.saveProgress(progress);
    this.saveStats(stats);

    return wordProgress;
  },

  // 计算下次复习时间（艾宾浩斯）
  calculateNextReview(reviewCount) {
    const intervals = [0, 60000, 300000, 1800000, 86400000, 259200000, 604800000, 1209600000, 2592000000]; // 1分钟、5分钟、30分钟、1天、3天、7天、14天、30天
    const nextInterval = intervals[Math.min(reviewCount, intervals.length - 1)];
    return Date.now() + nextInterval;
  },

  // 获取日期字符串
  getDateString(date = Date.now()) {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  },

  // 语音合成
  speak(text, callback) {
    if ('speechSynthesis' in window) {
      // 取消之前的语音
      speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      utterance.pitch = 1;

      utterance.onend = function() {
        if (callback) callback();
      };

      speechSynthesis.speak(utterance);
    }
  },

  // 显示提示
  showToast(message, duration = 2000) {
    // 移除已有的toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
      existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, duration);
  },

  // 获取URL参数
  getUrlParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  },

  // 渲染进度条
  renderProgressBar(elementId, current, total, colorClass = '') {
    const element = document.getElementById(elementId);
    if (element) {
      const percent = Math.min(Math.round((current / total) * 100), 100);
      element.style.width = percent + '%';
      if (colorClass) {
        element.classList.add(colorClass);
      }
    }
  }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  app.init();
});

// 导出到全局
window.app = app;
window.vocabulary = vocabulary;
window.grammar = grammar;