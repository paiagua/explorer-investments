// ✅ Article: Investment Visa 2025 - Global Surge, Ranking, Tax Benefits & HNWI Strategies

import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';

export const revalidate = 600;
export const fetchCache = 'force-cache';

import {
  TrendingUp,
  Globe2,
  BarChart3,
  ShieldCheck,
  HelpCircle,
  MapPinned,
  Users,
  Briefcase,
} from 'lucide-react';

// ===================================================================
// METADATA
// ===================================================================

const SLUG =
  'investment-visa-2025-global-surge-ranking-tax-benefits-hnwi-strategies';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/investment-visa-2025-global-surge-ranking.jpg';
const PUBLISHED = '2025-11-24T09:00:00+00:00';

export const metadata = {
  title:
    'Investment Visa 2025 - Global Surge, Top Countries, Tax Benefits & HNWI Strategies',
  description:
    'Google Trends data shows “investment visa” searches up 377.8% in 2025. Discover why demand exploded, which countries lead (Greece, Italy, Portugal), how tax regimes work and how high-net-worth investors use investment visa and residency-by-investment funds as a strategic hedge.',
  openGraph: {
    title:
      'Investment Visa 2025 - Global Surge, Top Countries & Tax-Regime Ranking',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

// ===================================================================
// JSON-LD (Article + FAQ + Breadcrumbs)
// ===================================================================

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Investment Visa 2025 - Global Surge, Top Countries, Tax Benefits & HNWI Strategies',
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': CANONICAL_URL,
  },
  image: [OG_IMAGE],
  author: {
    '@type': 'Organization',
    name: 'Golden Visas Hub',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Golden Visas Hub',
    logo: {
      '@type': 'ImageObject',
      url: 'https://goldenvisashub.com/assets/images/logo.png',
    },
  },
  description:
    'Data-driven 2025 guide to investment visas and residency by investment: Google Trends shows investment visa searches up 377.8% and residency by investment up 238.3%. We rank the leading programs, compare Greece, Italy and Portugal Golden Visas, and explain how regulated funds and tax regimes drive HNWI strategies.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://goldenvisashub.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Investment Migration',
        item: 'https://goldenvisashub.com/category/investment-migration',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Investment Visa 2025 - Global Surge & Ranking',
        item: CANONICAL_URL,
      },
    ],
  },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an investment visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An investment visa is a residency-by-investment or citizenship-by-investment route where a foreign national obtains the right to live in a country by making a qualifying investment, usually in real estate, business, government bonds or regulated funds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why did “investment visa” searches rise by 377.8% in 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Trends data shows a 377.8% annual increase and a 324.2% three-month surge in searches for “investment visa”, driven by geopolitical uncertainty, tax changes in high-tax countries and the shift from real estate to regulated fund-based residency programs in Europe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which countries are leading the investment visa surge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Greece, Italy and Portugal are among the fastest-growing Golden Visa and investment visa destinations. Italy’s Golden Visa searches rose 388.9%, Greece by 257.1% and Portugal by 189.8% year on year, supported by competitive tax regimes and EU mobility.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does a Portugal investment visa via funds work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Portugal, investors can subscribe to a qualifying CMVM-regulated investment fund, typically with a minimum of €500,000. The fund invests in Portuguese companies or projects, and the commitment serves as the qualifying asset for the Portugal Golden Visa, offering EU residency and Schengen mobility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is an investment visa only for ultra-high-net-worth individuals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Investment visas generally target high-net-worth or upper-affluent investors, but many programs start around €250,000-€500,000, making them accessible to successful professionals, entrepreneurs and business owners—not only billionaires.',
      },
    },
  ],
};

const ldCombined = [articleLd, faqLd];

// Helper
const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#002741] bg-[#FFFCF3] py-3 px-4 rounded-md my-6 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

export default function InvestmentVisa2025GlobalSurgePage() {
  return (
    <>
      <Script
        id="ld-article-faq-investment-visa-2025"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldCombined) }}
      />

      <Header />

      {/* === Article === */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Header */}
          <header>
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <TrendingUp size={16} /> Investment Visa • Residency by Investment •
              2025
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Investment Visa 2025 - Global Surge, Top Countries, Tax Benefits &amp;
              HNWI Strategies
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              New Google Trends data shows <strong>“investment visa” searches up
              377.8%</strong> year on year, with a 324.2% surge in the last three
              months alone. Interest in <strong>“residency by investment”</strong>{' '}
              is up 238.3%, and <strong>Greece, Italy and Portugal Golden Visas</strong>{' '}
              are leading the race. This article explains what is driving the boom,
              which investment visa programs are winning, and how high-net-worth
              families are using regulated funds and tax regimes as a strategic
              hedge.
            </p>
          </header>

          {/* Hero image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image
              src={OG_IMAGE}
              alt="Global map with investment visa and residency by investment growth data for 2025"
              fill
              className="object-cover"
            />
          </figure>

          {/* KPI strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="text-center border rounded-lg py-2 px-1">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">
                “Investment Visa”
              </p>
              <p className="text-sm font-semibold">+377.8% / year</p>
              <p className="text-[11px] text-[#5A6F7B]">+324.2% last 3m</p>
            </div>
            <div className="text-center border rounded-lg py-2 px-1">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">
                “Residency by Investment”
              </p>
              <p className="text-sm font-semibold">+238.3% / year</p>
              <p className="text-[11px] text-[#5A6F7B]">+252.5% last 3m</p>
            </div>
            <div className="text-center border rounded-lg py-2 px-1">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">
                Italy GV
              </p>
              <p className="text-sm font-semibold">+388.9% / year</p>
              <p className="text-[11px] text-[#5A6F7B]">Avg 65.10 last 3m</p>
            </div>
            <div className="text-center border rounded-lg py-2 px-1">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">
                Greece GV
              </p>
              <p className="text-sm font-semibold">+257.1% / year</p>
              <p className="text-[11px] text-[#5A6F7B]">+304.7% last 3m</p>
            </div>
          </div>

          <Quote>
            Investment visa is no longer a niche search term. It is the new
            shorthand HNWIs use when they look for residency by investment,
            structured like an institutional portfolio not a one-off property bet.
          </Quote>

          {/* TOC */}
          <nav
            aria-label="Table of contents"
            className="border rounded-xl p-4 bg-[#F8FAFC]"
          >
            <h2 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <Globe2 size={16} /> Table of Contents
            </h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-[#15364A]">
              <li>
                <a href="#data-surge">
                  1. Google Trends 2025: How Big Is the Investment Visa Surge?
                </a>
              </li>
              <li>
                <a href="#top-terms">
                  2. Investment Visa vs Residency by Investment vs Golden Visa
                </a>
              </li>
              <li>
                <a href="#country-ranking">
                  3. Country Ranking: Greece, Italy and Portugal Golden Visas
                </a>
              </li>
              <li>
                <a href="#drivers">
                  4. Why Are HNWIs Piling into Investment Visa Programs Now?
                </a>
              </li>
              <li>
                <a href="#tax-regimes">
                  5. Tax Regimes: Greece, Italy and Portugal Compared
                </a>
              </li>
              <li>
                <a href="#fund-route">
                  6. The Fund Route: Investment Visa via Regulated Private Equity
                  Funds
                </a>
              </li>
              <li>
                <a href="#who-uses">
                  7. Who Uses Investment Visas? Profiles of 2025 Applicants
                </a>
              </li>
              <li>
                <a href="#strategy">
                  8. Building a Global Strategy with Investment Visas
                </a>
              </li>
              <li>
                <a href="#faqs">9. FAQs - Investment Visa &amp; Residency by Investment</a>
              </li>
            </ol>
          </nav>

          {/* SECTION 1 - Data surge */}
          <section id="data-surge" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <BarChart3 /> 1. Google Trends 2025: How Big Is the Investment Visa
              Surge?
            </h2>
            <p className="text-[#15364A]">
              The latest Google Trends table for 2024-2025 shows that{' '}
              <strong>“investment visa” is the fastest-growing search term in the
              entire investment migration universe</strong>.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border mt-2">
                <thead className="bg-[#F8FAFC] text-left">
                  <tr>
                    <th className="p-3 border">Search Term</th>
                    <th className="p-3 border">Annual Increase</th>
                    <th className="p-3 border">Last 3 Months Surge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border font-semibold">Investment visa</td>
                    <td className="p-3 border">+377.8%</td>
                    <td className="p-3 border">+324.2%</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-semibold">
                      Residency by investment
                    </td>
                    <td className="p-3 border">+238.3%</td>
                    <td className="p-3 border">+252.5%</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-semibold">
                      Citizenship by investment
                    </td>
                    <td className="p-3 border">+206.4%</td>
                    <td className="p-3 border">+259.7%</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-semibold">Golden Visa</td>
                    <td className="p-3 border">+93.5%</td>
                    <td className="p-3 border">+48.4%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[#15364A]">
              The biggest mover is <strong>“investment visa”</strong>, with its
              monthly search score rising from <strong>6.75 in Oct-24</strong> to{' '}
              <strong>32.25 in Oct-25</strong>. The average interest in the last
              three months alone is <strong>62.43</strong>, up from just{' '}
              <strong>14.72</strong> in the previous quarter - more than a{' '}
              <strong>4x jump</strong>.
            </p>
          </section>

          {/* SECTION 2 - Top terms */}
          <section id="top-terms" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <TrendingUp /> 2. Investment Visa vs Residency by Investment vs
              Golden Visa
            </h2>
            <p className="text-[#15364A]">
              Historically, most people searched for{' '}
              <strong>“Golden Visa”</strong> or{' '}
              <strong>“citizenship by investment”</strong>. In 2025, the language
              is changing:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#15364A]">
              <li>
                <strong>Investment visa</strong> has become a catch-all term for
                residency or citizenship via investment.
              </li>
              <li>
                <strong>Residency by investment</strong> is gaining ground as a
                more neutral, policy-friendly phrase.
              </li>
              <li>
                <strong>Golden Visa</strong> still dominates headlines in Europe,
                but grows more slowly than the broader terms.
              </li>
            </ul>
            <p className="text-[#15364A]">
              For a macro look at how this fits into a{' '}
              <strong>$30 billion investment migration market</strong>, see our
              companion article{' '}
              <Link
                href="/investment-migration-30-billion-global-momentum-tourism-culture-investment-2025"
                className="underline"
              >
                Investment migration reaches $30 billion - new global momentum
                connects tourism, culture and investment
              </Link>
              .
            </p>
          </section>

          {/* SECTION 3 - Country ranking */}
          <section id="country-ranking" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MapPinned /> 3. Country Ranking: Greece, Italy &amp; Portugal Golden
              Visas
            </h2>
            <p className="text-[#15364A]">
              Among specific destinations, the big winners of the 2025 investment
              visa surge are <strong>Greece, Italy and Portugal</strong>.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border mt-2">
                <thead className="bg-[#F8FAFC] text-left">
                  <tr>
                    <th className="p-3 border">Program</th>
                    <th className="p-3 border">Annual Rise</th>
                    <th className="p-3 border">Key Metrics</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border font-semibold">Italy Golden Visa</td>
                    <td className="p-3 border">+388.9%</td>
                    <td className="p-3 border">
                      Search score <strong>6.75 → 33.00</strong>, recent
                      three-month average <strong>65.10</strong>.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-semibold">Greece Golden Visa</td>
                    <td className="p-3 border">+257.1%</td>
                    <td className="p-3 border">
                      Last three months saw a <strong>304.7% surge</strong>, recent
                      average <strong>61.72</strong>.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-semibold">
                      Portugal Golden Visa
                    </td>
                    <td className="p-3 border">+189.8%</td>
                    <td className="p-3 border">
                      Recent three-month average <strong>58.23</strong>, despite
                      the end of classic real estate routes.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[#15364A]">
              Greece and Italy dominate the searches thanks to their{' '}
              <strong>real estate-driven investment visas</strong> and attractive
              Non-Dom tax regimes. Portugal, even after removing most direct
              property options, remains a top search destination because of its{' '}
              <strong>fund-based Portugal Golden Visa</strong> and strong
              lifestyle appeal.
            </p>
            <p className="text-sm text-[#0A4F3C]">
              Deep dive resources:{' '}
       
              <Link
                href="/portugal-golden-visa-2025-truth-fund-route"
                className="underline"
              >
                Portugal Golden Visa 2025 - the truth about the fund route
              </Link>
              .
            </p>
          </section>

          {/* SECTION 4 - Drivers */}
          <section id="drivers" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <TrendingUp /> 4. Why Are HNWIs Piling into Investment Visa Programs
              Now?
            </h2>
            <p className="text-[#15364A]">
              Consultants quoted in the data attribute the surge to a mix of{' '}
              <strong>uncertainty and opportunity</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#15364A]">
              <li>
                concerns about <strong>higher taxes</strong> in core economies
                like the UK, parts of the EU and the US;
              </li>
              <li>
                desire for a <strong>“Plan B” jurisdiction</strong> in case of
                political shocks;
              </li>
              <li>
                the search for <strong>safer, more predictable systems</strong> for
                children and grandchildren;
              </li>
              <li>
                tighter rules on <strong>citizenship-by-investment</strong>, which
                push investors to “residency first” strategies instead.
              </li>
            </ul>
            <p className="text-[#15364A]">
              In short, HNWIs now treat investment visas as a mix of:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#15364A]">
              <li>a tax and regulatory strategy;</li>
              <li>a diversification of personal and family risk;</li>
              <li>a way to ease cross-border business and travel.</li>
            </ul>
          </section>

          {/* SECTION 5 - Tax regimes */}
          <section id="tax-regimes" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShieldCheck /> 5. Tax Regimes: Greece, Italy &amp; Portugal Compared
            </h2>
            <p className="text-[#15364A]">
              Tax is a critical driver of investment visa decisions. Three
              examples illustrate why search interest is exploding:
            </p>

            <h3 className="font-semibold mt-2">Greece - Non-Dom Flat Tax</h3>
            <p className="text-[#15364A]">
              Greece offers a Non-Dom regime under which eligible individuals can
              opt to pay a <strong>flat €100,000 per year</strong> on their global
              income, instead of standard progressive rates that can reach 45%.
              Pair this with a <strong>€250,000 property threshold</strong> for the
              Greece Golden Visa, and the value proposition becomes clear.
            </p>

            <h3 className="font-semibold mt-2">Italy - Flat Tax for New Residents</h3>
            <p className="text-[#15364A]">
              Italy&apos;s regime allows new residents to pay a flat annual tax on
              foreign income (often around €100,000) under specific conditions.
              Combined with its growth in investment visa searches, Italy is
              becoming a <strong>tax-driven lifestyle play</strong> for HNWIs who
              want a base in a major EU economy.
            </p>

            <h3 className="font-semibold mt-2">Portugal - Fund-Based Golden Visa + Tax Options</h3>
            <p className="text-[#15364A]">
              Portugal no longer offers classic real estate Golden Visa routes, but
              continues to attract investors through <strong>investment funds</strong>{' '}
              and a range of tax planning opportunities for new residents. The key
              difference is that Portugal has moved away from selling real estate
              and toward <strong>regulated fund investment</strong>.
            </p>

            <p className="text-sm text-[#0A4F3C]">
              For a detailed breakdown of the Portuguese fund route, see{' '}
              <Link
                href="/portugal-golden-visa-investment-fund-secure-eu-residency-passive-returns-2025"
                className="underline"
              >
                Portugal Golden Visa Investment Fund: Secure EU Residency with
                Passive, Regulated Returns
              </Link>
              .
            </p>
          </section>

          {/* SECTION 6 - Fund route */}
          <section id="fund-route" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Briefcase /> 6. The Fund Route: Investment Visa via Regulated Private
              Equity Funds
            </h2>
            <p className="text-[#15364A]">
              A major structural shift behind the investment visa surge is the move
              from <strong>property-only models</strong> to{' '}
              <strong>regulated fund-based structures</strong>.
            </p>
            <p className="text-[#15364A]">
              In Portugal in particular, the leading investment visa path is now
              the <strong>Golden Visa fund route</strong>, where investors:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#15364A]">
              <li>commit typically <strong>€500,000</strong> to a qualifying fund;</li>
              <li>
                invest via a <strong>CMVM-regulated vehicle</strong> with a
                professional manager and custodian bank;
              </li>
              <li>
                gain exposure to <strong>private equity, real-economy or
                infrastructure portfolios</strong>;
              </li>
              <li>
                use the commitment as the <strong>qualifying investment visa
                asset</strong>.
              </li>
            </ul>
            <p className="text-[#15364A]">
              For a full comparison of fund strategies - private equity, venture
              and real-economy - see{' '}
              <Link
                href="/portugal-golden-visa-funds-2025-comparison-private-equity-venture-real-economy"
                className="underline"
              >
                Portugal Golden Visa Funds 2025 - Full Comparison of Private
                Equity, Venture &amp; Real-Economy Strategies
              </Link>
              , and for why funds are replacing property, see{' '}
              <Link
                href="/why-golden-visa-funds-are-replacing-real-estate-2025"
                className="underline"
              >
                Why Golden Visa Funds Are Replacing Real Estate in 2025
              </Link>
              .
            </p>
          </section>

          {/* SECTION 7 - Who uses */}
          <section id="who-uses" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Users /> 7. Who Uses Investment Visas? Profiles of 2025 Applicants
            </h2>
            <p className="text-[#15364A]">
              The new wave of investment visa applicants goes far beyond
              traditional ultra-rich elites. Typical profiles include:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#15364A]">
              <li>
                <strong>Entrepreneurs and tech founders</strong> seeking a quieter,
                safer base while their businesses remain global.
              </li>
              <li>
                <strong>Senior executives</strong> in finance, consulting and
                technology who want diversification away from a single jurisdiction.
              </li>
              <li>
                <strong>Family offices and multi-generational families</strong>{' '}
                building a long-term European foothold.
              </li>
              <li>
                <strong>Early retirees</strong> from high-tax countries looking for
                lifestyle + tax optimisation.
              </li>
            </ul>
            <p className="text-sm text-[#0A4F3C]">
              To understand how private equity fits into these allocations, see{' '}
              <Link
                href="/how-to-invest-in-private-equity-2025-complete-beginners-guide"
                className="underline"
              >
                How to Invest in Private Equity in 2025 - Complete Beginner’s
                Guide
              </Link>
              .
            </p>
          </section>

          {/* SECTION 8 - Strategy */}
          <section id="strategy" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Globe2 /> 8. Building a Global Strategy with Investment Visas
            </h2>
            <p className="text-[#15364A]">
              High-net-worth investors increasingly treat investment visas as part
              of a <strong>global architecture</strong>, not a stand-alone move.
              A typical framework:
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-[#15364A]">
              <li>
                Choose a <strong>core residency jurisdiction</strong> (e.g.
                Portugal, Greece or Italy) based on lifestyle, safety and tax.
              </li>
              <li>
                Decide whether the qualifying asset will be{' '}
                <strong>real estate or a regulated fund</strong>.
              </li>
              <li>
                Integrate the investment visa into the{' '}
                <strong>overall portfolio</strong> - not more than a calibrated
                percentage of net worth.
              </li>
              <li>
                Use the visa to create <strong>optionality for family</strong> -
                second passports, education, future relocation.
              </li>
              <li>
                Review policy changes yearly and remain prepared to adapt allocation
                or jurisdiction if needed.
              </li>
            </ol>
            <Quote>
              For the most sophisticated families, an investment visa is no longer
              just a way to cross a border. It is a structural hedge in a world of
              tax change, political volatility and asymmetric opportunity.
            </Quote>
          </section>

          {/* FAQs */}
          <section id="faqs" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <HelpCircle /> 9. FAQs - Investment Visa &amp; Residency by Investment
            </h2>

            <div className="space-y-3">
              <details className="border rounded-lg px-4 py-3">
                <summary className="font-semibold cursor-pointer">
                  Is an investment visa the same as a Golden Visa?
                </summary>
                <p className="text-sm text-[#15364A] mt-2">
                  Not exactly. Golden Visa is a branding used mainly in Europe,
                  especially Portugal, Greece and Spain. Investment visa and
                  residency by investment are broader terms that cover a wide range
                  of programs worldwide, including Golden Visas, talent visas and
                  investor residence permits.
                </p>
              </details>

              <details className="border rounded-lg px-4 py-3">
                <summary className="font-semibold cursor-pointer">
                  Which is better: property-based or fund-based investment visas?
                </summary>
                <p className="text-sm text-[#15364A] mt-2">
                  Property routes can appeal to investors who genuinely want a home
                  in the destination country. Fund-based routes, especially in
                  Portugal, are preferred by those who value diversification,
                  governance and a more institutional way of allocating capital.
                </p>
              </details>

              <details className="border rounded-lg px-4 py-3">
                <summary className="font-semibold cursor-pointer">
                  How much do I need to invest for an investment visa?
                </summary>
                <p className="text-sm text-[#15364A] mt-2">
                  Thresholds vary. Greece starts around €250,000 for real estate,
                  while fund-based Portugal Golden Visa routes often begin around
                  €500,000. Italy and other programs have their own tiers. Your
                  advisor should match the jurisdiction to your budget and goals.
                </p>
              </details>

              <details className="border rounded-lg px-4 py-3">
                <summary className="font-semibold cursor-pointer">
                  Are returns guaranteed in investment visa funds?
                </summary>
                <p className="text-sm text-[#15364A] mt-2">
                  No. Even if some structures prioritise capital or pay income, all
                  investments carry risk. Investors should treat investment visa
                  allocations as part of a diversified portfolio, not as guaranteed
                  deposits.
                </p>
              </details>

              <details className="border rounded-lg px-4 py-3">
                <summary className="font-semibold cursor-pointer">
                  Can an investment visa lead to citizenship?
                </summary>
                <p className="text-sm text-[#15364A] mt-2">
                  In many countries, yes. Programs like the Portugal Golden Visa
                  allow investors to progress from temporary residency to permanent
                  residency and ultimately to citizenship, subject to time in the
                  program, basic language requirements and legal criteria in force
                  at the time.
                </p>
              </details>
            </div>
          </section>

          {/* CTA */}
          <CtaSection />
        </div>
      </section>

      {/* Related posts */}
      <BlogPreviewGridFromXML currentSlug={SLUG} />

      <Footer />
    </>
  );
}
