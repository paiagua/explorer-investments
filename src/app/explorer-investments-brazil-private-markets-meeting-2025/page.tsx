// ✅ Explorer Investments @ Brazil Private Markets Meeting 2025
// Next.js App Router compatible • SEO + Event Schema + Interlinking + CTAs

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
  Globe2,
  Users,
  ShieldCheck,
  CalendarDays,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const revalidate = 600;
export const fetchCache = 'force-cache';

// ===================================================================
// METADATA
// ===================================================================
const SLUG = 'explorer-investments-brazil-private-markets-meeting-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/brazil-private-markets-meeting-2025.jpg';
const PUBLISHED = '2025-11-05T09:00:00+00:00'; // ajusta se quiseres

export const metadata = {
  title:
    'Explorer Investments at Brazil Private Markets Meeting 2025 — São Paulo, Rosewood',
  description:
    'On November 11, 2025, Explorer Investments joins leading family offices and institutional investors at the Brazil Private Markets Meeting in São Paulo to discuss CMVM-regulated funds, cross-border allocation and Portugal as an EU gateway.',
  openGraph: {
    title:
      'Explorer Investments at Brazil Private Markets Meeting 2025 — Private Markets & Portugal Funds',
    description:
      'André Bandeira and Explorer Investments take part in the Brazil Private Markets Meeting 2025 at Rosewood São Paulo, sharing insights on CMVM-regulated funds, EU exposure and cross-border strategies.',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

// Helpers
const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-[10px] font-semibold bg-[#FFFCF3] text-[#002741] border border-[#B4A77E]/60 px-3 py-1 rounded-full">
    <CheckCircle2 size={12} /> {children}
  </span>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-sm text-[#15364A]">
    <CheckCircle2 size={16} className="mt-[3px] flex-shrink-0 text-[#B4A77E]" />
    <span>{children}</span>
  </li>
);

export default function ExplorerBrazilPrivateMarketsMeeting2025() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline:
      'Explorer Investments at Brazil Private Markets Meeting 2025 — São Paulo, Rosewood',
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
    description:
      'Explorer Investments joins leading investors at the Brazil Private Markets Meeting 2025 in São Paulo to discuss CMVM-regulated funds, cross-border allocation and Portugal as an EU gateway.',
  };

  const eventLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Brazil Private Markets Meeting 2025',
    startDate: '2025-11-11',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'Rosewood São Paulo',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Carmo Companies',
      url: 'https://www.carmocompanies.com',
    },
    description:
      'Institutional investors, family offices and private markets professionals meet in São Paulo to discuss alternative investments, capital flows and cross-border strategies.',
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="ld-article-brazil-pm"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Script
        id="ld-event-brazil-pm"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventLd) }}
      />

      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Header */}
          <header>
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <TrendingUp size={16} /> Private Markets • Institutional Capital • São Paulo
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Explorer Investments at Brazil Private Markets Meeting 2025
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              On 11 November 2025, Explorer Investments joins leading family
              offices, institutional investors and GPs at the Brazil Private
              Markets Meeting at Rosewood São Paulo to discuss regulated funds,
              cross-border allocations and how Portugal can serve as a stable EU
              gateway for Brazilian and Latin American capital.
            </p>
            <p className="text-xs text-[#5A6F7B] mt-2">
              Updated: November 2025 • Event participation announcement
            </p>
          </header>

          {/* Hero */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image
              src={OG_IMAGE}
              alt="Explorer Investments at Brazil Private Markets Meeting 2025, Rosewood São Paulo"
              fill
              className="object-cover"
            />
          </figure>

          {/* Pills */}
          <div className="flex flex-wrap gap-2 mt-1">
            <Pill>Brazil • São Paulo • Rosewood</Pill>
            <Pill>Private Markets & Alternatives</Pill>
            <Pill>CMVM-Regulated Funds</Pill>
            <Pill>EU Gateway: Portugal</Pill>
          </div>

          {/* Event Details */}
          <div className="rounded-2xl border bg-[#FFFCF3] p-5 flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-semibold">
              <CalendarDays size={16} /> 11 November 2025
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} /> Rosewood São Paulo, São Paulo, Brazil
            </div>
            <p className="text-[#15364A] mt-1">
              The Brazil Private Markets Meeting brings together 150+ senior
              investors to discuss the evolution of private equity, private
              credit, infrastructure and real assets amid global volatility.
            </p>
            <p className="text-[11px] text-[#5A6F7B]">
              Event host:{' '}
              <a
                href="https://www.carmocompanies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Carmo Companies
              </a>
              .
            </p>
          </div>

          {/* Explorer Angle */}
          <section className="space-y-4 text-[#15364A]">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShieldCheck size={20} /> Why Explorer Is in the Room
            </h2>
            <p>
              Explorer Investments participates in São Paulo to connect with
              institutional investors and family offices looking for{' '}
              <strong>EU exposure through regulated, real-economy strategies</strong>.
              Portugal’s CMVM-supervised fund ecosystem offers a disciplined
              framework for cross-border capital seeking diversification,
              governance and potential residency or succession benefits.
            </p>
            <ul className="space-y-2">
              <Li>Dialogue with Brazilian and LatAm allocators on EU private markets</Li>
              <Li>Showcase CMVM-regulated fund structures anchored in governance</Li>
              <Li>Discuss Portugal as a stable, rule-based gateway to the European Union</Li>
              <Li>
                Align long-term private markets strategies with family governance,
                wealth planning and mobility objectives
              </Li>
            </ul>
          </section>

          {/* Strategic Themes */}
          <section className="space-y-4 text-[#15364A]">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Globe2 size={20} /> Key Themes for Brazilian & LatAm Investors
            </h2>
            <ul className="space-y-2">
              <Li>
                How <strong>Portugal-based CMVM funds</strong> can provide European
                exposure without operational complexity.
              </Li>
              <Li>
                The shift from direct real estate programs to{' '}
                <Link
                  href="/secure-steps-portugal-golden-visa-funds-explorer-investments"
                  className="underline"
                >
                  regulated fund routes
                </Link>{' '}
                for global families.
              </Li>
              <Li>
                Using Portugal as a <strong>jurisdictional anchor</strong> for
                multi-generational, cross-border wealth strategies.
              </Li>
              <Li>
                Aligning private markets allocation with potential residency or
                future <Link href="/portuguese-citizenship-legacy-passport-eu-mobility-2025" className="underline">
                  EU citizenship options
                </Link>{' '}
                — without compromising on governance.
              </Li>
            </ul>
          </section>

          {/* CTA: Meet André */}
          <section className="rounded-2xl border p-5 bg-white shadow-sm flex flex-col gap-3">
            <div className="text-sm">
              <div className="font-bold text-[#002741] flex items-center gap-2">
                <Users size={18} /> Meet Explorer Investments in São Paulo
              </div>
              <p className="text-[#15364A] mt-1">
                Investors attending the Brazil Private Markets Meeting can
                request a 1:1 conversation with <strong>André Bandeira</strong> to
                discuss CMVM-regulated funds, EU strategies and cross-border
                allocation tailored to family offices and institutional mandates.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link
                href="https://www.explorerinvestments.com/"
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#a3956f] transition"
              >
                <ArrowRight size={16} /> Request Meeting
              </Link>
              <Link
                href="https://www.linkedin.com/in/andre-bandeira-cfa-7a7258b/?originalSubdomain=pt"
                target="_blank"
                className="inline-flex items-center gap-2 border border-[#B4A77E] text-[#002741] px-4 py-2 rounded-lg font-semibold hover:bg-[#FFFCF3] transition"
              >
                Connect with André
              </Link>
              <Link
                href="/secure-steps-portugal-golden-visa-funds-explorer-investments"
                className="inline-flex items-center gap-2 underline"
              >
                <ShieldCheck size={16} /> Explore Our Regulated Fund Approach
              </Link>
            </div>
          </section>

          {/* Cross-link band */}
          <section className="text-xs text-[#5A6F7B] space-y-1">
            <p>
              Related reading:{' '}
              <Link
                href="/portugal-golden-visa-funds-2025"
                className="underline"
              >
                Portugal Golden Visa Funds 2025
              </Link>{' '}
              ·{' '}
              <Link
                href="/portugal-golden-visa-statistics-2012-2023-historical-top10"
                className="underline"
              >
                Portugal Golden Visa Data & AIMA Statistics
              </Link>{' '}
              ·{' '}
              <Link
                href="/living-in-portugal-2025-pros-cons-residency-guide"
                className="underline"
              >
                Living in Portugal in 2025 — Pros & Cons
              </Link>
            </p>
          </section>

          {/* Global CTA */}
          <CtaSection />
        </div>
      </section>

      <BlogPreviewGridFromXML currentSlug={SLUG} />
      <Footer />
    </>
  );
}
