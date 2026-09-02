#!/usr/bin/env python3
"""
HappyEnglish 软著补正 — 源代码 docx 生成脚本

读取 源代码-精选.md（前 1800 + 后 1800 行精选），只识别：
  - `# 一级标题` （# 前 30 页 / # 后 30 页）
  - ` ```代码块 ` （一个大的代码围栏）

输出 HappyEnglish 源代码.docx：
  - A4 + 2cm 边距
  - 默认样式：Times New Roman + 宋体 10.5pt
  - 代码块：Consolas 9pt + 浅灰底色 #F5F5F5 + 单倍行距
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
OUT_DIR = PROJECT_ROOT / "docs" / "软著补正-工作目录"
SELECTION_MD = OUT_DIR / "源代码-精选.md"
DOCX_PATH = OUT_DIR / "HappyEnglish 源代码.docx"


# ========== 工具函数 ==========
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


def parse_selection_and_add(doc: Document, md_path: Path):
    """解析 源代码-精选.md：
       - `# 一级标题` → 作为 docx 一级标题
       - ` ```代码块 ` → 作为带格式的代码块
       其余内容（如分隔行 `---`）跳过。
    """
    md = md_path.read_text(encoding="utf-8")

    in_code = False
    code_buf = []

    for raw_line in md.split("\n"):
        line = raw_line.rstrip()

        # ``` 代码块围栏
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

        # 非代码区域：只识别 # 一级标题
        if line.startswith("# ") and not line.startswith("## "):
            doc.add_heading(line[2:].strip(), level=1)
        # 其他（---、空行等）全部忽略


# ========== Docx 生成 ==========
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
        ("源程序页数", "60 页（前 30 页 + 后 30 页，共 3 600 行精选代码）"),
    ]
    for i, (k, v) in enumerate(meta_data):
        meta_table.cell(i, 0).text = k
        meta_table.cell(i, 1).text = v
        # 加粗键
        for run in meta_table.cell(i, 0).paragraphs[0].runs:
            run.bold = True

    doc.add_page_break()

    # ===== 解析精选 markdown =====
    parse_selection_and_add(doc, SELECTION_MD)

    doc.save(str(DOCX_PATH))
    return DOCX_PATH.stat().st_size


# ========== 主流程 ==========
def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    if not SELECTION_MD.exists():
        print(f"[ERROR] 未找到 {SELECTION_MD}")
        print(f"        请先运行 concat_sources.py + extract_sourcecode.py")
        return

    print(f"[1/1] 解析 {SELECTION_MD.name} → 生成 {DOCX_PATH.name} ...")
    size = build_docx()
    print(f"      docx 大小：{size / 1024:.1f} KB")

    # 统计代码块行数
    md_text = SELECTION_MD.read_text(encoding="utf-8")
    code_lines = 0
    in_code = False
    for line in md_text.split("\n"):
        if line.startswith("```"):
            in_code = not in_code
            continue
        if in_code:
            code_lines += 1

    print()
    print("=" * 50)
    print(f"完成：精选源代码共 {code_lines} 行（前 1800 + 后 1800）")
    print(f"docx 路径：{DOCX_PATH}")
    print(f"docx 大小：{size / 1024:.1f} KB")
    print("=" * 50)


if __name__ == "__main__":
    main()
