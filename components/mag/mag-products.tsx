"use client";

import { useSiteContent } from "@/components/providers/site-content-provider";
import { MagReveal } from "./mag-motion";
import { MagSection } from "./mag-section";

export function MagProductsSection() {
  const { content } = useSiteContent();
  const featured = content.projects.filter((p) => p.featured);
  const more = content.projects.filter((p) => !p.featured);

  return (
    <MagSection
      id="products"
      number="04"
      label="Independent Products"
      title={content.projectsIntro.title}
      subtitle={content.projectsIntro.description}
    >
      <div className="space-y-8">
        {featured.map((project, i) => (
          <MagReveal key={project.slug} delay={i * 80}>
            <article className="grid gap-6 border border-mag-line md:grid-cols-[120px_1fr]">
              <div className="flex flex-col justify-between border-b border-mag-line p-5 md:border-b-0 md:border-r">
                <p className="font-mono text-sm text-mag-accent">B.{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-mag-muted">Plate {String.fromCharCode(73 + i)}</p>
              </div>
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-mag-muted">{project.tags.join(" · ")}</p>
                <h3 className="mag-display mt-2 text-2xl font-semibold">{project.title}</h3>
                <blockquote className="mt-4 border-l-2 border-mag-accent pl-4 text-sm italic text-mag-muted">
                  {project.description}
                </blockquote>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mag-btn mt-5 inline-block text-xs uppercase tracking-[0.18em] text-mag-fg hover:text-mag-accent"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </article>
          </MagReveal>
        ))}
      </div>

      {more.length > 0 && (
        <MagReveal delay={120}>
          <div className="border-t border-mag-line pt-8">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-mag-muted">More in the build log</p>
            <ul className="space-y-3 text-sm">
              {more.map((p) => (
                <li key={p.slug} className="flex flex-wrap items-baseline justify-between gap-2 border-b border-mag-line pb-3">
                  <span className="font-medium">{p.title}</span>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="text-mag-muted hover:text-mag-fg">
                      GitHub →
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </MagReveal>
      )}

      <p className="text-xs text-mag-muted">{content.projectsIntro.footnote}</p>
    </MagSection>
  );
}
