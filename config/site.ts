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
  featured?: boolean;
};

export const siteConfig = {
  name: "Viet Duong",
  tagline: "🍕 1% better than 0% — From Vietnam with LOVE 🌈",
  description:
    "Portfolio của Viet Duong (douviiii) — Mobile & Full-stack developer tại TP.HCM. Android/Kotlin, React Native, Spring Boot và side projects open source.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "vi_VN",
  location: "Ho Chi Minh City, Vietnam",
  keywords: [
    "Viet Duong",
    "douviiii",
    "portfolio",
    "Android developer",
    "Kotlin",
    "React Native",
    "Spring Boot",
    "Vietnam",
    "Ho Chi Minh City",
  ],
  author: {
    name: "Viet Duong",
    email: "code.with.dobby@gmail.com",
    jobTitle: "Mobile & Software Developer",
  },
  bio: "Developer Gen Z tại TP.HCM — đam mê Android/Kotlin, React Native và backend Spring Boot. Mình tin mỗi ngày tiến bộ 1% đã là thắng lợi. ༼ つ ◕_◕ ༽つ",
  techStack: [
    "Kotlin",
    "Android",
    "Jetpack Compose",
    "React Native",
    "Spring Boot",
    "TypeScript",
  ],
  heroTags: ["Kotlin", "Android", "React Native", "Spring Boot"],
  nav: [
    { label: "Giới thiệu", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Kết nối", href: "#connect" },
  ],
  social: {
    github: "https://github.com/douviiii",
    facebook: "https://www.facebook.com/duoviiii/",
    instagram: "https://www.instagram.com/duoviiii/",
    // Cập nhật URL profile LinkedIn thật (vd: linkedin.com/in/ten-ban)
    // linkedin: "https://www.linkedin.com/in/your-profile",
  } satisfies Partial<Record<SocialKey, string>>,
  projects: [
    {
      slug: "ml-android-scan-object",
      title: "ML Android Scan Object",
      description:
        "Ứng dụng Android quét và nhận diện vật thể bằng Machine Learning — C++ native layer kết hợp Android.",
      tags: ["C++", "Android", "ML", "Computer Vision"],
      github: "https://github.com/douviiii/ML-Android-Scan-Object",
      featured: true,
    },
    {
      slug: "android-kotlin-my-manga",
      title: "My Manga",
      description:
        "App đọc manga trên Android — Kotlin/Java, UI thân thiện và trải nghiệm đọc mượt mà.",
      tags: ["Kotlin", "Java", "Android"],
      github: "https://github.com/douviiii/Android-Kotlin-My-Manga",
      featured: true,
    },
    {
      slug: "kmm-movies-demo",
      title: "KMM Movies Demo",
      description:
        "App phim dùng TMDB API — Jetpack Compose, KMM shared logic với iOS, MVVM, Room, Retrofit và offline cache.",
      tags: ["Kotlin", "KMM", "Compose", "MVVM", "Room"],
      github: "https://github.com/douviiii/KMM-Movies-Demo",
      featured: true,
    },
    {
      slug: "findway",
      title: "FindWay",
      description:
        "App Android hiện đại với Jetpack Compose, Google Maps SDK và MVVM — tìm kiếm, chọn địa điểm và dẫn đường realtime.",
      tags: ["Jetpack Compose", "Google Maps", "MVVM", "Android"],
      github: "https://github.com/douviiii/findway",
      featured: false,
    },
    {
      slug: "android-caro-multiplayer",
      title: "Caro Multiplayer",
      description:
        "Game cờ caro cổ điển trên Android — chơi với AI hoặc multiplayer qua Bluetooth.",
      tags: ["Kotlin", "Android", "Bluetooth", "Game"],
      github: "https://github.com/douviiii/android-caro-multiplayer",
      featured: false,
    },
    {
      slug: "android-kotlin-soundspace",
      title: "SoundSpace",
      description:
        "Ứng dụng âm nhạc trên Android viết bằng Kotlin — khám phá và trải nghiệm không gian âm thanh.",
      tags: ["Kotlin", "Android", "Audio"],
      github: "https://github.com/douviiii/android-kotlin-soundspace",
      featured: true,
    },
    {
      slug: "spring-boot-learning",
      title: "Spring Boot Learning",
      description:
        "Tài liệu & code mẫu tiếng Việt về Spring Boot, Spring Cloud — hướng dẫn chi tiết kèm hình ảnh dễ hiểu.",
      tags: ["Spring Boot", "Spring Cloud", "Java", "Backend"],
      github: "https://github.com/douviiii/spring-boot-learning",
      featured: false,
    },
    {
      slug: "specialization-react-native",
      title: "React Native Specialization",
      description:
        "Module chuyên sâu React Native — mobile cross-platform, components và navigation patterns.",
      tags: ["React Native", "JavaScript", "Mobile"],
      github: "https://github.com/douviiii/Specialization-Module-React-Native",
      featured: false,
    },
  ] as Project[],
} as const;

export function getSocialLinks() {
  return Object.entries(siteConfig.social)
    .filter((entry): entry is [SocialKey, string] => Boolean(entry[1]))
    .map(([key, href]) => ({ key, href }));
}
