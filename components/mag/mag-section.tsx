import type { ReactNode } from "react";

export function MagSection({
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
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-mag-line px-5 py-16 lg:pl-56 lg:pr-12 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.28em] text-mag-muted">
          <span>
            {number} {label}
          </span>
        </div>
        <h2 className="mag-display text-3xl font-semibold leading-tight md:text-4xl lg:text-[2.75rem]">{title}</h2>
        {subtitle && <p className="mt-4 max-w-2xl text-base leading-relaxed text-mag-muted">{subtitle}</p>}
        <div className="mt-10 space-y-8">{children}</div>
      </div>
    </section>
  );
}
