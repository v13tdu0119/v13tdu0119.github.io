"use client";

import { useSiteContent } from "@/components/providers/site-content-provider";
import { TidIssueSection, TidNewsItem } from "./tid-issue-section";

export function TidExperienceSection() {
  const { content } = useSiteContent();

  return (
    <TidIssueSection
      id="experience"
      number="02"
      label="Experience"
      title={content.experienceIntro.title}
      subtitle={content.experienceIntro.description}
    >
      {content.workExperience.map((job) => (
        <TidNewsItem
          key={job.id}
          title={job.company}
          meta={`${job.role} · ${job.period} · ${job.location}`}
        >
          {job.projects?.map((project) => (
            <div key={project.name} className="mb-4 last:mb-0">
              <p className="font-medium text-tid-cream">{project.name}</p>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-xs font-semibold uppercase tracking-wider text-tid-cream"
                >
                  Live app →
                </a>
              )}
            </div>
          ))}
          {job.highlights && (
            <ul className="list-disc space-y-1 pl-4">
              {job.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
        </TidNewsItem>
      ))}
    </TidIssueSection>
  );
}
