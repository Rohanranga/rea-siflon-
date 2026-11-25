"use client";

import { useState, FormEvent } from "react";
import { BUSINESSES } from "@/data/businesses";

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  division: string;
  enquiryType: string;
  message: string;
  agreed: boolean;
  website: string; // honeypot
}

const INITIAL: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  division: "",
  enquiryType: "",
  message: "",
  agreed: false,
  website: "",
};

const ENQUIRY_TYPES = [
  "General enquiry",
  "Product availability",
  "Technical documentation",
  "Partnership",
  "Export / international",
  "Careers",
  "Other",
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "unconfigured">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Full name is required.";
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      next.email = "A valid business email is required.";
    if (!form.division) next.division = "Please select a business division.";
    if (!form.enquiryType) next.enquiryType = "Please select an enquiry type.";
    if (!form.message.trim() || form.message.trim().length < 20)
      next.message = "Please write at least 20 characters.";
    if (!form.agreed) next.agreed = "You must agree to be contacted.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;

    // Honeypot: if filled, silently pretend success (bot trap).
    if (form.website.trim()) {
      setStatus("success");
      setForm(INITIAL);
      return;
    }

    if (!endpoint) {
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          division: form.division,
          enquiryType: form.enquiryType,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm(INITIAL);
      } else {
        const data = await res.json().catch(() => ({}));
        setServerError(data?.error || "Submission failed. Please try again or contact us directly.");
        setStatus("error");
      }
    } catch {
      setServerError("Network error. Please try again or contact us directly.");
      setStatus("error");
    }
  }

  const field = (key: keyof FormState, label: string, required = false, node: React.ReactNode) => (
    <label className="cf-field">
      <span>{label}{required && " *"}</span>
      {node}
      {errors[key] && <span className="cf-error" role="alert">{errors[key]}</span>}
    </label>
  );

  if (status === "success") {
    return (
      <div className="contact-success" role="status">
        <h3>Enquiry received.</h3>
        <p>Thank you for your enquiry. Our team will respond as soon as possible.</p>
      </div>
    );
  }

  if (status === "unconfigured") {
    return (
      <div className="contact-unconfigured" role="alert">
        <h3>Enquiry form not configured.</h3>
        <p>
          The enquiry form is not yet connected to a delivery service. Please email us directly at{" "}
          <a href="mailto:info@siflonpharma.com">info@siflonpharma.com</a> or call +91 9618828282.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {status === "error" && serverError && (
        <div className="contact-error-banner" role="alert">{serverError}</div>
      )}

      {/* Honeypot field — hidden from users, traps bots */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
          />
        </label>
      </div>

      <div className="cf-row">
        {field("name", "Full name", true,
          <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required aria-invalid={!!errors.name} />
        )}
        {field("email", "Business email", true,
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required aria-invalid={!!errors.email} />
        )}
      </div>

      <div className="cf-row">
        {field("company", "Company", false,
          <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
        )}
        {field("phone", "Phone", false,
          <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        )}
      </div>

      <div className="cf-row">
        {field("division", "Business division", true,
          <select value={form.division} onChange={(e) => setForm({ ...form, division: e.target.value })} required aria-invalid={!!errors.division}>
            <option value="">Select a division</option>
            {BUSINESSES.map((b) => (
              <option key={b.slug} value={b.displayName}>{b.displayName}</option>
            ))}
          </select>
        )}
        {field("enquiryType", "Enquiry type", true,
          <select value={form.enquiryType} onChange={(e) => setForm({ ...form, enquiryType: e.target.value })} required aria-invalid={!!errors.enquiryType}>
            <option value="">Select enquiry type</option>
            {ENQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        )}
      </div>

      {field("message", "Message", true,
        <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required aria-invalid={!!errors.message} />
      )}

      <label className="cf-checkbox">
        <input type="checkbox" checked={form.agreed} onChange={(e) => setForm({ ...form, agreed: e.target.checked })} />
        <span>I agree to be contacted by Siflon Group regarding this enquiry.</span>
      </label>
      {errors.agreed && <span className="cf-error" role="alert">{errors.agreed}</span>}

      <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
