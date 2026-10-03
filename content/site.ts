/**
 * Site-wide copy (uz). Components receive these values via props/imports;
 * no copy is written inside components.
 */

export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: "Qadam.io",
  tagline: "Kasb tanlashda taxmin emas — asosli qaror.",
  description:
    "Qadam.io javoblaringiz va mavjud ma’lumotlar asosida sizga mos bo’lishi mumkin bo’lgan professional yo’nalishlarni ko’rish va keyingi qadamni aniqroq belgilashga yordam beradi.",
} as const;

export const mainNav: readonly NavItem[] = [
  { label: "Bosh sahifa", href: "/" },
  { label: "Qanday ishlaydi?", href: "/qanday-ishlaydi" },
  { label: "Yo’nalishlar", href: "/yonalishlar" },
  { label: "Qadam haqida", href: "/qadam-haqida" },
  { label: "FAQ", href: "/faq" },
];

export const ctaLabels = {
  primary: "Diagnostikani boshlash",
  secondary: "Qanday ishlashini ko’rish",
  /** Screen-reader hint: the link leaves the website. */
  opensTelegram: "Telegramda ochiladi",
} as const;

export const a11yLabels = {
  skipToContent: "Asosiy kontentga o’tish",
  openMenu: "Menyuni ochish",
  closeMenu: "Menyuni yopish",
  mainNav: "Asosiy navigatsiya",
  footerNav: "Pastki navigatsiya",
  home: "Qadam.io bosh sahifasi",
} as const;

export interface FooterColumn {
  title: string;
  links: readonly NavItem[];
}

export const footer = {
  columns: [
    { title: "Platforma", links: mainNav.slice(1) },
    {
      title: "Ma’lumot",
      links: [
        { label: "Maqolalar", href: "/maqolalar" },
        { label: "Maxfiylik", href: "/maxfiylik" },
      ],
    },
  ] satisfies FooterColumn[],
  // Brand principle from the product brief (no pay-to-rank), not a marketing claim.
  principle: "Tavsiyalar reklama yoki komissiya evaziga tartiblanmaydi.",
  telegramLabel: "Telegram bot",
} as const;

export const notFound = {
  title: "Sahifa topilmadi",
  body: "Bu sahifa mavjud emas yoki hali tayyorlanmoqda.",
  back: "Bosh sahifaga qaytish",
} as const;
