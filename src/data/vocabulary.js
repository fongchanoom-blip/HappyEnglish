/**
 * HappyEnglish 初中英语核心词汇
 */

// 初中核心词汇50词
const vocabulary = {
  words: [
    // A组
    { id: 'w001', word: 'able', phonetic: '/ˈeɪbl/', translation: '能够', category: 'adj', round: 1 },
    { id: 'w002', word: 'about', phonetic: '/əˈbaʊt/', translation: '关于', category: 'prep', round: 1 },
    { id: 'w003', word: 'above', phonetic: '/əˈbʌv/', translation: '在...上面', category: 'prep', round: 1 },
    { id: 'w004', word: 'abroad', phonetic: '/əˈbrɔːd/', translation: '在国外', category: 'adv', round: 1 },
    { id: 'w005', word: 'accept', phonetic: '/əkˈsept/', translation: '接受', category: 'v', round: 1 },
    { id: 'w006', word: 'achieve', phonetic: '/əˈtʃiːv/', translation: '达到', category: 'v', round: 1 },
    { id: 'w007', word: 'across', phonetic: '/əˈkrɒs/', translation: '穿过', category: 'prep', round: 1 },
    { id: 'w008', word: 'action', phonetic: '/ˈækʃn/', translation: '行动', category: 'n', round: 1 },
    { id: 'w009', word: 'active', phonetic: '/ˈæktɪv/', translation: '积极的', category: 'adj', round: 1 },
    { id: 'w010', word: 'activity', phonetic: '/ækˈtɪvəti/', translation: '活动', category: 'n', round: 1 },
    // B组
    { id: 'w011', word: 'back', phonetic: '/bæk/', translation: '背部', category: 'n', round: 1 },
    { id: 'w012', word: 'bad', phonetic: '/bæd/', translation: '坏的', category: 'adj', round: 1 },
    { id: 'w013', word: 'ball', phonetic: '/bɔːl/', translation: '球', category: 'n', round: 1 },
    { id: 'w014', word: 'bank', phonetic: '/bæŋk/', translation: '银行', category: 'n', round: 1 },
    { id: 'w015', word: 'base', phonetic: '/beɪs/', translation: '基础', category: 'n', round: 1 },
    // C组
    { id: 'w016', word: 'call', phonetic: '/kɔːl/', translation: '打电话', category: 'v', round: 1 },
    { id: 'w017', word: 'can', phonetic: '/kæn/', translation: '能', category: 'modal', round: 1 },
    { id: 'w018', word: 'car', phonetic: '/kɑː/', translation: '汽车', category: 'n', round: 1 },
    { id: 'w019', word: 'card', phonetic: '/kɑːd/', translation: '卡片', category: 'n', round: 1 },
    { id: 'w020', word: 'care', phonetic: '/keə/', translation: '关心', category: 'n/v', round: 1 },
    // D组
    { id: 'w021', word: 'day', phonetic: '/deɪ/', translation: '天', category: 'n', round: 1 },
    { id: 'w022', word: 'deal', phonetic: '/diːl/', translation: '处理', category: 'v', round: 1 },
    { id: 'w023', word: 'dear', phonetic: '/dɪə/', translation: '亲爱的', category: 'adj', round: 1 },
    { id: 'w024', word: 'death', phonetic: '/deθ/', translation: '死亡', category: 'n', round: 1 },
    { id: 'w025', word: 'decide', phonetic: '/dɪˈsaɪd/', translation: '决定', category: 'v', round: 1 },
    // E组
    { id: 'w026', word: 'each', phonetic: '/iːtʃ/', translation: '每个', category: 'det', round: 1 },
    { id: 'w027', word: 'ear', phonetic: '/ɪə/', translation: '耳朵', category: 'n', round: 1 },
    { id: 'w028', word: 'early', phonetic: '/ˈɜːli/', translation: '早的', category: 'adj', round: 1 },
    { id: 'w029', word: 'earth', phonetic: '/ɜːθ/', translation: '地球', category: 'n', round: 1 },
    { id: 'w030', word: 'eat', phonetic: '/iːt/', translation: '吃', category: 'v', round: 1 },
    // F组
    { id: 'w031', word: 'face', phonetic: '/feɪs/', translation: '脸', category: 'n', round: 1 },
    { id: 'w032', word: 'fact', phonetic: '/fækt/', translation: '事实', category: 'n', round: 1 },
    { id: 'w033', word: 'fail', phonetic: '/feɪl/', translation: '失败', category: 'v', round: 1 },
    { id: 'w034', word: 'fair', phonetic: '/feə/', translation: '公平的', category: 'adj', round: 1 },
    { id: 'w035', word: 'fall', phonetic: '/fɔːl/', translation: '落下', category: 'v', round: 1 },
    // G组
    { id: 'w036', word: 'game', phonetic: '/ɡeɪm/', translation: '游戏', category: 'n', round: 1 },
    { id: 'w037', word: 'garden', phonetic: '/ˈɡɑːdn/', translation: '花园', category: 'n', round: 1 },
    { id: 'w038', word: 'get', phonetic: '/ɡet/', translation: '得到', category: 'v', round: 1 },
    { id: 'w039', word: 'girl', phonetic: '/ɡɜːl/', translation: '女孩', category: 'n', round: 1 },
    { id: 'w040', word: 'give', phonetic: '/ɡɪv/', translation: '给', category: 'v', round: 1 },
    // H组
    { id: 'w041', word: 'half', phonetic: '/hɑːf/', translation: '一半', category: 'n', round: 1 },
    { id: 'w042', word: 'hand', phonetic: '/hænd/', translation: '手', category: 'n', round: 1 },
    { id: 'w043', word: 'happy', phonetic: '/ˈhæpi/', translation: '快乐的', category: 'adj', round: 1 },
    { id: 'w044', word: 'hard', phonetic: '/hɑːd/', translation: '困难的', category: 'adj', round: 1 },
    { id: 'w045', word: 'have', phonetic: '/hæv/', translation: '有', category: 'v', round: 1 },
    // I组
    { id: 'w046', word: 'idea', phonetic: '/aɪˈdɪə/', translation: '主意', category: 'n', round: 1 },
    { id: 'w047', word: 'important', phonetic: '/ɪmˈpɔːtənt/', translation: '重要的', category: 'adj', round: 1 },
    { id: 'w048', word: 'interest', phonetic: '/ˈɪntrəst/', translation: '兴趣', category: 'n', round: 1 },
    { id: 'w049', word: 'into', phonetic: '/ˈɪntu/', translation: '进入', category: 'prep', round: 1 },
    { id: 'w050', word: 'keep', phonetic: '/kiːp/', translation: '保持', category: 'v', round: 1 },
  ]
};

// 导出
module.exports = vocabulary;