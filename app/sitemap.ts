import type { MetadataRoute } from "next";

import { getPublishedBusinesses } from "@/data/businesses";
import { siteUrl } from "@/lib/site";

const staticRoutes = [
  { url: siteUrl("/"), lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
  { url: siteUrl("/about"), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: siteUrl("/contact"), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: siteUrl("/products"), lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
  { url: siteUrl("/resources"), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
  { url: siteUrl("/quality"), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: siteUrl("/gallery"), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
  // Additional routes for SEO/GEO based on competitive analysis
  { url: siteUrl("/manufacturing"), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: siteUrl("/certifications"), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: siteUrl("/exports"), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: siteUrl("/careers"), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
  { url: siteUrl("/news"), lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const businesses = getPublishedBusinesses();

  const businessRoutes = businesses.map((business) => ({
    url: siteUrl(`/businesses/${business.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Individual product routes for divisions (based on product array)
  const productRoutes = businesses.flatMap((business) =>
    (business.products || []).map((product, index) => ({
      url: siteUrl(`/businesses/${business.slug}/products/${product.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticRoutes, ...businessRoutes, ...productRoutes];
}
