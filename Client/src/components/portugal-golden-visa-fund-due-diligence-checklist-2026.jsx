'use client';
import React, { useMemo, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CtaSection from './CtaSection';
import BlogArticles from './BlogArticles';
import {
  CheckSquare,
  AlertTriangle,
  Users,
  Briefcase,
  Euro,
  Scale,
  Clock,
  ShieldCheck,
  FileText,
  Link as LinkIcon,
  BookOpen,
} from 'lucide-react';

// ===================================================================
// Helper Functions (Should ideally be in a separate utils file)
// ===================================================================
const site = {
  origin:
    typeof window !== 'undefined'
      ? window.location.origin
      : 'https://goldenvisashub.com',
  brand: 'Golden Visa Explorer Investments',
  author: 'Explorer Investments Editorial Team',
  insightsPath: '/golden-visa-portugal-blog',
  canonical: '/golden-visa-fund-due-diligence-checklist-2026',
};

const ensureAbsoluteUrl = (url) => {
  if (!url || typeof url !== 'string') return '#';
  try {
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    const origin = site.origin.endsWith('/')
      ? site.origin.slice(0, -1)
      : site.origin;
    if (url.startsWith('/')) return `${origin}${url}`;
    const basePath = site.insightsPath.startsWith('/')
      ? site.insightsPath
      : `/${site.insightsPath}`;
    const cleanBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
    const finalUrl = `${origin}${cleanBasePath}/${url.replace(/^\//, '')}`;
    new URL(finalUrl);
    return finalUrl;
  } catch (e) {
    console.error('Error creating/validating absolute URL for:', url, e);
    return '#';
  }
};

// Smooth scroll helper
const scrollToId = (id) => {
  if (typeof window === 'undefined') return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// ===================================================================
// COMPONENTE DO ARTIGO CHECKLIST - versão enriquecida
// ===================================================================
const DueDiligenceChecklistArticle = () => {
  // RenderLink
  const renderLink = (href, text, isExternal = false) => {
    const finalHref = isExternal ? href : ensureAbsoluteUrl(href);
    if (!finalHref || finalHref === '#') {
      return (
        <span className="text-gray-500 text-sm">[{text} - link unavailable]</span>
      );
    }
    if (isExternal) {
      return (
        <a
          href={finalHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B4A77E] hover:underline text-sm inline-flex items-center gap-1"
        >
          {text} <LinkIcon size={12} />
        </a>
      );
    }
    return (
      <Link href={finalHref.replace(site.origin, '')} className="text-[#B4A77E] hover:underline text-sm">
        {text}
      </Link>
    );
  };

  // Checklist item
  const ChecklistItem = ({ question, children }) => (
    <li className="space-y-1 py-3 border-b border-gray-100 last:border-b-0">
      <p className="font-semibold text-lg text-[#002D3D]">{question}</p>
      <div className="text-base text-gray-700 pl-4 border-l-2 border-gray-300 leading-relaxed space-y-2 pt-1">
        {children}
      </div>
    </li>
  );

  // Table of contents structure
  const toc = useMemo(
    () => [
{ id: 'checklist-header', label: 'Introduction' },
{ id: 'why-dd-matters', label: 'Why It Matters' },
{ id: 'checklist-manager', label: 'Fund Manager' },
{ id: 'checklist-structure', label: 'Structure & Compliance' },
{ id: 'checklist-strategy', label: 'Strategy & Risk' },
{ id: 'checklist-fees', label: 'Fees & Returns' },
{ id: 'checklist-exit', label: 'Exit & Liquidity' },
{ id: 'red-flags', label: 'Red Flags' },
{ id: 'faq', label: 'FAQ' },
{ id: 'glossary', label: 'Glossary' },
{ id: 'checklist-conclusion', label: 'Conclusion' },
    ],
    []
  );

  const publishedDate = '2025-10-24';
  const updatedDate = '2025-10-24'; // ajuste sempre que editar
  const canonical = ensureAbsoluteUrl(site.canonical);

  // Add structured data (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      '15 Critical Questions: Portugal Golden Visa Fund Due Diligence Checklist (2026)',
    author: [{ '@type': 'Organization', name: site.author }],
    publisher: {
      '@type': 'Organization',
      name: site.brand,
    },
    datePublished: publishedDate,
    dateModified: updatedDate,
    mainEntityOfPage: canonical,
    inLanguage: 'en',
    articleSection: ['Investor Guide', 'Due Diligence', 'Portugal Golden Visa'],
    isAccessibleForFree: true,
  };

  // Share handler (Web Share API fallback)
  

  return (
    <>
      <Head>
        <title>
          15 Critical Questions: Portugal Golden Visa Fund Due Diligence Checklist
          (2026)
        </title>
        <meta name="description" content="Practical 15-question due diligence checklist for Portugal Golden Visa funds: CMVM compliance, strategy, fees, risk, liquidity, PFIC and more." />
        <link rel="canonical" href={canonical} />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Golden Visa Fund Due Diligence Checklist (2026)" />
        <meta
          property="og:description"
          content="As 15 perguntas críticas para investidores do Golden Visa em Portugal."
        />
        <meta property="og:url" content={canonical} />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-8">
          {/* Sidebar TOC */}
          <aside aria-label="Table of contents" className="hidden lg:block sticky top-24 h-max">
            <div className="rounded-xl border border-gray-200 p-4 shadow-sm">
              <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-3 flex items-center gap-2">
                <BookOpen size={16} /> Contents
              </div>
              <nav className="space-y-1">
                {toc.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToId(item.id)}
                    className="block w-full text-left text-sm py-1 px-2 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#B4A77E]"
                    aria-label={`Ir para ${item.label}`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              
            </div>
          </aside>

          {/* Main column */}
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Cabeçalho */}
            <motion.header
              id="checklist-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
                <CheckSquare size={16} /> Investor Guide
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
                15 Critical Questions: Your Portugal Golden Visa Fund Due Diligence
                Checklist (2026)
              </h1>
              <p className="text-base text-[#5a6f7b]">
                Published: October 24, 2025 • Updated: October 24, 2025 • By
                Explorer Investments Team
              </p>
              <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
                Choosing a qualifying investment fund is now the most critical step
                for Portugal's Golden Visa. Committing €500,000 requires careful
                consideration, but the fund landscape can be complex. How do you
                separate institutional-grade managers from riskier propositions?
              </p>
              <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
                This essential checklist provides <strong>15 critical questions</strong> to
                ask any fund manager before you invest. Use it to conduct thorough due
                diligence and make an informed decision aligned with your residency
                goals and risk tolerance.
              </p>
            </motion.header>

            {/* Why Due Diligence Matters */}
            <section
              id="why-dd-matters"
              className="space-y-4 bg-amber-50 p-6 border border-amber-300 rounded-md shadow-sm"
            >
              <h2 className="text-xl font-bold flex items-center gap-2 text-amber-900">
                <AlertTriangle className="w-6 h-6 text-amber-600" /> Why This
                Checklist is Non-Negotiable
              </h2>
              <p className="text-amber-800">
                Investing €500k is significant. The wrong fund choice can lead to
                application rejection, unexpected taxes (especially for US persons),
                lower-than-expected returns, or difficulty exiting your investment
                after the required holding period. Proper due diligence mitigates these
                risks.
              </p>
              <p className="text-amber-700 text-sm">
                Remember: The Golden Visa requires maintaining your investment for at
                least 5 years. Choose wisely. See{' '}
                <Link
                  href={ensureAbsoluteUrl('/avoid-expensive-golden-visa-mistakes-2025')}
                  className="font-semibold underline hover:text-amber-900"
                >
                  common mistakes to avoid
                </Link>
                .
              </p>
            </section>

            {/* --- CHECKLIST SECTION --- */}
            <div className="space-y-8">
              {/* 1. The Fund Manager */}
              <section id="checklist-manager">
                <h2 className="text-2xl font-bold text-[#002D3D] mb-4 pb-2 border-b border-gray-300 flex items-center gap-2">
                  <Users size={20} /> 1. About the Fund Manager
                </h2>
                <ul className="space-y-4 text-base">
                  <ChecklistItem question="1. What is the Fund Manager's track record and experience?">
                    <p>
                      Look for established managers with years (ideally 10+) of
                      experience specifically in Portugal and in the fund's asset class
                      (e.g., Private Equity, Venture Capital). Ask for audited track
                      records of previous funds, including successful exits (IRR, CoC).
                      Explorer Investments, for instance, has over 20 years in the
                      Portuguese PE market.
                    </p>
                  </ChecklistItem>
                  <ChecklistItem question="2. Is the Fund Manager regulated by CMVM?">
                    <p>
                      This is MANDATORY for Golden Visa eligibility. Ask for the CMVM
                      registration number and verify it directly on the{' '}
                      {renderLink('https://www.cmvm.pt', 'CMVM website', true)}. Lack of
                      regulation is an immediate disqualifier.
                    </p>
                  </ChecklistItem>
                  <ChecklistItem question="3. Who are the key people on the investment team?">
                    <p>
                      Understand their backgrounds, specific expertise in the target
                      sectors, and how long they've worked together. Stability and
                      relevant, hands-on experience in the team are crucial for executing
                      the strategy.
                    </p>
                  </ChecklistItem>
                  <ChecklistItem question="4. Does the manager invest their own capital in the fund (GP Commitment)?">
                    <p>
                      A significant 'General Partner' (GP) commitment (typically 1-5% of
                      fund size) demonstrates alignment of interest ('skin in the game')
                      and the manager's own confidence in the strategy. Ask for the
                      percentage and confirmation it's cash, not deferred fees.
                    </p>
                  </ChecklistItem>
                </ul>
              </section>

              {/* 2. Fund Structure & Compliance */}
              <section id="checklist-structure">
                <h2 className="text-2xl font-bold text-[#002D3D] mb-4 pb-2 border-b border-gray-300 flex items-center gap-2">
                  <Scale size={20} /> 2. Fund Structure &amp; Compliance
                </h2>
                <ul className="space-y-4 text-base">
                  <ChecklistItem question="5. Is the fund specifically structured to comply with current Golden Visa (ARI) rules?">
                    <p>
                      Verify the fund's official documents (Regulation/PPM/Prospectus)
                      explicitly state its eligibility and compliance mechanisms. Key
                      points: minimum 60% investment in Portuguese-domiciled commercial
                      entities, appropriate fund maturity (e.g., 8-10 years), and
                      confirmed CMVM regulation.
                    </p>
                    <p>
                      {renderLink(
                        '/why-smart-investors-choose-cmvm-regulated-funds-portugal-golden-visa-2025',
                        '[Learn more about CMVM funds]'
                      )}
                    </p>
                  </ChecklistItem>
                  <ChecklistItem question="6. What is the fund's legal structure and domicile?">
                    <p>
                      Most qualifying funds are Portuguese FCRs (Fundos de Capital de
                      Risco) or sometimes SCRs (Sociedades de Capital de Risco),
                      ensuring they meet local investment and regulatory requirements.
                    </p>
                  </ChecklistItem>
                  <ChecklistItem question="7. For US Investors: Does the fund provide annual PFIC statements for QEF election?">
                    <p>
                      This is CRITICAL for US tax compliance. Failure to get these
                      detailed statements annually can lead to punitive US tax rates
                      under PFIC rules. Confirm the manager's experience with US
                      investors and their commitment to providing timely, accurate PFIC
                      statements allowing a QEF election. Explorer Investments provides
                      this standardly.
                    </p>
                    <p>
                      {renderLink(
                        '/portugal-golden-visa-tax-strategy-funds-nhr-fatca-pfic-2025',
                        '[Learn about PFIC/FATCA]'
                      )}
                    </p>
                  </ChecklistItem>
                  <ChecklistItem question="8. Who is the custodian bank and auditor?">
                    <p>
                      Assets MUST be held by a reputable, independent custodian bank
                      (confirm identity). The fund MUST be audited annually by a
                      recognized, independent auditing firm (e.g., Big Four). This
                      ensures segregation of assets and external verification of
                      financials.
                    </p>
                  </ChecklistItem>
                </ul>
              </section>

              {/* 3. Investment Strategy */}
              <section id="checklist-strategy">
                <h2 className="text-2xl font-bold text-[#002D3D] mb-4 pb-2 border-b border-gray-300 flex items-center gap-2">
                  <Briefcase size={20} /> 3. Investment Strategy & Risk
                </h2>
                <ul className="space-y-4 text-base">
                  <ChecklistItem question="9. What is the fund's specific investment strategy, target sectors, and deal sourcing process?">
                    <p>
                      Understand precisely where and how your money will be invested
                      (e.g., buyouts of mature SMEs via PE, seed funding for tech
                      startups via VC, specific sectors like renewable energy,
                      hospitality). How does the manager find investment opportunities?
                      Assess if the strategy aligns with your risk tolerance. PE
                      generally targets established businesses with cash flows, offering
                      potentially more stability than early-stage VC.
                    </p>
                    <p>
                      {renderLink(
                        '/explorer-investments-portugal-private-equity-leader-golden-visa-2025',
                        "[Explorer's PE Approach]"
                      )}
                    </p>
                  </ChecklistItem>
                  <ChecklistItem question="10. What are the main risks associated with this fund?">
                    <p>
                      All investments carry risk. Ask for a clear explanation beyond the
                      boilerplate text in the PPM. Key risks include: market downturns
                      affecting exits, execution risk (manager's ability to improve
                      companies), illiquidity risk (inability to sell your units easily),
                      and potential regulatory changes. The manager should articulate how
                      they mitigate these risks.
                    </p>
                  </ChecklistItem>
                  <ChecklistItem question="11. How does the fund value its investments and report performance?">
                    <p>
                      Understand the valuation methodology (e.g., IPEV guidelines are
                      standard for PE/VC) and reporting frequency (e.g., quarterly). How
                      are valuations audited? Consistent, conservative valuation is key
                      for accurate performance tracking.
                    </p>
                  </ChecklistItem>
                </ul>
              </section>

              {/* 4. Fees & Costs */}
              <section id="checklist-fees">
                <h2 className="text-2xl font-bold text-[#002D3D] mb-4 pb-2 border-b border-gray-300 flex items-center gap-2">
                  <Euro size={20} /> 4. Fees, Costs &amp; Returns
                </h2>
                <ul className="space-y-4 text-base">
                  <ChecklistItem question="12. What are ALL the fees involved (management, performance, subscription, admin, legal setup, exit)?">
                    <p>
                      Demand a complete, transparent breakdown. Common fees: annual
                      management fee (e.g., 1.5-2.5% on committed or invested capital),
                      performance fee/carried interest (e.g., 20% of profits above a
                      hurdle rate, typically 6-8%), potential one-off subscription fees,
                      and ongoing fund administration costs. Understand the total expense
                      ratio and how fees impact your net return.
                    </p>
                  </ChecklistItem>
                  <ChecklistItem question="13. What is the target return (IRR/CoC), is it net of fees, and how realistic is it?">
                    <p>
                      Be highly skeptical of guaranteed or overly high projected returns,
                      especially in PE/VC. Ask for the basis of the projection
                      (comparable deals, past performance - audited). Understand the
                      difference between Gross and Net IRR/CoC (Cash-on-Cash multiple).
                      Focus on realistic, achievable net returns based on the strategy
                      and manager's proven ability.
                    </p>
                  </ChecklistItem>
                </ul>
              </section>

              {/* 5. Exit & Liquidity */}
              <section id="checklist-exit">
                <h2 className="text-2xl font-bold text-[#002D3D] mb-4 pb-2 border-b border-gray-300 flex items-center gap-2">
                  <Clock size={20} /> 5. Exit &amp; Liquidity
                </h2>
                <ul className="space-y-4 text-base">
                  <ChecklistItem question="14. What is the fund's term (lifespan) and expected exit timeline for underlying investments?">
                    <p>
                      Ensure the fund's legal term (e.g., 8 years + potential
                      extensions) provides ample buffer beyond your minimum 5-year
                      Golden Visa holding period. Understand the manager's typical
                      holding period for portfolio companies and their strategy for
                      realizing value (e.g., trade sale, IPO, secondary buyout).
                    </p>
                  </ChecklistItem>
                  <ChecklistItem question="15. What are my specific options for exiting my investment after the required 5 years?">
                    <p>
                      PE/VC funds are illiquid. Clarify the exact mechanisms: Are there
                      specific redemption windows defined in the regulation? Is there an
                      established secondary market for fund units (often difficult)? What
                      are the manager's obligations regarding returning capital upon fund
                      termination? Understand potential delays and costs associated with
                      exit.
                    </p>
                  </ChecklistItem>
                </ul>
              </section>
            </div>

            {/* Red Flags */}
            <section id="red-flags" className="space-y-4 pt-6 mt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold flex items-center gap-2 text-red-700">
                <AlertTriangle className="w-6 h-6 text-red-600" /> Key Red Flags to
                Watch For
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-red-800 text-sm md:text-base">
                <li>Fund manager is NOT clearly registered and supervised by CMVM.</li>
                <li>Promises of "guaranteed" high returns (e.g., &gt;10% p.a.) in PE/VC
                  context.</li>
                <li>Complex, hidden, or unusually high fee structures.</li>
                <li>
                  Manager lacks a verifiable track record (audited results) in Portugal
                  or the specific strategy.
                </li>
                <li>
                  Aggressive sales tactics focusing only on the visa, downplaying
                  investment risks.
                </li>
                <li>
                  Vague answers or lack of documentation regarding US tax compliance
                  (PFIC/FATCA).
                </li>
                <li>Fund term is too short (e.g., exactly 5 years with no extensions).</li>
                <li>Lack of a reputable, independent custodian bank or auditor.</li>
              </ul>
            </section>

            {/* FAQ */}
            <section id="faq" className="pt-8 border-t border-gray-200 mt-10">
              <h2 className="text-2xl font-bold text-[#002D3D] mb-4 flex items-center gap-2">
                <ShieldCheck size={20} /> Frequently Asked Questions
              </h2>
              <details className="rounded border p-4 mb-3 bg-white/60">
                <summary className="font-semibold cursor-pointer">Does a CMVM-regulated fund automatically qualify for the Golden Visa?</summary>
                <p className="mt-2 text-gray-700">
                  No. CMVM regulation is necessary but not sufficient. The fund must also
                  comply with the Golden Visa investment criteria (e.g., eligible assets
                  in Portugal and minimum investment amount) and provide adequate
                  documentation for SEF/AIMA.
                </p>
              </details>
              <details className="rounded border p-4 mb-3 bg-white/60">
                <summary className="font-semibold cursor-pointer">Can I redeem my units after 5 years?</summary>
                <p className="mt-2 text-gray-700">
                  Not typically on-demand. Liquidity depends on the fund terms and exit
                  of underlying assets. Many funds distribute proceeds as exits occur or
                  upon termination.
                </p>
              </details>
              <details className="rounded border p-4 mb-3 bg-white/60">
                <summary className="font-semibold cursor-pointer">What documents should I request before subscribing?</summary>
                <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                  <li>Fund Regulation/PPM/Prospectus and Subscription Agreement</li>
                  <li>CMVM registration details and custodian/auditor confirmations</li>
                  <li>Fee schedule and performance reporting sample</li>
                  <li>Risk factors &amp; conflicts of interest policy</li>
                  <li>For US persons: Sample PFIC/QEF package</li>
                </ul>
              </details>
            </section>

            {/* Glossary */}
            <section id="glossary" className="pt-8 border-t border-gray-200 mt-10">
              <h2 className="text-2xl font-bold text-[#002D3D] mb-2 flex items-center gap-2">
                <FileText size={20} /> Glossary (quick)
              </h2>
              <dl className="grid sm:grid-cols-2 gap-4">
                <div>
                  <dt className="font-semibold">IRR</dt>
                  <dd className="text-gray-700">Internal Rate of Return, the annualized discount rate that sets inflows equal to outflows.</dd>
                </div>
                <div>
                  <dt className="font-semibold">CoC</dt>
                  <dd className="text-gray-700">Cash-on-Cash multiple, gross multiple on invested capital.</dd>
                </div>
                <div>
                  <dt className="font-semibold">PFIC</dt>
                  <dd className="text-gray-700">Passive Foreign Investment Company under U.S. tax rules.</dd>
                </div>
                <div>
                  <dt className="font-semibold">QEF</dt>
                  <dd className="text-gray-700">Qualified Electing Fund election for PFIC reporting.</dd>
                </div>
                <div>
                  <dt className="font-semibold">FCR</dt>
                  <dd className="text-gray-700">Portuguese Venture Capital Fund structure.</dd>
                </div>
              </dl>
            </section>

            {/* Conclusão */}
            <section id="checklist-conclusion" className="pt-8 border-t border-gray-200 mt-10">
              <h2 className="text-2xl font-bold text-[#002D3D] mb-4">Conclusion: Invest with Confidence</h2>
              <p className="text-[#15364A] text-balance mb-4 leading-relaxed">
                Choosing the right Golden Visa fund requires more than just meeting the
                minimum investment. It demands careful scrutiny. By using this checklist
                and asking detailed questions, you can significantly reduce risk and
                select a partner aligned with both your residency and financial
                objectives.
              </p>
              <p className="text-[#15364A] text-balance font-semibold leading-relaxed">
                At Explorer Investments, we believe informed investors make the best
                partners. We encourage thorough due diligence and are fully prepared to
                answer these questions transparently, backed by our institutional
                framework, CMVM regulation, and over two decades of audited performance
                in the Portuguese market.
              </p>

              
            </section>

            {/* Info legal curta */}
            <p className="text-xs text-gray-500 mt-8">
              Disclaimer: This content is informational and does not constitute legal or tax advice. Please consult independent advisors.
            </p>

            {/* CTA Section */}
            <CtaSection />
          </div>
        </div>
      </section>

      {/* Artigos Relacionados */}
      <BlogArticles />

      <style jsx global>{`
        @media print {
          header, nav, footer, aside { display: none !important; }
          a::after { content: " (" attr(href) ")"; font-size: 10px; }
          .no-print { display: none !important; }
          body { color: #000; }
        }
      `}</style>
    </>
  );
};

export default DueDiligenceChecklistArticle;
