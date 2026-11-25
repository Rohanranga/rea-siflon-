import Link from "next/link";

const DIVISIONS = [
  { label: "Siflon Pharma", href: "/businesses/siflon-pharma" },
  { label: "Siflon Drugs", href: "/businesses/siflon-drugs" },
  { label: "Siflon Polymers", href: "/businesses/siflon-polymers" },
  { label: "Siflon Pipes (pending verification)", href: "/businesses/siflon-pipes" },
];

export function ExpandedFooter() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-grid">
        <div className="footer-col footer-col-intro">
          <Link href="/" className="footer-logo-link" aria-label="Siflon Group home">
            <img src="/images/siflon-gemini-logo.png" alt="Siflon Group" width={150} height={50} />
          </Link>
          <p className="footer-intro">
            Siflon Group is a Hyderabad-based group of specialist businesses serving pharmaceutical, animal-health and advanced industrial-materials markets. Verified facts only; the Siflon Pipes division remains pending verification.
          </p>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Business divisions</h3>
          <ul className="footer-links">
            {DIVISIONS.map((d) => (
              <li key={d.href}><Link href={d.href}>{d.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Website</h3>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/quality">Quality &amp; compliance</Link></li>
            <li><Link href="/contact">Contact &amp; enquiries</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Enquiries</h3>
          <p className="footer-contact">
            For product availability, technical documentation or partnership enquiries, use the group enquiry form or contact a verified business directly.
          </p>
          <Link href="/contact" className="btn btn-secondary footer-cta">Go to enquiry form</Link>
        </div>
      </div>

      <div className="footer-bar">
        <div className="container footer-bar-inner">
          <span>&copy; {new Date().getFullYear()} Siflon Group. All rights reserved.</span>
          <span className="footer-reviewed">Content last reviewed: 2026. Verified facts only.</span>
        </div>
      </div>
    </footer>
  );
}
