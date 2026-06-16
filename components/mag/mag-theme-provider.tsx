"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "dark" | "light";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void } | null>(null);

export function MagThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("mag-theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("mag-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) }}>
      <div className="mag-page min-h-dvh" data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useMagTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useMagTheme must be used within MagThemeProvider");
  return ctx;
}
