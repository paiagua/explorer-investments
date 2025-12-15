import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import CtaSection from './CtaSection'; // Importar o componente CTA
import BlogArticles from './BlogArticles';
import {
  FileText,
  BadgeCheck,
  Briefcase,
  BarChart,
  Clock, // O Relógio
  ShieldCheck, // A Lei/Segurança
  AlertTriangle, // O Medo/Atraso
  Gavel, // A Lei
  Rocket, // O "Sprint"
} from 'lucide-react';

// --- DADOS RELEVANTES PARA ESTE ARTIGO ---
const facts = {
  minInvestmentGV: '€500,000',
  citizenshipTime: '5 Years',
  lawName: 'Article 158-A',
  agencyName: 'AIMA',
};
// --------------------------------------------------------

const Quote = ({ children }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#0f2c3a] bg-[#FFFCF3] py-3 px-4 rounded-md my-4 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

// ===================================================================
// ARTIGO: AIMA Delays vs. 5-Year Clock
// ===================================================================
const GoldenVisaClockLawExplainedArticle = () => {
  return (
    <>
      {/* Main Article Content */}
      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <motion.header
            id="article-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2">
              Legal Update & Analysis
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              The 5-Year Clock & AIMA Delays: How a New Law Changed Everything
              for Golden Visa Investors (2026)
            </h1>
            <p className="text-base text-[#5a6f7b]">
              Published: October 23, 2025 | By André Bandeira
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              As Head of Investor Relations at Explorer, I answer hundreds of
              questions about the Golden Visa. In 2026, one fear dominates all
              others: <strong>AIMA delays</strong>.
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              Investors see processing times of 18-24 months and ask a logical
              question: "Does this mean my 5-year path to citizenship is now
              really a 7-year path?"
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-bold text-balance">
              The answer is <strong>No</strong>. And the reason is a
              little-known, critical piece of legislation that has
              fundamentally de-risked the Golden Visa timeline.
            </p>
          </motion.header>

          {/* The Old Problem */}
          <section id="the-problem" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-[#002741]">
              <AlertTriangle className="w-7 h-7 text-red-600" />
              The Old Fear: AIMA Delays Costing You Time
            </h2>
            <p className="text-[#15364A] text-balance">
              Historically, the 5-year clock for citizenship only started on
              the <strong>date your first residency card was issued</strong>.
            </p>
            <p className="text-[#15364A] text-balance">
              This created a major risk: If you submitted your application in
              October 2025, but {facts.agencyName} only approved it and issued
              your card in October 2027, your 5-year clock wouldn't start for
              two full years. Your total journey would be 7 years. This
              bureaucratic delay-which is 100% out of your control-was
              punishing investors.
            </p>
          </section>

          {/* The Solution (THE NEWS) */}
          <section
            id="the-solution"
            className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#B4A77E] shadow-sm"
          >
            <h2 className="text-2xl font-bold flex items-center gap-2 text-[#002741]">
              <Gavel className="w-7 h-7 text-green-700" />
              The New Law: Article 158-A Explained
            </h2>
            <p className="text-[#15364A] text-balance">
              The Portuguese government recognized this unfairness. A recent
              amendment to the Foreigners Law (Lei de Estrangeiros) introduced
              {' '}<strong>{facts.lawName}</strong>.
            </p>
            <p className="text-[#15364A] text-balance font-semibold">
              This law effectively states that for the purpose of counting
              time towards citizenship, the clock starts from the{' '}
              <strong>
                date the residency application was submitted and paid for
              </strong>, provided it is ultimately approved.
            </p>
            <p className="text-lg text-[#002741] text-balance font-bold">
              In simple terms: Your 5-year clock now starts the moment your
              lawyer hits "submit" on the AIMA portal, not 2 years later.
            </p>
          </section>

          <Quote>
            "This legal change is the single most important update to the
            Golden Visa program in years. It de-couples your legal timeline
            from AIMA's bureaucratic one. You are now earning your 5 years
            *while you wait*." - André Bandeira
          </Quote>

          {/* The New Strategy */}
          <section id="new-strategy" className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-[#002741]">
              <Rocket className="w-7 h-7 text-[#B4A77E]" />
              The New Bottleneck: Why Your Fund Manager's Speed Matters
            </h2>
            <p className="text-[#15364A] text-balance">
              This law changes everything. The new bottleneck is no longer
              just {facts.agencyName}. The new bottleneck is{' '}
              <strong>getting your application submitted</strong>.
            </p>
            <p className="text-[#15364A] text-balance">
              Your 5-year clock cannot start until your lawyer has all your
              documents. The two most critical documents are:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-[#15364A]">
              <li>
                The <strong>Fund Subscription Declaration</strong> from your
                fund manager.
              </li>
              <li>
                The <strong>CMVM Registration Declaration</strong>, also from
                your manager.
              </li>
            </ol>
            <p className="text-[#15364A] text-balance">
              This is where investors face a new delay. Some smaller funds or
              banks can take weeks or even months to issue these simple
              declarations. Every week you wait is a week you lose on your
              5-year clock.
            </p>
            <p className="text-lg text-[#15364A] text-balance font-bold">
              As Portugal’s largest institutional private equity manager,
              Explorer Investments has the infrastructure to provide all
              required declarations to your legal team within{' '}
              <strong>24-48 hours</strong> of your subscription. We ensure
              your "sprint" to the application portal is as fast as possible.
            </p>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="space-y-4 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-[#002741]">
              Conclusion: Don't Fear AIMA, Focus on Your Sprint
            </h2>
            <p className="text-[#15364A] text-balance">
              Stop worrying if {facts.agencyName} delays will turn your 5-year
              plan into a 7-year one. Thanks to {facts.lawName}, they won't.
            </p>
            <p className="text-lg text-[#15364A] text-balance font-bold">
              Your new focus must be on the "sprint"-getting your investment
              made and your application filed. Choose a partner who can move
              as fast as you need to. Your 5-year clock is waiting.
            </p>
          </section>

          {/* ========================================================== */}
          {/* ================== CTA SECTION IMPORTED ================== */}
          {/* ========================================================== */}
          <CtaSection />

          {/* About Explorer Section */}
          <section
            id="about-explorer"
            className="space-y-3 pt-6 border-t border-gray-200"
          >
            <h3 className="text-lg font-semibold text-[#002741]">
              About Explorer Investments
            </h3>
            <p className="text-sm text-[#15364A] text-balance">
              Founded in 2003, Explorer Investments is Portugal's leading
              independent private equity management company, with
              approximately €1.8B+ under management. We are fully regulated
              by the Portuguese Securities Market Commission (CMVM) and
              specialize in managing funds that qualify for the Golden Visa,
              ensuring an institutional-grade, compliant, and fast process
              for our investors.
            </p>
          </section>
        </div>
      </section>
      <BlogArticles />
    </>
  );
};

export default GoldenVisaClockLawExplainedArticle;