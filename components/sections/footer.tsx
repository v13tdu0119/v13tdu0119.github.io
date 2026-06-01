import { getSocialLinks, siteConfig } from "@/config/site";
import { SocialIcons } from "@/components/sections/social-icons";

export function Footer() {
  const socialLinks = getSocialLinks();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {year} {siteConfig.nickname} ({siteConfig.name}) · 1% better daily ·
          Built with Next.js + RetroUI 🌈
        </p>
        <SocialIcons links={socialLinks} />
      </div>
    </footer>
  );
}
