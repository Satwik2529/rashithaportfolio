"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const handleScroll = () => {
      let current = sectionIds[0] ?? "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const { top, height } = el.getBoundingClientRect();
          // Mark as active if upper third is visible
          if (top <= window.innerHeight / 3 && top + height > 0) {
            current = id;
          }
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeId;
}
