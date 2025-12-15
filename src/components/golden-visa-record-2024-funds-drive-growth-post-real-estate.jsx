"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BlogArticles from "./BlogArticles"; // Assuming this exists
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFileSignature,
  faNewspaper, // Icon for News
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
  Building, // For PE
  CheckCircle2, // For Validation/Confirmation
  BarChart3, // For Stats
  Info, // For Disclaimer
} from "lucide-react";

/**
 * =====================
 * SEO SLUGS (suggested)
 * =====================
 * Article slug: "/golden-visa-record-2024-funds-drive-growth-post-real-estate"
 * Section slugs (ids below):
 * - #intro
 * - #fund-era
 * - #explorer-leading
 * - #future-outlook
 * - #cta
 */

// Facts relevant to the news article
const facts = {
  aum: "€1.8B+",
  years: "20+ Years",
  minInvestmentGV: "500,000",
  recordInvestment2024: "€1.2 Billion+", // From Expresso article
  fundShare2024: ">90%", // From Expresso article
};

const StatCard = ({ label, value, note }) => (
  <div className="p-4 rounded-lg border border-[#E9E6D8] bg-[#FFFEFA] text-center shadow-sm">
    <p className="text-3xl font-extrabold text-[#002741]">{value}</p>
    <p className="text-sm text-[#15364A]">{label}</p>
    {note ? <p className="text-xs text-[#5a6f7b] mt-1">{note}</p> : null}
  </div>
);

const Quote = ({ children, author }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#0f2c3a] bg-[#FFFCF3] py-3 px-4 rounded-md my-4 shadow-sm">
    <p>“{children}”</p>
    {author && <footer className="text-sm mt-2 text-right not-italic">- {author}</footer>}
  </blockquote>
);

// ===================================================================
// SEO FOR THIS NEWS ARTICLE
// ===================================================================
const SEOJsonLd = () => {
  const CANONICAL =
    "https://goldenvisashub.com/golden-visa-record-2024-funds-drive-growth-post-real-estate";
  const OGIMG =
    "https://goldenvisashub.com/og/gv-record-funds-2024.png"; // Suggest creating a specific OG image for this news

  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": CANONICAL,
    },
    "headline":
      "Historic Record in 2024: Golden Visas Soar Driven by Investment Funds Post-Real Estate, Expresso Reports",
    "description":
      "Expresso newspaper confirms Portugal's Golden Visa hit a record €1.2B+ investment in 2024, overwhelmingly (>90%) via CMVM-regulated funds, validating the institutional shift led by firms like Explorer Investments.",
    "image": [OGIMG],
    "datePublished": "2025-10-19T16:00:00+01:00", // Current date/time approx
    "dateModified": "2025-10-19T16:00:00+01:00",
    "author": {
      "@type": "Organization",
      "name": "Explorer Investments",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Explorer Investments",
      "logo": {
        "@type": "ImageObject",
        "url": "https://goldenvisashub.com/assets/images/explorer-logo.png",
      },
    },
     "keywords": [
        "Golden Visa record 2024",
        "Expresso Vistos Gold",
        "Investment funds Golden Visa Portugal",
        "CMVM funds ARI",
        "Portugal Golden Visa without real estate",
        "Explorer Investments Golden Visa funds",
        "Private Equity Portugal Golden Visa",
        "€1.2 billion Golden Visa",
        "Golden Visa statistics 2024",
     ],
     "articleSection": "News",
  };

  return (
    <>
 
    </>
  );
};

// ===================================================================
// NEWS ARTICLE COMPONENT
// ===================================================================
const GoldenVisaRecordArticle = () => {
  const router = useRouter();
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <SEOJsonLd />

      {/* Main Article Content */}
      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-8">

          {/* Header */}
          <motion.header
            id="intro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faNewspaper} /> News Analysis
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              Historic Record in 2024: Golden Visas Soar Driven by Investment Funds Even Without Real Estate - And How Explorer Leads the Trend
            </h1>
            <p className="text-base text-[#5a6f7b]">
              Published: October 19, 2025 {/* Update publish date */} | Based on reporting by Expresso
            </p>
             <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
                In a striking turn that defies pessimistic forecasts, Portugal's Residence Permit for Investment (ARI), or Golden Visa, not only weathered the end of its popular real estate route but achieved a **historic investment record in 2024**. Recent reporting by the leading Portuguese newspaper **Expresso** reveals the program attracted over **€1.2 billion** last year - the highest annual figure since its inception. The engine behind this resilience and growth? Almost entirely **CMVM-regulated investment funds**, accounting for **over 90%** of the capital invested. 📈🇵🇹
             </p>
             <p className="mt-2 text-lg text-[#15364A] font-light text-balance">
                This milestone isn't just a statistic; it confirms a new era for the Golden Visa Portugal, focused on qualified investment, institutional governance, and top-tier managers like **Explorer Investments**.
             </p>
          </motion.header>

           {/* TRUST STRIP - Highlighting Key Data */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="2024 ARI Investment" value={facts.recordInvestment2024} note="Expresso Data" />
            <StatCard label="Fund Investment Share (2024)" value={facts.fundShare2024} note="Expresso Data" />
            <StatCard label="Explorer AUM" value={facts.aum} note="Leading PE Manager" />
            <StatCard label="Min. Fund Investment" value={`€${facts.minInvestmentGV}`} note="Golden Visa Route" />
          </div>


          {/* The Rise of Funds Section */}
          <section id="fund-era" className="space-y-4 scroll-mt-16">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-[#002741]">
              <TrendingUp className="w-6 h-6 text-[#B4A77E]" />
              The End of One Era, The Dawn of Another: The Ascent of Funds
            </h2>
            <p className="text-[#15364A] text-balance">
              In October 2023, Portuguese legislation removed the option to obtain the Golden Visa via direct or indirect residential real estate acquisition. Many predicted the program's decline. However, the 2024 data tells a different story. Capital didn't vanish; it **migrated to a more structured, professional pathway:** investment funds (primarily Private Equity and Venture Capital).
            </p>
             <h3 className="text-lg font-semibold text-[#002741] pt-2">Why this dramatic shift?</h3>
             <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
                <li>
                    <strong className="font-semibold">Compliance & Transparency:</strong>** CMVM-regulated funds offer supervision, audits, and reporting standards appealing to international investors, particularly from key markets reported by Expresso like the **USA, UK, South Africa, and Brazil**. <ShieldCheck className="inline w-4 h-4 ml-1 text-green-600"/>
                </li>
                 <li>
                    <strong className="font-semibold">Professional Management:</strong>** Capital is handled by experienced teams (like Explorer's, with **{facts.years} track record**) focused on generating returns through clear investment strategies, rather than relying solely on property appreciation. <Building className="inline w-4 h-4 ml-1 text-blue-600"/>
                 </li>
                 <li>
                    <strong className="font-semibold">Diversification:</strong>** Funds typically invest across a portfolio of companies or assets, mitigating the concentration risk inherent in single-property investments. <BarChart3 className="inline w-4 h-4 ml-1 text-purple-600"/>
                 </li>
                 <li>
                    <strong className="font-semibold">Structural Alignment:</strong>** The illiquid, long-term nature of Private Equity perfectly matches the Golden Visa's 5-year investment maintenance requirement. <CalendarClock className="inline w-4 h-4 ml-1 text-orange-600"/>
                 </li>
                  <li>
                    <strong className="font-semibold">Operational Simplicity:</strong>** Eliminates the hassles of remote property management (maintenance, rentals, local taxes like IMI/AIMI). <CheckCircle2 className="inline w-4 h-4 ml-1 text-teal-600"/>
                 </li>
             </ul>
          </section>

          <hr/>

          {/* Explorer Leading Section */}
          <section id="explorer-leading" className="space-y-4 scroll-mt-16">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-[#002741]">
               <BadgeCheck className="w-6 h-6 text-[#B4A77E]" />
              Explorer Investments: Leading the New Golden Visa Era
            </h2>
            <p className="text-[#15364A] text-balance">
              The record 2024 numbers validate the fund route's strength but also underscore the importance of choosing the *right partner*. As **Portugal's market leader in Private Equity** ({facts.aum} AUM), Explorer Investments has been at the forefront of this transition, offering solutions that merge Golden Visa eligibility with a robust institutional investment thesis.
            </p>
             <h3 className="text-lg font-semibold text-[#002741] pt-2">What sets Explorer apart in this new landscape?</h3>
             <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
                <li><strong className="font-semibold">Focus on Solid Private Equity:</strong>** Unlike purely speculative funds (VC targeting startups), Explorer primarily invests in mature, profitable Portuguese SMEs, applying operational expertise to foster growth - a more resilient model aligned with capital preservation and appreciation.</li>
                <li><strong className="font-semibold">Proven Track Record:</strong>** Over 20 years of operation with 38+ successful exits demonstrate the ability to generate real value for investors.</li>
                <li><strong className="font-semibold">Top-Tier Governance:</strong>** 100% CMVM-regulated funds, independent Big Four audits, prime custodian banks, and full reporting transparency.</li>
                <li><strong className="font-semibold">Global Investor Expertise:</strong>** Deep understanding of the needs of US investors (FATCA/PFIC compliance), Brazilians, and other key international clients.</li>
                <li><strong className="font-semibold">Clear Investment Path:</strong>** €{facts.minInvestmentGV} minimum for the Golden Visa route, backed by institutional security.</li>
             </ul>
            <Quote author="André Bandeira, Investor Relations, Explorer Investments">
             "The Expresso report confirms what we've been seeing: sophisticated investors seek the security, transparency, and return potential of regulated funds. The end of real estate didn't kill the Golden Visa; it raised the standard. At Explorer, we offer precisely that: an institutional-grade Private Equity investment vehicle that meets ARI requirements."
            </Quote>
          </section>

         <hr/>

          {/* Future Outlook Section */}
          <section id="future-outlook" className="space-y-4 scroll-mt-16">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-[#002741]">
               <Globe className="w-6 h-6 text-[#B4A77E]" />
              The Future of the Golden Visa is Institutional
            </h2>
            <p className="text-[#15364A] text-balance">
               The resounding success of the fund route in 2024 sends a clear message: the Portugal Golden Visa has evolved. It's no longer just a path to residency; it's a strategic investment and diversification tool demanding credible institutional partners.
            </p>
             <p className="text-[#15364A] text-balance font-semibold">
               For investors seeking a secure, professional pathway to EU residency, aligned with an investment managed with discipline and a focus on results, CMVM-regulated Private Equity funds - like those managed by Explorer Investments - represent the forefront of this new phase. ✅🇪🇺
             </p>
          </section>

          <hr/>

          {/* CTA */}
          <section id="cta" className="space-y-6 scroll-mt-16 text-center bg-[#FFFCF3] p-8 rounded-lg shadow-lg border border-[#E4E0CF]">
             <h2 className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-2 text-[#002741]">
               <Users className="w-7 h-7 text-[#B4A77E]" /> Explore the Leading Golden Visa Fund Route
             </h2>
             <p className="text-[#15364A] max-w-2xl mx-auto text-balance">
               Ready to understand how the investment route defining the Golden Visa's future aligns with your residency and financial goals? Contact the Explorer Investments team.
             </p>
            {/* Contact Info */}
             <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-6">
                 {/* André */}
                 <div className="flex items-center gap-3">
                   <img src="https://goldenvisashub.com/assets/images/andre_2025.jpg" alt="André Bandeira" className="w-12 h-12 rounded-full object-cover border" loading="lazy"/>
                   <div className="text-sm leading-snug text-left">
                     <p className="font-bold text-[#002741]">André Bandeira</p>
                     <a href="mailto:ab@explorerinvestments.com?subject=Golden%20Visa%20Fund%20Inquiry%20(News%20Article)" className="flex items-center gap-1 text-[#B4A77E] hover:underline">
                       <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3"/> ab@explorerinvestments.com
                     </a>
                   </div>
                 </div>
                 {/* Maria */}
                  <div className="flex items-center gap-3">
                   <img src="https://goldenvisashub.com/assets/images/maria_2025.jpg" alt="Maria Campos Silva" className="w-12 h-12 rounded-full object-cover border" loading="lazy"/>
                   <div className="text-sm leading-snug text-left">
                     <p className="font-bold text-[#002741]">Maria Campos Silva</p>
                     <a href="mailto:mcs@explorerinvestments.com?subject=Golden%20Visa%20Fund%20Inquiry%20(News%20Article)" className="flex items-center gap-1 text-[#B4A77E] hover:underline">
                      <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3"/> mcs@explorerinvestments.com
                     </a>
                   </div>
                 </div>
             </div>
            <Link
              href="//-form" // Link to contact form
              className="mt-8 inline-flex items-center gap-2 bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-base px-8 py-3 rounded-full transition shadow-md hover:shadow-lg"
            >
              <FontAwesomeIcon icon={faFileSignature} /> Book a Consultation
            </Link>
             <p className="text-xs text-[#6b7280] mt-4 flex items-center justify-center gap-1">
                 <Info size={14}/> This article is based on public news reports and does not constitute investment advice.
             </p>
          </section>
        </div>
      </section>

      {/* Related Articles Section */}
      <BlogArticles />
    </>
  );
};

export default GoldenVisaRecordArticle;