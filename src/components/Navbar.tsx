"use client";

import { useEffect, useRef, useState } from "react";
import { navSections, personalInfo } from "@/data/siteData";
import { useActiveSection } from "@/hooks/useActiveSection";
import LogoBadge from "@/components/LogoBadge";

const sectionIds = navSections.map((s) => s.id);

export default function Navbar() {
  const activeId = useActiveSection(sectionIds);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastScrollY.current && y > 120);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="top-nav"
      className={`hidden md:flex fixed top-0 left-0 w-full z-[999] border-b border-accent-purple/15 bg-bg-primary/90 backdrop-blur-xl px-6 lg:px-12 py-3.5 items-center justify-between gap-4 transition-transform duration-500 ease-out ${hidden ? "-translate-y-full" : "translate-y-0"
        }`}
    >
      <a href="#home" className="flex items-center gap-2 group shrink-0">
        <LogoBadge initials={personalInfo.initials} size="sm" />
        <span className="font-display text-[10px] tracking-widest uppercase font-bold hidden lg:inline group-hover:text-accent-purple transition-colors">
          {personalInfo.name}
        </span>
      </a>

      <NavLinks activeId={activeId} />

      <div className="flex items-center gap-3 text-text-muted shrink-0">
        <a
          className="interactive p-2 rounded-full hover:text-accent-cyan hover:bg-accent-purple/10"
          href={personalInfo.socials.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
        <a
          className="interactive p-2 rounded-full hover:text-accent-cyan hover:bg-accent-purple/10"
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </nav>
  );
}

function NavLinks({ activeId }: { activeId: string }) {
  return (
    <div className="flex items-center gap-3 lg:gap-6 xl:gap-8 font-display text-[11px] lg:text-xs uppercase tracking-wider">
      {navSections.map((s) => {
        const isActive = activeId === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`interactive nav-link flex items-center gap-1 transition-colors whitespace-nowrap ${isActive ? "text-accent-purple is-active" : "text-text-muted hover:text-text-primary"
              }`}
          >
            <span className={`text-[8px] ${isActive ? "text-accent-cyan" : "opacity-50"}`}>{s.number}</span>
            {s.label}
          </a>
        );
      })}
    </div>
  );
}