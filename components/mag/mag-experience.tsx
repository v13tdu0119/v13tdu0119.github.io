"use client";

import { useSiteContent } from "@/components/providers/site-content-provider";
import { ROMAN } from "./constants";
import { MagReveal } from "./mag-motion";
import { MagSection } from "./mag-section";

export function MagExperienceSection() {
  const { content } = useSiteContent();
  const jobs = content.workExperience.filter((w) => w.type !== "leadership");

  return (
    <MagSection
      id="experience"
      number="03"
      label="Engineering Experience"
      title={content.experienceIntro.title}
      subtitle={content.experienceIntro.description}
    >
      <div className="space-y-6">
        {jobs.map((job, index) => (
          <MagReveal key={job.id} delay={index * 80}>
            <article className="border border-mag-line">
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-mag-line px-5 py-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-mag-accent">{ROMAN[index] ?? String(index + 1)}</span>
                  <div>
                    <h3 className="mag-display text-xl font-semibold">{job.role}</h3>
                    <p className="text-sm text-mag-muted">
                      {job.company} · {job.location}
                    </p>
                  </div>
                </div>
                <p className="text-xs uppercase tracking-wider text-mag-muted">{job.period}</p>
              </div>

              <div className="space-y-6 px-5 py-6">
                {job.projects?.map((project) => (
                  <div key={project.name}>
                    <h4 className="font-medium text-mag-fg">{project.name}</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-mag-muted">
                      {project.highlights.map((h) => (
                        <li key={h} className="border-l border-mag-line pl-4">
                          {h}
                        </li>
                      ))}
                    </ul>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-block text-xs uppercase tracking-wider text-mag-accent hover:underline"
                      >
                        View on Play Store →
                      </a>
                    )}
                  </div>
                ))}

                {job.highlights?.map((h) => (
                  <p key={h} className="border-l border-mag-line pl-4 text-sm leading-relaxed text-mag-muted">
                    {h}
                  </p>
                ))}
              </div>
            </article>
          </MagReveal>
        ))}
      </div>
    </MagSection>
  );
}
