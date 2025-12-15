// app/(blog)/2026-portugal-golden-visa-guide/page.tsx

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
  ShieldCheck,
  BarChart,
  TrendingUp,
  Globe,
  MapPin,
  FileCheck2,
} from 'lucide-react';

// ===================================================================
// METADATA
// ===================================================================
const SLUG = '2026-portugal-golden-visa-guide';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-2026-guide.jpg';
const PUBLISHED = '2025-12-03T13:37:00+00:00';

export const metadata = {
  title:
    'Portugal Golden Visa 2026 Guide – CMVM Funds, Law Freeze & 5-Year Citizenship',
  description:
    'Updated 2026 guide to the Portugal Golden Visa. Understand the CMVM-regulated €500k fund route, the nationality law freeze, and how to secure a 5-year path to EU citizenship with Explorer Investments.',
  openGraph: {
    title:
      'Portugal Golden Visa 2026 Guide – CMVM Funds, Law Freeze & 5-Year Citizenship',
    description:
      'Understand the CMVM-regulated €500k fund route, the nationality law freeze, and how to secure a 5-year path to EU citizenship with Explorer Investments.',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

// Helper
const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#002741] bg-[#FFFCF3] py-3 px-4 rounded-md my-6 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

const articleLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
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
          name: 'Portugal Golden Visa',
          item: 'https://goldenvisashub.com/portugal-golden-visa',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Portugal Golden Visa 2026 Guide',
          item: CANONICAL_URL,
        },
      ],
    },
    {
      '@type': 'Article',
      headline:
        'Portugal Golden Visa 2026 Guide – CMVM Funds, Law Freeze & 5-Year Citizenship',
      description:
        'Updated 2026 guide to the Portugal Golden Visa. Understand the CMVM-regulated €500k fund route, the nationality law freeze, and how to secure a 5-year path to EU citizenship with Explorer Investments.',
      author: {
        '@type': 'Organization',
        name: 'Explorer Investments',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Golden Visas Hub',
        logo: {
          '@type': 'ImageObject',
          url: 'https://goldenvisashub.com/assets/images/logo.png',
        },
      },
      datePublished: PUBLISHED,
      dateModified: '2025-12-04T09:00:00+00:00',
      image: OG_IMAGE,
      mainEntityOfPage: CANONICAL_URL,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the Portugal Golden Visa still available in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The Portugal Golden Visa remains available in 2026, with the most robust and compliant route being a €500,000 investment into a CMVM-regulated Portuguese fund that qualifies for the program.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does the nationality law freeze mean for Golden Visa investors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Portugal’s proposed citizenship law change has been suspended under a constitutional review. Until the review is concluded, the existing 5-year path to citizenship remains valid for Golden Visa investors.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much do I need to invest for the Portugal Golden Visa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most widely used route is a €500,000 subscription into a CMVM-regulated investment fund that is eligible for the Portugal Golden Visa.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to live full-time in Portugal to keep my Golden Visa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The physical presence requirement is very low. You only need to spend an average of seven days per year in Portugal to maintain residency via the Golden Visa.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are CMVM-regulated funds in the context of the Golden Visa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CMVM-regulated funds are Portuguese investment funds licensed and supervised by Portugal’s securities market commission. They are independently audited, professionally managed and must comply with strict reporting and investor protection rules.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can my family be included in the Portugal Golden Visa application?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Spouses, dependent children and, in some cases, dependent parents can be included in a single Golden Visa application, sharing the same residency and future citizenship timeline.',
          },
        },
        {
          '@type': 'Question',
          name: 'What documents do I need for AML and KYC checks?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You will need identity documents, tax returns, bank and investment account statements, proof of source of funds and clean police clearance certificates from every country where you have lived in the last 5 years.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if the citizenship law changes after I invest?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Historically, investors who entered under a given legal framework continue under that framework. The current law freeze is seen as a window to lock in the existing 5-year path, but you should work with an experienced legal team to monitor any changes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is real estate still the main route for the Portugal Golden Visa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The program has evolved from property-driven routes towards regulated financial products, with CMVM-supervised funds now providing the most compliant and widely used pathway.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can Explorer Investments help with the Portugal Golden Visa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Explorer Investments works with CMVM-regulated private equity and sector-focused funds designed for Golden Visa eligibility, coordinating with specialist immigration counsel to align your investment allocation with residency and citizenship planning.',
          },
        },
      ],
    },
  ],
};

export default function PortugalGoldenVisa2026Guide() {
  return (
    <>
      <Script
        id="ld-article-faq-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Title */}
          <header>
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <ShieldCheck size={16} /> Portugal • Golden Visa • EU Residency
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Portugal Golden Visa 2026 Guide: CMVM-Regulated Funds, Nationality
              Law Freeze &amp; 5-Year Citizenship
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              Portugal’s Golden Visa has evolved from a property-driven program
              into a regulated financial product. In 2026 the blue-chip route is
              clear: a €500k CMVM-supervised fund unlocking low-presence EU
              residency and a potential 5-year path to citizenship.
            </p>
            <p className="text-xs text-[#5A6F7B] mt-2">
              By Explorer Investments • Updated 2026
            </p>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image
              src={OG_IMAGE}
              alt="Portugal Golden Visa 2026 fund-based guide"
              fill
              className="object-cover"
            />
          </figure>

          {/* Intro Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="text-center border rounded-lg py-3 px-2 text-xs sm:text-sm">
              <p className="uppercase tracking-wide text-[#5A6F7B]">
                Citizenship Timeline
              </p>
              <p className="text-xl font-bold">5 Years*</p>
              <p className="text-[11px] text-[#5A6F7B] mt-1">
                Subject to current law &amp; eligibility
              </p>
            </div>
            <div className="text-center border rounded-lg py-3 px-2 text-xs sm:text-sm">
              <p className="uppercase tracking-wide text-[#5A6F7B]">Route</p>
              <p className="text-xl font-bold">€500k Fund</p>
              <p className="text-[11px] text-[#5A6F7B] mt-1">
                CMVM-regulated investment
              </p>
            </div>
            <div className="text-center border rounded-lg py-3 px-2 text-xs sm:text-sm">
              <p className="uppercase tracking-wide text-[#5A6F7B]">
                Stay Requirement
              </p>
              <p className="text-xl font-bold">7 days/yr</p>
              <p className="text-[11px] text-[#5A6F7B] mt-1">
                Average physical presence
              </p>
            </div>
            <div className="text-center border rounded-lg py-3 px-2 text-xs sm:text-sm">
              <p className="uppercase tracking-wide text-[#5A6F7B]">
                Mobility
              </p>
              <p className="text-xl font-bold">Schengen</p>
              <p className="text-[11px] text-[#5A6F7B] mt-1">
                Visa-free Schengen access
              </p>
            </div>
          </div>

          {/* Quote */}
          <Quote>
            <span className="font-semibold">Explorer Investments:</span>{' '}
            Global mobility is now part of portfolio construction. A CMVM-
            regulated €500k fund in Portugal can sit alongside private equity
            and listed assets, while opening a structured route to EU
            residency—and, potentially, citizenship after five years.
          </Quote>

          {/* Table of Contents */}
          <section
            id="table-of-contents"
            className="border border-gray-200 rounded-xl p-5 bg-[#F8FAFC]"
          >
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <FileCheck2 size={18} /> Table of Contents
            </h2>
            <ol className="space-y-1 text-sm text-[#15364A] list-decimal list-inside">
              <li>
                <a href="#overview" className="hover:text-[#B4A77E]">
                  Why the Portugal Golden Visa Remains the Gold Standard
                </a>
              </li>
              <li>
                <a href="#nationality-law-freeze" className="hover:text-[#B4A77E]">
                  Nationality Law Freeze: What It Means for 2026
                </a>
              </li>
              <li>
                <a href="#program-features" className="hover:text-[#B4A77E]">
                  Key Program Features in 2026
                </a>
              </li>
              <li>
                <a
                  href="#eligibility-requirements"
                  className="hover:text-[#B4A77E]"
                >
                  Eligibility &amp; Golden Visa Requirements
                </a>
              </li>
              <li>
                <a href="#cmvm-funds" className="hover:text-[#B4A77E]">
                  CMVM-Regulated Funds: The Modern Route
                </a>
              </li>
              <li>
                <a href="#strategy-2026" className="hover:text-[#B4A77E]">
                  Strategy: How to Use 2026 as an Opportunity Window
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#B4A77E]">
                  FAQs: Portugal Golden Visa 2026
                </a>
              </li>
              <li>
                <a href="#conclusion" className="hover:text-[#B4A77E]">
                  Conclusion &amp; Next Steps
                </a>
              </li>
            </ol>
          </section>

          {/* 1. Overview */}
          <section id="overview" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Globe size={22} /> 1. Why the Portugal Golden Visa Remains the
              Gold Standard
            </h2>
            <p className="text-[#15364A]">
              Over the last decade the{' '}
              <strong>Portugal Golden Visa</strong> has transitioned from a
              property-driven residency by investment to a{' '}
              <strong>regulated financial product</strong>. CMVM—Portugal’s
              securities market commission, similar to the SEC in the
              United States—has strengthened investor protection by requiring
              Golden Visa funds to be licensed, audited and professionally
              managed.
            </p>
            <p className="text-[#15364A]">
              The result is a residency route that is:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>Respected and <strong>politically stable</strong></li>
              <li>
                Built on <strong>clear regulation</strong> and audited
                structures
              </li>
              <li>
                Designed with a <strong>low physical presence requirement</strong>{' '}
                (around seven days per year)
              </li>
              <li>
                Structured to permit <strong>permanent residency or citizenship</strong>{' '}
                after five years, subject to eligibility
              </li>
            </ul>
          </section>

          {/* 2. Nationality Law Freeze */}
          <section id="nationality-law-freeze" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <TrendingUp size={22} /> 2. Nationality Law Freeze: What It Means
              for 2026
            </h2>
            <p className="text-[#15364A]">
              Portugal’s parliament passed significant changes to the nationality
              law that would impact citizenship timelines. Before the president
              could sign, the law was sent for <strong>preventative
              constitutional review</strong>, which immediately{' '}
              <strong>froze the law change</strong>.
            </p>
            <p className="text-[#15364A]">
              Until the review concludes and any amendment is published:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>
                The current <strong>5-year rule for citizenship</strong> still
                applies.
              </li>
              <li>
                Golden Visa investors can continue to plan around the existing
                framework.
              </li>
              <li>
                The freeze creates a <strong>time-sensitive window</strong> to
                secure the Golden Visa under the favorable rules still in place.
              </li>
            </ul>
          </section>

          {/* 3. Program Features */}
          <section id="program-features" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <BarChart size={22} /> 3. Key Program Features in 2026
            </h2>

            <h3 className="text-xl font-semibold">3.1 Processing Time</h3>
            <p className="text-[#15364A]">
              Average approval time typically ranges from <strong>8–12 months</strong>,
              depending on the completeness of the file and immigration office
              workloads.
            </p>

            <h3 className="text-xl font-semibold">
              3.2 Low Physical Presence Requirement
            </h3>
            <p className="text-[#15364A]">
              Portugal offers one of the <strong>lowest stay requirements</strong>{' '}
              in Europe for residency by investment:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>Average of seven days per year in Portugal</li>
              <li>Can usually be fulfilled in a single annual trip</li>
              <li>Applies to the main investor and included family members</li>
            </ul>

            <h3 className="text-xl font-semibold">3.3 Core Benefits</h3>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>
                <strong>Schengen Area mobility</strong> for leisure and business
                travel
              </li>
              <li>
                <strong>Family reunification</strong> with spouse, children and
                certain dependent parents
              </li>
              <li>
                Possible <strong>permanent residency or citizenship</strong>{' '}
                after five years of legal residency
              </li>
              <li>
                Access to <strong>Portuguese healthcare and education</strong>
              </li>
              <li>
                Ability to maintain <strong>primary tax residency elsewhere</strong>,
                subject to local advice and minimum stay rules
              </li>
            </ul>
          </section>

          {/* 4. Eligibility & Requirements */}
          <section id="eligibility-requirements" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShieldCheck size={22} /> 4. Eligibility &amp; Golden Visa
              Requirements
            </h2>
            <p className="text-[#15364A]">
              The modern Portugal Golden Visa operates like any other{' '}
              <strong>regulated investment product</strong>: the fund,
              the banking process and the investors are all subject to
              compliance oversight.
            </p>

            <h3 className="text-xl font-semibold">
              4.1 €500k CMVM-Regulated Fund Investment
            </h3>
            <p className="text-[#15364A]">
              The most widely used route is a <strong>€500,000 subscription</strong>{' '}
              into a <strong>Portuguese fund eligible for the Golden Visa</strong>.
              Typical sectors include:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>Private equity and growth capital</li>
              <li>Technology and innovation</li>
              <li>Healthcare and biotech</li>
              <li>Renewable energy and infrastructure</li>
              <li>National development and impact strategies</li>
            </ul>

            <h3 className="text-xl font-semibold">
              4.2 CMVM Supervision &amp; Investor Protection
            </h3>
            <p className="text-[#15364A]">
              Funds regulated by <strong>CMVM</strong> must follow strict rules
              on licensing, reporting and governance:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>Qualified, licensed fund managers</li>
              <li>Independent annual audits</li>
              <li>Transparent reporting and risk disclosures</li>
              <li>Verification of strategy and structure</li>
              <li>Ongoing regulatory oversight</li>
            </ul>

            <h3 className="text-xl font-semibold">4.3 AML &amp; KYC</h3>
            <p className="text-[#15364A]">
              All investors must pass <strong>Anti-Money Laundering</strong> and{' '}
              <strong>Know Your Customer</strong> checks. Expect to provide:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>Passport and identity documents</li>
              <li>Tax returns and financial statements</li>
              <li>Bank and investment account statements</li>
              <li>Source-of-funds explanation with supporting evidence</li>
            </ul>

            <h3 className="text-xl font-semibold">
              4.4 Maintaining Your Investment
            </h3>
            <p className="text-[#15364A]">
              To protect your <strong>renewals and long-term path</strong> to
              Portuguese nationality:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>
                Keep the qualifying investment in place for the required period.
              </li>
              <li>
                Coordinate any restructuring or exit with your fund manager and
                immigration counsel.
              </li>
            </ul>

            <h3 className="text-xl font-semibold">4.5 Minimal Stay</h3>
            <p className="text-[#15364A]">
              The program is structured for globally mobile families:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>Average of seven days per year in Portugal</li>
              <li>Can usually be consolidated into one trip</li>
            </ul>

            <h3 className="text-xl font-semibold">
              4.6 Police Clearances &amp; Health Insurance
            </h3>
            <p className="text-[#15364A]">
              Applicants must present <strong>clean police clearance certificates</strong>{' '}
              from countries where they have lived in the last five years, and
              maintain <strong>health insurance valid in Portugal</strong>.
            </p>

            <h3 className="text-xl font-semibold">
              4.7 NIF, Portuguese Bank Account &amp; Legal Representation
            </h3>
            <p className="text-[#15364A]">
              Before subscribing into a Golden Visa fund you will:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>Obtain a Portuguese tax number (NIF)</li>
              <li>Open a Portuguese bank account</li>
              <li>
                Appoint a <strong>Portuguese lawyer</strong> via Power of Attorney
                to coordinate immigration and bank formalities
              </li>
            </ul>
          </section>

          {/* 5. CMVM Funds */}
          <section id="cmvm-funds" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <BarChart size={22} /> 5. CMVM-Regulated Funds: The Modern Golden
              Visa Route
            </h2>
            <p className="text-[#15364A]">
              The Portuguese Golden Visa has evolved away from informal,
              property-centric offerings and toward <strong>audited,
              CMVM-regulated funds</strong>. For serious investors this is a net
              positive: the program now looks and feels like a mainstream
              portfolio allocation.
            </p>
            <p className="text-[#15364A]">
              Explorer Investments and other institutional managers design{' '}
              <strong>private equity and sector-focused strategies</strong> that:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>Qualify for the €500k Golden Visa category</li>
              <li>
                Combine capital preservation with long-term value creation in
                the Portuguese economy
              </li>
              <li>
                Align the fund life cycle with the <strong>5-year residency</strong>{' '}
                and citizenship horizon
              </li>
            </ul>
            <p className="text-[#15364A]">
              For more detail on funds, see our overview of{' '}
              <Link
                href="/portugal-golden-visa-funds"
                className="underline decoration-[#B4A77E] hover:text-[#B4A77E]"
              >
                Portugal Golden Visa funds
              </Link>
              .
            </p>
          </section>

          {/* 6. Strategy */}
          <section id="strategy-2026" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MapPin size={22} /> 6. Strategy: How to Use 2026 as an
              Opportunity Window
            </h2>
            <p className="text-[#15364A]">
              The <strong>nationality law suspension</strong> has created a
              window in which investors can still rely on the existing five-year
              citizenship rule, yet see clearly that reforms are on the horizon.
            </p>

            <h3 className="text-xl font-semibold">6.1 Already Invested</h3>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>Your 5-year roadmap continues as before.</li>
              <li>The law freeze does not reverse or cancel your progress.</li>
              <li>
                Focus on renewals, minimum stay and ongoing compliance with your
                fund.
              </li>
            </ul>

            <h3 className="text-xl font-semibold">
              6.2 Considering Investing Now
            </h3>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>
                You can still <strong>apply under the current 5-year rule</strong>.
              </li>
              <li>
                There are no additional waiting periods currently imposed on
                Golden Visa applicants.
              </li>
              <li>
                Investing now allows you to <strong>lock in today’s rules</strong>{' '}
                before new requirements are implemented.
              </li>
            </ul>

            <h3 className="text-xl font-semibold">
              6.3 Integrating Explorer into a Wider Wealth Plan
            </h3>
            <p className="text-[#15364A]">
              For globally mobile families the Golden Visa sits alongside other
              allocations in <strong>private equity, real assets and public
              markets</strong>. With Explorer you can:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>
                Allocate €500k into a <strong>CMVM-regulated fund</strong> that
                qualifies for the program.
              </li>
              <li>
                Align investment risk/return with your broader portfolio
                strategy.
              </li>
              <li>
                Combine <strong>residency &amp; citizenship planning</strong>{' '}
                with institutional-grade asset management.
              </li>
            </ul>

            <Quote>
              Capital should stay productive. The Portugal Golden Visa fund route
              does exactly that—an investment, not a donation—while opening the
              door to European mobility for you and your family.
            </Quote>

            <p className="text-[#15364A]">
              For immigration-focused advice, many investors work with
              specialist firms such as{' '}
              <a
                href="https://www.retirementcitizenship.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#B4A77E] hover:text-[#B4A77E]"
              >
                RetirementCitizenship.com
              </a>{' '}
              alongside Explorer’s fund platform.
            </p>
          </section>

          {/* 7. FAQs */}
          <section id="faq" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShieldCheck size={22} /> 7. FAQs: Portugal Golden Visa 2026
            </h2>

            <div className="space-y-3 text-[#15364A] text-sm sm:text-base">
              <div>
                <h3 className="font-semibold">
                  Is the Portugal Golden Visa still available in 2026?
                </h3>
                <p>
                  Yes. The program remains active, with the fund-based €500k
                  route now the reference pathway for serious investors.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  What does the nationality law suspension mean for me?
                </h3>
                <p>
                  It means the existing 5-year citizenship timeline remains
                  valid while the law is under constitutional review. New
                  applicants can still structure their plan around this rule.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">How much do I need to invest?</h3>
                <p>
                  Most investors choose the <strong>€500,000 CMVM-regulated
                  fund</strong> route. Other categories may exist, but the fund
                  option offers the clearest combination of regulation,
                  diversification and Golden Visa eligibility.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Do I have to live full-time in Portugal?
                </h3>
                <p>
                  No. You only need to spend an average of seven days per year
                  in Portugal to maintain residency via the Golden Visa.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Can my spouse and children be included?
                </h3>
                <p>
                  Yes. Spouses, dependent children and, in certain cases,
                  dependent parents can be included under one Golden Visa
                  application and share the same residency and potential
                  citizenship path.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  What documents will I need for AML and KYC?
                </h3>
                <p>
                  Expect to provide passports, tax returns, bank/investment
                  statements, source-of-funds documentation, police clearance
                  certificates and proof of valid health insurance.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Is real estate still a main option?
                </h3>
                <p>
                  The Golden Visa has shifted towards <strong>regulated
                  financial products</strong>, with CMVM-supervised funds now
                  the primary route for new investors.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  What happens if laws change after I invest?
                </h3>
                <p>
                  Historically, Portugal has respected the framework that
                  applied at the time of application, but every case is
                  different. Work with a Portuguese lawyer and a regulated fund
                  platform to monitor developments.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Can U.S., U.K. and other non-EU nationals apply?
                </h3>
                <p>
                  Yes. The Portugal Golden Visa is designed for non-EU/EEA/Swiss
                  nationals seeking EU residency by investment.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  How do I get a tailored Golden Visa plan with Explorer?
                </h3>
                <p>
                  Start with a strategy call to map your risk profile, family
                  goals and timeline. Explorer coordinates CMVM-regulated fund
                  options and, alongside specialist immigration counsel, helps
                  you align capital allocation with a structured path to
                  residency and, potentially, citizenship.
                </p>
              </div>
            </div>
          </section>

          {/* 8. Conclusion & CTA */}
          <section id="conclusion" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Globe size={22} /> 8. Conclusion &amp; Next Steps
            </h2>
            <p className="text-[#15364A]">
              The Portugal Golden Visa remains the{' '}
              <strong>blue-chip investment migration program</strong> in Europe.
              With a <strong>5-year citizenship path</strong>, a{' '}
              <strong>low stay requirement</strong> and{' '}
              <strong>CMVM-regulated €500k funds</strong>, it offers a rare
              combination of regulatory comfort and lifestyle upside.
            </p>
            <p className="text-[#15364A]">
              If you want clarity on the Portugal Golden Visa, the nationality
              law freeze or citizenship planning, you can request a free
              strategy session with Explorer and specialist advisors such as{' '}
              <a
                href="https://www.retirementcitizenship.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#B4A77E] hover:text-[#B4A77E]"
              >
                RetirementCitizenship.com
              </a>
              .
            </p>
            <p className="text-[#15364A]">
              From there, the process is simple: define your strategy, select a
              CMVM-regulated fund, complete onboarding and allow your legal team
              to manage the Golden Visa steps over the next five years.
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
