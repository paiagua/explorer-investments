import React from 'react';
import Script from "next/script";
import Link from "next/link";
import Header from "@/components/Menu";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import BlogPreviewGridFromXML from "@/components/BlogPreviewGridFromXML";
import { Globe, TrendingUp, ShieldCheck, BarChart, Flag } from "lucide-react";

export const revalidate = 600;
export const fetchCache = "force-cache";

const SLUG = "portugal-golden-visa-canadians-fund-route-2025-guide";
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  "https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-canadians-fund-route-2025.jpg";
const PUBLISHED = "2025-11-24T17:00:00+00:00";

// Internal link targets (já usados nos teus outros artigos)
const INTERNAL_ARTICLES = {
  fundRouteGuide: {
    href: "/portugal-golden-visa-fund-route-complete-guide-2025",
    label: "Portugal Golden Visa 2025 - Complete Guide to the Investment Fund Route",
  },
  fundFees: {
    href: "/portugal-golden-visa-fund-fees-costs-returns-2025-guide",
    label: "Portugal Golden Visa Fund Costs, Fees & Returns (2025 Guide)",
  },
  planBForAmericans: {
    href: "/portugal-golden-visa-plan-b-for-americans",
    label: "Portugal Golden Visa: A Plan B for Americans in a Changing World",
  },
  gvVsOtherEU: {
    href: "/portugal-golden-visa-vs-other-eu-residency-funds-2025",
    label:
      "Portugal Golden Visa vs Other EU Residency-by-Investment - Why Portugal’s Fund Route Still Leads in 2025",
  },
  taxStrategy: {
    href: "/portugal-golden-visa-tax-strategy-funds-nhr-fatca-pfic-2025",
    label: "Portugal Golden Visa Tax Strategy (2025): CMVM Funds, NHR 2.0, FATCA & PFIC",
  },
  globalInvestmentVisaGuide: {
    href: "/global-investment-visa-residency-by-investment-guide-2025-golden-visa-funds-tax-strategies",
    label:
      "Global Investment Visa & Residency by Investment Guide 2025 - Rankings, Tax Strategies & Golden Visa Funds",
  },
  explorerFund: {
    href: "/portugal-golden-visa-explorer-investments",
    label: "Portugal Golden Visa 2025 | Invest with Explorer Investments Fund",
  },
  bestProgramsRanking: {
    href: "/best-residency-golden-visa-programs-2025-global-ranking",
    label: "Best Residency and Golden Visa Programs 2025 - Global Ranking (Why Portugal Still Leads)",
  },
};

// FAQ específico para canadenses
const FAQS = [
  {
    question: "Why are more Canadians looking at the Portugal Golden Visa in 2025?",
    answer:
      "Many Canadian families are exploring the Portugal Golden Visa to diversify lifestyle and geopolitical risk, secure an EU foothold for children and enjoy a milder climate and lower cost of living while keeping strong links to Canada.",
  },
  {
    question: "Can Canadian investors use regulated funds to qualify for the Portugal Golden Visa?",
    answer:
      "Yes. The primary route today is via regulated Portuguese investment funds. Canadians typically invest at least €500,000 into a qualifying fund that meets Portugal’s Golden Visa rules and invests in the local economy.",
  },
  {
    question: "Do I need to become a Portuguese tax resident if I obtain the Golden Visa as a Canadian?",
    answer:
      "No. Holding a Golden Visa does not automatically make you a Portuguese tax resident. Tax residency is mainly driven by days spent in Portugal and where your centre of life is considered to be.",
  },
  {
    question: "What tax issues should Canadians consider before investing in a Portugal Golden Visa fund?",
    answer:
      "Canadians should consider potential departure tax if they cease Canadian tax residency, how foreign fund investments are treated, reporting requirements and any Portugal-Canada treaty implications. Specialist cross-border advice is essential.",
  },
  {
    question: "Can my spouse and children be included in one Portugal Golden Visa application?",
    answer:
      "Yes. A single qualifying Golden Visa fund investment can normally cover the main applicant, spouse and eligible dependent children, subject to standard documentation and relationship rules.",
  },
  {
    question: "How much time do I need to spend in Portugal to maintain my Golden Visa as a Canadian?",
    answer:
      "Portugal is attractive partly because of its light physical presence requirements. You typically need to spend only a limited number of days over each multi-year period to maintain the permit.",
  },
  {
    question: "How long should Canadians plan to keep their Golden Visa fund investment?",
    answer:
      "Most investors should plan on a 7-10 year horizon to align with residency timelines and typical private equity-style fund lifecycles. Early exits may be limited or not available.",
  },
  {
    question: "Why work with Explorer Investments as a Canadian investor?",
    answer:
      "Explorer Investments combines deep local private equity expertise with an understanding of global investors’ needs, including Canadians who want transparent, regulated fund structures aligned with long-term residency plans.",
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
        "Portugal Golden Visa for Canadians (2025): Fund Route, Tax Considerations & Long-Term Plan B",
      description:
        "2025 guide to the Portugal Golden Visa for Canadian investors: how the fund route works, key tax and residency considerations, timelines, family planning and how Explorer Investments structures regulated fund strategies.",
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
        "Canadian Investors",
        "Residency by Investment",
        "Investment Funds",
        "Tax and Planning",
      ],
      keywords: [
        "Portugal Golden Visa for Canadians",
        "Canadian investors Portugal fund route",
        "Canadians moving to Portugal",
        "Canada EU residency by investment",
        "Portugal Golden Visa Canada 2025",
        "Explorer Investments Golden Visa fund",
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
          name: "Portugal Golden Visa for Canadians",
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
    "Portugal Golden Visa for Canadians (2025): Fund Route, Tax Considerations & Long-Term Plan B",
  description:
    "High-intent 2025 guide for Canadian investors considering the Portugal Golden Visa: fund route mechanics, residency rules, tax and planning considerations, and Explorer Investments’ regulated fund approach.",
  openGraph: {
    title:
      "Portugal Golden Visa for Canadians - Fund Route, Tax Considerations & Long-Term Plan B (2025)",
    description:
      "Discover how Canadian investors can use the Portugal Golden Visa fund route to secure EU optionality, with an overview of timelines, tax considerations and Explorer Investments’ private equity strategies.",
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

// Pequeno helper para quotes
const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-sm sm:text-base text-[#002741] bg-[#FFFCF3] py-3 px-4 rounded-md my-6 shadow-sm">
    <p>{children}</p>
  </blockquote>
);

export default function PortugalGoldenVisaForCanadiansPage() {
 

  return (
    <>
      <Script
        id="ld-json-gv-canadians-2025"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Hero */}
          <header>
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <Flag size={16} /> Canada • Portugal Golden Visa
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Portugal Golden Visa for Canadians: Fund Route, Tax Considerations &amp; a Long-Term
              Plan B
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              For Canadian families, Portugal has quietly become one of the most compelling{" "}
              <strong>Plan B destinations</strong>: EU access, milder winters, a lower cost of
              living and a fund-based Golden Visa route that fits naturally into a long-term
              portfolio. This guide explains how the{" "}
              <strong>investment fund route works for Canadians in 2025</strong> - and how Explorer
              Investments structures regulated strategies around it.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#5A6F7B]">
              <div className="flex items-center gap-1">
                <Globe size={14} /> <span>Canadian Investors • Portugal</span>
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
                <Link href="#why-canadians" className="hover:underline">
                  1. Why Canadians are turning to Portugal for a Plan B
                </Link>
              </li>
              <li>
                <Link href="#fund-route" className="hover:underline">
                  2. How the Portugal Golden Visa fund route works for Canadians
                </Link>
              </li>
              <li>
                <Link href="#tax" className="hover:underline">
                  3. Key tax and residency considerations for Canadian investors
                </Link>
              </li>
              <li>
                <Link href="#lifestyle" className="hover:underline">
                  4. Lifestyle, education and quality of life for Canadian families
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:underline">
                  5. Positioning a Golden Visa fund inside a Canadian portfolio
                </Link>
              </li>
              <li>
                <Link href="#explorer" className="hover:underline">
                  6. Why Canadian investors work with Explorer Investments
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:underline">
                  7. FAQ: Portugal Golden Visa for Canadians
                </Link>
              </li>
            </ol>
          </nav>

          {/* SECTION: Why Canadians */}
          <section id="why-canadians" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Why Canadians are turning to Portugal for a Plan B
            </h2>
            <p>
              When we speak with Canadian investors, a familiar pattern emerges. They are not
              looking to “escape” Canada, but to{" "}
              <strong>add a second lifestyle and residency option</strong> that combines:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Stable EU rule of law and Schengen access;</li>
              <li>Mild winters and an outdoor lifestyle;</li>
              <li>High-quality public and private healthcare;</li>
              <li>Good international schools and universities;</li>
              <li>A cost of living below major Canadian metros.</li>
            </ul>
            <p>
              At a global level, the{" "}
              <Link
                href={INTERNAL_ARTICLES.globalInvestmentVisaGuide.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.globalInvestmentVisaGuide.label}
              </Link>{" "}
              shows how Portugal consistently ranks among the{" "}
              <strong>top residency-by-investment options</strong>. For Canadians, the time zones,
              connectivity and cultural fit often make it more attractive than other EU or offshore
              choices.
            </p>
            <Quote>
              The Portugal Golden Visa is less about abandoning Canada and more about{" "}
              <strong>giving your family a serious European alternative</strong> - for lifestyle,
              education and long-term planning.
            </Quote>
          </section>

          {/* SECTION: Fund route */}
          <section id="fund-route" className="space-y-4">
            <h2 className="text-2xl font-bold">
              How the Portugal Golden Visa fund route works for Canadians
            </h2>
            <p>
              As in other markets, Canadian investors now primarily access the Golden Visa via{" "}
              <strong>regulated Portuguese investment funds</strong>. In practice, that means:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Investing at least <strong>€500,000</strong> in a qualifying fund structure;
              </li>
              <li>
                The fund invests in Portuguese assets and complies with Golden Visa rules and
                supervision;
              </li>
              <li>
                The investment is held over the full Golden Visa timeline, usually 7-10 years;
              </li>
              <li>
                The fund issues documentation used as proof of investment in your residency file.
              </li>
            </ul>
            <p>
              For a step-by-step breakdown of the route itself, start with{" "}
              <Link
                href={INTERNAL_ARTICLES.fundRouteGuide.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.fundRouteGuide.label}
              </Link>
              . To understand the full cost stack and expected performance, pair it with{" "}
              <Link
                href={INTERNAL_ARTICLES.fundFees.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.fundFees.label}
              </Link>
              .
            </p>
            <p>
              While we have a separate article focused on{" "}
              <Link
                href={INTERNAL_ARTICLES.planBForAmericans.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                American investors
              </Link>
              , the underlying mechanics of the fund route are the same for Canadians - what
              changes are the tax, reporting and portfolio context.
            </p>
          </section>

          {/* SECTION: Tax */}
          <section id="tax" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Key tax and residency considerations for Canadian investors
            </h2>
            <p>
              Nothing in this article is tax advice - but Canadian investors should be aware of a
              few high-level themes and then consult{" "}
              <strong>specialised cross-border advisors</strong>:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Canadian tax residency</strong> - Most Canadians remain taxable on their
                worldwide income unless they sever sufficient residential ties and potentially face
                a departure tax event;
              </li>
              <li>
                <strong>Foreign investment reporting</strong> - Depending on the structure and
                thresholds, investments in Portuguese funds may trigger Canadian reporting
                obligations;
              </li>
              <li>
                <strong>Portugal residency and local tax regimes</strong> - Becoming a Portuguese
                tax resident is a separate decision from obtaining a Golden Visa and must be weighed
                against Canadian rules;
              </li>
              <li>
                <strong>Treaty interactions</strong> - The interaction between Portuguese and
                Canadian tax regimes should be analysed case by case.
              </li>
            </ul>
            <p>
              Our piece on{" "}
              <Link
                href={INTERNAL_ARTICLES.taxStrategy.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                Golden Visa tax strategy and funds
              </Link>{" "}
              is written primarily with US investors in mind, but many of the structural ideas
              around fund vehicles, reporting and timelines are equally relevant to Canadians.
            </p>
            <Quote>
              The strongest Golden Visa plans are built as{" "}
              <strong>components of a global wealth and tax strategy</strong>, not as standalone
              purchases.
            </Quote>
          </section>

          {/* SECTION: Lifestyle */}
          <section id="lifestyle" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Lifestyle, education and quality of life for Canadian families
            </h2>
            <p>
              For many Canadians, the “spreadsheet case” for Portugal is quickly reinforced when
              they visit: safe streets, ocean and nature, family-friendly culture and strong
              expat communities.
            </p>
            <p>Top priorities we hear from Canadian families include:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>International schools and English-speaking programmes for children;</li>
              <li>Shorter, milder winters and access to outdoor sports;</li>
              <li>High-quality healthcare and retirement options for parents;</li>
              <li>A base for exploring the rest of Europe without long-haul flights.</li>
            </ul>
            <p>
              These softer factors - combined with the{" "}
              <Link
                href={INTERNAL_ARTICLES.bestProgramsRanking.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                overall strength of Portugal’s residency-by-investment ranking
              </Link>
               - are often what persuade Canadian families to commit to a medium-term plan rather
              than a “wait and see” approach.
            </p>
          </section>

          {/* SECTION: Portfolio */}
          <section id="portfolio" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Positioning a Golden Visa fund inside a Canadian portfolio
            </h2>
            <p>
              The Portugal Golden Visa fund route should sit within a{" "}
              <strong>bigger asset-allocation conversation</strong>. For Canadians, that usually
              means thinking about:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                How much of their net worth they want tied to Europe and the euro over 7-10 years;
              </li>
              <li>
                How the fund’s risk profile (e.g. private equity, growth, real assets) fits with
                existing Canadian and global holdings;
              </li>
              <li>
                Liquidity needs, especially around education, business commitments or retirement
                timing;
              </li>
              <li>
                Whether the investment is “visa-first” or would still be attractive on pure
                investment merits.
              </li>
            </ul>
            <p>
              Our analysis of{" "}
              <Link
                href={INTERNAL_ARTICLES.gvVsOtherEU.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                Portugal versus other EU residency-by-investment programmes
              </Link>{" "}
              gives useful context for Canadians who are also considering alternatives in Europe or
              further afield.
            </p>
          </section>

          {/* SECTION: Explorer */}
          <section id="explorer" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Why Canadian investors work with Explorer Investments
            </h2>
            <p>
              Explorer Investments is a{" "}
              <strong>Portuguese private equity and alternative investment manager</strong> with a
              long track record in the local market. For Canadian investors, that brings several
              advantages:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Strategies built around real companies and assets rather than passive property
                speculation;
              </li>
              <li>
                Transparent, regulated fund structures suitable for residency programmes and
                institutional investors alike;
              </li>
              <li>
                Familiarity with working alongside international legal and tax advisors, including
                for Canadian clients;
              </li>
              <li>
                A long-term perspective that matches the Golden Visa timeline.
              </li>
            </ul>
            <p>
              For a deeper look at how Explorer positions itself in the Golden Visa ecosystem, see{" "}
              <Link
                href={INTERNAL_ARTICLES.explorerFund.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.explorerFund.label}
              </Link>
              .
            </p>
            <Quote>
              The decision is not just “Should we get a Portugal Golden Visa?” - it is{" "}
              <strong>“Who do we trust to steward our capital for the next decade?”</strong>
            </Quote>
          </section>

          {/* SECTION: FAQ */}
          <section id="faq" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Frequently asked questions: Portugal Golden Visa for Canadians
            </h2>
            <p className="text-sm text-[#5A6F7B]">
              These questions capture the main concerns Canadian investors raise when they look at
              Portugal as a second-home and residency strategy.
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
              Next step: explore a Portugal Golden Visa strategy tailored for Canadians
            </h2>
            <p>
              For Canadian investors, Portugal’s Golden Visa fund route can be{" "}
              <strong>a powerful combination of lifestyle, portfolio diversification and EU
              optionality</strong>. But it only works if the structure, timing and tax analysis are
              built around your specific situation.
            </p>
            <p>
              Explorer Investments partners with Canadian families who want a{" "}
              <strong>disciplined, institutional approach</strong> to Golden Visa investing - not a
              marketing-led shortcut.
            </p>
            <p className="font-semibold">
              If you are based in Canada or have Canadian connections, schedule a strategy
              conversation to map out how a regulated Golden Visa fund could fit into your global
              plan.
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
