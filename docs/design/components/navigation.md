# Navigation

**File:** `components/ui/Navigation.tsx`
**Type:** Client Component (`"use client"` — search trigger uses state)

The sticky site header with the logo, nav links, and a search icon trigger. Implements a frosted-glass effect on scroll using `bg-cream/80 backdrop-blur-sm`.

## Anatomy

```
┌────────────────────────────────────────────────────────────────────┐
│  ☕ Onea.    Home  Shop  Vendor  Pages  Blog                   🔍  │
│  [logo]     [nav items — hidden on mobile]              [search]   │
└────────────────────────────────────────────────────────────────────┘
  └─ sticky top-0, z-index: var(--z-nav) = 100
     height: 64px (h-16)
     max-width: 1280px (max-w-7xl) centered with px-6
     border-bottom: 1px solid cream-dark
```

## Props

```ts
interface NavItem {
  label: string;
  href: string;
}

interface NavigationProps {
  logo?: React.ReactNode;       // default: "☕ Onea." in font-display
  items?: NavItem[];            // default: Home, Shop, Vendor, Pages, Blog
  onSearchClick?: () => void;   // called when the 🔍 button is clicked
}
```

## Usage

```tsx
import { Navigation } from "@/components/ui/Navigation";

// Default — uses built-in logo and nav items
<Navigation />

// Custom search handler
<Navigation onSearchClick={() => setSearchOpen(true)} />

// Custom logo
<Navigation logo={<Image src="/logo.svg" alt="Onea" width={80} height={32} />} />

// Custom nav items
<Navigation
  items={[
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]}
/>
```

## States

| Element | Default | Hover |
|---|---|---|
| Nav link | `text-stone-600` | `text-espresso` + coral underline slides in |
| Search button | `text-stone-500` | `text-espresso`, `bg-cream-dark` |

### Underline animation

Nav links use a pseudo-element underline that slides from left to right on hover:
```css
/* via Tailwind arbitrary variant */
after:absolute after:bottom-0 after:left-0
after:w-0 after:h-px after:bg-coral
after:transition-all after:duration-300
hover:after:w-full
```

## Responsive

- Desktop (md+): Full nav items visible in a horizontal row
- Mobile: Nav items hidden (`hidden md:flex`). A hamburger menu trigger should be added to extend for mobile (not included in the base component — extend with a `mobileMenu` slot prop).

## Accessibility

- `<header>` wrapping element with `<nav>` inside
- Logo: `aria-label="Go to homepage"` if using a link wrapper
- Search button: `aria-label="Open search"`
- Nav links: native `<a>` elements — keyboard accessible by default
