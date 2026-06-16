"use client";

import { useSiteContent } from "@/components/providers/site-content-provider";
import { TidIssueSection } from "./tid-issue-section";

export function TidAboutSection() {
  const { content } = useSiteContent();

  return (
    <TidIssueSection
      id="about"
      number="01"
      label="About"
      title={`Who is ${content.nickname}?`}
      subtitle={content.stackIntro}
    >
      <p>{content.bio}</p>
      <p>{content.bioExtra}</p>
      <ul className="mt-4 space-y-2 border-t border-tid-line pt-6 text-sm text-tid-muted">
        {content.funFacts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </TidIssueSection>
  );
}
