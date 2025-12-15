"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BlogArticles from "./BlogArticles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faPhone,
  faTv,
  faCommentDots,
  faIdCard,
  faArrowRight,
  faArrowDown,
  faEnvelope,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";

import {
  LineChart,
  ShieldCheck,
  CalendarClock,
  Flag,
  Globe,
  Users,
  BadgeCheck,
  TrendingUp,
  AlertTriangle,
  FileText,
} from "lucide-react";

const GoldenVisaGuide = () => {
  const router = useRouter();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Portugal Golden Visa 2025: The Truth About the Fund Route (Not Real Estate)
            </h1>
            <p className="text-base sm:text-lg text-[#15364A]">
              Real estate is no longer the star of Portugal’s Golden Visa. In 2025,{" "}
              <strong>CMVM-regulated investment funds</strong> lead the way. This guide
              separates myth from fact: how the fund route works, what changed, the data
              behind the shift, and the practical steps to secure EU residency -{" "}
              without buying property.
            </p>

            {/* Table of Contents */}
            <nav
              aria-label="Table of contents"
              className="mt-6 border border-[#E4E0CF] rounded-xl p-4 bg-[#FFFCF3]"
            >
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#B4A77E]" /> Contents
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                {[
                  { id: "what-is", label: "Golden Visa in 2025: What Changed?" },
                  { id: "fund-basics", label: "How the Fund Route Works (Step by Step)" },
                  { id: "stats", label: "Key Numbers & Market Trends (2023-2025)" },
                  { id: "myths", label: "Myths vs Facts: Fund Route vs Real Estate" },
                  { id: "risks", label: "Risks, Fees & Compliance Checklist" },
                  { id: "faq", label: "Quick FAQ for Busy Investors" },
                  { id: "cta", label: "Get Started - Free Strategy Session" },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-[#002741] hover:underline"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.header>

          {/* INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
            className="space-y-5 text-sm sm:text-base leading-relaxed"
          >
            <p>
              Portugal’s Golden Visa (residency by investment) has evolved. Following
              legal reforms that curtailed real-estate eligibility in key areas, the{" "}
              <em>fund investment route</em> has become the clearest, most compliant path.
              Below, you’ll learn the mechanics, the stats, and how institutional managers
              (e.g., Explorer Investments) fit into a diversified, professionally managed
              strategy.
            </p>
          </motion.div>

          {/* WHAT CHANGED */}
          <section id="what-is" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BadgeCheck className="w-6 h-6 text-[#B4A77E]" />
              Golden Visa in 2025: What Changed?
            </h2>
            <p>
              The Golden Visa - formally the{" "}
              <strong>Residence Permit for Investment Activity (ARI)</strong> - has
              operated since 2012. Recent reforms removed most real-estate paths for new
              applications in major regions, shifting focus to{" "}
              <strong>regulated fund subscriptions</strong>, capital transfer, research,
              and cultural support.
            </p>

            <h3 className="font-semibold">Core eligibility (high level)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Subscribe at least <strong>€500,000</strong> to a CMVM-regulated fund</li>
              <li>Maintain the investment for <strong>5 years</strong></li>
              <li>Typical stay requirement around <strong>7 days/year</strong></li>
              <li>Family inclusion: spouse, children, dependent parents</li>
              <li>
                Pathway to permanent residency and (later) citizenship, subject to
                language and legal checks
              </li>
            </ul>
          </section>

          {/* FUND BASICS */}
          <section id="fund-basics" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#B4A77E]" />
              How the Fund Route Works (Step by Step)
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Shortlist managers</strong> with CMVM-regulated vehicles and a
                clear Golden Visa track (e.g., diversified private-equity/hospitality).
              </li>
              <li>
                <strong>Due diligence:</strong> strategy, fees (management/carry), lock-up,
                liquidity windows, governance, auditor, custodian.
              </li>
              <li>
                <strong>Subscription</strong> of ≥ €500k; complete KYC/AML and receive fund
                proof for your ARI file.
              </li>
              <li>
                <strong>Submit ARI application</strong> (investor + eligible family) and
                track milestones until biometrics/residence issuance.
              </li>
              <li>
                <strong>Maintain</strong> the investment and stay requirements; reassess
                exit options as the 5-year mark approaches.
              </li>
            </ol>
          </section>

          {/* STATS */}
          <section id="stats" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-[#B4A77E]" />
              Key Numbers & Market Trends (2023-2025)
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-[#E9E6D8] bg-[#FFFEFA]">
                <p className="text-3xl font-extrabold">4,987</p>
                <p className="text-sm">Golden Visa grants in 2024 (applicants + dependents)</p>
              </div>
              <div className="p-4 rounded-lg border border-[#E9E6D8] bg-[#FFFEFA]">
                <p className="text-3xl font-extrabold">~13,000</p>
                <p className="text-sm">Total residence permits since inception</p>
              </div>
            </div>

            <h3 className="font-semibold mt-2">Where the capital flows</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>2023 total ≈ €70.9M (≈ €50.08M real estate vs ≈ €20.82M funds/capital)</li>
              <li>Funds ≈ 30% of Golden Visa permits by 2023; rising in 2024-2025</li>
              <li>Geographic limits on property pushed applicants toward funds</li>
            </ul>

            <h3 className="font-semibold mt-2">Who’s applying?</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>China remains significant, share declining</li>
              <li>Brazil consistently strong</li>
              <li>U.S. applicants rising (some reports ~20%)</li>
            </ul>
          </section>

          {/* MYTHS vs FACTS */}
          <section id="myths" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-[#B4A77E]" />
              Myths vs Facts: Fund Route vs Real Estate
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Common Myths</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>“Only property qualifies now.”</li>
                  <li>“Funds are riskier than a single apartment.”</li>
                  <li>“Fund exits are impossible.”</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">The Facts</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>
                    The fund route is <strong>currently a primary path</strong> for ARI.
                  </li>
                  <li>
                    Diversification + governance can reduce single-asset risk.
                  </li>
                  <li>
                    Lock-ups exist, but funds define exit policies and windows up front.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* RISKS & CHECKLIST */}
          <section id="risks" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BadgeCheck className="w-6 h-6 text-[#B4A77E]" />
              Risks, Fees & Compliance Checklist
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Key Risks</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Illiquidity and lock-up periods</li>
                  <li>Performance depends on manager, cycle, sector</li>
                  <li>Regulatory changes and processing backlogs</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Fees to Expect</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Management fee & potential performance fee (carry)</li>
                  <li>Custody, audit, subscription/administration fees</li>
                  <li>Legal/immigration and translation costs</li>
                </ul>
              </div>
            </div>

            <h3 className="font-semibold mt-3">Compliance Checklist (quick)</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>CMVM-regulated fund with clear ARI eligibility</li>
              <li>Independent auditor and custodian named</li>
              <li>Transparent docs: PPM, KID/KIID, fees, liquidity policy</li>
              <li>Proof of subscription for ARI file; keep records updated</li>
            </ul>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#B4A77E]" />
              Quick FAQ for Busy Investors
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Minimum?</strong> €500,000 into a CMVM-regulated fund.
              </li>
              <li>
                <strong>Stay requirement?</strong> 7 days per year on average.
              </li>
              <li>
                <strong>Family?</strong> Spouse, children, dependent parents may be included.
              </li>
              <li>
                <strong>Citizenship timeline?</strong> After maintaining residency for 5 years,
                subject to language and legal criteria.
              </li>
            </ul>
          </section>

          {/* CONTACT / TRUST */}
          <section id="cta" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Flag className="w-6 h-6 text-[#B4A77E]" />
              Get Started - Free Strategy Session
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              {/* André */}
              <div className="flex items-start gap-4">
                <img
                  src="https://goldenvisashub.com/assets/images/andre_2025.jpg"
                  alt="André Bandeira"
                  className="w-16 h-16 rounded-full object-cover border"
                  loading="lazy"
                />
                <div className="text-sm leading-snug">
                  <p className="font-bold">André Bandeira</p>
                  <a
                    href="mailto:ab@explorerinvestments.com?subject=Golden%20Visa%20Fund%20Route%20Inquiry"
                    className="flex items-center gap-2 text-[#B4A77E] hover:underline"
                  >
                    <FontAwesomeIcon icon={faEnvelope} /> ab@explorerinvestments.com
                  </a>
                </div>
              </div>

              {/* Maria */}
              <div className="flex items-start gap-4">
                <img
                  src="https://goldenvisashub.com/assets/images/maria_2025.jpg"
                  alt="Maria Campos Silva"
                  className="w-16 h-16 rounded-full object-cover border"
                  loading="lazy"
                />
                <div className="text-sm leading-snug">
                  <p className="font-bold">Maria Campos Silva</p>
                  <a
                    href="mailto:mcs@explorerinvestments.com?subject=Golden%20Visa%20Fund%20Route%20Inquiry"
                    className="flex items-center gap-2 text-[#B4A77E] hover:underline"
                  >
                    <FontAwesomeIcon icon={faEnvelope} /> mcs@explorerinvestments.com
                  </a>
                </div>
              </div>
            </div>

            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-base px-6 py-3 rounded-full transition"
            >
              <FontAwesomeIcon icon={faFileSignature} />
              Book a Free Strategy Session
            </Link>
          </section>
        </div>
      </section>

      {/* WHY EXPLORER */}
      <section className="bg-[#F9F9FC] py-16 px-4">
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#002D3D] text-left mb-10">
            Why Choose Explorer Investments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#002D3D] text-base">
            <div className="p-6 flex items-start gap-4 bg-white rounded-xl border">
              <LineChart size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Real Returns</h3>
                <p>Institutional-grade portfolio construction and value creation.</p>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4 bg-white rounded-xl border">
              <ShieldCheck size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Secure & Regulated</h3>
                <p>CMVM oversight, independent audit and custody.</p>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4 bg-white rounded-xl border">
              <CalendarClock size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Minimal Stay</h3>
                <p>Maintain residency with roughly 7 days per year.</p>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4 bg-white rounded-xl border">
              <Users size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Family Inclusion</h3>
                <p>Spouse and dependent children under the same application.</p>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4 bg-white rounded-xl border">
              <Flag size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Residency → Citizenship</h3>
                <p>Permanent residency after 5 years; citizenship thereafter.</p>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4 bg-white rounded-xl border">
              <Globe size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Full EU Access</h3>
                <p>Live, work, and travel across the European Union.</p>
              </div>
            </div>
          </div>

          {/* Centered CTA button, auto width, 20px top margin */}
          <div className="flex justify-center mt-[20px]">
            <Link
              href="/"
              className="bg-[#002741] border border-white text-white text-sm font-semibold px-6 py-3 rounded-full transition inline-flex items-center justify-center gap-2 w-auto"
            >
              Get Portuguese Golden Visa
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <BlogArticles />
    </>
  );
};

export default GoldenVisaGuide;
