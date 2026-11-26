import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Global Exports | Siflon Group",
  description: "Siflon Group exports pharmaceutical APIs, veterinary formulations, and industrial polymers to 60+ countries. Regulatory-compliant supply chain with document support for international markets.",
  keywords: [
    "Siflon Group exports",
    "pharmaceutical export India",
    "veterinary API export",
    "animal health export 60 countries",
    "industrial polymer export",
    "pharmaceutical international trade",
    "API export regulatory compliance",
    "bulk drug exporter India",
    "veterinary medicine export",
    "CDMO export services",
  ],
  openGraph: {
    title: "Global Exports | Siflon Group",
    description: "Exporting pharmaceutical APIs, veterinary formulations & industrial polymers to 60+ countries. Regulatory-compliant supply chain.",
    url: siteUrl("/exports"),
    siteName: "Siflon Group",
    images: [
      {
        url: siteUrl("/images/og-default.jpg"),
        width: 1200,
        height: 630,
        alt: "Siflon Group Global Exports",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@siflongroup",
    creator: "@siflongroup",
    title: "Global Exports | Siflon Group",
    description: "60+ export countries for pharma APIs, veterinary formulations, industrial polymers. Regulatory-compliant supply.",
    images: [siteUrl("/images/og-default.jpg")],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl("/exports") },
};

export default function ExportsPage() {
  return (
    <div className="exports-full">
      <PageShell
        eyebrow="Global exports"
        title="Export markets & compliance."
        subtitle="Siflon Group supplies pharmaceutical APIs, veterinary products, and industrial polymers to regulated markets worldwide."
      >
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Exports" },
          ]}
        />
        <BreadcrumbJsonLd
          items={[
            { label: "Home", href: "/" },
            { label: "Exports" },
          ]}
        />

        <section className="exports-section section-shell">
          <h2>Export footprint</h2>
          <p className="section-lead">
            Active in 60+ countries across Asia, Africa, the Middle East, Latin America, and CIS regions.
            Each market is served with regulatory strategy matched to local requirements.
          </p>
          <div className="exports-grid">
            <article className="export-region">
              <h3>Asia-Pacific</h3>
              <p>India, Southeast Asia, East Asia — ASEAN regulatory alignment, country-specific dossiers.</p>
            </article>
            <article className="export-region">
              <h3>Africa</h3>
              <p>Sub-Saharan and North Africa — WHO prequalification pathway, national authority submissions.</p>
            </article>
            <article className="export-region">
              <h3>Middle East</h3>
              <p>GCC, Levant — SFDA, MOH, and local ministry registrations for human and veterinary products.</p>
            </article>
            <article className="export-region">
              <h3>Latin America</h3>
              <p>Brazil, Mexico, Andean, Southern Cone — ANVISA, COFEPRIS, INVIMA, and regional harmonization.</p>
            </article>
            <article className="export-region">
              <h3>CIS & Eastern Europe</h3>
              <p>Russia, Kazakhstan, Uzbekistan, Ukraine — EAEU registration, national procedures.</p>
            </article>
            <article className="export-region">
              <h3>Rest of World</h3>
              <p>Select markets on a registration-by-registration basis with local partner support.</p>
            </article>
          </div>
        </section>

        <section className="exports-section section-shell" style={{ background: "var(--color-bg-alt)" }}>
          <h2>Regulatory document support</h2>
          <p className="section-lead">
            We provide the documentation required for product registration and import licensing in destination markets.
          </p>
          <div className="exports-grid">
            <article className="export-doc">
              <h3>Pharmaceutical dossiers</h3>
              <p>CTD/ACTD format, DMF/ASMF for APIs, finished product dossiers, stability data, GMP certificates.</p>
            </article>
            <article className="export-doc">
              <h3>Veterinary registrations</h3>
              <p>Veterinary drug master files, residue studies, MRL documentation, GVP compliance.</p>
            </article>
            <article className="export-doc">
              <h3>Industrial materials</h3>
              <p>Technical data sheets, material safety data sheets (MSDS/SDS), RoHS/REACH declarations, test certificates.</p>
            </article>
            <article className="export-doc">
              <h3>Supply chain documents</h3>
              <p>Certificates of analysis (CoA), certificates of origin, free sale certificates, shipping documentation.</p>
            </article>
          </div>
        </section>

        <section className="exports-section section-shell">
          <h2>Export compliance & quality</h2>
          <p className="section-lead">
            All export shipments comply with Indian export regulations (DGFT, customs) and destination country import requirements.
          </p>
          <ul className="capability-list">
            <li>DGFT IEC compliance and export licence management</li>
            <li>Pharmaceutical export NOCs and regulatory clearances</li>
            <li>Cold chain and GDP-compliant logistics for temperature-sensitive products</li>
            <li>Batch-specific CoA and release documentation per shipment</li>
            <li>Track-and-trace serialization where mandated (e.g., India, EU, Russia, Turkey)</li>
            <li>Incoterms flexibility: FOB, CIF, CFR, DAP, DDP</li>
          </ul>
        </section>

        <section className="exports-section section-shell" style={{ background: "var(--color-bg-alt)" }}>
          <h2>Partner with Siflon for your market</h2>
          <p className="section-lead">
            We work with distributors, procurement agencies, and end-users to register and supply products in new markets.
          </p>
          <div className="section-cta">
            <a href="/contact" className="btn btn-primary">Discuss export requirements</a>
          </div>
        </section>
      </PageShell>
    </div>
  );
}