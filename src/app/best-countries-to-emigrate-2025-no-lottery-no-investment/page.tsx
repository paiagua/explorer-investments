// ✅ High-Intent SEO Article — Pros & Cons of Living in Portugal (2025)
// Next.js App Router + Tailwind + Schema.org (Article + FAQ + Breadcrumb) + Interlinking + CTAs

import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';

export const revalidate = 600;
export const fetchCache = 'force-cache';

import {
  TrendingUp,
  ThumbsUp,
  ThumbsDown,
  MapPin,
  ShieldCheck,
  Sun,
  Building2,
  Globe2,
  Home,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  ChevronRight,
} from 'lucide-react';

// ===================================================================
// METADATA
// ===================================================================
const SLUG = 'living-in-portugal-2025-pros-cons-residency-guide';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/living-in-portugal-2025-pros-cons.jpg';
const PUBLISHED = '2025-11-09T09:00:00+00:00';

export const metadata = {
  title:
    'Living in Portugal in 2025: Pros, Cons & How to Get Residency (D7, Digital Nomad & Golden Visa Funds)',
  description:
    'Is Portugal still worth it in 2025? A data-backed guide to the pros and cons of living in Portugal, cost of living, best cities, and how to secure residency via D7, Digital Nomad Visa and CMVM-regulated Golden Visa funds.',
  keywords: [
    'living in portugal 2025',
    'pros and cons of living in portugal',
    'move to portugal 2025',
    'retire in portugal from usa',
    'portugal d7 visa 2025',
    'portugal digital nomad visa 2025',
    'portugal golden visa funds',
    'best places to live in portugal',
  ],
  openGraph: {
    title:
      'Living in Portugal in 2025: Pros & Cons, Costs, Best Places & Residency Options',
    description:
      'Full guide for expats: lifestyle, safety, cost of living, bureaucracy, best locations and residency routes (D7, Digital Nomad, Golden Visa funds).',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Living in Portugal in 2025: Pros, Cons & Residency Options (D7, Digital Nomad & Golden Visa Funds)',
    description:
      'Balanced, data-backed guide to moving to Portugal in 2025: lifestyle, costs, drawbacks and how to secure EU residency.',
    images: [OG_IMAGE],
  },
  alternates: { canonical: CANONICAL_URL },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
};

// Helpers
const Kicker = ({ children }: { children: React.ReactNode }) => (
  <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
    <TrendingUp size={16} /> {children}
  </div>
);

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center">
    <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">{label}</p>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <CheckCircle2 className="mt-[3px] flex-shrink-0" size={18} />
    <span>{children}</span>
  </li>
);

export default function LivingInPortugal2025ProsCons() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Living in Portugal in 2025: Pros, Cons & How to Get Residency (D7, Digital Nomad & Golden Visa Funds)',
    description: metadata.description,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    image: [OG_IMAGE],
    mainEntityOfPage: CANONICAL_URL,
    author: {
      '@type': 'Person',
      name: 'André Bandeira, CFA',
      url: 'https://www.linkedin.com/in/andre-bandeira-cfa-7a7258b/?originalSubdomain=pt',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Explorer Investments',
      url: 'https://www.explorerinvestments.com',
    },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Portugal still a good place to live in 2025?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes, Portugal remains attractive for many expats due to safety, climate, lifestyle and EU access. However, higher housing costs, bureaucracy and tax complexity mean it is best suited to those who plan carefully and choose the right residency route.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the main pros of living in Portugal as an expat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Key advantages include a high level of safety, a mild climate, strong sense of community, access to EU/Schengen, quality healthcare, and a generally lower cost of living than many US and Northern European cities.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the main cons of living in Portugal in 2025?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Challenges include rising real estate prices in hotspots, slower bureaucracy, lower local salaries, evolving tax rules and, in some areas, pressure from tourism and short-term rentals.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I get residency in Portugal without a job offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Common routes include the D7 visa (stable/passive income), the Digital Nomad visa (remote income), and fund-based residency options linked to regulated investment funds. Each route has specific income, documentation and presence requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can US citizens retire to Portugal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes. Many US citizens use the D7 visa or other residency routes to retire in Portugal, attracted by safety, healthcare, lifestyle and access to the EU. Professional advice is recommended to align tax, investment and immigration rules.',
        },
      },
    ],
  };

  const breadcrumbsLd = {
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
        name: 'Move to Portugal',
        item: 'https://goldenvisashub.com/move-to-portugal',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Living in Portugal 2025: Pros & Cons',
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <>
      <Script
        id="ld-article-living-pt-2025"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Script
        id="ld-faq-living-pt-2025"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Script
        id="ld-breadcrumbs-living-pt-2025"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
      />

      <Header />

      {/* === Article === */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Title & Intro */}
          <header>
            <Kicker>Pros & Cons • Move to Portugal • Residency Options</Kicker>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Living in Portugal in 2025: Pros, Cons & How to Secure Smart Residency
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              Portugal is no longer a secret. It&apos;s safer, sunnier and often more affordable than many US and
              Northern European cities — but also more regulated, more in-demand and less &quot;cheap paradise&quot;
              than the headlines suggest. This guide cuts through the noise with a balanced view and clear residency paths.
            </p>

            {/* TOC */}
            <nav className="mt-5 rounded-xl border border-gray-200 bg-white shadow-sm p-4">
              <div className="text-[12px] uppercase text-[#5A6F7B] font-semibold mb-2 flex items-center gap-2">
                <BookOpen size={14} /> Contents
              </div>
              <ul className="text-sm grid sm:grid-cols-2 gap-y-2">
                <li>
                  <a href="#why-portugal" className="flex items-center gap-1 hover:underline">
                    <ChevronRight size={14} /> Why Portugal is Popular in 2025
                  </a>
                </li>
                <li>
                  <a href="#pros" className="flex items-center gap-1 hover:underline">
                    <ChevronRight size={14} /> Pros of Living in Portugal
                  </a>
                </li>
                <li>
                  <a href="#cons" className="flex items-center gap-1 hover:underline">
                    <ChevronRight size={14} /> Cons You Should Consider
                  </a>
                </li>
                <li>
                  <a href="#where-to-live" className="flex items-center gap-1 hover:underline">
                    <ChevronRight size={14} /> Best Places to Live
                  </a>
                </li>
                <li>
                  <a href="#residency" className="flex items-center gap-1 hover:underline">
                    <ChevronRight size={14} /> D7, Digital Nomad & Funds
                  </a>
                </li>
                <li>
                  <a href="#faq" className="flex items-center gap-1 hover:underline">
                    <ChevronRight size={14} /> FAQs
                  </a>
                </li>
              </ul>
            </nav>

            {/* Top CTAs */}
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link
                href="/portugal-golden-visa-fund-route-us-investors"
                className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#a3956f] transition"
              >
                <ShieldCheck size={16} /> Request Residency & Fund Strategy Call
              </Link>
              <Link
                href="/portugal-golden-visa-statistics-2012-2023-historical-top10"
                className="inline-flex items-center gap-2 border border-[#B4A77E] text-[#002741] px-4 py-2 rounded-lg font-semibold hover:bg-[#FFFCF3] transition"
              >
                <TrendingUp size={16} /> View Golden Visa & Residency Data
              </Link>
              <Link
                href="/american-leaves-us-healthcare-finds-new-life-in-portugal"
                className="inline-flex items-center gap-2 underline font-semibold"
              >
                <HeartPulse size={16} /> Read a Real Expat Story
              </Link>
            </div>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image
              src={OG_IMAGE}
              alt="Living in Portugal in 2025 - coast, cities and lifestyle"
              fill
              className="object-cover"
            />
          </figure>

          {/* Intro Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Stat label="US Citizens in Portugal" value="14,000+ (est.)" />
            <Stat label="Growth Since 2017" value="+230%" />
            <Stat label="Global Peace Index" value="Top-10" />
            <Stat label="Sunny Days / Year" value="300+" />
          </div>

          {/* Why Portugal */}
          <section id="why-portugal" className="space-y-3">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Globe2 /> Why Portugal Became a Top Expat Destination
            </h2>
            <p className="text-[#15364A]">
              Portugal blends EU stability, Atlantic lifestyle, democratic safety and human scale. From Lisbon&apos;s
              tech and services hub to Porto&apos;s heritage and the Algarve&apos;s coastline, the country offers a
              softer landing than many high-pressure cities in North America and Western Europe.
            </p>
            <p className="text-[#15364A]">
              But in 2025 it&apos;s also more mature: real estate is pricier, the classic golden visa real estate route
              is gone, and tax rules are tighter. That&apos;s why families and investors now need{" "}
              <strong>better planning</strong> rather than chasing outdated headlines.
            </p>
          </section>

          {/* Pros */}
          <section id="pros" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ThumbsUp /> Pros of Living in Portugal in 2025
            </h2>
            <ul className="space-y-2">
              <Li>
                <strong>Safety & Stability:</strong> Portugal ranks consistently among the world&apos;s safest countries,
                with low violent crime and a calm social environment.
              </Li>
              <Li>
                <strong>Climate & Lifestyle:</strong> 300+ days of sun in many regions, outdoor culture, cafés, ocean,
                vineyards, and a slower, relationship-focused pace of life.
              </Li>
              <Li>
                <strong>EU & Schengen Access:</strong> Legal residents can move freely in the Schengen Area for travel;
                long-term, citizenship opens full EU mobility.
              </Li>
              <Li>
                <strong>Healthcare:</strong> Affordable, competent public system and strong private network — attractive
                for US retirees and remote workers escaping extreme medical costs.
              </Li>
              <Li>
                <strong>Cost of Living (Relative):</strong> Still below major US and Northern European hubs, especially
                outside the center of Lisbon and the most touristic Algarve hotspots.
              </Li>
              <Li>
                <strong>Community:</strong> Established expat networks, English widely spoken in big cities and coastal
                areas, international schools and direct flights to major capitals.
              </Li>
            </ul>
          </section>

          {/* Cons */}
          <section id="cons" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ThumbsDown /> Cons & Frictions You Should Not Ignore
            </h2>
            <ul className="space-y-2">
              <Li>
                <strong>Rising Housing Costs:</strong> Central Lisbon, Porto and prime Algarve areas are significantly
                more expensive than 5-7 years atrás. Smart location choice is crucial.
              </Li>
              <Li>
                <strong>Lower Local Salaries:</strong> For those depending on a Portuguese salary, pay levels are
                modest compared with US, UK or Germany. Portugal works best if income is international.
              </Li>
              <Li>
                <strong>Tax Complexity:</strong> With preferential regimes changing over time, uninformed moves can lead
                to higher effective taxation. Cross-border tax planning is non-negotiable.
              </Li>
              <Li>
                <strong>Bureaucracy:</strong> Processes can be slow and documentation-heavy. Expect delays and prepare
                with local support.
              </Li>
              <Li>
                <strong>Tourism Pressure:</strong> Some central areas feel crowded and expensive in high season. Many
                expats choose secondary cities or towns for balance.
              </Li>
            </ul>
            <div className="rounded-xl border p-4 bg-[#FFFCF3] text-sm text-[#15364A] flex items-start gap-2">
              <HelpCircle size={18} className="mt-[2px]" />
              <p>
                The decision is rarely &quot;Portugal: yes or no&quot;. It&apos;s: <strong>Which city, which visa, which tax structure, which timeline?</strong> That&apos;s where
                professional planning adds real value.
              </p>
            </div>
          </section>

          {/* Where to live */}
          <section id="where-to-live" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MapPin /> Best Places to Live in Portugal (By Profile)
            </h2>
            <div className="space-y-3 text-[#15364A]">
              <p>
                Portugal is not one market. Choosing the right region often matters more than the decision to choose
                Portugal itself.
              </p>
              <ul className="space-y-2">
                <Li>
                  <strong>Lisbon:</strong> Cosmopolitan, startup & services hub, best connectivity, highest prices.
                  Ideal for professionals and frequent flyers.
                </Li>
                <Li>
                  <strong>Porto:</strong> Safer, slightly cooler, strong character, growing business ecosystem. Often
                  better value than Lisbon.
                </Li>
                <Li>
                  <strong>Algarve:</strong> Beaches, golf, retirees, British & Northern European communities. Great
                  lifestyle, seasonal pressure in hotspots.
                </Li>
                <Li>
                  <strong>Smaller Cities (Braga, Coimbra, Évora, Viseu):</strong> More authenticity, lower costs,
                  growing international interest.
                </Li>
                <Li>
                  <strong>Islands (Madeira & Azores):</strong> Nature, mild climate, calmer pace; good for remote
                  workers who value landscape over big-city life.
                </Li>
              </ul>
            </div>
          </section>

          {/* Residency Options */}
          <section id="residency" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Home /> How to Get a Portugal Residence Permit Without &quot;Buying a Passport&quot;
            </h2>
            <p className="text-[#15364A]">
              Portugal offers multiple legal routes. The right choice depends on whether your income is local or
              international, your family profile and your desired level of physical presence.
            </p>

            <div className="rounded-xl border p-5 bg-white/70 space-y-3">
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  <ShieldCheck size={16} /> D7 Visa — For Passive or Stable Income
                </h3>
                <ul className="space-y-2 text-sm text-[#15364A] mt-1">
                  <Li>Ideal for retirees or remote earners with predictable income from abroad.</Li>
                  <Li>Requires proof of income, accommodation, health insurance and clean record.</Li>
                  <Li>Designed for real relocation and integration in Portugal.</Li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  <Globe2 size={16} /> Digital Nomad Visa (D8) — For Remote Professionals
                </h3>
                <ul className="space-y-2 text-sm text-[#15364A] mt-1">
                  <Li>Targets higher remote/foreign income profiles.</Li>
                  <Li>Short-term and long-term residency formats available.</Li>
                  <Li>Can lead to permanent residency and, eventually, citizenship.</Li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  <Building2 size={16} /> Fund-Based Routes & Structured Investment
                </h3>
                <ul className="space-y-2 text-sm text-[#15364A] mt-1">
                  <Li>
                    For investors, CMVM-regulated funds provide an institutional framework aligned with wealth
                    management standards.
                  </Li>
                  <Li>
                    Suitable for families seeking diversification, governance and potential eligibility under evolving
                    residency rules.
                  </Li>
                  <Li>
                    Always review mandate, fees, liquidity and compliance with specialised advice.
                  </Li>
                </ul>
                <p className="text-xs text-[#5A6F7B]">
                  Learn more:{' '}
                  <Link
                    href="/secure-steps-portugal-golden-visa-funds-explorer-investments"
                    className="underline"
                  >
                    Secure Steps: Regulated Portugal Funds
                  </Link>
                </p>
              </div>

              <p className="text-[11px] text-[#5A6F7B]">
                Rules and timelines may change. Always confirm live requirements with qualified legal and tax advisors
                before applying.
              </p>
            </div>

            {/* CTA mid */}
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between border rounded-xl p-5 bg-[#FFFCF3]">
              <div className="text-sm">
                <div className="font-bold text-[#002741]">
                  Want a clear plan instead of guesswork?
                </div>
                <div className="text-[#15364A]">
                  Our team helps families compare D7, Digital Nomad and regulated fund routes — aligned with tax,
                  investment and citizenship goals.
                </div>
              </div>
              <Link
                href="/portugal-golden-visa-fund-route-us-investors"
                className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#a3956f] transition"
              >
                <ArrowRight size={16} /> Request a Private Strategy Call
              </Link>
            </div>
          </section>

          {/* FAQ Section (matches FAQ LD) */}
          <section id="faq" className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <HelpCircle /> Pros & Cons of Living in Portugal — FAQs
            </h2>

            <div>
              <h3 className="font-semibold">Is Portugal still a good place to live in 2025?</h3>
              <p className="text-[#15364A]">
                For many profiles, yes — especially those with international income, remote work or retirement plans.
                The key is entering with realistic expectations on housing, tax and bureaucracy.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">How much do you need to live comfortably?</h3>
              <p className="text-[#15364A]">
                It varies by city and lifestyle. Outside Lisbon&apos;s core and ultra-prime Algarve, many couples live
                comfortably on significantly less than in US or UK major cities. Housing choice is the main lever.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Is the language barrier a big issue?</h3>
              <p className="text-[#15364A]">
                English is widely spoken in expat-heavy areas, but basic Portuguese greatly improves integration and is
                recommended for long-term residents.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Is Portugal only for retirees?</h3>
              <p className="text-[#15364A]">
                No. Portugal attracts founders, remote professionals, families and students. The mix of lifestyle, safety
                and EU access makes it versatile — if structured correctly.
              </p>
            </div>
          </section>

          {/* Final CTA */}
          <div className="mt-6">
            <CtaSection />
          </div>
        </div>
      </section>

      {/* Related Articles from RSS */}
      <BlogPreviewGridFromXML currentSlug={SLUG} />

      <Footer />
    </>
  );
}
