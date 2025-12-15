// app/best-europe-golden-visa-2025-portugal-vs-greece/page.tsx
// ✅ SEO-Optimized Article Component with cross-links + JSON-LD + OG

import React from "react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Menu";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import BlogPreviewGridFromXML from "@/components/BlogPreviewGridFromXML";
import {
  TrendingUp,
  Globe2,
  Landmark,
  ShieldCheck,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const revalidate = 600;
export const fetchCache = "force-cache";

/* ——— META ——— */
const SLUG = "best-europe-golden-visa-2025-portugal-vs-greece";
const SITE = "https://goldenvisashub.com";
const CANONICAL_URL = `${SITE}/${SLUG}`;
const OG_IMAGE = `${SITE}/assets/images/blog/portugal-vs-greece-golden-visa-2025.jpg`;
const PUBLISHED = "2025-11-11T09:00:00+00:00";

export const metadata = {
  title:
    "Portugal vs Greece Golden Visa (2025): Which Residency Program Wins for Investors?",
  description:
    "Head-to-head comparison of Portugal (fund route) and Greece (real estate) Golden Visas in 2025: minimums, timelines, citizenship paths, taxes, pros/cons, and who should choose which.",
  openGraph: {
    title:
      "Portugal vs Greece Golden Visa (2025): Complete Comparison for Global Investors",
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

/* ——— Small helpers ——— */
const Kicker = ({ children }: { children: React.ReactNode }) => (
  <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
    <TrendingUp size={16} /> {children}
  </div>
);
const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <CheckCircle2 className="mt-[2px] flex-shrink-0" size={18} />
    <span>{children}</span>
  </li>
);

export default function PortugalVsGreeceGoldenVisa2025() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Portugal vs Greece Golden Visa (2025): Which Residency Program Wins for Investors?",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    image: [OG_IMAGE],
    mainEntityOfPage: CANONICAL_URL,
    author: { "@type": "Organization", name: "Golden Visas Hub" },
    publisher: {
      "@type": "Organization",
      name: "Golden Visas Hub",
      logo: { "@type": "ImageObject", url: `${SITE}/assets/images/logo/rss-logo-144.png` },
    },
    articleSection: "Golden Visa, Portugal, Greece, EU Residency",
    inLanguage: "en",
  };

  return (
    <>
      <Script
        id="ld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Header */}
          <header>
            <Kicker>Golden Visa • EU Residency • 2025 Update</Kicker>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Portugal vs Greece Golden Visa (2025): Which Program Still Wins for Global Investors?
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              Portugal’s Golden Visa has pivoted to{" "}
              <strong>CMVM-regulated investment funds</strong>, while Greece remains the
              <strong> real-estate champion</strong>. Here’s a clean, side-by-side view to help you choose the best route for EU residency, lifestyle, and long-term strategy.
            </p>

            {/* Cross-links (above the fold for SEO) */}
            <nav
              aria-label="Related links"
              className="mt-4 flex flex-wrap gap-3 text-sm"
            >
              <Link
                href="/portugal-golden-visa-2025-investment-first-guide"
                className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#a3956f] transition"
              >
                <ShieldCheck size={16} /> Portugal Fund Route (Guide)
              </Link>
              <Link
                href="/best-european-golden-visa-programs-2025-comparison-portugal-greece-spain-italy-malta"
                className="inline-flex items-center gap-2 border border-[#B4A77E] px-4 py-2 rounded-lg font-semibold hover:bg-[#FFFCF3] transition"
              >
                <Globe2 size={16} /> EU Programs (5-Way)
              </Link>
              <Link
                href="/portugal-d7-visa-guide-2025"
                className="inline-flex items-center gap-2 underline font-semibold"
              >
                <Landmark size={16} /> Portugal D7 (No investment)
              </Link>
            </nav>
          </header>

          {/* Hero */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image
              src={OG_IMAGE}
              alt="Portugal vs Greece Golden Visa 2025 comparison"
              fill
              className="object-cover"
              priority
            />
          </figure>

          {/* Portugal intro */}
          <section aria-labelledby="pt-2025">
            <h2 id="pt-2025" className="text-2xl font-bold flex items-center gap-2">
              <ShieldCheck /> Portugal Golden Visa (2025): Regulated Funds First
            </h2>
            <p className="text-[#15364A] mt-2">
              Portugal removed property from eligibility and now centers its Golden Visa on{" "}
              <strong>regulated investment funds</strong> (minimum €500k). The advantages are
              governance, diversification, and a steady <strong>5-year path to citizenship</strong>.
            </p>
            <ul className="space-y-2 mt-3">
              <Li>Minimum: €500,000 in CMVM-regulated funds</Li>
              <Li>Processing: ~12-18 months (typical)</Li>
              <Li>Citizenship: Eligible from 5 years of residency</Li>
              <Li>Dependents: Spouse, children, and parents</Li>
            </ul>
            <div className="mt-4">
              <Link
                href="/portugal-golden-visa-fund-route-us-investors"
                className="inline-flex items-center gap-2 text-[#002741] font-semibold underline"
              >
                Deep dive: Why U.S. investors prefer the fund route <ArrowRight size={16} />
              </Link>
            </div>
          </section>

          {/* Greece intro */}
          <section aria-labelledby="gr-2025">
            <h2 id="gr-2025" className="text-2xl font-bold">Greece Golden Visa (2025): Fast Real Estate Route</h2>
            <p className="text-[#15364A] mt-2">
              Greece remains Europe’s fastest property-based residency. Thresholds vary by region, but the model is simple:
              <strong> buy qualifying real estate → get residency in months</strong>.
            </p>
            <ul className="space-y-2 mt-3">
              <Li>Minimum: €800k (Athens/Thessaloniki) / €400k (regional)</Li>
              <Li>Processing: ~3-6 months</Li>
              <Li>Citizenship: From 7 years</Li>
              <Li>Dependents: Spouse + children under 21</Li>
            </ul>
          </section>

          {/* Comparison table */}
          <section aria-labelledby="compare">
            <h2 id="compare" className="text-2xl font-bold flex items-center gap-2">
              <BarChart3 /> Portugal vs Greece: Head-to-Head (2025)
            </h2>
            <div className="overflow-x-auto border border-gray-200 rounded-lg mt-4">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-[#15364A] text-xs uppercase">
                  <tr>
                    <th className="px-3 py-2">Criteria</th>
                    <th className="px-3 py-2">🇵🇹 Portugal</th>
                    <th className="px-3 py-2">🇬🇷 Greece</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-3 py-3 font-semibold">Minimum</td>
                    <td className="px-3 py-3">€500k (Funds)</td>
                    <td className="px-3 py-3">€800k / €400k (Real estate)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-3 font-semibold">Processing</td>
                    <td className="px-3 py-3">12-18 months</td>
                    <td className="px-3 py-3">3-6 months</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-3 font-semibold">Citizenship</td>
                    <td className="px-3 py-3">From 5 years</td>
                    <td className="px-3 py-3">From 7 years</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-3 font-semibold">Investment Type</td>
                    <td className="px-3 py-3">Regulated funds (CMVM)</td>
                    <td className="px-3 py-3">Property purchase</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-3 font-semibold">Family</td>
                    <td className="px-3 py-3">Spouse, children, parents</td>
                    <td className="px-3 py-3">Spouse + children &lt; 21</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Guidance / Who should choose what */}
          <section aria-labelledby="who-choose">
            <h2 id="who-choose" className="text-2xl font-bold">Which One Should You Choose?</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl border p-4 bg-white">
                <h3 className="font-semibold mb-2">Choose Portugal if you want:</h3>
                <ul className="space-y-2">
                  <Li>Regulated, diversified investments (funds)</Li>
                  <Li>Clear governance and reporting</Li>
                  <Li><strong>Citizenship from 5 years</strong> of residency</Li>
                </ul>
                <div className="mt-3">
                  <Link href="/secure-steps-portugal-golden-visa-funds-explorer-investments" className="inline-flex items-center gap-2 text-[#002741] font-semibold underline">
                    How regulated funds safeguard investors <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="rounded-xl border p-4 bg-white">
                <h3 className="font-semibold mb-2">Choose Greece if you want:</h3>
                <ul className="space-y-2">
                  <Li>Fastest residency via real estate</Li>
                  <Li>Property ownership and rental optionality</Li>
                  <Li>Lower regional thresholds (€400k)</Li>
                </ul>
                <div className="mt-3">
                  <Link href="/best-european-golden-visa-programs-2025-comparison-portugal-greece-spain-italy-malta" className="inline-flex items-center gap-2 text-[#002741] font-semibold underline">
                    Compare all EU options side-by-side <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Mid CTA */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between border rounded-xl p-5 bg-[#FFFCF3]">
            <div className="text-sm">
              <div className="font-bold text-[#002741]">
                Not sure which route fits your family and portfolio?
              </div>
              <div className="text-[#15364A]">
                Get a plan that weighs <strong>Portugal funds</strong> vs <strong>Greece property</strong> for risk, liquidity, and timelines.
              </div>
            </div>
            <Link
              href="/golden-visa-portugal-blog"
              className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#a3956f] transition"
            >
              Build My EU Strategy <ArrowRight size={16} />
            </Link>
          </div>

          {/* Deep internal links block for SEO */}
          <section aria-labelledby="deeper">
            <h2 id="deeper" className="text-2xl font-bold">Go Deeper</h2>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                <Link href="/portugal-golden-visa-2025-investment-first-guide" className="underline">
                  Portugal Golden Visa 2025 — Investment-First Guide
                </Link>
              </li>
              <li>
                <Link href="/portugal-d7-visa-guide-2025" className="underline">
                  Portugal D7 Visa Guide (No-Investment Residency)
                </Link>
              </li>
              <li>
                <Link href="/portugal-golden-visa-funds-2025" className="underline">
                  Eligible Funds & Common Questions (2025)
                </Link>
              </li>
            </ul>
          </section>

          {/* Global CTA */}
          <CtaSection />
        </div>
      </section>

      {/* Related posts grid (client-side RSS fetch; safe for SSG) */}
      <BlogPreviewGridFromXML currentSlug={SLUG} />

      <Footer />
    </>
  );
}
