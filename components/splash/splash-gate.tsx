"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SPLASH_TEXT = "Welcome to my Dobby home";
const TYPING_DURATION_MS = 2200;
const HOLD_AFTER_TYPING_MS = 300;
const FADE_OUT_MS = 500;
const SESSION_KEY = "dobby-splash-seen";

type SplashGateProps = {
  children: React.ReactNode;
};

export function SplashGate({ children }: SplashGateProps) {
  const [visible, setVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (sessionStorage.getItem(SESSION_KEY) || prefersReducedMotion) {
      return;
    }

    setVisible(true);

    const charDelay = TYPING_DURATION_MS / SPLASH_TEXT.length;
    let charIndex = 0;
    let fadeTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const typingTimer = setInterval(() => {
      charIndex += 1;
      setDisplayedText(SPLASH_TEXT.slice(0, charIndex));

      if (charIndex >= SPLASH_TEXT.length) {
        clearInterval(typingTimer);

        fadeTimer = setTimeout(() => {
          setFadeOut(true);

          hideTimer = setTimeout(() => {
            sessionStorage.setItem(SESSION_KEY, "1");
            setVisible(false);
          }, FADE_OUT_MS);
        }, HOLD_AFTER_TYPING_MS);
      }
    }, charDelay);

    return () => {
      clearInterval(typingTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {children}

      {visible && (
        <div
          className={cn(
            "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500",
            fadeOut ? "pointer-events-none opacity-0" : "opacity-100",
          )}
          aria-live="polite"
          aria-label="Welcome splash screen"
        >
          <div className="border-4 border-black bg-secondary px-8 py-10 brutal-shadow-lg sm:px-12 sm:py-14">
            <p className="font-momo min-h-[1.5em] text-center text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              {displayedText}
              {!fadeOut && (
                <span
                  className="ml-0.5 inline-block h-[0.9em] w-[3px] animate-splash-cursor bg-foreground align-middle"
                  aria-hidden="true"
                />
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
