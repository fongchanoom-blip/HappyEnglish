/**
 * HappyEnglish - 中考英语语法数据
 *
 * 语法来源：中考英语50个核心语法知识点
 * 数据结构：包含语法名称、规则、例句、考点等
 */

module.exports = {
  // 语法分类
  categories: [
    { id: 'tenses', name: '时态', count: 0 },
    { id: 'voice', name: '语态', count: 0 },
    { id: 'sentence', name: '句型', count: 0 },
    { id: 'clause', name: '从句', count: 0 },
    { id: 'nonfinite', name: '非谓语', count: 0 },
    { id: 'mood', name: '语气', count: 0 }
  ],

  // 核心语法知识点
  grammarPoints: [
    {
      id: 'grammar_001',
      title: '一般现在时',
      category: 'tenses',
      rule: '表示经常发生的动作或存在的状态',
      structure: {
        affirmative: '主语 + 动词原形/三单形式',
        negative: '主语 + don't/doesn't + 动词原形',
        question: 'Do/Does + 主语 + 动词原形?'
      },
      timeMarkers: ['always', 'usually', 'often', 'sometimes', 'every day'],
      examples: [
        { en: 'He plays football every Sunday.', zh: '他每周日踢足球。' },
        { en: 'She doesn\'t like coffee.', zh: '她不喜欢咖啡。' },
        { en: 'Do you often read English books?', zh: '你经常读英语书吗？' }
      ],
      examPoints: ['三单动词变化规则', '时间副词位置'],
      difficulty: 1
    },
    {
      id: 'grammar_002',
      title: '现在进行时',
      category: 'tenses',
      rule: '表示正在发生的动作',
      structure: {
        affirmative: '主语 + am/is/are + 动词-ing',
        negative: '主语 + am/is/are + not + 动词-ing',
        question: 'Am/Is/Are + 主语 + 动词-ing?'
      },
      timeMarkers: ['now', 'right now', 'at the moment', 'look', 'listen'],
      examples: [
        { en: 'I am reading a book now.', zh: '我现在正在读一本书。' },
        { en: 'They are playing basketball at the moment.', zh: '他们此刻正在打篮球。' },
        { en: 'Is she watching TV?', zh: '她在看电视吗？' }
      ],
      examPoints: ['现在分词变化规则', '无进行时的动词'],
      difficulty: 1
    },
    {
      id: 'grammar_003',
      title: '一般过去时',
      category: 'tenses',
      rule: '表示过去发生的动作或状态',
      structure: {
        affirmative: '主语 + 动词过去式',
        negative: '主语 + didn't + 动词原形',
        question: 'Did + 主语 + 动词原形?'
      },
      timeMarkers: ['yesterday', 'last week', 'ago', 'in 2020', 'just now'],
      examples: [
        { en: 'He went to Beijing yesterday.', zh: '他昨天去了北京。' },
        { en: 'She didn\'t finish her homework.', zh: '她没完成作业。' },
        { en: 'Did you call me last night?', zh: '你昨晚给我打电话了吗？' }
      ],
      examPoints: ['动词过去式变化', '时间状语从句中的过去时'],
      difficulty: 1
    },
    {
      id: 'grammar_004',
      title: '过去进行时',
      category: 'tenses',
      rule: '表示过去某时刻正在进行的动作',
      structure: {
        affirmative: '主语 + was/were + 动词-ing',
        negative: '主语 + was/were + not + 动词-ing',
        question: 'Was/Were + 主语 + 动词-ing?'
      },
      timeMarkers: ['at that time', 'at 8 last night', 'when', 'while'],
      examples: [
        { en: 'I was sleeping at 10 o\'clock last night.', zh: '昨晚10点我正在睡觉。' },
        { en: 'They were watching TV when I came home.', zh: '我回家时他们正在看电视。' },
        { en: 'What were you doing at that time?', zh: '那段时间你在做什么？' }
      ],
      examPoints: ['when/while的区别', '过去进行时与一般过去时连用'],
      difficulty: 2
    },
    {
      id: 'grammar_005',
      title: '现在完成时',
      category: 'tenses',
      rule: '表示过去发生但与现在有关联的动作',
      structure: {
        affirmative: '主语 + have/has + 过去分词',
        negative: '主语 + have/has + not + 过去分词',
        question: 'Have/Has + 主语 + 过去分词?'
      },
      timeMarkers: ['already', 'yet', 'just', 'ever', 'never', 'before', 'recently'],
      examples: [
        { en: 'I have already finished my homework.', zh: '我已经完成了作业。' },
        { en: 'She has lived here since 2010.', zh: '她从2010年起就住在这里。' },
        { en: 'Have you ever been to Shanghai?', zh: '你去过上海吗？' }
      ],
      examPoints: ['have gone to/have been to区别', 'since/for用法', '延续性动词'],
      difficulty: 2
    },
    {
      id: 'grammar_006',
      title: '过去完成时',
      category: 'tenses',
      rule: '表示过去某一时间前已完成的动作',
      structure: {
        affirmative: '主语 + had + 过去分词',
        negative: '主语 + had + not + 过去分词',
        question: 'Had + 主语 + 过去分词?'
      },
      timeMarkers: ['by that time', 'before', 'after', 'when'],
      examples: [
        { en: 'I had finished my homework before dinner.', zh: '晚饭前我已经完成了作业。' },
        { en: 'She hadn\'t left when I arrived.', zh: '我到达时她还没离开。' },
        { en: 'Had you finished the work by yesterday?', zh: '到昨天为止你完成工作了吗？' }
      ],
      examPoints: ['过去完成时与一般过去时对比', '宾语从句中的过去完成时'],
      difficulty: 3
    },
    {
      id: 'grammar_007',
      title: '一般将来时',
      category: 'tenses',
      rule: '表示将来发生的动作或状态',
      structure: {
        affirmative: '主语 + will + 动词原形 / 主语 + am/is/are + going to + 动词原形',
        negative: '主语 + will + not + 动词原形',
        question: 'Will + 主语 + 动词原形?'
      },
      timeMarkers: ['tomorrow', 'next week', 'in the future', 'soon'],
      examples: [
        { en: 'I will go to school tomorrow.', zh: '我明天去上学。' },
        { en: 'She is going to study medicine.', zh: '她打算学医。' },
        { en: 'Will it rain tomorrow?', zh: '明天会下雨吗？' }
      ],
      examPoints: ['will与be going to的区别', '祈使句+and/or+将来时'],
      difficulty: 1
    },
    {
      id: 'grammar_008',
      title: '被动语态',
      category: 'voice',
      rule: '强调动作承受者',
      structure: {
        presentSimple: 'am/is/are + 过去分词',
        pastSimple: 'was/were + 过去分词',
        future: 'will + be + 过去分词',
        presentPerfect: 'has/have + been + 过去分词'
      },
      examples: [
        { en: 'The book is read by students.', zh: '这本书被学生阅读。' },
        { en: 'The bridge was built last year.', zh: '这座桥是去年建的。' },
        { en: 'The work will be done tomorrow.', zh: '这项工作明天完成。' }
      ],
      examPoints: ['by + 行为者', '主动变被动注意时态', '双宾语被动语态'],
      difficulty: 2
    },
    {
      id: 'grammar_009',
      title: '定语从句',
      category: 'clause',
      rule: '修饰名词的从句',
      structure: {
        relative: '名词/代词 + 关系代词/副词 + 陈述语序',
        pronouns: 'who/whom/which/that/whose/where/when/why'
      },
      examples: [
        { en: 'The man who is wearing a hat is my teacher.', zh: '那个戴帽子的男人是我的老师。' },
        { en: 'This is the book which I bought yesterday.', zh: '这是我昨天买的那本书。' },
        { en: 'The house where I live is small.', zh: '我住的那所房子很小。' }
      ],
      examPoints: ['who/which/that的区别', '只能用that的情况', '介词+which/whom'],
      difficulty: 3
    },
    {
      id: 'grammar_010',
      title: '状语从句',
      category: 'clause',
      rule: '修饰动词、形容词或整个句子的从句',
      types: {
        time: { conj: 'when/while/as/after/before/since/till/until', example: 'I was reading when he came in.' },
        reason: { conj: 'because/as/since', example: 'I didn\'t go because I was sick.' },
        condition: { conj: 'if/unless', example: 'I will help you if you need me.' },
        result: { conj: 'so...that/such...that', example: 'He is such a tall boy that he can reach the ceiling.' },
        purpose: { conj: 'so that/in order that', example: 'I study hard so that I can pass the exam.' },
        concession: { conj: 'although/though/even if', example: 'Although it rained, we still went out.' }
      },
      examples: [
        { en: 'I will call you when I arrive.', zh: '我到达时会给你打电话。' },
        { en: 'He is so tall that he can play basketball.', zh: '他很高所以能打篮球。' },
        { en: 'Whatever you say, I won\'t change my mind.', zh: '无论你说什么，我都不会改变主意。' }
      ],
      examPoints: ['although不与but连用', 'sosuch区别', '主将从现'],
      difficulty: 2
    },
    {
      id: 'grammar_011',
      title: '宾语从句',
      category: 'clause',
      rule: '作宾语的名词性从句',
      structure: {
        that: 'that + 陈述句（可省略）',
        if/whether: 'if/whether + 一般疑问句',
        wh: '疑问词 + 陈述句'
      },
      examples: [
        { en: 'I think (that) he is right.', zh: '我认为他是对的。' },
        { en: 'I don\'t know if he will come.', zh: '我不知道他是否会来。' },
        { en: 'Can you tell me where the station is?', zh: '你能告诉我车站在哪里吗？' }
      ],
      examPoints: ['宾语从句的时态呼应', '宾语从句的语序'],
      difficulty: 2
    },
    {
      id: 'grammar_012',
      title: '不定式',
      category: 'nonfinite',
      rule: 'to + 动词原形，可作多种成分',
      functions: ['主语', '表语', '宾语', '宾补', '定语', '状语'],
      examples: [
        { en: 'To learn English is important. (主语)', zh: '学英语很重要。' },
        { en: 'My dream is to be a doctor. (表语)', zh: '我的梦想是当一名医生。' },
        { en: 'I want to help you. (宾语)', zh: '我想帮助你。' },
        { en: 'He asked me to come. (宾补)', zh: '他让我来。' }
      ],
      examPoints: ['不定式与动名词的区别', '省略to的情况', '不定式主动表被动'],
      difficulty: 2
    },
    {
      id: 'grammar_013',
      title: '动名词',
      category: 'nonfinite',
      rule: '动词-ing形式，具有名词性质',
      usage: {
        subject: 'Reading is good for you.',
        object: 'I enjoy reading.',
        complement: 'My job is teaching.'
      },
      examples: [
        { en: 'Smoking is bad for health.', zh: '吸烟有害健康。' },
        { en: 'I am fond of reading.', zh: '我喜欢阅读。' },
        { en: 'Would you mind opening the window?', zh: '你介意打开窗户吗？' }
      ],
      examPoints: ['只能接动名词的动词', '动名词与不定式的意义区别'],
      difficulty: 2
    },
    {
      id: 'grammar_014',
      title: '情态动词',
      category: 'mood',
      rule: '辅助动词表达语气和态度',
      modalVerbs: {
        can: '能力/可能性',
        could: 'can的过去式/委婉语气',
        may: '允许/可能性',
        might: 'may的过去式/更委婉',
        must: '必须/肯定推测',
        have_to: '不得不',
        should: '应该/建议',
        would: '将要/意愿/委婉'
      },
      examples: [
        { en: 'You can finish it today.', zh: '你今天能完成。' },
        { en: 'You should study harder.', zh: '你应该更努力学习。' },
        { en: 'It must be raining outside.', zh: '外面一定在下雨。' }
      ],
      examPoints: ['can与be able to区别', 'must与have to区别', '情态动词+have done'],
      difficulty: 2
    },
    {
      id: 'grammar_015',
      title: '比较等级',
      category: 'sentence',
      rule: '形容词/副词的比较形式',
      structure: {
        comparative: '主语 + 谓语 + 比较级 + than + 对比对象',
        superlative: '主语 + 谓语 + the + 最高级 + in/of',
        equal: '主语 + 谓语 + as + 原级 + as + 对比对象'
      },
      examples: [
        { en: 'He is taller than his brother.', zh: '他比他弟弟高。' },
        { en: 'This is the longest river in China.', zh: '这是中国最长的河。' },
        { en: 'She runs as fast as her friend.', zh: '她跑得和她朋友一样快。' }
      ],
      examPoints: ['比较级不加the', 'the + 最高级', '倍数表达'],
      difficulty: 1
    }
  ],

  // 获取分类下的语法点
  getByCategory(categoryId) {
    return this.grammarPoints.filter(g => g.category === categoryId);
  },

  // 获取指定难度
  getByDifficulty(level) {
    return this.grammarPoints.filter(g => g.difficulty === level);
  }
};
