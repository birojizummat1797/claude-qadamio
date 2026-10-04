# Chuqur tahlil v2 — 18 savol qoralamasi (2026-10-05, 1-versiya)

Holat: **QORALAMA** — tuzilma + bitta katalog (Dasturlash) uchun to‘liq namuna. Founder ma’qullasa, qolgan 8 katalog shu namunadek yoziladi.
Asos: `docs/decisions/2026-10-05-catalog-9x25.md`, qisqa test `docs/specs/2026-10-05-discovery-v2-draft.md`.

## Qoidalar (qisqa testdagi Founder talablari)
- Har savolda **jami 5 variant**: 4 javob + **"Bilmayman / bu yerda menga mosi yo‘q"**.
- **Har savol boshqacha so‘raladi**, bir xil shablon yo‘q.
- Javoblar samimiy, sodda, qisqa, o‘ta tushunarli; kasb nomi va jargon yo‘q.
- Kasb nomi foydalanuvchiga ko‘rsatilmaydi (pastda faqat ko‘rib chiquvchilar uchun).

## 1. Vazifa
Qisqa test **katalogni** topadi. Chuqur tahlil — **katalog ichida aniq kasbni** va **tayyorlikni**.

## 2. Tuzilma (18)

| Qism | Soni | Vazifa | Kimga |
|---|---|---|---|
| A. Katalog ichida kasb | 10 | Har javob — katalogdagi bitta kasb | Qisqa testdagi 1-katalog bo‘yicha. Ikki katalog teng chiqqan bo‘lsa — har biridan 5 tadan |
| B. Ish uslubi | 5 | Odamlar bilan / yakka, tartib / ijod, tez natija / chuqur ish | Hammaga bir xil |
| C. Tayyorlik | 3 | Muddat, mablag‘, o‘qish davomiyligi | Hammaga bir xil |

- Katalogda 2–3 kasb bo‘lsa, A qismda bir kasb bir savolda ikki xil javob bilan chiqishi mumkin (4 javob saqlanadi).
- B qism — kasb tanlovida qo‘shimcha (teng holatda hal qiluvchi) va natija matni uchun. Kasblarga ish uslubi teglari O*NET manbasi asosida beriladi (o‘ylab topilmaydi) — alohida ish.
- C qism — kasbni emas, yo‘l xaritasi va tayyorlik holatini belgilaydi.

## 3. Hisob (taklif)
- A qism: tanlangan javob kasbiga **+1** (0–10).
- **Aniq kasb:** 1-kasb ≥ 4 va 2-kasbdan ≥ 1 ustun. Teng bo‘lsa — ikkalasi ko‘rsatiladi. 4 dan kam — halol xabar.
- Chegaralar — Founder tasdig‘i uchun taklif.

## 4. Namuna: Dasturlash katalogi (A qism, 10 savol)

**1. Sayt yoki ilovaning qaysi qismi sizni ko‘proq qiziqtiradi?**
- A) Odam ko‘radigan qismi: tugmalar, sahifalar, harakatlar — *Frontend*
- B) Ko‘rinmaydigan qismi: ma’lumot qayerda saqlanadi va qanday ishlanadi — *Backend*
- C) Telefondagi ilova: cho‘ntakda yuradigan, barmoq bilan bosiladigan — *Mobil*
- D) Hammasi to‘g‘ri ishlayaptimi — xatolarni qidirish — *QA / test*
- E) Bilmayman / bu yerda menga mosi yo‘q

**2. Ish kuningiz qaysi biri bilan o‘tsa, xursand bo‘lardingiz?**
- A) Sahifani chiroyli va qulay ko‘rinishga keltirish — *Frontend*
- B) Minglab buyurtma bir vaqtda kelganda tizim qotib qolmasligini ta’minlash — *Backend*
- C) Telefon ilovasiga yangi imkoniyat qo‘shish — *Mobil*
- D) Ilovani har xil usulda sinab, yashirin xatoni topish — *QA / test*
- E) Bilmayman / bu yerda menga mosi yo‘q

**3. Qaysi maqtov sizni ko‘proq quvontirardi?**
- A) "Saytingiz juda chiroyli va qulay ekan" — *Frontend*
- B) "Tizimingiz hech qachon to‘xtamaydi" — *Backend*
- C) "Ilovangizni telefonimga o‘rnatdim, har kuni ishlataman" — *Mobil*
- D) "Siz tufayli mijozlar birorta ham xatoga duch kelmadi" — *QA / test*
- E) Bilmayman / bu yerda menga mosi yo‘q

**4. Qaysi kamchilik sizni ko‘proq bezovta qiladi?**
- A) Tugmalar tartibsiz, matnni o‘qib bo‘lmaydi — *Frontend*
- B) Sayt sekin ishlaydi, ma’lumotlar yo‘qolib qoladi — *Backend*
- C) Ilova telefonda qotib qoladi yoki zaryadni tez tugatadi — *Mobil*
- D) Hech kim tekshirmagani uchun xato mijozga yetib boradi — *QA / test*
- E) Bilmayman / bu yerda menga mosi yo‘q

**5. Qaysi vazifani o‘z zimmangizga olardingiz?**
- A) Do‘kon saytining bosh sahifasini yasash — *Frontend*
- B) To‘lov va buyurtmalarni saqlaydigan tizimni qurish — *Backend*
- C) Taksi chaqirish ilovasini yasash — *Mobil*
- D) Yangi ilovani chiqishidan oldin boshdan-oyoq tekshirish — *QA / test*
- E) Bilmayman / bu yerda menga mosi yo‘q

**6. Qanday ishlash sizga yaqinroq?**
- A) O‘zgartirdim — natija darhol ko‘zim oldida — *Frontend*
- B) Murakkab mantiq ustida uzoq va chuqur o‘ylash — *Backend*
- C) Qilganimni telefonda qo‘lda ushlab sinab ko‘rish — *Mobil*
- D) Ro‘yxat bo‘yicha qadamma-qadam, sinchkovlik bilan tekshirish — *QA / test*
- E) Bilmayman / bu yerda menga mosi yo‘q

**7. Qaysi birini o‘rganish sizga qiziqroq?**
- A) Ranglar, shriftlar va sahifa joylashuvi qanday ishlaydi — *Frontend*
- B) Ma’lumotlar qanday saqlanadi va qanday tez topiladi — *Backend*
- C) Android va iPhone ilovalari qanday yasaladi — *Mobil*
- D) Dasturda xato qanday paydo bo‘ladi va qanday topiladi — *QA / test*
- E) Bilmayman / bu yerda menga mosi yo‘q

**8. Do‘stingiz ilova yaratmoqchi. Siz qaysi qismini olardingiz?**
- A) Ekranlari va ko‘rinishini — *Frontend*
- B) Ichki mantiqi va ma’lumotlarini — *Backend*
- C) Telefonga moslashtirishni — *Mobil*
- D) Ishga tushirishdan oldin tekshirishni — *QA / test*
- E) Bilmayman / bu yerda menga mosi yo‘q

**9. Qaysi yangilik sizni ko‘proq sevintirardi?**
- A) Odamlar saytda adashmay, oson yo‘l topyapti — *Frontend*
- B) Tizim bir kunda million odamni ko‘tara oldi — *Backend*
- C) Ilovangiz Play Market’da yuqori baho oldi — *Mobil*
- D) Siz topgan xato katta zararning oldini oldi — *QA / test*
- E) Bilmayman / bu yerda menga mosi yo‘q

**10. Qaysi birida sabringiz ko‘proq yetadi?**
- A) Bitta tugmani mukammal bo‘lguncha qayta-qayta o‘zgartirishda — *Frontend*
- B) Murakkab muammoning ildizini topguncha izlashda — *Backend*
- C) Ilovani har xil telefonda bir xil ishlaydigan qilishda — *Mobil*
- D) Bir amalni ko‘p marta takrorlab, xato qidirishda — *QA / test*
- E) Bilmayman / bu yerda menga mosi yo‘q

## 5. B qism — ish uslubi (5 savol, hammaga)

**11. Qanday muhitda o‘zingizni yaxshi his qilasiz?**
- A) Doim odamlar bilan muloqotda
- B) Tinch joyda, o‘zim yolg‘iz
- C) Jamoada, lekin o‘z vazifam bilan
- D) Har kuni yangi joy, yangi vaziyat
- E) Bilmayman / bu yerda menga mosi yo‘q

**12. Ishda siz uchun eng muhimi nima?**
- A) Aniq tartib va qoidalar
- B) Ijod qilish erkinligi
- C) Natijani tez ko‘rish
- D) Odamlarga foyda keltirish
- E) Bilmayman / bu yerda menga mosi yo‘q

**13. Muammo chiqsa, odatda nima qilasiz?**
- A) Darhol kimgadir maslahat solaman
- B) O‘zim o‘tirib, oxirigacha o‘ylayman
- C) Shunga o‘xshash yechimni qidiraman
- D) Har xil yo‘lni sinab ko‘raman
- E) Bilmayman / bu yerda menga mosi yo‘q

**14. Qaysi kun sizga ko‘proq yoqadi?**
- A) Rejadagi ishlar birma-bir bajarilgan kun
- B) Kutilmagan, qiziq vazifalar ko‘p bo‘lgan kun
- C) Ko‘p odam bilan uchrashgan kun
- D) Bitta katta ishga to‘liq sho‘ng‘igan kun
- E) Bilmayman / bu yerda menga mosi yo‘q

**15. Ishingiz natijasini kim ko‘rishini xohlaysiz?**
- A) Minglab oddiy odamlar
- B) Kompaniya rahbarlari
- C) Ko‘pchilik bilmasa ham, hamma narsa men tufayli ishlaydi
- D) Mijozlar — yuzma-yuz
- E) Bilmayman / bu yerda menga mosi yo‘q

## 6. C qism — tayyorlik (3 savol, hammaga)

**16. Birinchi ishga qachongacha kirishingiz kerak?**
- A) 3 oy ichida
- B) 6 oy ichida
- C) 1 yil ichida
- D) Shoshilmayman
- E) Bilmayman / bu yerda menga mosi yo‘q

**17. O‘qishga qanday imkoniyatingiz bor?**
- A) Faqat bepul manbalar
- B) Oz miqdorda pul sarflay olaman
- C) Pullik kursga bora olaman
- D) Mablag‘ muammo emas
- E) Bilmayman / bu yerda menga mosi yo‘q

**18. Yangi kasbni o‘rganishga qancha vaqt ajrata olasiz?**
- A) 3 oygacha
- B) 6 oygacha
- C) 1 yilgacha
- D) 1 yildan ko‘proq ham bo‘laveradi
- E) Bilmayman / bu yerda menga mosi yo‘q

## 7. Simulyatsiya (A qism, model)
Har savolda katalogdagi hamma kasb bevosita taqqoslanadi, 10 marta. Virtual odamlarda (6 000 ta) katalog ichida to‘g‘ri kasb: 4 kasbli katalogda **96–100%**, 2–3 kasbli katalogda **98–100%**.
**Halol izoh:** bu raqam juda yuqori, chunki model faqat tuzilmani tekshiradi. Haqiqiy chegarani **javob matnlarining sifati** belgilaydi (odam javobni to‘g‘ri tushunadimi, javoblar teng darajada jozibalimi). Buni faqat real sinov ko‘rsatadi.

## 8. Ochiq savollar (Founder)
1. Tuzilma (10 + 5 + 3) ma’qulmi?
2. Dasturlash namunasi ma’qulmi? Ma’qul bo‘lsa — qolgan 8 katalog shu uslubda.
3. Hozirgi chuqur tahlildagi qaysi savollar (agar bo‘lsa) saqlanib qolishi kerak?
