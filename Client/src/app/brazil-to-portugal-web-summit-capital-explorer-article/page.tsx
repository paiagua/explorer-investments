// ✅ Strategic Editorial Article — Brazil → Portugal Capital & Innovation Flows
// Web Summit + Explorer Investments + Golden Visa (optional) + São Paulo Meeting CTA
// Fully English — Institutional tone — Strong conversion architecture

import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import Link from 'next/link';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';
import CtaSection from '@/components/CtaSection';

import {
  Calendar,
  MapPin,
  Users,
  TrendingUp,
  Building2,
  Globe2,
  ArrowRight,
  CheckCircle2,
  LineChart,
  ShieldCheck,
  ClipboardList,
  Sparkles,
} from 'lucide-react';

// ===================================================================
// METADATA
// ===================================================================
const SLUG = 'brazil-to-portugal-web-summit-capital-explorer-article';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/brazil-lisbon-web-summit.jpg';
const PUBLISHED = '2025-11-05T09:00:00+00:00';

export const metadata = {
  title: 'Why Brazilian Capital Is Moving to Portugal — From Web Summit Innovation to Regulated Private Markets',
  description:
    'Brazil brings 300+ startups to Web Summit Lisbon. Capital follows innovation — and Explorer Investments enables institutional-grade allocation in Portugal and Europe, with optional Golden Visa pathways.',
  openGraph: {
    title: 'Brazil to Portugal — Innovation + Capital Flow — Explorer Institutional Perspective',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

export default function BrazilPortugalCapitalFlow() {
  const schemaLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    description: metadata.description,
    image: OG_IMAGE,
    author: { '@type': 'Organization', name: 'Explorer Investments' },
    publisher: { '@type': 'Organization', name: 'Explorer Investments' },
    datePublished: PUBLISHED,
  };

  const Pill = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center gap-2 text-xs font-semibold bg-gray-100 rounded-full px-3 py-1 border">
      <CheckCircle2 size={14} /> {children}
    </span>
  );

  const bullets = (items: string[]) => (
    <ul className="space-y-2 list-disc pl-6">
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );

  return (
    <>
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLd) }} />
      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 text-[#002741]">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Hero */}
          <header className="space-y-6 text-center">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight max-w-4xl mx-auto text-balance">
              Brazil’s Innovation Surge Meets Portugal’s Regulated Private Markets
            </h1>
            <p className="text-xl font-light text-[#15364A] max-w-3xl mx-auto">
              As over 300 Brazilian startups head to Web Summit Lisbon, families and institutions are expanding their European footprint — combining innovation mobility with disciplined capital allocation through CMVM‑regulated funds.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Pill>Web Summit Lisbon</Pill>
              <Pill>Brazil → Europe Capital Flows</Pill>
              <Pill>Explorer Regulated Access</Pill>
              <Pill>Golden Visa Optional</Pill>
            </div>
          </header>

          {/* Intro Image */}
          <div className="relative w-full aspect-[16/8] rounded-xl overflow-hidden border shadow">
            <Image src={OG_IMAGE} alt="Brazil at Web Summit Lisbon" fill className="object-cover" />
          </div>

          {/* Section: Why Lisbon */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Globe2 /> Why Brazil is choosing Lisbon as its European platform</h2>
            <p>
              According to Sebrae and ApexBrasil, Brazil will bring **300+ startups** to Web Summit Lisbon — following **€15M** in business generated over the last three editions. Technology, healthcare, agribusiness, and fintech founders are using Portugal as a **gateway to the EU**.
            </p>
            {bullets([
              'Strategic presence in the EU market with policies supporting innovation.',
              'Shared language and cultural alignment — reduced softlanding friction.',
              'Governance, regulatory stability, and legal protections under EU frameworks.',
            ])}
          </section>

          {/* Capital follows innovation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2"><TrendingUp /> Capital follows innovation</h2>
            <p>
              Where Brazilian companies establish operations, **family offices and capital markets follow**. Allocators are already pairing domestic private market return engines with **euro‑denominated regulated exposure**.
            </p>
          </section>

          {/* Allocation map */}
          <section className="space-y-4 mt-2">
            <h3 className="text-xl font-semibold">A dual‑engine allocation design</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border rounded-xl p-4 bg-white/70">
                <div className="font-semibold flex items-center gap-2"><LineChart size={16}/> Brazil — Performance Engine</div>
                {bullets([
                  'Local private credit & lower / mid‑market buyout exposure.',
                  'BRL carry and domestic alpha sources.',
                  'GP access in high‑growth sectors.',
                ])}
              </div>
              <div className="border rounded-xl p-4 bg-white/70">
                <div className="font-semibold flex items-center gap-2"><Building2 size={16}/> Portugal / Europe — Regulated Core</div>
                {bullets([
                  'CMVM‑regulated private equity & real assets.',
                  'EUR governance & legal diversification.',
                  'Optional Golden Visa mobility overlay — not required.',
                ])}
              </div>
            </div>
          </section>

          {/* Explorer Positioning */}
          <section className="space-y-4 mt-10">
            <h2 className="text-2xl font-bold flex items-center gap-2"><ShieldCheck /> Explorer Investments — Institutional access to Europe</h2>
            <p>
              Explorer Investments enables Brazilian investors to participate in European private markets through **CMVM‑regulated structures** — providing governance, reporting, and due diligence standards aligned with institutional expectations.
            </p>
            {bullets([
              'Private Equity — Value creation in lower / mid‑market sectors.',
              'Real Assets — Resilience, income characteristics, potential inflation linkage.',
              'Regulation: CMVM oversight; suitability and compliance processes in place.',
            ])}
          </section>

          {/* CTA: São Paulo Event */}
          <section className="space-y-4 mt-12 text-center">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2"><Calendar /> Meet Explorer in São Paulo — November 11, 2025</h2>
            <p className="max-w-2xl mx-auto text-[#15364A]">
              Schedule a **1:1 strategic consultation** with <strong>André Bandeira</strong> — discussing cross‑border structure, governance, and access to European regulated vehicles.
            </p>
            <div className="flex flex-row flex-wrap gap-3 justify-center pt-2">
              <Link href="https://goldenvisashub.com/" target="_blank" className="inline-flex items-center justify-center bg-[#B4A77E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a3956f] transition">Request Proposal <ArrowRight size={18} className="ml-2"/></Link>
              <Link href="https://www.linkedin.com/in/andre-bandeira-cfa-7a7258b/" target="_blank" className="inline-flex items-center justify-center bg-white border px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">Connect with André</Link>
              <Link href="https://carmocompanies.com" target="_blank" className="inline-flex items-center justify-center bg-[#002741] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">Conference Registration</Link>
            </div>
          </section>

          {/* Suitability Disclaimer */}
          <section className="mt-14 text-xs text-gray-500 space-y-2">
            <p>Private markets involve illiquidity, potential loss of capital, and long holding periods. This page is informational only and does not constitute an offer or solicitation.</p>
            <p>Any investment must be made via official documentation and is subject to eligibility, KYC/AML, and jurisdictional rules.</p>
          </section>

          <CtaSection />
        </div>
      </section>

      <BlogPreviewGridFromXML currentSlug={SLUG} />
      <Footer />
    </>
  );
}
