export const MAG_SECTIONS = [
  { num: "00", label: "Intro", href: "#intro" },
  { num: "01", label: "Background", href: "#background" },
  { num: "02", label: "Philosophy", href: "#philosophy" },
  { num: "03", label: "Experience", href: "#experience" },
  { num: "04", label: "Products", href: "#products" },
  { num: "05", label: "Toolkit", href: "#toolkit" },
  { num: "06", label: "Contact", href: "#contact" },
] as const;

export const AVATAR_SRC = "/avatar.jpg";

export const TOOLKIT_GROUPS = [
  {
    id: "T.01",
    title: "Android & Mobile",
    items: ["Kotlin", "Jetpack Compose", "MVVM", "Dagger Hilt", "Room", "Retrofit", "React Native"],
  },
  {
    id: "T.02",
    title: "Architecture & Quality",
    items: ["Clean Architecture", "Modular design", "JUnit", "JaCoCo", "LaunchDarkly", "Crashlytics"],
  },
  {
    id: "T.03",
    title: "Backend & Cloud",
    items: ["Spring Boot", "Firebase", "FCM", "REST APIs", "PostgreSQL patterns"],
  },
  {
    id: "T.04",
    title: "DevOps & Release",
    items: ["GitHub Actions", "Jenkins", "Play Store", "Signing", "CI/CD pipelines"],
  },
  {
    id: "T.05",
    title: "Security & Banking",
    items: ["Android Keystore", "Biometric API", "JWT", "Snyk", "Screen capture detection"],
  },
  {
    id: "T.06",
    title: "Practice",
    items: ["Release ownership", "Cross-team coordination", "Mentorship", "Tech specs", "Sprint planning"],
  },
] as const;

export const ROMAN = ["I", "II", "III", "IV", "V", "VI"] as const;
