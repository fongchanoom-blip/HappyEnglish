"""
build_application.py
====================

把 docs/软著补正-工作目录/申请内容.md 转成 软件著作权申请表-申请内容.docx。

样式：
- 页面边距 2.5 cm
- 中文宋体 / 西文 Times New Roman（小四号 = 12 pt）
- 行距 1.5 倍
- 二级标题 ## 转 Heading 1，一级标题 # 转 Title

用法：
    python build_application.py
"""
from __future__ import annotations

import re
from pathlib import Path

from docx import Document
from docx.enum.text import WD_LINE_SPACING
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor


SCRIPT_DIR = Path(__file__).resolve().parent
WORK_DIR = SCRIPT_DIR.parent
MD_FILE = WORK_DIR / "申请内容.md"
DOCX_FILE = WORK_DIR / "软件著作权申请表-申请内容.docx"


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


def add_field_paragraph(doc: Document, text: str) -> None:
    """渲染 "**字段名**：值" 形式的字段行。"""
    p = doc.add_paragraph()
    set_paragraph_spacing(p)
    # 按第一个 '：' 或 ':' 拆分粗体字段名
    m = re.match(r"^(\*\*[^*]+\*\*)\s*[：:]\s*(.*)$", text)
    if m:
        field_name = m.group(1).strip("*")
        field_value = m.group(2)
        run = p.add_run(field_name + "：")
        run.bold = True
        run.font.size = Pt(12)
        run.font.name = "Times New Roman"
        rPr = run._element.get_or_add_rPr()
        rFonts = rPr.find(qn("w:rFonts"))
        if rFonts is None:
            from docx.oxml import OxmlElement
            rFonts = OxmlElement("w:rFonts")
            rPr.append(rFonts)
        rFonts.set(qn("w:eastAsia"), "宋体")

        run2 = p.add_run(field_value)
        run2.font.size = Pt(12)
        run2.font.name = "Times New Roman"
        rPr2 = run2._element.get_or_add_rPr()
        rFonts2 = rPr2.find(qn("w:rFonts"))
        if rFonts2 is None:
            from docx.oxml import OxmlElement
            rFonts2 = OxmlElement("w:rFonts")
            rPr2.append(rFonts2)
        rFonts2.set(qn("w:eastAsia"), "宋体")
    else:
        run = p.add_run(text)
        run.font.size = Pt(12)
        run.font.name = "Times New Roman"
        rPr = run._element.get_or_add_rPr()
        rFonts = rPr.find(qn("w:rFonts"))
        if rFonts is None:
            from docx.oxml import OxmlElement
            rFonts = OxmlElement("w:rFonts")
            rPr.append(rFonts)
        rFonts.set(qn("w:eastAsia"), "宋体")


def add_body_paragraph(doc: Document, text: str) -> None:
    p = doc.add_paragraph()
    set_paragraph_spacing(p)
    # 支持简单内联粗体：**xxx**
    parts = re.split(r"(\*\*[^*]+\*\*)", text)
    for part in parts:
        if not part:
            continue
        if part.startswith("**") and part.endswith("**"):
            run = p.add_run(part[2:-2])
            run.bold = True
        else:
            run = p.add_run(part)
        run.font.size = Pt(12)
        run.font.name = "Times New Roman"
        rPr = run._element.get_or_add_rPr()
        rFonts = rPr.find(qn("w:rFonts"))
        if rFonts is None:
            from docx.oxml import OxmlElement
            rFonts = OxmlElement("w:rFonts")
            rPr.append(rFonts)
        rFonts.set(qn("w:eastAsia"), "宋体")


def add_heading(doc: Document, text: str, level: int) -> None:
    """自定义 Heading 样式字体（中宋体 + Times New Roman）。"""
    heading = doc.add_heading(level=level)
    heading.paragraph_format.line_spacing = 1.5
    heading.paragraph_format.space_before = Pt(6)
    heading.paragraph_format.space_after = Pt(3)
    run = heading.add_run(text)
    run.font.size = Pt(14 if level == 1 else 16)
    run.font.bold = True
    run.font.name = "Times New Roman"
    run.font.color.rgb = RGBColor(0, 0, 0)
    rPr = run._element.get_or_add_rPr()
    rFonts = rPr.find(qn("w:rFonts"))
    if rFonts is None:
        from docx.oxml import OxmlElement
        rFonts = OxmlElement("w:rFonts")
        rPr.append(rFonts)
    rFonts.set(qn("w:eastAsia"), "黑体" if level == 1 else "黑体")
    rFonts.set(qn("w:ascii"), "Times New Roman")
    rFonts.set(qn("w:hAnsi"), "Times New Roman")


def parse_markdown(doc: Document, md_text: str) -> None:
    """
    简单 Markdown 解析：
    - '# ' 转 Title
    - '## ' 转 Heading 1
    - '### ' 转 Heading 2
    - '---' 分隔符：插入空行
    - 以 "- " 或 "* " 开头的列表项独立成段
    - 以 "**字段**：值" 形式的字段独立成段
    - 其他正文普通段落
    - 行内的 **xxx** 渲染为粗体
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

        # 注释
        if stripped.startswith(">"):
            i += 1
            continue

        # 分隔符
        if re.match(r"^---+$", stripped):
            doc.add_paragraph()
            i += 1
            continue

        # 标题
        if stripped.startswith("### "):
            add_heading(doc, stripped[4:].strip(), level=2)
            i += 1
            continue
        if stripped.startswith("## "):
            add_heading(doc, stripped[3:].strip(), level=1)
            i += 1
            continue
        if stripped.startswith("# "):
            add_heading(doc, stripped[2:].strip(), level=0)
            i += 1
            continue

        # 列表项
        if stripped.startswith(("- ", "* ")):
            # 列表项整段渲染
            text = stripped[2:].strip()
            add_field_paragraph(doc, text)
            i += 1
            continue

        # 普通段落：合并连续的非空行（多行段落）
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
            ):
                break
            buffer.append(nxt)
            i += 1
        add_body_paragraph(doc, " ".join(buffer))


def main() -> None:
    if not MD_FILE.exists():
        raise FileNotFoundError(f"找不到源 markdown: {MD_FILE}")

    md_text = MD_FILE.read_text(encoding="utf-8")

    doc = Document()
    configure_default_style(doc)
    configure_page(doc)

    # 文档主标题
    title = doc.add_paragraph()
    title.alignment = 1  # 居中
    set_paragraph_spacing(title)
    title_run = title.add_run("软件著作权申请表 - 申请内容")
    title_run.bold = True
    title_run.font.size = Pt(18)
    title_run.font.name = "Times New Roman"
    rPr = title_run._element.get_or_add_rPr()
    rFonts = rPr.find(qn("w:rFonts"))
    if rFonts is None:
        from docx.oxml import OxmlElement
        rFonts = OxmlElement("w:rFonts")
        rPr.append(rFonts)
    rFonts.set(qn("w:eastAsia"), "黑体")

    doc.add_paragraph()

    parse_markdown(doc, md_text)

    DOCX_FILE.parent.mkdir(parents=True, exist_ok=True)
    doc.save(str(DOCX_FILE))

    size_kb = DOCX_FILE.stat().st_size / 1024
    print(f"[OK] 申请内容.docx 生成完成: {DOCX_FILE}")
    print(f"     文件大小: {size_kb:.1f} KB")


if __name__ == "__main__":
    main()
