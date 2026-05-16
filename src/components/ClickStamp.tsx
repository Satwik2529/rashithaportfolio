"use client";

import { useEffect } from "react";
import { personalInfo } from "@/data/siteData";

const SKIP_SELECTOR =
  "a, button, input, textarea, select, label, [role='button'], .btn-primary, .btn-outline";

const SKIP_TAGS = new Set(["INPUT", "TEXTAREA", "SELECT", "OPTION"]);

export default function ClickStamp() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(SKIP_SELECTOR)) return;
      if (SKIP_TAGS.has(target.tagName)) return;
      if (target.isContentEditable) return;

      const stamp = document.createElement("div");
      stamp.className = "click-stamp";
      stamp.setAttribute("aria-hidden", "true");
      stamp.style.left = `${e.clientX}px`;
      stamp.style.top = `${e.clientY}px`;
      stamp.textContent = personalInfo.initials || "RK";

      document.body.appendChild(stamp);
      stamp.addEventListener("animationend", () => stamp.remove(), { once: true });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
