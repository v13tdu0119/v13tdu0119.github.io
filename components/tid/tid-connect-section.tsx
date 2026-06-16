"use client";

import { useSiteContent } from "@/components/providers/site-content-provider";

export function TidConnectSection() {
  const { content } = useSiteContent();

  return (
    <section
      id="connect"
      className="scroll-mt-24 border-t border-tid-line px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-tid-muted">Stay in touch</p>
        <h2 className="tid-display mt-4 text-[clamp(2rem,6vw,3.5rem)] font-bold leading-tight">
          {content.connect.title}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-tid-muted">
          {content.connect.description}
        </p>

        <p className="mt-6 inline-block rounded-full border border-tid-line px-4 py-2 text-xs uppercase tracking-wider text-tid-muted">
          {content.connect.hireLine}
        </p>

        <form
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `mailto:${content.author.email}`;
          }}
        >
          <input
            type="email"
            readOnly
            value={content.author.email}
            aria-label="Email address"
            className="flex-1 rounded-full border border-tid-line bg-tid-surface px-5 py-3 text-sm text-tid-cream outline-none focus:border-tid-muted"
          />
          <button
            type="submit"
            className="rounded-full bg-tid-cream px-6 py-3 text-sm font-semibold text-tid-ink transition-opacity hover:opacity-90"
          >
            {content.stickyBubble.ctaEmail}
          </button>
        </form>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          {content.social.linkedin && (
            <a href={content.social.linkedin} target="_blank" rel="noreferrer" className="text-tid-muted hover:text-tid-cream">
              LinkedIn
            </a>
          )}
          {content.social.github && (
            <a href={content.social.github} target="_blank" rel="noreferrer" className="text-tid-muted hover:text-tid-cream">
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
