import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { ExpandedFooter } from "@/components/expanded-footer";
import { SiteJsonLd } from "@/components/json-ld";
import { SITE, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "Siflon Group | Diverse Expertise. One Group.",
    template: "%s | Siflon Group",
  },
  description: "Discover Siflon Group's specialist businesses across pharmaceuticals, animal health and advanced industrial materials. WHO-GMP certified manufacturing, Form-25 licensed, exporting to 60+ countries since 1996.",
  keywords: SITE.keywords as string[],
  authors: [{ name: "Siflon Group", url: SITE.url }],
  creator: "Siflon Group",
  publisher: "Siflon Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: siteUrl("/"),
    languages: {
      "en-US": siteUrl("/"),
      "en-IN": siteUrl("/"),
      "x-default": siteUrl("/"),
    },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: siteUrl("/"),
    siteName: SITE.name,
    title: "Siflon Group | Diverse Expertise. One Group.",
    description: "Discover Siflon Group's specialist businesses across pharmaceuticals, animal health and advanced industrial materials. WHO-GMP certified, Form-25 licensed, 60+ export countries.",
    images: [
      {
        url: siteUrl("/images/og-default.jpg"),
        width: 1200,
        height: 630,
        alt: "Siflon Group - Pharmaceutical, Animal Health & Industrial Materials Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@siflongroup",
    creator: "@siflongroup",
    title: "Siflon Group | Diverse Expertise. One Group.",
    description: "WHO-GMP certified pharmaceutical manufacturing, veterinary APIs, animal health & industrial polymers. 60+ export countries since 1996.",
    images: [siteUrl("/images/og-default.jpg")],
  },
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
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
    other: {
      "msvalidate.01": "bing-verification-code",
      "alexaVerifyID": "alexa-verification-code",
    },
  },
  category: "Manufacturing",
  classification: "Pharmaceutical Manufacturing, Animal Health, Industrial Polymers",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={SITE.language}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link rel="dns-prefetch" href="https://x.com" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
      </head>
      <body>
        <a href="#main" className="sr-only focus-visible focus-md:focus-in-block">
          Skip to main content
        </a>
        <SiteHeader />
        <SiteJsonLd />
        <main id="main">
          {children}
        </main>
        <ExpandedFooter />
      </body>
    </html>
  );
}