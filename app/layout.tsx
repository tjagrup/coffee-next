import type { Metadata } from "next";
import { Fraunces, DM_Sans, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Navigation } from "@/components/ui/Navigation";
import { ReserveButton } from "@/components/ui/ReserveButton";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coffee Extra Co. — Speciality Coffee, New York",
  description:
    "A neighbourhood coffee house in the West Village, New York. Speciality coffee, fresh pastries, light lunches, and loose leaf tea — every day.",
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-espresso font-body">
        <Navigation
          logo={<span>Coffee Extra Co.</span>}
          items={navItems}
          cta={<ReserveButton />}
        />

        <main className="flex-1">{children}</main>

        <footer className="bg-bark py-14 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-8 mb-10">
              <div>
                <p className="font-display text-xl font-bold text-cream mb-2">
                  Coffee Extra Co.
                </p>
                <p className="font-body text-sm text-cream/60 leading-relaxed">
                  A neighbourhood coffee house<br />in the West Village, New York.
                </p>
              </div>
              <div>
                <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-amber mb-3">
                  Hours
                </p>
                <p className="font-body text-sm text-cream/60 leading-relaxed">
                  Mon – Fri: 7:00 am – 7:00 pm<br />
                  Sat – Sun: 8:00 am – 6:00 pm
                </p>
              </div>
              <div>
                <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-amber mb-3">
                  Find Us
                </p>
                <p className="font-body text-sm text-cream/60 leading-relaxed">
                  23 Bedford Street<br />
                  West Village, New York, NY 10014<br />
                  hello@coffeeextraco.com
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <Link href="/" className="font-body text-xs text-cream/40 hover:text-cream/70 transition-colors">Home</Link>
                <a href="/menu" className="font-body text-xs text-cream/40 hover:text-cream/70 transition-colors">Menu</a>
                <a href="/about" className="font-body text-xs text-cream/40 hover:text-cream/70 transition-colors">About</a>
              </div>
              <p className="font-body text-xs text-cream/30">
                © 2025 Coffee Extra Co. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
