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
 
  faIdCard,
  faArrowRight,
  faArrowDown,
  faStar,
  faGlobeEurope,
  faChartLine,
  faPassport,
  faFileSignature,
  faPlaneDeparture,
  faUsers,
 
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";


import {
  LineChart,
  ShieldCheck,
  CalendarClock,
  Flag,
  Globe, BadgeCheck,Users
} from "lucide-react";

import {
 
 
  
  faCommentDots,
 
 
 
 
 
 
 
 
  faDownload,
  faCalendarCheck,
 
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
 
 import { Play } from 'lucide-react'; 
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
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 text-left">
              <span className="inline-flex items-start gap-3">
                <BadgeCheck className="w-10 h-10 text-[#B4A77E] mt-1" />
                <span className="leading-tight">
                  Why More Americans Are Choosing Portugal’s €500K Golden Visa Over the Proposed $5M “Trump Gold Card”
                </span>
              </span>
            </h1>

            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-justify">
              <p>In an era where second citizenship is no longer a luxury but a strategic move, high-net-worth Americans are exploring alternatives beyond U.S. borders. With political uncertainty and talk of a $5 million “Trump Gold Card” for investor visas, Portugal’s long-standing Golden Visa program is capturing the spotlight - and it only requires €500,000 to get started.</p>

              <h2 className="text-lg font-semibold pt-4 inline-flex items-center gap-2"><FontAwesomeIcon icon={faGlobeEurope} /> What Is Portugal’s Golden Visa?</h2>
              <p>Portugal’s Golden Visa is a residency-by-investment program that grants non-EU nationals the right to live, work, and travel freely within Europe’s Schengen Zone. In just 5 years, holders can apply for permanent residency or citizenship - all with only 7 days of stay per year required.</p>
              <p>Thousands of Americans have already taken advantage of this smart route to freedom, global access, and generational benefits.</p>

              <h2 className="text-lg font-semibold pt-4 inline-flex items-center gap-2"><FontAwesomeIcon icon={faChartLine} /> Portugal vs. the $5M “Trump Gold Card” Visa</h2>
              <p>While the U.S. debates introducing a $5 million “Gold Card” for wealthy investors - with major concerns about legality, feasibility, and political optics - Portugal offers an established, EU-regulated alternative.</p>

              <ul className="list-disc list-inside pl-4 space-y-2">
                <li><strong>Minimum Investment:</strong> $5,000,000 vs €500,000</li>
                <li><strong>Status:</strong> Proposed, Not Approved vs Active Since 2012</li>
                <li><strong>Residency Path:</strong> TBD vs Yes - 5 Years</li>
                <li><strong>Citizenship:</strong> Unclear vs After 6 Years</li>
                <li><strong>Schengen Access:</strong> No vs Yes - 27 Countries</li>
                <li><strong>Family Inclusion:</strong> Unclear vs Yes - Spouse & Children</li>
              </ul>

              <p>In short: Portugal offers proven benefits now, at a fraction of the price.</p>

              <h2 className="text-lg font-semibold pt-4 inline-flex items-center gap-2"><FontAwesomeIcon icon={faPassport} /> Why More Americans Are Turning to Portugal</h2>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Rising political and social division</li>
                <li>A desire for international mobility and lifestyle</li>
                <li>Tax strategy and investment diversification</li>
                <li>Concerns about future U.S. policies</li>
              </ul>
              <p>Portugal’s lifestyle, safety, and English proficiency make it a top destination for U.S. expats.</p>

              <h2 className="text-lg font-semibold pt-4 inline-flex items-center gap-2"><FontAwesomeIcon icon={faBriefcase} /> Invest Smart with Portugal’s #1 Private Equity Fund</h2>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Minimum Investment: €500,000</li>
                <li>Track Record: Institutional-level performance</li>
                <li>Transparency: Regulated by CMVM</li>
                <li>Investor Benefits: Co-invest with major institutions</li>
                <li>Target Return: Up to 3x MOIC (Multiple on Invested Capital)</li>
              </ul>

              <h2 className="text-lg font-semibold pt-4 inline-flex items-center gap-2"><FontAwesomeIcon icon={faFileSignature} /> Step-by-Step: How to Get Your Portugal Golden Visa</h2>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Book a Free Consultation - Meet an expert to map your journey</li>
                <li>Explore Investment Options - Understand returns, risks, and residency paths</li>
                <li>Receive Your Personalized Roadmap - Tailored to your goals</li>
                <li>Begin Your Application - Supported every step of the way</li>
                <li>Obtain Residency & Citizenship - Freedom begins here</li>
              </ul>

              <h2 className="text-lg font-semibold pt-4 inline-flex items-center gap-2"><FontAwesomeIcon icon={faUsers} /> Family-Friendly & Future-Proof</h2>
              <p>Your investment extends benefits to your spouse and children. You’ll access world-class healthcare, education, and safety - all while enjoying the Mediterranean lifestyle.</p>

              <h2 className="text-lg font-semibold pt-4 inline-flex items-center gap-2"><FontAwesomeIcon icon={faPlaneDeparture} /> Travel Freely. Live Strategically.</h2>
              <p>The Portugal Golden Visa provides visa-free travel to 27 European countries, plus strategic ties to Lusophone nations and global partners. Whether you're escaping volatility or planning a global future, it’s a pathway worth exploring.</p>

              <h2 className="text-lg font-semibold pt-4 inline-flex items-center gap-2"><FontAwesomeIcon icon={faDownload} /> Get Started Today - Free Resources for Americans</h2>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Download the Golden Visa Guide 2025</li>
                <li><FontAwesomeIcon icon={faCalendarCheck} /> Book your Free Strategy Session</li>
                <li><FontAwesomeIcon icon={faBriefcase} /> Talk to Portugal’s Leading Investment Experts</li>
              </ul>

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