import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { a11yLabels, footer, site } from "@/content/site";
import { buildTelegramUrl, CTA_SOURCES } from "@/lib/telegram";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="zone-dark border-t border-midnight-line bg-midnight text-on-midnight">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
        <div className="max-w-sm">
          <Logo tone="dark" />
          <p className="mt-3 text-on-midnight">{site.tagline}</p>
          <p className="mt-4 text-sm text-on-midnight-muted">{footer.principle}</p>
          <TrackedLink
            href={buildTelegramUrl({ source: "footer" })}
            external
            events={["diagnostic_cta_click", "telegram_redirect"]}
            props={{ source: CTA_SOURCES.footer }}
            className="mt-4 inline-flex min-h-10 items-center font-medium text-on-midnight-link hover:text-on-midnight"
          >
            {footer.telegramLabel}
          </TrackedLink>
        </div>

        {footer.columns.map((column) => (
          <nav key={column.title} aria-label={`${a11yLabels.footerNav}: ${column.title}`}>
            <h2 className="text-sm font-semibold text-on-midnight">{column.title}</h2>
            <ul className="mt-3 space-y-1">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex min-h-10 items-center text-on-midnight-muted hover:text-on-midnight">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <div className="border-t border-midnight-line">
        <Container className="py-5 text-sm text-on-midnight-muted">
          © {year} {site.name}
        </Container>
      </div>
    </footer>
  );
}
