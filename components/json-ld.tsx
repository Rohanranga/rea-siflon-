import Script from "next/script";
import {
  breadcrumbJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/structured-data";

/** Renders Organization + WebSite JSON-LD (site-wide, once per page). */
export function SiteJsonLd() {
  return (
    <>
      <Script
        id="json-ld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <Script
        id="json-ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />
    </>
  );
}

/** Renders BreadcrumbList JSON-LD (page-specific). */
export function BreadcrumbJsonLd({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <Script
      id="json-ld-breadcrumb"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(items)) }}
    />
  );
}
