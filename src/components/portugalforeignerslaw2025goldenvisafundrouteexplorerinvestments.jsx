import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
	  import BlogArticles from "./BlogArticles";
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
 * Article slug: "/portugal-foreigners-law-2025-golden-visa-fund-route-explorer-investments"
 * Section slugs (ids already bound to headings below):
 *  - #overview
 *  - #key-changes
 *  - #family-reunification
 *  - #housing-finance
 *  - #work-seeking
 *  - #aima-deadlines
 *  - #mobility
 *  - #citizenship
 *  - #impact-table
 *  - #why-funds
 *  - #golden-visa-advantage
 *  - #process
 *  - #tax-legal
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

 

const LawRow = ({ item, detail }) => (
  <tr className="border-b">
    <td className="p-3 font-medium align-top">{item}</td>
    <td className="p-3 align-top">{detail}</td>
  </tr>
);

const ImpactRow = ({ group, impact }) => (
  <tr className="border-b">
    <td className="p-3 font-medium align-top">{group}</td>
    <td className="p-3 align-top">{impact}</td>
  </tr>
);

const GoldenVisaLawUpdate = () => {
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
              Portugal’s New Foreigners Law (Oct 17, 2025): What It Means - and Why Smart Investors Choose CMVM‑Regulated Funds
            </h1>
            <p className="text-base sm:text-lg text-[#15364A]">
              <strong>By André Bandeira, Investor Relations - Explorer Investments</strong>
            </p>
            <p className="text-base sm:text-lg text-[#15364A]">
              President Marcelo Rebelo de Sousa has signed the revised <strong>Foreigners Law</strong> into effect after passage by 70% of parliament. Below we unpack the practical changes and explain why today the <strong>Golden Visa via CMVM‑regulated funds</strong> is the most flexible, compliance‑first route for global families.
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
                  { id: "overview", label: "Quick Overview" },
                  { id: "key-changes", label: "Key Legal Changes (Table)" },
                  { id: "family-reunification", label: "Family Reunification: Two‑Year Rule & Exceptions" },
                  { id: "housing-finance", label: "Housing & Financial Proofs" },
                  { id: "work-seeking", label: "Work‑Seeking Visa: Highly Qualified Only" },
                  { id: "aima-deadlines", label: "AIMA Deadlines & Legal Recourse" },
                  { id: "mobility", label: "Mobility Agreements" },
                  { id: "citizenship", label: "Citizenship Timeline (Status Quo)" },
                  { id: "impact-table", label: "Who’s Most Affected (Table)" },
                  { id: "why-funds", label: "Why Funds Lead the Golden Visa" },
                  { id: "golden-visa-advantage", label: "Golden Visa Advantage (Explorer)" },
                  { id: "process", label: "Process (Step‑by‑Step)" },
                  { id: "tax-legal", label: "Tax, Legal & Reporting" },
                  { id: "faq", label: "FAQs" },
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

          {/* OVERVIEW */}
          <section id="overview" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BadgeCheck className="w-6 h-6 text-[#B4A77E]" /> Quick Overview
            </h2>
            <p>
              The law introduces a <strong>two‑year residence requirement</strong> before most applicants can bring family members (with defined exceptions), heightens scrutiny on <strong>housing and income proofs</strong>, limits the <strong>work‑seeking visa</strong> to highly qualified professionals, and sets a <strong>nine‑month</strong> target for <strong>AIMA</strong> to process applications, with clearer avenues to appeal administrative delays.
            </p>
          </section>

          {/* KEY CHANGES TABLE */}
          <section id="key-changes" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-[#B4A77E]" /> Key Legal Changes (At a Glance)
            </h2>
            <div className="overflow-x-auto rounded-xl border bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-[#FFFCF3]">
                  <tr className="text-left">
                    <th className="p-3 w-1/3">Item</th>
                    <th className="p-3">What’s New (Oct 17, 2025)</th>
                  </tr>
                </thead>
                <tbody>
                  <LawRow item="Family reunification" detail="Two‑year legal residence before applying for spouse/partner/relatives - with exceptions for minor/incapacitated children, Golden Visa, highly qualified, or Blue Card holders; partners cohabiting ≥18 months may apply after 15 months of legal residence." />
                  <LawRow item="Housing & income" detail="Proof of suitable housing aligned to market supply; on renewals, social benefits cannot be counted as income." />
                  <LawRow item="Work‑seeking visa" detail="Restricted to highly qualified professionals; list of eligible professions pending." />
                  <LawRow item="AIMA processing" detail="Nine months to decide (extendable only exceptionally); clearer legal grounds to appeal if delayed." />
                  <LawRow item="Mobility agreements" detail="Government empowered to sign sector‑focused mobility pacts with partner countries." />
                  <LawRow item="Citizenship law" detail="No change: 5‑year residency track remains in place pending further legislation." />
                </tbody>
              </table>
            </div>
          </section>

          {/* FAMILY REUNIFICATION */}
          <section id="family-reunification" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Users className="w-6 h-6 text-[#B4A77E]" /> Family Reunification: Two‑Year Rule & Exceptions
            </h2>
            <p>
              Most residents must now wait <strong>two years</strong> before applying for family reunification. Immediate exceptions include <strong>minor/incapacitated children</strong> and those holding a <strong>Golden Visa</strong>, <strong>high qualifications</strong>, or a <strong>Blue Card</strong>. Couples who lived together for <strong>≥18 months</strong> before arrival can apply after <strong>15 months</strong> of legal residence.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border bg-[#FFFEFA]">
                <h3 className="font-semibold mb-2">What it means for you</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>D7 & Digital Nomad:</strong> if moving at different times, plan for a wait up to two years.</li>
                  <li><strong>Families with children:</strong> minors can still reunify immediately.</li>
                  <li><strong>Golden Visa & highly qualified:</strong> exemptions apply - reunification remains immediate.</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Strategic tip</h3>
                <p className="text-sm">If synchronizing move‑in dates is hard, the <strong>Golden Visa fund route</strong> can preserve immediate reunification while reducing annual presence to 7 days.</p>
              </div>
            </div>
          </section>

          {/* HOUSING & FINANCE */}
          <section id="housing-finance" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Building2 className="w-6 h-6 text-[#B4A77E]" /> Housing & Financial Requirements
            </h2>
            <p>
              Applicants must evidence <strong>adequate housing</strong> (e.g., 12‑month registered lease or deeds) and <strong>stable income</strong>. On renewals, <strong>social benefits</strong> no longer count as income for reunified family members.
            </p>
          </section>

          {/* WORK‑SEEKING */}
          <section id="work-seeking" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BadgeDollarSign className="w-6 h-6 text-[#B4A77E]" /> Work‑Seeking Visa: Highly Qualified Only
            </h2>
            <p>
              The exploratory visa that once supported broad job search now targets <strong>highly qualified professionals</strong>. Lower‑skilled routes will likely need alternative visas (D7, Digital Nomad, student, or employer‑sponsored).
            </p>
          </section>

          {/* AIMA */}
          <section id="aima-deadlines" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Clock className="w-6 h-6 text-[#B4A77E]" /> AIMA Deadlines & Legal Recourse
            </h2>
            <p>
              <strong>AIMA</strong> is now bound by a <strong>nine‑month</strong> decision window, extendable only in exceptional cases. If applications stall, the framework for <strong>judicial appeal</strong> is clearer.
            </p>
            <Quote>
              Timelines should improve, but backlogs won’t vanish overnight. Build buffer time into your plan.
            </Quote>
          </section>

          {/* MOBILITY */}
          <section id="mobility" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Globe className="w-6 h-6 text-[#B4A77E]" /> Mobility Agreements
            </h2>
            <p>
              The government can enact <strong>sector‑driven mobility pacts</strong> with partner countries, potentially smoothing work and residence pathways for targeted skills and geographies.
            </p>
          </section>

          {/* CITIZENSHIP */}
          <section id="citizenship" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Flag className="w-6 h-6 text-[#B4A77E]" /> Citizenship Timeline (No Change - Yet)
            </h2>
            <p>
              Despite debate, the <strong>five‑year</strong> naturalization track remains intact as of <strong>October 17, 2025</strong>, subject to language and background requirements.
            </p>
          </section>

          {/* IMPACT TABLE */}
          <section id="impact-table" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-[#B4A77E]" /> Who Will Be Most Affected
            </h2>
            <div className="overflow-x-auto rounded-xl border bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-[#FFFCF3]">
                  <tr className="text-left">
                    <th className="p-3 w-1/3">Group</th>
                    <th className="p-3">Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <ImpactRow group="D7 Visa holders" impact="Two‑year reunification wait if spouse/partner doesn’t move at the same time." />
                  <ImpactRow group="Families with children" impact="Minor children can reunify immediately." />
                  <ImpactRow group="Golden Visa & Blue Card" impact="Exempt from the two‑year wait; immediate family reunification remains." />
                  <ImpactRow group="Digital Nomads" impact="Potential delay if not moving together as a family." />
                  <ImpactRow group="Lower‑skilled job seekers" impact="Work‑seeking visa route likely closed; consider alternatives." />
                  <ImpactRow group="Highly qualified professionals" impact="Work‑seeking visa remains viable (subject to eligible list)." />
                  <ImpactRow group="CPLP nationals" impact="Residence conditions evolving; monitor upcoming guidance." />
                </tbody>
              </table>
            </div>
          </section>

          {/* WHY FUNDS LEAD */}
          <section id="why-funds" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-[#B4A77E]" /> Why CMVM‑Regulated Funds Lead the Golden Visa (2025)
            </h2>
            <Quote>
              As real‑estate options narrowed, sophisticated investors pivoted to <strong>CMVM‑regulated funds</strong> for governance, diversification, and clean eligibility - the standard institutions demand.
            </Quote>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border bg-[#FFFEFA]">
                <h3 className="font-semibold mb-2">Investor advantages</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Regulated structures with professional oversight</li>
                  <li>Diversification vs. single‑asset risk</li>
                  <li>Transparent reporting & audit trail for ARI</li>
                  <li>Operational value creation, not just passive yield</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Explorer at a glance</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <StatCard label="AUM" value={facts.aum} />
                  <StatCard label="Target MOIC" value={facts.targetMoic} note={facts.grossIrr} />
                  <StatCard label="Minimum Investment" value={facts.minInvestment} />
                </div>
              </div>
            </div>
          </section>

          {/* GOLDEN VISA ADVANTAGE */}
          <section id="golden-visa-advantage" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#B4A77E]" /> The Golden Visa Advantage with Explorer
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">US Investors & Compliance</h3>
                <p className="text-sm">
                  Funds may accept <strong>US Persons</strong> with <strong>FATCA</strong>/<strong>PFIC</strong> reporting and US‑friendly custodians. We coordinate with your counsel to streamline onboarding.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Pill>FATCA‑aware onboarding</Pill>
                  <Pill>PFIC statements</Pill>
                  <Pill>Institutional KYC/AML</Pill>
                </div>
              </div>
              <div className="p-5 rounded-xl border bg-[#FFFEFA]">
                <h3 className="font-semibold mb-2">Lifestyle & Residency</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>7 days/year average presence</li>
                  <li>Spouse & dependents included</li>
                  <li>5‑year path to permanent residency; citizenship application thereafter</li>
                </ul>
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

          {/* FAQ */}
          <section id="faq" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <FileSearch className="w-6 h-6 text-[#B4A77E]" /> FAQs
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

export default GoldenVisaLawUpdate;
