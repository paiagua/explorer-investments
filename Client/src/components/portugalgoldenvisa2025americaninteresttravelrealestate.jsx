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
 import { Home as HomeIcon } from "lucide-react";


 
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
            Portugal Golden Visa 2025: Surge of American Interest in Travel & Real Estate
          </span>
        </span>
      </h2>

      <div className="space-y-6 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          Portugal’s Golden Visa program, one of the last EU residency-by-investment routes, is experiencing record demand from U.S. investors in 2025. A recent Constitutional Court ruling confirmed the program’s long-term stability, strengthening its reputation as a safe gateway to Europe.
        </p>

        <p className="font-semibold flex items-center gap-2 text-base">
          <TrendingUp className="w-5 h-5 text-[#B4A77E]" /> U.S. Demand Reaches Record High
        </p>
        <p>
          According to Portugal’s AIMA, approvals from U.S. citizens rose 72% in the first half of 2025 compared with the same period in 2024. Families and entrepreneurs see Portugal as a stable base with visa-free Schengen access and a potential EU passport within five years.
        </p>

        <p className="font-semibold flex items-center gap-2 text-base">
          <UserCheck className="w-5 h-5 text-[#B4A77E]" /> Key Advantages for American Applicants
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Minimal stay: only 7 days per year required</li>
          <li>Full family inclusion: spouse, children, dependent parents</li>
          <li>Visa-free travel across 26 Schengen countries</li>
          <li>Path to EU citizenship in 5 years</li>
          <li>Residency clock starts at application date</li>
        </ul>

        <p className="font-semibold flex items-center gap-2 text-base">
          <HomeIcon className="w-5 h-5 text-[#B4A77E]" /> Real Estate & Economic Impact
        </p>
        <p>
          Lisbon, Porto, and the Algarve remain prime choices for luxury apartments, seaside resorts, and vacation homes. Since 2012, Portugal’s Golden Visa program has raised over €7 billion, boosting real estate, business growth, and job creation.
        </p>

        <p className="font-semibold flex items-center gap-2 text-base">
          <Globe className="w-5 h-5 text-[#B4A77E]" /> Lifestyle, Sustainability & Integration
        </p>
        <p>
          Beyond residency, the program helps investors integrate into Portuguese life. With a mix of cultural vibrancy, eco-friendly infrastructure, and year-round tourism appeal, Portugal offers both luxury and sustainability.
        </p>

        <p className="italic">
          “Portugal’s Golden Visa isn’t just a residency card - it’s a golden ticket to Europe’s lifestyle, travel freedom, and long-term security.”
        </p>
      </div>

      <div className="pb-10">
        <h3 className="text-white text-lg font-semibold mb-4">
          Your Trusted Investor Relations Team
        </h3>

        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
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