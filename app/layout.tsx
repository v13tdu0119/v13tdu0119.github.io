import type { Metadata } from "next";
import { Inter, Raleway, SN_Pro } from "next/font/google";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/json-ld";
import { AppProviders } from "@/components/providers/app-providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  axes: ["opsz"],
  variable: "--font-sans",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin", "vietnamese"],
  variable: "--font-display",
  display: "swap",
});

const snPro = SN_Pro({
  subsets: ["latin", "vietnamese"],
  variable: "--font-head",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [{ url: "/avatar.jpg", type: "image/jpeg" }],
    apple: [{ url: "/avatar.jpg", type: "image/jpeg" }],
    shortcut: ["/avatar.jpg"],
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.locale.split("_")[0]}
      className={`${inter.variable} ${raleway.variable} ${snPro.variable} h-full bg-tid-bg text-tid-cream`}
    >
      <body className="min-h-full antialiased">
        <AppProviders>
          <JsonLd />
          <div className="min-h-full">{children}</div>
        </AppProviders>
      </body>
    </html>
  );
}
