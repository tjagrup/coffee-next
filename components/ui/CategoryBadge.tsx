"use client";

import type { ReactNode } from "react";

type Flavor = "coffee" | "drinks" | "tea" | "bakery";

interface CategoryBadgeProps {
  label?: string;
  icon?: ReactNode;
  flavor?: Flavor;
  onClick?: () => void;
}

const flavorClasses: Record<Flavor, { bg: string; text: string }> = {
  coffee: { bg: "bg-amber",  text: "text-espresso" },
  drinks: { bg: "bg-sage",   text: "text-espresso" },
  tea:    { bg: "bg-coral",  text: "text-cream" },
  bakery: { bg: "bg-rose",   text: "text-cream" },
};

const defaultIcons: Record<Flavor, string> = {
  coffee: "☕",
  drinks: "🧃",
  tea:    "🍵",
  bakery: "🧁",
};

const defaultLabels: Record<Flavor, string> = {
  coffee: "COFFEE",
  drinks: "DRINKS",
  tea:    "TEA",
  bakery: "BAKERY",
};

export function CategoryBadge({
  label,
  icon,
  flavor = "coffee",
  onClick,
}: CategoryBadgeProps) {
  const { bg, text } = flavorClasses[flavor];
  const displayIcon  = icon  ?? defaultIcons[flavor];
  const displayLabel = label ?? defaultLabels[flavor];

  return (
    <button
      onClick={onClick}
      aria-label={displayLabel}
      className={[
        "flex flex-col items-center justify-center gap-1",
        "w-16 h-16 rounded-full",
        bg,
        text,
        "transition-all duration-200 hover:scale-110 hover:shadow-warm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-coral",
      ].join(" ")}
    >
      <span className="text-xl leading-none" aria-hidden="true">
        {displayIcon}
      </span>
      <span className="font-body text-[10px] font-bold tracking-wider leading-none">
        {displayLabel}
      </span>
    </button>
  );
}
