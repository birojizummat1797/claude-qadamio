"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/content/site";
import { cn } from "@/lib/cn";

export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

interface NavLinksProps {
  items: readonly NavItem[];
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
}

export function NavLinks({ items, orientation = "horizontal", onNavigate }: NavLinksProps) {
  const pathname = usePathname() ?? "/";
  const vertical = orientation === "vertical";

  return (
    <ul className={cn(vertical ? "flex flex-col" : "flex items-center gap-1")}>
      {items.map((item) => {
        const active = isActivePath(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              onClick={onNavigate}
              className={cn(
                "flex items-center rounded-[var(--radius-sm)] transition-colors",
                vertical
                  ? "min-h-12 border-b border-line px-1 text-lg font-medium"
                  : "min-h-10 px-3 text-[15px] font-medium",
                active ? "text-green" : "text-ink-2 hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
