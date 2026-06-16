"use client";

import Link from "next/link";
import { useSiteContent } from "@/components/providers/site-content-provider";
import { MAG_SECTIONS } from "./constants";
import { useMagTheme } from "./mag-theme-provider";

export function MagNav() {
  const { content } = useSiteContent();
  const { theme, toggle } = useMagTheme();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-mag-line bg-mag-bg/90 backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between px-5 py-4">
          <Link href="#intro" className="mag-display text-base font-semibold">
            {content.name}
          </Link>
          <button type="button" onClick={toggle} className="text-xs uppercase tracking-widest text-mag-muted">
            {theme === "dark" ? "Day" : "Night"}
          </button>
        </div>
        <nav className="flex gap-4 overflow-x-auto px-5 pb-3 text-[10px] uppercase tracking-[0.2em] text-mag-muted">
          {MAG_SECTIONS.map((s) => (
            <a key={s.href} href={s.href} className="shrink-0 hover:text-mag-fg">
              {s.num} {s.label}
            </a>
          ))}
        </nav>
      </header>

      <aside className="fixed left-0 top-0 z-40 hidden h-dvh w-52 flex-col border-r border-mag-line bg-mag-bg/95 px-6 py-8 lg:flex">
        <Link href="#intro" className="mag-display text-lg font-semibold leading-tight">
          {content.name}
        </Link>
        <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-mag-muted">{content.author.jobTitle}</p>

        <button
          type="button"
          onClick={toggle}
          className="mt-6 w-fit border border-mag-line px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-mag-muted transition-colors hover:border-mag-muted hover:text-mag-fg"
        >
          {theme === "dark" ? "Day" : "Night"}
        </button>

        <nav className="mt-10 flex flex-1 flex-col gap-3">
          {MAG_SECTIONS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="group flex items-baseline gap-2 text-xs text-mag-muted transition-colors hover:text-mag-fg"
            >
              <span className="font-mono text-[10px] text-mag-accent">{s.num}</span>
              <span className="uppercase tracking-[0.16em]">{s.label}</span>
            </a>
          ))}
        </nav>

        <p className="text-[10px] uppercase tracking-[0.2em] text-mag-muted">{content.magazine.volume}</p>
      </aside>
    </>
  );
}

export function MagFooter() {
  const { content } = useSiteContent();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mag-line px-5 py-10 lg:pl-56 lg:pr-12">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mag-display text-xl font-semibold">{content.nickname}</p>
          <p className="mt-1 text-sm text-mag-muted">
            {content.author.name} · {content.location}
          </p>
          <p className="mt-3 text-xs text-mag-muted">© {year} · {content.magazine.volume}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          {content.social.github && (
            <a href={content.social.github} target="_blank" rel="noreferrer" className="text-mag-muted hover:text-mag-fg">
              GitHub
            </a>
          )}
          {content.social.linkedin && (
            <a href={content.social.linkedin} target="_blank" rel="noreferrer" className="text-mag-muted hover:text-mag-fg">
              LinkedIn
            </a>
          )}
          <Link href="/admin" className="text-mag-muted hover:text-mag-fg">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
