# SearchInput

**File:** `components/ui/SearchInput.tsx`
**Type:** Client Component (`"use client"` — uses `useState`)

A pill-shaped search input with an icon prefix. Used in the navigation search overlay and standalone search pages.

## Anatomy

```
╭─────────────────────────────────────────────────────╮
│  🔍  Search coffees, drinks…                        │
╰─────────────────────────────────────────────────────╯
  └─ rounded-pill
     bg-cream-light
     border: 1px solid stone-300
     focus: ring-2 ring-coral border-coral
```

## Props

```ts
interface SearchInputProps {
  placeholder?: string;              // default: "Search coffees, drinks…"
  onSearch?: (query: string) => void; // called on form submit
  className?: string;                // additional classes for the form element
}
```

## Usage

```tsx
import { SearchInput } from "@/components/ui/SearchInput";

// Basic
<SearchInput onSearch={(q) => console.log(q)} />

// Custom placeholder
<SearchInput placeholder="Find your perfect brew…" onSearch={handleSearch} />

// Full-width in a search overlay
<div className="max-w-lg mx-auto">
  <SearchInput
    placeholder="What are you looking for?"
    onSearch={handleSearch}
    className="w-full"
  />
</div>
```

## Behavior

- The input is a controlled component — value tracked with `useState`
- Form submit (Enter key or button) calls `onSearch` with the trimmed query
- The search icon is decorative (`aria-hidden`) — not a submit button

## States

| State | Visual |
|---|---|
| Default | `border-stone-300`, icon `text-stone-400` |
| Focus | `ring-2 ring-coral border-coral` |
| Typing | Cursor `text-espresso`, placeholder fades |

## Text Input (General)

For non-search text inputs (form fields, etc.), apply these base classes:

```tsx
<input
  className="
    w-full px-4 py-2.5
    bg-cream-light border border-stone-300 rounded-card
    font-body text-base text-espresso placeholder:text-stone-400
    focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral
    transition-all duration-200
  "
/>
```

Note: General text inputs use `rounded-card` (24px) rather than `rounded-pill` to distinguish them from buttons.

## Accessibility

- `<form>` wrapping element with `onSubmit` handler — supports Enter-key submission
- Input has `type="search"` — browsers provide a clear button automatically
- Placeholder text alone is not a label — add a visible `<label>` or `aria-label` in production forms
