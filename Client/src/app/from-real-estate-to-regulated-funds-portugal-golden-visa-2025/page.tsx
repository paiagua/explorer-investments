import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';
import { Layers, ShieldCheck, BarChart, CheckCircle2, BookCheck, AlertTriangle, Link2, Timer, Globe2 } from 'lucide-react';

// ===================================================================
// METADATA (SEO)
// ===================================================================
const SLUG = 'from-real-estate-to-regulated-funds-portugal-golden-visa-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/from-real-estate-to-regulated-funds.jpg';
const PUBLISHED = '2025-11-12T09:00:00+00:00';
const MODIFIED  = '2025-11-12T09:00:00+00:00';

export const metadata = {
  title: 'From Real Estate to Regulated Funds: The New Golden Visa Playbook (Portugal 2025)',
  description:
    'Portugal ended the property route — here is how CMVM-regulated funds became the compliant, diversified path for Golden Visa residency. Due diligence checklist, timelines, pitfalls to avoid and how to compare fund options.',
  keywords:
    'Portugal Golden Visa funds, CMVM regulated funds, private equity Portugal, venture capital Portugal, EU residency by investment 2025, due diligence Golden Visa, fund pitfalls, Explorer Investments, citizenship timeline Portugal',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large',
  openGraph: {
    title: 'From Real Estate to Regulated Funds — Portugal’s Golden Visa (2025)',
    description:
      'The property era is over. Learn how regulated funds work, what to check before investing and how they fit a 5-year residency-to-citizenship plan.',
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'Golden Visa Funds',
        'CMVM Regulation',
        'Portugal Residency',
        'Due Diligence',
        'EU Citizenship Timeline',
        'Investment Compliance'
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title: 'From Real Estate to Regulated Funds — The 2025 Golden Visa Playbook',
    description:
      'Compliant, diversified and transparent: how CMVM-regulated funds replaced property for Portugal’s Golden Visa.',
    images: [OG_IMAGE],
  },
  alternates: { canonical: CANONICAL_URL },
};

// ===================================================================
// SCHEMA DATA (Article + FAQ)
// ===================================================================
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  mainEntityOfPage: CANONICAL_URL,
  headline: 'From Real Estate to Regulated Funds: The New Golden Visa Playbook (Portugal 2025)',
  description:
    'Portugal ended the property route — here is how CMVM-regulated funds became the compliant, diversified path for Golden Visa residency. Due diligence checklist, timelines, pitfalls to avoid and how to compare fund options.',
  image: [OG_IMAGE],
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: { '@type': 'Organization', name: 'Explorer Investments' },
  publisher: {
    '@type': 'Organization',
    name: 'Explorer Investments',
    logo: { '@type': 'ImageObject', url: 'https://goldenvisashub.com/logo.png' },
  },
};

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are real estate purchases still eligible for Portugal’s Golden Visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No. The classic property route ended. Today, compliant pathways include investments through CMVM-regulated funds and specific productive or cultural options. Always verify current rules before applying.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a CMVM-regulated fund?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A Portuguese investment vehicle supervised by CMVM (the national securities regulator). These funds follow audited reporting, custody, governance, liquidity and disclosure rules designed to protect investors.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long from investment to citizenship?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Most families plan for ~5 years to Permanent Residency and then evaluate citizenship eligibility. Presence requirements and timing can change—confirm at the moment of application with qualified counsel.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I diligence a Golden Visa fund?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Match mandate and duration to your goals, review the team’s track record, auditor independence, fee structure, valuation policies, liquidity mechanics and risk controls. Compare like-for-like using a written checklist.',
      },
    },
  ],
};

// ===================================================================
// PAGE COMPONENT
// ===================================================================
export default function GoldenVisaFundsPlaybookPage() {
  return (
    <>
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <Header />

      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Header */}
          <header className="text-left">
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <Layers size={16} /> Golden Visa • Regulated Funds • Due Diligence
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              From Real Estate to Regulated Funds: The New Golden Visa Playbook (Portugal 2025)
            </h1>
            <p className="text-lg text-[#15364A] font-light text-balance">
              The property era ended. In its place, a rule-based approach under CMVM supervision now anchors the Golden Visa route.
              Here’s how regulated funds work, how to diligence them, and how they fit a 5-year residency-to-citizenship plan.
            </p>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src={OG_IMAGE}
              alt="Shift from property to CMVM-regulated funds for Portugal Golden Visa, illustrated with compliance and governance visuals"
              fill
              priority
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-2 text-xs sm:text-sm text-white/95 bg-gradient-to-t from-black/60 to-transparent">
              The fund route: regulated, diversified, and built for transparent reporting.
            </figcaption>
          </figure>

          {/* On-page nav */}
          <nav aria-label="On this page" className="border border-gray-200 rounded-lg p-4 bg-[#F9F9FC]">
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#15364A]">
              <li><a href="#shift" className="hover:underline">Why the shift from property happened</a></li>
              <li><a href="#cmvm" className="hover:underline">What “CMVM-regulated” means in practice</a></li>
              <li><a href="#compare" className="hover:underline">Funds vs. property: pros & cons</a></li>
              <li><a href="#diligence" className="hover:underline">Due diligence checklist</a></li>
              <li><a href="#timeline" className="hover:underline">Residency & citizenship timelines</a></li>
              <li><a href="#pitfalls" className="hover:underline">Common pitfalls & red flags</a></li>
              <li><a href="#links" className="hover:underline">Guides & next steps</a></li>
            </ul>
          </nav>

          {/* 1. Why shift */}
          <section id="shift" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><Globe2 className="text-[#B4A77E]" /> Why the property route ended</h2>
            <p>
              Portugal aligned its residency framework with long-term policy goals, redirecting capital from passive property buying into
              productive vehicles that finance real projects. The result: <strong>CMVM-regulated funds</strong> became the primary, compliant path.
              For investors, that means documented governance, audited reporting and clear mandates instead of fragmented property management.
            </p>
          </section>

          {/* 2. CMVM meaning */}
          <section id="cmvm" className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF]">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><ShieldCheck className="text-[#B4A77E]" /> What “CMVM-regulated” means</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>Supervision:</strong> Funds operate under Portugal’s securities regulator (CMVM) with rule-based oversight.</li>
              <li><strong>Governance:</strong> Independent depositary/custodian, board controls and formal valuation policies.</li>
              <li><strong>Transparency:</strong> Audited financials and scheduled reporting, so you can track mandate execution.</li>
              <li><strong>Risk controls:</strong> Diversification rules, liquidity mechanics and conflict-of-interest policies.</li>
            </ul>
          </section>

          {/* 3. Compare funds vs property */}
          <section id="compare" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><BarChart className="text-[#B4A77E]" /> Funds vs. Property (2025)</h2>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">Dimension</th>
                    <th className="p-3 text-left">Regulated Funds</th>
                    <th className="p-3 text-left">Property (legacy)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t"><td className="p-3 font-medium">Eligibility</td><td className="p-3">Current GV path</td><td className="p-3">Ended</td></tr>
                  <tr className="border-t"><td className="p-3 font-medium">Oversight</td><td className="p-3">CMVM supervision, audited</td><td className="p-3">None beyond notary/deeds</td></tr>
                  <tr className="border-t"><td className="p-3 font-medium">Diversification</td><td className="p-3">Multi-asset/sector</td><td className="p-3">Concentrated (single unit)</td></tr>
                  <tr className="border-t"><td className="p-3 font-medium">Administration</td><td className="p-3">Professional manager</td><td className="p-3">DIY landlord/agents</td></tr>
                  <tr className="border-t"><td className="p-3 font-medium">Reporting</td><td className="p-3">Periodic, standardized</td><td className="p-3">Ad-hoc</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Due diligence */}
          <section id="diligence" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><BookCheck className="text-[#B4A77E]" /> Due diligence checklist</h2>
            <ul className="list-none space-y-2 text-[#15364A]">
              <li className="flex gap-2"><CheckCircle2 className="mt-[2px] text-[#B4A77E]" /> Match the fund’s <strong>mandate & duration</strong> to your family plan.</li>
              <li className="flex gap-2"><CheckCircle2 className="mt-[2px] text-[#B4A77E]" /> Confirm <strong>auditor independence</strong> and <strong>valuation policy</strong>.</li>
              <li className="flex gap-2"><CheckCircle2 className="mt-[2px] text-[#B4A77E]" /> Review <strong>fees, liquidity windows</strong> and exit mechanics in writing.</li>
              <li className="flex gap-2"><CheckCircle2 className="mt-[2px] text-[#B4A77E]" /> Assess <strong>team track record</strong> through different cycles.</li>
              <li className="flex gap-2"><CheckCircle2 className="mt-[2px] text-[#B4A77E]" /> Ensure <strong>custody/depositary</strong> and <strong>risk controls</strong> align with best practice.</li>
            </ul>
            <div className="text-sm bg-[#F9F9FC] border rounded-lg p-4">
              Prefer a guided path? Read our primer:&nbsp;
              <Link href="/secure-steps-portugal-golden-visa-funds-explorer-investments" className="underline font-semibold">
                Secure Steps: CMVM-Regulated Golden Visa Funds
              </Link>
              .
            </div>
          </section>

          {/* 5. Timeline */}
          <section id="timeline" className="space-y-4 bg-[#F9F9FC] p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><Timer className="text-[#B4A77E]" /> Residency & citizenship timelines (at a glance)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[#15364A]">
              <li>Invest via a qualifying regulated fund and submit your application.</li>
              <li>Plan for low average presence (often ~7 days/year; verify at application).</li>
              <li>Reassess at ~5 years for Permanent Residency; evaluate citizenship eligibility thereafter.</li>
            </ol>
            <p className="text-xs text-[#5A6F7B]">
              Rules can change. Cross-check presence requirements and naturalisation criteria before you commit.
              For a broader context, see:&nbsp;
              <Link href="/portuguese-citizenship-legacy-passport-eu-mobility-2025" className="underline">
                Portuguese Citizenship: Legacy & EU Mobility
              </Link>.
            </p>
          </section>

          {/* 6. Pitfalls */}
          <section id="pitfalls" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><AlertTriangle className="text-[#B4A77E]" /> Common pitfalls & red flags</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li>Non-standard fee disclosures or unclear incentive structure.</li>
              <li>Vague mandate; no evidence of risk budgeting or liquidity planning.</li>
              <li>Infrequent reporting or opaque valuation methodology.</li>
              <li>Unproven team without independent references or audited history.</li>
            </ul>
            <p className="text-sm">
              Dive deeper: <Link href="/golden-visa-fund-pitfalls-red-flags-2026" className="underline font-semibold">Golden Visa Fund Pitfalls & Red Flags (Investor Guide)</Link>
            </p>
          </section>

          {/* 7. Cross-links & next steps */}
          <section id="links" className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF]">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><Link2 className="text-[#B4A77E]" /> Recommended guides & comparisons</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><Link href="/portugal-golden-visa-2025-investment-first-guide" className="underline">Portugal Golden Visa 2025 — Investment-First Guide</Link></li>
              <li><Link href="/portugal-citizenship-law-2025-investor-action-guide" className="underline">Citizenship Law 2025 — Investor Action Guide</Link></li>
              <li><Link href="/portugal-golden-visa-statistics-2012-2023-historical-top10" className="underline">Golden Visa Statistics (2012-2023)</Link></li>
            </ul>
          </section>

          {/* CTA */}
          <CtaSection />

          {/* Related posts */}
          <BlogPreviewGridFromXML currentSlug={SLUG} />
        </div>
      </section>

      <Footer />
    </>
  );
}
