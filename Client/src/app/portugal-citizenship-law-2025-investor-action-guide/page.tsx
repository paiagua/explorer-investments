import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';

// Revalidate HTML every 10 min
export const revalidate = 600;
// Force cache for Server Component fetches on this route
export const fetchCache = 'force-cache';

import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';
import {
  ShieldCheck,
  AlertTriangle,
  BarChart,
  FileText,
  CheckCircle,
  Scale,
  BookOpen,
} from 'lucide-react';

// ===================================================================
// METADATA (SEO)
// ===================================================================
const SLUG = 'portugal-citizenship-law-2025-investor-action-guide';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/portugal-citizenship-law-2025-investor-action-guide.jpg';
const PUBLISHED = '2025-10-31T13:00:00+00:00';
const MODIFIED  = '2025-10-31T13:00:00+00:00';

export const metadata = {
  title:
    'Portugal Citizenship Law 2025: Investor Action Guide - Timelines, Constitutional Review, 5+5 Framework & CMVM Funds',
  description:
    'Advisor-focused analysis for HNW families: what the proposed citizenship amendments say, why constitutional review may delay enforcement, how to act depending on your status (5+ years, filed & pending, preparing to file), and why the investment-first €500k CMVM fund route remains the flagship.',
  keywords:
    'Portugal citizenship law 2025, nationality law Portugal 2025, Golden Visa citizenship timeline, constitutional review Portugal, apply now Golden Visa, 5+5 residence framework, CMVM regulated funds, AIMA timeline, PFIC QEF US investors, NIF bank subscription AIMA, investor action guide Portugal',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Portugal Citizenship Law 2025 - Investor Action Guide (Advisor Edition)',
    description:
      'What changed, what seems stable, why constitutional review matters, and exactly what to do based on your situation. Investment-first path via CMVM funds.',
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'Portugal Citizenship Law',
        'Golden Visa',
        'Residency by Investment',
        'Constitutional Review',
        'CMVM Funds',
        'AIMA Portugal',
        'Schengen Mobility',
        'PFIC QEF',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title: 'Portugal Citizenship Law 2025 - What Smart Investors Should Do Now',
    description:
      'Clear, advisor-grade actions by scenario, plus the investment-first route via €500k CMVM funds. EN-US.',
    images: [OG_IMAGE],
  },
  alternates: { canonical: CANONICAL_URL },
};

// ===================================================================
// JSON-LD SCHEMAS (Article + Breadcrumbs + FAQ + HowTo + ItemList)
// ===================================================================
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  mainEntityOfPage: CANONICAL_URL,
  headline: metadata.title,
  description: metadata.description,
  image: [OG_IMAGE],
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: { '@type': 'Organization', name: 'Explorer Investments' },
  publisher: {
    '@type': 'Organization',
    name: 'Explorer Investments',
    logo: { '@type': 'ImageObject', url: 'https://goldenvisashub.com/logo.png' },
  },
  wordCount: '3200',
};

const schemaBreadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://goldenvisashub.com/' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://goldenvisashub.com/golden-visa-portugal-blog' },
    { '@type': 'ListItem', position: 3, name: 'Portugal Citizenship Law 2025 - Investor Action Guide', item: CANONICAL_URL },
  ],
};

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does the Portugal Golden Visa remain available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. Proposed citizenship amendments do not eliminate the Golden Visa. Program mechanics and the funds route remain in operation; verify current rules at your filing date.',
      },
    },
    {
      '@type': 'Question',
      name: 'When would new citizenship timelines start to apply?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Any change would require final vote, presidential review and potential Constitutional Court analysis before entering into force, possibly with transitional provisions. Check official updates.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the 5+5 residence framework often used for planning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Five years of Temporary Residence under the Golden Visa, followed by five years of Permanent Residence. Historically low physical presence; confirm current conditions with counsel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is residential real estate a qualifying route?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Residential real estate has been excluded from qualifying Golden Visa routes. The flagship path is the €500k subscription into CMVM-regulated investment funds, with alternatives such as research, culture and job creation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should US taxpayers consider (PFIC/QEF)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Non-US funds are typically PFICs. Request an annual PFIC Information Statement to consider a QEF election. Coordinate with experienced US tax advisors.',
      },
    },
  ],
};

const schemaHowTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to prepare a Portugal Golden Visa application amid legal changes',
  description:
    'Advisor-grade checklist from objectives and due diligence to fund subscription, declaration issuance and AIMA scheduling.',
  totalTime: 'P14D',
  step: [
    { '@type': 'HowToStep', name: 'Define objectives', text: 'Clarify diversification, optionality, family inclusion and liquidity horizons.' },
    { '@type': 'HowToStep', name: 'Engage counsel', text: 'Portuguese immigration counsel for NIF, banking, documentation and AIMA filings.' },
    { '@type': 'HowToStep', name: 'Select CMVM-regulated fund', text: 'Review PPM/KID, governance, service providers, liquidity and risk factors.' },
    { '@type': 'HowToStep', name: 'Subscribe (e.g., €500k)', text: 'Execute subscription documents and wire funds to the custodian.' },
    { '@type': 'HowToStep', name: 'Obtain Declaration', text: 'Manager/Custodian issue declaration confirming a qualifying investment.' },
    { '@type': 'HowToStep', name: 'AIMA scheduling', text: 'Submit file; attend biometrics; receive residence cards.' },
  ],
};

const schemaItemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Proposed amendments overview' },
    { '@type': 'ListItem', position: 2, name: 'Constitutional review pathway' },
    { '@type': 'ListItem', position: 3, name: 'Investor decision matrix' },
    { '@type': 'ListItem', position: 4, name: '5+5 planning framework' },
    { '@type': 'ListItem', position: 5, name: 'CMVM funds route & PFIC note' },
  ],
};

// Helpers
const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#0f2c3a] bg-[#FFFCF3] py-3 px-4 rounded-md my-6 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

const KeyStat = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-xl border border-gray-200 px-4 py-3 bg-white shadow-sm">
    <div className="text-xs uppercase tracking-wide text-[#5A6F7B]">{label}</div>
    <div className="text-2xl font-extrabold text-[#002741]">{value}</div>
  </div>
);

// ===================================================================
// PAGE COMPONENT (Server Component)
// ===================================================================
export default function PortugalCitizenshipLaw2025InvestorActionGuidePage() {
  return (
    <>
      {/* JSON-LD */}
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <Script id="ld-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <Script id="ld-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHowTo) }} />
      <Script id="ld-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItemList) }} />

      <Header />

      {/* Main Article Content */}
      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Header */}
          <header className="text-left">
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <ShieldCheck size={16} /> Advisor Strategy & Legal Update
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              Portugal Citizenship Law 2025: Investor Action Guide - What Changed, What Seems Stable, and How to Prepare Now
            </h1>
            <p className="text-lg text-[#15364A] font-light text-balance">
              A practical, investment-first briefing based on current public proposals and market commentary. It outlines proposed changes, constitutional
              review steps, what appears stable in the Golden Visa, and advisor-grade actions for families in three scenarios: eligible for citizenship now,
              filed and pending, or preparing to file.
            </p>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src={OG_IMAGE}
              alt="Lisbon courts and financial district - symbolism for Portugal citizenship law changes and investment planning."
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-2 text-xs sm:text-sm text-white/95 bg-gradient-to-t from-black/60 to-transparent">
              Legal debate may evolve; investment quality and timing remain within your control.
            </figcaption>
          </figure>

          {/* KPI Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <KeyStat label="Planning model" value="5 + 5 years" />
            <KeyStat label="Flagship route" value="€500k CMVM fund" />
            <KeyStat label="Presence" value="Historically low" />
            <KeyStat label="Mobility" value="Schengen access" />
          </div>

          {/* Table of Contents */}
          <nav aria-label="On this page" className="border border-gray-200 rounded-lg p-4 bg-[#F9F9FC]">
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#15364A]">
              <li><a href="#what-changed" className="hover:underline">What Changed (Proposals)</a></li>
              <li><a href="#constitutional" className="hover:underline">Constitutional Review: Why Timing Still Matters</a></li>
              <li><a href="#stable" className="hover:underline">What Appears Stable in the Golden Visa</a></li>
              <li><a href="#decision-matrix" className="hover:underline">Investor Decision Matrix (3 Scenarios)</a></li>
              <li><a href="#funds" className="hover:underline">Why the CMVM Funds Route Leads</a></li>
              <li><a href="#process" className="hover:underline">Step-by-Step: NIF → Bank → Subscription → AIMA</a></li>
              <li><a href="#risks" className="hover:underline">Risks, PFIC/QEF & Best Practice</a></li>
              <li><a href="#faq" className="hover:underline">Extended FAQs</a></li>
              <li><a href="#about-explorer" className="hover:underline">About Explorer</a></li>
            </ul>
          </nav>

          {/* What changed */}
          <section id="what-changed" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">What Changed (Proposals)</h2>
            <p className="text-[#15364A]">Based on current public debate and draft language discussed in late October 2025, the proposal includes:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>Minimum residence period</strong> for citizenship eligibility framed at <strong>7 years</strong> for CPLP/EU nationals and <strong>10 years</strong> for others.</li>
              <li><strong>Residence counting</strong> from the <strong>date of residence permit issuance</strong> rather than the application date.</li>
              <li><strong>Language & civic knowledge</strong> demonstration (Portuguese language/culture and fundamentals of the constitutional system).</li>
              <li><strong>Aggregation</strong> of non-consecutive legal residence periods within a 10-year window for counting purposes.</li>
            </ul>
            <p className="text-sm text-[#5A6F7B]">Important: Treat these as proposals until the final text is promulgated. Verify the version in force at your filing date.</p>
          </section>

          {/* Constitutional review */}
          <section id="constitutional" className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF] shadow-sm">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><Scale /> Constitutional Review: Why Timing Still Matters</h2>
            <p className="text-[#15364A]">
              After the final parliamentary vote, the President has up to 20 days to promulgate, veto, or request a <strong>Constitutional Court</strong> review. Market
              practitioners expect scrutiny on transitional protections and legitimate expectations, especially for applications in flight.
            </p>
            <p className="text-[#15364A]">
              This path can delay enforcement and often results in clarifications or transitional regimes. For investors, that creates a
              <strong>planning window</strong> to file under current mechanics while maintaining optionality if outcomes change.
            </p>
            <Quote>
              “Don’t outsource your timeline to politics. Control what you can: investment quality, documentation readiness and filing cadence.” - <strong>André Bandeira</strong>, Explorer Investments
            </Quote>
          </section>

          {/* Stable */}
          <section id="stable" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">What Appears Stable in the Golden Visa</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>Program availability:</strong> the Golden Visa remains in operation.</li>
              <li><strong>Routes:</strong> €500k <strong>CMVM-regulated funds</strong>, research, culture and job creation paths.</li>
              <li><strong>Residential real estate:</strong> excluded from qualifying routes.</li>
              <li><strong>Presence:</strong> historically low physical-stay averages; verify exact periods in force.</li>
              <li><strong>Schengen mobility</strong> as a practical benefit of residency.</li>
            </ul>
          </section>

          {/* Decision Matrix */}
          <section id="decision-matrix" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Investor Decision Matrix (Three Scenarios)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-lg border p-4 bg-white">
                <h3 className="font-semibold mb-2 flex items-center gap-2"><CheckCircle className="text-green-700"/> Scenario A - Eligible for Citizenship Now (≥5 years)</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-[#15364A]">
                  <li>Prepare and submit the <strong>citizenship application</strong> under the current regime.</li>
                  <li>Ensure <strong>language/civics</strong> certification readiness.</li>
                  <li>Maintain <strong>documentary evidence</strong> of legal residence continuity.</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 bg-white">
                <h3 className="font-semibold mb-2 flex items-center gap-2"><AlertTriangle className="text-amber-600"/> Scenario B - Filed & Pending (awaiting permit)</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-[#15364A]">
                  <li>Monitor final text and any <strong>transitional/grandfathering</strong> guidance.</li>
                  <li>Keep KYC/AML and <strong>proof of funds</strong> updated; be biometrics-ready.</li>
                  <li>Plan travel for <strong>AIMA scheduling</strong> as soon as slots open.</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 bg-white">
                <h3 className="font-semibold mb-2 flex items-center gap-2"><FileText className="text-[#002741]"/> Scenario C - Preparing to File</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-[#15364A]">
                  <li>Proceed with <strong>NIF & bank account</strong> setup and <strong>fund due diligence</strong>.</li>
                  <li>Target <strong>file submission</strong> before potential enforcement; maintain optionality if outcomes shift.</li>
                  <li>Align with <strong>cross-border tax</strong> counsel early (PFIC/QEF for US persons).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Funds route */}
          <section id="funds" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Why the CMVM Funds Route Leads</h2>
            <p className="text-[#15364A]">The investment-first route emphasizes governance, custody and productive capital allocation.</p>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>Governance:</strong> CMVM supervision, audited reporting, third-party administration and regulated custody.</li>
              <li><strong>Diversification:</strong> private equity, growth, credit and multi-asset strategies beyond residential real estate.</li>
              <li><strong>Lifecycle fit:</strong> typical 8-10 year fund lives align with residence planning horizons.</li>
            </ul>
            <div className="bg-green-50 p-4 border border-green-200 rounded-md text-green-900 mt-2">
              <strong>US Investor Note (PFIC):</strong> Non-US funds are generally PFICs. Request an annual PFIC Information Statement to enable a QEF election; coordinate with US tax advisors.
            </div>
          </section>

          {/* Process */}
          <section id="process" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Step-by-Step: NIF → Bank → Subscription → AIMA</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[#15364A]">
              <li><strong>Objectives:</strong> define diversification, family and liquidity needs.</li>
              <li><strong>NIF & Banking:</strong> obtain tax numbers; open Portuguese bank accounts.</li>
              <li><strong>Diligence & Subscription:</strong> review PPM/KID; complete KYC/AML; execute documents; wire funds.</li>
              <li><strong>Declaration:</strong> obtain manager/custodian declaration confirming a qualifying investment.</li>
              <li><strong>AIMA Submission:</strong> submit the file; schedule biometrics; receive residence cards.</li>
            </ol>
          </section>

          {/* Risks */}
          <section id="risks" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Risks, PFIC/QEF & Best Practice</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>Regulatory risk:</strong> rules may change; monitor official sources and plan contingencies.</li>
              <li><strong>Fund risk:</strong> strategy, liquidity and valuation risks; diversify; use audited vehicles.</li>
              <li><strong>Tax coordination:</strong> integrate home-country and Portuguese tax; US persons address PFIC/QEF early.</li>
              <li><strong>Documentation:</strong> maintain KYC/AML, proof of funds/source of wealth and clean records.</li>
            </ul>
          </section>

   <CtaSection />

          {/* FAQs */}
          <section id="faq" className="space-y-4 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-[#002741]">Extended FAQs</h2>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">Is the Golden Visa being shut down?</summary>
              <p className="mt-2 text-[#15364A]">No - the debate targets citizenship timelines, not the availability of the Golden Visa. Always verify the rules in force when you file.</p>
            </details>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">If the law changes, will there be transitional rules?</summary>
              <p className="mt-2 text-[#15364A]">Historically, significant changes often include transitional mechanics, especially after constitutional review. Wait for the final text and AIMA guidance.</p>
            </details>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">How much time in Portugal is required?</summary>
              <p className="mt-2 text-[#15364A]">Historically low physical presence; confirm the precise periods at the time you apply and renew.</p>
            </details>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">What’s the first action I should take?</summary>
              <p className="mt-2 text-[#15364A]">Define objectives, engage counsel and begin due diligence on CMVM-regulated funds aligned to your risk profile and timelines.</p>
            </details>
          </section>

          {/* About Explorer */}
          <section id="about-explorer" className="space-y-3 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-[#002741]">About Explorer Investments</h3>
            <p className="text-sm text-[#15364A]">
              Founded in 2003, Explorer Investments is Portugal&apos;s leading independent private equity management company,
              with approximately €1.8B+ under management. Fully regulated by the CMVM.
            </p>
            <div className="text-sm text-[#15364A]">
              <p className="font-semibold">Press/Investor Contact:</p>
              <p>André Bandeira - Investor Relations</p>
              <p>
                Email{' '}
                <a href="mailto:ab@explorerinvestments.com" className="text-[#B4A77E] hover:underline">
                  ab@explorerinvestments.com
                </a>
              </p>
              <p>
                Website{' '}
                <Link href="/" className="text-[#B4A77E] hover:underline">
                  https://goldenvisashub.com/
                </Link>
              </p>
            </div>
          </section>
        </div>
      </section>

      {/* Related articles */}
      <BlogPreviewGridFromXML currentSlug={SLUG} />

      <Footer />
    </>
  );
}
