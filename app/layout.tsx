import type { Metadata, Viewport } from "next";
import { Onest } from "next/font/google";
import type { ReactNode } from "react";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { a11yLabels, site } from "@/content/site";
import { siteConfig } from "@/lib/config";
import { DEFAULT_LOCALE, OG_LOCALE } from "@/lib/i18n";
import "./globals.css";

// Onest: a heavy, contemporary grotesk for display weights that stays calm at
// body sizes; covers Latin-ext (Uzbek) and Cyrillic (future ru locale).
const onest = Onest({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-onest",
  display: "swap",
});

// Base metadata only; per-page metadata, OG images, sitemap and JSON-LD are B6.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: OG_LOCALE[DEFAULT_LOCALE],
    title: site.name,
    description: site.description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#f7f5f0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={DEFAULT_LOCALE} className={onest.variable}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-[var(--radius-sm)] focus:bg-midnight focus:px-4 focus:py-3 focus:text-on-midnight"
        >
          {a11yLabels.skipToContent}
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
        <PageViewTracker />
      </body>
    </html>
  );
}
