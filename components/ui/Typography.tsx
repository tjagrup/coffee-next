import type { ElementType, ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Display({ children, className = "", as: Tag = "h1" }: TypographyProps) {
  return (
    <Tag
      className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-espresso ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Heading({ children, className = "", as: Tag = "h2" }: TypographyProps) {
  return (
    <Tag
      className={`font-display text-3xl md:text-4xl font-semibold leading-tight text-espresso ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Subheading({ children, className = "", as: Tag = "h3" }: TypographyProps) {
  return (
    <Tag
      className={`font-display text-xl md:text-2xl font-medium leading-snug text-bark ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Body({ children, className = "", as: Tag = "p" }: TypographyProps) {
  return (
    <Tag
      className={`font-body text-base leading-relaxed text-stone-600 ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Caption({ children, className = "", as: Tag = "p" }: TypographyProps) {
  return (
    <Tag
      className={`font-body text-sm leading-relaxed text-stone-500 ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, className = "", as: Tag = "p" }: TypographyProps) {
  return (
    <Tag
      className={`font-body text-xs font-bold tracking-[0.15em] uppercase text-mocha ${className}`}
    >
      {children}
    </Tag>
  );
}
