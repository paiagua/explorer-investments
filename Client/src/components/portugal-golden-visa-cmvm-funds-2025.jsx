import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BlogArticles from "./BlogArticles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";
import {
  LineChart,
  ShieldCheck, // Usado para a nova secção
  CalendarClock,
  Flag,
  Globe,
  Users,
  BadgeCheck,
  TrendingUp,
  AlertTriangle,
  FileText,
  BadgeDollarSign,
  Building2,
  Scale,
  FileSearch,
  Clock,
  BookOpen,
  CheckCircle2,
  BarChart3,
  Rocket,
  Building,
  Banknote,
} from "lucide-react";

/**
 * =====================
 * SEO SLUGS (suggested)
 * =====================
 * Article slug: "/why-smart-investors-choose-cmvm-regulated-funds-portugal-golden-visa-2025"
 * Section slugs (ids already bound to headings below):
 * - #what-is
 * - #fund-route
 * - #pe-vs-open-ended
 * - #explorer-edge
 * - #methodology
 * - #process
 * - #tax-legal
 * - #risk
 * - #faq
 * - #cta
 * Supporting landing pages:
 * - "/golden-visa/portugal-investment-fund"
 * - "/golden-visa/for-us-investors"
 * - "/golden-visa/compare"
 * - "/about/explorer-investments-golden-visa"
 */

const facts = {
  aum: "≈ €1.8B",
  years: "20+ years",
  minInvestment: "€500,000",
  exampleIrrNote: "Illustrative only - past performance is not indicative of future results.",
};

const Pill = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold bg-white/60">
    {children}
  </span>
);

const StatCard = ({ label, value, note }) => (
  <div className="p-4 rounded-lg border border-[#E9E6D8] bg-[#FFFEFA]">
    <p className="text-3xl font-extrabold">{value}</p>
    <p className="text-sm">{label}</p>
    {note ? <p className="text-xs opacity-70 mt-1">{note}</p> : null}
  </div>
);

const ProgressBar = ({ label, value }) => (
  <div className="space-y-1">
    <div className="flex items-center justify-between text-sm">
      <span className="font-medium">{label}</span>
      <span>{value}%</span>
    </div>
    <div className="w-full h-2 rounded-full bg-gray-200">
      <div className="h-2 rounded-full bg-[#B4A77E]" style={{ width: `${value}%` }} />
    </div>
  </div>
);

const Quote = ({ children }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#0f2c3a] bg-[#FFFCF3] py-3 px-4 rounded-md">
    “{children}”
  </blockquote>
);

 
const GoldenVisaGuideAndre = () => {
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
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Investing in Portugal: Private Capital vs Open-Ended Funds - Why Global Investors Choose CMVM-Regulated Vehicles (2025)
            </h1>
            <p className="text-base sm:text-lg text-[#15364A]">
              <strong>By André Bandeira, Investor Relations - Explorer Investments</strong>
            </p>
            <p className="text-base sm:text-lg text-[#15364A]">
              With real estate paths curtailed, disciplined investors are migrating from passive assets to <strong>active value creation</strong>. The <strong>CMVM-regulated fund route</strong> is now the premier choice, but not all funds are equal. The distinction between a passive, open-ended fund and a <strong>hands-on, private capital vehicle</strong> is critical. This guide explores why serious investors choose the private equity model-and how Explorer's deep, operational involvement in its portfolio companies aims to deliver true alignment and growth, not just market exposure.
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
                  { id: "what-is", label: "Portugal’s Golden Visa - The Essentials" },
                  { id: "fund-route", label: "Why Funds Lead in 2025" },
                  { id: "pe-vs-open-ended", label: "PE vs. VC vs. Open-Ended: Why PE is the Solid Choice" },
                  { id: "explorer-edge", label: "The Explorer Edge: A Hands-On Private Equity Platform" },
                  { id: "methodology", label: "How We Manufacture Value" },
                  { id: "process", label: "From First Call to Subscription" },
                  { id: "tax-legal", label: "Tax, Legal & Reporting" },
                  { id: "risk", label: "Opportunities, Risks & Mitigation" },
                  { id: "faq", label: "Frequently Asked Questions" },
                  { id: "cta", label: "Book a Private Consultation" },
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

          {/* TRUST STRIP */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatCard label="Assets Under Management" value={facts.aum} />
            <StatCard label="Track Record" value={facts.years} />
            <StatCard label="Eligible Minimum" value={facts.minInvestment} />
            <StatCard label="Methodology" value="Hands-On PE" note="Governance • Operational Value • Access" />
          </div>

          {/* WHAT IS */}
          <section id="what-is" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BadgeCheck className="w-6 h-6 text-[#B4A77E]" />
              Portugal’s Golden Visa - The Essentials
            </h2>
            <p>
              The Portugal Golden Visa (ARI) grants residency to non-EU nationals who invest under defined criteria. With the fund route, investors typically maintain the qualifying investment for five years and meet modest physical-presence requirements, with family inclusion possible.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">At a glance</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Qualifying investment held for ~5 years</li>
                  <li>Presence often 7 days per year (verify current rules)</li>
                  <li>Family reunification available</li>
                  <li>Pathway to permanent residency and citizenship (subject to law & language)</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border bg-[#FFFEFA]">
                <h3 className="font-semibold mb-2">Why the fund route</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Institutional governance & transparent reporting</li>
                  <li>Diversified exposure vs single-asset concentration</li>
                  <li>Clear compliance trail - suitable for cross-border families</li>
                </ul>
              </div>
            </div>
          </section>

          {/* WHY FUNDS */}
          <section id="fund-route" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-[#B4A77E]" /> Why Funds Lead in 2025
            </h2>
            <Quote>
              As real-estate options narrowed, capital migrated to regulated funds - where risk is underwritten by process: sourcing, governance, and value-creation playbooks.
            </Quote>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border bg-[#FFFEFA]">
                <h3 className="font-semibold mb-2">Investor advantages</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Professional asset selection and oversight</li>
                  <li>Lower idiosyncratic risk vs single properties</li>
                  <li>Auditability for immigration and banking</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Portfolio implications</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Exposure to tangible businesses and projects</li>
                  <li>Potential operational alpha vs passive beta</li>
                  <li>Longer horizon with disciplined exits</li>
                </ul>
              </div>
            </div>
          </section>

          {/* =================================================================== */}
          {/* =================================================================== */}
          {/* SECÇÃO ATUALIZADA - Nova introdução com base na nossa conversa */}
          {/* =================================================================== */}
          {/* =================================================================== */}
          <section id="pe-vs-open-ended" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold">
              The Golden Visa's Legal Filters: Why Your Only Choice is Private Capital
            </h2>

            <p className="text-base">
              For Golden Visa investors, the term "fund" is dangerously broad. Many assume any CMVM-regulated fund, like a standard liquid mutual fund (OICVM/UCITS) from a bank, is eligible. This is **incorrect**.
            </p>
            <p className="text-base">
              The Golden Visa legislation (ARI) is highly specific. It **legally excludes** these common, liquid funds by imposing two critical 'filters':
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base bg-white border border-gray-200 p-5 rounded-lg">
                <li><strong>1. Maturity Requirement:</strong> The law requires a fund with a <strong>"maturity... of, at least, five years"</strong>. Standard open-ended funds (OICVM) are perpetual and have *no* maturity date, instantly disqualifying them.</li>
                <li><strong>2. Investment Mandate:</strong> The law demands at least **60% of the investment** be in Portuguese-based companies. Standard funds invest globally (in Apple, Google, etc.) and fail this test.</li>
            </ul>
            <p className="text-base font-semibold">
              These rules were designed to force investment into the real, long-term Portuguese economy.
            </p>
            <p className="text-base">
              This means the investor's **only eligible options** are in the illiquid **Private Capital** space (Alternative Investment Funds or FIAs). The real decision is not *if* you should choose a liquid fund, but *which type* of illiquid, eligible fund is superior: **Private Equity (PE)** or **Venture Capital (VC)**.
            </p>


            {/* A Tabela de 3 Colunas */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-xl overflow-hidden">
                <thead className="bg-[#002741] text-white">
                  <tr>
                    <th className="text-left p-3">Criterion</th>
                    <th className="text-left p-3 bg-[#B4A77E]/20 text-[#B4A77E]">
                      <div className="flex items-center gap-2">
                        <Building size={16} /> Private Equity (PE) (e.g., Explorer)
                      </div>
                    </th>
                    <th className="text-left p-3">
                      <div className="flex items-center gap-2">
                        <Rocket size={16} /> Venture Capital (VC)
                      </div>
                    </th>
                    {/* =================================================================== */}
                    {/* Alteração Pedida - Clarificação da Tabela */}
                    {/* =================================================================== */}
                    <th className="text-left p-3">
                      <div className="flex items-center gap-2">
                        <Banknote size={16} /> Standard Open-Ended (OICVM)
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {[
                    {
                      cat: "Core Focus",
                      pe: "Buying established, mature, cash-flow positive businesses to improve them.",
                      vc: "Investing in early-stage startups with high-growth potential (and high risk).",
                      open: "Buying small pieces of publicly traded stocks and bonds.",
                    },
                    {
                      cat: "Level of Control",
                      pe: "High. Takes majority/significant stakes, gains board control, and actively directs strategy.",
                      vc: "Low to Moderate. Minority stakes, often with a board observer seat. Cannot force decisions.",
                      open: "None. You are a passive, microscopic owner of a public company.",
                    },
                    {
                      cat: "Value Creation",
                      pe: "Hands-on operational improvements, M&A, cost efficiencies, professionalization.",
                      vc: "Passive capital injection. Value is tied to the startup's ability to scale and 'hit a home run'.",
                      open: "Passive market appreciation (Beta). Relies on the stock market going up.",
                    },
                    {
                      cat: "Risk Profile",
                      pe: "Moderate to High. Risk is in the *execution* of the plan, not the *survival* of the idea.",
                      vc: "Extremely High. Speculative. Risk is in *survival*. Most startups fail.",
                      open: "Market Risk. Exposed to daily public market volatility and sentiment.",
                    },
                    {
                      cat: "Access to CEOs",
                      pe: "Direct & Constant. The PE manager is directly involved with the CEO and board.",
                      vc: "Periodic. Attends board meetings but is not involved in daily operations.",
                      open: "Zero. You will never speak to the CEO of Apple or Microsoft.",
                    },
                    {
                      cat: "GV Suitability",
                      pe: "Excellent. The 5-10 year lock-up aligns perfectly with the 5-year visa requirement.",
                      vc: "Eligible, but high-risk. A bad fit for capital preservation linked to residency.",
                      open: "INELIGIBLE. Standard liquid funds (OICVM/UCITS) are legally excluded. They fail the 5-year maturity and 60% local investment rules.",
                    },
                  ].map((row, i) => (
                    <tr key={i} className="border-t">
                      <td className="p-3 font-semibold text-gray-700">{row.cat}</td>
                      <td className="p-3 bg-[#FFFCF3] border-l border-r border-[#E9E6D8]">{row.pe}</td>
                      <td className="p-3">{row.vc}</td>
                      <td className="p-3 opacity-70">{row.open}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* A Análise Pós-Tabela (Mais Conteúdo) */}
            <div className="p-5 rounded-xl border-t-4 border-t-[#B4A77E] bg-[#FFFCF3] shadow-sm space-y-4">
              <h3 className="text-lg sm:text-xl font-bold mt-4">
                Analysis: Why Private Equity is the Institutional Choice for Residency
              </h3>

              <Quote>
                A Venture Capital fund invests in a *business plan*. A Private Equity fund like Explorer invests in a *business*. This is the fundamental difference.
              </Quote>

              <p>
                As the table shows, the law makes your choice clear: your capital must be illiquid and focused on Portugal. The choice is between PE and VC, and for a residency-linked investment, the difference is night and day.
              </p>

              <h4 className="font-semibold text-lg">1. The Problem with Venture Capital (VC)</h4>
              <p>
                Venture Capital is a "high-beta," speculative bet. You are investing in an *idea* or a *concept*, hoping it becomes the next unicorn. The risk is binary: the company either succeeds spectacularly or goes to zero. While eligible, <strong>tying your family's residency to such a speculative asset is a high-risk gamble</strong>. The manager has little control to "save" a failing startup.
              </p>

              <h4 className="font-semibold text-lg">2. The Power of Private Equity (PE): Control & Solidity</h4>
              <p>
                This is where the Explorer model thrives and why it is the solid choice.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Investment in Solid Foundations:</strong> PE funds like Explorer don't invest in ideas. <strong>We invest in solid, established companies</strong> with real customers, real revenue, and real cash flow. We know *what* we are investing in from day one.
                </li>
                <li>
                  <strong>Control Mitigates Risk:</strong> This is the key. We don't just give a company money and hope. We take a controlling stake. <strong>We are involved in the entire process.</strong> If a strategy isn't working, we have the power to change it.
                </li>
                <li>
                  <strong>Direct Access to CEOs & Management:</strong> Our teams sit on the boards. We have <strong>direct, weekly access to the CEOs and CFOs</strong>. We are partners in driving the business, professionalizing operations, and executing expansion plans. This "hands-on" approach is impossible in VC.
                </li>
              </ul>
            </div>

            {/* NOVA SECÇÃO - A RESPONDER DIRETAMENTE À SUA PERGUNTA */}
            <div className="p-5 rounded-xl border-l-4 border-l-[#B4A77E] bg-white shadow-lg border border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#B4A77E]" />
                A Critical Clarification: "Isn't this all 'Capital de Risco'?"
              </h3>
              <p className="mt-3">
                This is a common and critical point of confusion. The answer is **no**.
              </p>
              <p className="mt-2">
                In the market, "Venture Capital" (often translated as 'capital de risco') refers to speculative, early-stage investing in **startups and ideas**. The model is built on the hope that 1 out of 10 investments will be a "unicorn" and pay for all the failures.
              </p>
              <p className="mt-2">
                **Private Equity (the Explorer model)** is fundamentally different. We do not invest in *ideas*; we invest in **solid, established, profitable businesses**.
              </p>
              <p className="mt-2">
                You are correct that the mechanism is "buy and sell". But the value is created *in between*. We buy a solid company and apply our hands-on expertise-<strong>direct CEO access, board control, operational improvements</strong>-to build a *better, stronger, more profitable* company before we sell.
              </p>
              <p className="font-semibold text-base mt-3">
                Venture Capital is a bet on *speculation*. Private Equity is an investment in *execution* and *fundamentals*. For a Golden Visa investor, this distinction is everything.
              </p>
            </div>
          </section>


          {/* EXPLORER EDGE */}
          <section id="explorer-edge" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <LineChart className="w-6 h-6 text-[#B4A77E]" /> The Explorer Edge: A Hands-On Private Equity Platform
            </h2>

            <p>
              Now that you understand *why* the Private Equity model is the superior structure, you can see why Explorer Investments is one of Portugal's largest and most experienced independent PE platforms. For over 20 years, our strength has been our <strong>deep operational involvement</strong> and our <strong>ability to source unique opportunities</strong>. We don't just pick assets; we build businesses. This institutional DNA is what separates us from passive investment vehicles.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <StatCard label="AUM (approx.)" value={facts.aum} />
              <StatCard label="Experience" value={facts.years} />
              <StatCard label="Minimum (fund route)" value={facts.minInvestment} />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Deep Deal Sourcing & Expertise",
                  text: "We don't wait for deals. Our 20+ year track record and extensive local network mean we originate unique, often off-market, opportunities. We know what to invest in because we are on the ground, analyzing fundamentals.",
                },
                {
                  title: "Hands-On Value Creation",
                  text: "This is our core. We get actively involved. Our teams work directly with portfolio company CEOs and boards to drive strategy, optimize operations, and execute growth plans. This is true stewardship.",
                },
                {
                  title: "Institutional Governance & Access",
                  text: "As a CMVM-regulated entity, we provide transparent, institutional-grade reporting. Our investors gain access to a platform built on discipline, compliance, and a powerful network of operators.",
                },
              ].map((b, i) => (
                <div key={i} className="p-5 rounded-xl border bg-white shadow-sm">
                  <h3 className="font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm opacity-90">{b.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* METHODOLOGY */}
          <section id="methodology" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-[#B4A77E]" /> How We Manufacture Value
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Our Value Creation Playbook</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li><strong>Direct Strategic Input:</strong> Leveraging our board access to guide CEOs on pricing, new market entry, and unit economics.</li>
                  <li><strong>Professionalization & Governance:</strong> Actively implementing institutional-grade KPI reporting, financial controls, and recruiting top-tier talent.</li>
                  <li><strong>Targeted M&A:</strong> Sourcing and executing "bolt-on" acquisitions for our portfolio companies to build scale and competitive moats.</li>
                  <li><strong>Disciplined Exits:</strong> Managing the entire exit process (trade sale, secondary, or IPO) to maximize investor returns.</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border bg-[#FFFEFA]">
                <h3 className="font-semibold mb-2">Illustrative drivers</h3>
                <div className="space-y-3">
                  <ProgressBar label="Operational Improvement" value={40} />
                  <ProgressBar label="Strategic Expansion & M&A" value={35} />
                  <ProgressBar label="Exit Optimization" value={25} />
                </div>
                <p className="text-xs mt-2 opacity-70">{facts.exampleIrrNote}</p>
              </div>
            </div>
            <Quote>
              In public markets, you observe value. In Explorer's private equity model, we are <strong>directly involved in manufacturing it</strong>. Our access to management and solid, repeatable process is our edge.
            </Quote>
          </section>

          {/* PROCESS */}
          <section id="process" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <CalendarClock className="w-6 h-6 text-[#B4A77E]" /> From First Call to Subscription
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  title: "Discovery Call",
                  desc: "Clarify goals, timelines, and eligibility. No obligation.",
                },
                {
                  title: "DD Pack",
                  desc: "Receive due-diligence materials and regulatory documents.",
                },
                {
                  title: "Compliance Onboarding",
                  desc: "KYC/AML, custodian setup, and funding path.",
                },
                {
                  title: "Subscription & Filing",
                  desc: "Complete fund subscription and coordinate ARI steps.",
                },
              ].map((s, i) => (
                <div key={i} className="p-5 rounded-xl border bg-white">
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm opacity-90">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* TAX & LEGAL */}
          <section id="tax-legal" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Scale className="w-6 h-6 text-[#B4A77E]" /> Tax, Legal & Reporting
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>CMVM compliance:</strong> funds must satisfy Portuguese securities regulation and ARI eligibility.</li>
              <li><strong>Cross-border tax:</strong> coordinate planning across home country, Portugal, and treaty networks.</li>
              <li><strong>US investors:</strong> confirm FATCA/PFIC support and custodial arrangements.</li>
              <li><strong>Prospectus & KIDs:</strong> review official materials; seek independent legal/tax advice.</li>
            </ul>
            <p className="text-xs opacity-70">
              Educational content only - not investment, legal, or tax advice.
            </p>
          </section>

          {/* RISK */}
          <section id="risk" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-[#B4A77E]" /> Opportunities, Risks & Mitigation
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Opportunities</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Institutional governance and reporting</li>
                  <li>Real-economy exposure with value-a-creation levers</li>
                  <li>Alignment with Golden Visa residency goals</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Principal risks</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Illiquidity and multi-year holding periods</li>
                  <li>Execution risk at portfolio companies</li>
                  <li>Regulatory timelines and administrative backlog</li>
                </ul>
              </div>
            </div>
            <div className="p-5 rounded-xl border bg-[#FFFEFA]">
              <h3 className="font-semibold mb-2">Mitigation toolkit</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Diversification across sectors and deal vintages</li>
                <li><strong>Active management and board-level oversight</strong></li>
                <li>Independent audits and performance reviews</li>
                <li>Clear exit planning (secondary, trade sale, strategic buyers)</li>
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <FileSearch className="w-6 h-6 text-[#B4A77E]" /> Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                /* =================================================================== */
                /* FAQ ATUALIZADA - Nova Pergunta Adicionada */
                /* =================================================================== */
                {
                  q: "Why can't I just use a standard, open-ended fund from my bank?",
                  a: "This is a key point. The Golden Visa law **explicitly excludes** standard, liquid mutual funds (OICVM/UCITS). The law requires two things these funds don't have: 1) A 'maturity' (lifespan) of at least 5 years (open-ended funds are perpetual), and 2) 60% of the investment must be in Portuguese companies. The law forces you to choose a long-term, illiquid fund, making Private Equity the solid, institutional choice.",
                },
                {
                  q: "Isn't Private Equity just another form of 'Venture Capital' (Capital de Risco)?",
                  a: "This is a common confusion. No. 'Venture Capital' invests in high-risk, speculative startups. Private Equity (PE), like the Explorer model, invests in mature, established, and often profitable companies. The goal of PE is not to *hope* for a winner, but to use **hands-on control and operational expertise** to make solid companies even better. It is a fundamentally more solid, fundamentals-based approach.",
                },
                {
                  q: "Do private capital funds tell me where my capital goes?",
                  a: "Yes. Unlike many open-ended funds, private equity investors receive detailed disclosures on the specific portfolio companies and periodic reporting on their performance.",
                },
                {
                  q: "Is daily liquidity important for Golden Visa?",
                  a: "Not typically. The ARI route assumes a multi-year commitment. For this horizon, governance, alignment, and the manager's ability to create value (like Explorer's) matter far more than day-to-day liquidity.",
                },
                {
                  q: "How is risk managed in a private equity fund?",
                  a: "Risk is managed through deep initial due diligence, diversification, and most importantly, active stewardship. By having direct access to management and board seats, managers like Explorer can proactively address challenges.",
                },
                {
                  q: "Can I include my family?",
                  a: "Yes - spouse and dependents can be included, subject to current rules.",
                },
                {
                  q: "What differentiates Explorer?",
                  a: "Our 20+ year track record of institutional discipline, our extensive local network for sourcing unique deals, and our hands-on, operational approach to building value directly within our companies.",
                },
              ].map((item, idx) => (
                <details key={idx} className="p-4 border rounded-lg bg-white">
                  <summary className="font-semibold cursor-pointer">{item.q}</summary>
                  <p className="mt-2 text-sm">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Flag className="w-6 h-6 text-[#B4A77E]" /> Book a Private Consultation
            </h2>
            <p>
              Let’s map your objectives to a CMVM-regulated solution. Speak with me or a senior colleague - confidential, practical, and tailored to your goals.
            </p>
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
              <FontAwesomeIcon icon={faFileSignature} /> Book a Free Strategy Session
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
            {[
              { icon: <LineChart size={24} />, title: "Institutional Discipline", text: "Professional sourcing, governance, and reporting across the investment cycle." },
              { icon: <ShieldCheck size={24} />, title: "CMVM-Regulated", text: "Vehicles supervised in Portugal with independent oversight and audits." },
              { icon: <CalendarClock size={24} />, title: "Horizon Fit", text: "Multi-year holding period aligns with ARI timelines and value creation." },
              { icon: <Users size={24} />, title: "Family-Friendly", text: "Simplified residency path with spouse and dependents included." },
              { icon: <Flag size={24} />, title: "European Optionality", text: "Live, work, and travel across the EU once residency is in place." },
              { icon: <Globe size={24} />, title: "Cross-Border Support", text: "Operational experience with international families and advisors." },
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
              Get Portuguese Golden Visa
            </Link>
          </div>
        </div>
      </section>

      <BlogArticles />
    </>
  );
};

export default GoldenVisaGuideAndre;