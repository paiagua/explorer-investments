import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
 
// revalida o HTML a cada 10 min (ajusta)
export const revalidate = 600;
// força cache para todos os fetch de Server Components desta rota
export const fetchCache = 'force-cache';

import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';
import {
  ShieldCheck,
  AlertTriangle,
  BarChart,
  Briefcase,
  Rocket,
  Gift,
  FileText,
  UserCheck,
} from 'lucide-react';

// ===================================================================
// METADATA (SEO)
// ===================================================================
const SLUG = 'uk-immigration-non-dom-vs-portugal-golden-visa-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/uk-policy-vs-portugal-golden-visa.jpg';
const PUBLISHED = '2025-10-28T09:00:00+00:00';
const MODIFIED  = '2025-10-28T09:00:00+00:00';

export const metadata = {
  title:
    'UK Immigration & Non‑Dom Overhaul vs Portugal Golden Visa (2025): Detailed Guide for HNW Families, Advisers & Tax Counsel',
  description:
    'Comprehensive 2025 analysis: UK investor route closed, longer settlement proposals and the end of non‑dom vs Portugal’s Golden Visa. Compare FIG-style relief, stay requirements (~7 days/yr), €500k CMVM‑regulated fund route, Schengen mobility, five‑year naturalisation pathway, PFIC/QEF for US investors, fees, timelines, risks, FAQs, and step‑by‑step process.',
  keywords:
    'UK immigration changes 2025, UK non dom abolished 2025, foreign income and gains regime FIG, earned settlement UK 10 years, Tier 1 Investor closed, Innovator Founder visa, Global Talent visa, UK settlement timeline, UK vs EU residency by investment, Portugal Golden Visa 2025 fund route, CMVM regulated funds, AIMA processing times, Portugal citizenship five years, Schengen mobility, minimum stay Portugal 7 days, D2 visa Portugal, D7 visa Portugal, Portuguese NIF, PFIC QEF statement, US investors Portugal fund, private equity Portugal, multi asset funds Portugal, cultural patronage visa Portugal, research contribution visa Portugal, job creation Portugal, HNWI relocation Europe, wealth preservation Europe, jurisdictional diversification',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: '2025 Guide: UK Policy Whiplash vs Portugal’s Golden Visa - Risks, Routes, Timelines & PFIC (Deep Dive)',
    description:
      'Why HNW families are reevaluating the UK vs EU residence options. Detailed comparison of immigration, tax framing, and Portugal’s €500k fund route with practical steps and FAQs.',
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'UK Immigration Policy',
        'Non‑Dom Abolition',
        'FIG Model',
        'Portugal Golden Visa',
        'Residency by Investment',
        'Schengen Mobility',
        'Citizenship by Naturalisation',
        'AIMA Portugal',
        'PFIC QEF',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title: 'UK vs Portugal (2025): Golden Visa Deep Dive for HNW Investors',
    description:
      'Full comparison of UK policy shifts vs Portugal’s fund‑based Golden Visa: timelines, costs, PFIC/QEF, and process checklists.',
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: CANONICAL_URL,
  },
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
  wordCount: '2500',
};

const schemaBreadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://goldenvisashub.com/' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://goldenvisashub.com/golden-visa-portugal-blog' },
    { '@type': 'ListItem', position: 3, name: 'UK vs Portugal (Golden Visa)', item: CANONICAL_URL },
  ],
};

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What changed in the UK for HNW investors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The investor route was closed, settlement commitments have been discussed at longer timelines, and the non‑dom tax regime was abolished in favour of a shorter foreign income and gains style relief-raising uncertainty for long‑term planning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why compare the UK with Portugal’s Golden Visa in 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Portugal provides EU residency with minimal stay (~7 days/year), Schengen mobility, a five‑year path to long‑term status and potential citizenship, and routes that invest into regulated funds rather than donations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Portuguese Golden Visa still include residential real estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Residential real estate is excluded. Common routes include €500k subscriptions in CMVM‑regulated investment funds, research contributions, cultural patronage and job creation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long to citizenship and what are the language requirements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Eligibility for Portuguese citizenship by naturalisation can be reached after five years of legal residency. Applicants typically demonstrate basic Portuguese (A2) along with other legal requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should US investors know about PFIC reporting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Foreign funds are generally PFICs. Request an annual PFIC Information Statement to enable a QEF election and avoid punitive default taxation. Engage qualified US tax advisors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is residential relocation required for the Golden Visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No. The Golden Visa is designed for low physical presence, enabling globally mobile families to maintain their base while meeting minimal stay averages.',
      },
    },
  ],
};

const schemaHowTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to obtain Portugal residency via the €500k fund route',
  description:
    'Step‑by‑step outline from NIF and bank account to fund subscription, declaration issuance and AIMA file readiness.',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', name: 'Get NIF', text: 'Obtain a Portuguese tax number (NIF), typically via lawyer/representative.' },
    { '@type': 'HowToStep', name: 'Open bank account', text: 'Open a Portuguese bank account for subscription flows.' },
    { '@type': 'HowToStep', name: 'Select CMVM‑regulated fund', text: 'Review PPM/KID, risk factors and strategy; complete KYC/AML.' },
    { '@type': 'HowToStep', name: 'Subscribe €500k', text: 'Execute subscription documents and wire funds.' },
    { '@type': 'HowToStep', name: 'Receive Declaração', text: 'Manager/Custodian issue declaration confirming investment for AIMA submission.' },
    { '@type': 'HowToStep', name: 'Book biometrics', text: 'Proceed to AIMA steps, biometrics and residence card issuance.' },
  ],
};

const schemaItemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'UK immigration overhaul' },
    { '@type': 'ListItem', position: 2, name: 'Non‑dom abolition / FIG' },
    { '@type': 'ListItem', position: 3, name: 'Portugal Golden Visa fund route' },
    { '@type': 'ListItem', position: 4, name: 'PFIC/QEF for US investors' },
    { '@type': 'ListItem', position: 5, name: 'Five‑year path to citizenship' },
  ],
};

// Helper (quote)
const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#0f2c3a] bg-[#FFFCF3] py-3 px-4 rounded-md my-6 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

// Helper (key stat)
const KeyStat = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-xl border border-gray-200 px-4 py-3 bg-white shadow-sm">
    <div className="text-xs uppercase tracking-wide text-[#5A6F7B]">{label}</div>
    <div className="text-2xl font-extrabold text-[#002741]">{value}</div>
  </div>
);

// ===================================================================
// PAGE COMPONENT (Server Component)
// ===================================================================
export default function UKvsPortugalGoldenVisaArticlePage() {
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
              <ShieldCheck size={16} /> Global Mobility & Tax Strategy
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              UK Non‑Dom & Immigration Overhaul vs Portugal’s Golden Visa: The 2025 Deep Dive for HNW Investors
            </h1>
            <p className="text-lg text-[#15364A] font-light text-balance">
              The UK’s policy whiplash has increased friction and uncertainty for internationally mobile families. This guide breaks down key changes, compares
              residency and tax framing with Portugal’s Golden Visa, and details the €500k fund route with timelines, cost ranges, risk factors and a step‑by‑step checklist.
            </p>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src={OG_IMAGE}
              alt="London policy uncertainty vs Lisbon residency stability - UK policy changes compared to Portugal Golden Visa."
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-2 text-xs sm:text-sm text-white/95 bg-gradient-to-t from-black/60 to-transparent">
              Where rules tighten, optionality matters: EU residency via a regulated Portuguese fund.
            </figcaption>
          </figure>

          {/* KPI Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <KeyStat label="Stay requirement" value="~7 days/yr" />
            <KeyStat label="Golden Visa route" value="€500k fund" />
            <KeyStat label="Citizenship path" value="~5 years" />
            <KeyStat label="Schengen access" value="Yes" />
          </div>

          {/* Table of Contents */}
          <nav aria-label="On this page" className="border border-gray-200 rounded-lg p-4 bg-[#F9F9FC]">
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#15364A]">
              <li><a href="#uk-overview" className="hover:underline">UK Overview: Investor Route, Settlement Horizon & Tax Framing</a></li>
              <li><a href="#advisor-implications" className="hover:underline">Implications for HNW Families & Advisers</a></li>
              <li><a href="#portugal-benefits" className="hover:underline">Portugal Golden Visa: Core Benefits & Who It Suits</a></li>
              <li><a href="#routes" className="hover:underline">Eligible Routes in Portugal (Funds, Research, Culture, Jobs)</a></li>
              <li><a href="#fund-route" className="hover:underline">€500k Fund Route: Asset vs Donation + PFIC Note</a></li>
              <li><a href="#timeline" className="hover:underline">Timeline Scenarios & Two‑Clock Framework</a></li>
              <li><a href="#costs" className="hover:underline">Cost & Fee Ranges (Gov, Legal, Bank, Manager)</a></li>
              <li><a href="#process" className="hover:underline">Step‑by‑Step Process: From NIF to AIMA</a></li>
              <li><a href="#risks" className="hover:underline">Key Risks, Compliance & Best Practices</a></li>
              <li><a href="#comparison" className="hover:underline">Comparison: UK vs Portugal vs UAE/Singapore (Snapshot)</a></li>
              <li><a href="#faq" className="hover:underline">Extended FAQs (Real Estate, Stay, Language, PFIC)</a></li>
              <li><a href="#glossary" className="hover:underline">Glossary (AIMA, CMVM, PFIC, QEF, NIF)</a></li>
            </ul>
          </nav>

          {/* UK Overview */}
          <section id="uk-overview" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">UK Overview: Investor Route Closed, Longer Settlement Horizons & Non‑Dom Abolished</h2>
            <p className="text-[#15364A]">
              The straightforward investor immigration path was removed and alternative routes emphasise endorsements and professional recognition.
              In parallel, the non‑dom framework ended and discussions of shorter newcomer relief windows have tightened long‑term tax planning options.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>Investor Route:</strong> No direct residency-by-investment track; focus shifted to innovation, talent and sponsorship categories.</li>
              <li><strong>Settlement Horizon:</strong> Proposals and practice trends have implied longer timeframes and more conditions before long‑term status.</li>
              <li><strong>Tax Framing:</strong> Non‑dom abolition with shorter relief windows reduces predictability for wealth structuring.</li>
            </ul>
            <Quote>
              “For globally mobile families, predictability matters as much as rates. Abrupt changes raise the cost of planning and the value of diversification.”
            </Quote>
          </section>

          {/* Adviser Implications */}
          <section id="advisor-implications" className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF] shadow-sm">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <AlertTriangle className="text-red-600" /> Implications for HNW Families & Advisers
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>Complexity Cost:</strong> Multiple assessment frameworks, English thresholds and endorsements add friction and timelines.</li>
              <li><strong>Planning Risk:</strong> Shorter relief windows create artificial horizons that may misalign with family or liquidity cycles.</li>
              <li><strong>Portfolio Design:</strong> Jurisdictional diversification becomes a core pillar-residency optionality is a risk‑management tool.</li>
            </ul>
            <p className="text-xs text-[#5A6F7B]">This section is informational only and not legal/tax advice. Validate specifics with qualified counsel.</p>
          </section>

          {/* Portugal Benefits */}
          <section id="portugal-benefits" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Portugal Golden Visa: Core Benefits & Who It Suits</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>Minimal Presence:</strong> Typically ~7 days/year on average to maintain status.</li>
              <li><strong>Schengen Mobility:</strong> Travel flexibility across the 26‑country Schengen Area.</li>
              <li><strong>Five‑Year Track:</strong> Potential Portuguese citizenship after five years of residency, subject to eligibility (incl. A2 Portuguese).</li>
              <li><strong>Productive Investment:</strong> Regulated funds, research, cultural patronage and job creation options.</li>
              <li><strong>Family Coverage:</strong> Spouse/partner and dependants may be included according to the law.</li>
            </ul>
          </section>

          {/* Routes */}
          <section id="routes" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Eligible Routes in Portugal</h2>
            <div className="space-y-2 text-[#15364A]">
              <p><strong>Investment Funds (€500k):</strong> Subscriptions to CMVM‑regulated vehicles (private equity, multi‑asset, credit, etc.).</p>
              <p><strong>Research & Innovation:</strong> Contributions to certified R&D institutions and projects.</p>
              <p><strong>Cultural Patronage:</strong> Approved cultural heritage or arts projects.</p>
              <p><strong>Job Creation:</strong> Business formation with employment thresholds under applicable rules.</p>
              <p className="text-sm text-[#5A6F7B]">Residential real estate is excluded under current Golden Visa rules.</p>
            </div>
          </section>

          {/* Fund Route */}
          <section id="fund-route" className="space-y-6 pt-6 border-t border-gray-200">
            <h2 className="text-3xl font-bold flex items-center gap-2 text-[#002741]">
              <BarChart className="w-8 h-8 text-[#B4A77E]" /> €500k Fund Route: Asset vs Donation + PFIC Note
            </h2>
            <ul className="list-none pl-2 space-y-6 mt-2">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0"><Briefcase className="w-10 h-10 text-[#B4A77E]" /></div>
                <div>
                  <h3 className="text-xl font-semibold text-[#002741]">Private Equity / Multi‑Asset Funds</h3>
                  <p className="text-[#15364A] mt-1">Align an 8-10 year fund lifecycle with the five‑year residency pathway while keeping capital productive.</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-[#15364A]">
                    <li><strong>Diversification:</strong> Exposure to operating companies and strategies beyond real estate.</li>
                    <li><strong>Lifecycle Fit:</strong> Avoids early exits and reinvestment gaps during the residency journey.</li>
                    <li><strong>Capital Preservation Aim:</strong> Seek to return principal plus gains rather than incur a certain cost.</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0"><Rocket className="w-10 h-10 text-[#B4A77E]" /></div>
                <div>
                  <h3 className="text-xl font-semibold text-[#002741]">Venture Capital</h3>
                  <p className="text-[#15364A] mt-1">Potentially higher volatility; exit timing may not match residency clocks-be prepared for follow‑on allocations.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0"><Gift className="w-10 h-10 text-[#B4A77E]" /></div>
                <div>
                  <h3 className="text-xl font-semibold text-[#002741]">Donations & Contributions</h3>
                  <p className="text-[#15364A] mt-1">Create impact, but constitute a sunk cost versus the potential to preserve and grow capital in funds.</p>
                </div>
              </li>
            </ul>
            <div className="bg-green-50 p-4 border border-green-200 rounded-md text-green-900 mt-2">
              <strong>US Investor Note (PFIC):</strong> Foreign funds are typically PFICs for US tax. Request an annual PFIC Information Statement to enable a QEF election and mitigate punitive default tax outcomes.
            </div>
          </section>

          {/* Timeline & Two Clocks */}
          <section id="timeline" className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF] shadow-sm">
            <h2 className="text-xl font-bold flex items-center gap-2 text-[#002741]">
              <FileText className="w-6 h-6 text-[#B4A77E]" /> Timeline Scenarios & The Two‑Clock Framework
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>Investment clock:</strong> Starts at subscription; fund life commonly 8-10 years.</li>
              <li><strong>Residency/Citizenship clock:</strong> Five‑year count starts from issuance of your first residency card (post‑biometrics).</li>
              <li><strong>Processing Reality:</strong> Administrative timelines affect when the five‑year period begins; they do not reduce the requirement once the clock starts.</li>
            </ul>
          </section>

          {/* Costs */}
          <section id="costs" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Cost & Fee Ranges (Indicative)</h2>
            <div className="text-[#15364A] space-y-2">
              <p><strong>Government & Cards:</strong> Application fees and card issuances vary by family size and stage.</p>
              <p><strong>Legal:</strong> Engagements commonly include NIF, banking, investment support and AIMA filing.</p>
              <p><strong>Banking:</strong> Account opening, compliance and transfer fees may apply.</p>
              <p><strong>Fund:</strong> Subscription amount (€500k) with manager fees per fund terms (management/performance expenses disclosed in PPM/KID).</p>
              <p className="text-sm text-[#5A6F7B]">Always review official schedules and fund documentation for current amounts and disclosures.</p>
            </div>
          </section>

          {/* Process (HowTo mirror) */}
          <section id="process" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Step‑by‑Step: From NIF to AIMA (7‑Day Sprint)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[#15364A]">
              <li><strong>Days 1-2:</strong> NIF issuance and bank account opening via counsel.</li>
              <li><strong>Days 3-5:</strong> Review PPM/KID, sign subscription, complete KYC/AML.</li>
              <li><strong>Days 6-7:</strong> Receive the <em>Declaração</em> (Custodian & Manager). File becomes AIMA‑ready; proceed to biometrics scheduling.</li>
            </ol>
          </section>

          {/* Risks & Compliance */}
          <section id="risks" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Key Risks, Compliance & Best Practices</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>Regulatory Risk:</strong> Immigration rules can change; monitor official sources and plan contingencies.</li>
              <li><strong>Fund Risk:</strong> Strategy, liquidity and valuation risks as disclosed in PPM/KID; diversify and conduct due diligence.</li>
              <li><strong>Tax Coordination:</strong> Coordinate home‑country and Portuguese tax advice; US persons address PFIC/QEF early.</li>
              <li><strong>Documentation:</strong> Maintain robust KYC/AML, proof of funds and clean source of wealth documentation.</li>
            </ul>
          </section>

          {/* Snapshot Comparison */}
          <section id="comparison" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Snapshot: UK vs Portugal vs UAE/Singapore</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-[#F9F9FC]">
                  <tr>
                    <th className="p-3">Factor</th>
                    <th className="p-3">UK</th>
                    <th className="p-3">Portugal (Golden Visa)</th>
                    <th className="p-3">UAE / Singapore (high level)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Direct investor route</td>
                    <td className="p-3">Closed; alternative routes require endorsements/conditions</td>
                    <td className="p-3">€500k fund, research, culture, jobs (no residential real estate)</td>
                    <td className="p-3">Long‑term visas with distinct criteria; separate tax systems</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Stay requirement</td>
                    <td className="p-3">Varies by route</td>
                    <td className="p-3">~7 days/year average</td>
                    <td className="p-3">Varies by visa class</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Citizenship path</td>
                    <td className="p-3">Longer horizons & conditions</td>
                    <td className="p-3">Possible after ~5 years of residency (with requirements)</td>
                    <td className="p-3">Citizenship rules vary; often stringent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Quote */}
          <Quote>
            “Capital seeks clarity. With shifting UK rules, globally mobile families are prioritising EU optionality through Portugal’s fund route.”
          </Quote>

          {/* CTA */}
          <CtaSection />

          {/* Extended FAQs */}
          <section id="faq" className="space-y-4 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-[#002741]">Extended FAQs</h2>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">Does Portugal allow residential real estate for Golden Visa?</summary>
              <p className="mt-2 text-[#15364A]">Residential real estate is excluded. Consider funds, research, culture or job creation routes.</p>
            </details>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">Minimum stay to maintain status?</summary>
              <p className="mt-2 text-[#15364A]">Typically ~7 days/year on average. Confirm precise periods with counsel as rules and practices evolve.</p>
            </details>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">How long to citizenship?</summary>
              <p className="mt-2 text-[#15364A]">Eligibility after ~5 years of legal residency, meeting requirements including A2 Portuguese.</p>
            </details>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">What does AIMA do?</summary>
              <p className="mt-2 text-[#15364A]">AIMA is the Portuguese migration authority handling residency processes post‑investment (including biometrics and cards).</p>
            </details>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">PFIC/QEF for US investors?</summary>
              <p className="mt-2 text-[#15364A]">Foreign funds are PFICs. Obtain the annual PFIC Information Statement to enable a QEF election and proper IRS reporting.</p>
            </details>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">Is relocation required?</summary>
              <p className="mt-2 text-[#15364A]">No; the program is designed for low physical presence. Families can maintain their primary base elsewhere.</p>
            </details>
          </section>

          {/* Glossary */}
          <section id="glossary" className="space-y-2 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-[#002741]">Glossary</h2>
            <p className="text-[#15364A]"><strong>AIMA:</strong> Portugal’s migration authority responsible for residency processing.</p>
            <p className="text-[#15364A]"><strong>CMVM:</strong> Portuguese Securities Market Commission regulating investment funds/managers.</p>
            <p className="text-[#15364A]"><strong>NIF:</strong> Portuguese tax identification number required for banking and investments.</p>
            <p className="text-[#15364A]"><strong>PFIC:</strong> Passive Foreign Investment Company (US tax term for many non‑US funds).</p>
            <p className="text-[#15364A]"><strong>QEF:</strong> Qualified Electing Fund election enabling specific US tax reporting on PFICs.</p>
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
        </div>
      </section>

      {/* Related articles */}
      <BlogPreviewGridFromXML currentSlug={SLUG} />

      <Footer />
    </>
  );
}
