'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
// Ensure these paths are correct relative to this file
import CtaSection from './CtaSection';
import BlogArticles from './BlogArticles';
import { MapPin, CalendarDays, User, BarChart, Briefcase, Globe, ShieldCheck, Link as LinkIcon } from 'lucide-react'; // Relevant Icons

// ===================================================================
// Helper Functions (Should ideally be in a separate utils file)
// ===================================================================
const site = {
  origin: typeof window !== 'undefined' ? window.location.origin : "https://goldenvisashub.com",
  brand: "Golden Visa Explorer Investments",
  insightsPath: "/golden-visa-portugal-blog",
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
    } catch (e) {
        console.error("Error creating/validating absolute URL for:", url, e);
        return '#'; // Safe fallback
    }
};

// Helper for external links
const ExternalLink = ({ href, children, className = "" }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`text-[#B4A77E] hover:underline inline-flex items-center gap-1 text-sm ${className}`}>
        {children} <LinkIcon size={12} />
    </a>
);

// Helper for internal links using Next.js Link
const InternalLink = ({ href, children, className = "" }) => {
    // Make href relative for Next.js Link
    const relativeHref = ensureAbsoluteUrl(href).replace(site.origin, '') || '#';
    return (
        <Link href={relativeHref} className={`text-[#B4A77E] hover:underline text-sm ${className}`}>
            {children}
        </Link>
    );
};

// ===================================================================
// COMPONENTE DO ARTIGO DO EVENTO
// ===================================================================
const ExplorerBrazilEventArticle = () => {

    const EVENT_NAME = "Brazil Private Markets Meeting 2025";
    const EVENT_DATE_FORMATTED = "November 11, 2025";
    const EVENT_LOCATION = "Rosewood São Paulo, São Paulo, Brazil";
    const EVENT_URL = "https://www.carmocompanies.com/ticketsonly/p/brazil-private-markets-meeting"; // Event link

  return (
    <>
      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Cabeçalho */}
          <motion.header
            id="event-header"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} viewport={{ once: true }}
          >
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <CalendarDays size={16} /> News & Events
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              Explorer Investments at Brazil Private Markets Meeting 2025: Bridging LatAm Capital to Portugal Golden Visa & EU Residency
            </h1>
            <p className="text-base text-[#5a6f7b]">
              Published: October 25, 2025
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              LISBON, PORTUGAL - Explorer Investments, Portugal's leading independent private equity manager (€1.8B+ AUM), is pleased to announce that **André Bandeira**, Head of Investor Relations, will be attending the prestigious **{EVENT_NAME}** in São Paulo.
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              This key event gathers senior institutional investors, family offices, and alternative investment professionals from across Brazil and Latin America. Explorer's participation underscores the growing synergy between the region's search for **global diversification** and the strategic opportunities offered by **Portugal's robust private equity market** and its renowned **Golden Visa program**.
            </p>
          </motion.header>

          {/* Event Details Box */}
          <div className="bg-gray-50 border border-gray-200 p-6 space-y-3 shadow-sm">
             <h2 className="text-xl font-bold text-[#002D3D] mb-3">Event Details</h2>
             <p className="flex items-center gap-2 text-base"><CalendarDays size={18} className="text-[#B4A77E]"/> <strong>Date:</strong> {EVENT_DATE_FORMATTED}</p>
             <p className="flex items-center gap-2 text-base"><MapPin size={18} className="text-[#B4A77E]"/> <strong>Location:</strong> {EVENT_LOCATION}</p>
             <p className="flex items-center gap-2 text-base"><User size={18} className="text-[#B4A77E]"/> <strong>Explorer Representative:</strong> André Bandeira (Investor Relations)</p>
             <p className="flex items-center gap-2 text-base"><LinkIcon size={18} className="text-[#B4A77E]"/> <strong>Event Info:</strong> {ExternalLink(EVENT_URL, "Official Event Page")}</p>
          </div>


          {/* Why This Event Matters */}
          <section id="why-event-matters" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] mb-4 pb-2 border-b border-gray-300 flex items-center gap-2"><BarChart size={20}/> Connecting Private Markets, Diversification, and EU Access</h2>
            <p className="text-lg text-[#15364A] text-balance">
              The {EVENT_NAME} focuses on the increasing appetite for **alternative investments** among sophisticated Brazilian investors seeking superior risk-adjusted returns and portfolio diversification beyond traditional assets and geographies.
            </p>
            <p className="text-[#15364A] text-balance leading-relaxed">
              This aligns perfectly with the opportunities presented by Portugal's **thriving private equity landscape** and the **Portugal Golden Visa program**. Investing €500,000 in a CMVM-regulated fund, like those managed by Explorer Investments, is not just a pathway to EU residency; it's a strategic allocation to a regulated alternative asset class within a stable Eurozone economy.
            </p>
             <p className="text-[#15364A] text-balance leading-relaxed">
                 {InternalLink("/explorer-investments-portugal-private-equity-leader-golden-visa-2025", "[Learn About Explorer's PE Strategy]")}
             </p>
          </section>

          {/* Golden Visa Opportunity for Global Investors (Incl. US) */}
           <section id="gv-opportunity" className="space-y-4">
             <h2 className="text-2xl font-bold text-[#002D3D] mb-4 pb-2 border-b border-gray-300 flex items-center gap-2"><Globe size={20}/> The Golden Visa: A Strategic Tool for Brazilians and US Investors</h2>
             <p className="text-lg text-[#15364A] text-balance">
                The Portugal Golden Visa continues to attract significant global interest, particularly from **Brazil** and the **United States**. For investors from both regions, the program offers compelling advantages:
             </p>
             <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
                <li><strong>A Secure Path to EU Residency & Citizenship:**</strong> Gain the right to live, work, and study in Portugal, plus visa-free Schengen travel, with a clear 5-year pathway to potential EU citizenship for the entire family.</li>
                <li><strong>Strategic Diversification:**</strong> Allocate capital outside domestic markets into a regulated Eurozone investment.</li>
                <li><strong>Minimal Physical Presence:**</strong> Requires only an average of 7 days per year in Portugal, ideal for global families and business professionals. {InternalLink("/portugal-golden-visa-5-year-clock-aima-law-explained-2026", "[Understand the 5-Year Clock]")}</li>
                <li><strong>The Compliant Fund Route:**</strong> Investing €500,000 in a CMVM-regulated fund is the primary, transparent, and legally sound pathway following the 2023 program updates. {InternalLink("/why-smart-investors-choose-cmvm-regulated-funds-portugal-golden-visa-2025", "[Why CMVM Funds are Key]")}</li>
                <li><strong>A Robust "Plan B":**</strong> Secure future options in one of the world's safest and most stable countries. {InternalLink("/portugal-plan-b-us-investors-2025", "[Portugal as a Plan B]")}</li>
             </ul>
              <p className="text-[#15364A] text-balance leading-relaxed mt-4">
                 Explorer Investments has extensive experience assisting both Brazilian and American investors navigate the specific compliance requirements (including FATCA/PFIC for US persons) associated with the fund route. {InternalLink("/portugal-golden-visa-tax-strategy-funds-nhr-fatca-pfic-2025", "[See Tax & Compliance Guide]")}
              </p>
           </section>

          {/* Meet André Bandeira */}
          <section id="meet-andre" className="space-y-4 bg-[#FFFCF3] p-6 border border-[#E4E0CF] rounded-md shadow-sm">
             <h2 className="text-xl font-bold flex items-center gap-2 text-[#002D3D]">
               <User size={20}/> Meet Explorer Investments in São Paulo
             </h2>
             <p className="text-[#15364A]">
               **André Bandeira** will be available during the {EVENT_NAME} for pre-scheduled one-on-one meetings. He can provide insights into:
             </p>
             <ul className="list-disc pl-6 space-y-1 text-[#15364A] text-sm">
                <li>Explorer Investments' successful 20+ year track record in Portuguese Private Equity.</li>
                <li>Specifics of the qualifying Golden Visa investment fund options.</li>
                <li>The due diligence process for selecting a compliant fund. {InternalLink("/portugal-golden-visa-fund-due-diligence-checklist-2026", "[Use Our Checklist]")}</li>
                <li>Navigating compliance requirements for Brazilian and US investors.</li>
             </ul>
              <p className="mt-4">
                 <strong className="text-[#002D3D]">To schedule a meeting with André Bandeira in São Paulo on November 11th, please contact:</strong>
                 <br />
                 <a href="mailto:ab@explorerinvestments.com?subject=Meeting Request - Brazil Private Markets Meeting 2025" className="text-[#B4A77E] font-semibold hover:underline">ab@explorerinvestments.com</a>
              </p>
          </section>


          {/* Conclusão */}
          <section id="event-conclusion" className="pt-8 border-t border-gray-200 mt-10">
             <h2 className="text-2xl font-bold text-[#002D3D] mb-4">Bridging Opportunities</h2>
            <p className="text-[#15364A] text-balance leading-relaxed">
              Explorer Investments' presence at the {EVENT_NAME} highlights the strong connection between Latin American capital seeking global opportunities and Portugal's attractive investment climate, further enhanced by the strategic benefits of the Golden Visa program for international investors worldwide.
            </p>
          </section>

          {/* About Explorer Section */}
          <section id="about-explorer" className="space-y-3 pt-6 border-t border-gray-200">
             <h3 className="text-lg font-semibold text-[#002D3D]">About Explorer Investments</h3>
             <p className="text-sm text-[#15364A] text-balance">
               Founded in 2003, Explorer Investments is Portugal's leading independent private equity and alternative asset manager with approximately €1.8B+ under management. Fully regulated by the CMVM, we offer institutional-grade investment solutions, including qualifying funds for the Portugal Golden Visa program, serving a global client base. {InternalLink("/explorer-investments-portugal-private-equity-leader-golden-visa-2025", "[Learn More]")}
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

export default ExplorerBrazilEventArticle;