"use client";

import { useState, type FormEvent } from "react";

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export function SearchInput({
  placeholder = "Search coffees, drinks…",
  onSearch,
  className = "",
}: SearchInputProps) {
  const [query, setQuery] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearch?.(query.trim());
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className={`relative flex items-center ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute left-3.5 text-stone-400 pointer-events-none flex items-center"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM19 19l-4.35-4.35"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full pl-10 pr-4 py-2.5 bg-cream-light border border-stone-300 rounded-pill font-body text-sm text-espresso placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral transition-all duration-200"
      />
    </form>
  );
}
