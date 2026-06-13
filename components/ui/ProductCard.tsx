import type { ReactNode } from "react";

type AccentColor = "coral" | "amber" | "rose" | "sage";

interface ProductCardProps {
  name: string;
  price: number;
  accentColor?: AccentColor;
  image?: ReactNode;
  currency?: string;
}

const circleBg: Record<AccentColor, string> = {
  coral: "bg-coral",
  amber: "bg-amber",
  rose:  "bg-rose",
  sage:  "bg-sage",
};

export function ProductCard({
  name,
  price,
  accentColor = "coral",
  image,
  currency = "$",
}: ProductCardProps) {
  return (
    <article className="group flex flex-col items-center gap-4 p-6 rounded-card bg-cream-light shadow-card hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1">
      <div
        className={[
          "w-32 h-32 rounded-full flex items-center justify-center",
          "transition-transform duration-300 group-hover:scale-105",
          circleBg[accentColor],
        ].join(" ")}
      >
        {image ?? <span className="text-5xl" aria-hidden="true">☕</span>}
      </div>

      <div className="text-center">
        <h3 className="font-display text-lg font-semibold text-espresso leading-tight">
          {name}
        </h3>
        <p className="mt-1 font-body text-mocha font-medium">
          {currency}
          {price.toFixed(2)}
        </p>
      </div>

      <button
        className="mt-auto px-5 py-2 rounded-pill text-sm font-body font-medium text-espresso border border-stone-300 hover:bg-espresso hover:text-cream hover:border-espresso transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
        aria-label={`Add ${name} to cart`}
      >
        Add to cart
      </button>
    </article>
  );
}
