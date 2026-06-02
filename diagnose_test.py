"""诊断测试：检查词汇数据是否正确加载"""
from playwright.sync_api import sync_playwright

BASE_URL = "https://happyenglish-phi.vercel.app"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 390, "height": 844})

    # 捕获控制台消息
    console_messages = []
    def handle_console(msg):
        console_messages.append(f"[{msg.type}] {msg.text}")
    page.on("console", handle_console)

    # 捕获页面错误
    page_errors = []
    def handle_page_error(err):
        page_errors.append(str(err))
    page.on("pageerror", handle_page_error)

    print("访问首页...")
    page.goto(BASE_URL, wait_until="networkidle", timeout=30000)
    page.wait_for_timeout(2000)  # 等待JS执行

    # 检查vocabulary对象
    vocab_check = page.evaluate("""
        () => {
            const result = {
                hasVocabulary: typeof window.vocabulary !== 'undefined',
                hasWords: false,
                wordCount: 0,
                firstWord: null,
                hasDataFile: false
            };
            if (window.vocabulary && window.vocabulary.words) {
                result.hasWords = true;
                result.wordCount = window.vocabulary.words.length;
                result.firstWord = window.vocabulary.words[0] ? window.vocabulary.words[0].word : null;
            }
            // 检查是否有全局词汇变量
            if (typeof vocabulary !== 'undefined') {
                result.hasDataFile = true;
                result.vocabLength = vocabulary.length;
            }
            return result;
        }
    """)

    print(f"词汇对象存在: {vocab_check['hasVocabulary']}")
    print(f"词汇有words属性: {vocab_check['hasWords']}")
    print(f"词汇数量: {vocab_check.get('wordCount', 0)}")
    print(f"首个词汇: {vocab_check.get('firstWord', 'N/A')}")
    print(f"全局vocabulary变量: {vocab_check.get('hasDataFile', False)}")
    print(f"全局vocabulary长度: {vocab_check.get('vocabLength', 'N/A')}")

    # 检查页面元素
    stat_nums = page.locator(".stat-num").all_text_contents()
    print(f"页面统计数字: {stat_nums}")

    # 检查批量测试按钮
    try:
        batch_btn = page.get_by_text("批量测试")
        print(f"批量测试按钮可见: {batch_btn.is_visible()}")
    except Exception as e:
        print(f"批量测试按钮: 未找到")

    # 检查控制台错误
    if console_messages:
        print(f"\n控制台消息 ({len(console_messages)}条):")
        errors = [m for m in console_messages if 'error' in m.lower()]
        if errors:
            print("错误消息:")
            for err in errors[:5]:
                print(f"  {err}")

    # 检查JS错误
    if page_errors:
        print(f"\n页面JS错误 ({len(page_errors)}条):")
        for err in page_errors[:5]:
            print(f"  {err}")

    browser.close()
