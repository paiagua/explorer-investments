// UAE Golden Visa vs Portugal — SEO Article Component
// Fully Optimized for SEO + Internal Linking + JSON-LD

import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';

import { Globe, TrendingUp, Building2, ArrowRight, ShieldCheck } from 'lucide-react';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';

export const revalidate = 600;
export const fetchCache = 'force-cache';

// =====================================================
// METADATA
// =====================================================
const SLUG = 'uae-golden-visa-vs-portugal-why-investors-choose-portugal';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/uae-vs-portugal-golden-visa.jpg';
const PUBLISHED = '2025-11-18T09:00:00+00:00';

export const metadata = {
  title:
    'UAE Golden Visa vs Portugal Golden Visa (2025): Which Is Better for Investors?',
  description:
    'The UAE launched a new Golden Visa category in 2025 — but how does it compare to Portugal’s Golden Visa? Compare mobility, costs, tax benefits, stay requirements, and investment routes.',
  openGraph: {
    title:
      'UAE Golden Visa vs Portugal Golden Visa (2025): Complete Investor Comparison',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

// Helper component
const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#002741] bg-[#FFFCF3] py-3 px-4 rounded-md my-6 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

export default function UAEvsPortugalGoldenVisa() {
  return (
    <>
      {/* JSON-LD */}
      <Script
        id="ld-article"
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
              <TrendingUp size={16} /> Global Mobility & Golden Visas
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              UAE Golden Visa vs Portugal Golden Visa (2025): Why Global Investors Are Pivoting to Portugal
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3">
              The UAE has launched a new Golden Visa category — but when comparing mobility, lifestyle, taxation and long-term residency, Portugal continues to offer one of the most competitive Golden Visa frameworks worldwide.
            </p>
            <p className="text-xs text-[#5A6F7B] mt-2">
              Explorer Global Mobility Insights • Updated 2025
            </p>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image src={OG_IMAGE} alt="UAE vs Portugal Golden Visa comparison" fill className="object-cover" />
          </figure>

          {/* Intro */}
          <p className="text-[#15364A] text-lg leading-relaxed">
            With Dubai strengthening its position as a global wealth hub, the UAE Golden Visa remains a popular option.  
            However, for investors seeking <strong>EU access, diversified investments, low residency obligations and long-term security</strong>, the Portugal Golden Visa still provides unmatched advantages.
          </p>

          {/* Internal SEO Cross-links */}
          <p className="text-sm text-[#0A4F3C]">
            🔎 Related Guides:&nbsp;
            <Link href="/portugal-citizenship-law-2025-constitutional-review-golden-visa" className="underline text-[#0A4F3C]">Portugal Citizenship Law Changes</Link>,&nbsp;
            <Link href="/global-fund-investment-eu-residency-bonus-2025" className="underline text-[#0A4F3C]">Golden Visa Investment Funds</Link>,&nbsp;
            <Link href="/5-trending-retirement-golden-visa-destinations-americans-2025" className="underline text-[#0A4F3C]">Top Destinations for Americans in 2025</Link>
          </p>

          {/* Section */}
          <h2 className="text-2xl font-bold flex items-center gap-2 mt-10">
            <Globe /> UAE Golden Visa 2025: What’s New?
          </h2>
          <p>
            The UAE added a new Golden Visa category designed for high-net-worth entrepreneurs, family offices and global investors.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>5-10 year renewable residency</li>
            <li>Flexible employment and business activity</li>
            <li>Eligibility for senior executives and innovators</li>
            <li>Large-scale investment thresholds expected</li>
          </ul>

          <Quote>
            Many UHNW families start by researching the UAE Golden Visa — but later pivot to Portugal due to EU mobility, lower costs, and structured investment options through CMVM-regulated funds.
          </Quote>

          {/* Comparison */}
          <h2 className="text-2xl font-bold mt-12">UAE vs Portugal — Direct Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border mt-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3">Feature</th>
                  <th className="p-3">UAE Golden Visa</th>
                  <th className="p-3">Portugal Golden Visa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3">Mobility</td>
                  <td className="p-3">Residence only</td>
                  <td className="p-3">EU + Schengen freedom</td>
                </tr>
                <tr>
                  <td className="p-3">Investment Options</td>
                  <td className="p-3">Property / Business</td>
                  <td className="p-3">Funds, PE, VC, corporate</td>
                </tr>
                <tr>
                  <td className="p-3">Tax Environment</td>
                  <td className="p-3">Favourable but residency-dependent</td>
                  <td className="p-3">NHR / EU frameworks</td>
                </tr>
                <tr>
                  <td className="p-3">Stay Requirement</td>
                  <td className="p-3">Must maintain ties</td>
                  <td className="p-3">~7 days/year</td>
                </tr>
                <tr>
                  <td className="p-3">Citizenship Path</td>
                  <td className="p-3">None</td>
                  <td className="p-3">Eligible after long-term residency</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <CtaSection />

          {/* Final */}
          <p className="text-lg mt-10">
            Both the UAE and Portugal occupy important positions in global mobility planning — but for investors seeking <strong>EU entry, diversification and long-term certainty</strong>, Portugal remains the more strategic choice.
          </p>
        </div>
      </section>
    <BlogPreviewGridFromXML currentSlug={SLUG} />
   
      <Footer />
    </>
  );
}
