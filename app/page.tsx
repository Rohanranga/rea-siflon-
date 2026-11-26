import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Building2, ShieldCheck, Globe, Award, Sparkles, Layers, ChevronRight, CheckCircle2, Factory } from "lucide-react";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { BusinessTiltStack } from "@/components/business-ttilt-stack";
import { IndustriesMarquee } from "@/components/industries-marquee";
import { ManufacturingGallery } from "@/components/manufacturing-gallery";
import { PeopleGallery } from "@/components/people-gallery";
import { ExhibitionGallery } from "@/components/exhibition-gallery";
import { StoryTimeline } from "@/components/story-timeline";
import { ContactForm } from "@/components/contact-form";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Siflon Group | Diverse Expertise. One Group.",
  description: "Discover Siflon Group's specialist businesses across pharmaceuticals, animal health and advanced industrial materials. WHO-GMP certified manufacturing, Form-25 licensed, exporting to 60+ countries since 1996.",
  keywords: [
    "Siflon Group",
    "pharmaceutical manufacturing",
    "veterinary API",
    "animal health",
    "industrial polymers",
    "WHO-GMP certified",
    "Form-25 manufacturing licence",
    "API manufacturing India",
    "bulk drug manufacturer",
    "contract manufacturing",
    "pharmaceutical export",
    "quality compliance",
  ],
  openGraph: {
    title: "Siflon Group | Diverse Expertise. One Group.",
    description: "WHO-GMP certified pharmaceutical manufacturing, veterinary APIs, animal health & industrial polymers. 60+ export countries since 1996.",
    url: siteUrl("/"),
    siteName: "Siflon Group",
    images: [
      {
        url: siteUrl("/images/og-default.jpg"),
        width: 1200,
        height: 630,
        alt: "Siflon Group - Pharmaceutical, Animal Health & Industrial Materials Manufacturing",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@siflongroup",
    creator: "@siflongroup",
    title: "Siflon Group | Diverse Expertise. One Group.",
    description: "WHO-GMP certified pharmaceutical manufacturing, veterinary APIs, animal health & industrial polymers. 60+ export countries since 1996.",
    images: [siteUrl("/images/og-default.jpg")],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl("/"),
  },
};

export default function HomePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ label: "Home" }]} />

      {/* SECTION 1: HEADER & HERO BAND */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#102A43] via-[#102A43]/95 to-[#0b1d30] text-white pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* Background ambient glow / grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4FB7E8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#4FB7E8]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4FB7E8]/10 border border-[#4FB7E8]/30 text-[#4FB7E8] text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
              <Sparkles size={14} /> Established 1996
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Siflon Group <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4FB7E8] via-blue-200 to-white mt-2">Diverse Expertise. One Group.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed font-normal">
              Bringing together specialist businesses serving pharmaceutical, animal-health, and advanced industrial-materials markets with a shared focus on quality manufacturing.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#businesses"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#4FB7E8] text-[#102A43] font-bold text-sm hover:bg-[#4FB7E8]/90 transition-all shadow-lg shadow-[#4FB7E8]/20 hover:-translate-y-0.5"
              >
                Discover Siflon <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all backdrop-blur-sm hover:-translate-y-0.5"
              >
                Contact Us <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Hero reel video wrapper */}
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 mt-16">
          <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#0b1d30] relative aspect-[16/9] max-h-[600px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-80"
              src="/media/siflon-hero-reel.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102A43] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#102A43]/80 backdrop-md p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#4FB7E8]/20 flex items-center justify-center text-[#4FB7E8]">
                  <Factory size={22} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">State-of-the-Art Manufacturing</div>
                  <div className="text-xs text-slate-300">Dedicated production units across Anantapur</div>
                </div>
              </div>
              <Link href="/quality" className="text-xs font-semibold text-[#4FB7E8] hover:text-white flex items-center gap-1">
                View quality standards <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: STATISTIC BAND (4 Verified Stats) */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16 relative z-20 -mt-10 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 rounded-2xl shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-4">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-1">Heritage</span>
            <div className="text-4xl lg:text-5xl font-black text-[#102A43] mb-1">1996</div>
            <p className="text-sm text-slate-600 font-medium">Founded with specialist industrial focus</p>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-4 pt-6 sm:pt-0">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-1">Global Footprint</span>
            <div className="text-4xl lg:text-5xl font-black text-[#102A43] mb-1">60+</div>
            <p className="text-sm text-slate-600 font-medium">Export destinations across international markets</p>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-4 pt-6 sm:pt-0">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-1">Production Capacity</span>
            <div className="text-4xl lg:text-5xl font-black text-[#102A43] mb-1">350 <span className="text-2xl font-bold text-[#4FB7E8]">MT/yr</span></div>
            <p className="text-sm text-slate-600 font-medium">Veterinary API manufacturing capacity (expanding to 1,000 MT)</p>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-4 pt-6 sm:pt-0">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-1">Regulatory Standard</span>
            <div className="text-4xl lg:text-5xl font-black text-[#102A43] mb-1">WHO</div>
            <p className="text-sm text-slate-600 font-medium">WHO-GMP certified facility &amp; Form-25 manufacturing licence</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: GROUP INTRO & TILT STACK (Division Cards) */}
      <section className="py-20 lg:py-28 bg-[#F4F6F8]" id="group">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#102A43]/10 text-[#102A43] text-xs font-bold uppercase tracking-wider mb-4">
              Connected Specialist Businesses
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#102A43] tracking-tight mb-6">
              Different disciplines. <span className="text-[#253C80] italic">Shared ambition.</span>
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Siflon Group brings together specialist businesses serving pharmaceutical, animal-health and advanced industrial-materials markets. Each business operates with its own products, markets and teams, while sharing a common focus on quality manufacturing and direct customer relationships.
            </p>
          </div>
        </div>

        <section className="business-section w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16" id="businesses">
          <BusinessTiltStack />
        </section>
      </section>

      {/* SECTION 4: INDUSTRIES & MANUFACTURING */}
      <IndustriesMarquee />

      <section className="manufacturing section-shell py-20 bg-white" id="manufacturing">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="eyebrow text-[#253C80] font-bold uppercase text-xs tracking-wider mb-2">Manufacturing &amp; infrastructure</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#102A43]">Facilities built for <em>specialised production.</em></h2>
            </div>
            <p className="text-slate-600 max-w-md mt-4 md:mt-0 text-sm">
              Production sites, laboratories and inspection areas supporting the Siflon Group businesses. Representative facility images pending business-specific verification.
            </p>
          </div>

          <ManufacturingGallery
            images={[
              { src: "/images/facilities/facility_00.jpg", alt: "Manufacturing facility exterior" },
              { src: "/images/facilities/facility_01.jpg", alt: "Production hall interior" },
              { src: "/images/facilities/facility_02.jpg", alt: "Warehouse and logistics" },
              { src: "/images/facilities/facility_03.jpg", alt: "Quality control laboratory" },
              { src: "/images/facilities/facility_04.jpg", alt: "Warehouse and logistics" },
              { src: "/images/facilities/facility_05.jpg", alt: "Processing equipment" },
              { src: "/images/facilities/facility_06.jpg", alt: "Processing equipment" },
              { src: "/images/facilities/facility_07.jpg", alt: "Industrial infrastructure" },
              { src: "/images/facilities/facility_08.jpg", alt: "Research and development" },
              { src: "/images/facilities/facility_09.jpg", alt: "Testing and validation" },
              { src: "/images/facilities/facility_10.jpg", alt: "Chemical processing" },
              { src: "/images/facilities/facility_11.jpg", alt: "Final inspection" },
            ]}
          />
        </div>
      </section>

      {/* SECTION 5: STORY & EXHIBITIONS */}
      <section className="story-section py-20 bg-[#F4F6F8]" id="story">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <div className="eyebrow text-[#253C80] font-bold uppercase text-xs tracking-wider mb-2">Our story</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#102A43]">Evolution of a <em>manufacturing group.</em></h2>
            </div>
            <p className="text-slate-600 max-w-md mt-4 md:mt-0 text-sm">
              Verified milestones drawn from official business websites and regulatory filings.
            </p>
          </div>
        </div>
        <StoryTimeline />
      </section>

      <section className="exhibitions py-16 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
          <ExhibitionGallery />
        </div>
      </section>

      <section className="people py-16 bg-[#F4F6F8]">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <div className="eyebrow text-[#253C80] font-bold uppercase text-xs tracking-wider mb-2">People behind Siflon</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#102A43]">Driven by people. <em>Built on expertise.</em></h2>
            <p className="text-slate-600 mt-2 text-sm">Team photographs are pending visual review before publication. Client photographs are not presented as employee portraits.</p>
          </div>
          <PeopleGallery images={[]} />
        </div>
      </section>

      {/* SECTION 6: QUALITY & CAPABILITIES CALLOUT */}
      <section
        className="py-20 lg:py-28 bg-white"
        id="capabilities"
        style={{
          display: 'grid',
          gridTemplateColumns: 'clamp(240px, 42%, 580px) 1fr',
          gap: '8%',
          alignItems: 'center',
          paddingLeft: '10%',
          paddingRight: '10%',
        }}
      >
        {/* Left: facility image card */}
        <div className="capability-visual" style={{ minHeight: '380px', position: 'relative', overflow: 'hidden', padding: 0 }}>
          <img
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, borderRadius: '10px' }}
            src="/images/facilities/facility_00.jpg"
            alt="Siflon manufacturing facility"
            loading="lazy"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(16,42,67,0.55)', borderRadius: '10px' }} />
          <div style={{ position: 'relative', zIndex: 1, padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
            <div style={{ color: '#4FB7E8', marginBottom: '12px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"/><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            </div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '20px', lineHeight: 1.3, marginBottom: '8px' }}>WHO-GMP Certified</p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>Manufacturing facility meeting WHO Good Manufacturing Practice standards.</p>
          </div>
        </div>

        {/* Right: copy */}
        <div className="capability-copy">
          <div className="eyebrow" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--blue)', marginBottom: '8px' }}>Quality &amp; Regulatory Commitment</div>
          <h2>Capability built through <em>specialisation.</em></h2>
          <p>
            Each Siflon business has its own market, products and expertise. Our commitment to quality compliance includes a WHO-GMP certified facility, a Form-25 manufacturing licence, and export standards across 60+ countries.
          </p>
          <ul>
            <li><span>01</span> Specialist business knowledge<br /><small style={{ color: '#8ba1af', fontSize: '12px' }}>Targeted expertise in veterinary APIs, animal health, and industrial polymers.</small></li>
            <li><span>02</span> Manufacturing and product focus<br /><small style={{ color: '#8ba1af', fontSize: '12px' }}>Dedicated production infrastructure with strict quality control and traceability.</small></li>
            <li><span>03</span> Direct routes to business teams<br /><small style={{ color: '#8ba1af', fontSize: '12px' }}>Transparent communication channels connecting clients directly with division specialists.</small></li>
          </ul>
          <Link
            href="/quality"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-[#253C80] text-white font-bold text-sm hover:bg-[#102A43] transition-all shadow-lg"
          >
            View Quality Certifications <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* SECTION 7: CONTACT BAND */}
      <section className="py-20 lg:py-28 bg-[#0b1d30] text-white border-t border-white/10" id="contact" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-6 flex flex-col gap-6 contact-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#4FB7E8]/20 text-[#4FB7E8] text-xs font-bold uppercase tracking-wider mb-4">
                Start a conversation
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
                Looking for the right <br /><span className="text-[#4FB7E8]">Siflon team?</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-2xl">
                Use the enquiry form or contact a verified business directly. This form operates with graceful unconfigured fallback handling.
              </p>

              <div className="contact-direct mb-8">
                <a
                  href="mailto:info@siflonpharma.com"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#4FB7E8] text-[#102A43] font-bold text-sm hover:bg-[#4FB7E8]/90 transition-all shadow-md"
                >
                  Contact Siflon Pharma <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#4FB7E8] mb-5">Verified Division Contacts</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                  <li className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <strong className="text-white block font-semibold mb-1 text-sm">Siflon Pharma Pvt Ltd</strong>
                    info@siflonpharma.com<br />siflonpharma.com
                  </li>
                  <li className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <strong className="text-white block font-semibold mb-1 text-sm">Siflon Drugs &amp; Pharma</strong>
                    siflondrugs.com
                  </li>
                  <li className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <strong className="text-white block font-semibold mb-1 text-sm">Siflon Polymers Pvt Ltd</strong>
                    siflonpolymers.com
                  </li>
                  <li className="bg-white/5 p-4 rounded-xl border border-white/10 opacity-75">
                    <strong className="text-white block font-semibold mb-1 text-sm">Siflon Pipes</strong>
                    Details pending verification
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6 contact-right bg-white rounded-2xl p-8 sm:p-12 shadow-2xl self-start">
              <h3 className="text-xl font-bold text-[#102A43] mb-6">Send an Enquiry</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
