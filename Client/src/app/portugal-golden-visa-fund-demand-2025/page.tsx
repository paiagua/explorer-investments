// ✅ Article: Rising Demand for Portugal Golden Visa via Funds
// Fully styled + Explorer Golden Visa positioning + RSS internal linkbuilding

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

import { Globe, TrendingUp, ShieldCheck, BarChart, TreePalm, MapPin } from 'lucide-react';

// ===================================================================
// METADATA & CONSTANTS
// ===================================================================

const SLUG = 'portugal-golden-visa-fund-demand-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-fund-demand.jpg';
const PUBLISHED = '2025-11-24T09:00:00+00:00';

// Internal linkbuilding based on feed.rss
const INTERNAL_ARTICLES = {
  fundTruth: {
    href: '/portugal-golden-visa-2025-truth-fund-route',
    label: 'Portugal Golden Visa 2025: The Truth About the Fund Route (Not Real Estate)',
  },
  explorerFund: {
    href: '/portugal-golden-visa-explorer-investments',
    label: 'Portugal Golden Visa 2025 | Invest with Explorer Investments Fund',
  },
  retirementDestination: {
    href: '/portugal-golden-visa-2025-explore-fund-best-retirement-destination',
    label:
      'Portugal Golden Visa 2025: Explore Fund Route and #1 European Retirement Destination',
  },
  completeGuide: {
    href: '/portugal-golden-visa-complete-guide-2025',
    label: 'The Portugal Golden Visa: Your Complete 2025 Guide to EU Residency',
  },
};

// FAQs (8-15, optimised for snippets)
const FAQS = [
  {
    question: 'Is the Portugal Golden Visa via investment funds still available in 2025?',
    answer:
      "Yes. While the real estate route has been restricted, the regulated investment fund route remains open in 2025 and is one of the most robust and compliant paths to Portuguese residency.",
  },
  {
    question: 'Why is demand for Portugal’s Golden Visa increasing despite legal changes?',
    answer:
      "Investors continue to value stable EU residency, access to the Schengen Area, and Portugal's quality of life. Regulated funds allow them to keep capital productive while still meeting Golden Visa requirements.",
  },
  {
    question: 'Why are so many American investors choosing the fund route?',
    answer:
      'US investors are looking for diversification outside the US dollar, a European Plan B, and lifestyle relocation options. The fund route avoids direct property management and is professionally managed under CMVM oversight.',
  },
  {
    question: 'How much do I need to invest in a Portuguese Golden Visa fund?',
    answer:
      'Most Golden Visa-eligible funds require a minimum subscription of €500,000, aligned with legal thresholds. Some funds can offer staged capital calls, but eligibility is always tied to the total committed amount.',
  },
  {
    question: 'Are Golden Visa investment funds regulated in Portugal?',
    answer:
      'Yes. Golden Visa funds are typically supervised by the CMVM and managed by licensed management companies. This regulatory framework helps ensure governance, reporting, and risk controls.',
  },
  {
    question: 'How long does it take to obtain residency through the fund route?',
    answer:
      'Timelines vary, but many investors complete subscription, documentation, and initial application within a few months. Once approved, they follow the standard residency and renewal schedule defined by Portuguese law.',
  },
  {
    question: 'What changed in the law for Golden Visa residence and citizenship timelines?',
    answer:
      'Recent reforms adjusted the periods for temporary residence, permanent residence, and nationality. For most non-EU investors, the path to citizenship can now extend up to 10 years, reinforcing the importance of a long-term strategy.',
  },
  {
    question: 'Can I still qualify for the Golden Visa without buying property?',
    answer:
      'Yes. The investment fund route allows you to qualify without purchasing real estate. Instead, you subscribe units in a regulated fund that invests in Portuguese assets such as private equity, growth capital, or infrastructure.',
  },
  {
    question: 'What are the main risks of investing in Golden Visa funds?',
    answer:
      'Like any investment, funds are exposed to market, liquidity, and execution risks. Working with an experienced manager and a diversified strategy, and understanding the fund documentation, helps mitigate those risks.',
  },
  {
    question: 'Why work with Explorer Investments for the Golden Visa?',
    answer:
      'Explorer Investments combines decades of private equity experience in Portugal with a dedicated Golden Visa strategy, focusing on real underlying value creation rather than speculative property cycles.',
  },
];

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': CANONICAL_URL,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': CANONICAL_URL,
      },
      headline:
        "Portugal Golden Visa 2025: Why Fund Demand Is Surging Among International Investors",
      description:
        "Demand for Portugal’s Golden Visa through regulated investment funds is rising, especially among American investors. Discover what is driving this trend, how the new rules work, and where Explorer Investments fits in.",
      image: [OG_IMAGE],
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      author: {
        '@type': 'Organization',
        name: 'Golden Visa Explorer Investments Editorial Team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Explorer Investments',
        logo: {
          '@type': 'ImageObject',
          url: 'https://goldenvisashub.com/assets/images/logo-explorer.png',
        },
      },
      articleSection: [
        'Golden Visa Portugal',
        'Investment Funds',
        'Private Equity',
        'US Investors',
      ],
      keywords: [
        'Portugal Golden Visa',
        'Golden Visa 2025',
        'Golden Visa investment fund',
        'Explorer Investments',
        'American investors',
        'EU residency by investment',
      ],
    },
    {
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
          name: 'Insights',
          item: 'https://goldenvisashub.com/insights',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Golden Visa Fund Demand 2025',
          item: CANONICAL_URL,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

export const metadata = {
  title: 'Portugal Golden Visa 2025: Why Fund Demand Is Surging (Especially Among US Investors)',
  description:
    'Demand for Portugal’s Golden Visa through investment funds is rising, particularly among American investors. Learn why the fund route, Explorer Investments and the new rules still make this one of the most compelling EU residency strategies.',
  openGraph: {
    title: 'Portugal Golden Visa 2025: Why Fund Demand Is Surging',
    description:
      'Investor appetite for Portugal’s Golden Visa via regulated funds keeps increasing. Discover what is driving the trend and how Explorer Investments structures it.',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

// ===================================================================
// Helper Components
// ===================================================================

const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-sm sm:text-base text-[#002741] bg-[#FFFCF3] py-3 px-4 rounded-md my-6 shadow-sm">
    <p>{children}</p>
  </blockquote>
);

// ===================================================================
// Page Component
// ===================================================================

export default function GoldenVisaFundDemandArticle() {
  return (
    <>
      {/* JSON-LD for Article + FAQ + Breadcrumbs */}
      <Script
        id="ld-json-gv-fund-demand"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <Header />

      {/* === Article === */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Title / Hero */}
          <header>
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <TrendingUp size={16} /> Golden Visa & Fund Investments
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Portugal Golden Visa 2025: Why Fund Demand Is Surging - Especially Among US Investors
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              Investment funds and management companies in Portugal are seeing a clear rise in
              Golden Visa-eligible capital. Even after legal changes, higher-income investors -
              particularly Americans - are turning to regulated funds as their preferred route to EU
              residency.
            </p>

            {/* Meta info / badges */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#5A6F7B]">
              <div className="flex items-center gap-1">
                <Globe size={14} /> <span>Portugal • Golden Visa via Funds</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#B4A77E]" />
              <div className="flex items-center gap-1">
                <BarChart size={14} /> <span>Investor Demand Rising</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#B4A77E]" />
              <div className="flex items-center gap-1">
                <ShieldCheck size={14} /> <span>Regulated Fund Structures</span>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          <nav
            aria-label="Table of contents"
            className="border border-[#E1E4EA] rounded-xl p-4 bg-[#F8FAFC] text-sm"
          >
            <p className="uppercase tracking-wide text-[11px] font-semibold text-[#6A7D8A] mb-2">
              In this article
            </p>
            <ol className="space-y-1">
              <li>
                <Link href="#section-demand" className="hover:underline">
                  1. A new wave of demand for Portugal’s Golden Visa
                </Link>
              </li>
              <li>
                <Link href="#section-why-funds" className="hover:underline">
                  2. Why regulated investment funds are replacing real estate
                </Link>
              </li>
              <li>
                <Link href="#section-law-changes" className="hover:underline">
                  3. What changed in the law - and what didn’t
                </Link>
              </li>
              <li>
                <Link href="#section-us-investors" className="hover:underline">
                  4. Why Americans are driving so much of the demand
                </Link>
              </li>
              <li>
                <Link href="#section-explorer" className="hover:underline">
                  5. Explorer Investments: fund-first Golden Visa strategy
                </Link>
              </li>
              <li>
                <Link href="#section-process" className="hover:underline">
                  6. Step-by-step: How the fund route works in practice
                </Link>
              </li>
              <li>
                <Link href="#section-risks" className="hover:underline">
                  7. Key risks, law stability, and how to think long term
                </Link>
              </li>
              <li>
                <Link href="#section-faq" className="hover:underline">
                  8. Frequently asked questions (FAQ)
                </Link>
              </li>
            </ol>
          </nav>

          {/* SECTION 1 - Demand */}
          <section id="section-demand" className="space-y-4">
            <h2 className="text-2xl font-bold">
              A new wave of demand for Portugal’s Golden Visa - led by funds
            </h2>
            <p>
              Across the Portuguese market, several investment managers report strong inflows into
              Golden Visa-eligible funds. One of the largest vehicles in the country has already
              crossed hundreds of millions of euros under management, with well over half of its
              investors holding a residence permit through the Golden Visa programme.
            </p>
            <p>
              Demand is no longer purely real-estate driven. Investors are increasingly comfortable
              with{' '}
              <strong>regulated fund structures, professional management and diversified exposure</strong>{' '}
              to the Portuguese economy - from private equity and growth capital to infrastructure
              and listed securities.
            </p>
            <Quote>
              The Golden Visa programme has been an invaluable source of capital for Portugal. It
              brings higher-income investors who become repeat visitors, support local businesses and
              ultimately help finance long-term growth.
            </Quote>
            <p>
              For many families, the goal is not speculation - it is security, mobility and an
              alternative base in one of Europe’s most liveable countries.
            </p>
          </section>

          {/* SECTION 2 - Why Funds */}
          <section id="section-why-funds" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Why regulated investment funds are replacing real estate
            </h2>
            <p>
              Since the 2023 reforms, the traditional model of buying a single property purely to
              qualify for the Golden Visa has been largely phased out. In its place,{' '}
              <strong>fund investments have become the primary route</strong> for serious
              international investors.
            </p>
            <p>
              By subscribing to a Golden Visa-eligible fund, investors typically:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Commit a minimum of €500,000 into a regulated vehicle;</li>
              <li>
                Gain exposure to a diversified portfolio of assets, rather than a single apartment;
              </li>
              <li>Rely on experienced managers for sourcing, execution and governance;</li>
              <li>
                Align their residency strategy with a long-term value creation strategy in Portugal.
              </li>
            </ul>
            <p>
              If you are comparing the fund route with property, start with our in-depth guide{' '}
              <Link
                href={INTERNAL_ARTICLES.fundTruth.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.fundTruth.label}
              </Link>
              . It explains why direct bricks-and-mortar is no longer the main path to Portuguese
              residency.
            </p>
          </section>

          {/* SECTION 3 - Law Changes */}
          <section id="section-law-changes" className="space-y-4">
            <h2 className="text-2xl font-bold">
              What changed in the law - and what didn’t for Golden Visa investors
            </h2>
            <p>
              Recent legislation has adjusted the{' '}
              <strong>timelines for temporary residence, permanent residence and citizenship</strong>.
              For many non-EU investors, the full pathway to a Portuguese passport can now extend to
              10 years, while EU and Portuguese-speaking citizens may have shorter horizons.
            </p>
            <p>
              However, the fundamental logic of the programme remains the same:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>You commit capital to the Portuguese economy through a qualified investment;</li>
              <li>You maintain that investment over the required period;</li>
              <li>You respect minimum stay requirements and renewal milestones;</li>
              <li>You can later request long-term residency or nationality, subject to the law.</li>
            </ul>
            <p>
              This is exactly why a <strong>fund-first strategy</strong> matters. If you are thinking
              in years rather than months, you want your capital working intelligently throughout
              that period - not locked in a single illiquid property in an overheated micro-market.
            </p>
            <p>
              For a wider overview of the framework and practical steps, you can also review our{' '}
              <Link
                href={INTERNAL_ARTICLES.completeGuide.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.completeGuide.label}
              </Link>
              .
            </p>
          </section>

          {/* SECTION 4 - US Investors */}
          <section id="section-us-investors" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Why Americans are driving so much of the new Golden Visa demand
            </h2>
            <p>
              In many Golden Visa funds, <strong>US investors now represent a significant share</strong>{' '}
              of the investor base. Their motivations tend to cluster around three themes:
            </p>
            <ol className="list-decimal list-inside space-y-1">
              <li>
                <strong>Diversification away from a single jurisdiction and currency;</strong>
              </li>
              <li>
                <strong>Quality of life and lifestyle arbitrage</strong> - better weather, healthcare
                and cost-of-living;
              </li>
              <li>
                <strong>A long-term Plan B</strong> for families, succession and education planning.
              </li>
            </ol>
            <p>
              Articles such as{' '}
              <Link
                href={INTERNAL_ARTICLES.retirementDestination.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.retirementDestination.label}
              </Link>{' '}
              show how Portugal consistently ranks as one of the top retirement and lifestyle
              destinations globally - with the Golden Visa providing a structured entry point.
            </p>
            <Quote>
              For many American families, the Portugal Golden Visa is no longer a speculative bet.
              It is a deliberate decision to anchor part of their future in Europe - with capital
              deployed through regulated funds rather than one more property.
            </Quote>
          </section>

          {/* SECTION 5 - Explorer Positioning */}
          <section id="section-explorer" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Explorer Investments: a private equity mindset applied to Golden Visa funds
            </h2>
            <p>
              Explorer Investments is one of Portugal’s most established private equity and
              alternative investment managers. The same principles that guide institutional mandates
              - rigorous due diligence, active value creation and disciplined exits - are at the
              heart of its Golden Visa strategy.
            </p>
            <p>
              Rather than treating the Golden Visa as a standalone product, Explorer approaches it as
              a <strong>long-term partnership with investors</strong> who want both:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                A credible path to EU residency and, over time, potential citizenship for their
                family;
              </li>
              <li>
                Exposure to real economic value in Portugal, across sectors where Explorer has
                decades of track record.
              </li>
            </ul>
            <p>
              To see how this philosophy translates into a concrete structure, explore{' '}
              <Link
                href={INTERNAL_ARTICLES.explorerFund.href}
                className="text-[#0D4F7C] underline hover:no-underline"
              >
                {INTERNAL_ARTICLES.explorerFund.label}
              </Link>
              , where we break down the strategy, portfolio building blocks and governance in more
              detail.
            </p>
          </section>

          {/* SECTION 6 - Process */}
          <section id="section-process" className="space-y-4">
            <h2 className="text-2xl font-bold">Step-by-step: how the fund route works</h2>
            <p>
              While every case is unique, the outline below reflects what many Golden Visa investors
              experience when working with a regulated fund and specialised advisors:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Initial assessment &amp; strategy call</strong> - Clarify family objectives,
                timelines, tax considerations and risk profile.
              </li>
              <li>
                <strong>Fund selection</strong> - Review the Private Placement Memorandum (PPM),
                terms, fees, portfolio strategy and exit expectations.
              </li>
              <li>
                <strong>KYC &amp; onboarding</strong> - Complete compliance checks with the bank,
                depositary and fund manager.
              </li>
              <li>
                <strong>Subscription &amp; capital transfer</strong> - Execute subscription
                documents, transfer the required capital and receive proof of investment.
              </li>
              <li>
                <strong>Golden Visa application</strong> - Submit documentation to the Portuguese
                authorities, supported by immigration counsel.
              </li>
              <li>
                <strong>Residence cards &amp; renewals</strong> - Maintain the investment, meet
                minimum stay requirements and complete the renewal cycle.
              </li>
              <li>
                <strong>Long-term planning</strong> - Decide whether to progress towards permanent
                residence or citizenship, and plan for eventual fund exit.
              </li>
            </ol>
            <p>
              Throughout this journey, Explorer works alongside specialised legal and tax partners,
              ensuring that investment and residency are aligned, not treated as two separate
              decisions.
            </p>
          </section>

          {/* SECTION 7 - Risks & Stability */}
          <section id="section-risks" className="space-y-4">
            <h2 className="text-2xl font-bold">
              Risks, law stability and making a long-term decision
            </h2>
            <p>
              Some investors worry that laws may change again. That concern is understandable - but
              it should be weighed against the track record of Portugal&apos;s framework and the fact
              that Golden Visa structures are now heavily oriented towards{' '}
              <strong>productive, supervised investment</strong>.
            </p>
            <p>Key points to keep in mind:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Policy risk exists in every jurisdiction</strong>; diversification is itself
                a response to that risk.
              </li>
              <li>
                Funds are governed by prospectuses, regulation and depositary oversight - offering
                more structure than ad-hoc property deals.
              </li>
              <li>
                Your decision horizon should match the new timelines: think in terms of a 7-10 year
                family strategy, not short-term speculation.
              </li>
            </ul>
            <p>
              The question is therefore not “Will anything ever change?”, but rather “Which
              jurisdiction, structure and partner give my family the most resilience if it does?”.
              For many, Portugal - and Explorer’s Golden Visa fund approach - is a compelling answer.
            </p>
          </section>

          {/* SECTION 8 - FAQ */}
          <section id="section-faq" className="space-y-4">
            <h2 className="text-2xl font-bold">Frequently asked questions about Golden Visa funds</h2>
            <p className="text-sm text-[#5A6F7B]">
              The questions below summarise what prospective investors ask us most often about the
              Portugal Golden Visa fund route.
            </p>

            <div className="divide-y divide-[#E1E4EA] border border-[#E1E4EA] rounded-xl">
              {FAQS.map((faq) => (
                <details key={faq.question} className="group p-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="font-semibold text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <span className="ml-4 text-xs text-[#6A7D8A] group-open:hidden">+</span>
                    <span className="ml-4 text-xs text-[#6A7D8A] hidden group-open:inline">
                      −
                    </span>
                  </summary>
                  <div className="mt-2 text-sm text-[#15364A] leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CONCLUSION / CTA */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              Next step: align your Golden Visa with a serious investment strategy
            </h2>
            <p>
              The data is clear: demand for Portugal’s Golden Visa via{' '}
              <strong>regulated investment funds</strong> is growing - and American investors are at
              the forefront. Legal changes have raised the bar, but they have also reinforced the
              need for professional, long-term structures.
            </p>
            <p>
              If you want EU residency as a side-effect of a well-constructed investment - rather
              than the other way around - Explorer Investments is ready to help you design that
              journey.
            </p>
            <p className="font-semibold">
              Speak with our team to review your options, understand the latest rules and explore
              how a Golden Visa fund strategy can fit into your global plan.
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
