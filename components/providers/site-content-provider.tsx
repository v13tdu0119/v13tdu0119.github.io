"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { defaultSiteContent } from "@/config/site";
import { subscribeSiteContent } from "@/lib/firebase/content-service";
import { isFirebaseConfigured } from "@/lib/firebase/config";
import type { SiteContent } from "@/types/site-content";

type SiteContentContextValue = {
  content: SiteContent;
  loading: boolean;
  source: "default" | "firestore";
};

const SiteContentContext = createContext<SiteContentContextValue>({
  content: defaultSiteContent,
  loading: false,
  source: "default",
});

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [loading, setLoading] = useState(isFirebaseConfigured());
  const [source, setSource] = useState<"default" | "firestore">("default");

  useEffect(() => {
    if (!isFirebaseConfigured()) return;

    const unsubscribe = subscribeSiteContent(
      defaultSiteContent,
      (next) => {
        setContent(next);
        setSource("firestore");
        setLoading(false);
      },
      () => {
        setContent(defaultSiteContent);
        setSource("default");
        setLoading(false);
      },
    );

    return () => unsubscribe?.();
  }, []);

  const value = useMemo(
    () => ({ content, loading, source }),
    [content, loading, source],
  );

  return (
    <SiteContentContext.Provider value={value}>
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  return useContext(SiteContentContext);
}
