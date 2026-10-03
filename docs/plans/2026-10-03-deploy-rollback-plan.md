# P0 + bot PR #2 — deploy va rollback rejasi (qoralama)

Holat: **reja, bajarilmagan.** Deploy faqat PM ruxsati bilan. Har bir qadamni kim bajarishi ko‘rsatilgan.

## 0. Bilishimiz kerak bo‘lgan narsalar (egasi Render/Vercel’da tekshiradi)

| Savol | Qayerda ko‘riladi | Nega muhim |
|---|---|---|
| Render backend qaysi branch’dan deploy qiladi? | Render → qadam-backend-deepseek → Settings → Branch | Merge qilinganda avtomatik deploy bo‘ladimi yoki yo‘qmi |
| Render bot service qaysi branch’dan? | Render → qadam-bot-… → Settings → Branch | Bot matni va deep-link (PR #2) shu service’da |
| Auto-Deploy yoqilganmi? | Settings → Auto-Deploy | Yoqilgan bo‘lsa, merge = darhol deploy |
| Mini App Vercel’da qaysi branch production? | Vercel → Project → Settings → Git | Mini App o‘zgarishlari qachon chiqishi |
| Neon’da backup bormi? | Neon → Branches / Backups | Rollback va legacy recompute’dan oldin |

Hozirgi holat (tekshirilgan): production `main` = `160b8bc`, `ENV=production` o‘rnatilgan (soxta login → 401), backend ishlayapti.

## 1. Deploy oldidan (bir kun oldin yoki deploy kuni)

1. **Neon backup** — egasi: Neon’da yangi branch yaratish (masalan, `pre-p0-backup`). Bu bir zumda va bepul tarifda ham ishlaydi.
2. **Production check (hozirgi holat)** — Claude: `production-check.ts` → kutilgan natija: 2 va 3 PASS, 4a–4d FAIL (eski kod).
3. **“Oldin” skrinshotlari** — egasi: natija sahifasi (foizlar), roadmap (maosh), bot `/start` matni.

## 2. Deploy tartibi

Uch qism birga chiqishi kerak: backend, bot va Mini App. Aks holda Mini App yangi endpoint’ni chaqiradi, backend esa hali eski bo‘lib qoladi.

| # | Qadam | Kim |
|---|---|---|
| 1 | Bot PR #2 ni `main` ga merge | egasi (GitHub) yoki Claude, PM ruxsati bilan |
| 2 | `claude/p0-diagnostic-fixes` ni `main` ga merge (PR #2 bilan konflikt yo‘q — tekshirilgan, 353/353) | xuddi shunday |
| 3 | Render backend va bot deploy (auto yoki Manual Deploy → `main`) | egasi |
| 4 | Vercel Mini App production deploy | egasi |
| 5 | Ikkala Render service “Live” (yashil) bo‘lguncha kutish | egasi |

## 3. Deploy’dan keyin darhol (≈ 15 daqiqa)

1. **Production check** — Claude. Kutilgan natija: 2, 3, 4a, 4b, 4c, 4d PASS (1 — faqat label).
2. **Telefon sinovi** — egasi: `docs/reviews/2026-10-03-merge-gate-final.md` §D (6 qadam). Natijani “oldin” skrinshotlari bilan solishtirish.
3. **Legacy recompute — faqat dry run**: `python scripts/recompute_signals.py`. Hech narsa yozmaydi, faqat nechta sessiya o‘zgarishini ko‘rsatadi. `--apply` faqat backup tekshirilgandan keyin va PM ruxsati bilan.

## 4. Rollback — nima bo‘lsa, nima qilinadi

| Belgi | Harakat | Vaqt |
|---|---|---|
| Mini App ochilmaydi yoki xato beradi | Vercel → Deployments → oldingi deploy → **Promote to Production** | 1–2 daqiqa |
| Backend xato beradi (500, diagnostika yakunlanmaydi) | Render → backend → Deploys → oldingi (`160b8bc`) → **Rollback** | 2–5 daqiqa |
| Bot `/start` ga javob bermaydi | Render → bot → Deploys → oldingi → **Rollback** | 2–5 daqiqa |
| Ma’lumotlar buzilgan (faqat `--apply` dan keyin bo‘lishi mumkin) | Neon backup branch’idan tiklash | egasi + Claude |

Muhim:
- P0’da **DB sxemasi o‘zgarmaydi** (yangi jadval yoki ustun yo‘q). Shuning uchun kod rollback’i ma’lumotlarga zarar yetkazmaydi.
- Yagona qaytarib bo‘lmaydigan qadam — `recompute_signals.py --apply`. U faqat backup bilan bajariladi.
- `ENV=production` rollback’da ham **o‘chirilmaydi**.

## 5. Ma’lum xavflar

- Render bepul tarifi: server uxlaydi, birinchi so‘rov 30–60 soniya oladi. Foydalanuvchi “network error” ko‘rishi mumkin — bu deploy xatosi emas. Uyg‘otish: `https://qadam-backend-deepseek.onrender.com/health`.
- Formula o‘zgargani uchun bir xil javoblarga natija tartibi boshqacha chiqishi mumkin. Bu kutilgan va to‘g‘ri.
- Eski saqlangan AI matnlarida foiz qolgan bo‘lishi mumkin (faqat eski v0 hisobotlarida).

## 6. Staging varianti (PM tanlasa)

Render’da ikkinchi backend service (branch `claude/p0-diagnostic-fixes`) va Neon’da alohida branch (production nusxasi). Mini App uchun Vercel preview `BACKEND_URL` = staging. Afzalligi: production’ga tegmasdan barcha tekshiruvlar. Kamchiligi: sozlash uchun ~1 soat va alohida test bot kerak bo‘lishi mumkin (webhook bir botga bitta).
