# Asoschi qarorlari — tavsiyalar soni va 1-bosqich doirasi (2026-10-04)

Muallif: Nemo (loyiha asoschisi va g‘oya muallifi). Yozib olgan: Claude.
Holat: **qaror qabul qilingan, implementatsiya uchun majburiy** (`CLAUDE.md` → Decision authority). Faqat chegara qiymati ochiq — read-only auditdan keyin asoschi tasdiqlaydi.

## Q1. Tavsiyalar soni: 5 — yuqori chegara, majburiy son emas

> "Algoritm shunaqa yozilgan deb majburan top-5 chiqarmasligimiz kerak. Top-5 — maksimum chegara. Undan kam bo‘lsa bo‘lsin."

- Foydalanuvchiga faqat unga haqiqatan yaqin yo‘nalishlar ko‘rsatiladi: 1 dan 5 tagacha.
- Ro‘yxatni to‘ldirish uchun uzoq yo‘nalishlar qo‘shilmaydi.
- Misol (asoschi): dasturlash eng mos chiqsa, keyingilari kiberxavfsizlik yoki data science / AI muhandisligi bo‘lishi mumkin — "nari borsa top-3".

**Hozirgi kod bu tamoyilga zid** (`backend/engine/ranking.py`): `top_n=5`, yaqinlik chegarasi yo‘q; yo‘l xaritasi tayyor kasblar ham 5 ta — natijada har bir foydalanuvchiga 5 tasi ham chiqadi.

## Q2. Minimal ball va "aniq yo‘nalish ko‘rinmayapti" holati

> "Bizning minimum balimiz bo‘lishi kerak. Shu balldan o‘tsa — eng kamida bitta tavsiya. O‘tolmasa — halol aytamiz."

- Minimal chegaradan o‘tgan yo‘nalishlar: 1–5 ta (Q1 bo‘yicha).
- Hech biri o‘tmasa — tavsiya ko‘rsatilmaydi, o‘rniga halol xabar:

> Hozircha javoblaringiz bo‘yicha aniq yo‘nalish ko‘rinmayapti.
> Qadam’ning birinchi bosqichida faqat IT va zamonaviy kasblar — raqamli texnologiyalar bilan bog‘liq yo‘nalishlar — tanlab olingan. Agar aynan shu sohalarga qiziqsangiz va mutaxassis bo‘lishni maqsad qilgan bo‘lsangiz, keyinroq yana bir urinib ko‘ring.
> Hozirgi yo‘nalishlarimiz bilan tanishib chiqing: [havola]

(Matn — asoschi so‘zlari asosida loyiha; yakuniy tahrir egasi bilan. Havola: veb-saytdagi yo‘nalishlar katalogi — `/yonalishlar` sahifasi PM ko‘rib chiqqandan keyin chiqadi; ungacha Mini App ichidagi ro‘yxat.)

**Implementatsiya qoidasi (asoschi qarori, PM formulasi bilan tasdiqlangan):**

```
MAX = 5
actual_count = tasdiqlangan minimal balldan (≥ threshold) o‘tgan kasblar soni
0      → halol xabar (yuqoridagi matn + katalog havolasi), tavsiya yo‘q
1..5   → o‘sha kasblarning hammasi
5 dan ko‘p → eng yuqori 5 tasi
```

Bu — default va yagona amalga oshiriladigan qoida. Ro‘yxat hech qachon 5 gacha "to‘ldirilmaydi".

**Chegara qiymati — Founder qarori (2026-10-04): 51.** Founder so‘zi: "eng minimal ball 51 bo‘lsin… agar 50 bo‘lsa ham halol javob beriladi." Asos: `docs/reviews/2026-10-04-threshold-audit-report.md`. - Chegara: **ball ≥ 51.0** → tavsiya; 50.99 va pasti → tavsiya emas (Founder, variant "a").
- Qo‘llanadigan joylar (Founder Claude tavsiyasini qabul qildi): **dastlabki natija, Career Intelligence, chuqur tahlil natijasi va PDF**. Roadmap (tanlangan bitta kasbning rejasi) — qo‘llanmaydi.
- Katalog havolasi (Founder, variant "a"): katalog sahifasi hali yo‘q, shuning uchun xabar hozircha havolasiz chiqadi; `/yonalishlar` tayyor bo‘lgach `NEXT_PUBLIC_CATALOG_URL` sozlanadi va havola paydo bo‘ladi.
- Chuqur tahlil taklifi: qo‘shimcha o‘zgarish kerak emas — dastlabki natija sahifasida "Chuqur tahlilni boshlash" kartasi allaqachon bor.
- Kod: `qadam-loyiha-deepseek`, branch `claude/bl14-min-score`.

*Audit oldidagi holat (tarix uchun):* "Raqam o‘ylab topilmaydi" qoidasiga ko‘ra: read-only audit (har bir nomzod qiymatda nechta foydalanuvchi nechta tavsiya oladi, nechtasi "aniq yo‘nalish yo‘q" oladi) → **asoschi tasdig‘i** → real foydalanuvchi fikri bo‘yicha kalibrlash. Qiymat tasdiqlanmaguncha kod yozilmaydi.

*Faqat tavsiya (default emas):* qo‘shimcha nisbiy chegara (birinchi tavsiyadan ≤ Y farq) "nechta"ni yanada toraytirishi mumkin. Qo‘llash yoki qo‘llamaslik — asoschi qarori; so‘ralmaguncha implement qilinmaydi.

## Q3. 1-bosqich doirasi: IT va zamonaviy kasblar

> "Raqamli texnologiyalar bilan chambarchas bog‘liq bo‘lgan barcha sohalarni men IT va zamonaviy kasblar deb tushuntirganman."

Asoschi 1-bosqich ro‘yxatiga kiritgan, lekin backend taksonomiyasida (25 kasb) **yo‘q** bo‘lganlar:

| Yo‘nalish | Holat |
|---|---|
| Sotuv menejeri | rejalashtirilgan (taksonomiyada faqat "IT / B2B Sales" bor) |
| Tizim va tarmoq ma’muri | rejalashtirilgan (yaqini: "DevOps / Cloud") |
| Excel va Google Sheets mutaxassisi | rejalashtirilgan |
| Ma’lumotlar bazasi mutaxassisi | rejalashtirilgan |
| Buxgalter | rejalashtirilgan |
| Fintech mutaxassisi | rejalashtirilgan |

Bajarildi: veb-saytdagi `plannedCareers` ro‘yxatiga qo‘shildi (holat "planned"; signal, muddat, yo‘l xaritasi taxmin qilinmagan).

Taksonomiyaga to‘liq qo‘shish uchun har biriga kerak: signal vaznlari, o‘rganish muddati, pathway turi, yo‘l xaritasi (KB) — har biri manbali, o‘ylab topilmasdan. Bu — alohida bosqich, PM rejasiga.

## Q4. "Yaqin sohalar"

Asoschi misoli: buxgalter → data analitika → Excel/Sheets yoki ma’lumotlar bazasi mutaxassisi.
Hozirgi tizim kasblarni faqat signal mosligi bo‘yicha taqqoslaydi; sohalar orasidagi yaqinlik modellashtirilmagan. Backlog’ga.

## Ketma-ketlik

1. Hozirgi `--apply` va verification (bu qarorlarga bog‘liq emas).
2. Spetsifikatsiya: Q1 + Q2 (yuqoridagi formula, audit rejasi, matnlar).
3. Read-only audit: hozirgi sessiyalarda har bir nomzod chegara qiymati nechta tavsiya beradi.
4. Asoschi chegara qiymatini tasdiqlaydi (PM tavsiyasi bilan) → kod.
5. Q3 taksonomiya kengaytmasi va Q4 — keyingi bosqichlar.

## Amalga oshirish (2026-10-07)
- Founder PR #18 ni tasdiqladi ("ha"). `qadam-loyiha-deepseek` `main`ga merge qilindi: `56f7efa`. Testlar: 464 passed.
- Deploy: backend (Render, qo‘lda) va Mini App — Founder tomonidan; keyin telefonda tekshiruv (qisqa test → halol xabar; chuqur tahlil → kamida 1 tavsiya).
