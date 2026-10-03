import Image from "next/image";
import type { Partner, SocialProofData, Stat, Testimonial } from "@/content/types";

/**
 * Social proof components. They render ONLY entries marked `verified: true`
 * (checked at runtime too, in case content arrives from an untyped source).
 * With no verified data, an honest empty state is shown instead of demo content.
 */

export function publishable<T extends { verified: unknown }>(items: readonly T[]): T[] {
  return items.filter((item) => item.verified === true);
}

export function hasSocialProof(data: SocialProofData): boolean {
  return (
    publishable(data.testimonials).length + publishable(data.stats).length + publishable(data.partners).length > 0
  );
}

export function TestimonialCard({ quote, author, context }: Testimonial) {
  return (
    <figure className="h-full rounded-[var(--radius-lg)] border border-line bg-surface p-6">
      <blockquote className="text-fg">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm text-fg-muted">
        <span className="font-semibold text-fg">{author}</span>
        {context && <span> · {context}</span>}
      </figcaption>
    </figure>
  );
}

export function StatsBlock({ stats, sourceLabel }: { stats: readonly Stat[]; sourceLabel: string }) {
  return (
    <dl className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-[var(--radius-lg)] border border-line bg-surface p-6">
          <dt className="text-sm text-fg-muted">{stat.label}</dt>
          <dd className="mt-1 text-h2 font-bold text-fg">{stat.value}</dd>
          <dd className="mt-2 text-xs text-fg-muted">
            {sourceLabel}: {stat.source}, {stat.asOf}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function PartnerLogos({ partners }: { partners: readonly Partner[] }) {
  return (
    <ul className="flex flex-wrap items-center gap-8">
      {partners.map((partner) => (
        <li key={partner.name}>
          <Image src={partner.logoSrc} alt={partner.name} width={120} height={40} className="h-10 w-auto" />
        </li>
      ))}
    </ul>
  );
}

interface SocialProofProps {
  data: SocialProofData;
  emptyState: string;
  labels: { testimonials: string; stats: string; partners: string; source: string };
}

export function SocialProof({ data, emptyState, labels }: SocialProofProps) {
  const testimonials = publishable(data.testimonials);
  const stats = publishable(data.stats);
  const partners = publishable(data.partners);

  if (!hasSocialProof(data)) {
    return (
      <p className="max-w-prose rounded-[var(--radius-lg)] border border-dashed border-line-strong bg-surface p-6 text-fg-muted">
        {emptyState}
      </p>
    );
  }

  return (
    <div className="space-y-10">
      {stats.length > 0 && (
        <div>
          <h3 className="sr-only">{labels.stats}</h3>
          <StatsBlock stats={stats} sourceLabel={labels.source} />
        </div>
      )}
      {testimonials.length > 0 && (
        <div>
          <h3 className="mb-4 text-h3 font-semibold">{labels.testimonials}</h3>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <li key={t.consentRef}>
                <TestimonialCard {...t} />
              </li>
            ))}
          </ul>
        </div>
      )}
      {partners.length > 0 && (
        <div>
          <h3 className="mb-4 text-h3 font-semibold">{labels.partners}</h3>
          <PartnerLogos partners={partners} />
        </div>
      )}
    </div>
  );
}
