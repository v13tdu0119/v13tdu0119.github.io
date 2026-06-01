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
  nickname: "Dobby",
  username: "douviiii",
  tagline: "🍕 1% better than 0% — From Vietnam with LOVE 🌈",
  description:
    "Portfolio của Viet Duong (douviiii / Dobby) — Mobile & full-stack developer tại TP.HCM. Android, Kotlin, React Native, Spring Boot. Đang mở cửa nhận cơ hội — please hire me 🥑",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "vi_VN",
  location: "Ho Chi Minh City, Vietnam",
  keywords: [
    "Viet Duong",
    "douviiii",
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
    name: "Viet Duong",
    email: "code.with.dobby@gmail.com",
    jobTitle: "Mobile & Software Developer",
  },
  hero: {
    badge: "douviiii × Dobby home 🏠",
    headline: "Code như Dobby —",
    headlineHighlight: "cần mẫn, có vibe",
    subheadline:
      "Mình là Viet Duong, bạn bè gọi là Dobby. Developer Gen Z ngồi ở Sài Gòn, viết app Android, đôi khi nhảy sang React Native, đôi khi vọc Spring Boot. Không chase perfection — chase 1% mỗi ngày. ༼ つ ◕_◕ ༽つ",
    ctaPrimary: "Xem projects của Dobby",
    ctaSecondary: "Hire me / Connect",
  },
  bio: "Developer Gen Z tại TP.HCM — đam mê biến ý tưởng thành app thật trên điện thoại. Từ ML scan object, app đọc manga, game cờ caro Bluetooth, đến docs Spring Boot tiếng Việt — mình build vì thích, ship vì không ship thì buồn.",
  bioExtra:
    "GitHub bio của mình từng ghi \"Please hire me\" — không phải meme, là thật đó 🥑. Mình học nhanh, commit thường xuyên, và tin rằng portfolio nói thay resume. Nếu bạn cần người code mobile có personality, inbox là Dobby rep ngay.",
  stackIntro:
    "Mobile-first trong tim, backend trong pipeline. Jetpack Compose là crush mới, Kotlin là comfort zone, React Native là cánh cửa cross-platform, Spring Boot là backup plan kiểu \"backend cũng ổn mà\".",
  funFacts: [
    "🥡 Email: code.with.dobby@gmail.com — đúng nghĩa code with Dobby",
    "🍕 Triết lý sống: 1% better > 0% — áp dụng cả gym lẫn git commit",
    "📱 34+ repos trên GitHub — side project là hobby, không phải nghĩa vụ",
    "🎮 Từng build game Caro multiplayer qua Bluetooth — hồi đó flex với bạn bè",
    "📚 Viết Spring Boot learning docs tiếng Việt cho ae mới vào ngành",
    "🌈 From Vietnam with LOVE — pastel brutalism là aesthetic, không phải phase",
  ],
  manifesto: [
    {
      title: "Ship > perfect",
      body: "App chạy được hôm nay tốt hơn app hoàn hảo mãi không release.",
    },
    {
      title: "1% mỗi ngày",
      body: "Không cần overnight success. Cần commit đều và sleep đủ (cố gắng).",
    },
    {
      title: "UI có personality",
      body: "Gen Z không xài template xám xịt. Web phải có màu, có chuyện kể.",
    },
    {
      title: "Open source mindset",
      body: "Code public, học cùng nhau. Repo là CV, commit history là timeline.",
    },
  ],
  projectsIntro: {
    title: "Projects Dobby đã build",
    description:
      "Không phải tutorial follow-along — đây là những thứ mình thật sự ngồi debug lúc 2h sáng. Android chiếm đa số, có ML, có game, có cả backend docs. Click GitHub để xem commit history — đó là phần honest nhất.",
    footnote: "⭐ Featured = project mình tự hào nhất. Còn lại vẫn ship, vẫn học.",
  },
  connect: {
    title: "Vào Dobby's DM zone",
    description:
      "Cần mobile dev? Muốn collab side project? Hay chỉ muốn follow hành trình 1% better của một Gen Z dev ở Sài Gòn? Cứ ping — mình rep nhanh hơn push notification.",
    emailNote: "Email chính thức của Dobby:",
    hireLine: "Status: 🟢 Open to opportunities — internship, junior, freelance đều talk được",
  },
  stickyBubble: {
    greeting: "Hey! Dobby đây 👋",
    message: "Cần dev mobile? Muốn collab? Cứ ping — mình rep nhanh lắm!",
    ctaEmail: "Gửi email",
    ctaFacebook: "Nhắn Facebook",
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
    "Mobile Dev",
    "Kotlin",
    "Gen Z",
    "Open to work",
  ],
  nav: [
    { label: "Giới thiệu", href: "#about" },
    { label: "Manifesto", href: "#manifesto" },
    { label: "Projects", href: "#projects" },
    { label: "Kết nối", href: "#connect" },
  ],
  social: {
    github: "https://github.com/douviiii",
    facebook: "https://www.facebook.com/duoviiii/",
    instagram: "https://www.instagram.com/duoviiii/",
  } satisfies Partial<Record<SocialKey, string>>,
  projects: [
    {
      slug: "ml-android-scan-object",
      title: "ML Android Scan Object",
      description:
        "App quét vật thể real-time bằng ML — C++ native layer gặp Android UI. Project chứng minh Dobby không chỉ CRUD, còn đụng computer vision.",
      tags: ["C++", "Android", "ML", "Computer Vision"],
      github: "https://github.com/douviiii/ML-Android-Scan-Object",
      featured: true,
    },
    {
      slug: "android-kotlin-my-manga",
      title: "My Manga",
      description:
        "App đọc manga cho weebs (và dev) — Kotlin/Java, scroll mượt, UI không làm đau mắt. Vì đôi khi relax = đọc truyện + fix bug.",
      tags: ["Kotlin", "Java", "Android"],
      github: "https://github.com/douviiii/Android-Kotlin-My-Manga",
      featured: true,
    },
    {
      slug: "kmm-movies-demo",
      title: "KMM Movies Demo",
      description:
        "App phim TMDB — Compose đẹp, KMM share logic sang iOS, offline cache khi mạng lag. MVVM + Room + Retrofit combo kinh điển nhưng làm cho đúng.",
      tags: ["Kotlin", "KMM", "Compose", "MVVM", "Room"],
      github: "https://github.com/douviiii/KMM-Movies-Demo",
      featured: true,
    },
    {
      slug: "findway",
      title: "FindWay",
      description:
        "Bản đồ + dẫn đường cho người hay lạc (như mình). Jetpack Compose, Google Maps SDK, MVVM — search địa điểm, chọn, navigate realtime.",
      tags: ["Jetpack Compose", "Google Maps", "MVVM", "Android"],
      github: "https://github.com/douviiii/findway",
      featured: false,
    },
    {
      slug: "android-caro-multiplayer",
      title: "Caro Multiplayer",
      description:
        "Cờ caro nostalgia — đánh AI khi không ai rảnh, Bluetooth multiplayer khi có hội bạn. Game đơn giản nhưng flex skill networking.",
      tags: ["Kotlin", "Android", "Bluetooth", "Game"],
      github: "https://github.com/douviiii/android-caro-multiplayer",
      featured: false,
    },
    {
      slug: "android-kotlin-soundspace",
      title: "SoundSpace",
      description:
        "Không gian âm thanh trên Android — explore audio, UI Kotlin sạch. Side project kiểu \"hôm nay thử làm app nhạc xem sao\".",
      tags: ["Kotlin", "Android", "Audio"],
      github: "https://github.com/douviiii/android-kotlin-soundspace",
      featured: true,
    },
    {
      slug: "spring-boot-learning",
      title: "Spring Boot Learning",
      description:
        "Repo tài liệu tiếng Việt về Spring Boot & Spring Cloud — code mẫu + hình minh họa. Dobby share kiến thức cho community, không gatekeep.",
      tags: ["Spring Boot", "Spring Cloud", "Java", "Backend"],
      github: "https://github.com/douviiii/spring-boot-learning",
      featured: false,
    },
    {
      slug: "specialization-react-native",
      title: "React Native Specialization",
      description:
        "Module React Native từ specialization course — navigation, components, patterns. Bước đầu nhảy khỏi native-only comfort zone.",
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
