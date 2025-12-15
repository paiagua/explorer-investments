// ✅ Portugal Citizenship Law Reform 2025 & Impact on Golden Visa Investors
// SEO optimized for: "Portugal citizenship law 2025", "golden visa citizenship timeline", "permanent residency portugal"

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
  Info,
  ShieldCheck,
  Clock,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const revalidate = 600;
export const fetchCache = "force-cache";

const SLUG = "portugal-citizenship-law-reform-2025-golden-visa-impact";
const CANONICAL_URL = ` https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  " https://goldenvisashub.com/assets/images/blog/portugal-citizenship-law-2025.jpg";
const PUBLISHED = "2025-11-10T09:00:00+00:00";

export const metadata = {
  title:
    "Portugal Citizenship Law Reform (2025): Impact on Golden Visa and Residency Holders",
  description:
    "Portugal’s parliament approved major citizenship law changes — extending residence requirements to 7-10 years. Here’s how it could affect Golden Visa investors, D7 applicants, and those awaiting residency cards.",
  openGraph: {
    title:
      "Portugal Citizenship Law Reform (2025): Impact on Golden Visa Holders",
    description:
      "The 2025 amendment to Portugal’s nationality law may double the citizenship timeline for most foreign nationals. Learn how it affects Golden Visa, D7, and EU applicants.",
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-sm text-[#15364A]">
    <CheckCircle2
      size={16}
      className="mt-[3px] flex-shrink-0 text-[#B4A77E]"
    />
    <span>{children}</span>
  </li>
);

const Kicker = ({ children }: { children: React.ReactNode }) => (
  <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
    <TrendingUp size={16} /> {children}
  </div>
);

export default function PortugalCitizenshipLaw2025() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Portugal Citizenship Law Reform (2025): Impact on Golden Visa and Residency Holders",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    image: [OG_IMAGE],
    mainEntityOfPage: CANONICAL_URL,
    author: { "@type": "Organization", name: "Explorer Investments" },
    publisher: { "@type": "Organization", name: "Explorer Investments" },
    description:
      "Portugal’s parliament has approved a major reform to the nationality law extending residence requirements to 7-10 years. Here’s what Golden Visa and D7 holders should know.",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What changed in Portugal’s citizenship law in 2025?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The new nationality law extends the required residence period for citizenship applications. EU and Portuguese-speaking nationals now require 7 years, while other foreign nationals need 10 years. The residence period is counted from the date of the first residence card issuance, not from the application date.",
        },
      },
      {
        "@type": "Question",
        name: "Does this affect Golden Visa investors?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Golden Visa investors can still apply for permanent residency after 5 years under current rules. Citizenship eligibility may extend to 10 years, depending on the final law. Permanent residency still grants most rights except voting and passport issuance.",
        },
      },
      {
        "@type": "Question",
        name: "Will the new citizenship law apply retroactively?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Several legal experts have raised constitutional concerns about retroactive effects. Until the President’s decision and potential Constitutional Court review, it is unclear if pending applications will be affected retroactively.",
        },
      },
      {
        "@type": "Question",
        name: "What should Golden Visa applicants do now?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No immediate action is required until the law is enacted. Investors should ensure biometrics and documentation are complete and consult legal and fund advisors to align investment timelines with updated residence requirements.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="ld-article-citizenship-law"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Script
        id="ld-faq-citizenship-law"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          <header>
            <Kicker>Portugal • Citizenship Law • Golden Visa Impact</Kicker>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Portugal Citizenship Law Reform 2025: How It Could Affect Golden
              Visa and Residency Holders
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              Portugal’s parliament approved amendments to the nationality law
              on October 28th, 2025. The proposed reform extends the required
              residence period for citizenship from 5 to 7-10 years and changes
              how the qualifying period is counted. Here’s what Golden Visa and
              D7 residents need to know before the president’s final decision.
            </p>
            <p className="text-xs text-[#5A6F7B] mt-2">
              Updated November 2025 • Based on official data from Parliament and
              AIMA.
            </p>
          </header>

          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image
              src={OG_IMAGE}
              alt="Portugal citizenship law reform 2025"
              fill
              className="object-cover"
            />
          </figure>

          {/* Main Changes */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              What Are the Main Changes in the New Law?
            </h2>
            <p className="text-[#15364A]">
              The new citizenship law raises the residence requirement for
              naturalisation applicants:
            </p>
            <ul className="space-y-2">
              <Li>7 years for EU and Portuguese-speaking nationals</Li>
              <Li>10 years for citizens of other countries</Li>
            </ul>
            <p className="text-[#15364A]">
              Previously, the qualifying period began on the date of
              application. Under the new law, it starts from the date of the{" "}
              <strong>first residence card issuance</strong> — potentially
              delaying eligibility for thousands of applicants awaiting AIMA
              processing.
            </p>
          </section>

          {/* Controversy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              Why Is the Citizenship Reform Controversial?
            </h2>
            <p>
              Legal experts and national institutions, including the Portuguese
              Bar Association, have expressed concern that the amendments could
              breach the principle of equality. Two applicants who filed on the
              same day could face different timelines depending on AIMA’s
              backlog.
            </p>
            <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#15364A]">
              “The amendments may violate legitimate expectations,” noted one
              compliance advisor. “Applicants under the current system could
              effectively see their citizenship eligibility doubled.”
            </blockquote>
          </section>

          {/* Guidance for Golden Visa Holders */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              What Should Golden Visa Holders Do Now?
            </h2>
            <ul className="space-y-2">
              <Li>
                No immediate action is required until the president decides to
                promulgate, veto, or send the law for constitutional review.
              </Li>
              <Li>
                Investors awaiting biometrics or residence cards should{" "}
                <strong>finalize documentation quickly</strong> while the
                current rules apply.
              </Li>
              <Li>
                Once biometrics are completed, residence cards are usually
                issued within 2-4 weeks.
              </Li>
              <Li>
                Applicants near the 5-year mark should{" "}
                <strong>start Portuguese A2 language preparation</strong> and
                secure long-term proof of address in Portugal.
              </Li>
            </ul>
          </section>

          {/* Permanent Residency */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              Does the New Law Affect Permanent Residency?
            </h2>
            <p>
              Golden Visa holders may still apply for{" "}
              <strong>permanent residency after 5 years</strong>, regardless of
              the citizenship timeline. Permanent residency offers almost all
              the same rights — residence, study, and work — except voting and
              holding a passport.
            </p>
            <p className="text-sm text-[#15364A]">
              For comparison, see our guide{" "}
              <Link
                href="/portugal-golden-visa-fund-route-us-investors"
                className="underline"
              >
                Portugal Golden Visa Fund Route (2025)
              </Link>
              .
            </p>
          </section>

          {/* CTA */}
          <section className="border rounded-xl p-5 bg-[#FFFCF3] mt-6 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
            <div className="text-sm">
              <div className="font-bold text-[#002741]">
                Concerned about how this law might affect your investment or
                citizenship timeline?
              </div>
              <div className="text-[#15364A]">
                Explorer Investments helps global families align fund structures
                and residency strategies under the latest Portuguese framework.
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
          </section>

          {/* Legal note */}
          <div className="rounded-xl border p-4 text-xs text-[#15364A] bg-gray-50 flex items-start gap-2 mt-4">
            <AlertTriangle className="mt-[2px]" size={16} />
            <p>
              This article is for informational purposes only. The proposed
              amendments await the president’s final decision and possible
              constitutional review. Always verify with official Portuguese
              government sources and legal advisors before taking action.
            </p>
          </div>

          <CtaSection />
        </div>
      </section>

      <BlogPreviewGridFromXML currentSlug={SLUG} />
      <Footer />
    </>
  );
}
