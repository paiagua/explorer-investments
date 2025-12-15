// ✅ Article: Portugal Golden Visa 2025 - Complete Guide to the Investment Fund Route
// Fully styled, SEO-focused and aligned with Explorer Investments positioning

import React from "react";
import Script from "next/script";
import Link from "next/link";
import Header from "@/components/Menu";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import BlogPreviewGridFromXML from "@/components/BlogPreviewGridFromXML";

import { Globe, TrendingUp, ShieldCheck, BarChart } from "lucide-react";

export const revalidate = 600;
export const fetchCache = "force-cache";

// ===================================================================
// CONSTANTS & INTERNAL LINKBUILDING
// ===================================================================

const SLUG = "portugal-golden-visa-fund-route-complete-guide-2025";
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  "https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-fund-route-complete-guide-2025.jpg";
const PUBLISHED = "2025-11-24T09:00:00+00:00";

const INTERNAL_ARTICLES = {
  truthFundRoute: {
    href: "/portugal-golden-visa-2025-truth-fund-route",
    label: "Portugal Golden Visa 2025: The Truth About the Fund Route (Not Real Estate)",
  },
  explorerFund: {
    href: "/portugal-golden-visa-explorer-investments",
    label: "Portugal Golden Visa 2025 | Invest with Explorer Investments Fund",
  },
  exploreRetirement: {
    href: "/portugal-golden-visa-2025-explore-fund-best-retirement-destination",
    label:
      "Portugal Golden Visa 2025: Explore Fund Route and #1 European Retirement Destination",
  },
  completeGuide: {
    href: "/portugal-golden-visa-complete-guide-2025",
    label: "The Portugal Golden Visa: Your Complete 2025 Guide to EU Residency",
  },
  bestEuRouteAfterSpain: {
    href: "/portugal-golden-visa-2025-best-eu-investment-route",
    label: "Portugal Golden Visa 2025: Best EU Investment Route After Spain Closes Doors",
  },
};

// FAQs - optimised for featured snippets
const FAQS = [
  {
    question: "What is the Portugal Golden Visa fund route in 2025?",
    answer:
      "The fund route allows you to obtain Portuguese residency by subscribing at least €500,000 into a regulated investment fund that is authorised to invest in Portugal. Instead of buying a single property, you hold units in a professionally managed vehicle.",
  },
  {
    question: "How much do I need to invest in a Golden Visa fund?",
    answer:
      "Most Golden Visa-eligible funds require a minimum investment of €500,000, in line with the legal thresholds. Some structures allow staged capital calls, but eligibility is always tied to your total committed amount.",
  },
  {
    question: "Is the fund route safer than buying property for the Golden Visa?",
    answer:
      "Safety depends on execution. With a regulated fund you benefit from diversification, professional management and regulatory oversight. With a single property, you carry more concentrated market and liquidity risk.",
  },
  {
    question: "How long do I need to keep my Golden Visa fund investment?",
    answer:
      "You must maintain the eligible investment for the entire period required by law to keep your Golden Visa status and progress through renewals. In practice, investors should think in terms of a 7-10 year horizon.",
  },
  {
    question: "Can my family be included under a single Golden Visa fund investment?",
    answer:
      "Yes. Qualifying dependants such as a spouse, minor children and in some cases dependent parents can be included under one principal investor, provided all documentation and relationship criteria are met.",
  },
  {
    question: "Do I need to live full time in Portugal if I use the fund route?",
    answer:
      "No. One of the core advantages of the Portugal Golden Visa is its low minimum stay requirement, which is typically just a few weeks spread across each multi-year residency period. You do not need to relocate full time.",
  },
  {
    question: "What kind of assets do Golden Visa funds invest in?",
    answer:
      "Golden Visa funds can invest in private equity, growth capital, infrastructure, venture, listed securities or mixed strategies, as long as they comply with Portuguese regulations and programme criteria.",
  },
  {
    question: "Why work with Explorer Investments for the Golden Visa fund route?",
    answer:
      "Explorer Investments applies an institutional private equity mindset to Golden Visa strategies, focusing on real underlying value in the Portuguese economy rather than speculative property cycles.",
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
      headline: "Portugal Golden Visa 2025: Complete Guide to the Investment Fund Route",
      description:
        "Step-by-step guide to the Portugal Golden Visa fund route in 2025: eligibility, minimum investment, timelines, risks and how Explorer Investments structures private equity-style solutions.",
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
        "Golden Visa Portugal",
        "Investment Funds",
        "Residency by Investment",
        "Private Equity",
      ],
      keywords: [
        "Portugal Golden Visa fund route",
        "Golden Visa 2025 guide",
        "Golden Visa investment fund",
        "Explorer Investments Golden Visa",
        "Portugal residency by investment",
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
          name: "Portugal Golden Visa Fund Route Guide 2025",
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
  title: "Portugal Golden Visa 2025 - Complete Guide to the Investment Fund Route",
  description:
    "Definitive 2025 guide to the Portugal Golden Visa fund route: minimum investment, legal rules, timelines, risks, tax considerations and how Explorer Investments structures regulated fund strategies.",
  openGraph: {
    title: "Portugal Golden Visa 2025 - Complete Fund Route Guide",
    description:
      "Understand exactly how the Portugal Golden Visa investment fund route works in 2025, and why private equity-style strategies led by Explorer Investments are at the core of serious plans.",
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

// ===================================================================
// Helper components
// ===================================================================

const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-sm sm:text-base text-[#002741] bg-[#FFFCF3] py-3 px-4 rounded-md my-6 shadow-sm">
    <p>{children}</p>
  </blockquote>
);

// ===================================================================
// Page
// ===================================================================

export default function PortugalGoldenVisaFundRouteGuide2025() {
  return (
    <>
      {/* JSON-LD for Article + FAQ + Breadcrumbs */}
      <Script
        id="ld-json-gv-fund-route-guide-2025"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <Header />

      {/* === Article === */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Hero */}
          <header>
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <ShieldCheck size={16} /> Golden Visa Fund Route • 2025
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Portugal Golden Visa 2025: Complete Guide to the Investment Fund Route
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              Real estate is no longer the main story. In 2025, serious investors are using{" "}
              <strong>regulated Portuguese funds</strong> as their primary route to residency. This
              guide walks you through how the fund route works, what has changed in the law and how
              Explorer Investments structures private equity-style strategies for Golden Visa
              clients.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#5A6F7B]">
              <div className="flex items-center gap-1">
                <Globe size={14} /> <span>Portugal • Residency by Investment</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#B4A77E]" />
              <div className="flex items-center gap-1">
                <BarChart size={14} /> <span>Fund Route • 500k€ Minimum</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#B4A77E]" />
              <div className="flex items-center gap-1">
                <TrendingUp size={14} /> <span>Explorer Investments</span>
              </div>
            </div>
          </header>

          {/* Table of contents */}
          <nav
            aria-label="Table of contents"
            className="border border-[#E1E4EA] rounded-xl p-4 bg-[#F8FAFC] text-sm"
          >
            <p className="uppercase tracking-wide text-[11px] font-semibold text-[#6A7D8A] mb-2">
              In this guide
            </p>
            <ol className="space-y-1">
              <li>
                <Link href="#overview" className="hover:underline">
                  1. Why the fund route is now the core Golden Visa path
                </Link>
              </li>
              <li>
                <Link href="#requirements" className="hover:underline">
                  2. Legal requirements and minimum investment
                </Link>
              </li>
              <li>
                <Link href="#fund-types" className="hover:underline">
                  3. Types of Golden Visa funds and strategies
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:underline">
                  4. Step-by-step process: from capital to residence card
                </Link>
              </li>
              <li>
                <Link href="#tax" className="hover:underline">
                  5. High-level tax considerations
                </Link>
              </li>
              <li>
                <Link href="#risk" className="hover:underline">
                  6. Risks, timelines and law stability
                </Link>
              </li>
              <li>
                <Link href="#manager" className="hover:underline">
                  7. How Explorer Investments approaches Golden Visa funds
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:underline">
                  8. Frequently asked questions (FAQ)
                </Link>
              </li>
            </ol>
          </nav>

          {/* SECTION: Overview */}
          <section id="overview" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Why the fund route is now the core Portugal Golden Visa path
            </h2>
            <p>
              Since recent legislative reforms, the Portuguese government has clearly shifted the
              Golden Visa away from one-off real estate transactions and towards{" "}
              <strong>productive, regulated investment</strong>. For high-net-worth families, that
              has made the{" "}
              <strong>investment fund route the primary way to qualify for the programme</strong>.
            </p>
            <p>
              If you still think of the Golden Visa as “buying an apartment and getting a
              residence”, start with{" "}
              <Link
                href={INTERNAL_ARTICLES.truthFundRoute.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.truthFundRoute.label}
              </Link>
              . It explains why direct real estate is no longer the main route and why funds now
              lead the way.
            </p>
            <Quote>
              The modern Portugal Golden Visa is best understood as a{" "}
              <strong>long-term capital allocation decision</strong> - with EU residency as the
              strategic by-product, not the only objective.
            </Quote>
            <p>
              In this article we focus exclusively on the fund route and how a private equity-style
              approach, led by managers like Explorer Investments, can align investment and
              residency outcomes.
            </p>
          </section>

          {/* SECTION: Requirements */}
          <section id="requirements" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Legal requirements and minimum investment for the fund route
            </h2>
            <p>
              The core Golden Visa fund requirement is simple:{" "}
              <strong>subscribe at least €500,000 of units</strong> in a qualifying investment fund
              that is authorised to invest in Portugal and meets specific regulatory criteria.
            </p>
            <p>In practice, investors should expect that:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                The fund is supervised by the Portuguese regulator and works with a licensed
                depositary bank;
              </li>
              <li>
                At least the required portion of assets is invested in Portuguese companies or
                projects;
              </li>
              <li>
                The structure is compatible with Golden Visa documentation and reporting needs;
              </li>
              <li>
                The investment is held over the full residency timeline, usually 7-10 years.
              </li>
            </ul>
            <p>
              For a broader look at overall eligibility rules, family inclusion and the AIMA
              (formerly SEF) process, see{" "}
              <Link
                href={INTERNAL_ARTICLES.completeGuide.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.completeGuide.label}
              </Link>
              .
            </p>
          </section>

          {/* SECTION: Fund types */}
          <section id="fund-types" className="space-y-4">
            <h2 className="text-2xl font-bold">Types of Golden Visa funds and strategies</h2>
            <p>
              Not all Golden Visa funds are the same. Under the “fund” label you will find{" "}
              <strong>very different strategies</strong>, from conservative income funds to higher
              growth private equity vehicles.
            </p>
            <p>Common strategy buckets include:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Private equity</strong> - investing directly in unlisted Portuguese
                companies, often with active value-creation plans;
              </li>
              <li>
                <strong>Growth and expansion capital</strong> - backing scaling businesses and
                platforms;
              </li>
              <li>
                <strong>Infrastructure and real assets</strong> - long-duration, cash-yielding
                projects;
              </li>
              <li>
                <strong>Hybrid or multi-strategy vehicles</strong> - mixing listed and unlisted
                exposure.
              </li>
            </ul>
            <p>
              Articles like{" "}
              <Link
                href={INTERNAL_ARTICLES.exploreRetirement.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.exploreRetirement.label}
              </Link>{" "}
              highlight how Golden Visa investors increasingly pair residency objectives with genuine
              retirement and lifestyle planning in Portugal.
            </p>
          </section>

          {/* SECTION: Process */}
          <section id="process" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Step-by-step: from subscription to residence card
            </h2>
            <p>
              Every investor’s journey is unique, but the fund route usually follows a clear
              sequence:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Strategic consultation</strong> - Clarify objectives, timelines, family
                composition and risk appetite with your advisor and fund manager.
              </li>
              <li>
                <strong>Fund selection</strong> - Analyse strategy, track record, fees, governance
                and exit pathways; read the prospectus or PPM carefully.
              </li>
              <li>
                <strong>Account opening &amp; KYC</strong> - Complete onboarding with the bank,
                depositary and management company.
              </li>
              <li>
                <strong>Subscription &amp; capital transfer</strong> - Sign subscription documents
                and wire capital into the fund structure.
              </li>
              <li>
                <strong>Golden Visa application</strong> - File your residence-by-investment
                application, using the fund documentation as proof of investment.
              </li>
              <li>
                <strong>Biometrics, approvals &amp; renewals</strong> - Attend biometrics, receive
                cards and maintain both the investment and minimum stay requirements.
              </li>
              <li>
                <strong>Long-term planning &amp; exit</strong> - Decide whether to progress towards
                permanent residency or citizenship, and plan for eventual fund exit.
              </li>
            </ol>
            <p>
              For context on how Portugal compares to other EU routes after Spain’s changes, see{" "}
              <Link
                href={INTERNAL_ARTICLES.bestEuRouteAfterSpain.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.bestEuRouteAfterSpain.label}
              </Link>
              .
            </p>
          </section>

          {/* SECTION: Tax */}
          <section id="tax" className="space-y-4">
            <h2 className="text-2xl font-bold">High-level tax considerations</h2>
            <p>
              Tax is always jurisdiction-specific and you should obtain{" "}
              <strong>independent advice</strong> in both your home country and Portugal. However,
              there are a few general principles Golden Visa fund investors should be aware of:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Holding a Golden Visa does not automatically make you a Portuguese tax resident -
                that depends on days spent and centre-of-life tests;
              </li>
              <li>
                Fund income and gains may be treated differently from direct property income,
                including in cross-border treaty contexts;
              </li>
              <li>
                Portugal has specific regimes that can be attractive for new residents, but they
                must be analysed against your existing structures.
              </li>
            </ul>
            <p>
              The right structure for a US family is not always the right structure for a UK,
              Brazilian or Middle Eastern family. This is where working with seasoned managers and
              specialised advisors is critical.
            </p>
          </section>

          {/* SECTION: Risk */}
          <section id="risk" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Risks, timelines and the importance of thinking long term
            </h2>
            <p>
              No Golden Visa route - fund or otherwise - is risk free. Investors should be clear
              about the main categories of risk:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Market and execution risk at the fund and asset level;</li>
              <li>Liquidity risk and the timing of distributions and exits;</li>
              <li>Legal and policy risk around residency rules over time;</li>
              <li>Operational risk around documentation, renewals and compliance.</li>
            </ul>
            <Quote>
              The most resilient Golden Visa strategies are the ones built on{" "}
              <strong>sound investments that you would still consider even without the visa</strong>.
            </Quote>
            <p>
              This is one of the reasons why many investors select{" "}
              <Link
                href={INTERNAL_ARTICLES.explorerFund.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.explorerFund.label}
              </Link>{" "}
              - they want their capital stewarded by an established private equity house with deep
              roots in the Portuguese market.
            </p>
          </section>

          {/* SECTION: Manager / Explorer */}
          <section id="manager" className="space-y-4">
            <h2 className="text-2xl font-bold">
              How Explorer Investments approaches Golden Visa fund strategies
            </h2>
            <p>
              Explorer Investments is not a passport factory. It is a{" "}
              <strong>private equity and alternative investment manager</strong> with more than two
              decades of experience in Portugal. Golden Visa strategies are built on the same
              principles used for institutional clients:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Deep sector and local market knowledge;</li>
              <li>Disciplined sourcing, due diligence and structuring;</li>
              <li>Hands-on value creation in portfolio companies;</li>
              <li>Clear exit planning and capital recycling.</li>
            </ul>
            <p>
              For many HNW families, this combination -{" "}
              <strong>EU residency plus private equity exposure</strong> via a regulated fund - is
              more compelling than a single leveraged apartment in a crowded city centre.
            </p>
          </section>

          {/* SECTION: FAQ */}
          <section id="faq" className="space-y-4">
            <h2 className="text-2xl font-bold">Frequently asked questions</h2>
            <p className="text-sm text-[#5A6F7B]">
              Below we summarise some of the key questions investors ask when evaluating the fund
              route to the Portugal Golden Visa.
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

          {/* Conclusion / CTA */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              Next step: align your Golden Visa with a serious fund strategy
            </h2>
            <p>
              The Portugal Golden Visa fund route is now the backbone of the programme. It is where
              policy, regulation and investor expectations meet. For high-net-worth families, the
              question is no longer “funds or property?”, but rather{" "}
              <strong>which fund, which manager and which long-term plan</strong>.
            </p>
            <p>
              If you want to explore how a Golden Visa fund allocation could fit your global
              portfolio, the Explorer Investments team is ready to map out the options with you.
            </p>
            <p className="font-semibold">
              Book a strategy conversation to review structures, timelines and a fund-first approach
              to EU residency.
            </p>
          </section>

          <CtaSection />
        </div>
      </section>

      {/* Related insights from RSS feed */}
      <BlogPreviewGridFromXML currentSlug={SLUG} />

      <Footer />
    </>
  );
}
