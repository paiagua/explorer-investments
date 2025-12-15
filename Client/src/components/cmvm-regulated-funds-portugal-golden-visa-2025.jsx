import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BlogArticles from "./BlogArticles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowRight, faArrowDown, faPen, faTv, faCommentDots, faIdCard } from "@fortawesome/free-solid-svg-icons";

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
  Scale,
  FileSearch,
  Play,
} from "lucide-react";
import { FileCheck } from "lucide-react";

const GoldenVisaTopFunds = () => {
  const router = useRouter();
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-5xl mx-auto space-y-8">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Top CMVM-Regulated Funds Eligible for Portugal’s Golden Visa (2025) - Why Explorer Leads
            </h1>
            <p className="text-base sm:text-lg text-[#15364A]">
              With real-estate routes curtailed, discerning investors now prioritize <strong>CMVM-regulated investment funds</strong>. This guide explains why <strong>private capital</strong> solutions outperform open-ended market products for the Golden Visa - and how <strong>Explorer Investments</strong> sets the benchmark for governance, transparency, and value creation.
            </p>

            {/* TOC */}
            <nav
              aria-label="Table of contents"
              className="mt-6 border border-[#E4E0CF] rounded-xl p-4 bg-[#FFFCF3]"
            >
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#B4A77E]" /> Contents
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                {[
                  { id: "why-funds", label: "Why Funds Lead in 2025" },
                  { id: "cmvm", label: "CMVM Oversight - What It Means" },
                  { id: "compare", label: "PE vs VC vs Open-Ended (Comparison)" },
                  { id: "explorer", label: "Why Explorer Tops the List" },
                  { id: "method", label: "How Value Is Created" },
                  { id: "us", label: "US Investors: FATCA/PFIC" },
                  { id: "process", label: "Step-by-Step Process" },
                  { id: "risk", label: "Opportunities & Risks" },
                  { id: "faq", label: "FAQs" },
                  { id: "cta", label: "Book a Private Consultation" },
                ].map((item) => (
                  <li key={item.id}>
                    <button onClick={() => scrollTo(item.id)} className="text-[#002741] hover:underline">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.header>

          {/* WHY FUNDS */}
          <section id="why-funds" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BadgeCheck className="w-6 h-6 text-[#B4A77E]" />
              Why CMVM-Regulated Funds Lead in 2025
            </h2>
            <p>
              After policy changes, the fund route is the most consistent, auditable pathway to EU residency. Unlike single-asset bets, regulated funds provide <strong>portfolio diversification</strong>, <strong>institutional governance</strong>, and <strong>clear reporting</strong> - all aligned with the 5-year Golden Visa horizon.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border bg-[#FFFEFA]">
                <h3 className="font-semibold mb-2">Investor Advantages</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Professional selection and monitoring of assets</li>
                  <li>Lower idiosyncratic risk vs. single properties</li>
                  <li>Audit trail suited for immigration and banking</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Residency Alignment</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Five-year holding period matches ARI requirements</li>
                  <li>7 days/year physical presence is typically sufficient</li>
                  <li>Family inclusion with spouse and dependents</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CMVM */}
          <section id="cmvm" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#B4A77E]" />
              CMVM Oversight - What It Means for You
            </h2>
            <p>
              The <strong>CMVM</strong> (Portugal’s securities authority) supervises licensed funds, managers, custodians, and auditors. For investors, this translates to <strong>segregated custody</strong>, <strong>independent audits</strong>, <strong>periodic reporting</strong>, and <strong>strict compliance</strong> - exactly the safeguards residency-driven families want.
            </p>
          </section>

          {/* COMPARISON TABLE */}
          <section id="compare" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold">Private Capital vs VC vs Open-Ended - Practical Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-xl overflow-hidden">
                <thead className="bg-[#002741] text-white">
                  <tr>
                    <th className="text-left p-3">Criterion</th>
                    <th className="text-left p-3">Private Equity (Explorer)</th>
                    <th className="text-left p-3">Venture Capital</th>
                    <th className="text-left p-3">Open-Ended Funds</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {[
                    ["Underlying Assets", "Stakes in established private companies", "Early-stage startups", "Public equities/bonds"],
                    ["Liquidity", "Low (5-10 years)", "Low (5-10 years)", "High (daily)"],
                    ["Volatility", "Fundamentals-driven", "High (startup risk)", "Market-to-market"],
                    ["Transparency", "Audited, identified holdings", "Portfolio snapshots", "Asset-class level"],
                    ["GV Eligibility", "✅ Typically eligible", "✅ Typically eligible", "❌ Not eligible"],
                    ["Investor Fit", "Residency + stability", "High-risk appetite", "Short-term/liquidity need"],
                  ].map((row, i) => (
                    <tr key={i} className="border-t">
                      <td className="p-3 font-medium">{row[0]}</td>
                      <td className="p-3">{row[1]}</td>
                      <td className="p-3">{row[2]}</td>
                      <td className="p-3">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#15364A]">
              Bottom line: Golden Visa investors don’t need daily liquidity - they need <em>governance, reporting, and value creation</em> over a 5-year horizon.
            </p>
          </section>

          {/* EXPLORER EDGE */}
          <section id="explorer" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <LineChart className="w-6 h-6 text-[#B4A77E]" /> Why Explorer Tops the 2025 List
            </h2>
            <p>
              <strong>Explorer Investments</strong> is widely recognized as Portugal’s leading private-capital platform by scale, deal flow, and governance. Investors gain exposure to tangible companies in energy, healthcare, tourism/services, industrial technology, and adjacent infrastructure - with institutional stewardship.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border border-[#E9E6D8] bg-[#FFFEFA]">
                <p className="text-3xl font-extrabold">€1.8B+</p>
                <p className="text-sm">Assets under management</p>
              </div>
              <div className="p-4 rounded-lg border border-[#E9E6D8] bg-[#FFFEFA]">
                <p className="text-3xl font-extrabold">20+ yrs</p>
                <p className="text-sm">Operating track record</p>
              </div>
              <div className="p-4 rounded-lg border border-[#E9E6D8] bg-[#FFFEFA]">
                <p className="text-3xl font-extrabold">Institutional</p>
                <p className="text-sm">Governance & reporting</p>
              </div>
            </div>
          </section>

          {/* METHOD */}
          <section id="method" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-[#B4A77E]" /> How Value Is Created (Illustrative)
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Operational Uplift", text: "Efficiency, pricing, KPI cadence, talent upgrades" },
                { title: "Strategic Expansion", text: "Export channels, product adjacencies, bolt-on M&A" },
                { title: "Disciplined Exits", text: "Trade sale, secondary, or IPO where relevant" },
              ].map((b, i) => (
                <div key={i} className="p-5 rounded-xl border bg-white">
                  <h3 className="font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm opacity-90">{b.text}</p>
                </div>
              ))}
            </div>
            <p className="text-xs opacity-70">For illustration only; not a guarantee of future results.</p>
          </section>

          {/* US INVESTORS */}
          <section id="us" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Globe className="w-6 h-6 text-[#B4A77E]" /> US Investors: FATCA/PFIC-Friendly
            </h2>
            <p>
              Explorer’s vehicles are designed to support U.S. Persons with <strong>FATCA</strong> alignment, <strong>PFIC</strong> statements, and custodian banks experienced in cross-border onboarding - reducing friction while keeping everything compliant and auditable.
            </p>
          </section>

          {/* PROCESS */}
          <section id="process" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <CalendarClock className="w-6 h-6 text-[#B4A77E]" /> Step-by-Step Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Free Consultation", desc: "Clarify goals, timelines, and eligibility." },
                { title: "DD Materials", desc: "Receive prospectus, reports, and regulatory docs." },
                { title: "Compliance Onboarding", desc: "KYC/AML, custodian setup, funding path." },
                { title: "Subscription & ARI", desc: "Invest €500k and coordinate Golden Visa filing." },
              ].map((s, i) => (
                <div key={i} className="p-5 rounded-xl border bg-white">
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm opacity-90">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* RISK */}
          <section id="risk" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-[#B4A77E]" /> Opportunities & Risks
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Opportunities</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Institutional governance and reporting</li>
                  <li>Real-economy exposure with value-creation levers</li>
                  <li>Alignment with Golden Visa timelines</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Principal Risks</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Illiquidity during the multi-year holding period</li>
                  <li>Execution risk at portfolio companies</li>
                  <li>Administrative backlogs for ARI processing</li>
                </ul>
              </div>
            </div>
            <p className="text-xs opacity-70">
              Educational content only - not investment, legal, or tax advice. Review prospectus and seek independent counsel.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <FileSearch className="w-6 h-6 text-[#B4A77E]" /> Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                { q: "Are open-ended funds eligible for the Golden Visa?", a: "No. The ARI program focuses on qualifying (typically closed-ended/alternative) funds regulated under CMVM rules." },
                { q: "What is the minimum investment?", a: "€500,000 into a qualifying CMVM-regulated fund." },
                { q: "Can I include my family?", a: "Yes - spouse and dependent children (and in some cases dependent parents) can be included." },
                { q: "How often must I be in Portugal?", a: "Typically 7 days per year; verify current rules before applying." },
                { q: "What differentiates Explorer?", a: "Institutional discipline, audited reporting, sector breadth, and a long operating history under CMVM supervision." },
              ].map((item, idx) => (
                <details key={idx} className="p-4 border rounded-lg bg-white">
                  <summary className="font-semibold cursor-pointer">{item.q}</summary>
                  <p className="mt-2 text-sm">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CONTACT STRIP */}
          <section className="pt-2">
            <div className="pb-2">
              <h3 className="text-[#002741] text-lg font-semibold mb-4">Your Trusted Investor Relations Team</h3>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                {/* André */}
                <div className="flex items-start gap-4">
                  <img
                    src="/assets/images/andre_2025.jpg"
                    alt="André Bandeira"
                    className="w-16 h-16 rounded-full object-cover border"
                  />
                  <div className="text-sm leading-snug">
                    <p className="font-bold">André Bandeira</p>
                    <a
                      href="mailto:ab@explorerinvestments.com?subject=Golden%20Visa%20Investment%20Inquiry%20from%20Website"
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
                  />
                  <div className="text-sm leading-snug">
                    <p className="font-bold">Maria Campos Silva</p>
                    <a
                      href="mailto:mcs@explorerinvestments.com?subject=Golden%20Visa%20Investment%20Inquiry%20from%20Website"
                      className="flex items-center gap-2 text-[#B4A77E] hover:underline"
                    >
                      <FontAwesomeIcon icon={faEnvelope} /> mcs@explorerinvestments.com
                    </a>
                  </div>
                </div>
              </div>

              <Link
                href="/"
                className="mt-[24px] mb-[12px] bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-base px-6 py-3 rounded-full transition text-center inline-flex items-center gap-2"
              >
                <Play size={18} strokeWidth={2} />
                <span>Start Your Investor Journey</span>
              </Link>
            </div>
          </section>
        </div>
      </section>

      {/* STEPS CTA STRIP */}
      <section className="py-16 px-6 text-center bg-[#E4E0CF]">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#002D3D] mb-10">
          <span className="block text-3xl lg:text-4xl">Get EU Residency Through a Proven, Fast-Track Investment</span>
          <span className="block text-xl lg:text-2xl text-[#002D3D] mt-2">With a Free Expert Session to Start</span>
        </h2>

        <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center items-start gap-6 relative w-full">
          {/* Steps 1-4 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-6 flex-1 w-full">
            {/* Step 1 */}
            <div className="relative bg-[#fff8e1] rounded-lg px-6 py-6 flex-1 min-w-[200px] text-center shadow-sm flex flex-col items-center min-h-[250px] border border-[#f1e4b8]">
              <div className="absolute -top-3 -left-3 bg-[#002d3d] text-white text-[11px] font-semibold px-3 py-1 rounded-tr-md rounded-bl-md shadow-md">Step 1</div>
              <FontAwesomeIcon icon={faPen} className="text-[#002d3d] mb-2 text-xl" />
              <p className="text-base font-semibold text-[#002d3d] mb-2">Free 1-Hour Consultation</p>
              <p className="text-[11px] text-[#002d3d] mb-3">Book your session with Portugal’s leading investment specialists - no cost, no obligation.</p>
              <Link href="/" className="bg-[#B4A77E] hover:bg-[#9c9067] text-white text-xs font-bold px-3 py-1 rounded-md transition inline-flex items-center gap-1">
                <Play size={14} strokeWidth={2} /> Book Now
              </Link>
            </div>

            {/* Timeline */}
            <div className="flex flex-col items-center justify-center">
              <div className="block md:hidden w-[1px] h-10 bg-gray-400 mb-1" />
              <div className="hidden md:block h-[1px] w-10 bg-gray-400 mb-1" />
              <span className="text-xs text-gray-600">1 day</span>
            </div>

            {/* Step 2 */}
            <div className="relative bg-[#f9f9fc] rounded-lg px-6 py-6 flex-1 min-w-[200px] text-center shadow-sm flex flex-col items-center min-h-[250px]">
              <div className="absolute -top-3 -left-3 bg-[#002d3d] text-white text-[11px] font-semibold px-3 py-1 rounded-tr-md rounded-bl-md shadow-md">Step 2</div>
              <FontAwesomeIcon icon={faCommentDots} className="text-[#002d3d] mb-2 text-xl" />
              <p className="text-base font-semibold text-[#002d3d]">Meet Your Expert</p>
              <p className="text-[11px] text-[#002d3d] mb-3">Confirm scope, documents, and timelines.</p>
            </div>

            {/* Timeline */}
            <div className="flex flex-col items-center justify-center">
              <div className="block md:hidden w-[1px] h-10 bg-gray-400 mb-1" />
              <div className="hidden md:block h-[1px] w-10 bg-gray-400 mb-1" />
              <span className="text-xs text-gray-600">3 days</span>
            </div>

            {/* Step 3 */}
            <div className="relative bg-[#f9f9fc] rounded-lg px-6 py-6 flex-1 min-w-[200px] text-center shadow-sm flex flex-col items-center min-h-[250px]">
              <div className="absolute -top-3 -left-3 bg-[#002d3d] text-white text-[11px] font-semibold px-3 py-1 rounded-tr-md rounded-bl-md shadow-md">Step 3</div>
              <FontAwesomeIcon icon={faTv} className="text-[#002d3d] mb-2 text-xl" />
              <p className="text-base font-semibold text-[#002d3d]">Live Presentation</p>
              <p className="text-[11px] text-[#002d3d] mb-3">Understand strategy, governance, and long-term outcomes. Align with ARI requirements.</p>
            </div>

            {/* Timeline */}
            <div className="flex flex-col items-center justify-center">
              <div className="block md:hidden w-[1px] h-10 bg-gray-400 mb-1" />
              <div className="hidden md:block h-[1px] w-10 bg-gray-400 mb-1" />
              <span className="text-xs text-gray-600">5 days</span>
            </div>

            {/* Step 4 */}
            <div className="relative bg-[#f9f9fc] rounded-lg px-6 py-6 flex-1 min-w-[200px] text-center shadow-sm flex flex-col items-center min-h-[250px]">
              <div className="absolute -top-3 -left-3 bg-[#002d3d] text-white text-[11px] font-semibold px-3 py-1 rounded-tr-md rounded-bl-md shadow-md">Step 4</div>
              <FontAwesomeIcon icon={faIdCard} className="text-[#002d3d] mb-2 text-xl" />
              <p className="text-base font-semibold text-[#002d3d]">Subscription & Filing</p>
              <p className="text-[11px] text-[#002d3d] mb-3">Subscribe €500k into a qualifying fund and proceed with ARI filing.</p>
            </div>
          </div>

          {/* Spacer */}
          <div className="w-full"></div>

          {/* Step 5 CTA */}
          <div className="bg-[#B4A77E] rounded-lg p-4 w-full max-w-[664px] mx-auto shadow-md flex flex-col items-center md:flex-row md:justify-between text-white">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faIdCard} className="text-xl" />
              <span className="text-sm font-medium">Step 5</span>
              <FontAwesomeIcon icon={faArrowRight} className="hidden md:inline text-2xl" />
              <FontAwesomeIcon icon={faArrowDown} className="md:hidden text-2xl" />
            </div>
            <Link
              href="/"
              className="mt-3 md:mt-0 bg-[#002741] border border-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white hover:text-[#002741] transition duration-300 inline-flex items-center gap-1"
            >
              <FileCheck size={16} strokeWidth={2} /> Get Portuguese Golden Visa
            </Link>
          </div>
        </div>
      </section>

      {/* WHY EXPLORER */}
      <section className="bg-[#F9F9FC] py-16 px-4">
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#002D3D] text-left mb-10">
            Why Choose Explorer Investments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#002D3D] text-base">
            {[
              { icon: <LineChart size={24} />, title: "Real Returns", text: "Institutional-grade performance with disciplined value creation." },
              { icon: <ShieldCheck size={24} />, title: "Secure & Regulated", text: "CMVM oversight and 20+ years of operating history." },
              { icon: <CalendarClock size={24} />, title: "Minimal Stay", text: "Maintain residency with approximately 7 days per year." },
              { icon: <Users size={24} />, title: "Family Coverage", text: "Include spouse and dependent children under the same visa." },
              { icon: <Flag size={24} />, title: "Fast Track to Citizenship", text: "Permanent residency after 5 years; citizenship application thereafter." },
              { icon: <Globe size={24} />, title: "Full EU Access", text: "Live, work, and travel across the European Union." },
            ].map((f, i) => (
              <div key={i} className="p-6 flex items-start gap-4 bg-white rounded-xl border">
                {f.icon}
                <div>
                  <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-[20px]">
            <Link
              href="/"
              className="bg-[#002741] border border-white text-white text-sm font-semibold px-6 py-3 rounded-full transition inline-flex items-center justify-center gap-2 w-auto"
            >
              Book a Private Session
            </Link>
          </div>
        </div>
      </section>

      <BlogArticles />
    </>
  );
};

export default GoldenVisaTopFunds;
