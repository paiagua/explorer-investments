import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlogArticles  from './BlogArticles';
import {
  faEnvelope,
  faCalendarDays,
  faLocationDot,
  faExternalLinkAlt, // Icon for external link
} from "@fortawesome/free-solid-svg-icons";
import {
  Users,
  Building,
  Globe,
  TrendingUp,
  FileText,
  BadgeCheck,
  Briefcase, // Icon for Business/PE focus
} from "lucide-react";

/**
 * =====================
 * SEO SLUGS (suggested)
 * =====================
 * Article slug: "/andre-bandeira-brazil-private-markets-meeting-sao-paulo-2025"
 * Section slugs (ids below):
 * - #announcement
 * - #event-details
 * - #explorer-brazil-focus
 * - #investment-solutions-br
 * - #call-to-action
 * - #about-explorer
 */

const facts = {
  aum: "€1.8B+",
  years: "20+ Years",
  minInvestmentGV: "€500,000",
  minInvestmentGrowth: "€250,000",
  eventName: "Brazil Private Markets Meeting",
  eventDate: "November 11, 2025",
  eventLocation: "Rosewood São Paulo, São Paulo, Brazil",
  // Added event link
  eventLink: "https://www.carmocompanies.com/ticketsonly/p/brazil-private-markets-meeting",
};

const Quote = ({ children }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#0f2c3a] bg-[#FFFCF3] py-3 px-4 rounded-md my-4 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

 


// ===================================================================
// NEWS ARTICLE COMPONENT (Updated with more content & event link)
// ===================================================================
const AndreBrazilEventArticle = () => {
  const router = useRouter();
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2">Press Release</div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              Explorer Investments Strengthens Brazil Ties: André Bandeira at Brazil Private Markets Meeting 2025 in São Paulo
            </h1>
            <p className="text-base text-[#5a6f7b]">
              Published: October 18, 2025 {/* Update publish date */}
            </p>
             <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
                LISBON, PORTUGAL - Explorer Investments, Portugal's leading independent Private Equity (PE) manager with over **{facts.years} of experience**, today announced that **André Bandeira**, Head of Investor Relations, will represent the firm at the upcoming **Brazil Private Markets Meeting**. This key industry event gathers Brazil's investment community to explore opportunities within the private capital landscape.
             </p>
          </motion.header>

          {/* Event Details Section - Updated */}
          <section id="event-details" className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF] shadow-sm">
             <h2 className="text-xl font-bold flex items-center gap-2 text-[#002741]">
               <FontAwesomeIcon icon={faCalendarDays} className="w-5 h-5 text-[#B4A77E]" />
               Event Focus & Details
             </h2>
             <p className="text-[#15364A]">
                The **{facts.eventName}** serves as a vital hub for **institutional investors, family offices from Brazil**, asset managers, and advisors. Discussions will center on trends in Brazilian private equity, venture capital, private credit, and infrastructure, alongside global diversification strategies.
             </p>
             <div className="text-sm space-y-1 text-[#002741]">
                <p><strong className="font-semibold">Event:</strong> {facts.eventName}</p>
                <p><strong className="font-semibold">Date:</strong> {facts.eventDate}</p>
                <p className="flex items-center gap-1"><FontAwesomeIcon icon={faLocationDot} className="w-3 h-3 text-[#B4A77E]"/> <strong className="font-semibold">Location:</strong> {facts.eventLocation}</p>
                <p>
                  <strong className="font-semibold">More Info / Tickets:</strong>{" "}
                  <a href={facts.eventLink} target="_blank" rel="noopener noreferrer" className="text-[#B4A77E] hover:underline inline-flex items-center gap-1">
                    Official Event Page <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3" />
                  </a>
                </p>
                 <p><strong className="font-semibold">Explorer Representative:</strong> André Bandeira (Investor Relations)</p>
             </div>
          </section>

          {/* Explorer's Focus on Brazil Section - Enhanced */}
          <section id="explorer-brazil-focus" className="space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2 text-[#002741]">
              <Globe className="w-6 h-6 text-[#B4A77E]" />
              Strengthening Portugal-Brazil Investment Bridges
            </h2>
            <p className="text-[#15364A] text-balance">
              André Bandeira's participation highlights Explorer Investments' strong commitment to the Brazilian market. For **Brazilian investors and family offices** seeking **international diversification**, secure European residency options, and access to rigorously managed assets, Portugal presents a compelling proposition.
            </p>
            <Quote>
              "The deep cultural and economic ties between Brazil and Portugal create a natural synergy for investment," noted André Bandeira. "I'm eager to engage with the sophisticated Brazilian investment community in São Paulo. We'll discuss how Explorer's institutional Private Equity approach - focused on solid Portuguese companies - offers both compelling growth potential and a highly reliable, **CMVM-regulated pathway to the Portugal Golden Visa for Brazilian citizens** seeking **EU residency**."
            </Quote>
             <p className="text-[#15364A] text-balance">
               Discussions will cover navigating the current investment climate, the advantages of European diversification via Portugal, and the specifics of Explorer's fund structures designed for international investors.
             </p>
          </section>

           {/* Investment Solutions for Brazilians - Enhanced */}
          <section id="investment-solutions-br" className="space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2 text-[#002741]">
              <Briefcase className="w-6 h-6 text-[#B4A77E]" />
              Explorer's Institutional Solutions for Brazilian Investors
            </h2>
             <p className="text-[#15364A]">
                With approximately **{facts.aum}** under management, Explorer Investments leverages its deep local expertise to invest in and actively manage mature, profitable Portuguese SMEs. Key offerings relevant to Brazilian investors include:
             </p>
             <ul className="list-disc pl-6 space-y-3 text-[#15364A]">
                <li>
                    <strong className="font-semibold text-[#002741]">Golden Visa Eligible Private Equity Funds:</strong>
                    <br/>
                    <span className="text-sm">Investing the required **{facts.minInvestmentGV}** provides a compliant route to the ARI program. This secures **EU residency** for the investor and family, visa-free Schengen travel, and a pathway to citizenship after 5 years, all while requiring minimal physical presence in Portugal (**7 days/year**). Ideal for **diversificação internacional Brasil**.</span>
                </li>
                 <li>
                    <strong className="font-semibold text-[#002741]">Growth-Focused Private Equity Funds:</strong>
                    <br/>
                    <span className="text-sm">For investors prioritizing capital appreciation without the residency component, Explorer offers access to its core PE strategy, often starting from **{facts.minInvestmentGrowth}**, allowing participation alongside global institutional investors.</span>
                 </li>
                 <li>
                     <strong className="font-semibold text-[#002741]">Commitment to Governance:</strong>
                     <br/>
                     <span className="text-sm">All funds operate under strict **CMVM regulation**, undergo independent audits (Big Four), and utilize reputable custodian banks, ensuring institutional-grade transparency and security highly valued by **family offices Brasil**.</span>
                 </li>
             </ul>
          </section>

          {/* Call to Action for Meetings - Refined */}
          <section id="call-to-action" className="space-y-4 text-center bg-gradient-to-r from-[#002741] to-[#0f3c5a] p-8 rounded-lg shadow-lg">
             <h2 className="text-xl font-bold text-white mb-3">Schedule a Meeting with André Bandeira in São Paulo</h2>
             <p className="text-gray-200 mb-5 max-w-lg mx-auto text-balance">
               Discuss your specific goals for international diversification, EU residency via the **Golden Visa Portugal para brasileiros**, or accessing top-tier European Private Equity. André Bandeira will be available for confidential, one-on-one meetings during the event.
             </p>
             <a
               href="/"
               className="inline-flex items-center gap-2 bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-base px-6 py-3 rounded-full transition shadow-md hover:shadow-lg"
             >
               <FontAwesomeIcon icon={faEnvelope} /> Request a Private Meeting
             </a>
          </section>

          {/* About Explorer Section */}
          <section id="about-explorer" className="space-y-3 pt-6 border-t border-gray-200">
             <h3 className="text-lg font-semibold text-[#002741]">About Explorer Investments</h3>
             <p className="text-sm text-[#15364A] text-balance">
                Founded in 2003, Explorer Investments is Portugal's leading independent private equity management company, with approximately {facts.aum} under management. Explorer invests primarily in established Portuguese companies across various sectors, focusing on creating sustainable value through active management and strategic partnerships. Explorer Investments is fully regulated by the Portuguese Securities Market Commission (CMVM).
             </p>
             <div className="text-sm text-[#15364A]">
                <p className="font-semibold">Press/Investor Contact:</p>
                <p>André Bandeira</p>
                <p>Investor Relations, Explorer Investments</p>
                <p>Email: <a href="mailto:ab@explorerinvestments.com" className="text-[#B4A77E] hover:underline">ab@explorerinvestments.com</a></p>
                <p>Website: <Link href="/" className="text-[#B4A77E] hover:underline">https://goldenvisashub.com/</Link></p>
             </div>
          </section>

        </div>
      </section>
< BlogArticles/>
 
    </>
  );
};

export default AndreBrazilEventArticle;