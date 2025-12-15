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
                  Beyond the Investment: How to Calculate the True Value of European Residency Through Portugal’s Golden Visa
                </span>
              </span>
            </h2>

            <div className="space-y-6 text-sm sm:text-base leading-relaxed text-justify">
              <p><strong>Is €500,000 really worth it?</strong> That’s the question every family considering Portugal’s Golden Visa ends up asking. It’s easy to focus on the upfront cost - especially when that number represents a major financial commitment. But the smartest investors don’t just look at the price tag - they assess the total lifetime value of European residency.</p>

              <p className="font-semibold flex items-center gap-2 text-base">
                <Users className="w-5 h-5 text-[#B4A77E]" /> Why Families Are Choosing the Portugal Golden Visa in 2025
              </p>
              <p>European residency isn't just about location - it’s about freedom, opportunity, and long-term financial advantage, especially for globally minded families. Portugal's Golden Visa program is uniquely positioned to deliver high-value returns not just in lifestyle, but in education, healthcare, business mobility, and generational security.</p>

              <p className="font-semibold flex items-center gap-2 text-base">
                <Euro className="w-5 h-5 text-[#B4A77E]" /> Hidden Costs of Living Without EU Residency
              </p>
              <p>Before you calculate what European residency gives you, think about what it costs to live without it - especially as a non-EU passport holder:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Education:</strong> International MBA: €60,000-€80,000; EU Resident: €15,000-€25,000</li>
                <li><strong>Business Travel:</strong> Visa friction and delays hurt efficiency and costs</li>
                <li><strong>Healthcare:</strong> Portugal offers one of the best systems worldwide - free for residents</li>
              </ul>

              <p className="font-semibold flex items-center gap-2 text-base">
                <FileText className="w-5 h-5 text-[#B4A77E]" /> Full Portfolio of Golden Visa Benefits
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Education savings: €150,000-€300,000 per child</li>
                <li>Freedom to live/work across 27 EU countries</li>
                <li>Healthcare access for the whole family</li>
                <li>Spouse and children included</li>
              </ul>

              <p className="font-semibold flex items-center gap-2 text-base">
                <BadgeCheck className="w-5 h-5 text-[#B4A77E]" /> Why the Explorer Fund Is the Smartest Route
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Portugal’s largest private equity firm with €1.8B AUM</li>
                <li>20+ years experience; CMVM regulated</li>
                <li>Target 3x MOIC; Institutional-grade transparency</li>
                <li>Only major fund allowing co-investment with institutions</li>
              </ul>

              <p><strong>Why not real estate?</strong> Fund-based options require no property maintenance, offer sector diversification (tech, renewables, tourism), and are legally compliant.</p>

              <p className="font-semibold flex items-center gap-2 text-base">
                <Globe className="w-5 h-5 text-[#B4A77E]" /> The Real Value Compounds Over Time
              </p>
              <p>The Golden Visa is a gateway to EU citizenship in just 5-6 years. With visa-free access to 190+ countries and rights that pass to future generations, the €500,000 investment pays dividends far beyond financial return.</p>

              <p className="font-semibold flex items-center gap-2 text-base">
                <Play className="w-5 h-5 text-[#B4A77E]" /> Conclusion: Is €500,000 Too Much?
              </p>
              <p>When families calculate real returns - from education savings, healthcare access, career freedom, to mobility and lifestyle - they find break-even happens in under 15 years. And the upside continues growing.</p>
              <p><em>You’re not just buying benefits. You’re buying options.</em></p>

              <p className="font-semibold flex items-center gap-2 text-base">
                <Send className="w-5 h-5 text-[#B4A77E]" /> Start Your Journey with Explorer
              </p>
              <p><strong>Contact our team:</strong><br />
                André Bandeira - <a href="mailto:ab@explorerinvestments.com" className="text-[#B4A77E] hover:underline">ab@explorerinvestments.com</a><br />
                Maria Campos Silva - <a href="mailto:mcs@explorerinvestments.com" className="text-[#B4A77E] hover:underline">mcs@explorerinvestments.com</a>
              </p>
              <p>📍 Lisbon offices & online consultations available.</p>
              <p><strong>The real question isn’t “Is €500,000 a lot?” - it’s “Does EU residency return more than €500,000 in value?”</strong></p>
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