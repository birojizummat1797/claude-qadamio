# Chuqur tahlil v2 — 19 savol qoralamasi (2026-10-05, 2-versiya)

Holat: **QORALAMA**. Founder: tuzilma 19 savol (A qism 11 ta); Dasturlash namunasi ma’qul; har katalogning **o‘z savollari** bo‘lishi shart. Kodga hali o‘tkazilmagan.
Asos: `docs/decisions/2026-10-05-catalog-9x25.md`, qisqa test `docs/specs/2026-10-05-discovery-v2-draft.md`.

## Qoidalar (Founder talablari)
- Har savolda **jami 5 variant**: 4 javob + **"Bilmayman / bu yerda menga mosi yo‘q"**.
- **Har savol boshqacha so‘raladi**; har katalogning savollari o‘ziga xos (bir katalog boshqasining qolipi emas).
- Har katalogda **ijtimoiy tarmoq / blog** haqida savol bor (Founder misoli).
- Javoblar samimiy, sodda, qisqa, o‘ta tushunarli; kasb nomi va jargon yo‘q.
- Kasb nomi foydalanuvchiga ko‘rsatilmaydi (har javob yonida faqat ko‘rib chiquvchilar uchun yozilgan).
- Ilovada javoblar tartibi har foydalanuvchiga **aralashtirib** ko‘rsatiladi (birinchi javobni bosish odati natijani buzmasligi uchun).

## 1. Tuzilma (19)

| Qism | Soni | Vazifa | Kimga |
|---|---|---|---|
| A. Katalog ichida kasb | **11** | Har javob — katalogdagi bitta kasb | Qisqa testdagi 1-katalog bo‘yicha. Ikki katalog teng bo‘lsa — 1-katalogdan 6 ta, 2-sidan 5 ta |
| B. Ish uslubi | 5 | Odamlar bilan / yakka, tartib / ijod… | Hammaga bir xil |
| C. Tayyorlik | 3 | Muddat, mablag‘, o‘qish davomiyligi | Hammaga bir xil |

## 2. Hisob (taklif)
- A qism: tanlangan javob kasbiga +1. 2–3 kasbli kataloglarda bir kasb bir savolda 2 marta uchraydi — shuning uchun ball **kasbning javoblar soniga nisbatan** hisoblanadi (adolatli bo‘lishi uchun).
- **Aniq kasb:** 1-kasb kamida 4 tanlov va 2-kasbdan ustun. Teng — ikkalasi ko‘rsatiladi. Kam — halol xabar.
- Chegaralar — Founder tasdig‘i uchun taklif.

## 3. Muvozanat tekshiruvi
Har katalogda 11 savol × 4 javob; har kasb deyarli teng uchraydi (farq ≤ 1). 9 katalog × 11 = **99 savol, 396 javob**.

## 4. A qism — kataloglar bo‘yicha savollar

### 4.1. Dasturlash (Frontend · Backend · Mobil · QA / test)

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

**11. Ijtimoiy tarmoqlarda qanday sahifa va bloglarni ko‘proq kuzatasiz?**
- A) Chiroyli sayt va ekran namunalarini ko‘rsatadigan sahifalar — *Frontend*
- B) Katta kompaniyalar tizimi ichidan qanday ishlashi haqidagi bloglar — *Backend*
- C) Yangi telefon va ilovalar sharhlari — *Mobil*
- D) "Bu ilovada qanday xato topildi" kabi qiziq hikoyalar — *QA / test*
- E) Bilmayman / bu yerda menga mosi yo‘q

### 4.2. Ma’lumotlar va sun’iy intellekt (Data analitik · AI va Data Science · Ma’lumotlar bazasi)

**1. Qaysi savolga javob topish sizni ko‘proq qiziqtiradi?**
- A) "Nega bu oy savdo tushib ketdi?" — *Data analitik*
- B) "Kompyuter rasmga qarab, unda nima borligini qanday biladi?" — *AI va Data Science*
- C) "Millionlab ma’lumot ichidan keraklisi qanday qilib bir soniyada topiladi?" — *Ma’lumotlar bazasi*
- D) "Qaysi mahsulot qaysi shaharda ko‘proq sotiladi?" — *Data analitik*
- E) Bilmayman / bu yerda menga mosi yo‘q

**2. ChatGPT kabi sun’iy intellekt haqida o‘ylasangiz, sizni nima ko‘proq qiziqtiradi?**
- A) U qanday o‘rganadi va qanday "o‘ylaydi" — *AI va Data Science*
- B) Unga o‘xshash yordamchini o‘zim yaratish — *AI va Data Science*
- C) Uning yordamida raqamlardan tez xulosa chiqarish — *Data analitik*
- D) U javob olayotgan ma’lumotlar qayerda va qanday saqlanadi — *Ma’lumotlar bazasi*
- E) Bilmayman / bu yerda menga mosi yo‘q

**3. Rahbaringiz qaysi topshiriqni bersa, xursand bo‘lardingiz?**
- A) Oylik hisobotni grafiklar bilan tushunarli qilib tayyorlash — *Data analitik*
- B) Mijoz keyin nima sotib olishini oldindan aytadigan dastur yaratish — *AI va Data Science*
- C) Tartibsiz yotgan ma’lumotlarni bitta tartibli bazaga yig‘ish — *Ma’lumotlar bazasi*
- D) Ma’lumotlar yo‘qolib qolmasligi uchun zaxira tizimini tuzish — *Ma’lumotlar bazasi*
- E) Bilmayman / bu yerda menga mosi yo‘q

**4. Qaysi xato sizni ko‘proq bezovta qiladi?**
- A) Noto‘g‘ri hisoblangan raqam tufayli noto‘g‘ri qaror qabul qilinishi — *Data analitik*
- B) Sun’iy intellektning ishonch bilan noto‘g‘ri javob berishi — *AI va Data Science*
- C) Bir mijoz bazada ikki marta, har xil ma’lumot bilan yozilib qolishi — *Ma’lumotlar bazasi*
- D) Grafik chizilgan, lekin uni hech kim tushunmaydi — *Data analitik*
- E) Bilmayman / bu yerda menga mosi yo‘q

**5. Maktabdagi qaysi mavzu sizga eng yaqin edi?**
- A) Statistika va foizlar — *Data analitik*
- B) Murakkab matematika masalalari — *AI va Data Science*
- C) Informatikada jadval va ro‘yxatlar bilan ishlash — *Ma’lumotlar bazasi*
- D) Fizikada qonuniyatlarni tajriba orqali topish — *AI va Data Science*
- E) Bilmayman / bu yerda menga mosi yo‘q

**6. Qaysi ish uslubi sizga yoqadi?**
- A) Savolni olib, javobini raqamlardan izlab topish — *Data analitik*
- B) Uzoq tajriba qilib, natijani asta-sekin yaxshilash — *AI va Data Science*
- C) Tizimni bir marta to‘g‘ri qurib, uning muammosiz ishlashini kuzatish — *Ma’lumotlar bazasi*
- D) Topganimni boshqalarga sodda qilib tushuntirish — *Data analitik*
- E) Bilmayman / bu yerda menga mosi yo‘q

**7. Ijtimoiy tarmoqlarda qanday sahifalarni kuzatishni yoqtirasiz?**
- A) Rasm va grafiklar bilan tushuntirilgan qiziq raqamlar — *Data analitik*
- B) Sun’iy intellekt yangiliklari va tajribalari — *AI va Data Science*
- C) Texnologiya ichidan qanday ishlashini ko‘rsatadigan bloglar — *Ma’lumotlar bazasi*
- D) Robotlar va aqlli qurilmalar haqidagi videolar — *AI va Data Science*
- E) Bilmayman / bu yerda menga mosi yo‘q

**8. Sizni qaysi so‘z ko‘proq tasvirlaydi?**
- A) Sinchkov — raqamlar orasidagi xatoni darrov ko‘raman — *Data analitik*
- B) Ixtirochi — yangi narsani sinashni yaxshi ko‘raman — *AI va Data Science*
- C) Tartibli — har narsaning o‘z joyi bo‘lishi kerak — *Ma’lumotlar bazasi*
- D) Ishonchli — men saqlagan narsa hech qachon yo‘qolmaydi — *Ma’lumotlar bazasi*
- E) Bilmayman / bu yerda menga mosi yo‘q

**9. Kichik do‘konga yordam berishingiz kerak. Qaysi birini tanlaysiz?**
- A) Qaysi kun va soatda xaridor ko‘pligini aniqlash — *Data analitik*
- B) Qaysi mahsulot qachon tugashini oldindan aytadigan tizim qilish — *AI va Data Science*
- C) Barcha mahsulot va xaridlarni bitta bazaga kiritib, tartibga solish — *Ma’lumotlar bazasi*
- D) Kassadagi ma’lumotlar hech qachon yo‘qolmasligini ta’minlash — *Ma’lumotlar bazasi*
- E) Bilmayman / bu yerda menga mosi yo‘q

**10. Qaysi yutuq sizni ko‘proq quvontirardi?**
- A) Hisobotingiz tufayli kompaniya ko‘p pul tejadi — *Data analitik*
- B) Siz o‘rgatgan dastur shifokorga kasallikni erta topishga yordam berdi — *AI va Data Science*
- C) Bazangiz 10 yil davomida bir marta ham ishdan chiqmadi — *Ma’lumotlar bazasi*
- D) Dasturingiz ovozni matnga xatosiz aylantiradi — *AI va Data Science*
- E) Bilmayman / bu yerda menga mosi yo‘q

**11. Qaysi birida ko‘proq vaqt o‘tkaza olasiz?**
- A) Jadvaldagi raqamlarni har tomondan aylantirib ko‘rishda — *Data analitik*
- B) Murakkab formulani tushunib olishda — *AI va Data Science*
- C) Minglab qatorli ro‘yxatni tozalab, tartibga keltirishda — *Ma’lumotlar bazasi*
- D) Grafikni eng tushunarli ko‘rinishga keltirishda — *Data analitik*
- E) Bilmayman / bu yerda menga mosi yo‘q

### 4.3. Tizimlar, tarmoq va xavfsizlik (Tizim va tarmoq ma’muri · DevOps / Cloud · Kiberxavfsizlik)

**1. Qaysi vaziyatda o‘zingizni "qahramon"dek his qilardingiz?**
- A) Butun ofisda internet o‘chganda, uni tez tiklab berish — *Tizim va tarmoq ma’muri*
- B) Saytga minglab odam kirganda ham uning qotmasdan ishlashini ta’minlash — *DevOps / Cloud*
- C) Xakerning hiylasini vaqtida payqab, hujumni to‘xtatish — *Kiberxavfsizlik*
- D) Firibgarlik xabarini aniqlab, hammani ogohlantirish — *Kiberxavfsizlik*
- E) Bilmayman / bu yerda menga mosi yo‘q

**2. Qaysi videoni oxirigacha qiziqib ko‘rardingiz?**
- A) Katta ofis tarmog‘i qanday qurilgani haqida — *Tizim va tarmoq ma’muri*
- B) YouTube yoki Telegram millionlab odamga qanday qilib bir vaqtda chidashi haqida — *DevOps / Cloud*
- C) Mashhur xakerlik hujumlari qanday ochilgani haqida — *Kiberxavfsizlik*
- D) Katta kompaniyaning kompyuterlar xonasi ichidan ko‘rsatilgan video — *Tizim va tarmoq ma’muri*
- E) Bilmayman / bu yerda menga mosi yo‘q

**3. Qaysi topshiriqni o‘zingizga olardingiz?**
- A) Yangi ofisdagi 30 ta kompyuter va printerni ulab, sozlash — *Tizim va tarmoq ma’muri*
- B) Dasturni bir tugma bilan avtomatik ishga tushadigan qilish — *DevOps / Cloud*
- C) Kompaniya parollari qanchalik kuchli ekanini tekshirish — *Kiberxavfsizlik*
- D) Kompaniya dasturlarini internetdagi ishonchli xizmatga ko‘chirish — *DevOps / Cloud*
- E) Bilmayman / bu yerda menga mosi yo‘q

**4. Qaysi xavotir sizga ko‘proq tanish?**
- A) "Wi-Fi nega sekin? Qayerda uzilish bor?" — *Tizim va tarmoq ma’muri*
- B) "Yangi versiya chiqqanda hammasi buzilib ketmasmikan?" — *DevOps / Cloud*
- C) "Bu havola yoki fayl xavfsizmi?" — *Kiberxavfsizlik*
- D) "Ma’lumotlarim kimning qo‘liga tushishi mumkin?" — *Kiberxavfsizlik*
- E) Bilmayman / bu yerda menga mosi yo‘q

**5. Do‘stlaringiz sizdan qanday yordam so‘rashadi?**
- A) Router yoki kompyuterni sozlab berishni — *Tizim va tarmoq ma’muri*
- B) Takroriy ishni o‘zi bajariladigan qilib berishni — *DevOps / Cloud*
- C) Buzib olingan akkauntini tiklab berishni — *Kiberxavfsizlik*
- D) Yangi kompyuterga kerakli hamma narsani o‘rnatib berishni — *Tizim va tarmoq ma’muri*
- E) Bilmayman / bu yerda menga mosi yo‘q

**6. Qaysi ish tartibi sizga mos?**
- A) Har kuni tizimni tekshirib, kichik muammolarni o‘z vaqtida tuzatish — *Tizim va tarmoq ma’muri*
- B) Qo‘lda qilinadigan ishni kod bilan avtomatlashtirish — *DevOps / Cloud*
- C) Doim hushyor bo‘lib, shubhali narsani izlash — *Kiberxavfsizlik*
- D) Tizimni ko‘p odamga chidaydigan qilib kengaytirish — *DevOps / Cloud*
- E) Bilmayman / bu yerda menga mosi yo‘q

**7. Ijtimoiy tarmoqda qanday sahifalarni kuzatasiz?**
- A) Kompyuter va internet bo‘yicha foydali maslahatlar — *Tizim va tarmoq ma’muri*
- B) Katta IT kompaniyalar texnologiyasi haqidagi bloglar — *DevOps / Cloud*
- C) Firibgarlik va xavfsizlik bo‘yicha ogohlantirishlar — *Kiberxavfsizlik*
- D) Xakerlar va kiberjinoyatlar haqidagi hikoyalar — *Kiberxavfsizlik*
- E) Bilmayman / bu yerda menga mosi yo‘q

**8. Qaysi ta’rif sizga ko‘proq mos?**
- A) Ishonchli — "nima bo‘lsa ham tuzatib beradi" — *Tizim va tarmoq ma’muri*
- B) Tejamkor — "bir ishni ikki marta qo‘lda qilmaydi" — *DevOps / Cloud*
- C) Hushyor — "hech narsa ko‘zidan qochmaydi" — *Kiberxavfsizlik*
- D) Amaliy — "qo‘li bilan ishlashni yaxshi ko‘radi" — *Tizim va tarmoq ma’muri*
- E) Bilmayman / bu yerda menga mosi yo‘q

**9. Qaysi natija sizni ko‘proq quvontirardi?**
- A) Bir yil davomida ofisda internet bir marta ham uzilmadi — *Tizim va tarmoq ma’muri*
- B) Yangilanish mijozlar sezmasdan, bir daqiqada chiqdi — *DevOps / Cloud*
- C) Kompaniyaga bir marta ham buzib kirilmadi — *Kiberxavfsizlik*
- D) Tizimni ishlatish xarajati ikki baravar kamaydi — *DevOps / Cloud*
- E) Bilmayman / bu yerda menga mosi yo‘q

**10. Qaysi birini o‘rganish sizga qiziqroq?**
- A) Internet bir kompyuterdan boshqasiga qanday yetib boradi — *Tizim va tarmoq ma’muri*
- B) Bitta dastur qanday qilib minglab kompyuterda bir vaqtda ishlaydi — *DevOps / Cloud*
- C) Xakerlar qanday o‘ylaydi va ulardan qanday himoyalaniladi — *Kiberxavfsizlik*
- D) Kompyuter ichidagi qismlar qanday ishlaydi — *Tizim va tarmoq ma’muri*
- E) Bilmayman / bu yerda menga mosi yo‘q

**11. Tunda telefoningizga xabar keldi: "Tizimda muammo". Birinchi o‘yingiz?**
- A) Qaysi qurilma yoki kabel ishdan chiqdi — tekshirish kerak — *Tizim va tarmoq ma’muri*
- B) Avtomatik tiklanish nega ishlamadi — tuzatish kerak — *DevOps / Cloud*
- C) Bu tasodifmi yoki kimdir ataylab qildimi? — *Kiberxavfsizlik*
- D) Qaysi ma’lumotlar xavf ostida qoldi? — *Kiberxavfsizlik*
- E) Bilmayman / bu yerda menga mosi yo‘q

### 4.4. Raqamli dizayn (UI/UX dizayner · Grafik dizayner)

**1. Instagram yoki Pinterest’da nimani ko‘proq saqlab qo‘yasiz?**
- A) Qulay va chiroyli ilova ekranlari namunalarini — *UI/UX dizayner*
- B) Ilova qanday soddalashtirilgani haqidagi "oldin-keyin" postlarni — *UI/UX dizayner*
- C) Logotip va brend dizaynlarini — *Grafik dizayner*
- D) Plakat, afisha va rasmlarni — *Grafik dizayner*
- E) Bilmayman / bu yerda menga mosi yo‘q

**2. Biror ilova jahlingizni chiqarsa, odatda nima haqida o‘ylaysiz?**
- A) "Bu tugmani nega bu yerga qo‘yishgan? Qulayroq qilsa bo‘lardi" — *UI/UX dizayner*
- B) "Oddiy ishni qilish uchun nega shuncha qadam kerak?" — *UI/UX dizayner*
- C) "Ranglari va shriftlari juda xunuk ekan" — *Grafik dizayner*
- D) "Rasmlari umuman chiroyli emas" — *Grafik dizayner*
- E) Bilmayman / bu yerda menga mosi yo‘q

**3. Qaysi buyurtmani olardingiz?**
- A) Onlayn do‘konni xaridor oson to‘lov qiladigan qilib qayta o‘ylab chiqish — *UI/UX dizayner*
- B) Keksalar ham bemalol ishlata oladigan bank ilovasini loyihalash — *UI/UX dizayner*
- C) Yangi choyxona uchun logotip, menyu va peshlavha — *Grafik dizayner*
- D) Kitob muqovasi uchun rasm — *Grafik dizayner*
- E) Bilmayman / bu yerda menga mosi yo‘q

**4. Bolaligingizda qaysi birini ko‘proq qilardingiz?**
- A) Narsalarni qulayroq bo‘lishi uchun xonamni qayta joylashtirish — *UI/UX dizayner*
- B) O‘yin qoidalarini do‘stlarimga tushunarliroq qilib tuzib berish — *UI/UX dizayner*
- C) Daftar chetiga rasm chizish — *Grafik dizayner*
- D) Tabriknoma va bezaklarni o‘zim yasash — *Grafik dizayner*
- E) Bilmayman / bu yerda menga mosi yo‘q

**5. Qaysi maqtov sizga yoqardi?**
- A) "Ilovangizni birinchi marta ochdim va hech kimdan so‘ramay tushundim" — *UI/UX dizayner*
- B) "Siz tufayli xaridlar soni oshdi" — *UI/UX dizayner*
- C) "Logotipingizni ko‘chada darrov tanidim" — *Grafik dizayner*
- D) "Bu rasmni devorimga ilib qo‘ygim keldi" — *Grafik dizayner*
- E) Bilmayman / bu yerda menga mosi yo‘q

**6. Ishning qaysi bosqichi sizga ko‘proq yoqadi?**
- A) Odamlar bilan suhbatlashib, ularga nima qiyinligini bilish — *UI/UX dizayner*
- B) Ekranlarni avval oddiy chizib, mantiqini tuzish — *UI/UX dizayner*
- C) Rang va shrift tanlash — *Grafik dizayner*
- D) Tayyor rasmni mukammal darajaga yetkazish — *Grafik dizayner*
- E) Bilmayman / bu yerda menga mosi yo‘q

**7. Sizni ko‘proq nima tasvirlaydi?**
- A) Kuzatuvchi — odamlar qayerda qiynalishini ko‘raman — *UI/UX dizayner*
- B) Muammo yechuvchi — avval qulay bo‘lsin, keyin chiroyli — *UI/UX dizayner*
- C) Didli — chiroylilik men uchun juda muhim — *Grafik dizayner*
- D) Rassom — fikrimni rasm bilan ifodalayman — *Grafik dizayner*
- E) Bilmayman / bu yerda menga mosi yo‘q

**8. Qaysi natija sizni ko‘proq sevintirardi?**
- A) Odamlar ilovada kamroq adashadigan bo‘ldi — *UI/UX dizayner*
- B) Mijozlardan shikoyatlar kamaydi — *UI/UX dizayner*
- C) Dizayningiz ko‘cha reklamasida turibdi — *Grafik dizayner*
- D) Siz yaratgan brendni hamma taniydi — *Grafik dizayner*
- E) Bilmayman / bu yerda menga mosi yo‘q

**9. Qaysi dasturni o‘rganishni xohlardingiz?**
- A) Ilova ekranlarini loyihalash dasturi (masalan, Figma) — *UI/UX dizayner*
- B) Odamlar saytda qayerni bosayotganini ko‘rsatadigan dastur — *UI/UX dizayner*
- C) Rasm chizish va tahrirlash dasturi (masalan, Photoshop) — *Grafik dizayner*
- D) Logotip chizish dasturi (masalan, Illustrator) — *Grafik dizayner*
- E) Bilmayman / bu yerda menga mosi yo‘q

**10. Kichik biznes egasi yordam so‘radi. Nimani taklif qilasiz?**
- A) Saytini mijozlar oson buyurtma beradigan qilish — *UI/UX dizayner*
- B) Mijozlardan nima yoqmasligini so‘rab, o‘zgarishlar taklif qilish — *UI/UX dizayner*
- C) Yangi chiroyli logotip va rang uslubi — *Grafik dizayner*
- D) Ijtimoiy tarmoq uchun bir xil uslubdagi post shablonlari — *Grafik dizayner*
- E) Bilmayman / bu yerda menga mosi yo‘q

**11. Qaysi birida sabringiz ko‘proq yetadi?**
- A) Bitta ekranni odamlarda 5 marta sinab, qayta-qayta tuzatishda — *UI/UX dizayner*
- B) Murakkab jarayonni oddiy qadamlarga bo‘lishda — *UI/UX dizayner*
- C) Bitta logotipning 20 xil variantini chizishda — *Grafik dizayner*
- D) Rasmdagi har bir mayda detalni to‘g‘rilashda — *Grafik dizayner*
- E) Bilmayman / bu yerda menga mosi yo‘q

### 4.5. Raqamli marketing (SMM menejer · Target marketolog · SEO mutaxassisi)

**1. Ijtimoiy tarmoqda qanday sahifalar sizni ko‘proq o‘ziga tortadi?**
- A) Obunachilari bilan jonli muloqot qiladigan brendlar sahifalari — *SMM menejer*
- B) Reklama qanday qilib sotuv olib kelishini ko‘rsatadigan bloglar — *Target marketolog*
- C) Google’da qanday qilib birinchi chiqish haqidagi maslahatlar — *SEO mutaxassisi*
- D) Ommalashib ketgan videolar va trendlar haqidagi sahifalar — *SMM menejer*
- E) Bilmayman / bu yerda menga mosi yo‘q

**2. Telefonda reklama ko‘rganingizda birinchi nima haqida o‘ylaysiz?**
- A) "Bu post nega bunchalik ko‘p layk yig‘di?" — *SMM menejer*
- B) "Bu reklama nega aynan menga chiqdi?" — *Target marketolog*
- C) "Bu sayt qidiruvda qanday qilib birinchi chiqdi?" — *SEO mutaxassisi*
- D) "Bu reklamaga qancha pul sarflashdi va qancha topishdi?" — *Target marketolog*
- E) Bilmayman / bu yerda menga mosi yo‘q

**3. Qaysi topshiriqni olardingiz?**
- A) Do‘konning Instagram sahifasini bir oy yuritish — *SMM menejer*
- B) Reklama uchun ajratilgan pulni eng foydali sarflash — *Target marketolog*
- C) Do‘kon saytini Google’da yuqoriga chiqarish — *SEO mutaxassisi*
- D) Odamlar internetda nimani ko‘p qidirayotganini aniqlash — *SEO mutaxassisi*
- E) Bilmayman / bu yerda menga mosi yo‘q

**4. Qaysi ish sizga ko‘proq zavq beradi?**
- A) Kulgili yoki foydali post g‘oyasini topish — *SMM menejer*
- B) Ikki xil reklamani solishtirib, qaysi biri yaxshi ishlashini aniqlash — *Target marketolog*
- C) Saytdagi matnlarni odamlar qidiradigan so‘zlar bilan yozish — *SEO mutaxassisi*
- D) Izohlarga javob berib, obunachilar bilan gaplashish — *SMM menejer*
- E) Bilmayman / bu yerda menga mosi yo‘q

**5. Qaysi ta’rif sizni yaxshi tasvirlaydi?**
- A) Ijodkor va xushmuomala — *SMM menejer*
- B) Hisob-kitobli — har so‘mning natijasini bilgim keladi — *Target marketolog*
- C) Sabrli — natijani oylar davomida kutishga tayyorman — *SEO mutaxassisi*
- D) Tajribachi — avval sinab ko‘raman, keyin xulosa qilaman — *Target marketolog*
- E) Bilmayman / bu yerda menga mosi yo‘q

**6. Qaysi natija sizni ko‘proq quvontirardi?**
- A) Postingiz minglab odamga tarqaldi — *SMM menejer*
- B) Reklamaga sarflangan har 1 so‘m 3 so‘m olib keldi — *Target marketolog*
- C) Sayt Google’da birinchi o‘ringa chiqdi — *SEO mutaxassisi*
- D) Sahifa obunachilari ikki baravar ko‘paydi — *SMM menejer*
- E) Bilmayman / bu yerda menga mosi yo‘q

**7. Qaysi holat sizni ko‘proq bezovta qiladi?**
- A) Sahifa zerikarli, hech kim izoh yozmayapti — *SMM menejer*
- B) Reklamaga pul ketyapti, lekin xaridor yo‘q — *Target marketolog*
- C) Yaxshi sayt qidiruvda umuman topilmayapti — *SEO mutaxassisi*
- D) Sayt sekin ochiladi va sahifalari chalkash — *SEO mutaxassisi*
- E) Bilmayman / bu yerda menga mosi yo‘q

**8. Maktabda qaysi ish sizga yoqardi?**
- A) Devoriy gazeta yoki tadbir e’lonini tayyorlash — *SMM menejer*
- B) Masalaning eng foydali yechimini topish — *Target marketolog*
- C) Insho yozib, eng to‘g‘ri so‘zlarni tanlash — *SEO mutaxassisi*
- D) So‘rovnoma o‘tkazib, natijalarni sanash — *Target marketolog*
- E) Bilmayman / bu yerda menga mosi yo‘q

**9. Do‘stingiz kichik biznes ochdi. Nimani taklif qilasiz?**
- A) Ijtimoiy tarmoqda chiroyli sahifa ochib, muntazam post qilish — *SMM menejer*
- B) Kichik pul bilan aynan kerakli odamlarga reklama berish — *Target marketolog*
- C) Uni Google xaritasi va qidiruvida topiladigan qilish — *SEO mutaxassisi*
- D) Odamlar uni qaysi so‘zlar bilan qidirishini aniqlash — *SEO mutaxassisi*
- E) Bilmayman / bu yerda menga mosi yo‘q

**10. Qaysi birini o‘rganish sizga qiziqroq?**
- A) Video va postlar qanday qilib trendga chiqadi — *SMM menejer*
- B) Reklama tizimi odamlarni qanday tanlaydi — *Target marketolog*
- C) Google saytlarni qaysi tartibda ko‘rsatadi — *SEO mutaxassisi*
- D) Brend o‘z mijozlari bilan qanday do‘stlashadi — *SMM menejer*
- E) Bilmayman / bu yerda menga mosi yo‘q

**11. Kuningiz qanday o‘tishini xohlardingiz?**
- A) Post rejalashtirib, obunachilar bilan muloqot qilib — *SMM menejer*
- B) Reklama natijalarini kuzatib, raqamlarga qarab sozlab — *Target marketolog*
- C) Sayt ustida tinch, bosqichma-bosqich ishlab — *SEO mutaxassisi*
- D) Yangi reklama g‘oyalarini sinab ko‘rib — *Target marketolog*
- E) Bilmayman / bu yerda menga mosi yo‘q

### 4.6. Kontent va media (Video va motion · Kontent va kopirayting)

**1. YouTube yoki Instagram’da nimani ko‘proq tomosha qilasiz?**
- A) Chiroyli montaj qilingan qisqa videolarni — *Video va motion*
- B) Animatsiya va effektlar qanday qilinishini ko‘rsatadigan videolarni — *Video va motion*
- C) Qiziqarli hikoya aytib beradigan blogerlarni — *Kontent va kopirayting*
- D) Foydali va aniq yozilgan postlarni — *Kontent va kopirayting*
- E) Bilmayman / bu yerda menga mosi yo‘q

**2. Bolaligingizda nimani yoqtirardingiz?**
- A) Telefonda video olib, o‘zimcha kino qilish — *Video va motion*
- B) Multfilm qahramonlarini chizib, ularni "jonlantirish" — *Video va motion*
- C) Hikoya, she’r yoki kundalik yozish — *Kontent va kopirayting*
- D) Eshitgan voqeamni do‘stlarimga qiziqarli qilib aytib berish — *Kontent va kopirayting*
- E) Bilmayman / bu yerda menga mosi yo‘q

**3. Qaysi topshiriqni olardingiz?**
- A) To‘y yoki tadbir videosini montaj qilish — *Video va motion*
- B) Kompaniya logotipini harakatlanadigan qilib jonlantirish — *Video va motion*
- C) Mahsulot uchun ishontiradigan reklama matni yozish — *Kontent va kopirayting*
- D) Video uchun ssenariy yozish — *Kontent va kopirayting*
- E) Bilmayman / bu yerda menga mosi yo‘q

**4. Sizni nima ko‘proq ilhomlantiradi?**
- A) Chiroyli kadr va yorug‘lik — *Video va motion*
- B) Musiqaga mos tushgan tez montaj — *Video va motion*
- C) Bitta jumla bilan odamni kuldirish yoki o‘ylantirish — *Kontent va kopirayting*
- D) Murakkab narsani sodda so‘z bilan tushuntirish — *Kontent va kopirayting*
- E) Bilmayman / bu yerda menga mosi yo‘q

**5. Qaysi maqtov sizga yoqardi?**
- A) "Videongizni to‘xtatmasdan oxirigacha ko‘rdim" — *Video va motion*
- B) "Animatsiyangiz juda jonli chiqibdi" — *Video va motion*
- C) "Matningizni o‘qib, darhol sotib oldim" — *Kontent va kopirayting*
- D) "Postingizni do‘stlarimga yubordim" — *Kontent va kopirayting*
- E) Bilmayman / bu yerda menga mosi yo‘q

**6. Qaysi ishda soatlab o‘tira olasiz?**
- A) Videoni kadrma-kadr tahrirlashda — *Video va motion*
- B) Effektlarni mukammal holatga keltirishda — *Video va motion*
- C) Matnni qayta-qayta o‘qib, eng yaxshi so‘zni topishda — *Kontent va kopirayting*
- D) Ko‘p ma’lumot o‘qib, undan qisqa post yozishda — *Kontent va kopirayting*
- E) Bilmayman / bu yerda menga mosi yo‘q

**7. Qaysi narsa sizni bezovta qiladi?**
- A) Ovozi yomon yoki titrab olingan video — *Video va motion*
- B) Musiqaga tushmagan montaj — *Video va motion*
- C) Imlo xatolari ko‘p matn — *Kontent va kopirayting*
- D) Uzun va zerikarli yozilgan post — *Kontent va kopirayting*
- E) Bilmayman / bu yerda menga mosi yo‘q

**8. Qaysi sohani o‘rganishni xohlardingiz?**
- A) Kamera, yorug‘lik va montaj — *Video va motion*
- B) Animatsiya va vizual effektlar — *Video va motion*
- C) Ishontiruvchi matn yozish — *Kontent va kopirayting*
- D) Ssenariy va hikoya qurish — *Kontent va kopirayting*
- E) Bilmayman / bu yerda menga mosi yo‘q

**9. Kichik biznesga qanday yordam bera olasiz?**
- A) Mahsulot haqida qisqa reklama videosi olib berish — *Video va motion*
- B) Mahsulotni animatsiya bilan tushuntiradigan video qilish — *Video va motion*
- C) Sayti va sahifasi uchun yaxshi matnlar yozish — *Kontent va kopirayting*
- D) Xaridorlarga yuboriladigan xabarlarni qiziqarli qilish — *Kontent va kopirayting*
- E) Bilmayman / bu yerda menga mosi yo‘q

**10. Qaysi natija sizni quvontirardi?**
- A) Videongiz million ko‘rish yig‘di — *Video va motion*
- B) Animatsiyangiz katta reklamada ishlatildi — *Video va motion*
- C) Sarlavhangiz tufayli maqolani ko‘p odam o‘qidi — *Kontent va kopirayting*
- D) Matningiz tufayli sotuv oshdi — *Kontent va kopirayting*
- E) Bilmayman / bu yerda menga mosi yo‘q

**11. Qaysi ta’rif sizga mos?**
- A) Ko‘ruvchi — dunyoni kadrlar bilan ko‘raman — *Video va motion*
- B) Harakatchan — ritm va harakatni his qilaman — *Video va motion*
- C) So‘zamol — so‘z bilan ishlashni yaxshi ko‘raman — *Kontent va kopirayting*
- D) Hikoyachi — har narsadan qiziq voqea topaman — *Kontent va kopirayting*
- E) Bilmayman / bu yerda menga mosi yo‘q

### 4.7. Mahsulot va loyiha boshqaruvi (Product menejer · Loyiha menejeri · Biznes-analitik)

**1. Jamoaviy ishda qaysi rol sizga yaqin?**
- A) "Nimani va nima uchun qilyapmiz?" degan savolga javob beruvchi — *Product menejer*
- B) Muddat va vazifalarni nazorat qiluvchi — *Loyiha menejeri*
- C) Jarayonni chuqur o‘rganib, muammoni topuvchi — *Biznes-analitik*
- D) Hammani birlashtirib, kelishmovchiliklarni hal qiluvchi — *Loyiha menejeri*
- E) Bilmayman / bu yerda menga mosi yo‘q

**2. Ijtimoiy tarmoqda qanday sahifalarni kuzatasiz?**
- A) Mashhur ilovalar qanday paydo bo‘lgani haqidagi hikoyalar — *Product menejer*
- B) Vaqtni boshqarish va reja tuzish bo‘yicha maslahatlar — *Loyiha menejeri*
- C) Kompaniyalar muammoni qanday hal qilgani haqidagi tahlillar — *Biznes-analitik*
- D) Startaplar va yangi g‘oyalar haqidagi bloglar — *Product menejer*
- E) Bilmayman / bu yerda menga mosi yo‘q

**3. Katta tadbir tashkil qilinyapti. Siz nimani olasiz?**
- A) Mehmonlarga nima yoqishini o‘ylab, dasturni tuzish — *Product menejer*
- B) Kim nima qilishini taqsimlab, hammasi vaqtida bo‘lishini kuzatish — *Loyiha menejeri*
- C) Xarajatlarni tahlil qilib, qayerda tejash mumkinligini topish — *Biznes-analitik*
- D) Oldingi tadbirlardagi xatolarni o‘rganib, takrorlanmasligini ta’minlash — *Biznes-analitik*
- E) Bilmayman / bu yerda menga mosi yo‘q

**4. Qaysi savol sizni ko‘proq qiziqtiradi?**
- A) "Odamlar bu ilovani nega ishlatadi yoki tashlab ketadi?" — *Product menejer*
- B) "Loyiha nega kechikyapti va uni qanday tezlashtirsa bo‘ladi?" — *Loyiha menejeri*
- C) "Bu ishda qayerda vaqt va pul behuda ketyapti?" — *Biznes-analitik*
- D) "Kelgusi yili odamlarga qanday yangi narsa kerak bo‘ladi?" — *Product menejer*
- E) Bilmayman / bu yerda menga mosi yo‘q

**5. Qaysi ta’rif sizni tasvirlaydi?**
- A) G‘oyachi — yangi narsa o‘ylab topaman — *Product menejer*
- B) Tashkilotchi — rejasiz ishlamayman — *Loyiha menejeri*
- C) Tahlilchi — har narsaning sababini bilishim kerak — *Biznes-analitik*
- D) Yetakchi — odamlarni bir maqsadga yo‘naltiraman — *Loyiha menejeri*
- E) Bilmayman / bu yerda menga mosi yo‘q

**6. Qaysi natija sizni ko‘proq quvontirardi?**
- A) Siz o‘ylab topgan imkoniyatni minglab odam ishlatyapti — *Product menejer*
- B) Katta loyiha muddatidan oldin, rejadagi pul bilan tugadi — *Loyiha menejeri*
- C) Taklifingiz tufayli kompaniya ishi ancha tezlashdi — *Biznes-analitik*
- D) Siz topgan muammo tufayli katta yo‘qotishning oldi olindi — *Biznes-analitik*
- E) Bilmayman / bu yerda menga mosi yo‘q

**7. Maktabda qaysi ish sizga ko‘proq yoqardi?**
- A) Yangi to‘garak yoki tadbir g‘oyasini taklif qilish — *Product menejer*
- B) Sinf sardori bo‘lib, ishlarni tashkil qilish — *Loyiha menejeri*
- C) Muammo bo‘yicha referat yozib, sabab va yechim topish — *Biznes-analitik*
- D) Sinfdoshlardan nima yoqishini so‘rab, o‘zgarish taklif qilish — *Product menejer*
- E) Bilmayman / bu yerda menga mosi yo‘q

**8. Qaysi narsa sizni ko‘proq bezovta qiladi?**
- A) Hech kimga kerak bo‘lmagan narsaga vaqt sarflash — *Product menejer*
- B) Muddatlarning buzilishi va tartibsizlik — *Loyiha menejeri*
- C) Sababini tekshirmasdan qaror qabul qilish — *Biznes-analitik*
- D) Kim nima qilishini bilmaydigan jamoa — *Loyiha menejeri*
- E) Bilmayman / bu yerda menga mosi yo‘q

**9. Qaysi topshiriqni olardingiz?**
- A) Yangi ilovada qaysi imkoniyat birinchi kerakligini hal qilish — *Product menejer*
- B) 10 kishilik jamoa uchun 3 oylik ish rejasini tuzish — *Loyiha menejeri*
- C) Do‘konda xaridor nega navbatda kutib qolayotganini o‘rganish — *Biznes-analitik*
- D) Rahbar uchun "nimani o‘zgartirish kerak" degan xulosa yozish — *Biznes-analitik*
- E) Bilmayman / bu yerda menga mosi yo‘q

**10. Qaysi birini o‘rganishni xohlardingiz?**
- A) Mijoz aslida nimani xohlashini qanday bilish — *Product menejer*
- B) Katta loyihani qanday rejalashtirish va boshqarish — *Loyiha menejeri*
- C) Ish jarayonlarini chizib, tahlil qilish — *Biznes-analitik*
- D) Yangi mahsulotni bozorga qanday chiqarish — *Product menejer*
- E) Bilmayman / bu yerda menga mosi yo‘q

**11. Kuningiz qanday o‘tishini xohlardingiz?**
- A) Mijozlar bilan gaplashib, keyin jamoa bilan yangi g‘oyani muhokama qilib — *Product menejer*
- B) Yig‘ilishlar, rejalar va nazorat bilan — *Loyiha menejeri*
- C) Ma’lumot va hujjatlarni o‘rganib, xulosa yozib — *Biznes-analitik*
- D) Muammolarni tez hal qilib, hammani harakatga keltirib — *Loyiha menejeri*
- E) Bilmayman / bu yerda menga mosi yo‘q

### 4.8. Sotuv va mijozlar bilan ishlash (Sotuv menejeri · Customer Success)

**1. Qaysi vaziyatda o‘zingizni yaxshi his qilasiz?**
- A) Notanish odam bilan gaplashib, uni biror narsaga ko‘ndirganda — *Sotuv menejeri*
- B) Raqobatda g‘olib chiqqanda — *Sotuv menejeri*
- C) Xafa odamni tinchlantirib, unga yordam berganda — *Customer Success*
- D) Birov mendan qayta-qayta maslahat so‘raganda — *Customer Success*
- E) Bilmayman / bu yerda menga mosi yo‘q

**2. Ijtimoiy tarmoqda qanday sahifalarni kuzatasiz?**
- A) Muvaffaqiyatli sotuvchilar va tadbirkorlar bloglarini — *Sotuv menejeri*
- B) Muzokara va ishontirish sirlari haqidagi videolarni — *Sotuv menejeri*
- C) Mijozga yaxshi xizmat ko‘rsatish haqidagi hikoyalarni — *Customer Success*
- D) Odamlarni tushunish va psixologiya haqidagi sahifalarni — *Customer Success*
- E) Bilmayman / bu yerda menga mosi yo‘q

**3. Bolaligingizda qaysi biri sizga xos edi?**
- A) Narsalarni almashtirishda doim yutardim — *Sotuv menejeri*
- B) Do‘stlarimni o‘z rejamga osongina ko‘ndirardim — *Sotuv menejeri*
- C) Janjallashgan do‘stlarimni yarashtirardim — *Customer Success*
- D) Yangi kelgan bolaga hamma narsani tushuntirib berardim — *Customer Success*
- E) Bilmayman / bu yerda menga mosi yo‘q

**4. Qaysi topshiriqni olardingiz?**
- A) Bir haftada 20 ta yangi mijoz topish — *Sotuv menejeri*
- B) Katta kompaniya bilan shartnoma bo‘yicha muzokara qilish — *Sotuv menejeri*
- C) Norozi mijozlarning muammosini hal qilish — *Customer Success*
- D) Yangi mijozlarga mahsulotni ishlatishni o‘rgatish — *Customer Success*
- E) Bilmayman / bu yerda menga mosi yo‘q

**5. Qaysi natija sizni ko‘proq quvontirardi?**
- A) Oyning eng ko‘p sotgan xodimi bo‘ldingiz — *Sotuv menejeri*
- B) Katta shartnoma imzolandi — *Sotuv menejeri*
- C) Ketmoqchi bo‘lgan mijoz qolib, rahmat aytdi — *Customer Success*
- D) Mijozlar sizni ismingiz bilan so‘rab kelishyapti — *Customer Success*
- E) Bilmayman / bu yerda menga mosi yo‘q

**6. Qaysi so‘z sizni tasvirlaydi?**
- A) Ishontiruvchi — *Sotuv menejeri*
- B) G‘alabaga intiluvchi — *Sotuv menejeri*
- C) G‘amxo‘r — *Customer Success*
- D) Sabrli — *Customer Success*
- E) Bilmayman / bu yerda menga mosi yo‘q

**7. "Yo‘q" degan javob eshitsangiz, nima qilasiz?**
- A) Boshqa yo‘l bilan yana urinib ko‘raman — *Sotuv menejeri*
- B) Darhol keyingi odamga o‘taman — *Sotuv menejeri*
- C) Nega rad etganini tushunishga harakat qilaman — *Customer Success*
- D) Baribir unga foydali maslahat berib qolaman — *Customer Success*
- E) Bilmayman / bu yerda menga mosi yo‘q

**8. Qaysi narsa sizni ko‘proq charchatadi?**
- A) Kun bo‘yi bir joyda, odamlarsiz o‘tirish — *Sotuv menejeri*
- B) Natijasi va mukofoti noaniq ish — *Sotuv menejeri*
- C) Odamlarga qo‘pol muomala qilinishi — *Customer Success*
- D) Mijozning muammosini hal qilmasdan qoldirish — *Customer Success*
- E) Bilmayman / bu yerda menga mosi yo‘q

**9. Qaysi birini o‘rganishni xohlardingiz?**
- A) Qanday qilib ko‘proq va tezroq sotish — *Sotuv menejeri*
- B) Muzokarada qanday yutish — *Sotuv menejeri*
- C) Norozi odam bilan qanday gaplashish — *Customer Success*
- D) Mijozni yillar davomida qanday saqlab qolish — *Customer Success*
- E) Bilmayman / bu yerda menga mosi yo‘q

**10. Kichik biznesga qanday yordam berasiz?**
- A) Yangi xaridorlarni topib, ularga sotish — *Sotuv menejeri*
- B) Ulgurji xaridorlar bilan kelishuv qilish — *Sotuv menejeri*
- C) Mijozlar shikoyatini tinglab, xizmatni yaxshilash — *Customer Success*
- D) Doimiy mijozlar uchun g‘amxo‘rlik tizimini tuzish — *Customer Success*
- E) Bilmayman / bu yerda menga mosi yo‘q

**11. Kuningiz qanday o‘tishini xohlardingiz?**
- A) Qo‘ng‘iroqlar, uchrashuvlar va kelishuvlar bilan — *Sotuv menejeri*
- B) Har kuni yangi maqsad qo‘yib, uni bajarish bilan — *Sotuv menejeri*
- C) Mijozlar savollariga javob berib, ularga yordam berib — *Customer Success*
- D) Mijozlar nima istashini o‘rganib, jamoaga yetkazib — *Customer Success*
- E) Bilmayman / bu yerda menga mosi yo‘q

### 4.9. Moliya va raqamli ofis (Buxgalter · Fintech · Excel / Sheets)

**1. Pul bilan bog‘liq qaysi narsa sizni ko‘proq qiziqtiradi?**
- A) Kompaniyada har bir so‘m qayerga ketganini aniq bilish — *Buxgalter*
- B) Telefon orqali to‘lov qanday qilib bir soniyada o‘tishi — *Fintech*
- C) Raqamlarni o‘zi hisoblaydigan jadval tuzish — *Excel / Sheets*
- D) Soliqlarni to‘g‘ri hisoblash — *Buxgalter*
- E) Bilmayman / bu yerda menga mosi yo‘q

**2. Ijtimoiy tarmoqda qanday sahifalarni kuzatasiz?**
- A) Buxgalteriya va soliq yangiliklari — *Buxgalter*
- B) Bank ilovalari, kartalar va onlayn to‘lovlar yangiliklari — *Fintech*
- C) Excel va Google Sheets bo‘yicha foydali usullar — *Excel / Sheets*
- D) Raqamli pul va investitsiya haqidagi bloglar — *Fintech*
- E) Bilmayman / bu yerda menga mosi yo‘q

**3. Qaysi topshiriqni olardingiz?**
- A) Kompaniyaning oylik hisobotini xatosiz tayyorlash — *Buxgalter*
- B) Bank ilovasiga yangi to‘lov usulini qo‘shishda yordam berish — *Fintech*
- C) Qo‘lda bir kun ketadigan hisobni 1 daqiqaga tushiradigan jadval qilish — *Excel / Sheets*
- D) Tartibsiz ro‘yxatlarni bitta tushunarli jadvalga yig‘ish — *Excel / Sheets*
- E) Bilmayman / bu yerda menga mosi yo‘q

**4. Qaysi ta’rif sizni tasvirlaydi?**
- A) Aniq — bir tiyin ham xato bo‘lmasin — *Buxgalter*
- B) Zamonaviy — pulning kelajagi meni qiziqtiradi — *Fintech*
- C) Tejamkor — vaqtni behuda sarflamayman — *Excel / Sheets*
- D) Mas’uliyatli — menga ishonib topshirishadi — *Buxgalter*
- E) Bilmayman / bu yerda menga mosi yo‘q

**5. Qaysi natija sizni ko‘proq quvontirardi?**
- A) Tekshiruv kompaniya hujjatlarida birorta ham xato topmadi — *Buxgalter*
- B) Siz ishlagan ilova orqali millionlab to‘lov o‘tyapti — *Fintech*
- C) Siz yasagan jadvaldan butun ofis foydalanyapti — *Excel / Sheets*
- D) Odamlar endi bankka bormasdan hamma ishni telefonda qilyapti — *Fintech*
- E) Bilmayman / bu yerda menga mosi yo‘q

**6. Maktabda qaysi mashg‘ulot sizga yoqardi?**
- A) Aniq hisob-kitobli matematika masalalari — *Buxgalter*
- B) Iqtisod va pul haqidagi mavzular — *Fintech*
- C) Informatikada jadval bilan ishlash — *Excel / Sheets*
- D) Ma’lumotlarni tartiblab, ro‘yxat tuzish — *Excel / Sheets*
- E) Bilmayman / bu yerda menga mosi yo‘q

**7. Qaysi narsa sizni ko‘proq bezovta qiladi?**
- A) Hujjatlar tartibsiz, cheklar yo‘qolgan — *Buxgalter*
- B) Pul o‘tkazish uchun navbatda turish va qog‘ozbozlik — *Fintech*
- C) Bir xil hisobni har kuni qo‘lda qayta qilish — *Excel / Sheets*
- D) Hisobdagi xato tufayli jarima to‘lash — *Buxgalter*
- E) Bilmayman / bu yerda menga mosi yo‘q

**8. Do‘stingizning kichik biznesiga qanday yordam berasiz?**
- A) Kirim-chiqim va soliqlarini tartibga solib berish — *Buxgalter*
- B) Karta va onlayn to‘lov qabul qilishni yo‘lga qo‘yish — *Fintech*
- C) Ombor va savdoni hisoblaydigan qulay jadval qilib berish — *Excel / Sheets*
- D) Telefon orqali savdo qilishni o‘rgatish — *Fintech*
- E) Bilmayman / bu yerda menga mosi yo‘q

**9. Qaysi birini o‘rganishni xohlardingiz?**
- A) Buxgalteriya hisobi va soliq qoidalari — *Buxgalter*
- B) Banklar va to‘lov tizimlari qanday ishlaydi — *Fintech*
- C) Excel’da murakkab formulalar va avtomatlashtirish — *Excel / Sheets*
- D) Jadvaldan o‘zi chiqadigan hisobot va grafiklar — *Excel / Sheets*
- E) Bilmayman / bu yerda menga mosi yo‘q

**10. Qaysi ishda soatlab o‘tira olasiz?**
- A) Hujjatlarni tekshirib, raqamlar mos kelishini ta’minlashda — *Buxgalter*
- B) Yangi to‘lov ilovalarini sinab, solishtirishda — *Fintech*
- C) Jadvalni mukammal ishlaydigan qilib sozlashda — *Excel / Sheets*
- D) Har bir xarajat hujjatini to‘g‘ri rasmiylashtirishda — *Buxgalter*
- E) Bilmayman / bu yerda menga mosi yo‘q

**11. Kuningiz qanday o‘tishini xohlardingiz?**
- A) Tinch ofisda, hujjatlar va hisob bilan — *Buxgalter*
- B) Zamonaviy kompaniyada, yangi moliyaviy xizmatlar ustida — *Fintech*
- C) Boshqa bo‘limlarning hisob-kitobini osonlashtirib — *Excel / Sheets*
- D) Raqamli pul va kelajak texnologiyalari bilan — *Fintech*
- E) Bilmayman / bu yerda menga mosi yo‘q

## 5. B qism — ish uslubi (5 savol, hammaga)

**12. Qanday muhitda o‘zingizni yaxshi his qilasiz?**
- A) Doim odamlar bilan muloqotda
- B) Tinch joyda, o‘zim yolg‘iz
- C) Jamoada, lekin o‘z vazifam bilan
- D) Har kuni yangi joy, yangi vaziyat
- E) Bilmayman / bu yerda menga mosi yo‘q

**13. Ishda siz uchun eng muhimi nima?**
- A) Aniq tartib va qoidalar
- B) Ijod qilish erkinligi
- C) Natijani tez ko‘rish
- D) Odamlarga foyda keltirish
- E) Bilmayman / bu yerda menga mosi yo‘q

**14. Muammo chiqsa, odatda nima qilasiz?**
- A) Darhol kimgadir maslahat solaman
- B) O‘zim o‘tirib, oxirigacha o‘ylayman
- C) Shunga o‘xshash yechimni qidiraman
- D) Har xil yo‘lni sinab ko‘raman
- E) Bilmayman / bu yerda menga mosi yo‘q

**15. Qaysi kun sizga ko‘proq yoqadi?**
- A) Rejadagi ishlar birma-bir bajarilgan kun
- B) Kutilmagan, qiziq vazifalar ko‘p bo‘lgan kun
- C) Ko‘p odam bilan uchrashgan kun
- D) Bitta katta ishga to‘liq sho‘ng‘igan kun
- E) Bilmayman / bu yerda menga mosi yo‘q

**16. Ishingiz natijasini kim ko‘rishini xohlaysiz?**
- A) Minglab oddiy odamlar
- B) Kompaniya rahbarlari
- C) Ko‘pchilik bilmasa ham, hamma narsa men tufayli ishlaydi
- D) Mijozlar — yuzma-yuz
- E) Bilmayman / bu yerda menga mosi yo‘q

## 6. C qism — tayyorlik (3 savol, hammaga)

**17. Birinchi ishga qachongacha kirishingiz kerak?**
- A) 3 oy ichida
- B) 6 oy ichida
- C) 1 yil ichida
- D) Shoshilmayman
- E) Bilmayman / bu yerda menga mosi yo‘q

**18. O‘qishga qanday imkoniyatingiz bor?**
- A) Faqat bepul manbalar
- B) Oz miqdorda pul sarflay olaman
- C) Pullik kursga bora olaman
- D) Mablag‘ muammo emas
- E) Bilmayman / bu yerda menga mosi yo‘q

**19. Yangi kasbni o‘rganishga qancha vaqt ajrata olasiz?**
- A) 3 oygacha
- B) 6 oygacha
- C) 1 yilgacha
- D) 1 yildan ko‘proq ham bo‘laveradi
- E) Bilmayman / bu yerda menga mosi yo‘q


## 7. Simulyatsiya (A qism, model)
Virtual odamlarda (6 000 ta) katalog ichida to‘g‘ri kasb: 4 kasbli katalogda 96–100%, 2–3 kasbli katalogda 98–100%.
**Halol izoh:** bu raqam juda yuqori, chunki model faqat tuzilmani tekshiradi. Haqiqiy natijani **javob matnlari sifati** belgilaydi — buni faqat real sinov ko‘rsatadi.

## 8. Keyingi qadamlar
1. Founder: matnlarni o‘qib chiqish (har katalog alohida).
2. Eski chuqur tahlil savollari — Founder yakuniy ko‘rib chiqishdan keyin hal qiladi.
3. Real sinov: qisqa test + chuqur tahlil birga, 5–10 kishida.
4. Keyin kod: savollar banki, katalog/kasb hisobi, natija sahifasi, 51 chegarasining qayta kalibrlanishi.
