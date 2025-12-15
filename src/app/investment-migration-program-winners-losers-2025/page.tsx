// /app/investment-migration-program-winners-losers-2025/page.tsx

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
  Globe2,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  ShieldCheck,
  BarChart3,
  MapPin,
} from 'lucide-react';

// ===================================================================
// METADATA
// ===================================================================
const SLUG = 'investment-migration-program-winners-losers-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/investment-migration-program-winners-losers-2025.jpg';
const PUBLISHED = '2025-11-26T11:00:00+00:00';

export const metadata = {
  title:
    'Investment Migration Program Winners & Losers 2025 | Golden Visa & RCBI Outlook',
  description:
    'Which golden visa and investment migration programs are emerging as winners in 2025 – and which are under pressure? A strategic outlook for US and global investors, with a focus on fund-based Portugal solutions.',
  openGraph: {
    title:
      'Investment Migration Program Winners & Losers 2025 | Golden Visa & RCBI Outlook',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

// Helpers
const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#002741] bg-[#FFFCF3] py-3 px-4 rounded-md my-6 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Investment Migration Program Winners & Losers 2025: Golden Visa & RCBI Outlook',
  description:
    'A 2025 strategic review of the global investment migration landscape, highlighting which golden visa and investor programs are gaining traction with high-net-worth families and how Portugal’s fund-based route fits in.',
  author: {
    '@type': 'Organization',
    name: 'Explorer Investments',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Explorer Investments',
    logo: {
      '@type': 'ImageObject',
      url: 'https://goldenvisashub.com/assets/images/logo-explorer.png',
    },
  },
  image: OG_IMAGE,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': CANONICAL_URL,
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://goldenvisashub.com/',
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
      name: 'Investment Migration Program Winners & Losers 2025',
      item: CANONICAL_URL,
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the main “winner” investment migration programs in 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Programs that offer clear rules, credible investment options and predictable timelines are emerging as winners in 2025. This includes fund-based routes such as Portugal’s Golden Visa via regulated funds, as well as robust business and investor visas in select OECD countries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which golden visa models are under the most pressure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional property-heavy golden visas and opaque citizenship-by-investment schemes have faced increased scrutiny, higher minimums or outright closure in recent years, pushing serious investors towards regulated, fund-based or business-investor models.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where does Portugal’s fund-based Golden Visa stand in 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Portugal remains a flagship jurisdiction, particularly via its €500,000 fund-based option in CMVM-supervised vehicles that invest in the real economy. For many families, this combines EU residency, professional asset management and a defined five-year pathway, subject to legal and policy stability.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do US investors typically use golden visas and investor programs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'US investors often use golden visas and investor programs to add optionality: a European base, education and healthcare access for family members and the ability to rebalance lifestyle across jurisdictions, while remaining fully compliant with US tax and reporting obligations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does New Zealand’s Business Investor Work Visa fit into the global picture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New Zealand’s Business Investor Work Visa is a hands-on program where investors buy and operate established businesses locally, with a pathway to residence. For some families it complements more passive, fund-based options such as Portugal’s Golden Visa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are real estate-based golden visas still attractive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Real estate-based routes still exist in some jurisdictions but have become more constrained and politically sensitive. Many investors now prefer fund and business allocations that are more clearly aligned with economic contribution and diversification goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'What role does private equity play in investment migration strategies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Private equity-style allocations into regulated funds allow investors to support operating businesses and infrastructure in the host country. For managers like Explorer Investments, the visa benefit is layered on top of a core thesis: value creation in the real economy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Explorer Investments provide immigration or legal advice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Explorer Investments does not provide immigration, legal or tax advice. The firm focuses on designing and managing regulated investment vehicles, often Golden Visa-eligible, and works alongside the client’s chosen legal and tax advisers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should families compare different investment migration programs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Families should compare rule stability, physical presence requirements, tax interaction, investment quality, exit options and long-term residency or citizenship outcomes, ideally in coordination with independent advisers and a professional investment manager.',
      },
    },
  ],
};

export default function InvestmentMigrationWinnersLosers2025Page() {
  return (
    <>
      <Script
        id="ld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Script
        id="ld-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Title */}
          <header>
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <TrendingUp size={16} /> Global Investment Migration
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Investment Migration Program Winners &amp; Losers 2025: A Strategic Outlook for Golden Visa Investors
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              The golden visa universe has changed. Some programs are closing or tightening; others are becoming more
              institutional and fund-driven. This 2025 review highlights the emerging winners – and the models that are
              struggling – from the perspective of private equity-led investors.
            </p>
            <p className="text-xs text-[#5A6F7B] mt-2">
              By Explorer Investments • Updated November 2025 • Informational only, not legal or tax advice
            </p>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image
              src={OG_IMAGE}
              alt="Global golden visa and investment migration programs in 2025 compared"
              fill
              className="object-cover"
            />
          </figure>

          {/* Intro Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">
                Programs Mapped
              </p>
              <p className="text-xl font-bold">10+</p>
            </div>
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">
                Key Themes
              </p>
              <p className="text-xl font-bold">Regulation &amp; Funds</p>
            </div>
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">
                Lens
              </p>
              <p className="text-xl font-bold">PE &amp; HNW</p>
            </div>
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">
                Horizon
              </p>
              <p className="text-xl font-bold">2025–2030</p>
            </div>
          </div>

          <Quote>
            The old model of buying an apartment and getting a passport on the side is fading. The new model is regulated
            capital, real-economy investment and serious governance.
          </Quote>

          {/* Table of Contents */}
          <nav
            aria-label="Table of contents"
            className="bg-[#F7F3E6] border border-[#E1D5B8] rounded-xl p-4 text-sm"
          >
            <h2 className="font-semibold mb-2">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-1">
              <li>
                <a href="#macro-shifts" className="hover:underline">
                  The Macro Shifts Reshaping Investment Migration
                </a>
              </li>
              <li>
                <a href="#winners-2025" className="hover:underline">
                  2025 Winners: Programs Gaining Ground
                </a>
              </li>
              <li>
                <a href="#losers-2025" className="hover:underline">
                  Models Under Pressure &amp; “Losers”
                </a>
              </li>
              <li>
                <a href="#portugal-role" className="hover:underline">
                  Portugal’s Fund-Based Golden Visa in Context
                </a>
              </li>
              <li>
                <a href="#us-investor-lens" className="hover:underline">
                  The US Investor Lens: Tax, Regulation &amp; Optionality
                </a>
              </li>
              <li>
                <a href="#portfolio-construction" className="hover:underline">
                  Building a Multi-Jurisdiction Mobility Portfolio
                </a>
              </li>
              <li>
                <a href="#explorer-perspective" className="hover:underline">
                  Explorer’s Perspective: Private Equity at the Core
                </a>
              </li>
              <li>
                <a href="#faqs-winners-losers" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#conclusion-cta" className="hover:underline">
                  Conclusion &amp; Next Steps
                </a>
              </li>
            </ol>
          </nav>

          {/* Sections */}
          <section id="macro-shifts" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Globe2 size={22} /> The Macro Shifts Reshaping Investment Migration
            </h2>
            <p className="text-[#15364A]">
              Investment migration – often grouped under “golden visas”, “residency by investment” (RBI) and “citizenship by
              investment” (CBI) – has moved from the fringes of private wealth planning to the mainstream. At the same time,
              it has come under tighter regulatory, political and public scrutiny.
            </p>
            <p className="text-[#15364A]">
              Broadly, three forces define the 2025 landscape:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>
                <strong>De-risking by governments:</strong> pruning weaker programs, especially those perceived as light on
                due diligence or heavy on transactional real estate.
              </li>
              <li>
                <strong>Institutionalisation:</strong> shift toward regulated fund vehicles, clearer compliance and economic
                value creation, particularly in OECD countries.
              </li>
              <li>
                <strong>Optionality demand:</strong> families seeking education, healthcare, diversification and “Plan B”
                rights, not just passports.
              </li>
            </ul>
            <p className="text-[#15364A]">
              For managers like Explorer Investments, these shifts reinforce a simple thesis: programs linked to regulated,
              real-economy investment have a structurally stronger foundation than those tied to purely transactional assets.
            </p>
          </section>

          <section id="winners-2025" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ArrowUpRight size={22} /> 2025 Winners: Programs Gaining Ground
            </h2>
            <p className="text-[#15364A]">
              Rather than ranking every program numerically, it is more useful to highlight the characteristics of the
              “winners” and where they tend to cluster:
            </p>

            <h3 className="text-xl font-semibold mt-2">1. Fund-based EU residency routes</h3>
            <p className="text-[#15364A]">
              Portugal’s <strong>Golden Visa fund route</strong> is the reference point in this category. By requiring a
              minimum €500,000 subscription into a CMVM-supervised fund, the program channels capital into private equity,
              growth and infrastructure strategies that support the real economy.
            </p>
            <p className="text-[#15364A]">
              For professional and semi-professional investors – particularly from the US, Latin America and the Middle East –
              this model feels familiar: regulated vehicle, prospectus or information memorandum, limited partnership-like
              economics and a defined time horizon.
            </p>

            <h3 className="text-xl font-semibold mt-2">2. Serious business and entrepreneur visas</h3>
            <p className="text-[#15364A]">
              Jurisdictions that ask investors to build and scale businesses – rather than simply park capital – are also
              gaining traction. New Zealand’s <strong>Business Investor Work Visa</strong>, for example, explicitly targets
              investors willing to buy and operate established companies locally, with job creation and governance at the
              centre of the design.
            </p>
            <p className="text-[#15364A]">
              For families already comfortable with private equity or direct deals, these “hands-on” programs can sit alongside
              more passive fund allocations in Europe.
            </p>

            <h3 className="text-xl font-semibold mt-2">3. High-quality talent &amp; digital-nomad regimes</h3>
            <p className="text-[#15364A]">
              Although not classic golden visas, long-stay digital-nomad and talent visas in Europe, the Middle East and Asia
              have become an important part of the mix for younger founders and professionals. These routes rarely require
              large investments but often coexist with fund or business allocations designed for long-term residency.
            </p>
          </section>

          <section id="losers-2025" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ArrowDownRight size={22} /> Models Under Pressure &amp; “Losers”
            </h2>
            <p className="text-[#15364A]">
              On the other side of the ledger are models that face sustained headwinds – not always because they are “bad”,
              but because they sit uncomfortably with current policy and reputational trends.
            </p>

            <h3 className="text-xl font-semibold mt-2">1. Purely transactional real-estate plays</h3>
            <p className="text-[#15364A]">
              Programs that link residency or citizenship directly to the purchase of a single apartment or villa are
              increasingly targeted by regulators and the media. Where these routes survive, minimums often rise and due
              diligence intensifies. For many families, the binary “buy a flat, get a visa” narrative has simply lost its
              appeal.
            </p>

            <h3 className="text-xl font-semibold mt-2">2. Opaque or lightly regulated CBI schemes</h3>
            <p className="text-[#15364A]">
              Citizenship-by-investment programs with limited transparency on source-of-funds, security vetting or use-of-
              proceeds have come under coordinated pressure. Banks and wealth managers are also more cautious about clients who
              rely on these passports as their primary mobility tool.
            </p>

            <h3 className="text-xl font-semibold mt-2">3. Schemes misaligned with OECD tax norms</h3>
            <p className="text-[#15364A]">
              Structures marketed primarily as tax arbitrage vehicles – rather than as part of a balanced, on-the-record
              planning strategy – are also increasingly fragile. The direction of travel is clear: <strong>substance,
              transparency and alignment</strong> with global standards.
            </p>
          </section>

          <section id="portugal-role" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MapPin size={22} /> Portugal’s Fund-Based Golden Visa in Context
            </h2>
            <p className="text-[#15364A]">
              Portugal sits at the intersection of these trends. With real-estate-based options phased out, the flagship route
              is now the <strong>€500,000 fund investment</strong> into a CMVM-supervised vehicle that meets specific criteria
              on maturity, asset allocation and governance.
            </p>
            <p className="text-[#15364A]">
              For Explorer Investments, this is not simply a legal box to tick. It is an opportunity to direct capital into
              productive assets – mid-market companies, platforms and infrastructure – using private equity and real-economy
              lenses that we have refined across cycles.
            </p>
            <p className="text-[#15364A]">
              For a deeper dive on how this interacts with US rules like PFIC, FATCA and CRS, see our dedicated piece{' '}
              <Link
                href="/us-tax-compliance-portugal-golden-visa-funds-2025"
                className="underline underline-offset-4"
              >
                US Tax &amp; PFIC Rules for Portugal Golden Visa Funds (2025 Guide)
              </Link>
              .
            </p>
          </section>

          <section id="us-investor-lens" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShieldCheck size={22} /> The US Investor Lens: Tax, Regulation &amp; Optionality
            </h2>
            <p className="text-[#15364A]">
              US citizens and long-term residents approach investment migration with an additional layer of complexity:
              worldwide taxation, PFIC rules, FATCA, SEC considerations and, in some cases, family-governance dynamics across
              multiple generations.
            </p>
            <p className="text-[#15364A]">
              Three principles tend to guide robust US strategies:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>
                <strong>Nothing “off the grid”:</strong> credible, fully-reportable structures designed to work with US tax and
                regulatory disclosure, not around them.
              </li>
              <li>
                <strong>Investment first, visa second:</strong> the underlying allocation – often private equity, growth or
                infrastructure – must stand on its own merits.
              </li>
              <li>
                <strong>Multi-jurisdiction resilience:</strong> residency options in Europe, potentially Asia-Pacific and
                sometimes the Middle East, layered onto a globally diversified portfolio.
              </li>
            </ul>
            <p className="text-[#15364A]">
              In this context, fund-based residency routes in Portugal and business-investor programs in places like New Zealand
              can complement each other rather than compete.
            </p>
          </section>

          <section id="portfolio-construction" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <BarChart3 size={22} /> Building a Multi-Jurisdiction Mobility Portfolio
            </h2>
            <p className="text-[#15364A]">
              Thinking about investment migration through a portfolio lens is often more productive than chasing individual
              programs. A typical high-level architecture might include:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>
                A <strong>European anchor</strong> via a regulated Portugal Golden Visa fund allocation.
              </li>
              <li>
                An <strong>Asia-Pacific operating base</strong> via a business investor visa – for example, New Zealand –
                anchored in a real company.
              </li>
              <li>
                Core <strong>US onshore assets</strong> and global liquid portfolios for liquidity, risk management and
                long-term wealth creation.
              </li>
            </ul>
            <p className="text-[#15364A]">
              The precise mix will vary, but the underlying idea is constant: residency programs are a tool for structuring where
              you and your capital can move, not a replacement for a coherent investment process.
            </p>
          </section>

          <section id="explorer-perspective" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShieldCheck size={22} /> Explorer’s Perspective: Private Equity at the Core
            </h2>
            <p className="text-[#15364A]">
              Explorer Investments is first and foremost a private equity and real-economy investor. Our role in the investment
              migration ecosystem is to design and manage <strong>regulated funds</strong> that:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>Target resilient, cash-generative companies and platforms.</li>
              <li>Align investor and manager incentives over multi-year horizons.</li>
              <li>Comply with CMVM and other regulatory frameworks.</li>
              <li>In some cases, qualify as eligible vehicles for Portugal’s Golden Visa regime.</li>
            </ul>
            <Quote>
              Our starting point is always the investment thesis. The fact that certain funds also support a residency or golden
              visa outcome is a consequence of how they are structured – not their primary purpose.
            </Quote>
            <p className="text-[#15364A]">
              From there, we work alongside independent immigration, legal and tax advisers chosen by each family to help
              ensure that the capital allocation, the structures around it and the residency objectives move in the same
              direction.
            </p>
          </section>

          {/* FAQs */}
          <section id="faqs-winners-losers" className="space-y-4">
            <h2 className="text-2xl font-bold">FAQs: Winners &amp; Losers in Investment Migration 2025</h2>

            <div className="space-y-3 text-[#15364A]">
              <div>
                <h3 className="font-semibold text-lg">
                  1. What defines a “winner” investment migration program in 2025?
                </h3>
                <p>
                  The most resilient programs combine rule stability, strong due diligence, clear economic contribution and
                  credible investment options, often via regulated funds or well-designed business routes.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  2. Are golden visas disappearing?
                </h3>
                <p>
                  The label “golden visa” is evolving rather than disappearing. Property-centric and lightly regulated
                  approaches are under pressure, while fund-based and business-investor models within solid legal frameworks
                  remain in demand.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  3. How should US investors approach program selection?
                </h3>
                <p>
                  US investors should treat program selection as part of a wider asset allocation and tax strategy, involving
                  cross-border advisers from the outset and favouring structures that are fully compatible with PFIC, FATCA and
                  SEC considerations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  4. Where does Portugal’s Golden Visa via funds fit?
                </h3>
                <p>
                  It often serves as a European hub, giving families Schengen access and, over time and subject to evolving
                  rules, potential residence or citizenship, while capital is deployed into professionally managed private
                  market strategies.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  5. Should investors still consider real estate?
                </h3>
                <p>
                  Real estate can still play a role in portfolios, but as an investment it should be evaluated on fundamentals:
                  yield, location, diversification and leverage – not simply because it is attached to a visa program.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  6. Does Explorer advise on which program a family should choose?
                </h3>
                <p>
                  No. Explorer’s focus is on regulated investment vehicles. Decisions around which residency or citizenship
                  route to pursue should be made with independent immigration, tax and legal advisers.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  7. How can families combine multiple programs?
                </h3>
                <p>
                  Many families maintain a primary base in one jurisdiction while using fund-based or business-investor
                  programs elsewhere as optionality. The key is to coordinate timelines, tax residence and family objectives
                  across all jurisdictions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  8. What is the typical time horizon for these strategies?
                </h3>
                <p>
                  Most serious investment migration allocations should be planned on a five-to-ten-year horizon, particularly
                  where private equity funds and residency milestones are involved.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="conclusion-cta" className="space-y-4">
            <h2 className="text-2xl font-bold">Conclusion &amp; Next Steps</h2>
            <p className="text-[#15364A]">
              In 2025, the clear winners in investment migration are programs that treat investors as long-term partners in the
              host economy – not as short-term buyers of passports or apartments. Fund-based routes in Portugal and serious
              business-investor visas in jurisdictions like New Zealand are emblematic of this shift.
            </p>
            <p className="text-[#15364A]">
              For Explorer Investments, that shift aligns naturally with a private equity mindset: deploying capital into
              resilient companies and platforms, within transparent, regulated vehicles that can support – but never define –
              a family’s residency strategy.
            </p>
            <p className="text-[#15364A]">
              If you would like to explore how a Golden Visa-eligible fund allocation could sit inside a broader multi-
              jurisdiction plan, our team can work alongside your existing legal and tax advisers to map out potential
              scenarios and constraints.
            </p>
            <CtaSection />
          </section>
        </div>
      </section>

      <BlogPreviewGridFromXML currentSlug={SLUG} />

      <Footer />
    </>
  );
}
