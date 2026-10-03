/**
 * Homepage copy (uz).
 *
 * Status: editorial DRAFT — to be reviewed by the Qadam team before launch.
 * Rules: no invented numbers, no "100% / eng aniq / ilmiy isbotlangan" claims,
 * Qadam helps and explains; it does not decide.
 */

import type {
  ComparisonRow,
  FaqItem,
  JourneyStep,
  ProblemItem,
  ProcessStep,
  SectionCopy,
  SocialProofData,
  TrustItem,
} from "./types";

export const hero = {
  eyebrow: "Kasbiy yo’nalish bo’yicha qaror tizimi",
  titleLine1: "Kasb tanlashda taxmin emas.",
  titleLine2: "O’zingizga mos yo’lni tushunishdan boshlang.",
  lead: "Qadam.io sizga o’zingizni yaxshiroq tushunish, mos professional yo’nalishlarni ko’rish va keyingi qadamlarni aniqroq belgilashga yordam beradi.",
  secondaryLabel: "Qanday ishlaydi?",
  secondaryHref: "/qanday-ishlaydi",
  // Facts confirmed by the current bot (/start text): free, runs in Telegram.
  ctaNote: "Bepul · Telegram’da ochiladi",
} as const;

export const journey = {
  label: "Qadam yo’li",
  steps: [
    { question: "Men kimman?", caption: "Qiziqishlar, fikrlash uslubi va qadriyatlar" },
    { question: "Menga nima mos?", caption: "Mos bo’lishi mumkin bo’lgan yo’nalishlar" },
    { question: "Nega?", caption: "Har bir moslikning sabablari" },
    { question: "Hozir qanchalik tayyorman?", caption: "Bilim, vaqt va sharoitingiz" },
    { question: "Qanday yetib boraman?", caption: "Bosqichma-bosqich yo’l" },
    { question: "Keyingi qadam", caption: "Bugun nimadan boshlash" },
  ] satisfies JourneyStep[],
} as const;

export const problems = {
  section: {
    id: "savollar",
    eyebrow: "Tanish savollar",
    title: "Muhim qaror oldida savollar ko’p bo’lishi tabiiy",
    intro: "Ko’pchilik shu savollar bilan yolg’iz qoladi. Qadam ularga birgalikda, tartib bilan javob izlashga yordam beradi.",
  } satisfies SectionCopy,
  items: [
    {
      question: "IT’ga o’tsammi?",
      answer: "IT bitta kasb emas. Qaysi yo’nalishi sizning qiziqish va sharoitingizga yaqinroq ekanini ko’rish mumkin.",
    },
    {
      question: "Qaysi kasb menga mos?",
      answer: "Bitta “to’g’ri javob” o’rniga — bir nechta mos variant va har birining sababi.",
    },
    {
      question: "Qaysi kursga pul sarflashim kerak?",
      answer: "Avval yo’nalishni tushunish, keyin qanday ta’lim kerakligini hal qilish — pulni tejaydigan tartib.",
    },
    {
      question: "Universitetni tugatdim. Endi nima?",
      answer: "Diplomingizdagi bilim va ko’nikmalar qaysi yo’llarda foydali bo’lishi mumkinligini ko’rib chiqamiz.",
    },
    {
      question: "Ishim bor, lekin bu yo’lda qolishni istaymanmi?",
      answer: "O’zgarish shoshilinch qaror emas. Hozirgi tajribangizni hisobga olgan holda variantlarni solishtirish mumkin.",
    },
    {
      question: "Ko’p yo’nalish bor. Qaysisidan boshlashni bilmayman.",
      answer: "Variantlarni toraytirish va birinchi aniq qadamni belgilash — shundan boshlanadi.",
    },
  ] satisfies ProblemItem[],
} as const;

export const howItWorks = {
  section: {
    id: "qanday-ishlaydi",
    eyebrow: "Qanday ishlaydi",
    title: "Olti bosqich: o’zingizni tushunishdan harakatgacha",
    intro: "Qadam qarorni siz uchun qabul qilmaydi. U qaror uchun kerakli dalillarni tartibga soladi va tushuntiradi.",
  } satisfies SectionCopy,
  steps: [
    {
      title: "Muhim signallarni aniqlaysiz",
      body: "Qiziqishlaringiz, fikrlash uslubingiz, maqsad va sharoitingiz haqidagi savollarga javob berasiz.",
    },
    {
      title: "Javoblar tizimlashtiriladi",
      body: "Javoblar signallarga aylantiriladi. Ma’lumot yetishmasa, u “nol” deb hisoblanmaydi — alohida belgilanadi.",
    },
    {
      title: "Mos yo’nalishlarni ko’rasiz",
      body: "Signallaringiz professional yo’nalishlar talablari bilan taqqoslanadi va mos bo’lishi mumkin bo’lganlari ko’rsatiladi.",
    },
    {
      title: "Sababini tushunasiz",
      body: "Har bir yo’nalish nega taklif qilinganini — qaysi signallaringiz unga mos kelishini ko’rasiz.",
    },
    {
      title: "Tayyorgarligingizni ko’rasiz",
      body: "Moslik va tayyorgarlik — alohida narsalar. Bilim, vaqt va sharoitingiz qanday cheklovlar yoki imkoniyatlar berishi hisobga olinadi.",
    },
    {
      title: "Harakatni boshlaysiz",
      body: "Tanlangan yo’nalish uchun bosqichma-bosqich yo’l va birinchi amaliy qadam.",
    },
  ] satisfies ProcessStep[],
  // Matches the bot's current product split (bot PREMIUM_INTRO_TEXT): readiness
  // and the personal roadmap are part of the paid deep analysis. No prices (D4).
  note: "Bepul diagnostika boshlang’ich natijani beradi. Tayyorgarlik tahlili va shaxsiy yo’l xaritasi chuqur tahlil qismida.",
  moreLabel: "Batafsil",
  moreHref: "/qanday-ishlaydi",
} as const;

export const comparison = {
  section: {
    id: "nega-qadam",
    eyebrow: "Nega Qadam",
    title: "Maqsad — kasb nomini topish emas",
    intro: "Kasb nomi — boshlanish nuqtasi xolos. Qadam qarorning butun zanjiriga qaraydi.",
  } satisfies SectionCopy,
  chain: [
    "O’zingizni tushunish",
    "Variantlarni baholash",
    "Sababini tushunish",
    "Tayyorgarlikni ko’rish",
    "Keyingi qadamni belgilash",
  ],
  columns: { common: "Odatiy yondashuv", qadam: "Qadam yondashuvi" },
  rows: [
    {
      common: "Qiziq ko’ringan kasbni tanlash",
      qadam: "Qiziqish, ko’nikma, maqsad va cheklovlarni birga ko’rib, yo’llarni solishtirish",
    },
    {
      common: "Bitta tayyor javob",
      qadam: "Bir nechta mos variant va har birining sababi",
    },
    {
      common: "Avval kurs tanlash",
      qadam: "Avval yo’nalishni tushunish, keyin qanday ta’lim kerakligini hal qilish",
    },
    {
      common: "Natija — kasb nomi",
      qadam: "Natija — sabab, tayyorgarlik darajasi va keyingi amaliy qadam",
    },
  ] satisfies ComparisonRow[],
} as const;

export const trust = {
  section: {
    id: "tamoyillar",
    eyebrow: "Tamoyillar",
    title: "Qadam sizga tayyor javob bermaydi. Qaror uchun yaxshiroq asos beradi.",
    intro: "Kasbiy qaror — jiddiy qaror. Shuning uchun Qadam quyidagi tamoyillar asosida qurilmoqda.",
  } satisfies SectionCopy,
  items: [
    {
      icon: "method",
      title: "Shaffof metodologiya",
      body: "Natija qanday shakllanganini tushuntiramiz. “Qora quti” emas.",
    },
    {
      icon: "evidence",
      title: "Dalilga asoslangan",
      body: "Tavsiya sizning javoblaringiz va mavjud ma’lumotlarga tayanadi, taxminga emas.",
    },
    {
      icon: "precision",
      title: "Soxta aniqlik yo’q",
      body: "Ma’lumot yetarli bo’lmasa, buni ochiq aytamiz. “100% mos” degan va’dalar bermaymiz.",
    },
    {
      icon: "privacy",
      title: "Maxfiylik va rozilik",
      body: "Javoblaringiz tahlil uchun ishlatiladi va ruxsatingizsiz uchinchi tomonlarga berilmaydi.",
    },
    {
      icon: "independence",
      title: "Mustaqil tavsiyalar",
      body: "Yo’nalishlar reklama yoki ta’lim markazlarining komissiyasi evaziga tartiblanmaydi.",
    },
    {
      icon: "review",
      title: "Rivojlanib boruvchi tizim",
      body: "Kasb tavsiflari va metodika jamoa tomonidan ko’rib chiqiladi va yangilanadi.",
    },
  ] satisfies TrustItem[],
} as const;

export const socialProof = {
  section: {
    id: "natijalar",
    eyebrow: "Natijalar va fikrlar",
    title: "Raqamlarni o’ylab topmaymiz",
  } satisfies SectionCopy,
  emptyState:
    "Hozircha bu yerda foydalanuvchi fikrlari, raqamlar yoki hamkorlar yo’q. Birinchi tasdiqlangan natijalar to’planganda — manbasi va sanasi bilan — shu yerda e’lon qilamiz.",
  labels: {
    testimonials: "Foydalanuvchi fikrlari",
    stats: "Raqamlar",
    partners: "Hamkorlar",
    source: "Manba",
  },
  // Only verified, consented entries. Empty on purpose — do not fill with demo data.
  data: {
    testimonials: [],
    stats: [],
    partners: [],
  } satisfies SocialProofData,
} as const;

export const faqTeaser = {
  section: {
    id: "faq",
    eyebrow: "Savol-javob",
    title: "Ko’p beriladigan savollar",
  } satisfies SectionCopy,
  items: [
    {
      id: "qadam-nima",
      question: "Qadam.io nima?",
      answer:
        "Qadam.io — kasbiy yo’nalish bo’yicha qaror qabul qilishga yordam beradigan tizim. U sizni tushunishga, mos bo’lishi mumkin bo’lgan yo’nalishlarni ko’rsatishga, sabablarini tushuntirishga va keyingi qadamni belgilashga yordam beradi.",
    },
    {
      id: "oddiy-test",
      question: "Bu oddiy kasb testi emasmi?",
      answer:
        "Yo’q. Test odatda bitta natija — kasb nomini beradi. Qadam esa bir nechta variantni, har birining sababini va tayyorgarlik darajangizni ko’rsatishga, so’ng amaliy yo’lga o’tkazishga qaratilgan.",
    },
    {
      id: "aniqlik",
      question: "Natija 100% aniq bo’ladimi?",
      answer:
        "Hech bir tizim inson kelajagini 100% aniq ayta olmaydi va biz bunday va’da bermaymiz. Natija — javoblaringiz va mavjud ma’lumotlarga asoslangan, tushuntirilgan tavsiya. Yakuniy qarorni siz qabul qilasiz.",
    },
    {
      id: "telegram",
      question: "Telegram orqali qanday foydalanaman?",
      answer:
        "“Diagnostikani boshlash” tugmasini bosing — Telegram’da Qadam boti ochiladi. Botdagi “Bepul diagnostika” tugmasi orqali savollarga javob berasiz.",
    },
    {
      id: "kurs-sotadimi",
      question: "Qadam kurs sotadimi?",
      answer:
        "Qadamning vazifasi — avval to’g’ri yo’nalishni tushunishga yordam berish. Ta’lim — bu yo’lning bir bosqichi, Qadam esa kurslar do’koni emas.",
    },
  ] satisfies FaqItem[],
  moreLabel: "Barcha savollar",
  moreHref: "/faq",
} as const;

export const finalCta = {
  title: "Keyingi qadamingizni taxmin qilmang — tushunib oling",
  body: "Diagnostika Telegram’da bepul o’tkaziladi. Natijani ko’rib, keyin qaror qilasiz.",
} as const;
