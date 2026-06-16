"use client";

import { useSiteContent } from "@/components/providers/site-content-provider";
import { TidIssueSection, TidNewsItem } from "./tid-issue-section";

export function TidCaseStudySection() {
  const { content } = useSiteContent();
  const study = content.featuredCaseStudy;

  return (
    <TidIssueSection
      id="case-study"
      number="—"
      label="Shipped"
      title={study.title}
      subtitle={`${study.company} · ${study.period}`}
    >
      <p className="text-tid-cream">{study.summary}</p>
      <p className="text-sm text-tid-muted">{study.problem}</p>
      <ul className="list-disc space-y-2 pl-4 text-sm text-tid-muted">
        {study.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 pt-2">
        {study.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-tid-line px-3 py-1 text-xs uppercase tracking-wider text-tid-muted"
          >
            {tech}
          </span>
        ))}
      </div>
      {study.playStoreUrl && (
        <a
          href={study.playStoreUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-full bg-tid-cream px-5 py-2.5 text-sm font-semibold text-tid-ink"
        >
          {study.playStoreLabel}
        </a>
      )}
    </TidIssueSection>
  );
}
