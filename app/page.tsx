import { DiagnosticCTA } from "@/components/cta/DiagnosticCTA";
import { Container } from "@/components/layout/Container";
import { homeFoundation } from "@/content/home";

// B1 foundation placeholder. The full homepage (journey visual, problems,
// how it works, trust, FAQ teaser) is batch B2 and replaces this file.
export default function HomePage() {
  return (
    <Container className="py-16 md:py-28">
      <div className="max-w-3xl">
        <h1 className="text-display font-bold tracking-tight md:text-display-lg">
          {homeFoundation.titleLine1}
          <br />
          <span className="text-green">{homeFoundation.titleLine2}</span>
        </h1>
        <p className="mt-6 max-w-prose text-lg text-ink-2">{homeFoundation.lead}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <DiagnosticCTA source="hero" size="lg" />
        </div>
      </div>
    </Container>
  );
}
