import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Certifications & Compliance | Siflon Group",
  description: "View Siflon Group's quality certifications including WHO-GMP, ISO 9001:2015, HACCP, Form-25 manufacturing licence, and ZED certification across all business divisions.",
  keywords: [
    "Siflon Group certifications",
    "WHO-GMP certificate",
    "ISO 9001:2015 pharmaceutical",
    "HACCP certification",
    "Form-25 manufacturing licence",
    "ZED certification India",
    "pharmaceutical compliance India",
    "quality management system pharma",
    "regulatory certifications",
    "manufacturing licence verification",
  ],
  openGraph: {
    title: "Certifications & Compliance | Siflon Group",
    description: "WHO-GMP, ISO 9001:2015, HACCP, Form-25 licence, ZED certification. Verified quality across all Siflon divisions.",
    url: siteUrl("/certifications"),
    siteName: "Siflon Group",
    images: [
      {
        url: siteUrl("/images/og-quality.jpg"),
        width: 1200,
        height: 630,
        alt: "Siflon Group Certifications & Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@siflongroup",
    creator: "@siflongroup",
    title: "Certifications & Compliance | Siflon Group",
    description: "WHO-GMP, ISO 9001:2015, HACCP, Form-25, ZED certified. Transparent quality data.",
    images: [siteUrl("/images/og-quality.jpg")],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl("/certifications") },
};

export default function CertificationsPage() {
  return (
    <div className="certifications-full">
      <PageShell
        eyebrow="Certifications"
        title="Certifications & compliance."
        subtitle="Verified certificates, licences and regulatory approvals held by Siflon Group businesses."
      >
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Certifications" },
          ]}
        />
        <BreadcrumbJsonLd
          items={[
            { label: "Home", href: "/" },
            { label: "Certifications" },
          ]}
        />

        <section className="certifications-section section-shell">
          <h2>Siflon Pharma — verified records</h2>
          <div className="cert-grid">
            <article className="cert-card">
              <h3>WHO-GMP Certificate</h3>
              <p className="cert-meta">Issuing authority: WHO / CDSCO</p>
              <p className="cert-meta">Scope: Active pharmaceutical ingredients & formulations</p>
              <p className="cert-meta">Status: Current — on file</p>
              <span className="cert-badge verified">Verified</span>
            </article>
            <article className="cert-card">
              <h3>Form-25 Manufacturing Licence</h3>
              <p className="cert-meta">Issuing authority: Drugs Control Administration, Telangana</p>
              <p className="cert-meta">Legal basis: Drugs and Cosmetics Act 1940</p>
              <p className="cert-meta">Status: Current — on file</p>
              <span className="cert-badge verified">Verified</span>
            </article>
            <article className="cert-card">
              <h3>ISO 9001:2015</h3>
              <p className="cert-meta">Scope: Quality management system for API & formulation manufacturing</p>
              <p className="cert-meta">Status: On file — available on request</p>
              <span className="cert-badge on-request">On request</span>
            </article>
            <article className="cert-card">
              <h3>HACCP Certification</h3>
              <p className="cert-meta">Scope: Food safety management for veterinary feed additives</p>
              <p className="cert-meta">Status: On file — available on request</p>
              <span className="cert-badge on-request">On request</span>
            </article>
          </div>
        </section>

        <section className="certifications-section section-shell" style={{ background: "var(--color-bg-alt)" }}>
          <h2>Other divisions — certification status</h2>
          <p className="section-lead">
            Each Siflon business is a separately registered legal entity. Certifications are held per division and are not shared.
          </p>
          <div className="cert-grid">
            <article className="cert-card">
              <h3>Siflon Drugs</h3>
              <p>Form-25 manufacturing licence — on file</p>
              <p>ISO 9001:2015 — on file</p>
              <p>GMP compliance — documented</p>
              <span className="cert-badge on-request">On request</span>
            </article>
            <article className="cert-card">
              <h3>Siflon Polymers</h3>
              <p>ISO 9001:2015 — on file</p>
              <p>Quality management for fluoropolymer production</p>
              <span className="cert-badge on-request">On request</span>
            </article>
            <article className="cert-card">
              <h3>Siflon Pipes</h3>
              <p>ISO 9001:2015 — pending verification</p>
              <p>Product certifications (ASTM, IS standards) — on file</p>
              <span className="cert-badge pending">Pending</span>
            </article>
          </div>
        </section>

        <section className="certifications-section section-shell">
          <h2>ZED (Zero Defect Zero Effect) certification</h2>
          <p className="section-lead">
            Siflon Group participates in the Government of India's ZED certification scheme for manufacturing excellence.
            Maturity assessment and certification are managed per division.
          </p>
        </section>

        <section className="certifications-section section-shell" style={{ background: "var(--color-bg-alt)" }}>
          <h2>Document availability</h2>
          <p className="section-lead">
            Certificates and licences are held internally and shared on request for business purposes.
            They are not published as public downloads.
          </p>
          <ul className="capability-list">
            <li>WHO-GMP certificates (current validity confirmed at time of issue)</li>
            <li>Form-25 manufacturing licence copies</li>
            <li>ISO 9001:2015 certificates</li>
            <li>HACCP certification documents</li>
            <li>ZED maturity assessment reports</li>
            <li>Product-specific regulatory approvals</li>
          </ul>
          <div className="section-cta">
            <a href="/contact" className="btn btn-primary">Request certification documents</a>
          </div>
        </section>
      </PageShell>
    </div>
  );
}