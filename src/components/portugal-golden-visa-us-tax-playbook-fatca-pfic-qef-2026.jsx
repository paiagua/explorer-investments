'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
// Ensure these paths are correct relative to this file
import CtaSection from './CtaSection';
import BlogArticles from './BlogArticles';
import { DollarSign, AlertTriangle, ShieldCheck, FileText, CheckCircle, HelpCircle, Link as LinkIcon } from 'lucide-react'; // Relevant Icons

// ===================================================================
// Helper Functions (Same as before)
// ===================================================================
const site = {
  origin: typeof window !== 'undefined' ? window.location.origin : "https://goldenvisashub.com",
  brand: "Golden Visa Explorer Investments",
  author: "Explorer Investments US Compliance Team", // Specific author/team
  insightsPath: "/golden-visa-portugal-blog",
};

const ensureAbsoluteUrl = (url) => {
    // ... (ensureAbsoluteUrl function as defined previously) ...
    if (!url || typeof url !== 'string') return '#';
    try {
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        const origin = site.origin.endsWith('/') ? site.origin.slice(0, -1) : site.origin;
        if (url.startsWith('/')) return `${origin}${url}`;
        const basePath = site.insightsPath.startsWith('/') ? site.insightsPath : `/${site.insightsPath}`;
        const cleanBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
        const finalUrl = `${origin}${cleanBasePath}/${url.replace(/^\//, '')}`;
        new URL(finalUrl); // Basic validation
        return finalUrl;
    } catch (e) { console.error("Error creating/validating absolute URL for:", url, e); return '#'; }
};

// Internal Link helper using Next.js Link
const InternalLink = ({ href, children, className = "" }) => {
    const relativeHref = ensureAbsoluteUrl(href).replace(site.origin, '') || '#';
    return (
        <Link href={relativeHref} className={`text-[#B4A77E] hover:underline text-sm ${className}`}>
            {children}
        </Link>
    );
};

// Quote Component
const Quote = ({ children, author }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 my-6 italic text-[#0f2c3a] bg-[#FFFCF3] py-4 px-5 rounded-md shadow-sm">
    <p className="mb-2">“{children}”</p>
    {author && <footer className="text-sm not-italic text-gray-600">- {author}</footer>}
  </blockquote>
);


// ===================================================================
// COMPONENTE DO ARTIGO GUIA FISCAL EUA
// ===================================================================
const GoldenVisaUSTaxPlaybookArticle = () => {

  return (
    <>
      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Cabeçalho */}
          <motion.header
            id="tax-guide-header"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} viewport={{ once: true }}
          >
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <DollarSign size={16} /> US Investor Tax Guide
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              The US Investor's Tax Playbook for Portugal Golden Visa Funds (2026): FATCA, PFIC & QEF Explained Simply
            </h1>
            <p className="text-base text-[#5a6f7b]">
              Published: October 26, 2025 | By Explorer Investments US Compliance Team
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              For US citizens considering Portugal's Golden Visa via the popular €500,000 fund route, navigating US tax implications is paramount. Terms like **FATCA** and **PFIC** can seem daunting, carrying risks of significant penalties if ignored.
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              The good news? Compliance is entirely manageable with the right knowledge and, crucially, the right fund partner. This guide simplifies these complex US tax rules, explains the potential pitfalls, and highlights why the **QEF election** - and the fund reporting required for it - is the key to a smooth journey.
            </p>
          </motion.header>

          {/* FATCA Section */}
          <section id="fatca" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] mb-4 pb-2 border-b border-gray-300 flex items-center gap-2">
                <FileText size={20}/> FATCA: Information Reporting (Not a Tax)
            </h2>
            <p className="text-lg text-[#15364A] text-balance">
                Let's start with the easier one: FATCA (Foreign Account Tax Compliance Act).
            </p>
             <div className="bg-blue-50 p-4 border border-blue-200 rounded-md text-sm md:text-base">
                <p className="text-blue-900 leading-relaxed">
                    FATCA requires foreign financial institutions (like Portuguese banks where you open your account and the Golden Visa fund itself) to report information about financial accounts held by US taxpayers directly to the US Internal Revenue Service (IRS).
                </p>
                 <p className="text-blue-900 leading-relaxed mt-2">
                    **What it means for you:** You'll need to provide your US Taxpayer Identification Number (TIN/SSN) and likely complete a Form W-9 for both your Portuguese bank and the fund manager. This is standard procedure. FATCA itself doesn't impose new taxes, it just ensures the IRS knows about your foreign accounts to prevent offshore tax evasion.
                 </p>
             </div>
              <p className="text-[#15364A] text-balance leading-relaxed mt-2 text-sm">
                  Reputable banks and CMVM-regulated fund managers in Portugal are familiar with FATCA and have compliance processes in place.
              </p>
          </section>

          {/* PFIC Section - The Core Issue */}
          <section id="pfic" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] mb-4 pb-2 border-b border-gray-300 flex items-center gap-2">
                <AlertTriangle size={20} className="text-red-600"/> The PFIC Trap: Understanding Passive Foreign Investment Companies
            </h2>
             <p className="text-lg text-[#15364A] text-balance">
                 PFIC (Passive Foreign Investment Company) rules are where US investors need to pay close attention. This is the most complex and potentially costly aspect of investing in foreign funds.
             </p>

              <h3 className="font-semibold text-[#002D3D] pt-2">What is a PFIC?</h3>
              <p className="text-[#15364A] text-balance leading-relaxed">
                  In simple terms, a foreign corporation (including most investment funds based outside the US) is considered a PFIC if it meets either of these tests:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[#15364A] text-sm md:text-base">
                  <li>**Income Test:** 75% or more of its gross income for the year is passive income (e.g., dividends, interest, capital gains).</li>
                  <li>**Asset Test:** 50% or more of its assets produce passive income or are held for the production of passive income.</li>
              </ul>
               <p className="text-[#15364A] text-balance leading-relaxed font-semibold">
                   Virtually all Portugal Golden Visa investment funds (both PE and VC) will meet these criteria and **are considered PFICs** under US tax law.
               </p>

              <h3 className="font-semibold text-[#002D3D] pt-4">Why Does PFIC Status Matter? The Punitive Default Rules</h3>
               <p className="text-[#15364A] text-balance leading-relaxed">
                   If you don't make a specific election on your US tax return, income and gains from a PFIC are subject to harsh "excess distribution" rules:
               </p>
                <ul className="list-disc pl-6 space-y-1 text-red-700 text-sm md:text-base bg-red-50 p-3 border border-red-200 rounded-md">
                    <li>Gains on sale or certain distributions ("excess distributions") are allocated over your entire holding period.</li>
                    <li>The portion allocated to prior years is taxed at the **highest ordinary income tax rate** for those years (potentially much higher than capital gains rates).</li>
                    <li>An **interest charge** (akin to penalties) is applied to the tax deferred from prior years.</li>
                </ul>
                <p className="text-[#15364A] text-balance leading-relaxed mt-2">
                    This can result in significantly higher taxes and complex calculations compared to domestic investments. **Ignoring PFIC rules is not an option.**
                </p>

                <h3 className="font-semibold text-[#002D3D] pt-4">The Solution: Making a Timely QEF Election</h3>
                 <p className="text-[#15364A] text-balance leading-relaxed">
                     Fortunately, US tax law provides alternatives. The **Qualified Electing Fund (QEF) election** is generally the most advantageous for investors in funds like those used for the Golden Visa.
                 </p>
                 <div className="bg-green-50 p-4 border border-green-200 rounded-md text-sm md:text-base">
                     <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-1"><CheckCircle size={16}/> How QEF Works:</h4>
                     <p className="text-green-900 leading-relaxed">
                         By making a timely QEF election (usually with your tax return for the first year of investment), you agree to include your pro-rata share of the fund's **ordinary earnings** and **net capital gains** in your US taxable income each year, *regardless of whether the fund distributes cash*.
                     </p>
                      <p className="text-green-900 leading-relaxed mt-2 font-semibold">
                         The key benefit: The fund's long-term capital gains generally retain their character and are taxed at favorable long-term capital gains rates in the US, avoiding the punitive excess distribution rules.
                      </p>
                 </div>

                 <h3 className="font-semibold text-[#002D3D] pt-4 text-red-700">The Crucial Requirement: The PFIC Annual Information Statement</h3>
                  <p className="text-[#15364A] text-balance leading-relaxed font-bold text-lg">
                      You CANNOT make a QEF election unless the foreign fund manager provides you with a **PFIC Annual Information Statement** each year.
                  </p>
                   <p className="text-[#15364A] text-balance leading-relaxed">
                       This statement must contain specific information calculated according to US tax principles, detailing your share of the fund's ordinary earnings and net capital gains for the year. Preparing this statement requires expertise and commitment from the fund manager.
                   </p>

                    <Quote author="US Tax Advisor specializing in expats">
                       The availability of a timely and accurate PFIC Annual Information Statement is the single most important factor for a US investor choosing a foreign fund. Without it, the QEF election is impossible, potentially leading to disastrous tax consequences.
                    </Quote>
          </section>

          {/* Why Manager Choice is Critical */}
          <section id="manager-choice" className="space-y-4">
              <h2 className="text-2xl font-bold text-[#002D3D] mb-4 pb-2 border-b border-gray-300 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-blue-600"/> Why Your Fund Manager Choice is Critical for US Tax Compliance
              </h2>
              <p className="text-lg text-[#15364A] text-balance">
                  Not all Portuguese Golden Visa fund managers are equipped or willing to provide the necessary PFIC Annual Information Statements for the QEF election.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#15364A] text-sm md:text-base">
                  <li>**Experience Matters:** Choose a manager with a proven history of working with US investors and understanding US tax reporting needs.</li>
                  <li>**Commitment to Reporting:** Verify that the fund's documentation (PPM) or a side letter explicitly confirms their commitment to providing annual PFIC statements suitable for QEF election.</li>
                  <li>**Institutional Infrastructure:** Larger, established managers like Explorer Investments have the internal processes, expertise, and relationships with auditors/tax advisors to handle this complex reporting reliably.</li>
              </ul>
              <p className="text-[#15364A] text-balance leading-relaxed font-semibold mt-4">
                  At Explorer Investments, supporting our US investors with timely and accurate PFIC Annual Information Statements is a standard part of our service. We understand its critical importance and have robust procedures in place.
              </p>
               <p className="mt-3">
                   {InternalLink("/portugal-golden-visa-fund-due-diligence-checklist-2026", "[Key Questions to Ask Your Fund Manager]", "font-semibold")}
               </p>
          </section>


          {/* Disclaimer */}
          <section id="tax-disclaimer" className="space-y-2 pt-6 border-t border-gray-200 mt-8 bg-gray-50 p-4 rounded-md">
             <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2"><HelpCircle size={18}/> Important Disclaimer</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The information provided in this article is for general informational purposes only and does not constitute tax or legal advice. US tax rules regarding foreign investments are complex and subject to change.
            </p>
             <p className="text-gray-600 text-sm leading-relaxed font-semibold">
                You MUST consult with qualified US tax and legal professionals experienced in international investments and PFIC matters before making any investment decisions related to the Portugal Golden Visa. They can assess your specific situation and advise on the appropriate tax strategies and reporting requirements. Explorer Investments does not provide tax advice.
            </p>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="pt-8 border-t border-gray-200 mt-10">
             <h2 className="text-2xl font-bold text-[#002D3D] mb-4">Conclusion: Navigate US Taxes with the Right Partner</h2>
            <p className="text-lg text-[#15364A] text-balance mb-4 leading-relaxed">
              While FATCA and PFIC rules add complexity for US investors, they are well-defined hurdles that can be successfully managed. The key lies in understanding the requirements - particularly the need for QEF-enabling PFIC statements - and performing thorough due diligence to select a fund manager equipped to provide them.
            </p>
            <p className="text-lg text-[#15364A] text-balance font-semibold leading-relaxed">
              Choosing a compliant, experienced partner like Explorer Investments removes the tax uncertainty, allowing you to focus on the significant benefits of the Portugal Golden Visa: securing EU residency, diversifying your portfolio, and building a global future for your family.
            </p>
          </section>

          {/* CTA Section */}
          <CtaSection />

        </div> {/* End max-w-3xl */}
      </section>

      {/* Artigos Relacionados */}
      <BlogArticles />
    </>
  );
};

export default GoldenVisaUSTaxPlaybookArticle;