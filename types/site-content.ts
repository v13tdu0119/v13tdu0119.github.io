export type SocialKey =
  | "github"
  | "linkedin"
  | "twitter"
  | "instagram"
  | "facebook"
  | "zalo";

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  github?: string;
  playStore?: string;
  featured?: boolean;
};

export type FeaturedCaseStudy = {
  badge: string;
  title: string;
  company: string;
  period: string;
  summary: string;
  problem: string;
  highlights: string[];
  stack: string[];
  playStoreUrl?: string;
  playStoreLabel?: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type HeroStat = {
  label: string;
  value: string;
};

export type ImpactMetric = {
  label: string;
  value: string;
};

export type WorkExperienceProject = {
  name: string;
  highlights: string[];
  link?: string;
};

export type WorkExperience = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  type?: "work" | "leadership";
  projects?: WorkExperienceProject[];
  highlights?: string[];
};

export type SiteContent = {
  name: string;
  nickname: string;
  username: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  location: string;
  keywords: string[];
  author: {
    name: string;
    email: string;
    jobTitle: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  bio: string;
  bioExtra: string;
  stackIntro: string;
  funFacts: string[];
  experienceIntro: {
    title: string;
    description: string;
  };
  workExperience: WorkExperience[];
  projectsIntro: {
    title: string;
    description: string;
    footnote: string;
  };
  connect: {
    title: string;
    description: string;
    emailNote: string;
    hireLine: string;
  };
  stickyBubble: {
    greeting: string;
    message: string;
    ctaEmail: string;
    ctaFacebook: string;
  };
  techStack: string[];
  heroTags: string[];
  heroStats: HeroStat[];
  impactMetrics: ImpactMetric[];
  featuredCaseStudy: FeaturedCaseStudy;
  nav: NavItem[];
  social: Partial<Record<SocialKey, string>>;
  projects: Project[];
};

export const SITE_CONTENT_DOC = "portfolio/main";
