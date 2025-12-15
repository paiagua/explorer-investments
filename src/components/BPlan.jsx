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
  Info, RefreshCcw, Euro, BriefcaseBusiness, Microscope, Landmark, Users, // ✅ keep Users here
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
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 text-left">
              <span className="inline-flex items-start gap-3">
                <BadgeCheck className="w-10 h-10 text-[#B4A77E] mt-1" />
                <span className="leading-tight">
                  Portugal Golden Visa: A Plan B for Americans in a Changing World
                </span>
              </span>
            </h1>

            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-justify">
              <p>In an era marked by economic uncertainty, political shifts, and increased global mobility, American investors are seeking new opportunities for stability, freedom, and long-term planning. The Portugal Golden Visa presents a compelling solution - a strategic Plan B offering both security and financial growth within the European Union.</p>

              <p>Since its inception, Portugal’s Golden Visa program has attracted global investors, and in 2025, it’s more relevant than ever. With U.S. citizens facing growing concerns over taxation, inflation, and global instability, a second residency offers unmatched flexibility - and Portugal stands out with its lifestyle, tax-friendly regime, and strong legal infrastructure.</p>

              <h2 className="text-lg font-semibold pt-4">Why Portugal Is the Ultimate Plan B</h2>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li><strong>Geopolitical Safety:</strong> Portugal ranks among the safest countries globally, offering a peaceful environment with strong rule of law.</li>
                <li><strong>Strategic EU Access:</strong> Residency enables visa-free travel across 27+ Schengen countries and facilitates access to global markets.</li>
                <li><strong>Attractive Tax Options:</strong> Portugal’s Non-Habitual Resident (NHR) regime offers 10 years of favorable tax treatment for new residents.</li>
                <li><strong>Minimal Stay Requirement:</strong> Just 7 days per year in Portugal to maintain your Golden Visa.</li>
              </ul>

              <h2 className="text-lg font-semibold pt-4">How to Qualify as an American Investor</h2>
              <p>Real estate is no longer an option - but fund investment is. The most secure route is through a CMVM-regulated fund like the one offered by Explorer Investments.</p>
              <p><strong>Minimum Investment:</strong> €500,000</p>
              <p><strong>Eligibility:</strong> U.S. investors are fully eligible. No Portuguese language requirement, and family members can be included.</p>

              <h2 className="text-lg font-semibold pt-4">Why Explorer Investments?</h2>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Portugal’s #1 private equity firm with over €1.8 billion AUM</li>
                <li>20+ years of investment experience and institutional credibility</li>
                <li>Fully CMVM-regulated with audited performance</li>
                <li>Co-investment model with major institutions (not just Golden Visa applicants)</li>
              </ul>

              <p className="mt-4 font-semibold">Make Your Next Move Global</p>
              <p>In a changing world, securing a foothold in the EU is more than a privilege - it’s a smart strategy. Whether for future relocation, retirement planning, or simply expanding your global footprint, the Portugal Golden Visa delivers real options.</p>

              <p>Reach out to Explorer Investments for tailored guidance and a secure path to European residency.</p>
            </div>

            <div className="pb-10 pt-8">
              <h3 className="text-white text-lg font-semibold mb-4">
                Your Trusted Investor Relations Team
              </h3>

              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
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

              <button
                onClick={() => navigate("/")}
                className="mt-[30px] mb-[40px] bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-base px-6 py-3 rounded-full transition text-center inline-flex items-center gap-2"
              >
                <Send size={18} strokeWidth={2} />
                <span>Start Your Investor Journey</span>
              </button>
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
</section></>
  );
};

export default GoldenVisaGuide;