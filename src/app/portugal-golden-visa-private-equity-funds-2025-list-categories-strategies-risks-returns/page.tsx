// Portugal Golden Visa Private Equity Funds 2025 List: Categories, Strategies, Risks & Returns

import React from "react";
import Script from "next/script";
import Link from "next/link";
import Header from "@/components/Menu";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import BlogPreviewGridFromXML from "@/components/BlogPreviewGridFromXML";
import { BarChart, ListChecks, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";

export const revalidate = 600;
export const fetchCache = "force-cache";

const SLUG =
  "portugal-golden-visa-private-equity-funds-2025-list-categories-strategies-risks-returns";
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  "https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-private-equity-funds-2025-list-categories-strategies-risks-returns.jpg";
const PUBLISHED = "2025-11-24T22:00:00+00:00";

// Internal articles that JÁ existem com item no feed
const INTERNAL_ARTICLES = {
  globalGuide: {
    href: "/global-investment-visa-residency-by-investment-guide-2025-golden-visa-funds-tax-strategies",
    label:
      "Global Investment Visa & Residency by Investment Guide 2025 - Rankings, Tax Strategies & Golden Visa Funds",
  },
  ukBudget: {
    href: "/uk-autumn-budget-2025-british-hnwis-portugal-golden-visa-private-equity-funds",
    label:
      "UK Autumn Budget 2025: Why British HNWIs Are Pivoting to Portugal Golden Visa Private Equity Funds",
  },
  fundRoute: {
    href: "/portugal-golden-visa-fund-route-explained-minimum-investment-top-sectors",
    label: "Portugal Golden Visa Fund Route Explained: Minimum Investment & Top Sectors (2025)",
  },
  fundsVsRealEstate: {
    href: "/portugal-golden-visa-funds-vs-real-estate-2025-private-equity-playbook",
    label:
      "Portugal Golden Visa Funds vs Real Estate (2025): The Private Equity Playbook for Serious Investors",
  },
  peGrowthAI: {
    href: "/portugal-private-equity-growth-ai-golden-visa-bonus-2040",
    label: "Investing in Portugal Private Equity (2025): Productivity, AI and a Golden Visa Bonus",
  },
  gvPEdd: {
    href: "/portugal-golden-visa-private-equity-funds-due-diligence-2025-guide",
    label:
      "Portugal Golden Visa Private Equity Funds (2025): Due Diligence Checklist for Serious Investors",
  },
};

// FAQs para snippet
const FAQS = [
  {
    question: "What is a Portugal Golden Visa private equity fund list in 2025?",
    answer:
      "It is a categorisation of regulated Portugal Golden Visa funds that follow a private equity or alternative investment strategy, grouped by sector and risk profile rather than just by marketing brand names.",
  },
  {
    question: "How many categories of Portugal Golden Visa private equity funds are there?",
    answer:
      "Most offers fall into six broad categories: mid-market private equity and growth, venture and innovation, hospitality and tourism, green energy and sustainability, healthcare and life sciences, and infrastructure and industrial platforms.",
  },
  {
    question: "What is the typical minimum investment in a Portugal Golden Visa private equity fund?",
    answer:
      "For Golden Visa eligibility, investors generally need to commit at least €500,000 into one or more qualifying funds. Some non-Golden Visa share classes may accept smaller tickets.",
  },
  {
    question:
      "Are Portugal Golden Visa private equity funds suitable for UK, US or Canadian investors?",
    answer:
      "Yes, but each nationality faces different tax and reporting rules. Many UK, US and Canadian investors use these funds for EU residency and diversification, supported by specialised cross-border advice.",
  },
  {
    question: "How do I compare risk and return across Portugal Golden Visa fund categories?",
    answer:
      "Broadly, venture and innovation funds sit at the higher-risk, higher-volatility end of the spectrum, while core private equity, hospitality, infrastructure and some green energy strategies tend to target more moderate, longer-term returns. Each fund must be analysed individually using a due diligence framework.",
  },
  {
    question:
      "Should I choose a Portugal Golden Visa private equity fund instead of real estate?",
    answer:
      "Many investors now prefer funds because they are regulated, diversified and professionally managed. Others still use property for lifestyle reasons. The right choice depends on your risk profile, time horizon and how you already invest elsewhere.",
  },
  {
    question:
      "Can I diversify across several Portugal Golden Visa private equity funds?",
    answer:
      "If you want, you can split your €500,000+ allocation across more than one qualifying fund, as long as you maintain the total invested level required by the Golden Visa rules.",
  },
  {
    question: "What is the most important factor when selecting a Portugal Golden Visa fund?",
    answer:
      "The quality and alignment of the manager: track record, sector depth, governance, fee structure and how clearly they can explain their value-creation strategy.",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": CANONICAL_URL,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": CANONICAL_URL,
      },
      headline:
        "Portugal Golden Visa Private Equity Funds 2025 List: Categories, Strategies, Risks & Returns",
      description:
        "SEO-optimised 2025 guide to Portugal Golden Visa private equity funds. Explains the main fund categories, strategies, risk/return profiles and how global investors build a Golden Visa fund portfolio.",
      image: [OG_IMAGE],
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      author: {
        "@type": "Organization",
        name: "Golden Visa Explorer Investments Editorial Team",
      },
      publisher: {
        "@type": "Organization",
        name: "Explorer Investments",
        logo: {
          "@type": "ImageObject",
          url: "https://goldenvisashub.com/assets/images/logo-explorer.png",
        },
      },
      articleSection: [
        "Portugal Golden Visa",
        "Private Equity Funds",
        "Investment Funds",
        "Residency by Investment",
      ],
      keywords: [
        "Portugal Golden Visa private equity funds list 2025",
        "best Portugal Golden Visa funds",
        "Portugal Golden Visa investment funds categories",
        "private equity Golden Visa Portugal",
        "Portugal Golden Visa funds risks and returns",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://goldenvisashub.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Insights",
          item: "https://goldenvisashub.com/insights",
        },
        {
          "@type": "ListItem",
          position: 3,
          name:
            "Portugal Golden Visa Private Equity Funds 2025 List: Categories, Strategies, Risks & Returns",
          item: CANONICAL_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export const metadata = {
  title:
    "Portugal Golden Visa Private Equity Funds 2025 List: Categories, Strategies, Risks & Returns",
  description:
    "Looking for Portugal Golden Visa private equity funds in 2025? This list-style guide explains categories, strategies, risks and returns so you can structure a serious fund-based Golden Visa allocation.",
  openGraph: {
    title:
      "Portugal Golden Visa Private Equity Funds 2025 List: Categories, Strategies, Risks & Returns",
    description:
      "2025 playbook for investors searching for Portugal Golden Visa private equity funds. Understand the main fund categories, risk/return profiles and how to compare opportunities.",
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-sm sm:text-base text-[#002741] bg-[#FFFCF3] py-3 px-4 rounded-md my-6 shadow-sm">
    <p>{children}</p>
  </blockquote>
);

export default function PortugalGVPEFundsList2025Page() {
  return (
    <>
      <Script
        id="ld-json-portugal-gv-pe-funds-list-2025"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Hero */}
          <header>
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <BarChart size={16} /> Portugal Golden Visa • Private Equity Funds List 2025
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Portugal Golden Visa Private Equity Funds 2025 List: Categories, Strategies, Risks &
              Returns
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              If you&apos;re searching for{" "}
              <strong>“Portugal Golden Visa private equity funds”</strong> or{" "}
              <strong>“best Portugal Golden Visa funds 2025”</strong>, you&apos;re not alone.
              Fund-based Golden Visa routes have moved from niche to mainstream. This guide doesn&apos;t
              rank individual funds by name - instead, it gives you a{" "}
              <strong>practical list of fund categories, strategies and risk/return profiles</strong>{" "}
              so you can build your own Portugal Golden Visa fund shortlist like a professional
              investor.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#5A6F7B]">
              <div className="flex items-center gap-1">
                <ListChecks size={14} /> <span>Fund Categories &amp; Strategies</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#B4A77E]" />
              <div className="flex items-center gap-1">
                <TrendingUp size={14} /> <span>Private Equity Lens</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#B4A77E]" />
              <div className="flex items-center gap-1">
                <ShieldCheck size={14} /> <span>Golden Visa Compliance</span>
              </div>
            </div>
          </header>

          {/* TOC */}
          <nav
            aria-label="Table of contents"
            className="border border-[#E1E4EA] rounded-xl p-4 bg-[#F8FAFC] text-sm"
          >
            <p className="uppercase tracking-wide text-[11px] font-semibold text-[#6A7D8A] mb-2">
              In this playbook
            </p>
            <ol className="space-y-1">
              <li>
                <Link href="#context" className="hover:underline">
                  1. Why Portugal Golden Visa private equity funds dominate 2025
                </Link>
              </li>
              <li>
                <Link href="#categories-overview" className="hover:underline">
                  2. Overview: the main Portugal Golden Visa private equity fund categories
                </Link>
              </li>
              <li>
                <Link href="#category-details" className="hover:underline">
                  3. Category-by-category: strategies, risks &amp; return expectations
                </Link>
              </li>
              <li>
                <Link href="#matrix" className="hover:underline">
                  4. Comparison matrix: which Golden Visa fund category fits you?
                </Link>
              </li>
              <li>
                <Link href="#global-investors" className="hover:underline">
                  5. How US, UK and other global investors use these fund categories
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:underline">
                  6. Building a Portugal Golden Visa fund portfolio, not just picking a product
                </Link>
              </li>
              <li>
                <Link href="#due-diligence" className="hover:underline">
                  7. Due diligence: from category choice to specific fund selection
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:underline">
                  8. FAQ: Portugal Golden Visa private equity funds 2025
                </Link>
              </li>
            </ol>
          </nav>

          {/* Section 1 - Context */}
          <section id="context" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Why Portugal Golden Visa private equity funds dominate 2025
            </h2>
            <p>
              The Golden Visa used to be dominated by property. Today,{" "}
              <strong>regulated funds are the centre of gravity</strong>. The combination of
              programme changes, housing politics and global investor sophistication means that{" "}
              <strong>Portugal Golden Visa private equity funds</strong> now attract the majority of
              serious applications.
            </p>
            <p>
              Our articles on the{" "}
              <Link
                href={INTERNAL_ARTICLES.fundRoute.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                Golden Visa fund route and minimum investment
              </Link>{" "}
              and{" "}
              <Link
                href={INTERNAL_ARTICLES.fundsVsRealEstate.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                funds vs real estate
              </Link>{" "}
              explain how this transition happened and why funds are now the reference option for
              many HNWIs.
            </p>
            <Quote>
              In 2025, the real question is no longer “property or fund?” - it is{" "}
              <strong>“which Portugal Golden Visa fund category fits my strategy?”</strong>
            </Quote>
          </section>

          {/* Section 2 - Categories overview */}
          <section id="categories-overview" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Overview: the main Portugal Golden Visa private equity fund categories
            </h2>
            <p>
              Most offers that appear when you search “Portugal Golden Visa private equity funds”
              fall into a handful of categories:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Mid-market <strong>private equity &amp; growth capital</strong> funds;</li>
              <li><strong>Venture capital &amp; innovation</strong> funds;</li>
              <li><strong>Hospitality &amp; tourism</strong> investment funds;</li>
              <li><strong>Green energy &amp; sustainability</strong> funds;</li>
              <li><strong>Healthcare &amp; life sciences</strong> funds;</li>
              <li><strong>Infrastructure &amp; industrial</strong> platforms.</li>
            </ul>
            <p>
              The goal of this article is to help you understand what each category really implies
              in terms of <strong>strategy, risk, volatility and time horizon</strong> - and how it
              fits into Portugal&apos;s broader{" "}
              <Link
                href={INTERNAL_ARTICLES.peGrowthAI.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                productivity and AI-driven growth story
              </Link>
              .
            </p>
          </section>

          {/* Section 3 - Category details */}
          <section id="category-details" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Category-by-category: strategies, risks &amp; return expectations
            </h2>

            <h3 className="text-xl font-semibold mt-2">
              1. Mid-market private equity &amp; growth capital funds
            </h3>
            <p>
              These funds back <strong>established Portuguese companies</strong> in need of capital
              to expand, modernise or internationalise. They are often at the heart of a serious{" "}
              <Link
                href={INTERNAL_ARTICLES.peGrowthAI.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                Portugal private equity thesis
              </Link>
              .
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Strategy: growth capital, buy-and-build, operational improvement;</li>
              <li>Risk: moderate; focused on execution and company performance;</li>
              <li>Returns: target long-term capital appreciation over 7-10 years;</li>
              <li>Fit: investors used to private equity or alternatives in other markets.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-3">
              2. Venture capital &amp; innovation funds
            </h3>
            <p>
              These funds invest in <strong>earlier-stage technology and innovation companies</strong> -
              from SaaS and fintech to AI and digital infrastructure. They tap into Portugal&apos;s
              growing tech ecosystem.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Strategy: early-stage or growth-stage venture deals;</li>
              <li>Risk: higher; a few winners usually drive most returns;</li>
              <li>Returns: potential for outsized outcomes but with greater volatility;</li>
              <li>Fit: investors with a high risk appetite and long horizon.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-3">3. Hospitality &amp; tourism funds</h3>
            <p>
              Focused on <strong>hotels, resorts and tourism assets</strong>, often with an
              operational improvement angle. Portugal&apos;s tourism sector provides the demand
              backdrop.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Strategy: acquire, upgrade, reposition or develop hospitality assets;</li>
              <li>Risk: linked to tourism cycles and operating performance;</li>
              <li>Returns: target stable, income-linked or value-add outcomes;</li>
              <li>Fit: investors who like real assets but prefer diversified exposure over a single property.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-3">
              4. Green energy &amp; sustainability funds
            </h3>
            <p>
              These funds support the <strong>energy transition and sustainability projects</strong>:
              renewables, electrification, sustainable agriculture and environmental innovation.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Strategy: long-term infrastructure and project finance-style investments;</li>
              <li>Risk: policy, regulatory and project execution risk;</li>
              <li>Returns: often targeted as stable, long-term, yield-plus-growth profiles;</li>
              <li>Fit: ESG-minded investors looking for impact plus returns.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-3">
              5. Healthcare &amp; life sciences funds
            </h3>
            <p>
              Funds in this category back <strong>healthcare providers, life sciences and related
              infrastructure</strong> that benefit from demographic trends and international demand.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Strategy: growth and consolidation in health services and biotech;</li>
              <li>Risk: regulatory and sector-specific risk, mitigated by structural demand;</li>
              <li>Returns: often moderate to high, linked to successful scaling or exits;</li>
              <li>Fit: investors comfortable with specialised, regulated sectors.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-3">
              6. Infrastructure &amp; industrial platforms
            </h3>
            <p>
              These funds support <strong>logistics, warehousing, industrial parks and related
              infrastructure</strong> that serve Portugal&apos;s role in European supply chains.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Strategy: long-term assets with clear industrial use cases;</li>
              <li>Risk: linked to economic cycles and tenant demand, often with contracted revenues;</li>
              <li>Returns: target stable, moderate returns over long horizons;</li>
              <li>Fit: investors looking for core-plus style exposure in a growing EU market.</li>
            </ul>
          </section>

          {/* Section 4 - Matrix */}
          <section id="matrix" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Comparison matrix: which Golden Visa fund category fits you?
            </h2>
            <p>
              The table below summarises <strong>risk/return and investor fit</strong> across the
              main Portugal Golden Visa private equity fund categories.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[#E1E4EA] rounded-xl overflow-hidden">
                <thead className="bg-[#F8FAFC]">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-[#4A5C69]">Category</th>
                    <th className="px-3 py-2 text-left font-semibold text-[#4A5C69]">Risk Level</th>
                    <th className="px-3 py-2 text-left font-semibold text-[#4A5C69]">
                      Typical Horizon
                    </th>
                    <th className="px-3 py-2 text-left font-semibold text-[#4A5C69]">
                      Investor Fit
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1E4EA]">
                  <tr>
                    <td className="px-3 py-2 font-semibold">
                      Private equity &amp; growth capital
                    </td>
                    <td className="px-3 py-2">Medium</td>
                    <td className="px-3 py-2">7-10 years</td>
                    <td className="px-3 py-2">Investors used to PE or alternatives</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold">
                      Venture capital &amp; innovation
                    </td>
                    <td className="px-3 py-2">High</td>
                    <td className="px-3 py-2">8-10+ years</td>
                    <td className="px-3 py-2">High risk appetite, tech focus</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold">
                      Hospitality &amp; tourism
                    </td>
                    <td className="px-3 py-2">Medium</td>
                    <td className="px-3 py-2">7-10 years</td>
                    <td className="px-3 py-2">Real assets-oriented investors</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold">
                      Green energy &amp; sustainability
                    </td>
                    <td className="px-3 py-2">Medium</td>
                    <td className="px-3 py-2">8-12 years</td>
                    <td className="px-3 py-2">ESG/impact-focused investors</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold">
                      Healthcare &amp; life sciences
                    </td>
                    <td className="px-3 py-2">Medium-High</td>
                    <td className="px-3 py-2">7-10 years</td>
                    <td className="px-3 py-2">Investors comfortable with specialised sectors</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold">
                      Infrastructure &amp; industrial
                    </td>
                    <td className="px-3 py-2">Medium</td>
                    <td className="px-3 py-2">8-12 years</td>
                    <td className="px-3 py-2">Long-term, core-plus style investors</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              For the structural macro context behind these categories, read{" "}
              <Link
                href={INTERNAL_ARTICLES.peGrowthAI.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.peGrowthAI.label}
              </Link>
              , which shows how productivity, electrification and AI adoption could drive Portugal&apos;s
              long-term growth - and why private equity-style funds are one of the main ways to
              access that story.
            </p>
          </section>

          {/* Section 5 - Global investors */}
          <section id="global-investors" className="space-y-4">
            <h2 className="text-2xl font-bold">
              How US, UK and other global investors use these fund categories
            </h2>
            <p>
              Different investor groups approach the Portugal Golden Visa fund list with{" "}
              <strong>different priorities</strong>:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>UK investors</strong> often arrive via{" "}
                <Link
                  href={INTERNAL_ARTICLES.ukBudget.href}
                  className="text-[#0D4F7C] underline hover:no-underline"
                >
                  concerns around the Autumn Budget
                </Link>{" "}
                and look for regulated, moderate-risk private equity or infrastructure allocations.
              </li>
              <li>
                <strong>Investors from North America and other developed markets</strong> use funds
                as a way to gain <strong>EUR exposure, EU residency and sector diversification</strong>.
              </li>
              <li>
                <strong>Global HNWIs and family offices</strong> tend to combine{" "}
                <Link
                  href={INTERNAL_ARTICLES.globalGuide.href}
                  className="text-[#0D4F7C] underline hover:no-underline"
                >
                  global residency planning
                </Link>{" "}
                with a broader alternatives portfolio that includes Portugal along other PE
                allocations.
              </li>
            </ul>
            <Quote>
              The best use of this &quot;fund list&quot; is not to pick the most fashionable category, but to{" "}
              <strong>match categories to your existing portfolio, risk profile and residency plan</strong>.
            </Quote>
          </section>

          {/* Section 6 - Portfolio construction */}
          <section id="portfolio" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Building a Portugal Golden Visa fund portfolio, not just picking a product
            </h2>
            <p>
              Many investors initially approach Portugal Golden Visa funds as if they needed to
              pick <strong>one “best” product</strong>. A more robust approach is to think in terms
              of a <strong>small portfolio of complementary strategies</strong> that together reach
              the €500,000+ Golden Visa threshold.
            </p>
            <p>For example, an investor might combine:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>One core private equity or growth capital fund;</li>
              <li>One exposure to green energy or infrastructure;</li>
              <li>Optional smaller exposure to innovation or healthcare, depending on risk appetite.</li>
            </ul>
            <p>
              Our guide on the{" "}
              <Link
                href={INTERNAL_ARTICLES.fundRoute.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                mechanics of the fund route
              </Link>{" "}
              explains how multi-fund allocations can still work within Golden Visa rules as long as
              the minimum investment and holding period are respected.
            </p>
          </section>

          {/* Section 7 - Due diligence */}
          <section id="due-diligence" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Due diligence: from category choice to specific fund selection
            </h2>
            <p>
              Once you have decided which <strong>categories</strong> of Portugal Golden Visa
              private equity funds fit your profile, the next step is to select specific funds with
              a professional level of due diligence.
            </p>
            <p>Key questions to ask include:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>What is the manager&apos;s track record in this category?</li>
              <li>How concentrated or diversified is the planned portfolio?</li>
              <li>How are fees, carry and costs structured and aligned?</li>
              <li>What does governance and reporting look like?</li>
              <li>How solid is the Golden Visa compliance framework?</li>
            </ul>
            <p>
              For a detailed checklist, use{" "}
              <Link
                href={INTERNAL_ARTICLES.gvPEdd.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.gvPEdd.label}
              </Link>
              , which is designed specifically for investors comparing Portugal Golden Visa private
              equity funds.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-4">
            <h2 className="text-2xl font-bold">
              FAQ: Portugal Golden Visa private equity funds 2025
            </h2>
            <p className="text-sm text-[#5A6F7B]">
              These questions reflect what investors most often ask when they search for a Portugal
              Golden Visa private equity fund list and start building their own shortlist.
            </p>

            <div className="divide-y divide-[#E1E4EA] border border-[#E1E4EA] rounded-xl">
              {FAQS.map((faq) => (
                <details key={faq.question} className="group p-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="font-semibold text-sm sm:text-base">{faq.question}</span>
                    <span className="ml-4 text-xs text-[#6A7D8A] group-open:hidden">+</span>
                    <span className="ml-4 text-xs text-[#6A7D8A] hidden group-open:inline">−</span>
                  </summary>
                  <div className="mt-2 text-sm text-[#15364A] leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              Next step: turn the Portugal Golden Visa fund list into a real allocation plan
            </h2>
            <p>
              A generic “best funds” list will never replace{" "}
              <strong>a tailored allocation that matches your capital, risk profile and residency
              goals</strong>. The value of understanding categories, strategies and risk levels is
              that you can construct a portfolio rather than chase headlines.
            </p>
            <p>
              The articles in this series - from the{" "}
              <Link
                href={INTERNAL_ARTICLES.globalGuide.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                global residency guide
              </Link>{" "}
              to the{" "}
              <Link
                href={INTERNAL_ARTICLES.fundRoute.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                fund route explanation
              </Link>{" "}
              and{" "}
              <Link
                href={INTERNAL_ARTICLES.gvPEdd.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                due diligence checklist
              </Link>{" "}
              - are designed to give you the vocabulary and framework to do exactly that.
            </p>
            <p className="font-semibold">
              If you are ready to move from researching Portugal Golden Visa private equity funds to
              designing a concrete allocation, the next step is a structured discussion around your
              objectives, constraints and preferred fund categories.
            </p>
          </section>

          <CtaSection />
        </div>
      </section>

      {/* Related posts from RSS feed */}
      <BlogPreviewGridFromXML currentSlug={SLUG} />

      <Footer />
    </>
  );
}
