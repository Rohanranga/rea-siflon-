import type { MetadataRoute } from "next";

import { getPublishedBusinesses } from "@/data/businesses";
import { siteUrl } from "@/lib/site";

const staticRoutes = [
  { url: siteUrl("/"), lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
  { url: siteUrl("/about"), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: siteUrl("/contact"), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: siteUrl("/products"), lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
  { url: siteUrl("/resources"), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
  { url: siteUrl("/quality"), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: siteUrl("/gallery"), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const businesses = getPublishedBusinesses();

  const businessRoutes = businesses.map((business) => ({
    url: siteUrl(`/businesses/${business.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...businessRoutes];
}
