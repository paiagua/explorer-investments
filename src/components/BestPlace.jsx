import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRouter } from "next/navigation";



import BlogArticles  from './BlogArticles';
import Link from "next/link";



import {
  faPen,
  faPhone,
  faTv,
  faCommentDots,
  faIdCard,
  faArrowRight,
  faArrowDown,
  faStar
} from "@fortawesome/free-solid-svg-icons";

import {
  LineChart,
  ShieldCheck,
  CalendarClock,
  Flag 
} from "lucide-react";

import {
  Info, RefreshCcw, FileWarning, ArrowDownCircle,  BriefcaseBusiness, Microscope, Landmark,   
  AlertTriangle, FileText, Gavel, Plane, Sparkles,
  TrendingUp, Banknote, ThumbsUp, Ban, UserCheck,
  ClipboardList, GraduationCap, AlertCircle,   Pin, UserPlus,
  Globe, Users, Euro,    BadgeCheck, Play
} from "lucide-react";
import { FileCheck } from 'lucide-react';
 

 
import { Send } from "lucide-react";
 
 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const GoldenVisaGuide = () => {
  const scrollToTop = () => {
  const element = document.getElementById("DivAskSimulation");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

  return (
    <>
     <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 text-left">
            <span className="inline-flex items-start gap-3">
              <Globe className="w-10 h-10 text-[#B4A77E] mt-1" />
              <span className="leading-tight">
                Portugal: The Best European Magic for Retirees in 2025 - Live Legally with the Golden Visa
              </span>
            </span>
          </h2>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-justify">
            <p>In July 2025, Forbes named Portugal the best country to retire abroad. Lisbon topped the list for affordability, healthcare, safety, climate, and cultural richness-making it a top pick for American retirees seeking stability and quality of life.</p>

            <p className="font-semibold flex items-center gap-2 text-base">
              <Users className="w-5 h-5 text-[#B4A77E]" /> Why Portugal Tops the List for 2025 Retirees
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Affordable cost of living, especially housing</li>
              <li>High-quality public and private healthcare systems</li>
              <li>Low crime rates and LGBTQ+ inclusivity</li>
              <li>Large, supportive American expat community</li>
              <li>Mild climate with over 300 sunny days per year</li>
            </ul>

            <p>Example: Jeff and Merlin, a couple from Texas, moved to Lisbon for better wellness and acceptance. They now enjoy a 3-bedroom flat for $3,700/month-less than U.S. cities and a higher quality of life.</p>

            <p className="font-semibold flex items-center gap-2 text-base">
              <ShieldCheck className="w-5 h-5 text-[#B4A77E]" /> How to Actually Live There: Enter the Golden Visa
            </p>
            <p>The Golden Visa is a residency-by-investment program for non-EU citizens to live legally in Portugal.</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Invest €500,000 in certified investment funds</li>
              <li>Hold investment for 5 years</li>
              <li>Stay only 7 days/year in Portugal</li>
              <li>No serious criminal record</li>
            </ul>

            <p className="font-semibold flex items-center gap-2 text-base">
              <Euro className="w-5 h-5 text-[#B4A77E]" /> The Best Route Post-2023: Investment Funds
            </p>
            <p>Since reforms in 2023-2024 removed real estate and bank deposits from eligibility, investment funds regulated by CMVM are now the safest and easiest path to a Golden Visa.</p>

            <p className="font-semibold flex items-center gap-2 text-base">
              <FileText className="w-5 h-5 text-[#B4A77E]" /> Why Explorer Investments Fund Stands Out
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>CMVM-regulated: full legal compliance</li>
              <li>Experienced private equity team (20+ years)</li>
              <li>€500,000 investment minimum</li>
              <li>Diversified sectors: tech, tourism, energy</li>
              <li>Legal and biometric support included</li>
            </ul>

            <p className="font-semibold flex items-center gap-2 text-base">
              <BadgeCheck className="w-5 h-5 text-[#B4A77E]" /> Benefits for You and Your Family
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Live, work, study in Portugal</li>
              <li>Visa-free travel across 26 Schengen countries</li>
              <li>Bring spouse, kids, and parents</li>
              <li>Apply for citizenship after 5 years</li>
              <li>Access healthcare, education, and lifestyle perks</li>
            </ul>

            <p className="font-semibold flex items-center gap-2 text-base">
              <Globe className="w-5 h-5 text-[#B4A77E]" /> Strong U.S. Connection
            </p>
            <p>Portugal offers direct flights to New York, Miami, and Boston in under 7 hours. English is common in cities like Lisbon and Porto, easing transition.</p>

            <p className="font-semibold flex items-center gap-2 text-base">
              <Play className="w-5 h-5 text-[#B4A77E]" /> Conclusion: Portugal Isn’t Just a Dream-It’s a Plan
            </p>
            <p>Forbes didn’t name Portugal #1 by chance. With Golden Visa fund investment, retirement in Portugal is a real, legal, and rewarding path.</p>

            <div className="mt-6 p-6 bg-[#F5F5F5] rounded-lg shadow-md">
              <p className="font-semibold mb-3 text-[#002741]">FAQs</p>
              <ul className="space-y-2 text-sm">
                <li><strong>Why was Portugal named top retirement destination in 2025?</strong> Affordability, healthcare, climate, and safety.</li>
                <li><strong>What is the Golden Visa Portugal?</strong> A legal residency route via certified fund investment.</li>
                <li><strong>Can Americans retire in Lisbon with it?</strong> Yes - invest €500K, follow requirements, get residency.</li>
                <li><strong>Why use a CMVM-regulated fund?</strong> Transparency, compliance, and expert management.</li>
                <li><strong>Can family members be included?</strong> Yes - spouse, children, dependent parents.</li>
                <li><strong>How to get Portuguese citizenship?</strong> After 5 years + A2 language level + clean record.</li>
              </ul>
              <p className="mt-4 font-semibold">🔗 Source: <a href="https://www.forbes.com/sites/williampbarrett/2025/07/19/the-best-places-to-retire-abroad-in-2025/?utm_source=igs&utm_medium=social&utm_campaign=forbes&fbclid=PAZXh0bgNhZW0CMTEAAafwDpJAmKKQGYOZGMq7himWqusEifl6BaP_lUkKVHdGz4taZReKB2lcCdWFmA_aem_i9hV2ir6V5756GHSZGh2GQ">Forbes</a>, July 19, 2025</p>
              <p className="mt-1">⚙️ Start Planning Your Move: Contact Explorer Investments to explore the safest Golden Visa fund route.</p>
            </div>
                <div className="pb-10">
                      <h3 className="text-white text-lg font-semibold mb-4">
                        Your Trusted Investor Relations Team
                      </h3>
                    
                      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        {/* André */}
                    {/* André */}
                    <div className="flex items-start gap-4">
                      <img
                    src="/assets/images/andre_2025.jpg"
                        alt="André Bandeira"
                        className="w-16 h-16 rounded-full object-cover border border-white"
                      />
                      <div className="text-sm leading-snug">
                        <p className="font-bold">André Bandeira</p>
                        <a
                          href="mailto:ab@explorerinvestments.com?subject=Golden%20Visa%20Investment%20Inquiry%20from%20Website"
                          className="flex items-center gap-2 text-[#B4A77E] hover:underline"
                        >
                          <FontAwesomeIcon icon={faEnvelope} /> ab@explorerinvestments.com
                        </a>
                      </div>
                    </div>
                    
                    {/* Maria */}
                    <div className="flex items-start gap-4">
                      <img
                   src="https://goldenvisashub.com/assets/images/maria_2025.jpg"
                        alt="Maria Campos Silva"
                        className="w-16 h-16 rounded-full object-cover border border-white"
                      />
                      <div className=" text-sm leading-snug">
                        <p className="font-bold">Maria Campos Silva</p>
                        <a
                          href="mailto:mcs@explorerinvestments.com?subject=Golden%20Visa%20Investment%20Inquiry%20from%20Website"
                          className="flex items-center gap-2 text-[#B4A77E] hover:underline"
                        >
                          <FontAwesomeIcon icon={faEnvelope} /> mcs@explorerinvestments.com
                        </a>
                      </div>
                    </div>
                    
                      </div>
      <Link
  href="/"
  className="mt-[30px] mb-[40px] bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-base px-6 py-3 rounded-full transition text-center inline-flex items-center gap-2"
>
  <Send size={18} strokeWidth={2} />
  <span>Start Your Investor Journey</span>
</Link>
                    
                    
                    </div>
          </div>
        </motion.div>
      </div>
    </section>
   
 
<section className="py-16 px-6 text-center bg-[#E4E0CF]">


<h2 className="text-3xl lg:text-4xl font-bold text-[#002D3D] mb-10">
  <span className="block text-3xl lg:text-4xl">
    Get EU Residency Through a Proven, Fast-Track Investment
  </span>
  <span className="block text-xl lg:text-2xl text-[#002D3D] mt-2">
    With a Free Expert Session to Start
  </span>
</h2>
<div className="max-w-[1200px] mx-auto flex flex-wrap justify-center items-start gap-6 relative w-full">
  {/* Step 1 */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-6 flex-1 w-full">
    <div className="relative bg-[#fff8e1] rounded-lg px-6 py-6 flex-1 min-w-[200px] text-center shadow-sm flex flex-col items-center min-h-[250px] border border-[#f1e4b8]">
    <div className="absolute -top-3 -left-3 bg-[#002d3d] text-white text-[11px] font-semibold px-3 py-1 rounded-tr-md rounded-bl-md shadow-md">Step 1</div>
    <FontAwesomeIcon icon={faPen} className="text-[#002d3d] mb-2 text-xl" />
    <p className="text-base font-semibold text-[#002d3d] mb-2">Begin Your Golden Path</p>
    <p className="text-[11px] text-[#002d3d] mb-3">Book your exclusive 1-hour session with Portugal’s leading investment specialists</p>
    <button onClick={() => navigate("/")} className="bg-[#B4A77E] hover:bg-[#9c9067] text-white text-xs font-bold px-3 py-1 rounded-md transition duration-300 inline-flex items-center gap-1">
      <Play size={14} strokeWidth={2} /> Book Now
    </button>
  </div>


    {/* Timeline: 1 day */}
    <div className="flex flex-col items-center justify-center">
      <div className="block md:hidden w-[1px] h-10 bg-gray-400 mb-1"></div>
      <div className="hidden md:block h-[1px] w-10 bg-gray-400 mb-1"></div>
      <span className="text-xs text-gray-600">1 day</span>
    </div>

    {/* Step 2 */}
    <div className="relative bg-[#f9f9fc] rounded-lg px-6 py-6 flex-1 min-w-[200px] text-center shadow-sm flex flex-col items-center min-h-[250px]">
      <div className="absolute -top-3 -left-3 bg-[#002d3d] text-white text-[11px] font-semibold px-3 py-1 rounded-tr-md rounded-bl-md shadow-md">Step 2</div>
      <FontAwesomeIcon icon={faPhone} className="text-[#002d3d] mb-2 text-xl" />
      <p className="text-base font-semibold text-[#002d3d]">Meet Your Expert</p>
      <p className="text-[11px] text-[#002d3d] mb-3">Receive confirmation and connect with your specialist</p>
    </div>

    {/* Timeline: 3 days */}
    <div className="flex flex-col items-center justify-center">
      <div className="block md:hidden w-[1px] h-10 bg-gray-400 mb-1"></div>
      <div className="hidden md:block h-[1px] w-10 bg-gray-400 mb-1"></div>
      <span className="text-xs text-gray-600">3 days</span>
    </div>

    {/* Step 3 */}
    <div className="relative bg-[#f9f9fc] rounded-lg px-6 py-6 flex-1 min-w-[200px] text-center shadow-sm flex flex-col items-center min-h-[250px]">
      <div className="absolute -top-3 -left-3 bg-[#002d3d] text-white text-[11px] font-semibold px-3 py-1 rounded-tr-md rounded-bl-md shadow-md">Step 3</div>
      <FontAwesomeIcon icon={faTv} className="text-[#002d3d] mb-2 text-xl" />
      <p className="text-base font-semibold text-[#002d3d]">Live Presentation</p>
      <p className="text-[11px] text-[#002d3d] mb-3">Discover how the fund operates, its track record, and the long-term returns - while learning how to secure EU residency through smart investment.</p>
    </div>

    {/* Timeline: 5 days */}
    <div className="flex flex-col items-center justify-center">
      <div className="block md:hidden w-[1px] h-10 bg-gray-400 mb-1"></div>
      <div className="hidden md:block h-[1px] w-10 bg-gray-400 mb-1"></div>
      <span className="text-xs text-gray-600">5 days</span>
    </div>

    {/* Step 4 */}
    <div className="relative bg-[#f9f9fc] rounded-lg px-6 py-6 flex-1 min-w-[200px] text-center shadow-sm flex flex-col items-center min-h-[250px]">
      <div className="absolute -top-3 -left-3 bg-[#002d3d] text-white text-[11px] font-semibold px-3 py-1 rounded-tr-md rounded-bl-md shadow-md">Step 4</div>
      <FontAwesomeIcon icon={faCommentDots} className="text-[#002d3d] mb-2 text-xl" />
      <p className="text-base font-semibold text-[#002d3d]">Tailored Proposal</p>
      <p className="text-[11px] text-[#002d3d] mb-3">Get a personalized roadmap designed around your goals</p>
    </div>
  </div>

  {/* Spacer */}
  <div className="w-full"></div>

  {/* Step 5 */}
  <div className="bg-[#B4A77E] rounded-lg p-4 w-full max-w-[664px] mx-auto shadow-md flex flex-col items-center md:flex-row md:justify-between text-white">
    <div className="flex items-center gap-2">
      <FontAwesomeIcon icon={faIdCard} className="text-xl" />
      <span className="text-sm font-medium">Step 5</span>
      <FontAwesomeIcon icon={faArrowRight} className="hidden md:inline text-2xl" />
      <FontAwesomeIcon icon={faArrowDown} className="md:hidden text-2xl" />
    </div>
<Link
  href="/"
  className="mt-3 md:mt-0 bg-[#002741] border border-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white hover:text-[#002741] transition duration-300 inline-flex items-center gap-1"
>
  <FileCheck size={16} strokeWidth={2} /> Get Portuguese Golden Visa
</Link>
  </div>
</div>
</section>
<BlogArticles /> 
 <section className="bg-[#F9F9FC] py-16 px-4">
  <div className="w-[95%] max-w-[1200px] mx-auto">
    <h2 className="text-3xl lg:text-4xl font-bold text-[#002D3D] text-left mb-10">
      Why Choose Explorer Investments
    </h2>
 
 

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#002D3D] text-base">
  <div className="p-6 flex items-start gap-4">
    <LineChart size={24} />
    <div>
      <h3 className="font-semibold text-lg mb-2">Real Returns</h3>
      <p>3x target MOIC from a fund with institutional-grade performance.</p>
    </div>
  </div>

  <div className="p-6 flex items-start gap-4">
    <ShieldCheck size={24} />
    <div>
      <h3 className="font-semibold text-lg mb-2">Secure & Regulated</h3>
      <p>Overseen by CMVM with over 20 years of private equity experience.</p>
    </div>
  </div>

  <div className="p-6 flex items-start gap-4">
    <CalendarClock size={24} />
    <div>
      <h3 className="font-semibold text-lg mb-2">Minimal Stay</h3>
      <p>Only 7 days per year required to maintain your residency status.</p>
    </div>
  </div>

  <div className="p-6 flex items-start gap-4">
    <Users size={24} />
    <div>
      <h3 className="font-semibold text-lg mb-2">Family Coverage</h3>
      <p>Include your spouse and dependent children under the same visa.</p>
    </div>
  </div>

  <div className="p-6 flex items-start gap-4">
    <Flag size={24} />
    <div>
      <h3 className="font-semibold text-lg mb-2">Fast Track to Citizenship</h3>
      <p>Permanent residency after 5 years. Apply for citizenship in 6.</p>
    </div>
  </div>

  <div className="p-6 flex items-start gap-4">
    <Globe size={24} />
    <div>
      <h3 className="font-semibold text-lg mb-2">Full EU Access</h3>
      <p>Live, work, and travel freely across the entire European Union.</p>
    </div>
  </div>
</div>

  </div>
</section></>
  );
};

export default GoldenVisaGuide;