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
  Flag,
  Globe
} from "lucide-react";

import {
  Info, RefreshCcw, FileWarning, ArrowDownCircle, Euro, BriefcaseBusiness, Microscope, Landmark, Users,  
  AlertTriangle, FileText, Gavel, Plane, Sparkles,
  TrendingUp, Banknote, ThumbsUp, Ban, UserCheck,
  ClipboardList, GraduationCap, AlertCircle, BadgeCheck, Pin, UserPlus
} from "lucide-react";
import { FileCheck } from 'lucide-react';
 import { Play } from 'lucide-react'; 

 
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
                  Golden Visa Portugal: Unlocking EU Residency Through Strategic Fund Investment
                </span>
              </span>
            </h2>
            <div className="space-y-6 text-sm sm:text-base leading-relaxed text-justify">
              <p>The Portugal Golden Visa program, launched in 2012, was designed to attract global capital through residency-by-investment. For over a decade, it provided an accessible path to European Union residency and eventual Portuguese citizenship. Initially favored for its real estate track, the program experienced a pivotal shift in 2023-real estate was officially removed as an eligible route.</p>
              <p>This change reflects Portugal's strategic pivot toward ethical and sustainable investment. The new Golden Visa model prioritizes innovation, green energy, health tech, and other growth-focused sectors, reinforcing Portugal’s image as a forward-thinking gateway to Europe.</p>
              <h3 className="font-semibold text-lg mt-8">What Makes the Golden Visa Portugal Unique</h3>
              <p>Unlike many EU residency programs, Portugal’s Golden Visa boasts minimal physical presence requirements-just 7 days per year. There’s no requirement to relocate, pass language exams at the beginning, or become a tax resident. With visa-free access to the 27 Schengen countries, this model appeals to globally mobile families, investors, and business professionals seeking freedom without upheaval.</p>
              <h3 className="font-semibold text-lg mt-8">Why Choose the Fund Investment Path</h3>
              <p>Following the 2023 reforms, regulated investment funds became the only eligible financial pathway under the Portugal Golden Visa. Approved by the CMVM, these funds offer high levels of transparency, legal compliance, and professional management.</p>
              <p>This approach is ideal for investors who prefer sophisticated financial instruments over the complexities and liabilities of managing physical assets.</p>
              <p>Unlike property purchases, fund investments eliminate issues such as asset management, local taxation complexities, market volatility, and bureaucratic processes. Instead, funds offer transparent structures, exit strategies, sector diversification, and institutional-grade governance.</p>
              <h3 className="font-semibold text-lg mt-8">Key Benefits of Portugal’s Golden Visa Fund Path</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Minimal Physical Residency Requirements: Only 7 days annually in Portugal to maintain your Golden Visa.</li>
                <li>Access to EU Without Relocation: No tax residency required. Live anywhere in the world while holding EU residency.</li>
                <li>Full Family Inclusion: Include spouses, dependent children, and even parents in one application.</li>
              </ul>
              <h3 className="font-semibold text-lg mt-8">Exploring Portugal’s Leading Fund: Explorer Investments</h3>
              <p>Explorer Investments is Portugal’s most trusted private equity firm, managing over €1.8 billion in assets. It’s the only major fund in Portugal allowing Golden Visa investors to co-invest alongside institutional players.</p>
              <p>With transparent performance reports, risk-controlled strategies, and a 3x MOIC target, Explorer delivers high-growth potential backed by professional governance. Their investor relations team - André Bandeira & Maria Campos Silva - offers full onboarding including legal, KYC, AML, and documentation.</p>
              <h3 className="font-semibold text-lg mt-8">Understanding Investor Psychology</h3>
              <p>Today’s investors prioritize strategic diversification, capital protection, and EU residency. They demand compliance, defined exits, and clarity in documentation. Funds like Explorer meet these expectations while simplifying onboarding and legal processes.</p>
              <h3 className="font-semibold text-lg mt-8">Step-by-Step: How to Get Your Golden Visa Through a Fund</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Book a Consultation with Explorer.</li>
                <li>Complete KYC, AML, and Legal Compliance.</li>
                <li>Invest a minimum of €500,000 and hold for 5 years.</li>
                <li>Renew annually by staying just 7 days per year in Portugal.</li>
              </ol>
              <h3 className="font-semibold text-lg mt-8">Legal Compliance and Fund Structure</h3>
              <p>Golden Visa eligible funds must be CMVM-regulated, avoid real estate, allocate 60% to Portuguese companies, and hold a 5-year maturity. Tax advantages include 0% on fund returns for non-residents and 10% flat for residents.</p>
              <h3 className="font-semibold text-lg mt-8">Comparing Portugal to Other EU Golden Visa Programs</h3>
              <p>While other EU programs are suspended or under reform, Portugal continues offering transparent, fund-based residency with minimal requirements and strong investor protections.</p>
              <h3 className="font-semibold text-lg mt-8">Risks and Considerations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Only invest in CMVM-regulated funds</li>
                <li>Understand tax residency rules</li>
                <li>Follow fund terms strictly</li>
                <li>Submit applications on time</li>
              </ul>
              <p>Explorer eliminates these risks by offering legal onboarding and full compliance management.</p>
              <h3 className="font-semibold text-lg mt-8">Frequently Asked Questions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>What is the Portugal Golden Visa?</strong> Residency-by-investment program through regulated funds.</li>
                <li><strong>Minimum investment amount?</strong> €500,000 in CMVM-approved funds.</li>
                <li><strong>Do I need to live in Portugal?</strong> No. Just 7 days/year required.</li>
                <li><strong>How long does it take?</strong> 3-6 months depending on processing.</li>
                <li><strong>Can I include my family?</strong> Yes. Spouse, kids, parents.</li>
                <li><strong>When can I apply for citizenship?</strong> After 5 years of holding the visa.</li>
                <li><strong>Will I be taxed in Portugal?</strong> Only if you become a tax resident.</li>
              </ul>
              <h3 className="font-semibold text-lg mt-8">Conclusion: The Smartest EU Investment Pathway</h3>
              <p>The Golden Visa Portugal is a strategic gateway to EU citizenship. With institutional-grade funds like Explorer, you access transparency, governance, and capital preservation - all with minimal disruption to your lifestyle. Take action now to safeguard your freedom and family’s future.</p>
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
                            src="https://goldenvisashub.com/assets/images/andre_2025.jpg"
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
     <p className="text-base font-semibold text-[#002d3d] mb-2">Free 1-Hour Consultation</p>
      <p className="text-[11px] text-[#002d3d] mb-3">Book your exclusive session with Portugal’s leading investment specialists - with no cost, no obligation.</p>
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
     <button onClick={() => navigate("/")} className="mt-3 md:mt-0 bg-[#002741] border border-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white hover:text-[#002741] transition duration-300 inline-flex items-center gap-1">
       <FileCheck size={16} strokeWidth={2} /> Get Portuguese Golden Visa
     </button>
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
</section>



</>
  );
};

export default GoldenVisaGuide;