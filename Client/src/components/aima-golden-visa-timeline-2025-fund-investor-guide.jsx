import React from 'react';
import Head from 'next/head'; // Head management is assumed to be in the parent 'page'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // --- IMPORTAÇÃO ADICIONADA ---
import CtaSection from './CtaSection'; // --- IMPORTAR O SEU COMPONENTE CTA ---
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
  Contact, // Importado para o CtaSection (embora o CtaSection trate disso)
  Building,
  Globe,
  TrendingUp,
  FileText, // Ícone para "Documentos/Fase 1"
  BadgeCheck,
  Briefcase, // Ícone para "Private Equity"
  Target,
  Zap,
  Recycle,
  Rocket, // Ícone para "Venture Capital"
  Gift, // Ícone para "Doação"
  BarChart, // Ícone para "Comparação"
  Clock, // --- ÍCONE NOVO: Para "Timeline" ---
  UserCheck, // --- ÍCONE NOVO: Para "Biometria/Fase 2" ---
  ShieldCheck, // --- ÍCONE NOVO: Para "Segurança" ---
} from 'lucide-react';

// --- DADOS RELEVANTES PARA ESTE ARTIGO ---
const facts = {
  aum: '€1.8B+', // Verified
  years: '20+ Years', // Verified
  minInvestmentGV: '€500,000', // Program standard
  minDonationGV: '€250,000', // Program standard
  openFund: 'Explorer Fund V', // REAL OPEN FUND (Source: Explorer Website)
  AIMA_URL: 'https://aima.gov.pt/pt', // Link oficial da AIMA
};
// --------------------------------------------------------

const Quote = ({ children }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#0f2c3a] bg-[#FFFCF3] py-3 px-4 rounded-md my-4 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

// ===================================================================
// NOVO ARTIGO: GUIA DOS PRAZOS DA AIMA
// =(Mantendo a estrutura do exemplo da Micronipol)
// ===================================================================
const AimaTimelineGuideArticle = () => {
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
              Golden Visa Guide
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              AIMA Golden Visa Timelines 2025: A Fund Investor's Step-by-Step
              Guide
            </h1>
            <p className="text-base text-[#5a6f7b]">
              Published: October 20, 2025 | By André Bandeira
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              As Head of Investor Relations at Explorer, the number one
              question I get from Golden Visa investors in 2025 isn't about
              returns-it's about <strong>AIMA timelines</strong>.
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              Worries about bureaucracy, delays, and biometrics are the top
              concern. In this guide, we provide clarity. We will demystify the
              process, separate what *you* control from what *AIMA* controls,
              and explain why a Private Equity fund is the most secure
              strategy for this new reality.
            </p>
          </motion.header>

          {/* Understanding the "Two Clocks" */}
          <section
            id="two-clocks"
            className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF] shadow-sm"
          >
            <h2 className="text-xl font-bold flex items-center gap-2 text-[#002741]">
              <Clock className="w-6 h-6 text-[#B4A77E]" />
              The "Two-Clock" System: What You Must Understand
            </h2>
            <p className="text-[#15364A]">
              To remove anxiety, you must understand that there are two
              different timelines: your <strong>Investment Clock</strong> and
              your <strong>Citizenship Clock</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li>
                <strong className="font-semibold text-[#002741]">
                  Clock 1: The Investment Clock (Starts Now)
                </strong>
                <br />
                This starts the moment your <strong>{facts.minInvestmentGV}</strong> is
                invested in the fund. The fund's 8-10 year lifespan begins
                here.
              </li>
              <li>
                <strong className="font-semibold text-[#002741]">
                  Clock 2: The 5-Year Citizenship Clock (Starts Later)
                </strong>
                <br />
                This clock only starts *after* your biometrics and final
                approval, from the <strong>date your first residency card is
                issued</strong>.
              </li>
            </ul>
            <p className="text-[#15364A] font-semibold">
              Key Insight: AIMA delays are frustrating, but they do not "cost"
              you time on your 5-year path to citizenship. The clock hasn't
              started yet.
            </p>
          </section>

          {/* Phase 1: What You Control */}
          <section id="phase-one-control" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-[#002741]">
              <FileText className="w-7 h-7 text-[#B4A77E]" />
              Phase 1: Your 7-Day Sprint (What You Control)
            </h2>
            <p className="text-[#15364A] text-balance">
              While the AIMA process is a marathon, your investment phase
              should be a sprint. This part is 100% in your control and can be
              completed *fast* if you work with an institutional manager.
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-[#15364A]">
              <li>
                <strong className="font-semibold text-[#002741]">
                  Day 1-3: Get Your NIF & Bank Account.
                </strong>
                <br />
                <span className="text-sm">
                  A Portuguese tax number (NIF) and a bank account are
                  mandatory. A good lawyer can get this done remotely for you
                  in a few days.
                </span>
              </li>
              <li>
                <strong className="font-semibold text-[#002741]">
                  Day 4-6: Fund Subscription (KYC/AML).
                </strong>
                <br />
                <span className="text-sm">
                  You review the fund's documents (PPM, KID) and submit your
                  subscription forms and KYC (Know Your Customer) documents. At
                  Explorer, our compliance team reviews these in 24-48 hours.
                </span>
              </li>
              <li>
                <strong className="font-semibold text-[#002741]">
                  Day 7: Receive the "Golden Document".
                </strong>
                <br />
                <span className="text-sm">
                  Once you transfer the {facts.minInvestmentGV}, our Custodian
                  Bank (e.g., Bison Bank, BPI) and Explorer Investments issue
                  the official{' '}
                  <strong>
                    *Declaração* (Declaration)
                  </strong>. This document is the *only* proof AIMA needs for
                  your investment.
                </span>
              </li>
            </ol>
            <p className="text-[#15364A] text-balance font-semibold">
              At this point, your work is done. You are "AIMA-ready." Your
              lawyer now takes over.
            </p>
          </section>

          {/* Phase 2: The AIMA Marathon */}
          <section id="phase-two-aima" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-[#002741]">
              <UserCheck className="w-7 h-7 text-[#B4A77E]" />
              Phase 2: The AIMA Marathon (What They Control)
            </h2>
            <p className="text-[#15364A] text-balance">
              This is the bureaucratic part. Your lawyer will manage this, and
              patience is key.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[#15364A]">
              <li>
                <strong>Step 1: Application Submission.</strong> Your lawyer
                uploads your *Declaração* and personal documents to the AIMA
                portal.
              </li>
              <li>
                <strong>Step 2: Pre-Approval.</strong> This is the longest
                waiting period. AIMA reviews the file. Once pre-approved, you
                are invited to book biometrics.
              </li>
              <li>
                <strong>Step 3: Biometrics Appointment.</strong> This is the
                main bottleneck. You (and your family) must travel to Portugal
                to provide fingerprints and photos at an AIMA office.
              </li>
              <li>
                <strong>Step 4: Final Approval & Card Issuance.</strong> After
                biometrics, there is a final review, after which your residency
                card is printed and mailed to your lawyer.
              </li>
            </ul>
            <p className="text-[#15364A] text-balance font-bold text-lg">
              The 5-Year Citizenship Clock starts NOW, from the date on this
              first card.
            </p>
          </section>

          <Quote>
            "Investors worry about AIMA's timeline. We tell them to focus on
            the *investment's* timeline. A PE fund is patient. It's built to
            wait with you, growing in value, while the bureaucracy runs its
            course." - André Bandeira, Explorer Investments
          </Quote>

          {/* =================================================================== */}
          {/* ================== SECÇÃO DE COMPARAÇÃO DO GOLDEN VISA ================ */}
          {/* =================================================================== */}
          <section
            id="golden-visa-options-compared"
            className="space-y-4 pt-6 border-t border-gray-200"
          >
            <h2 className="text-3xl font-bold flex items-center gap-2 text-[#002741]">
              <BarChart className="w-8 h-8 text-[#B4A77E]" />
              Why AIMA Delays Make Your Fund Choice Critical
            </h2>
            <p className="text-lg text-[#15364A] text-balance">
              This reality of AIMA delays makes your choice of fund *more*
              important, not less. A long wait demands a patient, stable
              investment.
            </p>
            <p className="text-[#15364A]">
              This is the financial difference between the paths available.
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
                    Explorer. This strategy is **perfectly aligned** with AIMA's
                    timeline.
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-[#15364A]">
                    <li>
                      <strong>Focus:</strong> Invests in{' '}
                      <strong>mature, established companies</strong> (like
                      Micronipol) with real assets and proven cash flows.
                    </li>
                    <li>
                      <strong>Strategy:</strong>{' '}
                      <strong>Patient, long-term (8-10 year)</strong> value
                      creation. The fund is not in a rush to sell while you
                      wait for AIMA.
                    </li>
                    <li>
                      <strong>Goal:</strong>{' '}
                      <strong>Capital preservation and appreciation</strong>.
                    </li>
                    <li>
                      <strong>Financial Outcome:</strong> You acquire an{' '}
                      <strong>asset</strong>. The *cost* of your Golden Visa
                      could become zero, or even negative (a profit).
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
                    2. The Venture Capital (VC) Route: The 'Timeline Mismatch'
                  </h3>
                  <p className="text-[#15364A] mt-1">
                    This is also a <strong>{facts.minInvestmentGV}</strong>{' '}
                    fund investment, but its timeline creates a{' '}
                    <strong>strategic risk</strong>.
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-[#15364A]">
                    <li>
                      <strong>Focus:</strong> Invests in{' '}
                      <strong>early-stage startups</strong>.
                    </li>
                    <li>
                      <strong>Strategy:</strong> High-risk, high-reward. Many VC
                      funds have shorter 3-5 year timelines, hoping for a quick
                      exit.
                    </li>
                    <li>
                      <strong>The Risk:</strong> The fund might fail or be
                      forced to sell *before* your 5-year citizenship clock is
                      even close to finishing, creating a reinvestment problem.
                    </li>
                    <li>
                      <strong>Financial Outcome:</strong> A{' '}
                      <strong>highly speculative asset</strong> with a timeline
                      mismatch.
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
                    contribution. Financially, it's the least efficient path.
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-[#15364A]">
                    <li>
                      <strong>Financial Outcome:</strong> A{' '}
                      <strong>100% guaranteed capital loss</strong>. The{' '}
                      {facts.minDonationGV} is an{' '}
                      <strong>expense (a "sunk cost")</strong>, not an asset.
                      The "cost" of your visa is exactly {facts.minDonationGV}.
                    </li>
                    <li>
                      <strong>The Logic:</strong> You are "paying" {facts.minDonationGV}{' '}
                      for the privilege of waiting for AIMA. The PE route lets
                      your capital *work for you* during that same wait.
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>

          {/* --- FIM DA SECÇÃO DE COMPARAÇÃO --- */}

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

export default AimaTimelineGuideArticle;