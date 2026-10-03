import { Container } from "@/components/layout/Container";
import { DiagnosticCTA } from "./DiagnosticCTA";

interface FinalCTAProps {
  title: string;
  body: string;
}

/** Opens the page's Midnight zone; the footer continues it below. */
export function FinalCTA({ title, body }: FinalCTAProps) {
  return (
    <section aria-labelledby="final-cta-title" className="zone-dark bg-midnight text-on-midnight">
      <Container className="py-16 md:py-24">
        <h2 id="final-cta-title" className="max-w-2xl text-h2 font-bold tracking-tight text-balance md:text-h2-lg">
          {title}
        </h2>
        <p className="mt-4 max-w-prose text-lg text-on-midnight-muted">{body}</p>
        <div className="mt-8">
          <DiagnosticCTA source="finalCta" size="lg" />
        </div>
      </Container>
    </section>
  );
}
