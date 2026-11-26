import Script from "next/script";
import {
  breadcrumbJsonLd,
  corporateContactJsonLd,
  faqJsonLd,
  howToJsonLd,
  organizationJsonLd,
  productJsonLd,
  serviceJsonLd,
  websiteJsonLd,
} from "@/lib/structured-data";

/** Renders Organization + WebSite + CorporateContact JSON-LD (site-wide, once per page). */
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
      <Script
        id="json-ld-corporate-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateContactJsonLd()) }}
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

/** Renders Product JSON-LD (division/business pages). */
export function ProductJsonLd({ product }: { product: { name: string; description: string; image?: string; url?: string; brand?: string; category?: string } }) {
  return (
    <Script
      id="json-ld-product"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product)) }}
    />
  );
}

/** Renders Service JSON-LD (services/contract manufacturing pages). */
export function ServiceJsonLd({ service }: { service: { name: string; description: string; areaServed?: string[]; provider?: string } }) {
  return (
    <Script
      id="json-ld-service"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(service)) }}
    />
  );
}

/** Renders FAQ JSON-LD (FAQ sections). */
export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <Script
      id="json-ld-faq"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
    />
  );
}

/** Renders HowTo JSON-LD (process/quality pages). */
export function HowToJsonLd({ steps }: { steps: { name: string; text: string; image?: string }[] }) {
  return (
    <Script
      id="json-ld-howto"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd(steps)) }}
    />
  );
}
