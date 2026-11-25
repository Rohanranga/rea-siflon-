import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Siflon Group | Enquiries.",
  description: "Reach out for product availability, technical documentation, partnership or export enquiries.",
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
