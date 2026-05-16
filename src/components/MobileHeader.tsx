"use client";

import { useEffect, useState } from "react";
import { navSections, personalInfo } from "@/data/siteData";
import { useActiveSection } from "@/hooks/useActiveSection";
import LogoBadge from "@/components/LogoBadge";

const sectionIds = navSections.map((s) => s.id);

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="md:hidden fixed top-0 left-0 right-0 z-[998] px-4 py-3 flex items-center justify-between border-b border-accent-purple/15 bg-bg-primary/90 backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <LogoBadge initials={personalInfo.initials} size="sm" />
        </a>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="interactive flex items-center justify-center w-11 h-11 rounded-full border border-accent-purple/30 bg-bg-card text-text-primary"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`menu-icon ${open ? "is-open" : ""}`} aria-hidden="true" />
        </button>
      </header>

      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-[1000] md:hidden transition-opacity duration-400 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav
        className={`fixed inset-x-0 top-[57px] bottom-0 z-[1001] md:hidden bg-bg-secondary/98 backdrop-blur-xl flex flex-col p-6 gap-2 overflow-y-auto transition-all duration-400 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {navSections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={() => setOpen(false)}
            className={`interactive flex items-center gap-4 p-4 rounded-xl border transition-all ${
              activeId === s.id
                ? "border-accent-purple/50 bg-accent-purple/10 text-accent-purple"
                : "border-transparent hover:border-accent-purple/20 hover:bg-bg-card"
            }`}
          >
            <span className="font-mono text-xs text-accent-cyan opacity-80">{s.number}</span>
            <span className="font-display text-lg font-bold uppercase tracking-wide">{s.label}</span>
          </a>
        ))}
        <div className="mt-auto pt-8 flex flex-wrap gap-3">
          {[
            { label: "GitHub", href: personalInfo.socials.github },
            { label: "LinkedIn", href: personalInfo.socials.linkedin },
            { label: "Email", href: `mailto:${personalInfo.email}` },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="interactive flex-1 min-w-[100px] text-center py-3 rounded-xl border border-accent-purple/20 font-mono text-[10px] uppercase tracking-widest hover:border-accent-cyan hover:text-accent-cyan transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
