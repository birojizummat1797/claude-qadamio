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
      <Container className="py-20 text-center md:py-32">
        <h2 id="final-cta-title" className="mx-auto max-w-4xl text-h2 font-extrabold text-balance md:text-display-lg">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-on-midnight-muted">{body}</p>
        <div className="mt-10 flex justify-center">
          <DiagnosticCTA source="finalCta" size="lg" />
        </div>
      </Container>
    </section>
  );
}
