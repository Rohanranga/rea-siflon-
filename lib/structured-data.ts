import { SITE, siteUrl } from "./site";

/** Organization structured data (schema.org). Published on every page. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: siteUrl("/images/siflon-gemini-logo.png"),
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 76-77, Phase-1, Mythrinagar, Madinaguda",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500050",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9618828282",
      contactType: "customer service",
      availableLanguage: ["en", "hi"],
    },
  };
}

/** WebSite structured data (schema.org). Published on every page. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      "@type": "SearchAction",
      target: siteUrl("/products?q={search_term_string}"),
      "query-input": "required name=search_term_string",
    },
  };
}

/** BreadcrumbList structured data (schema.org). Published per page. */
export function breadcrumbJsonLd(items: { label: string; href?: string }[]) {
  const listItems = items
    .filter((item) => Boolean(item.href))
    .map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? siteUrl(item.href) : undefined,
    }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: listItems,
  };
}
