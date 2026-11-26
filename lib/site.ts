// Site configuration for SEO metadata, sitemap, robots, and structured data.
//
// NOTE: The production domain below matches the fallback origin already used in
// app/api/robots/route.ts. It has not been confirmed from deployment configuration
// and should be verified against the actual production URL before launch.
export const SITE = {
  name: "Siflon Group",
  url: "https://siflon-group.com",
  description:
    "Discover Siflon Group's specialist businesses across pharmaceuticals, animal health and advanced industrial materials. WHO-GMP certified manufacturing, Form-25 licensed, exporting to 60+ countries since 1996.",
  language: "en-US",
  locale: "en_IN",
  // SEO keywords based on competitive analysis (Cipla, Reliance, Pfizer, Siflon subsidiaries)
  keywords: [
    "Siflon Group",
    "pharmaceutical manufacturing",
    "veterinary API",
    "animal health",
    "industrial polymers",
    "WHO-GMP certified",
    "Form-25 manufacturing licence",
    "API manufacturing India",
    "bulk drug manufacturer",
    "contract manufacturing",
    "pharmaceutical export",
    "quality compliance",
  ] as string[],
  // Social media profiles for structured data (sameAs)
  social: {
    linkedin: "https://www.linkedin.com/company/siflon-group",
    twitter: "https://x.com/siflongroup",
    facebook: "https://www.facebook.com/siflongroup",
    youtube: "https://www.youtube.com/@siflongroup",
    instagram: "https://www.instagram.com/siflongroup",
  },
  // Organization details for structured data
  organization: {
    legalName: "Siflon Group",
    foundingYear: 1996,
    address: {
      streetAddress: "Plot No. 76-77, Phase-1, Mythrinagar, Madinaguda",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500050",
      addressCountry: "IN",
    },
    contactPoint: {
      telephone: "+91-9618828282",
      contactType: "customer service",
      availableLanguage: ["en", "hi"],
      areaServed: "IN",
    },
    logo: "/images/siflon-gemini-logo.png",
  },
} as const;

export function siteUrl(path = ""): string {
  return `${SITE.url}${path}`;
}
