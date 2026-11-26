import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Siflon Group | Enquiries & Partnerships",
  description: "Reach out for product availability, technical documentation, partnership or export enquiries. WHO-GMP certified manufacturing, Form-25 licensed, 60+ export countries.",
  keywords: [
    "contact Siflon Group",
    "pharmaceutical manufacturing enquiry",
    "veterinary API partnership",
    "animal health contact",
    "industrial polymer supplier",
    "contract manufacturing India",
    "export enquiry pharmaceutical",
    "WHO-GMP facility contact",
    "Form-25 manufacturing licence",
    "Siflon Pharma contact",
    "Siflon Drugs contact",
    "Siflon Polymers contact",
  ],
  openGraph: {
    title: "Contact Siflon Group | Enquiries & Partnerships",
    description: "Reach out for product availability, technical documentation, partnership or export enquiries. WHO-GMP certified manufacturing, Form-25 licensed, 60+ export countries.",
    url: siteUrl("/contact"),
    siteName: "Siflon Group",
    images: [
      {
        url: siteUrl("/images/og-contact.jpg"),
        width: 1200,
        height: 630,
        alt: "Contact Siflon Group - Pharmaceutical & Industrial Manufacturing",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@siflongroup",
    creator: "@siflongroup",
    title: "Contact Siflon Group | Enquiries & Partnerships",
    description: "WHO-GMP certified pharmaceutical manufacturing, veterinary APIs, animal health & industrial polymers. 60+ export countries since 1996.",
    images: [siteUrl("/images/og-contact.jpg")],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <div className="contact-page-full">
      <PageShell
        eyebrow="Contact"
        title="Contact Siflon Group."
        subtitle="Reach out for product availability, technical documentation, partnership or export enquiries."
      >
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />
        <BreadcrumbJsonLd
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />

        <section className="contact-page-section section-shell">
          <div className="contact-page-grid">
            <div className="contact-info-card">
              <SectionHeading
                eyebrow="Group contact"
                title="Siflon Group."
                description="Verified group contact details. Each division may have its own dedicated contact channel, which will be published once verified."
              />

              <ul className="contact-info-list">
                <li>
                  <MapPin size={18} aria-hidden />
                  <div>
                    <span className="contact-info-label">Registered office</span>
                    <span className="contact-info-value">
                      Plot No. 76-77, Phase-1, Mythrinagar, Madinaguda,
                      Hyderabad – 500050, India
                    </span>
                  </div>
                </li>
                <li>
                  <Mail size={18} aria-hidden />
                  <div>
                    <span className="contact-info-label">Email</span>
                    <a className="contact-info-value" href="mailto:info@siflonpharma.com">
                      info@siflonpharma.com
                    </a>
                  </div>
                </li>
                <li>
                  <Phone size={18} aria-hidden />
                  <div>
                    <span className="contact-info-label">Phone</span>
                    <a className="contact-info-value" href="tel:+919618828282">
                      +91 9618828282
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="contact-form-card">
              <SectionHeading
                eyebrow="Enquiry form"
                title="Send an enquiry."
                description="Complete the form below. Our team responds to verified, complete enquiries as soon as possible."
              />
              <ContactForm />
            </div>
          </div>
        </section>
      </PageShell>
    </div>
  );
}
