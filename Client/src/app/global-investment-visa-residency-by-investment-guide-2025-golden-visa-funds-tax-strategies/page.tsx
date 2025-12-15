// ✅ Super Pillar Article: Global Investment Visa & Residency by Investment Guide 2025

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
  Briefcase,
  Users,
  Layers,
} from 'lucide-react';

// ===================================================================
// METADATA
// ===================================================================

const SLUG =
  'global-investment-visa-residency-by-investment-guide-2025-golden-visa-funds-tax-strategies';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/global-investment-visa-residency-by-investment-guide-2025.jpg';
const PUBLISHED = '2025-11-26T09:00:00+00:00';

export const metadata = {
  title:
    'Global Investment Visa & Residency by Investment Guide 2025 - Rankings, Tax Strategies & Golden Visa Funds',
  description:
    'Complete 2025 pillar guide to investment visas and residency by investment: Google Trends surge data, global program rankings, Greece-Italy-Portugal comparison, tax regimes, Golden Visa funds, private equity strategies and how HNW families design global mobility.',
  openGraph: {
    title:
      'Global Investment Visa & Residency by Investment Guide 2025 - Golden Visa Funds & Tax Strategies',
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
    'Global Investment Visa & Residency by Investment Guide 2025 - Rankings, Tax Strategies & Golden Visa Funds',
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
    'Long-form 2025 guide covering the global surge in investment visa and residency by investment demand, program rankings, tax regimes, Golden Visa funds, private equity routes and specialised strategies for UK, US and global high-net-worth families.',
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
        name: 'Global Investment Visa & Residency by Investment Guide 2025',
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
      name: 'What is the difference between an investment visa, residency by investment and a Golden Visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Investment visa and residency by investment are umbrella terms for routes where foreign nationals obtain residence rights in exchange for qualifying investments. Golden Visa is a popular brand name used in Europe, especially in Portugal, Greece and Spain, for specific residency-by-investment programs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why did interest in “investment visa” and “residency by investment” surge in 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Global Google Trends data show searches for “investment visa” and “residency by investment” more than tripling year on year, driven by political uncertainty, expected tax rises in core economies, and the shift from property-based to regulated fund-based residency programs in Europe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which residency by investment programs are leading in 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Greece, Italy and Portugal stand out in Europe, with strong search growth and compelling tax offers, while Malta, the UAE and certain Caribbean islands remain important niches. Portugal is distinctive for its fund-based Golden Visa, using regulated investment funds rather than direct real estate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do Golden Visa funds and private equity vehicles fit into a residency strategy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Golden Visa funds are regulated investment funds that allocate capital into private equity, venture or real-economy projects and simultaneously act as the qualifying asset for residency. They allow investors to keep a professional, portfolio-style approach instead of tying everything to one property.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is residency by investment only for ultra-high-net-worth individuals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. While some programs target ultra-high-net-worth families, many residency by investment routes start around €250,000-€500,000, making them accessible to successful entrepreneurs, senior professionals and affluent retirees, not just billionaires.',
      },
    },
  ],
};

const ldCombined = [articleLd, faqLd];

const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#002741] bg-[#FFFCF3] py-3 px-4 rounded-md my-6 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

export default function GlobalInvestmentVisaResidencyGuide2025Page() {
  return (
    <>
      <Script
        id="ld-article-faq-global-investment-visa"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldCombined) }}
      />

      <Header />

      {/* ARTICLE */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Header */}
          <header>
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <TrendingUp size={16} /> Investment Visa • Residency by Investment •
              Golden Visa Funds
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Global Investment Visa &amp; Residency by Investment Guide 2025:
              Rankings, Tax Strategies &amp; Golden Visa Funds
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              Searches for <strong>investment visa</strong> and{' '}
              <strong>residency by investment</strong> have exploded since 2024,
              with Google Trends data showing triple-digit growth for terms like
              “investment visa”, “residency by investment” and “Golden Visa”. At
              the same time, programs in <strong>Greece, Italy and Portugal</strong>{' '}
              are being reshaped around regulated funds and tax regimes rather than
              simple property purchases. This long-form guide combines everything:
              global rankings, tax angles, Portugal funds, private equity, UK
              pensions, US investors and the macro trends driving high-net-worth
              families into structured migration.
            </p>
          </header>

          {/* Hero image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image
              src={OG_IMAGE}
              alt="World map showing hubs for investment visa and residency by investment programs in 2025"
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
              <p className="text-sm font-semibold">+377% YoY*</p>
              <p className="text-[11px] text-[#5A6F7B]">Google Trends</p>
            </div>
            <div className="text-center border rounded-lg py-2 px-1">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">
                “Residency by Investment”
              </p>
              <p className="text-sm font-semibold">+238% YoY*</p>
              <p className="text-[11px] text-[#5A6F7B]">Search interest</p>
            </div>
            <div className="text-center border rounded-lg py-2 px-1">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">
                Market size
              </p>
              <p className="text-sm font-semibold">$30bn+</p>
              <p className="text-[11px] text-[#5A6F7B]">Investment migration</p>
            </div>
            <div className="text-center border rounded-lg py-2 px-1">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">
                Core hub
              </p>
              <p className="text-sm font-semibold">Portugal</p>
              <p className="text-[11px] text-[#5A6F7B]">Fund-based GV</p>
            </div>
          </div>

          <Quote>
            The old model of “buy an apartment, get a Golden Visa” is being
            replaced by regulated funds, tax regimes and institutional-style
            investment migration. Families are no longer buying a passport; they
            are architecting a global life.
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
                <a href="#definitions">
                  What Are Investment Visas &amp; Residency by Investment?
                </a>
              </li>
              <li>
                <a href="#trends">
                  2025 Surge: Google Trends Data &amp; the $30bn Market
                </a>
              </li>
              <li>
                <a href="#program-types">
                  Types of Residency by Investment Programs (Beyond Real Estate)
                </a>
              </li>
              <li>
                <a href="#ranking">
                  Global Ranking 2025: Best Residency by Investment Options
                </a>
              </li>
              <li>
                <a href="#portugal-funds">
                  Why Portugal’s Fund-Based Golden Visa Became the Institutional
                  Benchmark
                </a>
              </li>
              <li>
                <a href="#greece-italy">
                  Greece &amp; Italy: Real Estate, Non-Dom Tax &amp; Competition
                </a>
              </li>
              <li>
                <a href="#uae-malta">
                  UAE &amp; Malta: Zero-Tax Hubs and Passport Neighbours
                </a>
              </li>
              <li>
                <a href="#private-equity">
                  Private Equity &amp; Golden Visa Funds: The Institutional Route
                </a>
              </li>
              <li>
                <a href="#uk-us">
                  UK &amp; US Investors: Tax, Pensions &amp; Fund-Based Strategies
                </a>
              </li>
              <li>
                <a href="#design-strategy">
                  How HNW Families Design a Multi-Country Investment Visa Strategy
                </a>
              </li>
              <li>
                <a href="#faqs">
                  FAQs - Investment Visas, Residency by Investment &amp; Golden Visa
                  Funds
                </a>
              </li>
            </ol>
          </nav>

          {/* SECTION: Definitions */}
          <section id="definitions" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Layers /> What Are Investment Visas &amp; Residency by Investment?
            </h2>
            <p className="text-[#15364A]">
              In simple terms, an <strong>investment visa</strong> or{' '}
              <strong>residency by investment (RBI)</strong> program allows a
              foreign national to obtain the right to live in a country in exchange
              for a qualifying investment. That investment can be:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#15364A]">
              <li>a real estate purchase or long-term lease;</li>
              <li>an allocation to a <strong>regulated investment fund</strong>;</li>
              <li>a direct business investment or job-creation project;</li>
              <li>government bonds or donations (less common in the EU now).</li>
            </ul>
            <p className="text-[#15364A]">
              <strong>Golden Visa</strong> is simply a brand name - used most
              prominently in Portugal, Greece, Spain and a few others - for certain
              RBI schemes. The underlying concept is the same: align{' '}
              <strong>capital deployment, mobility and long-term security</strong>.
            </p>
            <p className="text-sm text-[#0A4F3C]">
              For a macro overview of the market and numbers, see our article{' '}
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

          {/* SECTION: Trends */}
          <section id="trends" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <BarChart3 /> 2025 Surge: Google Trends Data &amp; the $30bn Market
            </h2>
            <p className="text-[#15364A]">
              Google Trends data for 2024-2025 show that “investment visa” and
              “residency by investment” are among the <strong>fastest-growing
              search terms</strong> in global wealth management:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border mt-2">
                <thead className="bg-[#F8FAFC] text-left">
                  <tr>
                    <th className="p-3 border">Search term</th>
                    <th className="p-3 border">Annual increase*</th>
                    <th className="p-3 border">3-month surge*</th>
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
                    <td className="p-3 border">+200%+</td>
                    <td className="p-3 border">+250%+</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-semibold">Golden Visa</td>
                    <td className="p-3 border">+90%+</td>
                    <td className="p-3 border">+40-50%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-[#5A6F7B]">
              *Illustrative figures based on October 2024-October 2025 trend
              snapshots.
            </p>

            <p className="text-[#15364A]">
              In parallel, analysts estimate that the global{' '}
              <strong>investment migration market now exceeds $30 billion per
              year</strong>, with more than 80 countries offering some form of RBI
              or CBI structure. The real story is not only growth - it’s the{' '}
              <strong>shift from property to regulated funds, and from one-off
              purchases to portfolio construction</strong>.
            </p>

            <p className="text-sm text-[#0A4F3C]">
              We analyse the surge in the dedicated article{' '}
              <Link
                href="/investment-visa-2025-global-surge-ranking-tax-benefits-hnwi-strategies"
                className="underline"
              >
                Investment Visa 2025 - Global Surge, Top Countries, Tax Benefits
                &amp; HNWI Strategies
              </Link>
              .
            </p>
          </section>

          {/* SECTION: Program types */}
          <section id="program-types" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Layers /> Types of Residency by Investment Programs (Beyond Real
              Estate)
            </h2>
            <p className="text-[#15364A]">
              While marketing often focuses on “buy a property, get a visa”, the
              reality is more diverse. Most RBI frameworks now sit in one of four
              buckets:
            </p>

            <h3 className="font-semibold mt-2">1. Real Estate-Focused Programs</h3>
            <p className="text-[#15364A]">
              These link residency to a minimum property purchase or lease—still
              common in Greece and parts of Southern Europe. They appeal to those
              who truly want a home in the destination country, but they concentrate
              risk in one illiquid asset.
            </p>

            <h3 className="font-semibold mt-2">
              2. Fund-Based &amp; Private Equity-Linked Programs
            </h3>
            <p className="text-[#15364A]">
              Flagship example: <strong>Portugal</strong>. Instead of buying a
              flat, investors subscribe to <strong>regulated investment funds</strong>{' '}
              that deploy capital into diversified portfolios—private equity,
              venture, infrastructure or real-economy projects—while serving as the
              qualifying Golden Visa asset.
            </p>

            <h3 className="font-semibold mt-2">
              3. Business &amp; Job-Creation Programs
            </h3>
            <p className="text-[#15364A]">
              These require setting up or expanding a local business, hitting
              thresholds for capital invested and jobs created. They can be
              powerful for active entrepreneurs but require much more involvement.
            </p>

            <h3 className="font-semibold mt-2">
              4. Donation &amp; Bond-Based Programs
            </h3>
            <p className="text-[#15364A]">
              Some Caribbean citizenship-by-investment routes still use pure
              donations or government bonds. In the EU, pressure from Brussels has
              pushed structures toward real economic activity instead.
            </p>
          </section>

          {/* SECTION: Global ranking */}
          <section id="ranking" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MapPinned /> Global Ranking 2025: Best Residency by Investment
              Options
            </h2>
            <p className="text-[#15364A]">
              No single ranking fits every investor, but based on search data,
              policy stability, tax regimes and quality of life, a 2025 short list
              often includes:
            </p>

            <ol className="list-decimal pl-5 space-y-1 text-[#15364A]">
              <li>
                <strong>Portugal</strong> - fund-based Golden Visa, EU, lifestyle +
                safety.
              </li>
              <li>
                <strong>Greece</strong> - competitive property thresholds and a
                strong Non-Dom tax regime.
              </li>
              <li>
                <strong>Italy</strong> - powerful flat-tax regime and investor visa.
              </li>
              <li>
                <strong>Malta</strong> - well-established residency and citizenship
                options.
              </li>
              <li>
                <strong>UAE</strong> - long-term visas, low taxation, business hub.
              </li>
              <li>
                <strong>Spain</strong> - lifestyle-first Golden Visa and digital
                nomad options.
              </li>
              <li>
                <strong>Caribbean CBI</strong> - for those prioritising quick
                citizenship over EU residency.
              </li>
            </ol>

            <p className="text-sm text-[#0A4F3C]">
              For a ranking focused purely on Golden Visas and RBI routes, see{' '}
              <Link
                href="/best-residency-golden-visa-programs-2025-global-ranking"
                className="underline"
              >
                Best Residency and Golden Visa Programs 2025 - Global Ranking (Why
                Portugal Still Leads)
              </Link>
              .
            </p>
          </section>

          {/* SECTION: Portugal funds */}
          <section id="portugal-funds" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShieldCheck /> Why Portugal’s Fund-Based Golden Visa Became the
              Institutional Benchmark
            </h2>
            <p className="text-[#15364A]">
              Portugal used to be known for relatively low property thresholds and
              postcard-worthy homes in Lisbon or Porto. That era is over. After
              regulatory reforms, the flagship route is now the{' '}
              <strong>investment fund option</strong>, which:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#15364A]">
              <li>
                requires a typical minimum of <strong>€500,000</strong> in a
                qualifying fund;
              </li>
              <li>
                uses <strong>CMVM-regulated vehicles</strong> with licensed
                managers and depositary banks;
              </li>
              <li>
                deploys capital into private companies, infrastructure, tourism,
                real-economy projects or innovation;
              </li>
              <li>
                allows a <strong>fully passive approach</strong>—no tenant
                management, construction risk or daily operations.
              </li>
            </ul>
            <p className="text-[#15364A]">
              This shift has turned Portugal into the{' '}
              <strong>reference point for institutional-style investment visas</strong>.
              Instead of a speculative apartment, the qualifying asset can be a
              diversified portfolio—often with a clear track record and audit trail.
            </p>
            <p className="text-sm text-[#0A4F3C]">
              For an in-depth breakdown of how these funds work, read{' '}
              <Link
                href="/portugal-golden-visa-investment-fund-secure-eu-residency-passive-returns-2025"
                className="underline"
              >
                Portugal Golden Visa Investment Fund: Secure EU Residency with
                Passive, Regulated Returns
              </Link>{' '}
              and{' '}
              <Link
                href="/why-golden-visa-funds-are-replacing-real-estate-2025"
                className="underline"
              >
                Why Golden Visa Funds Are Replacing Real Estate in 2025
              </Link>
              .
            </p>
          </section>

          {/* SECTION: Greece & Italy */}
          <section id="greece-italy" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MapPinned /> Greece &amp; Italy: Real Estate, Non-Dom Tax &amp;
              Competition
            </h2>
            <p className="text-[#15364A]">
              Google Trends data shows that{' '}
              <strong>Greece and Italy Golden Visas are the fastest-growing
              specific program searches</strong>. Two reasons stand out:
            </p>
            <h3 className="font-semibold mt-2">Greece - Affordable Entry + Non-Dom</h3>
            <p className="text-[#15364A]">
              Greece still allows residency with property investments from around
              €250,000 in certain areas, paired with a{' '}
              <strong>Non-Dom regime offering a flat €100,000 annual tax on global
              income</strong> for eligible individuals. For investors who genuinely
              want a Mediterranean base and see value in property, it&apos;s a clear
              contender.
            </p>

            <h3 className="font-semibold mt-2">Italy - Major Economy + Flat Tax</h3>
            <p className="text-[#15364A]">
              Italy&apos;s investor visa, combined with its well-known{' '}
              <strong>€100,000 flat tax on foreign income</strong> for new
              residents, appeals to entrepreneurs and family offices that want
              access to a large EU economy with a predictable top-level tax cap.
            </p>

            <p className="text-[#15364A]">
              Both countries remain more <strong>property-and-tax-driven</strong>,
              whereas Portugal has repositioned the Golden Visa around{' '}
              <strong>funds and private equity</strong>.
            </p>
          </section>

          {/* SECTION: UAE & Malta */}
          <section id="uae-malta" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Globe2 /> UAE &amp; Malta: Zero-Tax Hubs and Passport Neighbours
            </h2>
            <p className="text-[#15364A]">
              Outside the EU, two names keep showing up in investment visa
              conversations:
            </p>
            <h3 className="font-semibold mt-2">UAE - Long-Term Visas &amp; Zero Tax</h3>
            <p className="text-[#15364A]">
              Dubai and Abu Dhabi anchor a model built around{' '}
              <strong>long-term residence visas</strong>, ease of doing business and
              very low direct taxation. For globally mobile entrepreneurs who don&apos;t
              need an EU base but want a dynamic hub, the UAE is often the default.
            </p>

            <h3 className="font-semibold mt-2">
              Malta - EU Base with Mature Residency/Citizenship Options
            </h3>
            <p className="text-[#15364A]">
              Malta blends <strong>EU membership, English language and stable
              institutions</strong> with residence and, for some, citizenship
              programs. It tends to appeal to those who prioritise a small, stable
              jurisdiction and a combination of EU rights with a tax system that
              can be optimised through professional planning.
            </p>
          </section>

          {/* SECTION: Private equity / funds */}
          <section id="private-equity" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Briefcase /> Private Equity &amp; Golden Visa Funds: The Institutional
              Route
            </h2>
            <p className="text-[#15364A]">
              One of the most important evolutions of the last decade is the
              convergence between:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#15364A]">
              <li>
                <strong>private equity investing</strong>; and
              </li>
              <li>
                <strong>residency by investment / Golden Visa programs</strong>.
              </li>
            </ul>
            <p className="text-[#15364A]">
              Instead of using a single apartment as the qualifying asset, more
              sophisticated investors subscribe to{' '}
              <strong>regulated private equity or real-economy funds</strong> that:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#15364A]">
              <li>are supervised by securities regulators;</li>
              <li>hold diversified portfolios of companies and projects;</li>
              <li>
                have institutional governance—custodians, auditors, investment
                committees;
              </li>
              <li>
                and simultaneously qualify them for a <strong>Golden Visa</strong>.
              </li>
            </ul>
            <p className="text-[#15364A]">
              This allows families to treat the investment visa not as a random
              expense, but as part of their <strong>overall private markets
              allocation</strong>.
            </p>
            <p className="text-sm text-[#0A4F3C]">
              For a step-by-step introduction to the asset class itself, see{' '}
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

          {/* SECTION: UK & US */}
          <section id="uk-us" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Users /> UK &amp; US Investors: Tax, Pensions &amp; Fund-Based
              Strategies
            </h2>
            <p className="text-[#15364A]">
              Two groups dominate the inbound interest for EU fund-based investment
              visas: <strong>UK and US investors</strong>.
            </p>

            <h3 className="font-semibold mt-2">UK Investors</h3>
            <p className="text-[#15364A]">
              Post-Brexit, UK nationals qualify as non-EU applicants for programs
              like the Portugal Golden Visa. Many are:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#15364A]">
              <li>higher-rate or additional-rate taxpayers;</li>
              <li>holding significant defined-benefit or DC pensions;</li>
              <li>
                concerned about changes to UK tax policy, inheritance tax and
                wealth proposals.
              </li>
            </ul>
            <p className="text-[#15364A]">
              Their planning usually combines:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#15364A]">
              <li>
                the <strong>UK-Portugal Double Tax Treaty</strong> for pension and
                investment income;
              </li>
              <li>a <strong>fund-based Portugal Golden Visa</strong> allocation;</li>
              <li>
                and, in legacy cases, residual benefits from the old NHR regime or
                its successors.
              </li>
            </ul>
            <p className="text-sm text-[#0A4F3C]">
              See our focused guide{' '}
              <Link
                href="/uk-pensions-double-tax-treaty-portugal-golden-visa-funds-2025-guide"
                className="underline"
              >
                UK Pensions, Double Tax Treaty &amp; Portugal Golden Visa Funds -
                2025 Guide
              </Link>
              .
            </p>

            <h3 className="font-semibold mt-2">US Investors</h3>
            <p className="text-[#15364A]">
              Americans face a different challenge: <strong>citizenship-based
              taxation</strong>. Even if they move, the IRS moves with them. Yet
              many still pursue EU investment visas to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#15364A]">
              <li>build an EU base for children and future generations;</li>
              <li>
                hedge against domestic political and fiscal uncertainty;
              </li>
              <li>
                diversify lifestyle and business options while keeping US structures
                intact.
              </li>
            </ul>
            <p className="text-[#15364A]">
              For US investors, the emphasis is less on tax escape and more on{' '}
              <strong>mobility, diversification and long-term optionality</strong>.
            </p>
          </section>

          {/* SECTION: Design strategy */}
          <section id="design-strategy" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Globe2 /> How HNW Families Design a Multi-Country Investment Visa
              Strategy
            </h2>
            <p className="text-[#15364A]">
              At the top end, families don&apos;t just choose one program. They design
              a <strong>multi-country architecture</strong>:
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-[#15364A]">
              <li>
                <strong>Define the anchor:</strong> Where do you actually see
                yourself spending time (Portugal, Greece, UAE, etc.)?
              </li>
              <li>
                <strong>Rank priorities:</strong> mobility, tax, schools, safety,
                healthcare, ease of doing business.
              </li>
              <li>
                <strong>Choose the primary RBI route:</strong> often an EU country
                (Portugal, Greece, Italy, Malta).
              </li>
              <li>
                <strong>Layer in tax strategy:</strong> Non-Dom regimes, flat-tax
                options, treaties and transparency.
              </li>
              <li>
                <strong>Allocate capital:</strong> decide how much goes into real
                estate vs funds vs operational businesses.
              </li>
              <li>
                <strong>Plan succession:</strong> ensure children and heirs can use
                the structures, not just inherit complexity.
              </li>
            </ol>
            <Quote>
              The question is no longer “which Golden Visa is cheapest?”. The real
              question is: “which jurisdiction and instrument give my family the
              best mix of safety, freedom and clarity for the next 20 years?”.
            </Quote>
          </section>

          {/* FAQs */}
          <section id="faqs" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <HelpCircle /> FAQs - Investment Visas, Residency by Investment &amp;
              Golden Visa Funds
            </h2>

            <div className="space-y-3">
              <details className="border rounded-lg px-4 py-3">
                <summary className="font-semibold cursor-pointer">
                  Is “residency by investment” the same as a Golden Visa?
                </summary>
                <p className="text-sm text-[#15364A] mt-2">
                  Golden Visa is a type of residency by investment program, mainly
                  in Europe. Residency by investment is the broader category that
                  includes Golden Visas, investor visas and some talent-based
                  schemes that still require capital commitments.
                </p>
              </details>

              <details className="border rounded-lg px-4 py-3">
                <summary className="font-semibold cursor-pointer">
                  Why are so many programs moving away from real estate?
                </summary>
                <p className="text-sm text-[#15364A] mt-2">
                  Regulators and public opinion have become more critical of
                  property-only migration. Fund-based and business-based models
                  direct capital into productive sectors, are easier to supervise,
                  and look more like conventional investment than mere asset
                  purchases.
                </p>
              </details>

              <details className="border rounded-lg px-4 py-3">
                <summary className="font-semibold cursor-pointer">
                  Are Golden Visa funds safer than buying property?
                </summary>
                <p className="text-sm text-[#15364A] mt-2">
                  They are different. A regulated fund brings diversification,
                  professional management and institutional oversight, but also
                  market risk and illiquidity. Property can feel tangible but often
                  concentrates risk in one asset and requires more hands-on
                  management. The right route depends on your profile and goals.
                </p>
              </details>

              <details className="border rounded-lg px-4 py-3">
                <summary className="font-semibold cursor-pointer">
                  How much capital do I need for a serious investment visa plan?
                </summary>
                <p className="text-sm text-[#15364A] mt-2">
                  Many leading RBI programs start in the €250,000-€500,000 range
                  for the core qualifying investment. In practice, families usually
                  plan with a higher total budget once legal fees, taxes, extra
                  investments and relocation costs are factored in.
                </p>
              </details>

              <details className="border rounded-lg px-4 py-3">
                <summary className="font-semibold cursor-pointer">
                  Can investment visas really lead to second citizenship?
                </summary>
                <p className="text-sm text-[#15364A] mt-2">
                  In many jurisdictions, yes. Residency-by-investment can be the
                  first step toward permanent residence and ultimately citizenship,
                  subject to minimum stay, integration and language rules. Portugal
                  is one of the best-known examples of a residency-first path to EU
                  citizenship.
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
