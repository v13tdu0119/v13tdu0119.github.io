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
    default: "v13tdu0119",
    template: "%s | v13tdu0119",
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
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png", type: "image/png" }],
    shortcut: ["/icon.png"],
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: "v13tdu0119",
    title: "v13tdu0119",
    description: siteConfig.description,
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "v13tdu0119",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "v13tdu0119",
    description: siteConfig.description,
    images: ["/icon.png"],
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
      className={`${inter.variable} ${raleway.variable} ${snPro.variable} h-full`}
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
