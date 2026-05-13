/**
 * 词根词缀分析服务
 * 分析单词的词根词缀结构并提供记忆技巧
 */

class EtymologyService {
  constructor() {
    this.data = window.ETYMOLOGY_DATA;
  }

  // 分析单词的词根词缀
  analyzeWord(word) {
    const lowerWord = word.toLowerCase();
    const result = {
      word,
      prefix: null,
      suffix: null,
      root: null,
      relatedWords: [],
      explanation: ''
    };

    // 检测前缀（按长度降序排列，避免"un-"优先于"u-"的情况）
    const prefixEntries = Object.entries(this.data.prefixes).sort((a, b) => b[0].length - a[0].length);
    for (const [prefix, info] of prefixEntries) {
      if (lowerWord.startsWith(prefix) && lowerWord.length > prefix.length) {
        result.prefix = {
          prefix,
          ...info,
          part: lowerWord.slice(prefix.length)
        };
        break;
      }
    }

    // 检测后缀（按长度降序排列）
    const suffixEntries = Object.entries(this.data.suffixes).sort((a, b) => b[0].length - a[0].length);
    for (const [suffix, info] of suffixEntries) {
      if (lowerWord.endsWith(suffix) && lowerWord.length > suffix.length) {
        result.suffix = {
          suffix,
          ...info,
          part: lowerWord.slice(0, -suffix.length)
        };
        break;
      }
    }

    // 检测词根（按长度降序排列）
    const rootEntries = Object.entries(this.data.roots).sort((a, b) => b[0].length - a[0].length);
    for (const [root, info] of rootEntries) {
      if (lowerWord.includes(root)) {
        result.root = {
          root,
          ...info
        };
        result.relatedWords = (info.words || []).filter(w => w !== lowerWord).slice(0, 5);
        break;
      }
    }

    // 生成解释
    result.explanation = this.generateExplanation(result);

    return result;
  }

  // 生成记忆解释
  generateExplanation(analysis) {
    const parts = [];

    if (analysis.prefix) {
      parts.push(`"${analysis.prefix.prefix}" (${analysis.prefix.meaning}) + `);
    }

    if (analysis.root) {
      parts.push(`"${analysis.root.root}" (${analysis.root.meaning})`);
    } else if (analysis.suffix?.part) {
      parts.push(`"${analysis.suffix.part}"`);
    }

    if (analysis.suffix) {
      parts.push(` + "${analysis.suffix.suffix}" (${analysis.suffix.meaning})`);
    }

    return parts.join('');
  }

  // 获取同根词
  getRelatedWords(word) {
    const analysis = this.analyzeWord(word);
    if (analysis.root) {
      return analysis.root.words || [];
    }
    return [];
  }
}

// 导出到全局
window.etymologyService = new EtymologyService();