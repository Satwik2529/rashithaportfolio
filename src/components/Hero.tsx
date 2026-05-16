"use client";

import { personalInfo } from "@/data/siteData";
import RollingText from "@/components/RollingText";
import RollingName from "@/components/RollingName";
import SplitLetters from "@/components/SplitLetters";
import LogoBadge from "@/components/LogoBadge";

const ROLE_WORDS = ["Full-Stack", "AI/ML"];

const HIGHLIGHTS = [
  { label: personalInfo.education.gpa, sub: "GPA" },
  { label: "MERN", sub: "Stack" },
  { label: personalInfo.location.split(",")[0].trim(), sub: "Location" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section hero-interactive relative min-h-[calc(100dvh-57px)] md:min-h-[calc(100dvh-68px)] flex items-center overflow-hidden"
    >
      <div className="hero-glow" aria-hidden="true" />

      <div className="section-wrap w-full max-w-7xl mx-auto py-10 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-accent-purple/25 bg-bg-card/60 px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-text-muted">
                Open to internships &amp; collaborations
              </span>
            </div>

            <p className="section-label reveal mb-3" style={{ animationDelay: "0.05s" }}>
              <SplitLetters text="Hi, I'm" variant="label" />
            </p>

            <div className="reveal" style={{ animationDelay: "0.1s" }}>
              <RollingName name={personalInfo.name} className="text-center lg:text-left" />
            </div>

            <p
              className="hero-tagline mt-6 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed reveal"
              style={{ animationDelay: "0.18s" }}
            >
              <span className="text-text-muted">A </span>
              <RollingText words={ROLE_WORDS} />
              <span className="text-text-primary font-medium">
                {" "}
                developer building real-world web apps.
              </span>
            </p>

            <ul
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 reveal list-none p-0 m-0"
              style={{ animationDelay: "0.26s" }}
            >
              {HIGHLIGHTS.map((item) => (
                <li key={item.sub} className="hero-chip interactive">
                  <span className="font-mono text-[9px] text-accent-cyan uppercase tracking-wider">
                    {item.sub}
                  </span>
                  <span className="font-display font-semibold text-sm text-text-primary">{item.label}</span>
                </li>
              ))}
            </ul>

            <div
              className="mt-10 flex flex-col sm:flex-row flex-wrap items-center gap-3 justify-center lg:justify-start reveal"
              style={{ animationDelay: "0.34s" }}
            >
              <a href="#projects" className="btn-primary btn-shine interactive text-center w-full sm:w-auto">
                View my work
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline btn-shine interactive text-center w-full sm:w-auto"
              >
                Download resume
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-accent-cyan hover:text-text-primary transition-colors interactive sm:ml-1"
              >
                Get in touch →
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center reveal mb-6 lg:mb-0" style={{ animationDelay: "0.12s" }}>
            <div className="hero-visual-wrap w-full max-w-[220px] sm:max-w-[280px] lg:max-w-[340px]">
              <LogoBadge initials={personalInfo.initials} size="hero" variant="minimal" />
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="hero-scroll-hint interactive hidden sm:flex mx-auto lg:mx-0 lg:ml-0 mt-4"
          aria-label="Scroll to about"
        >
          <SplitLetters text="Explore" variant="muted" />
        </a>
      </div>
    </section>
  );
}
