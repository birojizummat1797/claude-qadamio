import { DiagnosticCTA } from "@/components/cta/DiagnosticCTA";
import { a11yLabels, mainNav } from "@/content/site";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { MobileNavigation } from "./MobileNavigation";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label={a11yLabels.mainNav} className="hidden md:block">
          <NavLinks items={mainNav} />
        </nav>

        <div className="flex items-center gap-2">
          {/* Reserved slot for Phase 3 account entry. */}
          <div className="hidden md:block">
            <DiagnosticCTA source="header" />
          </div>
          <MobileNavigation
            items={mainNav}
            logo={<Logo />}
            cta={<DiagnosticCTA source="mobileNav" size="lg" fullWidth />}
          />
        </div>
      </Container>
    </header>
  );
}
