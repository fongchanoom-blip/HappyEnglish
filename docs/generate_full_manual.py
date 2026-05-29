"""
生成 HappyEnglish 完整用户手册 Word 文档（含所有页面截屏）
"""
from docx import Document
from docx.shared import Inches, Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_CELL_VERTICAL_ALIGNMENT
from docx.oxml.ns import qn, nsdecls
from docx.oxml import parse_xml
import os

# 路径配置
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SCREENSHOTS_DIR = os.path.join(BASE_DIR, '..', 'screenshots', 'manual')
OUTPUT_FILE = os.path.join(BASE_DIR, 'HappyEnglish-完整用户手册.docx')

# 配色方案
COLORS = {
    'primary': RGBColor(0x66, 0x7E, 0xEA),
    'secondary': RGBColor(0x76, 0x4B, 0xA2),
    'dark': RGBColor(0x2D, 0x37, 0x48),
    'text': RGBColor(0x4A, 0x55, 0x69),
    'light': RGBColor(0xF7, 0xFA, 0xFC),
    'success': RGBColor(0x67, 0xC2, 0x3A),
    'warning': RGBColor(0xE6, 0xA2, 0x3C),
    'danger': RGBColor(0xF5, 0x6C, 0x6C),
    'info': RGBColor(0x40, 0x9E, 0xFF),
    'white': RGBColor(0xFF, 0xFF, 0xFF),
}

def set_cell_shading(cell, color):
    shading_elm = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{color}" w:val="clear"/>')
    cell._tc.get_or_add_tcPr().append(shading_elm)

def add_horizontal_line(doc, color="667EEA"):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(6)
    p.paragraph_format.space_after = Pt(6)
    pPr = p._p.get_or_add_pPr()
    pBdr = parse_xml(
        f'<w:pBdr {nsdecls("w")}>'
        f'<w:bottom w:val="single" w:sz="12" w:space="1" w:color="{color}"/>'
        f'</w:pBdr>'
    )
    pPr.append(pBdr)

def add_styled_heading(doc, text, level=1):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(18 if level <= 1 else 12)
    p.paragraph_format.space_after = Pt(6)
    run = p.add_run(text)

    if level == 1:
        run.font.size = Pt(24)
        run.font.bold = True
        run.font.color.rgb = COLORS['primary']
    elif level == 2:
        run.font.size = Pt(16)
        run.font.bold = True
        run.font.color.rgb = COLORS['dark']
    elif level == 3:
        run.font.size = Pt(13)
        run.font.bold = True
        run.font.color.rgb = COLORS['dark']
    return p

def add_paragraph(doc, text):
    p = doc.add_paragraph(text)
    p.paragraph_format.space_before = Pt(6)
    p.paragraph_format.space_after = Pt(6)
    for run in p.runs:
        run.font.size = Pt(11)
        run.font.color.rgb = COLORS['text']
    return p

def add_screenshot(doc, image_path, width=Inches(5.0), caption=""):
    if not os.path.exists(image_path):
        print(f"  警告: 截图不存在 - {image_path}")
        return

    try:
        doc.add_picture(image_path, width=width)
        last_para = doc.paragraphs[-1]
        last_para.alignment = WD_ALIGN_PARAGRAPH.CENTER

        if caption:
            cap_p = doc.add_paragraph()
            cap_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            run = cap_p.add_run(caption)
            run.italic = True
            run.font.size = Pt(10)
            run.font.color.rgb = COLORS['text']

        doc.add_paragraph()
    except Exception as e:
        print(f"  添加图片失败: {e}")

def add_info_box(doc, title, content, color_hex="667EEA"):
    table = doc.add_table(rows=1, cols=1)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    cell = table.cell(0, 0)
    set_cell_shading(cell, color_hex)

    p1 = cell.paragraphs[0]
    run1 = p1.add_run(f"  {title}")
    run1.bold = True
    run1.font.size = Pt(11)
    run1.font.color.rgb = COLORS['white']

    p2 = cell.add_paragraph()
    run2 = p2.add_run(f"  {content}")
    run2.font.size = Pt(10)
    run2.font.color.rgb = COLORS['white']

    for paragraph in cell.paragraphs:
        paragraph.paragraph_format.space_before = Pt(4)
        paragraph.paragraph_format.space_after = Pt(4)

    doc.add_paragraph()

def add_test_box(doc, test_content, expected_result):
    """添加测试说明框"""
    table = doc.add_table(rows=2, cols=1)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER

    # 测试内容
    cell1 = table.cell(0, 0)
    set_cell_shading(cell1, "409EFF")
    p1 = cell1.paragraphs[0]
    run1 = p1.add_run("  测试操作")
    run1.bold = True
    run1.font.size = Pt(11)
    run1.font.color.rgb = COLORS['white']

    p1_2 = cell1.add_paragraph()
    run1_2 = p1_2.add_run(f"  {test_content}")
    run1_2.font.size = Pt(10)
    run1_2.font.color.rgb = COLORS['white']

    # 预期结果
    cell2 = table.cell(1, 0)
    set_cell_shading(cell2, "67C23A")
    p2 = cell2.paragraphs[0]
    run2 = p2.add_run("  预期结果")
    run2.bold = True
    run2.font.size = Pt(11)
    run2.font.color.rgb = COLORS['white']

    p2_2 = cell2.add_paragraph()
    run2_2 = p2_2.add_run(f"  {expected_result}")
    run2_2.font.size = Pt(10)
    run2_2.font.color.rgb = COLORS['white']

    for cell in [cell1, cell2]:
        for p in cell.paragraphs:
            p.paragraph_format.space_before = Pt(4)
            p.paragraph_format.space_after = Pt(4)

    doc.add_paragraph()

def add_step_number(doc, step_num):
    """添加步骤编号"""
    p = doc.add_paragraph()
    run = p.add_run(f"步骤 {step_num}：")
    run.bold = True
    run.font.size = Pt(11)
    run.font.color.rgb = COLORS['primary']
    return p

def create_manual():
    doc = Document()

    # ========== 封面 ==========
    title_p = doc.add_paragraph()
    title_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    title_p.paragraph_format.space_before = Pt(100)
    run = title_p.add_run("HappyEnglish")
    run.font.size = Pt(56)
    run.font.bold = True
    run.font.color.rgb = COLORS['primary']

    subtitle_p = doc.add_paragraph()
    subtitle_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = subtitle_p.add_run("AI 智能英语学习助手 · 完整用户手册")
    run.font.size = Pt(20)
    run.font.color.rgb = COLORS['secondary']

    add_horizontal_line(doc)

    info_p = doc.add_paragraph()
    info_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = info_p.add_run("含所有页面操作指南与测试验证")
    run.font.size = Pt(14)
    run.font.color.rgb = COLORS['text']

    run = info_p.add_run("\n\n版本 1.0  |  2026年5月")
    run.font.size = Pt(12)
    run.font.color.rgb = COLORS['text']

    bottom_p = doc.add_paragraph()
    bottom_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    bottom_p.paragraph_format.space_before = Pt(150)
    run = bottom_p.add_run("https://happyenglish-phi.vercel.app")
    run.font.size = Pt(12)
    run.font.color.rgb = COLORS['info']

    doc.add_page_break()

    # ========== 目录 ==========
    add_styled_heading(doc, "目 录", 1)
    add_horizontal_line(doc)

    toc_items = [
        ("1", "功能概览", "3"),
        ("2", "首页界面", "4"),
        ("3", "词汇学习", "6"),
        ("4", "测试模式", "8"),
        ("5", "复习功能", "10"),
        ("6", "个人中心", "11"),
        ("7", "词根词缀", "12"),
        ("8", "AI 学习报告", "14"),
        ("9", "积分与等级", "15"),
        ("10", "常见问题", "17"),
    ]

    toc_table = doc.add_table(rows=len(toc_items), cols=3)
    toc_table.alignment = WD_TABLE_ALIGNMENT.CENTER

    for i, (num, title, page) in enumerate(toc_items):
        cells = toc_table.rows[i].cells
        cells[0].text = num
        cells[0].paragraphs[0].runs[0].bold = True
        cells[0].paragraphs[0].runs[0].font.color.rgb = COLORS['primary']
        cells[1].text = title
        cells[2].text = page
        cells[2].paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.RIGHT
        for cell in cells:
            cell.paragraphs[0].paragraph_format.space_before = Pt(6)
            cell.paragraphs[0].paragraph_format.space_after = Pt(6)

    doc.add_page_break()

    # ========== 1. 功能概览 ==========
    add_styled_heading(doc, "1. 功能概览", 1)
    add_horizontal_line(doc)

    add_styled_heading(doc, "1.1 主要功能说明", 2)

    features = [
        ("首页", "展示学习数据、快速入口"),
        ("词汇学习", "查看词汇列表和掌握度"),
        ("测试模式", "中译英测试练习"),
        ("复习", "复习已学过的词汇"),
        ("个人中心", "查看等级、积分、设置"),
        ("词根词缀", "分析单词结构辅助记忆"),
        ("AI 报告", "AI 分析学习情况"),
    ]

    table = doc.add_table(rows=1 + len(features), cols=2)
    table.style = 'Table Grid'
    table.alignment = WD_TABLE_ALIGNMENT.CENTER

    headers = ['功能', '说明']
    for i, h in enumerate(headers):
        cell = table.cell(0, i)
        cell.text = h
        cell.paragraphs[0].runs[0].bold = True
        cell.paragraphs[0].runs[0].font.color.rgb = COLORS['white']
        set_cell_shading(cell, "667EEA")

    for row_idx, (feature, desc) in enumerate(features):
        cells = table.rows[row_idx + 1].cells
        cells[0].text = feature
        cells[0].paragraphs[0].runs[0].bold = True
        cells[1].text = desc
        if row_idx % 2 == 0:
            for cell in cells:
                set_cell_shading(cell, "F7FAFC")

    doc.add_paragraph()

    add_styled_heading(doc, "1.2 底部导航说明", 2)
    add_paragraph(doc, "底部导航栏包含5个主要入口：")

    nav_items = ["首页", "测试", "复习", "我的", "词根"]
    for i, name in enumerate(nav_items, 1):
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Inches(0.5)
        run = p.add_run(f"• {name}")
        run.font.size = Pt(11)

    doc.add_page_break()

    # ========== 2. 首页界面 ==========
    add_styled_heading(doc, "2. 首页界面", 1)
    add_horizontal_line(doc)

    add_styled_heading(doc, "2.1 界面组成", 2)

    components = [
        "顶部标题栏：显示 'HappyEnglish' 和 AI 学习助手",
        "等级和积分显示：实时更新",
        "统计卡片：词库总数、已学词汇、正确率",
        "批量测试按钮：进入测试模式",
        "底部导航栏：5个功能入口",
    ]
    for c in components:
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Inches(0.3)
        p.add_run(f"• {c}")

    doc.add_paragraph()
    add_screenshot(doc,
        os.path.join(SCREENSHOTS_DIR, '01_home.png'),
        width=Inches(4.5),
        caption="图 2-1 首页界面")

    add_styled_heading(doc, "2.2 首页测试验证", 2)
    add_test_box(doc,
        "打开网站 https://happyenglish-phi.vercel.app",
        "显示首页，看到'词库总数: 1594'统计信息，底部有5个导航标签")
    add_test_box(doc,
        "查看等级显示",
        "显示'Lv.1 0分'，根据学习进度变化")

    add_screenshot(doc,
        os.path.join(SCREENSHOTS_DIR, '01_home_stats.png'),
        width=Inches(4.5),
        caption="图 2-2 首页统计数据区域")

    doc.add_page_break()

    # ========== 3. 词汇学习 ==========
    add_styled_heading(doc, "3. 词汇学习", 1)
    add_horizontal_line(doc)

    add_styled_heading(doc, "3.1 进入词汇学习", 2)
    add_paragraph(doc, "在首页滚动找到'词根词缀'入口，或点击底部导航对应标签。")

    add_styled_heading(doc, "3.2 词汇掌握度", 2)
    add_paragraph(doc, "每个词汇根据测试表现分为4个等级：")

    level_table = doc.add_table(rows=5, cols=3)
    level_table.style = 'Table Grid'
    level_table.alignment = WD_TABLE_ALIGNMENT.CENTER

    headers = ["等级", "颜色标识", "达标标准"]
    for i, h in enumerate(headers):
        cell = level_table.cell(0, i)
        cell.text = h
        cell.paragraphs[0].runs[0].bold = True
        cell.paragraphs[0].runs[0].font.color.rgb = COLORS['white']
        set_cell_shading(cell, "667EEA")

    levels = [
        ("精通", "绿色", "正确率≥90%，错误≤1次"),
        ("熟悉", "蓝色", "正确率≥70%"),
        ("薄弱", "黄色", "正确率≥40%"),
        ("陌生", "红色", "未测试或正确率<40%"),
    ]

    level_colors = ["67C23A", "409EFF", "E6A23C", "F56C6C"]
    for row_idx, (level, color, std) in enumerate(levels):
        cells = level_table.rows[row_idx + 1].cells
        cells[0].text = level
        cells[0].paragraphs[0].runs[0].bold = True
        cells[1].text = color
        cells[2].text = std

    doc.add_paragraph()

    add_styled_heading(doc, "3.3 词云展示", 2)
    add_paragraph(doc, "词云图中：")
    bullets = [
        "字号越大 → 掌握越好 → 错误越少",
        "点击词汇可进入该词的测试",
    ]
    for b in bullets:
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Inches(0.3)
        p.add_run(f"• {b}")

    doc.add_paragraph()
    add_screenshot(doc,
        os.path.join(SCREENSHOTS_DIR, '02_vocabulary_cloud.png'),
        width=Inches(4.5),
        caption="图 3-1 词汇学习词云界面")

    add_styled_heading(doc, "3.4 词汇学习测试验证", 2)
    add_test_box(doc,
        "查看词云中的词汇，点击任意一个",
        "进入该词汇的测试界面")

    doc.add_page_break()

    # ========== 4. 测试模式 ==========
    add_styled_heading(doc, "4. 测试模式", 1)
    add_horizontal_line(doc)

    add_styled_heading(doc, "4.1 开始测试", 2)
    add_paragraph(doc, "在首页点击「批量测试」按钮进入测试。")

    add_screenshot(doc,
        os.path.join(SCREENSHOTS_DIR, '03_test_start.png'),
        width=Inches(4.5),
        caption="图 4-1 测试开始页面")

    add_styled_heading(doc, "4.2 测试界面说明", 2)

    test_info = [
        ("显示内容", "10个中文释义"),
        ("输入方式", "在输入框输入英语单词"),
        ("提交方式", "按 Enter 键"),
        ("每组数量", "10个词汇"),
        ("连续答对", "触发连击奖励积分"),
    ]

    table = doc.add_table(rows=1 + len(test_info), cols=2)
    table.style = 'Table Grid'
    table.alignment = WD_TABLE_ALIGNMENT.CENTER

    for i, h in enumerate(["项目", "说明"]):
        cell = table.cell(0, i)
        cell.text = h
        cell.paragraphs[0].runs[0].bold = True
        cell.paragraphs[0].runs[0].font.color.rgb = COLORS['white']
        set_cell_shading(cell, "667EEA")

    for row_idx, (item, desc) in enumerate(test_info):
        cells = table.rows[row_idx + 1].cells
        cells[0].text = item
        cells[0].paragraphs[0].runs[0].bold = True
        cells[1].text = desc
        if row_idx % 2 == 0:
            for cell in cells:
                set_cell_shading(cell, "F7FAFC")

    doc.add_paragraph()

    add_styled_heading(doc, "4.3 操作步骤", 2)

    steps = [
        "页面显示10个中文释义",
        "在输入框输入对应的英语单词",
        "按 Enter 提交答案",
        "系统判断对错并显示下一题",
        "完成10题后自动进入下一组",
    ]

    for i, step in enumerate(steps, 1):
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Inches(0.3)
        run = p.add_run(f"{i}. {step}")
        run.font.size = Pt(11)

    doc.add_paragraph()
    add_screenshot(doc,
        os.path.join(SCREENSHOTS_DIR, '04_batch_test.png'),
        width=Inches(4.5),
        caption="图 4-2 批量测试界面")

    add_styled_heading(doc, "4.4 测试验证", 2)
    add_test_box(doc,
        "在输入框输入一个已知单词的英语，按 Enter",
        "系统显示对错，正确显示绿色，错误显示红色")

    doc.add_page_break()

    # ========== 5. 复习功能 ==========
    add_styled_heading(doc, "5. 复习功能", 1)
    add_horizontal_line(doc)

    add_styled_heading(doc, "5.1 进入复习", 2)
    add_paragraph(doc, "点击底部导航「复习」标签进入复习页面。")

    add_styled_heading(doc, "5.2 复习内容", 2)
    add_paragraph(doc, "复习页面展示：")
    bullets = [
        "近期学习过的词汇",
        "标记为薄弱的词汇",
        "之前答错的词汇",
    ]
    for b in bullets:
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Inches(0.3)
        p.add_run(f"• {b}")

    doc.add_paragraph()
    add_screenshot(doc,
        os.path.join(SCREENSHOTS_DIR, '05_review.png'),
        width=Inches(4.5),
        caption="图 5-1 复习页面")

    add_styled_heading(doc, "5.3 复习测试验证", 2)
    add_test_box(doc,
        "在复习页面点击一个词汇开始复习",
        "进入该词汇的专项测试")

    doc.add_page_break()

    # ========== 6. 个人中心 ==========
    add_styled_heading(doc, "6. 个人中心", 1)
    add_horizontal_line(doc)

    add_styled_heading(doc, "6.1 进入个人中心", 2)
    add_paragraph(doc, "点击底部导航「我的」标签进入个人中心。")

    add_styled_heading(doc, "6.2 显示内容", 2)

    profile_items = [
        "当前等级和积分",
        "学习进度统计",
        "连续学习天数",
        "头像和称号",
    ]
    for item in profile_items:
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Inches(0.3)
        p.add_run(f"• {item}")

    doc.add_paragraph()
    add_screenshot(doc,
        os.path.join(SCREENSHOTS_DIR, '06_profile.png'),
        width=Inches(4.5),
        caption="图 6-1 个人中心页面")

    add_styled_heading(doc, "6.3 个人中心测试验证", 2)
    add_test_box(doc,
        "查看页面显示的等级和积分",
        "显示当前等级(Lv.)和总积分，与学习进度一致")

    doc.add_page_break()

    # ========== 7. 词根词缀 ==========
    add_styled_heading(doc, "7. 词根词缀", 1)
    add_horizontal_line(doc)

    add_styled_heading(doc, "7.1 功能介绍", 2)
    add_paragraph(doc, "词根词缀功能帮助分析单词结构，通过词根词缀理解单词含义，提升记忆效率。")

    add_styled_heading(doc, "7.2 进入词根词缀", 2)
    add_paragraph(doc, "点击底部导航「词根」标签进入词根词缀页面。")

    add_screenshot(doc,
        os.path.join(SCREENSHOTS_DIR, '07_etymology.png'),
        width=Inches(4.5),
        caption="图 7-1 词根词缀页面")

    add_styled_heading(doc, "7.3 使用方法", 2)

    steps = [
        "在搜索框输入要分析的单词",
        "按 Enter 键提交",
        "系统显示词根、前缀、后缀分析",
        "查看相关词汇列表",
    ]

    for i, step in enumerate(steps, 1):
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Inches(0.3)
        run = p.add_run(f"{i}. {step}")
        run.font.size = Pt(11)

    doc.add_paragraph()
    add_screenshot(doc,
        os.path.join(SCREENSHOTS_DIR, '07b_etymology_search.png'),
        width=Inches(4.5),
        caption="图 7-2 词根词缀搜索结果（以 unhappy 为例）")

    add_styled_heading(doc, "7.4 词根词缀测试验证", 2)
    add_test_box(doc,
        "在搜索框输入'unhappy'，按 Enter",
        "显示：前缀 un-(不)，词根 happy(快乐)，相关词汇：happy, happily, unhappiness 等")

    doc.add_page_break()

    # ========== 8. AI 学习报告 ==========
    add_styled_heading(doc, "8. AI 学习报告", 1)
    add_horizontal_line(doc)

    add_styled_heading(doc, "8.1 功能介绍", 2)
    add_paragraph(doc, "AI 学习报告基于你的学习数据，生成个性化的学习分析和建议。")

    add_styled_heading(doc, "8.2 进入报告", 2)
    add_paragraph(doc, "在首页或个人中心找到「AI 学习报告」入口。")

    add_screenshot(doc,
        os.path.join(SCREENSHOTS_DIR, '08_report.png'),
        width=Inches(4.5),
        caption="图 8-1 AI 学习报告页面")

    add_styled_heading(doc, "8.3 首次配置", 2)
    add_paragraph(doc, "首次使用需要配置 MiniMax API Key：")

    api_steps = [
        "访问 MiniMax 开放平台",
        "注册并登录账号",
        "创建 API Key",
        "复制 Key 到网站输入框",
        "点击保存并生成报告",
    ]

    for i, step in enumerate(api_steps, 1):
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Inches(0.3)
        run = p.add_run(f"{i}. {step}")
        run.font.size = Pt(11)

    doc.add_paragraph()
    add_info_box(doc, "安全说明",
        "API Key 使用 localStorage 持久化存储，关闭浏览器后仍保留。如需清除请手动清除浏览器缓存。",
        "E6A23C")

    add_styled_heading(doc, "8.4 报告内容", 2)

    report_items = [
        ("学习概览", "整体学习情况评价"),
        ("学习趋势", "正确率和进步情况"),
        ("AI 分析", "薄弱词分析和记忆建议"),
        ("下周目标", "具体可行的学习目标"),
    ]

    table = doc.add_table(rows=1 + len(report_items), cols=2)
    table.style = 'Table Grid'
    table.alignment = WD_TABLE_ALIGNMENT.CENTER

    for i, h in enumerate(["部分", "说明"]):
        cell = table.cell(0, i)
        cell.text = h
        cell.paragraphs[0].runs[0].bold = True
        cell.paragraphs[0].runs[0].font.color.rgb = COLORS['white']
        set_cell_shading(cell, "667EEA")

    for row_idx, (section, desc) in enumerate(report_items):
        cells = table.rows[row_idx + 1].cells
        cells[0].text = section
        cells[0].paragraphs[0].runs[0].bold = True
        cells[1].text = desc
        if row_idx % 2 == 0:
            for cell in cells:
                set_cell_shading(cell, "F7FAFC")

    doc.add_page_break()

    # ========== 9. 积分与等级 ==========
    add_styled_heading(doc, "9. 积分与等级", 1)
    add_horizontal_line(doc)

    add_styled_heading(doc, "9.1 积分规则", 2)

    points_table = doc.add_table(rows=8, cols=2)
    points_table.style = 'Table Grid'
    points_table.alignment = WD_TABLE_ALIGNMENT.CENTER

    for i, h in enumerate(["行为", "积分"]):
        cell = points_table.cell(0, i)
        cell.text = h
        cell.paragraphs[0].runs[0].bold = True
        cell.paragraphs[0].runs[0].font.color.rgb = COLORS['white']
        set_cell_shading(cell, "667EEA")

    points_items = [
        ("答对陌生词", "+30分"),
        ("答对薄弱词", "+20分"),
        ("答对熟悉词", "+10分"),
        ("答对精通词", "+5分"),
        ("10 连击", "+50分"),
        ("20 连击", "+100分"),
        ("50 连击", "+300分"),
    ]

    for row_idx, (action, pts) in enumerate(points_items):
        cells = points_table.rows[row_idx + 1].cells
        cells[0].text = action
        cells[1].text = pts
        cells[1].paragraphs[0].runs[0].bold = True
        cells[1].paragraphs[0].runs[0].font.color.rgb = COLORS['success']
        if row_idx % 2 == 0:
            for cell in cells:
                set_cell_shading(cell, "F7FAFC")

    doc.add_paragraph()

    add_styled_heading(doc, "9.2 等级系统", 2)
    add_paragraph(doc, "等级计算公式：Lv = floor(积分 / 100) + 1")

    seg_table = doc.add_table(rows=8, cols=2)
    seg_table.style = 'Table Grid'
    seg_table.alignment = WD_TABLE_ALIGNMENT.CENTER

    for i, h in enumerate(["等级范围", "段位"]):
        cell = seg_table.cell(0, i)
        cell.text = h
        cell.paragraphs[0].runs[0].bold = True
        cell.paragraphs[0].runs[0].font.color.rgb = COLORS['white']
        set_cell_shading(cell, "764BA2")

    segments = [
        ("Lv 1-5", "青铜"),
        ("Lv 6-10", "白银"),
        ("Lv 11-15", "黄金"),
        ("Lv 16-20", "铂金"),
        ("Lv 21-25", "钻石"),
        ("Lv 26-30", "星耀"),
        ("Lv 31+", "王者"),
    ]

    for row_idx, (level, seg) in enumerate(segments):
        cells = seg_table.rows[row_idx + 1].cells
        cells[0].text = level
        cells[1].text = seg
        cells[1].paragraphs[0].runs[0].bold = True
        if row_idx % 2 == 0:
            for cell in cells:
                set_cell_shading(cell, "F7FAFC")

    doc.add_page_break()

    # ========== 10. 常见问题 ==========
    add_styled_heading(doc, "10. 常见问题", 1)
    add_horizontal_line(doc)

    qas = [
        ('Q1: 批量测试显示"请先完成前面的关卡"？',
         "这是游戏关卡解锁机制。需要先在「测试」页面通过前面的关卡才能解锁后续关卡。"),

        ("Q2: AI 学习报告无法生成？",
         "请检查：1) 是否已配置 API Key；2) API Key 是否有效；3) 网络连接是否正常。"),

        ("Q3: 如何清除已保存的 API Key？",
         "在浏览器控制台执行：localStorage.removeItem('minimax_api_key')"),

        ("Q4: 学习数据保存在哪里？",
         "保存在浏览器 IndexedDB 中，属于本地存储。清除浏览器缓存会导致数据丢失。"),

        ("Q5: 如何查看词根词缀分析？",
         "点击底部导航的「词根」标签，输入单词后按 Enter 即可查看分析结果。"),
    ]

    for q, a in qas:
        add_styled_heading(doc, q, 3)
        add_paragraph(doc, a)
        doc.add_paragraph()

    doc.add_page_break()

    # ========== 版权页 ==========
    add_horizontal_line(doc)
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = p.add_run("HappyEnglish 完整用户手册")
    run.font.size = Pt(14)
    run.font.bold = True
    run.font.color.rgb = COLORS['primary']

    p2 = doc.add_paragraph()
    p2.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = p2.add_run("版本 1.0  |  2026年5月")
    run.font.size = Pt(11)
    run.font.color.rgb = COLORS['text']

    p3 = doc.add_paragraph()
    p3.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = p3.add_run("https://happyenglish-phi.vercel.app")
    run.font.size = Pt(11)
    run.font.color.rgb = COLORS['info']

    doc.save(OUTPUT_FILE)
    print(f"完整用户手册已生成: {OUTPUT_FILE}")

if __name__ == '__main__':
    create_manual()