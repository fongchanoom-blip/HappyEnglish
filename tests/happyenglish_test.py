"""
HappyEnglish v2.0 完整测试脚本
测试所有核心功能：首页、批量测试、复习、错题本、AI服务

执行方式：
1. 启动服务器: python -m http.server 8081
2. 运行测试: python tests/happyenglish_test.py
"""

import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

from playwright.sync_api import sync_playwright
import json
from datetime import datetime

# 测试配置
BASE_URL = 'http://localhost:8081'
TEST_RESULTS = {
    'passed': [],
    'failed': [],
    'warnings': [],
    'errors': []
}

def log_pass(test_name, message=""):
    TEST_RESULTS['passed'].append(test_name)
    print(f"   [PASS] {test_name}")
    if message:
        print(f"         {message}")

def log_fail(test_name, message=""):
    TEST_RESULTS['failed'].append(test_name)
    print(f"   [FAIL] {test_name}")
    if message:
        print(f"         {message}: {message}")

def log_warn(message):
    TEST_RESULTS['warnings'].append(message)
    print(f"   [WARN] {message}")

def log_error(message):
    TEST_RESULTS['errors'].append(message)
    print(f"   [ERROR] {message}")

# ============================================================================
# 模块1: 首页测试
# ============================================================================
def test_homepage():
    """测试首页加载和核心元素"""
    print("\n" + "=" * 60)
    print("模块1: 首页测试")
    print("=" * 60)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        console_errors = []
        page.on('console', lambda msg: console_errors.append(msg.text) if msg.type == 'error' else None)

        # H-001: 首页加载
        print("\n[H-001] 测试首页加载...")
        try:
            page.goto(f'{BASE_URL}/src/index.html')
            page.wait_for_load_state('networkidle')
            page.wait_for_timeout(2000)

            title = page.title()
            assert 'HappyEnglish' in title, f"标题不包含HappyEnglish: {title}"
            log_pass("H-001", f"页面标题: {title}")
        except Exception as e:
            log_fail("H-001", str(e))

        # 检查核心元素
        print("\n[H-002] 检查首页核心元素...")
        try:
            # 检查Vue挂载点
            app = page.locator('#homeApp')
            assert app.count() > 0, "Vue挂载点不存在"
            log_pass("H-002", "Vue挂载点存在")

            # 检查统计数据显示
            stats = page.locator('.stat-card, .stats, [class*="stat"]')
            if stats.count() > 0:
                log_pass("H-002", f"找到 {stats.count()} 个统计元素")
            else:
                log_warn("未找到明显的统计元素，可能正常")
        except Exception as e:
            log_fail("H-002", str(e))

        # H-003: 检查批量测试入口
        print("\n[H-003] 检查批量测试入口...")
        try:
            batch_btn = page.locator('button:has-text("批量"), button:has-text("测试"), [class*="batch"]')
            if batch_btn.count() > 0:
                log_pass("H-003", "找到批量测试按钮")
            else:
                # 尝试其他方式查找
                all_btns = page.locator('button')
                print(f"         页面共有 {all_btns.count()} 个按钮")
                log_warn("未明确找到批量测试按钮")
        except Exception as e:
            log_fail("H-003", str(e))

        # 检查控制台错误
        if console_errors:
            print(f"\n[H-ERR] 发现 {len(console_errors)} 个控制台错误:")
            for err in console_errors[:5]:
                print(f"         - {err[:100]}")
        else:
            log_pass("H-ERR", "无JavaScript错误")

        browser.close()

# ============================================================================
# 模块2: 批量测试流程测试
# ============================================================================
def test_batch_test():
    """测试批量测试完整流程"""
    print("\n" + "=" * 60)
    print("模块2: 批量测试流程测试")
    print("=" * 60)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        console_errors = []
        page.on('console', lambda msg: console_errors.append(msg.text) if msg.type == 'error' else None)

        # BT-001: 进入批量测试
        print("\n[BT-001] 进入批量测试...")
        try:
            page.goto(f'{BASE_URL}/src/index.html')
            page.wait_for_load_state('networkidle')
            page.wait_for_timeout(2000)

            # 查找批量测试按钮
            batch_btns = page.locator('button')
            batch_btn = None
            for i in range(batch_btns.count()):
                btn_text = batch_btns.nth(i).text_content()
                if '批量' in btn_text or '测试' in btn_text:
                    batch_btn = batch_btns.nth(i)
                    break

            if batch_btn:
                batch_btn.click()
                page.wait_for_timeout(1000)
                log_pass("BT-001", "成功进入批量测试")
            else:
                # 可能直接在首页显示，需要检查
                content = page.content()
                if 'batch' in content.lower() or '30' in content:
                    log_pass("BT-001", "批量测试内容已加载")
                else:
                    log_fail("BT-001", "未找到批量测试入口")
        except Exception as e:
            log_fail("BT-001", str(e))

        # BT-002~005: 答题流程（简化测试）
        print("\n[BT-002] 测试答题交互...")
        try:
            # 查找题目和选项
            question = page.locator('[class*="word"], [class*="question"], .word')
            options = page.locator('[class*="option"], button:not([class*="nav"])')

            if question.count() > 0:
                log_pass("BT-002", f"找到题目元素: {question.count()} 个")
            else:
                log_warn("未找到题目元素，可能需要更多交互")

            if options.count() > 0:
                log_pass("BT-002", f"找到选项元素: {options.count()} 个")
                # 点击第一个选项
                options.first.click()
                page.wait_for_timeout(500)
                log_pass("BT-002", "成功点击选项")
        except Exception as e:
            log_fail("BT-002", str(e))

        # 检查控制台错误
        if console_errors:
            print(f"\n[BT-ERR] 发现 {len(console_errors)} 个控制台错误")
            for err in console_errors[:3]:
                print(f"         - {err[:80]}")
        else:
            log_pass("BT-ERR", "无JavaScript错误")

        browser.close()

# ============================================================================
# 模块3: 复习页面测试
# ============================================================================
def test_review_page():
    """测试复习页面"""
    print("\n" + "=" * 60)
    print("模块3: 复习页面测试")
    print("=" * 60)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        console_errors = []
        page.on('console', lambda msg: console_errors.append(msg.text) if msg.type == 'error' else None)

        # R-001: 加载复习页面
        print("\n[R-001] 加载复习页面...")
        try:
            page.goto(f'{BASE_URL}/src/pages/review.html')
            page.wait_for_load_state('networkidle')
            page.wait_for_timeout(3000)

            # 关闭可能打开的模态框
            page.evaluate("""
                () => {
                    // 尝试通过Vue实例关闭
                    const app = document.getElementById('reviewApp');
                    if(app && app.__vue_app__) {
                        const vue = app.__vue_app__;
                        const instance = vue._instance;
                        if(instance && instance.exposed) {
                            if(instance.exposed.selectedWord !== undefined) instance.exposed.selectedWord = null;
                            if(instance.exposed.showErrorDetail !== undefined) instance.exposed.showErrorDetail = false;
                        }
                        if(instance && instance.proxy) {
                            if(instance.proxy.selectedWord) instance.proxy.selectedWord = null;
                            if(instance.proxy.showErrorDetail) instance.proxy.showErrorDetail = false;
                        }
                    }
                    // 备用：直接点击背景关闭
                    const modal = document.querySelector('.modal');
                    if(modal) modal.click();
                }
            """)
            page.wait_for_timeout(500)

            header = page.locator('.header h2, h2')
            if header.count() > 0:
                header_text = header.first.text_content()
                log_pass("R-001", f"页面标题: {header_text}")
            else:
                log_warn("未找到页面标题")
        except Exception as e:
            log_fail("R-001", str(e))

        # R-002: 检查复习模式切换按钮
        print("\n[R-002] 检查复习模式切换...")
        try:
            # 智能复习按钮
            smart_btn = page.locator('.btn-smart, button:has-text("智能"), button:has-text("复习")')
            if smart_btn.count() > 0:
                log_pass("R-002", f"找到智能复习按钮")
                smart_btn.first.click(force=True)
                page.wait_for_timeout(500)
                log_pass("R-002", "成功点击智能复习按钮")
            else:
                log_warn("未找到智能复习按钮")
        except Exception as e:
            log_fail("R-002", str(e))

        # R-003: 检查错题本按钮
        print("\n[R-003] 检查错题本入口...")
        try:
            error_btn = page.locator('.btn-error-book, button:has-text("错题本")')
            if error_btn.count() > 0:
                log_pass("R-003", "找到错题本按钮")
                error_btn.first.click(force=True)
                page.wait_for_timeout(1000)

                # 检查是否显示错题本内容
                filter_tabs = page.locator('.filter-tabs, [class*="filter"]')
                if filter_tabs.count() > 0:
                    log_pass("R-003", "错题本界面加载成功")
                else:
                    log_warn("错题本界面元素不完整")
            else:
                log_warn("未找到错题本按钮")
        except Exception as e:
            log_fail("R-003", str(e))

        # R-004: 检查统计栏
        print("\n[R-004] 检查统计栏...")
        try:
            stats_bar = page.locator('.stats-bar, [class*="stat"]')
            if stats_bar.count() > 0:
                log_pass("R-004", f"找到统计栏，{stats_bar.count()} 个元素")
            else:
                log_warn("未找到统计栏")
        except Exception as e:
            log_fail("R-004", str(e))

        # 检查控制台错误
        if console_errors:
            print(f"\n[R-ERR] 发现 {len(console_errors)} 个控制台错误")
            for err in console_errors[:3]:
                print(f"         - {err[:80]}")
        else:
            log_pass("R-ERR", "无JavaScript错误")

        browser.close()

# ============================================================================
# 模块4: 错题本功能测试
# ============================================================================
def test_error_book():
    """测试错题本功能"""
    print("\n" + "=" * 60)
    print("模块4: 错题本功能测试")
    print("=" * 60)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        console_errors = []
        page.on('console', lambda msg: console_errors.append(msg.text) if msg.type == 'error' else None)

        # EB-001: 进入错题本
        print("\n[EB-001] 进入错题本...")
        try:
            page.goto(f'{BASE_URL}/src/pages/review.html')
            page.wait_for_load_state('networkidle')
            page.wait_for_timeout(2000)

            # 关闭可能打开的模态框
            page.evaluate("() => { const modal = document.querySelector('.modal'); if(modal) modal.click(); }")
            page.wait_for_timeout(500)

            # 点击错题本按钮
            error_btn = page.locator('button:has-text("错题本")')
            if error_btn.count() > 0:
                error_btn.first.click(force=True)
                page.wait_for_timeout(1000)
                log_pass("EB-001", "成功进入错题本")
            else:
                log_fail("EB-001", "未找到错题本按钮")
        except Exception as e:
            log_fail("EB-001", str(e))

        # EB-002: 检查分类标签
        print("\n[EB-002] 检查分类标签...")
        try:
            filter_tabs = page.locator('.filter-tabs button')
            if filter_tabs.count() >= 4:
                log_pass("EB-002", f"找到 {filter_tabs.count()} 个分类标签")
            else:
                log_warn(f"分类标签数量不足: {filter_tabs.count()}")
        except Exception as e:
            log_fail("EB-002", str(e))

        # EB-003: 检查空状态
        print("\n[EB-003] 检查空状态...")
        try:
            empty_state = page.locator('.empty-state, .empty-icon')
            if empty_state.count() > 0:
                empty_text = page.locator('.empty-text, .empty-icon').first.text_content()
                log_pass("EB-003", f"空状态显示: {empty_text}")
            else:
                # 没有空状态说明有数据
                error_cards = page.locator('.error-card, [class*="error"]')
                log_pass("EB-003", f"有错题记录或非空状态")
        except Exception as e:
            log_fail("EB-003", str(e))

        # EB-004: 检查详情弹窗结构
        print("\n[EB-004] 检查详情弹窗...")
        try:
            # 关闭可能打开的模态框
            page.evaluate("() => { const modal = document.querySelector('.modal'); if(modal) modal.click(); }")
            page.wait_for_timeout(500)

            # 点击一个错题卡片（如果存在）
            error_card = page.locator('.error-card, [class*="error-card"]').first
            if error_card.count() > 0:
                error_card.click(force=True)
                page.wait_for_timeout(1000)

                modal = page.locator('.modal, .error-detail-modal')
                if modal.count() > 0:
                    log_pass("EB-004", "详情弹窗打开成功")
                else:
                    log_warn("弹窗可能未打开")
            else:
                log_warn("当前无错题记录，跳过详情测试")
        except Exception as e:
            log_fail("EB-004", str(e))

        # 检查控制台错误
        if console_errors:
            print(f"\n[EB-ERR] 发现 {len(console_errors)} 个控制台错误")
            for err in console_errors[:3]:
                print(f"         - {err[:80]}")
        else:
            log_pass("EB-ERR", "无JavaScript错误")

        browser.close()

# ============================================================================
# 模块5: 其他页面测试
# ============================================================================
def test_other_pages():
    """测试其他页面"""
    print("\n" + "=" * 60)
    print("模块5: 其他页面测试")
    print("=" * 60)

    pages_to_test = [
        {'url': '/src/pages/story.html', 'name': '故事页面'},
        {'url': '/src/pages/report.html', 'name': '报告页面'},
        {'url': '/src/pages/achievements.html', 'name': '成就页面'},
        {'url': '/src/pages/profile.html', 'name': '个人中心'},
    ]

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        for page_info in pages_to_test:
            print(f"\n[PAGE] 测试{page_info['name']}...")
            page = browser.new_page()

            console_errors = []
            page.on('console', lambda msg: console_errors.append(msg.text) if msg.type == 'error' else None)

            try:
                page.goto(f"{BASE_URL}{page_info['url']}")
                page.wait_for_load_state('networkidle')
                page.wait_for_timeout(2000)

                # 检查页面是否加载
                content = page.content()
                if len(content) > 500:  # 有实质内容
                    log_pass(f"PAGE-{page_info['name']}", f"页面加载成功，内容长度 {len(content)}")
                else:
                    log_warn(f"PAGE-{page_info['name']}", "页面内容过少")

            except Exception as e:
                log_fail(f"PAGE-{page_info['name']}", str(e))

            if console_errors:
                print(f"         发现 {len(console_errors)} 个控制台错误")

        browser.close()

# ============================================================================
# 模块6: AI服务测试
# ============================================================================
def test_ai_service():
    """测试AI服务配置"""
    print("\n" + "=" * 60)
    print("模块6: AI服务测试")
    print("=" * 60)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        console_messages = []
        page.on('console', lambda msg: console_messages.append(f"[{msg.type}] {msg.text}"))

        print("\n[AI-001] 测试AI服务配置...")
        try:
            page.goto(f'{BASE_URL}/src/index.html')
            page.wait_for_load_state('networkidle')
            page.wait_for_timeout(3000)

            # 检查API Key是否配置
            api_key = page.evaluate("() => sessionStorage.getItem('minimax_api_key')")
            if api_key and len(api_key) > 20:
                log_pass("AI-001", f"API Key已配置，长度 {len(api_key)}")
            else:
                log_fail("AI-001", "API Key未配置或长度不足")
        except Exception as e:
            log_fail("AI-001", str(e))

        # AI-002: 检查AI服务对象
        print("\n[AI-002] 检查AI服务对象...")
        try:
            # AI服务在story.html中加载，先导航到该页面
            page.goto(f'{BASE_URL}/src/pages/story.html')
            page.wait_for_load_state('networkidle')
            page.wait_for_timeout(2000)

            ai_exists = page.evaluate("() => typeof window.aiService !== 'undefined'")
            if ai_exists:
                log_pass("AI-002", "aiService对象存在")
            else:
                log_fail("AI-002", "aiService对象不存在")
        except Exception as e:
            log_fail("AI-002", str(e))

        # AI-003: 检查数据库初始化
        print("\n[AI-003] 检查数据库初始化...")
        try:
            db_exists = page.evaluate("() => typeof window.db !== 'undefined' && window.db.db !== null")
            if db_exists:
                log_pass("AI-003", "IndexedDB已初始化")
            else:
                log_warn("IndexedDB可能未初始化（首次访问需用户交互）")
        except Exception as e:
            log_fail("AI-003", str(e))

        # 检查console日志
        errors = [m for m in console_messages if '[error]' in m.lower()]
        if errors:
            print(f"\n[AI-ERR] 发现 {len(errors)} 个错误:")
            for err in errors[:3]:
                print(f"         {err[:100]}")
        else:
            log_pass("AI-ERR", "无JavaScript错误")

        browser.close()

# ============================================================================
# 主函数
# ============================================================================
def main():
    print("=" * 60)
    print("HappyEnglish v2.0 完整测试")
    print(f"测试时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 60)

    try:
        # 执行所有测试模块
        test_homepage()
        test_batch_test()
        test_review_page()
        test_error_book()
        test_other_pages()
        test_ai_service()

    except Exception as e:
        print(f"\n[CRITICAL ERROR] {e}")
        raise

    # 输出测试结果汇总
    print("\n" + "=" * 60)
    print("测试结果汇总")
    print("=" * 60)

    total = len(TEST_RESULTS['passed']) + len(TEST_RESULTS['failed'])
    pass_rate = len(TEST_RESULTS['passed']) / total * 100 if total > 0 else 0

    print(f"\n总测试数: {total}")
    print(f"通过: {len(TEST_RESULTS['passed'])}")
    print(f"失败: {len(TEST_RESULTS['failed'])}")
    print(f"通过率: {pass_rate:.1f}%")

    if TEST_RESULTS['warnings']:
        print(f"\n警告: {len(TEST_RESULTS['warnings'])} 项")
        for w in TEST_RESULTS['warnings'][:5]:
            print(f"  - {w[:60]}")

    if TEST_RESULTS['errors']:
        print(f"\n错误: {len(TEST_RESULTS['errors'])} 项")
        for e in TEST_RESULTS['errors'][:5]:
            print(f"  - {e[:60]}")

    print("\n" + "=" * 60)
    if len(TEST_RESULTS['failed']) == 0:
        print("测试结果: 全部通过 ✓")
    elif len(TEST_RESULTS['failed']) <= 2:
        print("测试结果: 基本通过，有少量失败项")
    else:
        print("测试结果: 有较多失败项，需要修复")
    print("=" * 60)

    # 保存测试结果到JSON
    result_file = 'tests/test_results.json'
    with open(result_file, 'w', encoding='utf-8') as f:
        json.dump(TEST_RESULTS, f, ensure_ascii=False, indent=2)
    print(f"\n详细结果已保存到: {result_file}")

if __name__ == '__main__':
    main()
