#!/usr/bin/env python3
"""
HappyEnglish 软著补正 — 提取前 1800 + 后 1800 行精选源代码

从 源代码-完整.txt 取前 1800 + 后 1800 行，写入 源代码-精选.md。

格式：
    # 前 30 页

    <前 1800 行>

    # 后 30 页

    <后 1800 行>

只有这两个一级标题，不要任何 ## 二级标题。
"""
from pathlib import Path

# ========== 路径配置 ==========
PROJECT_ROOT = Path(__file__).resolve().parents[3]
OUT_DIR = PROJECT_ROOT / "docs" / "软著补正-工作目录"
INPUT_TXT = OUT_DIR / "源代码-完整.txt"
OUTPUT_MD = OUT_DIR / "源代码-精选.md"

# ========== 精选行数 ==========
FRONT_LINES = 1800
BACK_LINES = 1800


def extract():
    """从 源代码-完整.txt 提取前 FRONT_LINES + 后 BACK_LINES 行。"""
    if not INPUT_TXT.exists():
        raise FileNotFoundError(f"未找到 {INPUT_TXT}，请先运行 concat_sources.py")

    with open(INPUT_TXT, "r", encoding="utf-8") as f:
        all_lines = f.readlines()

    total = len(all_lines)
    print(f"[INFO] 完整源代码共 {total:,} 行")

    # 前 1800 行
    front = all_lines[:FRONT_LINES]
    # 后 1800 行
    if total > FRONT_LINES + BACK_LINES:
        back = all_lines[-BACK_LINES:]
    else:
        # 如果总行数不足以分开前后，则全部作为前部
        back = all_lines[FRONT_LINES:]

    print(f"[INFO] 前 {FRONT_LINES} 行: {len(front)} 行")
    print(f"[INFO] 后 {BACK_LINES} 行: {len(back)} 行")

    # 写出 markdown
    parts = []
    parts.append("# 前 30 页\n\n")
    parts.append("```\n")
    parts.append("".join(front))
    if not front[-1].endswith("\n"):
        parts.append("\n")
    parts.append("```\n\n")

    parts.append("# 后 30 页\n\n")
    parts.append("```\n")
    parts.append("".join(back))
    if not back[-1].endswith("\n"):
        parts.append("\n")
    parts.append("```\n")

    OUTPUT_MD.write_text("".join(parts), encoding="utf-8")
    final_size = OUTPUT_MD.stat().st_size

    return len(front), len(back), final_size


def main():
    print("=" * 60)
    print("HappyEnglish 源代码精选提取")
    print("=" * 60)

    front_n, back_n, size = extract()
    total = front_n + back_n

    print(f"\n[OK] 已生成: {OUTPUT_MD}")
    print(f"     大小: {size / 1024:.1f} KB ({size:,} bytes)")
    print(f"     前 30 页: {front_n} 行")
    print(f"     后 30 页: {back_n} 行")
    print(f"     合计: {total} 行")
    print()


if __name__ == "__main__":
    main()
