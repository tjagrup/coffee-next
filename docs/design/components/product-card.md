# ProductCard

**File:** `components/ui/ProductCard.tsx`
**Type:** Server Component

Displays a single product with a circular accent-colored background, product name, price, and an "Add to cart" button. Used in grid layouts on shop and home pages.

## Anatomy

```
┌──────────────────────────┐
│                          │
│      ╭────────╮          │
│      │        │          │
│      │ [img]  │  ← circular accent bg (w-32 h-32)
│      │        │          │
│      ╰────────╯          │
│                          │
│    Product Name          │
│    $30.00                │
│                          │
│  ╭──────────────────╮    │
│  │   Add to cart    │    │
│  ╰──────────────────╯    │
│                          │
└──────────────────────────┘
  └─ rounded-card (24px)
     bg-cream-light
     shadow-card → shadow-warm-lg on hover
     hover: -translate-y-1 (4px lift)
```

## Props

```ts
type AccentColor = "coral" | "amber" | "rose" | "sage";

interface ProductCardProps {
  name: string;
  price: number;
  accentColor?: AccentColor;   // default: "coral"
  image?: React.ReactNode;     // default: ☕ emoji
  currency?: string;           // default: "$"
}
```

## Accent Color Mapping

| AccentColor | Circle Background | Use case |
|---|---|---|
| `coral` | `bg-coral` | Hot drinks, espresso-based |
| `amber` | `bg-amber` | Cold brew, frappuccino |
| `rose` | `bg-rose` | Tea, lighter drinks |
| `sage` | `bg-sage` | Bakery, matcha |

## Usage

```tsx
import { ProductCard } from "@/components/ui/ProductCard";

// Basic
<ProductCard name="Nutella Mudslide" price={30} accentColor="coral" />

// With custom image
<ProductCard
  name="Caramel Frappuccino"
  price={40}
  accentColor="amber"
  image={<Image src="/drinks/frappuccino.png" alt="Caramel Frappuccino" width={80} height={80} />}
/>

// In a grid
<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 py-12">
  <ProductCard name="Nutella Mudslide"      price={30} accentColor="coral" />
  <ProductCard name="Caramel Frappuccino"  price={40} accentColor="amber" />
  <ProductCard name="Hot Chocolate"         price={35} accentColor="rose" />
</section>
```

## States

| State | Visual |
|---|---|
| Resting | `shadow-card`, no transform |
| Hover | `shadow-warm-lg`, `-translate-y-1`, circle `scale-105` |
| "Add to cart" button hover | Dark fill: `bg-espresso text-cream border-espresso` |

## Accessibility

- Wrap in `<article>` — each card is a self-contained content unit
- Product name should be an `<h3>` (inside a section that already has `<h2>` context)
- Image must have meaningful `alt` text
- "Add to cart" button will need `aria-label="Add [product name] to cart"` in production
