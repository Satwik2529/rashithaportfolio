"use client";

import { useEffect, useState } from "react";

interface RollingTextProps {
  words: string[];
  intervalMs?: number;
  className?: string;
}

export default function RollingText({
  words,
  intervalMs = 3200,
  className = "",
}: RollingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  return (
    <span
      className={`role-rotator font-display font-bold ${className}`}
      aria-live="polite"
    >
      {words.map((word, i) => (
        <span
          key={word}
          className={`role-rotator__word${i === index ? " is-active" : ""}`}
          aria-hidden={i !== index}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
