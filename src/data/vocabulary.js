/**
 * HappyEnglish - 中考英语核心词汇数据
 *
 * 词汇来源：中考英语1600词汇表
 * 数据结构：包含词性、词义、例句、考点等
 *
 * 复用自：小树识字项目
 */

module.exports = {
  // 词汇分类
  categories: [
    { id: 'noun', name: '名词', count: 0 },
    { id: 'verb', name: '动词', count: 0 },
    { id: 'adj', name: '形容词', count: 0 },
    { id: 'adv', name: '副词', count: 0 },
    { id: 'prep', name: '介词', count: 0 },
    { id: 'conj', name: '连词', count: 0 },
    { id: 'pron', name: '代词', count: 0 },
    { id: 'num', name: '数词', count: 0 },
    { id: 'det', name: '冠词', count: 0 }
  ],

  // 高频考点词（按重要性排序）
  highFrequency: [
    {
      id: 'word_001',
      word: 'ability',
      phonetic: '/əˈbɪləti/',
      translation: '能力',
      partOfSpeech: 'n.',
      category: 'noun',
      examples: ['The ability to learn is important. 学习能力很重要。'],
      examPoints: ['have the ability to do sth'],
      difficulty: 2,
      audioFile: 'ability.mp3'
    },
    {
      id: 'word_002',
      word: 'able',
      phonetic: '/ˈeɪbl/',
      translation: '能够',
      partOfSpeech: 'adj.',
      category: 'adj',
      examples: ['She is able to speak English. 她会说英语。'],
      examPoints: ['be able to do sth'],
      difficulty: 1,
      audioFile: 'able.mp3'
    },
    {
      id: 'word_003',
      word: 'about',
      phonetic: '/əˈbaʊt/',
      translation: '关于',
      partOfSpeech: 'prep.',
      category: 'prep',
      examples: ['Tell me about your school. 告诉我关于你学校的事。'],
      examPoints: ['be about to do sth 即将'],
      difficulty: 1,
      audioFile: 'about.mp3'
    },
    {
      id: 'word_004',
      word: 'above',
      phonetic: '/əˈbʌv/',
      translation: '在...上面',
      partOfSpeech: 'prep.',
      category: 'prep',
      examples: ['The bird flew above the clouds. 鸟飞到了云层之上。'],
      examPoints: ['above all 首先，最重要的是'],
      difficulty: 2,
      audioFile: 'above.mp3'
    },
    {
      id: 'word_005',
      word: 'abroad',
      phonetic: '/əˈbrɔːd/',
      translation: '在国外',
      partOfSpeech: 'adv.',
      category: 'adv',
      examples: ['She wants to study abroad. 她想出国留学。'],
      examPoints: ['go abroad 出国'],
      difficulty: 2,
      audioFile: 'abroad.mp3'
    },
    {
      id: 'word_006',
      word: 'accept',
      phonetic: '/əkˈsept/',
      translation: '接受',
      partOfSpeech: 'v.',
      category: 'verb',
      examples: ['Please accept my invitation. 请接受我的邀请。'],
      examPoints: ['accept ... as 认为...是'],
      difficulty: 1,
      audioFile: 'accept.mp3'
    },
    {
      id: 'word_007',
      word: 'achieve',
      phonetic: '/əˈtʃiːv/',
      translation: '达到；获得',
      partOfSpeech: 'v.',
      category: 'verb',
      examples: ['Hard work achieves success. 努力工作才能成功。'],
      examPoints: ['achieve one\'s goal 实现目标'],
      difficulty: 2,
      audioFile: 'achieve.mp3'
    },
    {
      id: 'word_008',
      word: 'across',
      phonetic: '/əˈkrɒs/',
      translation: '穿过',
      partOfSpeech: 'prep.',
      category: 'prep',
      examples: ['Cross the road carefully. 过马路要小心。'],
      examPoints: ['come across 偶然遇到'],
      difficulty: 2,
      audioFile: 'across.mp3'
    },
    {
      id: 'word_009',
      word: 'action',
      phonetic: '/ˈækʃn/',
      translation: '行动',
      partOfSpeech: 'n.',
      category: 'noun',
      examples: ['Actions speak louder than words. 行动胜于言语。'],
      examPoints: ['take action 采取行动'],
      difficulty: 2,
      audioFile: 'action.mp3'
    },
    {
      id: 'word_010',
      word: 'active',
      phonetic: '/ˈæktɪv/',
      translation: '积极的；活跃的',
      partOfSpeech: 'adj.',
      category: 'adj',
      examples: ['Be active in class. 在课堂上要积极。'],
      examPoints: ['take an active part in 积极参加'],
      difficulty: 1,
      audioFile: 'active.mp3'
    },
    {
      id: 'word_011',
      word: 'activity',
      phonetic: '/ækˈtɪvəti/',
      translation: '活动',
      partOfSpeech: 'n.',
      category: 'noun',
      examples: ['After-school activities are important. 课外活动很重要。'],
      examPoints: [],
      difficulty: 1,
      audioFile: 'activity.mp3'
    },
    {
      id: 'word_012',
      word: 'actually',
      phonetic: '/ˈæktʃuəli/',
      translation: '实际上',
      partOfSpeech: 'adv.',
      category: 'adv',
      examples: ['I actually don\'t know. 实际上我不知道。'],
      examPoints: [],
      difficulty: 2,
      audioFile: 'actually.mp3'
    },
    {
      id: 'word_013',
      word: 'add',
      phonetic: '/æd/',
      translation: '添加',
      partOfSpeech: 'v.',
      category: 'verb',
      examples: ['Add some sugar to the tea. 往茶里加点糖。'],
      examPoints: ['add up 把...加起来'],
      difficulty: 1,
      audioFile: 'add.mp3'
    },
    {
      id: 'word_014',
      word: 'address',
      phonetic: '/əˈdres/',
      translation: '地址',
      partOfSpeech: 'n.',
      category: 'noun',
      examples: ['What\'s your home address? 你家的地址是什么？'],
      examPoints: ['address the problem 解决问题'],
      difficulty: 1,
      audioFile: 'address.mp3'
    },
    {
      id: 'word_015',
      word: 'advantage',
      phonetic: '/ədˈvɑːntɪdʒ/',
      translation: '优势；优点',
      partOfSpeech: 'n.',
      category: 'noun',
      examples: ['Learning English has many advantages. 学英语有很多好处。'],
      examPoints: ['take advantage of 利用'],
      difficulty: 2,
      audioFile: 'advantage.mp3'
    },
    {
      id: 'word_016',
      word: 'advice',
      phonetic: '/ədˈvaɪs/',
      translation: '建议',
      partOfSpeech: 'n.',
      category: 'noun',
      examples: ['Could you give me some advice? 你能给我一些建议吗？'],
      examPoints: ['give advice 给予建议', 'follow advice 听从建议'],
      difficulty: 2,
      audioFile: 'advice.mp3'
    },
    {
      id: 'word_017',
      word: 'advise',
      phonetic: '/ədˈvaɪz/',
      translation: '建议；劝告',
      partOfSpeech: 'v.',
      category: 'verb',
      examples: ['I advise you to work hard. 我建议你努力学习。'],
      examPoints: ['advise doing 建议做某事'],
      difficulty: 2,
      audioFile: 'advise.mp3'
    },
    {
      id: 'word_018',
      word: 'affair',
      phonetic: '/əˈfeə/',
      translation: '事务；事情',
      partOfSpeech: 'n.',
      category: 'noun',
      examples: ['It\'s my private affair. 这是我的私事。'],
      examPoints: [],
      difficulty: 3,
      audioFile: 'affair.mp3'
    },
    {
      id: 'word_019',
      word: 'afford',
      phonetic: '/əˈfɔːd/',
      translation: '负担得起',
      partOfSpeech: 'v.',
      category: 'verb',
      examples: ['I can\'t afford a new car. 我买不起新车。'],
      examPoints: ['can\'t afford to do 负担不起做某事'],
      difficulty: 2,
      audioFile: 'afford.mp3'
    },
    {
      id: 'word_020',
      word: 'afraid',
      phonetic: '/əˈfreɪd/',
      translation: '害怕的',
      partOfSpeech: 'adj.',
      category: 'adj',
      examples: ['Don\'t be afraid of making mistakes. 不要害怕犯错误。'],
      examPoints: ['be afraid to do 害怕做', 'be afraid of doing 担心发生'],
      difficulty: 1,
      audioFile: 'afraid.mp3'
    }
  ],

  // 基础词汇（按字母顺序）
  basic: [
    {
      id: 'basic_001',
      word: 'able',
      phonetic: '/ˈeɪbl/',
      translation: '能够',
      partOfSpeech: 'adj.',
      category: 'adj',
      examples: ['She is able to swim. 她会游泳。'],
      examPoints: ['be able to = can'],
      difficulty: 1,
      audioFile: 'able.mp3'
    },
    {
      id: 'basic_002',
      word: 'about',
      phonetic: '/əˈbaʊt/',
      translation: '关于',
      partOfSpeech: 'prep.',
      category: 'prep',
      examples: ['Tell me about your day. 告诉我你今天过得怎么样。'],
      examPoints: ['be about to 即将'],
      difficulty: 1,
      audioFile: 'about.mp3'
    },
    {
      id: 'basic_003',
      word: 'after',
      phonetic: '/ˈɑːftə/',
      translation: '在...之后',
      partOfSpeech: 'prep.',
      category: 'prep',
      examples: ['We\'ll go home after school. 我们放学后回家。'],
      examPoints: ['after all 毕竟'],
      difficulty: 1,
      audioFile: 'after.mp3'
    },
    {
      id: 'basic_004',
      word: 'again',
      phonetic: '/əˈɡen/',
      translation: '再一次',
      partOfSpeech: 'adv.',
      category: 'adv',
      examples: ['Try again. 再试一次。'],
      examPoints: ['again and again 反复地'],
      difficulty: 1,
      audioFile: 'again.mp3'
    },
    {
      id: 'basic_005',
      word: 'age',
      phonetic: '/eɪdʒ/',
      translation: '年龄',
      partOfSpeech: 'n.',
      category: 'noun',
      examples: ['What\'s your age? 你多大了？'],
      examPoints: ['at the age of 在...岁时'],
      difficulty: 1,
      audioFile: 'age.mp3'
    },
    {
      id: 'basic_006',
      word: 'agree',
      phonetic: '/əˈɡriː/',
      translation: '同意',
      partOfSpeech: 'v.',
      category: 'verb',
      examples: ['I agree with you. 我同意你的看法。'],
      examPoints: ['agree to do 同意做', 'agree with 同意某人'],
      difficulty: 1,
      audioFile: 'agree.mp3'
    },
    {
      id: 'basic_007',
      word: 'air',
      phonetic: '/eə/',
      translation: '空气',
      partOfSpeech: 'n.',
      category: 'noun',
      examples: ['Fresh air is good for health. 新鲜空气对健康有益。'],
      examPoints: ['by air 乘飞机'],
      difficulty: 1,
      audioFile: 'air.mp3'
    },
    {
      id: 'basic_008',
      word: 'all',
      phonetic: '/ɔːl/',
      translation: '全部的',
      partOfSpeech: 'adj./pron.',
      category: 'det',
      examples: ['All students are here. 所有学生都到了。'],
      examPoints: ['not at all 一点也不', 'in all 总共'],
      difficulty: 1,
      audioFile: 'all.mp3'
    },
    {
      id: 'basic_009',
      word: 'allow',
      phonetic: '/əˈlaʊ/',
      translation: '允许',
      partOfSpeech: 'v.',
      category: 'verb',
      examples: ['Smoking is not allowed here. 这里不允许吸烟。'],
      examPoints: ['allow doing 允许做', 'allow sb to do 允许某人做'],
      difficulty: 1,
      audioFile: 'allow.mp3'
    },
    {
      id: 'basic_010',
      word: 'almost',
      phonetic: '/ˈɔːlməʊst/',
      translation: '几乎',
      partOfSpeech: 'adv.',
      category: 'adv',
      examples: ['It\'s almost done. 差不多完成了。'],
      examPoints: ['almost = nearly 几乎'],
      difficulty: 1,
      audioFile: 'almost.mp3'
    },
    {
      id: 'basic_011',
      word: 'alone',
      phonetic: '/əˈləʊn/',
      translation: '独自',
      partOfSpeech: 'adj./adv.',
      category: 'adj',
      examples: ['She lives alone. 她一个人住。'],
      examPoints: ['let alone 更不用说'],
      difficulty: 2,
      audioFile: 'alone.mp3'
    },
    {
      id: 'basic_012',
      word: 'along',
      phonetic: '/əˈlɒŋ/',
      translation: '沿着',
      partOfSpeech: 'prep./adv.',
      category: 'prep',
      examples: ['Walk along this road. 沿着这条路走。'],
      examPoints: ['get along with 与...相处'],
      difficulty: 1,
      audioFile: 'along.mp3'
    },
    {
      id: 'basic_013',
      word: 'already',
      phonetic: '/ɔːlˈredi/',
      translation: '已经',
      partOfSpeech: 'adv.',
      category: 'adv',
      examples: ['I have already finished. 我已经完成了。'],
      examPoints: ['already用于肯定句，yet用于疑问句/否定句'],
      difficulty: 1,
      audioFile: 'already.mp3'
    },
    {
      id: 'basic_014',
      word: 'also',
      phonetic: '/ˈɔːlsəʊ/',
      translation: '也',
      partOfSpeech: 'adv.',
      category: 'adv',
      examples: ['She also likes music. 她也喜欢音乐。'],
      examPoints: ['also/too/as well 都可以表示"也"'],
      difficulty: 1,
      audioFile: 'also.mp3'
    },
    {
      id: 'basic_015',
      word: 'although',
      phonetic: '/ɔːlˈðəʊ/',
      translation: '虽然',
      partOfSpeech: 'conj.',
      category: 'conj',
      examples: ['Although it was raining, we went out. 虽然下雨了，我们还是出去了。'],
      examPoints: ['although = though 虽然', 'although不与but连用'],
      difficulty: 2,
      audioFile: 'although.mp3'
    },
    {
      id: 'basic_016',
      word: 'always',
      phonetic: '/ˈɔːlweɪz/',
      translation: '总是',
      partOfSpeech: 'adv.',
      category: 'adv',
      examples: ['He is always late. 他总是迟到。'],
      examPoints: ['always与进行时连用表示不满'],
      difficulty: 1,
      audioFile: 'always.mp3'
    },
    {
      id: 'basic_017',
      word: 'among',
      phonetic: '/əˈmʌŋ/',
      translation: '在...之中',
      partOfSpeech: 'prep.',
      category: 'prep',
      examples: ['Among the students, she is the best. 学生中她是最好的。'],
      examPoints: ['among用于三者以上', 'between用于两者之间'],
      difficulty: 2,
      audioFile: 'among.mp3'
    },
    {
      id: 'basic_018',
      word: 'and',
      phonetic: '/ænd/',
      translation: '和',
      partOfSpeech: 'conj.',
      category: 'conj',
      examples: ['Tom and Jerry are friends. 汤姆和杰瑞是朋友。'],
      examPoints: [],
      difficulty: 1,
      audioFile: 'and.mp3'
    },
    {
      id: 'basic_019',
      word: 'anger',
      phonetic: '/ˈæŋɡə/',
      translation: '愤怒',
      partOfSpeech: 'n.',
      category: 'noun',
      examples: ['He couldn\'t hide his anger. 他无法掩饰自己的愤怒。'],
      examPoints: ['with anger 愤怒地'],
      difficulty: 2,
      audioFile: 'anger.mp3'
    },
    {
      id: 'basic_020',
      word: 'angry',
      phonetic: '/ˈæŋɡri/',
      translation: '生气的',
      partOfSpeech: 'adj.',
      category: 'adj',
      examples: ['Don\'t be angry with me. 别生我的气。'],
      examPoints: ['be angry with/at 生某人的气', 'be angry about/at 对某事生气'],
      difficulty: 1,
      audioFile: 'angry.mp3'
    }
  ]
};