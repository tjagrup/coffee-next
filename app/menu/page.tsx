import { menuItems } from "@/lib/menu";
import { MenuBrowser } from "@/components/ui/MenuBrowser";

export const metadata = {
  title: "Our Menu — Coffee Extra Co.",
  description:
    "Speciality coffees, cold drinks, loose leaf teas, fresh pastries, and light lunches — all made fresh, every day.",
};

export default function MenuPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-espresso py-20 px-6 text-center">
        <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-amber mb-3">
          Coffee Extra Co.
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-cream">
          Our Menu
        </h1>
        <p className="font-body text-base text-cream/60 mt-4 max-w-md mx-auto leading-relaxed">
          Everything is made fresh. Coffee is sourced directly. Nothing is rushed.
        </p>
      </section>

      <MenuBrowser items={menuItems} />
    </>
  );
}
