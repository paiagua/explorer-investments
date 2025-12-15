import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BlogArticles from "./BlogArticles"; // Assuming this component exists
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";
import {
  LineChart,
  ShieldCheck,
  CalendarClock,
  Flag,
  Globe,
  Users,
  BadgeCheck,
  TrendingUp,
  AlertTriangle,
  FileText,
  BadgeDollarSign,
  Building2, // Using Building2 for Company examples
  Scale,
  FileSearch,
  Clock,
  CheckCircle2,
  BarChart3,
  MapPin, // For location/stability
  HeartHandshake, // For family/lifestyle
  GraduationCap, // For education
  Plane, // For travel
} from "lucide-react";

// Updated facts for more detail
const facts = {
  aum: "€1.8B+",
  years: "20+ Years",
  exits: "38+",
  assetsManaged: "98+", // Renamed for clarity
  minInvestmentGV: "€500,000",
  targetReturnProfile: "Top Quartile PE", // Changed from specific MOIC/IRR
  safetyRanking: "Top 7 Global Peace Index", // Added fact
  schengenCountries: "27+", // Added fact
  nhrBenefitDuration: "10 Years", // Added fact (for context, even if NHR changed)
};

const Pill = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold bg-white/60 shadow-sm">
    {children}
  </span>
);

const StatCard = ({ label, value, note }) => (
  <div className="p-4 rounded-lg border border-[#E9E6D8] bg-[#FFFEFA] text-center shadow-sm">
    <p className="text-3xl font-extrabold text-[#002741]">{value}</p>
    <p className="text-sm text-[#15364A]">{label}</p>
    {note ? <p className="text-xs text-[#5a6f7b] mt-1">{note}</p> : null}
  </div>
);

// Basic Bar Chart component (CSS-based)
const SimpleBarChart = ({ data }) => (
  <div className="w-full bg-gray-50 p-4 rounded-lg border">
    <h4 className="text-sm font-semibold mb-3 text-center text-[#002741]">Illustrative Value Drivers</h4>
    <div className="space-y-2">
      {data.map((item, index) => (
        <div key={index} className="flex items-center">
          <span className="text-xs w-1/3 pr-2 text-[#15364A]">{item.label}</span>
          <div className="w-2/3 bg-gray-200 rounded-full h-4">
            <div
              className="bg-[#B4A77E] h-4 rounded-full text-white text-[10px] flex items-center justify-center"
              style={{ width: `${item.value}%` }}
              title={`${item.value}%`}
            >
             {item.value > 15 ? `${item.value}%` : ''} {/* Show % only if bar is wide enough */}
            </div>
          </div>
        </div>
      ))}
    </div>
     <p className="text-xs text-center mt-3 opacity-70">Illustrative only. Past performance does not predict future results.</p>
  </div>
);


const Quote = ({ children, author }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#0f2c3a] bg-[#FFFCF3] py-3 px-4 rounded-md shadow-sm">
    <p>“{children}”</p>
    {author && <footer className="text-sm mt-2 text-right not-italic">- {author}</footer>}
  </blockquote>
);

 
const GoldenVisaPlanB = () => {
  const router = useRouter();
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Example data for the SimpleBarChart
  const valueDriversData = [
    { label: "Operational Growth", value: 45 },
    { label: "Strategic M&A", value: 30 },
    { label: "Exit Multiple", value: 25 },
  ];

  return (
    <>
  

      {/* HERO */}
      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-5xl mx-auto space-y-12"> {/* Increased spacing */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* SEO Optimized H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-balance">
              Portugal Plan B (2025): A Secure EU Residency Path for US Investors via Golden Visa Funds
            </h1>
            <p className="text-lg sm:text-xl text-[#15364A] mb-2">
              <strong>By André Bandeira, Investor Relations - Explorer Investments</strong>
            </p>
            <p className="text-base sm:text-lg text-[#15364A] text-balance">
              In an era of global uncertainty, securing a strategic **'Plan B'** isn't just prudent-it's essential for forward-thinking **US families**. Portugal's Golden Visa, particularly through **CMVM-regulated funds**, offers a robust, compliant, and attractive route to **EU residency**. This guide details why Portugal excels as a safe harbor and how Explorer Investments provides an institutional-grade pathway. 🗺️🛡️
            </p>

            {/* Table of Contents */}
            <nav
              aria-label="Table of contents"
              className="mt-8 border border-[#E4E0CF] rounded-xl p-5 bg-[#FFFCF3] shadow-md"
            >
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#002741]">
                <FileText className="w-5 h-5 text-[#B4A77E]" /> Article Contents
              </h2>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {[
                  { id: "what-is", label: "Portugal Golden Visa Explained (ARI)" },
                  { id: "why-plan-b", label: "Why US Families Need a 'Plan B' Now" },
                  { id: "portugal-stability", label: "Portugal: Beacon of Stability (2025)" },
                  { id: "cmvm-route", label: "The CMVM Fund Route: Compliance First" },
                  { id: "us-investors", label: "US Investors: FATCA/PFIC & Tax Benefits" },
                  { id: "explorer-edge", label: "Explorer Investments: The Institutional Edge" },
                  { id: "performance-methodology", label: "Track Record & Value Creation" },
                  { id: "process", label: "Step-by-Step Application Process" },
                  { id: "citizenship-path", label: "Pathway to EU Citizenship" },
                  { id: "life-in-portugal", label: "Beyond the Visa: Life in Portugal" },
                  { id: "risk", label: "Understanding Opportunities & Risks" },
                  { id: "faq", label: "Frequently Asked Questions (FAQs)" },
                  { id: "cta", label: "Book Your Private Consultation" },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-[#002741] hover:text-[#B4A77E] hover:underline transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.header>

          {/* TRUST STRIP - Enhanced */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Assets Under Management" value={facts.aum} note="Leading PE Platform" />
            <StatCard label="Operating History" value={facts.years} note="Since 2003" />
            <StatCard label="Min. Golden Visa Investment" value={`€${facts.minInvestmentGV}`} note="CMVM Fund Route" />
            <StatCard label="Global Peace Index Rank" value={facts.safetyRanking} note="Highly Secure Nation" />
          </div>

          {/* WHAT IS */}
          <section id="what-is" className="space-y-5 scroll-mt-16"> {/* scroll-mt for better anchor linking */}
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-[#002741]">
              <BadgeCheck className="w-7 h-7 text-[#B4A77E]" />
              Portugal Golden Visa Explained (ARI)
            </h2>
            <p className="text-[#15364A]">
              The Portugal Golden Visa, officially the **Authorization for Residency through Investment (ARI)**, grants non-EU nationals the right to live, work, and study in Portugal. More importantly, it provides **visa-free travel within the {facts.schengenCountries} Schengen Area countries** 🇪🇺. After maintaining the investment and meeting minimal stay requirements for **five years**, holders can apply for permanent residency and subsequently, Portuguese (and thus EU) citizenship, subject to legal criteria including basic language proficiency.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border border-gray-200 bg-white shadow">
                <h3 className="font-semibold mb-2 text-[#002741]">Key Program Features</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm text-[#15364A]">
                  <li><strong>Investment Hold Period:</strong> Minimum 5 years.</li>
                  <li><strong>Physical Stay:</strong> Average **7 days per year** required.</li>
                  <li><strong>Family Inclusion:</strong> Spouse, dependent children, and potentially parents. <HeartHandshake className="inline w-4 h-4 ml-1 text-pink-500"/></li>
                  <li><strong>Citizenship Pathway:</strong> Eligible after 5 years of legal residency. <Flag className="inline w-4 h-4 ml-1 text-green-600"/></li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border border-gray-200 bg-white shadow">
                <h3 className="font-semibold mb-2 text-[#002741]">Primary Eligible Route (2025 Focus)</h3>
                 <ul className="list-disc pl-6 space-y-1 text-sm text-[#15364A]">
                   <li>
                     <strong>Investment Funds (PE/VC):</strong> Minimum **€{facts.minInvestmentGV}** in a CMVM-regulated fund not directly linked to real estate. <LineChart className="inline w-4 h-4 ml-1 text-blue-500"/>
                   </li>
                  <li>Other niche routes exist (e.g., job creation, cultural donation) but the fund route offers the most institutional structure.</li>
                 </ul>
              </div>
            </div>
          </section>

          <hr/>

          {/* WHY PLAN B */}
          <section id="why-plan-b" className="space-y-5 scroll-mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-[#002741]">
              <Globe className="w-7 h-7 text-[#B4A77E]" />
              Why US Families Need a 'Plan B' Now More Than Ever
            </h2>
             <p className="text-[#15364A]">
              Increasing geopolitical instability, domestic political polarization, economic uncertainty (inflation, market volatility), and concerns about future tax policies are driving affluent **Americans** to seek **global diversification and optionality**. A 'Plan B' isn't about leaving; it's about securing future freedom and security for your family. 🇺🇸➡️🇪🇺
            </p>
            <Quote author="Global HNW Individual Trend Report, 2025">
               The search for geopolitical diversification and enhanced personal freedom has become a primary driver for second residency applications among North Americans.
            </Quote>
             <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl border bg-[#FFFEFA] shadow-sm">
                 <h3 className="font-semibold mb-2 text-[#002741]">Geopolitical Hedge</h3>
                 <p className="text-sm text-[#15364A]">Secure a foothold in a stable, democratic EU nation, mitigating risks associated with single-country dependency.</p>
              </div>
               <div className="p-5 rounded-xl border bg-[#FFFEFA] shadow-sm">
                 <h3 className="font-semibold mb-2 text-[#002741]">Family Future-Proofing</h3>
                 <p className="text-sm text-[#15364A]">Provide children access to top European universities, healthcare, and career opportunities across the continent.</p>
              </div>
               <div className="p-5 rounded-xl border bg-[#FFFEFA] shadow-sm">
                 <h3 className="font-semibold mb-2 text-[#002741]">Lifestyle & Mobility</h3>
                 <p className="text-sm text-[#15364A]">Enjoy visa-free travel across Schengen and the option to live, work, or retire in one of the world's safest and most pleasant climates.</p>
              </div>
            </div>
             <p className="text-[#15364A] pt-4">
               The Portugal Golden Visa, with its minimal stay requirement, offers this powerful optionality without demanding immediate, full-time relocation, making it the **ideal strategic Plan B** for busy US families and professionals.
             </p>
          </section>

          <hr/>

           {/* PORTUGAL STABILITY */}
          <section id="portugal-stability" className="space-y-5 scroll-mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-[#002741]">
              <MapPin className="w-7 h-7 text-[#B4A77E]" />
              Portugal: A Beacon of Stability and Opportunity in 2025
            </h2>
            <p className="text-[#15364A]">
              Portugal consistently ranks among the world's **safest, most stable, and welcoming countries**. Its membership in the EU and Eurozone provides a robust legal and economic framework. Key advantages include:
            </p>
             <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
               <li><strong>Safety & Security:</strong> Ranked **7th globally** on the 2024 Global Peace Index. Low crime rates and political stability offer peace of mind. </li>
               <li><strong>High Quality of Life:</strong> Excellent healthcare (public and private), affordable cost of living compared to major US cities, beautiful natural landscapes, and a rich culture.</li>
               <li><strong>Strategic Location:</strong> Gateway to Europe, Africa, and the Americas with excellent flight connections. Time zone alignment facilitates business with both the US and Europe.</li>
               <li><strong>Growing Economy:</strong> Strong performance in tourism, renewable energy, and technology sectors, fostering a dynamic business environment.</li>
               <li><strong>Welcoming to Foreigners:</strong> English is widely spoken, especially in business and urban centers, easing the transition for expats.</li>
             </ul>
              <Quote>
                Portugal combines Old World charm with modern infrastructure and a pro-business attitude, creating an attractive ecosystem for international investors and families.
             </Quote>
          </section>

          <hr/>

           {/* CMVM FUND ROUTE */}
          <section id="cmvm-route" className="space-y-5 scroll-mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-[#002741]">
              <CheckCircle2 className="w-7 h-7 text-[#B4A77E]" />
              The CMVM Fund Route: Tailored for Compliance and Governance
            </h2>
             <p className="text-[#15364A]">
              With the **discontinuation of the real estate option** for the Golden Visa, the investment fund route has become the primary path. Critically, the law specifies investment in funds regulated by the **CMVM (Portuguese Securities Market Commission)**, ensuring a high level of oversight, transparency, and investor protection. 🔒
            </p>
             <h3 className="text-xl font-semibold pt-2 text-[#002741]">Why CMVM Funds are Superior for a Plan B:</h3>
             <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
                <li><strong>Strict Regulation:</strong> CMVM oversight mandates rigorous reporting, independent audits, and adherence to EU financial directives (MiFID II, AIFMD).</li>
                <li><strong>Transparency:</strong> Investors receive clear documentation (prospectus, annual reports) detailing the fund's strategy, assets, and performance.</li>
                <li><strong>Professional Management:</strong> Funds are managed by licensed entities (like Explorer Investments) with fiduciary duties to investors.</li>
                <li><strong>Clear Compliance Trail:</strong> The regulated structure provides clear, auditable proof of investment for the Golden Visa application and renewals.</li>
                <li><strong>Diversification:</strong> Unlike single property investments, funds offer diversification across multiple assets or companies, potentially reducing risk.</li>
             </ul>
            <p className="text-[#15364A] font-semibold">
               Crucially, the law excludes standard, liquid mutual funds (UCITS/OICVM) by requiring a 5-year maturity and 60% investment in Portuguese companies. This legally channels investment towards illiquid, long-term **Alternative Investment Funds (AIFs)** like Private Equity - the core of Explorer's expertise.
            </p>
          </section>

         <hr/>

          {/* US INVESTORS */}
          <section id="us-investors" className="space-y-5 scroll-mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-[#002741]">
              <ShieldCheck className="w-7 h-7 text-[#B4A77E]" />
              US Investors: Navigating FATCA/PFIC & Tax Benefits
            </h2>
            <p className="text-[#15364A]">
              For **US Persons**, international investments require careful planning regarding **FATCA** (Foreign Account Tax Compliance Act) and **PFIC** (Passive Foreign Investment Company) rules. Choosing the right fund structure is paramount.
            </p>
             <h3 className="text-xl font-semibold pt-2 text-[#002741]">How Explorer Investments Assists US Clients:</h3>
             <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
                <li><strong>FATCA Compliant Onboarding:</strong> Seamless coordination with US-friendly custodian banks registered with the IRS.</li>
                <li><strong>PFIC Reporting Support:</strong> Providing necessary annual statements to facilitate US tax reporting (confirm availability per fund).</li>
                <li><strong>Institutional KYC/AML:</strong> Robust procedures meeting international standards, ensuring smooth account opening.</li>
                <li><strong>Expert Network:</strong> Connections to legal and tax advisors specialized in US-Portugal cross-border issues.</li>
             </ul>

             <h3 className="text-xl font-semibold pt-4 text-[#002741]">Tax Considerations & Potential Benefits:</h3>
             <p className="text-[#15364A]">
                While the original Non-Habitual Resident (NHR) regime has ended for new applicants, Portugal introduced **NHR 2.0 (Tax Incentive for Scientific Research and Innovation)** targeting specific high-value professions. For those not qualifying, standard Portuguese tax rules apply. Key points:
             </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-[#15364A]">
                <li><strong>Double Taxation Treaty:</strong> The US-Portugal treaty helps prevent double taxation on income.</li>
                 <li><strong>Potential Fund Tax Efficiency:</strong> Certain Portuguese fund structures can offer favorable tax treatment on capital gains within the fund (consult your advisor).</li>
                <li><strong>Wealth Tax:</strong> Portugal generally does not have a broad wealth tax, unlike some other European countries.</li>
                <li><strong>Inheritance Tax:</strong> Favorable rules apply between spouses and direct descendants/ascendants.</li>
             </ul>
             <p className="text-xs opacity-70 mt-2">
              Tax implications are complex and depend on individual circumstances. Always consult qualified US and Portuguese tax advisors.
             </p>
             <div className="flex flex-wrap gap-2 mt-4">
               <Pill>FATCA Compliant</Pill>
               <Pill>PFIC Reporting Available</Pill>
               <Pill>US-Portugal Tax Treaty</Pill>
               <Pill>Institutional Compliance</Pill>
             </div>
          </section>

         <hr/>

          {/* EXPLORER EDGE */}
          <section id="explorer-edge" className="space-y-5 scroll-mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-[#002741]">
              <LineChart className="w-7 h-7 text-[#B4A77E]" />
              Explorer Investments: The Institutional Edge for Your Plan B
            </h2>
            <p className="text-[#15364A]">
              Choosing a fund manager for a 5+ year commitment requires rigorous due diligence. **Explorer Investments** stands out as Portugal's **largest independent private equity firm**, offering distinct advantages:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
               <div className="p-5 rounded-xl border bg-white shadow-sm space-y-2">
                 <Building2 className="w-8 h-8 text-[#B4A77E] mb-2"/>
                 <h3 className="font-semibold text-[#002741]">Unmatched Experience</h3>
                 <p className="text-sm text-[#15364A]">**{facts.years}** operating history, navigating multiple economic cycles.</p>
               </div>
                <div className="p-5 rounded-xl border bg-white shadow-sm space-y-2">
                 <BarChart3 className="w-8 h-8 text-[#B4A77E] mb-2"/>
                 <h3 className="font-semibold text-[#002741]">Scale & Track Record</h3>
                 <p className="text-sm text-[#15364A]">**{facts.aum} AUM**, **{facts.assetsManaged} assets** managed, **{facts.exits} successful exits** demonstrating value realization.</p>
               </div>
                <div className="p-5 rounded-xl border bg-white shadow-sm space-y-2">
                 <Users className="w-8 h-8 text-[#B4A77E] mb-2"/>
                 <h3 className="font-semibold text-[#002741]">Hands-On Approach</h3>
                 <p className="text-sm text-[#15364A]">Direct involvement with portfolio companies, **board representation**, and access to CEOs drive real operational improvements.</p>
               </div>
             </div>
            <Quote author="André Bandeira, Explorer Investments">
             Our Golden Visa investors benefit from the same institutional discipline, rigorous due diligence, and active value creation process applied across all our funds. It's not just a visa product; it's a co-investment alongside major institutional capital.
             </Quote>
            <p className="text-[#15364A]">
              This alignment ensures that your Golden Visa investment is managed with the highest standards of professionalism and a focus on **generating strong, risk-adjusted returns** typical of top-quartile private equity.
            </p>
          </section>

          <hr/>

          {/* PERFORMANCE & METHOD */}
          <section id="performance-methodology" className="space-y-5 scroll-mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-[#002741]">
              <TrendingUp className="w-7 h-7 text-[#B4A77E]" />
              Explorer's Track Record & Value Creation Framework
            </h2>
            <p className="text-[#15364A]">
             Private Equity returns are not generated passively; they are **manufactured** through expertise and active management. Explorer's **{facts.years} track record** is built on a consistent methodology focused on identifying solid Portuguese SMEs and transforming them into market leaders.
            </p>
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="p-5 rounded-xl border border-gray-200 bg-white shadow space-y-3">
                <h3 className="font-semibold text-[#002741] text-lg">Core Value Creation Levers</h3>
                 <ul className="list-decimal pl-5 space-y-1 text-sm text-[#15364A]">
                  <li>**Operational Enhancements:** Improving efficiency, optimizing pricing, strengthening management teams.</li>
                  <li>**Strategic Growth:** Driving sales through new markets/products, implementing digital transformation.</li>
                  <li>**M&A & Consolidation:** Executing "bolt-on" acquisitions to build scale and market share.</li>
                  <li>**Governance & Professionalization:** Implementing best practices in reporting, financial control, and ESG.</li>
                  <li>**Disciplined Exit Strategy:** Identifying the right timing and buyer (trade sale, secondary, IPO) to maximize returns.</li>
                 </ul>
              </div>
              {/* Illustrative Chart */}
               <SimpleBarChart data={valueDriversData} />
            </div>
             <p className="text-[#15364A] pt-4">
              This hands-on, operational focus aims to deliver **strong capital appreciation** over the fund's life, aligning the 5-year Golden Visa holding period with the typical private equity investment cycle. While past performance isn't a guarantee, Explorer targets **top-quartile returns** within the European PE landscape.
             </p>
          </section>

          <hr/>

          {/* PROCESS */}
          <section id="process" className="space-y-5 scroll-mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-[#002741]">
              <CalendarClock className="w-7 h-7 text-[#B4A77E]" />
              The Golden Visa Fund Application: Step-by-Step Process
            </h2>
            <p className="text-[#15364A]">Navigating the Golden Visa process can seem daunting, but with experienced partners, it's straightforward. Here’s a typical timeline:</p>
            {/* Using a more visual step-flow */}
            <div className="space-y-4">
               {[
                 { num: 1, title: "Initial Consultation & Eligibility Check", desc: "Discuss goals, family structure, timelines. Confirm eligibility. (No obligation)" },
                 { num: 2, title: "Pre-Application Setup", desc: "Obtain Portuguese Tax ID (NIF), open a Portuguese bank account. Gather initial documents (passport, proof of funds)." },
                 { num: 3, title: "Fund Due Diligence & Subscription", desc: "Review fund documentation (prospectus, regulations). Complete KYC/AML with custodian bank. Transfer €500k and subscribe to the chosen Explorer fund." },
                 { num: 4, title: "Obtain Proof of Investment", desc: "Receive official declarations from the fund manager (Explorer) and custodian bank confirming the investment." },
                 { num: 5, title: "Online ARI Application Submission", desc: "Your legal representative submits the application via the AIMA portal with all required documentation." },
                 { num: 6, title: "Biometrics Appointment in Portugal", desc: "Travel to Portugal for a scheduled appointment with AIMA to provide biometric data." },
                 { num: 7, title: "Residency Card Issuance", desc: "Receive your initial Golden Visa residency card (valid for 2 years)." },
                 { num: 8, title: "Renewals & Maintaining Status", desc: "Renew card (typically after 2, then 3 years), maintain investment, meet 7 days/year presence requirement." },
               ].map((step) => (
                 <div key={step.num} className="flex items-start gap-4 p-4 border rounded-lg bg-white shadow-sm">
                   <div className="flex-shrink-0 w-8 h-8 bg-[#B4A77E] text-white rounded-full flex items-center justify-center font-bold">{step.num}</div>
                   <div>
                     <h3 className="font-semibold text-[#002741]">{step.title}</h3>
                     <p className="text-sm text-[#15364A]">{step.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
             <p className="text-sm text-[#15364A] mt-4">
                *Timeline estimates can vary based on AIMA processing times and individual circumstances. Explorer Investments works closely with leading Portuguese law firms to ensure a smooth process for its investors.*
             </p>
          </section>

          <hr/>

            {/* CITIZENSHIP PATH */}
          <section id="citizenship-path" className="space-y-5 scroll-mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-[#002741]">
              <Flag className="w-7 h-7 text-[#B4A77E]" />
              The Pathway to EU Citizenship: The 5-Year Journey
            </h2>
             <p className="text-[#15364A]">
                One of the most compelling aspects of the Portugal Golden Visa is the clear pathway to **Portuguese citizenship**, and therefore **EU citizenship**. After holding legal residency status for **five continuous years** (including the initial Golden Visa period), you become eligible to apply. 🇵🇹🇪🇺
             </p>
             <h3 className="text-xl font-semibold pt-2 text-[#002741]">Key Requirements for Citizenship (after 5 years residency):</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
                  <li>**Minimum Residency Period:** 5 years of legal residency in Portugal.</li>
                  <li>**Clean Criminal Record:** No conviction for a crime punishable by more than 3 years in prison under Portuguese law.</li>
                  <li>**Basic Language Proficiency:** Demonstrating A2 level Portuguese language skills (typically via a certified test or recognized course).</li>
                  <li>**No Outstanding Tax Obligations:** Being up-to-date with Portuguese tax authorities.</li>
             </ul>
              <p className="text-[#15364A] pt-2">
                Once granted, Portuguese citizenship provides the right to live, work, and study anywhere in the European Union, Switzerland, Norway, Iceland, and Liechtenstein, along with holding one of the world's most powerful passports for global travel. <Plane className="inline w-5 h-5 ml-1 text-blue-600"/>
              </p>
          </section>

          <hr/>

           {/* LIFE IN PORTUGAL */}
          <section id="life-in-portugal" className="space-y-5 scroll-mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-[#002741]">
              <HeartHandshake className="w-7 h-7 text-[#B4A77E]" />
              Beyond the Visa: Quality of Life in Portugal
            </h2>
             <p className="text-[#15364A]">
                While the Golden Visa provides the legal framework, Portugal's allure extends far beyond residency status. US families are increasingly drawn to its exceptional quality of life:
             </p>
             <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl border bg-[#FFFEFA] shadow-sm space-y-2">
                    <GraduationCap className="w-7 h-7 text-blue-500 mb-1"/>
                    <h4 className="font-semibold text-[#002741]">Education & Healthcare</h4>
                    <p className="text-sm text-[#15364A]">Access to high-quality international schools and a well-regarded public/private healthcare system.</p>
                </div>
                 <div className="p-5 rounded-xl border bg-[#FFFEFA] shadow-sm space-y-2">
                    <MapPin className="w-7 h-7 text-green-600 mb-1"/>
                    <h4 className="font-semibold text-[#002741]">Culture & Lifestyle</h4>
                    <p className="text-sm text-[#15364A]">Rich history, vibrant cities, stunning beaches, excellent cuisine, and a relaxed pace of life.</p>
                </div>
                 <div className="p-5 rounded-xl border bg-[#FFFEFA] shadow-sm space-y-2">
                     <Users className="w-7 h-7 text-purple-500 mb-1"/>
                    <h4 className="font-semibold text-[#002741]">Welcoming Community</h4>
                    <p className="text-sm text-[#15364A]">Portuguese people are known for their hospitality, and sizable expat communities exist, especially for Americans.</p>
                 </div>
                 <div className="p-5 rounded-xl border bg-[#FFFEFA] shadow-sm space-y-2">
                     <Scale className="w-7 h-7 text-orange-500 mb-1"/>
                    <h4 className="font-semibold text-[#002741]">Affordability</h4>
                    <p className="text-sm text-[#15364A]">Generally lower cost of living compared to major US metropolitan areas, offering better value.</p>
                 </div>
             </div>
              <p className="text-[#15364A] pt-2">
                Whether considering eventual relocation or simply having a secure European base, Portugal offers an outstanding environment for families.
              </p>
          </section>

          <hr/>


          {/* RISK */}
          <section id="risk" className="space-y-5 scroll-mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-[#002741]">
              <AlertTriangle className="w-7 h-7 text-[#B4A77E]" />
              Understanding Opportunities & Risks
            </h2>
            <p className="text-[#15364A]">
              Like any significant investment, the Golden Visa fund route involves both opportunities and risks that require careful consideration.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border border-green-200 bg-green-50 shadow-sm">
                <h3 className="font-semibold mb-2 text-green-800">Key Opportunities ✅</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm text-green-700">
                  <li><strong>EU Residency & Mobility:</strong> The primary benefit - access to Schengen and a path to citizenship.</li>
                  <li><strong>Portfolio Diversification:</strong> Exposure to Euro-denominated assets and the Portuguese economy.</li>
                  <li><strong>Professional Management:</strong> Capital managed by experienced PE teams like Explorer, aiming for strong returns.</li>
                   <li><strong>Regulatory Security:</strong> Investment within the robust CMVM and EU regulatory framework.</li>
                   <li><strong>Minimal Physical Presence:</strong> Maintain residency without uprooting your life immediately.</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border border-red-200 bg-red-50 shadow-sm">
                <h3 className="font-semibold mb-2 text-red-800">Principal Risks ⚠️</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm text-red-700">
                  <li><strong>Illiquidity:</strong> Capital is locked up for the fund's term (typically 5-10 years), aligning with but potentially exceeding the GV requirement.</li>
                  <li><strong>Market & Execution Risk:</strong> Fund performance depends on the manager's skill and broader economic conditions. PE investments carry inherent business risks.</li>
                   <li><strong>Regulatory Changes:</strong> While the fund route is currently stable, immigration laws can change (though typically grandfathering existing applicants).</li>
                   <li><strong>Administrative Delays:</strong> AIMA processing times for applications and renewals can fluctuate.</li>
                  <li><strong>Currency Risk:</strong> USD/EUR exchange rate fluctuations can impact the investment value and returns in USD terms.</li>
                </ul>
              </div>
            </div>
             <p className="text-[#15364A] pt-4">
              **Risk Mitigation:** Choosing a reputable manager with a long track record (like Explorer), understanding the fund's strategy and diversification, and working with experienced legal counsel are crucial steps to mitigate these risks.
             </p>
          </section>

         <hr/>

          {/* FAQ */}
          <section id="faq" className="space-y-5 scroll-mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-[#002741]">
              <FileSearch className="w-7 h-7 text-[#B4A77E]" />
              Frequently Asked Questions (FAQs) for US Investors
            </h2>
            {/* Using details/summary for accordion effect */}
            <div className="space-y-4">
               {[
                 { q: "What's the absolute minimum investment for the fund route?", a: `€${facts.minInvestmentGV}. This amount must be invested in one or more qualifying CMVM-regulated funds.` },
                 { q: "Do I need to speak Portuguese to apply?", a: "No, there is no language requirement for the initial Golden Visa application or renewals. Basic proficiency (A2 level) is only required if you apply for citizenship after 5 years." },
                 { q: "Can I use funds from my IRA or 401(k)?", a: "This is complex and depends on the specific type of account (e.g., Self-Directed IRA). It often involves specific structures and custodians. Consult with a specialized US advisor familiar with international investments from retirement accounts." },
                 { q: "How are returns from the fund taxed for US persons?", a: "Taxation occurs both in Portugal and the US, governed by the double taxation treaty. Distributions and capital gains will be subject to rules in both jurisdictions. PFIC rules add complexity. Professional tax advice is essential." },
                 { q: "What happens if the fund performs poorly?", a: "Investment carries risk, and returns are not guaranteed. The primary goal for GV investors is often residency security. Poor performance impacts the financial return but, provided the investment is maintained, should not impact residency status itself. Choose managers with strong track records." },
                 { q: "How long does the entire Golden Visa process take?", a: "Timelines vary significantly based on AIMA's workload. From initial investment to receiving the first residency card, it can range from 12 to 24 months or longer. Start early." },
                 { q: "What differentiates Explorer's funds from other Golden Visa funds?", a: "Explorer focuses on classic Private Equity in established Portuguese SMEs, managed with institutional discipline and a 20+ year track record. Many other options might focus on Venture Capital (higher risk) or different asset classes. Explorer's alignment with institutional investors offers credibility." },
               ].map((item, idx) => (
                 <details key={idx} className="p-4 border rounded-lg bg-white shadow-sm transition-all duration-300 open:bg-[#FFFEFA] open:shadow-md">
                   <summary className="font-semibold cursor-pointer text-[#002741] hover:text-[#B4A77E]">{item.q}</summary>
                   <p className="mt-2 text-sm text-[#15364A]">{item.a}</p>
                 </details>
               ))}
            </div>
          </section>

          <hr/>

          {/* CTA */}
          <section id="cta" className="space-y-6 scroll-mt-16 text-center bg-[#FFFCF3] p-8 rounded-lg shadow-lg border border-[#E4E0CF]">
             <h2 className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-2 text-[#002741]">
               <Flag className="w-7 h-7 text-[#B4A77E]" /> Secure Your European Plan B Today
             </h2>
             <p className="text-[#15364A] max-w-2xl mx-auto">
               Ready to explore how the Portugal Golden Visa via an Explorer Investments fund can provide security and opportunity for your family? Speak directly with our experienced Investor Relations team. We provide confidential, tailored guidance for US investors, ensuring clarity on compliance, process, and potential.
             </p>
            {/* Contact Info (Re-using from template, centered) */}
             <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-6">
                 {/* André */}
                 <div className="flex items-center gap-3">
                   <img
                     src="https://goldenvisashub.com/assets/images/andre_2025.jpg"
                     alt="André Bandeira"
                     className="w-12 h-12 rounded-full object-cover border"
                     loading="lazy"
                   />
                   <div className="text-sm leading-snug text-left">
                     <p className="font-bold text-[#002741]">André Bandeira</p>
                     <a
                       href="mailto:ab@explorerinvestments.com?subject=Golden%20Visa%20Plan%20B%20Inquiry%20(US)"
                       className="flex items-center gap-1 text-[#B4A77E] hover:underline"
                     >
                       <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3"/> ab@explorerinvestments.com
                     </a>
                   </div>
                 </div>
                 {/* Maria */}
                  <div className="flex items-center gap-3">
                   <img
                     src="https://goldenvisashub.com/assets/images/maria_2025.jpg"
                     alt="Maria Campos Silva"
                     className="w-12 h-12 rounded-full object-cover border"
                     loading="lazy"
                   />
                   <div className="text-sm leading-snug text-left">
                     <p className="font-bold text-[#002741]">Maria Campos Silva</p>
                     <a
                       href="mailto:mcs@explorerinvestments.com?subject=Golden%20Visa%20Plan%20B%20Inquiry%20(US)"
                       className="flex items-center gap-1 text-[#B4A77E] hover:underline"
                     >
                      <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3"/> mcs@explorerinvestments.com
                     </a>
                   </div>
                 </div>
             </div>

            <Link
              href="//-form" // Link to a contact form section on homepage or a dedicated contact page
              className="mt-8 inline-flex items-center gap-2 bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-base px-8 py-3 rounded-full transition shadow-md hover:shadow-lg"
            >
              <FontAwesomeIcon icon={faFileSignature} /> Book Your Free Consultation
            </Link>
          </section>
        </div>
      </section>

       {/* WHY EXPLORER SECTION - Re-using and slightly adapting */}
       <section className="bg-[#F9F9FC] py-16 px-4">
         <div className="w-[95%] max-w-[1200px] mx-auto">
           <h2 className="text-3xl lg:text-4xl font-bold text-[#002D3D] text-left mb-10">
             Why Partner with Explorer Investments for Your Plan B?
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[#002D3D] text-base">
             {/* Adapted features */}
             <FeatureCard icon={<LineChart size={24} />} title="Proven Track Record" text={`Over ${facts.years} delivering institutional-grade PE returns in Portugal.`} />
             <FeatureCard icon={<ShieldCheck size={24} />} title="Robust Compliance" text="Fully CMVM-regulated with dedicated support for US investor requirements (FATCA/PFIC)." />
             <FeatureCard icon={<Users size={24} />} title="Hands-On Partnership" text="Active management and board involvement to drive portfolio company growth." />
             <FeatureCard icon={<CalendarClock size={24} />} title="Minimal Stay Alignment" text={`Golden Visa's low presence requirement (${"7 days/yr"}) fits busy lifestyles.`} />
             <FeatureCard icon={<Flag size={24} />} title="Clear Citizenship Path" text="Expertise in navigating the 5-year journey to potential EU citizenship." />
             <FeatureCard icon={<Globe size={24} />} title="Global Investor Focus" text="Extensive experience assisting international families and their advisors." />
           </div>
           <div className="flex justify-center mt-[40px]">
             <Link
               href="/about/explorer-investments-golden-visa" // Link to relevant about page
               className="bg-[#002741] border border-white text-white text-sm font-semibold px-6 py-3 rounded-full transition inline-flex items-center justify-center gap-2 w-auto hover:bg-opacity-90"
             >
               Learn More About Explorer
             </Link>
           </div>
         </div>
       </section>


      {/* Related/Latest Articles */}
      <BlogArticles />
    </>
  );
};

// Helper component for the feature cards in the "Why Explorer" section
const FeatureCard = ({ icon, title, text }) => (
  <div className="p-6 flex items-start gap-4 bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow">
    <div className="text-[#B4A77E] mt-1">{icon}</div>
    <div>
      <h3 className="font-semibold text-lg mb-1 text-[#002D3D]">{title}</h3>
      <p className="text-sm text-[#15364A]">{text}</p>
    </div>
  </div>
);


export default GoldenVisaPlanB;