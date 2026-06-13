# Button

**File:** `components/ui/Button.tsx`
**Type:** Server Component (no client state needed)

A pill-shaped action button that is the primary CTA element in the design.

## Variants

| Variant | Description | Background | Text |
|---|---|---|---|
| `primary` | Main CTA — dark, assertive | `bg-espresso` | `text-cream` |
| `secondary` | Alternate action — outlined | `bg-transparent` + `border-stone-300` | `text-espresso` |
| `ghost` | Tertiary / nav-level | `bg-transparent` | `text-mocha` |

## Sizes

| Size | Padding | Font Size |
|---|---|---|
| `sm` | `px-4 py-1.5` | 14px |
| `md` (default) | `px-6 py-2.5` | 16px |
| `lg` | `px-8 py-3.5` | 18px |

## Props

```ts
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";  // default: "primary"
  size?: "sm" | "md" | "lg";                    // default: "md"
  children: React.ReactNode;
}
```

All native `<button>` attributes are forwarded (e.g. `onClick`, `disabled`, `type`, `aria-*`).

## Usage

```tsx
import { Button } from "@/components/ui/Button";

// Primary CTA
<Button>Get Promo</Button>

// Secondary action
<Button variant="secondary" size="sm">Learn More</Button>

// Ghost with custom class
<Button variant="ghost" className="text-coral hover:text-coral-dark">
  View Menu
</Button>

// Disabled state
<Button disabled>Sold Out</Button>
```

## Anatomy

```
╭──────────────────────────────────╮
│  ●  [icon optional]  Label text  │
╰──────────────────────────────────╯
  └─ border-radius: var(--radius-pill) = 9999px
```

## States

| State | Visual |
|---|---|
| Default | Base variant colors |
| Hover | `hover:bg-bark` (primary), `hover:bg-cream-dark` (secondary/ghost) |
| Active | `active:scale-[0.98]` — subtle press-down |
| Focus | `focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2` |
| Disabled | `opacity-50 cursor-not-allowed` |

## Accessibility

- Always provide a meaningful label via `children` or `aria-label`
- For icon-only buttons use `aria-label` and include an `<svg>` with `aria-hidden="true"`
- The button renders as a native `<button>` — no role override needed
- Focus ring uses coral color at 2px width with 2px offset — visible on all backgrounds
