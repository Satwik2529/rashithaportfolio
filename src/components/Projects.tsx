"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/siteData";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section-wrap overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="03 — Portfolio"
          title="The Stage"
          subtitle="Hover or click a project to explore details"
        />
        <div className="-mx-4 sm:mx-0">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              isExpanded={expandedIndex === index}
              onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  isExpanded,
  onToggle,
}: {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const showDetails = isExpanded || isHovered;

  return (
    <article
      className={`border-y border-accent-purple/15 relative py-8 sm:py-12 px-4 sm:px-6 lg:px-12 transition-all duration-300 ${showDetails ? "bg-bg-accent-wash/50" : ""
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Header - Click to expand */}
      <div
        onClick={onToggle}
        className="cursor-pointer pr-10 sm:pr-14"
      >
        <span className="font-mono text-[10px] text-accent-cyan uppercase tracking-widest">
          {project.index} / {project.label}
        </span>
        <h3 className="project-title font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] text-text-primary mt-2 transition-colors hover:text-accent-purple">
          {project.name}
        </h3>
        <p className="font-mono text-xs text-text-muted max-w-md mt-3">
          {project.tagline}
        </p>
      </div>

      {/* Expand/Collapse Button */}
      <button
        type="button"
        className={`absolute right-4 sm:right-8 top-8 sm:top-12 font-mono text-2xl transition-all duration-300 ${showDetails ? "rotate-45 text-accent-cyan" : "text-accent-purple/40"
          }`}
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? `Collapse ${project.name}` : `Expand ${project.name}`}
      >
        +
      </button>

      {/* Project Details - Visible on hover or when expanded */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${showDetails
          ? "max-h-[1000px] opacity-100 mt-8"
          : "max-h-0 opacity-0"
          }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 text-text-muted">
          {/* Left Column - Details */}
          <div>
            <p className="mb-4 text-text-primary/90 text-sm sm:text-base">
              {project.highlights[0]}
            </p>
            <ul className="space-y-2 text-sm">
              {project.highlights.slice(1).map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-accent-cyan shrink-0">→</span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="glass-card text-[10px] px-2.5 py-1 font-mono rounded-lg"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 font-display text-sm uppercase tracking-widest text-white rounded-xl bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-electric bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-300 shadow-lg hover:shadow-accent-purple/50"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 font-display text-sm uppercase tracking-widest rounded-xl border-2 border-accent-purple/50 text-text-primary hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
