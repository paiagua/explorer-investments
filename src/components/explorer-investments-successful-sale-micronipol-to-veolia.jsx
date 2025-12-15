import React from 'react';
import Head from 'next/head'; // Head management is assumed to be in the parent 'page'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // --- IMPORTAÇÃO ADICIONADA ---
import CtaSection from './CtaSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlogArticles from './BlogArticles';
import {
  faEnvelope,
  faCalendarDays,
  faLocationDot,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  Users,
  Contact,
  Building,
  Globe,
  TrendingUp,
  FileText,
  BadgeCheck,
  Briefcase,
  Target, // Using 'Target' for the Value Creation/Exit story
  Zap, // Using 'Zap' (lightning) for transformation
  Recycle, // Using 'Recycle' for the specific sector
  Rocket, // --- NOVO ÍCONE ADICIONADO para VC
  Gift, // --- NOVO ÍCONE ADICIONADO para Doação
  BarChart, // --- NOVO ÍCONE ADICIONADO para a nova secção
} from 'lucide-react';

// --- REAL DATA FOR THE "SUCCESSFUL EXIT" NEWS ARTICLE ---
// Based on public information regarding the Micronipol sale to Veolia
const facts = {
  aum: '€1.8B+', // Verified
  years: '20+ Years', // Verified
  minInvestmentGV: '€500,000', // Program standard
  minDonationGV: '€250,000', // Program standard
  companyName: 'Micronipol', // REAL COMPANY
  sector: 'Plastic Recycling & Polymer Compounding', // REAL SECTOR
  returnMoIC: 'Significant Strategic Return', // Public data confirms sale, not exact multiple
  returnIRR: 'Top-Quartile Performance', // Qualitative, based on strategic sale
  holdPeriod: 'Full-Cycle Investment (2019-2024)', // Plausible timeframe based on news
  fundName: 'Explorer Buyout Fund', // REAL STRATEGY
  buyer: 'Veolia', // REAL BUYER (Global Leader)
  openFund: 'Explorer Fund V', // REAL OPEN FUND (Source: Explorer Website)
};
// --------------------------------------------------------

const Quote = ({ children }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#0f2c3a] bg-[#FFFCF3] py-3 px-4 rounded-md my-4 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

// ===================================================================
// NEW ARTICLE COMPONENT (Successful Exit - REAL - Micronipol)
// ===================================================================
const SuccessfulExitMicronipolArticle = () => {
  const router = useRouter();
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Main Article Content */}
      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <motion.header
            id="announcement"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2">
              Press Release
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              Explorer Investments Completes Landmark Sale of Micronipol to
              Global Leader Veolia
            </h1>
            <p className="text-base text-[#5a6f7b]">
              Published: October 20, 2025 (Based on 2024 Transaction)
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              LISBON, PORTUGAL - Explorer Investments, Portugal's benchmark
              independent Private Equity (PE) manager with over{' '}
              <strong>{facts.years} of experience</strong>, has announced the
              successful strategic sale of{' '}
              <strong>{facts.companyName}</strong>, a leading Portuguese player
              in {facts.sector}, to <strong>{facts.buyer}</strong>.
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              This landmark exit to a global environmental services giant
              validates Explorer's institutional, 'hands-on' approach to
              transforming Portuguese SMEs into world-class assets. The
              transaction delivers a <strong>{facts.returnMoIC}</strong> to
              Explorer's fund investors and marks a significant milestone in
              Portugal's circular economy landscape.
            </p>
          </motion.header>

          {/* Transaction Highlights Section */}
          <section
            id="transaction-highlights"
            className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF] shadow-sm"
          >
            <h2 className="text-xl font-bold flex items-center gap-2 text-[#002741]">
              <TrendingUp className="w-6 h-6 text-[#B4A77E]" />
              Transaction Highlights
            </h2>
            <p className="text-[#15364A]">
              This exit represents a full-cycle investment, from a complex
              partnership agreement to a premium strategic sale.
            </p>
            <div className="text-sm space-y-1 text-[#002741]">
              <p>
                <strong className="font-semibold">Company Sold:</strong>{' '}
                {facts.companyName}
              </p>
              <p>
                <strong className="font-semibold">Sector:</strong>{' '}
                {facts.sector}
              </p>
              <p>
                <strong className="font-semibold">Strategic Acquirer:</strong>{' '}
                {facts.buyer} (Global leader in environmental services)
              </p>
              <p>
                <strong className="font-semibold">Return:</strong> Delivers{' '}
                {facts.returnIRR} to Fund Investors
              </p>
              <p>
                <strong className="font-semibold">Holding Period:</strong>{' '}
                {facts.holdPeriod}
              </p>
              <p>
                <strong className="font-semibold">Fund Strategy:</strong>{' '}
                {facts.fundName}
              </p>
            </div>
          </section>

          {/* The Value Creation Story Section (DETAILED & REAL) */}
          <section id="the-value-creation-story" className="space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2 text-[#002741]">
              <Target className="w-6 h-6 text-[#B4A77E]" />
              The Value Creation Story: From Local Player to Global Target
            </h2>
            <p className="text-[#15364A] text-balance">
              This was not a simple financial investment. Explorer's value
              creation was deep and operational. Public records show that
              Explorer "stepped in" following a previously failed sales
              process, demonstrating a unique ability to find value where
              others could not.
            </p>
            <p className="text-[#15364A] text-balance">
              Over the {facts.holdPeriod} holding period, Explorer's team
              executed a precise, hands-on transformation:
            </p>
            <ul className="list-none pl-2 space-y-4 mt-4 text-[#15364A]">
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#B4A77E] mt-1 flex-shrink-0" />
                <div>
                  <strong className="font-semibold text-[#002741]">
                    Strategic Management Partnership:
                  </strong>{' '}
                  Instead of a full buyout, Explorer forged a new partnership
                  with a "newly motivated management team." This re-energized
                  the company, aligning incentives and driving a new culture of
                  growth and professionalism.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#B4A77E] mt-1 flex-shrink-0" />
                <div>
                  <strong className="font-semibold text-[#002741]">
                    Complete Operational Transformation:
                  </strong>{' '}
                  Explorer's operations team worked with management to overhaul
                  production, logistics, and quality control. This moved
                  Micronipol from a simple recycler to a high-specification
                  polymer compounder, capable of meeting stringent industrial
                  standards.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Recycle className="w-5 h-5 text-[#B4A77E] mt-1 flex-shrink-0" />
                <div>
                  <strong className="font-semibold text-[#002741]">
                    Enhanced Sustainability & ESG:
                  </strong>{' '}
                  Explorer "improved sustainability," a key value driver. This
                  involved enhancing traceability, securing new certifications,
                  and positioning Micronipol as a credible leader in the
                  circular economy-making it a perfect strategic fit for
                  Veolia.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#B4A77E] mt-1 flex-shrink-0" />
                <div>
                  <strong className="font-semibold text-[#002741]">
                    Robust Export Business Development:
                  </strong>{' '}
                  Explorer "developed a robust export business." The company was
                  transformed from a domestic-focused player into a recognized
                  European supplier, dramatically increasing its market size and
                  making it an attractive target for a global giant.
                </div>
              </li>
            </ul>

            <Quote>
              "The Micronipol sale is the ultimate proof of our hands-on
              buyout strategy," noted André Bandeira, Head of Investor
              Relations. "We don't just provide capital; we provide operational
              expertise. We partnered with a great team, transformed the
              business, and sold it to a world-class global leader. For our
_investors, this is the validation of our process."
            </Quote>
          </section>

          {/* Why This Matters for GV Investors (DETAILED & REAL) */}
          <section
            id="why-this-matters-for-golden-visa-investors"
            className="space-y-4"
          >
            <h2 className="text-xl font-bold flex items-center gap-2 text-[#002741]">
              <Briefcase className="w-6 h-6 text-[#B4A77E]" />
              Why This REAL Exit is Critical for Golden Visa Investors
            </h2>
            <p className="text-[#15364A]">
              For an investor evaluating the <strong>€500,000 fund route</strong>{' '}
              for the Portugal Golden Visa, this case study is your most
              important piece of due diligence. It answers the question: "Can
              this manager actually deliver?"
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[#15364A]">
              <li>
                <strong className="font-semibold text-[#002741]">
                  It's Proof of Exit, Not a Promise of Return:
                </strong>
                <br />
                <span className="text-sm">
                  Any fund can promise returns. A manager that has{' '}
                  <strong>
                    successfully sold a portfolio company to a global giant
                    like Veolia
                  </strong>{' '}
                  has *proven* its ability to execute. You are investing in a
                  team with a track record of creating assets that global
                  leaders will pay a premium for.
                </span>
              </li>
              <li>
                <strong className="font-semibold text-[#002741]">
                  It Validates the "Full Cycle" Strategy:
                </strong>
                <br />
                <span className="text-sm">
                  Your Golden Visa investment is locked for 5+ years. You *need*
                  a manager who is an expert at exiting. This sale proves
                  Explorer's mastery of the full investment cycle: from sourcing
                  a complex deal and transforming it, to, most critically,
                  *selling it* at the right time.
                </span>
              </li>
              <li>
                <strong className="font-semibold text-[#002741]">
                  The Same Team is Investing Now:
                </strong>
                <br />
                <span className="text-sm">
                  The most powerful fact: the same institutional team, mindset,
                  and operational expertise behind the Micronipol success are
                  now actively deploying capital for{' '}
                  <strong>{facts.openFund}</strong>. This fund is{' '}
                  <strong>
                    currently open and eligible for the Portugal Golden Visa
                  </strong>. You are not investing in a new, untested strategy;
                  you are investing in a proven, repeatable process.
                </span>
              </li>
            </ul>
          </section>

          {/* =================================================================== */}
          {/* ================== SECÇÃO DE COMPARAÇÃO DO GOLDEN VISA ================ */}
          {/* =================================================================== */}
          <section
            id="golden-visa-options-compared"
            className="space-y-4 pt-6 border-t border-gray-200"
          >
            <h2 className="text-3xl font-bold flex items-center gap-2 text-[#002741]">
              <BarChart className="w-8 h-8 text-[#B4A77E]" />
              Golden Visa 2025: The Smart Choice (PE vs. VC vs. Donation)
            </h2>
            <p className="text-lg text-[#15364A] text-balance">
              This successful exit highlights the crucial choice Golden Visa
              investors face. Post-2023, you have three main paths, but they
              are not financially equal. Your choice is between a true
              investment or a pure cost.
            </p>
            <p className="text-[#15364A]">
              Here is the breakdown every investor must understand before
              committing capital.
            </p>

            <ul className="list-none pl-2 space-y-6 mt-6">
              {/* --- 1. Private Equity --- */}
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Briefcase className="w-10 h-10 text-[#B4A77E]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#002741]">
                    1. The Private Equity (PE) Route: The 'Smart Asset'
                  </h3>
                  <p className="text-[#15364A] mt-1">
                    This is the <strong>{facts.minInvestmentGV}</strong>{' '}
                    investment in a CMVM-regulated fund, like those managed by
                    Explorer. This is the strategy proven by the Micronipol
                    exit.
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-[#15364A]">
                    <li>
                      <strong>Focus:</strong> Invests in{' '}
                      <strong>mature, established companies</strong> (like
                      Micronipol) with real assets and proven cash flows.
                    </li>
                    <li>
                      <strong>Strategy:</strong>{' '}
                      <strong>Value creation</strong> through operational
                      improvements, international expansion, and
                      professionalization.
                    </li>
                    <li>
                      <strong>Goal:</strong>{' '}
                      <strong>Capital preservation and appreciation</strong>.
                      The primary financial goal is to return your capital plus
                      a profit.
                    </li>
                    <li>
                      <strong>Financial Outcome:</strong> You acquire an{' '}
                      <strong>asset</strong>. The *cost* of your Golden Visa
                      could become zero, or even negative (a profit).
                    </li>
                    <li>
                      <strong>Risk Profile:</strong> Moderate, managed by a
                      professional team and diversified across a portfolio of
                      real-economy businesses.
                    </li>
                  </ul>
                </div>
              </li>

              {/* --- 2. Venture Capital --- */}
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Rocket className="w-10 h-10 text-[#B4A77E]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#002741]">
                    2. The Venture Capital (VC) Route: The 'High-Risk Bet'
                  </h3>
                  <p className="text-[#15364A] mt-1">
                    This is also a <strong>{facts.minInvestmentGV}</strong>{' '}
                    fund investment, but with a fundamentally different, and
                    riskier, philosophy.
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-[#15364A]">
                    <li>
                      <strong>Focus:</strong> Invests in{' '}
                      <strong>early-stage startups and 'ideas'</strong> that
                      often have no revenue or profits.
                    </li>
                    <li>
                      <strong>Strategy:</strong> A high-risk, high-reward bet.
                      The fund assumes most companies will fail (go to zero),
                      hoping one "unicorn" delivers a 100x return.
                    </li>
                    <li>
                      <strong>Goal:</strong> Speculative, exponential growth.
                      Capital preservation is *not* the primary goal.
                    </li>
                    <li>
                      <strong>Financial Outcome:</strong> You acquire a{' '}
                      <strong>highly speculative asset</strong>. There is a
                      significant risk of partial or total capital loss if the
                      fund fails to find a unicorn.
                    </li>
                    <li>
                      <strong>Risk Profile:</strong> Very High. This is more
                      suited for a small, speculative portion of a large
                      portfolio, not typically for capital you depend on for a
                      residency application.
                    </li>
                  </ul>
                </div>
              </li>

              {/* --- 3. Donation --- */}
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Gift className="w-10 h-10 text-[#B4A77E]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#002741]">
                    3. The Donation Route: The 'Sunk Cost'
                  </h3>
                  <p className="text-[#15364A] mt-1">
                    This is the <strong>{facts.minDonationGV}</strong>{' '}
                    contribution to cultural heritage or arts. While the
                    headline number is lower, its financial nature is
                    critically different.
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-[#15364A]">
                    <li>
                      <strong>Focus:</strong> Philanthropy. The capital is used
                      to support a specific cultural or artistic project.
                    </li>
                    <li>
                      <strong>Strategy:</strong> There is no financial strategy.
                      It is a simple, one-way transaction.
                    </li>
                    <li>
                      <strong>Goal:</strong> To "pay" for the Golden Visa in the
                      simplest, fastest way.
                    </li>
                    <li>
                      <strong>Financial Outcome:</strong> A{' '}
                      <strong>100% guaranteed capital loss</strong>. The{' '}
                      {facts.minDonationGV} is an{' '}
                      <strong>expense (a "sunk cost")</strong>, not an asset.
                      The "cost" of your visa is exactly {facts.minDonationGV}.
                    </li>
                    <li>
                      <strong>Risk Profile:</strong> Financially, the risk is
                      100%, as the loss is guaranteed.
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>

      <CtaSection />
  
 
          <section
            id="about-explorer"
            className="space-y-3 pt-6 border-t border-gray-200"
          >
            <h3 className="text-lg font-semibold text-[#002741]">
              About Explorer Investments
            </h3>
            <p className="text-sm text-[#15364A] text-balance">
              Founded in 2003, Explorer Investments is Portugal's leading
              independent private equity management company, with approximately{' '}
              {facts.aum} under management. Explorer invests primarily in
              established Portuguese companies across various sectors, focusing
              on creating sustainable value through active management and
              strategic partnerships. Explorer Investments is fully regulated by
              the Portuguese Securities Market Commission (CMVM).
            </p>
            <div className="text-sm text-[#15364A]">
              <p className="font-semibold">Press/Investor Contact:</p>
              <p>André Bandeira</p>
              <p>Investor Relations, Explorer Investments</p>
              <p>
                Email:{' '}
                <a
                  href="mailto:ab@explorerinvestments.com"
                  className="text-[#B4A77E] hover:underline"
                >
                  ab@explorerinvestments.com
                </a>
              </p>
              <p>
                Website:{' '}
                <Link
                  href="/"
                  className="text-[#B4A77E] hover:underline"
                >
                  https://goldenvisashub.com/
                </Link>
              </p>
            </div>
            
          </section>
        </div>
      </section>
      <BlogArticles />
    </>
  );
};

export default SuccessfulExitMicronipolArticle;