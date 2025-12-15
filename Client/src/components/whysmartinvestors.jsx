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
  faArrowRight,
  faArrowDown,
  faCalculator,
  faShieldHalved,
  faUserShield,
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
  BadgeDollarSign,
  Building2,
  Scale,
  FileSearch,
  Clock,
  BookOpen,
  CheckCircle2,
  BarChart3,
} from "lucide-react";

/**
 * =====================
 *  SEO SLUGS (suggested)
 * =====================
 * Article slug: "/why-smart-investors-choose-cmvm-regulated-funds-portugal-golden-visa-2025"
 * Section slugs (ids already bound to headings below):
 *  - #what-is
 *  - #fund-route
 *  - #us-investors
 *  - #explorer-edge
 *  - #performance-methodology
 *  - #process
 *  - #tax-legal
 *  - #risk
 *  - #faq
 *  - #cta
 * Supporting landing pages:
 *  - "/golden-visa/portugal-investment-fund"
 *  - "/golden-visa/for-us-investors"
 *  - "/golden-visa/compare"
 *  - "/about/explorer-investments-golden-visa"
 */

const facts = {
  aum: "€1.8B",
  exits: 38,
  assets: 98,
  minInvestment: "€500,000",
  targetMoic: "3x",
  grossIrr: "~22% (Explorer III)",
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
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Why Smart Investors Are Choosing CMVM‑Regulated Funds for Portugal’s Golden Visa (2025 Update)
            </h1>
            <p className="text-base sm:text-lg text-[#15364A]">
              <strong>By André Bandeira, Investor Relations - Explorer Investments</strong>
            </p>
            <p className="text-base sm:text-lg text-[#15364A]">
              Real‑estate routes have been restricted. Today, the <strong>CMVM‑regulated fund route</strong> is the most disciplined pathway for the Portugal Golden Visa. Below, I explain <em>why</em> institutional investors - and increasingly families - are choosing this route with Explorer.
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
                  { id: "fund-route", label: "Why Funds Now Lead (2025)" },
                  { id: "us-investors", label: "US Investors & Compliance" },
                  { id: "explorer-edge", label: "The Explorer Edge (AUM, Returns, Discipline)" },
                  { id: "performance-methodology", label: "Value Creation & Methodology" },
                  { id: "process", label: "How the Process Works (Step‑by‑Step)" },
                  { id: "tax-legal", label: "Tax, Legal & Reporting" },
                  { id: "risk", label: "Opportunities & Risks" },
                  { id: "faq", label: "FAQs (Investor Questions I Hear Daily)" },
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
            <StatCard label="Assets Under Management" value={facts.aum} note="As of 17 Oct 2025" />
            <StatCard label="Assets" value={`${facts.assets}+`} />
            <StatCard label="Exits" value={`${facts.exits}`} />
            <StatCard label="Target MOIC" value={facts.targetMoic} note={facts.grossIrr} />
          </div>

          {/* WHAT IS */}
          <section id="what-is" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BadgeCheck className="w-6 h-6 text-[#B4A77E]" />
              What Is the Portugal Golden Visa? (ARI)
            </h2>
            <p>
              Portugal’s Golden Visa - formally the <strong>Residence Permit for Investment Activity (ARI)</strong> - grants residency to non‑EU nationals who invest under clearly defined criteria. After five years, successful applicants may seek <em>permanent residency</em> and subsequently <em>citizenship</em>, subject to language and legal requirements.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Core conditions</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Maintain the qualifying investment for <strong>5 years</strong></li>
                  <li>Physical presence typically around <strong>7 days/year</strong></li>
                  <li>Include family (spouse, dependent children/parents)</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Eligible routes (current focus)</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>
                    <strong>Investment in qualified funds (VC/PE)</strong> - minimum {facts.minInvestment}
                  </li>
                  <li>Job creation (≥ 10 full‑time positions)</li>
                  <li>Cultural/Scientific contributions (specific thresholds)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* WHY FUNDS */}
          <section id="fund-route" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-[#B4A77E]" /> Why Funds Now Lead (2025)
            </h2>
            <Quote>
              As eligibility tightened for real‑estate routes, sophisticated investors migrated to <strong>CMVM‑regulated funds</strong>. You get disciplined governance, diversification, and a clear audit trail - exactly what regulators and families prefer.
            </Quote>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border bg-[#FFFEFA]">
                <h3 className="font-semibold mb-2">Why investors prefer funds</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Regulated vehicles with professional oversight</li>
                  <li>Diversified exposure vs. single‑asset risk</li>
                  <li>Operational value creation rather than passive yield</li>
                  <li>Higher transparency, reporting, governance</li>
                </ul>
              </div>
           
            </div>
          </section>

          {/* US INVESTORS */}
          <section id="us-investors" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#B4A77E]" /> US Investors & Compliance
            </h2>
            <p>
              As an American investor (or US tax resident), verify that the fund accepts <strong>US Persons</strong> and provides appropriate <strong>FATCA</strong> and <strong>PFIC</strong> reporting. Our Investor Relations team supplies these details and coordinates with your counsel.
            </p>
            <Quote>
              My role is simple: make your cross‑border investment as <strong>clean, compliant, and predictable</strong> as possible - so you focus on strategy, not paperwork.
            </Quote>
            <div className="flex flex-wrap gap-2">
              <Pill>FATCA‑aware onboarding</Pill>
              <Pill>PFIC statements (where applicable)</Pill>
              <Pill>US‑friendly custodians</Pill>
              <Pill>Institutional KYC/AML</Pill>
            </div>
          </section>

          {/* EXPLORER EDGE */}
          <section id="explorer-edge" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <LineChart className="w-6 h-6 text-[#B4A77E]" /> The Explorer Edge (AUM, Returns, Discipline)
            </h2>
            <p>
              Explorer Investments is Portugal’s #1 private‑equity platform by reputation and depth. Putting Golden Visa capital alongside institutions changes the conversation: same governance, same discipline, same ambition.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <StatCard label="AUM" value={facts.aum} />
              <StatCard label="Target MOIC" value={facts.targetMoic} note={facts.grossIrr} />
              <StatCard label="Minimum Investment" value={facts.minInvestment} />
            </div>
            <Quote>
              Access matters. We open the same engine room that powers institutional mandates - and we invest with <strong>skin in the game</strong>.
            </Quote>
          </section>

          {/* PERFORMANCE & METHOD */}
          <section id="performance-methodology" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-[#B4A77E]" /> Value Creation & Methodology
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">How returns are built</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Operational growth (efficiency, export, pricing power)</li>
                  <li>Cash generation (low leverage, resilient companies)</li>
                  <li>Multiple expansion (proprietary sourcing & disciplined exits)</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border bg-[#FFFEFA]">
                <h3 className="font-semibold mb-2">Illustrative contribution</h3>
                <div className="space-y-3">
                  <ProgressBar label="EBITDA growth" value={35} />
                  <ProgressBar label="Cash generation" value={25} />
                  <ProgressBar label="Multiple expansion" value={40} />
                </div>
                <p className="text-xs mt-2 opacity-70">
                  For illustration only; not a guarantee of future results.
                </p>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section id="process" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <CalendarClock className="w-6 h-6 text-[#B4A77E]" /> How the Process Works (Step‑by‑Step)
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  title: "Free 1‑Hour Consultation",
                  desc: "Book a session with our specialists - zero cost and no obligation.",
                },
                {
                  title: "Meet Your Expert",
                  desc: "Confirm scope, documents, and timelines; align expectations.",
                },
                {
                  title: "Live Fund Presentation",
                  desc: "Understand the strategy, track record, and compliance details.",
                },
                {
                  title: "Tailored Proposal",
                  desc: "Receive a customized roadmap around your family and tax profile.",
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
              <li>
                <strong>CMVM framework:</strong> eligible funds must comply with Portuguese securities regulation and ARI eligibility rules.
              </li>
              <li>
                <strong>NHR 2.0:</strong> potential regime offering beneficial treatment for qualifying income. Seek tax advice.
              </li>
              <li>
                <strong>Double‑taxation treaties:</strong> coordinate with counsel to optimize your global tax position.
              </li>
              <li>
                <strong>US reporting:</strong> FATCA & PFIC documents provided where applicable.
              </li>
            </ul>
            <p className="text-xs opacity-70">
              This article is general information, not legal or tax advice. Always review the prospectus and seek independent counsel.
            </p>
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
                  <li>Diversification and institutional oversight</li>
                  <li>Operational value creation vs passive exposure</li>
                  <li>Clear compliance trail for ARI eligibility</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Risks</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Illiquidity/lock‑ups; secondary market may be limited</li>
                  <li>Performance varies by manager, cycle, and execution</li>
                  <li>Regulatory timelines and administrative backlogs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <FileSearch className="w-6 h-6 text-[#B4A77E]" /> FAQs (Investor Questions I Hear Daily)
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What’s the minimum investment?",
                  a: `${facts.minInvestment} into a qualifying CMVM‑regulated fund.`,
                },
                {
                  q: "How often do I need to be in Portugal?",
                  a: "Typically 7 days/year to maintain residency. Always verify current rules.",
                },
                {
                  q: "Can my family be included?",
                  a: "Yes - spouse, dependent children (and, in some cases, dependent parents).",
                },
                {
                  q: "When can I apply for citizenship?",
                  a: "Often after 5 years of residency (with language and other legal requirements).",
                },
                {
                  q: "What makes Explorer different?",
                  a: "Institutional platform, disciplined governance, and access alongside major investors - with skin in the game.",
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
              Speak directly with me or a senior colleague. We’ll map your residency goals to a compliant, institution‑grade investment strategy.
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
