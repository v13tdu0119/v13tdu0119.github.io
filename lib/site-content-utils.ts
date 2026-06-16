import type { SiteContent } from "@/types/site-content";

export function cloneSiteContent(content: SiteContent): SiteContent {
  return structuredClone(content);
}

export function mergeSiteContent(
  base: SiteContent,
  partial: Partial<SiteContent> | null | undefined,
): SiteContent {
  if (!partial) return cloneSiteContent(base);

  return {
    ...base,
    ...partial,
    author: { ...base.author, ...partial.author },
    hero: { ...base.hero, ...partial.hero },
    projectsIntro: { ...base.projectsIntro, ...partial.projectsIntro },
    connect: { ...base.connect, ...partial.connect },
    stickyBubble: { ...base.stickyBubble, ...partial.stickyBubble },
    social: { ...base.social, ...partial.social },
    keywords: partial.keywords ?? base.keywords,
    funFacts: partial.funFacts ?? base.funFacts,
    workExperience: partial.workExperience ?? base.workExperience,
    experienceIntro: { ...base.experienceIntro, ...partial.experienceIntro },
    techStack: partial.techStack ?? base.techStack,
    heroTags: partial.heroTags ?? base.heroTags,
    heroStats: partial.heroStats ?? base.heroStats,
    impactMetrics: partial.impactMetrics ?? base.impactMetrics,
    featuredCaseStudy: partial.featuredCaseStudy
      ? { ...base.featuredCaseStudy, ...partial.featuredCaseStudy }
      : base.featuredCaseStudy,
    nav: partial.nav ?? base.nav,
    projects: partial.projects ?? base.projects,
  };
}

export function getSocialLinks(content: SiteContent) {
  return Object.entries(content.social)
    .filter((entry): entry is [keyof SiteContent["social"] & string, string] =>
      Boolean(entry[1]),
    )
    .map(([key, href]) => ({ key, href }));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
