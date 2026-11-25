import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck, MapPin, Building, Package, Layers, FileText } from "lucide-react";
import { BUSINESSES, getBusinessBySlug } from "@/data/businesses";
import { Breadcrumb } from "@/components/breadcrumb";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { SectionHeading, PendingBadge } from "@/components/section-heading";

interface BusinessPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return BUSINESSES.map((b) => ({
    slug: b.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return Promise.resolve(params).then(({ slug }) => {
    const business = getBusinessBySlug(slug);
    return {
      title: business ? `${business.displayName} | Siflon Group` : "Business Division | Siflon Group",
      description: business
        ? `${business.displayName} — verified products, services and facilities.`
        : "Business division information for Siflon Group.",
    };
  });
}

export default async function BusinessDivisionPage({ params }: BusinessPageProps) {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);

  if (!business) {
    notFound();
  }

  const isPending = business.verificationStatus === "pending-verification" || business.publicationStatus === "pending";

  return (
    <div className="business-page">
      {/* Hero */}
      <section className="business-hero" style={{ background: "var(--navy)" }}>
        <div className="hero-fallback" />
        <div className="business-hero-overlay" />
        <div className="section-shell business-hero-content">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Businesses", href: "/products" },
              { label: business.displayName },
            ]}
          />
          <BreadcrumbJsonLd
            items={[
              { label: "Home", href: "/" },
              { label: "Businesses", href: "/products" },
              { label: business.displayName },
            ]}
          />

          {isPending && (
            <div className="business-pending-badge">Pending verification</div>
          )}

          <h1>{business.displayName}</h1>
          {business.legalName && (
            <p className="business-tagline">{business.legalName}</p>
          )}

          {business.officialWebsite && (
            <a
              href={business.officialWebsite}
              target="_blank"
              rel="noreferrer"
              className="business-website-link"
            >
              Visit official website <ExternalLink size={14} />
            </a>
          )}
        </div>
      </section>

      {/* Introduction */}
      <section className="business-intro section-shell">
        <div className="business-intro-content">
          <div className="eyebrow">Overview</div>
          <h2>Specialised focus. <em>Verified expertise.</em></h2>
          {business.detailedDescription ? (
            <p>{business.detailedDescription}</p>
          ) : (
            <p>{business.notes || "Detailed information for this division is currently pending verification."}</p>
          )}
          {business.shortDescription && !business.detailedDescription && (
            <p>{business.shortDescription}</p>
          )}
        </div>
      </section>

      {/* Products & Solutions */}
      {!isPending && business.products.length > 0 && (
        <section className="business-offerings section-shell" style={{ background: "var(--paper)" }}>
          <div className="section-heading">
            <div>
              <div className="eyebrow">Products &amp; solutions</div>
              <h2>Core portfolio &amp; <em>active range.</em></h2>
            </div>
            <p>Manufactured and supplied according to verified regulatory standards and industry requirements.</p>
          </div>

          <div className="product-grid" style={{ marginTop: "32px" }}>
            {business.products.map((product, idx) => (
              <div key={idx} className="product-card" style={{ background: "#fff", padding: "20px" }}>
                <div className="card-top">
                  <span className="card-icon"><Package size={20} /></span>
                  <span className="card-tag">Product</span>
                </div>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", margin: "12px 0 6px" }}>{product}</h3>
                <p className="card-description" style={{ fontSize: "13px", margin: 0 }}>
                  Verified offering under {business.displayName} portfolio.
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Services & Capabilities */}
      {!isPending && business.services.length > 0 && (
        <section className="business-offerings section-shell">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Capabilities</div>
              <h2>Services &amp; <em>specialised operations.</em></h2>
            </div>
          </div>

          <div className="business-offerings-grid" style={{ marginTop: "24px" }}>
            <div className="business-offerings-column">
              <h3><Layers size={20} /> Core Services</h3>
              <ul>
                {business.services.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>
            </div>
            <div className="business-offerings-column">
              <h3><ShieldCheck size={20} /> Quality &amp; compliance</h3>
              <p>
                Licensing and certification are held per business. Verified quality and regulatory
                records for this division are published on the Quality page.
              </p>
              <Link href="/quality" className="business-quality-link">
                View quality &amp; regulatory records
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Facilities & Infrastructure */}
      {!isPending && business.facilities.length > 0 && (
        <section className="business-facilities section-shell" style={{ background: "var(--paper)" }}>
          <div className="section-heading">
            <div>
              <div className="eyebrow">Infrastructure</div>
              <h2>Manufacturing facilities &amp; <em>locations.</em></h2>
            </div>
          </div>

          <div className="business-facilities-list">
            {business.facilities.map((facility, idx) => (
              <div key={idx} className="business-facility-card">
                <MapPin size={22} />
                <div>
                  <h3>Registered Facility Location</h3>
                  <p>{facility}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Pending State for Unverified Divisions */}
      {isPending && (
        <section className="business-intro section-shell">
          <div className="business-pending-card">
            <Building size={28} />
            <div>
              <h2>Verification in Progress</h2>
              <p>{business.notes}</p>
              <p>No unverified claims, product catalogues, or contact details are presented until official data is confirmed.</p>
            </div>
          </div>
        </section>
      )}

      {/* Related Divisions */}
      <section className="business-related section-shell" style={{ background: "var(--paper)" }}>
        <div className="section-heading">
          <div>
            <div className="eyebrow">Siflon Group</div>
            <h2>Explore other <em>group businesses.</em></h2>
          </div>
        </div>

        <div className="business-related-grid">
          {BUSINESSES.filter((b) => b.slug !== business.slug).map((rel) => (
            <Link
              key={rel.slug}
              href={`/businesses/${rel.slug}`}
              className={`business-related-card ${rel.publicationStatus === "pending" ? "pending" : ""}`}
            >
              <h3>{rel.displayName}</h3>
              <p>{rel.category || "Specialist Division"}</p>
              {rel.publicationStatus === "pending" && (
                <span className="related-pending-tag">Pending verification</span>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <section className="business-contact section-shell">
        <div className="business-contact-card">
          <div>
            <div className="eyebrow">Enquiries</div>
            <h2>Connect with <em>{business.displayName}</em></h2>
            <p>For product availability, technical documentation, or partnership enquiries, reach out to our team.</p>
          </div>
          <Link href="/contact" className="business-contact-button">
            Go to Group Enquiry Form
          </Link>
        </div>
      </section>
    </div>
  );
}
