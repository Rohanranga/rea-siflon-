import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { RESOURCE_CATEGORIES, getDocumentsByCategory } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources & Downloads | Siflon Group.",
  description: "Publicly available documents, publications and quality certifications for the Siflon Group businesses.",
};

export default function ResourcesPage() {
  const hasAny = RESOURCE_CATEGORIES.some((c) => getDocumentsByCategory(c.id).length > 0);

  return (
    <PageShell
      eyebrow="Resources"
      title="Resources & downloads."
      subtitle="Publicly available documents, publications and quality certifications for the Siflon Group businesses."
    >
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources" },
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Resources" },
        ]}
      />

      <section className="resources-section">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Document library"
            title="Resources being prepared."
            description="Approved public documents — including corporate profiles, product catalogues, manufacturing licences, quality certifications and technical datasheets — will be published here once they have been approved for public distribution."
          />

          {!hasAny && (
            <div className="resources-empty-state">
              <p className="resources-empty-title">No documents available yet</p>
              <p className="resources-empty-copy">
                Resources are currently being prepared for publication. Please check back later, or contact Siflon Group directly for specific documentation requests.
              </p>
            </div>
          )}

          {hasAny && (
            <div className="resources-category-grid">
              {RESOURCE_CATEGORIES.map((category) => {
                const docs = getDocumentsByCategory(category.id);
                if (docs.length === 0) return null;
                return (
                  <div key={category.id} className="resources-category-card">
                    <h3 className="resources-category-title">{category.label}</h3>
                    <p className="resources-category-desc">{category.description}</p>
                    <ul className="resources-doc-list">
                      {docs.map((doc) => (
                        <li key={doc.id}>
                          <a href={doc.href} className="resources-doc-link">
                            {doc.title}
                          </a>
                          <span className="resources-doc-meta">
                            {doc.documentType} · {doc.availableDate}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
