import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';
import {
  AlertTriangle,
  ShieldCheck,
  DollarSign,
  FileText,
  UserCheck,
  BarChart,
  Briefcase,
  Rocket,
  Gift,
} from 'lucide-react';
import Image from 'next/image';  

// ===================================================================
// METADATA (SEO)
// ===================================================================
const SLUG = 'golden-visa-fund-pitfalls-red-flags-2026';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/gv-fund-pitfalls.jpg';
const PUBLISHED = '2025-10-27T09:00:00+01:00';
const MODIFIED = '2025-10-27T09:00:00+01:00';

export const metadata = {
  title: '3 Critical Pitfalls When Choosing a Portugal Golden Visa Fund (2026)',
  description:
    'Investing €500k in a Golden Visa fund? Avoid these 3 critical red flags. A guide on manager reputation (CMVM), hidden fees, and US tax compliance (PFIC).',
  keywords:
    'portugal golden visa fund red flags, golden visa pitfalls, choose golden visa fund, avoid golden visa fund mistakes, golden visa fund due diligence, explorer investments',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large',
  openGraph: {
    title: "Don't Invest Blind: 3 Red Flags in Portugal's Golden Visa Funds",
    description:
      'The €500k Golden Visa fund market is complex. Learn the 3 critical pitfalls (vague strategy, high fees, poor compliance) before you invest.',
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'Golden Visa',
        'Portugal',
        'Investment Funds',
        'Due Diligence',
        'Red Flags',
        'Pitfalls',
        'CMVM',
        'PFIC',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title: '3 Critical Golden Visa Fund Pitfalls to Avoid in 2026',
    description:
      'Avoid costly mistakes. Here are the 3 red flags to watch for when choosing your €500k Portugal Golden Visa fund. A must-read guide.',
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: CANONICAL_URL,
  },
};

// ===================================================================
// JSON-LD SCHEMAS
// ===================================================================
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  mainEntityOfPage: CANONICAL_URL,
  headline: metadata.title,
  description: metadata.description,
  image: [OG_IMAGE],
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: { '@type': 'Organization', name: 'Explorer Investments' },
  publisher: {
    '@type': 'Organization',
    name: 'Explorer Investments',
    logo: {
      '@type': 'ImageObject',
      url: 'https://goldenvisashub.com/logo.png',
    },
  },
};

const schemaBreadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://goldenvisashub.com/' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Insights',
      item: 'https://goldenvisashub.com/golden-visa-portugal-blog',
    },
    { '@type': 'ListItem', position: 3, name: '3 Golden Visa Fund Pitfalls', item: CANONICAL_URL },
  ],
};

// Helper (citação)
const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#0f2c3a] bg-[#FFFCF3] py-3 px-4 rounded-md my-6 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

// ===================================================================
// PAGE COMPONENT (Server Component)
// ===================================================================
export default function GoldenVisaPitfallsPage() {
  return (
    <>
      {/* JSON-LD */}
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <Script id="ld-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }} />

      <Header />

      {/* Main Article Content */}
      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Header (simples, sem animação) */}
          <header className="text-left">
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle size={16} /> Investor Warning
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              3 Critical Pitfalls to Avoid When Choosing Your €500k Golden Visa Fund (2026)
            </h1>
            <p className="text-lg text-[#15364A] font-light text-balance">
              With real estate no longer an option, the fund market is booming. But not all funds are created equal.
              Making the wrong €500,000 choice can be a costly mistake. Here are the 3 red flags to look for.
            </p>
          </header>
     <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src={OG_IMAGE}
              alt="Three major red flags to avoid when choosing a Portugal Golden Visa fund"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-2 text-xs sm:text-sm text-white/95 bg-gradient-to-t from-black/60 to-transparent">
              Avoid vague strategies, hidden fees, and PFIC non-compliance when selecting a Golden Visa fund.
            </figcaption>
          </figure>
          {/* Pitfall 1 */}
          <section id="pitfall1" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] mb-2 pb-2 border-b border-gray-300 flex items-center gap-2">
              <AlertTriangle size={20} className="text-red-600" /> Pitfall 1: The “Black Box” Strategy & Unproven Managers
            </h2>
            <p className="text-lg text-[#15364A]">
              The market is filled with new fund managers who have little to no track record in private equity or
              venture capital. Their strategies are often vague, promising high returns with no clear investment thesis.
            </p>
            <p className="text-[#15364A]">
              <strong>The Red Flag:</strong> The fund manager can’t show you a proven track record (past funds,
              successful exits) or isn’t fully regulated by Portugal’s securities commission (CMVM). Worse, their
              strategy might be “disguised real estate”, which AIMA may reject.
            </p>
            <div className="bg-green-50 p-4 border border-green-200 rounded-md text-green-900">
              <strong>How to Avoid It:</strong> Ask for the manager’s CMVM registration number. Ask for the fund’s
              Private Placement Memorandum (PPM) and look for a clear, non-real-estate strategy. Choose an established
              manager (like Explorer Investments, with €1.8B under management) over a brand-new entity.
            </div>
          </section>

          {/* Pitfall 2 */}
          <section id="pitfall2" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] mb-2 pb-2 border-b border-gray-300 flex items-center gap-2">
              <DollarSign size={20} className="text-red-600" /> Pitfall 2: The Hidden Fee Trap
            </h2>
            <p className="text-lg text-[#15364A]">
              Many funds attract investors with low “management fees” but hide significant “subscription fees”, “setup
              fees”, or “performance fees” with a low “hurdle rate”.
            </p>
            <p className="text-[#15364A]">
              <strong>The Red Flag:</strong> The fee structure is complex and hard to understand. A high, one-time setup
              fee (e.g., &gt;5%) means you’re losing a large chunk of your €500k investment on day one.
            </p>
            <div className="bg-green-50 p-4 border border-green-200 rounded-md text-green-900">
              <strong>How to Avoid It:</strong> Demand a simple, transparent fee schedule. Ask for a simulation of
              returns <em>after all fees</em>. Look for clear, fair fees and managers who co-invest (“skin in the game”).
            </div>
          </section>

          {/* Pitfall 3 */}
          <section id="pitfall3" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] mb-2 pb-2 border-b border-gray-300 flex items-center gap-2">
              <ShieldCheck size={20} className="text-red-600" /> Pitfall 3: Ignoring US Tax Compliance (The PFIC Nightmare)
            </h2>
            <p className="text-lg text-[#15364A]">
              This is the most critical and overlooked pitfall for American investors. Any foreign fund is a <strong>PFIC</strong>{' '}
              (Passive Foreign Investment Company) under US tax law.
            </p>
            <p className="text-[#15364A]">
              <strong>The Red Flag:</strong> You ask the manager “Do you provide PFIC Annual Information Statements for
              the QEF election?” and they don’t know. Without QEF, profits can be taxed at the highest ordinary income
              rates plus interest penalties.
            </p>
            <div className="bg-green-50 p-4 border border-green-200 rounded-md text-green-900">
              <strong>How to Avoid It:</strong> <strong>Only</strong> invest in a fund that contractually agrees to
              provide the annual PFIC Information Statement (QEF). (Explorer Investments provides this as standard for
              US clients).
            </div>
          </section>

          {/* Two clocks + phases */}
          <section id="two-clocks" className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF] shadow-sm">
            <h2 className="text-xl font-bold flex items-center gap-2 text-[#002741]">
              <FileText className="w-6 h-6 text-[#B4A77E]" />
              The “Two-Clock” System: Investment vs. Citizenship
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li>
                <strong>Clock 1 - Investment:</strong> starts when your €500,000 hits the fund (8-10 year lifecycle).
              </li>
              <li>
                <strong>Clock 2 - Citizenship (5 years):</strong> starts on the date your first residency card is issued
                (after biometrics).
              </li>
            </ul>
            <p className="text-[#15364A] font-semibold">
              AIMA delays don’t “eat” your 5-year clock - it hasn’t started yet.
            </p>
          </section>

          <section id="phase-one" className="space-y-3">
            <h2 className="text-2xl font-bold text-[#002741] flex items-center gap-2">
              <FileText className="w-7 h-7 text-[#B4A77E]" />
              Phase 1: Your 7-Day Sprint (What You Control)
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-[#15364A]">
              <li><strong>Days 1-3:</strong> NIF & bank account (remote via lawyer).</li>
              <li><strong>Days 4-6:</strong> Fund subscription (PPM/KID + KYC/AML).</li>
              <li><strong>Day 7:</strong> Receive the official <em>Declaração</em> from the Custodian Bank & Manager.</li>
            </ol>
          </section>

          <section id="phase-two" className="space-y-3">
            <h2 className="text-2xl font-bold text-[#002741] flex items-center gap-2">
              <UserCheck className="w-7 h-7 text-[#B4A77E]" />
              Phase 2: The AIMA Marathon (What They Control)
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li>Application upload → Pre-approval → Biometrics → Final approval → Card issued.</li>
            </ul>
            <p className="text-[#15364A] font-semibold">Your 5-year citizenship clock starts on the card date.</p>
          </section>

          <Quote>
            Investors worry about AIMA timelines. Focus on the investment’s timeline. A good PE fund is patient - it grows while the bureaucracy runs its course.
          </Quote>

          {/* Comparação de rotas */}
          <section id="golden-visa-options-compared" className="space-y-5 pt-6 border-t border-gray-200">
            <h2 className="text-3xl font-bold flex items-center gap-2 text-[#002741]">
              <BarChart className="w-8 h-8 text-[#B4A77E]" />
              Why AIMA Delays Make Your Fund Choice Critical
            </h2>

            <ul className="list-none pl-2 space-y-6 mt-4">
              {/* Private Equity */}
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Briefcase className="w-10 h-10 text-[#B4A77E]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#002741]">1) Private Equity (PE): The Smart Asset</h3>
                  <p className="text-[#15364A] mt-1">€500k in a CMVM-regulated fund (ex.: Explorer). Alinha com o timeline da AIMA.</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-[#15364A]">
                    <li>Foco em empresas maduras com cash flows.</li>
                    <li>Estratégia paciente (8-10 anos); sem pressão de venda.</li>
                    <li>Preservação/apreciação de capital; o “custo” pode tornar-se zero (ou lucro).</li>
                  </ul>
                </div>
              </li>

              {/* Venture Capital */}
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Rocket className="w-10 h-10 text-[#B4A77E]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#002741]">2) Venture Capital (VC): Timeline Mismatch</h3>
                  <p className="text-[#15364A] mt-1">Risco/retorno alto; muitas vezes horizonte 3-5 anos.</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-[#15364A]">
                    <li>Possível saída antes do teu clock de 5 anos - reinvestment risk.</li>
                    <li>Asset mais especulativo.</li>
                  </ul>
                </div>
              </li>

              {/* Donation */}
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Gift className="w-10 h-10 text-[#B4A77E]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#002741]">3) Donation: Sunk Cost</h3>
                  <p className="text-[#15364A] mt-1">€250k doação: custo garantido, zero asset.</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-[#15364A]">
                    <li>Estás a “pagar” para esperar pela AIMA; no PE o capital trabalha por ti.</li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>

          {/* CTA */}
          <CtaSection />

          {/* About Explorer */}
          <section id="about-explorer" className="space-y-3 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-[#002741]">About Explorer Investments</h3>
            <p className="text-sm text-[#15364A]">
              Founded in 2003, Explorer Investments is Portugal&apos;s leading independent private equity management
              company, with approximately €1.8B+ under management. Fully regulated by the CMVM.
            </p>
            <div className="text-sm text-[#15364A]">
              <p className="font-semibold">Press/Investor Contact:</p>
              <p>André Bandeira - Investor Relations</p>
              <p>
                Email:{' '}
                <a href="mailto:ab@explorerinvestments.com" className="text-[#B4A77E] hover:underline">
                  ab@explorerinvestments.com
                </a>
              </p>
              <p>
                Website:{' '}
                <Link href="/" className="text-[#B4A77E] hover:underline">
                  https://goldenvisashub.com/
                </Link>
              </p>
            </div>
          </section>
        </div>
      </section>

      {/* Related articles */}
      <BlogPreviewGridFromXML currentSlug={SLUG} />

      <Footer />
    </>
  );
}
