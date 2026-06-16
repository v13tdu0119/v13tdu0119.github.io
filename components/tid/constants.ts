export const AVATAR_SRC = "/avatar.jpg";

export const PREVIEW_SECTIONS = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Experience", href: "#experience" },
  { num: "03", label: "Projects", href: "#projects" },
] as const;

export const HERO_STACK = [
  { emoji: "📱", word: "experience", href: "#experience" },
  { emoji: "🛠️", word: "projects", href: "#projects" },
  { emoji: "📦", word: "shipped work", href: "#case-study" },
  { emoji: "✉️", word: "contact", href: "#connect" },
] as const;
