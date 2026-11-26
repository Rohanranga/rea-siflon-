import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { siteUrl } from "@/lib/site";

const newsItems = [
  {
    slug: "who-gmp-renewal-2024",
    title: "Siflon Pharma renews WHO-GMP certification",
    date: "2024-11-15",
    excerpt: "Siflon Pharma's active pharmaceutical ingredient and formulation manufacturing facility has successfully renewed its WHO-GMP certificate following a comprehensive regulatory audit.",
    category: "Quality",
  },
  {
    slug: "export-expansion-2024",
    title: "New regulatory approvals in three African markets",
    date: "2024-09-22",
    excerpt: "Veterinary anthelmintic and antibiotic products receive marketing authorisation in Kenya, Nigeria, and Tanzania, expanding Siflon's footprint to 62 export countries.",
    category: "Exports",
  },
  {
    slug: "polymer-capacity-2024",
    title: "Siflon Polymers commissions new fluoropolymer line",
    date: "2024-07-08",
    excerpt: "Additional PTFE and PVDF production capacity comes online at the Telangana facility, supporting demand from chemical processing and EV battery sectors.",
    category: "Manufacturing",
  },
  {
    slug: "zed-certification-2024",
    title: "Siflon Drugs achieves ZED Bronze maturity",
    date: "2024-05-18",
    excerpt: "Government of India's Zero Defect Zero Effect assessment recognises Siflon Drugs' quality management and lean manufacturing practices at Bronze level.",
    category: "Quality",
  },
  {
    slug: "cdmo-partnership-2024",
    title: "Strategic CDMO partnership for European veterinary client",
    date: "2024-03-12",
    excerpt: "Long-term supply agreement signed for veterinary API development and commercial manufacturing under EU GMP-aligned quality systems.",
    category: "Partnerships",
  },
];

export const metadata: Metadata = {
  title: "News & Updates | Siflon Group",
  description: "Latest news from Siflon Group — WHO-GMP updates, export market expansions, manufacturing investments, certifications, and strategic partnerships across pharmaceuticals, animal health, and industrial materials.",
  keywords: [
    "Siflon Group news",
    "pharmaceutical company updates",
    "veterinary API announcements",
    "manufacturing investment India",
    "WHO-GMP renewal",
    "export market expansion",
    "ZED certification",
    "CDMO partnership",
    "industrial polymer news",
    "pharma industry updates",
  ],
  openGraph: {
    title: "News & Updates | Siflon Group",
    description: "Latest news: WHO-GMP renewal, export expansions, manufacturing investments, certifications & partnerships.",
    url: siteUrl("/news"),
    siteName: "Siflon Group",
    images: [
      {
        url: siteUrl("/images/og-default.jpg"),
        width: 1200,
        height: 630,
        alt: "Siflon Group News & Updates",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@siflongroup",
    creator: "@siflongroup",
    title: "News & Updates | Siflon Group",
    description: "WHO-GMP renewal, new export markets, polymer capacity expansion, ZED certification, CDMO partnerships.",
    images: [siteUrl("/images/og-default.jpg")],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl("/news") },
};

export default function NewsPage() {
  return (
    <div className="news-full">
      <PageShell
        eyebrow="News & updates"
        title="Latest from Siflon Group."
        subtitle="Regulatory milestones, market expansions, capacity investments, and strategic announcements."
      >
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "News" },
          ]}
        />
        <BreadcrumbJsonLd
          items={[
            { label: "Home", href: "/" },
            { label: "News" },
          ]}
        />

        <section className="news-section section-shell">
          <div className="news-grid">
            {newsItems.map((item) => (
              <article key={item.slug} className="news-card">
                <div className="news-card-meta">
                  <time dateTime={item.date}>{new Date(item.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</time>
                  <span className="news-category">{item.category}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <a href={`/news/${item.slug}`} className="news-link">
                  Read more <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="news-section section-shell" style={{ background: "var(--color-bg-alt)" }}>
          <h2>Stay informed</h2>
          <p className="section-lead">
            Subscribe to receive regulatory updates, market announcements, and technical publications from Siflon Group divisions.
          </p>
          <div className="section-cta">
            <a href="/contact" className="btn btn-primary">
              Subscribe to updates
            </a>
            <a href="https://www.linkedin.com/company/siflon-group" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Follow on LinkedIn
            </a>
          </div>
        </section>

        <section className="news-section section-shell">
          <h2>Media enquiries</h2>
          <p className="section-lead">
            For press requests, interview coordination, or corporate information, contact our communications team.
          </p>
          <div className="section-cta">
            <a href="/contact" className="btn btn-primary">
              Contact media relations
            </a>
          </div>
        </section>
      </PageShell>
    </div>
  );
}