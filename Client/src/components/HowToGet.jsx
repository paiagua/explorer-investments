import React from "react";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";



import BlogArticles  from './BlogArticles';
import Link from "next/link";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
<h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 text-left">
  <span className="inline-flex items-start gap-3">
    <Plane className="w-10 h-10 text-[#B4A77E] mt-1" />
    <span className="leading-tight">
      How to Get a Golden Visa: The 2025 Portugal Guide
    </span>
  </span>
</h2>


          <div className="space-y-5 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              Since its launch in 2012, Portugal’s Golden Visa program has attracted over 10,000 investors from across the globe. As of 2025, the program has undergone significant changes following reforms implemented in 2023-2024. This guide provides a comprehensive look at how to get the Golden Visa in Portugal in 2025, including the current eligible investments, legal steps, benefits, and common pitfalls.
            </p>

        

            <p className="font-semibold flex items-center gap-2">
              <Info className="w-5 h-5 text-[#B4A77E]" /> What Is the Portugal Golden Visa?
            </p>
            <p>
              The Golden Visa (officially called Autorização de Residência para Atividade de Investimento) is a residence-by-investment program for non-EU/EEA/Swiss nationals who invest in Portugal. It grants the right to live, work, and study in Portugal, and visa-free travel across the Schengen Area.
            </p>
            <p>
              Most importantly, it offers a pathway to Portuguese citizenship after 5 years - without full-time residency.
            </p>

            <p className="font-semibold flex items-center gap-2">
              <RefreshCcw className="w-5 h-5 text-[#B4A77E]" /> What Changed Recently?
            </p>
            <div className="overflow-x-auto rounded-md border border-gray-300">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 font-semibold">Item</th>
                    <th className="px-4 py-2 font-semibold">Before 2023</th>
                    <th className="px-4 py-2 font-semibold">After 2023 (and in 2025)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">Real Estate Investments</td>
                    <td className="px-4 py-2"><ThumbsUp className="inline w-4 h-4 text-green-500" /> Allowed (min. €280k-€500k)</td>
                    <td className="px-4 py-2"><Ban className="inline w-4 h-4 text-red-500" /> No longer eligible</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Capital Transfer (Banking)</td>
                    <td className="px-4 py-2"><ThumbsUp className="inline w-4 h-4 text-green-500" /> €1 million deposit</td>
                    <td className="px-4 py-2"><Ban className="inline w-4 h-4 text-red-500" /> Eliminated</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Job Creation</td>
                    <td className="px-4 py-2"><ThumbsUp className="inline w-4 h-4 text-green-500" /> 10 new jobs</td>
                    <td className="px-4 py-2"><ThumbsUp className="inline w-4 h-4 text-green-500" /> Still valid</td>
                  </tr>
                  <tr className="bg-yellow-50 border-l-4 border-yellow-600">
                    <td className="px-4 py-2 font-semibold">Investment Funds</td>
                    <td className="px-4 py-2 font-semibold"><ThumbsUp className="inline w-4 h-4 text-green-500" /> Min. €500k in VC/private funds</td>
<td className="px-4 py-2 font-semibold">
  <ThumbsUp className="inline w-4 h-4 text-green-500 mr-1" />
  Still valid (
  <button
    onClick={() => navigate("/")}
    className="underline text-blue-600 hover:text-blue-800 font-semibold"
  >
    main route
  </button>
  )
</td>

                  </tr>
                  <tr>
                    <td className="px-4 py-2">Cultural/Research Donations</td>
                    <td className="px-4 py-2"><ThumbsUp className="inline w-4 h-4 text-green-500" /> €250k-€500k</td>
                    <td className="px-4 py-2"><ThumbsUp className="inline w-4 h-4 text-green-500" /> Still valid</td>
                  </tr>
                </tbody>
              </table>
            </div>


            <p className="font-semibold flex items-center gap-2">
              <RefreshCcw className="w-5 h-5 text-[#B4A77E]" /> What Changed Recently?
            </p>
            <div className="overflow-x-auto rounded-md border border-gray-300">
              {/* tabela mantida acima */}
            </div>

            <p className="font-semibold flex items-center gap-2 pt-6">
              <Euro className="w-5 h-5 text-[#B4A77E]" /> Eligible Investment Options in 2025
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <TrendingUp className="mt-1 w-5 h-5 text-[#B4A77E]" />
                <span>
                  <strong>Investment Funds - Min. €500,000</strong><br />
                  Invest in regulated Portuguese venture capital/private equity funds. Funds must invest in local companies or sectors like tech, energy, tourism, or industry. Must be held for a minimum of 5 years. Pros: Lower risk, professional fund managers, portfolio diversification. Cons: Requires due diligence; some funds have high management fees or lock-in periods.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Microscope className="mt-1 w-5 h-5 text-[#B4A77E]" />
                <span>
                  <strong>Scientific Research - Min. €500,000</strong><br />
                  Donate or invest in Portuguese public or private institutions conducting scientific or technological R&D. Example: Universities, biotech startups, or research labs. Pros: Contributes to innovation, low bureaucratic complexity. Cons: Pure donation - no financial return.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Landmark className="mt-1 w-5 h-5 text-[#B4A77E]" />
                <span>
                  <strong>Cultural Heritage Support - Min. €250,000</strong><br />
                  Donation to projects supporting national heritage, arts, and culture. Requires approval from the Ministry of Culture. Pros: Lowest-cost option. Cons: Donation is non-refundable; must be made through pre-approved institutions.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <BriefcaseBusiness className="mt-1 w-5 h-5 text-[#B4A77E]" />
                <span>
                  <strong>Business Creation - Min. 10 Jobs</strong><br />
                  Create a Portuguese company and hire at least 10 employees, full-time and locally contracted. Pros: Long-term residence and potential return. Cons: High administrative and legal burden; must maintain staff minimums.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Users className="mt-1 w-5 h-5 text-[#B4A77E]" />
                <span>
                  <strong>Business Expansion - Min. €500,000 + 5 Jobs</strong><br />
                  Invest €500k+ in an existing Portuguese company, and either create or maintain 5 jobs for 3 years. Pros: Access to existing infrastructure. Cons: Requires oversight, subject to business performance.
                </span>
              </li>
            </ul>

            <p className="font-semibold flex items-center gap-2 pt-6">
              <UserCheck className="w-5 h-5 text-[#B4A77E]" /> Who Can Apply?
            </p>
            <p>To be eligible for the Golden Visa in Portugal (2025), applicants must:</p>
            <ul className="list-disc ml-6">
              <li>Be non-EU/EEA/Swiss citizens</li>
              <li>Be 18 years or older</li>
              <li>Have a clean criminal record</li>
              <li>Make a qualifying investment using lawfully acquired funds</li>
              <li>Maintain the investment for at least 5 years</li>
              <li>Spend a minimum of 7 days per year in Portugal (or 14 days every 2 years)</li>
            </ul>

            <p className="font-semibold flex items-center gap-2 pt-6">
              <ClipboardList className="w-5 h-5 text-[#B4A77E]" /> Application Process (Step-by-Step)
            </p>
            <ol className="list-decimal ml-6 space-y-1">
              <li>Hire a Local Lawyer or Authorized Consultant</li>
              <li>Obtain a NIF (Tax Number) and Open a Bank Account</li>
              <li>Make the Investment</li>
              <li>Gather Documentation</li>
              <li>Submit Online Application (AIMA Portal)</li>
              <li>Attend Biometrics Appointment in Portugal</li>
              <li>Receive Residency Card</li>
            </ol>

            <p className="font-semibold flex items-center gap-2 pt-6">
              <UserPlus className="w-5 h-5 text-[#B4A77E]" /> Family Reunification
            </p>
            <p>Your Golden Visa covers more than just you. Eligible family members include:</p>
            <ul className="list-disc ml-6">
              <li>Spouse or partner</li>
              <li>Minor children</li>
              <li>Dependent adult children (in education)</li>
              <li>Dependent parents (yours or spouse’s)</li>
            </ul>

            <p className="font-semibold flex items-center gap-2 pt-6">
              <GraduationCap className="w-5 h-5 text-[#B4A77E]" /> Benefits of the Golden Visa
            </p>
            <ul className="list-disc ml-6">
              <li>Live, work, and study in Portugal</li>
              <li>Schengen visa-free travel (26 European countries)</li>
              <li>Path to EU citizenship in 5 years</li>
              <li>No full-time residency requirement (only 7 days/year)</li>
              <li>Access to Portuguese public healthcare and education</li>
              <li>Family reunification rights</li>
              <li>Potential tax benefits under the NHR regime (though phased out as of 2024)</li>
            </ul>

            <p className="font-semibold flex items-center gap-2 pt-6">
              <AlertCircle className="w-5 h-5 text-[#B4A77E]" /> Common Pitfalls
            </p>
            <ul className="list-disc ml-6">
              <li>Not using a vetted fund or certified institution</li>
              <li>Mistakes in criminal record documents (apostille issues)</li>
              <li>Failing to meet the minimum stay requirement</li>
              <li>Misunderstanding the tax obligations</li>
              <li>Delays in biometric scheduling (high demand post-COVID and post-reform)</li>
            </ul>

            <p className="font-semibold flex items-center gap-2 pt-6">
              <BadgeCheck className="w-5 h-5 text-[#B4A77E]" /> Path to Citizenship
            </p>
            <p>After 5 years of holding your Golden Visa and meeting the basic residency requirements (minimum stay + integration), you may apply for Portuguese citizenship. You must:</p>
            <ul className="list-disc ml-6">
              <li>Pass an A2-level Portuguese language test</li>
              <li>Have a clean criminal record</li>
              <li>Provide proof of ties to Portugal</li>
            </ul>
            <p>Portugal allows dual citizenship, so you won’t need to renounce your original nationality.</p>

            <p className="font-semibold flex items-center gap-2 pt-6">
              <Pin className="w-5 h-5 text-[#B4A77E]" /> Final Thoughts
            </p>
         <p>
  Despite major changes, the Portugal Golden Visa program remains one of the most flexible and advantageous residency options in Europe. With the end of real estate eligibility, the shift to fund-based and cultural investments reflects national priorities and promotes sustainable growth. Among these, <strong>regulated investment funds have emerged as the most efficient, secure, and ROI-driven path to obtaining a Golden Visa in 2025</strong>. For investors seeking a strategic, EU-compliant residency solution with real financial upside, the fund route stands out as the clear choice - offering diversification, professional management, and a streamlined path to Portuguese citizenship.
</p>


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
<button
  onClick={() => navigate("/")}
  className="mt-[30px] mb-[40px] bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-base px-6 py-3 rounded-full transition text-center inline-flex items-center gap-2"
>
  <Send size={18} strokeWidth={2} />
  <span>
    Start Your Investor Journey
 
 
  </span>
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