"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getSocialLinks } from "@/lib/site-content-utils";
import { Button } from "@/components/retroui/Button";
import { SocialIcons } from "@/components/sections/social-icons";
import { useSiteContent } from "@/components/providers/site-content-provider";
import { cn } from "@/lib/utils";

export function StickyDobby() {
  const { content } = useSiteContent();
  const [open, setOpen] = useState(false);
  const socialLinks = getSocialLinks(content);
  const { stickyBubble } = content;
  const facebookUrl = content.social.facebook;

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div
      className="fixed bottom-4 right-4 z-40 flex flex-col items-end sm:bottom-6 sm:right-6"
      aria-live="polite"
    >
      {open && (
        <div
          className="animate-cartoon-pop-in mb-3 w-[min(100vw-2rem,18rem)] border-2 border-black bg-white brutal-shadow-lg"
          role="dialog"
          aria-label="Chat with Dobby"
        >
          <div className="border-b-2 border-black bg-primary px-4 py-3">
            <p className="font-head text-sm font-bold">{stickyBubble.greeting}</p>
            <p className="mt-1 text-xs leading-relaxed">{stickyBubble.message}</p>
          </div>

          <div className="space-y-3 p-4">
            <SocialIcons links={socialLinks} className="flex-wrap gap-2" />

            <div className="flex flex-col gap-2">
              {facebookUrl && (
                <Button
                  size="sm"
                  className="w-full"
                  render={
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  {stickyBubble.ctaFacebook}
                </Button>
              )}
              <Button
                size="sm"
                variant="outline"
                className="w-full bg-white"
                render={
                  <a href={`mailto:${content.author.email}`} />
                }
              >
                {stickyBubble.ctaEmail}
              </Button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Đóng chat Dobby" : "Mở chat Dobby"}
        aria-expanded={open}
        className={cn(
          "group relative h-16 w-16 overflow-hidden rounded-full border-[3px] border-black bg-white brutal-shadow transition-transform hover:scale-105 active:scale-95 sm:h-[4.5rem] sm:w-[4.5rem]",
          !open && "animate-cartoon-bounce",
        )}
      >
        <Image
          src="/icon.png"
          alt="Dobby sticky chat"
          fill
          sizes="72px"
          className="object-cover object-top"
          priority={false}
        />
        {!open && (
          <span
            className="absolute right-1 top-1 h-3 w-3 rounded-full border-2 border-black bg-destructive"
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  );
}
