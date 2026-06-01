import Link from "next/link";
import type { CSSProperties } from "react";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b-2 border-black dot-pattern"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-24">
        <Badge
          variant="surface"
          className="animate-cartoon-pop-in mb-6 w-fit -rotate-2 border-2 border-black font-display shadow-sm"
          style={{ animationDelay: "0.1s" } as CSSProperties}
        >
          Gen Z × Neo Brutalism
        </Badge>

        <Text
          as="h1"
          id="hero-heading"
          className="animate-cartoon-slide-up max-w-4xl text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.2s" } as CSSProperties}
        >
          Không phải web nào cũng phải{" "}
          <span className="inline-block bg-primary px-2 brutal-shadow animate-cartoon-bounce">
            nhàm chán
          </span>
        </Text>

        <p
          className="animate-cartoon-slide-up mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          style={{ animationDelay: "0.35s" }}
        >
          {siteConfig.tagline} — {siteConfig.description.split("—")[0]?.trim()}
        </p>

        <div
          className="animate-cartoon-slide-up mt-10 flex flex-wrap gap-4"
          style={{ animationDelay: "0.5s" }}
        >
          <Button size="lg" render={<Link href="#projects" />}>
            Xem projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white"
            render={<Link href="#connect" />}
          >
            Kết nối với mình
          </Button>
        </div>

        <div
          className="animate-cartoon-slide-up mt-12 flex flex-wrap gap-3"
          style={{ animationDelay: "0.65s" }}
        >
          {siteConfig.heroTags.map((tag, i) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-2 border-black bg-secondary transition-transform hover:-rotate-2 hover:scale-105"
              style={{ animationDelay: `${0.7 + i * 0.08}s` }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="animate-cartoon-float pointer-events-none absolute -right-8 top-12 hidden h-32 w-32 border-2 border-black bg-muted lg:block brutal-shadow-lg"
          style={{ "--float-rotate": "12deg" } as CSSProperties}
      />
      <div
        aria-hidden="true"
        className="animate-cartoon-float pointer-events-none absolute bottom-8 left-8 hidden h-20 w-20 border-2 border-black bg-accent lg:block brutal-shadow"
        style={
          {
            "--float-rotate": "-6deg",
            animationDelay: "1.2s",
          } as CSSProperties
        }
      />
    </section>
  );
}
