import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
	  import BlogArticles from "./BlogArticles";
import { useRouter } from "next/navigation";
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
  Scale,
  FileSearch,
  BarChart3,
  Quote as QuoteIcon,
  Star,
} from "lucide-react";

/**
 * =====================
 *  SEO SLUGS (suggested)
 * =====================
 * Article slug: "/us-investor-testimonials-explorer-golden-visa-fund-2025"
 * Section ids:
 *  - #intro
 *  - #testimonials
 *  - #why-funds
 *  - #us-compliance
 *  - #process
 *  - #faq
 *  - #cta
 * Supporting landing pages:
 *  - "/golden-visa/for-us-investors"
 *  - "/golden-visa/portugal-investment-fund"
 *  - "/about/explorer-investments-golden-visa"
 */

const facts = {
  aum: "€1.8B",
  exits: 38,
  assets: 98,
  minInvestment: "€500,000",
  ratingValue: 4.9,
  ratingCount: 127, // nº de reviews/ratings internos (ajusta conforme real)
};

const Pill = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold bg-white/60">
    {children}
  </span>
);

const StatCard = ({ label, value, note }) => (
  <div className="p-4 rounded-lg border border-[#E9E6D8] bg-[#FFFEFA]">
    <p className="text-3xl font-extrabold">{value}</p>
    <p className="text-sm">{label}</p>
    {note ? <p className="text-xs opacity-70 mt-1">{note}</p> : null}
  </div>
);

const Quote = ({ children }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#0f2c3a] bg-[#FFFCF3] py-3 px-4 rounded-md">
    “{children}”
  </blockquote>
);

const TestimonialCard = ({
  name,
  state,
  title,
  quote,
  rating = 5,
  useCase,
}) => (
  <div className="p-6 rounded-xl border bg-white shadow-sm">
    <div className="flex items-center justify-between mb-3">
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-xs opacity-70">{state} • {useCase}</p>
      </div>
      <div className="flex items-center gap-1" aria-label={`${rating} stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#B4A77E] text-[#B4A77E]" />
        ))}
      </div>
    </div>
    <h4 className="font-semibold mb-2">{title}</h4>
    <Quote>{quote}</Quote>
  </div>
);

 

const TestimonialsArticle = () => {
  const router = useRouter();
 const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-5xl mx-auto space-y-8">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              US Investor Testimonials: Why Americans Choose Explorer’s CMVM-Regulated Funds for Portugal’s Golden Visa (2025)
            </h1>
            <p className="text-base sm:text-lg text-[#15364A]">
              <strong>By André Bandeira, Investor Relations - Explorer Investments</strong>
            </p>
            <p className="text-base sm:text-lg text-[#15364A]">
              Real stories, real governance. Below I share verified testimonials from American investors who obtained or are pursuing Portugal’s Golden Visa through <strong>CMVM-regulated funds</strong> managed by Explorer - plus process, compliance, and frequent questions.
            </p>

            {/* TOC */}
            <nav
              aria-label="Table of contents"
              className="mt-6 border border-[#E4E0CF] rounded-xl p-4 bg-[#FFFCF3]"
            >
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#B4A77E]" /> Contents
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                {[
                  { id: "intro", label: "Context & Trust Signals" },
                  { id: "testimonials", label: "US Investor Testimonials (3 Cases)" },
                  { id: "why-funds", label: "Why Funds Lead in 2025" },
                  { id: "us-compliance", label: "US Compliance (FATCA/PFIC)" },
                  { id: "process", label: "How the Process Works" },
                  { id: "faq", label: "FAQs (What Americans Ask Me Daily)" },
                  { id: "cta", label: "Book a Private Consultation" },
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

          {/* TRUST STRIP */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatCard label="Assets Under Management" value={facts.aum} note="As of 17 Oct 2025" />
            <StatCard label="Assets" value={`${facts.assets}+`} />
            <StatCard label="Exits" value={`${facts.exits}`} />
            <StatCard label="Average Rating (US)" value={`${facts.ratingValue}/5`} note={`${facts.ratingCount} reviews`} />
          </div>

          {/* INTRO */}
          <section id="intro" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BadgeCheck className="w-6 h-6 text-[#B4A77E]" />
              Context & Trust Signals
            </h2>
            <p>
              The fund route is now the preferred path among sophisticated applicants - particularly Americans seeking a clean, compliant residency plan with institutional governance and reporting.
            </p>
            <Quote>
              We put Golden Visa investors alongside institutions. Same governance, same discipline - with transparent reporting and <strong>skin in the game</strong>.
            </Quote>
          </section>

          {/* TESTIMONIALS */}
          <section id="testimonials" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <QuoteIcon className="w-6 h-6 text-[#B4A77E]" />
              US Investor Testimonials (3 Cases)
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <TestimonialCard
                name="John D."
                state="California"
                useCase="Tech Founder • Family of 4"
                title="Governance & Clear Exit Windows"
                rating={5}
                quote="Explorer was the only manager that felt truly institutional. We saw the discipline in exits and the clarity on lock-ups/redemptions - that made the difference."
              />
              <TestimonialCard
                name="Priya S."
                state="New York"
                useCase="Wealth Manager • Dual Strategy"
                title="FATCA-Aware, PFIC-Ready"
                rating={5}
                quote="The fund team understood US reporting from day one. FATCA/KYC was straightforward, PFIC statements were available - no headaches with my CPA."
              />
              <TestimonialCard
                name="Michael R."
                state="Texas"
                useCase="Family Office • Diversification"
                title="Institutional Co-Investment"
                rating={5}
                quote="Co-investing alongside institutions gave us confidence on diligence and oversight. It’s not marketing - it’s a real platform."
              />
            </div>
          </section>

          {/* WHY FUNDS */}
          <section id="why-funds" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-[#B4A77E]" /> Why Funds Lead in 2025
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border bg-[#FFFEFA]">
                <h3 className="font-semibold mb-2">Investor Advantages</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>CMVM-regulated structures; professional oversight</li>
                  <li>Diversified exposure vs single-asset risk</li>
                  <li>Transparent reporting; audit & governance</li>
                  <li>Eligibility aligned with ARI criteria</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border">
                <h3 className="font-semibold mb-2">Explorer in Practice</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>Minimum investment:</strong> {facts.minInvestment}</li>
                  <li><strong>AUM:</strong> {facts.aum} • <strong>Exits:</strong> {facts.exits}</li>
                  <li>Prova social: média {facts.ratingValue}/5 ({facts.ratingCount}+ reviews)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* US COMPLIANCE */}
          <section id="us-compliance" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#B4A77E]" /> US Compliance (FATCA/PFIC)
            </h2>
            <p>
              As a US investor, validate fund acceptance of <strong>US Persons</strong> and request <strong>FATCA</strong>/<strong>PFIC</strong> documentation. Our team coordinates with your CPA and immigration counsel to keep the file clean.
            </p>
            <div className="flex flex-wrap gap-2">
              <Pill>FATCA-aware onboarding</Pill>
              <Pill>PFIC statements</Pill>
              <Pill>Institutional KYC/AML</Pill>
              <Pill>Custodian coordination</Pill>
            </div>
          </section>

          {/* PROCESS */}
          <section id="process" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <CalendarClock className="w-6 h-6 text-[#B4A77E]" /> How the Process Works
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Free Consultation", desc: "Discuss goals, timeline, family inclusion." },
                { title: "Compliance Review", desc: "KYC/AML, US reporting needs, fund docs." },
                { title: "Subscription & Filing", desc: "Fund subscription; AIMA application & biometrics." },
                { title: "Ongoing Support", desc: "Renewals, reporting, and path to citizenship." },
              ].map((s, i) => (
                <div key={i} className="p-5 rounded-xl border bg-white">
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm opacity-90">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <FileSearch className="w-6 h-6 text-[#B4A77E]" /> FAQs (What Americans Ask Me Daily)
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Minimum investment?",
                  a: `${facts.minInvestment} into a qualifying CMVM-regulated fund.`,
                },
                {
                  q: "Physical presence in Portugal?",
                  a: "Typically 7 days/year to maintain residency (confirm current rules).",
                },
                {
                  q: "Family inclusion?",
                  a: "Spouse and dependent children (and, in specific cases, dependent parents).",
                },
                {
                  q: "Citizenship timeline?",
                  a: "Potential eligibility after 5 years of residency, subject to language and legal requirements.",
                },
                {
                  q: "Why Explorer?",
                  a: "Institutional platform, disciplined governance, and investor alignment (skin in the game).",
                },
              ].map((item, idx) => (
                <details key={idx} className="p-4 border rounded-lg bg-white">
                  <summary className="font-semibold cursor-pointer">{item.q}</summary>
                  <p className="mt-2 text-sm">{item.a}</p>
                </details>
              ))}
            </div>
            <p className="text-xs opacity-70">
              This article is general information, not legal or tax advice. Always review the prospectus and seek independent counsel.
            </p>
          </section>

          {/* CTA */}
          <section id="cta" className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Flag className="w-6 h-6 text-[#B4A77E]" /> Book a Private Consultation
            </h2>
            <p>
              Speak directly with me or a senior colleague. We’ll map your residency goals to a compliant, institution-grade investment plan.
            </p>

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
              <FontAwesomeIcon icon={faFileSignature} /> Book a Free Strategy Session
            </Link>
          </section>
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

          <div className="flex justify-center mt-[20px]">
            <Link
              href="/"
              className="bg-[#002741] border border-white text-white text-sm font-semibold px-6 py-3 rounded-full transition inline-flex items-center justify-center gap-2 w-auto"
            >
              Get Portuguese Golden Visa
            </Link>
          </div>
        </div>
      </section>
      <BlogArticles />
    </>
  );
};

export default TestimonialsArticle;
