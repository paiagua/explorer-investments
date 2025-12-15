import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BlogArticles from "./BlogArticles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faPhone,
  faTv,
  faCommentDots,
  faIdCard,
  faArrowRight,
  faArrowDown,
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
} from "lucide-react";

const GoldenVisaGuide = () => {
  const router = useRouter();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Golden Visas in Portugal and the Explorer Funds: A Deep Dive into 2025
            </h1>
            <p className="text-base sm:text-lg text-[#15364A]">
              Portugal’s Golden Visa is evolving. With real-estate routes restricted,{" "}
              <strong>eligible, CMVM-regulated funds</strong> have become the primary path.
              This guide explains the program, 2023-2025 stats & trends, how{" "}
              <strong>Explorer Investments</strong> fits in, and the key opportunities,
              risks, and action items for investors.
            </p>

            {/* Table of Contents */}
            <nav
              aria-label="Table of contents"
              className="mt-6 border border-[#E4E0CF] rounded-xl p-4 bg-[#FFFCF3]"
            >
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#B4A77E]" /> Contents
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                {[
                  { id: "what-is", label: "What Is the Portugal Golden Visa? (ARI)" },
                  { id: "stats", label: "Recent Statistics & Trends (2023-2025)" },
                  { id: "explorer", label: "Explorer Investments / Funds: Role & Appeal" },
                  { id: "opportunities", label: "Opportunities & Risks" },
                  { id: "tips", label: "Strategic Tips for Investors" },
                  { id: "conclusion", label: "Conclusion & Outlook" },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-[#002741] hover:underline"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.header>

          {/* INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
            className="space-y-5 text-sm sm:text-base leading-relaxed"
          >
            <p>
              Portugal’s Golden Visa (residence by investment) program has long attracted
              international capital and non-EU investors seeking European residence. With
              real-estate options curtailed, the <em>fund route</em> now dominates.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>What the Portugal Golden Visa is and how it evolved</li>
              <li>Latest statistics and investment trends</li>
              <li>The role and appeal of <strong>Explorer Investments / Explorer Funds</strong></li>
              <li>Opportunities, risks, and strategic considerations</li>
              <li>Conclusions and recommendations for investors</li>
            </ul>
          </motion.div>

          {/* WHAT IS */}
          <section id="what-is" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BadgeCheck className="w-6 h-6 text-[#B4A77E]" />
              What Is the Portugal Golden Visa? (ARI)
            </h2>
            <p>
              The Portuguese Golden Visa - formally the{" "}
              <strong>Residence Permit for Investment Activity (ARI)</strong> - launched
              in October 2012. It enables non-EU nationals to secure residency by meeting
              defined investment criteria.
            </p>

            <h3 className="font-semibold">Eligible investment modalities (historically)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Real estate acquisition</li>
              <li>Capital transfer into funds (private equity / venture capital)</li>
              <li>Contributions to scientific research or cultural heritage</li>
              <li>Job creation (minimum 10 full-time jobs)</li>
            </ul>

            <p className="mt-2">
              <strong>Reforms:</strong> real-estate investment is no longer eligible for
              new applications in many areas. The emphasis is now on{" "}
              <strong>fund investment</strong>, capital transfer, research, and cultural
              support.
            </p>

            <h3 className="font-semibold">Other core conditions</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Maintain the investment for a minimum of <strong>5 years</strong></li>
              <li>
                Stay requirement typically around <strong>7 days per year</strong> in
                Portugal
              </li>
              <li>Family inclusion: spouse, children, and dependent parents</li>
              <li>
                After 5 years, potential eligibility for permanent residency and later
                citizenship (subject to language and legal requirements)
              </li>
            </ul>
          </section>

          {/* STATS */}
          <section id="stats" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-[#B4A77E]" />
              Recent Statistics & Trends (2023-2025)
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-[#E9E6D8] bg-[#FFFEFA]">
                <p className="text-3xl font-extrabold">4,987</p>
                <p className="text-sm">Golden Visa grants in 2024 (applicants + dependents)</p>
              </div>
              <div className="p-4 rounded-lg border border-[#E9E6D8] bg-[#FFFEFA]">
                <p className="text-3xl font-extrabold">~13,000</p>
                <p className="text-sm">Total residence permits since inception</p>
              </div>
            </div>

            <h3 className="font-semibold mt-2">Investment composition & shifts</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>2023 total ≈ €70.9M: ≈ €50.08M real estate vs ≈ €20.82M fund/capital</li>
              <li>Funds grew rapidly; by 2023, ≈ 30% of Golden Visa permits</li>
              <li>Geographic restrictions redirected demand toward funds</li>
            </ul>

            <h3 className="font-semibold mt-2">Nationalities & origins</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>China remains significant but with a declining share</li>
              <li>Brazil consistently second</li>
              <li>U.S. applicants rising (some reports ≈ 20% of applications)</li>
              <li>Turkey, South Africa, and GCC countries notable as well</li>
            </ul>

            <h3 className="font-semibold mt-2">Challenges & backlogs</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Processing delays with tens of thousands pending (2023-2025)</li>
              <li>Litigation exists but volume constrains effectiveness</li>
            </ul>
          </section>

          {/* EXPLORER */}
          <section id="explorer" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <LineChart className="w-6 h-6 text-[#B4A77E]" />
              Explorer Investments / Explorer Funds: Role & Appeal
            </h2>

            <h3 className="font-semibold">Who is Explorer Investments?</h3>
            <p>
              <strong>Explorer Investments</strong> is a Lisbon-based alternative asset
              manager (founded 2003) focused on private equity, growth, and hospitality.
              The firm manages <strong>open funds</strong> that can be eligible for the
              Golden Visa, with strong emphasis on operational value creation.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-[#F9F9FC] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-semibold">Fund eligibility</p>
                  <p className="text-sm">CMVM-regulated structures aligned to ARI rules.</p>
                </div>
              </div>
              <div className="p-4 rounded-lg border bg-[#F9F9FC] flex items-start gap-3">
                <Users className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-semibold">Diversification & active management</p>
                  <p className="text-sm">
                    Exposure to multiple assets/sectors vs. a single property.
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-lg border bg-[#F9F9FC] flex items-start gap-3">
                <TrendingUp className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-semibold">Track record & governance</p>
                  <p className="text-sm">Professional oversight and exit discipline.</p>
                </div>
              </div>
              <div className="p-4 rounded-lg border bg-[#F9F9FC] flex items-start gap-3">
                <Flag className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-semibold">Hospitality value creation</p>
                  <p className="text-sm">
                    Operational upgrades can drive occupancy/ADR/margins.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* OPPORTUNITIES & RISKS */}
          <section id="opportunities" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BadgeCheck className="w-6 h-6 text-[#B4A77E]" />
              Opportunities & Risks
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Opportunities</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Diversified exposure vs. single-asset risk</li>
                  <li>Upside from growth equity and hospitality</li>
                  <li>Golden Visa compliance via fund route</li>
                  <li>Professional selection and execution</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Risks</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Illiquidity / lock-up periods</li>
                  <li>Performance sensitive to manager & cycle</li>
                  <li>Regulatory change risk</li>
                  <li>Administrative backlogs & delays</li>
                </ul>
              </div>
            </div>
          </section>

          {/* TIPS */}
          <section id="tips" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-[#B4A77E]" />
              Strategic Tips for Investors
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Due diligence:</strong> review Explorer’s performance, fund docs,
                exits, and transparency.
              </li>
              <li>
                <strong>Time horizon fit:</strong> ensure lock-ups match residency plan.
              </li>
              <li>
                <strong>Tax & legal counsel:</strong> Portuguese tax, DTTs, immigration law.
              </li>
              <li>
                <strong>Policy watch:</strong> monitor reforms (e.g., social/solidarity visa
                ideas) that may complement ARI.
              </li>
              <li>
                <strong>Manage expectations:</strong> factor in processing backlogs.
              </li>
            </ul>
          </section>

          {/* CONCLUSION */}
          <section id="conclusion" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Flag className="w-6 h-6 text-[#B4A77E]" />
              Conclusion & Outlook
            </h2>
            <p>
              Portugal’s Golden Visa is shifting from real-estate dominance to fund-based
              strategies. In this landscape, <strong>Explorer Investments</strong> sits in
              a strategic position with eligible open funds. Success still depends on
              diligent selection, clear timelines, and ongoing regulatory awareness.
            </p>
            <p>
              For many investors, a well-chosen Explorer fund can combine legal eligibility
              with exposure to growth - not a guarantee, but one of the most compelling
              paths in today’s framework.
            </p>
          </section>

          {/* TRUST / CONTACT */}
          <div className="pb-10 mt-8">
            <h3 className="text-[#002741] text-lg font-semibold mb-4">
              Speak with an Investor Relations Lead
            </h3>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              {/* André */}
              <div className="flex items-start gap-4">
                <img
                  src="https://goldenvisashub.com/assets/images/andre_2025.jpg"
                  alt="André Bandeira"
                  className="w-16 h-16 rounded-full object-cover border"
                  loading="lazy"
                />
                <div className="text-sm leading-snug">
                  <p className="font-bold">André Bandeira</p>
                  <a
                    href="mailto:ab@explorerinvestments.com?subject=Golden%20Visa%20Investment%20Inquiry"
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
                  className="w-16 h-16 rounded-full object-cover border"
                  loading="lazy"
                />
                <div className="text-sm leading-snug">
                  <p className="font-bold">Maria Campos Silva</p>
                  <a
                    href="mailto:mcs@explorerinvestments.com?subject=Golden%20Visa%20Investment%20Inquiry"
                    className="flex items-center gap-2 text-[#B4A77E] hover:underline"
                  >
                    <FontAwesomeIcon icon={faEnvelope} /> mcs@explorerinvestments.com
                  </a>
                </div>
              </div>
            </div>

            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-base px-6 py-3 rounded-full transition"
            >
              <FontAwesomeIcon icon={faFileSignature} />
              Book a Free Strategy Session
            </Link>
          </div>
        </div>
      </section>
 
      {/* WHY EXPLORER */}
      <section className="bg-[#F9F9FC] py-16 px-4">
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#002D3D] text-left mb-10">
            Why Choose Explorer Investments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#002D3D] text-base">
            <div className="p-6 flex items-start gap-4 bg-white rounded-xl border">
              <LineChart size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Real Returns</h3>
                <p>Institutional-grade performance with disciplined value creation.</p>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4 bg-white rounded-xl border">
              <ShieldCheck size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Secure & Regulated</h3>
                <p>CMVM oversight and 20+ years operating in Portugal.</p>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4 bg-white rounded-xl border">
              <CalendarClock size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Minimal Stay</h3>
                <p>Maintain residency with approximately 7 days per year.</p>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4 bg-white rounded-xl border">
              <Users size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Family Coverage</h3>
                <p>Include spouse and dependent children under the same visa.</p>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4 bg-white rounded-xl border">
              <Flag size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Fast Track to Citizenship</h3>
                <p>Permanent residency after 5 years; citizenship application thereafter.</p>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4 bg-white rounded-xl border">
              <Globe size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Full EU Access</h3>
                <p>Live, work, and travel throughout the European Union.</p>
              </div>
            </div>
          </div>
        </div>
<div className="flex justify-center mt-[20px]">
  <Link
    href="/"
    className="bg-[#002741] border border-white text-white text-sm font-semibold px-6 py-3 rounded-full   transition inline-flex items-center justify-center gap-2 w-auto"
  >
    Get Portuguese Golden Visa
  </Link>
</div>



      </section>

      {/* RELATED ARTICLES */}
      <BlogArticles />
    </>
  );
};

export default GoldenVisaGuide;
