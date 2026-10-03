# PM review paketi — 2026-10-03

Kimga: Qadam.io product owner (Nemo) va PM maslahatchi (ChatGPT).
Kimdan: Claude (Lead Product Engineer roli).
Maqsad: PM limiti tiklanganda bir o‘qishda holatni tushunish va qaror berish.

> Muhim: quyidagi rang taklifi **meniki**. Uni o‘zim tasdiqlamadim. Pastda o‘z ishimga qarshi tanqid ham bor — mustaqil ko‘z bilan tekshirish uchun.

---

## 1. Hozirgi holat

| Ish | Holat | Qayerda |
|---|---|---|
| Audit + plan + deep-link spec | ✅ qabul qilingan | `docs/` |
| B1 Foundation | ✅ qabul qilingan | `claude/qadam-public-web-platform-mdd0mg` |
| B2 Homepage | ✅ review’dan o‘tgan | o‘sha branch |
| Brand Color System taklifi v1 | ⏳ **PM qarori kutilmoqda** | https://claude.ai/artifact/YW1ciDW8YGRt8byeKi6nZh |
| B2.1 — homepage yangi palitrada | ⏳ tayyor, **tasdiqsiz merge qilinmaydi** | alohida branch: `claude/b2.1-brand-palette` |
| Bot deep-link handler | ⏳ PR ochiq, review kutilmoqda | birojizummat1797/qadam-loyiha-deepseek#2 |
| B3 Career Catalog | ⛔ boshlanmagan (rang tasdig‘idan keyin) | — |

B2.1 tekshiruvlari: ESLint 0, TypeScript 0, unit 122/122 (yangi kontrast testlari bilan), build ✅, Playwright 41 o‘tdi / 4 skip (mo‘ljallangan), 320/390/1280px skrinshotlar olingan.

## 2. PM qaror berishi kerak bo‘lgan savollar

### Rang tizimi (B2.1 merge qilinishi uchun)
1. 12 ta token va Spark qoidasi (ekranda 1 tadan ko‘p emas) — qabulmi?
2. Final CTA + footer bitta Midnight zona; hero yorug‘ — qabulmi?
3. Eyebrow yorliqlari Clay Text rangida (muqobil: Qadam Blue) — qaysi?
4. Logo belgisi Clay → Mist → Blue — qabulmi? (Final logo emas, vaqtinchalik.)
5. Quyidagi 3-bo‘limdagi xavflardan qaysilarini hozir tuzatamiz?

### Kontent (B2’dan qolgan, rangdan mustaqil)
6. “Sababini tushunasiz” bosqichi — bepul natijada ham sabablar ko‘rsatiladimi? (Tekshirilmagan.)
7. “Maxfiylik va rozilik” — hozir botda rozilik oqimi bormi? Yo‘q bo‘lsa, so‘zni yumshatish kerak.
8. “Qadam kurs sotadimi?” javobi brief tamoyiliga asoslangan — biznes tasdig‘i kerak.

### Bot PR #2
9. Review va merge qarori. O‘zgarish orqaga mos (oddiy `/start` avvalgidek ishlaydi), 89/89 test o‘tgan.

## 3. O‘z taklifimga tanqid (self-critique)

Halol baho — PM shu nuqtalarni alohida tekshirsin:

1. **Clay Text va Warning bir-biriga juda yaqin.** `#8F4F33` vs `#8A5A00`: o‘zaro kontrast 1.06:1, ton farqi ~20°. Eyebrow va ogohlantirish matni bir xil “jigarrang” bo‘lib ko‘rinishi mumkin. Variantlar: (a) eyebrow’ni Qadam Blue qilish; (b) Warning’ni sariqroq/oxra tomonga surish; (c) qoidani saqlash — warning doim ikon + fon bilan. **Tavsiyam: (a) yoki (b).**
2. **“Krem fon + terakota” klishe xavfi.** Paper `#F7F5F0` + Clay — hozirgi “AI-generated” dizaynlarda ko‘p uchraydigan juftlik. Bizda Midnight va Blue ustun, serif shrift yo‘q, shuning uchun xavf o‘rtacha. Muqobil: sovuqroq off-white (`#F6F7F9` atrofida).
3. **Qadam Blue umumiy “tech blue”ga yaqin.** O‘ziga xoslik ko‘k rangning o‘zidan emas, Midnight + Clay + bitta Spark birikmasidan keladi. Agar ko‘k yolg‘iz ishlatilsa, brend generik ko‘rinadi.
4. **Hero’da ko‘k juda ko‘p.** Ikkinchi qator to‘liq ko‘k — rejadagi “Blue 10%” ulushidan ko‘proq. Muqobil: ikkala qator Midnight, faqat kalit so‘z ko‘k.
5. **Spark ma’nosi aniq emas.** Midnight ustidagi apelsin nuqta “bildirishnoma” yoki “xato” deb o‘qilishi mumkin. Foydalanuvchi testi kerak.
6. **Faqat ekranda baholangan.** O‘zbekistonda keng tarqalgan arzon Android ekranlarda to‘yingan ko‘k va Mist tuslari farqi yo‘qolishi mumkin. Real qurilmada tekshirish kerak.
7. **Mini App hali eski indigo `#6366F1`da.** Tasdiqdan keyin ikki mahsulot vizual jihatdan bir-biridan farq qilib turadi, toki Mini App migratsiyasi alohida qilinmaguncha.
8. **Sayt uchun dark mode yo‘q.** Hozircha talab qilinmagan, faqat qayd.

## 4. Tavsiya (qaror PM’niki)

- Rang tizimini **1, 3 va 4-tanqid nuqtalari tuzatilgan holda** qabul qilish: eyebrow → Blue yoki Warning → oxra; hero’da ko‘kni kamaytirish.
- B2.1 branch’ini tuzatishlardan keyin asosiy branchga merge qilish.
- Shundan keyin B3 Career Catalog.

## 5. Havolalar

- Rang taklifi (vizual xarita bilan): https://claude.ai/artifact/YW1ciDW8YGRt8byeKi6nZh
- B2.1 branch: `claude/b2.1-brand-palette`
- Bot PR: https://github.com/birojizummat1797/qadam-loyiha-deepseek/pull/2
- Trend manbasi: https://www.wgsn.com/en/wgsn/press/press-releases/wgsn-and-coloro-reveal-colour-year-2027-luminous-blue-and-s-s-27-key
