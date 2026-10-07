# PM pilot taklifi — Claude tahlili va Founder uchun qaror jadvali (2026-10-07)

Holat: **PM TAVSIYASI + CLAUDE TAHLILI.** PM o‘z matnida "qarorlarim" deydi, lekin qaror huquqi Founder’da (CLAUDE.md). Founder tasdiqlamaguncha bular qaror emas.
Asos: PM javobi (Founder orqali), `docs/research/2026-10-07-pilot-cohort-pricing-research.md`.
Aniq Founder qarori: 1-bosqich narxi — 119 000 so‘m (`docs/decisions/2026-10-07-first-stage-price.md`).

## 1. Qaror jadvali
| Masala | PM tavsiyasi | Claude tavsiyasi | Founder qarori |
|---|---|---|---|
| 1-bosqich tarkibi | A: chuqur tahlil + individual natija + keyingi qadam yo‘nalishi | Roziman (ikki mahsulot aralashmaydi). Lekin 2-bo‘limdagi cheklovni hal qilish kerak | ✅ ha |
| 1:1 suhbat | Mahsulotga kirmaydi; ixtiyoriy feedback | Roziman | ✅ ha |
| N | 20 | Roziman | ✅ ha |
| Tarkib | ~12 earlyvangelist + ~8 turli holat | Roziman (Claude taklifi bilan bir xil) | ✅ ha |
| Yosh | 18+ qat’iy | Roziman | ✅ ha |
| Narxni aytish | Ha, faktning o‘zi, manipulyatsiyasiz | Roziman | ✅ ha |
| Pilot mezonlari | ≥15/20 oxirigacha; ≥12/20 foyda; ≥10/20 xarid niyati (yordamchi) | Roziman; o‘lchov savollari oldindan yozilsin (3-bo‘lim) | ✅ ha |
| 2-cohort WTP | 20 qualified offer → ≥4 real to‘lov | Roziman; "qualified offer" ta’rifi va muddat oldindan yozilsin | ✅ ha |
| Kuchli signal | ≥6/20 | Roziman | ✅ ha |
| 0–1/20 | Qayta tekshirish | Roziman | ✅ ha |
| 2–3/20 | Qo‘shimcha validatsiya | Roziman | ✅ ha |

## 2. Muhim topilma: hozirgi chuqur tahlil faqat 5 kasbni tavsiya qila oladi
- Production kodida (`qadam-loyiha-deepseek` main, `engine/ranking.py`) roadmap’i yo‘q kasblar tavsiyadan chiqariladi (`no_roadmap`).
- Roadmap bor kasblar (`roadmap_kb_v2.json`) — **5 ta**: dasturlash asoslari, frontend, data analytics, UI/UX dizayn, SMM. Qolgan 20 kasb tavsiya qilinmaydi.
- 9×25 katalog va yangi chuqur tahlil (19 savol) hozircha **qoralama**, kodda yo‘q.

**Oqibat:** IT/digital’dan boshqa yo‘nalishga mos odam ko‘pincha "aniq yo‘nalish topilmadi" degan halol javob oladi. Bu xato emas, lekin 119 000 so‘mlik mahsulot sifatida qiymati past bo‘lishi mumkin. "8 ta turli holat" guruhida bu xavf eng yuqori.

**Variantlar:**
| | Nima | Afzallik | Kamchilik |
|---|---|---|---|
| P1 | Pilot hozirgi versiyada; pilot va 2-cohort faqat **IT/digital’ga qiziquvchilar** uchun, bu ochiq aytiladi | Darhol boshlanadi; pilot = sotiladigan mahsulot | Bozor tor; "turli holat" guruhi ham IT/digital doirasida bo‘ladi |
| P2 | Avval yangi chuqur tahlil + ko‘proq kasb roadmap’i, keyin pilot | Mahsulot to‘liqroq | Bir necha hafta ish; CustDev issiqligi soviydi |
| P3 | Pilot hozirgi versiyada, 2-cohort yangi versiyada | Tez + to‘liq | To‘lov testi boshqa mahsulotni o‘lchaydi — PM va Founder tamoyiliga zid |

Claude tavsiyasi: **P1** — hozirgi mahsulot halol cheklovi bilan sinaladi, P2 parallel tayyorlanadi. Yakuniy qaror: Founder.

## 3. Mezonlarni o‘lchash uchun oldindan yoziladigan ta’riflar
- **Oxirigacha ishlatdi:** chuqur tahlil yakunlandi va natija sahifasi ochildi (bot/Mini App ma’lumoti bilan tekshiriladi).
- **Foyda berdi:** bitta savol, masalan "Natija keyingi qadamingizni aniqlashga yordam berdimi?" (1–5); 4–5 = ijobiy. Savol matni Founder tasdiqlaydi.
- **Xarid niyati:** "Agar bu bosqich 119 000 so‘m bo‘lganida, sotib olarmidingiz?" (Ha / Balki / Yo‘q); faqat "Ha" hisoblanadi.
- **Qualified offer:** 18+; tanlangan segmentga mos; taklifni narxi bilan to‘liq ko‘rgan; to‘lov uchun kamida __ kun vaqt bo‘lgan; 1-cohort qatnashchisi emas.
- **Real to‘lov:** pul tushgan (qaytarilgan to‘lov hisoblanmaydi).
- **Pul qaytarish sharti** (bor/yo‘q) taklifda oldindan aytiladi — konversiyaga ta’sir qiladi; Founder qarori.

## 4. 20 kishilik namunaning statistik chegarasi (oddiy tilda)
4/20 = 20%, lekin 20 kishida tasodif katta: haqiqiy daraja taxminan **8% dan 42% gacha** bo‘lishi mumkin (95% Wilson oralig‘i). Shuning uchun PM to‘g‘ri aytgan: bu bozor ko‘rsatkichi emas, faqat "davom etamizmi" degan qaror qoidasi.

## 5. Bog‘liqliklar
- To‘lov hozir o‘chiq (`free_beta`, legal review). 2-cohort undan keyin.
- To‘lovni kim qabul qiladi (YaTT/MChJ, soliq) — Founder.
- Kodda narx 39 000 → 119 000 ga to‘lov yoqilganda alohida tasdiq bilan o‘zgartiriladi.
- Pilot ishtirokchilari manbasi: CustDev kontaktlari (faqat rozilik bergan maqsadda), kanal e’loni, saralash formasi.

## Founder javobi (2026-10-07)
- Jadval: **ha** → `docs/decisions/2026-10-07-pilot-cohort-founder-decisions.md`.
- P1/P2/P3: o‘ylab ko‘riladi (Claude fikri so‘raldi).
- Pul qaytarish: savol tushuntirildi, qaror kutilmoqda.
- Huquqiy shakl: Founder o‘zini o‘zi band qilgan shaxs sifatida ro‘yxatdan o‘tgan; to‘liq hal qilinmagan.
