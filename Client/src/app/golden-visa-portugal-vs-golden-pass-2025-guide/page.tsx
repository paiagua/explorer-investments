// ✅ Golden Visa Portugal vs Golden Pass (2025 Guide)
// High-intent SEO article targeting: "golden visa portugal", "golden pass portugal", "visa gold portugal"
// Next.js App Router + Tailwind + Article JSON-LD + FAQ + internal links

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
  ShieldCheck,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Info,
} from "lucide-react";

export const revalidate = 600;
export const fetchCache = "force-cache";

// ===================================================================
// METADATA
// ===================================================================
const SLUG = "golden-visa-portugal-vs-golden-pass-2025-guide";
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  "https://goldenvisashub.com/assets/images/blog/golden-visa-portugal-vs-golden-pass-2025.jpg";
const PUBLISHED = "2025-11-09T09:00:00+00:00";

export const metadata = {
  title:
    "Golden Visa Portugal vs Golden Pass (2025 Guide): Requirements, Funds Route & EU Path Explained",
  description:
    "Full 2025 guide to Golden Visa Portugal — sometimes called the 'Golden Pass Portugal'. Learn who qualifies, current rules, fund-based options, stay requirements and the path to EU residency and citizenship.",
  openGraph: {
    title:
      "Golden Visa Portugal vs Golden Pass (2025): Complete Rules & Fund Route Explained",
    description:
      "Understand what 'Golden Pass Portugal' really means, how the modern Golden Visa framework works, and why CMVM-regulated funds are now central for global investors.",
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

export default function GoldenVisaVsGoldenPassPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Golden Visa Portugal vs Golden Pass (2025 Guide): Requirements, Funds Route & EU Path Explained",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    image: [OG_IMAGE],
    mainEntityOfPage: CANONICAL_URL,
    author: { "@type": "Organization", name: "Explorer Investments" },
    publisher: { "@type": "Organization", name: "Explorer Investments" },
    description:
      "2025 guide clarifying Golden Visa Portugal vs 'Golden Pass Portugal', updated framework, CMVM-regulated fund options, stay rules and long-term EU strategy.",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is there a difference between Golden Visa Portugal and Golden Pass Portugal?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "In practice, 'Golden Pass Portugal' is an informal marketing term used to describe Portugal’s Golden Visa or residency-by-investment framework. The legal basis is the Portuguese residency regime; investors must always rely on official rules and regulated structures.",
        },
      },
      {
        "@type": "Question",
        name: "What are the main investment options for the Golden Visa Portugal in 2025?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Real estate routes in major areas have been phased out. In 2025, leading options include qualifying investments in regulated investment funds and other routes defined by Portuguese law. Exact thresholds and eligibility conditions should be confirmed with current legislation and licensed advisors.",
        },
      },
      {
        "@type": "Question",
        name: "Can Golden Visa Portugal still lead to EU citizenship?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Certain residency routes in Portugal may support an application for long-term residency or citizenship after a qualifying residence period, language proficiency and clean record checks. However, timelines and conditions are subject to ongoing legal changes, so applicants must verify the latest rules before planning solely around citizenship.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="ld-article-golden-pass"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Script
        id="ld-faq-golden-pass"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Title */}
          <header>
            <Kicker>Golden Visa Portugal • Golden Pass • EU Strategy 2025</Kicker>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Golden Visa Portugal vs “Golden Pass Portugal” (2025 Guide):
              What’s Real, What Changed, and How the Fund Route Fits In
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              Searches for “golden visa portugal”, “golden pass portugal” and
              “visa gold portugal” are rising again. This guide explains what
              these terms actually mean in 2025, how Portugal’s residency
              framework now works, and where CMVM-regulated funds and residency
              strategies fit in for global families.
            </p>
            <p className="text-xs text-[#5A6F7B] mt-2">
              Updated November 2025 • Informational only — always verify
              official rules.
            </p>
          </header>

          {/* Hero */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image
              src={OG_IMAGE}
              alt="Golden Visa Portugal and Golden Pass comparison in 2025"
              fill
              className="object-cover"
            />
          </figure>

          {/* SEO Pills */}
          <div className="flex flex-wrap gap-2 mt-2">
            <Pill>Golden Visa Portugal 2025</Pill>
            <Pill>Golden Pass Portugal Meaning</Pill>
            <Pill>Visa Gold Portugal Explained</Pill>
            <Pill>Fund-Based Residency Route</Pill>
          </div>

          {/* Section: Clarifying the terms */}
          <section className="space-y-4 mt-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Info size={20} /> Golden Visa Portugal vs “Golden Pass Portugal”:
              Same Idea, Different Labels
            </h2>
            <p className="text-[#15364A]">
              Many ads and forums use phrases like{" "}
              <strong>“Golden Pass Portugal”</strong>,{" "}
              <strong>“Visa Gold Portugal”</strong> or simply{" "}
              <strong>“Golden Portugal”</strong>. In most cases, they are
              marketing labels for{" "}
              <strong>Portugal’s residency-by-investment framework</strong>,
              historically known as the Golden Visa.
            </p>
            <ul className="space-y-2">
              <Li>
                The legal framework is defined by Portuguese law and overseen by
                competent authorities — not by the marketing term.
              </Li>
              <Li>
                Serious investors should ignore buzzwords and focus on{" "}
                <strong>regulated structures, risk, governance and compliance</strong>.
              </Li>
              <Li>
                Always confirm if a proposal aligns with{" "}
                <strong>current official rules, AIMA procedures</strong> and (if
                using funds) <strong>CMVM-regulated vehicles</strong>.
              </Li>
            </ul>
          </section>

          {/* Section: How the modern route works (high-level, compliant) */}
          <section className="space-y-4 mt-8">
            <h2 className="text-2xl font-bold">
              How the Modern Golden Visa Portugal Framework Works (2025 Snapshot)
            </h2>
            <p className="text-[#15364A]">
              Since 2023, Portugal has phased out the classic property route in
              key locations. In 2025, investors mainly look at{" "}
              <strong>qualified investment options</strong> defined by law,
              including regulated funds and other compliant vehicles.
            </p>
            <ul className="space-y-2">
              <Li>
                Investment must follow <strong>current legal criteria</strong>{" "}
                (thresholds and categories amended over recent years).
              </Li>
              <Li>
                Applications pass through <strong>AIMA</strong> (which replaced
                SEF functions) under digitalised procedures.
              </Li>
              <Li>
                Some routes may support long-term residency and, eventually,
                eligibility to apply for citizenship — subject to updated
                residence duration, language and integration rules.
              </Li>
            </ul>
            <p className="text-xs text-[#5A6F7B]">
              Exact categories and minimums evolve; investors must work with
              licensed professionals and verify the latest regime before
              committing.
            </p>
          </section>

          {/* Section: Fund angle + internal links */}
          <section className="space-y-4 mt-8">
            <h2 className="text-2xl font-extrabold flex items-center gap-2">
              <ShieldCheck size={20} /> Why Many “Golden Pass” Investors Prefer
              CMVM-Regulated Funds
            </h2>
            <p className="text-[#15364A]">
              Rather than chasing aggressive real estate pitches, more families
              now prefer{" "}
              <strong>regulated Portuguese investment funds</strong> with:
            </p>
            <ul className="space-y-2">
              <Li>CMVM supervision and audited reporting.</Li>
              <Li>Diversified exposure to real assets, private equity or credit.</Li>
              <Li>
                Institutional governance instead of one-off construction risk.
              </Li>
              <Li>
                Alignment with a potential residency strategy — when allowed by
                law — without turning the portfolio into a single apartment.
              </Li>
            </ul>
            <p className="text-sm text-[#15364A]">
              For a deeper breakdown, see{" "}
              <Link
                href="/secure-steps-portugal-golden-visa-funds-explorer-investments"
                className="underline"
              >
                Secure Steps: How Portugal’s Regulated Funds Safeguard Investor
                Goals
              </Link>{" "}
              and{" "}
              <Link
                href="/portugal-golden-visa-statistics-2012-2023-historical-top10"
                className="underline"
              >
                Portugal Golden Visa Statistics (2012-2023)
              </Link>
              .
            </p>
          </section>

          {/* Section: Who this is for */}
          <section className="space-y-4 mt-8">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Globe2 size={20} /> Who Should Consider Golden Visa Portugal in
              2025?
            </h2>
            <ul className="space-y-2">
              <Li>
                Entrepreneurs and investors seeking an{" "}
                <strong>EU base with lifestyle upside</strong>.
              </Li>
              <Li>
                Families wanting a <strong>Plan B</strong> (mobility, education,
                healthcare) without immediate full relocation.
              </Li>
              <Li>
                U.S., UK, LATAM, Middle East and Asian investors diversifying
                political and currency exposure.
              </Li>
            </ul>
            <p className="text-sm text-[#15364A]">
              For full relocation scenarios (living in Portugal year-round),
              compare with{" "}
              <Link
                href="/living-in-portugal-2025-pros-cons-residency-guide"
                className="underline"
              >
                Living in Portugal 2025: Pros, Cons & Residency Guide
              </Link>{" "}
              and residency routes such as D7 or digital-nomad visas.
            </p>
          </section>

          {/* CTA: Advisory */}
          <section className="border rounded-xl p-5 bg-[#FFFCF3] mt-8 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
            <div className="text-sm">
              <div className="font-bold text-[#002741]">
                Confused by “Golden Visa”, “Golden Pass”, changing rules and
                fund options?
              </div>
              <div className="text-[#15364A]">
                Explorer Investments helps families structure regulated
                allocations in Portugal and compare them with other European
                options under a single, disciplined plan.
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

          {/* Legal note */}
          <div className="rounded-xl border p-4 text-xs text-[#15364A] bg-gray-50 flex items-start gap-2 mt-4">
            <Info className="mt-[2px]" size={16} />
            <p>
              This article is for general information only and does not
              constitute legal, tax or investment advice. Portugal’s residency
              and nationality laws, as well as Golden Visa-style frameworks,
              continue to evolve. Always verify current rules directly with
              official sources and qualified advisors before making decisions.
            </p>
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
