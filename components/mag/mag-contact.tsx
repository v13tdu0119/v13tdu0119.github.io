"use client";

import { useSiteContent } from "@/components/providers/site-content-provider";
import { getSocialLinks } from "@/lib/site-content-utils";
import { MagReveal } from "./mag-motion";
import { MagSection } from "./mag-section";

export function MagContactSection() {
  const { content } = useSiteContent();
  const links = getSocialLinks(content);

  return (
    <MagSection
      id="contact"
      number="06"
      label="Contact & Availability"
      title={content.connect.title}
      subtitle={content.connect.description}
    >
      <MagReveal>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-mag-muted">¶ Send a note</p>
            <a
              href={`mailto:${content.author.email}`}
              className="mag-btn mag-display inline-block text-2xl font-semibold hover:text-mag-accent"
            >
              {content.author.email}
            </a>
            <p className="text-sm text-mag-muted">{content.connect.emailNote}</p>
            <a
              href={`mailto:${content.author.email}`}
              className="mag-btn inline-block border border-mag-fg px-5 py-2.5 text-xs uppercase tracking-[0.2em]"
            >
              {content.stickyBubble.ctaEmail}
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-mag-muted">¶ Correspondence</p>
            <ul className="mt-4 space-y-3 text-sm">
              {links.map(({ key, href }) => (
                <li key={key} className="flex items-baseline justify-between gap-4 border-b border-mag-line pb-3">
                  <span className="capitalize text-mag-muted">{key}</span>
                  <a href={href} target="_blank" rel="noreferrer" className="truncate hover:text-mag-accent">
                    {href.replace(/^https?:\/\/(www\.)?/, "")}
                  </a>
                </li>
              ))}
              <li className="flex items-baseline justify-between gap-4 border-b border-mag-line pb-3">
                <span className="text-mag-muted">Located</span>
                <span>{content.location}</span>
              </li>
            </ul>
          </div>
        </div>
      </MagReveal>
    </MagSection>
  );
}
