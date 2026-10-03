import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ViewTracker } from "@/components/analytics/ViewTracker";
import { FAQ } from "@/components/content/FAQ";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { ComparisonBlock } from "@/components/home/ComparisonBlock";
import { Hero } from "@/components/home/Hero";
import { JourneyVisual } from "@/components/home/JourneyVisual";
import { ProblemGrid } from "@/components/home/ProblemGrid";
import { Section } from "@/components/layout/Section";
import { SocialProof } from "@/components/social/SocialProof";
import { StepList } from "@/components/trust/StepCard";
import { TrustGrid } from "@/components/trust/TrustCard";
import {
  comparison,
  faqTeaser,
  finalCta,
  hero,
  howItWorks,
  journey,
  problems,
  socialProof,
  trust,
} from "@/content/home";

function MoreLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary hover:text-primary-hover">
      {label}
      <ArrowRight aria-hidden="true" className="size-4" />
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero {...hero} visual={<JourneyVisual label={journey.label} steps={journey.steps} />} />

      <Section {...problems.section}>
        <ProblemGrid items={problems.items} />
      </Section>

      <Section {...howItWorks.section} tone="surface">
        <ViewTracker event="how_it_works_view" props={{ source: "home" }} />
        <StepList steps={howItWorks.steps} />
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-prose text-sm text-fg-muted">{howItWorks.note}</p>
          <MoreLink href={howItWorks.moreHref} label={howItWorks.moreLabel} />
        </div>
      </Section>

      <Section {...comparison.section}>
        <ComparisonBlock chain={comparison.chain} columns={comparison.columns} rows={comparison.rows} />
      </Section>

      <Section {...trust.section} tone="surface">
        <TrustGrid items={trust.items} />
      </Section>

      <Section {...socialProof.section}>
        <SocialProof data={socialProof.data} emptyState={socialProof.emptyState} labels={socialProof.labels} />
      </Section>

      <Section {...faqTeaser.section} tone="surface">
        <div className="max-w-3xl">
          <FAQ items={faqTeaser.items} source="home" />
          <div className="mt-6">
            <MoreLink href={faqTeaser.moreHref} label={faqTeaser.moreLabel} />
          </div>
        </div>
      </Section>

      <FinalCTA {...finalCta} />
    </>
  );
}
