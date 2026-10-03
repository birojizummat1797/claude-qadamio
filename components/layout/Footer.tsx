import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { a11yLabels, footer, site } from "@/content/site";
import { buildTelegramUrl, CTA_SOURCES } from "@/lib/telegram";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-3 text-ink-2">{site.tagline}</p>
          <p className="mt-4 text-sm text-ink-3">{footer.principle}</p>
          <TrackedLink
            href={buildTelegramUrl({ source: "footer" })}
            external
            events={["diagnostic_cta_click", "telegram_redirect"]}
            props={{ source: CTA_SOURCES.footer }}
            className="mt-4 inline-flex min-h-10 items-center font-medium text-green hover:text-green-hover"
          >
            {footer.telegramLabel}
          </TrackedLink>
        </div>

        {footer.columns.map((column) => (
          <nav key={column.title} aria-label={`${a11yLabels.footerNav}: ${column.title}`}>
            <h2 className="text-sm font-semibold text-ink">{column.title}</h2>
            <ul className="mt-3 space-y-1">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex min-h-10 items-center text-ink-2 hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <div className="border-t border-line">
        <Container className="py-5 text-sm text-ink-3">
          © {year} {site.name}
        </Container>
      </div>
    </footer>
  );
}
