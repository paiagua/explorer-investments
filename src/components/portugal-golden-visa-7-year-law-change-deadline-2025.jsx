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
  Gift,
  BarChart,
  Clock,
  ShieldCheck,
  Flag, // Ícone para "Cidadania"
  Plane, // Ícone para "Viagem/Schengen"
} from 'lucide-react';

// --- DADOS RELEVANTES PARA ESTE ARTIGO ---
const facts = {
  portugalMinInvest: '€500,000',
  portugalMinDonation: '€250,000',
  portugalCitizenship: '5 Years',
  spainCitizenship: '10 Years',
  greeceMinInvest: '€250,000', // (com zonas de €500k)
  maltaDonation: '€600,000 - €750,000',
};
// --------------------------------------------------------

const Quote = ({ children }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#0f2c3a] bg-[#FFFCF3] py-3 px-4 rounded-md my-4 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

// ===================================================================
// NOVO ARTIGO: Portugal vs. O Resto (Foco US Citizens)
// ===================================================================
const PortugalVsEuropeUSCitizensArticle = () => {
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
              Market Analysis for US Investors
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              Portugal's 5-Year Path: The Ultimate Golden Visa for US Citizens
              in 2026?
            </h1>
            <p className="text-base text-[#5a6f7b]">
              Published: October 22, 2025 | By André Bandeira
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              As US citizens increasingly seek global mobility, a "Plan B"
              residency, and diversified access, European Golden Visas have
              become sophisticated strategic tools.
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              But in the 2026 landscape, not all programs are created equal.
              While options in Greece, Spain, and Malta grab headlines, a
              closer look reveals why <strong>Portugal's 5-year path to
              citizenship</strong> remains the most attractive and enduring
              choice for savvy American investors.
            </p>
          </motion.header>

          {/* The Clear Winner: Portugal's 5-Year Path */}
          <section id="portugal-focus" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-[#002741]">
              <Flag className="w-7 h-7 text-[#B4A77E]" />
              The Hero: Portugal's 5-Year Path to Citizenship
            </h2>
            <p className="text-[#15364A] text-balance">
              Portugal’s Golden Visa program remains the gold standard for one
              simple reason: it offers the <strong>fastest, most credible path
              to EU citizenship</strong> in just <strong>{facts.portugalCitizenship}</strong>.
            </p>
            <p className="text-[#15364A] text-balance">
              Following the 2023 reforms, the program shifted away from real
              estate, focusing on more strategic and secure routes. For US
              investors, the {facts.portugalMinInvest} investment into a{' '}
              <strong>CMVM-regulated Private Equity (PE) or Venture Capital
              (VC) fund</strong> is now the primary route.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li>
                <strong className="font-semibold text-[#002741]">
                  The 5-Year Timeline:
                </strong> This is the key differentiator. After five years of
                legal residency, you can apply for citizenship.
              </li>
              <li>
                <strong className="font-semibold text-[#002741]">
                  Minimal Stay Requirement:
                </strong> You only need to spend an average of 7-14 days per
                year in Portugal, allowing you to maintain your life in the US
                while your path to an EU passport progresses.
              </li>
              <li>
                <strong className="font-semibold text-[#002741]">
                  Regulated Investment (Not a Sunk Cost):
                </strong> Unlike donation-based programs, the {facts.portugalMinInvest} is
                an investment in an asset class, managed by an institutional
                firm like Explorer, which aims for capital preservation and
                growth.
              </li>
            </ul>
          </section>

          {/* The Comparison Section */}
          <section
            id="comparison"
            className="space-y-6 pt-6 border-t border-gray-200"
          >
            <h2 className="text-3xl font-bold flex items-center gap-2 text-[#002741]">
              <BarChart className="w-8 h-8 text-[#B4A77E]" />
              How Portugal Compares: The 2026 Showdown
            </h2>
            <p className="text-lg text-[#15364A] text-balance">
              While other EU countries offer "Golden Visas," their terms reveal
              critical differences in strategy and value for a US investor.
            </p>

            {/* --- 1. vs. Spain --- */}
            <div className="bg-[#FFFCF3] p-5 rounded-lg border border-[#E4E0CF]">
              <h3 className="text-xl font-semibold text-[#002741] flex items-center gap-2">
                <Clock className="w-6 h-6 text-gray-500" />
                Portugal vs. Spain: The 5-Year vs. 10-Year Timeline
              </h3>
              <p className="text-[#15364A] mt-2">
                Spain’s Golden Visa, which still allows a €500,000 real estate
                purchase, is a strong *residency* program. However, its path
                to *citizenship* for non-Ibero-Americans is{' '}
                <strong>{facts.spainCitizenship}</strong>.
              </p>
              <p className="text-[#15364A] mt-2 font-semibold">
                <strong>The Verdict:</strong> For US citizens whose end goal is
                an EU passport, Portugal's {facts.portugalCitizenship} timeline is
                twice as fast as Spain's.
              </p>
            </div>

            {/* --- 2. vs. Greece --- */}
            <div className="bg-[#FFFCF3] p-5 rounded-lg border border-[#E4E0CF]">
              <h3 className="text-xl font-semibold text-[#002741] flex items-center gap-2">
                <Building className="w-6 h-6 text-gray-500" />
                Portugal vs. Greece: Strategic Asset vs. Low-Cost Entry
              </h3>
              <p className="text-[#15364A] mt-2">
                Greece's program is appealing for its low {facts.greeceMinInvest}
                {' '}real estate entry point (though this is {facts.portugalMinInvest}
                {' '}in prime zones). However, like Spain, it's a 7-year path to
                citizenship with stricter integration and language
                requirements.
              </p>
              <p className="text-[#15364A] mt-2 font-semibold">
                <strong>The Verdict:</strong> Greece is a cost-effective *residency*
                play. Portugal is a clear *citizenship* strategy. Furthermore,
                Portugal's fund route avoids the complexities of foreign real
                estate ownership and management.
              </p>
            </div>

            {/* --- 3. vs. Malta --- */}
            <div className="bg-[#FFFCF3] p-5 rounded-lg border border-[#E4E0CF]">
              <h3 className="text-xl font-semibold text-[#002741] flex items-center gap-2">
                <Gift className="w-6 h-6 text-gray-500" />
                Portugal vs. Malta: Investment vs. Sunk Cost
              </h3>
              <p className="text-[#15364A] mt-2">
                Malta offers the fastest path to full EU citizenship (12-36
                months). However, this is <strong>not an investment</strong>.
                It requires a {facts.maltaDonation} *donation* (a sunk cost) to
                the national fund, plus a property purchase/lease and another
                donation.
              </p>
              <p className="text-[#15364A] mt-2 font-semibold">
                <strong>The Verdict:</strong> Portugal's {facts.portugalMinInvest} is
                an asset you retain, with the potential for profit. Malta's
                path is an *expense* of nearly one million euros. For the
                financially savvy investor, the value proposition is not even
                close.
              </p>
            </div>
          </section>

          <Quote>
            "US investors don't just want a visa; they want a credible,
            financially sound strategy for an EU passport. In 2026, comparing
            timelines and costs, Portugal's 5-year fund route is the most
            logical and efficient choice on the market." - André Bandeira
          </Quote>

          {/* US Tax Considerations */}
          <section id="us-tax" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-[#002741]">
              <ShieldCheck className="w-7 h-7 text-[#B4A77E]" />
              A Critical Note for US Citizens: FATCA & PFIC
            </h2>
            <p className="text-[#15364A] text-balance">
              As a US citizen, your tax obligations are global. Investing in a
              foreign fund triggers{' '}
              <strong>PFIC (Passive Foreign Investment Company)</strong>{' '}
              rules, which can be punitive *unless* the fund is structured to
              provide you with the necessary annual documentation.
            </p>
            <p className="text-[#15364A] text-balance">
              This is non-negotiable. You cannot afford to invest in a fund
              that doesn't understand US tax reporting.
            </p>
            <p className="text-[#15364A] text-balance font-semibold">
              At Explorer Investments, we have a long track record of working
              with US Persons. Our funds are structured to provide the
              necessary statements for your tax advisor to make a{' '}
              <strong>QEF (Qualified Electing Fund) election</strong>,
              ensuring you remain compliant with the IRS while pursuing your
              Golden Visa.
            </p>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="space-y-4 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-[#002741]">
              Conclusion: The Smartest "Plan B" for 2026
            </h2>
            <p className="text-[#15364A] text-balance">
              While other European nations offer pathways, they each come with
              a significant trade-off: Spain's 10-year timeline, Greece's
              weaker citizenship link, or Malta's 100% sunk cost.
            </p>
            <p className="text-lg text-[#15364A] text-balance font-bold">
              Portugal's Golden Visa, through a regulated fund, stands alone.
              It represents the perfect balance: a secure, performing asset
              combined with the fastest, most realistic path to EU citizenship
              in the entire bloc.
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
              approximately €1.8B+ under management. We are fully regulated by
              the Portuguese Securities Market Commission (CMVM) and
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

export default PortugalVsEuropeUSCitizensArticle;