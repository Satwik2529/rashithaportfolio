"use client";

import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.querySelector<HTMLElement>(".scroll-progress");
    const frame = document.querySelector<HTMLElement>(".viewport-frame");
    if (!bar) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${progress}%`;
      frame?.classList.toggle("is-scrolled", scrollTop > 48);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
