// Site configuration for SEO metadata, sitemap, robots, and structured data.
//
// NOTE: The production domain below matches the fallback origin already used in
// app/api/robots/route.ts. It has not been confirmed from deployment configuration
// and should be verified against the actual production URL before launch.
export const SITE = {
  name: "Siflon Group",
  url: "https://siflon-group.com",
  description:
    "Discover Siflon Group's specialist businesses across pharmaceuticals, animal health and advanced industrial materials.",
  language: "en-US",
  locale: "en_IN",
} as const;

export function siteUrl(path = ""): string {
  return `${SITE.url}${path}`;
}
