"use client";

import { useEffect, useState } from "react";
import { useCountUp } from "@/hooks/use-count-up";
import { useInView } from "@/hooks/use-in-view";
import type { CSSProperties, ReactNode } from "react";

export function MagReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`mag-reveal ${inView ? "mag-reveal-visible" : ""} ${className}`}
      style={{ "--mag-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function MagCountStat({
  value,
  label,
  delay = 0,
  large = false,
}: {
  value: string;
  label: string;
  delay?: number;
  large?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const display = useCountUp(value, inView);

  return (
    <div
      ref={ref}
      className={`mag-reveal ${inView ? "mag-reveal-visible" : ""}`}
      style={{ "--mag-delay": `${delay}ms` } as CSSProperties}
    >
      <p className={`mag-display font-semibold tabular-nums ${large ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"}`}>
        {display}
      </p>
      <p className="mt-1 max-w-[14rem] text-xs uppercase tracking-[0.14em] text-mag-muted">{label}</p>
    </div>
  );
}

export function MagStagger({
  children,
  delayMs,
  className = "",
}: {
  children: ReactNode;
  delayMs: number;
  className?: string;
}) {
  return (
    <div className={`mag-stagger ${className}`} style={{ "--mag-stagger": `${delayMs}ms` } as CSSProperties}>
      {children}
    </div>
  );
}

export function MagDisciplineMarquee({ items }: { items: string[] }) {
  const row = [...items, ...items];

  return (
    <div className="mag-marquee-row overflow-hidden border-y border-mag-line py-4">
      <div className="mag-marquee-track flex w-max gap-8 whitespace-nowrap px-4 text-xs uppercase tracking-[0.22em] text-mag-muted">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8">
            {item}
            <span className="text-mag-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function MagStatsMarquee({ metrics }: { metrics: { value: string; label: string }[] }) {
  const row = [...metrics, ...metrics];

  return (
    <div className="mag-marquee-row overflow-hidden border-y border-mag-line py-5">
      <div className="mag-marquee-track flex w-max items-center gap-10 whitespace-nowrap px-4 text-sm text-mag-fg">
        {row.map((m, i) => (
          <span key={`${m.label}-${i}`} className="flex items-center gap-10">
            <span>
              <strong className="mag-display text-lg font-semibold">{m.value}</strong>
              <span className="ml-2 text-mag-muted">{m.label}</span>
            </span>
            <span className="text-mag-accent" aria-hidden>
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
