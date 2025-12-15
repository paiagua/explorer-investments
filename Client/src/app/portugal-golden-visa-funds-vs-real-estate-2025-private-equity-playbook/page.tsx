// Portugal Golden Visa Funds vs Real Estate (2025): The Private Equity Playbook for Serious Investors

import React from "react";
import Script from "next/script";
import Link from "next/link";
import Header from "@/components/Menu";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import BlogPreviewGridFromXML from "@/components/BlogPreviewGridFromXML";
import { BarChart, Building2, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";

export const revalidate = 600;
export const fetchCache = "force-cache";

const SLUG =
  "portugal-golden-visa-funds-vs-real-estate-2025-private-equity-playbook";
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  "https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-funds-vs-real-estate-2025-private-equity-playbook.jpg";
const PUBLISHED = "2025-11-24T19:00:00+00:00";

// Internal linkbuilding
const INTERNAL_ARTICLES = {
  fundRoute: {
    href: "/portugal-golden-visa-fund-route-complete-guide-2025",
    label: "Portugal Golden Visa 2025 - Complete Guide to the Investment Fund Route",
  },
  fundSectors: {
    href: "/how-to-invest-in-private-equity-2025-complete-beginners-guide",
    label: "Portugal Golden Visa Fund Route Explained: Minimum Investment & Top Sectors",
  },
  fundFees: {
    href: "/portugal-golden-visa-fund-fees-costs-returns-2025-guide",
    label: "Portugal Golden Visa Fund Costs, Fees & Returns (2025 Guide)",
  },
  globalGuide: {
    href: "/global-investment-visa-residency-by-investment-guide-2025-golden-visa-funds-tax-strategies",
    label:
      "Global Investment Visa & Residency by Investment Guide 2025 - Rankings, Tax Strategies & Golden Visa Funds",
  },
  bestPrograms: {
    href: "/best-residency-golden-visa-programs-2025-global-ranking",
    label: "Best Residency and Golden Visa Programs 2025 - Global Ranking (Why Portugal Still Leads)",
  },
  explorerFund: {
    href: "/portugal-golden-visa-explorer-investments",
    label: "Portugal Golden Visa 2025 | Invest with Explorer Investments Fund",
  },
  ukBudgetArticle: {
    href: "/uk-autumn-budget-2025-british-hnwis-portugal-golden-visa-private-equity-funds",
    label:
      "UK Autumn Budget 2025: Why British HNWIs Are Pivoting to Portugal Golden Visa Private Equity Funds",
  },
  canadaArticle: {
    href: "/portugal-golden-visa-canadians-fund-route-2025-guide",
    label: "Portugal Golden Visa for Canadians (2025): Fund Route, Tax Considerations & Long-Term Plan B",
  },
};

// FAQ
const FAQS = [
  {
    question: "Is real estate still eligible for the Portugal Golden Visa in 2025?",
    answer:
      "The programme has been refocused away from simple residential property purchases toward regulated, productive investment - particularly investment funds. Investors should rely on up-to-date legal advice, but the cleanest, future-proof route is now via regulated funds rather than buying an apartment.",
  },
  {
    question: "Why are most serious investors choosing fund-based Golden Visa strategies?",
    answer:
      "Because regulated funds provide diversification, professional management, clear exit timelines and stronger alignment with the long-term evolution of the programme. They also avoid the operational complexity and political sensitivity associated with residential real estate.",
  },
  {
    question: "What is the minimum investment for Portugal Golden Visa funds?",
    answer:
      "The minimum Golden Visa-eligible investment is €500,000 into one or more qualifying funds that comply with the programme’s rules and are properly regulated and audited.",
  },
  {
    question: "Are Golden Visa funds riskier than buying a single property?",
    answer:
      "They are different. Funds tend to spread capital across multiple assets and companies, which reduces single-asset risk but introduces market and execution risk. The key is to assess manager quality, strategy and governance rather than assuming that property is always safer.",
  },
  {
    question: "Can I mix real estate for lifestyle with a Golden Visa fund for residency?",
    answer:
      "Many investors do exactly this: they choose a Golden Visa fund to meet residency rules and then buy or rent property purely on lifestyle and financial merit, without relying on it for programme eligibility.",
  },
  {
    question: "How do I evaluate a Portugal Golden Visa fund manager?",
    answer:
      "Use the same lens as an institutional LP: track record, sector expertise, alignment, co-investment, governance, transparency on fees and realistic net-of-fee performance expectations.",
  },
  {
    question: "How long do I need to stay invested in a Golden Visa fund?",
    answer:
      "Most strategies require a 7-10 year horizon, which covers both fund value-creation cycles and the minimum holding period needed for residency and potential long-term status.",
  },
  {
    question: "Why work with Explorer Investments specifically?",
    answer:
      "Explorer Investments is an established Portuguese private equity and alternative investment manager with deep local experience, regulated fund structures and a focus on building long-term value in the real economy, not simply selling a visa.",
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
        "Portugal Golden Visa Funds vs Real Estate (2025): The Private Equity Playbook for Serious Investors",
      description:
        "Deep-dive comparison of Portugal Golden Visa funds vs direct real estate in 2025. Explains why serious investors are shifting to regulated private equity-style funds, how both options work, and how to evaluate Golden Visa fund opportunities.",
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
        "Real Estate",
        "Residency by Investment",
        "Wealth Planning",
      ],
      keywords: [
        "Portugal Golden Visa funds vs real estate",
        "Golden Visa fund route 2025",
        "Portugal Golden Visa private equity",
        "investment visa Portugal property vs fund",
        "best Portugal Golden Visa funds",
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
          name: "Portugal Golden Visa Funds vs Real Estate (2025): The Private Equity Playbook for Serious Investors",
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
    "Portugal Golden Visa Funds vs Real Estate (2025): The Private Equity Playbook for Serious Investors",
  description:
    "2025 comparison of Portugal Golden Visa funds vs direct real estate. Learn why serious investors are pivoting to regulated private equity-style Golden Visa funds, how the fund route works and how to evaluate opportunities.",
  openGraph: {
    title:
      "Portugal Golden Visa Funds vs Real Estate (2025): The Private Equity Playbook for Serious Investors",
    description:
      "Considering Portugal Golden Visa via property or fund? This 2025 playbook explains the trade-offs between real estate and private equity-style funds, and why regulated Golden Visa funds are becoming the preferred route.",
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

export default function PortugalGoldenVisaFundsVsRealEstate2025Page() {
  return (
    <>
      <Script
        id="ld-json-gv-funds-vs-real-estate-2025"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Hero */}
          <header>
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <BarChart size={16} /> Portugal Golden Visa • Funds vs Real Estate
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Portugal Golden Visa Funds vs Real Estate (2025): The Private Equity Playbook for
              Serious Investors
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              For years, “Golden Visa” meant “buy a flat by the sea”. In 2025, serious investors are
              playing a different game. As Portugal’s programme pivots toward{" "}
              <strong>regulated, fund-based investment</strong>, high-net-worth families are asking a
              sharper question: <strong>Should my Golden Visa be a property or a private equity-style fund?</strong>
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#5A6F7B]">
              <div className="flex items-center gap-1">
                <Building2 size={14} /> <span>Real Estate vs Funds</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#B4A77E]" />
              <div className="flex items-center gap-1">
                <TrendingUp size={14} /> <span>Private Equity Perspective</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#B4A77E]" />
              <div className="flex items-center gap-1">
                <ShieldCheck size={14} /> <span>Regulated Golden Visa Route</span>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          <nav
            aria-label="Table of contents"
            className="border border-[#E1E4EA] rounded-xl p-4 bg-[#F8FAFC] text-sm"
          >
            <p className="uppercase tracking-wide text-[11px] font-semibold text-[#6A7D8A] mb-2">
              In this playbook
            </p>
            <ol className="space-y-1">
              <li>
                <Link href="#myth" className="hover:underline">
                  1. The old myth: Golden Visa means buying a property
                </Link>
              </li>
              <li>
                <Link href="#real-estate" className="hover:underline">
                  2. Direct real estate: what the glossy brochures don&apos;t show
                </Link>
              </li>
              <li>
                <Link href="#funds" className="hover:underline">
                  3. Golden Visa funds: how private equity-style structures work
                </Link>
              </li>
              <li>
                <Link href="#comparison" className="hover:underline">
                  4. Side-by-side: funds vs real estate for Golden Visa
                </Link>
              </li>
              <li>
                <Link href="#profiles" className="hover:underline">
                  5. Who should choose what? Investor profiles and decision drivers
                </Link>
              </li>
              <li>
                <Link href="#due-diligence" className="hover:underline">
                  6. How to evaluate Golden Visa funds like an institutional LP
                </Link>
              </li>
              <li>
                <Link href="#explorer" className="hover:underline">
                  7. How Explorer applies the private equity playbook to Golden Visa funds
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:underline">
                  8. FAQ: Portugal Golden Visa funds vs real estate
                </Link>
              </li>
            </ol>
          </nav>

          {/* Section 1 - Myth */}
          <section id="myth" className="space-y-4">
            <h2 className="text-2xl font-bold">
              The old myth: Golden Visa means buying a property
            </h2>
            <p>
              For most of the last decade, the default Golden Visa strategy was simple:{" "}
              <strong>buy a qualifying property, rent it out and wait</strong>. It was a product
              built around residential speculation, not long-term capital allocation.
            </p>
            <p>
              As housing pressures grew, policymakers across Europe began to ask whether that model
              still made sense. Portugal’s answer was clear:{" "}
              <strong>shift the programme towards productive, regulated investment</strong>, with
              fund-based structures at the core.
            </p>
            <p>
              Our{" "}
              <Link
                href={INTERNAL_ARTICLES.globalGuide.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                global residency and investment visa guide
              </Link>{" "}
              shows how this pattern is repeating worldwide: governments want capital that builds
              businesses and infrastructure, not simply pushes up local property prices.
            </p>
            <Quote>
              In 2025, the real choice for sophisticated Portugal Golden Visa investors is not “which
              flat?” but <strong>“which fund, with which manager, in which sectors?”</strong>
            </Quote>
          </section>

          {/* Section 2 - Real estate pain points */}
          <section id="real-estate" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Direct real estate: what the glossy brochures don&apos;t show
            </h2>
            <p>
              Property can be a legitimate part of any portfolio. But the traditional Golden Visa
              real estate route comes with frictions that many investors underestimate:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Operational complexity</strong> - renovations, tenants, maintenance and
                local property taxes;
              </li>
              <li>
                <strong>Concentration risk</strong> - a single asset in a single city, often in a
                narrow segment of the market;
              </li>
              <li>
                <strong>Political sensitivity</strong> - housing affordability is a hot topic in
                many destinations, creating reputational and regulatory risk;
              </li>
              <li>
                <strong>Exit uncertainty</strong> - property cycles do not always line up neatly
                with Golden Visa timelines.
              </li>
            </ul>
            <p>
              For UK and Canadian investors already overexposed to property at home, adding a
              leveraged apartment in another market can feel less like diversification and more like
              <strong> doubling down on the same bet</strong>.
            </p>
            <p>
              If you still want lifestyle property in Portugal, a common strategy is to{" "}
              <strong>separate the decisions</strong>: use a fund for eligibility, and buy or rent
              property purely on its own merits - without linking residency to one specific asset.
            </p>
          </section>

          {/* Section 3 - Funds */}
          <section id="funds" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Golden Visa funds: how private equity-style structures work
            </h2>
            <p>
              Golden Visa funds are not a separate species of product. They are usually{" "}
              <strong>mainstream private equity or alternative investment vehicles</strong> that have
              been structured to comply with residency rules.
            </p>
            <p>Key characteristics include:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Regulation and supervision</strong> - overseen by the relevant securities
                regulator and audited regularly;
              </li>
              <li>
                <strong>Professional management</strong> - investment teams with sector expertise
                and a clear value-creation strategy;
              </li>
              <li>
                <strong>Diversified portfolios</strong> - exposure to multiple companies, projects
                or assets;
              </li>
              <li>
                <strong>Defined timelines</strong> - funds typically target a 7-10 year lifecycle.
              </li>
            </ul>
            <p>
              Our article{" "}
              <Link
                href={INTERNAL_ARTICLES.fundSectors.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.fundSectors.label}
              </Link>{" "}
              breaks down the leading sectors inside Portugal Golden Visa funds - from technology
              and healthcare to infrastructure, hospitality and sustainability.
            </p>
            <p>
              For a full overview of the mechanics, minimums and process steps, see also{" "}
              <Link
                href={INTERNAL_ARTICLES.fundRoute.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.fundRoute.label}
              </Link>
              .
            </p>
          </section>

          {/* Section 4 - Comparison */}
          <section id="comparison" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Side-by-side: funds vs real estate for Golden Visa investors
            </h2>
            <p>
              The table below summarises the core trade-offs between{" "}
              <strong>Portugal Golden Visa funds and direct real estate</strong> from a private
              equity perspective.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[#E1E4EA] rounded-xl overflow-hidden">
                <thead className="bg-[#F8FAFC]">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-[#4A5C69]">
                      Dimension
                    </th>
                    <th className="px-3 py-2 text-left font-semibold text-[#4A5C69]">
                      Golden Visa Funds
                    </th>
                    <th className="px-3 py-2 text-left font-semibold text-[#4A5C69]">
                      Direct Real Estate
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1E4EA]">
                  <tr>
                    <td className="px-3 py-2 font-semibold">Regulation</td>
                    <td className="px-3 py-2">Supervised, audited fund vehicle</td>
                    <td className="px-3 py-2">Property law &amp; rental rules, less financial supervision</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold">Diversification</td>
                    <td className="px-3 py-2">Multiple assets and companies</td>
                    <td className="px-3 py-2">One or a handful of properties</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold">Operational load</td>
                    <td className="px-3 py-2">Fully delegated to the manager</td>
                    <td className="px-3 py-2">Repairs, tenants, management, local providers</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold">Political sensitivity</td>
                    <td className="px-3 py-2">
                      Focused on business/sector investment, generally less sensitive
                    </td>
                    <td className="px-3 py-2">Linked directly to housing debates</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold">Timeline clarity</td>
                    <td className="px-3 py-2">Defined fund term and exit strategy</td>
                    <td className="px-3 py-2">Dependent on property market cycles</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold">Fit for HNWIs</td>
                    <td className="px-3 py-2">Aligns with private equity / alternatives allocation</td>
                    <td className="px-3 py-2">Feels like another side project / second home</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Our analyses for UK and Canadian investors -{" "}
              <Link
                href={INTERNAL_ARTICLES.ukBudgetArticle.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.ukBudgetArticle.label}
              </Link>{" "}
              and{" "}
              <Link
                href={INTERNAL_ARTICLES.canadaArticle.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.canadaArticle.label}
              </Link>{" "}
              - show that the more sophisticated the investor, the more natural fund strategies tend
              to feel.
            </p>
          </section>

          {/* Section 5 - Profiles */}
          <section id="profiles" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Who should choose what? Investor profiles and decision drivers
            </h2>
            <p>
              There is no single right answer. Instead, it helps to ask which description feels
              closer to you:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>“Legacy property” investor</strong> - comfortable with bricks-and-mortar,
                happy to manage contractors, keen to use the property personally;
              </li>
              <li>
                <strong>“Private equity” investor</strong> - used to evaluating managers, strategies
                and track records, prefers regulated vehicles and clear reporting.
              </li>
            </ul>
            <p>
              Many high-net-worth families end up blending both:{" "}
              <strong>a Golden Visa fund for eligibility and portfolio exposure</strong>, plus{" "}
              <strong>direct property decisions made calmly</strong>, without the pressure of
              linking everything to residency rules.
            </p>
            <Quote>
              The key is to align your Golden Visa path with{" "}
              <strong>how you already think about capital allocation</strong>, not to reinvent
              yourself as a landlord if that has never been your game.
            </Quote>
          </section>

          {/* Section 6 - Due diligence */}
          <section id="due-diligence" className="space-y-4">
            <h2 className="text-2xl font-bold">
              How to evaluate Golden Visa funds like an institutional LP
            </h2>
            <p>
              The best Golden Visa fund allocations are made using the{" "}
              <strong>same discipline institutional investors apply to private equity</strong>. That
              means asking:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                What is the manager&apos;s <strong>track record</strong> in similar strategies and
                geographies?
              </li>
              <li>
                How is <strong>alignment</strong> created - co-investment, carried interest,
                meaningful GP commitment?
              </li>
              <li>
                Is the strategy clear and coherent, or a marketing-driven blend of buzzwords?
              </li>
              <li>
                Are fees and costs fully transparent, with realistic{" "}
                <strong>net-of-fee projections</strong>?
              </li>
              <li>
                What does governance look like - boards, investment committees, risk controls?
              </li>
            </ul>
            <p>
              For a deeper look at economics and incentives, read{" "}
              <Link
                href={INTERNAL_ARTICLES.fundFees.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.fundFees.label}
              </Link>
              . It breaks down the full fee stack and explains why alignment matters more than
              simply chasing the lowest headline fee.
            </p>
          </section>

          {/* Section 7 - Explorer */}
          <section id="explorer" className="space-y-4">
            <h2 className="text-2xl font-bold">
              How Explorer applies the private equity playbook to Golden Visa funds
            </h2>
            <p>
              Explorer Investments is, first and foremost,{" "}
              <strong>a private equity and alternative investment manager</strong>. Golden Visa
              strategies are built on top of that core DNA, rather than the other way round.
            </p>
            <p>In practice, that means:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Focus on real companies, assets and sectors where Explorer has deep expertise;</li>
              <li>Regulated fund structures designed to meet both residency and investment needs;</li>
              <li>Reporting and governance that professional investors recognise;</li>
              <li>
                A partnership mindset with international families from the UK, Canada and beyond.
              </li>
            </ul>
            <p>
              To see how this works in detail, start with{" "}
              <Link
                href={INTERNAL_ARTICLES.explorerFund.href}
                className="text-[#0D4F7C] underline hover:no-underline inline-flex items-center gap-1"
              >
                {INTERNAL_ARTICLES.explorerFund.label}
                <ArrowRight size={14} />
              </Link>
              .
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-4">
            <h2 className="text-2xl font-bold">
              FAQ: Portugal Golden Visa funds vs real estate
            </h2>
            <p className="text-sm text-[#5A6F7B]">
              These questions capture what investors most often ask when comparing Golden Visa fund
              structures with traditional property-based approaches.
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
              Next step: decide whether your Golden Visa is a property play or a private equity play
            </h2>
            <p>
              In 2025, the Portugal Golden Visa is no longer a simple real estate transaction. It is
              an opportunity to{" "}
              <strong>align residency, portfolio construction and long-term family strategy</strong>.
            </p>
            <p>
              For many serious investors, that means moving beyond one-off property deals and into{" "}
              <strong>regulated, private equity-style fund structures</strong> built and managed by
              teams like Explorer Investments.
            </p>
            <p className="font-semibold">
              If you are weighing property against funds for your Golden Visa, schedule a
              conversation to map out both options side by side - and see which one really fits your
              capital, your risk profile and your long-term plans.
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
