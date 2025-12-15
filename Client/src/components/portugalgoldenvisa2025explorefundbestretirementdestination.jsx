'use client';

import React from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
	  import BlogArticles from "./BlogArticles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen, faPhone, faTv, faCommentDots, faIdCard,
  faArrowRight, faArrowDown, faEnvelope, faCheck
} from "@fortawesome/free-solid-svg-icons";

import {
  Globe, Info, Users, ShieldCheck, LineChart as LineIcon,
  CalendarClock, Flag, FileText, AlertTriangle, Landmark, Banknote,
  HeartPulse, MapPin
} from "lucide-react";
import { FileCheck, Send, Home as HomeIcon } from "lucide-react";

import {
  ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  AreaChart, Area
} from "recharts";

// =========================
// SEO CONFIG (plain JS objects)
// =========================
const pageTitle = "Portugal Tops 2025: Golden Visa (Fund Route) & D7 - The Long-Form, Data-Backed Guide";
const pageDesc =
  "Portugal ranks #1 globally for retirement in 2025. This comprehensive guide explains the Golden Visa fund route, the D7 passive-income visa, costs, timelines, documents, lifestyle, taxes, risks, and data-driven charts.";
const pageURL =
  "https://goldenvisashub.com/portugal-golden-visa-2025-explore-fund-best-retirement-destination";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Portugal’s Golden Visa active in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The programme remains available through CMVM-regulated fund investments (real estate purchases are not an eligible route)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the typical Golden Visa fund minimum?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Frequently €500,000 for qualifying regulated funds, though specific fund rules and fees vary."
      }
    },
    {
      "@type": "Question",
      "name": "How much time do I need to spend in Portugal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Physical presence requirements are limited (often around seven days per year on average), making the programme flexible for global investors."
      }
    },
    {
      "@type": "Question",
      "name": "Can my family be included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Spouse or partner, dependent children, and in some cases dependent parents can be included within a single application."
      }
    },
    {
      "@type": "Question",
      "name": "When can I apply for citizenship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally after five years of legal residency, subject to language and legal requirements in force at the time."
      }
    },
    {
      "@type": "Question",
      "name": "How does the D7 visa compare to the Golden Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The D7 is a passive-income route aimed at retirees and financially independent applicants, requiring proof of sufficient income and residence in Portugal. The Golden Visa is investment-led via funds with lighter physical presence."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": pageTitle,
  "description": pageDesc,
  "author": { "@type": "Person", "name": "Matilde Rosa Cardoso" },
  "publisher": {
    "@type": "Organization",
    "name": "Golden Visa Explorer Investments",
    "logo": { "@type": "ImageObject", "url": "https://goldenvisashub.com/assets/images/logo.png" }
  },
  "datePublished": "2025-10-12",
  "dateModified": "2025-10-12",
  "mainEntityOfPage": { "@type": "WebPage", "@id": pageURL }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://goldenvisashub.com/" },
    { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://goldenvisashub.com " },
    { "@type": "ListItem", "position": 3, "name": "Portugal 2025: Golden Visa & D7 Guide", "item": pageURL }
  ]
};

// =========================
// CHART DATA (NO TS TYPES)
// =========================
const retirementScores = [
  { country: "Portugal", score: 92.6 },
  { country: "Mauritius", score: 89.24 },
  { country: "Spain", score: 88.52 },
  { country: "Uruguay", score: 88.05 },
  { country: "Austria", score: 87.92 },
  { country: "Italy", score: 87.41 },
  { country: "Slovenia", score: 87.3 },
  { country: "Malta", score: 86.99 },
  { country: "Latvia", score: 86.96 },
  { country: "Chile", score: 86.44 },
  { country: "Costa Rica", score: 86.16 },
  { country: "Greece", score: 86.08 },
  { country: "Paraguay", score: 85.77 },
  { country: "Cyprus", score: 85.73 },
  { country: "Seychelles", score: 85.69 },
  { country: "El Salvador", score: 84.24 },
  { country: "Cape Verde", score: 84.21 },
  { country: "Argentina", score: 83.69 },
  { country: "Panama", score: 83.65 },
  { country: "Albania", score: 82.58 },
  { country: "France", score: 82.47 },
  { country: "Nicaragua", score: 82.09 },
  { country: "Morocco", score: 81.5 },
  { country: "North Macedonia", score: 81.34 },
  { country: "Guatemala", score: 80.59 },
  { country: "Serbia", score: 80.05 },
  { country: "Indonesia", score: 79.93 },
  { country: "Belize", score: 79.88 },
  { country: "Ecuador", score: 79.47 },
  { country: "Sri Lanka", score: 79.24 },
  { country: "Philippines", score: 78.88 },
  { country: "Turkiye", score: 78.84 },
  { country: "Thailand", score: 78.37 },
  { country: "Brazil", score: 78.29 },
  { country: "Laos", score: 78.11 },
  { country: "Namibia", score: 78.0 },
  { country: "Dominican Republic", score: 77.28 },
  { country: "Colombia", score: 76.98 },
  { country: "Cambodia", score: 76.51 },
  { country: "Mexico", score: 76.43 },
  { country: "South Africa", score: 75.92 },
  { country: "Zambia", score: 75.34 },
  { country: "Malaysia", score: 73.52 },
];

const top22 = retirementScores.slice(0, 22).reverse();
const rest21 = retirementScores.slice(22).reverse();

const costTimeline = [
  { step: "Fund Subscription", amount: 500000 },
  { step: "Legal & Setup", amount: 8000 },
  { step: "Government Fees (approx.)", amount: 6000 },
  { step: "Biometrics Trip", amount: 2000 },
  { step: "Renewals (avg / period)", amount: 3000 },
];

const processTimeline = [
  { month: 0, label: "Decision & KYC" },
  { month: 1, label: "Banking & NIF" },
  { month: 2, label: "Fund Subscription" },
  { month: 4, label: "Application Filed" },
  { month: 6, label: "Biometrics (when called)" },
  { month: 9, label: "Residence Card Issued" },
];

const PortugalGoldenVisa2025Page = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={pageURL} />
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={pageURL} />
        <meta property="og:type" content="article" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
      </Head>

      {/* JSON-LD */}
      <Script id="ld-json-article" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="ld-json-faq" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="ld-json-breadcrumbs" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-start gap-3">
              <Globe className="w-10 h-10 text-[#B4A77E] mt-1" />
              <span>Portugal Tops 2025: Golden Visa (Fund Route) & D7 - The Long-Form, Data-Backed Guide</span>
            </h1>
            <p className="text-base leading-relaxed">
              The 2025 Global Retirement Report ranks <strong>Portugal</strong> <strong>#1 worldwide</strong> for retirees. Measured across quality of life,
              safety, healthcare, environmental standards and tax efficiency, Portugal stands out for people seeking a peaceful lifestyle with world-class public
              services and clear residency options. This article explains the two most popular pathways - the <strong>Golden Visa via CMVM-regulated funds</strong>
              and the <strong>D7 passive-income visa</strong> - alongside costs, timelines, documents, taxes, healthcare, regional picks, and risks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RANKING CHARTS */}
      <section className="px-4 sm:px-6 pb-8 max-w-screen-xl mx-auto">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-[#F9F9FC] rounded-xl p-4 border">
            <h3 className="font-semibold mb-3">Global Retirement Index 2025 - Top 22 Countries</h3>
            <div className="h-[540px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={top22} layout="vertical" margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[70, 100]} />
                  <YAxis type="category" dataKey="country" width={110} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" name="Score" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-[#5b6b7a] mt-2">
              Source: Global Retirement Report 2025 (Global Citizen Solutions), summarized by Euronews Business. Chart rendered in code (Recharts).
            </p>
          </div>

          <div className="bg-[#F9F9FC] rounded-xl p-4 border">
            <h3 className="font-semibold mb-3">Global Retirement Index 2025 - Remaining Countries</h3>
            <div className="h-[540px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={rest21} layout="vertical" margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[70, 100]} />
                  <YAxis type="category" dataKey="country" width={140} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" name="Score" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-[#5b6b7a] mt-2">
              Source: Global Retirement Report 2025 (Global Citizen Solutions), summarized by Euronews Business. Chart rendered in code (Recharts).
            </p>
          </div>
        </div>
      </section>

      {/* RESIDENCY ROUTES */}
      <section className="py-12 px-4 bg-[#F9F9FC]">
        <div className="max-w-5xl mx-auto space-y-8 text-[#002741]">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <HomeIcon className="w-7 h-7 text-[#B4A77E]" /> Portugal Residency Routes in 2025
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white border">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><Landmark size={18}/> Golden Visa (Fund Route)</h3>
              <ul className="list-disc ml-5 space-y-1 text-sm">
                <li><strong>Investment-led:</strong> qualifying <strong>CMVM-regulated funds</strong> (no direct real estate route).</li>
                <li>Typical minimum: <strong>€500,000</strong> (verify fund rules, fees and risk profile).</li>
                <li><strong>Light physical presence</strong> (often 7 days/year on average).</li>
                <li><strong>Family inclusion</strong>: spouse/partner, dependent children, sometimes dependent parents.</li>
                <li><strong>Permanent residency & citizenship</strong> after 5 years of legal residence (subject to law & language requirements).</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-white border">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><FileText size={18}/> D7 Passive-Income Visa</h3>
              <ul className="list-disc ml-5 space-y-1 text-sm">
                <li>Designed for retirees and financially independent applicants with <strong>predictable passive income</strong>.</li>
                <li>Requires <strong>residence in Portugal</strong> and evidence of sufficient means.</li>
                <li>Includes family, access to the national health system (SNS) and education.</li>
                <li>Pathway to <strong>permanent residence and citizenship</strong> after 5 years (subject to requirements).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTS & ELIGIBILITY */}
      <section className="px-4 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2"><FileText size={22}/> Eligibility & Documents</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="p-6 rounded-xl border">
            <h3 className="font-semibold mb-2">Typical Eligibility</h3>
            <ul className="space-y-2">
              <li className="flex gap-2"><FontAwesomeIcon icon={faCheck} className="mt-1 text-[#B4A77E]" /> Clean criminal record (applicable jurisdictions).</li>
              <li className="flex gap-2"><FontAwesomeIcon icon={faCheck} className="mt-1 text-[#B4A77E]" /> Proof of funds and legal source of capital.</li>
              <li className="flex gap-2"><FontAwesomeIcon icon={faCheck} className="mt-1 text-[#B4A77E]" /> Valid health insurance for Portugal.</li>
              <li className="flex gap-2"><FontAwesomeIcon icon={faCheck} className="mt-1 text-[#B4A77E]" /> Passport validity consistent with stay.</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border">
            <h3 className="font-semibold mb-2">Core Document Checklist</h3>
            <ul className="space-y-2">
              <li>Passports; birth/marriage certificates; apostilles as required.</li>
              <li>Police clearance(s) from country(ies) of residence.</li>
              <li>Bank statements and income proofs; KYC/Source-of-Funds evidence.</li>
              <li>Fund subscription agreement (Golden Visa) or passive-income proofs (D7).</li>
              <li>Proof of accommodation in Portugal (rental or ownership).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COSTS (BAR CHART) */}
      <section className="px-4 py-12 bg-[#F9F9FC]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2"><Banknote size={22}/> Costs & Fees (Illustrative)</h2>
          <p className="text-sm mb-4 text-[#33465a]">
            Figures below are illustrative; actual costs vary by fund, legal counsel, family composition, and official updates. Always confirm with your advisors.
          </p>
          <div className="h-[340px] bg-white rounded-xl border p-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={costTimeline} layout="vertical" margin={{ top: 10, right: 10, bottom: 10, left: 160 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="step" />
                <Tooltip formatter={(v)=>`€${Number(v).toLocaleString()}`} />
                <Legend />
                <Bar dataKey="amount" name="Estimated €" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* TIMELINE (AREA CHART) */}
      <section className="px-4 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2"><CalendarClock size={22}/> High-Level Timeline (Illustrative)</h2>
        <p className="text-sm mb-4 text-[#33465a]">
          Timeframes depend on document readiness and authorities’ capacity. The visual below shows a typical journey from decision to card issuance.
        </p>
        <div className="h-[280px] rounded-xl border p-3">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={processTimeline} margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tickFormatter={(m)=>`${m}m`} />
              <YAxis />
              <Tooltip labelFormatter={(m)=>`Month ${m}`} />
              <Legend />
              <Area type="monotone" dataKey="month" name="Cumulative months" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <ul className="mt-4 grid md:grid-cols-3 gap-3 text-sm">
          <li className="p-4 border rounded-xl"><strong>Decision & KYC:</strong> strategy, advisor engagement, fund due diligence.</li>
          <li className="p-4 border rounded-xl"><strong>Banking & NIF:</strong> Portuguese tax number + account (often remote with POA).</li>
          <li className="p-4 border rounded-xl"><strong>Subscription & Filing:</strong> subscribe the fund; compile & file the application.</li>
          <li className="p-4 border rounded-xl"><strong>Biometrics:</strong> in-person capture when called.</li>
          <li className="p-4 border rounded-xl"><strong>Residence Card:</strong> initial card; renewals; count to 5 years.</li>
          <li className="p-4 border rounded-xl"><strong>PR/Citizenship:</strong> eligibility after 5 years (law & language apply).</li>
        </ul>
      </section>

      {/* TAXES / HEALTHCARE / REGIONS */}
      <section className="px-4 py-12 bg-[#F9F9FC]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-sm">
          <div className="p-6 bg-white rounded-xl border">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><LineIcon size={18}/> Taxes (High-Level)</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Plan globally: worldwide income vs. Portuguese-source income.</li>
              <li>Check double-tax treaties; coordinate with your home-country CPA.</li>
              <li>Rules can change - confirm current law before committing.</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-xl border">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><HeartPulse size={18}/> Healthcare</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Strong public system (SNS) and robust private networks in Lisbon, Porto, Algarve.</li>
              <li>Private coverage recommended early on; English widely spoken in major facilities.</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-xl border">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><MapPin size={18}/> Where to Live</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Lisbon:</strong> international hubs, schools, healthcare, culture.</li>
              <li><strong>Porto:</strong> lower costs, excellent quality of life, gastronomy.</li>
              <li><strong>Algarve:</strong> sunshine, resorts, expat communities.</li>
              <li><strong>Islands (Madeira/Azores):</strong> nature-first, relaxed rhythm.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* RISKS & MITIGATION */}
      <section className="px-4 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2"><ShieldCheck size={22}/> Risks & Mitigation</h2>
        <ul className="list-disc ml-6 space-y-2 text-sm">
          <li><strong>Regulatory risk:</strong> policies may evolve. <em>Mitigate:</em> work with updated counsel; choose compliant funds with robust governance.</li>
          <li><strong>Market risk:</strong> fund asset volatility. <em>Mitigate:</em> diversify; monitor strategy, audits, and risk controls.</li>
          <li><strong>Documentation delays:</strong> missing/incomplete files. <em>Mitigate:</em> rigorous checklist & pre-submission review.</li>
          <li><strong>FX risk:</strong> home currency vs. EUR. <em>Mitigate:</em> staged conversions/hedging as appropriate.</li>
        </ul>
      </section>

      {/* CTA / TEAM */}
      <section className="px-4 py-12 bg-[#E4E0CF]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002D3D] mb-6">Start Your Investor Journey</h2>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="flex items-start gap-4">
 
              <div className="text-sm leading-snug">
                <p className="font-bold">André Bandeira</p>
                <a href="mailto:ab@explorerinvestments.com?subject=Golden%20Visa%20Fund%20Enquiry" className="flex items-center gap-2 text-[#B4A77E] hover:underline">
                  <FontAwesomeIcon icon={faEnvelope} /> ab@explorerinvestments.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
               <div className="text-sm leading-snug">
                <p className="font-bold">Maria Campos Silva</p>
                <a href="mailto:mcs@explorerinvestments.com?subject=Golden%20Visa%20Fund%20Enquiry" className="flex items-center gap-2 text-[#B4A77E] hover:underline">
                  <FontAwesomeIcon icon={faEnvelope} /> mcs@explorerinvestments.com
                </a>
              </div>
            </div>
          </div>

          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-base px-6 py-3 rounded-full transition"
          >
            <Send size={18} strokeWidth={2} />
            <span>Book a Free 1-Hour Consultation</span>
          </Link>
        </div>
      </section>

      {/* QUICK FAQ */}
      <section className="px-4 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Quick FAQs</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="p-6 border rounded-xl">
            <p className="font-semibold">Is the Golden Visa still available?</p>
            <p>Yes - via <strong>regulated funds</strong>. Direct real estate purchases are not an eligible route.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <p className="font-semibold">What’s the minimum investment?</p>
            <p>Often <strong>€500,000</strong> for fund options; confirm with the fund and your legal advisor.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <p className="font-semibold">Do I need to live full-time in Portugal?</p>
            <p>No. The physical presence requirement is limited (commonly 7 days per year).</p>
          </div>
          <div className="p-6 border rounded-xl">
            <p className="font-semibold">When can I apply for citizenship?</p>
            <p>After <strong>five years of legal residency</strong>, subject to language and legal criteria in force.</p>
          </div>
        </div>
      </section>

      {/* SOURCE */}
      <section className="px-4 pb-16 max-w-5xl mx-auto">
        <div className="text-sm text-[#425466]">
          <p className="mb-1 font-semibold">Source</p>
          <p>
            Euronews Business - “Looking to retire? The world’s best destination is in Europe” (11 Oct 2025).{" "}
            <a
              href="https://www.euronews.com/business/2025/10/11/looking-to-retire-the-worlds-best-destination-is-in-europe?s=08"
              className="text-[#0d6efd] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read article
            </a>. Based on the Global Retirement Report 2025 by Global Citizen Solutions.
          </p>
          <p className="mt-2 text-xs">
            Disclaimer: This article is for information only and does not constitute legal, tax, or investment advice.
            Always verify current rules and costs with licensed professionals before making decisions.
          </p>
        </div>
      </section>
      <BlogArticles />
    </>
  );
};

export default PortugalGoldenVisa2025Page;
