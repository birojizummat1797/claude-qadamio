import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { DiagnosticCTA } from "@/components/cta/DiagnosticCTA";
import { Container } from "@/components/layout/Container";
import { buttonClasses } from "@/components/ui/Button";

interface HeroProps {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  lead: string;
  secondaryLabel: string;
  secondaryHref: string;
  ctaNote: string;
  /** Visual rendered under the copy (JourneyVisual). */
  visual?: ReactNode;
}

export function Hero({ eyebrow, titleLine1, titleLine2, lead, secondaryLabel, secondaryHref, ctaNote, visual }: HeroProps) {
  return (
    <section aria-labelledby="hero-title" className="border-b border-line bg-paper">
      <Container className="pt-12 pb-14 md:pt-20 md:pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-accent-text">{eyebrow}</p>
          <h1 id="hero-title" className="mt-4 text-display font-bold tracking-tight text-balance text-midnight md:text-display-lg">
            {titleLine1}
            <br />
            <span className="text-primary">{titleLine2}</span>
          </h1>
          <p className="mt-6 max-w-prose text-lg text-fg-muted md:text-xl">{lead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <DiagnosticCTA source="hero" size="lg" />
            <Link href={secondaryHref} className={buttonClasses({ variant: "secondary", size: "lg" })}>
              {secondaryLabel}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <p className="mt-4 text-sm text-fg-muted">{ctaNote}</p>
        </div>

        {visual && <div className="mt-12 md:mt-16">{visual}</div>}
      </Container>
    </section>
  );
}
