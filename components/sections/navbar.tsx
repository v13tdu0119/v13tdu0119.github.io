"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getSocialLinks, siteConfig } from "@/config/site";
import { SocialIcons } from "@/components/sections/social-icons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const socialLinks = getSocialLinks();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min((y / docHeight) * 100, 100) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b-2 border-black bg-background transition-all duration-300 ease-out",
          mounted && "animate-header-enter",
          scrolled
            ? "py-2 shadow-[0_4px_0_0_#000] backdrop-blur-md bg-background/98"
            : "py-3 shadow-none backdrop-blur-sm bg-background/90",
        )}
      >
        <div
          className="absolute inset-x-0 bottom-0 h-1 bg-muted"
          aria-hidden="true"
        >
          <div
            className="h-full bg-primary transition-[width] duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <nav
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className={cn(
              "font-display font-bold tracking-tight transition-all duration-300 hover:animate-cartoon-wiggle",
              scrolled ? "text-base" : "text-lg",
            )}
          >
            {siteConfig.name}
          </Link>

          <ul className="hidden items-center gap-6 md:flex">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link font-medium transition-colors hover:text-primary-hover"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <SocialIcons links={socialLinks} />
          </div>

          <details className="group relative md:hidden">
            <summary className="cursor-pointer list-none border-2 border-black bg-white px-3 py-1.5 font-medium shadow-sm transition-transform active:scale-95 marker:content-none">
              Menu
            </summary>
            <div className="animate-cartoon-pop-in absolute right-0 mt-2 w-48 border-2 border-black bg-white p-4 shadow-md">
              <ul className="flex flex-col gap-3">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block font-medium">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t-2 border-black pt-4">
                <SocialIcons links={socialLinks} />
              </div>
            </div>
          </details>
        </nav>
      </header>

      {/* Spacer for fixed header */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none transition-all duration-300",
          scrolled ? "h-14" : "h-[4.25rem]",
        )}
      />
    </>
  );
}
