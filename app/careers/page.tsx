import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers | Siflon Group",
  description: "Join Siflon Group — pharmaceutical manufacturing, veterinary APIs, animal health, and industrial polymers. Engineering, quality, regulatory, sales, and operations roles across multiple sites in India.",
  keywords: [
    "Siflon Group careers",
    "pharmaceutical jobs India",
    "veterinary API jobs",
    "animal health careers",
    "industrial polymer jobs",
    "manufacturing jobs Hyderabad",
    "quality assurance pharma jobs",
    "regulatory affairs careers",
    "production engineer pharma",
    "CDMO careers India",
  ],
  openGraph: {
    title: "Careers | Siflon Group",
    description: "Pharmaceutical, veterinary & industrial manufacturing careers. Engineering, quality, regulatory, sales roles across India sites.",
    url: siteUrl("/careers"),
    siteName: "Siflon Group",
    images: [
      {
        url: siteUrl("/images/og-default.jpg"),
        width: 1200,
        height: 630,
        alt: "Siflon Group Careers",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@siflongroup",
    creator: "@siflongroup",
    title: "Careers | Siflon Group",
    description: "Pharma, veterinary & polymer manufacturing careers. Multiple sites in India. Apply now.",
    images: [siteUrl("/images/og-default.jpg")],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl("/careers") },
};

export default function CareersPage() {
  return (
    <div className="careers-full">
      <PageShell
        eyebrow="Careers"
        title="Build your career at Siflon Group."
        subtitle="Pharmaceutical APIs, veterinary formulations, and advanced industrial materials. Multiple sites. Real impact."
      >
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Careers" },
          ]}
        />
        <BreadcrumbJsonLd
          items={[
            { label: "Home", href: "/" },
            { label: "Careers" },
          ]}
        />

        <section className="careers-section section-shell">
          <h2>Why Siflon Group?</h2>
          <p className="section-lead">
            We are a diversified manufacturing group with four specialist businesses — pharmaceuticals, veterinary APIs,
            industrial polymers, and advanced piping systems. Each division operates with autonomy, backed by group-level
            governance and shared values.
          </p>
          <div className="careers-benefits">
            <article className="benefit-card">
              <h3>Specialist depth</h3>
              <p>Work on complex chemistry — from API synthesis and formulation development to fluoropolymer engineering and piping system design.</p>
            </article>
            <article className="benefit-card">
              <h3>Regulatory exposure</h3>
              <p>WHO-GMP, Form-25, ISO 9001, HACCP, international dossier preparation — hands-on experience with global compliance frameworks.</p>
            </article>
            <article className="benefit-card">
              <h3>Export mindset</h3>
              <p>Products shipped to 60+ countries. Cross-functional collaboration with regulatory, logistics, and commercial teams worldwide.</p>
            </article>
            <article className="benefit-card">
              <h3>Growth pathways</h3>
              <p>Technical and management tracks with internal mobility across divisions. Structured learning and mentorship programs.</p>
            </article>
          </div>
        </section>

        <section className="careers-section section-shell" style={{ background: "var(--color-bg-alt)" }}>
          <h2>Current focus areas</h2>
          <p className="section-lead">
            We regularly hire across these functions. Specific openings are posted on our LinkedIn page and shared with recruitment partners.
          </p>
          <div className="careers-grid">
            <article className="career-category">
              <h3>Production & operations</h3>
              <ul>
                <li>Process engineers (API, formulation, polymer)</li>
                <li>Production supervisors & shift in-charges</li>
                <li>Plant utilities & maintenance engineers</li>
                <li>EHS & sustainability specialists</li>
              </ul>
            </article>
            <article className="career-category">
              <h3>Quality & regulatory</h3>
              <ul>
                <li>QA/QC analysts & managers (HPLC, GC, microbiology)</li>
                <li>Regulatory affairs — domestic & international</li>
                <li>Documentation & compliance officers</li>
                <li>Validation & qualification engineers</li>
              </ul>
            </article>
            <article className="career-category">
              <h3>R&D and development</h3>
              <ul>
                <li>Process development chemists</li>
                <li>Formulation scientists</li>
                <li>Analytical method development</li>
                <li>Polymer application development</li>
              </ul>
            </article>
            <article className="career-category">
              <h3>Commercial & supply chain</h3>
              <ul>
                <li>International business development</li>
                <li>Export documentation & logistics</li>
                <li>Procurement & vendor management</li>
                <li>Key account management</li>
              </ul>
            </article>
            <article className="career-category">
              <h3>Corporate functions</h3>
              <ul>
                <li>Finance, accounts & taxation</li>
                <li>HR & talent acquisition</li>
                <li>IT & digital transformation</li>
                <li>Legal & company secretarial</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="careers-section section-shell">
          <h2>Locations</h2>
          <p className="section-lead">
            Primary manufacturing and corporate sites in Telangana, with divisional offices and depots across India.
          </p>
          <div className="locations-grid">
            <article className="location-card">
              <h3>Hyderabad (Corporate & Pharma)</h3>
              <p>Plot No. 76-77, Phase-1, Mythrinagar, Madinaguda, Hyderabad — 500050, Telangana</p>
            </article>
            <article className="location-card">
              <h3>Manufacturing sites</h3>
              <p>Dedicated facilities for each division — details shared at interview stage.</p>
            </article>
          </div>
        </section>

        <section className="careers-section section-shell" style={{ background: "var(--color-bg-alt)" }}>
          <h2>How to apply</h2>
          <p className="section-lead">
            We do not accept unsolicited CVs via email. Current openings are posted on LinkedIn and through our recruitment partners.
          </p>
          <div className="section-cta">
            <a href="https://www.linkedin.com/company/siflon-group/jobs" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View openings on LinkedIn
            </a>
            <a href="/contact" className="btn btn-secondary">
              General enquiry
            </a>
          </div>
        </section>
      </PageShell>
    </div>
  );
}