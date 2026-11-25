"use client";

import Link from "next/link";
import { ChevronDown, X, Menu } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const DIVISIONS = [
  { label: "Siflon Pharma", href: "/businesses/siflon-pharma", status: "verified" as const },
  { label: "Siflon Drugs", href: "/businesses/siflon-drugs", status: "verified" as const },
  { label: "Siflon Polymers", href: "/businesses/siflon-polymers", status: "verified" as const },
  { label: "Siflon Pipes", href: "/businesses/siflon-pipes", status: "pending" as const },
];

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#group" },
  { label: "Divisions", href: "/products", mega: true },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Resources", href: "/resources" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  const base = href.split("#")[0];
  if (base === "/") return false;
  return pathname.startsWith(base);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [megaOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="site-header" role="banner">
      <Link className="header-logo-link" href="/" aria-label="Siflon Group home">
        <img className="header-logo" src="/images/siflon-gemini-logo.png" alt="Siflon Group" width={195} height={65} />
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        {NAV.map((item) => {
          if (item.mega) {
            return (
              <div key={item.label} className="mega-wrap" ref={megaRef}>
                <button
                  type="button"
                  className={`mega-trigger${megaOpen ? " is-open" : ""}`}
                  aria-expanded={megaOpen}
                  aria-haspopup="true"
                  onClick={() => setMegaOpen((v) => !v)}
                >
                  {item.label} <ChevronDown size={14} aria-hidden />
                </button>
                {megaOpen && (
                  <div className="mega-panel" role="menu">
                    {DIVISIONS.map((d) => (
                      <Link
                        key={d.href}
                        href={d.href}
                        role="menuitem"
                        className={`mega-item${d.status === "pending" ? " is-pending" : ""}`}
                      >
                        <span className="mega-item-name">{d.label}</span>
                        {d.status === "pending" && <span className="pending-badge">Pending</span>}
                      </Link>
                    ))}
                    <Link href="/products" role="menuitem" className="mega-item mega-item-all">
                      View all businesses
                    </Link>
                  </div>
                )}
              </div>
            );
          }
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`nav-link${isActive(pathname, item.href) ? " is-active" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link href="/contact" className="header-cta">
        Enquire
      </Link>

      <button
        className="mobile-menu"
        aria-label="Open menu"
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav"
        onClick={() => setMobileOpen(true)}
      >
        <Menu size={20} aria-hidden />
      </button>

      {mobileOpen && (
        <>
          <div className="mobile-nav-backdrop" onClick={() => setMobileOpen(false)} />
          <div id="mobile-nav" className="mobile-nav-panel is-open" role="dialog" aria-modal="true" aria-label="Mobile navigation">
            <div className="mobile-nav-head">
              <span className="mobile-nav-title">Menu</span>
              <button className="mobile-nav-close" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                <X size={20} aria-hidden />
              </button>
            </div>
            <nav aria-label="Mobile navigation">
              {NAV.filter((n) => !n.mega).map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={isActive(pathname, item.href) ? "is-active" : ""}>
                  {item.label}
                </Link>
              ))}
              <div className="mobile-nav-group">
                <span className="mobile-nav-group-label">Business divisions</span>
                {DIVISIONS.map((d) => (
                  <Link key={d.href} href={d.href} onClick={() => setMobileOpen(false)} className={d.status === "pending" ? "is-pending" : ""}>
                    {d.label} {d.status === "pending" && <span className="pending-badge">Pending</span>}
                  </Link>
                ))}
              </div>
            </nav>
            <Link href="/contact" className="header-cta" onClick={() => setMobileOpen(false)}>
              Enquire
            </Link>
          </div>
        </>
      )}
    </header>
  );
}

export function MobileNav() {
  return null;
}
