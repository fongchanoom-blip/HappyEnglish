"""验证修复后的词汇加载"""
from playwright.sync_api import sync_playwright
import time

BASE_URL = "https://happyenglish-phi.vercel.app"

for attempt in range(3):
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page(viewport={"width": 390, "height": 844})
            print(f"尝试 {attempt+1}: 访问首页...")
            page.goto(BASE_URL, wait_until="networkidle", timeout=60000)
            page.wait_for_timeout(2000)

            vocab_check = page.evaluate("""
                () => {
                    return {
                        hasVocabulary: typeof window.vocabulary !== 'undefined',
                        hasWords: false,
                        wordCount: 0,
                        vocabLength: typeof vocabulary !== 'undefined' ? vocabulary.length : -1
                    };
                }
            """)

            print(f"window.vocabulary存在: {vocab_check['hasVocabulary']}")
            print(f"vocabulary变量长度: {vocab_check['vocabLength']}")

            stat_nums = page.locator(".stat-num").all_text_contents()
            print(f"页面统计: {stat_nums}")

            if vocab_check['vocabLength'] > 1000:
                print("\n[PASS] 词汇加载正常!")
            else:
                print(f"\n[FAIL] 词汇仍有问题: {vocab_check['vocabLength']}")

            browser.close()
            break
    except Exception as e:
        print(f"尝试 {attempt+1} 失败: {e}")
        time.sleep(5)
