"use client";

import { TidAboutSection } from "./tid-about-section";
import { TidCaseStudySection } from "./tid-case-study-section";
import { TidHeader, TidFooter, TidMarquee } from "./tid-chrome";
import { TidConnectSection } from "./tid-connect-section";
import { TidExperienceSection } from "./tid-experience-section";
import { TidHero } from "./tid-hero";
import { TidImpactStrip } from "./tid-motion";
import { TidProjectsSection } from "./tid-projects-section";

export function TidPortfolio() {
  return (
    <div className="tid-page min-h-dvh">
      <TidHeader />
      <main>
        <TidHero />
        <TidMarquee />
        <TidImpactStrip />
        <TidAboutSection />
        <TidExperienceSection />
        <TidCaseStudySection />
        <TidProjectsSection />
        <TidConnectSection />
      </main>
      <TidFooter />
    </div>
  );
}
