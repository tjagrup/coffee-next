# Onea. Design System

> **Golden Hour** — warm, artisanal, editorial. Every design decision should feel like the first sip of morning coffee: inviting, deliberate, slightly indulgent.

## Design Structure

```
docs/design/
├── README.md                  ← You are here — overview and full structure
├── style-guide.md             ← Color palette, typography, spacing, motion, a11y
├── tokens.css                 ← Standalone CSS design tokens (for design tools)
└── components/
    ├── index.md               ← Component philosophy and import guide
    ├── button.md              ← Button variants, sizes, states, a11y
    ├── navigation.md          ← Sticky header, nav links, search trigger
    ├── hero.md                ← Hero section composition guide
    ├── product-card.md        ← Product card with circular accent
    ├── category-badge.md      ← Circular flavor badge (coffee/drinks/tea/bakery)
    ├── input.md               ← Search input and general text input
    └── typography.md          ← Display, Heading, Subheading, Body, Caption, Eyebrow

components/ui/                 ← Working React/TSX implementations
├── Button.tsx
├── Navigation.tsx
├── ProductCard.tsx
├── CategoryBadge.tsx
├── SearchInput.tsx
└── Typography.tsx

app/globals.css                ← Live design tokens (Tailwind v4 @theme inline)
app/layout.tsx                 ← Font setup (Fraunces + DM Sans via next/font/google)
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.9 (App Router) |
| UI | React 19.2.4 (Server + Client Components) |
| Styling | Tailwind CSS v4 — tokens in `app/globals.css` via `@theme inline` |
| Language | TypeScript 5 |
| Display font | [Fraunces](https://fonts.google.com/specimen/Fraunces) — variable serif, loaded via `next/font/google` |
| Body font | [DM Sans](https://fonts.google.com/specimen/DM+Sans) — loaded via `next/font/google` |

---

## Design Principles

1. **Warmth first** — every surface should feel like sunlit wood, not a tech dashboard
2. **Organic shapes** — circles, pill buttons, rounded cards; no hard geometric corners
3. **Deliberate accent** — the four flavor colors (coral, amber, rose, sage) accent; they never overwhelm the cream ground
4. **Type-led hierarchy** — Fraunces display + DM Sans body creates a clear, beautiful typographic ladder
5. **Motion as texture** — transitions are subtle and warm; they delight, not distract

---

## Color Palette at a Glance

| Role | Token | Hex |
|---|---|---|
| Page background | `bg-cream` | `#F5F0E8` |
| Card/input background | `bg-cream-light` | `#FDFAF5` |
| Primary text / dark button | `text-espresso` / `bg-espresso` | `#1C1009` |
| Secondary text | `text-mocha` | `#7A4E35` |
| Accent: Coffee | `bg-coral` | `#E07A5F` |
| Accent: Drinks | `bg-amber` | `#D4A574` |
| Accent: Tea | `bg-rose` | `#C97D9A` |
| Accent: Bakery | `bg-sage` | `#7FAF8E` |

Full palette → [`style-guide.md`](./style-guide.md)

---

## Components at a Glance

| Component | Variants | Client? |
|---|---|---|
| `Button` | primary / secondary / ghost · sm / md / lg | No |
| `Navigation` | logo, items, onSearchClick props | Yes |
| `ProductCard` | coral / amber / rose / sage accent | No |
| `CategoryBadge` | coffee / drinks / tea / bakery flavor | Yes |
| `SearchInput` | controlled, onSearch callback | Yes |
| `Typography` | Display / Heading / Subheading / Body / Caption / Eyebrow | No |

Full specs → [`components/`](./components/index.md)

---

## Quick Start

```tsx
// All tokens available as Tailwind utilities — no config file needed
// bg-cream, text-espresso, rounded-pill, shadow-warm, font-display, etc.

import { Navigation }    from "@/components/ui/Navigation";
import { Button }        from "@/components/ui/Button";
import { ProductCard }   from "@/components/ui/ProductCard";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import { SearchInput }   from "@/components/ui/SearchInput";
import { Display, Heading, Body, Eyebrow } from "@/components/ui/Typography";

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <Eyebrow>Featured Today</Eyebrow>
        <Display>When Life Gives You Lemons,<br />Trade Them For Coffee.</Display>
        <Body>Pure cocoa goodness in every sip.</Body>
        <Button>Get Promo</Button>

        <Heading className="mt-16">Our Signature Drinks</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <ProductCard name="Nutella Mudslide"     price={30} accentColor="coral" />
          <ProductCard name="Caramel Frappuccino"  price={40} accentColor="amber" />
          <ProductCard name="Hot Chocolate"         price={35} accentColor="rose" />
        </div>
      </main>
    </>
  );
}
```

---

## Token Naming Convention

Tailwind v4 maps `--{category}-{name}` CSS variables directly to utility classes:

| CSS Token | Tailwind Utility |
|---|---|
| `--color-cream` | `bg-cream`, `text-cream`, `border-cream` |
| `--color-espresso` | `bg-espresso`, `text-espresso` |
| `--color-coral` | `bg-coral`, `text-coral` |
| `--font-display` | `font-display` |
| `--font-body` | `font-body` |
| `--radius-pill` | `rounded-pill` |
| `--radius-card` | `rounded-card` |
| `--shadow-warm` | `shadow-warm` |
| `--shadow-warm-lg` | `shadow-warm-lg` |
| `--shadow-card` | `shadow-card` |

Full token list → [`tokens.css`](./tokens.css)
