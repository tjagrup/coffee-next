# Style Guide

## Color Palette

The palette is built around a warm cream ground with four accent "flavors" pulled from the reference design. Each flavor maps to a coffee/café category and can be used for backgrounds, icons, or accents.

### Ground Colors

| Name | Token | Hex | Use |
|---|---|---|---|
| Cream | `--color-cream` | `#F5F0E8` | Primary background |
| Cream Light | `--color-cream-light` | `#FDFAF5` | Card, input backgrounds |
| Cream Dark | `--color-cream-dark` | `#EAE0D0` | Dividers, hover states |

### Coffee Darks

| Name | Token | Hex | Use |
|---|---|---|---|
| Espresso | `--color-espresso` | `#1C1009` | Primary text, headings, primary buttons |
| Bark | `--color-bark` | `#4A2C1C` | Button hover state, links |
| Mocha | `--color-mocha` | `#7A4E35` | Secondary text, subheadings |
| Latte | `--color-latte` | `#B8896A` | Disabled states, decorative |

### Accent: Coral (Coffee)

Warm, energetic. Used for the Coffee category badge and primary CTA accents.

| Name | Token | Hex |
|---|---|---|
| Coral | `--color-coral` | `#E07A5F` |
| Coral Light | `--color-coral-light` | `#EDAA96` |
| Coral Dark | `--color-coral-dark` | `#C45A42` |

### Accent: Amber (Drinks)

Golden, inviting. Used for the Drinks category and warm highlights.

| Name | Token | Hex |
|---|---|---|
| Amber | `--color-amber` | `#D4A574` |
| Amber Light | `--color-amber-light` | `#E8C8A0` |
| Amber Dark | `--color-amber-dark` | `#B07A46` |

### Accent: Rose (Tea)

Soft, delicate. Used for the Tea category badge.

| Name | Token | Hex |
|---|---|---|
| Rose | `--color-rose` | `#C97D9A` |
| Rose Light | `--color-rose-light` | `#DFA5C2` |
| Rose Dark | `--color-rose-dark` | `#A0587A` |

### Accent: Sage (Bakery)

Fresh, grounding. Used for the Bakery category badge.

| Name | Token | Hex |
|---|---|---|
| Sage | `--color-sage` | `#7FAF8E` |
| Sage Light | `--color-sage-light` | `#A8D0B8` |
| Sage Dark | `--color-sage-dark` | `#5A8A6E` |

### Stone Neutrals

A full warm-neutral scale for text, borders, and UI structure.

| Step | Token | Hex |
|---|---|---|
| 50 | `--color-stone-50` | `#FDFAF7` |
| 100 | `--color-stone-100` | `#F5F0E8` |
| 200 | `--color-stone-200` | `#EAE0D0` |
| 300 | `--color-stone-300` | `#D5C4AE` |
| 400 | `--color-stone-400` | `#B09880` |
| 500 | `--color-stone-500` | `#8A7060` |
| 600 | `--color-stone-600` | `#665248` |
| 700 | `--color-stone-700` | `#4A3830` |
| 800 | `--color-stone-800` | `#2E2018` |
| 900 | `--color-stone-900` | `#1C1009` |

### Color Usage Rules

- **Never** use accent colors at full saturation on large backgrounds — use their `/20` opacity variants for fills
- **Always** pair a dark accent (e.g. `coral-dark`) with text on light accent backgrounds to maintain contrast
- **Do not** mix more than two accent flavors in a single section

---

## Typography

### Fonts

**Display: Fraunces** — a variable serif with optical size axis (opsz), softness (SOFT), and wonkiness (WONK). Evokes warmth, editorial confidence, and craft. Used for all headings.

**Body: DM Sans** — geometric, highly legible sans-serif. Clean pairing to Fraunces. Used for all UI text, labels, and body copy.

### Type Scale

| Role | Class | Size | Weight | Font | Line Height |
|---|---|---|---|---|---|
| Display | `font-display text-5xl md:text-6xl lg:text-7xl font-bold` | 48–72px | 700 | Fraunces | 1.05 |
| Heading | `font-display text-3xl md:text-4xl font-semibold` | 30–36px | 600 | Fraunces | 1.2 |
| Subheading | `font-display text-xl md:text-2xl font-medium` | 20–24px | 500 | Fraunces | 1.3 |
| Body | `font-body text-base` | 16px | 400 | DM Sans | 1.6 |
| Small | `font-body text-sm` | 14px | 400 | DM Sans | 1.5 |
| Caption | `font-body text-xs` | 12px | 400 | DM Sans | 1.4 |
| Eyebrow | `font-body text-xs font-bold tracking-[0.15em] uppercase` | 12px | 700 | DM Sans | — |
| Price | `font-body text-lg font-medium` | 18px | 500 | DM Sans | — |
| Label | `font-body text-sm font-medium` | 14px | 500 | DM Sans | — |

### Typography Rules

- Headlines use Fraunces — always. Never DM Sans for h1–h3.
- Body copy stays at 16px minimum (never smaller than 14px for legible text).
- Line length: 60–75 characters maximum for reading comfort.
- Eyebrow labels use `tracking-[0.15em]` — the wide tracking is a signature detail.

---

## Spacing

Tailwind's default spacing scale (4px base) is used. Key custom spacings are defined as tokens where needed.

| Visual Step | Size | Use |
|---|---|---|
| XS | 4px (1) | Tight internal padding |
| SM | 8px (2) | Icon margins, inline gaps |
| MD | 16px (4) | Default padding, gap |
| LG | 24px (6) | Card padding |
| XL | 32px (8) | Section padding |
| 2XL | 48px (12) | Large section gaps |
| 3XL | 64px (16) | Hero padding |
| 4XL | 96px (24) | Page-level spacing |

### Layout

- Max content width: `max-w-7xl` (1280px) with `mx-auto px-6`
- Nav height: `h-16` (64px)
- Card min-width: `min-w-[200px]`
- Product grid: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3` with `gap-6`

---

## Shape Language

All shapes are soft and organic — no hard 90° corners on interactive elements.

| Element | Radius Token | Value |
|---|---|---|
| Buttons, inputs, tags | `rounded-pill` | 9999px |
| Cards, panels | `rounded-card` | 1.5rem (24px) |
| Badges, chips | `rounded-badge` | 0.75rem (12px) |
| Category badges | `rounded-full` | 50% |
| Product circles | `rounded-full` | 50% |

---

## Shadows

Three shadow levels use warm espresso-tinted shadows (no cold gray shadows).

| Token | Value | Use |
|---|---|---|
| `shadow-card` | `0 2px 12px rgba(28,16,9,.08), 0 1px 4px rgba(28,16,9,.06)` | Resting card state |
| `shadow-warm` | `0 4px 24px -4px rgba(28,16,9,.12)` | Hover lift, focused elements |
| `shadow-warm-lg` | `0 12px 40px -8px rgba(28,16,9,.18)` | Modals, elevated panels |

---

## Motion

Motion should feel warm and organic — never mechanical or abrupt.

| Property | Value | Use |
|---|---|---|
| Duration (quick) | `duration-200` | Hover states, color changes |
| Duration (standard) | `duration-300` | Transforms, reveals |
| Duration (enter) | `duration-500` | Page-level transitions |
| Easing (smooth) | `ease-smooth` — `cubic-bezier(0.4, 0, 0.2, 1)` | Most transitions |
| Easing (spring) | `ease-spring` — `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Hover scale, bounce |

### Motion Rules

- Hover lifts: `hover:-translate-y-1` (4px) on cards
- Hover scales: `hover:scale-110` on category badges
- Fade-ins: stagger children with `animation-delay` for list reveals
- Focus rings: `focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2`

---

## Iconography

The design uses emoji for category icons (☕ 🧃 🍵 🧁) in the reference. In production, use an SVG icon set (e.g. Lucide React or Phosphor Icons) at 20–24px. Apply `text-current` so icon color inherits from the parent text color.

### Search Icon (used in Navigation and SearchInput)

```svg
<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM19 19l-4.35-4.35"
    stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

---

## Focus & Accessibility

- All interactive elements expose a visible focus ring using `focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2`
- Focus offset background: `focus-visible:ring-offset-cream` on light surfaces
- Minimum touch target: 44×44px (`min-w-11 min-h-11`) for all clickable elements
- Color contrast: espresso (`#1C1009`) on cream (`#F5F0E8`) = 14:1 — exceeds WCAG AAA
- Coral (`#E07A5F`) on white: 3.1:1 — use for decorative only, not text at small sizes
