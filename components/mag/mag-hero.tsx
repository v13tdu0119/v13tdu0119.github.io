"use client";

import Image from "next/image";
import { useSiteContent } from "@/components/providers/site-content-provider";
import { AVATAR_SRC } from "./constants";
import { MagCountStat, MagReveal, MagStagger } from "./mag-motion";
import { MagSection } from "./mag-section";

export function MagHero() {
  const { content } = useSiteContent();
  const { roleLine, roleEcho, introLine, proofLine } = content.magazine;

  return (
    <section id="intro" className="scroll-mt-20 px-5 pb-12 pt-10 lg:pl-56 lg:pr-12 lg:pt-16">
      <a href="#intro" className="sr-only focus:not-sr-only">
        Skip to content
      </a>

      <div className="mx-auto max-w-4xl">
        <MagStagger delayMs={60}>
          <p className="text-[10px] uppercase tracking-[0.28em] text-mag-muted">{content.magazine.volume}</p>
        </MagStagger>

        <MagStagger delayMs={120}>
          <h1 className="mag-display mt-4 text-4xl font-semibold md:text-5xl">{content.name}</h1>
        </MagStagger>

        <div className="relative mt-6 overflow-hidden">
          <MagStagger delayMs={200}>
            <p className="mag-display text-[clamp(2.5rem,8vw,5rem)] font-semibold leading-[0.95]">{roleLine}</p>
          </MagStagger>
          <MagStagger delayMs={280}>
            <p className="mag-display -mt-2 text-[clamp(2.5rem,8vw,5rem)] font-semibold leading-[0.95] text-mag-muted/35">
              {roleEcho}
            </p>
          </MagStagger>
        </div>

        <MagStagger delayMs={360}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-mag-muted">{introLine}</p>
        </MagStagger>

        <MagStagger delayMs={440}>
          <a
            href="#contact"
            className="mag-btn mt-8 inline-block border border-mag-fg px-6 py-3 text-xs font-medium uppercase tracking-[0.2em]"
          >
            {content.hero.ctaSecondary}
          </a>
        </MagStagger>

        <MagReveal className="mt-14 border-t border-mag-line pt-10" delay={80}>
          <p className="mb-6 text-[10px] uppercase tracking-[0.24em] text-mag-muted">Selected proof · Production scale</p>
          <div className="grid gap-8 sm:grid-cols-3">
            {content.impactMetrics.map((m, i) => (
              <MagCountStat key={m.label} value={m.value} label={m.label} delay={i * 80} large />
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-mag-muted">{proofLine}</p>
        </MagReveal>
      </div>
    </section>
  );
}

export function MagNowBar() {
  const { content } = useSiteContent();
  const month = new Date().toLocaleString("en-US", { month: "short", year: "2-digit" });

  return (
    <div className="border-y border-mag-line px-5 py-4 lg:pl-56 lg:pr-12">
      <div className="mx-auto flex max-w-4xl flex-wrap gap-x-8 gap-y-2 text-xs text-mag-muted">
        <span className="uppercase tracking-[0.2em] text-mag-accent">Now · {month}</span>
        {content.magazine.now.map((item) => (
          <span key={item.label}>
            <span className="uppercase tracking-wider">{item.label}</span>
            <span className="ml-2 text-mag-fg">{item.value}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function MagBackgroundSection() {
  const { content } = useSiteContent();
  const current = content.workExperience.find((w) => w.type !== "leadership");
  const mentor = content.workExperience.find((w) => w.type === "leadership");

  return (
    <MagSection
      id="background"
      number="01"
      label="Background & Working Style"
      title={content.magazine.backgroundTitle}
      subtitle={content.bio}
    >
      <MagReveal>
        <p className="text-sm leading-relaxed text-mag-muted">{content.bioExtra}</p>
      </MagReveal>

      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <MagReveal delay={120}>
          <div className="space-y-4 border-l border-mag-line pl-6">
            <p className="text-xs uppercase tracking-[0.2em] text-mag-muted">Through the years</p>
            <ol className="space-y-4">
              {content.magazine.timeline.map((item, i) => (
                <li key={item.title} className="text-sm">
                  <span className="font-mono text-mag-accent">
                    {i + 1}. {item.year}
                  </span>
                  <span className="ml-2 font-medium text-mag-fg">{item.title}</span>
                  <p className="mt-1 text-mag-muted">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </MagReveal>

        <MagReveal delay={160}>
          <div className="border border-mag-line p-5">
            <div className="relative mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border border-mag-line">
              <Image src={AVATAR_SRC} alt={content.name} fill className="object-cover" sizes="112px" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-mag-muted">Vitals · {content.magazine.volume}</p>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-mag-muted">Currently</dt>
                <dd className="mt-1 font-medium">
                  {current?.role} · {current?.company}
                </dd>
              </div>
              {mentor && (
                <div>
                  <dt className="text-[10px] uppercase tracking-wider text-mag-muted">Also</dt>
                  <dd className="mt-1">
                    {mentor.role} · {mentor.company}
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-mag-muted">Based in</dt>
                <dd className="mt-1">{content.location}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-mag-muted">Open to</dt>
                <dd className="mt-1">{content.connect.hireLine}</dd>
              </div>
            </dl>
          </div>
        </MagReveal>
      </div>
    </MagSection>
  );
}
