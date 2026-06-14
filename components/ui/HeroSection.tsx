"use client";

import { useState } from "react";
import Image from "next/image";
import { ReservationModal } from "./ReservationModal";

export function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/1235706-hero.webp"
            alt="Rich dark coffee being poured — Coffee Extra Co."
            fill
            sizes="100vw"
            className="object-cover object-center"
            preload={true}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/50 to-espresso/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="font-body text-xs font-bold tracking-[0.2em] uppercase text-amber mb-5">
            Speciality Coffee · West Village, New York
          </p>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-cream mb-6">
            Your Neighbourhood<br />Coffee House
          </h1>

          <p className="font-body text-lg md:text-xl text-cream/75 max-w-xl mx-auto mb-10 leading-relaxed">
            Hand-crafted specialty coffee, fresh pastries, light lunches,
            and a warm welcome — every single day.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center rounded-pill px-8 py-3.5 font-body text-base font-semibold leading-none bg-coral text-cream hover:bg-coral-dark transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-espresso"
            >
              Reserve a Table
            </button>
            <a
              href="/menu"
              className="inline-flex items-center justify-center rounded-pill px-8 py-3.5 font-body text-base font-semibold leading-none border border-cream/40 text-cream hover:bg-cream/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
            >
              View Menu
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40">
          <span className="font-body text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-cream/30 to-transparent" />
        </div>
      </section>

      <ReservationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
