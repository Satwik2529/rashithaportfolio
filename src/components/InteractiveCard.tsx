"use client";

import type { ReactNode } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

/** Card wrapper — spotlight glow is applied globally via CardSpotlight + .interactive-card */
export default function InteractiveCard({
  children,
  className = "",
  onClick,
}: InteractiveCardProps) {
  return (
    <div
      className={`interactive-card glass-card ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
