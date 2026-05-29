"""
生成 HappyEnglish 用户手册 Word 文档（精美印刷版）
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
SCREENSHOTS_DIR = os.path.join(BASE_DIR, '..', 'screenshots')
OUTPUT_FILE = os.path.join(BASE_DIR, 'HappyEnglish-用户手册-印刷版.docx')

# 配色方案
COLORS = {
    'primary': RGBColor(0x66, 0x7E, 0xEA),      # #667eea - 主色
    'secondary': RGBColor(0x76, 0x4B, 0xA2),      # #764ba2 - 紫色
    'dark': RGBColor(0x2D, 0x37, 0x48),           # #2D3748 - 深灰
    'text': RGBColor(0x4A, 0x55, 0x69),           # #4A5569 - 正文色
    'light': RGBColor(0xF7, 0xFA, 0xFC),          # #F7FAFC - 浅灰背景
    'success': RGBColor(0x67, 0xC2, 0x3A),       # #67C23A - 绿色
    'warning': RGBColor(0xE6, 0xA2, 0x3C),        # #E6A23C - 黄色
    'danger': RGBColor(0xF5, 0x6C, 0x6C),        # #F56C6C - 红色
    'info': RGBColor(0x40, 0x9E, 0xFF),          # #409EFF - 蓝色
    'white': RGBColor(0xFF, 0xFF, 0xFF),
}

def set_cell_shading(cell, color):
    """设置单元格背景色"""
    shading_elm = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{color}" w:val="clear"/>')
    cell._tc.get_or_add_tcPr().append(shading_elm)

def add_horizontal_line(doc, color="667EEA"):
    """添加水平分隔线"""
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

def set_heading_style(paragraph, level=1):
    """设置标题样式"""
    for run in paragraph.runs:
        if level == 0:  # 封面标题
            run.font.size = Pt(44)
            run.font.bold = True
            run.font.color.rgb = COLORS['primary']
        elif level == 1:
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

def add_styled_heading(doc, text, level=1):
    """添加带样式的标题"""
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(18 if level <= 1 else 12)
    p.paragraph_format.space_after = Pt(6)

    run = p.add_run(text)
    set_heading_style(p, level)
    return p

def add_paragraph(doc, text):
    """添加普通段落"""
    p = doc.add_paragraph(text)
    p.paragraph_format.space_before = Pt(6)
    p.paragraph_format.space_after = Pt(6)
    for run in p.runs:
        run.font.size = Pt(11)
        run.font.color.rgb = COLORS['text']
    return p

def add_screenshot(doc, image_path, width=Inches(5.5), caption=""):
    """添加截图（居中，带标题）"""
    if not os.path.exists(image_path):
        print(f"  警告: 截图不存在 - {image_path}")
        return

    try:
        # 添加图片
        doc.add_picture(image_path, width=width)
        last_para = doc.paragraphs[-1]
        last_para.alignment = WD_ALIGN_PARAGRAPH.CENTER

        # 添加标题
        if caption:
            cap_p = doc.add_paragraph()
            cap_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            run = cap_p.add_run(caption)
            run.italic = True
            run.font.size = Pt(10)
            run.font.color.rgb = COLORS['text']

        doc.add_paragraph()  # 空行
    except Exception as e:
        print(f"  添加图片失败: {e}")

def add_info_box(doc, title, content, color_hex="667EEA"):
    """添加信息框"""
    table = doc.add_table(rows=1, cols=1)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    cell = table.cell(0, 0)

    # 设置背景色
    set_cell_shading(cell, color_hex)

    # 标题
    p1 = cell.paragraphs[0]
    run1 = p1.add_run(f"  {title}")
    run1.bold = True
    run1.font.size = Pt(11)
    run1.font.color.rgb = COLORS['white']

    # 内容
    p2 = cell.add_paragraph()
    run2 = p2.add_run(f"  {content}")
    run2.font.size = Pt(10)
    run2.font.color.rgb = COLORS['white']

    # 设置单元格边距
    for paragraph in cell.paragraphs:
        paragraph.paragraph_format.space_before = Pt(4)
        paragraph.paragraph_format.space_after = Pt(4)

    doc.add_paragraph()  # 空行

def add_feature_table(doc, items):
    """添加功能说明表格"""
    table = doc.add_table(rows=1 + len(items), cols=2)
    table.style = 'Table Grid'
    table.alignment = WD_TABLE_ALIGNMENT.CENTER

    # 表头
    header_cells = table.rows[0].cells
    headers = ['功能', '说明']
    for i, header in enumerate(headers):
        header_cells[i].text = header
        header_cells[i].paragraphs[0].runs[0].bold = True
        header_cells[i].paragraphs[0].runs[0].font.color.rgb = COLORS['white']
        header_cells[i].paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
        set_cell_shading(header_cells[i], "667EEA")

    # 数据行
    for row_idx, (feature, desc) in enumerate(items):
        row_cells = table.rows[row_idx + 1].cells
        row_cells[0].text = feature
        row_cells[0].paragraphs[0].runs[0].bold = True
        row_cells[1].text = desc

        # 交替背景色
        if row_idx % 2 == 0:
            for cell in row_cells:
                set_cell_shading(cell, "F7FAFC")

    return table

def add_color_legend(doc):
    """添加颜色图例"""
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER

    legends = [
        ("精通", "67C23A"),
        ("熟悉", "409EFF"),
        ("薄弱", "E6A23C"),
        ("陌生", "F56C6C"),
    ]

    for name, color in legends:
        run = p.add_run(f"  ● {name}  ")
        run.font.size = Pt(11)
        run.font.color.rgb = RGBColor(
            int(color[0:2], 16),
            int(color[2:4], 16),
            int(color[4:6], 16)
        )

def create_manual():
    """创建精美用户手册"""
    doc = Document()

    # ========== 封面 ==========
    # 标题
    title_p = doc.add_paragraph()
    title_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    title_p.paragraph_format.space_before = Pt(120)
    run = title_p.add_run("HappyEnglish")
    run.font.size = Pt(56)
    run.font.bold = True
    run.font.color.rgb = COLORS['primary']

    # 副标题
    subtitle_p = doc.add_paragraph()
    subtitle_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = subtitle_p.add_run("AI 智能英语学习助手")
    run.font.size = Pt(24)
    run.font.color.rgb = COLORS['secondary']

    # 分隔线
    add_horizontal_line(doc)

    # 版本信息
    info_p = doc.add_paragraph()
    info_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = info_p.add_run("用户手册 · 印刷版")
    run.font.size = Pt(14)
    run.font.color.rgb = COLORS['text']

    run = info_p.add_run("\n\n版本 1.0  |  2026年5月")
    run.font.size = Pt(12)
    run.font.color.rgb = COLORS['text']

    # 底部信息
    bottom_p = doc.add_paragraph()
    bottom_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    bottom_p.paragraph_format.space_before = Pt(200)
    run = bottom_p.add_run("https://happyenglish-phi.vercel.app")
    run.font.size = Pt(12)
    run.font.color.rgb = COLORS['info']

    doc.add_page_break()

    # ========== 目录 ==========
    add_styled_heading(doc, "目 录", 1)
    add_horizontal_line(doc)

    toc_items = [
        ("1", "功能概览", "3"),
        ("2", "快速开始", "4"),
        ("3", "词汇学习", "6"),
        ("4", "批量测试", "8"),
        ("5", "AI 学习报告", "10"),
        ("6", "积分与等级", "12"),
        ("7", "常见问题", "14"),
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

    add_styled_heading(doc, "1.1 主要功能", 2)
    add_feature_table(doc, [
        ("词汇学习", "查看词汇列表，掌握度可视化"),
        ("批量测试", "一次测试10个词汇"),
        ("AI 学习报告", "AI 分析学习情况并给出建议"),
        ("复习功能", "复习已学过的词汇"),
    ])
    doc.add_paragraph()

    add_styled_heading(doc, "1.2 界面布局", 2)

    # 布局示意图
    layout_table = doc.add_table(rows=4, cols=1)
    layout_table.alignment = WD_TABLE_ALIGNMENT.CENTER

    rows_text = [
        ("HappyEnglish  AI 智能学习助手    Lv.1 0分", "顶部信息栏"),
        ("主内容区域（根据选中标签显示）", "主内容区"),
        ("词库总数: 1594  已学: 0  正确率: 0%", "统计信息"),
        ("🏠首页  📝测试  📖复习  👤我的", "底部导航"),
    ]

    for i, (content, desc) in enumerate(rows_text):
        cell = layout_table.cell(i, 0)
        set_cell_shading(cell, "667EEA" if i in [0, 3] else "F7FAFC")

        p = cell.paragraphs[0]
        run = p.add_run(content)
        run.font.size = Pt(10)
        run.font.color.rgb = COLORS['white'] if i in [0, 3] else COLORS['dark']
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER

        # 添加描述
        desc_p = cell.add_paragraph()
        desc_run = desc_p.add_run(f"← {desc}")
        desc_run.font.size = Pt(9)
        desc_run.font.color.rgb = COLORS['text']
        desc_run.italic = True

    doc.add_paragraph()

    # ========== 2. 快速开始 ==========
    add_styled_heading(doc, "2. 快速开始", 1)
    add_horizontal_line(doc)

    add_styled_heading(doc, "2.1 访问网站", 2)
    p = doc.add_paragraph()
    run = p.add_run("https://happyenglish-phi.vercel.app")
    run.font.size = Pt(12)
    run.font.color.rgb = COLORS['info']
    run.font.underline = True

    add_styled_heading(doc, "2.2 首次使用", 2)
    add_paragraph(doc, "首次打开网站会显示欢迎界面，展示你的学习数据：")

    stats_items = [
        "词库总数：1594 词",
        "已学词汇：0（随学习递增）",
        "正确率：0%（实时更新）",
    ]
    for item in stats_items:
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Inches(0.5)
        run = p.add_run(f"• {item}")
        run.font.size = Pt(11)

    add_screenshot(doc,
        os.path.join(SCREENSHOTS_DIR, '01_home.png'),
        width=Inches(4.5),
        caption="图 2-1 首页界面")

    # ========== 3. 词汇学习 ==========
    add_styled_heading(doc, "3. 词汇学习", 1)
    add_horizontal_line(doc)

    add_styled_heading(doc, "3.1 进入词汇学习", 2)
    add_paragraph(doc, "点击底部导航栏的「词汇学习」进入词汇页面。")

    add_styled_heading(doc, "3.2 词汇掌握度等级", 2)
    add_paragraph(doc, "词汇按掌握程度分为 4 个等级：")
    doc.add_paragraph()
    add_color_legend(doc)
    doc.add_paragraph()

    level_table = doc.add_table(rows=5, cols=3)
    level_table.style = 'Table Grid'
    level_table.alignment = WD_TABLE_ALIGNMENT.CENTER

    headers = ["等级", "颜色", "达标标准"]
    for i, h in enumerate(headers):
        cell = level_table.cell(0, i)
        cell.text = h
        cell.paragraphs[0].runs[0].bold = True
        cell.paragraphs[0].runs[0].font.color.rgb = COLORS['white']
        set_cell_shading(cell, "667EEA")

    levels = [
        ("精通", "🟢 绿色", "正确率 ≥90%，错误 ≤1 次"),
        ("熟悉", "🔵 蓝色", "正确率 ≥70%"),
        ("薄弱", "🟡 黄色", "正确率 ≥40%"),
        ("陌生", "🔴 红色", "未测试或正确率 <40%"),
    ]

    level_colors = ["67C23A", "409EFF", "E6A23C", "F56C6C"]
    for row_idx, (level, color, std) in enumerate(levels):
        cells = level_table.rows[row_idx + 1].cells
        cells[0].text = level
        cells[0].paragraphs[0].runs[0].bold = True
        cells[1].text = color
        cells[2].text = std

        row_color = level_colors[row_idx]
        set_cell_shading(cells[0], "F7FAFC")

    doc.add_paragraph()

    add_styled_heading(doc, "3.3 词云展示", 2)
    add_paragraph(doc, "页面下方显示词云图：")
    bullets = [
        "字号越大 → 错误越少 → 掌握越好",
        "点击任意词汇可进入该词的测试",
    ]
    for b in bullets:
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Inches(0.5)
        p.add_run(f"• {b}")

    add_screenshot(doc,
        os.path.join(SCREENSHOTS_DIR, '03_test.png'),
        width=Inches(4.5),
        caption="图 3-1 词汇学习界面")

    doc.add_page_break()

    # ========== 4. 批量测试 ==========
    add_styled_heading(doc, "4. 批量测试", 1)
    add_horizontal_line(doc)

    add_styled_heading(doc, "4.1 进入批量测试", 2)
    add_paragraph(doc, "在首页点击「批量测试」按钮进入测试模式。")

    add_styled_heading(doc, "4.2 测试界面说明", 2)

    test_table = doc.add_table(rows=6, cols=2)
    test_table.style = 'Table Grid'
    test_table.alignment = WD_TABLE_ALIGNMENT.CENTER

    test_rows = [
        ("显示内容", "中文释义 + 输入框"),
        ("每组数量", "10 个词汇"),
        ("总组数", "160 组（共 1594 词）"),
        ("判断标准", "输入正确的英语单词"),
        ("连续答对", "触发连击奖励"),
        ("完成后", "显示本次测试结果"),
    ]

    for i, (item, desc) in enumerate(test_rows):
        cells = test_table.rows[i].cells
        cells[0].text = item
        cells[0].paragraphs[0].runs[0].bold = True
        set_cell_shading(cells[0], "F7FAFC")
        cells[1].text = desc

    doc.add_paragraph()

    add_styled_heading(doc, "4.3 操作步骤", 2)

    steps = [
        "页面显示 10 个中文释义",
        "在输入框中输入对应的英语单词",
        "按 Enter 或点击「下一组」继续",
        "完成 3 组后显示测试结果",
    ]

    for i, step in enumerate(steps, 1):
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Inches(0.5)
        run = p.add_run(f"{i}. {step}")
        run.font.size = Pt(11)

    add_screenshot(doc,
        os.path.join(SCREENSHOTS_DIR, '04_batch_test.png'),
        width=Inches(4.5),
        caption="图 4-1 批量测试界面")

    doc.add_page_break()

    # ========== 5. AI 学习报告 ==========
    add_styled_heading(doc, "5. AI 学习报告", 1)
    add_horizontal_line(doc)

    add_styled_heading(doc, "5.1 配置 API Key", 2)
    add_paragraph(doc, "首次使用 AI 报告功能需要配置 MiniMax API Key：")

    api_steps = [
        "访问 MiniMax 开放平台注册账号",
        "创建新的 API Key",
        "复制 API Key",
        "粘贴到网站输入框",
        "点击「保存并生成报告」",
    ]

    for i, step in enumerate(api_steps, 1):
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Inches(0.5)
        p.add_run(f"{i}. {step}")

    doc.add_paragraph()

    add_screenshot(doc,
        os.path.join(SCREENSHOTS_DIR, '06_ai_report_input.png'),
        width=Inches(4.5),
        caption="图 5-1 API Key 配置界面")

    add_styled_heading(doc, "5.2 报告内容", 2)

    report_table = doc.add_table(rows=6, cols=2)
    report_table.style = 'Table Grid'
    report_table.alignment = WD_TABLE_ALIGNMENT.CENTER

    report_items = [
        ("📊 学习概览", "整体学习情况评价"),
        ("🔥 学习趋势", "正确率和进步情况"),
        ("💡 AI 分析", "薄弱词分析和记忆建议"),
        ("🎯 下周目标", "具体可行的学习目标"),
        ("🏆 激励语", "鼓励语句"),
    ]

    for i, (section, desc) in enumerate(report_items):
        cells = report_table.rows[i].cells
        cells[0].text = section
        cells[0].paragraphs[0].runs[0].bold = True
        set_cell_shading(cells[0], "F7FAFC")
        cells[1].text = desc

    doc.add_paragraph()

    add_info_box(doc, "安全提示",
        "API Key 使用 localStorage 持久化存储，关闭浏览器后仍保留。如需清除请手动清除浏览器缓存。",
        "E6A23C")

    doc.add_page_break()

    # ========== 6. 积分与等级 ==========
    add_styled_heading(doc, "6. 积分与等级", 1)
    add_horizontal_line(doc)

    add_styled_heading(doc, "6.1 积分规则", 2)

    points_table = doc.add_table(rows=8, cols=2)
    points_table.style = 'Table Grid'
    points_table.alignment = WD_TABLE_ALIGNMENT.CENTER

    headers = ["行为", "积分"]
    for i, h in enumerate(headers):
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

    add_styled_heading(doc, "6.2 等级系统", 2)
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

    seg_colors = ["CD7F32", "C0C0C0", "FFD700", "E5E4E2", "B9F2FF", "DDA0DD", "FFD700"]
    for row_idx, (level, seg) in enumerate(segments):
        cells = seg_table.rows[row_idx + 1].cells
        cells[0].text = level
        cells[1].text = seg
        cells[1].paragraphs[0].runs[0].bold = True
        if row_idx % 2 == 0:
            for cell in cells:
                set_cell_shading(cell, "F7FAFC")

    doc.add_page_break()

    # ========== 7. 常见问题 ==========
    add_styled_heading(doc, "7. 常见问题", 1)
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
    run = p.add_run("HappyEnglish 用户手册")
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

    # 保存
    doc.save(OUTPUT_FILE)
    print(f"精美手册已生成: {OUTPUT_FILE}")

if __name__ == '__main__':
    create_manual()
