import type { Project, SiteContent, SocialKey } from "@/types/site-content";

export type { Project, SiteContent, SocialKey };

export const siteConfig = {
  name: "Việt Dương",
  nickname: "Dobby",
  username: "Dobby",
  tagline: "1% better than 0% — Android developer from Vietnam",
  description:
    "Portfolio of Việt Dương (Dobby) — Android developer in Ho Chi Minh City. Kotlin, Jetpack Compose, banking & logistics apps. Open to Junior+ and Middle Android roles.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  location: "Ho Chi Minh City, Vietnam",
  keywords: [
    "Việt Dương",
    "Dobby",
    "Dobby developer",
    "portfolio",
    "Android developer",
    "Kotlin",
    "React Native",
    "Spring Boot",
    "Vietnam",
    "Ho Chi Minh City",
    "hire mobile developer",
  ],
  author: {
    name: "Việt Dương",
    email: "code.with.dobby@gmail.com",
    jobTitle: "Android Developer",
  },
  hero: {
    badge: "Dobby · Android Developer",
    headline: "Building Android apps that",
    headlineHighlight: "ship and scale",
    subheadline:
      "I'm Việt Dương — friends call me Dobby. I build production Android apps in Ho Chi Minh City, from mobile banking to real-time logistics. I care about clean architecture, reliable releases, and steady 1% improvement every day.",
    ctaPrimary: "View projects",
    ctaSecondary: "Get in touch",
  },
  bio: "Android developer based in Ho Chi Minh City with hands-on experience in banking, e-commerce, and transportation products. I turn product requirements into maintainable Kotlin code — MVVM, modular architecture, CI/CD, and security-conscious implementations.",
  bioExtra:
    "I learn fast, commit often, and treat my GitHub as a public track record. If you need an Android engineer who communicates clearly and delivers with ownership, I'd love to talk.",
  stackIntro:
    "Mobile-first by default. Kotlin and Jetpack Compose are my core toolkit; React Native and Spring Boot extend my reach when the product calls for it.",
  funFacts: [
    "Email: code.with.dobby@gmail.com",
    "Philosophy: 1% better > 0% — in code and in life",
    "35+ public repos — side projects keep me sharp",
    "Built a Bluetooth multiplayer Caro game before multiplayer was cool",
    "Author of Vietnamese Spring Boot learning resources for juniors",
    "From Vietnam — proud of it, professional about it",
  ],
  heroStats: [
    { label: "Android focus", value: "3+ yrs" },
    { label: "GitHub repos", value: "35+" },
    { label: "Status", value: "Open to work" },
  ],
  impactMetrics: [
    { value: "200+", label: "Daily drivers (LINKON)" },
    { value: "40%", label: "Less manual release effort" },
    { value: "35+", label: "Public GitHub repos" },
  ],
  featuredCaseStudy: {
    badge: "Production · Shipped",
    title: "LINKON & Sandtoner",
    company: "Staffun",
    period: "07/2025 — 03/2026",
    summary:
      "Rebuilt a logistics driver app for 200+ daily users and shipped an e-commerce app to Google Play — MVVM, modular architecture, and CI/CD from the ground up.",
    problem:
      "Two Android products under active development: a transportation app needing scalable architecture and reliable location tracking, and an e-commerce app requiring Play Store compliance and production stability.",
    highlights: [
      "MVVM + Dagger-Hilt modular rebuild; GitHub Actions CI/CD cut manual release effort by ~40%",
      "Google Maps + background location for 200+ drivers/day; push optimized for weak networks",
      "Hybrid biometric + JWT auth with Refresh Tokens encrypted via Android Keystore",
      "Owned Sandtoner Play Store lifecycle — signing, policy compliance, Crashlytics-driven fixes",
    ],
    stack: ["Kotlin", "MVVM", "Dagger Hilt", "Google Maps", "Firebase", "GitHub Actions"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.sandtoner.live.seo.app",
    playStoreLabel: "Sandtoner on Google Play",
  },
  experienceIntro: {
    title: "Experience",
    description:
      "Production Android work across banking, logistics, and e-commerce — not tutorial projects. Highlights below focus on impact and ownership.",
  },
  workExperience: [
    {
      id: "staffun",
      company: "Staffun",
      role: "Android Developer",
      location: "Ho Chi Minh City",
      period: "07/2025 — 03/2026",
      projects: [
        {
          name: "LINKON — Transportation",
          highlights: [
            "Rebuilt the app with MVVM, modular architecture, and Dagger-Hilt; CI/CD via GitHub Actions cut manual release effort by ~40%.",
            "Integrated Google Maps and background location tracking for 200+ daily drivers; optimized push delivery on weak networks.",
            "Shipped secure hybrid login (Biometric API + JWT) with Refresh Tokens encrypted via Android Keystore.",
          ],
        },
        {
          name: "Sandtoner — E-commerce",
          highlights: [
            "Owned Google Play release lifecycle: signing, configuration, and policy compliance.",
            "Improved production stability using Firebase Crashlytics and targeted crash fixes.",
          ],
          link: "https://play.google.com/store/apps/details?id=com.sandtoner.live.seo.app",
        },
      ],
    },
    {
      id: "nab-vietnam",
      company: "NAB Vietnam",
      role: "Android Developer",
      location: "Ho Chi Minh City",
      period: "08/2022 — 12/2024",
      projects: [
        {
          name: "NAB Mobile Banking",
          highlights: [
            "Modular Clean Architecture + MVVM with Kotlin Flow for scalable banking features.",
            "Migrated 30+ feature flags to LaunchDarkly; built geofencing alerts with Firebase FCM.",
            "Strengthened security (Snyk, screen-recording detection) and CI quality gates (Jenkins, JaCoCo).",
          ],
        },
      ],
    },
    {
      id: "blue-otter",
      company: "Blue Otter Vietnam",
      role: "Intern Front-End Developer",
      location: "Da Nang City",
      period: "06/2021 — 08/2021",
      highlights: [
        "Built a React + Firebase web app with real-time CRUD, media upload, and authentication.",
        "Deployed end-to-end to production using Firebase as BaaS.",
      ],
    },
    {
      id: "pnv-mentor",
      company: "Passerelles Numériques Vietnam",
      role: "Mentor & Trainer",
      location: "Da Nang, Vietnam",
      period: "12/2024 — Now",
      type: "leadership",
      highlights: [
        "Mentored a student startup team to first place in a university entrepreneurship competition.",
        "Delivered technical training on Agile/Scrum, project management, and OOP for second-year students.",
      ],
    },
  ],
  projectsIntro: {
    title: "Selected projects",
    description:
      "Side projects and shipped work that reflect how I code — Android-heavy, with ML, games, and docs mixed in. Source code and commit history on GitHub.",
    footnote: "Featured projects are the ones I'm most proud of. Others are still part of my learning journey.",
  },
  connect: {
    title: "Let's connect",
    description:
      "Looking for a Junior+ or Middle Android developer? Open to full-time roles, contracts, and serious collaborations. I reply within 24 hours.",
    emailNote: "Best way to reach me:",
    hireLine: "Open to opportunities — Junior+ & Middle Android Developer",
  },
  stickyBubble: {
    greeting: "Hey, Dobby here",
    message: "Need an Android dev? Happy to chat about roles or projects.",
    ctaEmail: "Email me",
    ctaFacebook: "Message on Facebook",
  },
  techStack: [
    "Kotlin",
    "Android",
    "Jetpack Compose",
    "React Native",
    "Spring Boot",
    "TypeScript",
  ],
  heroTags: [
    "Android",
    "Kotlin",
    "Jetpack Compose",
    "Open to work",
  ],
  nav: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#connect" },
  ],
  social: {
    github: "https://github.com/douviiii",
    linkedin: "https://www.linkedin.com/in/vietduongg/",
    facebook: "https://www.facebook.com/duoviiii/",
    instagram: "https://www.instagram.com/duoviiii/",
  } satisfies Partial<Record<SocialKey, string>>,
  projects: [
    {
      slug: "ml-android-scan-object",
      title: "ML Android Scan Object",
      description:
        "Real-time object detection on Android — native C++ layer paired with a Kotlin UI. Demonstrates computer vision beyond typical CRUD apps.",
      tags: ["C++", "Android", "ML", "Computer Vision"],
      github: "https://github.com/douviiii/ML-Android-Scan-Object",
      featured: true,
    },
    {
      slug: "android-kotlin-my-manga",
      title: "My Manga",
      description:
        "Manga reader built with Kotlin and Java — smooth scrolling and a clean reading experience for daily use.",
      tags: ["Kotlin", "Java", "Android"],
      github: "https://github.com/douviiii/Android-Kotlin-My-Manga",
      featured: true,
    },
    {
      slug: "kmm-movies-demo",
      title: "KMM Movies Demo",
      description:
        "TMDB movie app with Jetpack Compose UI, Kotlin Multiplatform shared logic, and offline caching — MVVM, Room, and Retrofit done right.",
      tags: ["Kotlin", "KMM", "Compose", "MVVM", "Room"],
      github: "https://github.com/douviiii/KMM-Movies-Demo",
      featured: true,
    },
    {
      slug: "findway",
      title: "FindWay",
      description:
        "Maps and navigation app for finding places and routes — Jetpack Compose, Google Maps SDK, and MVVM with real-time search and directions.",
      tags: ["Jetpack Compose", "Google Maps", "MVVM", "Android"],
      github: "https://github.com/douviiii/findway",
      featured: false,
    },
    {
      slug: "android-caro-multiplayer",
      title: "Caro Multiplayer",
      description:
        "Classic Caro (Gomoku) with AI opponent and Bluetooth multiplayer — a small game that exercises networking and state management.",
      tags: ["Kotlin", "Android", "Bluetooth", "Game"],
      github: "https://github.com/douviiii/android-caro-multiplayer",
      featured: false,
    },
    {
      slug: "android-kotlin-soundspace",
      title: "SoundSpace",
      description:
        "Android audio exploration app with a polished Kotlin UI — a side project born from curiosity about media playback on mobile.",
      tags: ["Kotlin", "Android", "Audio"],
      github: "https://github.com/douviiii/android-kotlin-soundspace",
      featured: true,
    },
    {
      slug: "spring-boot-learning",
      title: "Spring Boot Learning",
      description:
        "Vietnamese Spring Boot and Spring Cloud learning resources — sample code and diagrams shared openly with the developer community.",
      tags: ["Spring Boot", "Spring Cloud", "Java", "Backend"],
      github: "https://github.com/douviiii/spring-boot-learning",
      featured: false,
    },
    {
      slug: "specialization-react-native",
      title: "React Native Specialization",
      description:
        "React Native modules from a mobile specialization course — navigation, components, and cross-platform patterns beyond native-only work.",
      tags: ["React Native", "JavaScript", "Mobile"],
      github: "https://github.com/douviiii/Specialization-Module-React-Native",
      featured: false,
    },
  ] as Project[],
} satisfies SiteContent;

export const defaultSiteContent: SiteContent = siteConfig;

export { getSocialLinks } from "@/lib/site-content-utils";
