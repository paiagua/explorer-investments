// ✅ Event Countdown CTA Article Component (Expanded, English)
// Brazil Private Markets Meeting - Featuring André Bandeira
// Next.js ready, styled for Explorer Investments brand

import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import Link from 'next/link';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';

export const revalidate = 300;
export const fetchCache = 'force-cache';

import {
  Calendar,
  MapPin,
  Users,
  TrendingUp,
  ShieldCheck,
  Building2,
  Globe2,
  Link as LinkIcon,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ClipboardList,
  Landmark,
  BookOpen,
  LineChart,
  Siren,
  Lock,
  Quote,
} from 'lucide-react';

// ===================================================================
// METADATA
// ===================================================================
const SLUG = 'brazil-private-markets-meeting-andre-bandeira-countdown';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/brazil-private-markets-meeting-2025.jpg';
const PUBLISHED = '2025-11-05T09:00:00+00:00';

export const metadata = {
  title: 'Meet André Bandeira in São Paulo — Brazil Private Markets Meeting (Nov 11, 2025)',
  description:
    'Join Explorer Investments at Rosewood São Paulo for deep-dive private markets insights. Compare Brazil vs. Portugal/Europe allocations, explore CMVM-regulated funds (Golden Visa eligible and non-GV), and book a 1:1 meeting with André Bandeira.',
  openGraph: {
    title: 'Brazil Private Markets Meeting — Speak with André Bandeira (Nov 11, 2025)',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

export default function BrazilPrivateMarketsMeetingCTA() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Brazil Private Markets Meeting — Rosewood São Paulo',
    startDate: '2025-11-11',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'Rosewood São Paulo',
      address: 'São Paulo, Brazil',
    },
    image: OG_IMAGE,
    performer: { '@type': 'Person', name: 'André Bandeira' },
    organizer: { '@type': 'Organization', name: 'Explorer Investments' },
    description:
      'Meet Explorer Investments in São Paulo for private markets insights and CMVM-regulated funds (with and without Golden Visa eligibility).',
  };

  const bullets = (items: string[]) => (
    <ul className="space-y-2 list-disc pl-6">
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );

  const Pill = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center gap-2 text-xs font-semibold bg-gray-100 rounded-full px-3 py-1 border">
      <CheckCircle2 size={14} /> {children}
    </span>
  );

  return (
    <>
      <Script id="ld-event" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Header />

      {/* === HERO / EVENT HEADER === */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-4xl mx-auto space-y-10">
          <header className="space-y-3 text-center">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-balance">
              Meet <span className="text-[#B4A77E]">André Bandeira</span> in São Paulo — Brazil Private Markets Meeting
            </h1>
            <p className="text-lg sm:text-xl font-light text-[#15364A] max-w-3xl mx-auto">
              A focused, practitioner-led conversation on global private markets for Brazilian allocators. Compare local opportunities with regulated access to Europe through Explorer Investments.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              <Pill>Rosewood São Paulo</Pill>
              <Pill>November 11, 2025</Pill>
              <Pill>Institutional & Family Offices</Pill>
            </div>
          </header>

          {/* EVENT DETAILS */}
          <div className="grid gap-4 text-sm bg-gray-50 rounded-xl p-6 shadow-sm border">
            <div className="flex items-center gap-2"><Calendar size={18} /> <strong>Tuesday, November 11, 2025</strong></div>
            <div className="flex items-center gap-2"><MapPin size={18} /> Rosewood São Paulo — Brazil</div>
            <div className="flex items-center gap-2"><Users size={18} /> Institutional Investors · Family Offices · Managers</div>
          </div>

          {/* IMAGE */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border shadow">
            <Image src={OG_IMAGE} alt="André Bandeira — Brazil Private Markets Meeting" fill className="object-cover" />
          </div>

          {/* WHY MEET ANDRÉ */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-4 flex items-center gap-2"><TrendingUp /> Why speak with André Bandeira</h2>
            {bullets([
              'Cross-border structuring for HNW families and institutions.',
              'CMVM-regulated fund exposure in Portugal/Europe — strategies with and without Golden Visa eligibility.',
              'Portfolio construction across BRL and EUR risk premia with disciplined governance.',
              'Succession, mobility, and residency planning within EU frameworks.',
            ])}
          </section>

          {/* BRAZIL VS EUROPE ALLOCATION */}
          <section className="space-y-4 mt-8">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Globe2 /> Allocation maps: Brazil and Portugal/Europe</h2>
            <p>
              Brazilian portfolios increasingly blend local return engines with euro-denominated defenses. Below is a concise, practitioner view of how allocators are combining both sides:
            </p>
            <div className="mt-2 grid sm:grid-cols-2 gap-4">
              <div className="border rounded-xl p-4 bg-white/70">
                <div className="font-semibold flex items-center gap-2"><LineChart size={16}/> Brazil (Local Engine)</div>
                {bullets([
                  'Domestic private credit and lower/middle-market buyout exposure.',
                  'Macro-aware cycle timing; BRL carry and local alpha sources.',
                  'GP access and co-investments with sector specialization.',
                ])}
              </div>
              <div className="border rounded-xl p-4 bg-white/70">
                <div className="font-semibold flex items-center gap-2"><Building2 size={16}/> Portugal / Europe (Regulated Core)</div>
                {bullets([
                  'Explorer funds (private equity, real assets) under CMVM oversight.',
                  'Euro exposure and EU governance; legal and jurisdictional diversification.',
                  'Optional Golden Visa linkage — or non-GV strategies for pure return/risk goals.',
                ])}
              </div>
            </div>
          </section>

          {/* PROGRAM / AGENDA */}
          <section className="space-y-4 mt-10">
            <h2 className="text-2xl font-bold flex items-center gap-2"><ClipboardList /> Suggested agenda for your 1:1</h2>
            {bullets([
              'Your objectives: liquidity horizon, tax residency, generational planning.',
              'Brazil vs. Europe: currency, legal, and governance diversification.',
              'Explorer vehicles: strategy, pipeline, fees, governance, reporting cadence.',
              'Golden Visa and non-GV pathways — suitability and trade-offs.',
              'Operational next steps: onboarding, KYC/AML, documentation, custodian integration.',
            ])}
          </section>

          {/* EXPLORER FUND LINES (HIGH LEVEL) */}
          <section className="space-y-4 mt-10">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Landmark /> Explorer Investments — regulated access</h2>
            <p>
              Explorer Investments provides access to private equity and real asset strategies overseen by the Portuguese regulator (CMVM). Investors can target solutions that are either <em>Golden Visa eligible</em> or explicitly <em>non-GV</em> for purely financial objectives.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="border rounded-xl p-4 bg-white/70">
                <div className="font-semibold flex items-center gap-2"><TrendingUp size={16}/> Private Equity</div>
                <p className="mt-2">Lower/mid-market transactions with operational value creation and governance discipline.</p>
              </div>
              <div className="border rounded-xl p-4 bg-white/70">
                <div className="font-semibold flex items-center gap-2"><Building2 size={16}/> Real Assets</div>
                <p className="mt-2">Income/resilience via regulated vehicles; potential inflation linkage and collateral features.</p>
              </div>
              <div className="border rounded-xl p-4 bg-white/70">
                <div className="font-semibold flex items-center gap-2"><ShieldCheck size={16}/> Governance</div>
                <p className="mt-2">CMVM oversight, institutional risk controls, and transparent LP reporting standards.</p>
              </div>
            </div>
          </section>

          {/* CASE SNAPSHOTS */}
          <section className="space-y-4 mt-10">
            <h2 className="text-2xl font-bold flex items-center gap-2"><BookOpen /> Allocation snapshots</h2>
            <div className="grid gap-4">
              <div className="border rounded-xl p-4 bg-white/70">
                <div className="font-semibold">Case A — Family Office (São Paulo)</div>
                {bullets([
                  'Goal: EU residency optionality + euro assets without relocating.',
                  'Blend: Brazil private credit & buyout + Explorer real assets (GV-eligible).',
                  'Outcome: currency and legal diversification with governance uplift.',
                ])}
              </div>
              <div className="border rounded-xl p-4 bg-white/70">
                <div className="font-semibold">Case B — Entrepreneur (Porto Alegre)</div>
                {bullets([
                  'Goal: pure return; no residency need.',
                  'Blend: local co-investments + Explorer private equity (non-GV share class).',
                  'Outcome: focused value creation and institutional reporting cadence.',
                ])}
              </div>
            </div>
          </section>

          {/* RISK & COMPLIANCE NOTES */}
          <section className="space-y-4 mt-10">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Siren /> Risk, suitability & compliance</h2>
            {bullets([
              'Private markets involve illiquidity, capital loss risk, and long holding periods.',
              'Products are subject to eligibility, KYC/AML, and suitability assessments.',
              'Tax consequences depend on personal circumstances; seek independent advice.',
              'Regulatory status: funds overseen by CMVM; offering documents prevail.',
            ])}
            <div className="text-xs text-gray-500">
              This page is informational only and does not constitute an offer or solicitation. Any investment must be made via official documentation.
            </div>
          </section>

          {/* SPEAKER BIO */}
          <section className="space-y-4 mt-10">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Sparkles /> About André Bandeira</h2>
            <p>
              André Bandeira advises high-net-worth families and institutional allocators on cross-border portfolio design, governance, and residency-linked investment choices. His work bridges Brazil-based return engines with regulated European vehicles under EU standards.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Pill>Cross-border structuring</Pill>
              <Pill>EU-regulated funds</Pill>
              <Pill>Family governance</Pill>
              <Pill>Golden Visa & non-GV</Pill>
            </div>
          </section>

          {/* QUICK COMPARISON TABLE */}
          <div className="mt-10 border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2 text-center text-xs font-semibold bg-gray-100">
              <div className="p-3">Brazil</div>
              <div className="p-3">Portugal / Europe</div>
            </div>
            <div className="grid grid-cols-2 text-sm">
              <div className="p-4 border-r">BRL exposure; domestic cycles; GP proximity</div>
              <div className="p-4">EUR exposure; EU governance; jurisdictional diversification</div>
              <div className="p-4 border-r">Local private credit & buyout access</div>
              <div className="p-4">CMVM-regulated funds (Explorer) — GV and non-GV tracks</div>
              <div className="p-4 border-r">Domestic tax/regulatory dynamics</div>
              <div className="p-4">Cross-border planning; reporting and oversight standards</div>
            </div>
          </div>

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Lock /> Frequently asked questions</h2>
            <div className="mt-4 space-y-3">
              {[
                {
                  q: 'Do I need to pursue a Golden Visa to invest with Explorer?',
                  a: 'No. We support both GV-eligible and non-GV strategies. Many investors choose non-GV share classes when residency is not a requirement.'
                },
                {
                  q: 'How do onboarding and documentation work?',
                  a: 'We follow institutional KYC/AML standards. After an initial suitability conversation, we provide official documents and assist with custodial coordination.'
                },
                {
                  q: 'Is there a minimum commitment?',
                  a: 'Minimums depend on the specific vehicle. Discuss thresholds and pacing with André during your 1:1 session.'
                },
                {
                  q: 'Can I co-invest?',
                  a: 'Co-investment opportunities may be available depending on pipeline and investor eligibility.'
                },
              ].map((f, i) => (
                <details key={i} className="group border rounded-xl px-4 py-3">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <span className="font-medium">{f.q}</span>
                    <ArrowRight className="transition group-open:rotate-90" size={16} />
                  </summary>
                  <p className="mt-2 text-sm text-[#15364A]">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* PRIMARY CTAS */}
          <section className="space-y-4 mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="https://carmocompanies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#B4A77E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a3956f] transition">
                Conference Registration <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link
                href="https://goldenvisashub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white border px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
                Explore Golden Visa Options
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="https://www.explorerinvestments.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white border px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
                <LinkIcon size={18} className="mr-2" /> Explorer Investments Website
              </Link>
              <Link
                href="https://www.linkedin.com/in/andre-bandeira-cfa-7a7258b/?originalSubdomain=pt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white border px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
                <LinkIcon size={18} className="mr-2" /> Connect with André on LinkedIn
              </Link>
              <Link
                href="https://goldenvisashub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#002741] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Request a Proposal
              </Link>
            </div>
          </section>

          {/* GLOBAL SITE CTA */}
          <CtaSection />
        </div>
      </section>

      {/* RELATED CONTENT */}
      <BlogPreviewGridFromXML currentSlug={SLUG} />
      <Footer />
    </>
  );
}
