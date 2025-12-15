import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRouter } from "next/navigation";

 import CtaSection from './CtaSection';  

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
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 text-left">
            <span className="inline-flex items-start gap-3">
              <AlertTriangle className="w-10 h-10 text-[#B4A77E] mt-1" />
              <span className="leading-tight">
                5 Expensive Mistakes to Avoid When Applying for the Portugal Golden Visa in 2025
              </span>
            </span>
          </h2>

          <div className="space-y-5 text-sm sm:text-base leading-relaxed text-justify">
            <p>As of 2025, the Portugal Golden Visa remains one of Europe’s most appealing residency-by-investment programs. With access to the Schengen Area, a potential path to EU citizenship in just five years, and no full-time residency requirement, it continues to attract global investors - particularly after key reforms reshaped the program in 2023 and 2024.</p>

            <p>However, despite its advantages, many applicants fall into avoidable traps that can cost time, money, and even result in visa rejections.</p>

            <p>This article explores the 5 most expensive mistakes - and how Explorer Investments helps you avoid them with confidence.</p>

            <ul className="space-y-8">
              <li>
                <p className="font-semibold flex items-center gap-2 text-base">
                  <Ban className="w-5 h-5 text-red-600" /> Investing in Ineligible Assets
                </p>
                <p>Many mistakenly invest in apartments in Lisbon or Porto thinking they're eligible - but real estate no longer qualifies.</p>
                <p className="flex items-start gap-2 text-sm">
                  <ThumbsUp className="w-4 h-4 text-green-500 mt-1" /> <span>Choose eligible paths like CMVM-regulated funds or cultural/research donations.</span>
                </p>
              </li>

              <li>
                <p className="font-semibold flex items-center gap-2 text-base">
                  <Ban className="w-5 h-5 text-red-600" /> Working with Unregulated or Inexperienced Advisors
                </p>
                <p>Unqualified consultants promise quick wins, but lead to errors or legal issues.</p>
                <p className="flex items-start gap-2 text-sm">
                  <ThumbsUp className="w-4 h-4 text-green-500 mt-1" /> <span>Partner with licensed lawyers and investment professionals - like Explorer Investments.</span>
                </p>
              </li>

              <li>
                <p className="font-semibold flex items-center gap-2 text-base">
                  <Ban className="w-5 h-5 text-red-600" /> Failing to Plan for Tax and Residency Impact
                </p>
                <p>Many trigger tax residency without realizing it, especially HNWIs.</p>
                <p className="flex items-start gap-2 text-sm">
                  <ThumbsUp className="w-4 h-4 text-green-500 mt-1" /> <span>Consult tax experts to structure your investment and time in Portugal correctly.</span>
                </p>
              </li>

              <li>
                <p className="font-semibold flex items-center gap-2 text-base">
                  <Ban className="w-5 h-5 text-red-600" /> Submitting Incomplete or Incorrect Documentation
                </p>
                <p>Translation, apostille, and document date issues cause frequent delays.</p>
                <p className="flex items-start gap-2 text-sm">
                  <ThumbsUp className="w-4 h-4 text-green-500 mt-1" /> <span>Use vetted partners for accurate, accepted paperwork - Explorer supports every step.</span>
                </p>
              </li>

              <li>
                <p className="font-semibold flex items-center gap-2 text-base">
                  <Ban className="w-5 h-5 text-red-600" /> Choosing the Wrong Investment Fund
                </p>
                <p>Not all funds are compliant or transparent. High returns ≠ safety.</p>
                <p className="flex items-start gap-2 text-sm">
                  <ThumbsUp className="w-4 h-4 text-green-500 mt-1" /> <span>Go with CMVM-regulated funds with strong governance - Explorer specializes in this.</span>
                </p>
              </li>
            </ul>

            <p className="font-semibold flex items-center gap-2 pt-6 text-base">
              <BadgeCheck className="w-5 h-5 text-[#B4A77E]" /> Final Thoughts
            </p>
            <p>Portugal’s Golden Visa is still one of the EU’s most robust residency pathways. Avoid these mistakes and work with trusted partners to ensure success from the start.</p>

            <p className="mt-4 font-semibold">Ready to start?</p>
            <p> Reach out to Explorer Investments today for a fully compliant fund and smooth Golden Visa journey.</p>
          </div>
    <CtaSection />
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