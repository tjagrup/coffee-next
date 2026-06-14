import Image from "next/image";

interface MenuCardProps {
  name: string;
  description: string;
  price: number;
  badge?: string;
  imageId: number;
}

const badgeColors: Record<string, string> = {
  Popular: "bg-coral/15 text-coral-dark",
  "House Favorite": "bg-amber/20 text-amber-dark",
  New: "bg-sage/20 text-sage-dark",
  Seasonal: "bg-rose/15 text-rose-dark",
};

export function MenuCard({ name, description, price, badge, imageId }: MenuCardProps) {
  const src = `/images/${imageId}-card.webp`;

  return (
    <article className="group bg-cream-light rounded-card overflow-hidden shadow-card hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={src}
          alt={name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-base font-semibold text-espresso leading-snug">
            {name}
          </h3>
          <span className="flex-shrink-0 font-body text-base font-bold text-espresso">
            ${price.toFixed(2)}
          </span>
        </div>

        <p className="font-body text-xs text-stone-500 leading-relaxed line-clamp-2 mb-3">
          {description}
        </p>

        {badge && (
          <span
            className={`inline-block rounded-badge px-2.5 py-0.5 font-body text-xs font-semibold ${badgeColors[badge] ?? "bg-stone-100 text-stone-600"}`}
          >
            {badge}
          </span>
        )}
      </div>
    </article>
  );
}
