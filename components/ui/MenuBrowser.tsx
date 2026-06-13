"use client";

import { useState } from "react";
import { categories, type Category, type MenuItem } from "@/lib/menu";
import { MenuCard } from "./MenuCard";

interface MenuBrowserProps {
  items: MenuItem[];
}

const categoryEmoji: Record<Category, string> = {
  "Espresso Drinks": "☕",
  "Cold Drinks": "🧊",
  "Loose Leaf Tea": "🍵",
  Pastries: "🥐",
  Sandwiches: "🥪",
};

export function MenuBrowser({ items }: MenuBrowserProps) {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered =
    active === "All" ? items : items.filter((item) => item.category === active);

  const sections =
    active === "All"
      ? categories.map((cat) => ({
          category: cat,
          items: filtered.filter((item) => item.category === cat),
        }))
      : [{ category: active as Category, items: filtered }];

  return (
    <div className="bg-cream min-h-screen">
      {/* Category filter bar */}
      <div className="sticky top-16 z-50 bg-cream/95 backdrop-blur-sm border-b border-cream-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            <button
              onClick={() => setActive("All")}
              className={`flex-shrink-0 rounded-pill px-4 py-2 font-body text-sm font-medium transition-all duration-200 ${
                active === "All"
                  ? "bg-espresso text-cream"
                  : "text-stone-500 hover:text-espresso hover:bg-cream-dark"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex-shrink-0 flex items-center gap-1.5 rounded-pill px-4 py-2 font-body text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-espresso text-cream"
                    : "text-stone-500 hover:text-espresso hover:bg-cream-dark"
                }`}
              >
                <span aria-hidden="true">{categoryEmoji[cat]}</span>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu sections */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16">
        {sections.map(({ category, items: sectionItems }) =>
          sectionItems.length === 0 ? null : (
            <section key={category} id={category.replace(/\s+/g, "-").toLowerCase()}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl" aria-hidden="true">
                  {categoryEmoji[category as Category]}
                </span>
                <h2 className="font-display text-3xl font-bold text-espresso">
                  {category}
                </h2>
                <span className="font-body text-sm text-stone-400">
                  ({sectionItems.length})
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {sectionItems.map((item) => (
                  <MenuCard
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    badge={item.badge}
                    imageId={item.imageId}
                  />
                ))}
              </div>
            </section>
          )
        )}
      </div>
    </div>
  );
}
