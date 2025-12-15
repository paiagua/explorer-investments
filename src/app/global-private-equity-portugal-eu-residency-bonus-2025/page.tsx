// Global Private Equity + EU Residency Bonus (Portugal)
// Ultra SEO Article Component

import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';

import { TrendingUp, Globe, BarChart, ShieldCheck, Building2 } from 'lucide-react';

export const revalidate = 600;
export const fetchCache = 'force-cache';

// ==========================================
// METADATA
// ==========================================
const SLUG = 'global-private-equity-portugal-eu-residency-bonus-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/portugal-private-equity-eu-residency.jpg';
const PUBLISHED = '2025-11-19T09:00:00+00:00';

export const metadata = {
  title:
    'Why Global Investors Are Moving Into Portuguese Private Equity (with an EU Residency Bonus) - 2025',
  description:
    'Global investors from the US, UAE, India, Hong Kong and Singapore are reallocating capital into Portuguese private equity. Strong yields, Europe entry, and a regulatory-safe environment — plus the bonus option of EU residency via regulated funds.',
  openGraph: {
    title:
      'Global Investors Shift Into Portuguese Private Equity (and Gain an EU Residency Bonus)',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

// Helper
const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#002741] bg-[#FFFCF3] py-3 px-4 rounded-md my-6 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

export default function GlobalPEPortugalResidency() {
  return (
    <>
      {/* JSON-LD */}
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: metadata.title,
            datePublished: PUBLISHED,
            image: OG_IMAGE,
            url: CANONICAL_URL,
            author: { "@type": "Organization", name: "Explorer Investments" },
          }),
        }}
      />

      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* Title */}
          <header>
            <div className="text-xs uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <TrendingUp size={16} /> Global Private Equity Trends 2025
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Why Global Investors Are Moving Into Portuguese Private Equity — and Receiving an EU Residency Bonus
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3">
              Private equity allocations to Portugal surged in 2025. Investors from the US, UAE, India, Hong Kong and Singapore are taking advantage of Europe’s most undervalued market — while also gaining the optional benefit of EU residency through CMVM-regulated funds.
            </p>
            <p className="text-xs text-[#5A6F7B] mt-2">Explorer Investments • Global Insights 2025</p>
          </header>

          {/* Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image src={OG_IMAGE} alt="Portuguese private equity and EU residency fund route" fill className="object-cover" />
          </figure>

          {/* Intro */}
          <p className="text-[#15364A] leading-relaxed text-lg">
            As global capital rotates out of overheated markets in the US and Middle East, Portugal has become a strategic allocation for sophisticated investors seeking:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>European exposure at undervalued entry levels</li>
            <li>Strong mid-market private equity returns</li>
            <li>Stable regulatory environment (CMVM)</li>
            <li>Diversification away from US equity concentration</li>
            <li>Optional EU residency through eligible funds</li>
          </ul>

          <Quote>
            Portugal is the only EU market where investors can access private equity, growth, and buyout funds — and simultaneously qualify for a long-term residency pathway. It is a “dual-benefit” model unmatched globally.
          </Quote>

          {/* Internal SEO Links */}
          <p className="text-sm text-[#0A4F3C]">
            Related articles:&nbsp;
            <Link href="/portugal-private-equity-explorer-v-fund-us-investors-2025" className="underline">Explorer V Private Equity Fund</Link>,&nbsp;
            <Link href="/portugal-golden-visa-funds-2025" className="underline">Golden Visa Funds</Link>,&nbsp;
            <Link href="/global-fund-investment-eu-residency-bonus-2025" className="underline">EU Residency Bonus</Link>,&nbsp;
            <Link href="/portugal-citizenship-law-2025-constitutional-review-golden-visa" className="underline">Citizenship Law Updates</Link>
          </p>

          {/* Section */}
          <h2 className="text-2xl font-bold flex items-center gap-2 mt-12">
            <BarChart /> Why Portugal’s Private Equity Market Is Booming
          </h2>

          <p>
            Portugal combines all ingredients of a high-performing private equity ecosystem:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Low leverage in target companies</li>
            <li>High export orientation</li>
            <li>Strong cash-generating mid-market businesses</li>
            <li>Attractive buyout multiples compared to Spain, France and Germany</li>
            <li>Accelerated digital and operational transformation opportunities</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 flex items-center gap-2">
            <ShieldCheck /> The EU Residency Bonus (Optional)
          </h2>

          <p>
            Investors subscribing a minimum of €500,000 in a CMVM-regulated fund may also qualify for the Portuguese Golden Visa residency program.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>30+ countries of visa-free movement (Schengen)</li>
            <li>7 days a year stay requirement</li>
            <li>Independent residency cards for family</li>
            <li>Path to EU long-term residency after 5 years</li>
          </ul>

          <Quote>
            Private equity is the engine. Residency is the bonus. Not the other way around.
          </Quote>

          <CtaSection />

          <p className="mt-10 text-lg">
            Global investors are not looking for “immigration.”  
            They are looking for:
            <strong> diversification, yield, risk control, and optionality.</strong>  
            Portugal offers all four — uniquely bundled with an EU residency pathway.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}
