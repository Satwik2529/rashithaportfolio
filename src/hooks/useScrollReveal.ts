"use client";

import { useEffect } from "react";

function isInViewport(el: Element, margin = 80) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight - margin && rect.bottom > margin;
}

function revealInView() {
  document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add("is-visible");
    }
  });
  document.querySelectorAll(".progress-bar-fill").forEach((el) => {
    if (isInViewport(el, 40)) {
      el.classList.add("is-visible");
    }
  });
}

export function useScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const revealAll = () => {
      document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        el.classList.add("is-visible");
      });
      document.querySelectorAll(".progress-bar-fill").forEach((el) => {
        el.classList.add("is-visible");
      });
    };

    if (prefersReduced) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        if (!el.classList.contains("is-visible")) {
          observer.observe(el);
        }
      });

      document.querySelectorAll(".progress-bar-fill").forEach((el) => {
        if (!el.classList.contains("is-visible")) {
          progressObserver.observe(el);
        }
      });
    };

    const progressObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            progressObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    observeAll();
    revealInView();

    const onResize = () => revealInView();
    window.addEventListener("resize", onResize, { passive: true });

    const t1 = requestAnimationFrame(() => {
      revealInView();
      observeAll();
    });
    const t2 = window.setTimeout(() => {
      revealInView();
      observeAll();
    }, 150);

    return () => {
      observer.disconnect();
      progressObserver.disconnect();
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(t1);
      clearTimeout(t2);
    };
  }, []);
}
