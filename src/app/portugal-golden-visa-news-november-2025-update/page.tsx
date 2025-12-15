// ✅ Portugal Golden Visa News — November 2025 Update
// Next.js App Router component • Fully SEO-ready • News + Article JSON-LD • Internal linking

import React from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Menu";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import BlogPreviewGridFromXML from "@/components/BlogPreviewGridFromXML";

import {
  TrendingUp,
  BarChart3,
  ShieldCheck,
  Globe2,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  FileText,
} from "lucide-react";

export const revalidate = 600;
export const fetchCache = "force-cache";

// ===================================================================
// METADATA
// ===================================================================
const SLUG = "portugal-golden-visa-news-november-2025-update";
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  "https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-news-november-2025.jpg";
const PUBLISHED = "2025-11-08T09:00:00+00:00";

export const metadata = {
  title:
    "Portugal Golden Visa News - November 2025 Update: AIMA Data, CMVM Funds & EU Citizenship Trends",
  description:
    "November 2025 update on Portugal’s Golden Visa: AIMA statistics, fund-based route insights, CMVM oversight, and citizenship timelines for investors and families.",
  openGraph: {
    title:
      "Portugal Golden Visa News - November 2025 Update (AIMA Data & Fund Route Trends)",
    description:
      "AIMA November 2025 update: Portugal Golden Visa applications, CMVM-regulated funds, and what’s next for EU residency and citizenship.",
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

// Helpers
const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-[11px] font-semibold bg-[#FFFCF3] text-[#002741] border border-[#B4A77E]/70 px-3 py-1 rounded-full">
    <CheckCircle2 size={12} /> {children}
  </span>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-sm text-[#15364A]">
    <CheckCircle2 size={16} className="mt-[3px] flex-shrink-0 text-[#B4A77E]" />
    <span>{children}</span>
  </li>
);

export default function PortugalGoldenVisaNewsNovember2025() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Portugal Golden Visa News - November 2025 Update: AIMA Data, CMVM Funds & EU Citizenship Trends",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    image: [OG_IMAGE],
    mainEntityOfPage: CANONICAL_URL,
    author: { "@type": "Organization", name: "Explorer Investments" },
    publisher: { "@type": "Organization", name: "Explorer Investments" },
    description:
      "November 2025 update on Portugal’s Golden Visa: AIMA data, fund-based route trends, CMVM oversight, and citizenship timelines for investors and families.",
  };

  return (
    <>
      <Script
        id="ld-article-november-news"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Header */}
          <header>
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <TrendingUp size={16} /> Portugal Residency • AIMA Update • Fund Insights
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Portugal Golden Visa News - November 2025 Update
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              Latest AIMA data and investor insights: fund-based Golden Visa
              growth, CMVM-regulated strategies, and citizenship timelines for
              global families investing in Portugal’s regulated markets.
            </p>
            <p className="text-xs text-[#5A6F7B] mt-2">
              Published: November 2025 • By Explorer Investments Editorial Team
            </p>
          </header>

          {/* Hero */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image
              src={OG_IMAGE}
              alt="Portugal Golden Visa News November 2025 Update"
              fill
              className="object-cover"
            />
          </figure>

          {/* Pills */}
          <div className="flex flex-wrap gap-2 mt-1">
            <Pill>AIMA Update</Pill>
            <Pill>Golden Visa</Pill>
            <Pill>CMVM Funds</Pill>
            <Pill>EU Citizenship</Pill>
            <Pill>November 2025</Pill>
          </div>

          {/* INTRO */}
          <p>
            The <strong>Portuguese Golden Visa</strong> continues to evolve.
            Following new data from <strong>AIMA</strong> (the agency replacing
            SEF), November 2025 shows strong interest in regulated investment
            funds despite the full phase-out of real estate options. Global
            investors are adapting — shifting capital toward compliant,
            transparent, and audited fund structures.
          </p>

          <p>
            Below we outline the latest <strong>AIMA statistics</strong>,
            emerging trends in <strong>CMVM-regulated funds</strong>, and
            practical implications for families pursuing EU residency and
            citizenship.
          </p>

          {/* Section: AIMA Data */}
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-2 mt-8">
              <BarChart3 size={20} /> AIMA 2025 Golden Visa Data Overview
            </h2>
            <p className="text-[#15364A] mt-2">
              The fund route now represents over 50% of all new Golden Visa
              applications, according to the latest filings through late 2025.
              Investor interest from the U.S., Brazil, India and the U.K.
              remains robust — mirroring the diversification shown in{" "}
              <Link
                href="/portugal-golden-visa-statistics-2012-2023-historical-top10"
                className="underline"
              >
                historical SEF/AIMA data
              </Link>
              .
            </p>
            <ul className="space-y-2 mt-3">
              <Li>Strong inflows via CMVM-authorized private equity funds</Li>
              <Li>U.S. and Brazil remain top source markets for 2025</Li>
              <Li>Family inclusion rate exceeds 60% of total applications</Li>
              <Li>Steady 5-year naturalisation target remains unchanged</Li>
            </ul>
          </section>

          {/* Section: Fund Insights */}
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-2 mt-8">
              <ShieldCheck size={20} /> CMVM-Regulated Funds: Still the Core Route
            </h2>
            <p className="text-[#15364A] mt-2">
              CMVM oversight ensures a disciplined, transparent structure that
              investors can compare across strategies. This continues to be the
              foundation of the{" "}
              <Link
                href="/secure-steps-portugal-golden-visa-funds-explorer-investments"
                className="underline"
              >
                regulated fund route
              </Link>{" "}
              — aligning capital growth with governance, diversification, and
              compliance.
            </p>
            <ul className="space-y-2 mt-3">
              <Li>Funds typically invest in real assets and private equity</Li>
              <Li>Audited and supervised by CMVM & independent custodians</Li>
              <Li>Eligible for Golden Visa residency with €500,000 minimum</Li>
              <Li>Pathway to EU citizenship after 5 years (under current law)</Li>
            </ul>
          </section>

          {/* Section: Citizenship Outlook */}
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-2 mt-8">
              <Globe2 size={20} /> Path to Permanent Residency & Citizenship
            </h2>
            <p className="text-[#15364A] mt-2">
              Citizenship applications remain steady. Investors who entered via
              the fund route between 2020-2021 are now reaching eligibility for{" "}
              <Link
                href="/portuguese-citizenship-legacy-passport-eu-mobility-2025"
                className="underline"
              >
                Portuguese citizenship
              </Link>
              , enjoying EU rights, mobility and family security across 27
              countries.
            </p>
            <p className="text-[#15364A]">
              Residency renewals are also increasingly digital, as AIMA expands
              online processing, a key improvement after SEF’s legacy delays.
            </p>
          </section>

          {/* Section: Market Sentiment */}
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-2 mt-8">
              <FileText size={20} /> Market Sentiment — Calm, Not Hype
            </h2>
            <p className="text-[#15364A]">
              While headlines often exaggerate “the end” of the Golden Visa, the
              regulated fund model continues to attract disciplined investors
              who value transparency over speculation. As{" "}
              <Link
                href="/living-in-portugal-2025-pros-cons-residency-guide"
                className="underline"
              >
                living in Portugal
              </Link>{" "}
              remains appealing, stable fund vehicles offer both compliance and
              continuity.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-xl border p-5 bg-[#FFFCF3] shadow-sm mt-6">
            <div className="text-sm">
              <div className="font-bold text-[#002741] flex items-center gap-2">
                <CalendarDays size={18} /> Get the Full November 2025 Investor Brief
              </div>
              <p className="text-[#15364A] mt-1">
                Speak with <strong>André Bandeira</strong> about Portugal’s
                regulated fund strategies, new AIMA processes, and cross-border
                portfolio planning.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-3 text-sm">
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
                <ShieldCheck size={16} /> Connect with André
              </Link>
            </div>
          </section>

          {/* Cross-links */}
          <section className="text-xs text-[#5A6F7B] mt-3">
            <p>
              Related reading:{" "}
              <Link
                href="/secure-steps-portugal-golden-visa-funds-explorer-investments"
                className="underline"
              >
                How Portugal’s CMVM-Regulated Funds Protect Investors
              </Link>{" "}
              ·{" "}
              <Link
                href="/portugal-golden-visa-statistics-2012-2023-historical-top10"
                className="underline"
              >
                Portugal Golden Visa Statistics (2012-2023)
              </Link>{" "}
              ·{" "}
              <Link
                href="/portuguese-citizenship-legacy-passport-eu-mobility-2025"
                className="underline"
              >
                Portuguese Citizenship: The Ultimate Legacy
              </Link>
            </p>
          </section>

          {/* CTA global */}
          <CtaSection />
        </div>
      </section>

      <BlogPreviewGridFromXML currentSlug={SLUG} />
      <Footer />
    </>
  );
}
