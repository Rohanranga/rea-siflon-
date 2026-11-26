import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities | Siflon Group",
  description: "Explore Siflon Group's WHO-GMP certified pharmaceutical manufacturing facilities, veterinary API production, and advanced industrial polymer manufacturing across multiple sites in India.",
  keywords: [
    "Siflon Group manufacturing",
    "WHO-GMP pharmaceutical facility",
    "veterinary API production",
    "animal health manufacturing",
    "industrial polymer manufacturing",
    "contract manufacturing India",
    "bulk drug manufacturing facility",
    "pharmaceutical plant India",
    "cGMP compliance manufacturing",
    "formulation manufacturing",
  ],
  openGraph: {
    title: "Manufacturing Capabilities | Siflon Group",
    description: "WHO-GMP certified pharmaceutical manufacturing, veterinary API production, and advanced industrial polymers. Multiple sites in India.",
    url: siteUrl("/manufacturing"),
    siteName: "Siflon Group",
    images: [
      {
        url: siteUrl("/images/og-default.jpg"),
        width: 1200,
        height: 630,
        alt: "Siflon Group Manufacturing Facilities",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@siflongroup",
    creator: "@siflongroup",
    title: "Manufacturing Capabilities | Siflon Group",
    description: "WHO-GMP certified pharma manufacturing, veterinary API, industrial polymers. Multiple India sites.",
    images: [siteUrl("/images/og-default.jpg")],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl("/manufacturing") },
};

export default function ManufacturingPage() {
  return (
    <div className="manufacturing-full">
      <PageShell
        eyebrow="Manufacturing"
        title="Manufacturing capabilities."
        subtitle="Purpose-built facilities for pharmaceutical APIs, veterinary formulations, and advanced industrial materials."
      >
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Manufacturing" },
          ]}
        />
        <BreadcrumbJsonLd
          items={[
            { label: "Home", href: "/" },
            { label: "Manufacturing" },
          ]}
        />

        <section className="manufacturing-section section-shell">
          <h2>Pharmaceutical & API manufacturing</h2>
          <p className="section-lead">
            Siflon Pharma operates WHO-GMP certified facilities for active pharmaceutical ingredients (APIs) and
            formulations. The site holds a Form-25 manufacturing licence under the Drugs and Cosmetics Act 1940.
          </p>
          <div className="capability-grid">
            <article className="capability-card">
              <h3>API synthesis</h3>
              <p>Multi-purpose synthesis blocks with reaction vessels, distillation, filtration, and drying equipment for veterinary and human APIs.</p>
            </article>
            <article className="capability-card">
              <h3>Formulation</h3>
              <p>Oral solids (tablets, capsules, powders), liquids, and injectables manufactured under controlled environmental conditions.</p>
            </article>
            <article className="capability-card">
              <h3>Quality control</h3>
              <p>In-house QC laboratories with HPLC, GC, UV-Vis, FTIR, dissolution, and microbiological testing capabilities.</p>
            </article>
            <article className="capability-card">
              <h3>Warehousing</h3>
              <p>Temperature-controlled storage for raw materials, intermediates, and finished goods with GDP-compliant distribution.</p>
            </article>
          </div>
        </section>

        <section className="manufacturing-section section-shell" style={{ background: "var(--color-bg-alt)" }}>
          <h2>Veterinary & animal health</h2>
          <p className="section-lead">
            Dedicated production lines for veterinary APIs and formulations serving livestock, poultry, aquaculture, and companion animals.
          </p>
          <div className="capability-grid">
            <article className="capability-card">
              <h3>Anthelmintics</h3>
              <p>Broad-spectrum antiparasitic APIs including benzimidazoles, macrocyclic lactones, and praziquantel derivatives.</p>
            </article>
            <article className="capability-card">
              <h3>Antibiotics</h3>
              <p>Veterinary-grade antibiotics for therapeutic and prophylactic use in food-producing and companion animals.</p>
            </article>
            <article className="capability-card">
              <h3>Feed additives</h3>
              <p>Nutritional and functional feed additives including premixes, concentrates, and specialty supplements.</p>
            </article>
            <article className="capability-card">
              <h3>Ectoparasiticides</h3>
              <p>Topical and systemic formulations for tick, mite, flea, and lice control across species.</p>
            </article>
          </div>
        </section>

        <section className="manufacturing-section section-shell">
          <h2>Industrial polymers & advanced materials</h2>
          <p className="section-lead">
            Siflon Polymers produces specialty polymers and Siflon Pipes manufactures advanced piping systems for industrial applications.
          </p>
          <div className="capability-grid">
            <article className="capability-card">
              <h3>Fluoropolymers</h3>
              <p>PTFE, PVDF, ETFE, and FEP resins and compounds for chemical processing, electrical, and automotive sectors.</p>
            </article>
            <article className="capability-card">
              <h3>Engineering thermoplastics</h3>
              <p>High-performance polymers including PEEK, PPS, PEI, and PAI for demanding structural applications.</p>
            </article>
            <article className="capability-card">
              <h3>Piping systems</h3>
              <p>Corrosion-resistant piping, fittings, and fabrication services for chemical, water, and process industries.</p>
            </article>
            <article className="capability-card">
              <h3>Custom compounding</h3>
              <p>Tailored polymer formulations with additives, fillers, and reinforcements to customer specifications.</p>
            </article>
          </div>
        </section>

        <section className="manufacturing-section section-shell" style={{ background: "var(--color-bg-alt)" }}>
          <h2>Contract manufacturing & partnerships</h2>
          <p className="section-lead">
            We offer contract development and manufacturing (CDMO) services for pharmaceutical and industrial clients worldwide.
          </p>
          <ul className="capability-list">
            <li>Process development and scale-up from lab to commercial</li>
            <li>Regulatory dossier support (DMF, CTD, ASMF)</li>
            <li>Analytical method development and validation</li>
            <li>Technology transfer and site qualification</li>
            <li>Supply chain management and logistics</li>
          </ul>
          <div className="section-cta">
            <a href="/contact" className="btn btn-primary">Discuss a manufacturing project</a>
          </div>
        </section>
      </PageShell>
    </div>
  );
}