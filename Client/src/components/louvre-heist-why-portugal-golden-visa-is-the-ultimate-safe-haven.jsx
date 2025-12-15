'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CtaSection from './CtaSection'; // Ajuste o caminho
import BlogArticles from './BlogArticles'; // Ajuste o caminho
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faShieldHalved, // Ícone de Segurança
} from '@fortawesome/free-solid-svg-icons';
import {
  TrendingUp,
  FileText,
  Briefcase,
  Target,
  Globe, // Para "Global Peace Index"
  Lock, // Para "Asset Security"
  Home, // Para "Personal Safety"
} from 'lucide-react';

// --- DADOS CENTRAIS DO ARTIGO ---
const facts = {
  location: 'Paris, France',
  event: 'Daylight robbery at the Louvre Museum',
  stolen: 'Napoleon-era Crown Jewels',
  portugalRanking: '7th', // Global Peace Index 2024
  investmentType: 'CMVM-Regulated Private Equity Fund',
};
// --------------------------------------------------------

const Quote = ({ children }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#0f2c3a] bg-[#FFFCF3] py-3 px-4 rounded-md my-4 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

// ===================================================================
// NOVO COMPONENTE DO ARTIGO (Análise do Roubo do Louvre)
// ===================================================================
const LouvreHeistAnalysisArticle = () => {
  const router = useRouter();
  const scrollTo = (id) => {
    // Rola para o formulário
    const homeUrl = new URL(window.location.origin);
    homeUrl.hash = id;
    if (window.location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      router.push(homeUrl.href);
    }
  };

  return (
    <>
      {/* Conteúdo Principal do Artigo */}
      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Cabeçalho */}
          <motion.header
            id="announcement"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2">
              Market Analysis
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              Louvre Heist 2025: A Wake-Up Call. Why Portugal's Security is
              the Golden Visa's True Value.
            </h1>
            <p className="text-base text-[#5a6f7b]">
              Published: October 20, 2025
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              LISBON, PORTUGAL - The world woke Sunday to shocking news: a
              brazen, 7-minute daylight robbery at the {facts.location}.
              Thieves targeted and stole "priceless" Napoleon-era jewels,
              exposing a frightening vulnerability at the heart of one of
              Europe's most iconic cities.
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              For high-net-worth individuals, this event is more than a news
              story; it's a symbol of rising instability. It forces a critical
              question: "In a world of increasing uncertainty, where are my
              family and my assets *truly* safe?"
            </p>
          </motion.header>

          {/* Imagem Principal */}
          <motion.figure
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="my-8"
          >
            <Image
              src="/assets/images/blog/louvre-heist-portugal-safe-haven.jpg" // A sua nova imagem
              alt="Contraste entre a segurança em Portugal e o roubo no Louvre"
              width={1200}
              height={630}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              priority
            />
          </motion.figure>

          {/* Secção 1: O "Porquê" de Portugal */}
          <section
            id="the-portugal-safe-haven"
            className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF] shadow-sm"
          >
            <h2 className="text-xl font-bold flex items-center gap-2 text-[#002741]">
              <Globe className="w-6 h-6 text-[#B4A77E]" />
              The "Safe Haven" Metric: Portugal vs. The World
            </h2>
            <p className="text-[#15364A]">
              This is precisely where the Portuguese Golden Visa finds its
              true, modern value. While headlines focus on Paris, Portugal
              consistently proves to be one of the most stable and secure
              nations on earth.
            </p>
            <p className="text-lg font-semibold text-[#002741] text-center my-4">
              Portugal was ranked the{' '}
              <strong className="text-[#B4A77E] text-xl">
                {facts.portugalRanking}th Most Peaceful Country
              </strong>{' '}
              in the World
              <br />
              <span className="text-sm font-normal text-[#5a6f7b]">
                (Global Peace Index, 2024)
              </span>
            </p>
            <p className="text-[#15364A]">
              This isn't just a statistic; it's a lifestyle. It's the peace
              of mind that high-net-worth families crave. The Golden Visa is
              no longer just a "Plan B"; it's an upgrade to a more secure and
              stable primary plan.
            </p>
          </section>

          {/* Secção 2: A Dupla Segurança */}
          <section id="the-dual-security" className="space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2 text-[#002741]">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="w-6 h-6 text-[#B4A77E]"
              />
              The Dual Security: Protecting Your Family & Your Assets
            </h2>
            <p className="text-[#15364A] text-balance">
              The Louvre heist highlights two distinct vulnerabilities that the
              Portuguese Golden Visa, when structured correctly, is uniquely
              positioned to solve.
            </p>
            <ul className="list-none pl-2 space-y-4 mt-4 text-[#15364A]">
              <li className="flex items-start gap-3">
                <Home className="w-5 h-5 text-[#B4A77E] mt-1 flex-shrink-0" />
                <div>
                  <strong className="font-semibold text-[#002741]">
                    1. Personal Security (The Haven)
                  </strong>
                  <br />
                  Portugal offers a high-quality, low-conflict environment.
                  This provides a safe harbor for your family, far from the
                  social tensions and rising crime rates seen in other major
                  metropolitan hubs.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#B4A77E] mt-1 flex-shrink-0" />
                <div>
                  <strong className="font-semibold text-[#002741]">
                    2. Asset Security (The Fund)
                  </strong>
                  <br />
                  The thieves stole *physical* assets. The modern Golden Visa
                  has moved beyond real estate to{' '}
                  <strong>intangible, regulated assets</strong>. You cannot
                  steal a {facts.investmentType} unit on a scooter.
                </div>
              </li>
            </ul>
          </section>

          {/* Secção 3: O Investimento Inteligente e Seguro */}
          <section id="the-smart-investment" className="space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2 text-[#002741]">
              <Briefcase className="w-6 h-6 text-[#B4A77E]" />
              Why a PE Fund is the Most Secure Investment
            </h2>
            <p className="text-[#15364A]">
              In an unstable world, your investment must be as secure as your
              location. A Private Equity (PE) fund from an established manager
              is the superior choice for three reasons:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[#15364A]">
              <li>
                <strong className="font-semibold text-[#002741]">
                  It's Regulated:
                </strong>{' '}
                Unlike physical assets, PE Funds are strictly regulated by the
                CMVM (Portugal's SEC) and held in a major custodian bank
                (like BNY Mellon or Banco de Portugal). Your ownership is
                registered and protected.
              </li>
              <li>
                <strong className="font-semibold text-[#002741]">
                  It's Managed by Professionals:
                </strong>{' '}
                You are investing alongside an institutional team with a 20+
                year track record. Explorer Investments doesn't just hold
                assets; we actively manage and grow them, insulating them
                from market shocks.
              </li>
              <li>
                <strong className="font-semibold text-[#002741]">
                  It's Intangible:
                </strong>{' '}
                Your €500,000 is not a property that can be squatted or jewels
                that can be stolen. It is a secure, registered financial
                instrument.
              </li>
            </ul>

            <Quote>
              "The Louvre heist is a wake-up call. Investors are realizing
              that 'security' has two meanings: personal safety and asset
              safety. Portugal offers both. The Golden Visa is the key, and a
              regulated fund is the vault."
              <br />
              <strong className="text-sm not-italic">
                - André Bandeira, Head of Investor Relations
              </strong>
            </Quote>
          </section>

          {/* Secção de CTA */}
          <CtaSection />

          {/* Secção Sobre a Explorer */}
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
              approximately €1.8B+ under management. We provide Golden Visa
              investors with access to the same institutional-grade,
              CMVM-regulated funds as our top global clients.
            </p>
            <div className="text-sm text-[#15364A]">
              <p className="font-semibold">Investor Contact:</p>
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

      {/* Artigos Relacionados */}
      <BlogArticles />
    </>
  );
};

export default LouvreHeistAnalysisArticle;