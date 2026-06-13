"use client";

import { useState } from "react";
import { ReservationModal } from "./ReservationModal";

export function ReserveButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center rounded-pill px-5 py-2 font-body text-sm font-semibold leading-none bg-espresso text-cream hover:bg-bark transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
      >
        Book a Table
      </button>
      <ReservationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
