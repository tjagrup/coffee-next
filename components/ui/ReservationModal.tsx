"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { createPortal } from "react-dom";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [guestName, setGuestName] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setGuestName((data.get("name") as string) ?? "");
    setSubmitted(true);
  }

  function handleClose() {
    onClose();
    setTimeout(() => setSubmitted(false), 300);
  }

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso/70 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Card */}
      <div
        ref={dialogRef}
        className="relative w-full max-w-md bg-cream rounded-card shadow-warm-lg p-8"
      >
        {/* Close */}
        <button
          onClick={handleClose}
          aria-label="Close reservation form"
          className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-espresso hover:bg-cream-dark transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="text-5xl mb-4">☕</div>
            <h2 className="font-display text-2xl font-bold text-espresso mb-3">
              You&apos;re all set, {guestName}!
            </h2>
            <p className="font-body text-stone-600 leading-relaxed">
              We&apos;ve noted your reservation and we&apos;ll have your table ready. See you soon — the kettle&apos;s already on.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 inline-flex items-center justify-center rounded-pill px-6 py-2.5 font-body text-sm font-medium bg-espresso text-cream hover:bg-bark transition-colors duration-200"
            >
              Back to browsing
            </button>
          </div>
        ) : (
          <>
            <h2
              id="modal-title"
              className="font-display text-2xl font-bold text-espresso mb-1"
            >
              Reserve a Table
            </h2>
            <p className="font-body text-sm text-stone-500 mb-6">
              23 Bedford Street, West Village · Mon–Sun
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-body text-xs font-semibold tracking-wide uppercase text-mocha">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Sarah Johnson"
                  className="w-full rounded-badge border border-stone-200 bg-cream-light px-4 py-2.5 font-body text-sm text-espresso placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="party-size" className="font-body text-xs font-semibold tracking-wide uppercase text-mocha">
                  Party Size
                </label>
                <select
                  id="party-size"
                  name="partySize"
                  required
                  defaultValue=""
                  className="w-full rounded-badge border border-stone-200 bg-cream-light px-4 py-2.5 font-body text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all duration-200 appearance-none"
                >
                  <option value="" disabled>Select party size</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="date" className="font-body text-xs font-semibold tracking-wide uppercase text-mocha">
                    Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full rounded-badge border border-stone-200 bg-cream-light px-4 py-2.5 font-body text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="time" className="font-body text-xs font-semibold tracking-wide uppercase text-mocha">
                    Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    defaultValue=""
                    className="w-full rounded-badge border border-stone-200 bg-cream-light px-4 py-2.5 font-body text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all duration-200 appearance-none"
                  >
                    <option value="" disabled>Time</option>
                    <option value="07:00">7:00 am</option>
                    <option value="08:00">8:00 am</option>
                    <option value="09:00">9:00 am</option>
                    <option value="10:00">10:00 am</option>
                    <option value="11:00">11:00 am</option>
                    <option value="12:00">12:00 pm</option>
                    <option value="13:00">1:00 pm</option>
                    <option value="14:00">2:00 pm</option>
                    <option value="15:00">3:00 pm</option>
                    <option value="16:00">4:00 pm</option>
                    <option value="17:00">5:00 pm</option>
                    <option value="18:00">6:00 pm</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 w-full inline-flex items-center justify-center rounded-pill py-3 font-body text-sm font-semibold bg-espresso text-cream hover:bg-bark transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
              >
                Confirm Reservation
              </button>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
