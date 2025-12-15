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
  GraduationCap,
} from 'lucide-react';

// ===================================================================
// METADATA (SEO)
// ===================================================================
const SLUG = 'portugal-golden-visa-legal-challenges-2025-apply-now-investment-first';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/golden-visa-legal-challenges-2025.jpg';
const PUBLISHED = '2025-10-31T09:00:00+00:00';
const MODIFIED  = '2025-10-31T09:00:00+00:00';

export const metadata = {
  title:
    'Portugal Golden Visa Reform 2025: Legal Challenges, 5+5 Framework, CMVM Funds & Why Eligible Applicants Should Act Now',
  description:
    'A comprehensive 2025 investor guide to Portugal’s Golden Visa amid proposed citizenship timeline changes and legal challenges: what is being discussed, why experts expect litigation, how the 5+5 residence framework works, and why the CMVM‑regulated €500k fund route remains the flagship for investment‑first EU optionality.',
  keywords:
    'Portugal Golden Visa legal challenges 2025, Golden Visa citizenship timeline change, Constitutional Court Portugal Golden Visa, apply now Golden Visa, Portugal Golden Visa 5+5 framework, CMVM regulated funds €500k, AIMA biometrics timeline, Schengen mobility Portugal, EU residency by investment, PFIC QEF US investors, Explorer Investments Andre Bandeira quote, Portuguese nationality law changes 2025',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Portugal Golden Visa 2025: Legal Challenges, 5+5 Residence & Investment‑First Strategy',
    description:
      'Understand the proposals, the legal headwinds, and the investment‑first path via CMVM funds. Deep dive: timelines, process, risks, FAQs and how to prepare now.',
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'Portugal Golden Visa',
        'Residency by Investment',
        'Legal Challenges 2025',
        'Citizenship Timeline',
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
    title: 'Portugal Golden Visa Reform (2025): What’s Changing, What Isn’t, and How to Prepare',
    description:
      'Legal challenges expected; investment‑first strategy remains. See 5+5 structure, CMVM funds, timelines, due diligence and FAQs.',
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
  wordCount: '3600',
};

const schemaBreadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://goldenvisashub.com/' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://goldenvisashub.com/golden-visa-portugal-blog' },
    { '@type': 'ListItem', position: 3, name: 'Golden Visa Legal Challenges (2025)', item: CANONICAL_URL },
  ],
};

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Portugal’s Golden Visa still open in 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. The program remains active with an investment‑first focus. Proposed changes around citizenship timelines have prompted legal debate; applicants should confirm current rules before subscribing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the proposed citizenship timeline change?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Public debate has referenced extending eligibility timelines for certain routes. Any change would follow constitutional review processes before entering into force. Always verify the latest official position.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do core benefits like Schengen mobility and low stay remain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Historically, Golden Visa residents have had Schengen travel rights and low physical presence requirements. Check current guidance for precise conditions and family inclusion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is residential real estate allowed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Residential real estate has been excluded from the qualifying Golden Visa routes. The flagship path is the €500k subscription into CMVM‑regulated investment funds, alongside research, culture and job creation pathways.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should US investors know about PFIC/QEF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Non‑US funds are typically PFICs. Request an annual PFIC Information Statement to consider a QEF election and avoid punitive default tax results. Coordinate with qualified US tax advisors.',
      },
    },
  ],
};

const schemaHowTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to prepare an investment‑first Portugal Golden Visa application',
  description:
    'A step‑by‑step outline from objectives and due diligence to fund subscription, declaration issuance and AIMA scheduling.',
  totalTime: 'P14D',
  step: [
    { '@type': 'HowToStep', name: 'Define objectives', text: 'Diversification goals, family inclusion, liquidity horizon and governance preferences.' },
    { '@type': 'HowToStep', name: 'Engage counsel', text: 'Portuguese immigration counsel for NIF, banking, documentation and AIMA filings.' },
    { '@type': 'HowToStep', name: 'Select CMVM‑regulated fund', text: 'Review PPM/KID, track record, risk factors, service providers and liquidity terms.' },
    { '@type': 'HowToStep', name: 'Subscribe (e.g., €500k)', text: 'Execute subscription documents and wire funds to the custodian.' },
    { '@type': 'HowToStep', name: 'Obtain Declaration', text: 'Manager/Custodian issue declaration confirming a qualifying investment.' },
    { '@type': 'HowToStep', name: 'AIMA scheduling', text: 'Submit file; attend biometrics; receive residence cards.' },
  ],
};

const schemaItemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Legal challenges & constitutional review' },
    { '@type': 'ListItem', position: 2, name: 'Investment‑first positioning' },
    { '@type': 'ListItem', position: 3, name: '5+5 residence framework' },
    { '@type': 'ListItem', position: 4, name: 'CMVM‑regulated €500k funds' },
    { '@type': 'ListItem', position: 5, name: 'Action plan & due diligence' },
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
export default function PortugalGoldenVisaLegalChallenges2025Page() {
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
              <ShieldCheck size={16} /> Legal Update & Investor Strategy
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              Portugal Golden Visa Reform (2025): Legal Challenges, What’s Proposed, What’s Stable - and How to Prepare Now
            </h1>
            <p className="text-lg text-[#15364A] font-light text-balance">
              Proposed nationality timeline changes have triggered constitutional scrutiny and legal commentary. While debate unfolds, the Golden Visa remains an
              investment‑first pathway rooted in CMVM‑regulated funds. This deep dive explains the current landscape, the 5+5 residence framework, what’s stable,
              and a practical action plan for eligible families.
            </p>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src={OG_IMAGE}
              alt="Lisbon law courts and skyline - symbolizing legal challenges and strategic investment for Portugal Golden Visa 2025."
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-2 text-xs sm:text-sm text-white/95 bg-gradient-to-t from-black/60 to-transparent">
              Legal debate continues; investment‑first planning helps investors move decisively.
            </figcaption>
          </figure>

          {/* KPI Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <KeyStat label="Flagship route" value="€500k CMVM fund" />
            <KeyStat label="Residence model" value="5 + 5 years" />
            <KeyStat label="Stay burden" value="Low (historically)" />
            <KeyStat label="Mobility" value="Schengen access" />
          </div>

          {/* Table of Contents */}
          <nav aria-label="On this page" className="border border-gray-200 rounded-lg p-4 bg-[#F9F9FC]">
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#15364A]">
              <li><a href="#background" className="hover:underline">Background & Context</a></li>
              <li><a href="#proposals" className="hover:underline">What’s Being Proposed</a></li>
              <li><a href="#legal-challenges" className="hover:underline">Legal Challenges & Constitutional Review</a></li>
              <li><a href="#what-stable" className="hover:underline">What Appears Stable Right Now</a></li>
              <li><a href="#framework" className="hover:underline">The 5+5 Residence Framework Explained</a></li>
              <li><a href="#who-should-act" className="hover:underline">Who Should Act Now? (Decision Guide)</a></li>
              <li><a href="#fund-route" className="hover:underline">Why the CMVM Fund Route Leads</a></li>
              <li><a href="#process" className="hover:underline">Step‑by‑Step: From NIF to AIMA</a></li>
              <li><a href="#timelines" className="hover:underline">Timelines, Scenarios & Two‑Clock Model</a></li>
              <li><a href="#risks" className="hover:underline">Risks, Governance & Best Practice</a></li>
              <li><a href="#faq" className="hover:underline">Extended FAQs</a></li>
              <li><a href="#glossary" className="hover:underline">Glossary</a></li>
            </ul>
          </nav>

          {/* Background */}
          <section id="background" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Background & Context</h2>
            <p className="text-[#15364A]">
              Portugal’s Golden Visa has matured from a transactional gateway into a strategic investment platform. Market participants now prioritize auditable
              fund governance, institutional service providers, and euro‑denominated diversification. Policy discussions in 2025 have raised questions about
              how citizenship timelines are calculated; however, actual investor priorities remain: capital preservation, risk‑adjusted return and optionality.
            </p>
          </section>

          {/* Proposals */}
          <section id="proposals" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">What’s Being Proposed</h2>
            <div className="rounded-lg border p-4 bg-white">
              <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
                <li>Public debate around <strong>longer citizenship timelines</strong> connected to certain residence categories.</li>
                <li>Potential sequencing: parliamentary approval → presidential review → possible constitutional referral → promulgation and transitional rules.</li>
                <li>Implementation would likely include <strong>transition mechanics</strong> and clarifications by the migration authority (AIMA).</li>
              </ul>
              <p className="text-sm text-[#5A6F7B] mt-2">Important: this section reflects the policy debate context. Always verify the status in force at your application date.</p>
            </div>
          </section>

          {/* Legal challenges */}
          <section id="legal-challenges" className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF] shadow-sm">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><Scale /> Legal Challenges & Constitutional Review</h2>
            <p className="text-[#15364A]">Legal practitioners expect robust review on proportionality, legitimate expectations and transitional protections.</p>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>Constitutional checks:</strong> presidential assessment and possible referral to the Constitutional Court.</li>
              <li><strong>Transitional law:</strong> treatment of applicants in‑flight; protection of acquired rights; clarity for renewals.</li>
              <li><strong>Administrative practice:</strong> AIMA guidance on processing priority, biometrics and card issuance during change periods.</li>
            </ul>
            <Quote>
              “Policy may evolve, but investment quality is within your control. We help investors move early, with governance first.” - <strong>André Bandeira</strong>, Explorer Investments
            </Quote>
          </section>

          {/* What appears stable */}
          <section id="what-stable" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">What Appears Stable Right Now</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>Investment‑first program:</strong> funds, research, culture and job creation remain the pillars.</li>
              <li><strong>Residential real estate excluded</strong> from Golden Visa qualifying routes.</li>
              <li><strong>Historically low physical presence</strong> compatible with globally mobile families.</li>
              <li><strong>Schengen mobility</strong> as a key practical benefit for residents.</li>
            </ul>
          </section>

          {/* Framework 5+5 */}
          <section id="framework" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">The 5 + 5 Residence Framework</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>First five years:</strong> Temporary Residence via Golden Visa; historically low stay requirement.</li>
              <li><strong>Next five years:</strong> Permanent Residence (PR), typically without a minimum stay requirement for PR holders.</li>
              <li><strong>Family inclusion:</strong> commonly from day one (spouse/partner; dependants per law).</li>
              <li><strong>Optional post‑year‑5 exit:</strong> many investors may liquidate their qualifying investment and maintain residency under PR.</li>
            </ul>
          </section>

          {/* Who should act */}
          <section id="who-should-act" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Who Should Act Now? (Decision Guide)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg border p-4 bg-white">
                <h3 className="font-semibold mb-2 flex items-center gap-2"><CheckCircle className="text-green-700"/> Likely to proceed now</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-[#15364A]">
                  <li>Families seeking EU optionality with <strong>low stay burden</strong>.</li>
                  <li>USD‑concentrated portfolios seeking <strong>euro diversification</strong>.</li>
                  <li>Investors prioritizing <strong>governance, custody and audited funds</strong>.</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 bg-white">
                <h3 className="font-semibold mb-2 flex items-center gap-2"><AlertTriangle className="text-amber-600"/> Consider waiting/clarifying</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-[#15364A]">
                  <li>If your objective is <strong>immediate citizenship</strong> versus investment and residency.</li>
                  <li>If timelines conflict with personal liquidity or relocation plans.</li>
                  <li>If your tax posture needs additional cross‑border coordination.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Fund route */}
          <section id="fund-route" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Why the CMVM Fund Route Leads</h2>
            <p className="text-[#15364A]">The professional path emphasizes <strong>audited vehicles</strong>, institutional service providers and <strong>regulated custody</strong>.</p>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>Governance:</strong> CMVM supervision; PPM/KID disclosure; third‑party administration and audit.</li>
              <li><strong>Diversification:</strong> private equity, growth, credit and multi‑asset strategies beyond residential real estate.</li>
              <li><strong>Lifecycle fit:</strong> 8-10 year fund timelines align with the 5+5 residence model.</li>
            </ul>
            <div className="bg-green-50 p-4 border border-green-200 rounded-md text-green-900 mt-2">
              <strong>US Investor Note (PFIC):</strong> Non‑US funds are typically PFICs. Request an annual PFIC Information Statement to consider a QEF election.
            </div>
          </section>

          {/* Process */}
          <section id="process" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Step‑by‑Step: From NIF to AIMA</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[#15364A]">
              <li><strong>Objectives:</strong> define diversification, family, liquidity and governance needs.</li>
              <li><strong>NIF & Banking:</strong> obtain NIF; open Portuguese bank accounts.</li>
              <li><strong>Diligence & Subscription:</strong> review PPM/KID, sign, complete KYC/AML; wire qualifying funds.</li>
              <li><strong>Declaration:</strong> obtain manager/custodian declaration confirming the qualifying investment.</li>
              <li><strong>AIMA Submission:</strong> counsel prepares file; schedule biometrics; receive residence cards.</li>
            </ol>
          </section>

          {/* Timelines */}
          <section id="timelines" className="space-y-4 bg-[#F9F9FC] p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-[#002D3D]">Timelines, Scenarios & The Two‑Clock Model</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>Investment clock:</strong> begins at subscription; managers often target 8-10 years.</li>
              <li><strong>Residency clock:</strong> five‑year calculation runs from issuance of the first residence card (post‑biometrics).</li>
              <li><strong>Scenario planning:</strong> allow buffer for administrative scheduling and potential policy transitions.</li>
            </ul>
          </section>

          {/* Risks */}
          <section id="risks" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Risks, Governance & Best Practice</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>Regulatory risk:</strong> rules may change; monitor official sources; plan contingencies.</li>
              <li><strong>Fund risk:</strong> strategy, liquidity and valuation risks; diversify; seek audited reporting.</li>
              <li><strong>Tax coordination:</strong> home‑country and Portuguese advice; PFIC/QEF for US persons.</li>
              <li><strong>Documentation:</strong> maintain KYC/AML, proof of funds and source‑of‑wealth records.</li>
            </ul>
          </section>

 
            <CtaSection />
     

          {/* FAQs */}
          <section id="faq" className="space-y-4 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-[#002741]">Extended FAQs</h2>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">Is Portugal’s Golden Visa still open?</summary>
              <p className="mt-2 text-[#15364A]">Yes. Confirm current rules at your application date; legal processes may affect timelines but the investment‑first program remains.</p>
            </details>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">Will the citizenship timeline definitely change?</summary>
              <p className="mt-2 text-[#15364A]">Any change would pass through legislative and constitutional steps. Applicants should rely on the rules in force when they file.</p>
            </details>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">What about residential real estate?</summary>
              <p className="mt-2 text-[#15364A]">Residential real estate is excluded from the Golden Visa. Consider funds, research, culture or job creation routes.</p>
            </details>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">How much time do I need in Portugal?</summary>
              <p className="mt-2 text-[#15364A]">Historically low physical‑presence averages; confirm the precise periods with counsel.</p>
            </details>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">What’s the first action step?</summary>
              <p className="mt-2 text-[#15364A]">Define objectives, engage counsel, and begin due diligence on CMVM‑regulated funds aligned to your risk and timeline.</p>
            </details>
          </section>

          {/* Glossary */}
          <section id="glossary" className="space-y-2 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-[#002741]">Glossary</h2>
            <p className="text-[#15364A]"><strong>AIMA:</strong> Portugal’s migration authority responsible for residency processing.</p>
            <p className="text-[#15364A]"><strong>CMVM:</strong> Portuguese Securities Market Commission regulating investment funds/managers.</p>
            <p className="text-[#15364A]"><strong>NIF:</strong> Portuguese tax identification number required for banking/investments.</p>
            <p className="text-[#15364A]"><strong>PFIC/QEF:</strong> US tax regime and election for non‑US funds; consult advisors.</p>
            <p className="text-[#15364A]"><strong>PPM/KID:</strong> Fund disclosure documents outlining strategy, fees and risks.</p>
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
