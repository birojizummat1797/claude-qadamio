"""Build roadmap_kb_v3_draft.json and a readable Markdown view; run validation checks."""
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from p1 import P1  # noqa: E402
from p2 import P2  # noqa: E402
from p3 import P3  # noqa: E402

OUT = Path(sys.argv[1])
careers = {**P1, **P2, **P3}

# Same pattern as qadam-loyiha-deepseek engine/public_output.py (money is stripped there).
MONEY_RE = re.compile(r"\d[\d\s.,\-–]*\s*(mln|million|ming|so['’]?m|sum|usd|dollar)\b|\$\s?\d", re.IGNORECASE)
STAT_RE = re.compile(r"\d+\s*%")
errors = []


def walk(obj, path):
    if isinstance(obj, str):
        if MONEY_RE.search(obj):
            errors.append(f"money: {path}: {obj}")
        if STAT_RE.search(obj):
            errors.append(f"percent: {path}: {obj}")
    elif isinstance(obj, dict):
        for k, v in obj.items():
            walk(v, f"{path}.{k}")
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            walk(v, f"{path}[{i}]")


for cid, c in careers.items():
    walk(c, cid)
    assert [s["n"] for s in c["stages"]] == [0, 1, 2, 3, 4], cid
    for s in c["stages"]:
        for key in ("daily_focus", "signs_right", "signs_wrong", "graduate_criteria", "challenges", "skills_gained", "constraints"):
            assert s[key], (cid, s["n"], key)
    weeks = sum(s["weeks"] for s in c["stages"])
    assert c["milestones"][-1]["week"] <= weeks, (cid, weeks)
    assert len(c["first_3_actions"]) == 3, cid
    assert all(r["url"].startswith("https://") for r in c["resources"]), cid

if errors:
    print("\n".join(errors))
    sys.exit(1)

kb = {
    "version": "v3.0-draft",
    "created_at": "2026-10-07",
    "note": "QADAM Roadmap KB v3 draft — 21 careers for the 9x25 catalog (adds to the 4 existing v2 careers). Same schema as v2. No salary, statistics or outcome promises; time budgets and plan targets are Qadam's own recommendations. Founder review required before use.",
    "careers": careers,
}
OUT.mkdir(parents=True, exist_ok=True)
(OUT / "roadmap_kb_v3_draft.json").write_text(json.dumps(kb, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")

md = ["# Yo‘l xaritalari v3 — qoralama (21 kasb, 2026-10-07)", "",
      "Holat: **QORALAMA** — Founder tasdig‘i kerak. Manba: `roadmap_kb_v3_draft.json` (shu papkada). Bu fayl undan avtomatik yaratilgan — tahrir JSON’da qilinadi.",
      "Qoidalar: maosh, statistika va natija va’dasi yo‘q; haftalar va kundalik vaqt — Qadam tavsiyasi (reja), fakt emas.",
      "Qayta yaratish: `python3 docs/specs/roadmaps-v3/source/build.py docs/specs/roadmaps-v3` (tekshiruvlar: pul/foiz yo‘q, 5 bosqich, havolalar https).",
      "⚠️ Manba havolalari sessiyada tarmoq cheklovi sababli ochib tekshirilmadi — Founder ko‘rib chiqishda bosib tekshiradi.", ""]
md.append("| # | ID | Kasb | Katalog | Haftalar |")
md.append("|---|---|---|---|---|")
for i, (cid, c) in enumerate(careers.items(), 1):
    md.append(f"| {i} | `{cid}` | {c['uz']} | {c['cluster_uz']} | {sum(s['weeks'] for s in c['stages'])} |")
md.append("")
for cid, c in careers.items():
    md += [f"## {c['uz']} (`{cid}`)", "", c["why"], "",
           f"**B nuqta:** {'; '.join(c['b_point']['outcomes'])}. Keyingi qadam: {c['b_point']['next_step']}.", ""]
    md.append("| Bosqich | Haftalar | Kuniga | Natija | Asosiy ko‘nikmalar |")
    md.append("|---|---|---|---|---|")
    for s in c["stages"]:
        md.append(f"| {s['n']}. {s['name_uz']} | {s['weeks']} | {s['daily_hours']} | {s['graduate_by']} | {', '.join(s['skills_gained'])} |")
    md += ["", "**Bugun boshlash uchun 3 qadam:** " + " · ".join(c["first_3_actions"]),
           "", "**Manbalar:** " + " · ".join(f"[{r['name']}]({r['url']})" for r in c["resources"]), ""]
(OUT / "README.md").write_text("\n".join(md), encoding="utf-8")
print(f"OK: {len(careers)} careers")
