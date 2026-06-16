"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useSiteContent } from "@/components/providers/site-content-provider";
import { TidCountStat, TidHeroDecor } from "./tid-motion";
import { AVATAR_SRC, HERO_STACK, PREVIEW_SECTIONS } from "./constants";

export function TidHero() {
  const { content } = useSiteContent();

  return (
    <section id="top" className="relative scroll-mt-20 overflow-hidden px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16">
      <TidHeroDecor />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div>
          <p
            className="omni-stagger mb-6 text-xs uppercase tracking-[0.25em] text-tid-muted"
            style={{ "--omni-stagger": "80ms" } as CSSProperties}
          >
            {content.hero.badge}
          </p>

          <h1 className="tid-display leading-[0.95]">
            <span
              className="omni-stagger block text-[clamp(3rem,10vw,5.5rem)] font-bold"
              style={{ "--omni-stagger": "160ms" } as CSSProperties}
            >
              Android
            </span>
            <span
              className="omni-stagger block text-[clamp(3rem,10vw,5.5rem)] font-bold text-tid-muted/90"
              style={{ "--omni-stagger": "240ms" } as CSSProperties}
            >
              Developer
            </span>
          </h1>

          <div className="mt-8 space-y-1">
            {HERO_STACK.map((item, i) => (
              <a
                key={item.word}
                href={item.href}
                className="omni-stagger group flex items-baseline gap-3 transition-opacity hover:opacity-80"
                style={{ "--omni-stagger": `${320 + i * 70}ms` } as CSSProperties}
              >
                <span className="text-lg" aria-hidden>
                  {item.emoji}
                </span>
                <span className="tid-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold capitalize">
                  {item.word}
                </span>
              </a>
            ))}
          </div>

          <p
            className="omni-stagger tid-display mt-8 text-2xl italic text-tid-muted md:text-3xl"
            style={{ "--omni-stagger": "560ms" } as CSSProperties}
          >
            delivered clearly
          </p>

          <p
            className="omni-stagger mt-8 max-w-md text-base leading-relaxed text-tid-muted"
            style={{ "--omni-stagger": "640ms" } as CSSProperties}
          >
            {content.tagline}. {content.hero.subheadline.split(".")[0]}.
          </p>

          <div
            className="omni-stagger mt-8 flex flex-wrap gap-6 border-t border-tid-line pt-8"
            style={{ "--omni-stagger": "720ms" } as CSSProperties}
          >
            {content.heroStats.map((stat, i) => (
              <TidCountStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={i * 80}
                mode="immediate"
              />
            ))}
          </div>

          <div
            className="omni-stagger mt-8 flex flex-wrap gap-3"
            style={{ "--omni-stagger": "800ms" } as CSSProperties}
          >
            <a
              href="#projects"
              className="omni-btn rounded-full bg-tid-cream px-6 py-3 text-sm font-semibold text-tid-ink"
            >
              {content.hero.ctaPrimary}
            </a>
            <a
              href={`mailto:${content.author.email}`}
              className="omni-btn rounded-full border border-tid-line px-6 py-3 text-sm font-medium text-tid-cream"
            >
              {content.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div
          className="omni-stagger"
          style={{ "--omni-stagger": "480ms" } as CSSProperties}
        >
          <TidPreviewPanel />
        </div>
      </div>
    </section>
  );
}

function TidPreviewPanel() {
  const { content } = useSiteContent();

  return (
    <div className="tid-preview-shadow tid-preview-float relative mx-auto w-full max-w-md rotate-0 lg:rotate-1">
      <div className="overflow-hidden rounded-2xl bg-tid-paper text-tid-ink">
        <div className="border-b border-tid-paper-line px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image src={AVATAR_SRC} alt="" fill className="object-cover" sizes="40px" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{content.nickname}</p>
              <p className="truncate text-xs text-tid-muted">&lt;{content.author.email}&gt;</p>
            </div>
            <p className="text-[10px] uppercase tracking-wider text-tid-muted">Preview</p>
          </div>
        </div>

        <div className="px-5 py-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-tid-muted">
            In this portfolio
          </p>
          <div className="mt-3 space-y-2">
            {PREVIEW_SECTIONS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="flex items-center justify-between border border-tid-paper-line px-3 py-2 text-sm transition-colors hover:bg-black/[0.03]"
              >
                <span className="font-medium">{s.num}</span>
                <span className="uppercase tracking-wider">{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-tid-paper-line px-5 py-5">
          <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-widest text-tid-muted">
            <span>About</span>
            <span>01</span>
          </div>
          <h2 className="tid-display text-xl font-bold leading-snug">
            {content.hero.headline}{" "}
            <span className="underline decoration-tid-muted/40 underline-offset-4">
              {content.hero.headlineHighlight}
            </span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-tid-muted">{content.bio.slice(0, 180)}…</p>
        </div>

        <div className="border-t border-tid-paper-line px-5 py-5">
          <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-widest text-tid-muted">
            <span>Experience</span>
            <span>02</span>
          </div>
          <p className="text-sm font-semibold">{content.workExperience[0]?.company}</p>
          <p className="mt-1 text-xs text-tid-muted">{content.workExperience[0]?.role}</p>
          <p className="mt-2 text-sm leading-relaxed text-tid-muted">
            {content.featuredCaseStudy.summary.slice(0, 120)}…
          </p>
          <a href="#experience" className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider">
            Read more →
          </a>
        </div>

        <div className="border-t border-tid-paper-line bg-[#f0ebe3] px-5 py-4 text-center">
          <p className="text-xs text-tid-muted">{content.connect.hireLine}</p>
          <a
            href={`mailto:${content.author.email}`}
            className="omni-btn mt-2 inline-block rounded-full bg-tid-ink px-4 py-2 text-xs font-semibold text-tid-cream"
          >
            Open preview
          </a>
        </div>
      </div>
    </div>
  );
}
