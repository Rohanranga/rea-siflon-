import { SITE, siteUrl } from "./site";

/** Organization structured data (schema.org). Published on every page. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: SITE.organization?.legalName,
    foundingDate: SITE.organization?.foundingYear
      ? `${SITE.organization.foundingYear}-01-01`
      : undefined,
    url: SITE.url,
    logo: siteUrl(SITE.organization?.logo || "/images/siflon-gemini-logo.png"),
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.organization?.address?.streetAddress || "Plot No. 76-77, Phase-1, Mythrinagar, Madinaguda",
      addressLocality: SITE.organization?.address?.addressLocality || "Hyderabad",
      addressRegion: SITE.organization?.address?.addressRegion || "Telangana",
      postalCode: SITE.organization?.address?.postalCode || "500050",
      addressCountry: SITE.organization?.address?.addressCountry || "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.organization?.contactPoint?.telephone || "+91-9618828282",
      contactType: SITE.organization?.contactPoint?.contactType || "customer service",
      availableLanguage: SITE.organization?.contactPoint?.availableLanguage || ["en", "hi"],
      areaServed: SITE.organization?.contactPoint?.areaServed || "IN",
    },
    sameAs: SITE.social
      ? [
          SITE.social.linkedin,
          SITE.social.twitter,
          SITE.social.facebook,
          SITE.social.youtube,
          SITE.social.instagram,
        ].filter(Boolean)
      : undefined,
    knowsAbout: SITE.keywords,
    areaServed: "Worldwide",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 100,
      maxValue: 500,
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
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    inLanguage: SITE.language,
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

/** Product structured data (schema.org). For division/business pages. */
export function productJsonLd(product: {
  name: string;
  description: string;
  image?: string;
  url?: string;
  brand?: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image ? siteUrl(product.image) : undefined,
    url: product.url ? siteUrl(product.url) : undefined,
    brand: {
      "@type": "Brand",
      name: product.brand || SITE.name,
    },
    category: product.category,
    manufacturer: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    offers: {
      "@type": "AggregateOffer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      lowPrice: "0",
      highPrice: "0",
      seller: {
        "@type": "Organization",
        name: SITE.name,
      },
    },
  };
}

/** Service structured data (schema.org). For services/contract manufacturing pages. */
export function serviceJsonLd(service: {
  name: string;
  description: string;
  areaServed?: string[];
  provider?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: service.provider || SITE.name,
      url: SITE.url,
    },
    areaServed: service.areaServed || ["IN", "Worldwide"],
    serviceType: "Contract Manufacturing, API Production, Quality Compliance",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: siteUrl("/contact"),
      availableLanguage: ["en", "hi"],
    },
  };
}

/** FAQ structured data (schema.org). For FAQ sections. */
export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** HowTo structured data (schema.org). For process/quality pages. */
export function howToJsonLd(steps: { name: string; text: string; image?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Quality Assurance Process",
    description: "Our quality assurance and compliance verification process",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image ? siteUrl(step.image) : undefined,
    })),
  };
}

/** CorporateContact structured data for enhanced search appearance. */
export function corporateContactJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9618828282",
        contactType: "customer service",
        availableLanguage: ["en", "hi"],
        areaServed: "IN",
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9618828282",
        contactType: "sales",
        availableLanguage: ["en", "hi"],
        areaServed: "Worldwide",
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9618828282",
        contactType: "technical support",
        availableLanguage: ["en"],
        areaServed: "Worldwide",
      },
    ],
  };
}
