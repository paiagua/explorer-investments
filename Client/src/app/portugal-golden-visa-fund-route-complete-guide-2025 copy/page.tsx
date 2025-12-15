// /app/new-zealand-business-investor-work-visa-us-investors-2025/page.tsx

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
  Globe,
  TrendingUp,
  BriefcaseBusiness,
  ShieldCheck,
  BarChart,
  MapPin
} from 'lucide-react';

// ===================================================================
// METADATA
// ===================================================================
const SLUG = 'new-zealand-business-investor-work-visa-us-investors-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/new-zealand-business-investor-visa.jpg';
const PUBLISHED = '2025-11-25T10:45:00+00:00';

export const metadata = {
  title: 'New Zealand Business Investor Work Visa 2025 | Guide for US Investors',
  description:
    'US demand for New Zealand’s new Business Investor Work Visa is surging. Discover investment options, rules and how it compares to EU golden visa funds.',
  openGraph: {
    title: 'New Zealand Business Investor Work Visa 2025 | Guide for US Investors',
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
    'New Zealand’s New Business Investor Work Visa: The Next ‘Golden Visa’ for US Investors',
  description:
    'A practical guide to New Zealand’s new Business Investor Work Visa, the investment thresholds and how it fits alongside EU golden visa fund solutions for US HNW families.',
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
      name: 'New Zealand Business Investor Work Visa for US Investors',
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
      name: 'What is New Zealand’s Business Investor Work Visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is a four-year work visa that lets investors buy and actively run an eligible established business in New Zealand, in exchange for a minimum NZD 1 million or NZD 2 million investment, and offers a pathway to permanent residence if specific business, investment and presence conditions are met.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do I need to invest under the Business Investor Work Visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are two pathways: a standard pathway with at least NZD 1 million invested in an eligible established business and a three-year work-to-residence track, and a fast-track pathway that requires at least NZD 2 million and may lead to residence after around 12 months, provided all other conditions are met.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Business Investor Work Visa a “golden visa”?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While it is not formally called a golden visa, it functions similarly: investors commit capital to New Zealand, actively run a qualifying business and, if conditions are met, can transition from temporary status to long-term residence for themselves and their families.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can qualify for New Zealand’s Business Investor Work Visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Applicants must generally be 55 or younger, able to invest at least NZD 1 million or NZD 2 million in an eligible established business, hold at least NZD 500,000 in reserve funds, meet business experience and English-language requirements, be of good character and health and meet job-creation and ownership rules.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long before I can apply for residence through the Business Investor pathway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard pathway typically involves around three years of running the business in New Zealand before you can apply for the Business Investor Resident Visa, while the fast-track pathway may allow for an application after about 12 months, provided you invested the higher amount and satisfied all performance and presence criteria.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my family join me on the Business Investor Work Visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Eligible partners and dependent children can generally be included, allowing the entire household to live, study and, in some cases, work in New Zealand while you operate the qualifying business.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does New Zealand’s Business Investor Work Visa compare to Portugal’s Golden Visa fund route?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New Zealand focuses on hands-on business ownership with higher day-to-day involvement and strict operational criteria, while Portugal’s Golden Visa fund route allows a EUR 500,000 subscription into a regulated investment fund, with relatively low physical stay requirements and a more passive investment structure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are any business types excluded from the Business Investor Work Visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Certain sectors such as gambling, adult entertainment, some franchises, convenience and fast-food outlets, tobacco and similar activities are generally excluded. The business normally needs a trading history of at least five years and must employ several full-time staff.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I still pay US tax if I move to New Zealand on a golden visa-style route?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'US citizens and green card holders are generally taxed on their worldwide income, regardless of where they live. Moving to New Zealand does not, by itself, remove US tax obligations. Specialist cross-border tax advice is essential before making any relocation or investment decision.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can Explorer Investments help US investors exploring golden visas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Explorer Investments focuses on regulated fund-based solutions such as the Portuguese Golden Visa via EUR 500,000 subscriptions into CMVM-supervised funds. For US families, Explorer can help position New Zealand’s Business Investor Work Visa alongside European residency options within a broader wealth, mobility and succession strategy, in coordination with legal and tax advisers.',
      },
    },
  ],
};

export default function NewZealandBusinessInvestorVisaPage() {
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
              <TrendingUp size={16} /> Golden Visas &amp; Global Mobility
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              New Zealand’s New Business Investor Work Visa: The Next ‘Golden Visa’ for US Investors
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              New Zealand has launched a four-year Business Investor Work Visa that lets high-net-worth families buy and run
              established businesses in exchange for a clear pathway to residence — just as US demand for investor visas hits new highs.
            </p>
            <p className="text-xs text-[#5A6F7B] mt-2">
              By Explorer Investments • Updated November 2025 • Not legal or tax advice
            </p>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image
              src={OG_IMAGE}
              alt="New Zealand Business Investor Work Visa explained for US golden visa investors"
              fill
              className="object-cover"
            />
          </figure>

          {/* Intro Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">US Applicants</p>
              <p className="text-xl font-bold">+72% Since Summer</p>
            </div>
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">Pathway</p>
              <p className="text-xl font-bold">Work → Residence</p>
            </div>
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">Investment</p>
              <p className="text-xl font-bold">NZD 1-2m</p>
            </div>
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">Reserve Funds</p>
              <p className="text-xl font-bold">NZD 500k+</p>
            </div>
          </div>

          <Quote>
            US families are no longer chasing just tax arbitrage; they want resilient jurisdictions. New Zealand’s new investor
            visa, alongside Portugal’s EUR 500k fund-based Golden Visa, gives them powerful tools to build that optionality.
          </Quote>

          {/* Table of Contents */}
          <nav
            aria-label="Table of contents"
            className="bg-[#F7F3E6] border border-[#E1D5B8] rounded-xl p-4 text-sm"
          >
            <h2 className="font-semibold mb-2">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-1">
              <li>
                <a href="#why-boom-us-investors" className="hover:underline">
                  Why New Zealand Is on US Investors’ Radar
                </a>
              </li>
              <li>
                <a href="#how-program-works" className="hover:underline">
                  How the Business Investor Work Visa Works
                </a>
              </li>
              <li>
                <a href="#eligibility-requirements" className="hover:underline">
                  Key Eligibility &amp; Business Requirements
                </a>
              </li>
              <li>
                <a href="#pathway-residence" className="hover:underline">
                  From Work Visa to Residence
                </a>
              </li>
              <li>
                <a href="#nz-vs-eu-golden-visas" className="hover:underline">
                  New Zealand vs. EU Golden Visa Funds
                </a>
              </li>
              <li>
                <a href="#portfolio-role" className="hover:underline">
                  Portfolio Role &amp; Risk
                </a>
              </li>
              <li>
                <a href="#explorer-perspective" className="hover:underline">
                  Explorer’s Perspective
                </a>
              </li>
              <li>
                <a href="#faqs-nz-business-investor" className="hover:underline">
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
          <section id="why-boom-us-investors" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Globe size={22} /> Why New Zealand Is on US Investors’ Radar
            </h2>
            <p className="text-[#15364A]">
              New Zealand has long ranked highly for safety, governance and lifestyle. In 2025, that reputation translated into
              a sharp rise in investor visa interest from the United States, with applications under the existing Active Investor
              Plus framework rising significantly as global uncertainty and domestic polarisation accelerated “Plan B” thinking.
            </p>
            <p className="text-[#15364A]">
              The government’s answer has been to refine its investor toolkit — easing some requirements and launching a brand-new
              Business Investor Work Visa that targets entrepreneurs willing to own and run established businesses on the ground.
            </p>
          </section>

          <section id="how-program-works" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <BriefcaseBusiness size={22} /> How the Business Investor Work Visa Works
            </h2>
            <p className="text-[#15364A]">
              The Business Investor Work Visa is a four-year category for investors who buy and actively operate an eligible,
              established New Zealand business. In return, it offers a clear, rules-based pathway to a separate Business Investor
              Resident Visa, subject to meeting investment, performance and presence criteria.
            </p>

            <h3 className="text-xl font-semibold mt-2">Two investment pathways</h3>
            <ul className="list-disc pl-5 text-[#15364A] space-y-2">
              <li>
                <strong>Standard pathway (NZD 1m):</strong> invest at least NZD 1 million into an eligible established business
                and run it for a multi-year period, aiming for a three-year work-to-residence trajectory.
              </li>
              <li>
                <strong>Fast-track pathway (NZD 2m):</strong> invest at least NZD 2 million, with the potential to apply for
                residence after roughly 12 months once performance and presence rules are satisfied.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-2">Reserve funds on top</h3>
            <p className="text-[#15364A]">
              On top of the core investment, applicants must hold at least <strong>NZD 500,000 in reserve funds</strong> to
              support themselves and their family while running and scaling the business. These reserves sit in addition to the
              invested capital.
            </p>
          </section>

          <section id="eligibility-requirements" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShieldCheck size={22} /> Key Eligibility &amp; Business Requirements
            </h2>
            <p className="text-[#15364A]">
              The visa is aimed at credible entrepreneurs and executives. Having cash is not enough - applicants must show they
              can add value to New Zealand’s economy.
            </p>

            <h3 className="text-xl font-semibold mt-2">Personal criteria</h3>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>55 years old or younger at the time of application.</li>
              <li>Meet English-language benchmarks (for example, IELTS or equivalents).</li>
              <li>Meet health and character standards and be a “fit and proper” person.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-2">Business experience</h3>
            <p className="text-[#15364A]">
              Applicants are expected to show at least three years of meaningful business experience, which might include:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>Owning a business with five or more full-time employees; or</li>
              <li>Owning a business with annual revenue of at least NZD 1 million; or</li>
              <li>Senior management roles in a sizeable commercial organisation.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-2">Qualifying businesses &amp; excluded sectors</h3>
            <p className="text-[#15364A]">
              The target New Zealand business typically needs a trading history of at least five years, employ multiple full-time
              staff and create at least one new job for a citizen or resident. Activities such as gambling, adult entertainment,
              tobacco, some franchises and certain convenience or fast-food outlets are usually excluded.
            </p>
          </section>

          <section id="pathway-residence" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <BarChart size={22} /> From Work Visa to Residence
            </h2>
            <p className="text-[#15364A]">
              The Business Investor Work Visa itself is temporary. To transition to a Business Investor Resident Visa, investors
              must usually prove that they:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>Maintained the required investment in the business.</li>
              <li>Stayed actively involved in day-to-day operations.</li>
              <li>
                Created and maintained at least one new full-time job for a New Zealand citizen or resident for at least 12 months.
              </li>
              <li>Kept the business solvent and compliant.</li>
              <li>Met minimum physical-presence requirements over several years.</li>
            </ul>
          </section>

          <section id="nz-vs-eu-golden-visas" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MapPin size={22} /> New Zealand vs. EU Golden Visa Funds
            </h2>
            <p className="text-[#15364A]">
              For US investors already looking at Portugal, Greece or Spain, the natural question is how New Zealand’s Business
              Investor Work Visa compares to fund-based EU golden visa routes.
            </p>

            <h3 className="text-xl font-semibold mt-2">Hands-on company vs. regulated fund</h3>
            <p className="text-[#15364A]">
              New Zealand demands hands-on ownership of a local business - with staff, customers and operational risk. Portugal’s
              Golden Visa fund route, by contrast, allows a <strong>EUR 500,000</strong> subscription into a CMVM-regulated fund,
              with professional managers and relatively low time-in-country requirements.
            </p>

            <p className="text-[#15364A]">
              For many US families, the answer is not “this or that” but “how do they work together?”. New Zealand can anchor an
              Asia-Pacific lifestyle and business project, while a Portuguese fund allocation secures Schengen access and a
              European base.
            </p>

            <p className="text-[#15364A]">
              In our article{' '}
              <Link
                href="/5-trending-retirement-golden-visa-destinations-americans-2025"
                className="underline underline-offset-4"
              >
                5 Trending Retirement &amp; Golden Visa Destinations for Americans
              </Link>
              , we explore how Portugal, Greece, Spain and others fit into the wider conversation for US retirees and investors.
            </p>
          </section>

          <section id="portfolio-role" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <BarChart size={22} /> Portfolio Role &amp; Risk
            </h2>
            <p className="text-[#15364A]">
              From a portfolio standpoint, the Business Investor Work Visa is about turning an operating company into a mobility
              asset. Returns are driven by EBITDA growth, cash generation and potential multiple expansion - not by headline yield.
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li><strong>Opportunity:</strong> exposure to a stable, high-quality jurisdiction with real-economy upside.</li>
              <li><strong>Risk:</strong> sector dynamics, execution, regulatory changes and concentration in a single market.</li>
              <li><strong>Complement:</strong> diversified fund allocations in Portugal and beyond, plus liquid global assets.</li>
            </ul>
          </section>

          <section id="explorer-perspective" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShieldCheck size={22} /> Explorer’s Perspective: Pairing NZ with a Portuguese Fund Route
            </h2>
            <p className="text-[#15364A]">
              Explorer Investments is rooted in private equity and real-economy value creation. Our Portuguese Golden Visa fund
              solutions channel EUR 500,000+ into CMVM-regulated vehicles targeting resilient, cash-generative companies — with
              the added benefit of a structured residency path.
            </p>
            <p className="text-[#15364A]">
              For US families, New Zealand’s Business Investor Work Visa can sit alongside a Portuguese fund allocation as part
              of a multi-jurisdiction strategy:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>Asia-Pacific presence via an operating business in New Zealand.</li>
              <li>European base via a regulated Portuguese Golden Visa fund.</li>
              <li>
                Coordinated tax, estate and succession planning across the US, EU and New Zealand with specialist advisers.
              </li>
            </ul>
            <Quote>
              Capital should stay productive. Whether in a New Zealand business or a Portuguese fund, the visa should be the
              secondary benefit of a sound investment thesis — not the other way around.
            </Quote>
          </section>

          {/* FAQs */}
          <section id="faqs-nz-business-investor" className="space-y-4">
            <h2 className="text-2xl font-bold">FAQs: New Zealand Business Investor Work Visa</h2>

            <div className="space-y-3 text-[#15364A]">
              <div>
                <h3 className="font-semibold text-lg">
                  1. What is New Zealand’s Business Investor Work Visa?
                </h3>
                <p>
                  It is a four-year work visa that allows you to buy and actively run an eligible established business in New
                  Zealand in exchange for a minimum investment, with a pathway to a separate Business Investor Resident Visa if
                  you meet all criteria.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">2. How much do I need to invest?</h3>
                <p>
                  You can choose between a NZD 1 million standard pathway, typically tied to a three-year work-to-residence
                  timeline, or a NZD 2 million fast-track where residence may become available after roughly 12 months of
                  successful business performance and presence.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">3. Do I also need additional funds?</h3>
                <p>
                  Yes. You must hold at least NZD 500,000 in reserve funds to support yourself and your family while running the
                  business. This is in addition to the invested capital.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">4. Can my spouse and children join me?</h3>
                <p>
                  In most cases, eligible partners and dependent children can be included in your application, allowing them to
                  live, study and, in some instances, work in New Zealand.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  5. How does this differ from the Active Investor Plus Visa?
                </h3>
                <p>
                  Active Investor Plus targets larger capital deployments across a range of acceptable investments. The Business
                  Investor Work Visa is more focused on hands-on ownership and operation of a specific established business.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  6. How does this compare to Portugal’s Golden Visa via investment funds?
                </h3>
                <p>
                  Portugal’s fund route is more passive, via a EUR 500,000 subscription into a CMVM-regulated fund with modest
                  presence requirements. New Zealand’s path requires significantly more day-to-day involvement in a local
                  company.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">7. Are certain business sectors excluded?</h3>
                <p>
                  Yes. Businesses involving gambling, adult entertainment, tobacco, some franchises and certain convenience or
                  fast-food outlets are typically excluded. Always check the latest official guidance.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  8. Will I still have US tax obligations if I move under this visa?
                </h3>
                <p>
                  US citizens and long-term residents are generally taxed on worldwide income. Moving to New Zealand does not
                  automatically change that. Cross-border tax advice is essential.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  9. Does Explorer Investments provide immigration or tax advice?
                </h3>
                <p>
                  Explorer does not offer legal, tax or immigration advice. We design and manage regulated investment solutions,
                  such as Portuguese Golden Visa funds, and work alongside your chosen professional advisers.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  10. How do I explore a combined Portugal-New Zealand strategy?
                </h3>
                <p>
                  The first step is an exploratory conversation about your objectives, timelines and risk appetite. From there,
                  we can structure a portfolio centred on regulated funds and operating businesses, while your legal and tax
                  teams shape the immigration and fiscal architecture.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="conclusion-cta" className="space-y-4">
            <h2 className="text-2xl font-bold">Conclusion &amp; Next Steps</h2>
            <p className="text-[#15364A]">
              New Zealand’s Business Investor Work Visa is a serious, operationally demanding route into one of the world’s most
              stable democracies. For US investors prepared to own and run a business, it can sit alongside a Portuguese Golden
              Visa fund allocation as part of a sophisticated multi-jurisdiction plan.
            </p>
            <p className="text-[#15364A]">
              If you would like to understand how a New Zealand allocation could complement a EUR 500,000 investment into an
              Explorer-managed, CMVM-regulated fund in Portugal, our team can coordinate with your legal and tax advisers to map
              out the options.
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
