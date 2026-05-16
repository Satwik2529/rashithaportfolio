"use client";

import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Positions from "@/components/Positions";
import Contact from "@/components/Contact";

const SECTIONS = [
  { id: "home", Component: Hero },
  { id: "about", Component: About },
  { id: "projects", Component: Projects },
  { id: "experience", Component: Experience },
  { id: "achievements", Component: Achievements },
  { id: "positions", Component: Positions },
  { id: "contact", Component: Contact },
] as const;

export default function Home() {
  useScrollReveal();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  return (
    <main className="relative z-0">
      {SECTIONS.map(({ id, Component }) => (
        <Component key={id} />
      ))}
    </main>
  );
}
