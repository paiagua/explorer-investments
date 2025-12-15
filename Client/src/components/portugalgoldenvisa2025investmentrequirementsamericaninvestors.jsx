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
  LineChart as LineChartIcon,
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

// Recharts (for real-data visuals)
import {
  ResponsiveContainer,
  BarChart as RBarChart,
  Bar as RBar,
  XAxis as RXAxis,
  YAxis as RYAxis,
  Tooltip as RTooltip,
  Legend as RLegend,
  LineChart as RLineChart,
  Line as RLine,
  CartesianGrid as RCartesianGrid,
} from "recharts";

const dataIllustrative = [
  { year: 2021, funds: 22, realEstate: 78 },
  { year: 2022, funds: 28, realEstate: 72 },
  { year: 2023, funds: 35, realEstate: 65 },
  { year: 2024, funds: 48, realEstate: 52 },
  { year: 2025, funds: 60, realEstate: 40 },
];

const Sparkline = ({ points = [] }) => {
  // Simple accessible inline SVG sparkline (illustrative only)
  const width = 280;
  const height = 80;
  const padding = 10;
  const xs = points.map((_, i) => padding + (i * (width - padding * 2)) / (points.length - 1));
  const min = Math.min(...points);
  const max = Math.max(...points);
  const ys = points.map((p) => height - padding - ((p - min) / (max - min || 1)) * (height - padding * 2));
  const d = xs
    .map((x, i) => `${i === 0 ? "M" : "L"}${x.toFixed(2)},${ys[i].toFixed(2)}`)
    .join(" ");
  return (
    <svg
      role="img"
      aria-label="Illustrative trend of Golden Visa fund route share 2021-2025"
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-24"
    >
      <title>Illustrative fund route trend</title>
      <desc>
        This chart is illustrative only. It shows an upward trend in fund-route participation from 2021 to 2025.
      </desc>
      <rect x="0" y="0" width={width} height={height} rx="8" className="fill-[#FFFEFA] stroke-[#E9E6D8]" />
      <path d={d} className="stroke-[#002741] fill-none" strokeWidth="2" />
      {xs.map((x, i) => (
        <circle key={i} cx={x} cy={ys[i]} r="3" className="fill-[#B4A77E]" />
      ))}
    </svg>
  );
};

const Bars = ({ data }) => {
  const width = 360;
  const height = 180;
  const padding = 28;
  const barW = (width - padding * 2) / data.length - 10;
  const maxVal = Math.max(
    ...data.map((d) => Math.max(d.funds, d.realEstate))
  );
  return (
    <svg
      role="img"
      aria-label="Illustrative comparison of fund vs real estate routes 2021-2025"
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-44"
    >
      <title>Illustrative comparison</title>
      <desc>
        Comparison bars (illustrative) showing a shift from real estate to funds for Golden Visa subscriptions.
      </desc>
      <rect x="0" y="0" width={width} height={height} rx="10" className="fill-white stroke-[#E9E6D8]" />
      {data.map((d, i) => {
        const x = padding + i * (barW + 10);
        const fH = ((d.funds / maxVal) * (height - padding * 2));
        const rH = ((d.realEstate / maxVal) * (height - padding * 2));
        return (
          <g key={d.year}>
            <rect
              x={x}
              y={height - padding - rH}
              width={barW}
              height={rH}
              className="fill-[#E4E0CF]"
            />
            <rect
              x={x}
              y={height - padding - fH}
              width={barW}
              height={fH}
              className="fill-[#B4A77E] opacity-90"
            />
            <text x={x + barW / 2} y={height - 6} textAnchor="middle" className="fill-[#15364A] text-[10px]">
              {d.year}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the minimum investment for Portugal's Golden Visa in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As of 2025, a common route is a subscription of at least €500,000 into a CMVM‑regulated fund that is eligible for the Golden Visa. Always confirm current rules before investing."
      }
    },
    {
      "@type": "Question",
      "name": "Can U.S. citizens apply and include family members?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. U.S. citizens can apply and typically include a spouse, dependent children, and in some cases dependent parents, subject to documentation."
      }
    },
    {
      "@type": "Question",
      "name": "Is real estate still eligible for the Golden Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recent reforms curtailed most real estate options in key areas. Many new applicants now choose CMVM‑regulated investment funds."
      }
    },
    {
      "@type": "Question",
      "name": "How many days do I need to stay in Portugal each year?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A low physical‑presence requirement applies (often averaging around 7 days per year). Check your attorney’s guidance for your case."
      }
    }
  ]
};

const jsonLdBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://goldenvisashub.com/" },
    { "@type": "ListItem", "position": 2, "name": "Golden Visa", "item": "https://goldenvisashub.com/" },
    { "@type": "ListItem", "position": 3, "name": "Portugal Golden Visa 2025" }
  ]
};

// --- Real indicators (approx./latest available) ---
// Life expectancy (years). Source: World Bank (via FRED), 2019-2023.
const lifeExpectancyTrend = [
  { year: 2019, Portugal: 81.68, UnitedStates: 78.79 },
  { year: 2020, Portugal: 81.33, UnitedStates: 76.98 },
  { year: 2021, Portugal: 81.38, UnitedStates: 76.33 },
  { year: 2022, Portugal: 81.63, UnitedStates: 77.43 },
  { year: 2023, Portugal: 82.28, UnitedStates: 78.39 },
];

// Homicide rate per 100k (indicative). Sources: UNODC/Macrotrends (PT ~0.8, 2021); US FBI/CDC ~6.8 (2021).
const homicideCompare = [
  { country: "Portugal", rate: 0.8 },
  { country: "United States", rate: 6.8 },
];

// OECD estimated physician density (physicians per 1,000 people). PT ~5.5; US ~2.7 (circa 2022-2023)
const doctorsPerThousand = [
  { country: "Portugal", value: 5.5 },
  { country: "United States", value: 2.7 },
];

// Sunshine hours (Lisbon) ~2,800+/year; Passenger air connectivity proxy (non‑stop long‑haul routes increasing).
const climateCard = { city: "Lisbon", sunshineHours: 2815 };

const GoldenVisaGuide = () => {
  const router = useRouter();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />

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
       Portugal Golden Visa 2025: Investment Requirements, Fund Route & Benefits for American Investors
            </h1>
            <p className="text-base sm:text-lg text-[#15364A]">
              Real estate is no longer the star of Portugal’s Golden Visa. In 2025,{' '}
              <strong>CMVM‑regulated investment funds</strong> lead the way. This guide is written for{' '}
              <strong>American investors</strong> comparing EU residency options. It separates myth from fact, explains how the fund route works, what changed, and the practical steps to secure residency -{' '}
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
                  { id: "stats", label: "Key Numbers & Market Trends (2021-2025)" },
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
              Portugal’s Golden Visa (residency by investment) has evolved. Following reforms that curtailed most real‑estate eligibility in major regions, the <em>fund investment route</em> became the clearest, most compliant path. Below you’ll learn the mechanics, the due‑diligence items to review, and how institutional managers (e.g., Explorer Investments) fit into a diversified, professionally managed strategy.
            </p>
          </motion.div>

          {/* WHAT CHANGED */}
          <section id="what-is" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BadgeCheck className="w-6 h-6 text-[#B4A77E]" />
              Golden Visa in 2025: What Changed?
            </h2>
            <p>
              The Golden Visa - formally the <strong>Residence Permit for Investment Activity (ARI)</strong> - has operated since 2012. Recent reforms removed most real‑estate paths for new applications in key areas, shifting focus to <strong>regulated fund subscriptions</strong>, capital transfer, research, and cultural support.
            </p>

            <h3 className="font-semibold">Core eligibility (high level)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Subscribe at least <strong>€500,000</strong> to a CMVM‑regulated fund (commonly used route).</li>
              <li>Maintain the investment for <strong>5 years</strong>.</li>
              <li>Typical low stay requirement around <strong>7 days/year</strong>.</li>
              <li>Family inclusion: spouse, children, dependent parents.</li>
              <li>Pathway to permanent residency and, later, citizenship (subject to language & legal checks).</li>
            </ul>
          </section>

          {/* FUND BASICS */}
          <section id="fund-basics" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#B4A77E]" />
              How the Fund Route Works (Step by Step)
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Shortlist managers</strong> with CMVM‑regulated vehicles and a clear Golden Visa track (e.g., diversified private equity / hospitality).</li>
              <li><strong>Due diligence:</strong> strategy, fees (management / carry), lock‑up, liquidity windows, governance, auditor, custodian.</li>
              <li><strong>Subscription</strong> of ≥ €500k; complete KYC/AML and receive subscription confirmation for your ARI file.</li>
              <li><strong>Submit ARI application</strong> (investor + eligible family) and track milestones until biometrics / residence issuance.</li>
              <li><strong>Maintain</strong> the investment and presence requirement; review exit options close to year 5.</li>
            </ol>
          </section>

          {/* STATS */}
          <section id="stats" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-[#B4A77E]" />
              Key Numbers & Market Trends (2021-2025)
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-[#E9E6D8] bg-[#FFFEFA]">
                <p className="text-3xl font-extrabold">Rising Share</p>
                <p className="text-sm">Fund‑route participation has climbed steadily post‑reform.</p>
                <div className="mt-3">
                  <Sparkline points={dataIllustrative.map((d) => d.funds)} />
                </div>
              </div>
              <div className="p-4 rounded-lg border border-[#E9E6D8] bg-[#FFFEFA]">
                <p className="text-3xl font-extrabold">Shift from Property</p>
                <p className="text-sm">Illustrative comparison: funds gaining vs. real estate declining.</p>
                <div className="mt-3">
                  <Bars data={dataIllustrative} />
                </div>
              </div>
            </div>

            <p className="text-xs text-[#6b7280]">The two charts above are illustrative for education only.</p>

            {/* Portugal quality‑of‑life with real indicators */}
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="p-5 rounded-xl border bg-white">
                <h3 className="font-semibold mb-2">Life Expectancy: Portugal vs United States</h3>
                <div className="w-full h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <RLineChart data={lifeExpectancyTrend} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <RCartesianGrid strokeDasharray="3 3" />
                      <RXAxis dataKey="year" />
                      <RYAxis domain={[75, 84]} />
                      <RTooltip />
                      <RLegend />
                      <RLine type="monotone" dataKey="Portugal" stroke="#0f172a" dot={true} />
                      <RLine type="monotone" dataKey="UnitedStates" stroke="#b4a77e" dot={true} />
                    </RLineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-[#6b7280] mt-2">Source: World Bank (via FRED), 2019-2023.</p>
              </div>
              <div className="p-5 rounded-xl border bg-white">
                <h3 className="font-semibold mb-2">Safety Snapshot: Homicide Rate (per 100k, 2021)</h3>
                <div className="w-full h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <RBarChart data={homicideCompare} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <RCartesianGrid strokeDasharray="3 3" />
                      <RXAxis dataKey="country" />
                      <RYAxis />
                      <RTooltip />
                      <RBar dataKey="rate" fill="#b4a77e" />
                    </RBarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-[#6b7280] mt-2">Sources: UNODC/Macrotrends (Portugal ~0.8); FBI/CDC (U.S. ~6.8).</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 rounded-lg border bg-[#FFFEFA]">
                <p className="text-2xl font-extrabold">~2,815h</p>
                <p className="text-sm">Lisbon sunshine hours per year.</p>
                <p className="text-xs text-[#6b7280]">Climate normals (Lisbon).</p>
              </div>
              <div className="p-4 rounded-lg border bg-[#FFFEFA]">
                <p className="text-2xl font-extrabold">Top‑10</p>
                <p className="text-sm">Global Peace Index ranking (Portugal).</p>
                <p className="text-xs text-[#6b7280]">IEP / Vision of Humanity, 2024.</p>
              </div>
              <div className="p-4 rounded-lg border bg-[#FFFEFA]">
                <p className="text-2xl font-extrabold">~190+</p>
                <p className="text-sm">Visa‑free/visa‑on‑arrival destinations with PT passport.</p>
                <p className="text-xs text-[#6b7280]">Henley Passport Index (approx.).</p>
              </div>
            </div>

            <h3 className="font-semibold mt-3">Healthcare & Education Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border bg-white">
                <h4 className="font-semibold">Doctors per 1,000 people (OECD est.)</h4>
                <div className="w-full h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <RBarChart data={doctorsPerThousand} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <RCartesianGrid strokeDasharray="3 3" />
                      <RXAxis dataKey="country" />
                      <RYAxis />
                      <RTooltip />
                      <RBar dataKey="value" fill="#0f172a" />
                    </RBarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-[#6b7280] mt-2">OECD Health Statistics (approx., 2022-2023).</p>
              </div>
              <div className="p-5 rounded-xl border bg-white">
                <h4 className="font-semibold">International Schooling</h4>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>English‑medium schools in Lisbon, Cascais, Porto, Algarve.</li>
                  <li>IB and British curricula widely available.</li>
                  <li>Strong higher‑education presence (Univ. Lisbon, Porto, Nova SBE).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* WHY PORTUGAL */}
          <section id="why-portugal" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Globe className="w-6 h-6 text-[#B4A77E]" />
              Why Portugal: Climate, Cuisine, Healthcare, Safety & Mobility
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Climate:</strong> Mediterranean weather with mild winters and abundant sunshine (~2,800h/yr in Lisbon).</li>
              <li><strong>Cuisine:</strong> Atlantic seafood, local produce, and award‑winning wines (Douro, Alentejo); thriving restaurant scene.</li>
              <li><strong>Healthcare:</strong> Universal SNS plus private options; high doctor density and strong primary‑care network.</li>
              <li><strong>Safety:</strong> Consistently ranks among the world’s safest nations; very low violent‑crime rates.</li>
              <li><strong>Education:</strong> Wide choice of international schools; reputable universities; English widely spoken in major cities.</li>
              <li><strong>Mobility:</strong> Schengen travel with residency; eventual citizenship yields a globally powerful passport (~190+ destinations).</li>
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
                  <li>The fund route is <strong>currently a primary path</strong> used by new applicants.</li>
                  <li>Diversification and independent governance can reduce single‑asset risk.</li>
                  <li>Liquidity policies and exit windows are set in the fund documents.</li>
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
                  <li>Illiquidity and lock‑up periods.</li>
                  <li>Performance depends on manager, cycle, sector.</li>
                  <li>Regulatory change and processing backlogs.</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Fees to Expect</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Management fee and potential performance fee (carry).</li>
                  <li>Custody, audit, and subscription/administration fees.</li>
                  <li>Legal/immigration and translation costs.</li>
                </ul>
              </div>
            </div>

            <h3 className="font-semibold mt-3">Compliance Checklist (quick)</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>CMVM‑regulated fund with clear ARI eligibility.</li>
              <li>Independent auditor and custodian named.</li>
              <li>Transparent docs: PPM, KID/KIID, fees, liquidity policy.</li>
              <li>Proof of subscription for ARI file; keep records updated.</li>
            </ul>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#B4A77E]" />
              FAQs: Requirements, Portugal Basics & U.S.‑Specific Questions
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Minimum?</strong> €500,000 into a CMVM‑regulated fund (commonly used route).</li>
              <li><strong>Stay requirement?</strong> 7 days per year on average.</li>
              <li><strong>Family?</strong> Spouse, children, dependent parents may be included.</li>
              <li><strong>Citizenship timeline?</strong> After maintaining residency for 5 years, subject to language and legal criteria.</li>
              <li><strong>Healthcare access?</strong> Residents can access the SNS (public) and private care; international insurance accepted widely.</li>
              <li><strong>Safety?</strong> Portugal’s homicide rate is ~0.8 per 100k (2021) vs ~6.8 in the U.S.; Portugal ranks Top‑10 in the Global Peace Index.</li>
              <li><strong>Schools?</strong> Dozens of international schools (IB/British/US curricula) in Lisbon/Cascais/Porto/Algarve.</li>
              <li><strong>Can I still buy property?</strong> Most classic GV real‑estate paths were curtailed; the fund route is now prevalent.</li>
              <li><strong>Taxes for U.S. citizens?</strong> The U.S. taxes worldwide income (citizenship‑based). Coordinate with a cross‑border CPA; understand PT rules (e.g., regime updates replacing NHR).</li>
              <li><strong>Banking & compliance?</strong> Expect robust KYC/AML; bring apostilled documents, proof of funds, and open a PT bank account.</li>
              <li><strong>Timeline?</strong> Application processing times vary; plan for several months to biometrics and issuance depending on pipeline.</li>
              <li><strong>Exit from funds?</strong> Review fund term (often 7-10 yrs), lockups, and exit windows in PPM/KID/KIID.</li>
              <li><strong>Travel privileges?</strong> With residency: Schengen mobility (90/180 rule in other states). With citizenship: ~190+ destinations visa‑free/VOA.</li>
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

            <p className="text-xs text-[#6b7280] mt-3">This article is for general information and does not constitute legal or investment advice. Verify current regulations before making decisions.</p>
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
              <LineChartIcon size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Real Returns</h3>
                <p>Institutional‑grade portfolio construction and value creation.</p>
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
