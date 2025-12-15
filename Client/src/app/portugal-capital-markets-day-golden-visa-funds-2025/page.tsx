// ✅ Portugal Capital Markets Day + Golden Visa Funds (Explorer Positioning)
// Next.js 13/15 App Router compatible, SEO + FAQ + internal links

import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';

import {
  TrendingUp,
  Landmark,
  Globe2,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const revalidate = 600;
export const fetchCache = 'force-cache';

// ===================================================================
// METADATA
// ===================================================================
const SLUG = 'portugal-capital-markets-day-golden-visa-funds-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/portugal-capital-markets-day-2025.jpg';
const PUBLISHED = '2025-11-13T09:00:00+00:00';

export const metadata = {
  title:
    'Portugal Capital Markets Day 2025: Why Regulated Funds & Golden Visa Capital Matter for the Real Economy',
  description:
    'Portugal Capital Markets Day 2025 brings listed companies, global investors, academia and government together. See how CMVM-regulated funds, institutional capital and Golden Visa investment now align to finance infrastructure, innovation and high-value sectors.',
  openGraph: {
    title:
      'Portugal Capital Markets Day 2025 — Regulated Funds, Innovation & Golden Visa Capital',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

// Helpers
const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <CheckCircle2 className="mt-[2px] flex-shrink-0" size={18} />
    <span>{children}</span>
  </li>
);

export default function PortugalCapitalMarketsDayPage() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    image: [OG_IMAGE],
    mainEntityOfPage: CANONICAL_URL,
    author: {
      '@type': 'Organization',
      name: 'Explorer Investments',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Explorer Investments',
    },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Portugal Capital Markets Day 2025?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'It is a high-level initiative bringing together listed companies, institutional investors, academia and government to position Portugal as a prime investment destination and to showcase how capital markets can finance large-scale industrial, infrastructure and innovation projects.',
        },
      },
      {
        '@type': 'Question',
        name:
          'How do Golden Visa and CMVM-regulated funds fit into Portugal’s capital markets story?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'CMVM-regulated funds, including those eligible for the Golden Visa route, channel qualified foreign capital into productive sectors such as infrastructure, technology, energy transition and innovation. This aligns residency-by-investment with long-term economic value instead of purely speculative flows.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why should international investors look at Portugal now?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Portugal combines upgraded infrastructure, a stable EU framework, strong human capital, growing tech hubs and regulated investment vehicles. For families, this can be paired with residency options and a potential pathway to EU citizenship, subject to evolving laws.',
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="ld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Header */}
          <header>
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <TrendingUp size={16} /> Capital Markets • Portugal • Global
              Investors
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Portugal Capital Markets Day 2025: How Regulated Funds and
              Golden Visa Capital Support a Stronger, Smarter Economy
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              Portugal is no longer just a lifestyle or tourism story. At
              Portugal Capital Markets Day 2025, listed companies, government,
              academia and global investors converged in Lisbon to send a clear
              signal: the country is positioning itself as a prime European
              hub for infrastructure, innovation and disciplined capital —
              including CMVM-regulated funds used by sophisticated Golden Visa
              investors.
            </p>
          </header>

          {/* Hero */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image
              src={OG_IMAGE}
              alt="Portugal Capital Markets Day 2025 - Lisbon institutional investors and innovation"
              fill
              className="object-cover"
            />
          </figure>

          {/* Key Blocks */}
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Globe2 /> From Lifestyle Narrative to Capital Markets Reality
          </h2>
          <p className="text-[#15364A]">
            Over recent years, Portugal has upgraded its infrastructure,
            strengthened its industrial base, expanded technology hubs and
            logistics corridors, and invested heavily in talent. The challenge
            now is perception: international markets still tend to see Portugal
            mainly as a tourism play — underestimating its role as a platform
            for EU and Atlantic investment.
          </p>
          <ul className="space-y-2">
            <Li>
              Consistent macro fundamentals and EU framework stability
            </Li>
            <Li>
              Advanced energy, digital and logistics infrastructure compared to
              legacy perceptions
            </Li>
            <Li>
              Growing ecosystems in tech, blue economy, advanced manufacturing
              and research
            </Li>
          </ul>

          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Landmark /> What Portugal Capital Markets Day Signals to
            Investors
          </h2>
          <p className="text-[#15364A]">
            The event — led by Euronext, AEM and key partners — brought issuers,
            policymakers and global asset managers together around one message:
            Portugal is ready to absorb and deploy international capital into
            productive, regulated, high-value opportunities.
          </p>
          <ul className="space-y-2">
            <Li>
              Public conference in Lisbon discussing competitiveness,
              infrastructure and innovation
            </Li>
            <Li>
              Academic report,{' '}
              <strong>
                “Portugal as a Prime Investment Destination: Infrastructure &
                Innovation at the Core”
              </strong>
            </Li>
            <Li>
              International roadshow (London, Paris, New York, Zurich, Madrid,
              Singapore) with 1:1 investor meetings
            </Li>
            <Li>
              Strategic dinner with government to align long-term priorities in
              mobility, energy, logistics and housing
            </Li>
          </ul>

          <div className="rounded-xl border border-[#B4A77E]/40 bg-[#FFFCF3] p-4 text-sm">
            <strong>Signal to global capital:</strong> Portugal wants to be
            evaluated on fundamentals — innovation, governance and scalable
            projects — not just on postcards.
          </div>

          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BarChart3 /> Where Golden Visa Funds Fit in the Institutional
            Story
          </h2>
          <p className="text-[#15364A]">
            For regulated players, the modern Golden Visa is not a real estate
            speculation tool. Through{' '}
            <strong>CMVM-supervised investment funds</strong>, international
            families can allocate capital into vehicles that:
          </p>
          <ul className="space-y-2">
            <Li>
              Co-invest alongside institutional investors in infrastructure,
              tech and export-oriented businesses
            </Li>
            <Li>
              Support innovation, energy transition and industrial upgrading
            </Li>
            <Li>
              Operate under EU regulatory standards, audited reporting and
              independent oversight
            </Li>
            <Li>
              In some cases, remain compatible with residency strategies for
              families seeking an EU “Plan B”
            </Li>
          </ul>
          <p className="text-sm text-[#5A6F7B]">
            Note: Residency and citizenship rules may change. Always confirm
            current requirements with qualified legal and tax advisors.
          </p>

          {/* Internal SEO Links */}
          <div className="text-sm bg-gray-50 border rounded-xl p-4 space-y-1">
            <div className="font-semibold text-[#002741]">
              Recommended deep dives:
            </div>
            <ul className="list-disc list-inside text-[#15364A]">
              <li>
                <Link
                  href="/portugal-golden-visa-statistics-2012-2023-historical-top10"
                  className="underline"
                >
                  Portugal Golden Visa Statistics (2012-2023)
                </Link>
              </li>
              <li>
                <Link
                  href="/portugal-golden-visa-fund-route-us-investors"
                  className="underline"
                >
                  Golden Visa Fund Route & CMVM-Regulated Vehicles
                </Link>
              </li>
              <li>
                <Link
                  href="/secure-steps-portugal-golden-visa-funds-explorer-investments"
                  className="underline"
                >
                  Secure Steps: How Regulated Funds Safeguard Investor Goals
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between border rounded-xl p-5 bg-[#FFFCF3]">
            <div className="text-sm">
              <div className="font-bold text-[#002741]">
                Looking at Portugal as your next capital and residency hub?
              </div>
              <div className="text-[#15364A]">
                Explore CMVM-regulated funds that combine real economic impact,
                institutional oversight and optional residency strategies for
                global families.
              </div>
            </div>
            <Link
              href="https://www.explorerinvestments.com/"
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#a3956f] transition"
            >
              <ShieldCheck size={16} />
              Talk to Explorer
            </Link>
          </div>

          <CtaSection />
        </div>
      </section>

      <BlogPreviewGridFromXML currentSlug={SLUG} />
      <Footer />
    </>
  );
}
