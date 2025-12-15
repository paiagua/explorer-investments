// app/golden-visa-funds-us-investors/page.tsx

import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';


import CtaSection from '@/components/CtaSection';
import {
  ShieldCheck,
  Flag,
  Globe2,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  FileCheck2,
  Clock,
  Users,
  MapPin,
  Lock,
} from 'lucide-react';

// ===================================================================
// METADATA (SEO)
// ===================================================================
const SLUG = 'golden-visa-funds-us-investors';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-funds-us.jpg';
const PUBLISHED = '2025-11-12T09:00:00+00:00';
const MODIFIED = '2025-11-12T09:00:00+00:00';

export const metadata = {
  title:
    'Portugal Golden Visa Funds for U.S. Investors (2025) - CMVM-Regulated Route to EU Residency',
  description:
    'A dedicated guide for American investors using Portugal Golden Visa investment funds: CMVM regulation, €500k ticket size, risk, timelines, tax notes, and how Explorer structures compliant cross-border portfolios for U.S. families.',
  keywords:
    'Portugal Golden Visa funds for US investors, CMVM regulated funds Portugal, Portugal residency by investment for Americans, US investor Golden Visa 2025, Portugal private equity fund route, Pathfinder fund Explorer, EU residency investment for US citizens, cross border wealth planning Portugal, SEC compliant feeder, Golden Visa fund due diligence',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large',
  openGraph: {
    title:
      'Portugal Golden Visa Funds for U.S. Investors - CMVM-Regulated, 2025-Ready',
    description:
      'How American families are using CMVM-regulated funds in Portugal to secure residency, diversify globally and keep portfolios compliant with U.S. rules.',
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'Portugal Golden Visa Funds',
        'US Investors',
        'Residency by Investment',
        'CMVM-Regulated Funds',
        'Cross-Border Planning',
        'EU Residency',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title:
      'Portugal Golden Visa Funds for U.S. Investors - Regulated Route to EU Residency',
    description:
      'Dedicated landing page for American investors evaluating Portugal Golden Visa funds: structure, governance, timelines and next steps.',
    images: [OG_IMAGE],
  },
  alternates: { canonical: CANONICAL_URL },
};

// ===================================================================
// SCHEMA.ORG
// ===================================================================
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  mainEntityOfPage: CANONICAL_URL,
  headline:
    'Portugal Golden Visa Funds for U.S. Investors - CMVM-Regulated Route to EU Residency',
  description:
    'Specialised information for American investors considering the Portugal Golden Visa via CMVM-regulated investment funds.',
  image: [OG_IMAGE],
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: { '@type': 'Organization', name: 'Explorer Investments' },
  publisher: {
    '@type': 'Organization',
    name: 'Explorer Investments',
    logo: {
      '@type': 'ImageObject',
      url: 'https://goldenvisashub.com/logo.png',
    },
  },
};

// ===================================================================
// PAGE COMPONENT
// ===================================================================
export default function GoldenVisaFundsUSInvestorsLanding() {
  return (
    <>
      <Script
        id="ld-gv-funds-us"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <Header />

      <main className="bg-white text-[#002741]">
        {/* HERO */}
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10">
          <div className="grid md:grid-cols-[3fr,2fr] gap-10 items-center">
            <div>
<div className="mt-5 text-xs sm:text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
                <Flag size={16} />
                Portugal Golden Visa Funds • U.S. Investors
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-balance">
                Portugal Golden Visa Funds for U.S. Investors in 2025
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#15364A] font-light text-balance">
                A CMVM-regulated route to EU residency designed for{' '}
                <strong>American families</strong> who want diversification,
                governance and a clear five-year plan - without buying property
                or relocating full-time.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3 text-sm">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#B4A77E]" />
                  <span>CMVM-regulated funds</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 size={18} className="text-[#B4A77E]" />
                  <span>€500k fund investment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-[#B4A77E]" />
                  <span>5-year residency track*</span>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3 text-sm">
                <Link
                  href="/portugal-golden-visa-fund-route-us-investors"
                  className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#a3956f] transition"
                >
                  Talk to Explorer’s Team <ArrowRight size={16} />
                </Link>
                <Link
                  href="/portugal-golden-visa-2025-investment-first-guide"
                  className="inline-flex items-center gap-2 border border-[#B4A77E] text-[#002741] px-5 py-2.5 rounded-lg font-semibold hover:bg-[#FFFCF3] transition"
                >
                  Read the 2025 Investment-First Guide
                </Link>
              </div>

              <p className="mt-3 text-[11px] text-[#5A6F7B] max-w-xl">
                *Citizenship timelines may change with nationality law
                amendments. Many U.S. families target{' '}
                <strong>Permanent Residency at year five</strong> and evaluate
                citizenship once rules are stable.
              </p>
            </div>

            <div className="relative w-full h-64 sm:h-80 md:h-full">
              <Image
                src={OG_IMAGE}
                alt="American investors reviewing Portugal Golden Visa fund structures and governance"
                fill
                className="object-cover rounded-xl border border-gray-200 shadow-sm"
                priority
              />
            </div>
          </div>
        </section>

        {/* WHY PORTUGAL VS OTHER PROGRAMS */}
        <section className="bg-[#F9F9FC] py-10 px-4 sm:px-6">
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-3">
                <Globe2 className="text-[#B4A77E]" />
                Why U.S. Investors Are Pivoting to Portugal’s Funds Route
              </h2>
              <p className="text-[#15364A] mb-3">
                Real-estate Golden Visa routes in <strong>Greece</strong> and{' '}
                <strong>Spain</strong> have tightened or shifted - higher
                minimums, longer processing and more political noise. Portugal
                now stands out for fund-based residency under a{' '}
                <strong>securities regulator (CMVM)</strong> instead of
                municipal property approvals.
              </p>
              <p className="text-[#15364A]">
                For Americans balancing IRS rules, SEC compliance and family
                mobility, a <strong>regulated fund</strong> route is often
                cleaner than holding multiple foreign properties directly.
              </p>
            </div>

            <div className="grid gap-3 text-sm">
              <FeatureCard
                title="Regulated investment, not just a property purchase"
                text="CMVM-supervised funds with audited reporting, custodians and governance - closer to what U.S. families expect from institutional products."
              />
              <FeatureCard
                title="Lower operational burden than real estate"
                text="No tenant management, renovations or local property micro-risks. Fund managers handle underlying assets; you track NAV and reporting."
              />
              <FeatureCard
                title="Designed for low physical presence"
                text="Golden Visa rules historically required only ~7 days/year in Portugal on average - ideal for families who cannot relocate immediately."
              />
            </div>
          </div>
        </section>

        {/* HOW THE FUND ROUTE WORKS */}
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              How the Golden Visa Fund Route Works for U.S. Investors
            </h2>
            <p className="text-[#15364A] mb-5">
              The core rule is simple: invest{' '}
              <strong>€500,000 or more in a qualifying fund</strong> that meets
              the Golden Visa criteria. The complexity is in the{' '}
              <strong>details</strong> - regulatory approvals, asset strategy
              and cross-border tax planning.
            </p>

            <ol className="list-decimal pl-6 space-y-3 text-[#15364A]">
              <li>
                <strong>Select a CMVM-regulated fund</strong> that is explicitly
                eligible for the Golden Visa and aligns with your risk/return
                profile (private equity, growth capital, real assets, etc.).
              </li>
              <li>
                <strong>Subscribe for at least €500,000</strong> (per main
                applicant) and complete KYC/AML and source-of-funds checks.
              </li>
              <li>
                <strong>Submit your Golden Visa application</strong> with proof
                of fund subscription, clean criminal record, health insurance
                and biometric data.
              </li>
              <li>
                <strong>Maintain the investment</strong> and minimal presence in
                Portugal throughout the required residency period.
              </li>
              <li>
                <strong>At year five</strong>, many investors evaluate{' '}
                <Link
                  href="/portuguese-citizenship-legacy-passport-eu-mobility-2025"
                  className="underline hover:text-[#B4A77E]"
                >
                  Permanent Residency and citizenship options
                </Link>
                , based on the law in force at that time.
              </li>
            </ol>

            <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
              <StatBox
                label="Minimum Fund Investment"
                value="€500,000+"
                note="Qualifying Golden Visa funds"
              />
              <StatBox
                label="Presence Rule"
                value="~7 days/year"
                note="Historically averaged"
              />
              <StatBox
                label="Track Record"
                value="Since 2017+"
                note="Fund route active for years"
              />
            </div>
          </div>
        </section>

        {/* SECTION: BUILT FOR U.S. FAMILIES */}
        <section className="bg-[#FFFCF3] border-y border-[#E4E0CF] py-12 px-4 sm:px-6">
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 flex items-center gap-2">
                <Users className="text-[#B4A77E]" />
                Built Specifically for U.S. Families
              </h2>
              <p className="text-[#15364A] mb-4">
                American investors face additional layers: IRS reporting,
                potential PFIC exposure, FATCA, and SEC rules for marketing and
                distribution. Explorer works with{' '}
                <strong>specialist U.S. tax and legal partners</strong> to
                structure a route that fits into your existing wealth plan.
              </p>
              <ul className="space-y-2 text-sm text-[#15364A]">
                <ListItem>
                  Coordinated planning with your U.S. CPA and estate attorney.
                </ListItem>
                <ListItem>
                  Focus on audited, CMVM-regulated funds with clear reporting.
                </ListItem>
                <ListItem>
                  Awareness of PFIC considerations and U.S. tax reporting
                  obligations (e.g. FBAR, Form 8938 - always through your own
                  advisors).
                </ListItem>
                <ListItem>
                  Structures that remain viable even if citizenship rules
                  tighten - with <strong>Permanent Residency</strong> as an
                  important milestone.
                </ListItem>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">
                Quick Comparison: U.S. Investor Concerns
              </h3>
              <div className="space-y-3 text-sm">
                <Row
                  label="Regulation"
                  value="CMVM (Portugal securities regulator), audited funds"
                />
                <Row
                  label="Custody"
                  value="Independent bank custodians, segregated accounts"
                />
                <Row
                  label="Reporting"
                  value="Annual audited accounts, NAV statements, investor letters"
                />
                <Row
                  label="Use of Capital"
                  value="Defined investment mandate (e.g., growth equity, real assets)"
                />
                <Row
                  label="Exit"
                  value="Fund maturity aligned with or beyond residency timeline"
                />
              </div>
              <p className="mt-4 text-[11px] text-[#5A6F7B]">
                This page is for educational purposes only and does not
                constitute tax, legal or investment advice, or an offer of
                securities. Always consult your own licensed advisors in the
                U.S. and Portugal.
              </p>
            </div>
          </div>
        </section>

        {/* DUE DILIGENCE / RED FLAGS */}
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Due Diligence Checklist for Golden Visa Funds
            </h2>
            <p className="text-[#15364A]">
              Before wiring capital, U.S. investors should pressure-test each
              fund with simple, direct questions. If the answers are vague,
              pause and reassess.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <FileCheck2 className="text-[#B4A77E]" /> Key Questions
                </h3>
                <ul className="space-y-2 text-[#15364A]">
                  <ListItem>Is the fund fully CMVM-registered?</ListItem>
                  <ListItem>
                    Who is the independent auditor and depositary bank?
                  </ListItem>
                  <ListItem>
                    What is the investment mandate and sector exposure?
                  </ListItem>
                  <ListItem>
                    How does the fund manage liquidity around year 5-7?
                  </ListItem>
                  <ListItem>
                    What are the total fees (management, performance, setup)?
                  </ListItem>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <Lock className="text-[#B4A77E]" /> Potential Red Flags
                </h3>
                <ul className="space-y-2 text-[#15364A]">
                  <ListItem>
                    No clear CMVM reference or public information.
                  </ListItem>
                  <ListItem>
                    Guarantees of fixed returns or “risk-free” outcomes.
                  </ListItem>
                  <ListItem>
                    Complex side agreements not reflected in the fund docs.
                  </ListItem>
                  <ListItem>
                    Over-concentration in a single asset or developer.
                  </ListItem>
                  <ListItem>
                    Pressure to subscribe before reading the prospectus.
                  </ListItem>
                </ul>
              </div>
            </div>

            <p className="text-sm text-[#5A6F7B]">
              For a deeper dive on risk and pitfalls, see our analysis{' '}
              <Link
                href="/golden-visa-fund-pitfalls-red-flags-2026"
                className="underline hover:text-[#B4A77E]"
              >
                Golden Visa Fund Pitfalls &amp; Red Flags (2026)
              </Link>
              .
            </p>
          </div>
        </section>

        {/* GEO / LIFESTYLE CTA FOR LISBON + ALGARVE */}
        <section className="bg-[#F2F6FA] py-10 px-4 sm:px-6">
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-3">
                <MapPin className="text-[#B4A77E]" />
                Invest in Funds, Enjoy Lisbon &amp; the Algarve
              </h2>
              <p className="text-[#15364A] mb-3">
                Many American families combine a fund-based Golden Visa with a
                lifestyle property in{' '}
                <Link
                  href="/algarve-american-investment-hotspot-2025"
                  className="underline hover:text-[#B4A77E]"
                >
                  the Algarve
                </Link>{' '}
                or central Lisbon -
                <strong> investing through funds, living through choice</strong>
                .
              </p>
              <p className="text-[#15364A]">
                The fund is your eligibility engine; your personal property
                choices can then follow lifestyle, not immigration rules.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white/60 p-6 text-sm">
              <h3 className="font-semibold mb-2">
                Two-Layer Strategy for U.S. Families
              </h3>
              <ul className="space-y-2 text-[#15364A]">
                <ListItem>
                  Layer 1: CMVM-regulated fund for residency eligibility and
                  capital deployment.
                </ListItem>
                <ListItem>
                  Layer 2: Optional lifestyle property (Lisbon, Cascais,
                  Comporta, Algarve) chosen purely on family needs.
                </ListItem>
                <ListItem>
                  Continuous coordination with your U.S. wealth and tax teams.
                </ListItem>
              </ul>
            </div>
          </div>
        </section>

        {/* FINAL CTA BLOCK */}
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid lg:grid-cols-[3fr,2fr] gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Design a Portugal Golden Visa Strategy for Your U.S. Family
              </h2>
              <p className="text-[#15364A] mb-3">
                Explorer works with American entrepreneurs, executives and
                family offices who want <strong>one coherent plan</strong>:
                diversified capital, governed structures and optional EU
                residency - without disrupting existing business and tax
                realities overnight.
              </p>
              <p className="text-[#15364A]">
                Share your priorities - wealth protection, children’s futures,
                succession, travel optionality - and our team can coordinate
                with your U.S. advisors to map the options.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link
                  href="/portugal-golden-visa-fund-route-us-investors"
                  className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#a3956f] transition"
                >
                  Request a Private Call <ArrowRight size={16} />
                </Link>
                <Link
                  href="/golden-visa-portugal-blog"
                  className="inline-flex items-center gap-2 underline font-semibold"
                >
                  Browse All Golden Visa Articles
                </Link>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-[#F9F9FC] text-sm">
              <h3 className="font-semibold mb-2">
                What We’ll Cover in Your First Call
              </h3>
              <ul className="space-y-2 text-[#15364A]">
                <ListItem>Your family profile &amp; residency goals</ListItem>
                <ListItem>
                  How Portugal compares to Greece, Spain and other options
                </ListItem>
                <ListItem>
                  Which type of fund might fit your risk tolerance
                </ListItem>
                <ListItem>
                  Coordination with your tax and legal teams in the U.S.
                </ListItem>
              </ul>
              <p className="mt-4 text-[11px] text-[#5A6F7B]">
                Explorer Investments is an independent Portuguese asset manager.
                This conversation is exploratory and does not constitute
                investment advice or a solicitation. Eligibility and outcomes
                depend on your personal profile and future legal changes.
              </p>
            </div>
          </div>

          {/* Global generic CTA if you want to reuse */}
          <div className="mt-10">
            <CtaSection />
          </div>
        </section>
      </main>
      {/* Related articles */}
      <BlogPreviewGridFromXML currentSlug={SLUG} />
      <Footer />
    </>
  );
}

// ===================================================================
// SMALL REUSABLE PRESENTATIONAL COMPONENTS
// ===================================================================

function FeatureCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <h3 className="font-semibold mb-1 text-[#002741]">{title}</h3>
      <p className="text-sm text-[#15364A]">{text}</p>
    </div>
  );
}

function StatBox({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm text-center">
      <p className="text-xs uppercase tracking-wide text-[#5A6F7B] mb-1">
        {label}
      </p>
      <p className="text-xl font-bold text-[#002741]">{value}</p>
      {note && (
        <p className="text-[11px] text-[#5A6F7B] mt-1 leading-snug">{note}</p>
      )}
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 size={16} className="mt-[2px] text-[#B4A77E]" />
      <span>{children}</span>
    </li>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <span className="text-[#5A6F7B]">{label}</span>
      <span className="font-semibold text-right text-[#002741]">{value}</span>
    </div>
  );
}
