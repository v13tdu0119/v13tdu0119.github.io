"use client";

import { useSiteContent } from "@/components/providers/site-content-provider";
import { TidReveal } from "./tid-motion";
import { TidIssueSection, TidNewsItem } from "./tid-issue-section";

export function TidProjectsSection() {
  const { content } = useSiteContent();
  const featured = content.projects.filter((p) => p.featured);
  const more = content.projects.filter((p) => !p.featured);

  return (
    <TidIssueSection
      id="projects"
      number="03"
      label="Projects"
      title={content.projectsIntro.title}
      subtitle={content.projectsIntro.description}
    >
      {featured.length > 0 && (
        <TidReveal delay={80}>
          <div className="-mx-5 mb-10 md:-mx-8">
            <div className="omni-scroll-x flex gap-4 overflow-x-auto px-5 pb-2 md:px-8">
              {featured.map((project) => (
                <a
                  key={project.slug}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="omni-scroll-item omni-btn group min-w-[min(85vw,320px)] flex-shrink-0 rounded-2xl border border-tid-line bg-tid-surface p-6 transition-colors hover:border-tid-muted/40"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-tid-muted">
                    {project.tags.slice(0, 2).join(" · ")}
                  </p>
                  <h3 className="tid-display mt-3 text-xl font-semibold leading-snug group-hover:underline">
                    {project.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-tid-muted">
                    {project.description}
                  </p>
                  <span className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.15em] text-tid-cream">
                    GitHub →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </TidReveal>
      )}

      {more.length > 0 && (
        <>
          <p className="pt-4 text-xs uppercase tracking-[0.2em] text-tid-muted">More projects</p>
          {more.map((project) => (
            <TidNewsItem
              key={project.slug}
              title={project.title}
              meta={project.tags.join(" · ")}
              href={project.github}
              linkLabel="GitHub"
            >
              {project.description}
            </TidNewsItem>
          ))}
        </>
      )}

      <p className="text-xs text-tid-muted">{content.projectsIntro.footnote}</p>
    </TidIssueSection>
  );
}
