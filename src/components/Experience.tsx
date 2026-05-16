import { experience } from "@/data/siteData";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-wrap relative overflow-hidden">
      <div className="hidden lg:block absolute right-6 top-32 vertical-margin-text font-mono text-[10px] text-accent-purple/50 tracking-[0.5em] reveal-on-scroll">
        EXPERIENCE — 04
      </div>
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="04 — Experience" title="Professional Path" />
        <div className="relative border-l border-accent-purple/25 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-8 sm:space-y-12">
          {experience.map((entry, idx) => (
            <article key={idx} className="relative reveal-on-scroll interactive-card" data-delay={String(idx + 1)}>
              <div className="absolute -left-[29px] sm:-left-[37px] top-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-accent-purple border-4 border-bg-primary hover:ring-4 hover:ring-accent-purple/30 transition-all" />
              <div className="glass-card p-5 sm:p-8 group rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-text-primary group-hover:text-accent-purple transition-colors">
                      {entry.title}
                    </h3>
                    <p className="text-accent-cyan font-mono text-xs sm:text-sm tracking-widest mt-1">{entry.company}</p>
                  </div>
                  <span className="text-[10px] font-mono text-text-muted uppercase py-1.5 px-3 border border-accent-purple/20 rounded-full self-start bg-bg-accent-wash">
                    {entry.dates}
                  </span>
                </div>
                <ul className="space-y-3 text-text-muted text-sm leading-relaxed">
                  {entry.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 group/bullet">
                      <span className="text-accent-purple mt-0.5 group-hover/bullet:text-accent-cyan transition-colors">▹</span>
                      <span className="group-hover/bullet:text-text-primary transition-colors">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
