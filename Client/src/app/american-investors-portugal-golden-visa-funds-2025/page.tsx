import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';

import { Globe, Landmark, TrendingUp, ShieldCheck, ArrowRight, Building, BarChart, Star, AlertTriangle } from 'lucide-react';

// ===================================================================
// METADATA (SEO)
// ===================================================================

const SLUG = 'american-investors-portugal-golden-visa-funds-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-funds-americans-2025.jpg';
const PUBLISHED = '2025-11-12T09:00:00+00:00';
const MODIFIED  = '2025-11-12T09:00:00+00:00';

export const metadata = {
  title:
    'Why American Investors Are Switching From Greece and Spain to Portugal’s Regulated Golden Visa Funds (2025 Outlook)',
  description:
    'With Greece and Spain restricting real estate Golden Visa programs, American investors are shifting toward Portugal’s regulated CMVM investment funds. Explore why U.S. families see Portugal as Europe’s safest residency-by-investment strategy for 2025.',
  keywords:
    'Portugal Golden Visa funds, CMVM funds, American investors Portugal, Greece Golden Visa 2025, Spain Golden Visa 2025, Portugal residency by investment, best Golden Visa for US citizens, Portugal investment fund residency, EU citizenship by investment Portugal, Portugal private equity funds, Golden Visa comparison Europe',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large',
  openGraph: {
    title:
      'Why Americans Are Choosing Portugal’s CMVM-Regulated Funds Over Greece and Spain (2025 Analysis)',
    description:
      'Real estate shutdowns in Greece and Spain pushed U.S. investors toward Portugal’s regulated investment fund Golden Visa. Discover the safest EU residency path for 2025.',
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'Portugal Golden Visa',
        'CMVM Funds',
        'American Investors',
        'Greece Golden Visa',
        'Spain Golden Visa',
        'Residency by Investment',
        'EU Citizenship',
        'Private Equity Funds Portugal'
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title:
      'Why Americans Are Choosing Portugal’s CMVM-Regulated Funds Over Greece & Spain (2025 Analysis)',
    description:
      'Regulated funds, political stability, and low-risk residency pathways make Portugal the top Golden Visa choice for U.S. investors.',
    images: [OG_IMAGE],
  },
  alternates: { canonical: CANONICAL_URL },
};

// ===================================================================
// SCHEMA
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
};

// ===================================================================
// PAGE COMPONENT
// ===================================================================

export default function AmericanInvestorsPortugalFunds2025() {
  return (
    <>
      <Script
        id="ld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <Header />

      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* HEADER */}
          <header className="text-left">
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <Globe size={16} /> Global Residency & Investment Analysis
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              Why American Investors Are Abandoning Greece & Spain for Portugal’s CMVM-Regulated Golden Visa Funds (2025 Outlook)
            </h1>

            <p className="text-lg text-[#15364A] font-light">
              With real estate restrictions tightening across Europe, U.S. investors seeking stability, transparency, and long-term EU mobility are increasingly choosing Portugal. In 2025, CMVM-regulated investment funds became the most trusted Golden Visa route — especially for American high-net-worth families navigating geopolitical uncertainty, inflation, and the need for multijurisdictional diversification.
            </p>
          </header>

          {/* HEADER IMAGE */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src={OG_IMAGE}
              alt="American investors comparing Portugal, Greece, and Spain Golden Visa investment routes in 2025."
              fill
              priority
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-2 text-xs sm:text-sm text-white bg-gradient-to-t from-black/50">
              Why Portugal’s regulated investment funds became the safest EU residency option for U.S. families in 2025.
            </figcaption>
          </figure>

          {/* TABLE OF CONTENTS */}
          <nav className="border border-gray-200 rounded-lg p-4 bg-[#F9F9FC]" aria-label="On this page">
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#15364A]">
              <li><a href="#market-shifts" className="hover:underline">Market Shifts: Greece & Spain Tighten Real Estate</a></li>
              <li><a href="#data-2025" className="hover:underline">2025 Golden Visa Data: Where Applications Are Falling</a></li>
              <li><a href="#why-portugal" className="hover:underline">Why Portugal Became the Safe Haven for U.S. Investors</a></li>
              <li><a href="#funds" className="hover:underline">Understanding Portugal’s CMVM-Regulated Funds</a></li>
              <li><a href="#comparison" className="hover:underline">Comparison: Portugal vs Greece vs Spain</a></li>
              <li><a href="#pathways" className="hover:underline">Residency Pathways for Americans in 2025</a></li>
              <li><a href="#conclusion" className="hover:underline">Final Outlook: The 2026 EU Investment Landscape</a></li>
            </ul>
          </nav>

          {/* SECTION 1 */}
          <section id="market-shifts" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <AlertTriangle className="text-[#B4A77E]" /> Greece & Spain Push Investors Away by Restricting Real Estate
            </h2>

            <p>
              Greece and Spain entered 2025 with aggressive real estate restrictions aimed at cooling overheated housing markets. Greece raised investment thresholds up to <strong>€800,000 in Athens</strong> and introduced strict zoning limitations — causing applications to collapse by more than <strong>52.5%</strong>.
            </p>

            <p>
              Spain followed a similar path, tightening its property pathways and signalling potential elimination of real estate options entirely by 2026. These reforms, while politically popular, created uncertainty for foreign investors — especially Americans seeking predictable residency timelines and stable real-asset exposure.
            </p>
          </section>

          {/* SECTION 2 — DATA */}
          <section id="data-2025" className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF]">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <BarChart className="text-[#B4A77E]" /> The 2025 Numbers: Applications Collapse in Greece
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>822 → 392 applications</strong> YoY in September (-52.5%)</li>
              <li><strong>607 → 1 approvals</strong> YoY for the same month</li>
              <li>Renewals dropped <strong>75%</strong></li>
              <li>Backlog reaches a record <strong>13,499 applications</strong></li>
              <li><strong>80% concentrated in Attica</strong>, worsening the housing crisis</li>
            </ul>

            <p>
              This collapse provides a clear signal to the global investment community: Greece’s real estate-based residency model is no longer stable or predictable.
            </p>
          </section>

          {/* SECTION 3 — WHY PORTUGAL */}
          <section id="why-portugal" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShieldCheck className="text-[#B4A77E]" /> Why Portugal Became the Safe Haven for U.S. Investors
            </h2>

            <p>
              Portugal’s pivot away from real estate in 2023 created a more transparent and regulated investment environment. Unlike Greece and Spain, Portugal didn’t kill the program — it professionalized it.
            </p>

            <p>
              The result: U.S. investors now represent one of the <strong>fastest-growing Golden Visa applicant groups</strong>.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Stable legislation</strong> (no sudden real estate bans)</li>
              <li><strong>Regulated financial products</strong> overseen by the CMVM</li>
              <li><strong>Diversified sectors</strong>: tech, healthcare, renewable energy, industrials</li>
              <li><strong>No “overheating” accusations</strong> since real estate was removed</li>
              <li><strong>Clear 5-year citizenship pathway</strong></li>
              <li><strong>Low stay requirement</strong>: 7 days/year</li>
            </ul>

            <p>
              For wealth managers in New York, Miami, and Los Angeles, Portugal’s Golden Visa now resembles a <strong>low-risk private equity diversification tool</strong> rather than a real estate bet.
            </p>
          </section>

          {/* SECTION 4 — FUNDS */}
          <section id="funds" className="space-y-4 bg-[#F9F9FC] p-6 border border-gray-200 rounded-lg">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Building className="text-[#B4A77E]" /> Understanding Portugal’s CMVM-Regulated Funds
            </h2>

            <p>
              Golden Visa-eligible Portuguese funds are regulated under CMVM — Portugal’s equivalent of the U.S. SEC. This level of oversight is unique among European Golden Visa programs and is one of the key reasons U.S. investors view Portugal as the safest residency strategy.
            </p>

            <h3 className="text-xl font-semibold">Types of Eligible Funds</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Private equity and venture capital funds</li>
              <li>Infrastructure and industrial development funds</li>
              <li>Renewable energy and sustainability funds</li>
              <li>Healthcare and biotech funds</li>
            </ul>

            <h3 className="text-xl font-semibold">Why Americans Prefer Funds</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>SEC-like regulatory framework</li>
              <li>No property management risk</li>
              <li>More exit liquidity</li>
              <li>Professional asset management</li>
              <li>Preferred by tax and estate planning advisors</li>
            </ul>

            <p>
              Portugal also allows citizenship without language fluency at the time of the Golden Visa — another advantage over Greece.
            </p>
          </section>

          {/* SECTION 5 — COMPARISON */}
          <section id="comparison" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="text-[#B4A77E]" /> Portugal vs Greece vs Spain (2025 Comparison)
            </h2>

            <table className="w-full text-left border border-gray-300 text-sm">
              <thead className="bg-gray-100 text-[#002741]">
                <tr>
                  <th className="p-2 border">Program</th>
                  <th className="p-2 border">Real Estate</th>
                  <th className="p-2 border">Funds Option</th>
                  <th className="p-2 border">Stability 2025</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border font-semibold">Portugal</td>
                  <td className="p-2 border">❌ Removed</td>
                  <td className="p-2 border">✔ CMVM-regulated</td>
                  <td className="p-2 border">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="p-2 border font-semibold">Greece</td>
                  <td className="p-2 border">⚠ Very restricted</td>
                  <td className="p-2 border">Limited</td>
                  <td className="p-2 border">⭐⭐</td>
                </tr>
                <tr>
                  <td className="p-2 border font-semibold">Spain</td>
                  <td className="p-2 border">⚠ Under political pressure</td>
                  <td className="p-2 border">Unclear</td>
                  <td className="p-2 border">⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* SECTION 6 — PATHWAYS */}
          <section id="pathways" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Landmark className="text-[#B4A77E]" /> Residency Options for Americans in 2025
            </h2>

            <p>
              Portugal offers three pathways ideal for Americans:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Golden Visa Funds Route</strong>  
                Perfect for investors wanting minimal stay requirements and a regulated structure.
              </li>
              <li>
                <strong>D7 Passive Income Visa</strong>  
                Ideal for retirees and remote-income individuals.  
                👉 <Link href="/portugal-d7-visa-guide-2025" className="text-[#B4A77E] underline">Read the full D7 Guide</Link>
              </li>
              <li>
                <strong>D2 Entrepreneur Visa</strong>  
                Suitable for business owners establishing operations in the EU.
              </li>
            </ul>

            <p>
              All pathways allow citizenship in <strong>5 years</strong>.
            </p>
          </section>

          {/* SECTION 7 — CONCLUSION */}
          <section id="conclusion" className="space-y-4 bg-[#F9F9FC] p-6 border border-gray-200 rounded-lg">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Star className="text-[#B4A77E]" /> Final Outlook for 2026
            </h2>

            <p>
              With Greece and Spain restricting real estate, and political uncertainty rising across Europe, Portugal is now viewed as the <strong>most stable, transparent, and structured Golden Visa program in the EU</strong>.
            </p>

            <p>
              For American families, regulated CMVM funds provide the exact combination they seek:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Capital protection</li>
              <li>Regulatory oversight</li>
              <li>Predictable citizenship</li>
              <li>Low residency obligation</li>
              <li>USD-to-EUR diversification</li>
            </ul>

            <p>
              As the global mobility landscape evolves, Portugal remains the only EU residency option offering security without political volatility — a true “safe asset” for U.S. investors.
            </p>
          </section>

          <CtaSection />
      
        </div>
      </section>
    <BlogPreviewGridFromXML currentSlug={SLUG} />
      <Footer />
    </>
  );
}
