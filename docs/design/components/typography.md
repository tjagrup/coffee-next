# Typography

**File:** `components/ui/Typography.tsx`
**Type:** Server Component

Typed React primitives for every level of the typographic hierarchy. Each component renders a semantic HTML element and applies the correct Tailwind classes. The `as` prop allows overriding the tag while preserving styles.

## Exports

| Export | Default Tag | Role |
|---|---|---|
| `Display` | `h1` | Hero headlines, page titles |
| `Heading` | `h2` | Section headings |
| `Subheading` | `h3` | Card titles, sub-sections |
| `Body` | `p` | Reading copy, descriptions |
| `Caption` | `p` | Small supporting text, metadata |
| `Eyebrow` | `p` | All-caps labels above headings |

## Props (all components share this interface)

```ts
interface TypographyProps {
  children: React.ReactNode;
  className?: string;   // additional Tailwind classes
  as?: React.ElementType; // override rendered HTML tag
}
```

## Visual Scale

```
Display   ──  Fraunces 700  48–72px  lh 1.05  text-espresso
              "When Life Gives You Lemons,
               Trade Them For Coffee!!"

Heading   ──  Fraunces 600  30–36px  lh 1.20  text-espresso
              "Our Signature Drinks"

Subheading ─  Fraunces 500  20–24px  lh 1.30  text-bark
              "Espresso-Based Beverages"

Body      ──  DM Sans  400  16px     lh 1.60  text-stone-600
              "Pure cocoa goodness in every sip."

Caption   ──  DM Sans  400  14px     lh 1.50  text-stone-500
              "All prices include tax."

Eyebrow   ──  DM Sans  700  12px     tracked 0.15em  uppercase  text-mocha
              "FEATURED TODAY"
```

## Usage

```tsx
import {
  Display, Heading, Subheading,
  Body, Caption, Eyebrow
} from "@/components/ui/Typography";

// Hero section
<Eyebrow>Featured Today</Eyebrow>
<Display>When Life Gives You Lemons,<br />Trade Them For Coffee!!</Display>
<Body>Pure cocoa goodness in every sip.</Body>

// Product section
<Heading>Our Signature Drinks</Heading>
<Subheading>Espresso-Based Beverages</Subheading>
<Caption>All prices include tax.</Caption>

// Override tag (e.g. h2 visually styled as Heading, but rendered as div)
<Heading as="div">Section Label</Heading>

// Custom color override
<Display className="text-coral">Special Offer</Display>
```

## Rules

- **Never** use raw `<h1>`, `<h2>`, `<p>` with manual font classes — always use these components
- **Always** maintain semantic heading order (h1 → h2 → h3) even when using `as` overrides for visual purposes
- `Display` should appear **once per page** (it's an h1)
- Eyebrow text is always `uppercase` and `tracking-[0.15em]` — this is a signature detail; do not reduce the tracking
- Body text is always `text-stone-600` (not `text-espresso`) — the slight softening improves long-form readability
