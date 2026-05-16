"use client";

import { useRef, useState } from "react";

interface LogoBadgeProps {
  initials: string;
  size?: "sm" | "hero";
  variant?: "full" | "minimal";
  className?: string;
  onActivate?: () => void;
}

export default function LogoBadge({
  initials,
  size = "hero",
  variant = "full",
  className = "",
  onActivate,
}: LogoBadgeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * (size === "sm" ? 8 : 14), y: -y * (size === "sm" ? 8 : 14) });
  };

  const handleLeave = () => setTilt({ x: 0, y: 0 });

  const handleClick = () => {
    setClicked(true);
    onActivate?.();
    setTimeout(() => setClicked(false), 650);
  };

  if (size === "sm") {
    return (
      <span
        ref={ref}
        onClick={handleClick}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`logo-badge logo-badge-sm interactive inline-flex ${clicked ? "is-clicked" : ""} ${className}`}
        style={{
          transform: `perspective(400px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
      >
        <span className="logo-badge-sm-inner font-display font-bold border-2 border-accent-purple px-1.5 leading-none text-gradient">
          {initials}
        </span>
        <span className="logo-spark" aria-hidden="true" />
      </span>
    );
  }

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`logo-badge logo-badge-hero ${variant === "minimal" ? "logo-badge-minimal" : ""} interactive relative w-full aspect-square transition-transform duration-200 ease-out ${clicked ? "is-clicked" : ""} ${className}`}
      style={{
        transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
      }}
    >
      <span className="logo-ring-outer animate-spin-slow" aria-hidden="true" />
      {variant === "full" ? <span className="logo-ring-inner" aria-hidden="true" /> : null}
      <span className="logo-badge-core inset-2 sm:inset-3">
        <span className="logo-initials text-gradient font-display font-bold text-4xl sm:text-5xl lg:text-6xl">
          {initials}
        </span>
      </span>
      {variant === "full"
        ? [0, 1, 2, 3].map((i) => (
            <span key={i} className="logo-orbit-dot" style={{ ["--orbit-i" as string]: i }} aria-hidden="true" />
          ))
        : null}
      <span className="logo-spark" aria-hidden="true" />
    </div>
  );
}

