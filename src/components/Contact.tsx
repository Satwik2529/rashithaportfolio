"use client";

import { useState } from "react";
import { personalInfo } from "@/data/siteData";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-wrap border-t border-accent-purple/10 relative">
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-accent-cyan/8 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start relative z-10">
        <div className="reveal-on-scroll">
          <SectionHeading
            number="06 — Contact"
            title="Let's Build Something Great"
            subtitle="Have a project in mind? I'd love to hear from you."
            className="!mb-0"
          />
        </div>

        <div className="space-y-8 sm:space-y-10 reveal-on-scroll" data-delay="2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              className="interactive glass-card p-4 sm:p-5 rounded-xl group"
              href={`mailto:${personalInfo.email}`}
            >
              <p className="font-mono text-[10px] text-accent-cyan uppercase tracking-widest mb-2">Email</p>
              <p className="text-sm sm:text-base font-display group-hover:text-accent-purple transition-colors text-text-primary break-all">
                {personalInfo.email}
              </p>
            </a>
            <a className="interactive glass-card p-4 sm:p-5 rounded-xl group" href={`tel:${personalInfo.phone}`}>
              <p className="font-mono text-[10px] text-accent-cyan uppercase tracking-widest mb-2">Phone</p>
              <p className="text-sm sm:text-base font-display group-hover:text-accent-purple transition-colors text-text-primary">
                {personalInfo.phone}
              </p>
            </a>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField id="name" label="Name" type="text" focused={focused} setFocused={setFocused} />
              <FormField id="email" label="Email" type="email" focused={focused} setFocused={setFocused} />
            </div>
            <FormTextarea focused={focused} setFocused={setFocused} />
            <button
              type="submit"
              className={`interactive w-full py-4 font-display font-bold uppercase tracking-[0.2em] text-xs btn-shine rounded-xl transition-all ${
                submitted ? "bg-accent-teal text-white" : "btn-primary"
              }`}
            >
              {submitted ? "Message Sent ✓" : "Send Message"}
            </button>
          </form>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            {[
              { label: "LinkedIn", href: personalInfo.socials.linkedin },
              { label: "GitHub", href: personalInfo.socials.github },
              { label: "LeetCode", href: personalInfo.socials.leetcode },
              { label: "CodeChef", href: personalInfo.socials.codechef },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="interactive font-mono text-[10px] text-text-muted hover:text-accent-cyan transition-colors relative group px-2 py-1"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent-cyan group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-16 sm:mt-24 pt-8 border-t border-accent-purple/10 text-center relative z-10">
        <p className="font-mono text-[10px] text-text-muted/60 uppercase tracking-widest">
          © 2026 {personalInfo.name} · Built with passion &amp; caffeine
        </p>
      </footer>
    </section>
  );
}

function FormField({
  id,
  label,
  type,
  focused,
  setFocused,
}: {
  id: string;
  label: string;
  type: string;
  focused: string | null;
  setFocused: (v: string | null) => void;
}) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-300 font-mono text-[10px] uppercase pointer-events-none z-10 ${
          focused === id ? "top-2 text-accent-cyan" : "top-4 text-text-muted"
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        className="interactive w-full bg-bg-card/50 border border-accent-purple/20 p-4 pt-7 font-mono text-xs rounded-xl focus:border-accent-cyan focus:outline-none focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)] text-text-primary transition-all"
        type={type}
        onFocus={() => setFocused(id)}
        onBlur={() => setFocused(null)}
      />
    </div>
  );
}

function FormTextarea({
  focused,
  setFocused,
}: {
  focused: string | null;
  setFocused: (v: string | null) => void;
}) {
  return (
    <div className="relative">
      <label
        htmlFor="message"
        className={`absolute left-4 transition-all duration-300 font-mono text-[10px] uppercase pointer-events-none z-10 ${
          focused === "message" ? "top-2 text-accent-cyan" : "top-4 text-text-muted"
        }`}
      >
        Message
      </label>
      <textarea
        id="message"
        className="interactive w-full bg-bg-card/50 border border-accent-purple/20 p-4 pt-7 font-mono text-xs rounded-xl focus:border-accent-cyan focus:outline-none focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)] text-text-primary resize-none transition-all"
        rows={4}
        onFocus={() => setFocused("message")}
        onBlur={() => setFocused(null)}
      />
    </div>
  );
}
