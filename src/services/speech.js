/**
 * 语音服务模块
 * 提供音频播放、语音识别、语音合成等功能
 *
 * 支持两种模式：
 * 1. 本地音频模式：使用预录音频文件（推荐，速度快）
 * 2. 微信同声传译插件模式：实时语音合成和识别
 *
 * HappyEnglish 复用自小树识字项目
 */

// 音频文件基础路径
const AUDIO_BASE_PATH = '/assets/audio/';

// 音频类型
const AudioType = {
  WORD: 'word',        // 单词读音
  SENTENCE: 'sentence', // 句子读音
  FEEDBACK: 'feedback',  // 激励反馈
  PROMPT: 'prompt',     // 引导提示
  QUESTION: 'question'  // 题目音频
};

class SpeechService {
  constructor() {
    this.audioContext = null;
    this.recorderManager = null;
    this.isListening = false;
    this.currentPlaying = null;

    // 尝试加载微信同声传译插件（可选）
    this.plugin = null;
    this.loadPlugin();
  }

  // 加载微信同声传译插件
  loadPlugin() {
    try {
      this.plugin = requirePlugin('WechatSI');
    } catch (e) {
      console.log('微信同声传译插件未加载，使用本地音频模式');
      this.plugin = null;
    }
  }

  // ==================== 本地音频播放 ====================

  /**
   * 播放本地音频文件
   * @param {string} audioPath - 音频文件路径（相对于 /assets/audio/）
   * @returns {Promise}
   */
  playLocal(audioPath) {
    return new Promise((resolve, reject) => {
      // 销毁之前的音频上下文
      if (this.audioContext) {
        this.audioContext.destroy();
      }

      this.audioContext = wx.createInnerAudioContext();
      this.audioContext.src = AUDIO_BASE_PATH + audioPath;

      this.audioContext.onPlay(() => {
        console.log('开始播放:', audioPath);
      });

      this.audioContext.onEnded(() => {
        console.log('播放结束:', audioPath);
        this.audioContext.destroy();
        this.audioContext = null;
        resolve();
      });

      this.audioContext.onError((err) => {
        console.error('播放失败:', audioPath, err);
        reject(err);
      });

      this.audioContext.play();
    });
  }

  /**
   * 播放单词读音
   * @param {string} wordAudio - 单词音频文件名
   */
  async playWord(wordAudio) {
    try {
      const audioPath = `words/${wordAudio}.mp3`;
      await this.playLocal(audioPath);
    } catch (err) {
      console.error('播放单词音频失败:', err);
      // 备用：使用语音合成
      await this.textToSpeech(wordAudio);
    }
  }

  /**
   * 播放句子读音
   * @param {string} sentence - 句子内容
   */
  async playSentence(sentence) {
    try {
      await this.textToSpeech(sentence);
    } catch (err) {
      console.error('播放句子失败:', err);
    }
  }

  /**
   * 播放激励反馈语音
   * @param {string} type - 反馈类型
   */
  async playFeedback(type) {
    try {
      const audioPath = `feedback/${type}.mp3`;
      await this.playLocal(audioPath);
    } catch (err) {
      console.error('播放反馈音频失败:', type, err);
      // 备用：使用语音合成
      const textMap = {
        correct: '正确！',
        wrong: '错误，正确答案是...',
        good: '很好！',
        excellent: '太棒了！',
        tryAgain: '再试一次！',
        keepGoing: '继续加油！',
        perfect: '完美！',
        almost: '很接近了！',
        watchExplain: '请看解析'
      };
      const text = textMap[type] || '继续';
      await this.textToSpeech(text);
    }
  }

  /**
   * 播放引导提示语音
   * @param {string} type - 提示类型
   */
  async playPrompt(type) {
    try {
      const audioPath = `prompts/${type}.mp3`;
      await this.playLocal(audioPath);
    } catch (err) {
      console.error('播放提示音频失败:', type, err);
    }
  }

  // ==================== 微信语音合成（备用） ====================

  /**
   * 语音合成 - 使用微信同声传译插件
   * @param {string} text - 要转换的文字
   * @returns {Promise<string>} - 返回生成的音频文件路径
   */
  async textToSpeech(text) {
    if (!this.plugin) {
      console.log('同声传译插件不可用');
      return null;
    }

    return new Promise((resolve, reject) => {
      this.plugin.textToSpeech({
        lang: 'zh_CN',
        content: text,
        success: (res) => {
          console.log('语音合成成功:', res.filename);
          resolve(res.filename);
        },
        fail: (err) => {
          console.error('语音合成失败:', err);
          reject(err);
        }
      });
    });
  }

  /**
   * 播放合成的语音
   * @param {string} audioUrl - 音频文件路径
   */
  async playSynthesized(audioUrl) {
    if (!audioUrl) return;

    return new Promise((resolve, reject) => {
      if (this.audioContext) {
        this.audioContext.destroy();
      }

      this.audioContext = wx.createInnerAudioContext();
      this.audioContext.src = audioUrl;

      this.audioContext.onEnded(() => {
        this.audioContext.destroy();
        this.audioContext = null;
        resolve();
      });

      this.audioContext.onError((err) => {
        console.error('播放合成语音失败:', err);
        reject(err);
      });

      this.audioContext.play();
    });
  }

  // ==================== 语音识别 ====================

  /**
   * 开始录音并识别（用于听写模式）
   * @returns {Promise<string>} - 返回识别结果
   */
  async startListen() {
    if (!this.plugin) {
      console.log('同声传译插件不可用');
      return null;
    }

    return new Promise((resolve, reject) => {
      // 获取录音管理器
      if (!this.recorderManager) {
        this.recorderManager = wx.getRecorderManager();
      }

      this.recorderManager.onStart(() => {
        this.isListening = true;
        console.log('开始录音');
      });

      this.recorderManager.onStop((res) => {
        this.isListening = false;
        console.log('录音结束', res.tempFilePath);

        // 调用同声传译进行语音识别
        this.plugin.translateVoice({
          filePath: res.tempFilePath,
          format: 'mp3',
          success: (resTrans) => {
            console.log('识别结果:', resTrans.result);
            resolve(resTrans.result);
          },
          fail: (err) => {
            console.error('语音识别失败:', err);
            reject(err);
          }
        });
      });

      this.recorderManager.onError((err) => {
        this.isListening = false;
        console.error('录音失败:', err);
        reject(err);
      });

      // 开始录音
      this.recorderManager.start({
        duration: 10000,  // 最长10秒（听写需要更长时间）
        format: 'mp3',
        sampleRate: 44100,
        numberOfChannels: 1,
        encodeBitRate: 48000,
        audioType: 'mp3'
      });
    });
  }

  /**
   * 停止录音
   */
  stopListen() {
    if (this.recorderManager && this.isListening) {
      this.recorderManager.stop();
      this.isListening = false;
    }
  }

  // ==================== 工具方法 ====================

  /**
   * 检查音频文件是否存在
   * @param {string} audioPath - 音频路径
   * @returns {Promise<boolean>}
   */
  async checkAudioExists(audioPath) {
    const fullPath = AUDIO_BASE_PATH + audioPath;
    try {
      await wx.getFileSystemManager().access(fullPath);
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * 获取当前播放状态
   */
  isPlaying() {
    if (!this.audioContext) return false;
    return this.audioContext.paused === false;
  }

  /**
   * 暂停播放
   */
  pause() {
    if (this.audioContext) {
      this.audioContext.pause();
    }
  }

  /**
   * 继续播放
   */
  resume() {
    if (this.audioContext) {
      this.audioContext.play();
    }
  }

  /**
   * 停止播放
   */
  stop() {
    if (this.audioContext) {
      this.audioContext.stop();
      this.audioContext.destroy();
      this.audioContext = null;
    }
  }

  /**
   * 销毁资源
   */
  destroy() {
    if (this.audioContext) {
      this.audioContext.destroy();
      this.audioContext = null;
    }
    if (this.recorderManager) {
      this.recorderManager = null;
    }
    this.isListening = false;
  }
}

// 导出
module.exports = SpeechService;
module.exports.AudioType = AudioType;