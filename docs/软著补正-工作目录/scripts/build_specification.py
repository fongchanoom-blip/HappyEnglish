"""
build_specification.py
======================

把 docs/软著补正-工作目录/程序设计说明书.md 转成
docs/软著补正-工作目录/HappyEnglish 程序设计说明书.docx。

样式：
- 页面边距 2.5 cm
- 中文宋体 / 西文 Times New Roman（小四号 = 12 pt 正文，五号 = 10.5 pt 小节）
- 行距 1.5 倍
- 一级标题 # → Heading 1
- 二级标题 ## → Heading 2
- 三级标题 ### → Heading 3
- 图片引用 ![alt](path) 自动插入，居中、加图注

用法：
    python build_specification.py
"""
from __future__ import annotations

import os
import re
import sys
from pathlib import Path

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING
from docx.oxml.ns import qn
from docx.shared import Cm, Inches, Pt, RGBColor


SCRIPT_DIR = Path(__file__).resolve().parent
WORK_DIR = SCRIPT_DIR.parent
MD_FILE = WORK_DIR / "程序设计说明书.md"
DOCX_FILE = WORK_DIR / "HappyEnglish 程序设计说明书.docx"


# -----------------------------------------------------------------------------
# 样式设置
# -----------------------------------------------------------------------------

def configure_default_style(doc: Document) -> None:
    """设置全局默认样式：宋体（中文）+ Times New Roman（西文），小四号。"""
    style = doc.styles["Normal"]
    style.font.name = "Times New Roman"
    style.font.size = Pt(12)
    # 中文东亚字体
    rPr = style.element.get_or_add_rPr()
    rFonts = rPr.find(qn("w:rFonts"))
    if rFonts is None:
        from docx.oxml import OxmlElement
        rFonts = OxmlElement("w:rFonts")
        rPr.append(rFonts)
    rFonts.set(qn("w:eastAsia"), "宋体")
    rFonts.set(qn("w:ascii"), "Times New Roman")
    rFonts.set(qn("w:hAnsi"), "Times New Roman")


def configure_page(doc: Document) -> None:
    """所有页面 2.5 cm 边距。"""
    for section in doc.sections:
        section.top_margin = Cm(2.5)
        section.bottom_margin = Cm(2.5)
        section.left_margin = Cm(2.5)
        section.right_margin = Cm(2.5)


def set_paragraph_spacing(paragraph, line_rule=WD_LINE_SPACING.MULTIPLE) -> None:
    paragraph.paragraph_format.line_spacing_rule = line_rule
    paragraph.paragraph_format.line_spacing = 1.5
    paragraph.paragraph_format.space_after = Pt(0)
    paragraph.paragraph_format.space_before = Pt(0)


# -----------------------------------------------------------------------------
# 段落渲染
# -----------------------------------------------------------------------------

def _apply_font(run, size_pt: float = 12, bold: bool = False) -> None:
    run.font.size = Pt(size_pt)
    run.font.bold = bold
    run.font.name = "Times New Roman"
    rPr = run._element.get_or_add_rPr()
    rFonts = rPr.find(qn("w:rFonts"))
    if rFonts is None:
        from docx.oxml import OxmlElement
        rFonts = OxmlElement("w:rFonts")
        rPr.append(rFonts)
    rFonts.set(qn("w:eastAsia"), "宋体")
    rFonts.set(qn("w:ascii"), "Times New Roman")
    rFonts.set(qn("w:hAnsi"), "Times New Roman")


def add_body_paragraph(doc: Document, text: str) -> None:
    """渲染普通正文段落，行内 **xxx** 渲染为粗体。"""
    p = doc.add_paragraph()
    set_paragraph_spacing(p)
    parts = re.split(r"(\*\*[^*]+\*\*)", text)
    for part in parts:
        if not part:
            continue
        if part.startswith("**") and part.endswith("**"):
            run = p.add_run(part[2:-2])
            run.bold = True
        else:
            run = p.add_run(part)
        _apply_font(run, size_pt=12, bold=False)


def add_heading(doc: Document, text: str, level: int) -> None:
    """自定义 Heading 样式字体（中宋体 + Times New Roman）。"""
    heading = doc.add_heading(level=level)
    heading.paragraph_format.line_spacing = 1.5
    heading.paragraph_format.space_before = Pt(6)
    heading.paragraph_format.space_after = Pt(3)
    run = heading.add_run(text)
    # 一级标题（章）16pt（小三），二级（节）14pt（四号），三级（小节）12pt（小四）
    size_pt = {1: 16, 2: 14, 3: 12}.get(level, 12)
    run.font.size = Pt(size_pt)
    run.font.bold = True
    run.font.name = "Times New Roman"
    run.font.color.rgb = RGBColor(0, 0, 0)
    rPr = run._element.get_or_add_rPr()
    rFonts = rPr.find(qn("w:rFonts"))
    if rFonts is None:
        from docx.oxml import OxmlElement
        rFonts = OxmlElement("w:rFonts")
        rPr.append(rFonts)
    rFonts.set(qn("w:eastAsia"), "黑体")
    rFonts.set(qn("w:ascii"), "Times New Roman")
    rFonts.set(qn("w:hAnsi"), "Times New Roman")


def add_image(doc: Document, image_path: Path, alt_text: str, base_dir: Path) -> None:
    """插入图片，居中、限定宽度 6 inch，并在图片下方居中加图注。"""
    full_path = image_path if image_path.is_absolute() else base_dir / image_path
    if not full_path.exists():
        print(f"  [WARN] 图片不存在: {full_path}")
        return

    p = doc.add_paragraph()
    set_paragraph_spacing(p)
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = p.add_run()
    run.add_picture(str(full_path), width=Inches(6))

    # 图注（小五号 9pt）
    caption = doc.add_paragraph()
    caption.alignment = WD_ALIGN_PARAGRAPH.CENTER
    set_paragraph_spacing(caption)
    cap_run = caption.add_run(alt_text)
    cap_run.italic = True
    _apply_font(cap_run, size_pt=9, bold=False)


# -----------------------------------------------------------------------------
# Markdown 解析
# -----------------------------------------------------------------------------

def parse_markdown(doc: Document, md_text: str, base_dir: Path) -> None:
    """
    简单 Markdown 解析：
    - '# ' 转 Heading 1
    - '## ' 转 Heading 2
    - '### ' 转 Heading 3
    - '---' 分隔符：插入空行
    - '![alt](path)' 插入图片
    - '> xxx' 注释行跳过
    - '- ' 或 '* ' 开头列表项独立成段
    - 普通段落（合并连续非空行）
    """
    lines = md_text.splitlines()
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # 跳过空行
        if not stripped:
            i += 1
            continue

        # 注释 / 引用
        if stripped.startswith(">"):
            i += 1
            continue

        # 分隔符
        if re.match(r"^---+$", stripped):
            doc.add_paragraph()
            i += 1
            continue

        # 图片引用 ![alt](path)
        img_match = re.match(r"^!\[([^\]]*)\]\(([^)]+)\)\s*$", stripped)
        if img_match:
            alt_text = img_match.group(1).strip()
            img_rel = img_match.group(2).strip()
            add_image(doc, Path(img_rel), alt_text, base_dir)
            i += 1
            continue

        # 标题
        if stripped.startswith("### "):
            add_heading(doc, stripped[4:].strip(), level=3)
            i += 1
            continue
        if stripped.startswith("## "):
            add_heading(doc, stripped[3:].strip(), level=2)
            i += 1
            continue
        if stripped.startswith("# "):
            add_heading(doc, stripped[2:].strip(), level=1)
            i += 1
            continue

        # 列表项
        if stripped.startswith(("- ", "* ")):
            text = stripped[2:].strip()
            add_body_paragraph(doc, text)
            i += 1
            continue

        # 普通段落：合并连续的非空行
        buffer = [stripped]
        i += 1
        while i < len(lines):
            nxt = lines[i].strip()
            if (
                not nxt
                or nxt.startswith("#")
                or nxt.startswith(">")
                or nxt.startswith("- ")
                or nxt.startswith("* ")
                or re.match(r"^---+$", nxt)
                or re.match(r"^!\[", nxt)
            ):
                break
            buffer.append(nxt)
            i += 1
        add_body_paragraph(doc, " ".join(buffer))


# -----------------------------------------------------------------------------
# 主流程
# -----------------------------------------------------------------------------

def main() -> None:
    if not MD_FILE.exists():
        raise FileNotFoundError(f"找不到源 markdown: {MD_FILE}")

    md_text = MD_FILE.read_text(encoding="utf-8")

    doc = Document()
    configure_default_style(doc)
    configure_page(doc)

    # 文档主标题
    title = doc.add_paragraph()
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    set_paragraph_spacing(title)
    title_run = title.add_run("HappyEnglish 程序设计说明书")
    title_run.bold = True
    title_run.font.size = Pt(22)
    title_run.font.name = "Times New Roman"
    rPr = title_run._element.get_or_add_rPr()
    rFonts = rPr.find(qn("w:rFonts"))
    if rFonts is None:
        from docx.oxml import OxmlElement
        rFonts = OxmlElement("w:rFonts")
        rPr.append(rFonts)
    rFonts.set(qn("w:eastAsia"), "黑体")
    rFonts.set(qn("w:ascii"), "Times New Roman")
    rFonts.set(qn("w:hAnsi"), "Times New Roman")

    # 文档副标题
    sub = doc.add_paragraph()
    sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    set_paragraph_spacing(sub)
    sub_run = sub.add_run("软件全称：HappyEnglish — 智能英语单词学习系统")
    sub_run.font.size = Pt(12)
    _apply_font(sub_run, size_pt=12, bold=False)

    doc.add_paragraph()  # 空行

    parse_markdown(doc, md_text, base_dir=WORK_DIR)

    DOCX_FILE.parent.mkdir(parents=True, exist_ok=True)
    doc.save(str(DOCX_FILE))

    size_kb = DOCX_FILE.stat().st_size / 1024

    # 简单统计
    body = doc.element.body
    n_para = len(body.findall(qn("w:p")))
    # 图片 inline 数
    n_pics = 0
    for drawing in body.iter(qn("w:drawing")):
        n_pics += 1

    print(f"[OK] 程序设计说明书.docx 生成完成")
    print(f"     文件路径: {DOCX_FILE}")
    print(f"     文件大小: {size_kb:.1f} KB")
    print(f"     段落数:   {n_para}")
    print(f"     图片数:   {n_pics}")


if __name__ == "__main__":
    main()