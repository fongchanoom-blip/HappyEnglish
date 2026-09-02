#!/usr/bin/env python3
"""
HappyEnglish 软著补正 — 源代码前 30 页 + 后 30 页 docx 生成脚本

精选 12 个核心源文件（~3000 行）→ 写出 源代码-前30页.md + 源代码-后30页.md → 生成 HappyEnglish 源代码.docx。

约定：
- 前 30 页（约 1500 行）从程序入口开始
- 后 30 页（约 1500 行）从核心模块后半开始
- docx：A4 + 2cm 边距，代码块 9pt Consolas + 浅灰底
- 每页约 50 行（9pt + 单倍行距）→ 60 页 ≈ 3000 行
"""
import os
import re
from pathlib import Path
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_LINE_SPACING, WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

# ========== 路径配置 ==========
PROJECT_ROOT = Path(__file__).resolve().parents[3]  # scripts -> 工作目录 -> docs -> HappyEnglish
SRC_ROOT = PROJECT_ROOT / "src"
OUT_DIR = PROJECT_ROOT / "docs" / "软著补正-工作目录"
FRONT_MD = OUT_DIR / "源代码-前30页.md"
BACK_MD = OUT_DIR / "源代码-后30页.md"
DOCX_PATH = OUT_DIR / "HappyEnglish 源代码.docx"


# ========== 选段清单 ==========
# (相对路径, [起始行, 结束行], 中文标题)
FRONT_SECTIONS = [
    ("index.html", (1, 260), "1. 程序入口 HTML（src/index.html）"),
    ("js/app.js", (1, 37), "2. Vue 应用入口（src/js/app.js）"),
    ("js/router.js", (1, 104), "3. Hash 路由（src/js/router.js）"),
    ("js/store.js", (1, 253), "4. 状态管理（src/js/store.js）"),
    ("js/db.js", (1, 360), "5. IndexedDB 封装（src/js/db.js）"),
    ("js/spaced-repetition.js", (1, 500), "6. SM-2 间隔重复算法 — 前半（src/js/spaced-repetition.js）"),
]

BACK_SECTIONS = [
    ("js/spaced-repetition.js", (501, 700), "7. SM-2 间隔重复算法 — 后半（含单元测试）"),
    ("js/trigger-engine.js", (1, 360), "8. AI 主动触发引擎（src/js/trigger-engine.js）"),
    ("js/personalized-suggestions.js", (1, 300), "9. 个性化学习建议（src/js/personalized-suggestions.js）"),
    ("js/learning-companion.js", (1, 305), "10. 学习伴侣服务（src/js/learning-companion.js）"),
    ("js/achievement-system.js", (280, 530), "11. 成就系统核心类（src/js/achievement-system.js）"),
    ("js/memory-profile.js", (1, 337), "12. 学生记忆档案（src/js/memory-profile.js）"),
]


# ========== 代码读取 ==========
def read_section(rel_path: str, start: int, end: int) -> tuple:
    """读取文件指定行范围，返回 (代码文本, 总行数, 文件名)."""
    fp = SRC_ROOT / rel_path
    with open(fp, "r", encoding="utf-8") as f:
        lines = f.readlines()
    total = len(lines)
    section = "".join(lines[start - 1 : end])
    return section, total, fp.name


# ========== Markdown 写出 ==========
def write_markdown(md_path: Path, title: str, sections: list) -> int:
    """把一组代码选段写入 markdown，返回总代码行数。"""
    total_code_lines = 0
    out = [f"# {title}\n\n"]
    out.append("> 本部分精选自 HappyEnglish 智能英语单词学习系统 V1.0 的核心源代码，"
               "按代表性 + 连续性原则选取，从程序入口顺序排列。\n\n")
    out.append("---\n\n")

    for rel_path, (start, end), title_zh in sections:
        code, total, fname = read_section(rel_path, start, end)
        code_lines = code.count("\n")
        total_code_lines += code_lines

        out.append(f"## {title_zh}\n\n")
        out.append(f"*来源：`src/{rel_path}`（文件总行数 {total}，本节选自第 {start}–{end} 行，共 {code_lines} 行）*\n\n")
        out.append("```javascript\n")
        out.append(code)
        if not code.endswith("\n"):
            out.append("\n")
        out.append("```\n\n")

    md_path.write_text("".join(out), encoding="utf-8")
    return total_code_lines


# ========== Docx 生成 ==========
def set_cell_shading(cell_or_para, fill_hex: str):
    """给段落或单元格加底色（浅灰）。"""
    pPr = cell_or_para._p.get_or_add_pPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:val"), "clear")
    shd.set(qn("w:color"), "auto")
    shd.set(qn("w:fill"), fill_hex)
    pPr.append(shd)


def add_code_block(doc: Document, code_text: str):
    """添加带浅灰底色 + Consolas 字体的代码块。"""
    p = doc.add_paragraph()
    p.paragraph_format.left_indent = Cm(0.5)
    p.paragraph_format.right_indent = Cm(0.5)
    p.paragraph_format.line_spacing_rule = WD_LINE_SPACING.SINGLE
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(0)
    set_cell_shading(p, "F5F5F5")

    lines = code_text.rstrip("\n").split("\n")
    for i, line in enumerate(lines):
        if i > 0:
            p.add_run().add_break()
        run = p.add_run(line)
        run.font.name = "Consolas"
        run.font.size = Pt(9)
        run.font.color.rgb = RGBColor(0x33, 0x33, 0x33)
        # 同时指定中文等宽字体（fallback）
        rPr = run._element.get_or_add_rPr()
        rFonts = rPr.find(qn("w:rFonts"))
        if rFonts is None:
            rFonts = OxmlElement("w:rFonts")
            rPr.append(rFonts)
        rFonts.set(qn("w:ascii"), "Consolas")
        rFonts.set(qn("w:hAnsi"), "Consolas")
        rFonts.set(qn("w:eastAsia"), "Consolas")


def parse_and_add(doc: Document, md_path: Path, section_name: str):
    """解析 markdown 文件，分章节加入 docx。"""
    doc.add_heading(section_name, level=1)
    md = md_path.read_text(encoding="utf-8")

    in_code = False
    code_buf = []
    in_meta = False

    for raw_line in md.split("\n"):
        line = raw_line.rstrip()

        # 跳过文件来源元信息行（斜体引用）
        if line.startswith("*来源：") and line.endswith(")*"):
            meta = doc.add_paragraph()
            meta_run = meta.add_run(line.strip("*"))
            meta_run.italic = True
            meta_run.font.size = Pt(9)
            meta_run.font.color.rgb = RGBColor(0x66, 0x66, 0x66)
            continue

        # ```javascript 围栏
        if line.startswith("```"):
            if in_code:
                # 结束代码块
                add_code_block(doc, "\n".join(code_buf))
                code_buf = []
                in_code = False
            else:
                in_code = True
            continue

        if in_code:
            code_buf.append(raw_line)
            continue

        if line.startswith("# "):
            # 顶层标题跳过（已用 doc.add_heading 单独处理）
            continue
        elif line.startswith("## "):
            doc.add_heading(line[3:].strip(), level=2)
        elif line.startswith("> "):
            quote = doc.add_paragraph(line[2:])
            quote.paragraph_format.left_indent = Cm(0.5)
            quote_run = quote.runs[0]
            quote_run.italic = True
            quote_run.font.color.rgb = RGBColor(0x55, 0x55, 0x55)
        elif line.startswith("---"):
            continue
        elif line.strip():
            p = doc.add_paragraph(line)
            p.paragraph_format.line_spacing = 1.5


def build_docx():
    """构建最终的源代码 docx。"""
    doc = Document()

    # ===== 页面设置：A4 + 2cm 边距 =====
    for section in doc.sections:
        section.page_height = Cm(29.7)
        section.page_width = Cm(21)
        section.top_margin = Cm(2)
        section.bottom_margin = Cm(2)
        section.left_margin = Cm(2)
        section.right_margin = Cm(2)

    # ===== 默认样式：宋体 + 10.5pt =====
    style = doc.styles["Normal"]
    style.font.name = "Times New Roman"
    style.font.size = Pt(10.5)
    rPr = style.element.get_or_add_rPr()
    rFonts = rPr.find(qn("w:rFonts"))
    if rFonts is None:
        rFonts = OxmlElement("w:rFonts")
        rPr.append(rFonts)
    rFonts.set(qn("w:eastAsia"), "宋体")

    # ===== 封面 =====
    title = doc.add_heading("HappyEnglish 智能英语单词学习系统", level=0)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    sub = doc.add_paragraph("V1.0 源代码（前 30 页 + 后 30 页）")
    sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    for r in sub.runs:
        r.font.size = Pt(14)
        r.bold = True
    note = doc.add_paragraph("—— 中国版权保护中心 软件著作权登记 源程序鉴别材料")
    note.alignment = WD_ALIGN_PARAGRAPH.CENTER
    for r in note.runs:
        r.font.size = Pt(12)
        r.italic = True

    doc.add_paragraph()

    meta_table = doc.add_table(rows=5, cols=2)
    meta_table.style = "Light List Accent 1"
    meta_data = [
        ("软件全称", "HappyEnglish 智能英语单词学习系统"),
        ("软件简称", "HappyEnglish"),
        ("版本号", "V1.0"),
        ("开发语言", "JavaScript / HTML / CSS（前端）+ Node.js（后端）"),
        ("源程序页数", "60 页（前 30 页 + 后 30 页，约 3000 行代码）"),
    ]
    for i, (k, v) in enumerate(meta_data):
        meta_table.cell(i, 0).text = k
        meta_table.cell(i, 1).text = v
        # 加粗键
        for run in meta_table.cell(i, 0).paragraphs[0].runs:
            run.bold = True

    doc.add_page_break()

    # ===== 第一部分：源代码前 30 页 =====
    parse_and_add(doc, FRONT_MD, "第一部分  源代码前 30 页")

    doc.add_page_break()

    # ===== 第二部分：源代码后 30 页 =====
    parse_and_add(doc, BACK_MD, "第二部分  源代码后 30 页")

    doc.save(str(DOCX_PATH))
    return DOCX_PATH.stat().st_size


# ========== 主流程 ==========
def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    print(f"[1/3] 写出 {FRONT_MD.name} ...")
    front_lines = write_markdown(FRONT_MD, "源代码前 30 页", FRONT_SECTIONS)
    print(f"      前 30 页：{front_lines} 行代码")

    print(f"[2/3] 写出 {BACK_MD.name} ...")
    back_lines = write_markdown(BACK_MD, "源代码后 30 页", BACK_SECTIONS)
    print(f"      后 30 页：{back_lines} 行代码")

    total = front_lines + back_lines
    print(f"[3/3] 生成 {DOCX_PATH.name} ...")
    size = build_docx()
    print(f"      docx 大小：{size / 1024:.1f} KB")

    print()
    print("=" * 50)
    print(f"完成：共 {total} 行代码，前 30 页 {front_lines} 行 + 后 30 页 {back_lines} 行")
    print(f"docx 路径：{DOCX_PATH}")
    print(f"docx 大小：{size / 1024:.1f} KB")
    print("=" * 50)


if __name__ == "__main__":
    main()
