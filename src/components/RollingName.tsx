"use client";

interface RollingNameProps {
  name: string;
  className?: string;
}

export default function RollingName({ name, className = "" }: RollingNameProps) {
  const parts = name.trim().split(/\s+/);

  return (
    <h1
      className={`font-display font-bold text-[clamp(2.5rem,9vw,5.5rem)] leading-[1.02] tracking-tight ${className}`}
    >
      {parts.map((part, partIndex) => (
        <span
          key={part}
          className={`block name-line${partIndex > 0 ? " name-line--light" : ""}`}
        >
          {part.split("").map((char, charIndex) => {
            const delay = partIndex * 0.35 + charIndex * 0.04;
            return (
              <span
                key={`${part}-${charIndex}`}
                className="name-char interactive"
                style={{ animationDelay: `${delay}s` }}
                aria-hidden={char === " "}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
