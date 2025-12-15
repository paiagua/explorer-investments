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
  BarChart,
  FileText,
  CheckCircle,
} from 'lucide-react';

// ===================================================================
// METADATA (SEO)
// ===================================================================
const SLUG = 'portugal-golden-visa-2025-investment-first-guide';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-investment-first.jpg';
const PUBLISHED = '2025-10-31T09:00:00+00:00';
const MODIFIED  = '2025-10-31T09:00:00+00:00';

export const metadata = {
  title:
    'Portugal Golden Visa 2025: Investment‑First Strategy, 5+5 Residence Framework, CMVM‑Regulated Funds & EU Optionality',
  description:
    'A fully updated investor‑first guide to the Portugal Golden Visa in 2025: why the “passport shortcut” era is over, how the program matured, 5+5 residence framework, low‑stay flexibility (~7 days/yr historically), CMVM‑regulated €500k funds, diversification in euros, timelines, risks, FAQs and step‑by‑step process.',
  keywords:
    'Portugal Golden Visa 2025, investment funds route, CMVM regulated funds, EU residency by investment, 5+5 residence framework, Portuguese citizenship timeline, Schengen mobility, minimum stay Portugal 7 days, diversification to euro, PFIC QEF US investors, private equity Portugal, venture Portugal, AIMA timelines, NIF, biometrics Portugal, Golden Visa family reunification',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Portugal Golden Visa 2025: From Shortcut to Strategy - The Investment‑First Guide',
    description:
      'Why the Golden Visa is now about strategic capital allocation, diversification in euros and long‑term optionality. Understand the 5+5 framework, the €500k fund route and how residency follows investment.',
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
        'CMVM Funds',
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
    title: 'Portugal Golden Visa 2025 - Investment‑First, Fund‑Led, Strategy‑Driven',
    description:
      'Comprehensive 2025 guide: program maturity, 5+5 residence structure, CMVM‑regulated funds, timelines, costs, risks, FAQs and process checklist.',
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
  wordCount: '3000',
};

const schemaBreadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://goldenvisashub.com/' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://goldenvisashub.com/golden-visa-portugal-blog' },
    { '@type': 'ListItem', position: 3, name: 'Portugal Golden Visa (Investment‑First)', item: CANONICAL_URL },
  ],
};

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the Portugal Golden Visa still a good option in 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. The program has matured into an investment‑first framework focused on regulated funds and long‑term value, with historically low physical‑stay needs and EU mobility.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the 5 + 5 residence framework?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Five years of Temporary Residence under the Golden Visa, followed by five years of Permanent Residence, typically with no minimum stay requirement for PR holders. Confirm latest rules.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I include my family from day one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Family reunification is commonly available for spouse/partner and dependants according to law, usually from the outset. Counsel will confirm eligibility and documents.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Portugal still count residential real estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Residential real estate is excluded. Popular options include €500k subscriptions into CMVM‑regulated funds, research contributions, cultural patronage and job creation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Portuguese citizenship possible without permanent residence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Portugal has offered a path to nationality by naturalisation without continuous permanent residence, subject to meeting legal requirements, timelines and language level (A2).',
      },
    },
  ],
};

const schemaHowTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to obtain Portugal residency via an investment fund',
  description:
    'Step‑by‑step outline from NIF and banking to fund subscription, declaration issuance and AIMA readiness.',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', name: 'Get NIF', text: 'Obtain a Portuguese tax number (NIF), typically via counsel/representative.' },
    { '@type': 'HowToStep', name: 'Open bank account', text: 'Open a Portuguese bank account for subscription flows.' },
    { '@type': 'HowToStep', name: 'Select regulated fund', text: 'Review PPM/KID, risk factors and strategy; complete KYC/AML.' },
    { '@type': 'HowToStep', name: 'Subscribe (e.g., €500k)', text: 'Execute subscription documents and wire funds.' },
    { '@type': 'HowToStep', name: 'Receive Declaration', text: 'Manager/Custodian issue declaration confirming qualifying investment for AIMA.' },
    { '@type': 'HowToStep', name: 'Biometrics & card', text: 'Proceed with AIMA steps, biometrics and residence card issuance.' },
  ],
};

const schemaItemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Investment‑first approach' },
    { '@type': 'ListItem', position: 2, name: '5+5 residence framework' },
    { '@type': 'ListItem', position: 3, name: 'CMVM‑regulated funds (€500k)' },
    { '@type': 'ListItem', position: 4, name: 'EU diversification (euro)' },
    { '@type': 'ListItem', position: 5, name: 'Family inclusion & flexibility' },
  ],
};

// ===================================================================
// PAGE COMPONENT (Server Component)
// ===================================================================
export default function PortugalGoldenVisaInvestmentFirstPage() {
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
              <ShieldCheck size={16} /> Investor‑First Residency Strategy
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              Portugal Golden Visa 2025: From Shortcut to Strategy - Investment First, Residency Follows
            </h1>
            <p className="text-lg text-[#15364A] font-light text-balance">
              For years the Golden Visa was marketed as “invest now, get an EU passport later.” That era is over. With recent nationality guidance and program
              adjustments, Portugal reframed the Golden Visa as a strategic platform to attract qualified professionals, entrepreneurs and serious investors.
              This guide explains the investment‑first mindset, the 5+5 residence framework and why flexibility, diversification and governance now lead the story.
            </p>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src={OG_IMAGE}
              alt="Lisbon skyline representing strategic EU diversification through the Portugal Golden Visa."
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </figure>

          {/* Section: Investment Comes First */}
          <section id="investment-first" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">The Investment Comes First</h2>
            <p className="text-[#15364A]">
              The Golden Visa should begin with a <strong>capital allocation decision</strong>, not a residency target. Many global investors - especially those
              USD‑concentrated - hold exposure to a single economy, currency and political system. That can be efficient, but it is not diversified.
            </p>
            <p className="text-[#15364A]">
              The right question isn’t “how do I buy a passport?”, but <strong>“how do I diversify into Europe and the euro with credible, regulated exposure?”</strong>
              Portugal provides that bridge through <strong>CMVM‑supervised investment funds</strong> and robust EU oversight. Flexible residency is a perk, not the purpose.
            </p>
          </section>

          {/* Section: Why the law changed */}
          <section id="why-change" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Why the Rules Shifted - And Why It Makes Sense</h2>
            <p className="text-[#15364A]">
              Policy refinements in 2025 emphasise <strong>quality over volume</strong>, prioritising qualified migrants, entrepreneurs and investors. The aim is
              to channel capital and talent into productive activity while protecting the integrity of residency programs.
            </p>
            <p className="text-[#5A6F7B] text-sm">Note: Always confirm the latest official guidance before committing capital.</p>
          </section>

          {/* Section: New 5+5 Framework */}
          <section id="five-plus-five" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">The New Framework: 5 + 5 Years</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>First 5 years:</strong> Temporary Residence via the Golden Visa (historically low stay requirements).</li>
              <li><strong>Next 5 years:</strong> Permanent Residence, typically with no minimum stay requirement for PR holders.</li>
            </ul>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-900">
              <CheckCircle className="inline-block mr-2" /> <strong>Advantages:</strong> family inclusion from day one; after year five, investors may liquidate the qualifying
              investment and maintain Portuguese residency under the PR regime.
            </div>
            <p className="text-[#15364A]">
              Among EU options, Portugal remains distinctive for offering a path to nationality without continuous permanent residence, unlike programs that
              require 7-10 years of physical stay.
            </p>
          </section>

          {/* Section: Portugal’s investment case */}
          <section id="investment-case" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Portugal’s Investment Case</h2>
            <p className="text-[#15364A]">
              Portugal is not a “cheap” hack - it is a <strong>strategic geography</strong>: closest EU point to the U.S. with expanding flights, high English
              proficiency, solid infrastructure, a vibrant tech ecosystem and a stable, moderate political context.
            </p>
          </section>

          {/* Section: From Tactical to Strategic */}
          <section id="strategic" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">From Tactical to Strategic</h2>
            <p className="text-[#15364A]">
              The property‑shortcut mindset is gone. The modern approach is <strong>strategic allocation</strong>: deploy capital intelligently, diversify into the euro,
              secure <strong>flexible residency</strong> and build optionality. If you later choose to relocate for lifestyle, retirement or family, citizenship can follow
              naturally - it no longer needs to be the main driver.
            </p>
          </section>

          {/* Section: Is Portugal right for you? */}
          <section id="fit" className="space-y-3">
            <h2 className="text-2xl font-bold text-[#002D3D]">Is Portugal Right for You?</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li>You want <strong>euro‑denominated diversification</strong> and Western EU stability.</li>
              <li>You value <strong>transparency, governance and rule of law</strong>.</li>
              <li>You prefer a <strong>low‑maintenance residency</strong> - a Plan B you can activate when needed.</li>
              <li>You want a <strong>path to EU nationality</strong> that doesn’t require continuous permanent residence.</li>
              <li>You favour a <strong>secure, strategically located</strong> EU base with long‑term upside.</li>
            </ul>
          </section>

          {/* Section: Eligible routes (focus funds) */}
          <section id="routes" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Routes - With a Focus on Regulated Funds</h2>
            <p className="text-[#15364A]">
              The flagship path is the <strong>funds route</strong> (e.g., €500k subscription) through <strong>CMVM‑regulated vehicles</strong>. It emphasises governance,
              institutional service providers and diversification beyond real estate.
            </p>
            <div className="rounded-lg border p-4 bg-[#F9F9FC]">
              <BarChart className="inline-block mr-2" /> <strong>Alternatives:</strong> research contributions, cultural patronage and job creation. Residential real estate is excluded.
            </div>
          </section>

          {/* Section: Step‑by‑step process */}
          <section id="process" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">Step‑by‑Step: From NIF to Residency Card</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[#15364A]">
              <li><strong>NIF & Banking:</strong> obtain Portuguese tax numbers and open accounts.</li>
              <li><strong>Select Fund:</strong> diligence on strategy, manager and service providers; review PPM/KID; complete KYC/AML.</li>
              <li><strong>Subscribe:</strong> execute documents and wire the qualifying amount (e.g., €500k).</li>
              <li><strong>Declaration:</strong> receive manager/custodian declaration confirming eligibility for AIMA submission.</li>
              <li><strong>Biometrics:</strong> proceed to AIMA steps and residence card issuance.</li>
            </ol>
          </section>

          {/* Section: How we help */}
          <section id="how-we-help" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">How We Help (Investment‑First)</h2>
            <p className="text-[#15364A]">
              We prioritise the <strong>investment</strong>. Our platform curates eligible Golden Visa funds and provides <strong>end‑to‑end education</strong> so you can
              understand every step - from fund selection and risk to residency milestones and long‑term planning. As the market shifts away from short‑termism, we
              focus on quality, transparency and sustainable value.
            </p>
            <CtaSection />
          </section>

          {/* Extended FAQs */}
          <section id="faq" className="space-y-4 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-[#002741]">FAQs</h2>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">Can I include family members from day one?</summary>
              <p className="mt-2 text-[#15364A]">In many cases, yes - spouse/partner and dependants. Your counsel will confirm eligibility and documents.</p>
            </details>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">Is relocation required?</summary>
              <p className="mt-2 text-[#15364A]">No. Historically low physical‑stay needs make the program compatible with globally mobile lifestyles.</p>
            </details>
            <details className="group rounded-md border border-gray-200 p-4">
              <summary className="font-semibold cursor-pointer">What if I want citizenship later?</summary>
              <p className="mt-2 text-[#15364A]">Build eligibility over time under the 5+5 structure and confirm language and legal requirements when you are ready.</p>
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