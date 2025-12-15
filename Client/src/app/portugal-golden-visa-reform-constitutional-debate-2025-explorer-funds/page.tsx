import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';

// revalidate HTML every 10 min (adjust)
export const revalidate = 600;
// force cache for all Server Component fetches on this route
export const fetchCache = 'force-cache';

import {
  ShieldCheck,
  AlertTriangle,
  BarChart,
  FileText,
  BookText,
} from 'lucide-react';

// ===================================================================
// METADATA (SEO)
// ===================================================================
const SLUG = 'portugal-golden-visa-reform-constitutional-debate-2025-explorer-funds';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/golden-visa-reform-2025.jpg';
const PUBLISHED = '2025-10-28T09:00:00+00:00';
const MODIFIED  = '2025-10-28T09:00:00+00:00';

export const metadata = {
  title:
    'Portugal Golden Visa Reform: Legal & Constitutional Debate - What It Means for Fund Investors (2025)',
  description:
    "Proposed changes to nationality rules have sparked legal and constitutional debate. Here is what does (and doesn't) change for the €500k CMVM‑regulated fund route, timelines, risks, and how to act strategically in 2025 - with quotes from André Bandeira (Explorer Investments).",
  keywords:
    'Portugal Golden Visa 2025, nationality reform proposal, constitutional review Portugal, Explorer Investments Golden Visa fund, €500k CMVM funds, AIMA timelines, Schengen mobility, 7 days per year, Portuguese citizenship, retroactivity debate',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Golden Visa Reform (2025): Constitutional debate & impact on fund investors',
    description:
      'Understand the citizenship reform debate and its impact on the fund-based Golden Visa. Timelines, risks, FAQs and practical guidance - with quotes from André Bandeira (Explorer Investments).',
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'Portugal Golden Visa',
        'Citizenship Portugal',
        'AIMA',
        'CMVM',
        'Reform 2025',
        'Residency by Investment',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title: 'Golden Visa Reform (2025): what changes? - Quotes from André Bandeira (Explorer)',
    description:
      'Practical guide to the nationality reform debate and the €500k CMVM fund route. Timings, risks and recommendations.',
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: CANONICAL_URL,
  },
};

// ===================================================================
// JSON-LD SCHEMAS (Article + Breadcrumbs + FAQ + HowTo)
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
  wordCount: '1900',
};

const schemaBreadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://goldenvisashub.com/' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://goldenvisashub.com/golden-visa-portugal-blog' },
    { '@type': 'ListItem', position: 3, name: 'Golden Visa Reform (2025)', item: CANONICAL_URL },
  ],
};

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Has the fund-based Golden Visa route changed with the reform proposals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "No. The proposals focus on nationality (citizenship) rules. As of publication, the €500k CMVM‑regulated fund route remains available without an increase in minimum investment.",
      },
    },
    {
      '@type': 'Question',
      name: 'What citizenship residence period has been discussed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'An extension to 10 years in general (7 for CPLP nationals) has been discussed. The text is subject to criticism, revisions and constitutional scrutiny before any possible entry into force.',
      },
    },
    {
      '@type': 'Question',
      name: 'Did the minimum physical presence for the Golden Visa change?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No. The reduced presence requirement typically remains ~7 days/year on average to maintain resident status.',
      },
    },
  ],
};

const schemaHowTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to obtain Portuguese residency via the €500k fund route',
  description: 'Practical path from NIF to Manager/Custodian Declaration and AIMA submission.',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', name: 'NIF', text: 'Obtain a Portuguese tax number (NIF) with counsel.' },
    { '@type': 'HowToStep', name: 'Bank account', text: 'Open a Portuguese account for subscription flows.' },
    { '@type': 'HowToStep', name: 'Select CMVM fund', text: 'Review PPM/KID, risk, strategy; complete KYC/AML.' },
    { '@type': 'HowToStep', name: 'Subscribe €500k', text: 'Execute subscription and wire funds.' },
    { '@type': 'HowToStep', name: 'Declaration', text: 'Obtain Manager/Custodian declaration for AIMA file.' },
    { '@type': 'HowToStep', name: 'Biometrics & Cards', text: 'Schedule biometrics and await card issuance.' },
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
export default function GoldenVisaReformExplorerArticlePage() {
  return (
    <>
      {/* JSON-LD */}
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <Script id="ld-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <Script id="ld-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHowTo) }} />

      <Header />

      {/* Main Content */}
      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Header */}
          <header className="text-left">
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <ShieldCheck size={16} /> Golden Visa via CMVM Funds
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              Portugal’s Golden Visa Reform Spurs Legal & Constitutional Debate on Citizenship Rules
            </h1>
            <p className="text-lg text-[#15364A] font-light text-balance">
              Proposed changes to the Nationality Law reignited discussion around citizenship timelines and family rights. While the legislative and constitutional process plays out, the fund route (€500k) remains operational with no increase in the minimum amount. This guide explains what is on the table and how to position your application - with quotes from <strong>André Bandeira</strong> (Explorer Investments).
            </p>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src={OG_IMAGE}
              alt="Constitutional debate in Portugal and the impact on the fund-based Golden Visa."
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-2 text-xs sm:text-sm text-white/95 bg-gradient-to-t from-black/60 to-transparent">
              Citizenship reform proposals vs. the relative stability of the CMVM‑regulated fund route.
            </figcaption>
          </figure>

          {/* KPI Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <KeyStat label="Minimum (funds)" value="€500k" />
            <KeyStat label="Avg. presence" value="~7 days/year" />
            <KeyStat label="Mobility" value="Schengen" />
            <KeyStat label="Citizenship track" value="Under debate" />
          </div>

          {/* What is being proposed */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">What’s being proposed</h2>
            <p className="text-[#15364A]">
              Government proposals discuss extending the residence period required for naturalisation (from 5 to 10 years in general, and 7 for CPLP nationals) together with denser integration requirements. The text faces technical criticism and may be subject to prior or subsequent constitutional review by the President of the Republic and the Constitutional Court before any promulgation.
            </p>
            <Quote>
              <span className="font-semibold">André Bandeira (Explorer Investments):</span> “Investors want predictability. The legal component is under scrutiny, but the fund-based Golden Visa route remains open - and that’s where we recommend focusing: impeccable documentation, careful selection of CMVM‑regulated funds, and a tight AIMA filing calendar.”
            </Quote>
          </section>

          {/* Legal & constitutional debate */}
          <section className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF] shadow-sm">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <AlertTriangle className="text-red-600" /> Legal & constitutional debate
            </h2>
            <p className="text-[#15364A]">
              Practitioners anticipate challenges around potential retroactive application of citizenship rules and constitutional limits that protect family rights and legitimate expectations. Recent attempts to restrict family reunification were checked on constitutional grounds, prompting legislative adjustments.
            </p>
            <p className="text-xs text-[#5A6F7B]">This is informational only; not legal or tax advice.</p>
          </section>

          {/* What hasn’t changed */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">What has not changed in the fund route</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li>Fund investment supervised by the CMVM from <strong>€500,000</strong>.</li>
              <li>Low physical presence (~7 days/year average) to maintain status.</li>
              <li>Schengen mobility for residents.</li>
              <li>Eligibility to include qualifying family members under current rules.</li>
            </ul>
            <Quote>
              <span className="font-semibold">André Bandeira:</span> “Practically speaking, starting now strengthens your position. A fund subscription is an <em>asset</em>, not a sunk cost - and it can be aligned with the 8-10 year life of many vehicles.”
            </Quote>
          </section>

          {/* Fund route specifics */}
          <section className="space-y-6 pt-6 border-t border-gray-200">
            <h2 className="text-3xl font-bold flex items-center gap-2 text-[#002741]">
              <BarChart className="w-8 h-8 text-[#B4A77E]" /> Fund Route: selection, timing and documentation
            </h2>
            <div className="space-y-3 text-[#15364A]">
              <p>
                Subscriptions into CMVM‑supervised funds allow diversification beyond residential real estate (excluded from the GV). Review PPM/KID, risk policy, governance and audit trail. Ensure prompt issuance of the <em>Declaração</em> (Manager & Custodian) for your AIMA file.
              </p>
              <p className="bg-green-50 p-4 border border-green-200 rounded-md text-green-900">
                <strong>US investor note (PFIC):</strong> Non‑US funds are typically PFICs. Request an annual PFIC Information Statement to enable a QEF election and avoid punitive default taxation.
              </p>
              <Quote>
                <span className="font-semibold">André Bandeira:</span> “At Explorer, we prioritise aligning the fund life with the investor’s ‘clock’. Fee transparency, pipeline and governance matter as much as returns.”
              </Quote>
            </div>
          </section>

          {/* Two clocks */}
          <section className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF] shadow-sm">
            <h2 className="text-xl font-bold flex items-center gap-2 text-[#002741]">
              <FileText className="w-6 h-6 text-[#B4A77E]" /> Two clocks: investment vs. residence/citizenship
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>Investment:</strong> starts at subscription; many funds have an 8-10 year life.</li>
              <li><strong>Residence/citizenship:</strong> the legal count begins with your first residence card (post‑biometrics). Legislative changes may affect future eligibility criteria.</li>
              <li><strong>Administrative reality:</strong> AIMA timelines influence when the count begins; they do not reduce the statutory requirement once the clock starts.</li>
            </ul>
          </section>

          {/* Concrete actions now */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Concrete actions now</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[#15364A]">
              <li>Organise <strong>KYC/AML</strong>, source‑of‑funds evidence and personal documents.</li>
              <li>Obtain <strong>NIF</strong> and open a Portuguese bank account.</li>
              <li>Select a <strong>CMVM fund</strong> with due diligence (strategy, fees, governance, audit).</li>
              <li>Execute subscription and request the Manager/Custodian <em>Declaração</em>.</li>
              <li>Prepare the <strong>AIMA</strong> submission and biometrics scheduling.</li>
            </ol>
            <Quote>
              <span className="font-semibold">André Bandeira:</span> “The best defence against regulatory uncertainty is disciplined execution. When you’re document‑ready, you decide based on facts - not market anxiety.”
            </Quote>
          </section>

          {/* Portugal in context */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#002D3D]">Portugal in international context</h2>
            <p className="text-[#15364A]">
              The Portuguese passport continues to rank highly in mobility indices. For globally mobile families, Portugal combines quality of life, institutional stability and EU access.
            </p>
          </section>

          {/* FAQ */}
          <section className="space-y-4 pt-6 border-t border-gray-200" id="faq">
            <h2 className="text-2xl font-bold text-[#002741]">FAQs</h2>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">Are the proposals already law?</summary>
              <p className="mt-2 text-[#15364A]">No. They are under discussion/review and subject to constitutional scrutiny and promulgation before any entry into force.</p>
            </details>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">If I already have five years of legal residence, should I apply for citizenship now?</summary>
              <p className="mt-2 text-[#15364A]">If you meet the requirements, many advisers suggest moving ahead. Seek specialised legal advice for your specific case.</p>
            </details>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">Does residential real estate qualify?</summary>
              <p className="mt-2 text-[#15364A]">Not for the Golden Visa. The fund, research, culture and job‑creation routes remain.</p>
            </details>
          </section>

          {/* Editorial notes */}
          <section className="space-y-2 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-[#002741] flex items-center gap-2"><BookText className="w-5 h-5" /> Editorial notes</h3>
            <p className="text-sm text-[#5A6F7B]">
              This article reflects the state of the legislative debate at publication time and may be updated. Consult official sources and your legal adviser before making decisions.
            </p>
          </section>

          {/* About Explorer */}
          <section id="about-explorer" className="space-y-3 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-[#002741]">About Explorer Investments</h3>
            <p className="text-sm text-[#15364A]">
              Founded in 2003, Explorer Investments is Portugal’s leading independent private equity manager with over €1.8B in assets under management, fully supervised by the CMVM.
            </p>
            <div className="text-sm text-[#15364A]">
              <p className="font-semibold">Press/Investor Contact:</p>
              <p>André Bandeira - Investor Relations</p>
              <p>
                Email:{' '}
                <a href="mailto:ab@explorerinvestments.com" className="text-[#B4A77E] hover:underline">
                  ab@explorerinvestments.com
                </a>
              </p>
              <p>
                Website:{' '}
                <Link href="/" className="text-[#B4A77E] hover:underline">
                  https://goldenvisashub.com/
                </Link>
              </p>
            </div>
          </section>

          {/* CTA */}
          <CtaSection />
        </div>
      </section>

      <Footer />
    </>
  );
}
