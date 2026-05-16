"use client";

import { useEffect } from "react";

function updateSpot(card: HTMLElement, e: MouseEvent) {
  const rect = card.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  card.style.setProperty("--spot-x", `${x}%`);
  card.style.setProperty("--spot-y", `${y}%`);
}

export default function CardSpotlight() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isTouch) return;

    let activeCard: HTMLElement | null = null;

    const onMove = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>(".interactive-card");
      if (card === activeCard) {
        if (card) updateSpot(card, e);
        return;
      }

      if (activeCard) {
        activeCard.classList.remove("is-spotlight");
        activeCard = null;
      }

      if (card) {
        activeCard = card;
        card.classList.add("is-spotlight");
        updateSpot(card, e);
      }
    };

    const onLeave = (e: MouseEvent) => {
      const related = e.relatedTarget as Node | null;
      if (activeCard && related && activeCard.contains(related)) return;
      if (activeCard) {
        activeCard.classList.remove("is-spotlight");
        activeCard = null;
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseout", onLeave);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseout", onLeave);
      activeCard?.classList.remove("is-spotlight");
    };
  }, []);

  return null;
}
