/**
 * 词根词缀数据库
 * 包含常用前缀、后缀和词根及其解释
 */

const ETYMOLOGY_DATA = {
  prefixes: {
    'un-': { meaning: '不，非', example: 'unhappy, unsure, unlike' },
    're-': { meaning: '再，重新', example: 'return, repeat, rewrite' },
    'pre-': { meaning: '之前', example: 'preview, prepare, predict' },
    'dis-': { meaning: '否定，相反', example: 'disappear, disagree, dislike' },
    'mis-': { meaning: '错误地', example: 'mistake, misunderstand, misplace' },
    'ex-': { meaning: '向外，以前', example: 'exit, export, ex-wife' },
    'im-': { meaning: '向内，不', example: 'import, impossible, immortal' },
    'trans-': { meaning: '跨越，转移', example: 'transport, translate, transplant' },
    'anti-': { meaning: '反对，代替', example: 'anti-war, antibiotic, antiseptic' },
    'auto-': { meaning: '自己', example: 'autobiography, automatic, autopilot' },
    'bi-': { meaning: '两个', example: 'bicycle, bilingual, bisect' },
    'co-': { meaning: '共同，一起', example: 'cooperate, coordinate, coexist' },
    'de-': { meaning: '向下，相反', example: 'descend, degrade, defuse' },
    'inter-': { meaning: '之间', example: 'international, internet, interact' },
    'non-': { meaning: '不，非', example: 'nonsense, nonstop, non-violent' },
    'over-': { meaning: '过度，超过', example: 'overcome, overflow, overwork' },
    'semi-': { meaning: '半', example: 'semifinal, semicircle, semicolon' },
    'sub-': { meaning: '下面', example: 'submarine, substandard, subway' },
    'super-': { meaning: '超级，上面', example: 'supermarket, superstar, supernatural' },
    'tele-': { meaning: '远', example: 'telephone, telescope, television' },
    'under-': { meaning: '下面，不足', example: 'understand, underwear, underline' },
    'with-': { meaning: '向后，相反', example: 'withdraw, withhold, withstand' }
  },

  suffixes: {
    '-able': { meaning: '能够', example: 'comfortable, reliable, possible' },
    '-ful': { meaning: '充满...的', example: 'beautiful, careful, wonderful' },
    '-less': { meaning: '没有...的', example: 'careless, homeless, useless' },
    '-ly': { meaning: '...地', example: 'quickly, happily, slowly' },
    '-ment': { meaning: '行为，结果', example: 'development, treatment, achievement' },
    '-ness': { meaning: '性质，状态', example: 'happiness, kindness, darkness' },
    '-tion': { meaning: '行为，状态', example: 'education, attention, population' },
    '-sion': { meaning: '行为，状态', example: 'television, decision, discussion' },
    '-er': { meaning: '...人，...物', example: 'teacher, computer, listener' },
    '-or': { meaning: '...人', example: 'actor, doctor, director' },
    '-ist': { meaning: '...家，...者', example: 'artist, scientist, tourist' },
    '-y': { meaning: '...的性质', example: 'easy, hungry, funny' },
    '-ous': { meaning: '充满...的', example: 'dangerous, famous, generous' },
    '-ive': { meaning: '...性的', example: 'active, creative, attractive' },
    '-al': { meaning: '...的', example: 'national, natural, musical' },
    '-ian': { meaning: '...人', example: 'American, historian, musician' },
    '-ity': { meaning: '性质，状态', example: 'activity, reality, possibility' },
    '-th': { meaning: '行为，结果', example: 'growth, truth, health' },
    '-ward': { meaning: '向...的', example: 'forward, backward, homeward' },
    '-wise': { meaning: '以...方式', example: 'clockwise, otherwise, likewise' }
  },

  roots: {
    'act': { meaning: '行动', words: ['act', 'action', 'active', 'activity', 'actor', 'react', 'exact'] },
    'cap': { meaning: '拿，抓', words: ['captain', 'capture', 'capacity', 'escape'] },
    'ced': { meaning: '走', words: ['proceed', 'succeed', 'precede', 'recession', 'ancestor'] },
    'cent': { meaning: '百', words: ['century', 'percent', 'centimeter', 'centennial'] },
    'clud': { meaning: '关闭', words: ['include', 'conclude', 'exclude', 'conclusive'] },
    'dict': { meaning: '说', words: ['dictate', 'dictation', 'predict', 'addict', 'dictionary'] },
    'duc': { meaning: '引导', words: ['produce', 'reduce', 'introduce', 'educate', 'conductor'] },
    'fer': { meaning: '携带', words: ['transfer', 'refer', 'offer', 'suffer', 'prefer'] },
    'form': { meaning: '形式', words: ['form', 'formal', 'transform', 'information', 'perform'] },
    'gress': { meaning: '走', words: ['progress', 'congress', 'aggressive', 'digress'] },
    'ject': { meaning: '扔', words: ['project', 'reject', 'inject', 'subject', 'object'] },
    'lect': { meaning: '选择', words: ['collect', 'select', 'neglect', 'elect', 'intellect'] },
    'mit': { meaning: '发送', words: ['transmit', 'permit', 'submit', 'admit', 'commit'] },
    'pend': { meaning: '悬挂，花费', words: ['spend', 'depend', 'suspend', 'expensive', 'independent'] },
    'port': { meaning: '携带', words: ['transport', 'import', 'export', 'report', 'portable'] },
    'scrib': { meaning: '写', words: ['describe', 'prescribe', 'subscribe', 'manuscript'] },
    'sent': { meaning: '感觉', words: ['sentiment', 'consent', 'present', 'absent', 'resent'] },
    'spect': { meaning: '看', words: ['spectacle', 'spectacular', 'inspect', 'respect', 'suspect'] },
    'struct': { meaning: '建造', words: ['structure', 'construct', 'destruct', 'instruction', 'obstruct'] },
    'tend': { meaning: '伸展，趋向', words: ['intend', 'extend', 'pretend', 'attend', 'tend', 'tendency'] },
    'tract': { meaning: '拉', words: ['attract', 'contract', 'extract', 'distract', 'subtract'] },
    'vent': { meaning: '来', words: ['event', 'adventure', 'convention', 'prevent', 'invent'] },
    'vert': { meaning: '转', words: ['convert', 'invert', 'divert', 'revert', 'advertise'] },
    'vid': { meaning: '看', words: ['video', 'evidence', 'provide', 'television', 'evident'] },
    'vis': { meaning: '看', words: ['vision', 'visible', 'visit', 'advise', 'revise'] }
  }
};