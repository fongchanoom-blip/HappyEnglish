// 测试页面用词汇表
const testVocabulary = [
  {
    "id": "word_0001",
    "word": "ability",
    "phonetic": "ə'bɪləti",
    "translation": "能力",
    "translations": [
      "能力",
      "才能"
    ]
  },
  {
    "id": "word_0002",
    "word": "able",
    "phonetic": "'eɪbl",
    "translation": "能够",
    "translations": [
      "能够",
      "有才能的"
    ]
  },
  {
    "id": "word_0003",
    "word": "about",
    "phonetic": "ə'baʊt",
    "translation": "关于",
    "translations": [
      "关于",
      "大约",
      "在各处"
    ]
  },
  {
    "id": "word_0004",
    "word": "above",
    "phonetic": "ə'bʌv",
    "translation": "在……上面",
    "translations": [
      "在……上面",
      "在上面"
    ]
  },
  {
    "id": "word_0005",
    "word": "abroad",
    "phonetic": "ə'brɔːd",
    "translation": "到",
    "translations": [
      "到"
    ]
  },
  {
    "id": "word_0006",
    "word": "absent",
    "phonetic": "'æbsənt",
    "translation": "缺席的",
    "translations": [
      "缺席的",
      "不在的",
      "缺乏的"
    ]
  },
  {
    "id": "word_0007",
    "word": "accept",
    "phonetic": "ək'sept",
    "translation": "接受",
    "translations": [
      "接受",
      "认可",
      "同意"
    ]
  },
  {
    "id": "word_0008",
    "word": "accident",
    "phonetic": "'æksɪdənt",
    "translation": "事故",
    "translations": [
      "事故",
      "意外"
    ]
  },
  {
    "id": "word_0009",
    "word": "according",
    "phonetic": "ə'kɔːdɪ ",
    "translation": "相符的",
    "translations": [
      "相符的",
      "相应的",
      "一"
    ]
  },
  {
    "id": "word_0010",
    "word": "account",
    "phonetic": "ə'kaʊnt",
    "translation": "账户",
    "translations": [
      "账户",
      "账目",
      "描述",
      "解释",
      "说明（原因）"
    ]
  },
  {
    "id": "word_0011",
    "word": "ache",
    "phonetic": "eɪk",
    "translation": "疼痛",
    "translations": [
      "疼痛",
      "隐隐作痛"
    ]
  },
  {
    "id": "word_0012",
    "word": "achieve",
    "phonetic": "ə'tʃiːv",
    "translation": "完成",
    "translations": [
      "完成",
      "达到",
      "实现"
    ]
  },
  {
    "id": "word_0013",
    "word": "across",
    "phonetic": "ə'krɒs",
    "translation": "穿过",
    "translations": [
      "穿过",
      "横过",
      "在对面"
    ]
  },
  {
    "id": "word_0014",
    "word": "act",
    "phonetic": "ækt",
    "translation": "表演",
    "translations": [
      "表演",
      "行动",
      "行为",
      "法令",
      "一段表演"
    ]
  },
  {
    "id": "word_0015",
    "word": "action",
    "phonetic": "'ækʃn",
    "translation": "行动",
    "translations": [
      "行动",
      "行为",
      "动作"
    ]
  },
  {
    "id": "word_0016",
    "word": "active",
    "phonetic": "'æktɪv",
    "translation": "活跃的",
    "translations": [
      "活跃的",
      "积极的"
    ]
  },
  {
    "id": "word_0017",
    "word": "activity",
    "phonetic": "æk'tɪvəti",
    "translation": "活动",
    "translations": [
      "活动"
    ]
  },
  {
    "id": "word_0018",
    "word": "actor",
    "phonetic": "'æktə(r)",
    "translation": "演员",
    "translations": [
      "演员"
    ]
  },
  {
    "id": "word_0019",
    "word": "actually",
    "phonetic": "'æktʃuəli",
    "translation": "实际上，事实上",
    "translations": [
      "实际上，事实上"
    ]
  },
  {
    "id": "word_0020",
    "word": "ad",
    "phonetic": "æd",
    "translation": "广告",
    "translations": [
      "广告"
    ]
  },
  {
    "id": "word_0021",
    "word": "add",
    "phonetic": "æd",
    "translation": "增加",
    "translations": [
      "增加",
      "添加",
      "补充说"
    ]
  },
  {
    "id": "word_0022",
    "word": "address",
    "phonetic": "ə'dres",
    "translation": "地址",
    "translations": [
      "地址",
      "演说"
    ]
  },
  {
    "id": "word_0023",
    "word": "admire",
    "phonetic": "əd'maɪə(r)",
    "translation": "欣赏",
    "translations": [
      "欣赏",
      "仰慕",
      "钦佩",
      "赞赏"
    ]
  },
  {
    "id": "word_0024",
    "word": "adult",
    "phonetic": "ə'dʌlt",
    "translation": "成年的",
    "translations": [
      "成年的",
      "成人的",
      "成人"
    ]
  },
  {
    "id": "word_0025",
    "word": "advantage",
    "phonetic": "əd'vɑːntɪdʒ",
    "translation": "优点",
    "translations": [
      "优点",
      "有利条件"
    ]
  },
  {
    "id": "word_0026",
    "word": "advice",
    "phonetic": "əd'vaɪs",
    "translation": "劝告",
    "translations": [
      "劝告",
      "建议"
    ]
  },
  {
    "id": "word_0027",
    "word": "advise",
    "phonetic": "əd'vaɪz",
    "translation": "劝告",
    "translations": [
      "劝告",
      "建议"
    ]
  },
  {
    "id": "word_0028",
    "word": "afford",
    "phonetic": "ə'fɔːd",
    "translation": "承担得起",
    "translations": [
      "承担得起"
    ]
  },
  {
    "id": "word_0029",
    "word": "afraid",
    "phonetic": "ə'freɪd",
    "translation": "害怕的",
    "translations": [
      "害怕的",
      "担心的"
    ]
  },
  {
    "id": "word_0030",
    "word": "after",
    "phonetic": "'ɑːftə(r)",
    "translation": "在……后",
    "translations": [
      "在……后",
      "在……以后"
    ]
  },
  {
    "id": "word_0031",
    "word": "afternoon",
    "phonetic": "'ɑːftə'nuːn",
    "translation": "下午",
    "translations": [
      "下午"
    ]
  },
  {
    "id": "word_0032",
    "word": "again",
    "phonetic": "ə'ɡen",
    "translation": "再一次",
    "translations": [
      "再一次",
      "又一次"
    ]
  },
  {
    "id": "word_0033",
    "word": "against",
    "phonetic": "ə'ɡenst",
    "translation": "对……不利",
    "translations": [
      "对……不利",
      "反对",
      "倚",
      "紧靠"
    ]
  },
  {
    "id": "word_0034",
    "word": "age",
    "phonetic": "eɪdʒ",
    "translation": "年龄",
    "translations": [
      "年龄",
      "时代",
      "老年"
    ]
  },
  {
    "id": "word_0035",
    "word": "ago",
    "phonetic": "ə'ɡəʊ",
    "translation": "以前",
    "translations": [
      "以前"
    ]
  },
  {
    "id": "word_0036",
    "word": "agree",
    "phonetic": "ə'ɡriː",
    "translation": "同意",
    "translations": [
      "同意",
      "赞成"
    ]
  },
  {
    "id": "word_0037",
    "word": "ahead",
    "phonetic": "ə'hed",
    "translation": "在前面",
    "translations": [
      "在前面",
      "向前"
    ]
  },
  {
    "id": "word_0038",
    "word": "AI",
    "phonetic": "eɪ'aɪ",
    "translation": "人工智能",
    "translations": [
      "人工智能"
    ]
  },
  {
    "id": "word_0039",
    "word": "aid",
    "phonetic": "eɪd",
    "translation": "帮助",
    "translations": [
      "帮助",
      "援助",
      "辅助工具"
    ]
  },
  {
    "id": "word_0040",
    "word": "aim",
    "phonetic": "eɪm",
    "translation": "目标，目的",
    "translations": [
      "目标，目的",
      "瞄准，对准",
      "旨在，目的是"
    ]
  },
  {
    "id": "word_0041",
    "word": "air",
    "phonetic": "eə(r)",
    "translation": "空气",
    "translations": [
      "空气",
      "空中"
    ]
  },
  {
    "id": "word_0042",
    "word": "airport",
    "phonetic": "'eəpɔːt",
    "translation": "航空站",
    "translations": [
      "航空站",
      "机场"
    ]
  },
  {
    "id": "word_0043",
    "word": "alarm",
    "phonetic": "ə'lɑːm",
    "translation": "闹钟",
    "translations": [
      "闹钟",
      "警报"
    ]
  },
  {
    "id": "word_0044",
    "word": "alive",
    "phonetic": "ə'laɪv",
    "translation": "活着的",
    "translations": [
      "活着的",
      "有生气的"
    ]
  },
  {
    "id": "word_0045",
    "word": "all",
    "phonetic": "ɔːl",
    "translation": "所有的",
    "translations": [
      "所有的",
      "全部的",
      "所有",
      "全部"
    ]
  },
  {
    "id": "word_0046",
    "word": "allow",
    "phonetic": "ə'laʊ",
    "translation": "允许",
    "translations": [
      "允许",
      "准许"
    ]
  },
  {
    "id": "word_0047",
    "word": "almost",
    "phonetic": "'ɔːlməʊst",
    "translation": "几乎",
    "translations": [
      "几乎",
      "差不多"
    ]
  },
  {
    "id": "word_0048",
    "word": "alone",
    "phonetic": "ə'ləʊn",
    "translation": "单独的",
    "translations": [
      "单独的",
      "独自"
    ]
  },
  {
    "id": "word_0049",
    "word": "along",
    "phonetic": "ə'lɒ ",
    "translation": "向前",
    "translations": [
      "向前",
      "沿着",
      "顺着"
    ]
  },
  {
    "id": "word_0050",
    "word": "aloud",
    "phonetic": "ə'laʊd",
    "translation": "大声地",
    "translations": [
      "大声地",
      "出声地"
    ]
  },
  {
    "id": "word_0051",
    "word": "already",
    "phonetic": "ɔːl'redi",
    "translation": "已经",
    "translations": [
      "已经"
    ]
  },
  {
    "id": "word_0052",
    "word": "also",
    "phonetic": "'ɔːlsəʊ",
    "translation": "也",
    "translations": [
      "也",
      "同样"
    ]
  },
  {
    "id": "word_0053",
    "word": "although",
    "phonetic": "ɔːl'ðəʊ",
    "translation": "虽然",
    "translations": [
      "虽然",
      "尽管"
    ]
  },
  {
    "id": "word_0054",
    "word": "always",
    "phonetic": "'ɔːlweɪz",
    "translation": "总是",
    "translations": [
      "总是",
      "永远"
    ]
  },
  {
    "id": "word_0055",
    "word": "amazing",
    "phonetic": "ə'meɪzɪ ",
    "translation": "令人大为惊奇的",
    "translations": [
      "令人大为惊奇的",
      "令人"
    ]
  },
  {
    "id": "word_0056",
    "word": "among",
    "phonetic": "ə'mʌ ",
    "translation": "在……中",
    "translations": [
      "在……中",
      "……之一"
    ]
  },
  {
    "id": "word_0057",
    "word": "ancient",
    "phonetic": "'eɪnʃənt",
    "translation": "古代的",
    "translations": [
      "古代的",
      "古老的"
    ]
  },
  {
    "id": "word_0058",
    "word": "and",
    "phonetic": "ænd",
    "translation": "和",
    "translations": [
      "和",
      "又",
      "加上"
    ]
  },
  {
    "id": "word_0059",
    "word": "angry",
    "phonetic": "'æ ɡri",
    "translation": "生气的",
    "translations": [
      "生气的",
      "愤怒的"
    ]
  },
  {
    "id": "word_0060",
    "word": "animal",
    "phonetic": "'ænɪml",
    "translation": "动物",
    "translations": [
      "动物"
    ]
  },
  {
    "id": "word_0061",
    "word": "another",
    "phonetic": "ə'nʌðə(r)",
    "translation": "又一",
    "translations": [
      "又一"
    ]
  },
  {
    "id": "word_0062",
    "word": "answer",
    "phonetic": "'ɑːnsə(r)",
    "translation": "回答",
    "translations": [
      "回答",
      "答复"
    ]
  },
  {
    "id": "word_0063",
    "word": "ant",
    "phonetic": "ænt",
    "translation": "蚂蚁",
    "translations": [
      "蚂蚁"
    ]
  },
  {
    "id": "word_0064",
    "word": "any",
    "phonetic": "'eni",
    "translation": "任何一些",
    "translations": [
      "任何一些"
    ]
  },
  {
    "id": "word_0065",
    "word": "anybody",
    "phonetic": "'enibɒdi",
    "translation": "任何人",
    "translations": [
      "任何人",
      "无论谁"
    ]
  },
  {
    "id": "word_0066",
    "word": "anyone",
    "phonetic": "'eniwʌn",
    "translation": "任何人",
    "translations": [
      "任何人",
      "无论谁"
    ]
  },
  {
    "id": "word_0067",
    "word": "anything",
    "phonetic": "'eniθɪ ",
    "translation": "任何事物",
    "translations": [
      "任何事物"
    ]
  },
  {
    "id": "word_0068",
    "word": "anyway",
    "phonetic": "'eniweɪ",
    "translation": "而且",
    "translations": [
      "而且",
      "尽管",
      "无论如何"
    ]
  },
  {
    "id": "word_0069",
    "word": "anywhere",
    "phonetic": "'eniweə(r)",
    "translation": "在任何地方",
    "translations": [
      "在任何地方"
    ]
  },
  {
    "id": "word_0070",
    "word": "apartment",
    "phonetic": "ə'pɑːtmənt",
    "translation": "公寓套房",
    "translations": [
      "公寓套房",
      "公寓",
      "套房"
    ]
  },
  {
    "id": "word_0071",
    "word": "app",
    "phonetic": "æp",
    "translation": "应用程序",
    "translations": [
      "应用程序",
      "应用软件"
    ]
  },
  {
    "id": "word_0072",
    "word": "appear",
    "phonetic": "ə'pɪə(r)",
    "translation": "出现",
    "translations": [
      "出现",
      "似乎"
    ]
  },
  {
    "id": "word_0073",
    "word": "apple",
    "phonetic": "'æpl",
    "translation": "苹果",
    "translations": [
      "苹果"
    ]
  },
  {
    "id": "word_0074",
    "word": "area",
    "phonetic": "'eəriə",
    "translation": "地域，地区",
    "translations": [
      "地域，地区"
    ]
  },
  {
    "id": "word_0075",
    "word": "argue",
    "phonetic": "'ɑːɡjuː",
    "translation": "争吵",
    "translations": [
      "争吵",
      "争论"
    ]
  },
  {
    "id": "word_0076",
    "word": "arm",
    "phonetic": "ɑːm",
    "translation": "手臂 v．武装",
    "translations": [
      "手臂 v．武装",
      "备战"
    ]
  },
  {
    "id": "word_0077",
    "word": "army",
    "phonetic": "'ɑːmi",
    "translation": "陆军",
    "translations": [
      "陆军",
      "陆军部队"
    ]
  },
  {
    "id": "word_0078",
    "word": "around",
    "phonetic": "ə'raʊnd",
    "translation": "周围",
    "translations": [
      "周围",
      "到处",
      "大约",
      "围绕"
    ]
  },
  {
    "id": "word_0079",
    "word": "arrive",
    "phonetic": "ə'raɪv",
    "translation": "到达",
    "translations": [
      "到达",
      "抵达"
    ]
  },
  {
    "id": "word_0080",
    "word": "art",
    "phonetic": "ɑːt",
    "translation": "艺术",
    "translations": [
      "艺术",
      "美术",
      "艺术作品"
    ]
  },
  {
    "id": "word_0081",
    "word": "article",
    "phonetic": "'ɑːtɪkl",
    "translation": "文章",
    "translations": [
      "文章",
      "论文",
      "冠词"
    ]
  },
  {
    "id": "word_0082",
    "word": "artist",
    "phonetic": "'ɑːtɪst",
    "translation": "艺术家",
    "translations": [
      "艺术家"
    ]
  },
  {
    "id": "word_0083",
    "word": "as",
    "phonetic": "æz",
    "translation": "像……一样",
    "translations": [
      "像……一样",
      "如同",
      "作为",
      "像"
    ]
  },
  {
    "id": "word_0084",
    "word": "ask",
    "phonetic": "ɑːsk",
    "translation": "问",
    "translations": [
      "问",
      "请求",
      "要求"
    ]
  },
  {
    "id": "word_0085",
    "word": "asleep",
    "phonetic": "ə'sliːp",
    "translation": "睡着的",
    "translations": [
      "睡着的"
    ]
  },
  {
    "id": "word_0086",
    "word": "astronaut",
    "phonetic": "'æstrənɔːt",
    "translation": "宇航员",
    "translations": [
      "宇航员",
      "航天员"
    ]
  },
  {
    "id": "word_0087",
    "word": "at",
    "phonetic": "æt",
    "translation": "在",
    "translations": [
      "在"
    ]
  },
  {
    "id": "word_0088",
    "word": "athlete",
    "phonetic": "'æθliːt",
    "translation": "运动员，体育健将",
    "translations": [
      "运动员，体育健将",
      "运动员",
      "体育健将"
    ]
  },
  {
    "id": "word_0089",
    "word": "attack",
    "phonetic": "ə'tæk",
    "translation": "批评，抨击",
    "translations": [
      "批评，抨击",
      "袭击，"
    ]
  },
  {
    "id": "word_0090",
    "word": "attend",
    "phonetic": "ə'tend",
    "translation": "出席",
    "translations": [
      "出席",
      "参加"
    ]
  },
  {
    "id": "word_0091",
    "word": "attention",
    "phonetic": "ə'tenʃn",
    "translation": "注意",
    "translations": [
      "注意",
      "注意力",
      "关注"
    ]
  },
  {
    "id": "word_0092",
    "word": "aunt",
    "phonetic": "ɑːnt",
    "translation": "伯母",
    "translations": [
      "伯母",
      "舅母",
      "婶母",
      "姑"
    ]
  },
  {
    "id": "word_0093",
    "word": "autumn",
    "phonetic": "'ɔːtəm",
    "translation": "秋天",
    "translations": [
      "秋天",
      "秋季"
    ]
  },
  {
    "id": "word_0094",
    "word": "average",
    "phonetic": "'ævərɪdʒ",
    "translation": "平均水平，一般标准",
    "translations": [
      "平均水平，一般标准"
    ]
  },
  {
    "id": "word_0095",
    "word": "avoid",
    "phonetic": "ə'vɔɪd",
    "translation": "避免",
    "translations": [
      "避免",
      "防止",
      "回避"
    ]
  },
  {
    "id": "word_0096",
    "word": "awake",
    "phonetic": "ə'weɪk",
    "translation": "醒着的",
    "translations": [
      "醒着的",
      "唤醒",
      "警觉的",
      "醒来"
    ]
  },
  {
    "id": "word_0097",
    "word": "award",
    "phonetic": "ə'wɔːd",
    "translation": "奖，奖品",
    "translations": [
      "奖，奖品",
      "授予，颁"
    ]
  },
  {
    "id": "word_0098",
    "word": "aware",
    "phonetic": "ə'weə(r)",
    "translation": "察觉到的，意识到的",
    "translations": [
      "察觉到的，意识到的"
    ]
  },
  {
    "id": "word_0099",
    "word": "away",
    "phonetic": "ə'weɪ",
    "translation": "离开",
    "translations": [
      "离开",
      "在"
    ]
  },
  {
    "id": "word_0100",
    "word": "awful",
    "phonetic": "'ɔːfl",
    "translation": "糟糕的",
    "translations": [
      "糟糕的",
      "很坏的",
      "极讨"
    ]
  },
  {
    "id": "word_0101",
    "word": "baby",
    "phonetic": "'beɪbi",
    "translation": "幼嫩的 n.婴儿",
    "translations": [
      "幼嫩的 n.婴儿"
    ]
  },
  {
    "id": "word_0102",
    "word": "back",
    "phonetic": "bæk",
    "translation": "背景",
    "translations": [
      "背景",
      "背景情况"
    ]
  },
  {
    "id": "word_0103",
    "word": "background",
    "phonetic": "",
    "translation": "背景",
    "translations": [
      "背景",
      "背景情况"
    ]
  },
  {
    "id": "word_0104",
    "word": "bad",
    "phonetic": "bæd",
    "translation": "坏的",
    "translations": [
      "坏的",
      "令人不快的"
    ]
  },
  {
    "id": "word_0105",
    "word": "badminton",
    "phonetic": "'bædmɪntən",
    "translation": "羽毛球运动",
    "translations": [
      "羽毛球运动",
      "羽毛球"
    ]
  },
  {
    "id": "word_0106",
    "word": "bag",
    "phonetic": "bæɡ",
    "translation": "袋",
    "translations": [
      "袋",
      "包"
    ]
  },
  {
    "id": "word_0107",
    "word": "balance",
    "phonetic": "'bæləns",
    "translation": "平衡，均衡",
    "translations": [
      "平衡，均衡"
    ]
  },
  {
    "id": "word_0108",
    "word": "ball",
    "phonetic": "bɔːl",
    "translation": "球",
    "translations": [
      "球"
    ]
  },
  {
    "id": "word_0109",
    "word": "balloon",
    "phonetic": "bə'luːn",
    "translation": "气球",
    "translations": [
      "气球"
    ]
  },
  {
    "id": "word_0110",
    "word": "bamboo",
    "phonetic": "ˌbæm'buː",
    "translation": "竹",
    "translations": [
      "竹",
      "竹子"
    ]
  },
  {
    "id": "word_0111",
    "word": "banana",
    "phonetic": "bə'nɑːnə",
    "translation": "香蕉",
    "translations": [
      "香蕉"
    ]
  },
  {
    "id": "word_0112",
    "word": "band",
    "phonetic": "bænd",
    "translation": "乐队",
    "translations": [
      "乐队"
    ]
  },
  {
    "id": "word_0113",
    "word": "bank",
    "phonetic": "",
    "translation": "岸",
    "translations": [
      "岸",
      "河畔",
      "银行"
    ]
  },
  {
    "id": "word_0114",
    "word": "baseball",
    "phonetic": "'beɪsbɔːl",
    "translation": "棒球",
    "translations": [
      "棒球",
      "棒球运动"
    ]
  },
  {
    "id": "word_0115",
    "word": "basic",
    "phonetic": "'beɪsɪk",
    "translation": "基本的",
    "translations": [
      "基本的",
      "初级的"
    ]
  },
  {
    "id": "word_0116",
    "word": "basket",
    "phonetic": "'bɑːskɪt",
    "translation": "筐",
    "translations": [
      "筐",
      "篮"
    ]
  },
  {
    "id": "word_0117",
    "word": "basketball",
    "phonetic": "'bɑːskɪtbɔːl",
    "translation": "篮球",
    "translations": [
      "篮球",
      "篮球运动"
    ]
  },
  {
    "id": "word_0118",
    "word": "bat",
    "phonetic": "bæt",
    "translation": "蝙蝠",
    "translations": [
      "蝙蝠",
      "球拍",
      "球棒",
      "用球棒击打"
    ]
  },
  {
    "id": "word_0119",
    "word": "bath",
    "phonetic": "bɑːθ",
    "translation": "浴缸，浴盆",
    "translations": [
      "浴缸，浴盆",
      "．给……洗澡",
      "洗澡， 沐浴"
    ]
  },
  {
    "id": "word_0120",
    "word": "bathroom",
    "phonetic": "'bɑːθruːm",
    "translation": "浴室",
    "translations": [
      "浴室",
      "盥洗室"
    ]
  },
  {
    "id": "word_0121",
    "word": "be",
    "phonetic": "biː",
    "translation": "．有",
    "translations": [
      "．有",
      "存在",
      "是"
    ]
  },
  {
    "id": "word_0122",
    "word": "beach",
    "phonetic": "biːtʃ",
    "translation": "海滨",
    "translations": [
      "海滨",
      "海滩"
    ]
  },
  {
    "id": "word_0123",
    "word": "bean",
    "phonetic": "biːn",
    "translation": "豆",
    "translations": [
      "豆",
      "豆荚"
    ]
  },
  {
    "id": "word_0124",
    "word": "bear",
    "phonetic": "beə(r)",
    "translation": "熊 v．承受",
    "translations": [
      "熊 v．承受",
      "忍受"
    ]
  },
  {
    "id": "word_0125",
    "word": "beat",
    "phonetic": "biːt",
    "translation": "．敲打",
    "translations": [
      "．敲打"
    ]
  },
  {
    "id": "word_0126",
    "word": "beautiful",
    "phonetic": "'bjuːtɪfl",
    "translation": "美丽的",
    "translations": [
      "美丽的",
      "美好的"
    ]
  },
  {
    "id": "word_0127",
    "word": "because",
    "phonetic": "bɪ'kɒz",
    "translation": "因为",
    "translations": [
      "因为"
    ]
  },
  {
    "id": "word_0128",
    "word": "become",
    "phonetic": "bɪ'kʌm",
    "translation": "．变得",
    "translations": [
      "．变得",
      "成为"
    ]
  },
  {
    "id": "word_0129",
    "word": "bed",
    "phonetic": "bed",
    "translation": "床",
    "translations": [
      "床"
    ]
  },
  {
    "id": "word_0130",
    "word": "bedroom",
    "phonetic": "'bedruːm",
    "translation": "卧室",
    "translations": [
      "卧室"
    ]
  },
  {
    "id": "word_0131",
    "word": "bee",
    "phonetic": "biː",
    "translation": "蜜蜂",
    "translations": [
      "蜜蜂"
    ]
  },
  {
    "id": "word_0132",
    "word": "beef",
    "phonetic": "biːf",
    "translation": "牛肉",
    "translations": [
      "牛肉"
    ]
  },
  {
    "id": "word_0133",
    "word": "before",
    "phonetic": "bɪ'fɔː(r)",
    "translation": "在……以前",
    "translations": [
      "在……以前"
    ]
  },
  {
    "id": "word_0134",
    "word": "begin",
    "phonetic": "bɪ'ɡɪn",
    "translation": "开始",
    "translations": [
      "开始",
      "启动"
    ]
  },
  {
    "id": "word_0135",
    "word": "behave",
    "phonetic": "bɪ'heɪv",
    "translation": "表现",
    "translations": [
      "表现",
      "举止"
    ]
  },
  {
    "id": "word_0136",
    "word": "behind",
    "phonetic": "bɪ'haɪnd",
    "translation": "在",
    "translations": [
      "在"
    ]
  },
  {
    "id": "word_0137",
    "word": "believe",
    "phonetic": "bɪ'liːv",
    "translation": "相信",
    "translations": [
      "相信"
    ]
  },
  {
    "id": "word_0138",
    "word": "bell",
    "phonetic": "bel",
    "translation": "钟",
    "translations": [
      "钟",
      "铃"
    ]
  },
  {
    "id": "word_0139",
    "word": "belong",
    "phonetic": "bɪ'lɒ ",
    "translation": "属于",
    "translations": [
      "属于",
      "归属"
    ]
  },
  {
    "id": "word_0140",
    "word": "below",
    "phonetic": "bɪ'ləʊ",
    "translation": "在",
    "translations": [
      "在"
    ]
  },
  {
    "id": "word_0141",
    "word": "belt",
    "phonetic": "belt",
    "translation": "腰带，皮带",
    "translations": [
      "腰带，皮带"
    ]
  },
  {
    "id": "word_0142",
    "word": "benefit",
    "phonetic": "'benɪfɪt",
    "translation": "优势，益处 v．对",
    "translations": [
      "优势，益处 v．对",
      "好处",
      "利益",
      "津贴",
      "受益",
      "对……有益"
    ]
  },
  {
    "id": "word_0143",
    "word": "beside",
    "phonetic": "bɪ'saɪd",
    "translation": "在旁边",
    "translations": [
      "在旁边"
    ]
  },
  {
    "id": "word_0144",
    "word": "best",
    "phonetic": "best",
    "translation": "最高程度",
    "translations": [
      "最高程度"
    ]
  },
  {
    "id": "word_0145",
    "word": "better",
    "phonetic": "'betə",
    "translation": "更好的",
    "translations": [
      "更好的",
      "好转的",
      "更好地"
    ]
  },
  {
    "id": "word_0146",
    "word": "between",
    "phonetic": "bɪ'twiːn",
    "translation": "在",
    "translations": [
      "在"
    ]
  },
  {
    "id": "word_0147",
    "word": "big",
    "phonetic": "bɪɡ",
    "translation": "大的",
    "translations": [
      "大的"
    ]
  },
  {
    "id": "word_0148",
    "word": "bike",
    "phonetic": "baɪk",
    "translation": "自行车",
    "translations": [
      "自行车"
    ]
  },
  {
    "id": "word_0149",
    "word": "bill",
    "phonetic": "bɪl",
    "translation": "账单",
    "translations": [
      "账单",
      "法案",
      "议案"
    ]
  },
  {
    "id": "word_0150",
    "word": "bin",
    "phonetic": "bɪn",
    "translation": "垃圾箱",
    "translations": [
      "垃圾箱"
    ]
  },
  {
    "id": "word_0151",
    "word": "biology",
    "phonetic": "baɪ'ɒlədʒi",
    "translation": "生物学",
    "translations": [
      "生物学"
    ]
  },
  {
    "id": "word_0152",
    "word": "bird",
    "phonetic": "bɜːd",
    "translation": "鸟",
    "translations": [
      "鸟"
    ]
  },
  {
    "id": "word_0153",
    "word": "birth",
    "phonetic": "bɜːθ",
    "translation": "出生",
    "translations": [
      "出生",
      "诞生"
    ]
  },
  {
    "id": "word_0154",
    "word": "birthday",
    "phonetic": "'bɜːθdeɪ",
    "translation": "生日",
    "translations": [
      "生日"
    ]
  },
  {
    "id": "word_0155",
    "word": "biscuit",
    "phonetic": "'bɪskɪt",
    "translation": "饼干",
    "translations": [
      "饼干"
    ]
  },
  {
    "id": "word_0156",
    "word": "bit",
    "phonetic": "bɪt",
    "translation": "一点",
    "translations": [
      "一点",
      "小块"
    ]
  },
  {
    "id": "word_0157",
    "word": "black",
    "phonetic": "blæk",
    "translation": "黑色 adj.黑色的",
    "translations": [
      "黑色 adj.黑色的"
    ]
  },
  {
    "id": "word_0158",
    "word": "blackboard",
    "phonetic": "'blækbɔːd",
    "translation": "黑板",
    "translations": [
      "黑板"
    ]
  },
  {
    "id": "word_0159",
    "word": "bleed",
    "phonetic": "bliːd",
    "translation": "流血，出血",
    "translations": [
      "流血，出血",
      "流血",
      "（颜料、染料等）渗开"
    ]
  },
  {
    "id": "word_0160",
    "word": "blind",
    "phonetic": "blaɪnd",
    "translation": "瞎的",
    "translations": [
      "瞎的",
      "失明的"
    ]
  },
  {
    "id": "word_0161",
    "word": "block",
    "phonetic": "blɒk",
    "translation": "街区 v．阻挡",
    "translations": [
      "街区 v．阻挡",
      "堵塞"
    ]
  },
  {
    "id": "word_0162",
    "word": "blood",
    "phonetic": "blʌd",
    "translation": "血",
    "translations": [
      "血"
    ]
  },
  {
    "id": "word_0163",
    "word": "blouse",
    "phonetic": "blaʊz",
    "translation": "衬衫",
    "translations": [
      "衬衫"
    ]
  },
  {
    "id": "word_0164",
    "word": "blow",
    "phonetic": "bləʊ",
    "translation": "吹",
    "translations": [
      "吹",
      "刮"
    ]
  },
  {
    "id": "word_0165",
    "word": "blue",
    "phonetic": "bluː",
    "translation": "蓝色",
    "translations": [
      "蓝色",
      "蓝色的",
      "悲伤的"
    ]
  },
  {
    "id": "word_0166",
    "word": "board",
    "phonetic": "bɔːd",
    "translation": "木板 v．上船",
    "translations": [
      "木板 v．上船"
    ]
  },
  {
    "id": "word_0167",
    "word": "boat",
    "phonetic": "bəʊt",
    "translation": "小船",
    "translations": [
      "小船"
    ]
  },
  {
    "id": "word_0168",
    "word": "body",
    "phonetic": "'bɒdi",
    "translation": "身体",
    "translations": [
      "身体"
    ]
  },
  {
    "id": "word_0169",
    "word": "boil",
    "phonetic": "bɔɪl",
    "translation": "煮沸",
    "translations": [
      "煮沸",
      "烧开"
    ]
  },
  {
    "id": "word_0170",
    "word": "book",
    "phonetic": "bʊk",
    "translation": "书",
    "translations": [
      "书",
      "本子",
      "预订",
      "预约"
    ]
  },
  {
    "id": "word_0171",
    "word": "boring",
    "phonetic": "'bɔːrɪ\t",
    "translation": "乏味的",
    "translations": [
      "乏味的",
      "无聊的"
    ]
  },
  {
    "id": "word_0172",
    "word": "born",
    "phonetic": "bɔːn",
    "translation": "出生 adj.天生的",
    "translations": [
      "出生 adj.天生的"
    ]
  },
  {
    "id": "word_0173",
    "word": "borrow",
    "phonetic": "'bɒrəʊ",
    "translation": "借用",
    "translations": [
      "借用",
      "借"
    ]
  },
  {
    "id": "word_0174",
    "word": "boss",
    "phonetic": "bɒs",
    "translation": "领班",
    "translations": [
      "领班",
      "老板"
    ]
  },
  {
    "id": "word_0175",
    "word": "both",
    "phonetic": "bəʊθ",
    "translation": "两者",
    "translations": [
      "两者"
    ]
  },
  {
    "id": "word_0176",
    "word": "bottle",
    "phonetic": "'bɒtl",
    "translation": "瓶子",
    "translations": [
      "瓶子"
    ]
  },
  {
    "id": "word_0177",
    "word": "bottom",
    "phonetic": "'bɒtəm",
    "translation": "底部",
    "translations": [
      "底部"
    ]
  },
  {
    "id": "word_0178",
    "word": "bowl",
    "phonetic": "bəʊl",
    "translation": "碗",
    "translations": [
      "碗"
    ]
  },
  {
    "id": "word_0179",
    "word": "box",
    "phonetic": "bɒks",
    "translation": "盒",
    "translations": [
      "盒",
      "箱"
    ]
  },
  {
    "id": "word_0180",
    "word": "boy",
    "phonetic": "bɔɪ",
    "translation": "男孩",
    "translations": [
      "男孩"
    ]
  },
  {
    "id": "word_0181",
    "word": "brain",
    "phonetic": "breɪn",
    "translation": "脑",
    "translations": [
      "脑"
    ]
  },
  {
    "id": "word_0182",
    "word": "brave",
    "phonetic": "breɪv",
    "translation": "勇敢的",
    "translations": [
      "勇敢的"
    ]
  },
  {
    "id": "word_0183",
    "word": "bread",
    "phonetic": "bred",
    "translation": "面包",
    "translations": [
      "面包"
    ]
  },
  {
    "id": "word_0184",
    "word": "break",
    "phonetic": "breɪk",
    "translation": "损坏",
    "translations": [
      "损坏"
    ]
  },
  {
    "id": "word_0185",
    "word": "breakfast",
    "phonetic": "'brekfəst",
    "translation": "早餐",
    "translations": [
      "早餐"
    ]
  },
  {
    "id": "word_0186",
    "word": "breath",
    "phonetic": "breθ",
    "translation": "呼吸",
    "translations": [
      "呼吸"
    ]
  },
  {
    "id": "word_0187",
    "word": "bridge",
    "phonetic": "brɪdʒ",
    "translation": "桥",
    "translations": [
      "桥"
    ]
  },
  {
    "id": "word_0188",
    "word": "bright",
    "phonetic": "braɪt",
    "translation": "明亮的",
    "translations": [
      "明亮的",
      "光线充足的",
      "光亮地",
      "明亮地"
    ]
  },
  {
    "id": "word_0189",
    "word": "bring",
    "phonetic": "brɪ ",
    "translation": "拿来",
    "translations": [
      "拿来",
      "带来",
      "取来"
    ]
  },
  {
    "id": "word_0190",
    "word": "brother",
    "phonetic": "'brʌðə(r)",
    "translation": "兄",
    "translations": [
      "兄",
      "弟"
    ]
  },
  {
    "id": "word_0191",
    "word": "brown",
    "phonetic": "braʊn",
    "translation": "褐色",
    "translations": [
      "褐色",
      "棕色",
      "褐色的",
      "棕色的"
    ]
  },
  {
    "id": "word_0192",
    "word": "brush",
    "phonetic": "brʌʃ",
    "translation": "刷子",
    "translations": [
      "刷子"
    ]
  },
  {
    "id": "word_0193",
    "word": "budget",
    "phonetic": "'bʌdʒɪt",
    "translation": "预算",
    "translations": [
      "预算",
      "计划开支"
    ]
  },
  {
    "id": "word_0194",
    "word": "build",
    "phonetic": "bɪld",
    "translation": "建筑",
    "translations": [
      "建筑",
      "建造"
    ]
  },
  {
    "id": "word_0195",
    "word": "building",
    "phonetic": "'bɪldɪ ",
    "translation": "建筑物",
    "translations": [
      "建筑物",
      "房子",
      "楼"
    ]
  },
  {
    "id": "word_0196",
    "word": "bully",
    "phonetic": "'bʊli",
    "translation": "恃强凌弱者，横行",
    "translations": [
      "恃强凌弱者，横行",
      "霸凌者",
      "恶霸",
      "欺负",
      "恐吓"
    ]
  },
  {
    "id": "word_0197",
    "word": "burn",
    "phonetic": "bɜːn",
    "translation": "燃烧",
    "translations": [
      "燃烧",
      "着火"
    ]
  },
  {
    "id": "word_0198",
    "word": "bus",
    "phonetic": "bʌs",
    "translation": "公共汽车",
    "translations": [
      "公共汽车"
    ]
  },
  {
    "id": "word_0199",
    "word": "business",
    "phonetic": "'bɪznəs",
    "translation": "生意",
    "translations": [
      "生意",
      "公事",
      "职责"
    ]
  },
  {
    "id": "word_0200",
    "word": "busy",
    "phonetic": "'bɪzi",
    "translation": "忙碌的",
    "translations": [
      "忙碌的",
      "热闹的"
    ]
  },
  {
    "id": "word_0201",
    "word": "but",
    "phonetic": "bʌt",
    "translation": "但是",
    "translations": [
      "但是",
      "可是",
      "除……之外"
    ]
  },
  {
    "id": "word_0202",
    "word": "butter",
    "phonetic": "'bʌtə",
    "translation": "黄油",
    "translations": [
      "黄油",
      "奶油"
    ]
  },
  {
    "id": "word_0203",
    "word": "butterfly",
    "phonetic": "'bʌtəflaɪ",
    "translation": "蝴蝶",
    "translations": [
      "蝴蝶"
    ]
  },
  {
    "id": "word_0204",
    "word": "buy",
    "phonetic": "baɪ",
    "translation": "买",
    "translations": [
      "买"
    ]
  },
  {
    "id": "word_0205",
    "word": "by",
    "phonetic": "baɪ",
    "translation": "靠近",
    "translations": [
      "靠近",
      "在……旁",
      "在……之前"
    ]
  },
  {
    "id": "word_0206",
    "word": "cabbage",
    "phonetic": "'kæbɪdʒ",
    "translation": "卷心菜",
    "translations": [
      "卷心菜",
      "洋白菜"
    ]
  },
  {
    "id": "word_0207",
    "word": "cake",
    "phonetic": "keɪk",
    "translation": "蛋糕",
    "translations": [
      "蛋糕",
      "饼"
    ]
  },
  {
    "id": "word_0208",
    "word": "calendar",
    "phonetic": "'kælɪndə(r)",
    "translation": "日历",
    "translations": [
      "日历",
      "日程表",
      "活动安排"
    ]
  },
  {
    "id": "word_0209",
    "word": "call",
    "phonetic": "kɔːl",
    "translation": "喊",
    "translations": [
      "喊",
      "叫",
      "电话",
      "通话",
      "称呼",
      "打电话",
      "呼唤"
    ]
  },
  {
    "id": "word_0210",
    "word": "calm",
    "phonetic": "kɑːm",
    "translation": "镇静的",
    "translations": [
      "镇静的",
      "沉着的 v．使平静，使镇静",
      "冷静下来，镇静下来"
    ]
  },
  {
    "id": "word_0211",
    "word": "camera",
    "phonetic": "'kæmərə",
    "translation": "照相机",
    "translations": [
      "照相机",
      "摄像机"
    ]
  },
  {
    "id": "word_0212",
    "word": "camp",
    "phonetic": "kæmp",
    "translation": "露营",
    "translations": [
      "露营",
      "营地",
      "度假营"
    ]
  },
  {
    "id": "word_0213",
    "word": "can",
    "phonetic": "kæn",
    "translation": "．能",
    "translations": [
      "．能",
      "会",
      "可以",
      "金属罐",
      "一罐"
    ]
  },
  {
    "id": "word_0214",
    "word": "cancel",
    "phonetic": "'kænsl",
    "translation": "取消",
    "translations": [
      "取消",
      "终止"
    ]
  },
  {
    "id": "word_0215",
    "word": "cancer",
    "phonetic": "'kænsə(r)",
    "translation": "癌症",
    "translations": [
      "癌症"
    ]
  },
  {
    "id": "word_0216",
    "word": "candle",
    "phonetic": "'kændl",
    "translation": "蜡烛",
    "translations": [
      "蜡烛"
    ]
  },
  {
    "id": "word_0217",
    "word": "candy",
    "phonetic": "'kændi",
    "translation": "糖果",
    "translations": [
      "糖果"
    ]
  },
  {
    "id": "word_0218",
    "word": "cap",
    "phonetic": "kæp",
    "translation": "帽子",
    "translations": [
      "帽子",
      "盖子"
    ]
  },
  {
    "id": "word_0219",
    "word": "capital",
    "phonetic": "'kæpɪtl",
    "translation": "首都",
    "translations": [
      "首都",
      "大写字母",
      "资本"
    ]
  },
  {
    "id": "word_0220",
    "word": "car",
    "phonetic": "kɑː(r)",
    "translation": "小汽车",
    "translations": [
      "小汽车",
      "轿车"
    ]
  },
  {
    "id": "word_0221",
    "word": "card",
    "phonetic": "kɑːd",
    "translation": "卡片",
    "translations": [
      "卡片",
      "贺卡",
      "纸牌"
    ]
  },
  {
    "id": "word_0222",
    "word": "care",
    "phonetic": "keə(r)",
    "translation": "照料",
    "translations": [
      "照料",
      "照顾",
      "小心",
      "在意",
      "关心",
      "担忧"
    ]
  },
  {
    "id": "word_0223",
    "word": "careful",
    "phonetic": "'keəfl",
    "translation": "小心的",
    "translations": [
      "小心的",
      "细致的",
      "谨慎的"
    ]
  },
  {
    "id": "word_0224",
    "word": "careless",
    "phonetic": "'keələs",
    "translation": "不小心的",
    "translations": [
      "不小心的",
      "不仔细的",
      "粗心的"
    ]
  },
  {
    "id": "word_0225",
    "word": "carrot",
    "phonetic": "'kærət",
    "translation": "胡萝卜",
    "translations": [
      "胡萝卜"
    ]
  },
  {
    "id": "word_0226",
    "word": "carry",
    "phonetic": "'kæri",
    "translation": "拿",
    "translations": [
      "拿",
      "搬",
      "提",
      "扛",
      "背"
    ]
  },
  {
    "id": "word_0227",
    "word": "cartoon",
    "phonetic": "kɑː'tuːn",
    "translation": "动画片",
    "translations": [
      "动画片",
      "卡通片"
    ]
  },
  {
    "id": "word_0228",
    "word": "case",
    "phonetic": "keɪs",
    "translation": "情况",
    "translations": [
      "情况",
      "实情"
    ]
  },
  {
    "id": "word_0229",
    "word": "cash",
    "phonetic": "kæʃ",
    "translation": "现款，现金",
    "translations": [
      "现款，现金"
    ]
  },
  {
    "id": "word_0230",
    "word": "cat",
    "phonetic": "kæt",
    "translation": "猫",
    "translations": [
      "猫"
    ]
  },
  {
    "id": "word_0231",
    "word": "catch",
    "phonetic": "kætʃ",
    "translation": "接住",
    "translations": [
      "接住",
      "捉住",
      "赶上"
    ]
  },
  {
    "id": "word_0232",
    "word": "cause",
    "phonetic": "kɔːz",
    "translation": "原因",
    "translations": [
      "原因",
      "起因",
      "造成，引起"
    ]
  },
  {
    "id": "word_0233",
    "word": "celebrate",
    "phonetic": "'selɪbreɪt",
    "translation": "庆祝",
    "translations": [
      "庆祝"
    ]
  },
  {
    "id": "word_0234",
    "word": "cent",
    "phonetic": "sent",
    "translation": "分",
    "translations": [
      "分",
      "分币"
    ]
  },
  {
    "id": "word_0235",
    "word": "central",
    "phonetic": "'sentrəl",
    "translation": "在中心的",
    "translations": [
      "在中心的",
      "中央",
      "中心的",
      "主要的"
    ]
  },
  {
    "id": "word_0236",
    "word": "centre",
    "phonetic": "'sentə(r)",
    "translation": "中心",
    "translations": [
      "中心",
      "中央"
    ]
  },
  {
    "id": "word_0237",
    "word": "century",
    "phonetic": "'sentʃəri",
    "translation": "世纪",
    "translations": [
      "世纪",
      "百年"
    ]
  },
  {
    "id": "word_0238",
    "word": "certain",
    "phonetic": "'sɜːtn",
    "translation": "确定",
    "translations": [
      "确定",
      "无疑",
      "某种",
      "确定的",
      "肯定的"
    ]
  },
  {
    "id": "word_0239",
    "word": "chair",
    "phonetic": "tʃeə(r)",
    "translation": "椅子",
    "translations": [
      "椅子"
    ]
  },
  {
    "id": "word_0240",
    "word": "chalk",
    "phonetic": "tʃɔːk",
    "translation": "粉笔",
    "translations": [
      "粉笔",
      "用粉笔写"
    ]
  },
  {
    "id": "word_0241",
    "word": "challenge",
    "phonetic": "'tʃælɪndʒ",
    "translation": "．挑战",
    "translations": [
      "．挑战",
      "考验"
    ]
  },
  {
    "id": "word_0242",
    "word": "champion",
    "phonetic": "'tʃæmpiən",
    "translation": "冠军，第一名",
    "translations": [
      "冠军，第一名",
      "冠军",
      "捍卫者"
    ]
  },
  {
    "id": "word_0243",
    "word": "chance",
    "phonetic": "tʃɑːns",
    "translation": "机会",
    "translations": [
      "机会",
      "可能性"
    ]
  },
  {
    "id": "word_0244",
    "word": "change",
    "phonetic": "tʃeɪndʒ",
    "translation": "改变",
    "translations": [
      "改变",
      "兑换",
      "变化",
      "零钱"
    ]
  },
  {
    "id": "word_0245",
    "word": "character",
    "phonetic": "'kærəktə(r)",
    "translation": "人物",
    "translations": [
      "人物",
      "角色"
    ]
  },
  {
    "id": "word_0246",
    "word": "characteristic",
    "phonetic": "'kærəktə'rɪstɪk",
    "translation": "特征，特点，特色",
    "translations": [
      "特征，特点，特色",
      "独特的，典型的",
      "典型的，有代表性的",
      "特征",
      "特点",
      "典型的",
      "特有的"
    ]
  },
  {
    "id": "word_0247",
    "word": "charity",
    "phonetic": "'tʃærəti",
    "translation": "慈善组织，慈善机构",
    "translations": [
      "慈善组织，慈善机构"
    ]
  },
  {
    "id": "word_0248",
    "word": "chat",
    "phonetic": "tʃæt",
    "translation": "聊天",
    "translations": [
      "聊天",
      "闲聊"
    ]
  },
  {
    "id": "word_0249",
    "word": "cheap",
    "phonetic": "tʃiːp",
    "translation": "便宜的",
    "translations": [
      "便宜的",
      "廉价的"
    ]
  },
  {
    "id": "word_0250",
    "word": "cheat",
    "phonetic": "tʃiːt",
    "translation": "欺骗",
    "translations": [
      "欺骗",
      "蒙骗",
      "骗子",
      "欺骗的"
    ]
  },
  {
    "id": "word_0251",
    "word": "check",
    "phonetic": "tʃek",
    "translation": "检查 n．检查",
    "translations": [
      "检查 n．检查",
      "核对",
      "支票",
      "账单"
    ]
  },
  {
    "id": "word_0252",
    "word": "cheer",
    "phonetic": "tʃɪə(r)",
    "translation": "．欢呼",
    "translations": [
      "．欢呼",
      "喝彩"
    ]
  },
  {
    "id": "word_0253",
    "word": "cheese",
    "phonetic": "tʃiːz",
    "translation": "奶酪",
    "translations": [
      "奶酪",
      "芝士"
    ]
  },
  {
    "id": "word_0254",
    "word": "chemistry",
    "phonetic": "'kemɪstri",
    "translation": "化学",
    "translations": [
      "化学"
    ]
  },
  {
    "id": "word_0255",
    "word": "chess",
    "phonetic": "tʃes",
    "translation": "国际象棋",
    "translations": [
      "国际象棋"
    ]
  },
  {
    "id": "word_0256",
    "word": "chicken",
    "phonetic": "'tʃɪkɪn",
    "translation": "鸡",
    "translations": [
      "鸡",
      "鸡肉"
    ]
  },
  {
    "id": "word_0257",
    "word": "child",
    "phonetic": "tʃaɪld",
    "translation": "小孩",
    "translations": [
      "小孩",
      "儿童"
    ]
  },
  {
    "id": "word_0258",
    "word": "chip",
    "phonetic": "tʃɪp",
    "translation": "炸薯条，炸薯片",
    "translations": [
      "炸薯条，炸薯片",
      "芯片",
      "碎片",
      "薯片"
    ]
  },
  {
    "id": "word_0259",
    "word": "chocolate",
    "phonetic": "'tʃɒklət",
    "translation": "巧克力",
    "translations": [
      "巧克力"
    ]
  },
  {
    "id": "word_0260",
    "word": "choice",
    "phonetic": "tʃɔɪs",
    "translation": "选择",
    "translations": [
      "选择",
      "挑选"
    ]
  },
  {
    "id": "word_0261",
    "word": "choose",
    "phonetic": "tʃuːz",
    "translation": "选择",
    "translations": [
      "选择",
      "挑选"
    ]
  },
  {
    "id": "word_0262",
    "word": "chore",
    "phonetic": "tʃɔː(r)",
    "translation": "杂务",
    "translations": [
      "杂务",
      "乏味无聊的工作",
      "家务",
      "琐事",
      "令人厌烦的工作"
    ]
  },
  {
    "id": "word_0263",
    "word": "Christmas",
    "phonetic": "'krɪsməs",
    "translation": "圣诞节",
    "translations": [
      "圣诞节"
    ]
  },
  {
    "id": "word_0264",
    "word": "cinema",
    "phonetic": "'sɪnəmə",
    "translation": "电影院",
    "translations": [
      "电影院"
    ]
  },
  {
    "id": "word_0265",
    "word": "circle",
    "phonetic": "'sɜːkl",
    "translation": "圆圈 v．圈出",
    "translations": [
      "圆圈 v．圈出",
      "环绕"
    ]
  },
  {
    "id": "word_0266",
    "word": "citizen",
    "phonetic": "'sɪtɪz(ə)n",
    "translation": "市民，城镇居民",
    "translations": [
      "市民，城镇居民"
    ]
  },
  {
    "id": "word_0267",
    "word": "city",
    "phonetic": "'sɪti",
    "translation": "城市",
    "translations": [
      "城市",
      "都市"
    ]
  },
  {
    "id": "word_0268",
    "word": "class",
    "phonetic": "klɑːs",
    "translation": "班级",
    "translations": [
      "班级",
      "课",
      "等级",
      "阶级"
    ]
  },
  {
    "id": "word_0269",
    "word": "classic",
    "phonetic": "'klæsɪk",
    "translation": "最优秀的",
    "translations": [
      "最优秀的",
      "典型的",
      "古典的 n．经典作品",
      "名著"
    ]
  },
  {
    "id": "word_0270",
    "word": "classmate",
    "phonetic": "'klɑːsmeɪt",
    "translation": "同班同学",
    "translations": [
      "同班同学"
    ]
  },
  {
    "id": "word_0271",
    "word": "classroom",
    "phonetic": "'klɑːsruːm",
    "translation": "教室",
    "translations": [
      "教室"
    ]
  },
  {
    "id": "word_0272",
    "word": "clean",
    "phonetic": "kliːn",
    "translation": "打扫",
    "translations": [
      "打扫",
      "使……干净",
      "清洁的",
      "干净的"
    ]
  },
  {
    "id": "word_0273",
    "word": "clear",
    "phonetic": "klɪə(r)",
    "translation": "清晰的",
    "translations": [
      "清晰的",
      "晴朗的",
      "清楚"
    ]
  },
  {
    "id": "word_0274",
    "word": "clever",
    "phonetic": "'klevə(r)",
    "translation": "聪明的",
    "translations": [
      "聪明的",
      "灵巧的"
    ]
  },
  {
    "id": "word_0275",
    "word": "click",
    "phonetic": "klɪk",
    "translation": "发出咔",
    "translations": [
      "发出咔"
    ]
  },
  {
    "id": "word_0276",
    "word": "climate",
    "phonetic": "'klaɪmət",
    "translation": "气候",
    "translations": [
      "气候"
    ]
  },
  {
    "id": "word_0277",
    "word": "climb",
    "phonetic": "klaɪm",
    "translation": "爬",
    "translations": [
      "爬",
      "攀登"
    ]
  },
  {
    "id": "word_0278",
    "word": "clock",
    "phonetic": "klɒk",
    "translation": "时钟",
    "translations": [
      "时钟",
      "钟"
    ]
  },
  {
    "id": "word_0279",
    "word": "close",
    "phonetic": "kləʊs",
    "translation": "关",
    "translations": [
      "关",
      "关闭",
      "亲密的"
    ]
  },
  {
    "id": "word_0280",
    "word": "clothes",
    "phonetic": "kləʊðz",
    "translation": "衣服",
    "translations": [
      "衣服",
      "服装"
    ]
  },
  {
    "id": "word_0281",
    "word": "cloud",
    "phonetic": "klaʊd",
    "translation": "云",
    "translations": [
      "云",
      "云朵",
      "阴影"
    ]
  },
  {
    "id": "word_0282",
    "word": "cloudy",
    "phonetic": "'klaʊdi",
    "translation": "多云的",
    "translations": [
      "多云的",
      "阴天的"
    ]
  },
  {
    "id": "word_0283",
    "word": "club",
    "phonetic": "klʌb",
    "translation": "俱乐部",
    "translations": [
      "俱乐部"
    ]
  },
  {
    "id": "word_0284",
    "word": "coach",
    "phonetic": "kəʊtʃ",
    "translation": "私人",
    "translations": [
      "私人",
      "教练",
      "培训"
    ]
  },
  {
    "id": "word_0285",
    "word": "coast",
    "phonetic": "kəʊst",
    "translation": "海岸",
    "translations": [
      "海岸",
      "海滨",
      "海岸线"
    ]
  },
  {
    "id": "word_0286",
    "word": "coat",
    "phonetic": "kəʊt",
    "translation": "外套",
    "translations": [
      "外套",
      "大衣"
    ]
  },
  {
    "id": "word_0287",
    "word": "coffee",
    "phonetic": "'kɒfi",
    "translation": "咖啡",
    "translations": [
      "咖啡"
    ]
  },
  {
    "id": "word_0288",
    "word": "coin",
    "phonetic": "kɔɪn",
    "translation": "硬币",
    "translations": [
      "硬币"
    ]
  },
  {
    "id": "word_0289",
    "word": "cold",
    "phonetic": "kəʊld",
    "translation": "冷的",
    "translations": [
      "冷的",
      "寒冷的",
      "冷却的",
      "寒冷",
      "感冒"
    ]
  },
  {
    "id": "word_0290",
    "word": "collect",
    "phonetic": "kə'lekt",
    "translation": "收集",
    "translations": [
      "收集",
      "搜集"
    ]
  },
  {
    "id": "word_0291",
    "word": "college",
    "phonetic": "'kɒlɪdʒ",
    "translation": "学院",
    "translations": [
      "学院",
      "大学"
    ]
  },
  {
    "id": "word_0292",
    "word": "colour",
    "phonetic": "'kʌlə(r)",
    "translation": "颜色",
    "translations": [
      "颜色",
      "为……着色"
    ]
  },
  {
    "id": "word_0293",
    "word": "come",
    "phonetic": "kʌm",
    "translation": "来",
    "translations": [
      "来",
      "来到"
    ]
  },
  {
    "id": "word_0294",
    "word": "comfortable",
    "phonetic": "'kʌmftəbl",
    "translation": "舒服的",
    "translations": [
      "舒服的",
      "安逸的"
    ]
  },
  {
    "id": "word_0295",
    "word": "common",
    "phonetic": "'kɒmən",
    "translation": "常见的",
    "translations": [
      "常见的",
      "普通"
    ]
  },
  {
    "id": "word_0296",
    "word": "communicate",
    "phonetic": "kə'mjuːnɪkeɪt",
    "translation": "交流",
    "translations": [
      "交流",
      "沟通"
    ]
  },
  {
    "id": "word_0297",
    "word": "community",
    "phonetic": "kə'mjuːnəti",
    "translation": "社区",
    "translations": [
      "社区",
      "社团"
    ]
  },
  {
    "id": "word_0298",
    "word": "company",
    "phonetic": "'kʌmpəni",
    "translation": "公司",
    "translations": [
      "公司",
      "陪伴",
      "同"
    ]
  },
  {
    "id": "word_0299",
    "word": "compare",
    "phonetic": "kəm'peə(r)",
    "translation": "比较",
    "translations": [
      "比较",
      "对比"
    ]
  },
  {
    "id": "word_0300",
    "word": "compete",
    "phonetic": "kəm'piːt",
    "translation": "竞争",
    "translations": [
      "竞争",
      "对抗"
    ]
  },
  {
    "id": "word_0301",
    "word": "complete",
    "phonetic": "kəm'pliːt",
    "translation": "完成",
    "translations": [
      "完成",
      "结束",
      "完整的",
      "彻底的"
    ]
  },
  {
    "id": "word_0302",
    "word": "computer",
    "phonetic": "kəm'pjuːtə(r)",
    "translation": "计算机",
    "translations": [
      "计算机",
      "电脑"
    ]
  },
  {
    "id": "word_0303",
    "word": "concert",
    "phonetic": "'kɒnsət",
    "translation": "音乐会",
    "translations": [
      "音乐会",
      "演奏会"
    ]
  },
  {
    "id": "word_0304",
    "word": "condition",
    "phonetic": "kən'dɪʃn",
    "translation": "条件",
    "translations": [
      "条件",
      "状况"
    ]
  },
  {
    "id": "word_0305",
    "word": "confidence",
    "phonetic": "'kɒnfɪdəns",
    "translation": "自信心",
    "translations": [
      "自信心",
      "信任，"
    ]
  },
  {
    "id": "word_0306",
    "word": "congratulation",
    "phonetic": "kənˌɡrætʃu'leɪʃn",
    "translation": "恭喜",
    "translations": [
      "恭喜",
      "祝贺"
    ]
  },
  {
    "id": "word_0307",
    "word": "connect",
    "phonetic": "kə'nekt",
    "translation": "连接",
    "translations": [
      "连接",
      "把……"
    ]
  },
  {
    "id": "word_0308",
    "word": "consider",
    "phonetic": "kən'sɪdə(r)",
    "translation": "仔细考虑",
    "translations": [
      "仔细考虑",
      "认为"
    ]
  },
  {
    "id": "word_0309",
    "word": "continue",
    "phonetic": "kən'tɪnjuː",
    "translation": "继续",
    "translations": [
      "继续"
    ]
  },
  {
    "id": "word_0310",
    "word": "control",
    "phonetic": "kən'trəʊl",
    "translation": "．控制",
    "translations": [
      "．控制"
    ]
  },
  {
    "id": "word_0311",
    "word": "convenient",
    "phonetic": "kən'viːniənt",
    "translation": "便利的",
    "translations": [
      "便利的",
      "方便"
    ]
  },
  {
    "id": "word_0312",
    "word": "conversation",
    "phonetic": "ˌkɒnvə'seɪʃn",
    "translation": "谈话",
    "translations": [
      "谈话",
      "交谈"
    ]
  },
  {
    "id": "word_0313",
    "word": "cook",
    "phonetic": "kʊk",
    "translation": "厨师 v．烹调",
    "translations": [
      "厨师 v．烹调",
      "做饭"
    ]
  },
  {
    "id": "word_0314",
    "word": "cookie",
    "phonetic": "'kʊki",
    "translation": "曲奇饼",
    "translations": [
      "曲奇饼"
    ]
  },
  {
    "id": "word_0315",
    "word": "cool",
    "phonetic": "kuːl",
    "translation": "凉爽的",
    "translations": [
      "凉爽的",
      "冷静的",
      "酷的"
    ]
  },
  {
    "id": "word_0316",
    "word": "cooperate",
    "phonetic": "kəʊ'ɒpəreɪt",
    "translation": "合作",
    "translations": [
      "合作",
      "协作"
    ]
  },
  {
    "id": "word_0317",
    "word": "copy",
    "phonetic": "'kɒpi",
    "translation": "复印件",
    "translations": [
      "复印件",
      "副本",
      "抄写",
      "复制"
    ]
  },
  {
    "id": "word_0318",
    "word": "corn",
    "phonetic": "kɔːn",
    "translation": "玉米",
    "translations": [
      "玉米",
      "谷物"
    ]
  },
  {
    "id": "word_0319",
    "word": "corner",
    "phonetic": "'kɔːnə(r)",
    "translation": "角",
    "translations": [
      "角",
      "拐角"
    ]
  },
  {
    "id": "word_0320",
    "word": "correct",
    "phonetic": "kə'rekt",
    "translation": "改正",
    "translations": [
      "改正",
      "纠正",
      "正确的",
      "恰当的"
    ]
  },
  {
    "id": "word_0321",
    "word": "cost",
    "phonetic": "kɒst",
    "translation": "花费 n．代价",
    "translations": [
      "花费 n．代价",
      "成本"
    ]
  },
  {
    "id": "word_0322",
    "word": "cotton",
    "phonetic": "'kɒtn",
    "translation": "棉",
    "translations": [
      "棉",
      "棉花"
    ]
  },
  {
    "id": "word_0323",
    "word": "cough",
    "phonetic": "kɒf",
    "translation": "．咳嗽",
    "translations": [
      "．咳嗽"
    ]
  },
  {
    "id": "word_0324",
    "word": "could",
    "phonetic": "kʊd",
    "translation": "．",
    "translations": [
      "．"
    ]
  },
  {
    "id": "word_0325",
    "word": "count",
    "phonetic": "kaʊnt",
    "translation": "重要",
    "translations": [
      "重要"
    ]
  },
  {
    "id": "word_0326",
    "word": "country",
    "phonetic": "'kʌntri",
    "translation": "国家",
    "translations": [
      "国家",
      "乡村",
      "乡下"
    ]
  },
  {
    "id": "word_0327",
    "word": "countryside",
    "phonetic": "'kʌntrisaɪd",
    "translation": "乡村",
    "translations": [
      "乡村",
      "农村"
    ]
  },
  {
    "id": "word_0328",
    "word": "couple",
    "phonetic": "'kʌpl",
    "translation": "夫妻",
    "translations": [
      "夫妻",
      "情侣",
      "两人"
    ]
  },
  {
    "id": "word_0329",
    "word": "courage",
    "phonetic": "'kʌrɪdʒ",
    "translation": "勇气",
    "translations": [
      "勇气",
      "胆量"
    ]
  },
  {
    "id": "word_0330",
    "word": "course",
    "phonetic": "kɔːs",
    "translation": "课程",
    "translations": [
      "课程",
      "一道菜",
      "进程"
    ]
  },
  {
    "id": "word_0331",
    "word": "cousin",
    "phonetic": "'kʌzn",
    "translation": "堂",
    "translations": [
      "堂"
    ]
  },
  {
    "id": "word_0332",
    "word": "cover",
    "phonetic": "'kʌvə(r)",
    "translation": "覆盖物",
    "translations": [
      "覆盖物",
      "躲避处",
      "封面",
      "覆盖",
      "遮盖"
    ]
  },
  {
    "id": "word_0333",
    "word": "cow",
    "phonetic": "kaʊ",
    "translation": "母牛",
    "translations": [
      "母牛",
      "奶牛"
    ]
  },
  {
    "id": "word_0334",
    "word": "crazy",
    "phonetic": "'kreɪzi",
    "translation": "疯狂的",
    "translations": [
      "疯狂的"
    ]
  },
  {
    "id": "word_0335",
    "word": "create",
    "phonetic": "kri'eɪt",
    "translation": "创造",
    "translations": [
      "创造",
      "造成"
    ]
  },
  {
    "id": "word_0336",
    "word": "creative",
    "phonetic": "kri'eɪtɪv",
    "translation": "有创造力的",
    "translations": [
      "有创造力的",
      "创造性的"
    ]
  },
  {
    "id": "word_0337",
    "word": "cross",
    "phonetic": "krɒs",
    "translation": "十字形记号",
    "translations": [
      "十字形记号",
      "越过",
      "穿过"
    ]
  },
  {
    "id": "word_0338",
    "word": "crowded",
    "phonetic": "'kraʊdɪd",
    "translation": "人多的",
    "translations": [
      "人多的",
      "拥挤的",
      "挤满的"
    ]
  },
  {
    "id": "word_0339",
    "word": "cry",
    "phonetic": "kraɪ",
    "translation": "叫喊",
    "translations": [
      "叫喊",
      "哭",
      "喊叫"
    ]
  },
  {
    "id": "word_0340",
    "word": "cucumber",
    "phonetic": "'kjuːkʌmbə(r)",
    "translation": "黄瓜",
    "translations": [
      "黄瓜",
      "胡瓜"
    ]
  },
  {
    "id": "word_0341",
    "word": "culture",
    "phonetic": "'kʌltʃə(r)",
    "translation": "文化",
    "translations": [
      "文化"
    ]
  },
  {
    "id": "word_0342",
    "word": "cup",
    "phonetic": "kʌp",
    "translation": "杯子",
    "translations": [
      "杯子",
      "奖杯"
    ]
  },
  {
    "id": "word_0343",
    "word": "curious",
    "phonetic": "'kjʊəriəs",
    "translation": "好奇的",
    "translations": [
      "好奇的",
      "求知欲强的"
    ]
  },
  {
    "id": "word_0344",
    "word": "customer",
    "phonetic": "'kʌstəmə(r)",
    "translation": "顾客",
    "translations": [
      "顾客"
    ]
  },
  {
    "id": "word_0345",
    "word": "cut",
    "phonetic": "kʌt",
    "translation": "切",
    "translations": [
      "切",
      "修剪",
      "割",
      "．伤口"
    ]
  },
  {
    "id": "word_0346",
    "word": "cute",
    "phonetic": "kjuːt",
    "translation": "可爱的",
    "translations": [
      "可爱的"
    ]
  },
  {
    "id": "word_0347",
    "word": "daily",
    "phonetic": "'deɪli",
    "translation": "每日的",
    "translations": [
      "每日的"
    ]
  },
  {
    "id": "word_0348",
    "word": "dance",
    "phonetic": "dɑːns",
    "translation": "舞蹈 v．跳舞",
    "translations": [
      "舞蹈 v．跳舞"
    ]
  },
  {
    "id": "word_0349",
    "word": "danger",
    "phonetic": "'deɪndʒə(r)",
    "translation": "危险",
    "translations": [
      "危险"
    ]
  },
  {
    "id": "word_0350",
    "word": "dangerous",
    "phonetic": "'deɪndʒərəs",
    "translation": "危险的",
    "translations": [
      "危险的",
      "不安全的"
    ]
  },
  {
    "id": "word_0351",
    "word": "dark",
    "phonetic": "dɑːk",
    "translation": "．黑暗",
    "translations": [
      "．黑暗",
      "暗色的"
    ]
  },
  {
    "id": "word_0352",
    "word": "date",
    "phonetic": "deɪt",
    "translation": "日期",
    "translations": [
      "日期",
      "约会",
      "注明日期",
      "与……约会"
    ]
  },
  {
    "id": "word_0353",
    "word": "daughter",
    "phonetic": "'dɔːtə(r)",
    "translation": "女儿",
    "translations": [
      "女儿"
    ]
  },
  {
    "id": "word_0354",
    "word": "day",
    "phonetic": "deɪ",
    "translation": "一天",
    "translations": [
      "一天",
      "一日",
      "白天"
    ]
  },
  {
    "id": "word_0355",
    "word": "dead",
    "phonetic": "ded",
    "translation": "死的",
    "translations": [
      "死的",
      "失去生命的"
    ]
  },
  {
    "id": "word_0356",
    "word": "deaf",
    "phonetic": "def",
    "translation": "聋的",
    "translations": [
      "聋的"
    ]
  },
  {
    "id": "word_0357",
    "word": "deal",
    "phonetic": "diːl",
    "translation": "协议",
    "translations": [
      "协议",
      "交易",
      "对待",
      "对付"
    ]
  },
  {
    "id": "word_0358",
    "word": "dear",
    "phonetic": "dɪə(r)",
    "translation": "亲爱的",
    "translations": [
      "亲爱的",
      "昂贵的"
    ]
  },
  {
    "id": "word_0359",
    "word": "death",
    "phonetic": "deθ",
    "translation": "死",
    "translations": [
      "死",
      "死亡"
    ]
  },
  {
    "id": "word_0360",
    "word": "decide",
    "phonetic": "dɪ'saɪd",
    "translation": "决定",
    "translations": [
      "决定",
      "选定"
    ]
  },
  {
    "id": "word_0361",
    "word": "deep",
    "phonetic": "diːp",
    "translation": "深的",
    "translations": [
      "深的",
      "厚的",
      "深深地",
      "在深处"
    ]
  },
  {
    "id": "word_0362",
    "word": "degree",
    "phonetic": "dɪ'ɡriː",
    "translation": "程度",
    "translations": [
      "程度",
      "度数"
    ]
  },
  {
    "id": "word_0363",
    "word": "delicious",
    "phonetic": "dɪ'lɪʃəs",
    "translation": "美味的",
    "translations": [
      "美味的",
      "可口的"
    ]
  },
  {
    "id": "word_0364",
    "word": "dentist",
    "phonetic": "'dentɪst",
    "translation": "牙科医生",
    "translations": [
      "牙科医生"
    ]
  },
  {
    "id": "word_0365",
    "word": "depend",
    "phonetic": "dɪ'pend",
    "translation": "决定于",
    "translations": [
      "决定于",
      "依靠",
      "信赖"
    ]
  },
  {
    "id": "word_0366",
    "word": "describe",
    "phonetic": "dɪ'skraɪb",
    "translation": "描述",
    "translations": [
      "描述",
      "形容"
    ]
  },
  {
    "id": "word_0367",
    "word": "desert",
    "phonetic": "'dezət",
    "translation": "沙漠",
    "translations": [
      "沙漠"
    ]
  },
  {
    "id": "word_0368",
    "word": "design",
    "phonetic": "dɪ'zaɪn",
    "translation": "设计",
    "translations": [
      "设计",
      "布局",
      "安排",
      "．设计，构思",
      "筹划"
    ]
  },
  {
    "id": "word_0369",
    "word": "desk",
    "phonetic": "desk",
    "translation": "书桌",
    "translations": [
      "书桌",
      "写字台"
    ]
  },
  {
    "id": "word_0370",
    "word": "develop",
    "phonetic": "dɪ'veləp",
    "translation": "发展",
    "translations": [
      "发展",
      "开发",
      "加强"
    ]
  },
  {
    "id": "word_0371",
    "word": "dialogue",
    "phonetic": "'daɪəlɒɡ",
    "translation": "对话",
    "translations": [
      "对话"
    ]
  },
  {
    "id": "word_0372",
    "word": "diary",
    "phonetic": "'daɪəri",
    "translation": "日记",
    "translations": [
      "日记",
      "日记簿"
    ]
  },
  {
    "id": "word_0373",
    "word": "dictionary",
    "phonetic": "'dɪkʃənri",
    "translation": "词典",
    "translations": [
      "词典",
      "字典"
    ]
  },
  {
    "id": "word_0374",
    "word": "die",
    "phonetic": "daɪ",
    "translation": "死",
    "translations": [
      "死",
      "死亡",
      "消失"
    ]
  },
  {
    "id": "word_0375",
    "word": "diet",
    "phonetic": "'daɪət",
    "translation": "日常饮食",
    "translations": [
      "日常饮食"
    ]
  },
  {
    "id": "word_0376",
    "word": "difference",
    "phonetic": "'dɪfrəns",
    "translation": "差别",
    "translations": [
      "差别",
      "差异",
      "分歧"
    ]
  },
  {
    "id": "word_0377",
    "word": "different",
    "phonetic": "'dɪfrənt",
    "translation": "不同的",
    "translations": [
      "不同的",
      "有差异的"
    ]
  },
  {
    "id": "word_0378",
    "word": "difficult",
    "phonetic": "'dɪfɪkəlt",
    "translation": "困难的",
    "translations": [
      "困难的",
      "费力的"
    ]
  },
  {
    "id": "word_0379",
    "word": "dig",
    "phonetic": "dɪɡ",
    "translation": "挖",
    "translations": [
      "挖",
      "掘"
    ]
  },
  {
    "id": "word_0380",
    "word": "digital",
    "phonetic": "'dɪdʒɪt(ə)l",
    "translation": "数字的，数码的",
    "translations": [
      "数字的，数码的",
      "数字的"
    ]
  },
  {
    "id": "word_0381",
    "word": "dining",
    "phonetic": "'daɪnɪ ",
    "translation": "用餐",
    "translations": [
      "用餐"
    ]
  },
  {
    "id": "word_0382",
    "word": "dinner",
    "phonetic": "'dɪnə(r)",
    "translation": "正餐",
    "translations": [
      "正餐",
      "宴会"
    ]
  },
  {
    "id": "word_0383",
    "word": "direct",
    "phonetic": "də'rekt",
    "translation": "直接的 adv.径直地",
    "translations": [
      "直接的 adv.径直地"
    ]
  },
  {
    "id": "word_0384",
    "word": "director",
    "phonetic": "də'rektə(r)",
    "translation": "主任",
    "translations": [
      "主任",
      "导演",
      "董事"
    ]
  },
  {
    "id": "word_0385",
    "word": "dirty",
    "phonetic": "'dɜːti",
    "translation": "肮脏的",
    "translations": [
      "肮脏的"
    ]
  },
  {
    "id": "word_0386",
    "word": "disappoint",
    "phonetic": "ˌdɪsə'pɔɪnt",
    "translation": "使失望",
    "translations": [
      "使失望"
    ]
  },
  {
    "id": "word_0387",
    "word": "disaster",
    "phonetic": "dɪ'zɑːstə(r)",
    "translation": "灾难，灾害",
    "translations": [
      "灾难，灾害"
    ]
  },
  {
    "id": "word_0388",
    "word": "discover",
    "phonetic": "dɪ'skʌvə(r)",
    "translation": "发现",
    "translations": [
      "发现"
    ]
  },
  {
    "id": "word_0389",
    "word": "discuss",
    "phonetic": "dɪ'skʌs",
    "translation": "讨论",
    "translations": [
      "讨论",
      "商量"
    ]
  },
  {
    "id": "word_0390",
    "word": "disease",
    "phonetic": "dɪ'ziːz",
    "translation": "疾病，病害",
    "translations": [
      "疾病，病害",
      "疾病"
    ]
  },
  {
    "id": "word_0391",
    "word": "dish",
    "phonetic": "dɪʃ",
    "translation": "盘",
    "translations": [
      "盘",
      "碟",
      "菜肴"
    ]
  },
  {
    "id": "word_0392",
    "word": "divide",
    "phonetic": "dɪ'vaɪd",
    "translation": "分开",
    "translations": [
      "分开",
      "分成……"
    ]
  },
  {
    "id": "word_0393",
    "word": "do",
    "phonetic": "duː",
    "translation": "．做",
    "translations": [
      "．做",
      "干",
      "用以"
    ]
  },
  {
    "id": "word_0394",
    "word": "doctor",
    "phonetic": "'dɒktə(r)",
    "translation": "医生",
    "translations": [
      "医生",
      "大夫",
      "博士"
    ]
  },
  {
    "id": "word_0395",
    "word": "dog",
    "phonetic": "dɒɡ",
    "translation": "狗",
    "translations": [
      "狗"
    ]
  },
  {
    "id": "word_0396",
    "word": "doll",
    "phonetic": "dəl",
    "translation": "洋娃娃",
    "translations": [
      "洋娃娃",
      "玩偶"
    ]
  },
  {
    "id": "word_0397",
    "word": "dollar",
    "phonetic": "'dɒlə(r)",
    "translation": "美元",
    "translations": [
      "美元"
    ]
  },
  {
    "id": "word_0398",
    "word": "donate",
    "phonetic": "dəʊ'neɪt",
    "translation": "捐赠，赠送",
    "translations": [
      "捐赠，赠送",
      "捐赠",
      "捐献"
    ]
  },
  {
    "id": "word_0399",
    "word": "door",
    "phonetic": "dɔː(r)",
    "translation": "门",
    "translations": [
      "门"
    ]
  },
  {
    "id": "word_0400",
    "word": "double",
    "phonetic": "'dʌbl",
    "translation": "两倍的",
    "translations": [
      "两倍的"
    ]
  },
  {
    "id": "word_0401",
    "word": "doubt",
    "phonetic": "daʊt",
    "translation": "．怀疑",
    "translations": [
      "．怀疑",
      "怀疑",
      "疑问"
    ]
  },
  {
    "id": "word_0402",
    "word": "down",
    "phonetic": "daʊn",
    "translation": "沿着",
    "translations": [
      "沿着",
      "下降",
      "沮丧的"
    ]
  },
  {
    "id": "word_0403",
    "word": "download",
    "phonetic": "ˌdaʊn'ləʊd",
    "translation": "下载 n．下载，下载",
    "translations": [
      "下载 n．下载，下载"
    ]
  },
  {
    "id": "word_0404",
    "word": "dragon",
    "phonetic": "'dræɡən",
    "translation": "龙",
    "translations": [
      "龙"
    ]
  },
  {
    "id": "word_0405",
    "word": "drama",
    "phonetic": "'drɑːmə",
    "translation": "戏剧",
    "translations": [
      "戏剧",
      "话剧"
    ]
  },
  {
    "id": "word_0406",
    "word": "draw",
    "phonetic": "drɔː",
    "translation": "绘画",
    "translations": [
      "绘画",
      "吸引 n．抽签"
    ]
  },
  {
    "id": "word_0407",
    "word": "dream",
    "phonetic": "driːm",
    "translation": "梦想",
    "translations": [
      "梦想",
      "梦 v．做梦",
      "梦"
    ]
  },
  {
    "id": "word_0408",
    "word": "dress",
    "phonetic": "dres",
    "translation": "衣服",
    "translations": [
      "衣服",
      "连衣裙 v．穿衣"
    ]
  },
  {
    "id": "word_0409",
    "word": "drink",
    "phonetic": "",
    "translation": "喝",
    "translations": [
      "喝",
      "饮 n．饮料"
    ]
  },
  {
    "id": "word_0410",
    "word": "drive",
    "phonetic": "draɪv",
    "translation": "驾驶",
    "translations": [
      "驾驶",
      "开车",
      "迫使"
    ]
  },
  {
    "id": "word_0411",
    "word": "driver",
    "phonetic": "'draɪvə(r)",
    "translation": "司机",
    "translations": [
      "司机",
      "驾驶员"
    ]
  },
  {
    "id": "word_0412",
    "word": "drop",
    "phonetic": "drɒp",
    "translation": "滴",
    "translations": [
      "滴",
      "水珠",
      "掉下",
      "落下",
      "遗漏",
      "降低"
    ]
  },
  {
    "id": "word_0413",
    "word": "dry",
    "phonetic": "draɪ",
    "translation": "擦干",
    "translations": [
      "擦干",
      "干的",
      "干燥的"
    ]
  },
  {
    "id": "word_0414",
    "word": "duck",
    "phonetic": "dʌk",
    "translation": "鸭",
    "translations": [
      "鸭"
    ]
  },
  {
    "id": "word_0415",
    "word": "dumpling",
    "phonetic": "",
    "translation": "饺子",
    "translations": [
      "饺子",
      "汤团"
    ]
  },
  {
    "id": "word_0416",
    "word": "during",
    "phonetic": "",
    "translation": "在……期间",
    "translations": [
      "在……期间"
    ]
  },
  {
    "id": "word_0417",
    "word": "duty",
    "phonetic": "'djuːti",
    "translation": "责任",
    "translations": [
      "责任",
      "义务"
    ]
  },
  {
    "id": "word_0418",
    "word": "each",
    "phonetic": "iːtʃ",
    "translation": "各个",
    "translations": [
      "各个",
      "各"
    ]
  },
  {
    "id": "word_0419",
    "word": "eagle",
    "phonetic": "'iːɡ(ə)l",
    "translation": "鹰",
    "translations": [
      "鹰",
      "雕"
    ]
  },
  {
    "id": "word_0420",
    "word": "ear",
    "phonetic": "ɪə(r)",
    "translation": "耳朵",
    "translations": [
      "耳朵",
      "灵敏的听力"
    ]
  },
  {
    "id": "word_0421",
    "word": "early",
    "phonetic": "'ɜːli",
    "translation": "早的",
    "translations": [
      "早的"
    ]
  },
  {
    "id": "word_0422",
    "word": "earth",
    "phonetic": "ɜːθ",
    "translation": "世界",
    "translations": [
      "世界",
      "地球",
      "陆地"
    ]
  },
  {
    "id": "word_0423",
    "word": "earthquake",
    "phonetic": "'ɜːθkweɪk",
    "translation": "地震",
    "translations": [
      "地震"
    ]
  },
  {
    "id": "word_0424",
    "word": "east",
    "phonetic": "iːst",
    "translation": "东方的",
    "translations": [
      "东方的",
      "朝东",
      "东",
      "东方",
      "东部"
    ]
  },
  {
    "id": "word_0425",
    "word": "easy",
    "phonetic": "'iːzi",
    "translation": "容易的",
    "translations": [
      "容易的",
      "不费"
    ]
  },
  {
    "id": "word_0426",
    "word": "eat",
    "phonetic": "iːt",
    "translation": "吃",
    "translations": [
      "吃"
    ]
  },
  {
    "id": "word_0427",
    "word": "education",
    "phonetic": "ˌedʒu'keɪʃn",
    "translation": "教育",
    "translations": [
      "教育",
      "培养"
    ]
  },
  {
    "id": "word_0428",
    "word": "effect",
    "phonetic": "ɪ'fekt",
    "translation": "作用",
    "translations": [
      "作用",
      "影响",
      "实现",
      "引起"
    ]
  },
  {
    "id": "word_0429",
    "word": "effort",
    "phonetic": "'efət",
    "translation": "努力",
    "translations": [
      "努力",
      "尽力"
    ]
  },
  {
    "id": "word_0430",
    "word": "egg",
    "phonetic": "eɡ",
    "translation": "蛋",
    "translations": [
      "蛋",
      "卵"
    ]
  },
  {
    "id": "word_0431",
    "word": "either",
    "phonetic": "'aɪðə(r)",
    "translation": "也",
    "translations": [
      "也"
    ]
  },
  {
    "id": "word_0432",
    "word": "elder",
    "phonetic": "'eldə(r)",
    "translation": "长者",
    "translations": [
      "长者",
      "长老",
      "年纪较长的"
    ]
  },
  {
    "id": "word_0433",
    "word": "electric",
    "phonetic": "ɪ'lektrɪk",
    "translation": "电的",
    "translations": [
      "电的"
    ]
  },
  {
    "id": "word_0434",
    "word": "electronic",
    "phonetic": "ɪˌlek'trɒnɪk",
    "translation": "电子的",
    "translations": [
      "电子的",
      "电子设备的",
      "电子设备"
    ]
  },
  {
    "id": "word_0435",
    "word": "elephant",
    "phonetic": "'elɪfənt",
    "translation": "象",
    "translations": [
      "象"
    ]
  },
  {
    "id": "word_0436",
    "word": "else",
    "phonetic": "els",
    "translation": "别的",
    "translations": [
      "别的",
      "其他的"
    ]
  },
  {
    "id": "word_0437",
    "word": "email",
    "phonetic": "'iːmeɪl",
    "translation": "电子邮件",
    "translations": [
      "电子邮件",
      "发电子邮件"
    ]
  },
  {
    "id": "word_0438",
    "word": "emergency",
    "phonetic": "ɪ'mɜːdʒənsi",
    "translation": "突发事件，紧急情况",
    "translations": [
      "突发事件，紧急情况"
    ]
  },
  {
    "id": "word_0439",
    "word": "emperor",
    "phonetic": "'empərə",
    "translation": "皇帝",
    "translations": [
      "皇帝"
    ]
  },
  {
    "id": "word_0440",
    "word": "empty",
    "phonetic": "'empti",
    "translation": "空的",
    "translations": [
      "空的"
    ]
  },
  {
    "id": "word_0441",
    "word": "encourage",
    "phonetic": "ɪn'kʌrɪdʒ",
    "translation": "鼓励",
    "translations": [
      "鼓励"
    ]
  },
  {
    "id": "word_0442",
    "word": "end",
    "phonetic": "end",
    "translation": "结尾",
    "translations": [
      "结尾",
      "终止",
      "结束"
    ]
  },
  {
    "id": "word_0443",
    "word": "enemy",
    "phonetic": "'enəmi",
    "translation": "敌人",
    "translations": [
      "敌人",
      "仇人"
    ]
  },
  {
    "id": "word_0444",
    "word": "energetic",
    "phonetic": "ˌenə'dʒetɪk",
    "translation": "精力充沛的，充满活",
    "translations": [
      "精力充沛的，充满活",
      "精力充沛的"
    ]
  },
  {
    "id": "word_0445",
    "word": "energy",
    "phonetic": "'enədʒi",
    "translation": "力量",
    "translations": [
      "力量",
      "精力",
      "能源",
      "能"
    ]
  },
  {
    "id": "word_0446",
    "word": "engineer",
    "phonetic": "ˌendʒɪ'nɪə(r)",
    "translation": "工程师",
    "translations": [
      "工程师",
      "技师"
    ]
  },
  {
    "id": "word_0447",
    "word": "enjoy",
    "phonetic": "ɪn'dʒɔɪ",
    "translation": "欣赏",
    "translations": [
      "欣赏",
      "享受……的乐趣",
      "喜欢"
    ]
  },
  {
    "id": "word_0448",
    "word": "enough",
    "phonetic": "ɪ'nʌf",
    "translation": "足够的",
    "translations": [
      "足够的"
    ]
  },
  {
    "id": "word_0449",
    "word": "enter",
    "phonetic": "'entə(r)",
    "translation": "进入",
    "translations": [
      "进入"
    ]
  },
  {
    "id": "word_0450",
    "word": "environment",
    "phonetic": "ɪn'vaɪrənmənt",
    "translation": "环境",
    "translations": [
      "环境"
    ]
  },
  {
    "id": "word_0451",
    "word": "era",
    "phonetic": "'ɪərə",
    "translation": "时代",
    "translations": [
      "时代",
      "年代",
      "纪元"
    ]
  },
  {
    "id": "word_0452",
    "word": "eraser",
    "phonetic": "ɪ'reɪzə(r)",
    "translation": "橡皮",
    "translations": [
      "橡皮",
      "黑板擦",
      "橡皮擦"
    ]
  },
  {
    "id": "word_0453",
    "word": "especially",
    "phonetic": "ɪ'speʃəli",
    "translation": "特别",
    "translations": [
      "特别",
      "尤其"
    ]
  },
  {
    "id": "word_0454",
    "word": "even",
    "phonetic": "'iːvn",
    "translation": "甚至",
    "translations": [
      "甚至",
      "即使"
    ]
  },
  {
    "id": "word_0455",
    "word": "evening",
    "phonetic": "'iːvnɪ ",
    "translation": "傍晚",
    "translations": [
      "傍晚",
      "晚上"
    ]
  },
  {
    "id": "word_0456",
    "word": "event",
    "phonetic": "ɪ'vent",
    "translation": "大事",
    "translations": [
      "大事",
      "公开活动",
      "比"
    ]
  },
  {
    "id": "word_0457",
    "word": "ever",
    "phonetic": "'evə(r)",
    "translation": "曾经",
    "translations": [
      "曾经"
    ]
  },
  {
    "id": "word_0458",
    "word": "every",
    "phonetic": "'evri",
    "translation": "每一",
    "translations": [
      "每一",
      "每个"
    ]
  },
  {
    "id": "word_0459",
    "word": "everybody",
    "phonetic": "'evribɒdi",
    "translation": "每人",
    "translations": [
      "每人",
      "人人"
    ]
  },
  {
    "id": "word_0460",
    "word": "everyday",
    "phonetic": "'evrideɪ",
    "translation": "每日的",
    "translations": [
      "每日的",
      "日常的"
    ]
  },
  {
    "id": "word_0461",
    "word": "everyone",
    "phonetic": "'evriwʌn",
    "translation": "每人",
    "translations": [
      "每人",
      "人人"
    ]
  },
  {
    "id": "word_0462",
    "word": "everything",
    "phonetic": "'evriθɪ ",
    "translation": "每件事",
    "translations": [
      "每件事",
      "一切"
    ]
  },
  {
    "id": "word_0463",
    "word": "everywhere",
    "phonetic": "'evriweə(r)",
    "translation": "到处",
    "translations": [
      "到处",
      "处处"
    ]
  },
  {
    "id": "word_0464",
    "word": "exactly",
    "phonetic": "ɪɡ'zæktli",
    "translation": "确切地",
    "translations": [
      "确切地",
      "精确地"
    ]
  },
  {
    "id": "word_0465",
    "word": "exam",
    "phonetic": "ɪɡ'zæm",
    "translation": "考试",
    "translations": [
      "考试",
      "检查",
      "体检"
    ]
  },
  {
    "id": "word_0466",
    "word": "example",
    "phonetic": "ɪɡ'zɑːmpl",
    "translation": "例子",
    "translations": [
      "例子",
      "榜样"
    ]
  },
  {
    "id": "word_0467",
    "word": "excellent",
    "phonetic": "'eksələnt",
    "translation": "极好的",
    "translations": [
      "极好的",
      "优秀的"
    ]
  },
  {
    "id": "word_0468",
    "word": "except",
    "phonetic": "ɪk'sept",
    "translation": "除……之外",
    "translations": [
      "除……之外",
      "不包括",
      "除了",
      "只是",
      "除……以外"
    ]
  },
  {
    "id": "word_0469",
    "word": "excited",
    "phonetic": " ɪk'saɪtɪd",
    "translation": "激动的",
    "translations": [
      "激动的",
      "兴奋的"
    ]
  },
  {
    "id": "word_0470",
    "word": "exciting",
    "phonetic": "ɪk'saɪtɪ ",
    "translation": "使人兴奋的",
    "translations": [
      "使人兴奋的",
      "令人激"
    ]
  },
  {
    "id": "word_0471",
    "word": "excuse",
    "phonetic": "ɪk'skjuːs",
    "translation": "原谅",
    "translations": [
      "原谅",
      "宽恕",
      "借口",
      "辩解"
    ]
  },
  {
    "id": "word_0472",
    "word": "exercise",
    "phonetic": "'eksəsaɪz",
    "translation": "锻炼",
    "translations": [
      "锻炼",
      "做操",
      "习题"
    ]
  },
  {
    "id": "word_0473",
    "word": "expect",
    "phonetic": "ɪk'spekt",
    "translation": "预料",
    "translations": [
      "预料",
      "盼望"
    ]
  },
  {
    "id": "word_0474",
    "word": "expensive",
    "phonetic": "ɪk'spensɪv",
    "translation": "昂贵的",
    "translations": [
      "昂贵的"
    ]
  },
  {
    "id": "word_0475",
    "word": "experience",
    "phonetic": "ɪk'spɪəriəns",
    "translation": "经验",
    "translations": [
      "经验",
      "经历"
    ]
  },
  {
    "id": "word_0476",
    "word": "expert",
    "phonetic": "'ekspɜːt",
    "translation": "专家",
    "translations": [
      "专家",
      "专家的",
      "熟练的"
    ]
  },
  {
    "id": "word_0477",
    "word": "explain",
    "phonetic": "ɪk'spleɪn",
    "translation": "解释",
    "translations": [
      "解释",
      "说明"
    ]
  },
  {
    "id": "word_0478",
    "word": "explore",
    "phonetic": "ɪk'splɔː(r)",
    "translation": "探讨，探究",
    "translations": [
      "探讨，探究",
      "考察，"
    ]
  },
  {
    "id": "word_0479",
    "word": "express",
    "phonetic": "ɪk'spres",
    "translation": "表达",
    "translations": [
      "表达",
      "表示 n．特快列车",
      "快递服务",
      "特快的",
      "快递的"
    ]
  },
  {
    "id": "word_0480",
    "word": "eye",
    "phonetic": "aɪ",
    "translation": "眼睛",
    "translations": [
      "眼睛"
    ]
  },
  {
    "id": "word_0481",
    "word": "face",
    "phonetic": "feɪs",
    "translation": "脸 v．面向",
    "translations": [
      "脸 v．面向",
      "面对"
    ]
  },
  {
    "id": "word_0482",
    "word": "fact",
    "phonetic": "fækt",
    "translation": "事实",
    "translations": [
      "事实",
      "现实"
    ]
  },
  {
    "id": "word_0483",
    "word": "factory",
    "phonetic": "'fæktri",
    "translation": "工厂",
    "translations": [
      "工厂"
    ]
  },
  {
    "id": "word_0484",
    "word": "fail",
    "phonetic": "feɪl",
    "translation": "失败",
    "translations": [
      "失败",
      "不及格",
      "未做"
    ]
  },
  {
    "id": "word_0485",
    "word": "fair",
    "phonetic": "feə(r)",
    "translation": "公正的",
    "translations": [
      "公正的",
      "合理的",
      "白"
    ]
  },
  {
    "id": "word_0486",
    "word": "fall",
    "phonetic": "fɔːl",
    "translation": "落下",
    "translations": [
      "落下",
      "掉落",
      "下降",
      "进入",
      "减少"
    ]
  },
  {
    "id": "word_0487",
    "word": "false",
    "phonetic": "fɔːls",
    "translation": "错误的，不真实的",
    "translations": [
      "错误的，不真实的",
      "不正确的"
    ]
  },
  {
    "id": "word_0488",
    "word": "familiar",
    "phonetic": "fə'mɪliə(r)",
    "translation": "熟悉的",
    "translations": [
      "熟悉的"
    ]
  },
  {
    "id": "word_0489",
    "word": "family",
    "phonetic": "'fæməli",
    "translation": "家庭",
    "translations": [
      "家庭"
    ]
  },
  {
    "id": "word_0490",
    "word": "famous",
    "phonetic": "'feɪməs",
    "translation": "著名的",
    "translations": [
      "著名的"
    ]
  },
  {
    "id": "word_0491",
    "word": "fan",
    "phonetic": "fæn",
    "translation": "风扇",
    "translations": [
      "风扇",
      "迷"
    ]
  },
  {
    "id": "word_0492",
    "word": "fantastic",
    "phonetic": "fæn'tæstɪk",
    "translation": "极好的",
    "translations": [
      "极好的",
      "了不起的",
      "异想天开的"
    ]
  },
  {
    "id": "word_0493",
    "word": "far",
    "phonetic": "fɑː(r)",
    "translation": "远的",
    "translations": [
      "远的",
      "遥远的"
    ]
  },
  {
    "id": "word_0494",
    "word": "farm",
    "phonetic": "fɑːm",
    "translation": "农场 v．务农",
    "translations": [
      "农场 v．务农"
    ]
  },
  {
    "id": "word_0495",
    "word": "farmer",
    "phonetic": "'fɑːmə(r)",
    "translation": "农民",
    "translations": [
      "农民"
    ]
  },
  {
    "id": "word_0496",
    "word": "fashion",
    "phonetic": "'fæʃ(ə)n",
    "translation": "时髦打扮",
    "translations": [
      "时髦打扮",
      "时尚"
    ]
  },
  {
    "id": "word_0497",
    "word": "fast",
    "phonetic": "fɑːst",
    "translation": "快的",
    "translations": [
      "快的"
    ]
  },
  {
    "id": "word_0498",
    "word": "fat",
    "phonetic": "fæt",
    "translation": "肥的",
    "translations": [
      "肥的"
    ]
  },
  {
    "id": "word_0499",
    "word": "father",
    "phonetic": "'fɑːðə(r)",
    "translation": "父亲",
    "translations": [
      "父亲",
      "爸爸"
    ]
  },
  {
    "id": "word_0500",
    "word": "favourite",
    "phonetic": "'feɪvərɪt",
    "translation": "特别喜爱的 n.特别喜",
    "translations": [
      "特别喜爱的 n.特别喜"
    ]
  },
  {
    "id": "word_0501",
    "word": "fear",
    "phonetic": "fɪə(r)",
    "translation": "．害怕",
    "translations": [
      "．害怕",
      "恐惧",
      "担忧"
    ]
  },
  {
    "id": "word_0502",
    "word": "feed",
    "phonetic": "fiːd",
    "translation": "喂养",
    "translations": [
      "喂养",
      "饲养"
    ]
  },
  {
    "id": "word_0503",
    "word": "feel",
    "phonetic": "fiːl",
    "translation": "感到",
    "translations": [
      "感到",
      "觉得",
      "意识到"
    ]
  },
  {
    "id": "word_0504",
    "word": "feeling",
    "phonetic": "'fiːlɪ ",
    "translation": "感觉",
    "translations": [
      "感觉",
      "看法",
      "意见",
      "感"
    ]
  },
  {
    "id": "word_0505",
    "word": "festival",
    "phonetic": "'festɪvl",
    "translation": "节日",
    "translations": [
      "节日"
    ]
  },
  {
    "id": "word_0506",
    "word": "fever",
    "phonetic": "'fiːvə(r)",
    "translation": "发烧",
    "translations": [
      "发烧",
      "发热"
    ]
  },
  {
    "id": "word_0507",
    "word": "few",
    "phonetic": "fjuː",
    "translation": "很少人",
    "translations": [
      "很少人",
      "不多",
      "很少"
    ]
  },
  {
    "id": "word_0508",
    "word": "field",
    "phonetic": "fiːld",
    "translation": "田野",
    "translations": [
      "田野",
      "场地",
      "领域"
    ]
  },
  {
    "id": "word_0509",
    "word": "fight",
    "phonetic": "faɪt",
    "translation": "．打架",
    "translations": [
      "．打架",
      "斗争"
    ]
  },
  {
    "id": "word_0510",
    "word": "fill",
    "phonetic": "fɪl",
    "translation": "填满",
    "translations": [
      "填满",
      "装满"
    ]
  },
  {
    "id": "word_0511",
    "word": "film",
    "phonetic": "fɪlm",
    "translation": "电影",
    "translations": [
      "电影",
      "胶片 v．拍摄"
    ]
  },
  {
    "id": "word_0512",
    "word": "final",
    "phonetic": "'faɪn(ə)l",
    "translation": "最后的",
    "translations": [
      "最后的",
      "最终的"
    ]
  },
  {
    "id": "word_0513",
    "word": "find",
    "phonetic": "faɪnd",
    "translation": "找到",
    "translations": [
      "找到",
      "发现",
      "感到"
    ]
  },
  {
    "id": "word_0514",
    "word": "fine",
    "phonetic": "faɪn",
    "translation": "晴朗的",
    "translations": [
      "晴朗的",
      "美好的",
      "好看的 v． 罚款"
    ]
  },
  {
    "id": "word_0515",
    "word": "finger",
    "phonetic": "'fɪ ɡə(r)",
    "translation": "手指",
    "translations": [
      "手指"
    ]
  },
  {
    "id": "word_0516",
    "word": "finish",
    "phonetic": "'fɪnɪʃ",
    "translation": "结束",
    "translations": [
      "结束",
      "完成"
    ]
  },
  {
    "id": "word_0517",
    "word": "fire",
    "phonetic": "'faɪə(r)",
    "translation": "火",
    "translations": [
      "火",
      "开"
    ]
  },
  {
    "id": "word_0518",
    "word": "fireman",
    "phonetic": "'faɪəmən",
    "translation": "消防员",
    "translations": [
      "消防员"
    ]
  },
  {
    "id": "word_0519",
    "word": "firework",
    "phonetic": "'faɪəwɜːk",
    "translation": "烟火，烟花",
    "translations": [
      "烟火，烟花"
    ]
  },
  {
    "id": "word_0520",
    "word": "fish",
    "phonetic": "fɪʃ",
    "translation": "鱼",
    "translations": [
      "鱼",
      "鱼肉 v．钓鱼"
    ]
  },
  {
    "id": "word_0521",
    "word": "fit",
    "phonetic": "fɪt",
    "translation": "健康的",
    "translations": [
      "健康的",
      "适合的",
      "适合，合身"
    ]
  },
  {
    "id": "word_0522",
    "word": "fix",
    "phonetic": "fɪks",
    "translation": "修理",
    "translations": [
      "修理",
      "安装",
      "确定"
    ]
  },
  {
    "id": "word_0523",
    "word": "flag",
    "phonetic": "flæɡ",
    "translation": "旗",
    "translations": [
      "旗",
      "旗帜"
    ]
  },
  {
    "id": "word_0524",
    "word": "flat",
    "phonetic": "flæt",
    "translation": "单调的，乏味的",
    "translations": [
      "单调的，乏味的"
    ]
  },
  {
    "id": "word_0525",
    "word": "flood",
    "phonetic": "flʌd",
    "translation": "泛滥",
    "translations": [
      "泛滥",
      "涌入",
      "．洪水，水灾"
    ]
  },
  {
    "id": "word_0526",
    "word": "floor",
    "phonetic": "flɔː(r)",
    "translation": "地板",
    "translations": [
      "地板",
      "楼层"
    ]
  },
  {
    "id": "word_0527",
    "word": "flower",
    "phonetic": "'flaʊə(r)",
    "translation": "花",
    "translations": [
      "花",
      "花朵"
    ]
  },
  {
    "id": "word_0528",
    "word": "flu",
    "phonetic": "fluː",
    "translation": "流行性感冒",
    "translations": [
      "流行性感冒",
      "流感"
    ]
  },
  {
    "id": "word_0529",
    "word": "fly",
    "phonetic": "flaɪ",
    "translation": "苍蝇 v.飞",
    "translations": [
      "苍蝇 v.飞"
    ]
  },
  {
    "id": "word_0530",
    "word": "focus",
    "phonetic": "'fəʊkəs",
    "translation": "重点",
    "translations": [
      "重点",
      "中心点",
      "集中",
      "关注"
    ]
  },
  {
    "id": "word_0531",
    "word": "fog",
    "phonetic": "fɒɡ",
    "translation": "雾",
    "translations": [
      "雾",
      "烟雾"
    ]
  },
  {
    "id": "word_0532",
    "word": "folk",
    "phonetic": "fəʊk",
    "translation": "民间的",
    "translations": [
      "民间的",
      "民俗的",
      "人们"
    ]
  },
  {
    "id": "word_0533",
    "word": "follow",
    "phonetic": "'fɒləʊ",
    "translation": "跟随",
    "translations": [
      "跟随",
      "仿效",
      "遵循"
    ]
  },
  {
    "id": "word_0534",
    "word": "food",
    "phonetic": "fuːd",
    "translation": "食物",
    "translations": [
      "食物"
    ]
  },
  {
    "id": "word_0535",
    "word": "fool",
    "phonetic": "fuːl",
    "translation": "傻瓜",
    "translations": [
      "傻瓜",
      "笨蛋",
      "开玩笑",
      "戏谑"
    ]
  },
  {
    "id": "word_0536",
    "word": "foot",
    "phonetic": "fʊt",
    "translation": "足，脚",
    "translations": [
      "足，脚",
      "英尺"
    ]
  },
  {
    "id": "word_0537",
    "word": "football",
    "phonetic": "'fʊtbɔːl",
    "translation": "足球",
    "translations": [
      "足球"
    ]
  },
  {
    "id": "word_0538",
    "word": "for",
    "phonetic": "fɔː(r)",
    "translation": "对",
    "translations": [
      "对",
      "供",
      "关于",
      "为了",
      "因为",
      "由于"
    ]
  },
  {
    "id": "word_0539",
    "word": "force",
    "phonetic": "fɔːs",
    "translation": "强迫",
    "translations": [
      "强迫",
      "迫使",
      "．力量",
      "武力",
      "力量"
    ]
  },
  {
    "id": "word_0540",
    "word": "foreign",
    "phonetic": "'fɒrən",
    "translation": "外国的",
    "translations": [
      "外国的"
    ]
  },
  {
    "id": "word_0541",
    "word": "forest",
    "phonetic": "'fɒrɪst",
    "translation": "森林",
    "translations": [
      "森林"
    ]
  },
  {
    "id": "word_0542",
    "word": "forever",
    "phonetic": "fər'evə",
    "translation": "永远",
    "translations": [
      "永远"
    ]
  },
  {
    "id": "word_0543",
    "word": "forget",
    "phonetic": "fə'ɡet",
    "translation": "忘记",
    "translations": [
      "忘记",
      "遗忘"
    ]
  },
  {
    "id": "word_0544",
    "word": "fork",
    "phonetic": "fɔːk",
    "translation": "叉",
    "translations": [
      "叉",
      "餐叉"
    ]
  },
  {
    "id": "word_0545",
    "word": "form",
    "phonetic": "fɔːm",
    "translation": "表格",
    "translations": [
      "表格",
      "形式",
      "体形",
      "组成"
    ]
  },
  {
    "id": "word_0546",
    "word": "forward",
    "phonetic": "'fɔːwəd",
    "translation": "转寄",
    "translations": [
      "转寄",
      "发送",
      "向前",
      "前进"
    ]
  },
  {
    "id": "word_0547",
    "word": "found",
    "phonetic": "faʊnd",
    "translation": "创办，成立",
    "translations": [
      "创办，成立",
      "偶然发现的"
    ]
  },
  {
    "id": "word_0548",
    "word": "fox",
    "phonetic": "fɒks",
    "translation": "狐狸",
    "translations": [
      "狐狸"
    ]
  },
  {
    "id": "word_0549",
    "word": "free",
    "phonetic": "friː",
    "translation": "自由的",
    "translations": [
      "自由的",
      "空闲的",
      "免费的"
    ]
  },
  {
    "id": "word_0550",
    "word": "freeze",
    "phonetic": "friːz",
    "translation": "结冰",
    "translations": [
      "结冰",
      "冻住",
      "冷藏，"
    ]
  },
  {
    "id": "word_0551",
    "word": "fresh",
    "phonetic": "freʃ",
    "translation": "新鲜的",
    "translations": [
      "新鲜的"
    ]
  },
  {
    "id": "word_0552",
    "word": "fridge",
    "phonetic": "frɪdʒ",
    "translation": "冰箱",
    "translations": [
      "冰箱"
    ]
  },
  {
    "id": "word_0553",
    "word": "friend",
    "phonetic": "frend",
    "translation": "朋友",
    "translations": [
      "朋友"
    ]
  },
  {
    "id": "word_0554",
    "word": "friendly",
    "phonetic": "'frendli",
    "translation": "友好的",
    "translations": [
      "友好的"
    ]
  },
  {
    "id": "word_0555",
    "word": "friendship",
    "phonetic": "'frendʃɪp",
    "translation": "友谊",
    "translations": [
      "友谊",
      "友情"
    ]
  },
  {
    "id": "word_0556",
    "word": "from",
    "phonetic": "frɒm",
    "translation": "从……起",
    "translations": [
      "从……起",
      "来自"
    ]
  },
  {
    "id": "word_0557",
    "word": "front",
    "phonetic": "frʌnt",
    "translation": "前面的",
    "translations": [
      "前面的",
      "前部"
    ]
  },
  {
    "id": "word_0558",
    "word": "fruit",
    "phonetic": "fruːt",
    "translation": "水果",
    "translations": [
      "水果",
      "成果"
    ]
  },
  {
    "id": "word_0559",
    "word": "full",
    "phonetic": "fʊl",
    "translation": "满的",
    "translations": [
      "满的",
      "充满的"
    ]
  },
  {
    "id": "word_0560",
    "word": "fun",
    "phonetic": "fʌn",
    "translation": "乐趣",
    "translations": [
      "乐趣",
      "快乐",
      "使人愉快"
    ]
  },
  {
    "id": "word_0561",
    "word": "funny",
    "phonetic": "'fʌni",
    "translation": "滑稽的",
    "translations": [
      "滑稽的",
      "好笑的"
    ]
  },
  {
    "id": "word_0562",
    "word": "future",
    "phonetic": "'fjuːtʃə(r)",
    "translation": "将来",
    "translations": [
      "将来"
    ]
  },
  {
    "id": "word_0563",
    "word": "game",
    "phonetic": "ɡeɪm",
    "translation": "游戏",
    "translations": [
      "游戏",
      "运动",
      "比赛"
    ]
  },
  {
    "id": "word_0564",
    "word": "garden",
    "phonetic": "'ɡɑːd(ə)n",
    "translation": "花园",
    "translations": [
      "花园",
      "果园",
      "菜园"
    ]
  },
  {
    "id": "word_0565",
    "word": "gas",
    "phonetic": "ɡæs",
    "translation": "气体",
    "translations": [
      "气体",
      "汽油"
    ]
  },
  {
    "id": "word_0566",
    "word": "gate",
    "phonetic": "ɡeɪt",
    "translation": "大门",
    "translations": [
      "大门"
    ]
  },
  {
    "id": "word_0567",
    "word": "general",
    "phonetic": "'dʒenrəl",
    "translation": "全体的",
    "translations": [
      "全体的",
      "普遍的"
    ]
  },
  {
    "id": "word_0568",
    "word": "gentleman",
    "phonetic": "'dʒentlmən",
    "translation": "绅士",
    "translations": [
      "绅士",
      "先生"
    ]
  },
  {
    "id": "word_0569",
    "word": "geography",
    "phonetic": "dʒi'ɒɡrəfi",
    "translation": "地理",
    "translations": [
      "地理"
    ]
  },
  {
    "id": "word_0570",
    "word": "get",
    "phonetic": "ɡet",
    "translation": "去取",
    "translations": [
      "去取",
      "收到"
    ]
  },
  {
    "id": "word_0571",
    "word": "gift",
    "phonetic": "ɡɪft",
    "translation": "礼物",
    "translations": [
      "礼物",
      "赠品",
      "天赋"
    ]
  },
  {
    "id": "word_0572",
    "word": "giraffe",
    "phonetic": "dʒə'rɑːf",
    "translation": "长颈鹿",
    "translations": [
      "长颈鹿"
    ]
  },
  {
    "id": "word_0573",
    "word": "girl",
    "phonetic": "ɡɜːl",
    "translation": "女孩",
    "translations": [
      "女孩"
    ]
  },
  {
    "id": "word_0574",
    "word": "give",
    "phonetic": "ɡɪv",
    "translation": "给",
    "translations": [
      "给",
      "交给",
      "赠送",
      "举"
    ]
  },
  {
    "id": "word_0575",
    "word": "glad",
    "phonetic": "ɡlæd",
    "translation": "高兴",
    "translations": [
      "高兴",
      "乐意"
    ]
  },
  {
    "id": "word_0576",
    "word": "glass",
    "phonetic": "ɡlɑːs",
    "translation": "玻璃杯",
    "translations": [
      "玻璃杯"
    ]
  },
  {
    "id": "word_0577",
    "word": "glove",
    "phonetic": "ɡlʌv",
    "translation": "手套",
    "translations": [
      "手套"
    ]
  },
  {
    "id": "word_0578",
    "word": "glue",
    "phonetic": "ɡluː",
    "translation": "胶水",
    "translations": [
      "胶水"
    ]
  },
  {
    "id": "word_0579",
    "word": "go",
    "phonetic": "ɡəʊ",
    "translation": "去",
    "translations": [
      "去",
      "走",
      "离开"
    ]
  },
  {
    "id": "word_0580",
    "word": "goal",
    "phonetic": "ɡəʊl",
    "translation": "球门",
    "translations": [
      "球门",
      "射门",
      "目标"
    ]
  },
  {
    "id": "word_0581",
    "word": "god",
    "phonetic": "ɡɒd",
    "translation": "神",
    "translations": [
      "神",
      "上帝"
    ]
  },
  {
    "id": "word_0582",
    "word": "gold",
    "phonetic": "ɡəʊld",
    "translation": "金子",
    "translations": [
      "金子",
      "金币",
      "金色的"
    ]
  },
  {
    "id": "word_0583",
    "word": "good",
    "phonetic": "ɡʊd",
    "translation": "好的",
    "translations": [
      "好的",
      "优质的",
      "令人满意的"
    ]
  },
  {
    "id": "word_0584",
    "word": "goodbye",
    "phonetic": "ˌɡʊd'baɪ",
    "translation": "再见",
    "translations": [
      "再见",
      "再会"
    ]
  },
  {
    "id": "word_0585",
    "word": "government",
    "phonetic": "'ɡʌvənmənt",
    "translation": "政府",
    "translations": [
      "政府"
    ]
  },
  {
    "id": "word_0586",
    "word": "grade",
    "phonetic": "ɡreɪd",
    "translation": "等级",
    "translations": [
      "等级",
      "年级",
      "成绩"
    ]
  },
  {
    "id": "word_0587",
    "word": "graduate",
    "phonetic": "'ɡrædʒuət",
    "translation": "毕业",
    "translations": [
      "毕业",
      "获得学位",
      "大学毕业生"
    ]
  },
  {
    "id": "word_0588",
    "word": "grammar",
    "phonetic": "'ɡræmə(r)",
    "translation": "语法",
    "translations": [
      "语法"
    ]
  },
  {
    "id": "word_0589",
    "word": "grandfather",
    "phonetic": "'ɡrænfɑːðə(r)",
    "translation": "爷爷",
    "translations": [
      "爷爷",
      "外公"
    ]
  },
  {
    "id": "word_0590",
    "word": "grandmother",
    "phonetic": "'ɡrænmʌðə(r)",
    "translation": "奶奶",
    "translations": [
      "奶奶",
      "外婆"
    ]
  },
  {
    "id": "word_0591",
    "word": "grape",
    "phonetic": "ɡreɪp",
    "translation": "葡萄",
    "translations": [
      "葡萄"
    ]
  },
  {
    "id": "word_0592",
    "word": "grass",
    "phonetic": "ɡrɑːs",
    "translation": "草",
    "translations": [
      "草",
      "草坪",
      "牧草"
    ]
  },
  {
    "id": "word_0593",
    "word": "great",
    "phonetic": "ɡreɪt",
    "translation": "大的",
    "translations": [
      "大的",
      "数量大的",
      "伟大的",
      "好极的",
      "美妙"
    ]
  },
  {
    "id": "word_0594",
    "word": "green",
    "phonetic": "ɡriːn",
    "translation": "绿色的",
    "translations": [
      "绿色的",
      "环保的",
      "绿色 v．绿化"
    ]
  },
  {
    "id": "word_0595",
    "word": "greet",
    "phonetic": "ɡriːt",
    "translation": "和……打招呼",
    "translations": [
      "和……打招呼"
    ]
  },
  {
    "id": "word_0596",
    "word": "grey",
    "phonetic": "ɡreɪ",
    "translation": "脸色苍白的",
    "translations": [
      "脸色苍白的",
      "灰色"
    ]
  },
  {
    "id": "word_0597",
    "word": "ground",
    "phonetic": "ɡraʊnd",
    "translation": "地面",
    "translations": [
      "地面"
    ]
  },
  {
    "id": "word_0598",
    "word": "group",
    "phonetic": "ɡruːp",
    "translation": "组",
    "translations": [
      "组",
      "群"
    ]
  },
  {
    "id": "word_0599",
    "word": "grow",
    "phonetic": "ɡrəʊ",
    "translation": "种植",
    "translations": [
      "种植",
      "生长",
      "发育"
    ]
  },
  {
    "id": "word_0600",
    "word": "guard",
    "phonetic": "ɡɑːd",
    "translation": "警卫",
    "translations": [
      "警卫",
      "看守",
      "保卫",
      "守卫"
    ]
  },
  {
    "id": "word_0601",
    "word": "guardian",
    "phonetic": "",
    "translation": "监护人",
    "translations": [
      "监护人",
      "守护者"
    ]
  },
  {
    "id": "word_0602",
    "word": "guess",
    "phonetic": "ɡes",
    "translation": "猜测",
    "translations": [
      "猜测",
      "猜到",
      "估计"
    ]
  },
  {
    "id": "word_0603",
    "word": "guest",
    "phonetic": "ɡest",
    "translation": "客人",
    "translations": [
      "客人",
      "宾客"
    ]
  },
  {
    "id": "word_0604",
    "word": "guide",
    "phonetic": "ɡaɪd",
    "translation": "导游",
    "translations": [
      "导游",
      "向导",
      "指导",
      "指路"
    ]
  },
  {
    "id": "word_0605",
    "word": "guitar",
    "phonetic": "ɡɪ'tɑː(r)",
    "translation": "吉他",
    "translations": [
      "吉他"
    ]
  },
  {
    "id": "word_0606",
    "word": "gun",
    "phonetic": "ɡʌn",
    "translation": "枪",
    "translations": [
      "枪",
      "炮"
    ]
  },
  {
    "id": "word_0607",
    "word": "gym",
    "phonetic": "dʒɪm",
    "translation": "体育馆",
    "translations": [
      "体育馆",
      "健身房"
    ]
  },
  {
    "id": "word_0608",
    "word": "habit",
    "phonetic": "'hæbɪt",
    "translation": "习惯",
    "translations": [
      "习惯",
      "习性"
    ]
  },
  {
    "id": "word_0609",
    "word": "hair",
    "phonetic": "heə(r)",
    "translation": "头发",
    "translations": [
      "头发",
      "毛发"
    ]
  },
  {
    "id": "word_0610",
    "word": "half",
    "phonetic": "hɑːf",
    "translation": "．半",
    "translations": [
      "．半",
      "一半"
    ]
  },
  {
    "id": "word_0611",
    "word": "hall",
    "phonetic": "hɔːl",
    "translation": "大厅",
    "translations": [
      "大厅",
      "走廊",
      "礼堂"
    ]
  },
  {
    "id": "word_0612",
    "word": "hamburger",
    "phonetic": "'hæmbɜːɡə(r)",
    "translation": "汉堡包",
    "translations": [
      "汉堡包"
    ]
  },
  {
    "id": "word_0613",
    "word": "hand",
    "phonetic": "hænd",
    "translation": "手",
    "translations": [
      "手",
      "帮助",
      "指针",
      "递",
      "给",
      "交"
    ]
  },
  {
    "id": "word_0614",
    "word": "handsome",
    "phonetic": "'hænsəm",
    "translation": "英俊的",
    "translations": [
      "英俊的"
    ]
  },
  {
    "id": "word_0615",
    "word": "hang",
    "phonetic": "hæ\t",
    "translation": "悬挂",
    "translations": [
      "悬挂",
      "吊",
      "垂下"
    ]
  },
  {
    "id": "word_0616",
    "word": "happen",
    "phonetic": "'hæpən",
    "translation": "出",
    "translations": [
      "出"
    ]
  },
  {
    "id": "word_0617",
    "word": "happy",
    "phonetic": "'hæpi",
    "translation": "幸福的",
    "translations": [
      "幸福的",
      "快乐的",
      "高兴的"
    ]
  },
  {
    "id": "word_0618",
    "word": "hard",
    "phonetic": "hɑːd",
    "translation": "努力地",
    "translations": [
      "努力地",
      "困难的",
      "艰"
    ]
  },
  {
    "id": "word_0619",
    "word": "hardly",
    "phonetic": "'hɑːdli",
    "translation": "几乎不",
    "translations": [
      "几乎不",
      "几乎"
    ]
  },
  {
    "id": "word_0620",
    "word": "harm",
    "phonetic": "hɑːm",
    "translation": "伤害，损害",
    "translations": [
      "伤害，损害",
      "危害，损害"
    ]
  },
  {
    "id": "word_0621",
    "word": "hat",
    "phonetic": "hæt",
    "translation": "帽子",
    "translations": [
      "帽子"
    ]
  },
  {
    "id": "word_0622",
    "word": "hate",
    "phonetic": "heɪt",
    "translation": "．厌恶",
    "translations": [
      "．厌恶",
      "讨厌"
    ]
  },
  {
    "id": "word_0623",
    "word": "have",
    "phonetic": "hæv",
    "translation": "有",
    "translations": [
      "有",
      "吃",
      "喝",
      "抓住",
      "经受"
    ]
  },
  {
    "id": "word_0624",
    "word": "he",
    "phonetic": "hiː",
    "translation": "他",
    "translations": [
      "他"
    ]
  },
  {
    "id": "word_0625",
    "word": "head",
    "phonetic": "hed",
    "translation": "头",
    "translations": [
      "头",
      "头脑",
      "头部"
    ]
  },
  {
    "id": "word_0626",
    "word": "health",
    "phonetic": "helθ",
    "translation": "健康",
    "translations": [
      "健康",
      "卫生"
    ]
  },
  {
    "id": "word_0627",
    "word": "healthy",
    "phonetic": "'helθi",
    "translation": "健康的",
    "translations": [
      "健康的",
      "健壮的"
    ]
  },
  {
    "id": "word_0628",
    "word": "hear",
    "phonetic": "hɪə(r)",
    "translation": "听见",
    "translations": [
      "听见",
      "听说"
    ]
  },
  {
    "id": "word_0629",
    "word": "heart",
    "phonetic": "hɑːt",
    "translation": "心",
    "translations": [
      "心",
      "心脏",
      "心肠"
    ]
  },
  {
    "id": "word_0630",
    "word": "heat",
    "phonetic": "hiːt",
    "translation": "热",
    "translations": [
      "热"
    ]
  },
  {
    "id": "word_0631",
    "word": "heavy",
    "phonetic": "'hevi",
    "translation": "重的",
    "translations": [
      "重的"
    ]
  },
  {
    "id": "word_0632",
    "word": "height",
    "phonetic": "haɪt",
    "translation": "高",
    "translations": [
      "高",
      "高度",
      "身高"
    ]
  },
  {
    "id": "word_0633",
    "word": "hello",
    "phonetic": "hə'ləʊ",
    "translation": "喂，你好",
    "translations": [
      "喂，你好"
    ]
  },
  {
    "id": "word_0634",
    "word": "help",
    "phonetic": "help",
    "translation": "．帮助",
    "translations": [
      "．帮助",
      "援助"
    ]
  },
  {
    "id": "word_0635",
    "word": "helpful",
    "phonetic": "'helpfl",
    "translation": "有帮助的",
    "translations": [
      "有帮助的",
      "有益的"
    ]
  },
  {
    "id": "word_0636",
    "word": "hen",
    "phonetic": "hen",
    "translation": "母鸡",
    "translations": [
      "母鸡"
    ]
  },
  {
    "id": "word_0637",
    "word": "her",
    "phonetic": "hɜː(r)",
    "translation": "她",
    "translations": [
      "她",
      "她的"
    ]
  },
  {
    "id": "word_0638",
    "word": "here",
    "phonetic": "hɪə(r)",
    "translation": "在这里",
    "translations": [
      "在这里",
      "向这里",
      "这就是"
    ]
  },
  {
    "id": "word_0639",
    "word": "hero",
    "phonetic": "'hɪərəʊ",
    "translation": "英雄",
    "translations": [
      "英雄",
      "男主角"
    ]
  },
  {
    "id": "word_0640",
    "word": "hers",
    "phonetic": "hɜːz",
    "translation": "她的",
    "translations": [
      "她的"
    ]
  },
  {
    "id": "word_0641",
    "word": "herself",
    "phonetic": "hɜː'self",
    "translation": "她自己",
    "translations": [
      "她自己"
    ]
  },
  {
    "id": "word_0642",
    "word": "hi",
    "phonetic": "haɪ",
    "translation": "嗨",
    "translations": [
      "嗨",
      "你好"
    ]
  },
  {
    "id": "word_0643",
    "word": "hide",
    "phonetic": "haɪd",
    "translation": "藏",
    "translations": [
      "藏",
      "躲避",
      "隐蔽"
    ]
  },
  {
    "id": "word_0644",
    "word": "high",
    "phonetic": "haɪ",
    "translation": "高的",
    "translations": [
      "高的"
    ]
  },
  {
    "id": "word_0645",
    "word": "hike",
    "phonetic": "haɪk",
    "translation": "徒步旅行",
    "translations": [
      "徒步旅行",
      "远足",
      "（去）远足"
    ]
  },
  {
    "id": "word_0646",
    "word": "hill",
    "phonetic": "hɪl",
    "translation": "小山",
    "translations": [
      "小山",
      "山丘",
      "斜坡"
    ]
  },
  {
    "id": "word_0647",
    "word": "him",
    "phonetic": "hɪm",
    "translation": "他",
    "translations": [
      "他"
    ]
  },
  {
    "id": "word_0648",
    "word": "himself",
    "phonetic": "hɪm'self",
    "translation": "他自己",
    "translations": [
      "他自己"
    ]
  },
  {
    "id": "word_0649",
    "word": "his",
    "phonetic": "hɪz",
    "translation": "他的",
    "translations": [
      "他的"
    ]
  },
  {
    "id": "word_0650",
    "word": "history",
    "phonetic": "'hɪstri",
    "translation": "历史",
    "translations": [
      "历史",
      "历史学"
    ]
  },
  {
    "id": "word_0651",
    "word": "hit",
    "phonetic": "hɪt",
    "translation": "打",
    "translations": [
      "打",
      "击",
      "碰撞"
    ]
  },
  {
    "id": "word_0652",
    "word": "hobby",
    "phonetic": "'hɒbi",
    "translation": "业余爱好",
    "translations": [
      "业余爱好"
    ]
  },
  {
    "id": "word_0653",
    "word": "hold",
    "phonetic": "həʊld",
    "translation": "抓住",
    "translations": [
      "抓住",
      "握住",
      "举行"
    ]
  },
  {
    "id": "word_0654",
    "word": "hole",
    "phonetic": "həʊl",
    "translation": "洞",
    "translations": [
      "洞",
      "孔",
      "坑"
    ]
  },
  {
    "id": "word_0655",
    "word": "holiday",
    "phonetic": "'hɒlədeɪ",
    "translation": "假日",
    "translations": [
      "假日",
      "假期"
    ]
  },
  {
    "id": "word_0656",
    "word": "home",
    "phonetic": "həʊm",
    "translation": "家",
    "translations": [
      "家",
      "活动本部",
      "到家",
      "在家"
    ]
  },
  {
    "id": "word_0657",
    "word": "hometown",
    "phonetic": "'həʊmtaʊn",
    "translation": "故乡",
    "translations": [
      "故乡"
    ]
  },
  {
    "id": "word_0658",
    "word": "homework",
    "phonetic": "'həʊmwɜːk",
    "translation": "家庭作业",
    "translations": [
      "家庭作业"
    ]
  },
  {
    "id": "word_0659",
    "word": "honest",
    "phonetic": "'ɒnɪst",
    "translation": "诚实的",
    "translations": [
      "诚实的",
      "正直的",
      "老实的"
    ]
  },
  {
    "id": "word_0660",
    "word": "honey",
    "phonetic": "'hʌni",
    "translation": "蜂蜜",
    "translations": [
      "蜂蜜"
    ]
  },
  {
    "id": "word_0661",
    "word": "honour",
    "phonetic": "'ɒnə(r)",
    "translation": "尊重",
    "translations": [
      "尊重",
      "表示敬意",
      "荣幸",
      "荣誉"
    ]
  },
  {
    "id": "word_0662",
    "word": "hope",
    "phonetic": "həʊp",
    "translation": "．希望",
    "translations": [
      "．希望"
    ]
  },
  {
    "id": "word_0663",
    "word": "horse",
    "phonetic": "hɔːs",
    "translation": "马",
    "translations": [
      "马"
    ]
  },
  {
    "id": "word_0664",
    "word": "hospital",
    "phonetic": "'hɒspɪtl",
    "translation": "医院",
    "translations": [
      "医院"
    ]
  },
  {
    "id": "word_0665",
    "word": "host",
    "phonetic": "həʊst",
    "translation": "主人",
    "translations": [
      "主人",
      "东道主"
    ]
  },
  {
    "id": "word_0666",
    "word": "hot",
    "phonetic": "hɒt",
    "translation": "热的",
    "translations": [
      "热的",
      "辣的"
    ]
  },
  {
    "id": "word_0667",
    "word": "hotel",
    "phonetic": "həʊ'tel",
    "translation": "旅馆",
    "translations": [
      "旅馆",
      "宾馆"
    ]
  },
  {
    "id": "word_0668",
    "word": "hour",
    "phonetic": "'aʊə(r)",
    "translation": "小时",
    "translations": [
      "小时"
    ]
  },
  {
    "id": "word_0669",
    "word": "house",
    "phonetic": "haʊs",
    "translation": "房子",
    "translations": [
      "房子",
      "住宅",
      "观众席"
    ]
  },
  {
    "id": "word_0670",
    "word": "housework",
    "phonetic": "'haʊswɜːk",
    "translation": "家务劳动",
    "translations": [
      "家务劳动",
      "家务事"
    ]
  },
  {
    "id": "word_0671",
    "word": "how",
    "phonetic": "haʊ",
    "translation": "怎样",
    "translations": [
      "怎样",
      "如何",
      "多少，"
    ]
  },
  {
    "id": "word_0672",
    "word": "however",
    "phonetic": "haʊ'evə(r)",
    "translation": "不管怎样",
    "translations": [
      "不管怎样",
      "无论如"
    ]
  },
  {
    "id": "word_0673",
    "word": "hug",
    "phonetic": "hʌɡ",
    "translation": "．拥抱",
    "translations": [
      "．拥抱",
      "抱住"
    ]
  },
  {
    "id": "word_0674",
    "word": "huge",
    "phonetic": "hjuːdʒ",
    "translation": "巨大的",
    "translations": [
      "巨大的",
      "极多的"
    ]
  },
  {
    "id": "word_0675",
    "word": "human",
    "phonetic": "'hjuːmən",
    "translation": "人的 n．人",
    "translations": [
      "人的 n．人"
    ]
  },
  {
    "id": "word_0676",
    "word": "humour",
    "phonetic": "'hjuːmə(r)",
    "translation": "幽默",
    "translations": [
      "幽默",
      "幽默感"
    ]
  },
  {
    "id": "word_0677",
    "word": "hungry",
    "phonetic": "'hʌ ɡri",
    "translation": "饥饿的",
    "translations": [
      "饥饿的"
    ]
  },
  {
    "id": "word_0678",
    "word": "hunt",
    "phonetic": "hʌnt",
    "translation": "打猎，猎取",
    "translations": [
      "打猎，猎取",
      "搜寻，搜"
    ]
  },
  {
    "id": "word_0679",
    "word": "hurry",
    "phonetic": "'hʌri",
    "translation": "．匆忙，急忙",
    "translations": [
      "．匆忙，急忙"
    ]
  },
  {
    "id": "word_0680",
    "word": "hurt",
    "phonetic": "hɜːt",
    "translation": "使疼痛",
    "translations": [
      "使疼痛",
      "受伤",
      "痛苦的",
      "受伤的"
    ]
  },
  {
    "id": "word_0681",
    "word": "husband",
    "phonetic": "'hʌzbənd",
    "translation": "丈夫",
    "translations": [
      "丈夫"
    ]
  },
  {
    "id": "word_0682",
    "word": "ice",
    "phonetic": "aɪs",
    "translation": "冰",
    "translations": [
      "冰"
    ]
  },
  {
    "id": "word_0683",
    "word": "idea",
    "phonetic": "aɪ'dɪə",
    "translation": "主意",
    "translations": [
      "主意",
      "意见",
      "想法"
    ]
  },
  {
    "id": "word_0684",
    "word": "if",
    "phonetic": "ɪf",
    "translation": "如果",
    "translations": [
      "如果",
      "假使",
      "是否"
    ]
  },
  {
    "id": "word_0685",
    "word": "ill",
    "phonetic": "ɪl",
    "translation": "有病",
    "translations": [
      "有病",
      "不舒服"
    ]
  },
  {
    "id": "word_0686",
    "word": "illness",
    "phonetic": "'ɪlnəs",
    "translation": "疾病",
    "translations": [
      "疾病"
    ]
  },
  {
    "id": "word_0687",
    "word": "imagine",
    "phonetic": "ɪ'mædʒɪn",
    "translation": "想象",
    "translations": [
      "想象",
      "设想"
    ]
  },
  {
    "id": "word_0688",
    "word": "important",
    "phonetic": "ɪm'pɔːtnt",
    "translation": "重要的",
    "translations": [
      "重要的"
    ]
  },
  {
    "id": "word_0689",
    "word": "impossible",
    "phonetic": "ɪm'pɒsəbl",
    "translation": "不可能存在的",
    "translations": [
      "不可能存在的",
      "不可"
    ]
  },
  {
    "id": "word_0690",
    "word": "improve",
    "phonetic": "ɪm'pruːv",
    "translation": "改进",
    "translations": [
      "改进",
      "改善"
    ]
  },
  {
    "id": "word_0691",
    "word": "in",
    "phonetic": "ɪn",
    "translation": "在……里",
    "translations": [
      "在……里"
    ]
  },
  {
    "id": "word_0692",
    "word": "include",
    "phonetic": "ɪn'kluːd",
    "translation": "包含",
    "translations": [
      "包含",
      "包括"
    ]
  },
  {
    "id": "word_0693",
    "word": "increase",
    "phonetic": "ɪn'kriːs",
    "translation": "增加",
    "translations": [
      "增加",
      "增多",
      "增长"
    ]
  },
  {
    "id": "word_0694",
    "word": "industry",
    "phonetic": "'ɪndəstri",
    "translation": "工业",
    "translations": [
      "工业",
      "行业"
    ]
  },
  {
    "id": "word_0695",
    "word": "influence",
    "phonetic": "'ɪnfluəns",
    "translation": "．影响",
    "translations": [
      "．影响"
    ]
  },
  {
    "id": "word_0696",
    "word": "information",
    "phonetic": "ˌɪnfə'meɪʃn",
    "translation": "信息",
    "translations": [
      "信息",
      "消息"
    ]
  },
  {
    "id": "word_0697",
    "word": "insect",
    "phonetic": "'ɪnsekt",
    "translation": "昆虫",
    "translations": [
      "昆虫"
    ]
  },
  {
    "id": "word_0698",
    "word": "inside",
    "phonetic": "ˌɪn'saɪd",
    "translation": "里面",
    "translations": [
      "里面",
      "内部的"
    ]
  },
  {
    "id": "word_0699",
    "word": "instead",
    "phonetic": "ɪn'sted",
    "translation": "代替",
    "translations": [
      "代替",
      "顶替",
      "反而"
    ]
  },
  {
    "id": "word_0700",
    "word": "instruction",
    "phonetic": "ɪn'strʌkʃn",
    "translation": "用法说明",
    "translations": [
      "用法说明",
      "指示",
      "命令"
    ]
  },
  {
    "id": "word_0701",
    "word": "instrument",
    "phonetic": "'ɪnstrəmənt",
    "translation": "器械",
    "translations": [
      "器械",
      "仪器",
      "工具",
      "乐器"
    ]
  },
  {
    "id": "word_0702",
    "word": "interest",
    "phonetic": "'ɪntrəst",
    "translation": "兴趣",
    "translations": [
      "兴趣",
      "趣味",
      "好处"
    ]
  },
  {
    "id": "word_0703",
    "word": "interesting",
    "phonetic": "'ɪntrəstɪ ",
    "translation": "有趣的",
    "translations": [
      "有趣的"
    ]
  },
  {
    "id": "word_0704",
    "word": "international",
    "phonetic": "ˌɪntə'næʃnəl",
    "translation": "国际的",
    "translations": [
      "国际的",
      "民族的"
    ]
  },
  {
    "id": "word_0705",
    "word": "Internet",
    "phonetic": "'ɪntənet",
    "translation": "互联网",
    "translations": [
      "互联网",
      "因特网"
    ]
  },
  {
    "id": "word_0706",
    "word": "interview",
    "phonetic": "'ɪntəvjuː",
    "translation": "．采访",
    "translations": [
      "．采访",
      "会见",
      "面"
    ]
  },
  {
    "id": "word_0707",
    "word": "into",
    "phonetic": "'ɪntuː",
    "translation": "到……里",
    "translations": [
      "到……里"
    ]
  },
  {
    "id": "word_0708",
    "word": "introduce",
    "phonetic": "ˌɪntrə'djuːs",
    "translation": "介绍",
    "translations": [
      "介绍",
      "引见"
    ]
  },
  {
    "id": "word_0709",
    "word": "invent",
    "phonetic": "ɪn'vent",
    "translation": "发明",
    "translations": [
      "发明",
      "创造"
    ]
  },
  {
    "id": "word_0710",
    "word": "invite",
    "phonetic": "ɪn'vaɪt",
    "translation": "邀请",
    "translations": [
      "邀请"
    ]
  },
  {
    "id": "word_0711",
    "word": "island",
    "phonetic": "'aɪlənd",
    "translation": "岛",
    "translations": [
      "岛"
    ]
  },
  {
    "id": "word_0712",
    "word": "it",
    "phonetic": "ɪt",
    "translation": "它",
    "translations": [
      "它"
    ]
  },
  {
    "id": "word_0713",
    "word": "its",
    "phonetic": "ɪts",
    "translation": "它的",
    "translations": [
      "它的"
    ]
  },
  {
    "id": "word_0714",
    "word": "itself",
    "phonetic": "ɪt'self",
    "translation": "它自己",
    "translations": [
      "它自己"
    ]
  },
  {
    "id": "word_0715",
    "word": "jacket",
    "phonetic": "'dʒækɪt",
    "translation": "短上衣",
    "translations": [
      "短上衣",
      "夹克衫"
    ]
  },
  {
    "id": "word_0716",
    "word": "jeans",
    "phonetic": "dʒiːnz",
    "translation": "牛仔裤",
    "translations": [
      "牛仔裤"
    ]
  },
  {
    "id": "word_0717",
    "word": "job",
    "phonetic": "dʒɒb",
    "translation": "工作",
    "translations": [
      "工作",
      "职业",
      "职位"
    ]
  },
  {
    "id": "word_0718",
    "word": "jog",
    "phonetic": "dʒɒɡ",
    "translation": "．慢跑",
    "translations": [
      "．慢跑",
      "慢跑"
    ]
  },
  {
    "id": "word_0719",
    "word": "join",
    "phonetic": "dʒɔɪn",
    "translation": "参加",
    "translations": [
      "参加",
      "加入",
      "连接"
    ]
  },
  {
    "id": "word_0720",
    "word": "joke",
    "phonetic": "dʒəʊk",
    "translation": "笑话 v．开玩笑",
    "translations": [
      "笑话 v．开玩笑"
    ]
  },
  {
    "id": "word_0721",
    "word": "journey",
    "phonetic": "'dʒɜːni",
    "translation": "行",
    "translations": [
      "行"
    ]
  },
  {
    "id": "word_0722",
    "word": "joy",
    "phonetic": "dʒɔɪ",
    "translation": "高兴",
    "translations": [
      "高兴",
      "愉快"
    ]
  },
  {
    "id": "word_0723",
    "word": "judge",
    "phonetic": "dʒʌdʒ",
    "translation": "判断",
    "translations": [
      "判断",
      "认为",
      "法官",
      "审判官"
    ]
  },
  {
    "id": "word_0724",
    "word": "juice",
    "phonetic": "dʒuːs",
    "translation": "果汁",
    "translations": [
      "果汁",
      "菜汁",
      "饮料"
    ]
  },
  {
    "id": "word_0725",
    "word": "jump",
    "phonetic": "dʒʌmp",
    "translation": "跳跃",
    "translations": [
      "跳跃",
      "略过 n．跳跃"
    ]
  },
  {
    "id": "word_0726",
    "word": "junior",
    "phonetic": "'dʒuːniə",
    "translation": "地位",
    "translations": [
      "地位"
    ]
  },
  {
    "id": "word_0727",
    "word": "just",
    "phonetic": "dʒʌst",
    "translation": "刚才",
    "translations": [
      "刚才",
      "恰好",
      "仅仅"
    ]
  },
  {
    "id": "word_0728",
    "word": "keep",
    "phonetic": "kiːp",
    "translation": "保持",
    "translations": [
      "保持",
      "保存",
      "继续"
    ]
  },
  {
    "id": "word_0729",
    "word": "key",
    "phonetic": "kiː",
    "translation": "钥匙",
    "translations": [
      "钥匙",
      "答案",
      "键",
      "关"
    ]
  },
  {
    "id": "word_0730",
    "word": "keyboard",
    "phonetic": "'kiːbɔːd",
    "translation": "键盘",
    "translations": [
      "键盘",
      "键盘式电子乐"
    ]
  },
  {
    "id": "word_0731",
    "word": "kick",
    "phonetic": "kɪk",
    "translation": "．踢",
    "translations": [
      "．踢",
      "踹"
    ]
  },
  {
    "id": "word_0732",
    "word": "kid",
    "phonetic": "kɪd",
    "translation": "小孩",
    "translations": [
      "小孩",
      "年轻人",
      "开玩笑",
      "欺骗"
    ]
  },
  {
    "id": "word_0733",
    "word": "kill",
    "phonetic": "kɪl",
    "translation": "杀死",
    "translations": [
      "杀死",
      "弄死"
    ]
  },
  {
    "id": "word_0734",
    "word": "kilo",
    "phonetic": "'kiːləʊ",
    "translation": "千克",
    "translations": [
      "千克",
      "公斤"
    ]
  },
  {
    "id": "word_0735",
    "word": "kilometre",
    "phonetic": "'kɪləmiːtə(r)",
    "translation": "千米",
    "translations": [
      "千米",
      "公里"
    ]
  },
  {
    "id": "word_0736",
    "word": "kind",
    "phonetic": "kaɪnd",
    "translation": "种",
    "translations": [
      "种",
      "友好的"
    ]
  },
  {
    "id": "word_0737",
    "word": "king",
    "phonetic": "kɪ   ",
    "translation": "国王",
    "translations": [
      "国王",
      "君主"
    ]
  },
  {
    "id": "word_0738",
    "word": "kiss",
    "phonetic": "kɪs",
    "translation": "．吻",
    "translations": [
      "．吻",
      "亲吻"
    ]
  },
  {
    "id": "word_0739",
    "word": "kitchen",
    "phonetic": "'kɪtʃɪn",
    "translation": "厨房",
    "translations": [
      "厨房"
    ]
  },
  {
    "id": "word_0740",
    "word": "kite",
    "phonetic": "kaɪt",
    "translation": "风筝",
    "translations": [
      "风筝"
    ]
  },
  {
    "id": "word_0741",
    "word": "knee",
    "phonetic": "niː",
    "translation": "膝盖",
    "translations": [
      "膝盖"
    ]
  },
  {
    "id": "word_0742",
    "word": "knife",
    "phonetic": "naɪf",
    "translation": "刀",
    "translations": [
      "刀"
    ]
  },
  {
    "id": "word_0743",
    "word": "knock",
    "phonetic": "nɒk",
    "translation": "敲",
    "translations": [
      "敲",
      "击 n．敲击声"
    ]
  },
  {
    "id": "word_0744",
    "word": "know",
    "phonetic": "nəʊ",
    "translation": "知道",
    "translations": [
      "知道",
      "了解"
    ]
  },
  {
    "id": "word_0745",
    "word": "knowledge",
    "phonetic": "'nɒlɪdʒ",
    "translation": "知识",
    "translations": [
      "知识",
      "学问"
    ]
  },
  {
    "id": "word_0746",
    "word": "lab",
    "phonetic": "læb",
    "translation": "实验室",
    "translations": [
      "实验室"
    ]
  },
  {
    "id": "word_0747",
    "word": "lady",
    "phonetic": "'leɪdi",
    "translation": "女士",
    "translations": [
      "女士",
      "夫人"
    ]
  },
  {
    "id": "word_0748",
    "word": "lake",
    "phonetic": "leɪk",
    "translation": "湖",
    "translations": [
      "湖"
    ]
  },
  {
    "id": "word_0749",
    "word": "lamp",
    "phonetic": "læmp",
    "translation": "灯",
    "translations": [
      "灯",
      "光源"
    ]
  },
  {
    "id": "word_0750",
    "word": "land",
    "phonetic": "lænd",
    "translation": "陆地",
    "translations": [
      "陆地",
      "土地",
      "着陆",
      "登陆"
    ]
  },
  {
    "id": "word_0751",
    "word": "landscape",
    "phonetic": "'lændskeɪp",
    "translation": "风景",
    "translations": [
      "风景",
      "景色",
      "风景/景色"
    ]
  },
  {
    "id": "word_0752",
    "word": "language",
    "phonetic": "'læ ɡwɪdʒ",
    "translation": "语言",
    "translations": [
      "语言"
    ]
  },
  {
    "id": "word_0753",
    "word": "lantern",
    "phonetic": "'læntən",
    "translation": "灯笼",
    "translations": [
      "灯笼"
    ]
  },
  {
    "id": "word_0754",
    "word": "laptop",
    "phonetic": "'læptɒp",
    "translation": "笔记本电脑",
    "translations": [
      "笔记本电脑",
      "便携式电脑"
    ]
  },
  {
    "id": "word_0755",
    "word": "large",
    "phonetic": "lɑːdʒ",
    "translation": "大的",
    "translations": [
      "大的",
      "大量的",
      "大"
    ]
  },
  {
    "id": "word_0756",
    "word": "last",
    "phonetic": "lɑːst",
    "translation": "最近的",
    "translations": [
      "最近的",
      "最近",
      "持续"
    ]
  },
  {
    "id": "word_0757",
    "word": "late",
    "phonetic": "leɪt",
    "translation": "接近末期的",
    "translations": [
      "接近末期的",
      "迟到"
    ]
  },
  {
    "id": "word_0758",
    "word": "later",
    "phonetic": "'leɪtə(r)",
    "translation": "后来",
    "translations": [
      "后来",
      "以后"
    ]
  },
  {
    "id": "word_0759",
    "word": "laugh",
    "phonetic": "lɑːf",
    "translation": "笑",
    "translations": [
      "笑",
      "发笑"
    ]
  },
  {
    "id": "word_0760",
    "word": "law",
    "phonetic": "lɔː",
    "translation": "法律",
    "translations": [
      "法律",
      "法学",
      "规则"
    ]
  },
  {
    "id": "word_0761",
    "word": "lawyer",
    "phonetic": "'lɔɪə(r)",
    "translation": "律师",
    "translations": [
      "律师"
    ]
  },
  {
    "id": "word_0762",
    "word": "lay",
    "phonetic": "leɪ",
    "translation": "放置",
    "translations": [
      "放置",
      "搁",
      "产卵",
      "下蛋"
    ]
  },
  {
    "id": "word_0763",
    "word": "lazy",
    "phonetic": "'leɪzi",
    "translation": "懒惰的",
    "translations": [
      "懒惰的"
    ]
  },
  {
    "id": "word_0764",
    "word": "lead",
    "phonetic": "liːd",
    "translation": "带领",
    "translations": [
      "带领",
      "导致",
      "过"
    ]
  },
  {
    "id": "word_0765",
    "word": "leaf",
    "phonetic": "liːf",
    "translation": "叶子",
    "translations": [
      "叶子"
    ]
  },
  {
    "id": "word_0766",
    "word": "learn",
    "phonetic": "lɜːn",
    "translation": "学",
    "translations": [
      "学",
      "学习",
      "学会"
    ]
  },
  {
    "id": "word_0767",
    "word": "least",
    "phonetic": "liːst",
    "translation": "最小",
    "translations": [
      "最小",
      "最少"
    ]
  },
  {
    "id": "word_0768",
    "word": "leave",
    "phonetic": "liːv",
    "translation": "离开",
    "translations": [
      "离开",
      "使保留",
      "使……处于",
      "．休假"
    ]
  },
  {
    "id": "word_0769",
    "word": "left",
    "phonetic": "left",
    "translation": "左边的 n．左",
    "translations": [
      "左边的 n．左",
      "左边",
      "向左边"
    ]
  },
  {
    "id": "word_0770",
    "word": "leg",
    "phonetic": "leɡ",
    "translation": "腿",
    "translations": [
      "腿"
    ]
  },
  {
    "id": "word_0771",
    "word": "lemon",
    "phonetic": "'lemən",
    "translation": "柠檬",
    "translations": [
      "柠檬"
    ]
  },
  {
    "id": "word_0772",
    "word": "lend",
    "phonetic": "lend",
    "translation": "借出",
    "translations": [
      "借出",
      "借给"
    ]
  },
  {
    "id": "word_0773",
    "word": "less",
    "phonetic": "les",
    "translation": "较少的",
    "translations": [
      "较少的",
      "更少的",
      "较少",
      "较小"
    ]
  },
  {
    "id": "word_0774",
    "word": "lesson",
    "phonetic": "'lesn",
    "translation": "课",
    "translations": [
      "课",
      "教训"
    ]
  },
  {
    "id": "word_0775",
    "word": "let",
    "phonetic": "let",
    "translation": "让",
    "translations": [
      "让"
    ]
  },
  {
    "id": "word_0776",
    "word": "letter",
    "phonetic": "'letə(r)",
    "translation": "信",
    "translations": [
      "信",
      "字母"
    ]
  },
  {
    "id": "word_0777",
    "word": "level",
    "phonetic": "'levl",
    "translation": "水平",
    "translations": [
      "水平",
      "程度"
    ]
  },
  {
    "id": "word_0778",
    "word": "library",
    "phonetic": "'laɪbrəri",
    "translation": "图书馆",
    "translations": [
      "图书馆"
    ]
  },
  {
    "id": "word_0779",
    "word": "lie",
    "phonetic": "laɪ",
    "translation": "躺",
    "translations": [
      "躺",
      "平卧",
      "位于",
      "说谎",
      "谎言"
    ]
  },
  {
    "id": "word_0780",
    "word": "life",
    "phonetic": "laɪf",
    "translation": "生命",
    "translations": [
      "生命",
      "生物",
      "生活",
      "一"
    ]
  },
  {
    "id": "word_0781",
    "word": "lift",
    "phonetic": "lɪft",
    "translation": "举起",
    "translations": [
      "举起",
      "抬起 n．电梯"
    ]
  },
  {
    "id": "word_0782",
    "word": "light",
    "phonetic": "laɪt",
    "translation": "光",
    "translations": [
      "光",
      "光线",
      "电灯",
      "点火",
      "轻的",
      "浅色的"
    ]
  },
  {
    "id": "word_0783",
    "word": "lightning",
    "phonetic": "'laɪtnɪ ",
    "translation": "闪电",
    "translations": [
      "闪电"
    ]
  },
  {
    "id": "word_0784",
    "word": "like",
    "phonetic": "laɪk",
    "translation": "像",
    "translations": [
      "像",
      "类似",
      "喜欢"
    ]
  },
  {
    "id": "word_0785",
    "word": "likely",
    "phonetic": "'laɪkli",
    "translation": "可能发生的",
    "translations": [
      "可能发生的",
      "大概，很可能"
    ]
  },
  {
    "id": "word_0786",
    "word": "line",
    "phonetic": "laɪn",
    "translation": "线",
    "translations": [
      "线",
      "排",
      "行",
      "路线"
    ]
  },
  {
    "id": "word_0787",
    "word": "lion",
    "phonetic": "'laɪən",
    "translation": "狮子",
    "translations": [
      "狮子"
    ]
  },
  {
    "id": "word_0788",
    "word": "list",
    "phonetic": "lɪst",
    "translation": "一览表",
    "translations": [
      "一览表",
      "清单",
      "列表",
      "列清单"
    ]
  },
  {
    "id": "word_0789",
    "word": "listen",
    "phonetic": "'lɪsn",
    "translation": "听",
    "translations": [
      "听",
      "倾听"
    ]
  },
  {
    "id": "word_0790",
    "word": "literature",
    "phonetic": "'lɪtrətʃə(r)",
    "translation": "文学",
    "translations": [
      "文学",
      "文学作品"
    ]
  },
  {
    "id": "word_0791",
    "word": "litter",
    "phonetic": "'lɪtə(r)",
    "translation": "乱扔 n．垃圾",
    "translations": [
      "乱扔 n．垃圾"
    ]
  },
  {
    "id": "word_0792",
    "word": "little",
    "phonetic": "'lɪtl",
    "translation": "小的",
    "translations": [
      "小的",
      "少的",
      "不多",
      "稍许"
    ]
  },
  {
    "id": "word_0793",
    "word": "live",
    "phonetic": "laɪv",
    "translation": "生活",
    "translations": [
      "生活",
      "居住",
      "活着",
      "活的",
      "实况转播的"
    ]
  },
  {
    "id": "word_0794",
    "word": "lively",
    "phonetic": "'laɪvli",
    "translation": "活泼的",
    "translations": [
      "活泼的",
      "生机勃勃的",
      "充满活力的",
      "活泼外向的"
    ]
  },
  {
    "id": "word_0795",
    "word": "local",
    "phonetic": "'ləʊkl",
    "translation": "当地的",
    "translations": [
      "当地的",
      "本地的"
    ]
  },
  {
    "id": "word_0796",
    "word": "lock",
    "phonetic": "lɒk",
    "translation": "锁 v．锁上",
    "translations": [
      "锁 v．锁上",
      "被锁住"
    ]
  },
  {
    "id": "word_0797",
    "word": "lonely",
    "phonetic": "'ləʊnli",
    "translation": "孤独的",
    "translations": [
      "孤独的",
      "寂寞的"
    ]
  },
  {
    "id": "word_0798",
    "word": "long",
    "phonetic": "lɒ   ",
    "translation": "长的",
    "translations": [
      "长的",
      "长期的",
      "．渴望"
    ]
  },
  {
    "id": "word_0799",
    "word": "look",
    "phonetic": "lʊk",
    "translation": "看",
    "translations": [
      "看",
      "样子",
      "外表",
      "寻找",
      "看起来"
    ]
  },
  {
    "id": "word_0800",
    "word": "lose",
    "phonetic": "luːz",
    "translation": "失去",
    "translations": [
      "失去",
      "丢失"
    ]
  },
  {
    "id": "word_0801",
    "word": "loss",
    "phonetic": "lɒs",
    "translation": "丢失",
    "translations": [
      "丢失",
      "损失",
      "遗失",
      "丧失"
    ]
  },
  {
    "id": "word_0802",
    "word": "lost",
    "phonetic": "lɒst",
    "translation": "丢失",
    "translations": [
      "丢失",
      "迷失的",
      "困惑的"
    ]
  },
  {
    "id": "word_0803",
    "word": "lot",
    "phonetic": "lɒt",
    "translation": "许多",
    "translations": [
      "许多",
      "大量"
    ]
  },
  {
    "id": "word_0804",
    "word": "loud",
    "phonetic": "laʊd",
    "translation": "大声的",
    "translations": [
      "大声的"
    ]
  },
  {
    "id": "word_0805",
    "word": "love",
    "phonetic": "lʌv",
    "translation": "．爱",
    "translations": [
      "．爱",
      "热爱"
    ]
  },
  {
    "id": "word_0806",
    "word": "lovely",
    "phonetic": "'lʌvli",
    "translation": "美丽的",
    "translations": [
      "美丽的",
      "迷人的"
    ]
  },
  {
    "id": "word_0807",
    "word": "low",
    "phonetic": "ləʊ",
    "translation": "低的",
    "translations": [
      "低的",
      "矮的",
      "低",
      "低声地"
    ]
  },
  {
    "id": "word_0808",
    "word": "luck",
    "phonetic": "lʌk",
    "translation": "运气",
    "translations": [
      "运气",
      "好运"
    ]
  },
  {
    "id": "word_0809",
    "word": "lunch",
    "phonetic": "lʌntʃ",
    "translation": "午餐",
    "translations": [
      "午餐",
      "午饭"
    ]
  },
  {
    "id": "word_0810",
    "word": "machine",
    "phonetic": "mə'ʃiːn",
    "translation": "机器",
    "translations": [
      "机器"
    ]
  },
  {
    "id": "word_0811",
    "word": "mad",
    "phonetic": "mæd",
    "translation": "疯的",
    "translations": [
      "疯的",
      "生气的"
    ]
  },
  {
    "id": "word_0812",
    "word": "madam",
    "phonetic": "'mædəm",
    "translation": "夫人",
    "translations": [
      "夫人",
      "女士"
    ]
  },
  {
    "id": "word_0813",
    "word": "magazine",
    "phonetic": "ˌmæɡə'ziːn",
    "translation": "杂志",
    "translations": [
      "杂志",
      "期刊"
    ]
  },
  {
    "id": "word_0814",
    "word": "magic",
    "phonetic": "'mædʒɪk",
    "translation": "有魔力的n.魔术",
    "translations": [
      "有魔力的n.魔术"
    ]
  },
  {
    "id": "word_0815",
    "word": "main",
    "phonetic": "meɪn",
    "translation": "主要的",
    "translations": [
      "主要的",
      "最重要的"
    ]
  },
  {
    "id": "word_0816",
    "word": "make",
    "phonetic": "meɪk",
    "translation": "制造",
    "translations": [
      "制造",
      "做",
      "使"
    ]
  },
  {
    "id": "word_0817",
    "word": "mall",
    "phonetic": "mɔːl",
    "translation": "商场",
    "translations": [
      "商场",
      "购物中心"
    ]
  },
  {
    "id": "word_0818",
    "word": "man",
    "phonetic": "mæn",
    "translation": "成年男子",
    "translations": [
      "成年男子",
      "人类"
    ]
  },
  {
    "id": "word_0819",
    "word": "manage",
    "phonetic": "'mænɪdʒ",
    "translation": "管理",
    "translations": [
      "管理",
      "设法完成",
      "应付"
    ]
  },
  {
    "id": "word_0820",
    "word": "manner",
    "phonetic": "'mænə(r)",
    "translation": "方式",
    "translations": [
      "方式",
      "方法",
      "礼貌",
      "礼仪"
    ]
  },
  {
    "id": "word_0821",
    "word": "many",
    "phonetic": "'meni",
    "translation": "许多",
    "translations": [
      "许多",
      "许多的"
    ]
  },
  {
    "id": "word_0822",
    "word": "map",
    "phonetic": "mæp",
    "translation": "地图",
    "translations": [
      "地图"
    ]
  },
  {
    "id": "word_0823",
    "word": "mark",
    "phonetic": "mɑːk",
    "translation": "分数",
    "translations": [
      "分数",
      "标记",
      "做记号",
      "表明",
      "打分"
    ]
  },
  {
    "id": "word_0824",
    "word": "market",
    "phonetic": "'mɑːkɪt",
    "translation": "市场",
    "translations": [
      "市场",
      "集市"
    ]
  },
  {
    "id": "word_0825",
    "word": "marry",
    "phonetic": "'mæri",
    "translation": "结婚",
    "translations": [
      "结婚",
      "嫁",
      "娶",
      "嫁娶"
    ]
  },
  {
    "id": "word_0826",
    "word": "master",
    "phonetic": "mɑːstə(r)",
    "translation": "大师",
    "translations": [
      "大师",
      "能手",
      "主人",
      "掌握",
      "专家",
      "精通"
    ]
  },
  {
    "id": "word_0827",
    "word": "match",
    "phonetic": "mætʃ",
    "translation": "比赛",
    "translations": [
      "比赛",
      "竞赛",
      "火柴",
      "相配",
      "般配"
    ]
  },
  {
    "id": "word_0828",
    "word": "material",
    "phonetic": "mə'tɪəriəl",
    "translation": "材料",
    "translations": [
      "材料",
      "原料"
    ]
  },
  {
    "id": "word_0829",
    "word": "maths",
    "phonetic": "mæθ",
    "translation": "数学",
    "translations": [
      "数学"
    ]
  },
  {
    "id": "word_0830",
    "word": "matter",
    "phonetic": "'mætə(r)",
    "translation": "问题",
    "translations": [
      "问题",
      "事情",
      "要紧",
      "有重大影响"
    ]
  },
  {
    "id": "word_0831",
    "word": "may",
    "phonetic": "meɪ",
    "translation": "．可能",
    "translations": [
      "．可能",
      "也许"
    ]
  },
  {
    "id": "word_0832",
    "word": "maybe",
    "phonetic": "'meɪbi",
    "translation": "可能，大概，也许",
    "translations": [
      "可能，大概，也许"
    ]
  },
  {
    "id": "word_0833",
    "word": "me",
    "phonetic": "miː",
    "translation": "我",
    "translations": [
      "我"
    ]
  },
  {
    "id": "word_0834",
    "word": "meal",
    "phonetic": "miːl",
    "translation": "餐",
    "translations": [
      "餐",
      "一顿饭"
    ]
  },
  {
    "id": "word_0835",
    "word": "mean",
    "phonetic": "miːn",
    "translation": "意思是",
    "translations": [
      "意思是",
      "打算",
      "意欲",
      "吝啬的"
    ]
  },
  {
    "id": "word_0836",
    "word": "meaning",
    "phonetic": "'miːnɪ ",
    "translation": "意思",
    "translations": [
      "意思",
      "意义"
    ]
  },
  {
    "id": "word_0837",
    "word": "meat",
    "phonetic": "miːt",
    "translation": "肉",
    "translations": [
      "肉"
    ]
  },
  {
    "id": "word_0838",
    "word": "medal",
    "phonetic": "'medl",
    "translation": "奖牌",
    "translations": [
      "奖牌",
      "奖章",
      "勋章",
      "纪念章"
    ]
  },
  {
    "id": "word_0839",
    "word": "medical",
    "phonetic": "'medɪkl",
    "translation": "医疗的",
    "translations": [
      "医疗的"
    ]
  },
  {
    "id": "word_0840",
    "word": "medicine",
    "phonetic": " 'medsn",
    "translation": "药",
    "translations": [
      "药",
      "医学"
    ]
  },
  {
    "id": "word_0841",
    "word": "medium",
    "phonetic": " 'miːdiəm",
    "translation": "中等的 n．媒介",
    "translations": [
      "中等的 n．媒介"
    ]
  },
  {
    "id": "word_0842",
    "word": "meet",
    "phonetic": "miːt",
    "translation": "遇见",
    "translations": [
      "遇见",
      "会面",
      "集合"
    ]
  },
  {
    "id": "word_0843",
    "word": "meeting",
    "phonetic": "'miːtɪ ",
    "translation": "会议",
    "translations": [
      "会议",
      "集会"
    ]
  },
  {
    "id": "word_0844",
    "word": "member",
    "phonetic": "'membə(r)",
    "translation": "成员",
    "translations": [
      "成员",
      "会员"
    ]
  },
  {
    "id": "word_0845",
    "word": "mention",
    "phonetic": "'menʃn",
    "translation": "提到",
    "translations": [
      "提到",
      "写到",
      "说到"
    ]
  },
  {
    "id": "word_0846",
    "word": "menu",
    "phonetic": "'menjuː",
    "translation": "菜单",
    "translations": [
      "菜单"
    ]
  },
  {
    "id": "word_0847",
    "word": "mess",
    "phonetic": "mes",
    "translation": "杂乱",
    "translations": [
      "杂乱",
      "不整洁",
      "混乱"
    ]
  },
  {
    "id": "word_0848",
    "word": "message",
    "phonetic": "'mesɪdʒ",
    "translation": "消息",
    "translations": [
      "消息",
      "音信"
    ]
  },
  {
    "id": "word_0849",
    "word": "method",
    "phonetic": "'meθəd",
    "translation": "方法",
    "translations": [
      "方法",
      "办法"
    ]
  },
  {
    "id": "word_0850",
    "word": "metre",
    "phonetic": "'miːtə(r)",
    "translation": "米",
    "translations": [
      "米",
      "公尺"
    ]
  },
  {
    "id": "word_0851",
    "word": "middle",
    "phonetic": "'mɪdl",
    "translation": "中间",
    "translations": [
      "中间",
      "中部",
      "中间的"
    ]
  },
  {
    "id": "word_0852",
    "word": "might",
    "phonetic": "maɪt",
    "translation": "．可能",
    "translations": [
      "．可能",
      "可以"
    ]
  },
  {
    "id": "word_0853",
    "word": "mile",
    "phonetic": "maɪl",
    "translation": "英里",
    "translations": [
      "英里"
    ]
  },
  {
    "id": "word_0854",
    "word": "milk",
    "phonetic": "mɪlk",
    "translation": "奶 v．挤奶",
    "translations": [
      "奶 v．挤奶"
    ]
  },
  {
    "id": "word_0855",
    "word": "mind",
    "phonetic": "maɪnd",
    "translation": "头脑",
    "translations": [
      "头脑",
      "心思 v． 介意"
    ]
  },
  {
    "id": "word_0856",
    "word": "mine",
    "phonetic": "maɪn",
    "translation": "我的",
    "translations": [
      "我的"
    ]
  },
  {
    "id": "word_0857",
    "word": "minute",
    "phonetic": "'mɪnɪt",
    "translation": "分钟",
    "translations": [
      "分钟",
      "一会儿"
    ]
  },
  {
    "id": "word_0858",
    "word": "mirror",
    "phonetic": "'mɪrə(r)",
    "translation": "镜子",
    "translations": [
      "镜子"
    ]
  },
  {
    "id": "word_0859",
    "word": "miss",
    "phonetic": "mɪs",
    "translation": "错过",
    "translations": [
      "错过",
      "思念"
    ]
  },
  {
    "id": "word_0860",
    "word": "Miss",
    "phonetic": "mɪs",
    "translation": "小姐",
    "translations": [
      "小姐",
      "女士"
    ]
  },
  {
    "id": "word_0861",
    "word": "mistake",
    "phonetic": "mɪ'steɪk",
    "translation": "误会",
    "translations": [
      "误会",
      "误解",
      "．错误"
    ]
  },
  {
    "id": "word_0862",
    "word": "mix",
    "phonetic": "mɪks",
    "translation": "混合料",
    "translations": [
      "混合料",
      "配料",
      "融合"
    ]
  },
  {
    "id": "word_0863",
    "word": "mobile",
    "phonetic": "'məʊbaɪl",
    "translation": "可移动的",
    "translations": [
      "可移动的",
      "非固定",
      "移动的"
    ]
  },
  {
    "id": "word_0864",
    "word": "model",
    "phonetic": "'mɒdl",
    "translation": "模型",
    "translations": [
      "模型",
      "范例",
      "模特儿"
    ]
  },
  {
    "id": "word_0865",
    "word": "modern",
    "phonetic": "'mɒdn",
    "translation": "现代的",
    "translations": [
      "现代的"
    ]
  },
  {
    "id": "word_0866",
    "word": "moment",
    "phonetic": "'məʊmənt",
    "translation": "时刻",
    "translations": [
      "时刻",
      "片刻"
    ]
  },
  {
    "id": "word_0867",
    "word": "money",
    "phonetic": "'mʌni",
    "translation": "钱",
    "translations": [
      "钱"
    ]
  },
  {
    "id": "word_0868",
    "word": "monkey",
    "phonetic": "'mʌ ki",
    "translation": "猴子",
    "translations": [
      "猴子"
    ]
  },
  {
    "id": "word_0869",
    "word": "month",
    "phonetic": "mʌnθ",
    "translation": "月",
    "translations": [
      "月",
      "月份"
    ]
  },
  {
    "id": "word_0870",
    "word": "moon",
    "phonetic": "muːn",
    "translation": "月球",
    "translations": [
      "月球",
      "月亮"
    ]
  },
  {
    "id": "word_0871",
    "word": "more",
    "phonetic": "mɔː(r)",
    "translation": "更多的",
    "translations": [
      "更多的",
      "更多"
    ]
  },
  {
    "id": "word_0872",
    "word": "morning",
    "phonetic": "'mɔːnɪ ",
    "translation": "早晨",
    "translations": [
      "早晨",
      "上午"
    ]
  },
  {
    "id": "word_0873",
    "word": "most",
    "phonetic": "məʊst",
    "translation": "最",
    "translations": [
      "最",
      "大多数",
      "最多"
    ]
  },
  {
    "id": "word_0874",
    "word": "mother",
    "phonetic": "'mʌðə(r)",
    "translation": "母亲",
    "translations": [
      "母亲"
    ]
  },
  {
    "id": "word_0875",
    "word": "mountain",
    "phonetic": "'maʊntən",
    "translation": "高山",
    "translations": [
      "高山"
    ]
  },
  {
    "id": "word_0876",
    "word": "mouse",
    "phonetic": "maʊs",
    "translation": "老鼠",
    "translations": [
      "老鼠",
      "耗子",
      "鼠标"
    ]
  },
  {
    "id": "word_0877",
    "word": "mouth",
    "phonetic": "maʊθ",
    "translation": "嘴",
    "translations": [
      "嘴",
      "口"
    ]
  },
  {
    "id": "word_0878",
    "word": "move",
    "phonetic": "muːv",
    "translation": "移动",
    "translations": [
      "移动",
      "搬家",
      "使感动"
    ]
  },
  {
    "id": "word_0879",
    "word": "movie",
    "phonetic": "'muːvi",
    "translation": "电影",
    "translations": [
      "电影",
      "电影院"
    ]
  },
  {
    "id": "word_0880",
    "word": "Mr",
    "phonetic": "'mɪstə(r)",
    "translation": "先生",
    "translations": [
      "先生"
    ]
  },
  {
    "id": "word_0881",
    "word": "Mrs",
    "phonetic": "'mɪsɪz",
    "translation": "夫人，太太",
    "translations": [
      "夫人，太太"
    ]
  },
  {
    "id": "word_0882",
    "word": "Ms",
    "phonetic": "mɪz",
    "translation": "女士",
    "translations": [
      "女士"
    ]
  },
  {
    "id": "word_0883",
    "word": "much",
    "phonetic": "mʌtʃ",
    "translation": "许多",
    "translations": [
      "许多",
      "非常",
      "十分"
    ]
  },
  {
    "id": "word_0884",
    "word": "museum",
    "phonetic": "mju'ziːəm",
    "translation": "博物馆",
    "translations": [
      "博物馆"
    ]
  },
  {
    "id": "word_0885",
    "word": "music",
    "phonetic": "'mjuːzɪk",
    "translation": "音乐",
    "translations": [
      "音乐",
      "乐曲"
    ]
  },
  {
    "id": "word_0886",
    "word": "must",
    "phonetic": "mʌst",
    "translation": "．",
    "translations": [
      "．"
    ]
  },
  {
    "id": "word_0887",
    "word": "mutton",
    "phonetic": "'mʌtn",
    "translation": "羊肉",
    "translations": [
      "羊肉"
    ]
  },
  {
    "id": "word_0888",
    "word": "my",
    "phonetic": "maɪ",
    "translation": "我的",
    "translations": [
      "我的"
    ]
  },
  {
    "id": "word_0889",
    "word": "myself",
    "phonetic": "maɪ'self",
    "translation": "我自己",
    "translations": [
      "我自己"
    ]
  },
  {
    "id": "word_0890",
    "word": "name",
    "phonetic": "neɪm",
    "translation": "名字",
    "translations": [
      "名字",
      "名称",
      "命名",
      "给……取名"
    ]
  },
  {
    "id": "word_0891",
    "word": "narrow",
    "phonetic": "'nærəʊ",
    "translation": "狭窄的",
    "translations": [
      "狭窄的",
      "狭隘的"
    ]
  },
  {
    "id": "word_0892",
    "word": "nation",
    "phonetic": "'neɪʃ(ə)n",
    "translation": "国家",
    "translations": [
      "国家",
      "民族",
      "民族的"
    ]
  },
  {
    "id": "word_0893",
    "word": "nature",
    "phonetic": "'neɪtʃə(r)",
    "translation": "大自然",
    "translations": [
      "大自然",
      "自然界",
      "本性"
    ]
  },
  {
    "id": "word_0894",
    "word": "near",
    "phonetic": "nɪə(r)",
    "translation": "在……附近",
    "translations": [
      "在……附近",
      "邻近的",
      "在附近",
      "不远"
    ]
  },
  {
    "id": "word_0895",
    "word": "nearly",
    "phonetic": "'nɪəli",
    "translation": "将近",
    "translations": [
      "将近",
      "几乎",
      "差不多"
    ]
  },
  {
    "id": "word_0896",
    "word": "necessary",
    "phonetic": "'nesəsəri",
    "translation": "必需的",
    "translations": [
      "必需的",
      "必要的"
    ]
  },
  {
    "id": "word_0897",
    "word": "neck",
    "phonetic": "nek",
    "translation": "颈",
    "translations": [
      "颈",
      "脖子"
    ]
  },
  {
    "id": "word_0898",
    "word": "need",
    "phonetic": "niːd",
    "translation": "需要",
    "translations": [
      "需要",
      "eed"
    ]
  },
  {
    "id": "word_0899",
    "word": "negative",
    "phonetic": "'neɡətɪv",
    "translation": "负面的",
    "translations": [
      "负面的",
      "消极的",
      "否定的"
    ]
  },
  {
    "id": "word_0900",
    "word": "neighbour",
    "phonetic": "'neɪbə(r)",
    "translation": "邻居",
    "translations": [
      "邻居",
      "城区",
      "某街区"
    ]
  },
  {
    "id": "word_0901",
    "word": "neither",
    "phonetic": "'naɪðə(r)",
    "translation": "两者都不adv.也不",
    "translations": [
      "两者都不adv.也不"
    ]
  },
  {
    "id": "word_0902",
    "word": "nervous",
    "phonetic": "'nɜːvəs",
    "translation": "焦虑的",
    "translations": [
      "焦虑的",
      "担忧的"
    ]
  },
  {
    "id": "word_0903",
    "word": "never",
    "phonetic": "'nevə(r)",
    "translation": "绝不",
    "translations": [
      "绝不",
      "从未"
    ]
  },
  {
    "id": "word_0904",
    "word": "new",
    "phonetic": "njuː",
    "translation": "新的",
    "translations": [
      "新的",
      "新鲜的",
      "刚出现的"
    ]
  },
  {
    "id": "word_0905",
    "word": "news",
    "phonetic": "njuːz",
    "translation": "新闻",
    "translations": [
      "新闻",
      "消息"
    ]
  },
  {
    "id": "word_0906",
    "word": "newspaper",
    "phonetic": "'njuːzpeɪpə(r)",
    "translation": "报纸",
    "translations": [
      "报纸"
    ]
  },
  {
    "id": "word_0907",
    "word": "next",
    "phonetic": "nekst",
    "translation": "下一个的",
    "translations": [
      "下一个的",
      "紧接着的",
      "紧接着",
      "在……旁边"
    ]
  },
  {
    "id": "word_0908",
    "word": "nice",
    "phonetic": "naɪs",
    "translation": "令人愉快的",
    "translations": [
      "令人愉快的",
      "宜人的",
      "友好的"
    ]
  },
  {
    "id": "word_0909",
    "word": "night",
    "phonetic": "naɪt",
    "translation": "夜",
    "translations": [
      "夜",
      "夜晚"
    ]
  },
  {
    "id": "word_0910",
    "word": "no",
    "phonetic": "nəʊ",
    "translation": "不",
    "translations": [
      "不",
      "没有",
      "不是"
    ]
  },
  {
    "id": "word_0911",
    "word": "nobody",
    "phonetic": "'nəʊbədi",
    "translation": "没有人n.小人物",
    "translations": [
      "没有人n.小人物"
    ]
  },
  {
    "id": "word_0912",
    "word": "nod",
    "phonetic": "nɒd",
    "translation": "点头",
    "translations": [
      "点头"
    ]
  },
  {
    "id": "word_0913",
    "word": "noise",
    "phonetic": "nɔɪz",
    "translation": "声音",
    "translations": [
      "声音",
      "噪声",
      "吵闹声"
    ]
  },
  {
    "id": "word_0914",
    "word": "none",
    "phonetic": "nʌn",
    "translation": "没有一个",
    "translations": [
      "没有一个",
      "毫无"
    ]
  },
  {
    "id": "word_0915",
    "word": "noodle",
    "phonetic": "'nuːdl",
    "translation": "面条",
    "translations": [
      "面条"
    ]
  },
  {
    "id": "word_0916",
    "word": "noon",
    "phonetic": "nuːn",
    "translation": "中午",
    "translations": [
      "中午",
      "正午"
    ]
  },
  {
    "id": "word_0917",
    "word": "nor",
    "phonetic": "nɔː(r)",
    "translation": "也不",
    "translations": [
      "也不"
    ]
  },
  {
    "id": "word_0918",
    "word": "normal",
    "phonetic": "'nɔːm(ə)l",
    "translation": "正常的",
    "translations": [
      "正常的",
      "一般的",
      "一般地"
    ]
  },
  {
    "id": "word_0919",
    "word": "north",
    "phonetic": "nɔːθ",
    "translation": "北方的",
    "translations": [
      "北方的",
      "向北的",
      "北方",
      "向北，朝北"
    ]
  },
  {
    "id": "word_0920",
    "word": "nose",
    "phonetic": "nəʊz",
    "translation": "鼻子",
    "translations": [
      "鼻子"
    ]
  },
  {
    "id": "word_0921",
    "word": "not",
    "phonetic": "nɒt",
    "translation": "不，没有",
    "translations": [
      "不，没有",
      "根本不"
    ]
  },
  {
    "id": "word_0922",
    "word": "note",
    "phonetic": "nəʊt",
    "translation": "笔记",
    "translations": [
      "笔记",
      "记录",
      "注释",
      "便条",
      "指出"
    ]
  },
  {
    "id": "word_0923",
    "word": "notebook",
    "phonetic": "'nəʊtbʊk",
    "translation": "笔记本",
    "translations": [
      "笔记本"
    ]
  },
  {
    "id": "word_0924",
    "word": "nothing",
    "phonetic": "'nʌθɪ ",
    "translation": "没有一件东西",
    "translations": [
      "没有一件东西",
      "没有什么"
    ]
  },
  {
    "id": "word_0925",
    "word": "notice",
    "phonetic": "'nəʊtɪs",
    "translation": "布告",
    "translations": [
      "布告",
      "通告",
      "注意",
      "注意到",
      "意识到"
    ]
  },
  {
    "id": "word_0926",
    "word": "novel",
    "phonetic": "'nɒv(ə)l",
    "translation": "小说",
    "translations": [
      "小说"
    ]
  },
  {
    "id": "word_0927",
    "word": "now",
    "phonetic": "naʊ",
    "translation": "现在",
    "translations": [
      "现在"
    ]
  },
  {
    "id": "word_0928",
    "word": "number",
    "phonetic": "'nʌmbə(r)",
    "translation": "数",
    "translations": [
      "数",
      "数字",
      "号码",
      "数量"
    ]
  },
  {
    "id": "word_0929",
    "word": "nurse",
    "phonetic": "nɜːs",
    "translation": "护士",
    "translations": [
      "护士",
      "女保育员"
    ]
  },
  {
    "id": "word_0930",
    "word": "object",
    "phonetic": "əb'dʒekt",
    "translation": "物体",
    "translations": [
      "物体",
      "宾语 v．反对"
    ]
  },
  {
    "id": "word_0931",
    "word": "ocean",
    "phonetic": "'əʊʃ(ə)n",
    "translation": "大海",
    "translations": [
      "大海",
      "海洋"
    ]
  },
  {
    "id": "word_0932",
    "word": "of",
    "phonetic": "ɒv",
    "translation": "属于",
    "translations": [
      "属于",
      "关于"
    ]
  },
  {
    "id": "word_0933",
    "word": "off",
    "phonetic": "ɒf",
    "translation": "离开",
    "translations": [
      "离开",
      "不工作",
      "从"
    ]
  },
  {
    "id": "word_0934",
    "word": "offer",
    "phonetic": "'ɒfə(r)",
    "translation": "主动提出",
    "translations": [
      "主动提出",
      "提供"
    ]
  },
  {
    "id": "word_0935",
    "word": "office",
    "phonetic": "'ɒfɪs",
    "translation": "办公室",
    "translations": [
      "办公室",
      "要员",
      "官员",
      "高级职员"
    ]
  },
  {
    "id": "word_0936",
    "word": "officer",
    "phonetic": "'ɒfɪsə(r)",
    "translation": "军官",
    "translations": [
      "军官",
      "官员",
      "警官"
    ]
  },
  {
    "id": "word_0937",
    "word": "often",
    "phonetic": "'ɒfn",
    "translation": "经常",
    "translations": [
      "经常",
      "常常"
    ]
  },
  {
    "id": "word_0938",
    "word": "oil",
    "phonetic": "ɔɪl",
    "translation": "石油",
    "translations": [
      "石油",
      "油",
      "食用油"
    ]
  },
  {
    "id": "word_0939",
    "word": "OK",
    "phonetic": "əʊ'keɪ",
    "translation": "对",
    "translations": [
      "对"
    ]
  },
  {
    "id": "word_0940",
    "word": "old",
    "phonetic": "əʊld",
    "translation": "老的",
    "translations": [
      "老的",
      "旧的"
    ]
  },
  {
    "id": "word_0941",
    "word": "Olympic",
    "phonetic": "ə'lɪmpɪk",
    "translation": "奥林匹克运动会的",
    "translations": [
      "奥林匹克运动会的"
    ]
  },
  {
    "id": "word_0942",
    "word": "on",
    "phonetic": "ɒn",
    "translation": "在……上",
    "translations": [
      "在……上",
      "关于"
    ]
  },
  {
    "id": "word_0943",
    "word": "once",
    "phonetic": "wʌns",
    "translation": "一次",
    "translations": [
      "一次",
      "曾经"
    ]
  },
  {
    "id": "word_0944",
    "word": "onion",
    "phonetic": "'ʌnjən",
    "translation": "洋葱",
    "translations": [
      "洋葱"
    ]
  },
  {
    "id": "word_0945",
    "word": "online",
    "phonetic": "ˌɒn'laɪn",
    "translation": "在线的",
    "translations": [
      "在线的"
    ]
  },
  {
    "id": "word_0946",
    "word": "only",
    "phonetic": "'əʊnli",
    "translation": "仅仅",
    "translations": [
      "仅仅",
      "只"
    ]
  },
  {
    "id": "word_0947",
    "word": "open",
    "phonetic": "'əʊpən",
    "translation": "开着的",
    "translations": [
      "开着的",
      "开放的",
      "．开",
      "打开"
    ]
  },
  {
    "id": "word_0948",
    "word": "opera",
    "phonetic": "'ɒp(ə)rə",
    "translation": "歌剧",
    "translations": [
      "歌剧"
    ]
  },
  {
    "id": "word_0949",
    "word": "operate",
    "phonetic": "'ɒpəreɪt",
    "translation": "运转",
    "translations": [
      "运转",
      "经营",
      "做手术"
    ]
  },
  {
    "id": "word_0950",
    "word": "opinion",
    "phonetic": "ə'pɪnjən",
    "translation": "意见",
    "translations": [
      "意见",
      "想法",
      "看法"
    ]
  },
  {
    "id": "word_0951",
    "word": "opposite",
    "phonetic": "'ɒpəzɪt",
    "translation": "与……相对",
    "translations": [
      "与……相对",
      "在……"
    ]
  },
  {
    "id": "word_0952",
    "word": "or",
    "phonetic": "ɔː(r)",
    "translation": "或",
    "translations": [
      "或",
      "否则"
    ]
  },
  {
    "id": "word_0953",
    "word": "orange",
    "phonetic": "'ɒrɪndʒ",
    "translation": "橙子",
    "translations": [
      "橙子",
      "橙汁",
      "橙红色的"
    ]
  },
  {
    "id": "word_0954",
    "word": "order",
    "phonetic": "'ɔːdə(r)",
    "translation": "订购",
    "translations": [
      "订购",
      "命令",
      "点菜 n．命令",
      "顺序"
    ]
  },
  {
    "id": "word_0955",
    "word": "organise",
    "phonetic": "'ɔːɡənaɪz",
    "translation": "组织",
    "translations": [
      "组织",
      "筹备"
    ]
  },
  {
    "id": "word_0956",
    "word": "other",
    "phonetic": "'ʌðə(r)",
    "translation": "另外",
    "translations": [
      "另外",
      "其他"
    ]
  },
  {
    "id": "word_0957",
    "word": "our",
    "phonetic": "'aʊə(r)",
    "translation": "我们的",
    "translations": [
      "我们的"
    ]
  },
  {
    "id": "word_0958",
    "word": "ours",
    "phonetic": "'aʊəz",
    "translation": "我们的",
    "translations": [
      "我们的"
    ]
  },
  {
    "id": "word_0959",
    "word": "ourselves",
    "phonetic": "ˌaʊə'selvz",
    "translation": "我们自己",
    "translations": [
      "我们自己"
    ]
  },
  {
    "id": "word_0960",
    "word": "out",
    "phonetic": "aʊt",
    "translation": "外面",
    "translations": [
      "外面",
      "外出的"
    ]
  },
  {
    "id": "word_0961",
    "word": "outside",
    "phonetic": "ˌaʊt'saɪd",
    "translation": "在……外面",
    "translations": [
      "在……外面"
    ]
  },
  {
    "id": "word_0962",
    "word": "oven",
    "phonetic": "'ʌv(ə)n",
    "translation": "烤箱",
    "translations": [
      "烤箱",
      "烤炉"
    ]
  },
  {
    "id": "word_0963",
    "word": "over",
    "phonetic": "'əʊvə(r)",
    "translation": "在……上面",
    "translations": [
      "在……上面",
      "越过"
    ]
  },
  {
    "id": "word_0964",
    "word": "own",
    "phonetic": "əʊn",
    "translation": "自己的 v．拥",
    "translations": [
      "自己的 v．拥"
    ]
  },
  {
    "id": "word_0965",
    "word": "pack",
    "phonetic": "pæk",
    "translation": "包装",
    "translations": [
      "包装",
      "装箱"
    ]
  },
  {
    "id": "word_0966",
    "word": "packet",
    "phonetic": "'pækɪt",
    "translation": "包装盒",
    "translations": [
      "包装盒",
      "小包裹"
    ]
  },
  {
    "id": "word_0967",
    "word": "page",
    "phonetic": "peɪdʒ",
    "translation": "面",
    "translations": [
      "面"
    ]
  },
  {
    "id": "word_0968",
    "word": "pain",
    "phonetic": "peɪn",
    "translation": "痛苦",
    "translations": [
      "痛苦",
      "疼痛",
      "苦恼"
    ]
  },
  {
    "id": "word_0969",
    "word": "paint",
    "phonetic": "peɪnt",
    "translation": "．用颜料画",
    "translations": [
      "．用颜料画"
    ]
  },
  {
    "id": "word_0970",
    "word": "pair",
    "phonetic": "peə(r)",
    "translation": "一双",
    "translations": [
      "一双",
      "一对"
    ]
  },
  {
    "id": "word_0971",
    "word": "palace",
    "phonetic": "'pæləs",
    "translation": "王宫",
    "translations": [
      "王宫",
      "宫殿"
    ]
  },
  {
    "id": "word_0972",
    "word": "pale",
    "phonetic": "peɪl",
    "translation": "苍白的",
    "translations": [
      "苍白的",
      "灰白的"
    ]
  },
  {
    "id": "word_0973",
    "word": "pancake",
    "phonetic": "'pænkeɪk",
    "translation": "薄饼",
    "translations": [
      "薄饼",
      "烙饼",
      "薄煎饼"
    ]
  },
  {
    "id": "word_0974",
    "word": "panda",
    "phonetic": "'pændə",
    "translation": "熊猫",
    "translations": [
      "熊猫"
    ]
  },
  {
    "id": "word_0975",
    "word": "paper",
    "phonetic": "'peɪpə(r)",
    "translation": "纸",
    "translations": [
      "纸",
      "报纸",
      "文件",
      "论文"
    ]
  },
  {
    "id": "word_0976",
    "word": "paragraph",
    "phonetic": "'pærəɡrɑːf",
    "translation": "段落",
    "translations": [
      "段落"
    ]
  },
  {
    "id": "word_0977",
    "word": "pardon",
    "phonetic": "'pɑːdn",
    "translation": "．原谅",
    "translations": [
      "．原谅",
      "宽恕",
      "原谅/饶恕"
    ]
  },
  {
    "id": "word_0978",
    "word": "parent",
    "phonetic": "'peərənt",
    "translation": "父",
    "translations": [
      "父"
    ]
  },
  {
    "id": "word_0979",
    "word": "park",
    "phonetic": "pɑːk",
    "translation": "公园",
    "translations": [
      "公园",
      "停车场 v．停"
    ]
  },
  {
    "id": "word_0980",
    "word": "part",
    "phonetic": "pɑːt",
    "translation": "部分",
    "translations": [
      "部分",
      "片段",
      "部位"
    ]
  },
  {
    "id": "word_0981",
    "word": "partner",
    "phonetic": "'pɑːtnə(r)",
    "translation": "搭档",
    "translations": [
      "搭档",
      "同伴"
    ]
  },
  {
    "id": "word_0982",
    "word": "party",
    "phonetic": "'pɑːti",
    "translation": "聚会",
    "translations": [
      "聚会",
      "宴会",
      "党派"
    ]
  },
  {
    "id": "word_0983",
    "word": "pass",
    "phonetic": "pɑːs",
    "translation": "给",
    "translations": [
      "给",
      "递",
      "走过",
      "通过"
    ]
  },
  {
    "id": "word_0984",
    "word": "passage",
    "phonetic": "'pæsɪdʒ",
    "translation": "章节",
    "translations": [
      "章节",
      "段落",
      "通道"
    ]
  },
  {
    "id": "word_0985",
    "word": "passenger",
    "phonetic": "'pæsɪndʒə(r)",
    "translation": "乘客",
    "translations": [
      "乘客",
      "旅客"
    ]
  },
  {
    "id": "word_0986",
    "word": "passport",
    "phonetic": "'pɑːspɔːt",
    "translation": "护照",
    "translations": [
      "护照"
    ]
  },
  {
    "id": "word_0987",
    "word": "past",
    "phonetic": "pɑːst",
    "translation": "在……之后",
    "translations": [
      "在……之后",
      "过去",
      "昔日"
    ]
  },
  {
    "id": "word_0988",
    "word": "patient",
    "phonetic": "'peɪʃnt",
    "translation": "病人 adj.耐心的",
    "translations": [
      "病人 adj.耐心的"
    ]
  },
  {
    "id": "word_0989",
    "word": "pay",
    "phonetic": "peɪ",
    "translation": "付费",
    "translations": [
      "付费",
      "付代价",
      "工资"
    ]
  },
  {
    "id": "word_0990",
    "word": "peace",
    "phonetic": "piːs",
    "translation": "和平",
    "translations": [
      "和平"
    ]
  },
  {
    "id": "word_0991",
    "word": "pear",
    "phonetic": "peə(r)",
    "translation": "梨",
    "translations": [
      "梨"
    ]
  },
  {
    "id": "word_0992",
    "word": "pen",
    "phonetic": "pen",
    "translation": "钢笔",
    "translations": [
      "钢笔",
      "笔"
    ]
  },
  {
    "id": "word_0993",
    "word": "pencil",
    "phonetic": "'pensl",
    "translation": "铅笔",
    "translations": [
      "铅笔"
    ]
  },
  {
    "id": "word_0994",
    "word": "penguin",
    "phonetic": "'pe ɡwɪn",
    "translation": "企鹅",
    "translations": [
      "企鹅"
    ]
  },
  {
    "id": "word_0995",
    "word": "people",
    "phonetic": "'piːpl",
    "translation": "人",
    "translations": [
      "人",
      "人们",
      "人民",
      "民"
    ]
  },
  {
    "id": "word_0996",
    "word": "pepper",
    "phonetic": "'pepə(r)",
    "translation": "胡椒粉",
    "translations": [
      "胡椒粉",
      "柿子椒",
      "胡椒"
    ]
  },
  {
    "id": "word_0997",
    "word": "percent",
    "phonetic": "pə'sent",
    "translation": "百分之……",
    "translations": [
      "百分之……"
    ]
  },
  {
    "id": "word_0998",
    "word": "perfect",
    "phonetic": "'pɜːfɪkt",
    "translation": "完美的",
    "translations": [
      "完美的",
      "极好的"
    ]
  },
  {
    "id": "word_0999",
    "word": "perform",
    "phonetic": "pə'fɔːm",
    "translation": "表演",
    "translations": [
      "表演",
      "执行"
    ]
  },
  {
    "id": "word_1000",
    "word": "performance",
    "phonetic": "",
    "translation": "演出",
    "translations": [
      "演出",
      "执行",
      "性能"
    ]
  },
  {
    "id": "word_1001",
    "word": "perhaps",
    "phonetic": "pə'hæps",
    "translation": "可能",
    "translations": [
      "可能",
      "也许"
    ]
  },
  {
    "id": "word_1002",
    "word": "period",
    "phonetic": "'pɪəriəd",
    "translation": "一段时间",
    "translations": [
      "一段时间",
      "时期"
    ]
  },
  {
    "id": "word_1003",
    "word": "person",
    "phonetic": "'pɜːs(ə)n",
    "translation": "人",
    "translations": [
      "人"
    ]
  },
  {
    "id": "word_1004",
    "word": "personal",
    "phonetic": "'pɜːsənl",
    "translation": "个人的",
    "translations": [
      "个人的",
      "私人的"
    ]
  },
  {
    "id": "word_1005",
    "word": "pet",
    "phonetic": "pet",
    "translation": "宠物",
    "translations": [
      "宠物"
    ]
  },
  {
    "id": "word_1006",
    "word": "phone",
    "phonetic": "fəʊn",
    "translation": "打电话",
    "translations": [
      "打电话",
      "．电话",
      "电话机"
    ]
  },
  {
    "id": "word_1007",
    "word": "photo",
    "phonetic": "'fəʊtəʊ",
    "translation": "照片",
    "translations": [
      "照片"
    ]
  },
  {
    "id": "word_1008",
    "word": "physics",
    "phonetic": "'fɪzɪks",
    "translation": "物理学",
    "translations": [
      "物理学"
    ]
  },
  {
    "id": "word_1009",
    "word": "piano",
    "phonetic": "pi'ænəʊ",
    "translation": "钢琴",
    "translations": [
      "钢琴"
    ]
  },
  {
    "id": "word_1010",
    "word": "pick",
    "phonetic": "pɪk",
    "translation": "采",
    "translations": [
      "采",
      "摘",
      "挑选"
    ]
  },
  {
    "id": "word_1011",
    "word": "picnic",
    "phonetic": "'pɪknɪk",
    "translation": "野餐",
    "translations": [
      "野餐"
    ]
  },
  {
    "id": "word_1012",
    "word": "picture",
    "phonetic": "'pɪktʃə(r)",
    "translation": "图画",
    "translations": [
      "图画",
      "照片"
    ]
  },
  {
    "id": "word_1013",
    "word": "pie",
    "phonetic": "paɪ",
    "translation": "果馅饼",
    "translations": [
      "果馅饼"
    ]
  },
  {
    "id": "word_1014",
    "word": "piece",
    "phonetic": "piːs",
    "translation": "块",
    "translations": [
      "块",
      "张"
    ]
  },
  {
    "id": "word_1015",
    "word": "pig",
    "phonetic": "pɪɡ",
    "translation": "猪",
    "translations": [
      "猪"
    ]
  },
  {
    "id": "word_1016",
    "word": "pill",
    "phonetic": "pɪl",
    "translation": "药丸",
    "translations": [
      "药丸"
    ]
  },
  {
    "id": "word_1017",
    "word": "pilot",
    "phonetic": "'paɪlət",
    "translation": "飞行员",
    "translations": [
      "飞行员"
    ]
  },
  {
    "id": "word_1018",
    "word": "pong",
    "phonetic": "'pɪ\tpɒ ",
    "translation": "乒乓球",
    "translations": [
      "乒乓球"
    ]
  },
  {
    "id": "word_1019",
    "word": "pink",
    "phonetic": "pɪ k",
    "translation": "粉红色的",
    "translations": [
      "粉红色的"
    ]
  },
  {
    "id": "word_1020",
    "word": "pioneer",
    "phonetic": "ˌpaɪə'nɪə(r)",
    "translation": "先锋",
    "translations": [
      "先锋",
      "开拓者"
    ]
  },
  {
    "id": "word_1021",
    "word": "pity",
    "phonetic": "'pɪti",
    "translation": "．怜悯",
    "translations": [
      "．怜悯",
      "同情"
    ]
  },
  {
    "id": "word_1022",
    "word": "pizza",
    "phonetic": "'piːtsə",
    "translation": "比萨饼",
    "translations": [
      "比萨饼"
    ]
  },
  {
    "id": "word_1023",
    "word": "place",
    "phonetic": "pleɪs",
    "translation": "地方",
    "translations": [
      "地方",
      "场所",
      "放置",
      "安置"
    ]
  },
  {
    "id": "word_1024",
    "word": "plan",
    "phonetic": "plæn",
    "translation": "．计划",
    "translations": [
      "．计划",
      "打算"
    ]
  },
  {
    "id": "word_1025",
    "word": "plane",
    "phonetic": "pleɪn",
    "translation": "飞机",
    "translations": [
      "飞机"
    ]
  },
  {
    "id": "word_1026",
    "word": "planet",
    "phonetic": "'plænɪt",
    "translation": "行星",
    "translations": [
      "行星"
    ]
  },
  {
    "id": "word_1027",
    "word": "plant",
    "phonetic": "plɑːnt",
    "translation": "种植",
    "translations": [
      "种植",
      "播种",
      "．植物"
    ]
  },
  {
    "id": "word_1028",
    "word": "plastic",
    "phonetic": "'plæstɪk",
    "translation": "塑料的",
    "translations": [
      "塑料的",
      "．塑料",
      "塑胶"
    ]
  },
  {
    "id": "word_1029",
    "word": "plate",
    "phonetic": "pleɪt",
    "translation": "盘子",
    "translations": [
      "盘子",
      "一盘"
    ]
  },
  {
    "id": "word_1030",
    "word": "play",
    "phonetic": "pleɪ",
    "translation": "玩",
    "translations": [
      "玩",
      "参加比赛",
      "演奏",
      "扮演",
      "．戏剧"
    ]
  },
  {
    "id": "word_1031",
    "word": "playground",
    "phonetic": "'pleɪɡraʊnd",
    "translation": "操场",
    "translations": [
      "操场",
      "游戏场"
    ]
  },
  {
    "id": "word_1032",
    "word": "please",
    "phonetic": "pliːz",
    "translation": "使高兴",
    "translations": [
      "使高兴",
      "使满意",
      "请"
    ]
  },
  {
    "id": "word_1033",
    "word": "pleasure",
    "phonetic": "'pleʒə(r)",
    "translation": "高兴",
    "translations": [
      "高兴",
      "愉快"
    ]
  },
  {
    "id": "word_1034",
    "word": "plenty",
    "phonetic": "'plenti",
    "translation": "很多",
    "translations": [
      "很多",
      "大量",
      "众多",
      "充足"
    ]
  },
  {
    "id": "word_1035",
    "word": "pocket",
    "phonetic": "'pɒkɪt",
    "translation": "口袋",
    "translations": [
      "口袋",
      "衣袋"
    ]
  },
  {
    "id": "word_1036",
    "word": "poem",
    "phonetic": "'pəʊɪm",
    "translation": "诗",
    "translations": [
      "诗"
    ]
  },
  {
    "id": "word_1037",
    "word": "poet",
    "phonetic": "'pəʊɪt",
    "translation": "诗人",
    "translations": [
      "诗人"
    ]
  },
  {
    "id": "word_1038",
    "word": "point",
    "phonetic": "pɔɪnt",
    "translation": "指",
    "translations": [
      "指",
      "指向 n．要点"
    ]
  },
  {
    "id": "word_1039",
    "word": "police",
    "phonetic": "pə'liːs",
    "translation": "警察",
    "translations": [
      "警察"
    ]
  },
  {
    "id": "word_1040",
    "word": "policeman",
    "phonetic": "pə'liːsmən",
    "translation": "男警察",
    "translations": [
      "男警察"
    ]
  },
  {
    "id": "word_1041",
    "word": "policewoman",
    "phonetic": "pə'liːswʊmən",
    "translation": "女警察",
    "translations": [
      "女警察"
    ]
  },
  {
    "id": "word_1042",
    "word": "polite",
    "phonetic": "pə'laɪt",
    "translation": "有礼貌的",
    "translations": [
      "有礼貌的",
      "客气的"
    ]
  },
  {
    "id": "word_1043",
    "word": "pollute",
    "phonetic": "pə'luːt",
    "translation": "污染",
    "translations": [
      "污染"
    ]
  },
  {
    "id": "word_1044",
    "word": "pool",
    "phonetic": "puːl",
    "translation": "水塘",
    "translations": [
      "水塘",
      "游泳池"
    ]
  },
  {
    "id": "word_1045",
    "word": "poor",
    "phonetic": "pɔː(r)",
    "translation": "贫穷的",
    "translations": [
      "贫穷的",
      "可怜的",
      "差"
    ]
  },
  {
    "id": "word_1046",
    "word": "popular",
    "phonetic": "'pɒpjələ(r)",
    "translation": "受欢迎的",
    "translations": [
      "受欢迎的",
      "普遍的"
    ]
  },
  {
    "id": "word_1047",
    "word": "population",
    "phonetic": "ˌpɒpju'leɪʃn",
    "translation": "人口",
    "translations": [
      "人口",
      "人口数量"
    ]
  },
  {
    "id": "word_1048",
    "word": "pork",
    "phonetic": "pɔːk",
    "translation": "猪肉",
    "translations": [
      "猪肉"
    ]
  },
  {
    "id": "word_1049",
    "word": "porridge",
    "phonetic": "'pɒrɪdʒ",
    "translation": "粥",
    "translations": [
      "粥",
      "面糊"
    ]
  },
  {
    "id": "word_1050",
    "word": "position",
    "phonetic": "pə'zɪʃn",
    "translation": "位置",
    "translations": [
      "位置",
      "地方"
    ]
  },
  {
    "id": "word_1051",
    "word": "positive",
    "phonetic": "'pɒzətɪv",
    "translation": "正面的",
    "translations": [
      "正面的",
      "积极的",
      "肯定"
    ]
  },
  {
    "id": "word_1052",
    "word": "possible",
    "phonetic": "'pɒsəbl",
    "translation": "可能的",
    "translations": [
      "可能的"
    ]
  },
  {
    "id": "word_1053",
    "word": "post",
    "phonetic": "pəʊst",
    "translation": "投寄",
    "translations": [
      "投寄",
      "邮寄",
      "邮政"
    ]
  },
  {
    "id": "word_1054",
    "word": "postcard",
    "phonetic": "'pəʊstkɑːd",
    "translation": "明信片",
    "translations": [
      "明信片"
    ]
  },
  {
    "id": "word_1055",
    "word": "postman",
    "phonetic": "'pəʊstmən",
    "translation": "邮递员",
    "translations": [
      "邮递员"
    ]
  },
  {
    "id": "word_1056",
    "word": "pot",
    "phonetic": "pɒt",
    "translation": "锅",
    "translations": [
      "锅"
    ]
  },
  {
    "id": "word_1057",
    "word": "potato",
    "phonetic": "pə'teɪtəʊ",
    "translation": "土豆",
    "translations": [
      "土豆",
      "马铃薯"
    ]
  },
  {
    "id": "word_1058",
    "word": "pound",
    "phonetic": "paʊnd",
    "translation": "磅",
    "translations": [
      "磅",
      "英镑"
    ]
  },
  {
    "id": "word_1059",
    "word": "pour",
    "phonetic": "pɔː(r)",
    "translation": "倒出",
    "translations": [
      "倒出",
      "倾倒"
    ]
  },
  {
    "id": "word_1060",
    "word": "power",
    "phonetic": "'paʊə(r)",
    "translation": "权力",
    "translations": [
      "权力",
      "力量"
    ]
  },
  {
    "id": "word_1061",
    "word": "practice",
    "phonetic": "'præktɪs",
    "translation": "．练习",
    "translations": [
      "．练习",
      "实践"
    ]
  },
  {
    "id": "word_1062",
    "word": "praise",
    "phonetic": "preɪz",
    "translation": "．赞扬",
    "translations": [
      "．赞扬",
      "表扬"
    ]
  },
  {
    "id": "word_1063",
    "word": "prefer",
    "phonetic": "prɪ'fɜː(r)",
    "translation": "更喜欢",
    "translations": [
      "更喜欢"
    ]
  },
  {
    "id": "word_1064",
    "word": "prepare",
    "phonetic": "prɪ'peə(r)",
    "translation": "准备",
    "translations": [
      "准备",
      "预备"
    ]
  },
  {
    "id": "word_1065",
    "word": "present",
    "phonetic": "prɪ'zent",
    "translation": "现在",
    "translations": [
      "现在",
      "当前的",
      "授予",
      "呈递"
    ]
  },
  {
    "id": "word_1066",
    "word": "president",
    "phonetic": "'prezɪdənt",
    "translation": "总统",
    "translations": [
      "总统",
      "主席",
      "负责人"
    ]
  },
  {
    "id": "word_1067",
    "word": "press",
    "phonetic": "pres",
    "translation": "压",
    "translations": [
      "压",
      "挤",
      "按",
      "报刊",
      "出版"
    ]
  },
  {
    "id": "word_1068",
    "word": "pressure",
    "phonetic": "'preʃə(r)",
    "translation": "压力",
    "translations": [
      "压力"
    ]
  },
  {
    "id": "word_1069",
    "word": "pretty",
    "phonetic": "'prɪti",
    "translation": "漂亮的 adv.相当",
    "translations": [
      "漂亮的 adv.相当"
    ]
  },
  {
    "id": "word_1070",
    "word": "price",
    "phonetic": "praɪs",
    "translation": "价格",
    "translations": [
      "价格",
      "价钱"
    ]
  },
  {
    "id": "word_1071",
    "word": "pride",
    "phonetic": "praɪd",
    "translation": "自豪",
    "translations": [
      "自豪",
      "骄傲",
      "自尊心"
    ]
  },
  {
    "id": "word_1072",
    "word": "primary",
    "phonetic": "'praɪməri",
    "translation": "主要的",
    "translations": [
      "主要的",
      "基本的",
      "最初"
    ]
  },
  {
    "id": "word_1073",
    "word": "prince",
    "phonetic": "prɪns",
    "translation": "王子",
    "translations": [
      "王子"
    ]
  },
  {
    "id": "word_1074",
    "word": "print",
    "phonetic": "prɪnt",
    "translation": "印刷",
    "translations": [
      "印刷",
      "打印"
    ]
  },
  {
    "id": "word_1075",
    "word": "private",
    "phonetic": "'praɪvət",
    "translation": "私人的",
    "translations": [
      "私人的",
      "私有的"
    ]
  },
  {
    "id": "word_1076",
    "word": "prize",
    "phonetic": "praɪz",
    "translation": "奖赏",
    "translations": [
      "奖赏",
      "奖品",
      "奖金"
    ]
  },
  {
    "id": "word_1077",
    "word": "probably",
    "phonetic": "'prɒbəbli",
    "translation": "很可能",
    "translations": [
      "很可能",
      "大概"
    ]
  },
  {
    "id": "word_1078",
    "word": "problem",
    "phonetic": "'prɒbləm",
    "translation": "难题",
    "translations": [
      "难题",
      "困难"
    ]
  },
  {
    "id": "word_1079",
    "word": "produce",
    "phonetic": "prə'djuːs",
    "translation": "生产",
    "translations": [
      "生产",
      "制造"
    ]
  },
  {
    "id": "word_1080",
    "word": "product",
    "phonetic": "'prɒdʌkt",
    "translation": "产品",
    "translations": [
      "产品",
      "制品"
    ]
  },
  {
    "id": "word_1081",
    "word": "programme",
    "phonetic": "'prəʊɡræm",
    "translation": "节目",
    "translations": [
      "节目",
      "计划",
      "程序"
    ]
  },
  {
    "id": "word_1082",
    "word": "progress",
    "phonetic": "'prəʊɡres",
    "translation": "．进步",
    "translations": [
      "．进步",
      "进展"
    ]
  },
  {
    "id": "word_1083",
    "word": "project",
    "phonetic": "'prɒdʒekt",
    "translation": "项目",
    "translations": [
      "项目",
      "工程"
    ]
  },
  {
    "id": "word_1084",
    "word": "promise",
    "phonetic": "'prɒmɪs",
    "translation": "．承诺",
    "translations": [
      "．承诺",
      "许诺"
    ]
  },
  {
    "id": "word_1085",
    "word": "pronounce",
    "phonetic": "prə'naʊns",
    "translation": "发音",
    "translations": [
      "发音"
    ]
  },
  {
    "id": "word_1086",
    "word": "proper",
    "phonetic": "'prɒpə(r)",
    "translation": "恰当的",
    "translations": [
      "恰当的",
      "正确的"
    ]
  },
  {
    "id": "word_1087",
    "word": "protect",
    "phonetic": "prə'tekt",
    "translation": "保护",
    "translations": [
      "保护"
    ]
  },
  {
    "id": "word_1088",
    "word": "proud",
    "phonetic": "praʊd",
    "translation": "自豪的",
    "translations": [
      "自豪的",
      "骄傲的"
    ]
  },
  {
    "id": "word_1089",
    "word": "prove",
    "phonetic": "pruːv",
    "translation": "证明",
    "translations": [
      "证明"
    ]
  },
  {
    "id": "word_1090",
    "word": "provide",
    "phonetic": "prə'vaɪd",
    "translation": "提供",
    "translations": [
      "提供"
    ]
  },
  {
    "id": "word_1091",
    "word": "public",
    "phonetic": "'pʌblɪk",
    "translation": "公共的",
    "translations": [
      "公共的",
      "公众的",
      "．民众"
    ]
  },
  {
    "id": "word_1092",
    "word": "publish",
    "phonetic": "'pʌblɪʃ",
    "translation": "出版",
    "translations": [
      "出版",
      "发表"
    ]
  },
  {
    "id": "word_1093",
    "word": "pull",
    "phonetic": "pʊl",
    "translation": "．拉",
    "translations": [
      "．拉",
      "扯"
    ]
  },
  {
    "id": "word_1094",
    "word": "punish",
    "phonetic": "'pʌnɪʃ",
    "translation": "惩罚",
    "translations": [
      "惩罚",
      "处罚"
    ]
  },
  {
    "id": "word_1095",
    "word": "purple",
    "phonetic": "'pɜːpl",
    "translation": "紫色 adj.紫色的",
    "translations": [
      "紫色 adj.紫色的"
    ]
  },
  {
    "id": "word_1096",
    "word": "purpose",
    "phonetic": "'pɜːpəs",
    "translation": "目的",
    "translations": [
      "目的",
      "意图"
    ]
  },
  {
    "id": "word_1097",
    "word": "push",
    "phonetic": "pʊʃ",
    "translation": "．推",
    "translations": [
      "．推",
      "督促"
    ]
  },
  {
    "id": "word_1098",
    "word": "put",
    "phonetic": "pʊt",
    "translation": "放",
    "translations": [
      "放",
      "安置"
    ]
  },
  {
    "id": "word_1099",
    "word": "quality",
    "phonetic": "'kwɒləti",
    "translation": "质量",
    "translations": [
      "质量",
      "品质",
      "优质的"
    ]
  },
  {
    "id": "word_1100",
    "word": "quarter",
    "phonetic": "'kwɔːtə(r)",
    "translation": "四分之一",
    "translations": [
      "四分之一",
      "一刻钟"
    ]
  },
  {
    "id": "word_1101",
    "word": "queen",
    "phonetic": "kwiːn",
    "translation": "女王",
    "translations": [
      "女王",
      "女首领"
    ]
  },
  {
    "id": "word_1102",
    "word": "question",
    "phonetic": "'kwestʃən",
    "translation": "问题",
    "translations": [
      "问题",
      "．询问",
      "怀疑"
    ]
  },
  {
    "id": "word_1103",
    "word": "quick",
    "phonetic": "kwɪk",
    "translation": "快的",
    "translations": [
      "快的",
      "迅速的"
    ]
  },
  {
    "id": "word_1104",
    "word": "quiet",
    "phonetic": "'kwaɪət",
    "translation": "安静的",
    "translations": [
      "安静的",
      "轻柔的"
    ]
  },
  {
    "id": "word_1105",
    "word": "quite",
    "phonetic": "kwaɪt",
    "translation": "完全",
    "translations": [
      "完全",
      "十分"
    ]
  },
  {
    "id": "word_1106",
    "word": "rabbit",
    "phonetic": "'ræbɪt",
    "translation": "兔",
    "translations": [
      "兔",
      "野兔"
    ]
  },
  {
    "id": "word_1107",
    "word": "race",
    "phonetic": "reɪs",
    "translation": "竞赛",
    "translations": [
      "竞赛"
    ]
  },
  {
    "id": "word_1108",
    "word": "radio",
    "phonetic": "'reɪdiəʊ",
    "translation": "无线电广播",
    "translations": [
      "无线电广播"
    ]
  },
  {
    "id": "word_1109",
    "word": "railway",
    "phonetic": "'reɪlweɪ",
    "translation": "铁路",
    "translations": [
      "铁路",
      "铁道"
    ]
  },
  {
    "id": "word_1110",
    "word": "rain",
    "phonetic": "reɪn",
    "translation": "雨",
    "translations": [
      "雨",
      "雨水 v．下雨"
    ]
  },
  {
    "id": "word_1111",
    "word": "rainbow",
    "phonetic": "'reɪnbəʊ",
    "translation": "彩虹",
    "translations": [
      "彩虹"
    ]
  },
  {
    "id": "word_1112",
    "word": "raise",
    "phonetic": "reɪz",
    "translation": "提升",
    "translations": [
      "提升",
      "举起",
      "饲养",
      "筹"
    ]
  },
  {
    "id": "word_1113",
    "word": "rapid",
    "phonetic": "'ræpɪd",
    "translation": "快的",
    "translations": [
      "快的",
      "迅速的"
    ]
  },
  {
    "id": "word_1114",
    "word": "rather",
    "phonetic": "'rɑːðe(r)",
    "translation": "相当",
    "translations": [
      "相当",
      "相反"
    ]
  },
  {
    "id": "word_1115",
    "word": "reach",
    "phonetic": "riːtʃ",
    "translation": "到达",
    "translations": [
      "到达",
      "伸手",
      "够得着"
    ]
  },
  {
    "id": "word_1116",
    "word": "read",
    "phonetic": "riːd",
    "translation": "读",
    "translations": [
      "读",
      "朗读"
    ]
  },
  {
    "id": "word_1117",
    "word": "ready",
    "phonetic": "'redi",
    "translation": "准备好的",
    "translations": [
      "准备好的"
    ]
  },
  {
    "id": "word_1118",
    "word": "real",
    "phonetic": "'riːəl",
    "translation": "真实的",
    "translations": [
      "真实的",
      "真正的"
    ]
  },
  {
    "id": "word_1119",
    "word": "realise",
    "phonetic": "'riːəlaɪz",
    "translation": "理解",
    "translations": [
      "理解",
      "领会",
      "认识到",
      "实现"
    ]
  },
  {
    "id": "word_1120",
    "word": "really",
    "phonetic": "'riːəli",
    "translation": "真正地",
    "translations": [
      "真正地",
      "事实上"
    ]
  },
  {
    "id": "word_1121",
    "word": "reason",
    "phonetic": "'riːzn",
    "translation": "原因",
    "translations": [
      "原因",
      "理由"
    ]
  },
  {
    "id": "word_1122",
    "word": "receive",
    "phonetic": "rɪ'siːv",
    "translation": "收到",
    "translations": [
      "收到",
      "接到"
    ]
  },
  {
    "id": "word_1123",
    "word": "recent",
    "phonetic": "'riːsnt",
    "translation": "最近的",
    "translations": [
      "最近的",
      "近来的"
    ]
  },
  {
    "id": "word_1124",
    "word": "recognise",
    "phonetic": "'rekəɡnaɪz",
    "translation": "认出",
    "translations": [
      "认出",
      "承认"
    ]
  },
  {
    "id": "word_1125",
    "word": "recommend",
    "phonetic": "ˌrekə'mend",
    "translation": "推荐",
    "translations": [
      "推荐",
      "建议"
    ]
  },
  {
    "id": "word_1126",
    "word": "record",
    "phonetic": "rɪ'kɔːd",
    "translation": "记录",
    "translations": [
      "记录",
      "唱片",
      "录制"
    ]
  },
  {
    "id": "word_1127",
    "word": "recycle",
    "phonetic": "ˌriː'saɪkl",
    "translation": "回收利用",
    "translations": [
      "回收利用",
      "再利"
    ]
  },
  {
    "id": "word_1128",
    "word": "red",
    "phonetic": "red",
    "translation": "红色 adj.红色的",
    "translations": [
      "红色 adj.红色的"
    ]
  },
  {
    "id": "word_1129",
    "word": "reduce",
    "phonetic": "rɪ'djuːs",
    "translation": "减少",
    "translations": [
      "减少",
      "减低",
      "缩小"
    ]
  },
  {
    "id": "word_1130",
    "word": "refuse",
    "phonetic": "rɪ'fjuːz",
    "translation": "拒绝",
    "translations": [
      "拒绝",
      "回绝"
    ]
  },
  {
    "id": "word_1131",
    "word": "regret",
    "phonetic": "rɪ'ɡret",
    "translation": "感到遗憾",
    "translations": [
      "感到遗憾",
      "惋惜",
      "懊悔",
      "痛惜",
      "遗憾",
      "后悔"
    ]
  },
  {
    "id": "word_1132",
    "word": "relationship",
    "phonetic": "rɪ'leɪʃnʃɪp",
    "translation": "关系",
    "translations": [
      "关系",
      "联系"
    ]
  },
  {
    "id": "word_1133",
    "word": "relative",
    "phonetic": "'relətɪv",
    "translation": "亲属",
    "translations": [
      "亲属",
      "亲戚"
    ]
  },
  {
    "id": "word_1134",
    "word": "relax",
    "phonetic": "rɪ'læks",
    "translation": "休息",
    "translations": [
      "休息"
    ]
  },
  {
    "id": "word_1135",
    "word": "remain",
    "phonetic": "rɪ'meɪn",
    "translation": "保持不变",
    "translations": [
      "保持不变",
      "剩余",
      "逗",
      "留下"
    ]
  },
  {
    "id": "word_1136",
    "word": "remember",
    "phonetic": "rɪ'membə(r)",
    "translation": "记得",
    "translations": [
      "记得",
      "回想起"
    ]
  },
  {
    "id": "word_1137",
    "word": "remind",
    "phonetic": "rɪ'maɪnd",
    "translation": "提醒",
    "translations": [
      "提醒",
      "使想起"
    ]
  },
  {
    "id": "word_1138",
    "word": "repair",
    "phonetic": "rɪ'peə(r)",
    "translation": "修理",
    "translations": [
      "修理",
      "修补"
    ]
  },
  {
    "id": "word_1139",
    "word": "repeat",
    "phonetic": "rɪ'piːt",
    "translation": "重说",
    "translations": [
      "重说",
      "重做",
      "重复"
    ]
  },
  {
    "id": "word_1140",
    "word": "reply",
    "phonetic": "rɪ'plaɪ",
    "translation": "．回答",
    "translations": [
      "．回答",
      "答复"
    ]
  },
  {
    "id": "word_1141",
    "word": "report",
    "phonetic": "rɪ'pɔːt",
    "translation": "．报道",
    "translations": [
      "．报道",
      "报告"
    ]
  },
  {
    "id": "word_1142",
    "word": "require",
    "phonetic": "rɪ'kwaɪə(r)",
    "translation": "需要",
    "translations": [
      "需要",
      "要求"
    ]
  },
  {
    "id": "word_1143",
    "word": "research",
    "phonetic": "rɪ'sɜːtʃ",
    "translation": "研究",
    "translations": [
      "研究",
      "调查"
    ]
  },
  {
    "id": "word_1144",
    "word": "respect",
    "phonetic": "rɪ'spekt",
    "translation": "尊重",
    "translations": [
      "尊重",
      "重视",
      "方面",
      "慎重对待",
      "遵守"
    ]
  },
  {
    "id": "word_1145",
    "word": "responsible",
    "phonetic": "rɪ'spɒnsəb(ə)l",
    "translation": "有责任心的",
    "translations": [
      "有责任心的"
    ]
  },
  {
    "id": "word_1146",
    "word": "rest",
    "phonetic": "rest",
    "translation": "休息",
    "translations": [
      "休息",
      "剩余的部分",
      "歇息"
    ]
  },
  {
    "id": "word_1147",
    "word": "restaurant",
    "phonetic": "'restrɒnt",
    "translation": "饭馆",
    "translations": [
      "饭馆",
      "饭店"
    ]
  },
  {
    "id": "word_1148",
    "word": "result",
    "phonetic": "rɪ'zʌlt",
    "translation": "结果",
    "translations": [
      "结果",
      "后果"
    ]
  },
  {
    "id": "word_1149",
    "word": "return",
    "phonetic": "rɪ'tɜːn",
    "translation": "归还",
    "translations": [
      "归还",
      "回来"
    ]
  },
  {
    "id": "word_1150",
    "word": "review",
    "phonetic": "rɪ'vjuː",
    "translation": "检查",
    "translations": [
      "检查",
      "回顾",
      "复习",
      "复查",
      "评论"
    ]
  },
  {
    "id": "word_1151",
    "word": "rice",
    "phonetic": "raɪs",
    "translation": "稻米",
    "translations": [
      "稻米",
      "大米"
    ]
  },
  {
    "id": "word_1152",
    "word": "rich",
    "phonetic": "rɪtʃ",
    "translation": "富裕的",
    "translations": [
      "富裕的",
      "丰富多"
    ]
  },
  {
    "id": "word_1153",
    "word": "ride",
    "phonetic": "raɪd",
    "translation": "骑",
    "translations": [
      "骑",
      "乘坐",
      "．乘骑项目",
      "搭乘"
    ]
  },
  {
    "id": "word_1154",
    "word": "right",
    "phonetic": "raɪt",
    "translation": "适当的",
    "translations": [
      "适当的"
    ]
  },
  {
    "id": "word_1155",
    "word": "ring",
    "phonetic": "rɪ ",
    "translation": "给……打电话",
    "translations": [
      "给……打电话",
      "铃声",
      "戒指"
    ]
  },
  {
    "id": "word_1156",
    "word": "rise",
    "phonetic": "raɪz",
    "translation": "增加",
    "translations": [
      "增加",
      "提高",
      "上升"
    ]
  },
  {
    "id": "word_1157",
    "word": "risk",
    "phonetic": "rɪsk",
    "translation": "危险",
    "translations": [
      "危险",
      "风险",
      "冒……的风险",
      "使……危险"
    ]
  },
  {
    "id": "word_1158",
    "word": "river",
    "phonetic": "'rɪvə(r)",
    "translation": "江",
    "translations": [
      "江",
      "河"
    ]
  },
  {
    "id": "word_1159",
    "word": "road",
    "phonetic": "rəʊd",
    "translation": "路",
    "translations": [
      "路",
      "道路"
    ]
  },
  {
    "id": "word_1160",
    "word": "robot",
    "phonetic": "'rəʊbɒt",
    "translation": "机器人",
    "translations": [
      "机器人"
    ]
  },
  {
    "id": "word_1161",
    "word": "rock",
    "phonetic": "rɒk",
    "translation": "岩石",
    "translations": [
      "岩石",
      "碎石",
      "摇滚乐"
    ]
  },
  {
    "id": "word_1162",
    "word": "rocket",
    "phonetic": "'rɒkɪt",
    "translation": "火箭",
    "translations": [
      "火箭"
    ]
  },
  {
    "id": "word_1163",
    "word": "role",
    "phonetic": "rəʊl",
    "translation": "职能",
    "translations": [
      "职能",
      "地位",
      "角色"
    ]
  },
  {
    "id": "word_1164",
    "word": "room",
    "phonetic": "ruːm",
    "translation": "房间",
    "translations": [
      "房间",
      "空间"
    ]
  },
  {
    "id": "word_1165",
    "word": "rope",
    "phonetic": "rəʊp",
    "translation": "绳索",
    "translations": [
      "绳索"
    ]
  },
  {
    "id": "word_1166",
    "word": "rose",
    "phonetic": "rəʊz",
    "translation": "玫瑰花",
    "translations": [
      "玫瑰花"
    ]
  },
  {
    "id": "word_1167",
    "word": "round",
    "phonetic": "raʊnd",
    "translation": "转过来",
    "translations": [
      "转过来",
      "围绕",
      "圆形的",
      "球形的"
    ]
  },
  {
    "id": "word_1168",
    "word": "row",
    "phonetic": "rəʊ",
    "translation": "一排",
    "translations": [
      "一排",
      "一行 v．划船",
      "划船"
    ]
  },
  {
    "id": "word_1169",
    "word": "rubbish",
    "phonetic": "'rʌbɪʃ",
    "translation": "垃圾",
    "translations": [
      "垃圾",
      "废物"
    ]
  },
  {
    "id": "word_1170",
    "word": "rule",
    "phonetic": "ruːl",
    "translation": "规则 v．统治",
    "translations": [
      "规则 v．统治",
      "支配"
    ]
  },
  {
    "id": "word_1171",
    "word": "ruler",
    "phonetic": "'ruːlə(r)",
    "translation": "统治者",
    "translations": [
      "统治者",
      "直尺"
    ]
  },
  {
    "id": "word_1172",
    "word": "run",
    "phonetic": "rʌn",
    "translation": "跑",
    "translations": [
      "跑",
      "奔跑",
      "管理",
      "经营"
    ]
  },
  {
    "id": "word_1173",
    "word": "rush",
    "phonetic": "rʌʃ",
    "translation": "．急促",
    "translations": [
      "．急促",
      "仓促"
    ]
  },
  {
    "id": "word_1174",
    "word": "sad",
    "phonetic": "sæd",
    "translation": "悲伤的",
    "translations": [
      "悲伤的",
      "难过的"
    ]
  },
  {
    "id": "word_1175",
    "word": "safe",
    "phonetic": "seɪf",
    "translation": "安全的",
    "translations": [
      "安全的"
    ]
  },
  {
    "id": "word_1176",
    "word": "safety",
    "phonetic": "'seɪfti",
    "translation": "安全",
    "translations": [
      "安全",
      "安全性"
    ]
  },
  {
    "id": "word_1177",
    "word": "salad",
    "phonetic": "'sæləd",
    "translation": "色拉",
    "translations": [
      "色拉"
    ]
  },
  {
    "id": "word_1178",
    "word": "sale",
    "phonetic": "seɪl",
    "translation": "出售",
    "translations": [
      "出售",
      "销售"
    ]
  },
  {
    "id": "word_1179",
    "word": "salt",
    "phonetic": "sɔːlt",
    "translation": "盐",
    "translations": [
      "盐"
    ]
  },
  {
    "id": "word_1180",
    "word": "same",
    "phonetic": "seɪm",
    "translation": "相同的",
    "translations": [
      "相同的",
      "同样的"
    ]
  },
  {
    "id": "word_1181",
    "word": "sand",
    "phonetic": "sænd",
    "translation": "沙",
    "translations": [
      "沙",
      "沙子"
    ]
  },
  {
    "id": "word_1182",
    "word": "sandwich",
    "phonetic": "'sænwɪtʃ",
    "translation": "三明治",
    "translations": [
      "三明治",
      "夹心面包片"
    ]
  },
  {
    "id": "word_1183",
    "word": "satisfy",
    "phonetic": "'sætɪsfaɪ",
    "translation": "使满意",
    "translations": [
      "使满意",
      "使满足"
    ]
  },
  {
    "id": "word_1184",
    "word": "save",
    "phonetic": "seɪv",
    "translation": "救",
    "translations": [
      "救",
      "挽救",
      "节省",
      "保存"
    ]
  },
  {
    "id": "word_1185",
    "word": "say",
    "phonetic": "seɪ",
    "translation": "说",
    "translations": [
      "说",
      "讲"
    ]
  },
  {
    "id": "word_1186",
    "word": "scare",
    "phonetic": "skeə(r)",
    "translation": "恐惧 v．惊吓",
    "translations": [
      "恐惧 v．惊吓",
      "使害怕",
      "害怕"
    ]
  },
  {
    "id": "word_1187",
    "word": "scarf",
    "phonetic": "skɑːf",
    "translation": "围巾",
    "translations": [
      "围巾"
    ]
  },
  {
    "id": "word_1188",
    "word": "school",
    "phonetic": "skuːl",
    "translation": "学校",
    "translations": [
      "学校"
    ]
  },
  {
    "id": "word_1189",
    "word": "schoolbag",
    "phonetic": "'skuːlbæg",
    "translation": "书包",
    "translations": [
      "书包"
    ]
  },
  {
    "id": "word_1190",
    "word": "science",
    "phonetic": "'saɪəns",
    "translation": "科学",
    "translations": [
      "科学",
      "自然科学"
    ]
  },
  {
    "id": "word_1191",
    "word": "scientist",
    "phonetic": "'saɪəntɪst",
    "translation": "科学家",
    "translations": [
      "科学家"
    ]
  },
  {
    "id": "word_1192",
    "word": "scissors",
    "phonetic": "'sɪzəz",
    "translation": "剪刀",
    "translations": [
      "剪刀"
    ]
  },
  {
    "id": "word_1193",
    "word": "score",
    "phonetic": "skɔː(r)",
    "translation": "．得分",
    "translations": [
      "．得分"
    ]
  },
  {
    "id": "word_1194",
    "word": "screen",
    "phonetic": "skriːn",
    "translation": "屏幕",
    "translations": [
      "屏幕",
      "荧光屏",
      "荧"
    ]
  },
  {
    "id": "word_1195",
    "word": "sea",
    "phonetic": "siː",
    "translation": "海",
    "translations": [
      "海",
      "海洋"
    ]
  },
  {
    "id": "word_1196",
    "word": "search",
    "phonetic": "sɜːtʃ",
    "translation": "．搜索",
    "translations": [
      "．搜索",
      "搜查"
    ]
  },
  {
    "id": "word_1197",
    "word": "season",
    "phonetic": "'siːzn",
    "translation": "季",
    "translations": [
      "季",
      "季节"
    ]
  },
  {
    "id": "word_1198",
    "word": "seat",
    "phonetic": "siːt",
    "translation": "座位",
    "translations": [
      "座位"
    ]
  },
  {
    "id": "word_1199",
    "word": "secret",
    "phonetic": "'siːkrət",
    "translation": "秘密的",
    "translations": [
      "秘密的",
      "．秘密",
      "秘诀"
    ]
  },
  {
    "id": "word_1200",
    "word": "see",
    "phonetic": "siː",
    "translation": "看见",
    "translations": [
      "看见",
      "看到",
      "理解",
      "明白"
    ]
  },
  {
    "id": "word_1201",
    "word": "seem",
    "phonetic": "siːm",
    "translation": "似乎",
    "translations": [
      "似乎",
      "好像"
    ]
  },
  {
    "id": "word_1202",
    "word": "seldom",
    "phonetic": "'seldəm",
    "translation": "很少",
    "translations": [
      "很少",
      "不常"
    ]
  },
  {
    "id": "word_1203",
    "word": "sell",
    "phonetic": "sel",
    "translation": "出售",
    "translations": [
      "出售"
    ]
  },
  {
    "id": "word_1204",
    "word": "send",
    "phonetic": "send",
    "translation": "派遣",
    "translations": [
      "派遣",
      "发送",
      "邮寄"
    ]
  },
  {
    "id": "word_1205",
    "word": "sense",
    "phonetic": "sens",
    "translation": "感觉",
    "translations": [
      "感觉",
      "意识",
      "意义",
      "感觉到"
    ]
  },
  {
    "id": "word_1206",
    "word": "sentence",
    "phonetic": "'sentəns",
    "translation": "句子",
    "translations": [
      "句子"
    ]
  },
  {
    "id": "word_1207",
    "word": "separate",
    "phonetic": "'sepəreɪt",
    "translation": "使分开",
    "translations": [
      "使分开",
      "使分离",
      "单独的",
      "分开的",
      "分离的"
    ]
  },
  {
    "id": "word_1208",
    "word": "serious",
    "phonetic": "'sɪəriəs",
    "translation": "严肃的",
    "translations": [
      "严肃的",
      "严重的",
      "认真的"
    ]
  },
  {
    "id": "word_1209",
    "word": "serve",
    "phonetic": "sɜːv",
    "translation": "服务",
    "translations": [
      "服务",
      "端上"
    ]
  },
  {
    "id": "word_1210",
    "word": "service",
    "phonetic": "'sɜːvɪs",
    "translation": "服务",
    "translations": [
      "服务"
    ]
  },
  {
    "id": "word_1211",
    "word": "set",
    "phonetic": "set",
    "translation": "放",
    "translations": [
      "放",
      "置",
      "设置",
      "一套",
      "一副",
      "布景"
    ]
  },
  {
    "id": "word_1212",
    "word": "several",
    "phonetic": "'sevrəl",
    "translation": "几个",
    "translations": [
      "几个",
      "一些"
    ]
  },
  {
    "id": "word_1213",
    "word": "shake",
    "phonetic": "ʃeɪk",
    "translation": "．摇动",
    "translations": [
      "．摇动",
      "抖动"
    ]
  },
  {
    "id": "word_1214",
    "word": "shall",
    "phonetic": "ʃæl",
    "translation": "．",
    "translations": [
      "．"
    ]
  },
  {
    "id": "word_1215",
    "word": "shame",
    "phonetic": "ʃeɪm",
    "translation": "羞耻",
    "translations": [
      "羞耻",
      "羞愧",
      "惭愧"
    ]
  },
  {
    "id": "word_1216",
    "word": "shape",
    "phonetic": "ʃeɪp",
    "translation": "形状",
    "translations": [
      "形状",
      "外形"
    ]
  },
  {
    "id": "word_1217",
    "word": "share",
    "phonetic": "ʃeə(r)",
    "translation": "分享",
    "translations": [
      "分享",
      "共用"
    ]
  },
  {
    "id": "word_1218",
    "word": "shark",
    "phonetic": "ʃɑːk",
    "translation": "鲨鱼",
    "translations": [
      "鲨鱼"
    ]
  },
  {
    "id": "word_1219",
    "word": "she",
    "phonetic": "ʃiː",
    "translation": "她",
    "translations": [
      "她"
    ]
  },
  {
    "id": "word_1220",
    "word": "sheep",
    "phonetic": "ʃiːp",
    "translation": "羊",
    "translations": [
      "羊",
      "绵羊"
    ]
  },
  {
    "id": "word_1221",
    "word": "shelf",
    "phonetic": "ʃelf",
    "translation": "隔板",
    "translations": [
      "隔板",
      "架子"
    ]
  },
  {
    "id": "word_1222",
    "word": "shine",
    "phonetic": "ʃaɪn",
    "translation": "发光",
    "translations": [
      "发光",
      "照耀"
    ]
  },
  {
    "id": "word_1223",
    "word": "ship",
    "phonetic": "ʃɪp",
    "translation": "船，轮船",
    "translations": [
      "船，轮船"
    ]
  },
  {
    "id": "word_1224",
    "word": "shirt",
    "phonetic": "ʃɜːt",
    "translation": "衬衫",
    "translations": [
      "衬衫"
    ]
  },
  {
    "id": "word_1225",
    "word": "shock",
    "phonetic": "ʃɒk",
    "translation": "震惊",
    "translations": [
      "震惊",
      "令人震惊的"
    ]
  },
  {
    "id": "word_1226",
    "word": "shoe",
    "phonetic": "ʃuː",
    "translation": "鞋",
    "translations": [
      "鞋"
    ]
  },
  {
    "id": "word_1227",
    "word": "shoot",
    "phonetic": "ʃuːt",
    "translation": "射击",
    "translations": [
      "射击",
      "拍摄",
      "射伤",
      "射中"
    ]
  },
  {
    "id": "word_1228",
    "word": "shop",
    "phonetic": "ʃɒp",
    "translation": "购物",
    "translations": [
      "购物",
      "．商店",
      "车间"
    ]
  },
  {
    "id": "word_1229",
    "word": "short",
    "phonetic": "ʃɔːt",
    "translation": "短的",
    "translations": [
      "短的",
      "矮的"
    ]
  },
  {
    "id": "word_1230",
    "word": "shorts",
    "phonetic": "ʃɔːts",
    "translation": "短裤",
    "translations": [
      "短裤"
    ]
  },
  {
    "id": "word_1231",
    "word": "should",
    "phonetic": "ʃʊd",
    "translation": "．应当",
    "translations": [
      "．应当",
      "应该"
    ]
  },
  {
    "id": "word_1232",
    "word": "shoulder",
    "phonetic": "'ʃəʊldə(r)",
    "translation": "肩膀",
    "translations": [
      "肩膀"
    ]
  },
  {
    "id": "word_1233",
    "word": "shout",
    "phonetic": "ʃaʊt",
    "translation": "．大声说",
    "translations": [
      "．大声说",
      "呼喊"
    ]
  },
  {
    "id": "word_1234",
    "word": "show",
    "phonetic": "ʃəʊ",
    "translation": "展览",
    "translations": [
      "展览",
      "演出",
      "表明",
      "给……看",
      "带领"
    ]
  },
  {
    "id": "word_1235",
    "word": "shower",
    "phonetic": "'ʃaʊə(r)",
    "translation": "阵雨",
    "translations": [
      "阵雨",
      "淋浴"
    ]
  },
  {
    "id": "word_1236",
    "word": "shut",
    "phonetic": "ʃʌt",
    "translation": "关上",
    "translations": [
      "关上",
      "关门"
    ]
  },
  {
    "id": "word_1237",
    "word": "shy",
    "phonetic": "ʃaɪ",
    "translation": "害羞的",
    "translations": [
      "害羞的"
    ]
  },
  {
    "id": "word_1238",
    "word": "sick",
    "phonetic": "sɪk",
    "translation": "有病的，生病的",
    "translations": [
      "有病的，生病的",
      "想呕吐的"
    ]
  },
  {
    "id": "word_1239",
    "word": "side",
    "phonetic": "saɪd",
    "translation": "一边",
    "translations": [
      "一边",
      "侧面"
    ]
  },
  {
    "id": "word_1240",
    "word": "sign",
    "phonetic": "saɪn",
    "translation": "迹象",
    "translations": [
      "迹象",
      "标志",
      "符号",
      "签署",
      "签名"
    ]
  },
  {
    "id": "word_1241",
    "word": "silent",
    "phonetic": "'saɪlənt",
    "translation": "不说话的",
    "translations": [
      "不说话的",
      "沉默的"
    ]
  },
  {
    "id": "word_1242",
    "word": "silk",
    "phonetic": "sɪlk",
    "translation": "丝织品",
    "translations": [
      "丝织品"
    ]
  },
  {
    "id": "word_1243",
    "word": "silly",
    "phonetic": "'sɪli",
    "translation": "傻的",
    "translations": [
      "傻的",
      "愚蠢的"
    ]
  },
  {
    "id": "word_1244",
    "word": "silver",
    "phonetic": "'sɪlvə(r)",
    "translation": "银",
    "translations": [
      "银",
      "银色的",
      "银（色）"
    ]
  },
  {
    "id": "word_1245",
    "word": "similar",
    "phonetic": "'sɪmələ(r)",
    "translation": "相似的",
    "translations": [
      "相似的",
      "类似的"
    ]
  },
  {
    "id": "word_1246",
    "word": "simple",
    "phonetic": "'sɪmpl",
    "translation": "简单的",
    "translations": [
      "简单的",
      "朴素的"
    ]
  },
  {
    "id": "word_1247",
    "word": "since",
    "phonetic": "sɪns",
    "translation": "从……以来",
    "translations": [
      "从……以来"
    ]
  },
  {
    "id": "word_1248",
    "word": "sing",
    "phonetic": "sɪ   ",
    "translation": "唱",
    "translations": [
      "唱",
      "唱歌"
    ]
  },
  {
    "id": "word_1249",
    "word": "single",
    "phonetic": "'sɪ ɡl",
    "translation": "单一的",
    "translations": [
      "单一的",
      "单个的"
    ]
  },
  {
    "id": "word_1250",
    "word": "sir",
    "phonetic": "sɜː(r)",
    "translation": "先生",
    "translations": [
      "先生",
      "阁下"
    ]
  },
  {
    "id": "word_1251",
    "word": "sister",
    "phonetic": "'sɪstə(r)",
    "translation": "姐",
    "translations": [
      "姐",
      "妹"
    ]
  },
  {
    "id": "word_1252",
    "word": "sit",
    "phonetic": "sɪt",
    "translation": "坐",
    "translations": [
      "坐"
    ]
  },
  {
    "id": "word_1253",
    "word": "situation",
    "phonetic": "ˌsɪtʃu'eɪʃn",
    "translation": "形势",
    "translations": [
      "形势",
      "情况"
    ]
  },
  {
    "id": "word_1254",
    "word": "size",
    "phonetic": "saɪz",
    "translation": "尺码",
    "translations": [
      "尺码",
      "大小"
    ]
  },
  {
    "id": "word_1255",
    "word": "skate",
    "phonetic": "skeɪt",
    "translation": "溜冰",
    "translations": [
      "溜冰",
      "滑冰"
    ]
  },
  {
    "id": "word_1256",
    "word": "ski",
    "phonetic": "skiː",
    "translation": "．滑雪",
    "translations": [
      "．滑雪"
    ]
  },
  {
    "id": "word_1257",
    "word": "skill",
    "phonetic": "skɪl",
    "translation": "技能",
    "translations": [
      "技能",
      "技巧"
    ]
  },
  {
    "id": "word_1258",
    "word": "skirt",
    "phonetic": "skɜːt",
    "translation": "女裙",
    "translations": [
      "女裙"
    ]
  },
  {
    "id": "word_1259",
    "word": "sky",
    "phonetic": "skaɪ",
    "translation": "天",
    "translations": [
      "天",
      "天空"
    ]
  },
  {
    "id": "word_1260",
    "word": "sleep",
    "phonetic": "sliːp",
    "translation": "．睡觉",
    "translations": [
      "．睡觉"
    ]
  },
  {
    "id": "word_1261",
    "word": "slim",
    "phonetic": "slɪm",
    "translation": "苗条的",
    "translations": [
      "苗条的",
      "纤细的",
      "．变苗条",
      "减肥"
    ]
  },
  {
    "id": "word_1262",
    "word": "slow",
    "phonetic": "sləʊ",
    "translation": "慢的",
    "translations": [
      "慢的",
      "缓慢的"
    ]
  },
  {
    "id": "word_1263",
    "word": "small",
    "phonetic": "smɔːl",
    "translation": "小的",
    "translations": [
      "小的"
    ]
  },
  {
    "id": "word_1264",
    "word": "smart",
    "phonetic": "smɑːt",
    "translation": "聪明的",
    "translations": [
      "聪明的",
      "精明的"
    ]
  },
  {
    "id": "word_1265",
    "word": "smell",
    "phonetic": "smel",
    "translation": "闻到",
    "translations": [
      "闻到",
      "有……气味",
      "．气味"
    ]
  },
  {
    "id": "word_1266",
    "word": "smile",
    "phonetic": "smaɪl",
    "translation": "．微笑",
    "translations": [
      "．微笑"
    ]
  },
  {
    "id": "word_1267",
    "word": "smoke",
    "phonetic": "sməʊk",
    "translation": "烟 v．吸烟",
    "translations": [
      "烟 v．吸烟",
      "冒烟"
    ]
  },
  {
    "id": "word_1268",
    "word": "smooth",
    "phonetic": "smuːð",
    "translation": "光滑的",
    "translations": [
      "光滑的",
      "平坦的"
    ]
  },
  {
    "id": "word_1269",
    "word": "snack",
    "phonetic": "snæk",
    "translation": "小吃，快餐",
    "translations": [
      "小吃，快餐"
    ]
  },
  {
    "id": "word_1270",
    "word": "snake",
    "phonetic": "sneɪk",
    "translation": "蛇",
    "translations": [
      "蛇"
    ]
  },
  {
    "id": "word_1271",
    "word": "snow",
    "phonetic": "snəʊ",
    "translation": "雪",
    "translations": [
      "雪",
      "下雪"
    ]
  },
  {
    "id": "word_1272",
    "word": "so",
    "phonetic": "səʊ",
    "translation": "如此",
    "translations": [
      "如此",
      "这么",
      "非常",
      "的确",
      "因此",
      "所以"
    ]
  },
  {
    "id": "word_1273",
    "word": "social",
    "phonetic": "'səʊʃl",
    "translation": "社会的",
    "translations": [
      "社会的",
      "社交的"
    ]
  },
  {
    "id": "word_1274",
    "word": "socialism",
    "phonetic": "'səʊʃəlɪz(ə)m",
    "translation": "社会主义",
    "translations": [
      "社会主义",
      "社会主义（制度）"
    ]
  },
  {
    "id": "word_1275",
    "word": "society",
    "phonetic": "sə'saɪəti",
    "translation": "社会",
    "translations": [
      "社会"
    ]
  },
  {
    "id": "word_1276",
    "word": "sock",
    "phonetic": "sɒk",
    "translation": "短袜",
    "translations": [
      "短袜"
    ]
  },
  {
    "id": "word_1277",
    "word": "sofa",
    "phonetic": "'səʊfə",
    "translation": "沙发",
    "translations": [
      "沙发"
    ]
  },
  {
    "id": "word_1278",
    "word": "soft",
    "phonetic": "sɒft",
    "translation": "软的",
    "translations": [
      "软的",
      "柔软的"
    ]
  },
  {
    "id": "word_1279",
    "word": "soil",
    "phonetic": "sɔɪl",
    "translation": "泥土",
    "translations": [
      "泥土",
      "土壤"
    ]
  },
  {
    "id": "word_1280",
    "word": "soldier",
    "phonetic": "səʊldʒə(r)",
    "translation": "士兵",
    "translations": [
      "士兵"
    ]
  },
  {
    "id": "word_1281",
    "word": "solve",
    "phonetic": "sɒlv",
    "translation": "解决",
    "translations": [
      "解决",
      "解答"
    ]
  },
  {
    "id": "word_1282",
    "word": "some",
    "phonetic": "sʌm",
    "translation": "一些",
    "translations": [
      "一些",
      "若干",
      "某些",
      "有的"
    ]
  },
  {
    "id": "word_1283",
    "word": "somebody",
    "phonetic": "'sʌmbədi",
    "translation": "某人",
    "translations": [
      "某人",
      "重要人物"
    ]
  },
  {
    "id": "word_1284",
    "word": "someone",
    "phonetic": "'sʌmwʌn",
    "translation": "某人",
    "translations": [
      "某人",
      "重要人物"
    ]
  },
  {
    "id": "word_1285",
    "word": "something",
    "phonetic": "'sʌmθɪ ",
    "translation": "某事",
    "translations": [
      "某事",
      "某物"
    ]
  },
  {
    "id": "word_1286",
    "word": "sometimes",
    "phonetic": "'sʌmtaɪmz",
    "translation": "有时",
    "translations": [
      "有时"
    ]
  },
  {
    "id": "word_1287",
    "word": "somewhere",
    "phonetic": "'sʌmweə(r)",
    "translation": "在某处",
    "translations": [
      "在某处",
      "到某处"
    ]
  },
  {
    "id": "word_1288",
    "word": "son",
    "phonetic": "sʌn",
    "translation": "儿子",
    "translations": [
      "儿子"
    ]
  },
  {
    "id": "word_1289",
    "word": "song",
    "phonetic": "sɒ   ",
    "translation": "歌曲",
    "translations": [
      "歌曲"
    ]
  },
  {
    "id": "word_1290",
    "word": "soon",
    "phonetic": "suːn",
    "translation": "不久",
    "translations": [
      "不久",
      "很快",
      "早"
    ]
  },
  {
    "id": "word_1291",
    "word": "sore",
    "phonetic": "sɔː(r)",
    "translation": "疼痛的",
    "translations": [
      "疼痛的",
      "酸痛的",
      "身体某部位（疼痛的）"
    ]
  },
  {
    "id": "word_1292",
    "word": "sorry",
    "phonetic": "'sɒri",
    "translation": "抱歉的",
    "translations": [
      "抱歉的",
      "难过的"
    ]
  },
  {
    "id": "word_1293",
    "word": "sound",
    "phonetic": "saʊnd",
    "translation": "听起来好像",
    "translations": [
      "听起来好像",
      "声音"
    ]
  },
  {
    "id": "word_1294",
    "word": "soup",
    "phonetic": "suːp",
    "translation": "汤",
    "translations": [
      "汤"
    ]
  },
  {
    "id": "word_1295",
    "word": "south",
    "phonetic": "saʊθ",
    "translation": "南方的",
    "translations": [
      "南方的",
      "向南",
      "南",
      "南方",
      "南部"
    ]
  },
  {
    "id": "word_1296",
    "word": "space",
    "phonetic": "speɪs",
    "translation": "空间",
    "translations": [
      "空间",
      "太空"
    ]
  },
  {
    "id": "word_1297",
    "word": "spare",
    "phonetic": "speə(r)",
    "translation": "空闲的",
    "translations": [
      "空闲的",
      "不用的"
    ]
  },
  {
    "id": "word_1298",
    "word": "speak",
    "phonetic": "spiːk",
    "translation": "说",
    "translations": [
      "说",
      "谈话",
      "发言"
    ]
  },
  {
    "id": "word_1299",
    "word": "special",
    "phonetic": "'speʃl",
    "translation": "特别的",
    "translations": [
      "特别的",
      "不寻常的"
    ]
  },
  {
    "id": "word_1300",
    "word": "speech",
    "phonetic": "spiːtʃ",
    "translation": "演讲",
    "translations": [
      "演讲"
    ]
  },
  {
    "id": "word_1301",
    "word": "speed",
    "phonetic": "spiːd",
    "translation": "速度 v．快速前行",
    "translations": [
      "速度 v．快速前行"
    ]
  },
  {
    "id": "word_1302",
    "word": "spell",
    "phonetic": "spel",
    "translation": "拼写",
    "translations": [
      "拼写"
    ]
  },
  {
    "id": "word_1303",
    "word": "spend",
    "phonetic": "spend",
    "translation": "度过",
    "translations": [
      "度过",
      "花费"
    ]
  },
  {
    "id": "word_1304",
    "word": "spirit",
    "phonetic": "'spɪrɪt",
    "translation": "精神",
    "translations": [
      "精神",
      "心灵"
    ]
  },
  {
    "id": "word_1305",
    "word": "spoon",
    "phonetic": "spuːn",
    "translation": "匙",
    "translations": [
      "匙",
      "调羹"
    ]
  },
  {
    "id": "word_1306",
    "word": "sport",
    "phonetic": "spɔːt",
    "translation": "体育运动",
    "translations": [
      "体育运动"
    ]
  },
  {
    "id": "word_1307",
    "word": "spread",
    "phonetic": "spred",
    "translation": "展开",
    "translations": [
      "展开",
      "传播",
      "蔓延"
    ]
  },
  {
    "id": "word_1308",
    "word": "spring",
    "phonetic": "sprɪ  ",
    "translation": "春天",
    "translations": [
      "春天",
      "春季",
      "泉"
    ]
  },
  {
    "id": "word_1309",
    "word": "square",
    "phonetic": "skweə(r)",
    "translation": "广场",
    "translations": [
      "广场",
      "平方",
      "正方形的"
    ]
  },
  {
    "id": "word_1310",
    "word": "stage",
    "phonetic": "steɪdʒ",
    "translation": "舞台",
    "translations": [
      "舞台",
      "阶段",
      "步骤"
    ]
  },
  {
    "id": "word_1311",
    "word": "stamp",
    "phonetic": "stæmp",
    "translation": "邮票",
    "translations": [
      "邮票"
    ]
  },
  {
    "id": "word_1312",
    "word": "stand",
    "phonetic": "stænd",
    "translation": "站立",
    "translations": [
      "站立",
      "坐落",
      "容忍",
      "经受"
    ]
  },
  {
    "id": "word_1313",
    "word": "standard",
    "phonetic": "'stændəd",
    "translation": "标准 adj.标准的",
    "translations": [
      "标准 adj.标准的",
      "标准",
      "水平"
    ]
  },
  {
    "id": "word_1314",
    "word": "star",
    "phonetic": "stɑː(r)",
    "translation": "星",
    "translations": [
      "星",
      "恒星"
    ]
  },
  {
    "id": "word_1315",
    "word": "start",
    "phonetic": "stɑːt",
    "translation": "开始，着手",
    "translations": [
      "开始，着手",
      "出发"
    ]
  },
  {
    "id": "word_1316",
    "word": "state",
    "phonetic": "steɪt",
    "translation": "国家",
    "translations": [
      "国家",
      "州",
      "状态",
      "情况",
      "陈述"
    ]
  },
  {
    "id": "word_1317",
    "word": "station",
    "phonetic": "'steɪʃn",
    "translation": "车站",
    "translations": [
      "车站",
      "电台"
    ]
  },
  {
    "id": "word_1318",
    "word": "stay",
    "phonetic": "steɪ",
    "translation": "．停留",
    "translations": [
      "．停留",
      "逗留",
      "待"
    ]
  },
  {
    "id": "word_1319",
    "word": "steal",
    "phonetic": "stiːl",
    "translation": "偷",
    "translations": [
      "偷",
      "窃取"
    ]
  },
  {
    "id": "word_1320",
    "word": "step",
    "phonetic": "step",
    "translation": "步",
    "translations": [
      "步",
      "脚步",
      "步骤",
      "．走",
      "跨步"
    ]
  },
  {
    "id": "word_1321",
    "word": "stick",
    "phonetic": "stɪk",
    "translation": "粘住",
    "translations": [
      "粘住",
      "将……刺入",
      "．棍",
      "枝条"
    ]
  },
  {
    "id": "word_1322",
    "word": "still",
    "phonetic": "stɪl",
    "translation": "仍然",
    "translations": [
      "仍然"
    ]
  },
  {
    "id": "word_1323",
    "word": "stomach",
    "phonetic": "'stʌmək",
    "translation": "胃",
    "translations": [
      "胃",
      "腹部"
    ]
  },
  {
    "id": "word_1324",
    "word": "stone",
    "phonetic": "stəʊn",
    "translation": "石头",
    "translations": [
      "石头",
      "石料"
    ]
  },
  {
    "id": "word_1325",
    "word": "stop",
    "phonetic": "stɒp",
    "translation": "停止",
    "translations": [
      "停止",
      "车站",
      "阻止"
    ]
  },
  {
    "id": "word_1326",
    "word": "store",
    "phonetic": "stɔː(r)",
    "translation": "商店 v．储藏",
    "translations": [
      "商店 v．储藏",
      "存"
    ]
  },
  {
    "id": "word_1327",
    "word": "storm",
    "phonetic": "stɔːm",
    "translation": "暴风雨",
    "translations": [
      "暴风雨"
    ]
  },
  {
    "id": "word_1328",
    "word": "story",
    "phonetic": "'stɔːri",
    "translation": "故事",
    "translations": [
      "故事",
      "小说"
    ]
  },
  {
    "id": "word_1329",
    "word": "straight",
    "phonetic": "streɪt",
    "translation": "直的",
    "translations": [
      "直的"
    ]
  },
  {
    "id": "word_1330",
    "word": "strange",
    "phonetic": "streɪndʒ",
    "translation": "奇怪的",
    "translations": [
      "奇怪的",
      "奇特的"
    ]
  },
  {
    "id": "word_1331",
    "word": "strawberry",
    "phonetic": "'strɔːbəri",
    "translation": "草莓",
    "translations": [
      "草莓"
    ]
  },
  {
    "id": "word_1332",
    "word": "street",
    "phonetic": "striːt",
    "translation": "大街",
    "translations": [
      "大街",
      "街道"
    ]
  },
  {
    "id": "word_1333",
    "word": "stress",
    "phonetic": "stres",
    "translation": "精神压力",
    "translations": [
      "精神压力",
      "心理负担",
      "．强调",
      "重读"
    ]
  },
  {
    "id": "word_1334",
    "word": "strict",
    "phonetic": "strɪkt",
    "translation": "严格的",
    "translations": [
      "严格的",
      "严厉的"
    ]
  },
  {
    "id": "word_1335",
    "word": "strong",
    "phonetic": "strɒ ",
    "translation": "强壮的",
    "translations": [
      "强壮的",
      "强烈的"
    ]
  },
  {
    "id": "word_1336",
    "word": "student",
    "phonetic": "'stjuːdnt",
    "translation": "学生",
    "translations": [
      "学生"
    ]
  },
  {
    "id": "word_1337",
    "word": "study",
    "phonetic": "'stʌdi",
    "translation": "学习",
    "translations": [
      "学习",
      "研究",
      "书房"
    ]
  },
  {
    "id": "word_1338",
    "word": "style",
    "phonetic": "staɪl",
    "translation": "样式",
    "translations": [
      "样式",
      "款式"
    ]
  },
  {
    "id": "word_1339",
    "word": "subject",
    "phonetic": "'sʌbdʒɪkt",
    "translation": "主题",
    "translations": [
      "主题",
      "学科",
      "主语"
    ]
  },
  {
    "id": "word_1340",
    "word": "succeed",
    "phonetic": "sək'siːd",
    "translation": "成功",
    "translations": [
      "成功",
      "做成"
    ]
  },
  {
    "id": "word_1341",
    "word": "success",
    "phonetic": "sək'ses",
    "translation": "成功",
    "translations": [
      "成功"
    ]
  },
  {
    "id": "word_1342",
    "word": "such",
    "phonetic": "sʌtʃ",
    "translation": "这样的",
    "translations": [
      "这样的",
      "那样的"
    ]
  },
  {
    "id": "word_1343",
    "word": "sudden",
    "phonetic": "'sʌdn",
    "translation": "突然的",
    "translations": [
      "突然的"
    ]
  },
  {
    "id": "word_1344",
    "word": "suffer",
    "phonetic": "'sʌfə(r)",
    "translation": "患有",
    "translations": [
      "患有"
    ]
  },
  {
    "id": "word_1345",
    "word": "sugar",
    "phonetic": "'ʃʊɡə(r)",
    "translation": "糖",
    "translations": [
      "糖"
    ]
  },
  {
    "id": "word_1346",
    "word": "suggest",
    "phonetic": "sə'dʒest",
    "translation": "建议",
    "translations": [
      "建议",
      "提议"
    ]
  },
  {
    "id": "word_1347",
    "word": "suit",
    "phonetic": "suːt",
    "translation": "西服",
    "translations": [
      "西服",
      "套装 v．适合",
      "一套衣服"
    ]
  },
  {
    "id": "word_1348",
    "word": "summer",
    "phonetic": "'sʌmə(r)",
    "translation": "夏天",
    "translations": [
      "夏天",
      "夏季"
    ]
  },
  {
    "id": "word_1349",
    "word": "sun",
    "phonetic": "sʌn",
    "translation": "太阳",
    "translations": [
      "太阳",
      "阳光"
    ]
  },
  {
    "id": "word_1350",
    "word": "sunny",
    "phonetic": "'sʌni",
    "translation": "晴朗的",
    "translations": [
      "晴朗的",
      "阳光充足的"
    ]
  },
  {
    "id": "word_1351",
    "word": "supermarket",
    "phonetic": "'suːpəmɑːkɪt",
    "translation": "超级市场",
    "translations": [
      "超级市场",
      "超市"
    ]
  },
  {
    "id": "word_1352",
    "word": "support",
    "phonetic": "sə'pɔːt",
    "translation": "．支持",
    "translations": [
      "．支持"
    ]
  },
  {
    "id": "word_1353",
    "word": "suppose",
    "phonetic": "sə'pəʊz",
    "translation": "猜想",
    "translations": [
      "猜想",
      "推测",
      "料想"
    ]
  },
  {
    "id": "word_1354",
    "word": "sure",
    "phonetic": "ʃʊə(r)",
    "translation": "确信的",
    "translations": [
      "确信的",
      "肯定的",
      "的确",
      "一定",
      "当然"
    ]
  },
  {
    "id": "word_1355",
    "word": "surface",
    "phonetic": "'sɜːfɪs",
    "translation": "表面",
    "translations": [
      "表面"
    ]
  },
  {
    "id": "word_1356",
    "word": "surprise",
    "phonetic": "sə'praɪz",
    "translation": "使惊奇",
    "translations": [
      "使惊奇",
      "使诧异",
      "意外之事",
      "惊奇"
    ]
  },
  {
    "id": "word_1357",
    "word": "survey",
    "phonetic": "'sɜːveɪ",
    "translation": "调查",
    "translations": [
      "调查"
    ]
  },
  {
    "id": "word_1358",
    "word": "survive",
    "phonetic": "sə'vaɪv",
    "translation": "存活",
    "translations": [
      "存活",
      "幸存",
      "艰难度过"
    ]
  },
  {
    "id": "word_1359",
    "word": "sweater",
    "phonetic": "'swetə(r)",
    "translation": "毛衣",
    "translations": [
      "毛衣"
    ]
  },
  {
    "id": "word_1360",
    "word": "sweep",
    "phonetic": "swiːp",
    "translation": "打扫",
    "translations": [
      "打扫"
    ]
  },
  {
    "id": "word_1361",
    "word": "sweet",
    "phonetic": "swiːt",
    "translation": "甜食",
    "translations": [
      "甜食",
      "糖果",
      "甜的",
      "甜蜜的",
      "含糖的"
    ]
  },
  {
    "id": "word_1362",
    "word": "swim",
    "phonetic": "swɪm",
    "translation": "游泳",
    "translations": [
      "游泳",
      "游"
    ]
  },
  {
    "id": "word_1363",
    "word": "symbol",
    "phonetic": "'sɪmb(ə)l",
    "translation": "象征",
    "translations": [
      "象征"
    ]
  },
  {
    "id": "word_1364",
    "word": "table",
    "phonetic": "'teɪbl",
    "translation": "桌子",
    "translations": [
      "桌子"
    ]
  },
  {
    "id": "word_1365",
    "word": "tail",
    "phonetic": "teɪl",
    "translation": "尾巴",
    "translations": [
      "尾巴",
      "尾部"
    ]
  },
  {
    "id": "word_1366",
    "word": "take",
    "phonetic": "teɪk",
    "translation": "拿走",
    "translations": [
      "拿走",
      "买下",
      "服用"
    ]
  },
  {
    "id": "word_1367",
    "word": "talent",
    "phonetic": "'tælənt",
    "translation": "天资",
    "translations": [
      "天资",
      "天赋"
    ]
  },
  {
    "id": "word_1368",
    "word": "talk",
    "phonetic": "tɔːk",
    "translation": "．谈话",
    "translations": [
      "．谈话"
    ]
  },
  {
    "id": "word_1369",
    "word": "tall",
    "phonetic": "tɔːl",
    "translation": "高的",
    "translations": [
      "高的"
    ]
  },
  {
    "id": "word_1370",
    "word": "tap",
    "phonetic": "tæp",
    "translation": "水龙头",
    "translations": [
      "水龙头",
      "．轻敲",
      "轻扣"
    ]
  },
  {
    "id": "word_1371",
    "word": "tape",
    "phonetic": "teɪp",
    "translation": "磁带",
    "translations": [
      "磁带",
      "录音带"
    ]
  },
  {
    "id": "word_1372",
    "word": "task",
    "phonetic": "tɑːsk",
    "translation": "任务",
    "translations": [
      "任务",
      "工作"
    ]
  },
  {
    "id": "word_1373",
    "word": "taste",
    "phonetic": "teɪst",
    "translation": "味道",
    "translations": [
      "味道",
      "味觉",
      "有……味道"
    ]
  },
  {
    "id": "word_1374",
    "word": "taxi",
    "phonetic": "'tæksi",
    "translation": "出租汽车",
    "translations": [
      "出租汽车"
    ]
  },
  {
    "id": "word_1375",
    "word": "tea",
    "phonetic": "tiː",
    "translation": "茶",
    "translations": [
      "茶",
      "茶叶"
    ]
  },
  {
    "id": "word_1376",
    "word": "teach",
    "phonetic": "tiːtʃ",
    "translation": "教",
    "translations": [
      "教",
      "教授"
    ]
  },
  {
    "id": "word_1377",
    "word": "teacher",
    "phonetic": "'tiːtʃə(r)",
    "translation": "教师",
    "translations": [
      "教师",
      "教员"
    ]
  },
  {
    "id": "word_1378",
    "word": "team",
    "phonetic": "tiːm",
    "translation": "队",
    "translations": [
      "队",
      "组"
    ]
  },
  {
    "id": "word_1379",
    "word": "teamwork",
    "phonetic": "'tiːmwɜːk",
    "translation": "团队合作",
    "translations": [
      "团队合作",
      "团队"
    ]
  },
  {
    "id": "word_1380",
    "word": "technology",
    "phonetic": "tek'nɒlədʒi",
    "translation": "技术",
    "translations": [
      "技术"
    ]
  },
  {
    "id": "word_1381",
    "word": "teenage",
    "phonetic": "'tiːneɪdʒ",
    "translation": "十几岁的",
    "translations": [
      "十几岁的"
    ]
  },
  {
    "id": "word_1382",
    "word": "tell",
    "phonetic": "tel",
    "translation": "告诉",
    "translations": [
      "告诉",
      "讲述"
    ]
  },
  {
    "id": "word_1383",
    "word": "temperature",
    "phonetic": "'temprətʃə(r)",
    "translation": "温度",
    "translations": [
      "温度",
      "体温"
    ]
  },
  {
    "id": "word_1384",
    "word": "tennis",
    "phonetic": "'tenɪs",
    "translation": "网球",
    "translations": [
      "网球"
    ]
  },
  {
    "id": "word_1385",
    "word": "tent",
    "phonetic": "tent",
    "translation": "帐篷",
    "translations": [
      "帐篷"
    ]
  },
  {
    "id": "word_1386",
    "word": "term",
    "phonetic": "tɜːm",
    "translation": "学期",
    "translations": [
      "学期",
      "术语"
    ]
  },
  {
    "id": "word_1387",
    "word": "terrible",
    "phonetic": "'terəbl",
    "translation": "非常讨厌的",
    "translations": [
      "非常讨厌的"
    ]
  },
  {
    "id": "word_1388",
    "word": "test",
    "phonetic": "test",
    "translation": "．测试",
    "translations": [
      "．测试"
    ]
  },
  {
    "id": "word_1389",
    "word": "text",
    "phonetic": "tekst",
    "translation": "文本",
    "translations": [
      "文本",
      "课文"
    ]
  },
  {
    "id": "word_1390",
    "word": "than",
    "phonetic": "ðæn",
    "translation": "比",
    "translations": [
      "比",
      "与其"
    ]
  },
  {
    "id": "word_1391",
    "word": "thank",
    "phonetic": "θæ k",
    "translation": "感谢",
    "translations": [
      "感谢",
      "谢谢"
    ]
  },
  {
    "id": "word_1392",
    "word": "that",
    "phonetic": "ðæt",
    "translation": "那",
    "translations": [
      "那",
      "那个"
    ]
  },
  {
    "id": "word_1393",
    "word": "the",
    "phonetic": "ðɪ；ðə",
    "translation": "这",
    "translations": [
      "这"
    ]
  },
  {
    "id": "word_1394",
    "word": "theatre",
    "phonetic": "'θɪətə(r)",
    "translation": "剧场",
    "translations": [
      "剧场",
      "戏院"
    ]
  },
  {
    "id": "word_1395",
    "word": "their",
    "phonetic": "ðeə(r)",
    "translation": "他",
    "translations": [
      "他"
    ]
  },
  {
    "id": "word_1396",
    "word": "theirs",
    "phonetic": "ðeəz",
    "translation": "他",
    "translations": [
      "他"
    ]
  },
  {
    "id": "word_1397",
    "word": "them",
    "phonetic": "ðem",
    "translation": "他",
    "translations": [
      "他"
    ]
  },
  {
    "id": "word_1398",
    "word": "themselves",
    "phonetic": "ðəm'selvz",
    "translation": "他",
    "translations": [
      "他"
    ]
  },
  {
    "id": "word_1399",
    "word": "then",
    "phonetic": "ðen",
    "translation": "当时",
    "translations": [
      "当时",
      "那时",
      "然后",
      "那么"
    ]
  },
  {
    "id": "word_1400",
    "word": "there",
    "phonetic": "ðeə(r)",
    "translation": "在那里",
    "translations": [
      "在那里",
      "往那里"
    ]
  },
  {
    "id": "word_1401",
    "word": "therefore",
    "phonetic": "'ðeəfɔː(r)",
    "translation": "因此",
    "translations": [
      "因此",
      "所以"
    ]
  },
  {
    "id": "word_1402",
    "word": "these",
    "phonetic": "ðiːz",
    "translation": "这些",
    "translations": [
      "这些"
    ]
  },
  {
    "id": "word_1403",
    "word": "they",
    "phonetic": "ðeɪ",
    "translation": "他",
    "translations": [
      "他"
    ]
  },
  {
    "id": "word_1404",
    "word": "thick",
    "phonetic": "θɪk",
    "translation": "浓密的",
    "translations": [
      "浓密的",
      "厚的"
    ]
  },
  {
    "id": "word_1405",
    "word": "thin",
    "phonetic": "θɪn",
    "translation": "薄的",
    "translations": [
      "薄的",
      "瘦的",
      "稀的"
    ]
  },
  {
    "id": "word_1406",
    "word": "thing",
    "phonetic": "θɪ   ",
    "translation": "东西",
    "translations": [
      "东西",
      "物品",
      "事情",
      "事件"
    ]
  },
  {
    "id": "word_1407",
    "word": "think",
    "phonetic": "θɪ   k",
    "translation": "想",
    "translations": [
      "想",
      "认为",
      "考虑"
    ]
  },
  {
    "id": "word_1408",
    "word": "thirsty",
    "phonetic": "'θɜːsti",
    "translation": "口渴的",
    "translations": [
      "口渴的",
      "渴望的"
    ]
  },
  {
    "id": "word_1409",
    "word": "this",
    "phonetic": "ðɪs",
    "translation": "这",
    "translations": [
      "这",
      "这个"
    ]
  },
  {
    "id": "word_1410",
    "word": "those",
    "phonetic": "ðəʊz",
    "translation": "那些",
    "translations": [
      "那些"
    ]
  },
  {
    "id": "word_1411",
    "word": "though",
    "phonetic": "ðəʊ",
    "translation": "虽然",
    "translations": [
      "虽然",
      "可是",
      "然而"
    ]
  },
  {
    "id": "word_1412",
    "word": "thought",
    "phonetic": "θɔːt",
    "translation": "想法",
    "translations": [
      "想法",
      "看法",
      "主意"
    ]
  },
  {
    "id": "word_1413",
    "word": "throat",
    "phonetic": "θrəʊt",
    "translation": "喉咙",
    "translations": [
      "喉咙",
      "咽喉"
    ]
  },
  {
    "id": "word_1414",
    "word": "through",
    "phonetic": "θruː",
    "translation": "穿过",
    "translations": [
      "穿过",
      "通过",
      "从始至终",
      "凭借",
      "自始至终"
    ]
  },
  {
    "id": "word_1415",
    "word": "throw",
    "phonetic": "θrəʊ",
    "translation": "投",
    "translations": [
      "投",
      "掷",
      "扔"
    ]
  },
  {
    "id": "word_1416",
    "word": "thunder",
    "phonetic": "'θʌndə(r)",
    "translation": "雷",
    "translations": [
      "雷",
      "雷声",
      "轰隆声"
    ]
  },
  {
    "id": "word_1417",
    "word": "ticket",
    "phonetic": "'tɪkɪt",
    "translation": "票",
    "translations": [
      "票",
      "券"
    ]
  },
  {
    "id": "word_1418",
    "word": "tidy",
    "phonetic": "'taɪdi",
    "translation": "整洁的",
    "translations": [
      "整洁的",
      "干净的 v．使"
    ]
  },
  {
    "id": "word_1419",
    "word": "tie",
    "phonetic": "taɪ",
    "translation": "拴",
    "translations": [
      "拴",
      "扎",
      "．领带"
    ]
  },
  {
    "id": "word_1420",
    "word": "tiger",
    "phonetic": "'taɪɡə(r)",
    "translation": "老虎",
    "translations": [
      "老虎"
    ]
  },
  {
    "id": "word_1421",
    "word": "time",
    "phonetic": "taɪm",
    "translation": "时间",
    "translations": [
      "时间",
      "时代",
      "次"
    ]
  },
  {
    "id": "word_1422",
    "word": "tiny",
    "phonetic": "'taɪni",
    "translation": "极小的",
    "translations": [
      "极小的",
      "微小的"
    ]
  },
  {
    "id": "word_1423",
    "word": "tired",
    "phonetic": "'taɪəd",
    "translation": "疲劳的",
    "translations": [
      "疲劳的",
      "厌倦的"
    ]
  },
  {
    "id": "word_1424",
    "word": "to",
    "phonetic": "tuː",
    "translation": "向",
    "translations": [
      "向",
      "朝",
      "往"
    ]
  },
  {
    "id": "word_1425",
    "word": "today",
    "phonetic": "tə'deɪ",
    "translation": "．",
    "translations": [
      "．"
    ]
  },
  {
    "id": "word_1426",
    "word": "tofu",
    "phonetic": "'təʊfuː",
    "translation": "豆腐",
    "translations": [
      "豆腐"
    ]
  },
  {
    "id": "word_1427",
    "word": "together",
    "phonetic": "tə'ɡeðə(r)",
    "translation": "在一起",
    "translations": [
      "在一起",
      "共同"
    ]
  },
  {
    "id": "word_1428",
    "word": "toilet",
    "phonetic": "'tɔɪlət",
    "translation": "坐便器",
    "translations": [
      "坐便器",
      "厕所",
      "座便器"
    ]
  },
  {
    "id": "word_1429",
    "word": "tomato",
    "phonetic": "tə'mɑːtəʊ",
    "translation": "西红柿",
    "translations": [
      "西红柿",
      "番茄"
    ]
  },
  {
    "id": "word_1430",
    "word": "tomorrow",
    "phonetic": "tə'mɒrəʊ",
    "translation": "．",
    "translations": [
      "．"
    ]
  },
  {
    "id": "word_1431",
    "word": "ton",
    "phonetic": "tʌn",
    "translation": "吨",
    "translations": [
      "吨"
    ]
  },
  {
    "id": "word_1432",
    "word": "tonight",
    "phonetic": "tə'naɪt",
    "translation": "．",
    "translations": [
      "．"
    ]
  },
  {
    "id": "word_1433",
    "word": "too",
    "phonetic": "tuː",
    "translation": "也",
    "translations": [
      "也",
      "还",
      "又",
      "太"
    ]
  },
  {
    "id": "word_1434",
    "word": "tool",
    "phonetic": "tuːl",
    "translation": "工具",
    "translations": [
      "工具",
      "器具"
    ]
  },
  {
    "id": "word_1435",
    "word": "tooth",
    "phonetic": "tuːθ",
    "translation": "牙齿",
    "translations": [
      "牙齿"
    ]
  },
  {
    "id": "word_1436",
    "word": "top",
    "phonetic": "tɒp",
    "translation": "顶部",
    "translations": [
      "顶部",
      "上面"
    ]
  },
  {
    "id": "word_1437",
    "word": "total",
    "phonetic": "'təʊtl",
    "translation": "总计的",
    "translations": [
      "总计的",
      "全体的",
      "总计",
      "总数",
      "全部的"
    ]
  },
  {
    "id": "word_1438",
    "word": "touch",
    "phonetic": "tʌtʃ",
    "translation": "．触摸",
    "translations": [
      "．触摸",
      "接触"
    ]
  },
  {
    "id": "word_1439",
    "word": "tour",
    "phonetic": "tʊə(r)",
    "translation": "参观",
    "translations": [
      "参观",
      "观光",
      "旅行"
    ]
  },
  {
    "id": "word_1440",
    "word": "tourist",
    "phonetic": "'tʊərɪst",
    "translation": "旅行者",
    "translations": [
      "旅行者",
      "观光者"
    ]
  },
  {
    "id": "word_1441",
    "word": "towards",
    "phonetic": "tə'wɔːd(z)",
    "translation": "向",
    "translations": [
      "向",
      "朝",
      "对着"
    ]
  },
  {
    "id": "word_1442",
    "word": "tower",
    "phonetic": "'taʊə(r)",
    "translation": "塔",
    "translations": [
      "塔",
      "塔楼"
    ]
  },
  {
    "id": "word_1443",
    "word": "town",
    "phonetic": "taʊn",
    "translation": "镇",
    "translations": [
      "镇",
      "市镇",
      "市区的"
    ]
  },
  {
    "id": "word_1444",
    "word": "toy",
    "phonetic": "tɔɪ",
    "translation": "玩具",
    "translations": [
      "玩具",
      "玩物"
    ]
  },
  {
    "id": "word_1445",
    "word": "trade",
    "phonetic": "treɪd",
    "translation": "贸易",
    "translations": [
      "贸易",
      "交易"
    ]
  },
  {
    "id": "word_1446",
    "word": "tradition",
    "phonetic": "trə'dɪʃn",
    "translation": "传统",
    "translations": [
      "传统"
    ]
  },
  {
    "id": "word_1447",
    "word": "traffic",
    "phonetic": "'træfɪk",
    "translation": "交通",
    "translations": [
      "交通",
      "路上行驶的车"
    ]
  },
  {
    "id": "word_1448",
    "word": "train",
    "phonetic": "treɪn",
    "translation": "火车 v．培训",
    "translations": [
      "火车 v．培训",
      "训"
    ]
  },
  {
    "id": "word_1449",
    "word": "training",
    "phonetic": "'treɪnɪ ",
    "translation": "培训",
    "translations": [
      "培训"
    ]
  },
  {
    "id": "word_1450",
    "word": "translate",
    "phonetic": "træns'leɪt",
    "translation": "翻译",
    "translations": [
      "翻译"
    ]
  },
  {
    "id": "word_1451",
    "word": "travel",
    "phonetic": "'trævl",
    "translation": "．旅行",
    "translations": [
      "．旅行"
    ]
  },
  {
    "id": "word_1452",
    "word": "treasure",
    "phonetic": "'treʒə(r)",
    "translation": "金银财宝",
    "translations": [
      "金银财宝",
      "财富",
      "珍宝"
    ]
  },
  {
    "id": "word_1453",
    "word": "treat",
    "phonetic": "triːt",
    "translation": "款待",
    "translations": [
      "款待",
      "招待",
      "请",
      "治疗",
      "对待"
    ]
  },
  {
    "id": "word_1454",
    "word": "tree",
    "phonetic": "triː",
    "translation": "树",
    "translations": [
      "树"
    ]
  },
  {
    "id": "word_1455",
    "word": "trip",
    "phonetic": "trɪp",
    "translation": "旅行",
    "translations": [
      "旅行",
      "旅游"
    ]
  },
  {
    "id": "word_1456",
    "word": "trouble",
    "phonetic": "'trʌbl",
    "translation": "问题",
    "translations": [
      "问题",
      "困难",
      "苦恼"
    ]
  },
  {
    "id": "word_1457",
    "word": "trousers",
    "phonetic": "'traʊzəz",
    "translation": "裤子",
    "translations": [
      "裤子"
    ]
  },
  {
    "id": "word_1458",
    "word": "truck",
    "phonetic": "trʌk",
    "translation": "卡车",
    "translations": [
      "卡车",
      "运货车"
    ]
  },
  {
    "id": "word_1459",
    "word": "true",
    "phonetic": "truː",
    "translation": "真实的",
    "translations": [
      "真实的",
      "真正的"
    ]
  },
  {
    "id": "word_1460",
    "word": "trust",
    "phonetic": "trʌst",
    "translation": "．相信",
    "translations": [
      "．相信",
      "信任"
    ]
  },
  {
    "id": "word_1461",
    "word": "truth",
    "phonetic": "truːθ",
    "translation": "事实",
    "translations": [
      "事实",
      "真相"
    ]
  },
  {
    "id": "word_1462",
    "word": "try",
    "phonetic": "traɪ",
    "translation": "．试图",
    "translations": [
      "．试图",
      "努力"
    ]
  },
  {
    "id": "word_1463",
    "word": "turn",
    "phonetic": "tɜːn",
    "translation": "旋转",
    "translations": [
      "旋转",
      "转身",
      "翻转",
      "转"
    ]
  },
  {
    "id": "word_1464",
    "word": "TV",
    "phonetic": "ˌtiː 'viː",
    "translation": "电视",
    "translations": [
      "电视"
    ]
  },
  {
    "id": "word_1465",
    "word": "ugly",
    "phonetic": "'ʌɡli",
    "translation": "丑陋的",
    "translations": [
      "丑陋的",
      "难看的"
    ]
  },
  {
    "id": "word_1466",
    "word": "umbrella",
    "phonetic": "ʌm'brelə",
    "translation": "雨伞",
    "translations": [
      "雨伞"
    ]
  },
  {
    "id": "word_1467",
    "word": "uncle",
    "phonetic": "'ʌ kl",
    "translation": "叔",
    "translations": [
      "叔",
      "伯",
      "舅",
      "姑父",
      "姨"
    ]
  },
  {
    "id": "word_1468",
    "word": "under",
    "phonetic": "'ʌndə(r)",
    "translation": "在……下面",
    "translations": [
      "在……下面"
    ]
  },
  {
    "id": "word_1469",
    "word": "underground",
    "phonetic": "ˌʌndə'ɡraʊnd",
    "translation": "地下的 n．地铁",
    "translations": [
      "地下的 n．地铁"
    ]
  },
  {
    "id": "word_1470",
    "word": "understand",
    "phonetic": "ˌʌndə'stænd",
    "translation": "懂",
    "translations": [
      "懂",
      "理解",
      "领会"
    ]
  },
  {
    "id": "word_1471",
    "word": "uniform",
    "phonetic": "'juːnɪfɔːm",
    "translation": "制服",
    "translations": [
      "制服",
      "校服"
    ]
  },
  {
    "id": "word_1472",
    "word": "unit",
    "phonetic": "'juːnɪt",
    "translation": "单元",
    "translations": [
      "单元",
      "单位"
    ]
  },
  {
    "id": "word_1473",
    "word": "universe",
    "phonetic": "'juːnɪvɜːs",
    "translation": "宇宙",
    "translations": [
      "宇宙"
    ]
  },
  {
    "id": "word_1474",
    "word": "university",
    "phonetic": "ˌjuːnɪ'vɜːsəti",
    "translation": "大学",
    "translations": [
      "大学"
    ]
  },
  {
    "id": "word_1475",
    "word": "unless",
    "phonetic": "ən'les",
    "translation": "如果不",
    "translations": [
      "如果不",
      "除非"
    ]
  },
  {
    "id": "word_1476",
    "word": "until",
    "phonetic": "ən'tɪl",
    "translation": "直到",
    "translations": [
      "直到"
    ]
  },
  {
    "id": "word_1477",
    "word": "up",
    "phonetic": "ʌp",
    "translation": "向上",
    "translations": [
      "向上",
      "在上方",
      "向",
      "在"
    ]
  },
  {
    "id": "word_1478",
    "word": "upon",
    "phonetic": "ə'pɒn",
    "translation": "在……上面",
    "translations": [
      "在……上面"
    ]
  },
  {
    "id": "word_1479",
    "word": "us",
    "phonetic": "ʌs",
    "translation": "我们",
    "translations": [
      "我们"
    ]
  },
  {
    "id": "word_1480",
    "word": "use",
    "phonetic": "juːz",
    "translation": "．利用",
    "translations": [
      "．利用"
    ]
  },
  {
    "id": "word_1481",
    "word": "usual",
    "phonetic": "'juːʒʊəl",
    "translation": "通常的",
    "translations": [
      "通常的",
      "平常的"
    ]
  },
  {
    "id": "word_1482",
    "word": "vacation",
    "phonetic": "və'keɪʃn",
    "translation": "假期",
    "translations": [
      "假期",
      "度假"
    ]
  },
  {
    "id": "word_1483",
    "word": "value",
    "phonetic": "'væljuː",
    "translation": "价值 v．重视",
    "translations": [
      "价值 v．重视",
      "珍视",
      "有用的",
      "宝贵的"
    ]
  },
  {
    "id": "word_1484",
    "word": "vegetable",
    "phonetic": "'vedʒtəbl",
    "translation": "蔬菜",
    "translations": [
      "蔬菜"
    ]
  },
  {
    "id": "word_1485",
    "word": "very",
    "phonetic": "'veri",
    "translation": "很，非常",
    "translations": [
      "很，非常",
      "非常"
    ]
  },
  {
    "id": "word_1486",
    "word": "victory",
    "phonetic": "'vɪktəri",
    "translation": "胜利",
    "translations": [
      "胜利"
    ]
  },
  {
    "id": "word_1487",
    "word": "video",
    "phonetic": "'vɪdiəʊ",
    "translation": "录像",
    "translations": [
      "录像",
      "视频"
    ]
  },
  {
    "id": "word_1488",
    "word": "view",
    "phonetic": "vjuː",
    "translation": "观点",
    "translations": [
      "观点",
      "看法",
      "立场"
    ]
  },
  {
    "id": "word_1489",
    "word": "village",
    "phonetic": "'vɪlɪdʒ",
    "translation": "村庄",
    "translations": [
      "村庄",
      "乡村"
    ]
  },
  {
    "id": "word_1490",
    "word": "violin",
    "phonetic": "ˌvaɪə'lɪn",
    "translation": "小提琴",
    "translations": [
      "小提琴"
    ]
  },
  {
    "id": "word_1491",
    "word": "virus",
    "phonetic": "'vaɪrəs",
    "translation": "病毒",
    "translations": [
      "病毒"
    ]
  },
  {
    "id": "word_1492",
    "word": "visit",
    "phonetic": "'vɪzɪt",
    "translation": "．参观",
    "translations": [
      "．参观"
    ]
  },
  {
    "id": "word_1493",
    "word": "voice",
    "phonetic": "vɔɪs",
    "translation": "说话声",
    "translations": [
      "说话声",
      "嗓音"
    ]
  },
  {
    "id": "word_1494",
    "word": "volleyball",
    "phonetic": "'vɒlibɔːl",
    "translation": "排球",
    "translations": [
      "排球"
    ]
  },
  {
    "id": "word_1495",
    "word": "voluntary",
    "phonetic": "'vɒləntri",
    "translation": "自愿的",
    "translations": [
      "自愿的",
      "义务的"
    ]
  },
  {
    "id": "word_1496",
    "word": "volunteer",
    "phonetic": "vɒlən'tɪə(r)",
    "translation": "义务做",
    "translations": [
      "义务做",
      "自愿做",
      "志愿者"
    ]
  },
  {
    "id": "word_1497",
    "word": "vote",
    "phonetic": "vəʊt",
    "translation": "投票选举",
    "translations": [
      "投票选举",
      "选票",
      "投票结果"
    ]
  },
  {
    "id": "word_1498",
    "word": "wait",
    "phonetic": "weɪt",
    "translation": "等待",
    "translations": [
      "等待",
      "等候"
    ]
  },
  {
    "id": "word_1499",
    "word": "wake",
    "phonetic": "weɪk",
    "translation": "醒",
    "translations": [
      "醒",
      "醒来",
      "叫醒"
    ]
  },
  {
    "id": "word_1500",
    "word": "walk",
    "phonetic": "wɔːk",
    "translation": "．步行",
    "translations": [
      "．步行",
      "散步"
    ]
  },
  {
    "id": "word_1501",
    "word": "wall",
    "phonetic": "wɔːl",
    "translation": "墙",
    "translations": [
      "墙"
    ]
  },
  {
    "id": "word_1502",
    "word": "wallet",
    "phonetic": "'wɒlɪt",
    "translation": "钱包",
    "translations": [
      "钱包",
      "皮夹"
    ]
  },
  {
    "id": "word_1503",
    "word": "want",
    "phonetic": "wɒnt",
    "translation": "想",
    "translations": [
      "想",
      "想要",
      "需要"
    ]
  },
  {
    "id": "word_1504",
    "word": "war",
    "phonetic": "wɔː(r)",
    "translation": "战争",
    "translations": [
      "战争"
    ]
  },
  {
    "id": "word_1505",
    "word": "warm",
    "phonetic": "wɔːm",
    "translation": "暖和的",
    "translations": [
      "暖和的",
      "温暖的"
    ]
  },
  {
    "id": "word_1506",
    "word": "warn",
    "phonetic": "wɔːn",
    "translation": "警告",
    "translations": [
      "警告",
      "告诫"
    ]
  },
  {
    "id": "word_1507",
    "word": "wash",
    "phonetic": "wɒʃ",
    "translation": "洗",
    "translations": [
      "洗"
    ]
  },
  {
    "id": "word_1508",
    "word": "waste",
    "phonetic": "weɪst",
    "translation": "浪费",
    "translations": [
      "浪费",
      "垃圾",
      "滥用"
    ]
  },
  {
    "id": "word_1509",
    "word": "watch",
    "phonetic": "wɒtʃ",
    "translation": "观看",
    "translations": [
      "观看",
      "注视",
      "当心",
      "注意"
    ]
  },
  {
    "id": "word_1510",
    "word": "water",
    "phonetic": "'wɔːtə(r)",
    "translation": "水",
    "translations": [
      "水",
      "．给……浇水"
    ]
  },
  {
    "id": "word_1511",
    "word": "watermelon",
    "phonetic": "'wɔːtəmelən",
    "translation": "西瓜",
    "translations": [
      "西瓜"
    ]
  },
  {
    "id": "word_1512",
    "word": "wave",
    "phonetic": "weɪv",
    "translation": "海浪 v．挥",
    "translations": [
      "海浪 v．挥"
    ]
  },
  {
    "id": "word_1513",
    "word": "way",
    "phonetic": "weɪ",
    "translation": "路，路线",
    "translations": [
      "路，路线",
      "方法",
      "手段"
    ]
  },
  {
    "id": "word_1514",
    "word": "we",
    "phonetic": "wiː",
    "translation": "我们",
    "translations": [
      "我们"
    ]
  },
  {
    "id": "word_1515",
    "word": "weak",
    "phonetic": "wiːk",
    "translation": "差的",
    "translations": [
      "差的",
      "虚弱的"
    ]
  },
  {
    "id": "word_1516",
    "word": "wealth",
    "phonetic": "welθ",
    "translation": "财产",
    "translations": [
      "财产",
      "财富"
    ]
  },
  {
    "id": "word_1517",
    "word": "wear",
    "phonetic": "weə(r)",
    "translation": "穿",
    "translations": [
      "穿",
      "戴"
    ]
  },
  {
    "id": "word_1518",
    "word": "weather",
    "phonetic": "'weðə(r)",
    "translation": "天气",
    "translations": [
      "天气"
    ]
  },
  {
    "id": "word_1519",
    "word": "website",
    "phonetic": "'websaɪt",
    "translation": "网站",
    "translations": [
      "网站"
    ]
  },
  {
    "id": "word_1520",
    "word": "week",
    "phonetic": "wiːk",
    "translation": "星期",
    "translations": [
      "星期",
      "周",
      "周报",
      "周刊"
    ]
  },
  {
    "id": "word_1521",
    "word": "weekday",
    "phonetic": "'wiːkdeɪ",
    "translation": "工作日",
    "translations": [
      "工作日"
    ]
  },
  {
    "id": "word_1522",
    "word": "weekend",
    "phonetic": "ˌwiːk'end",
    "translation": "周末",
    "translations": [
      "周末"
    ]
  },
  {
    "id": "word_1523",
    "word": "weigh",
    "phonetic": "weɪ",
    "translation": "称……的重量",
    "translations": [
      "称……的重量",
      "重"
    ]
  },
  {
    "id": "word_1524",
    "word": "weight",
    "phonetic": "weɪt",
    "translation": "重",
    "translations": [
      "重",
      "重量"
    ]
  },
  {
    "id": "word_1525",
    "word": "welcome",
    "phonetic": "'welkəm",
    "translation": "．欢迎",
    "translations": [
      "．欢迎",
      "受欢迎的"
    ]
  },
  {
    "id": "word_1526",
    "word": "well",
    "phonetic": "wel",
    "translation": "状态良好的 int.表示惊讶、同意等",
    "translations": [
      "状态良好的 int.表示惊讶、同意等"
    ]
  },
  {
    "id": "word_1527",
    "word": "west",
    "phonetic": "west",
    "translation": "西方的",
    "translations": [
      "西方的",
      "向西的"
    ]
  },
  {
    "id": "word_1528",
    "word": "wet",
    "phonetic": "wet",
    "translation": "湿的",
    "translations": [
      "湿的",
      "潮的",
      "下雨的"
    ]
  },
  {
    "id": "word_1529",
    "word": "whale",
    "phonetic": "weɪl",
    "translation": "鲸",
    "translations": [
      "鲸",
      "鲸鱼"
    ]
  },
  {
    "id": "word_1530",
    "word": "what",
    "phonetic": "wɒt",
    "translation": "什么",
    "translations": [
      "什么"
    ]
  },
  {
    "id": "word_1531",
    "word": "whatever",
    "phonetic": "wɒt'evə(r)",
    "translation": "任何",
    "translations": [
      "任何",
      "无论什么",
      "每一"
    ]
  },
  {
    "id": "word_1532",
    "word": "wheel",
    "phonetic": "wiːl",
    "translation": "轮",
    "translations": [
      "轮",
      "车轮",
      "轮胎"
    ]
  },
  {
    "id": "word_1533",
    "word": "when",
    "phonetic": "wen",
    "translation": "何时",
    "translations": [
      "何时"
    ]
  },
  {
    "id": "word_1534",
    "word": "whenever",
    "phonetic": "wen'evə(r)",
    "translation": "每当",
    "translations": [
      "每当",
      "无论何时"
    ]
  },
  {
    "id": "word_1535",
    "word": "where",
    "phonetic": "weə(r)",
    "translation": "在哪里",
    "translations": [
      "在哪里",
      "到哪里"
    ]
  },
  {
    "id": "word_1536",
    "word": "whether",
    "phonetic": "'weðə(r)",
    "translation": "是否",
    "translations": [
      "是否",
      "不管……",
      "或者……"
    ]
  },
  {
    "id": "word_1537",
    "word": "which",
    "phonetic": "wɪtʃ",
    "translation": "&",
    "translations": [
      "&"
    ]
  },
  {
    "id": "word_1538",
    "word": "while",
    "phonetic": "waɪl",
    "translation": "在……的时候",
    "translations": [
      "在……的时候",
      "和……同时",
      "而",
      "一段时间"
    ]
  },
  {
    "id": "word_1539",
    "word": "white",
    "phonetic": "waɪt",
    "translation": "白色的 n．白色",
    "translations": [
      "白色的 n．白色"
    ]
  },
  {
    "id": "word_1540",
    "word": "who",
    "phonetic": "huː",
    "translation": "谁",
    "translations": [
      "谁"
    ]
  },
  {
    "id": "word_1541",
    "word": "whole",
    "phonetic": "həʊl",
    "translation": "整个的",
    "translations": [
      "整个的",
      "全部的"
    ]
  },
  {
    "id": "word_1542",
    "word": "whom",
    "phonetic": "huːm",
    "translation": "谁",
    "translations": [
      "谁",
      "什么人"
    ]
  },
  {
    "id": "word_1543",
    "word": "whose",
    "phonetic": "huːz",
    "translation": "谁的",
    "translations": [
      "谁的"
    ]
  },
  {
    "id": "word_1544",
    "word": "why",
    "phonetic": "waɪ",
    "translation": "为什么",
    "translations": [
      "为什么"
    ]
  },
  {
    "id": "word_1545",
    "word": "wide",
    "phonetic": "waɪd",
    "translation": "宽的",
    "translations": [
      "宽的",
      "宽阔的"
    ]
  },
  {
    "id": "word_1546",
    "word": "wife",
    "phonetic": "waɪf",
    "translation": "妻子",
    "translations": [
      "妻子"
    ]
  },
  {
    "id": "word_1547",
    "word": "wild",
    "phonetic": "waɪld",
    "translation": "野生的n．野生环境",
    "translations": [
      "野生的n．野生环境"
    ]
  },
  {
    "id": "word_1548",
    "word": "will",
    "phonetic": "wɪl",
    "translation": "．将，会",
    "translations": [
      "．将，会",
      "愿意",
      "要",
      "意志",
      "决心"
    ]
  },
  {
    "id": "word_1549",
    "word": "win",
    "phonetic": "wɪn",
    "translation": "获胜",
    "translations": [
      "获胜",
      "赢得"
    ]
  },
  {
    "id": "word_1550",
    "word": "wind",
    "phonetic": "wɪnd",
    "translation": "风",
    "translations": [
      "风"
    ]
  },
  {
    "id": "word_1551",
    "word": "window",
    "phonetic": "'wɪndəʊ",
    "translation": "窗户",
    "translations": [
      "窗户",
      "窗口"
    ]
  },
  {
    "id": "word_1552",
    "word": "windy",
    "phonetic": "'wɪndi",
    "translation": "有风的",
    "translations": [
      "有风的",
      "多风的"
    ]
  },
  {
    "id": "word_1553",
    "word": "wing",
    "phonetic": "wɪ   ",
    "translation": "翅膀",
    "translations": [
      "翅膀"
    ]
  },
  {
    "id": "word_1554",
    "word": "winner",
    "phonetic": "'wɪnə(r)",
    "translation": "获胜者",
    "translations": [
      "获胜者"
    ]
  },
  {
    "id": "word_1555",
    "word": "winter",
    "phonetic": "'wɪntə(r)",
    "translation": "冬天",
    "translations": [
      "冬天",
      "冬季"
    ]
  },
  {
    "id": "word_1556",
    "word": "wise",
    "phonetic": "waɪz",
    "translation": "明智的",
    "translations": [
      "明智的",
      "英明的",
      "有"
    ]
  },
  {
    "id": "word_1557",
    "word": "wish",
    "phonetic": "wɪʃ",
    "translation": "愿望",
    "translations": [
      "愿望",
      "祝愿",
      "希望",
      "想要"
    ]
  },
  {
    "id": "word_1558",
    "word": "with",
    "phonetic": "wɪð",
    "translation": "带有",
    "translations": [
      "带有",
      "和",
      "用"
    ]
  },
  {
    "id": "word_1559",
    "word": "within",
    "phonetic": "wɪ'ðɪn",
    "translation": "在",
    "translations": [
      "在"
    ]
  },
  {
    "id": "word_1560",
    "word": "without",
    "phonetic": "wɪ'ðaʊt",
    "translation": "没有",
    "translations": [
      "没有",
      "不"
    ]
  },
  {
    "id": "word_1561",
    "word": "wolf",
    "phonetic": "wʊlf",
    "translation": "狼",
    "translations": [
      "狼"
    ]
  },
  {
    "id": "word_1562",
    "word": "woman",
    "phonetic": "'wʊmən",
    "translation": "妇女",
    "translations": [
      "妇女",
      "成年女子"
    ]
  },
  {
    "id": "word_1563",
    "word": "wonder",
    "phonetic": "'wʌndə(r)",
    "translation": "感到惊奇",
    "translations": [
      "感到惊奇",
      "想知道",
      "惊奇",
      "奇迹",
      "奇观"
    ]
  },
  {
    "id": "word_1564",
    "word": "wonderful",
    "phonetic": "'wʌndəfl",
    "translation": "美妙的",
    "translations": [
      "美妙的",
      "精彩的",
      "令"
    ]
  },
  {
    "id": "word_1565",
    "word": "wood",
    "phonetic": "wʊd",
    "translation": "木头",
    "translations": [
      "木头",
      "树林"
    ]
  },
  {
    "id": "word_1566",
    "word": "word",
    "phonetic": "wɜːd",
    "translation": "词",
    "translations": [
      "词",
      "单词",
      "话语"
    ]
  },
  {
    "id": "word_1567",
    "word": "work",
    "phonetic": "wɜːk",
    "translation": "工作",
    "translations": [
      "工作",
      "运转",
      "奏效"
    ]
  },
  {
    "id": "word_1568",
    "word": "worker",
    "phonetic": "'wɜːkə(r)",
    "translation": "工人",
    "translations": [
      "工人",
      "工作者"
    ]
  },
  {
    "id": "word_1569",
    "word": "world",
    "phonetic": "wɜːld",
    "translation": "世界",
    "translations": [
      "世界"
    ]
  },
  {
    "id": "word_1570",
    "word": "worry",
    "phonetic": "'wʌri",
    "translation": "．烦恼",
    "translations": [
      "．烦恼",
      "担忧",
      "困"
    ]
  },
  {
    "id": "word_1571",
    "word": "worse",
    "phonetic": "wɜːs",
    "translation": "更坏的",
    "translations": [
      "更坏的",
      "更严重的",
      "更坏地",
      "更糟地"
    ]
  },
  {
    "id": "word_1572",
    "word": "worst",
    "phonetic": "wɜːst",
    "translation": "最差的",
    "translations": [
      "最差的",
      "最严重的",
      "最坏",
      "最糟"
    ]
  },
  {
    "id": "word_1573",
    "word": "worth",
    "phonetic": "wɜːθ",
    "translation": "有……价值",
    "translations": [
      "有……价值",
      "值得"
    ]
  },
  {
    "id": "word_1574",
    "word": "would",
    "phonetic": "wʊd",
    "translation": "．将会",
    "translations": [
      "．将会",
      "打算"
    ]
  },
  {
    "id": "word_1575",
    "word": "wound",
    "phonetic": "wuːnd",
    "translation": "伤口",
    "translations": [
      "伤口"
    ]
  },
  {
    "id": "word_1576",
    "word": "write",
    "phonetic": "raɪt",
    "translation": "写字",
    "translations": [
      "写字",
      "书写",
      "写作"
    ]
  },
  {
    "id": "word_1577",
    "word": "wrong",
    "phonetic": "rɒ\t",
    "translation": "错误的",
    "translations": [
      "错误的",
      "不正确"
    ]
  },
  {
    "id": "word_1578",
    "word": "yard",
    "phonetic": "jɑːd",
    "translation": "院子",
    "translations": [
      "院子"
    ]
  },
  {
    "id": "word_1579",
    "word": "year",
    "phonetic": "jɪə(r)",
    "translation": "年",
    "translations": [
      "年",
      "岁"
    ]
  },
  {
    "id": "word_1580",
    "word": "yellow",
    "phonetic": "'jeləʊ",
    "translation": "黄色 adj.黄色的",
    "translations": [
      "黄色 adj.黄色的"
    ]
  },
  {
    "id": "word_1581",
    "word": "yes",
    "phonetic": "jes",
    "translation": "是，好",
    "translations": [
      "是，好",
      "表示同意的答复"
    ]
  },
  {
    "id": "word_1582",
    "word": "yesterday",
    "phonetic": "'jestədeɪ",
    "translation": "昨天",
    "translations": [
      "昨天"
    ]
  },
  {
    "id": "word_1583",
    "word": "yet",
    "phonetic": "jet",
    "translation": "尚",
    "translations": [
      "尚",
      "还",
      "仍然"
    ]
  },
  {
    "id": "word_1584",
    "word": "yogurt",
    "phonetic": "'jɒɡət",
    "translation": "酸奶",
    "translations": [
      "酸奶"
    ]
  },
  {
    "id": "word_1585",
    "word": "you",
    "phonetic": "juː",
    "translation": "你",
    "translations": [
      "你",
      "你们"
    ]
  },
  {
    "id": "word_1586",
    "word": "young",
    "phonetic": "jʌ\t",
    "translation": "年轻的",
    "translations": [
      "年轻的",
      "年少的"
    ]
  },
  {
    "id": "word_1587",
    "word": "your",
    "phonetic": "jɔː(r)",
    "translation": "你的",
    "translations": [
      "你的",
      "你们的"
    ]
  },
  {
    "id": "word_1588",
    "word": "yours",
    "phonetic": "jɔːz",
    "translation": "你的",
    "translations": [
      "你的",
      "你们的"
    ]
  },
  {
    "id": "word_1589",
    "word": "yourself",
    "phonetic": "jɔː'self",
    "translation": "你自己",
    "translations": [
      "你自己"
    ]
  },
  {
    "id": "word_1590",
    "word": "youth",
    "phonetic": "juːθ",
    "translation": "青少年时期",
    "translations": [
      "青少年时期",
      "青春"
    ]
  },
  {
    "id": "word_1591",
    "word": "zero",
    "phonetic": "'zɪərəʊ",
    "translation": "零",
    "translations": [
      "零"
    ]
  },
  {
    "id": "word_1592",
    "word": "zoo",
    "phonetic": "zuː",
    "translation": "动物园",
    "translations": [
      "动物园"
    ]
  },
  {
    "id": "word_1593",
    "word": "accountant",
    "phonetic": "",
    "translation": "会计人员",
    "translations": [
      "会计人员"
    ]
  },
  {
    "id": "word_1595",
    "word": "adopt",
    "phonetic": "",
    "translation": "收养",
    "translations": [
      "收养"
    ]
  },
  {
    "id": "word_1597",
    "word": "agent",
    "phonetic": "",
    "translation": "代理人",
    "translations": [
      "代理人"
    ]
  },
  {
    "id": "word_1599",
    "word": "agriculture",
    "phonetic": "",
    "translation": "农业",
    "translations": [
      "农业"
    ]
  },
  {
    "id": "word_1601",
    "word": "ambulance",
    "phonetic": "",
    "translation": "救护车",
    "translations": [
      "救护车"
    ]
  },
  {
    "id": "word_1603",
    "word": "architect",
    "phonetic": "",
    "translation": "建筑师",
    "translations": [
      "建筑师"
    ]
  },
  {
    "id": "word_1605",
    "word": "balcony",
    "phonetic": "",
    "translation": "阳台",
    "translations": [
      "阳台"
    ]
  },
  {
    "id": "word_1607",
    "word": "barbecue",
    "phonetic": "",
    "translation": "户外烧烤",
    "translations": [
      "户外烧烤"
    ]
  },
  {
    "id": "word_1609",
    "word": "bay",
    "phonetic": "",
    "translation": "（海或湖泊的）湾",
    "translations": [
      "（海或湖泊的）湾"
    ]
  },
  {
    "id": "word_1611",
    "word": "boot",
    "phonetic": "",
    "translation": "靴子",
    "translations": [
      "靴子"
    ]
  },
  {
    "id": "word_1613",
    "word": "bone",
    "phonetic": "",
    "translation": "骨头",
    "translations": [
      "骨头"
    ]
  },
  {
    "id": "word_1615",
    "word": "chest",
    "phonetic": "",
    "translation": "胸部",
    "translations": [
      "胸部"
    ]
  },
  {
    "id": "word_1617",
    "word": "cigarette",
    "phonetic": "",
    "translation": "香烟",
    "translations": [
      "香烟"
    ]
  },
  {
    "id": "word_1619",
    "word": "cocoa",
    "phonetic": "",
    "translation": "可可",
    "translations": [
      "可可"
    ]
  },
  {
    "id": "word_1621",
    "word": "complaint",
    "phonetic": "",
    "translation": "抱怨",
    "translations": [
      "抱怨"
    ]
  },
  {
    "id": "word_1623",
    "word": "composition",
    "phonetic": "",
    "translation": "作文",
    "translations": [
      "作文"
    ]
  },
  {
    "id": "word_1625",
    "word": "consumer",
    "phonetic": "",
    "translation": "消费者",
    "translations": [
      "消费者"
    ]
  },
  {
    "id": "word_1627",
    "word": "continent",
    "phonetic": "",
    "translation": "大陆",
    "translations": [
      "大陆",
      "洲"
    ]
  },
  {
    "id": "word_1629",
    "word": "cruel",
    "phonetic": "",
    "translation": "残忍的",
    "translations": [
      "残忍的"
    ]
  },
  {
    "id": "word_1631",
    "word": "curtain",
    "phonetic": "",
    "translation": "窗帘",
    "translations": [
      "窗帘"
    ]
  },
  {
    "id": "word_1633",
    "word": "desktop",
    "phonetic": "",
    "translation": "台式计算机",
    "translations": [
      "台式计算机"
    ]
  },
  {
    "id": "word_1635",
    "word": "dessert",
    "phonetic": "",
    "translation": "甜点",
    "translations": [
      "甜点"
    ]
  },
  {
    "id": "word_1637",
    "word": "dine",
    "phonetic": "",
    "translation": "吃饭",
    "translations": [
      "吃饭"
    ]
  },
  {
    "id": "word_1639",
    "word": "dinosaur",
    "phonetic": "",
    "translation": "恐龙",
    "translations": [
      "恐龙"
    ]
  },
  {
    "id": "word_1641",
    "word": "district",
    "phonetic": "",
    "translation": "行政区",
    "translations": [
      "行政区"
    ]
  },
  {
    "id": "word_1643",
    "word": "drawer",
    "phonetic": "",
    "translation": "抽屉",
    "translations": [
      "抽屉"
    ]
  },
  {
    "id": "word_1645",
    "word": "Easter",
    "phonetic": "",
    "translation": "复活节",
    "translations": [
      "复活节"
    ]
  },
  {
    "id": "word_1647",
    "word": "editor",
    "phonetic": "",
    "translation": "编辑",
    "translations": [
      "编辑",
      "编辑器"
    ]
  },
  {
    "id": "word_1649",
    "word": "equipment",
    "phonetic": "",
    "translation": "设备",
    "translations": [
      "设备",
      "器材"
    ]
  },
  {
    "id": "word_1651",
    "word": "estate",
    "phonetic": "",
    "translation": "庄园",
    "translations": [
      "庄园",
      "地产",
      "遗产"
    ]
  },
  {
    "id": "word_1653",
    "word": "exact",
    "phonetic": "",
    "translation": "精确的",
    "translations": [
      "精确的"
    ]
  },
  {
    "id": "word_1655",
    "word": "feather",
    "phonetic": "",
    "translation": "羽毛",
    "translations": [
      "羽毛"
    ]
  },
  {
    "id": "word_1657",
    "word": "fence",
    "phonetic": "",
    "translation": "栅栏",
    "translations": [
      "栅栏",
      "用栅栏围住"
    ]
  },
  {
    "id": "word_1659",
    "word": "fry",
    "phonetic": "",
    "translation": "油炸",
    "translations": [
      "油炸"
    ]
  },
  {
    "id": "word_1661",
    "word": "garlic",
    "phonetic": "",
    "translation": "大蒜",
    "translations": [
      "大蒜"
    ]
  },
  {
    "id": "word_1663",
    "word": "greedy",
    "phonetic": "",
    "translation": "贪婪的",
    "translations": [
      "贪婪的"
    ]
  },
  {
    "id": "word_1665",
    "word": "hammer",
    "phonetic": "",
    "translation": "锤子",
    "translations": [
      "锤子"
    ]
  },
  {
    "id": "word_1667",
    "word": "helmet",
    "phonetic": "",
    "translation": "头盔",
    "translations": [
      "头盔"
    ]
  },
  {
    "id": "word_1669",
    "word": "hostess",
    "phonetic": "",
    "translation": "女主持/主人",
    "translations": [
      "女主持/主人"
    ]
  },
  {
    "id": "word_1671",
    "word": "indeed",
    "phonetic": "",
    "translation": "确实",
    "translations": [
      "确实"
    ]
  },
  {
    "id": "word_1673",
    "word": "individual",
    "phonetic": "",
    "translation": "个人的",
    "translations": [
      "个人的",
      "个人"
    ]
  },
  {
    "id": "word_1675",
    "word": "jelly",
    "phonetic": "",
    "translation": "果冻",
    "translations": [
      "果冻"
    ]
  },
  {
    "id": "word_1677",
    "word": "kangaroo",
    "phonetic": "",
    "translation": "袋鼠",
    "translations": [
      "袋鼠"
    ]
  },
  {
    "id": "word_1679",
    "word": "kingdom",
    "phonetic": "",
    "translation": "王国",
    "translations": [
      "王国"
    ]
  },
  {
    "id": "word_1681",
    "word": "Kung fu",
    "phonetic": "",
    "translation": "功夫",
    "translations": [
      "功夫"
    ]
  },
  {
    "id": "word_1683",
    "word": "lamb",
    "phonetic": "",
    "translation": "小羊/羊肉",
    "translations": [
      "小羊/羊肉"
    ]
  },
  {
    "id": "word_1685",
    "word": "lip",
    "phonetic": "",
    "translation": "嘴唇",
    "translations": [
      "嘴唇"
    ]
  },
  {
    "id": "word_1687",
    "word": "missing",
    "phonetic": "",
    "translation": "丢失的",
    "translations": [
      "丢失的"
    ]
  },
  {
    "id": "word_1689",
    "word": "monster",
    "phonetic": "",
    "translation": "怪兽",
    "translations": [
      "怪兽"
    ]
  },
  {
    "id": "word_1691",
    "word": "motor",
    "phonetic": "",
    "translation": "发动机",
    "translations": [
      "发动机"
    ]
  },
  {
    "id": "word_1693",
    "word": "musician",
    "phonetic": "",
    "translation": "音乐家",
    "translations": [
      "音乐家"
    ]
  },
  {
    "id": "word_1695",
    "word": "nursery",
    "phonetic": "",
    "translation": "托儿所",
    "translations": [
      "托儿所"
    ]
  },
  {
    "id": "word_1697",
    "word": "opportunity",
    "phonetic": "",
    "translation": "机会",
    "translations": [
      "机会"
    ]
  },
  {
    "id": "word_1699",
    "word": "oral",
    "phonetic": "",
    "translation": "口头的",
    "translations": [
      "口头的"
    ]
  },
  {
    "id": "word_1701",
    "word": "pan",
    "phonetic": "",
    "translation": "平底锅",
    "translations": [
      "平底锅"
    ]
  },
  {
    "id": "word_1703",
    "word": "pants",
    "phonetic": "",
    "translation": "裤子",
    "translations": [
      "裤子"
    ]
  },
  {
    "id": "word_1705",
    "word": "parcel",
    "phonetic": "",
    "translation": "包裹",
    "translations": [
      "包裹"
    ]
  },
  {
    "id": "word_1707",
    "word": "penny",
    "phonetic": "",
    "translation": "便士",
    "translations": [
      "便士"
    ]
  },
  {
    "id": "word_1709",
    "word": "phrase",
    "phonetic": "",
    "translation": "短语",
    "translations": [
      "短语"
    ]
  },
  {
    "id": "word_1711",
    "word": "pillow",
    "phonetic": "",
    "translation": "枕头",
    "translations": [
      "枕头"
    ]
  },
  {
    "id": "word_1713",
    "word": "quarrel",
    "phonetic": "",
    "translation": "争吵",
    "translations": [
      "争吵"
    ]
  },
  {
    "id": "word_1715",
    "word": "rail",
    "phonetic": "",
    "translation": "铁路",
    "translations": [
      "铁路",
      "铁轨"
    ]
  },
  {
    "id": "word_1717",
    "word": "recite",
    "phonetic": "",
    "translation": "背诵",
    "translations": [
      "背诵"
    ]
  },
  {
    "id": "word_1719",
    "word": "riddle",
    "phonetic": "",
    "translation": "谜语",
    "translations": [
      "谜语"
    ]
  },
  {
    "id": "word_1721",
    "word": "roofs",
    "phonetic": "",
    "translation": "屋顶（复数）",
    "translations": [
      "屋顶（复数）"
    ]
  },
  {
    "id": "word_1723",
    "word": "sausage",
    "phonetic": "",
    "translation": "香肠",
    "translations": [
      "香肠"
    ]
  },
  {
    "id": "word_1725",
    "word": "soccer",
    "phonetic": "",
    "translation": "足球",
    "translations": [
      "足球"
    ]
  },
  {
    "id": "word_1727",
    "word": "spot",
    "phonetic": "",
    "translation": "点",
    "translations": [
      "点",
      "斑点",
      "污渍"
    ]
  },
  {
    "id": "word_1729",
    "word": "stem",
    "phonetic": "",
    "translation": "茎",
    "translations": [
      "茎",
      "干"
    ]
  },
  {
    "id": "word_1731",
    "word": "switch",
    "phonetic": "",
    "translation": "开关",
    "translations": [
      "开关",
      "转换"
    ]
  },
  {
    "id": "word_1733",
    "word": "tense",
    "phonetic": "",
    "translation": "时态",
    "translations": [
      "时态"
    ]
  },
  {
    "id": "word_1735",
    "word": "tight",
    "phonetic": "",
    "translation": "紧的",
    "translations": [
      "紧的",
      "牢固的"
    ]
  },
  {
    "id": "word_1737",
    "word": "towel",
    "phonetic": "",
    "translation": "毛巾",
    "translations": [
      "毛巾"
    ]
  },
  {
    "id": "word_1739",
    "word": "waist",
    "phonetic": "",
    "translation": "腰围",
    "translations": [
      "腰围"
    ]
  },
  {
    "id": "word_1741",
    "word": "wire",
    "phonetic": "",
    "translation": "电线",
    "translations": [
      "电线"
    ]
  },
  {
    "id": "word_1743",
    "word": "Antarctica",
    "phonetic": "",
    "translation": "南极洲",
    "translations": [
      "南极洲"
    ]
  },
  {
    "id": "word_1745",
    "word": "The Atlantic Ocean",
    "phonetic": "",
    "translation": "大西洋",
    "translations": [
      "大西洋"
    ]
  },
  {
    "id": "word_1747",
    "word": "The Indian Ocean",
    "phonetic": "",
    "translation": "印度洋",
    "translations": [
      "印度洋"
    ]
  },
  {
    "id": "word_1749",
    "word": "New Zealand",
    "phonetic": "",
    "translation": "新西兰（人）",
    "translations": [
      "新西兰（人）"
    ]
  },
  {
    "id": "word_1751",
    "word": "Russia",
    "phonetic": "",
    "translation": "俄罗斯（人/的）",
    "translations": [
      "俄罗斯（人/的）"
    ]
  },
  {
    "id": "word_1753",
    "word": "Singapore",
    "phonetic": "",
    "translation": "新加坡（人/的）",
    "translations": [
      "新加坡（人/的）"
    ]
  },
  {
    "id": "word_1755",
    "word": "The United Kingdom",
    "phonetic": "",
    "translation": "英国全称",
    "translations": [
      "英国全称"
    ]
  },
  {
    "id": "word_1757",
    "word": "The United States of America",
    "phonetic": "",
    "translation": "美国全称",
    "translations": [
      "美国全称"
    ]
  }
];

// 检查答案是否正确（支持多答案）
function checkAnswer(word, userAnswer) {
  const entry = testVocabulary.find(w => w.word.toLowerCase() === word.toLowerCase());
  if (!entry || !entry.translations) return false;
  const normalized = userAnswer.trim().replace(/\s+/g, "");
  return entry.translations.some(t => {
    const cleanT = t.replace(/\s+/g, "");
    return cleanT === normalized || cleanT.includes(normalized) || normalized.includes(cleanT);
  });
}

// 获取单词的所有翻译
function getTranslations(word) {
  const entry = testVocabulary.find(w => w.word.toLowerCase() === word.toLowerCase());
  return entry ? entry.translations : [];
}

export { testVocabulary, checkAnswer, getTranslations };
