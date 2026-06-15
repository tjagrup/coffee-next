"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface NavigationProps {
  logo?: ReactNode;
  items?: NavItem[];
  cta?: ReactNode;
}

const defaultItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
];

export function Navigation({
  logo,
  items = defaultItems,
  cta,
}: NavigationProps) {
  return (
    <header className="sticky top-0 z-[100] bg-cream/90 backdrop-blur-sm border-b border-cream-dark">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="font-display text-xl font-bold text-espresso select-none hover:text-bark transition-colors duration-200"
          >
            {logo ?? <span>Coffee Extra Co.</span>}
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative font-body text-sm text-stone-600 hover:text-espresso transition-colors duration-200 after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-px after:bg-coral after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">{cta}</div>
      </nav>
    </header>
  );
}
