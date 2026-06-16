"use client";

import Link from "next/link";
import { useSiteContent } from "@/components/providers/site-content-provider";

export function TidHeader() {
  const { content } = useSiteContent();

  return (
    <header className="sticky top-0 z-50 border-b border-tid-line bg-tid-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="#top" className="tid-display text-lg font-semibold tracking-tight text-tid-cream">
          {content.nickname.toLowerCase()}
          <span className="text-tid-muted">.dev</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-tid-muted md:flex">
          {content.nav
            .filter((item) => item.href !== "#top")
            .map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-tid-cream"
              >
                {item.label}
              </a>
            ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="hidden text-xs text-tid-muted transition-colors hover:text-tid-cream sm:inline"
          >
            Admin
          </Link>
          <a
            href={`mailto:${content.author.email}`}
            className="rounded-full bg-tid-cream px-4 py-2 text-sm font-medium text-tid-ink transition-opacity hover:opacity-90"
          >
            {content.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </header>
  );
}

export function TidMarquee() {
  const { content } = useSiteContent();
  const rowA = [...content.techStack, ...content.techStack];
  const rowB = [...content.techStack.slice().reverse(), ...content.techStack.slice().reverse()];

  return (
    <section className="tid-marquee-row overflow-hidden border-y border-tid-line py-4" aria-hidden>
      <div className="tid-marquee-track flex w-max gap-12 whitespace-nowrap px-6 py-2 text-sm uppercase tracking-[0.2em] text-tid-muted">
        {rowA.map((tech, i) => (
          <span key={`a-${tech}-${i}`} className="flex items-center gap-12">
            {tech}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-omni-lime/60" />
          </span>
        ))}
      </div>
      <div className="tid-marquee-track-reverse flex w-max gap-12 whitespace-nowrap px-6 py-2 text-xs uppercase tracking-[0.25em] text-tid-muted/70">
        {rowB.map((tech, i) => (
          <span key={`b-${tech}-${i}`}>{tech}</span>
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-tid-muted">
        Trusted stack for production Android work
      </p>
    </section>
  );
}

export function TidFooter() {
  const { content } = useSiteContent();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-tid-line px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="tid-display text-2xl font-semibold">{content.nickname}</p>
          <p className="mt-1 text-sm text-tid-muted">
            {content.author.name} · {content.location}
          </p>
          <p className="mt-4 text-xs text-tid-muted">© {year} · Built with Next.js</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          {content.social.github && (
            <a href={content.social.github} target="_blank" rel="noreferrer" className="text-tid-muted hover:text-tid-cream">
              GitHub
            </a>
          )}
          {content.social.linkedin && (
            <a href={content.social.linkedin} target="_blank" rel="noreferrer" className="text-tid-muted hover:text-tid-cream">
              LinkedIn
            </a>
          )}
          <a href={`mailto:${content.author.email}`} className="text-tid-muted hover:text-tid-cream">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
