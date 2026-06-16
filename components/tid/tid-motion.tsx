"use client";

import { useEffect, useState } from "react";
import { useSiteContent } from "@/components/providers/site-content-provider";
import { useCountUp } from "@/hooks/use-count-up";
import { useInView } from "@/hooks/use-in-view";
import type { CSSProperties, ReactNode } from "react";

export function TidReveal({
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
      className={`omni-reveal ${inView ? "omni-reveal-visible" : ""} ${className}`}
      style={{ "--omni-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function TidCountStat({
  value,
  label,
  delay = 0,
  mode = "scroll",
}: {
  value: string;
  label: string;
  delay?: number;
  mode?: "scroll" | "immediate";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [ready, setReady] = useState(mode !== "immediate");

  useEffect(() => {
    if (mode !== "immediate") return;
    const timer = window.setTimeout(() => setReady(true), 900 + delay);
    return () => window.clearTimeout(timer);
  }, [delay, mode]);

  const active = mode === "immediate" ? ready : inView;
  const display = useCountUp(value, active);

  const body = (
    <>
      <p className="tid-display text-2xl font-semibold tabular-nums">{display}</p>
      <p className="text-xs uppercase tracking-wider text-tid-muted">{label}</p>
    </>
  );

  if (mode === "immediate") {
    return <div>{body}</div>;
  }

  return (
    <div
      ref={ref}
      className={`omni-reveal ${inView ? "omni-reveal-visible" : ""}`}
      style={{ "--omni-delay": `${delay}ms` } as CSSProperties}
    >
      {body}
    </div>
  );
}

export function TidHeroDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="omni-float omni-shape-star absolute -left-4 top-8 h-16 w-16 text-omni-pink md:-left-8 md:top-12 md:h-24 md:w-24" />
      <div
        className="omni-float-reverse omni-shape-ring absolute right-8 top-20 h-20 w-20 border-2 border-tid-cream/30 md:right-16 md:h-28 md:w-28"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="omni-float absolute bottom-24 left-[15%] h-14 w-14 rounded-full bg-omni-lime/20 blur-sm"
        style={{ animationDelay: "0.6s" }}
      />
      <div
        className="omni-spin-slow omni-shape-poly absolute bottom-12 right-[10%] h-12 w-12 bg-omni-lime md:h-16 md:w-16"
        style={{ animationDelay: "0.3s" }}
      />
      <div className="omni-float-reverse absolute right-[35%] top-[45%] h-3 w-3 rounded-full bg-omni-pink" />
    </div>
  );
}

export function TidImpactStrip() {
  const { content } = useSiteContent();

  return (
    <section className="border-y border-tid-line bg-tid-surface px-5 py-12 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {content.impactMetrics.map((metric, i) => (
          <TidCountStat key={metric.label} value={metric.value} label={metric.label} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}
