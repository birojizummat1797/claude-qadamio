"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { a11yLabels, type NavItem } from "@/content/site";
import { NavLinks } from "./NavLinks";

interface MobileNavigationProps {
  items: readonly NavItem[];
  /** Server-rendered CTA (keeps the Telegram link logic on the server). */
  cta: ReactNode;
  /** Server-rendered logo for the menu's own top bar. */
  logo: ReactNode;
}

/**
 * Full-screen mobile menu built on native <dialog>: showModal() makes the
 * rest of the page inert, closes on Escape and returns focus to the toggle.
 */
export function MobileNavigation({ items, cta, logo }: MobileNavigationProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  const open = () => {
    dialogRef.current?.showModal();
    document.documentElement.style.overflow = "hidden";
  };
  const close = () => dialogRef.current?.close();

  // Close on route change (link click, back/forward).
  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-label={a11yLabels.openMenu}
        onClick={open}
        className="-mr-2 inline-flex size-11 items-center justify-center rounded-[var(--radius-sm)] text-ink hover:bg-green-soft"
      >
        <Menu aria-hidden="true" className="size-6" />
      </button>

      <dialog
        ref={dialogRef}
        aria-label={a11yLabels.mainNav}
        onClose={() => {
          document.documentElement.style.overflow = "";
        }}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-paper p-0 text-ink backdrop:bg-ink/40"
      >
        <div className="flex h-16 items-center justify-between border-b border-line px-4">
          {logo}
          <button
            type="button"
            autoFocus
            aria-label={a11yLabels.closeMenu}
            onClick={close}
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-[var(--radius-sm)] text-ink hover:bg-green-soft"
          >
            <X aria-hidden="true" className="size-6" />
          </button>
        </div>
        <nav aria-label={a11yLabels.mainNav} className="px-4 pt-2">
          <NavLinks items={items} orientation="vertical" onNavigate={close} />
        </nav>
        <div className="px-4 pt-6 pb-8">{cta}</div>
      </dialog>
    </div>
  );
}
