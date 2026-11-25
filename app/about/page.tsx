import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { TIMELINE } from "@/data/company-timeline";
import { BUSINESSES } from "@/data/businesses";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Siflon Group | Specialist Businesses.",
  description: "A group of specialist businesses serving pharmaceutical, animal-health and advanced industrial-materials markets.",
};

export default function AboutPage() {
  const verifiedMilestones = TIMELINE.filter((m) => m.verified);

  return (
    <PageShell
      eyebrow="About"
      title="About Siflon Group."
      subtitle="A group of specialist businesses serving pharmaceutical, animal-health and advanced industrial-materials markets."
    >
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <section className="about-intro section-shell">
        <div className="section-shell-inner">
          <SectionHeading
            eyebrow="Corporate overview"
            title="Siflon Group."
            description="Siflon Group brings together specialist businesses serving pharmaceutical, animal-health and advanced industrial-materials markets. Each business operates with its own products, markets and teams, while sharing a common focus on quality manufacturing and direct customer relationships."
          />
          <p className="about-intro-copy">
            The group website is designed to make each business easier to discover while presenting a clear, consistent view of the wider organisation. All statements on this page are limited to information verified from official sources.
          </p>
        </div>
      </section>

      <section className="about-timeline section-shell" style={{ background: "var(--color-bg-alt)" }}>
        <SectionHeading
          eyebrow="Milestones"
          title="Verified company history."
          description="The following milestones are recorded from verified sources. Additional history will be published once verified."
        />
        <ol className="about-milestone-list">
          {verifiedMilestones.map((m, idx) => (
            <li key={idx} className="about-milestone-item">
              <span className="about-milestone-year">{m.year}</span>
              <div className="about-milestone-body">
                <p>{m.event}</p>
                <span className="about-milestone-source">Source: {m.source}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-leadership section-shell">
        <SectionHeading
          eyebrow="Leadership"
          title="Leadership."
          description="Mr. R. Ananthaiah is identified as Managing Director in verified sources. Further leadership information will be published once verified."
        />
      </section>

      <section className="about-divisions section-shell" style={{ background: "var(--color-bg-alt)" }}>
        <SectionHeading
          eyebrow="Our businesses"
          title="Business divisions."
          description="Siflon Group comprises specialist businesses. Division pages present verified information only."
        />
        <div className="about-division-grid">
          {BUSINESSES.map((b) => (
            <Link
              key={b.slug}
              href={`/businesses/${b.slug}`}
              className={`about-division-card ${b.publicationStatus === "pending" ? "is-pending" : ""}`}
            >
              <h3>{b.displayName}</h3>
              <p>{b.category || "Specialist Division"}</p>
              {b.publicationStatus === "pending" && (
                <span className="pending-badge">Pending verification</span>
              )}
            </Link>
          ))}
        </div>
      </section>

      <section className="about-cta section-shell">
        <div className="about-cta-card">
          <SectionHeading
            eyebrow="Enquiries"
            title="Connect with Siflon Group."
            description="For product availability, technical documentation or partnership enquiries, use the group enquiry form."
          />
          <Link href="/contact" className="btn btn-primary">
            Go to enquiry form
          </Link>
          <Link href="/quality" className="btn btn-secondary">
            Quality &amp; regulatory records
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
