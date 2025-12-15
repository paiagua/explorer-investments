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
  Clock,
  ShieldCheck,
  AlertTriangle, // Ícone para "Aviso/Notícia"
  GitCompare, // Ícone para "Comparação"
} from 'lucide-react';

// --- DADOS RELEVANTES PARA ESTE ARTIGO ---
const facts = {
  minInvestmentGV: '€500,000',
  programName: 'ARI (Residency by Investment)',
  lawType: 'Legislated Investment Program',
  policyType: 'Labor Immigration Policy',
  newsDate: 'October 22, 2025',
};
// --------------------------------------------------------

const Quote = ({ children }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#0f2c3a] bg-[#FFFCF3] py-3 px-4 rounded-md my-4 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

// ===================================================================
// NOVO ARTIGO: Job Visa Canceled vs. GV Stability
// ===================================================================
const JobVisaCancellationArticle = () => {
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
              Golden Visa News & Analysis
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              Portugal Cancels Job Seeker Visas Overnight. Why Golden Visa
              Investors Are Secure.
            </h1>
            <p className="text-base text-[#5a6f7b]">
              Published: October 22, 2025 | By André Bandeira
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              Today, {facts.newsDate}, the Portuguese government announced
              the <strong>immediate cancellation of all future appointments
              for its popular "job seeker visa"</strong> (visto para procura
              de trabalho), effective tomorrow.
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              This route is being replaced by a new "qualified job seeker
              visa," which is not even regulated yet, leaving thousands in
              bureaucratic limbo. For any investor watching Portugal, this
              news is alarming. It also perfectly illustrates the #1 value of
              the Golden Visa program: <strong>stability</strong>.
            </p>
          </motion.header>

          {/* Immediate Clarification */}
          <section
            id="clarification"
            className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#B4A77E] shadow-sm"
          >
            <h2 className="text-xl font-bold flex items-center gap-2 text-[#002741]">
              <ShieldCheck className="w-6 h-6 text-green-700" />
              Golden Visa Investors: This Does NOT Affect You
            </h2>
            <p className="text-[#15364A] font-semibold text-lg">
              Let us be perfectly clear: This news has zero impact on the
              Golden Visa (ARI) program.
            </p>
            <p className="text-[#15364A]">
              Confusing these two paths is a critical mistake. They are
              fundamentally different legal and economic frameworks. This
              sudden change doesn't weaken the Golden Visa; it proves its
              core thesis.
            </p>
          </section>

          {/* Analysis: Volatility vs. Stability */}
          <section id="analysis" className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-[#002741]">
              <GitCompare className="w-7 h-7 text-[#B4A77E]" />
              Analysis: Labor Policy (Volatile) vs. Investment Law (Stable)
            </h2>
            <p className="text-[#15364A] text-balance">
              What we are seeing is the classic difference between a
              short-term labor policy and a long-term investment law.
            </p>

            {/* --- 1. The Job Seeker Visa --- */}
            <div className="border-l-4 border-red-500 pl-4 py-2 my-4">
              <h3 className="text-lg font-semibold text-[#002741]">
                The Canceled Path: "Job Seeker Visa"
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-[#15364A] mt-2">
                <li>
                  <strong>Type:</strong> {facts.policyType}.
                </li>
                <li>
                  <strong>Purpose:</strong> To fill immediate labor market
                  needs.
                </li>
                <li>
                  <strong>Risk:</strong> Entirely subject to political winds
                  and economic shifts. As needs change, the policy is changed
                  or-as of today-canceled overnight by a simple government
                  dispatch.
                </li>
              </ul>
            </div>

            {/* --- 2. The Golden Visa --- */}
            <div className="border-l-4 border-green-700 pl-4 py-2 my-4">
              <h3 className="text-lg font-semibold text-[#002741]">
                The Secure Path: "Golden Visa" ({facts.programName})
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-[#15364A] mt-2">
                <li>
                  <strong>Type:</strong> {facts.lawType}.
                </li>
                <li>
                  <strong>Purpose:</strong> To attract significant foreign
                  capital ({facts.minInvestmentGV}) for long-term economic
                  growth.
                </li>
                <li>
                  <strong>Security:</strong> It is defined by law (Lei de
                  Estrangeiros). The "contract" is clear: You invest capital
                  into a regulated asset, and Portugal provides a stable,
_legislated_ 5-year path to citizenship. It cannot be canceled by a
                  sudden dispatch.
                </li>
              </ul>
            </div>
          </section>

          <Quote>
            "Investors pay a premium for the Golden Visa. What today's news
            proves is that you aren't just buying a fund; you are buying
            *certainty*. You are paying to be exempt from this exact kind of
            volatility." - André Bandeira, Explorer Investments
          </Quote>

          {/* Conclusion */}
          <section id="conclusion" className="space-y-4 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-[#002741]">
              The Real Value of Your "Plan B" is Stability
            </h2>
            <p className="text-[#15364A] text-balance">
              A "Plan B" that can be canceled with 24 hours' notice is not a
              plan; it's a gamble.
            </p>
            <p className="text-[#15364A] text-balance">
              This news is a powerful reminder for all prospective investors.
              In a world of increasing regulatory uncertainty, the stability of
              the Golden Visa is not just a feature-it is its most valuable
              asset. While other paths face bureaucratic chaos, the Golden
              Visa route remains the most robust, secure, and clear path to
              EU residency and citizenship for global investors.
            </p>
            <p className="text-lg text-[#15364A] text-balance font-semibold">
              Your {facts.minInvestmentGV} investment doesn't just secure your
              capital; it secures your timeline.
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
              independent private equity management company, fully regulated
              by the CMVM. We provide institutional-grade investment funds
              that qualify for the Golden Visa, ensuring our investors have a
              secure and compliant path to Portuguese residency.
            </p>
            <div className="text-sm text-[#15364A]">
              <p className="font-semibold">Press/Investor Contact:</p>
              <p>André Bandeira</p>
              <p>Investor Relations, Explorer Investments</p>
            </div>
          </section>
        </div>
      </section>
      <BlogArticles />
    </>
  );
};

export default JobVisaCancellationArticle;