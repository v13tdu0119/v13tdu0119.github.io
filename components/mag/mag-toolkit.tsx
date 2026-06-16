"use client";

import { useSiteContent } from "@/components/providers/site-content-provider";
import { TOOLKIT_GROUPS } from "./constants";
import { MagReveal } from "./mag-motion";
import { MagSection } from "./mag-section";

export function MagToolkitSection() {
  const { content } = useSiteContent();

  return (
    <MagSection
      id="toolkit"
      number="05"
      label="Technical Toolkit"
      title="The stack under the hood"
      subtitle={content.magazine.toolkitIntro}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {TOOLKIT_GROUPS.map((group, i) => (
          <MagReveal key={group.id} delay={i * 60}>
            <article className="h-full border border-mag-line p-5">
              <div className="flex items-baseline justify-between">
                <h3 className="mag-display text-lg font-semibold">{group.title}</h3>
                <span className="font-mono text-xs text-mag-accent">{group.id}</span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-mag-line px-2 py-1 text-xs text-mag-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </MagReveal>
        ))}
      </div>
    </MagSection>
  );
}
