"use client";

import { MagFooter, MagNav } from "./mag-chrome";
import { MagBackgroundSection, MagHero, MagNowBar } from "./mag-hero";
import { MagContactSection } from "./mag-contact";
import { MagExperienceSection } from "./mag-experience";
import { MagPhilosophySection } from "./mag-philosophy";
import { MagProductsSection } from "./mag-products";
import { MagThemeProvider } from "./mag-theme-provider";
import { MagToolkitSection } from "./mag-toolkit";

export function MagPortfolio() {
  return (
    <MagThemeProvider>
      <MagNav />
      <main>
        <MagHero />
        <MagNowBar />
        <MagBackgroundSection />
        <MagPhilosophySection />
        <MagExperienceSection />
        <MagProductsSection />
        <MagToolkitSection />
        <MagContactSection />
      </main>
      <MagFooter />
    </MagThemeProvider>
  );
}
