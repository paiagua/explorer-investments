// ===============================================
// US Investors + Private Equity + Portugal Golden Visa
// HIGH-SEO Article Component (2025)
// ===============================================

import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';

import {
  TrendingUp,
  Globe,
  BarChart,
  ShieldCheck,
  ArrowRight,
  Building,
  DollarSign,
  LineChart,
  Briefcase,
} from 'lucide-react';

export const revalidate = 600;
export const fetchCache = 'force-cache';
          import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';

      
// ======================================================
// METADATA
// ======================================================
const SLUG = 'us-investors-private-equity-golden-visa-portugal-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/us-investors-private-equity-golden-visa-2025.jpg';

export const metadata = {
  title:
    'Why U.S. Investors Are Turning to Private-Equity Style Residency Strategies — And Why Portugal Leads (2025 Guide)',
  description:
    'A major shift is happening: wealthy U.S. investors are using private-equity approaches to global residency. Learn why Portugal’s Golden Visa funds are becoming a preferred route for capital deployment, diversification and EU mobility.',
  openGraph: {
    title:
      'Private-Equity Style Golden Visa Investing: Why U.S. Investors Are Choosing Portugal (2025)',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

// Quote component
const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#002741] bg-[#FFFCF3] py-3 px-4 rounded-md my-6 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

// ======================================================
// PAGE COMPONENT
// ======================================================

export default function USPrivateEquityGoldenVisaArticle() {
  return (
    <>
      {/* JSON-LD */}
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline:
              'Why U.S. Investors Are Turning to Private-Equity Style Residency Strategies — And Why Portugal Leads (2025 Guide)',
            image: OG_IMAGE,
            author: 'Explorer Investments',
            datePublished: '2025-11-14',
            dateModified: '2025-11-14',
            url: CANONICAL_URL,
          }),
        }}
      />

      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Header */}
          <header>
            <div className="text-xs sm:text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2" style={{ marginTop: '20px' }}>
              <TrendingUp size={16} />
              U.S. Investors • Global Mobility • Private Equity
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Why U.S. Investors Are Turning to Private-Equity Style Residency
              Strategies — And Why Portugal Is Becoming the Top Choice (2025)
            </h1>

            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              Wealthy Americans are adopting institutional investment behaviours
              when selecting global residency solutions — shifting from
              real-estate dependency to fund-based strategies that mirror private-equity structures.
            </p>

            <p className="text-xs text-[#5A6F7B] mt-2">
              By Explorer Investments • Updated 2025
            </p>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image
              src={OG_IMAGE}
              alt="U.S. investors, private equity strategy and Portugal Golden Visa funds"
              fill
              className="object-cover"
            />
          </figure>

          {/* Section: The Shift */}
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <LineChart size={24} />
            A 2025 Trend: Residency as a Private-Equity Allocation
          </h2>
          <p className="text-[#15364A]">
            Across wealth advisory networks and family offices in the United
            States, a new pattern is clear: global mobility is no longer viewed
            as immigration — it's viewed as an asset class.  
          </p>

          <Quote>
            U.S. investors now treat mobility the same way they treat private
            equity — a long-term allocation that must deliver optionality,
            diversification and measurable upside.
          </Quote>

          <ul className="list-disc pl-6 space-y-2 text-[#002741]">
            <li>Stability outside U.S. political cycles</li>
            <li>Diversification away from USD exposure</li>
            <li>Access to EU markets, healthcare and education</li>
            <li>Capital deployment via regulated PE-style fund structures</li>
            <li>A residency pathway not tied to real estate volatility</li>
          </ul>

          {/* Section: Why Portugal Matches PE-Minded Investors */}
          <h2 className="text-2xl font-bold flex items-center gap-2 mt-10">
            <Briefcase size={24} />  
            Why Portugal’s Golden Visa Funds Are a “PE-Style Fit”
          </h2>

          <p className="text-[#15364A]">
            Portugal is the only major Western country offering a{" "}
            <strong>fully regulated fund-based residency program</strong> under
            CMVM supervision — making it uniquely aligned with private-equity
            investment psychology.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-4">
            <div className="p-5 border rounded-lg shadow-sm bg-[#FFFCF3]">
              <BarChart className="text-[#B4A77E] mb-2" />
              <p className="font-semibold">€500k Fund Route (Most Popular)</p>
              <p className="text-sm text-[#15364A]">
                Allocations into regulated PE/VC/credit/infrastructure funds,
                audited, managed by licensed professionals.
              </p>
            </div>
            <div className="p-5 border rounded-lg shadow-sm bg-[#FFFCF3]">
              <ShieldCheck className="text-[#B4A77E] mb-2" />
              <p className="font-semibold">Low Physical Stay</p>
              <p className="text-sm text-[#15364A]">
                ~7 days/year. Designed for global investors — not relocators.
              </p>
            </div>
          </div>

          <Quote>
            “Most U.S. clients want a structure that feels familiar.  
            Regulated funds — not property shopping — give them confidence.”
          </Quote>

          {/* Section: Why Americans Are Leaving the U.S. */}
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Globe size={24} />
            Why Americans Are Seeking Optionality Abroad
          </h2>

          <p className="text-[#15364A]">
            2024-2025 reports from wealth advisors, UHNW family offices and
            global tax firms show:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-[#002741] mt-3">
            <li>
              Sharp rise in Americans researching EU residency for post-work
              life planning.
            </li>
            <li>
              Families seeking educational pathways for children in Europe.
            </li>
            <li>
              Wealth managers recommending geographic diversification for tax
              and lifestyle flexibility.
            </li>
            <li>Retirees wanting stability and healthcare access.</li>
            <li>
              Private-equity professionals choosing Europe for long-term
              optionality.
            </li>
          </ul>

          <Quote>
            “Optionality is the new wealth. Mobility unlocks options. Portugal
            just makes the math work.”
          </Quote>

          {/* Section: Why Portugal Over Other Countries */}
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Building size={24} />
            Why Portugal Over Greece, Spain or Malta?
          </h2>

          <p className="text-[#15364A]">
            All residency programs are not equal — especially for U.S. investors
            accustomed to regulatory oversight.
          </p>

          <div className="space-y-3 mt-4">
            <div className="p-4 border rounded-md">
              <strong>✔ Only Portugal offers regulated fund investments</strong> under  
              <strong>CMVM supervision</strong>.
            </div>
            <div className="p-4 border rounded-md">
              ✔ EU mobility + future citizenship optionality
            </div>
            <div className="p-4 border rounded-md">
              ✔ Lower physical stay than Spain/Greece
            </div>
            <div className="p-4 border rounded-md">
              ✔ No property management burden
            </div>
          </div>

          {/* CTA */}
          <CtaSection />
        </div>
      </section>
 
          <BlogPreviewGridFromXML currentSlug={SLUG} />
      <Footer />

    </>
  );
}
