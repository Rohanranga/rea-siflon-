import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { SectionHeading, PendingBadge } from "@/components/section-heading";
import {
  DIVISION_QUALITY,
  getCurrentWhoGmp,
  type QualityRecord,
} from "@/data/quality-records";
import Link from "next/link";
import { BadgeCheck, Info } from "lucide-react";
import { siteUrl } from "@/lib/site";

function RecordCard({ record }: { record: QualityRecord }) {
  return (
    <article className="quality-record-card">
      <div className="quality-record-head">
        <h3>{record.title}</h3>
        {record.recordNumber && (
          <span className="quality-record-number">{record.recordNumber}</span>
        )}
      </div>
      <dl className="quality-record-meta">
        <div>
          <dt>Issuing authority</dt>
          <dd>{record.issuingAuthority}</dd>
        </div>
        <div>
          <dt>Validity / date</dt>
          <dd>{record.validity}</dd>
        </div>
        <div className="quality-record-scope">
          <dt>Scope</dt>
          <dd>{record.scope}</dd>
        </div>
      </dl>
    </article>
  );
}

export const metadata: Metadata = {
  title: "Quality & Regulatory | Siflon Group",
  description: "Verified quality certifications, WHO-GMP status, Form-25 manufacturing licence and regulatory compliance for Siflon Group businesses. Transparent, evidence-based quality data.",
  keywords: [
    "Siflon Group quality",
    "WHO-GMP certified pharmaceutical",
    "Form-25 manufacturing licence",
    "pharmaceutical quality compliance",
    "veterinary API quality standards",
    "animal health regulatory",
    "industrial polymer certification",
    "ISO 9001 manufacturing",
    "HACCP certified",
    "ZED certification India",
    "pharmaceutical licence verification",
    "quality assurance pharma",
    "manufacturing compliance India",
  ],
  openGraph: {
    title: "Quality & Regulatory | Siflon Group",
    description: "Verified quality certifications, WHO-GMP status, Form-25 manufacturing licence and regulatory compliance for Siflon Group businesses.",
    url: siteUrl("/quality"),
    siteName: "Siflon Group",
    images: [
      {
        url: siteUrl("/images/og-quality.jpg"),
        width: 1200,
        height: 630,
        alt: "Siflon Group Quality & Regulatory Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@siflongroup",
    creator: "@siflongroup",
    title: "Quality & Regulatory | Siflon Group",
    description: "WHO-GMP certified, Form-25 licensed pharmaceutical manufacturing. Transparent quality data.",
    images: [siteUrl("/images/og-quality.jpg")],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl("/quality"),
  },
};

export default function QualityPage() {
  const whoGmp = getCurrentWhoGmp();

  return (
    <div className="quality-full">
      <PageShell
        eyebrow="Quality & compliance"
        title="Quality & regulatory."
        subtitle="Verified quality, certification and licensing information for the Siflon Group businesses."
      >
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Quality" },
          ]}
        />
        <BreadcrumbJsonLd
          items={[
            { label: "Home", href: "/" },
            { label: "Quality" },
          ]}
        />

        {/* 1. Quality commitment */}
        <section className="quality-section section-shell">
          <SectionHeading
            eyebrow="Quality commitment"
            title="Evidence over assertions."
            description="Siflon Group publishes regulatory and quality information only where it can be traced to a specific certificate, licence or official record. The quality statements on this page are limited to documents on file, with issuing authority and validity shown exactly as recorded."
          />
          <div className="quality-note" role="note">
            <Info size={16} aria-hidden />
            <p>
              Records specific to one Siflon business are not carried over to another. Each division
              is separately registered and separately licensed, and this page reflects that.
            </p>
          </div>
        </section>

        {/* 2. Quality management approach */}
        <section className="quality-section section-shell" style={{ background: "var(--color-bg-alt)" }}>
          <SectionHeading
            eyebrow="Approach"
            title="How quality information is presented."
            description="Each published record is drawn from a certificate or licence held by the relevant business, with number, issuing body and validity shown as recorded. Where a record has not been received or cannot be matched to a specific legal entity, it is not published."
          />
          <div className="quality-note" role="note">
            <Info size={16} aria-hidden />
            <p>
              A Form-25 entry is a manufacturing licence issued under the Drugs and Cosmetics Act 1940.
              It is a licence to manufacture, not a certification, and a Form-25 licence does not on its
              own establish WHO-GMP status. WHO-GMP status is recorded here only where a WHO-GMP
              certificate is held.
            </p>
          </div>
        </section>

        {/* 3. Verified regulatory and licensing information */}
        <section className="quality-section section-shell">
          <SectionHeading
            eyebrow="Verified records"
            title="Quality management and manufacturing licences."
            description="The records below are published as recorded. Current WHO-GMP status is shown for Siflon Pharma only, where a certificate is on file."
          />

          {whoGmp && (
            <div className="quality-record-lead">
              <div className="quality-record-lead-label">
                Current WHO-GMP status — Siflon Pharma
              </div>
              <RecordCard record={whoGmp} />
            </div>
          )}
        </section>

        {/* 4. Division-specific quality information */}
        <section className="quality-section section-shell" style={{ background: "var(--color-bg-alt)" }}>
          <SectionHeading
            eyebrow="By division"
            title="Division quality information."
            description="Siflon Group businesses are separately registered legal entities. Licensing and certification are held per business and are not shared across divisions."
          />

          <div className="quality-division-list">
            {DIVISION_QUALITY.map((d) => (
              <article
                key={d.slug}
                className={`quality-division-card${
                  d.status === "pending-verification" ? " is-pending" : ""
                }`}
              >
                <div className="quality-division-head">
                  <h3>{d.displayName}</h3>
                  {d.status === "pending-verification" && <PendingBadge />}
                  {d.status === "no-public-records" && (
                    <span className="quality-status-tag">No public records on file</span>
                  )}
                </div>
                <p className="quality-division-summary">{d.summary}</p>

                {d.records.length > 0 ? (
                  <div className="quality-division-records">
                    {d.records.map((r) => (
                      <RecordCard key={r.id} record={r} />
                    ))}
                  </div>
                ) : (
                  <p className="quality-division-empty">
                    Please contact the relevant division for current quality and regulatory documentation.
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* 5. Documentation and certification availability */}
        <section className="quality-section section-shell">
          <SectionHeading
            eyebrow="Documentation"
            title="Certification and licence availability."
            description="Certificates and licences are held internally and shared on request for business purposes. They are not published as public downloads."
          />
          <div className="quality-doc-panel">
            <div className="quality-doc-item">
              <BadgeCheck size={18} aria-hidden />
              <div>
                <h3>Requested on a needs basis</h3>
                <p>
                  WHO-GMP certificates, ISO 9001:2015, HACCP, the Form-25 manufacturing licence and ZED
                  certification are available to prospective customers and partners on request, with
                  issuing authority and validity confirmed at the time of issue.
                </p>
              </div>
            </div>
            <div className="quality-doc-item">
              <BadgeCheck size={18} aria-hidden />
              <div>
                <h3>Resources page</h3>
                <p>
                  Approved public documents — corporate profiles, product catalogues, manufacturing
                  licences, quality certifications and technical datasheets — are published on the
                  Resources page once approved for public distribution.
                </p>
              </div>
            </div>
          </div>
          <Link href="/resources" className="btn btn-secondary">
            View the Resources page
          </Link>
        </section>

        {/* 6. Contact CTA */}
        <section className="quality-section section-shell" style={{ background: "var(--color-bg-alt)" }}>
          <div className="quality-cta-card">
            <SectionHeading
              eyebrow="Enquiries"
              title="Quality-related enquiries."
              description="For current quality documentation, licence scope, certification validity or compliance queries, contact the relevant Siflon division directly."
            />
            <Link href="/contact" className="btn btn-primary">
              Contact Siflon Group
            </Link>
          </div>
        </section>
      </PageShell>
    </div>
  );
}
