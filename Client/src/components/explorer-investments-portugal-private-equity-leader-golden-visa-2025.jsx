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
  ShieldCheck,
  CalendarClock,
  Flag,
  Globe,
  Users,
  BadgeCheck,
  TrendingUp,
  AlertTriangle,
  FileText,
  BadgeDollarSign, // Good for investment options
  Building2,
  Scale,
  FileSearch,
  Clock,
  BookOpen,
  CheckCircle2,
  BarChart3,
  Rocket, // Good for VC
  Building, // Good for PE
  Banknote,
  Briefcase, // Good for "business"
} from "lucide-react";

/**
 * =====================
 * SEO SLUGS (suggested)
 * =====================
 * Article slug: "/explorer-investments-portugal-private-equity-leader-golden-visa-2025"
 * Section slugs (ids already bound to headings below):
 * - #new-paradigm
 * - #explorer-dna
 * - #value-creation
 * - #investment-solutions
 * - #governance
 * - #process
 * - #conclusion
 * - #cta
 */

const facts = {
  aum: "≈ €1.8B",
  years: "20+ years",
  minInvestmentGV: "€500,000",
  minInvestmentGrowth: "€250,000", // Added as per your article
  exampleIrrNote: "Illustrative only - past performance is not indicative of future results.",
};

const StatCard = ({ label, value, note }) => (
  <div className="p-4 rounded-lg border border-[#E9E6D8] bg-[#FFFEFA]">
    <p className="text-3xl font-extrabold">{value}</p>
    <p className="text-sm">{label}</p>
    {note ? <p className="text-xs opacity-70 mt-1">{note}</p> : null}
  </div>
);

const Quote = ({ children }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#0f2c3a] bg-[#FFFCF3] py-3 px-4 rounded-md">
    “{children}”
  </blockquote>
);

 
const ExplorerLeaderArticle = () => {
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
              Explorer Investments: Portugal's Private Equity Giant and the Gateway for Global Investors (2025)
            </h1>
            <p className="text-base sm:text-lg text-[#15364A]">
              With a <strong>track record of over 20 years</strong> leading the Private Equity market in Portugal, Explorer Investments has become the institutional platform of choice for investors seeking more than just market exposure: they seek <strong>active value creation</strong>. With investment solutions that cater to both <strong>Golden Visa (€500,000)</strong> and capital growth investors (from <strong>€250,000</strong>), Explorer solidifies its position as the most solid strategic partner in Portugal.
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
                  { id: "new-paradigm", label: "The New Paradigm: From Passive to Active" },
                  { id: "explorer-dna", label: "Explorer's DNA: 20 Years Leading PE" },
                  { id: "value-creation", label: "The 'Value-Add': What is Active Management?" },
                  { id: "investment-solutions", label: "Investment Solutions: GV vs. Growth" },
                  { id: "governance", label: "Governance & Solidity: The Pillar of Trust" },
                  { id: "process", label: "The Investment Process" },
                  { id: "conclusion", label: "Conclusion: An Institutional Partner" },
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

          {/* TRUST STRIP (Updated with new facts) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatCard label="Assets Under Management" value={facts.aum} />
            <StatCard label="Track Record" value={facts.years} />
            <StatCard label="Golden Visa Minimum" value={facts.minInvestmentGV} note="ARI Program Requirement" />
            <StatCard label="Growth Fund Minimum" value={facts.minInvestmentGrowth} note="For non-GV Investors" />
          </div>

          {/* =================================================================== */}
          {/* START OF NEW ARTICLE CONTENT */}
          {/* =================================================================== */}

          {/* O Fim do Imobiliário, O Início do Capital Sólido */}
          <section id="new-paradigm" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-[#B4A77E]" />
              The End of Real Estate, The Rise of Solid Capital
            </h2>
            <p>
              The investment landscape in Portugal has radically changed. With the end of the real estate option for the Golden Visa (ARI), smart global capital has migrated. The era of passive investment is over; the era of professional, active investment has begun.
            </p>
            <p>
              In this new paradigm, investors aren't just looking for a vehicle for a visa; they are looking for a manager who knows what they are doing. They are looking for a team that doesn't just buy assets, but knows how to build them.
            </p>
            <p>
              It is in this scenario that <strong>Private Equity (PE)</strong> has emerged as the premier route. And at the pinnacle of Portuguese Private Equity, there is one name that has defined the category for over two decades: <strong>Explorer Investments</strong>.
            </p>
          </section>

          {/* Explorer Investments: 20 Anos a Liderar o Private Equity */}
          <section id="explorer-dna" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BadgeCheck className="w-6 h-6 text-[#B4A77E]" />
              Explorer Investments: 20 Years Leading Private Equity
            </h2>
            <p>
              Founded in 2003, Explorer Investments is not just another fund manager; it is the **largest and most experienced independent Private Equity platform in Portugal**. With approximately **€1.8 Billion in assets under management**, the numbers speak for themselves.
            </p>
            <p>
              But what sets Explorer apart isn't just the numbers. It's the methodology. In a market flooded with speculative Venture Capital (VC) funds or "fixed-income" funds offering limited returns, Explorer focuses on what it does best: **classic Private Equity**.
            </p>
            <p>
              This means investing in **mature, solid, and profitable companies** in the real Portuguese economy, with the goal of transforming them into more efficient, more valuable, market-leading businesses.
            </p>
          </section>

          {/* A "Mais-Valia" Explorer: O Que Significa "Gestão Ativa"? */}
          <section id="value-creation" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-[#B4A77E]" />
              The Explorer "Value-Add": What Does "Active Management" Mean?
            </h2>
            <p>
              Many funds claim to be "active managers." At Explorer, this isn't a marketing slogan; it's a daily operational process. The Explorer "value-add" is its <strong>total involvement in the investment process</strong>.
            </p>
            
            <h3 className="text-lg font-semibold pt-2">1. Solid Investment vs. Speculation</h3>
            <p>The most common confusion in the market is between "Private Equity" (PE) and "Venture Capital" (VC). Explorer is not a VC fund.</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>Venture Capital</strong> invests in *ideas* and *startups*, hoping one in ten becomes a "unicorn." It is a speculative investment.</li>
              <li><strong>Explorer's Private Equity</strong> invests in *established businesses*. Companies with revenue, customers, and profits. The risk is not survival; it's execution.</li>
            </ul>

            <h3 className="text-lg font-semibold pt-2">2. Total Involvement: Direct CEO Access & Control</h3>
            <p>Explorer doesn't just "write a check" and wait. The Explorer team:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>Takes a Board Seat:</strong> Explorer is present for the most important strategic decisions of the companies it invests in.</li>
              <li><strong>Has Direct CEO Access:</strong> There is a constant partnership with management teams to optimize operations, set budgets, and execute expansion plans.</li>
              <li><strong>Is Involved in the Entire Process:</strong> From deal sourcing (often exclusively) to due diligence, daily management, and the final exit, Explorer controls the investment end-to-end.</li>
            </ul>

            <h3 className="text-lg font-semibold pt-2">3. Real Value Creation</h3>
            <p>Explorer does not depend on market "luck." Value is manufactured through a proven playbook:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>Professionalization:</strong> Implementing rigorous financial controls, KPIs, and top-tier governance.</li>
              <li><strong>Expansion & M&A:</strong> Using its network to help companies expand into new markets or acquire smaller competitors ("bolt-ons").</li>
              <li><strong>Operational Optimization:</strong> Improving margins, restructuring costs, and focusing on efficiency.</li>
            </ul>

            <Quote>
              "A VC fund invests in a *business plan*. A PE fund like Explorer invests in a *business*. We buy solid companies and, through our direct involvement and management access, we make them extraordinary. Our 20-year track record is proof of this model."
            </Quote>
          </section>

          {/* Soluções de Investimento: Duas Vias */}
          <section id="investment-solutions" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BadgeDollarSign className="w-6 h-6 text-[#B4A77E]" />
              Investment Solutions: Two Paths to the Same Ecosystem
            </h2>
            <p>
              Understanding the different needs of global investors, Explorer has structured its access to this PE platform into two main paths:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Option 1: Golden Visa */}
              <div className="p-5 rounded-xl border border-[#B4A77E] bg-[#FFFCF3]">
                <h3 className="font-bold text-lg mb-2">Option 1: The Golden Visa Eligible Fund</h3>
                <p className="text-3xl font-extrabold mb-2">€500,000</p>
                <p className="text-sm mb-3">This is the solution designed specifically for investors seeking the Residence Permit (ARI).</p>
                <p className="text-sm font-semibold">A Note on "Open" vs. "Eligible" Funds:</p>
                <p className="text-xs opacity-90">
                  The Golden Visa law **excludes** traditional, liquid open-ended funds (UCITS). It requires an illiquid fund (5+ year maturity) with 60% investment in the Portuguese economy. Explorer's eligible funds are **Alternative Investment Funds (AIFs)**. While their legal structure may be "open" (allowing new subscriptions), they **legally impose a 5+ year lock-up (non-redemption period)** on the investor, perfectly aligning with the law and the long-term nature of Private Equity.
                </p>
              </div>
              {/* Option 2: Growth */}
              <div className="p-5 rounded-xl border">
                <h3 className="font-bold text-lg mb-2">Option 2: The Growth Access Fund</h3>
                <p className="text-3xl font-extrabold mb-2">From €250,000</p>
                <p className="text-sm mb-3">
                  For investors (domestic or international) who **do not** need the Golden Visa but recognize the superiority of Explorer's PE model.
                </p>
                <p className="text-sm font-semibold">Focus: Pure Capital Growth</p>
                <p className="text-xs opacity-90">
                  This option allows investors to access the same top-tier management team, the same proprietary deal flow, and the same "hands-on" value creation methodology that has made Explorer the market leader.
                </p>
              </div>
            </div>
          </section>

          {/* Governança e Solidez */}
          <section id="governance" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#B4A77E]" />
              Governance and Solidity: The Pillar of Trust
            </h2>
            <p>
              Investing €250,000 or €500,000 requires absolute trust. The Explorer ecosystem is built on pillars of institutional solidity:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Fully Regulated:</strong> Explorer Investments is regulated and supervised by the <strong>CMVM</strong> (Portuguese Securities Market Commission), the highest capital markets authority in Portugal.</li>
              <li><strong>Positive Track Record:</strong> Over 20 years of operation with a proven history of successful exits (company sales) and consistent returns for its investors.</li>
              <li><strong>Independent Partners:</strong> The funds are audited by top-tier firms (Big Four) and use independent custodian banks, ensuring the complete segregation and security of assets.</li>
            </ul>
          </section>

          {/* O Processo de Investimento */}
          <section id="process" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <CalendarClock className="w-6 h-6 text-[#B4A77E]" />
              The Investment Process
            </h2>
            <p>
              Explorer focuses on transparency and a simple, professional onboarding process:
            </p>
            <ol className="list-decimal list-outside pl-6 space-y-2">
              <li><strong>Private Consultation:</strong> A confidential initial call to understand your goals (Residency or Growth) and present the appropriate solution.</li>
              <li><strong>Due Diligence:</strong> The investor receives all legal and regulatory documentation for the fund (prospectus, management regulations) for review.</li>
              <li><strong>Onboarding (KYC/AML):</strong> The Explorer team guides the investor through the process of opening an account with the custodian bank and completing compliance verification (Know Your Customer / Anti-Money Laundering).</li>
              <li><strong>Subscription:</strong> After the funds are transferred, the investor signs the subscription, receiving the official declaration from the CMVM and the bank to prove the investment-ready to be used for the ARI process (if applicable).</li>
            </ol>
          </section>

          {/* Conclusão */}
          <section id="conclusion" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Flag className="w-6 h-6 text-[#B4A77E]" />
              Conclusion: More Than a Fund, an Institutional Partner
            </h2>
            <p>
              In today's market, choosing a fund for the Golden Visa (or for any investment in Portugal) is a critical decision. The choice is no longer between an apartment in Lisbon or Porto. It is between speculation and solidity.
            </p>
            <p>
              Choosing Explorer Investments is not choosing a fund. It is choosing an institutional partner with a 20-year track record, a proven investment model focused on real and profitable companies, and a team that gets directly involved in creating value.
            </p>
            <p className="font-semibold">
              For the investor seeking the solid path to residency, or simply the best Private Equity manager in Portugal, Explorer is not just an option; it is the benchmark.
            </p>
          </section>

          {/* =================================================================== */}
          {/* END OF NEW ARTICLE CONTENT */}
          {/* =================================================================== */}


          {/* CTA (Re-using from your template) */}
          <section id="cta" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Users className="w-6 h-6 text-[#B4A77E]" /> Book a Private Consultation
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
              href="/" // You might want to change this link to a Calendly or contact page
              className="mt-6 inline-flex items-center gap-2 bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-base px-6 py-3 rounded-full transition"
            >
              <FontAwesomeIcon icon={faFileSignature} /> Book a Free Strategy Session
            </Link>
          </section>
        </div>
      </section>

      {/* WHY EXPLORER (Re-using from your template) */}
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

export default ExplorerLeaderArticle;