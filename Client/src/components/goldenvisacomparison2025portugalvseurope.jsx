import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import CtaSection from './CtaSection'; // Importar o componente CTA
import BlogArticles from './BlogArticles';
import {
  Users,
  Building,
  Globe,
  TrendingUp,
  FileText,
  BadgeCheck,
  Briefcase,
  Target,
  Zap,
  Gift, // Malta (Donation)
  BarChart, // Comparison
  Clock, // Spain (Time)
  ShieldCheck, // US Tax
  Flag, // Portugal (Citizenship)
  Plane, // Flexibility
  Landmark, // Italy (Culture/Company)
  Activity, // Hungary (New/Basic)
  CheckCircle, // Pro
  XCircle, // Con
} from 'lucide-react';

// --- DADOS RELEVANTES PARA ESTE ARTIGO DE COMPARAÇÃO ---
const facts = {
  // Portugal (O Herói)
  portugalMinInvest: '€500,000',
  portugalInvestmentType: 'Regulated Fund (Asset)',
  portugalCitizenship: '5 Years',
  portugalStayReq: '~7-14 days/year',

  // Concorrentes
  spainMinInvest: '€500,000',
  spainInvestmentType: 'Real Estate (Illiquid)',
  spainCitizenship: '10 Years',
  spainStayReq: 'Minimal (for residency)',

  greeceMinInvest: '€250,000 - €500,000',
  greeceInvestmentType: 'Real Estate (Illiquid)',
  greeceCitizenship: '7 Years',
  greeceStayReq: 'Minimal (for residency)',

  maltaMinDonation: '€600,000 - €750,000',
  maltaInvestmentType: 'Donation (Sunk Cost)',
  maltaCitizenship: '1-3 Years (by naturalization)',
  maltaStayReq: '12-36 months residency',

  italyMinInvest: '€250,000 - €500,000',
  italyInvestmentType: 'Startup or Company (High Risk)',
  italyCitizenship: '10 Years',
  italyStayReq: 'Full-time residency required',

  hungaryMinInvest: '€250,000',
  hungaryInvestmentType: 'Real Estate Fund',
  hungaryCitizenship: '8 Years (via naturalization)',
  hungaryStayReq: 'Minimal (10-year permit)',
};
// --------------------------------------------------------

const Quote = ({ children }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#0f2c3a] bg-[#FFFCF3] py-3 px-4 rounded-md my-4 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

// --- Componente de Tabela de Comparação ---
const ComparisonTable = () => (
  <div className="w-full overflow-x-auto my-8">
    <table className="w-full min-w-[700px] text-left border-collapse">
      <thead>
        <tr className="bg-[#FFFCF3] border-b border-[#E4E0CF]">
          <th className="p-3 font-semibold text-[#002741]">Program</th>
          <th className="p-3 font-semibold text-[#002741]">Investment</th>
          <th className="p-3 font-semibold text-[#002741]">Investment Type</th>
          <th className="p-3 font-semibold text-[#002741]">Path to Citizenship</th>
          <th className="p-3 font-semibold text-[#002741]">Stay Requirement</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-200 bg-green-50">
          <td className="p-3 font-bold text-green-800 flex items-center gap-2">
            <Flag className="w-5 h-5" /> Portugal
          </td>
          <td className="p-3 font-bold text-green-800">{facts.portugalMinInvest}</td>
          <td className="p-3 font-bold text-green-800">{facts.portugalInvestmentType}</td>
          <td className="p-3 font-bold text-green-800">{facts.portugalCitizenship}</td>
          <td className="p-3 font-bold text-green-800">{facts.portugalStayReq}</td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="p-3 text-[#15364A] font-medium">Spain</td>
          <td className="p-3 text-[#15364A]">{facts.spainMinInvest}</td>
          <td className="p-3 text-[#15364A]">{facts.spainInvestmentType}</td>
          <td className="p-3 text-[#15364A] font-bold text-red-700">{facts.spainCitizenship}</td>
          <td className="p-3 text-[#15364A]">{facts.spainStayReq}</td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="p-3 text-[#15364A] font-medium">Greece</td>
          <td className="p-3 text-[#15364A]">{facts.greeceMinInvest}</td>
          <td className="p-3 text-[#15364A]">{facts.greeceInvestmentType}</td>
          <td className="p-3 text-[#15364A]">{facts.greeceCitizenship}</td>
          <td className="p-3 text-[#15364A]">{facts.greeceStayReq}</td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="p-3 text-[#15364A] font-medium">Malta</td>
          <td className="p-3 text-[#15364A]">{facts.maltaMinDonation}</td>
          <td className="p-3 text-[#15364A] font-bold text-red-700">{facts.maltaInvestmentType}</td>
          <td className="p-3 text-[#15364A]">{facts.maltaCitizenship}</td>
          <td className="p-3 text-[#15364A]">{facts.maltaStayReq}</td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="p-3 text-[#15364A] font-medium">Italy</td>
          <td className="p-3 text-[#15364A]">{facts.italyMinInvest}</td>
          <td className="p-3 text-[#15364A]">{facts.italyInvestmentType}</td>
          <td className="p-3 text-[#15364A] font-bold text-red-700">{facts.italyCitizenship}</td>
          <td className="p-3 text-[#15364A] font-bold text-red-700">{facts.italyStayReq}</td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="p-3 text-[#15364A] font-medium">Hungary</td>
          <td className="p-3 text-[#15364A]">{facts.hungaryMinInvest}</td>
          <td className="p-3 text-[#15364A]">{facts.hungaryInvestmentType}</td>
          <td className="p-3 text-[#15364A]">{facts.hungaryCitizenship}</td>
          <td className="p-3 text-[#15364A]">{facts.hungaryStayReq}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// ===================================================================
// ARTIGO PRINCIPAL: A COMPARAÇÃO DEFINITIVA
// ===================================================================
const EuropeanGoldenVisaShowdownArticle = () => {
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
              The 2026 Investor's Guide
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              The European Golden Visa Showdown (2026): Why Portugal's Fund
              Route is the Undisputed Winner
            </h1>
            <p className="text-base text-[#5a6f7b]">
              Published: October 22, 2025 | By André Bandeira
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              Choosing a "Plan B" in Europe isn't just about a visa. It's a
              10-year financial and strategic decision. In 2026, the market is
              crowded with options-Spain, Greece, Malta, Italy, and the newly
              relaunched Hungarian program.
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              As investors, we must look past the marketing and analyze the
              data. When we compare these programs on the three criteria that
              matter-<strong>Path to Citizenship, Investment Value, and
              Flexibility</strong>-a clear winner emerges. This is the
              definitive breakdown of why Portugal's {facts.portugalMinInvest}
              {' '}fund-based program stands alone.
            </p>
          </motion.header>

          {/* The Scorecard (TL;DR) */}
          <ComparisonTable />

          {/* The Benchmark: Portugal */}
          <section id="portugal-benchmark" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-[#002741]">
              <Flag className="w-7 h-7 text-[#B4A77E]" />
              The Benchmark: Portugal's "Golden Triangle"
            </h2>
            <p className="text-[#15364A] text-balance">
              Before comparing, we must establish the standard. Portugal's
              program, especially after its 2023 shift to regulated funds, is
              built on a "Golden Triangle" of benefits that no other country
              matches.
            </p>
            <ul className="list-none pl-0 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <strong className="font-semibold text-[#002741]">
                    1. The 5-Year Path to Citizenship:
                  </strong>
                  <p className="text-[#15364A]">
                    The fastest, most credible timeline to a full EU passport
                    in Western Europe.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <strong className="font-semibold text-[#002741]">
                    2. The Regulated Fund Investment:
                  </strong>
                  <p className="text-[#15364A]">
                    Your {facts.portugalMinInvest} is an <strong>asset</strong>
                    , not a sunk cost. By investing in a CMVM-regulated fund
                    like Explorer's, your capital is preserved and positioned
                    for growth while you wait for citizenship.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <strong className="font-semibold text-[#002741]">
                    3. The "7-Day" Flexibility:
                  </strong>
                  <p className="text-[#15364A]">
                    With a minimal stay of just {facts.portugalStayReq}, this is
                    the only true "Plan B" program. It's designed for
                    investors who want an EU passport without having to
                    relocate their life or business.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* The Showdown: Portugal vs. The Rest */}
          <section
            id="comparison"
            className="space-y-6 pt-6 border-t border-gray-200"
          >
            <h2 className="text-3xl font-bold flex items-center gap-2 text-[#002741]">
              <BarChart className="w-8 h-8 text-[#B4A77E]" />
              The Showdown: Portugal vs. The Competitors
            </h2>

            {/* --- 1. vs. Spain --- */}
            <div className="bg-[#FFFCF3] p-5 rounded-lg border border-[#E4E0CF]">
              <h3 className="text-xl font-semibold text-[#002741] flex items-center gap-2">
                <Clock className="w-6 h-6 text-gray-500" />
                Portugal vs. Spain: The 10-Year Timeline Trap
              </h3>
              <p className="text-[#15364A] mt-2">
                Spain's {facts.spainMinInvest} program is popular, but it's a
                *residency* program, not a citizenship strategy. The path to a
                Spanish passport for a non-Ibero-American is{' '}
                <strong>{facts.spainCitizenship}</strong>.
              </p>
              <p className="text-[#15364A] mt-2 font-semibold">
                <strong>Verdict:</strong> Portugal's 5-year timeline is twice
                as fast. For investors seeking an EU passport this decade,
                Spain is not a viable option.
              </p>
            </div>

            {/* --- 2. vs. Greece --- */}
            <div className="bg-[#FFFCF3] p-5 rounded-lg border border-[#E4E0CF]">
              <h3 className="text-xl font-semibold text-[#002741] flex items-center gap-2">
                <Building className="w-6 h-6 text-gray-500" />
                Portugal vs. Greece: The "Hidden Hassle"
              </h3>
              <p className="text-[#15364A] mt-2">
                Greece's low {facts.greeceMinInvest} entry point is tempting.
                But this buys you an illiquid real estate asset in a complex
                market, and the citizenship path is {facts.greeceCitizenship}
                {' '}with stricter language and integration requirements.
              </p>
              <p className="text-[#15364A] mt-2 font-semibold">
                <strong>Verdict:</strong> Portugal's fund route is a
                professionally managed, hands-off asset with a faster,
                clearer path to citizenship.
              </p>
            </div>

            {/* --- 3. vs. Malta --- */}
            <div className="bg-[#FFFCF3] p-5 rounded-lg border border-[#E4E0CF]">
              <h3 className="text-xl font-semibold text-[#002741] flex items-center gap-2">
                <Gift className="w-6 h-6 text-gray-500" />
                Portugal vs. Malta: Investment vs. Sunk Cost
              </h3>
              <p className="text-[#15364A] mt-2">
                This is the clearest comparison. Malta offers fast
                citizenship, but it is <strong>not an investment</strong>. It
                is a *donation* (sunk cost) of {facts.maltaMinDonation} plus
                property and other fees, costing nearly €1 million.
              </p>
              <p className="text-[#15364A] mt-2 font-semibold">
                <strong>Verdict:</strong> Portugal's {facts.portugalMinInvest} is
                an asset you own, with the potential for profit. Malta is a
                multi-million dollar *expense*. The financial difference is
                staggering.
              </p>
            </div>

            {/* --- 4. vs. Italy --- */}
            <div className="bg-[#FFFCF3] p-5 rounded-lg border border-[#E4E0CF]">
              <h3 className="text-xl font-semibold text-[#002741] flex items-center gap-2">
                <Landmark className="w-6 h-6 text-gray-500" />
                Portugal vs. Italy: The Flexibility Trap
              </h3>
              <p className="text-[#15364A] mt-2">
                Italy's investor visa is excellent for those who wish to
                invest in a high-risk startup or company. But its fatal flaw
                for "Plan B" investors is the citizenship requirement: 10
                years of <strong>full-time, physical residency</strong>.
              </p>
              <p className="text-[#15364A] mt-2 font-semibold">
                <strong>Verdict:</strong> Italy is a *relocation* program.
                Portugal is a *flexibility* program. They serve completely
                different goals.
              </p>
            </div>

            {/* --- 5. vs. Hungary --- */}
            <div className="bg-[#FFFCF3] p-5 rounded-lg border border-[#E4E0CF]">
              <h3 className="text-xl font-semibold text-[#002741] flex items-center gap-2">
                <Activity className="w-6 h-6 text-gray-500" />
                Portugal vs. Hungary: The "Residency-Only" Program
              </h3>
              <p className="text-[#15364A] mt-2">
                Relaunched in 2024, Hungary's {facts.hungaryMinInvest}
                {' '}program is cheap. But it offers a 10-year *residency
                permit*, not a clear path to citizenship. The actual path to
                a passport is 8 years of continuous residency, language
                tests, and no guarantee.
              </p>
              <p className="text-[#15364A] mt-2 font-semibold">
                <strong>Verdict:</strong> Hungary offers cheap residency.
                Portugal offers a clear, legislated strategy for an EU
                passport.
              </p>
            </div>
          </section>

          <Quote>
            "Investors often ask to compare programs. The truth is, they
            aren't comparable. Spain and Italy are for *relocation*. Malta is
            a *purchase*. Greece and Hungary are for *residency*. Only
            Portugal's Golden Visa was designed as a true *strategic
            investment* for a fast, flexible path to EU citizenship." - André
            Bandeira
          </Quote>

          {/* US Tax Considerations */}
          <section id="us-tax" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-[#002741]">
              <ShieldCheck className="w-7 h-7 text-[#B4A77E]" />
              The Final Hurdle for US Citizens: PFIC Compliance
            </h2>
            <p className="text-[#15364A] text-balance">
              For US investors, there's a final test: tax compliance.
              Investing in any foreign fund (Portugal, Hungary) triggers
              complex PFIC rules. Failure to report this correctly to the IRS
              can result in severe penalties.
            </p>
            <p className="text-[#15364A] text-balance font-semibold">
              Your chosen fund *must* be structured to provide you with the
              annual statements needed for a QEF election. As Portugal's
              largest institutional manager, Explorer Investments has this
              infrastructure in place, ensuring our US investors remain fully
              compliant while on their 5-year journey.
            </p>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="space-y-4 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-[#002741]">
              Conclusion: The Choice is Clear
            </h2>
            <p className="text-[#15364A] text-balance">
              When you move past the headline numbers and analyze the data,
              the 2026 Golden Visa landscape becomes simple.
            </p>
            <p className="text-lg text-[#15364A] text-balance font-bold">
              For the strategic investor seeking the best combination of
              speed-to-citizenship, financial value, and personal
              flexibility, Portugal isn't just *an* option. It is the only
              logical choice.
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
              with a dedicated team to support US investors through the
              process.
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
            </div>
          </section>
        </div>
      </section>
      <BlogArticles />
    </>
  );
};

export default EuropeanGoldenVisaShowdownArticle;