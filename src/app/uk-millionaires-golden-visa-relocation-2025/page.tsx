// ✅ UK Millionaire Exodus & European Golden Visa Trends 2025
// Next.js + Tailwind + SEO (Golden Visa Portugal focus)

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
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

export const revalidate = 600;
export const fetchCache = "force-cache";

const SLUG = "uk-millionaires-golden-visa-relocation-2025";
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  "https://goldenvisashub.com/assets/images/blog/uk-millionaires-golden-visa-2025.jpg";
const PUBLISHED = "2025-11-10T12:00:00+00:00";

export const metadata = {
  title:
    "UK Millionaires Flee to Europe: Greece Leads Visa Rush, But Portugal’s Regulated Funds Offer the Safer Path (2025)",
  description:
    "As UK millionaires relocate amid tax crackdowns, Greece’s Golden Visa surges — but Portugal’s CMVM-regulated fund route offers safer EU residency and long-term citizenship stability in 2025.",
  openGraph: {
    title:
      "UK Millionaires Relocate to Europe in 2025 — Greece Tops, Portugal Offers Safer EU Route",
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

const Kicker = ({ children }: { children: React.ReactNode }) => (
  <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
    <TrendingUp size={16} /> {children}
  </div>
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

export default function UKMillionaireExodus2025() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "UK Millionaires Flee to Europe: Greece Leads Visa Rush, But Portugal’s Regulated Funds Offer the Safer Path (2025)",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    image: [OG_IMAGE],
    mainEntityOfPage: CANONICAL_URL,
    author: { "@type": "Organization", name: "Explorer Investments" },
    publisher: { "@type": "Organization", name: "Explorer Investments" },
    description:
      "UK’s millionaire population fell 14% amid tax reforms. Many are relocating via European Golden Visa programs — with Greece surging and Portugal’s regulated fund route offering long-term stability.",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why are UK millionaires leaving the UK in 2025?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "According to recent wealth data, UK millionaires fell by over 14% due to higher Capital Gains and inheritance taxes, and changes to non-dom rules. Many are seeking tax-friendly relocation through European residency programs.",
        },
      },
      {
        "@type": "Question",
        name: "Which European country is most popular for relocation?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Greece currently leads European Golden Visa demand, followed by Spain and Portugal. Each offers different investment structures and stay requirements, with Portugal’s regulated fund route standing out for governance and EU residency rights.",
        },
      },
      {
        "@type": "Question",
        name: "How does Portugal’s Golden Visa compare to Greece’s?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Greece offers a straightforward real estate-based program, while Portugal’s Golden Visa now centers on CMVM-regulated investment funds. Portugal’s framework provides EU residency, stability, and potential citizenship after 5 years, subject to law.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="ld-article-uk-millionaires"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Script
        id="ld-faq-uk-millionaires"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          <header>
            <Kicker>Global Wealth Migration • 2025 Trends</Kicker>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              UK Millionaires Leaving for Europe: Greece Tops Golden Visa Rush —
              But Portugal’s Fund Route Offers the Safer EU Base
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              The UK has seen a record 14% drop in millionaires — the sharpest
              of any major economy — as tax reforms push high-net-worth
              individuals to seek alternative residencies via European Golden
              Visa programs. Greece is leading the rush, but Portugal’s
              regulated investment fund route is drawing more structured,
              compliance-driven investors.
            </p>
          </header>

          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image
              src={OG_IMAGE}
              alt="UK millionaires relocation Europe Golden Visa 2025"
              fill
              className="object-cover"
            />
          </figure>

          <h2 className="text-2xl font-bold mt-6">
            14% Drop in UK Millionaires: The Tax Squeeze Effect
          </h2>
          <p>
            Recent UK fiscal changes — including increased Capital Gains Tax,
            inheritance tax reforms, and the overhaul of the non-domiciled
            regime — have triggered one of the largest wealth outflows in
            Europe. According to UBS and Astons data, millionaire numbers in the
            UK fell 14.3% year-on-year, pushing many toward alternative
            residencies.
          </p>
          <ul className="space-y-2">
            <Li>Over 2.6 million UK millionaires remain — down sharply YoY.</Li>
            <Li>
              The UK’s share of global millionaires slipped to 4.4%, behind the
              US, China, France, Japan, and Germany.
            </Li>
            <Li>
              Wealth per adult in Britain also dropped by 3%, continuing a
              downward trend.
            </Li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">
            Greece Surges as Europe’s Golden Visa Hotspot
          </h2>
          <p>
            Astons’ analysis highlights Greece as the fastest-growing European
            destination for Golden Visa applications. With accessible thresholds
            and Schengen access, it attracts HNWIs seeking a quick relocation
            solution with lifestyle appeal. Yet, its real estate-centric model
            exposes investors to local market volatility and evolving EU
            scrutiny.
          </p>
          <ul className="space-y-2">
            <Li>Investment threshold: €250k-€800k (depending on region).</Li>
            <Li>Includes family members; Schengen travel permitted.</Li>
            <Li>
              Ideal for buyers but offers limited diversification and compliance
              oversight.
            </Li>
          </ul>

          <h2 className="text-2xl font-extrabold mt-8 flex items-center gap-2">
            <ShieldCheck size={20} /> Portugal’s Golden Visa Fund Route: The
            Strategic Option for Wealth Preservation
          </h2>
          <p>
            As other countries tighten real estate options,{" "}
            <strong>Portugal’s Golden Visa fund route</strong> remains one of the
            few fully regulated frameworks within the EU. Investors can gain
            residency through participation in{" "}
            <Link
              href="/secure-steps-portugal-golden-visa-funds-explorer-investments"
              className="underline"
            >
              CMVM-supervised investment funds
            </Link>
            , offering transparency, diversification, and clear governance.
          </p>
          <ul className="space-y-2">
            <Li>
              EU residency through regulated capital markets participation.
            </Li>
            <Li>
              Lower physical stay requirements compared to relocation-based
              visas.
            </Li>
            <Li>
              Pathway to long-term residency and potential citizenship after ~5
              years (subject to law).
            </Li>
          </ul>

          <div className="border rounded-xl p-5 bg-[#FFFCF3] mt-6 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
            <div className="text-sm">
              <div className="font-bold text-[#002741]">
                Considering moving capital from the UK to a safer EU base?
              </div>
              <div className="text-[#15364A]">
                Explorer Investments helps structure compliant fund
                participation within Portugal’s regulated market.
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="https://www.explorerinvestments.com/"
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
          </div>

          <h2 className="text-2xl font-bold mt-10">Global Mobility Outlook</h2>
          <p>
            While Greece leads on volume, the trend underlines a broader shift:
            wealthy individuals are prioritising{" "}
            <strong>structured, compliant jurisdictions</strong> for
            diversification. Portugal’s blend of lifestyle, EU access, and
            regulated fund frameworks continues to attract strategic investors.
          </p>
          <ul className="space-y-2">
            <Li>EU-wide residency rights (Schengen travel).</Li>
            <Li>
              Stable legal system and investor protection under CMVM oversight.
            </Li>
            <Li>Pathway to EU citizenship after 5 years (subject to updates).</Li>
          </ul>

          <div className="rounded-xl border p-4 text-xs text-[#15364A] bg-gray-50 flex items-start gap-2 mt-4">
            <AlertTriangle className="mt-[2px]" size={16} />
            <p>
              Disclaimer: Residency and citizenship rules change frequently.
              This article is for general informational purposes only and should
              not be treated as legal or investment advice. Verify all details
              with qualified professionals and updated legislation.
            </p>
          </div>

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
              href="/golden-visa-portugal-vs-golden-pass-2025-guide"
              className="underline"
            >
              Golden Visa Portugal vs Golden Pass (2025 Guide)
            </Link>{" "}
            ·{" "}
            <Link
              href="/living-in-portugal-2025-pros-cons-residency-guide"
              className="underline"
            >
              Living in Portugal 2025
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
