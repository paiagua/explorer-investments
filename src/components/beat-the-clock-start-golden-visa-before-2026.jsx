'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
// Ensure these paths are correct relative to this file
import CtaSection from './CtaSection';
import BlogArticles from './BlogArticles';
import { Clock, CheckCircle, AlertTriangle, FileText, Banknote, Users, Briefcase, BarChart, Scale, ShieldCheck, Zap, Link as LinkIcon } from 'lucide-react'; // Relevant Icons

// ===================================================================
// Helper Functions (Same as before)
// ===================================================================
const site = {
  origin: typeof window !== 'undefined' ? window.location.origin : "https://goldenvisashub.com",
  brand: "Golden Visa Explorer Investments",
  author: "Explorer Investments Editorial Team", // Or specific author
  insightsPath: "/golden-visa-portugal-blog", // Base path for blog posts
};

const ensureAbsoluteUrl = (url) => {
    // ... (ensureAbsoluteUrl function as defined in previous responses) ...
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

// Helper for external links
const ExternalLink = ({ href, children, className = "" }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`text-[#B4A77E] hover:underline inline-flex items-center gap-1 text-sm ${className}`}>
        {children} <LinkIcon size={12} />
    </a>
);

// Helper for internal links using Next.js Link
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
// COMPONENTE DO ARTIGO "BEAT THE CLOCK"
// ===================================================================
const BeatTheClockArticle = () => {

  const weeksLeft = Math.max(1, Math.ceil((new Date(2025, 11, 31) - new Date()) / (1000 * 60 * 60 * 24 * 7))); // Calculate weeks left in 2025

  return (
    <>
      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-10"> {/* Increased spacing */}
          {/* Cabeçalho */}
          <motion.header
            id="article-header"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} viewport={{ once: true }}
          >
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <Clock size={16} /> Investment Strategy / Year-End Planning
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              Beat the Clock: The Strategic Advantage of Starting Your Portugal Golden Visa Before 2026
            </h1>
            <p className="text-base text-[#5a6f7b]">
              Published: October 26, 2025 | By Explorer Investments Team
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              With only around **{weeksLeft} weeks remaining in 2025**, strategic decisions made now can significantly impact your long-term goals. For global investors considering the Portugal Golden Visa as a pathway to EU residency and citizenship, initiating the application process *before* the year concludes offers compelling advantages that shouldn't be overlooked.
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              This isn't about arbitrary deadlines, but leveraging existing rules - particularly regarding the citizenship timeline - and positioning yourself optimally for 2026. Here’s why acting now is the smart move.
            </p>
          </motion.header>

          {/* Advantage 1: Activate the 5-Year Clock SOONER (Art. 158-A) */}
          <section id="advantage-clock" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] mb-4 pb-2 border-b border-gray-300 flex items-center gap-2">
                <CheckCircle size={24} className="text-green-600"/> Advantage #1: Start Your 5-Year Citizenship Clock Now
            </h2>
            <p className="text-lg text-[#15364A] text-balance">
                The single most powerful reason to start your application process immediately lies in Portugal's **Article 158-A** of the Foreigners Law.
            </p>
            <div className="bg-green-50 p-4 border border-green-200 rounded-md">
                <h3 className="font-semibold text-green-800 mb-2">Understanding Article 158-A:</h3>
                <p className="text-green-900 text-sm md:text-base leading-relaxed">
                    This crucial legislation stipulates that the 5-year legal residency period required for Portuguese citizenship eligibility begins counting from the **date your residency application is formally submitted and paid for**, assuming it is ultimately approved.
                </p>
                 <p className="text-green-900 text-sm md:text-base leading-relaxed mt-2">
                    Crucially, this means the often lengthy processing times by AIMA (currently 18-24+ months) **do not necessarily add extra years** to your overall journey to citizenship. You are effectively accumulating residency time while your application is pending.
                 </p>
                  <p className="mt-3">
                      {InternalLink("/portugal-golden-visa-5-year-clock-aima-law-explained-2026", "[Deep Dive: How Art. 158-A Works]", "font-semibold")}
                  </p>
            </div>
            <p className="text-[#15364A] text-balance leading-relaxed mt-4">
                **The Strategic Implication:** Every week or month you delay starting the process in late 2025 is a week or month later you become eligible for citizenship down the line (potentially in late 2030 or 2031). Submitting your application sooner directly accelerates your path to an EU passport.
            </p>
            <Quote author="André Bandeira, Explorer Investments">
                Article 158-A transformed the Golden Visa timeline. The focus shifted from worrying about AIMA delays to the urgency of getting your application *submitted*. Starting now maximizes this legal advantage.
            </Quote>
          </section>

          {/* Advantage 2: Secure the Current Favorable Rules */}
          <section id="advantage-rules" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] mb-4 pb-2 border-b border-gray-300 flex items-center gap-2">
                <ShieldCheck size={24} className="text-blue-600"/> Advantage #2: Lock In the Current 5-Year Pathway
            </h2>
            <p className="text-lg text-[#15364A] text-balance">
                The European landscape for residency-by-investment programs is constantly evolving. While Portugal's Golden Visa remains robust, especially via the fund route, applying under the current, clearly defined rules offers valuable certainty.
            </p>
             <ul className="list-disc pl-6 space-y-2 text-[#15364A] text-sm md:text-base">
                 <li><strong>Recent History:**</strong> Portugal significantly reformed the program in 2023, eliminating the popular real estate option in major areas. Discussions about potentially increasing the residency requirement (e.g., to 7 years) have occurred in parliament, although the 5-year rule currently stands. {InternalLink("/portugal-golden-visa-7-year-law-change-deadline-2025", "[Recap: Past Proposals]")}</li>
                 <li><strong>EU Pressure:**</strong> The European Commission continues to scrutinize citizenship and residency by investment schemes across member states, potentially leading to future coordinated changes.</li>
                 <li><strong>Other Programs Closing:**</strong> Countries like Ireland and Spain have recently terminated or significantly restricted their programs, increasing demand and potential pressure on remaining options like Portugal's. {InternalLink("/portugal-golden-visa-2025-best-eu-investment-route", "[Impact of Spain Closing]")}</li>
             </ul>
            <p className="text-[#15364A] text-balance leading-relaxed mt-4">
               While there's no indication the current 5-year rule will change imminently, submitting your application **cements your eligibility under the existing framework**. It provides peace of mind against potential future regulatory shifts that could make the path longer or more complex.
            </p>
          </section>

          {/* Advantage 3: Acknowledge the Process Takes Time */}
          <section id="advantage-time" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] mb-4 pb-2 border-b border-gray-300 flex items-center gap-2">
                <FileText size={24} className="text-purple-600"/> Advantage #3: The Application Preparation Takes Weeks
            </h2>
             <p className="text-lg text-[#15364A] text-balance">
                 Submitting the Golden Visa application to AIMA isn't the first step - it's the culmination of a multi-stage preparation process. Starting now allows you to navigate these stages before potential holiday slowdowns or the early 2026 rush.
             </p>
             <h3 className="font-semibold text-[#002D3D] pt-2">Key Pre-Submission Steps & Timelines:</h3>
             <ol className="list-decimal pl-6 space-y-3 text-[#15364A] text-sm md:text-base">
                 <li><strong>Engage Legal Counsel:**</strong> Choose a specialized Portuguese immigration lawyer (allow 1 week for selection/onboarding).</li>
                 <li><strong>Obtain NIF & Open Bank Account:**</strong> Your lawyer typically handles this, often remotely (allow 1-2 weeks).</li>
                 <li><strong>Fund Due Diligence & Selection:**</strong> Research and choose a CMVM-regulated fund aligned with your goals (allow 1-3 weeks). {InternalLink("/portugal-golden-visa-fund-due-diligence-checklist-2026", "[Use Our DD Checklist]")}</li>
                 <li><strong>Fund Subscription Process:**</strong> Complete KYC/AML, sign documents, transfer €500k investment (allow 1-2 weeks, highly dependent on *fund manager speed*).</li>
                 <li><strong>Gather Personal Documents:**</strong> Obtain and legalize/apostille criminal records, birth/marriage certificates, etc. (This is often the longest step: **can take 6-10+ weeks** depending on your home country's bureaucracy).</li>
             </ol>
             <p className="text-[#15364A] text-balance leading-relaxed mt-4">
                 Realistically, the entire preparation phase before your lawyer can hit "submit" on the AIMA portal often takes **2-3 months or more**. Starting in late October means you aim for submission in early 2026 at the latest, rather than pushing well into the new year. {InternalLink("/golden-visa-fund-application-process-portugal-2025", "[See Full Application Guide]")}
             </p>
          </section>

          {/* Advantage 4: Partner Speed is Key */}
          <section id="advantage-partner" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] mb-4 pb-2 border-b border-gray-300 flex items-center gap-2">
                <Zap size={24} className="text-orange-500"/> Advantage #4: Leverage an Efficient Fund Manager for a Faster Start
            </h2>
            <p className="text-lg text-[#15364A] text-balance">
                As highlighted in Step 4 above, the speed at which your chosen fund manager operates during the subscription phase directly impacts when your 5-year clock can begin.
            </p>
             <div className="bg-blue-50 p-4 border border-blue-200 rounded-md">
                <h3 className="font-semibold text-blue-800 mb-2">The Critical Documents:</h3>
                <p className="text-blue-900 text-sm md:text-base leading-relaxed">
                    Once your investment is confirmed, your lawyer needs two key documents from the fund manager to submit your AIMA application: the **Fund Subscription Declaration** and the **CMVM Registration Declaration**.
                </p>
                 <p className="text-blue-900 text-sm md:text-base leading-relaxed mt-2">
                    Some smaller or less institutionalized managers can take **weeks or even months** to issue these standard documents, creating unnecessary delays *before* your official clock even starts.
                 </p>
             </div>
              <p className="text-[#15364A] text-balance leading-relaxed mt-4 font-semibold">
                  Choosing an institutional partner like Explorer Investments eliminates this bottleneck. With established processes and dedicated teams, we typically provide these essential declarations to your legal counsel within **24-48 business hours** of subscription confirmation.
              </p>
              <p className="text-[#15364A] text-balance leading-relaxed">
                  This efficiency allows your lawyer to proceed immediately with the AIMA submission, maximizing the benefit of Article 158-A and starting your 5-year journey without artificial delays from the investment side.
              </p>
               <p className="mt-3">
                  {InternalLink("/explorer-investments-portugal-private-equity-leader-golden-visa-2025", "[Why Partner with an Institutional Manager]")}
              </p>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="pt-8 border-t border-gray-200 mt-10">
             <h2 className="text-2xl font-bold text-[#002D3D] mb-4">Don't Wait for 2026: Secure Your Advantage Now</h2>
            <p className="text-lg text-[#15364A] text-balance mb-4 leading-relaxed">
              While the Golden Visa itself doesn't have a year-end deadline under current law, the strategic advantages of initiating the process before 2026 are clear:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A] mb-6">
                <li>**Start your 5-year citizenship clock months sooner** thanks to Article 158-A.</li>
                <li>**Secure eligibility under the current, favourable 5-year rules** amidst potential future changes.</li>
                <li>**Navigate the lengthy preparation process proactively**, avoiding potential delays.</li>
                <li>**Partner with an efficient fund manager** to ensure a swift start.</li>
            </ul>
            <p className="text-lg text-[#15364A] text-balance font-semibold leading-relaxed">
              Take the first strategic step towards your EU residency goals before the year is out. Your future self will thank you.
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

export default BeatTheClockArticle;