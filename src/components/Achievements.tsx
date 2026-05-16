import { achievements, type Achievement } from "@/data/siteData";
import SectionHeading from "@/components/SectionHeading";

const borderTopColor: Record<string, string> = {
  "accent-coral": "border-t-accent-coral",
  "accent-teal": "border-t-accent-teal",
  "accent-purple": "border-t-accent-purple",
  "accent-electric": "border-t-accent-electric",
};

const textColor: Record<string, string> = {
  "accent-coral": "text-accent-coral",
  "accent-teal": "text-accent-teal",
  "accent-purple": "text-accent-purple",
  "accent-electric": "text-accent-electric",
};

const bgColor: Record<string, string> = {
  "accent-coral": "bg-accent-coral",
  "accent-teal": "bg-accent-teal",
  "accent-purple": "bg-accent-purple",
  "accent-electric": "bg-accent-electric",
};

const badgeBg: Record<string, string> = {
  "accent-coral": "bg-accent-coral/15",
  "accent-teal": "bg-accent-teal/15",
  "accent-purple": "bg-accent-purple/15",
  "accent-electric": "bg-accent-electric/15",
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-wrap bg-bg-accent-wash/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-48 bg-accent-purple/10 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          number="05 — Achievements"
          title="Wall of Honor"
          subtitle="Competitive programming & open-source milestones"
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {achievements.map((a, i) =>
            a.size === "large" ? <LargeCard key={i} a={a} /> : <PlatformCard key={i} a={a} />
          )}
        </div>
      </div>
    </section>
  );
}

function LargeCard({ a }: { a: Achievement }) {
  return (
    <div
      className={`sm:col-span-2 lg:row-span-2 glass-card interactive-card p-6 sm:p-8 flex flex-col justify-between border-t-4 ${borderTopColor[a.color]} relative overflow-hidden reveal-on-scroll rounded-2xl group`}
    >
      <div className="absolute -right-4 -bottom-4 font-display text-[8rem] sm:text-[12rem] font-bold text-accent-purple/5 group-hover:text-accent-purple/10 transition-colors pointer-events-none">
        01
      </div>
      <div className="relative z-10">
        <span className={`px-3 py-1 ${badgeBg[a.color]} ${textColor[a.color]} font-mono text-[10px] uppercase tracking-widest rounded-full mb-4 inline-block`}>
          {a.badge}
        </span>
        <h3 className="font-serif text-2xl sm:text-4xl mb-3 text-text-primary italic font-extrabold">{a.platform}</h3>
        <p className="text-text-muted text-sm sm:text-base">{a.description}</p>
      </div>
      {a.bigNumber && (
        <p className="mt-6 font-display text-3xl sm:text-4xl font-bold text-gradient relative z-10">{a.bigNumber}</p>
      )}
    </div>
  );
}

function PlatformCard({ a }: { a: Achievement }) {
  return (
    <div
      className={`glass-card interactive-card p-5 sm:p-6 border-t-4 ${borderTopColor[a.color]} reveal-on-scroll rounded-2xl group`}
    >
      <div className="flex justify-between items-start gap-2 mb-4">
        <h3 className="font-serif text-xl sm:text-2xl text-text-primary italic font-extrabold group-hover:text-accent-purple transition-colors">
          {a.platform}
        </h3>
        <span className={`font-mono ${textColor[a.color]} text-sm sm:text-lg font-bold shrink-0`}>
          {a.badge ?? a.title}
        </span>
      </div>
      {a.rating && <p className="text-text-muted text-xs mb-3">{a.rating}</p>}
      {a.progressPercent != null && (
        <div className="h-1.5 w-full bg-bg-primary rounded-full overflow-hidden">
          <div
            className={`h-full ${bgColor[a.color]} progress-bar-fill rounded-full`}
            style={{ width: `${a.progressPercent}%` }}
          />
        </div>
      )}
      {a.stat && <p className="mt-3 font-mono text-[10px] text-text-primary">{a.stat}</p>}
    </div>
  );
}
