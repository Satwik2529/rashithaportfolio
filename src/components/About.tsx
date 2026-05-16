import { personalInfo, skills } from "@/data/siteData";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-wrap relative">
      <div className="hidden lg:block absolute left-6 top-32 vertical-margin-text font-mono text-[10px] text-accent-purple/50 tracking-[0.5em] reveal-on-scroll">
        ABOUT — 02
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <AboutMain />
        <AboutSidebar />
      </div>
    </section>
  );
}

function AboutMain() {
  return (
    <div className="lg:col-span-7 space-y-6 sm:space-y-8">
      <SectionHeading number="02 — About" title="A little about me" className="!mb-0" />
      <p className="text-text-muted leading-relaxed text-base sm:text-lg reveal-on-scroll" data-delay="2">
        {personalInfo.aboutParagraph}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-4 reveal-on-scroll" data-delay="3">
        {skills.map((group) => (
          <div key={group.category} className="space-y-3">
            <h4 className="font-mono text-xs text-accent-purple uppercase tracking-widest font-bold">
              {group.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                    <span
                      key={item}
                      className="skill-tag interactive glass-card px-3 py-2 text-[11px] font-mono text-text-primary rounded-lg cursor-pointer"
                    >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutSidebar() {
  return (
    <div
      className="lg:col-span-5 bg-bg-card/80 p-6 sm:p-8 border border-accent-purple/15 relative group overflow-hidden reveal-on-scroll rounded-2xl interactive-card"
      data-delay="4"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
      <h3 className="font-display font-bold text-xl sm:text-2xl mb-6 flex items-center text-text-primary relative z-10">
        <span className="w-8 h-px bg-gradient-to-r from-accent-purple to-accent-cyan mr-4 group-hover:w-12 transition-all duration-500" />
        Background
      </h3>
      <ul className="space-y-5 font-mono text-xs relative z-10">
        {[
          { label: "EDUCATION", lines: [personalInfo.education.institution, personalInfo.education.degree] },
          { label: "LOCATION", lines: [personalInfo.location] },
          { label: "SPECIALIZATION", lines: ["Full-Stack Engineering"] },
          { label: "GPA", lines: [personalInfo.education.gpa], highlight: true },
        ].map((item) => (
          <li key={item.label} className="interactive group/item p-2 -m-2 rounded-lg hover:bg-accent-purple/5">
            <p className="text-accent-cyan mb-1 text-[10px]">{item.label}</p>
            {item.lines.map((line, i) => (
              <p
                key={i}
                className={`${item.highlight ? "font-display text-lg font-bold text-gradient" : "text-text-primary"} group-hover/item:translate-x-1 transition-transform`}
              >
                {line}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
