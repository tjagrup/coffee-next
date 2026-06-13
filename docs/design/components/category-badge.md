# CategoryBadge

**File:** `components/ui/CategoryBadge.tsx`
**Type:** Server Component (can be Client if `onClick` interactivity is needed)

A circular badge representing a product category. Displays an icon and a short label. The four flavors map to the four accent colors in the design system.

## Anatomy

```
    ╭─────╮
   │  ☕  │  ← icon (emoji or SVG)
   │COFFEE│  ← label (10px, bold, tracked)
    ╰─────╯
     └─ w-16 h-16 rounded-full
        background: accent color (solid)
```

## Flavors

| Flavor | Icon | Label | Background | Text |
|---|---|---|---|---|
| `coffee` | ☕ | COFFEE | `bg-amber` | `text-espresso` |
| `drinks` | 🧃 | DRINKS | `bg-sage` | `text-espresso` |
| `tea` | 🍵 | TEA | `bg-coral` | `text-cream` |
| `bakery` | 🧁 | BAKERY | `bg-rose` | `text-cream` |

## Props

```ts
type Flavor = "coffee" | "drinks" | "tea" | "bakery";

interface CategoryBadgeProps {
  label?: string;           // overrides default label
  icon?: React.ReactNode;   // overrides default emoji icon
  flavor?: Flavor;          // default: "coffee"
  onClick?: () => void;     // if provided, renders as interactive button
}
```

## Usage

```tsx
import { CategoryBadge } from "@/components/ui/CategoryBadge";

// Default — uses built-in icon and label
<CategoryBadge flavor="coffee" />
<CategoryBadge flavor="drinks" />
<CategoryBadge flavor="tea" />
<CategoryBadge flavor="bakery" />

// Custom label and icon
<CategoryBadge flavor="coffee" label="ESPRESSO" icon={<EspressoIcon />} />

// With click handler (renders as interactive button)
<CategoryBadge flavor="bakery" onClick={() => setCategory("bakery")} />

// In a vertical stack (as used in hero)
<div className="flex flex-col gap-3">
  <CategoryBadge flavor="coffee" />
  <CategoryBadge flavor="drinks" />
  <CategoryBadge flavor="tea" />
  <CategoryBadge flavor="bakery" />
</div>
```

## States

| State | Visual |
|---|---|
| Default | Solid accent color, icon + label |
| Hover | `scale-110` — slight grow |
| Hover shadow | `shadow-warm` — warm lift |
| Focus | `ring-2 ring-coral ring-offset-2` |

## Sizing Note

The base size is `w-16 h-16` (64px). The icon is `text-xl` and the label is `text-[10px]`. This compact size is designed for sidebar stacks. For a larger filter pill variant, scale with `w-20 h-20` and `text-2xl` icon.

## Accessibility

- Renders as `<button>` when `onClick` is provided
- `aria-label` is set to the display label by default
- When used as navigation, consider wrapping in `<nav>` with `aria-label="Categories"`
