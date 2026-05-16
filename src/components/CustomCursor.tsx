"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({
    visible: false,
    clicking: false,
    hovering: false,
    onLetter: false,
  });

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isTouch) return;

    document.body.classList.add("has-custom-cursor");

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let frameId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setState((s) => ({ ...s, visible: true }));
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      frameId = requestAnimationFrame(animateRing);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const letter = target.closest(".name-char, .hover-char");
      const interactive = target.closest(
        "a, button, [role='button'], .interactive, .interactive-card, .logo-badge, .rolling-text, input, textarea"
      );
      setState((s) => ({
        ...s,
        hovering: !!interactive,
        onLetter: !!letter,
      }));
    };

    const onDown = () => setState((s) => ({ ...s, clicking: true }));
    const onUp = () => setState((s) => ({ ...s, clicking: false }));
    const onLeave = () => setState((s) => ({ ...s, visible: false }));
    const onEnter = () => setState((s) => ({ ...s, visible: true }));

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    frameId = requestAnimationFrame(animateRing);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const cls = [
    state.visible && "is-visible",
    state.clicking && "is-clicking",
    state.hovering && "is-hovering",
    state.onLetter && "is-on-letter",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div ref={dotRef} className={`custom-cursor-dot ${cls}`} aria-hidden="true" />
      <div ref={ringRef} className={`custom-cursor-ring ${cls}`} aria-hidden="true" />
    </>
  );
}
