export const dynamic = "force-dynamic";

import { HeroSection } from "@/components/ui/HeroSection";
import { EventCard } from "@/components/ui/EventCard";
import { MenuCard } from "@/components/ui/MenuCard";
import { menuItems } from "@/lib/menu";
import { events } from "@/lib/events";

export default function HomePage() {
  const featured = menuItems.filter((item) => item.featured);

  return (
    <>
      <HeroSection />

      {/* Popular items */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-mocha mb-3">
              From Our Kitchen &amp; Bar
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-espresso">
              The Crowd Favourites
            </h2>
            <p className="font-body text-base text-stone-500 mt-4 max-w-md mx-auto leading-relaxed">
              The drinks and bites our regulars come back for, time after time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featured.map((item) => (
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

          <div className="text-center mt-12">
            <a
              href="/menu"
              className="inline-flex items-center justify-center rounded-pill px-6 py-3 font-body text-sm font-semibold border border-stone-300 text-espresso hover:bg-espresso hover:text-cream hover:border-espresso transition-all duration-200"
            >
              Explore the Full Menu →
            </a>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="bg-espresso py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-amber mb-3">
              Happening Here
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
              Events &amp; Gatherings
            </h2>
            <p className="font-body text-base text-cream/60 mt-4 max-w-md mx-auto leading-relaxed">
              More than a coffee shop — a place to gather, listen, and connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-coral py-16 px-6 text-center">
        <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-cream/70 mb-3">
          We&apos;d love to have you
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">
          Ready to visit?
        </h2>
        <a
          href="/about"
          className="inline-flex items-center justify-center rounded-pill px-8 py-3.5 font-body text-sm font-semibold border border-cream/40 text-cream hover:bg-cream/10 transition-all duration-200"
        >
          Our Story &amp; How to Find Us →
        </a>
      </section>
    </>
  );
}
