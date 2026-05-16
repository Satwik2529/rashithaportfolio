import { positions } from "@/data/siteData";
import SectionHeading from "@/components/SectionHeading";

export default function Positions() {
  return (
    <section id="positions" className="section-wrap">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="Leadership" title="Beyond Code" align="center" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {positions.map((pos, i) => (
            <article
              key={i}
              className="glass-card interactive-card p-6 sm:p-8 space-y-4 reveal-on-scroll rounded-2xl group"
              data-delay={String(i + 1)}
            >
              <h4 className="font-mono text-xs text-accent-cyan tracking-widest uppercase">{pos.label}</h4>
              <h3 className="font-serif text-2xl sm:text-3xl italic font-extrabold text-text-primary group-hover:text-accent-purple transition-colors">
                {pos.title}
              </h3>
              <p className="text-text-muted leading-relaxed text-sm sm:text-base">{pos.description}</p>
              <div className="w-12 h-0.5 bg-gradient-to-r from-accent-purple to-accent-cyan group-hover:w-full transition-all duration-700" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
