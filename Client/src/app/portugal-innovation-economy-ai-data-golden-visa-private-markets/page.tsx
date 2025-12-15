// ✅ Strategic Editorial + React Page
// Portugal’s Tech & AI Shift + Golden Visa (optional) + Explorer Investments + São Paulo Meeting CTA
// Next.js ready • Institutional tone • Fully in English • SEO & OG • Conversion-focused

import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import Link from 'next/link';
import CtaSection from '@/components/CtaSection';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';

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
  Brain,
  Network,
  Factory,
  Ship,
} from 'lucide-react';

// ===================================================================
// METADATA
// ===================================================================
const SLUG = 'portugal-innovation-economy-ai-data-golden-visa-private-markets';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/portugal-tech-ai-shift.jpg';
const PUBLISHED = '2025-11-05T09:00:00+00:00';

export const metadata = {
  title: "Portugal’s Economic Shift: From Tourism to Data & AI — How Global Investors Participate via Regulated Private Markets (Golden Visa Optional)",
  description:
    'Portugal is leaning into AI, data centers, logistics and advanced industry — from Sines\' Start Campus to battery manufacturing — while families and institutions use CMVM-regulated funds to gain EUR exposure. Golden Visa is an option, not the thesis.',
  openGraph: {
    title: "Portugal’s Economic Shift: From Tourism to Data & AI",
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

export default function PortugalTechAIShiftArticle() {
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

          {/* HERO */}
          <header className="space-y-6 text-center">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight max-w-4xl mx-auto text-balance">
              Portugal’s Economic Shift: From Beaches to Data & AI — And How Investors Can Participate
            </h1>
            <p className="text-xl font-light text-[#15364A] max-w-3xl mx-auto">
              From Web Summit momentum to Sines’ hyperscale data infrastructure and new industrial projects, Portugal is repositioning for higher productivity growth. Capital follows innovation — and CMVM-regulated funds provide institutional access to the opportunity set. Golden Visa remains optional.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Pill>AI & Data Economy</Pill>
              <Pill>Logistics & Industry</Pill>
              <Pill>EUR Governance</Pill>
              <Pill>Golden Visa Optional</Pill>
            </div>
          </header>

          {/* HERO IMAGE */}
          <div className="relative w-full aspect-[16/8] rounded-xl overflow-hidden border shadow">
            <Image src={OG_IMAGE} alt="Portugal AI & Data Economy" fill className="object-cover" />
          </div>

          {/* SECTION: PORTUGAL’S ENTRY INTO TECH/AI */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Brain /> Portugal’s entry into the tech & AI economy</h2>
            <p>
              The country is investing billions to reduce dependence on seasonal tourism and pivot toward **data centers, AI infrastructure, advanced logistics, and clean industry**. Sines — a coastal hub south of Lisbon — sits on a critical nexus of **subsea cables** connecting Europe with Brazil and Africa, and soon the US (via a new link), making it a natural **gateway for data traffic** across continents.
            </p>
            {bullets([
              'Hyperscale data build-out at Sines (“Start Campus”) with a reported ~€8.5B / $9.9B project value; first building live.',
              'Cloud & compute tenants (e.g., major global providers) and a roadmap to six buildings by 2030 powered by renewables.',
              'Re-use of legacy industrial infrastructure (cooling/seawater) to accelerate deployment and sustainability.',
            ])}
          </section>

          {/* SECTION: INDUSTRY & LOGISTICS MOMENTUM */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Factory /> Beyond data: batteries, ports and logistics</h2>
            <p>
              Complementing the data pivot, Portugal is attracting **advanced manufacturing and logistics** to deepen its role as an Atlantic-EU platform. Projects referenced include a **~€2-2.3B battery factory**, port expansions, and broader supply-chain upgrades.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border rounded-xl p-4 bg-white/70">
                <div className="font-semibold flex items-center gap-2"><Factory size={16}/> Industrial footprint</div>
                {bullets([
                  'Battery manufacturing project (target ~2028 completion; thousands of jobs expected).',
                  'Co-location with data infrastructure enabling AI + industry convergence.',
                ])}
              </div>
              <div className="border rounded-xl p-4 bg-white/70">
                <div className="font-semibold flex items-center gap-2"><Ship size={16}/> Logistics & ports</div>
                {bullets([
                  'Deepwater terminal capacity expansion to reinforce Atlantic gateway status.',
                  'High-velocity export corridors planned; continued rail/highway upgrades needed.',
                ])}
              </div>
            </div>
            <p className="text-sm text-[#15364A]">
              Stakeholders note infrastructure bottlenecks (housing, transport) that require continued investment — a familiar pattern in fast-growing innovation hubs.
            </p>
          </section>

          {/* SECTION: CAPITAL FOLLOWS INNOVATION */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2"><TrendingUp /> Capital follows innovation — the investor’s lens</h2>
            <p>
              As **Web Summit Lisbon** and broader innovation agendas amplify Portugal’s visibility, global allocators are pairing domestic return engines with **EUR-denominated, regulated exposure**. The objective is to capture growth while benefiting from EU governance and jurisdictional diversification.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border rounded-xl p-4 bg-white/70">
                <div className="font-semibold flex items-center gap-2"><LineChart size={16}/> Brazil — Performance Engine</div>
                {bullets([
                  'Local private credit and lower/middle-market buyouts.',
                  'Cycle-aware macro positioning; BRL carry and alpha sources.',
                  'Sector-specialist GPs and selective co-investments.',
                ])}
              </div>
              <div className="border rounded-xl p-4 bg-white/70">
                <div className="font-semibold flex items-center gap-2"><Building2 size={16}/> Portugal / Europe — Regulated Core</div>
                {bullets([
                  'CMVM-regulated private equity and real asset vehicles.',
                  'EUR exposure; EU legal & governance standards.',
                  'Mobility optionality (Golden Visa) when suitable — not required.',
                ])}
              </div>
            </div>
          </section>

          {/* SECTION: EXPLORER POSITIONING */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2"><ShieldCheck /> Explorer Investments — your institutional bridge to Europe</h2>
            <p>
              Explorer provides **CMVM-regulated** access to European private markets aligned with institutional due diligence standards. Investors can pursue **Golden Visa-eligible** strategies or **non-GV share classes** when residency is not part of the mandate.
            </p>
            {bullets([
              'Private Equity — operational value creation in lower/mid-market companies.',
              'Real Assets — resilience, income characteristics, and inflation linkage potential.',
              'Governance — oversight, reporting cadence, KYC/AML and suitability processes.',
            ])}
          </section>

          {/* SECTION: 1:1 AGENDA */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2"><ClipboardList /> What we cover in a 1:1 strategy session</h2>
            {bullets([
              'Objectives: liquidity horizon, tax residency, generational planning.',
              'Brazil vs. Europe blend: currency, legal, and governance diversification.',
              'Explorer vehicles: mandate fit, pipeline, fees, reporting.',
              'Golden Visa options vs. non-GV tracks — trade-offs and suitability.',
              'Next steps: onboarding, documentation, custodian integration.',
            ])}
          </section>

          {/* CTA: SÃO PAULO MEETING */}
          <section className="space-y-4 mt-10 text-center">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2"><Calendar /> Meet Explorer in São Paulo — November 11, 2025</h2>
            <p className="max-w-2xl mx-auto text-[#15364A]">
              Book a **1:1 strategic consultation** with <strong>André Bandeira</strong> on cross-border portfolio design and access to EU regulated vehicles.
            </p>
            <div className="flex flex-row flex-wrap gap-3 justify-center pt-2">
              <Link href="https://goldenvisashub.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#B4A77E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a3956f] transition">Request Proposal <ArrowRight size={18} className="ml-2"/></Link>
              <Link href="https://www.linkedin.com/in/andre-bandeira-cfa-7a7258b/?originalSubdomain=pt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white border px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">Connect with André</Link>
              <Link href="https://carmocompanies.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#002741] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">Conference Registration</Link>
            </div>
          </section>

          {/* DISCLAIMER */}
          <section className="mt-12 text-xs text-gray-500 space-y-2">
            <p>Private markets involve illiquidity, potential loss of capital, and long holding periods. This page is informational only and does not constitute an offer or solicitation.</p>
            <p>Any investment must be made via official documentation and is subject to eligibility, KYC/AML, and jurisdictional rules. Regulatory statements herein summarize high-level characteristics; official offering materials prevail.</p>
          </section>

          {/* GLOBAL SITE CTA */}
          <CtaSection />
        </div>
      </section>

      <BlogPreviewGridFromXML currentSlug={SLUG} />
      <Footer />
    </>
  );
}
