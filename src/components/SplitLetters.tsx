"use client";

import type { ElementType } from "react";

interface SplitLettersProps {
  text: string;
  as?: ElementType;
  className?: string;
  variant?: "default" | "label" | "muted" | "gradient";
}

export default function SplitLetters({
  text,
  as: Tag = "span",
  className = "",
  variant = "default",
}: SplitLettersProps) {
  return (
    <Tag className={`split-letters split-letters--${variant} ${className}`.trim()}>
      {text.split("").map((char, i) => (
        <span
          key={`${char}-${i}`}
          className={`hover-char hover-char--${variant}${char === " " ? " hover-char--space" : ""}`}
          style={{ animationDelay: `${i * 0.025}s` }}
          aria-hidden={char === " "}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
}
