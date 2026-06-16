"use client";

import type { ReactNode } from "react";
import { TidReveal } from "./tid-motion";

export function TidIssueSection({
  id,
  number,
  label,
  title,
  subtitle,
  children,
}: {
  id: string;
  number: string;
  label: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-tid-line px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-3xl">
        <TidReveal>
          <div className="mb-8 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.25em] text-tid-muted">
            <span>{label}</span>
            <span>{number}</span>
          </div>
        </TidReveal>

        {title && (
          <TidReveal delay={80}>
            <h2 className="tid-display mb-4 text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
          </TidReveal>
        )}
        {subtitle && (
          <TidReveal delay={160}>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-tid-muted">{subtitle}</p>
          </TidReveal>
        )}

        <TidReveal delay={240}>
          <div className="space-y-8 text-base leading-relaxed text-tid-cream/90">{children}</div>
        </TidReveal>
      </div>
    </section>
  );
}

export function TidNewsItem({
  title,
  meta,
  children,
  href,
  linkLabel = "Read more",
}: {
  title: string;
  meta?: string;
  children: ReactNode;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <article className="border-b border-tid-line pb-8 last:border-0">
      {meta && <p className="mb-2 text-xs uppercase tracking-wider text-tid-muted">{meta}</p>}
      <h3 className="tid-display text-xl font-semibold leading-snug md:text-2xl">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-tid-muted">{children}</div>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.15em] text-tid-cream transition-opacity hover:opacity-80"
        >
          {linkLabel} →
        </a>
      )}
    </article>
  );
}
