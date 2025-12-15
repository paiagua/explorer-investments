// ✅ Best European Golden Visas 2025 — Comparison Article Component
// Next.js App Router • Tailwind • SEO + FAQ JSON-LD • Internal Links to Explorer Pillars

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
  Globe2,
  ShieldCheck,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export const revalidate = 600;
export const fetchCache = "force-cache";

// ===================================================================
// METADATA
// ===================================================================
const SLUG =
  "best-european-golden-visa-programs-2025-comparison-portugal-greece-spain-italy-malta";
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  "https://goldenvisashub.com/assets/images/blog/european-golden-visa-2025.jpg";
const PUBLISHED = "2025-11-08T10:00:00+00:00";

export const metadata = {
  title:
    "Best European Golden Visa Programs in 2025 — Portugal, Greece, Spain, Italy & Malta Compared",
  description:
    "2025 guide to the best European Golden Visa and residency-by-investment programs. Compare Portugal, Greece, Spain, Italy and Malta on investment amounts, stay rules, EU rights and path to citizenship — with Portugal’s fund route in focus.",
  openGraph: {
    title:
      "Best European Golden Visas 2025 — Compare Portugal, Greece, Spain, Italy & Malta",
    description:
      "Clear comparison of Europe’s leading Golden Visa and investor residency programs in 2025, plus why regulated Portuguese funds remain a standout option.",
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

// Helpers
const Kicker = ({ children }: { children: React.ReactNode }) => (
  <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
    <TrendingUp size={16} /> {children}
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-[11px] font-semibold bg-[#FFFCF3] text-[#002741] border border-[#B4A77E]/70 px-3 py-1 rounded-full">
    <CheckCircle2 size={12} /> {children}
  </span>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-sm text-[#15364A]">
    <CheckCircle2
      size={16}
      className="mt-[3px] flex-shrink-0 text-[#B4A77E]"
    />
    <span>{children}</span>
  </li>
);

export default function BestEuropeanGoldenVisa2025() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Best European Golden Visa Programs in 2025 — Portugal, Greece, Spain, Italy & Malta Compared",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    image: [OG_IMAGE],
    mainEntityOfPage: CANONICAL_URL,
    author: { "@type": "Organization", name: "Explorer Investments" },
    publisher: { "@type": "Organization", name: "Explorer Investments" },
    description:
      "2025 comparison of leading European Golden Visa and residency-by-investment programs, highlighting Portugal’s regulated fund route and long-term EU advantages.",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is the best European Golden Visa in 2025?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "For many families, Portugal’s CMVM-regulated fund route stands out due to EU membership, flexible stay requirements, diversified investments and a defined path to long-term residency and potential citizenship. Other options such as Greece and Spain remain relevant for real estate-focused investors. Always verify current legal rules.",
        },
      },
      {
        "@type": "Question",
        name: "Which Golden Visa in Europe has the lowest stay requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Historically, Portugal’s Golden Visa has offered one of the lowest effective physical presence requirements, while some other programs also allow minimal stays. Thresholds and rules change frequently, so applicants should confirm the latest requirements before investing.",
        },
      },
      {
        "@type": "Question",
        name: "Can a European Golden Visa lead to EU citizenship?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Several EU residency-by-investment programs can lead to citizenship after a qualifying residence period, language and integration criteria, and clean record checks. Timelines differ widely by country (often 5-10 years or more). Applicants should obtain updated legal advice for each jurisdiction.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="ld-article-eu-golden-visa"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Script
        id="ld-faq-eu-golden-visa"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Header />

      {/* === Article === */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Title */}
          <header>
            <Kicker>European Golden Visas • 2025 Comparison</Kicker>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Best European Golden Visa Programs in 2025 — Portugal, Greece,
              Spain, Italy & Malta Compared
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              Thinking about a European base without giving up global mobility?
              This 2025 guide compares the main Golden Visa and investor
              residency options in Europe — and explains why regulated fund
              strategies in Portugal remain a reference point for global
              families.
            </p>
            <p className="text-xs text-[#5A6F7B] mt-2">
              Updated November 2025 • For informational purposes only. Always
              confirm current law before investing.
            </p>
          </header>

          {/* Hero */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image
              src={OG_IMAGE}
              alt="Best European Golden Visa programs in 2025 compared"
              fill
              className="object-cover"
            />
          </figure>

          {/* Pills */}
          <div className="flex flex-wrap gap-2 mt-2">
            <Pill>European Golden Visa Guide</Pill>
            <Pill>Portugal vs Greece vs Spain</Pill>
            <Pill>Investor Residency</Pill>
            <Pill>EU Mobility & Citizenship</Pill>
          </div>

          {/* Key message */}
          <p>
            Golden Visa and residency-by-investment programs have shifted
            significantly since 2023. Real estate-heavy routes have tightened,
            scrutiny increased, and investors are more selective. In 2025, the
            right question is no longer “Where is it cheapest?” — it is{" "}
            <strong>
              “Which European framework gives my family stability, compliance
              and a credible path to long-term rights?”
            </strong>
          </p>

          {/* Comparison Table */}
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-2 mt-6">
              <BarChart3 size={20} /> Quick Comparison — Leading European Golden
              Visa Style Programs (2025)
            </h2>
            <p className="text-[#15364A] text-sm mt-2">
              Snapshot only. Thresholds, routes and timelines change — figures
              below are indicative and must be checked against official
              regulations at the time of application.
            </p>
            <div className="overflow-x-auto border border-gray-200 rounded-xl mt-4">
              <table className="w-full text-xs sm:text-sm text-left text-[#002741]">
                <thead className="bg-[#FFFCF3] uppercase text-[10px] sm:text-[11px] text-[#5A6F7B]">
                  <tr>
                    <th className="px-3 py-2">Country</th>
                    <th className="px-3 py-2">Typical Route</th>
                    <th className="px-3 py-2">Min. Investment*</th>
                    <th className="px-3 py-2">Stay Requirement*</th>
                    <th className="px-3 py-2">Indicative Path to Citizenship*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-3 py-3 font-semibold">Portugal</td>
                    <td className="px-3 py-3">
                      CMVM-regulated investment funds & other compliant options
                    </td>
                    <td className="px-3 py-3">From ~€500,000 (funds)</td>
                    <td className="px-3 py-3">Historically low; check updates</td>
                    <td className="px-3 py-3">From 5+ years (subject to law)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-3 font-semibold">Greece</td>
                    <td className="px-3 py-3">Real estate & investment routes</td>
                    <td className="px-3 py-3">
                      From ~€250k-€800k (by region/type)
                    </td>
                    <td className="px-3 py-3">Limited/low</td>
                    <td className="px-3 py-3">~7 years (subject to conditions)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-3 font-semibold">Spain</td>
                    <td className="px-3 py-3">
                      Real estate & other investment options
                    </td>
                    <td className="px-3 py-3">Around €500k+</td>
                    <td className="px-3 py-3">Low; mainly renewals</td>
                    <td className="px-3 py-3">10+ years usual</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-3 font-semibold">Italy</td>
                    <td className="px-3 py-3">
                      Investor Visa & lump-sum tax regimes
                    </td>
                    <td className="px-3 py-3">
                      From ~€250k-€500k (company/startup/bonds etc.)
                    </td>
                    <td className="px-3 py-3">
                      Full or majority presence for tax residency
                    </td>
                    <td className="px-3 py-3">10+ years typical</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-3 font-semibold">Malta</td>
                    <td className="px-3 py-3">
                      Residency & naturalisation via contributions and stay
                    </td>
                    <td className="px-3 py-3">High (six-figure+)</td>
                    <td className="px-3 py-3">Physical residence required</td>
                    <td className="px-3 py-3">
                      Accelerated in some frameworks (subject to reform)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-[#5A6F7B] mt-1">
              *Indicative only. Always confirm current rules and legal terms
              with qualified counsel before investing.
            </p>
          </section>

          {/* Portugal spotlight */}
          <section>
            <h2 className="text-2xl font-extrabold flex items-center gap-2 mt-8">
              <ShieldCheck size={20} /> Why Portugal Remains the Strategic
              Benchmark
            </h2>
            <p className="text-[#15364A] mt-2">
              Among European options,{" "}
              <strong>Portugal’s regulated fund-based route</strong> continues
              to stand out for investors who value structure, oversight and
              lifestyle — rather than pure real estate speculation.
            </p>
            <ul className="space-y-2 mt-3">
              <Li>
                Access to an EU country ranked highly for{" "}
                <strong>safety, climate and quality of life</strong>.
              </Li>
              <Li>
                Investment via{" "}
                <Link
                  href="/secure-steps-portugal-golden-visa-funds-explorer-investments"
                  className="underline"
                >
                  CMVM-supervised funds with audited reporting
                </Link>
                , instead of ad-hoc projects.
              </Li>
              <Li>
                Clear framework for{" "}
                <Link
                  href="/portuguese-citizenship-legacy-passport-eu-mobility-2025"
                  className="underline"
                >
                  long-term residency and potential EU citizenship
                </Link>{" "}
                (timelines subject to changing nationality laws).
              </Li>
              <Li>
                Strong alignment with families seeking education, healthcare and
                a credible EU base.
              </Li>
            </ul>
          </section>

          {/* Other countries summary */}
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-2 mt-8">
              <Globe2 size={20} /> How Greece, Spain, Italy & Malta Fit In
            </h2>
            <ul className="space-y-2 mt-3">
              <Li>
                <strong>Greece:</strong> Attractive real estate thresholds in
                some regions; longer naturalisation track; property-driven risk.
              </Li>
              <Li>
                <strong>Spain:</strong> Established framework; higher
                naturalisation timeline; suitable for those ready for closer
                ties.
              </Li>
              <Li>
                <strong>Italy:</strong> Investor visa + flat-tax regime appeal
                to high-income individuals ready to relocate and centralise
                life.
              </Li>
              <Li>
                <strong>Malta:</strong> High-entry, boutique option; suitable
                for very specific HNWI profiles under evolving EU scrutiny.
              </Li>
            </ul>
          </section>

          {/* Strategic CTA */}
          <section className="border rounded-xl p-5 bg-[#FFFCF3] mt-8 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
            <div className="text-sm">
              <div className="font-bold text-[#002741]">
                Not all “Golden Visas” are created equal.
              </div>
              <div className="text-[#15364A]">
                Get a structured comparison of Portugal, Greece, Spain, Italy
                and Malta tailored to your family, holding structure and tax
                profile.
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/"
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#a3956f] transition"
              >
                <ArrowRight size={16} /> Request Advisory Call
              </Link>
              <Link
                href="https://www.linkedin.com/in/andre-bandeira-cfa-7a7258b/?originalSubdomain=pt"
                target="_blank"
                className="inline-flex items-center gap-2 border border-[#B4A77E] text-[#002741] px-4 py-2 rounded-lg font-semibold hover:bg-[#FFFCF3] transition"
              >
                <ShieldCheck size={16} /> Connect with André Bandeira
              </Link>
            </div>
          </section>

          {/* Risk / legal note */}
          <div className="rounded-xl border p-4 text-xs text-[#15364A] bg-gray-50 flex items-start gap-2 mt-4">
            <AlertTriangle className="mt-[2px]" size={16} />
            <p>
              Important: European residency and citizenship frameworks are
              politically sensitive and frequently updated. This article is
              general and non-exhaustive. Before committing capital, obtain
              jurisdiction-specific legal, tax and regulatory advice and verify
              the latest rules from official government sources.
            </p>
          </div>

          {/* Deep internal links */}
          <div className="text-xs text-[#5A6F7B] mt-3">
            Related Explorer insights:{" "}
            <Link
              href="/portugal-golden-visa-statistics-2012-2023-historical-top10"
              className="underline"
            >
              Portugal Golden Visa Statistics
            </Link>{" "}
            ·{" "}
            <Link
              href="/living-in-portugal-2025-pros-cons-residency-guide"
              className="underline"
            >
              Living in Portugal 2025: Pros, Cons & Residency Guide
            </Link>{" "}
            ·{" "}
            <Link
              href="/secure-steps-portugal-golden-visa-funds-explorer-investments"
              className="underline"
            >
              Secure Steps: CMVM-Regulated Funds for Golden Visa Investors
            </Link>
          </div>

          {/* Global CTA */}
          <CtaSection />
        </div>
      </section>

      <BlogPreviewGridFromXML currentSlug={SLUG} />
      <Footer />
    </>
  );
}
