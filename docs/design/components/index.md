# Components

All components live in `/components/ui/` and are written in TypeScript. They use Tailwind CSS v4 utility classes that reference the design tokens defined in `app/globals.css`.

## Component Index

| Component | File | Description |
|---|---|---|
| [Button](./button.md) | `components/ui/Button.tsx` | CTA and action buttons |
| [Navigation](./navigation.md) | `components/ui/Navigation.tsx` | Site header with nav links and search |
| [ProductCard](./product-card.md) | `components/ui/ProductCard.tsx` | Coffee product with circular accent |
| [CategoryBadge](./category-badge.md) | `components/ui/CategoryBadge.tsx` | Circular flavor category badge |
| [SearchInput](./input.md) | `components/ui/SearchInput.tsx` | Search field with icon |
| [Typography](./typography.md) | `components/ui/Typography.tsx` | Typed display, heading, body primitives |

## Component Philosophy

### Server vs. Client

By default, all components are **React Server Components** (no `"use client"` directive). Only add `"use client"` when the component uses:
- React state (`useState`, `useReducer`)
- Effects (`useEffect`)
- Browser APIs
- Event handlers that need JS (simple `href` links do not need it)

`SearchInput` and `Navigation` (when it includes the search trigger) are client components. All others are server components.

### Composition over configuration

Prefer accepting `children` and `className` over prop-drilling every style variation. The `className` prop on every component allows contextual overrides without forking the component.

### Token usage

Use token-derived Tailwind utilities (`bg-cream`, `text-espresso`, `rounded-pill`) — never hardcode hex values in className strings.

## Importing

```tsx
// Named imports from each file
import { Button }        from "@/components/ui/Button";
import { Navigation }    from "@/components/ui/Navigation";
import { ProductCard }   from "@/components/ui/ProductCard";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import { SearchInput }   from "@/components/ui/SearchInput";
import { Display, Heading, Subheading, Body, Caption, Eyebrow } from "@/components/ui/Typography";
```
