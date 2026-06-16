"use client";

import { useSiteContent } from "@/components/providers/site-content-provider";
import { MagDisciplineMarquee, MagReveal, MagStatsMarquee } from "./mag-motion";
import { MagSection } from "./mag-section";

export function MagPhilosophySection() {
  const { content } = useSiteContent();

  return (
    <>
      <MagDisciplineMarquee items={content.magazine.disciplines} />

      <MagSection
        id="philosophy"
        number="02"
        label="How I Think and Build"
        title="Two studies in vision and action"
        subtitle={content.magazine.philosophyIntro}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {content.magazine.philosophyStudies.map((study, i) => (
            <MagReveal key={study.code} delay={i * 100}>
              <article className="mag-study-card relative min-h-[280px] overflow-hidden border border-mag-line p-6">
                <p className="text-[10px] uppercase tracking-[0.24em] text-mag-muted">
                  {study.code} // {study.tag}
                </p>
                <h3 className="mag-display mt-6 text-2xl font-semibold">{study.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-mag-muted">{study.body}</p>
              </article>
            </MagReveal>
          ))}
        </div>
      </MagSection>

      <MagStatsMarquee metrics={content.impactMetrics} />
    </>
  );
}
