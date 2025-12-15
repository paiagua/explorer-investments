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
              Golden Visa Portugal 2025: The Fastest Path to Legally Live in Europe
            </h1>
            <p className="text-base sm:text-lg text-[#15364A]">
              Portugal’s Golden Visa remains one of Europe’s most flexible residency-by-investment programs. With real-estate routes restricted, <strong>eligible CMVM-regulated investment funds</strong>, research, culture, and job creation now lead the way. This deep-dive explains how the program works in 2025, what changed, who qualifies, the <strong>exact steps</strong>, cost breakdowns, common mistakes, and strategy tips to improve approval odds and long‑term outcomes.
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
                  { id: "what-is", label: "What Is the Portugal Golden Visa? (ARI)" },
                  { id: "eligibility", label: "Eligibility, Family, and Stay Rules" },
                  { id: "routes", label: "Eligible Investment Routes in 2025" },
                  { id: "process", label: "Step‑by‑Step Application Process" },
                  { id: "costs", label: "Costs & Fees: Complete Breakdown" },
                  { id: "stats", label: "Recent Statistics & Market Trends" },
                  { id: "opportunities", label: "Opportunities & Risks" },
                  { id: "tips", label: "Strategic Tips for Investors" },
                  { id: "faq", label: "FAQs & Common Misconceptions" },
                  { id: "conclusion", label: "Conclusion & Next Steps" },
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
              For non‑EU citizens seeking a secure foothold in the European Union, Portugal’s Golden Visa (residence by investment) offers a pragmatic blend of <em>low physical presence</em>, <em>family inclusion</em>, and a <em>clear path to permanent residence and, later, citizenship</em>. In 2025, policy refinements shifted capital away from property purchases and toward <strong>productive, regulated investment</strong>-especially diversified funds overseen by the CMVM.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Understand what the ARI (Golden Visa) is and how it has evolved</li>
              <li>See exactly which investment routes are eligible this year</li>
              <li>Follow a practical, field‑tested process timeline and checklist</li>
              <li>Review fees, holding periods, and the minimal stay requirement</li>
              <li>Learn proven strategies to reduce delays and avoid rejections</li>
            </ul>
          </motion.div>

          {/* WHAT IS */}
          <section id="what-is" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BadgeCheck className="w-6 h-6 text-[#B4A77E]" />
              What Is the Portugal Golden Visa? (ARI)
            </h2>
            <p>
              The Portuguese Golden Visa-formally the <strong>Residence Permit for Investment Activity (ARI)</strong>-was launched in 2012 to attract international investment. It grants a renewable residence permit to non‑EU/EEA/Swiss nationals who complete a qualifying investment and meet program rules.
            </p>
            <h3 className="font-semibold">Core benefits</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Right to live, study, and work in Portugal</li>
              <li>Visa‑free travel within the Schengen Area</li>
              <li>Family aggregation for spouse/partner, dependent children, and in some cases dependent parents</li>
              <li>Low physical presence: roughly <strong>7 days/year</strong> on average</li>
              <li>Pathway to permanent residence and potential citizenship after <strong>5 years</strong> (subject to language and legal requirements)</li>
            </ul>
          </section>

          {/* ELIGIBILITY */}
          <section id="eligibility" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Users className="w-6 h-6 text-[#B4A77E]" />
              Eligibility, Family, and Stay Rules
            </h2>
            <p>
              To qualify, the main applicant must be a non‑EU/EEA/Swiss national, maintain the qualifying investment for the legally required period (typically five years), and demonstrate clean criminal records and lawful source of funds. Family members can be included from the outset or added later via family reunification.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Who you can include</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Spouse or de facto partner</li>
                  <li>Children under 18; older if financially dependent and studying</li>
                  <li>Dependent parents (subject to proof of dependency)</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Presence & maintenance</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Average stay of 7 days per year in Portugal</li>
                  <li>Maintain the investment for at least 5 years</li>
                  <li>Comply with renewals and biometrics as scheduled</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ROUTES */}
          <section id="routes" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#B4A77E]" />
              Eligible Investment Routes in 2025
            </h2>
            <p>
              Following reforms, new applications through <strong>real estate acquisition</strong> are largely ineligible. The program prioritizes diversified, regulated capital. The most common qualifying routes now include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Fund subscription (PE/VC):</strong> minimum €500,000 in <em>CMVM‑regulated</em> Portuguese investment funds aligned with ARI rules.</li>
              <li><strong>Scientific research:</strong> contributions from €500,000 to accredited public or private R&D projects.</li>
              <li><strong>Cultural/heritage support:</strong> donations from €250,000 to approved cultural or national heritage bodies.</li>
              <li><strong>Job creation:</strong> incorporation or investment that generates at least 10 full‑time positions in Portugal.</li>
            </ul>
            <h3 className="font-semibold">Why funds dominate in 2025</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Diversification across assets and sectors vs. single‑asset exposure</li>
              <li>Professional governance and audited reporting</li>
              <li>Compliance by design with Golden Visa rules</li>
              <li>Potential capital appreciation alongside residency goals</li>
            </ul>
          </section>

          {/* PROCESS */}
          <section id="process" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <CalendarClock className="w-6 h-6 text-[#B4A77E]" />
              Step‑by‑Step Application Process
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Pre‑screen & strategy:</strong> pick a qualifying route and define objectives (residency, time horizon, risk appetite).</li>
              <li><strong>NIF & banking:</strong> obtain a Portuguese tax number (NIF) and open a local bank account.</li>
              <li><strong>Source of funds & KYC:</strong> prepare bank statements, employment/business proofs, and apostilled police clearances.</li>
              <li><strong>Execute the investment:</strong> subscribe to the fund or complete the eligible contribution; retain custody/ownership proofs.</li>
              <li><strong>Online application:</strong> submit ARI forms and documentation via the AIMA portal for all family members.</li>
              <li><strong>Biometrics:</strong> attend the appointment in Portugal when scheduled.</li>
              <li><strong>Receive residence cards:</strong> initial validity typically 2 years; renew with updated proofs.</li>
              <li><strong>Maintain compliance:</strong> stay requirement (7 days/year) and investment holding.</li>
              <li><strong>Year 5+:</strong> apply for permanent residence and potentially citizenship (Portuguese language exam required).</li>
            </ol>
            <div className="p-4 rounded-lg border bg-[#FFFEFA]">
              <p className="text-sm"><strong>Pro tip:</strong> keep a single, indexed PDF set that mirrors AIMA’s document list. Label files with YYYY‑MM and applicant names to speed up renewals and family additions.</p>
            </div>
          </section>

          {/* COSTS */}
          <section id="costs" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <LineChart className="w-6 h-6 text-[#B4A77E]" />
              Costs & Fees: Complete Breakdown
            </h2>
            <p>
              Total costs vary by family size, route, and service providers. Expect the following buckets when budgeting your Golden Visa plan:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Government & processing</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Application and issuance fees per applicant (initial + renewals)</li>
                  <li>Biometric fees and card re‑issuance fees</li>
                  <li>Apostilles and certified translations</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Professional services</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Immigration legal counsel (fixed or staged)</li>
                  <li>Tax advisor for NIF, reporting, and planning</li>
                  <li>Banking, custody, or fund subscription administration</li>
                </ul>
              </div>
            </div>
            <p className="text-sm">
              <strong>Note:</strong> Fund subscriptions typically include management and performance terms (e.g., management fees and carry). Always review <em>Private Placement Memoranda</em>, KIIDs, and audited statements.
            </p>
          </section>

          {/* STATS */}
          <section id="stats" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-[#B4A77E]" />
              Recent Statistics & Market Trends
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-[#E9E6D8] bg-[#FFFEFA]">
                <p className="text-3xl font-extrabold">≈ 13,000</p>
                <p className="text-sm">Total residence permits granted since inception*</p>
              </div>
              <div className="p-4 rounded-lg border border-[#E9E6D8] bg-[#FFFEFA]">
                <p className="text-3xl font-extrabold">Fund‑led</p>
                <p className="text-sm">Fund route now dominates new applications*</p>
              </div>
            </div>

            <h3 className="font-semibold mt-2">What’s driving demand</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Global mobility and education access for families</li>
              <li>Portfolio diversification into EU assets with governance</li>
              <li>Comparable or lower presence requirement vs. other EU options</li>
            </ul>
            <p className="text-xs text-[#6b7280]">*Indicative program insights used for orientation and planning; confirm current figures with official releases.</p>
          </section>

          {/* OPPORTUNITIES & RISKS */}
          <section id="opportunities" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BadgeCheck className="w-6 h-6 text-[#B4A77E]" />
              Opportunities & Risks
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Opportunities</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Diversified exposure via funds vs. single‑asset risk</li>
                  <li>Professional management, audited governance</li>
                  <li>Low presence requirement while preserving EU optionality</li>
                  <li>Potential for capital growth aligned with residency goals</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Risks</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Illiquidity and multi‑year lock‑ups</li>
                  <li>Policy or processing timelines changing over time</li>
                  <li>Manager selection and market cycle risk</li>
                  <li>Documentation gaps causing avoidable delays</li>
                </ul>
              </div>
            </div>
          </section>

          {/* TIPS */}
          <section id="tips" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-[#B4A77E]" />
              Strategic Tips for Investors
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Run comparative due diligence:</strong> read the full fund docs (PPM, KIID), check CMVM registration, audit history, governance bodies, and sector exposure.
              </li>
              <li>
                <strong>Match time horizon to lock‑ups:</strong> ensure exit windows align with your citizenship timeline and liquidity needs.
              </li>
              <li>
                <strong>Document like a pro:</strong> apostilles, translations, and source‑of‑funds trails should be complete and consistent across all applicants.
              </li>
              <li>
                <strong>Expect & plan for lead times:</strong> book biometrics early, keep passports valid 12+ months, and track renewals with calendar reminders.
              </li>
              <li>
                <strong>Tax & residency planning:</strong> coordinate with Portuguese tax advisors regarding NIF, reporting, and any beneficial regimes.
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Globe className="w-6 h-6 text-[#B4A77E]" />
              FAQs & Common Misconceptions
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold">Do I need to live full‑time in Portugal?</h3>
                <p>No. The Golden Visa is designed for minimal stay (around 7 days per year on average). Many investors keep their primary residence elsewhere.</p>
              </div>
              <div>
                <h3 className="font-semibold">Is real estate still eligible?</h3>
                <p>New applications via standard property purchases are largely ineligible. Most investors now choose regulated funds, research, culture, or job creation routes.</p>
              </div>
              <div>
                <h3 className="font-semibold">When can I apply for citizenship?</h3>
                <p>Typically after five years of legal residence, subject to meeting legal and language requirements and having maintained the qualifying investment.</p>
              </div>
              <div>
                <h3 className="font-semibold">Can I add family members later?</h3>
                <p>Yes. You can include eligible dependents from the start or add them through family reunification after your card is issued.</p>
              </div>
            </div>
          </section>

          {/* CONCLUSION */}
          <section id="conclusion" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Flag className="w-6 h-6 text-[#B4A77E]" />
              Conclusion & Next Steps
            </h2>
            <p>
              In 2025, Portugal’s Golden Visa has matured into a streamlined, fund‑centric framework that balances investor protections with national development goals. For globally mobile families and entrepreneurs, it remains the <strong>fastest, most flexible legal path to live in Europe</strong>-with EU mobility today and a potential EU passport tomorrow.
            </p>
            <p>
              Choose a compliant route, document thoroughly, and partner with experienced advisors. With the right plan, you can align <em>residency security</em> with <em>capital strategy</em> and set up a smooth transition to long‑term EU options.
            </p>
          </section>

          {/* TRUST / CONTACT */}
          <div className="pb-10 mt-8">
            <h3 className="text-[#002741] text-lg font-semibold mb-4">
              Speak with an Investor Relations Lead
            </h3>

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
                    href="mailto:ab@explorerinvestments.com?subject=Golden%20Visa%20Investment%20Inquiry"
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
                    href="mailto:mcs@explorerinvestments.com?subject=Golden%20Visa%20Investment%20Inquiry"
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
            <div className="p-6 flex items-start gap-4 bg-white rounded-xl border">
              <LineChart size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Real Returns</h3>
                <p>Institutional‑grade performance with disciplined value creation.</p>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4 bg-white rounded-xl border">
              <ShieldCheck size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Secure & Regulated</h3>
                <p>CMVM oversight and 20+ years operating in Portugal.</p>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4 bg-white rounded-xl border">
              <CalendarClock size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Minimal Stay</h3>
                <p>Maintain residency with approximately 7 days per year.</p>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4 bg-white rounded-xl border">
              <Users size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Family Coverage</h3>
                <p>Include spouse and dependent children under the same visa.</p>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4 bg-white rounded-xl border">
              <Flag size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Fast Track to Citizenship</h3>
                <p>Permanent residency after 5 years; citizenship application thereafter.</p>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4 bg-white rounded-xl border">
              <Globe size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Full EU Access</h3>
                <p>Live, work, and travel throughout the European Union.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[20px]">
          <Link
            href="/"
            className="bg-[#002741] border border-white text-white text-sm font-semibold px-6 py-3 rounded-full   transition inline-flex items-center justify-center gap-2 w-auto"
          >
            Get Portuguese Golden Visa
          </Link>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <BlogArticles />
    </>
  );
};

export default GoldenVisaGuide;