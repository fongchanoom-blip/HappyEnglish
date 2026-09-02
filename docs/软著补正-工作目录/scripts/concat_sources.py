#!/usr/bin/env python3
"""
HappyEnglish 软著补正 — 拼接完整源代码

按文件顺序拼接所有源代码到 源代码-完整.txt，每个文件前加 `# === 文件: path ===` 分隔行。

文件顺序（19 个）：
  1. src/index.html
  2. src/js/app.js
  3. src/js/router.js
  4. src/js/store.js
  5. src/js/db.js
  6. src/js/spaced-repetition.js
  7. src/js/level.js
  8. src/js/etymology.js
  9. src/js/rewards.js
 10. src/js/ai-service.js
 11. src/js/analytics.js
 12. src/js/memory-profile.js
 13. src/js/trigger-engine.js
 14. src/js/personalized-suggestions.js
 15. src/js/learning-companion.js
 16. src/js/achievement-system.js
 17. src/components/companion-widget.js
 18. api/ai-report.js
 19. mcp-server/minimax-server.js

总计约 6471 行。
"""
import os
from pathlib import Path

# ========== 路径配置 ==========
PROJECT_ROOT = Path(__file__).resolve().parents[3]  # scripts -> 工作目录 -> docs -> HappyEnglish
OUT_DIR = PROJECT_ROOT / "docs" / "软著补正-工作目录"
OUTPUT_TXT = OUT_DIR / "源代码-完整.txt"


# ========== 文件清单（按顺序） ==========
SOURCE_FILES = [
    "src/index.html",
    "src/js/app.js",
    "src/js/router.js",
    "src/js/store.js",
    "src/js/db.js",
    "src/js/spaced-repetition.js",
    "src/js/level.js",
    "src/js/etymology.js",
    "src/js/rewards.js",
    "src/js/ai-service.js",
    "src/js/analytics.js",
    "src/js/memory-profile.js",
    "src/js/trigger-engine.js",
    "src/js/personalized-suggestions.js",
    "src/js/learning-companion.js",
    "src/js/achievement-system.js",
    "src/components/companion-widget.js",
    "api/ai-report.js",
    "mcp-server/minimax-server.js",
]


def concat_sources():
    """拼接所有源代码到单一文本文件。"""
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    parts = []
    parts.append("# HappyEnglish 智能英语单词学习系统 V1.0 — 完整源代码\n")
    parts.append("# 共 19 个源代码文件，全部按文件顺序拼接\n")
    parts.append("# 自动生成，请勿手工编辑\n")
    parts.append("\n")

    total_lines = 0
    file_stats = []

    for rel_path in SOURCE_FILES:
        fp = PROJECT_ROOT / rel_path
        if not fp.exists():
            print(f"[WARN] 文件不存在: {rel_path}")
            continue

        with open(fp, "r", encoding="utf-8") as f:
            content = f.read()

        # 文件分隔头
        sep = f"# === 文件: {rel_path} ===\n"
        parts.append(sep)

        # 内容
        parts.append(content)
        if not content.endswith("\n"):
            parts.append("\n")
        parts.append("\n")  # 文件之间空一行

        file_lines = content.count("\n")
        total_lines += file_lines
        file_stats.append((rel_path, file_lines))

    OUTPUT_TXT.write_text("".join(parts), encoding="utf-8")
    final_size = OUTPUT_TXT.stat().st_size
    final_lines = sum(1 for _ in open(OUTPUT_TXT, "r", encoding="utf-8"))

    return file_stats, total_lines, final_lines, final_size


def main():
    print("=" * 60)
    print("HappyEnglish 源代码拼接")
    print("=" * 60)

    file_stats, total_lines, final_lines, final_size = concat_sources()

    print(f"\n[OK] 已生成: {OUTPUT_TXT}")
    print(f"     大小: {final_size / 1024:.1f} KB ({final_size:,} bytes)")
    print(f"     总行数（含分隔头）: {final_lines:,}")
    print(f"     源代码总行数: {total_lines:,}")
    print(f"\n[文件明细]")
    print(f"{'路径':<45} {'行数':>8}")
    print("-" * 55)
    for rel_path, lines in file_stats:
        print(f"{rel_path:<45} {lines:>8}")
    print("-" * 55)
    print(f"{'合计':<45} {total_lines:>8}")
    print()


if __name__ == "__main__":
    main()
