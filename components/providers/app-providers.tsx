"use client";

import type { ReactNode } from "react";
import { SiteContentProvider } from "@/components/providers/site-content-provider";

export function AppProviders({ children }: { children: ReactNode }) {
  return <SiteContentProvider>{children}</SiteContentProvider>;
}
