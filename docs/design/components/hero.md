# Hero Section

**File:** No dedicated component — compose from Typography, Button, and CategoryBadge primitives.
**Type:** Server Component

The hero is the full-width opening section of the home page, composed from design system primitives.

## Anatomy

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  [Eyebrow label — e.g. "Featured Today"]                                │
│                                                                         │
│  When Life Gives You Lemons,              ╭──────────────╮              │
│  Trade Them For Coffee!!                  │  [Product    │   ◯ COFFEE  │
│                                           │   Illustration]│  ◯ DRINKS  │
│  [Body copy — 2–3 lines]                 │              │  ◯ TEA     │
│                                           ╰──────────────╯  ◯ BAKERY  │
│  ╭──────────╮                                                           │
│  │ Get Promo │                                                           │
│  ╰──────────╯                                                           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## Reference Composition

```tsx
import { Display, Body, Eyebrow } from "@/components/ui/Typography";
import { Button }                 from "@/components/ui/Button";
import { CategoryBadge }          from "@/components/ui/CategoryBadge";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-16 px-6 overflow-hidden">
      {/* Background texture — optional grain overlay */}
      <div className="absolute inset-0 bg-cream" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <div className="flex flex-col gap-6">
          <Eyebrow>Featured Today</Eyebrow>
          <Display>
            When Life Gives You Lemons,<br />
            Trade Them For Coffee!!
          </Display>
          <Body>
            Shake up your taste buds with a chocolate delight.
            Chill out with our chocolicious shakes.
            Pure cocoa goodness in every sip.
          </Body>
          <div className="flex items-center gap-4">
            <Button size="lg">Get Promo</Button>
            <Button variant="ghost">Explore Menu</Button>
          </div>
        </div>

        {/* Right: Product image + category badges */}
        <div className="relative flex items-center justify-center gap-6">
          {/* Product illustration placeholder */}
          <div className="w-72 h-72 rounded-full bg-amber/20 flex items-center justify-center">
            <span className="text-8xl">☕</span>
          </div>

          {/* Category badges — stacked vertically */}
          <div className="flex flex-col gap-3">
            <CategoryBadge flavor="coffee" />
            <CategoryBadge flavor="drinks" />
            <CategoryBadge flavor="tea" />
            <CategoryBadge flavor="bakery" />
          </div>
        </div>
      </div>
    </section>
  );
}
```

## Layout Rules

- Min height: `min-h-[calc(100vh-4rem)]` — fills viewport below nav
- Content: `max-w-7xl mx-auto` — consistent with nav max-width
- Grid: `md:grid-cols-2` — stacks on mobile, side-by-side on md+
- Product circle: `w-72 h-72` (288px) with soft accent background
- Category badges: `flex-col gap-3` — vertical stack to the right of product

## Responsive

| Breakpoint | Layout |
|---|---|
| Mobile | Single column, image below copy |
| md (768px+) | Two-column grid, image and badges on right |

## Visual Details

- The background should be `bg-cream` (the warmest ground)
- A subtle grain texture can be added via a pseudo-element or CSS `background-image: url("data:image/svg+xml,...")`
- The product circle uses `bg-amber/20` — a soft amber tint, not full saturation
- The CTA button should always be `variant="primary"` (espresso/cream)
