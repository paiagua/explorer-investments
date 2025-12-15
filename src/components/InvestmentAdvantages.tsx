// InvestmentAdvantages.tsx
import { FileText, Globe2, PiggyBank, TrendingUp, ShieldCheck, Users2, ArrowRight } from "lucide-react";

const scrollToTop = () => {
  const element = document.getElementById("DivAskSimulation");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const items = [
  {
    icon: FileText,
    title: "Immigration",
    subtitle: "Portuguese Residency Pathway",
    description:
      "5-10 Years: Permanent Residence to Citizenship. Secure Portuguese Golden Visa qualification through compliant investment, with a clear pathway to permanent residency and eventual citizenship eligibility.",
  },
  {
    icon: Globe2,
    title: "Mobility",
    subtitle: "European Union Access",
    description:
      "Gain unrestricted access to live, work, and travel across all 27 European Union member states with full mobility rights.",
  },
  {
    icon: PiggyBank,
    title: "Tax Benefits",
    subtitle: "Tax Optimization Strategy",
    description:
      "Access to NHR 2.0 (Non-Habitual Resident) status providing up to 10 years of favorable tax treatment for qualifying income streams.",
  },
  {
    icon: TrendingUp,
    title: "Investment",
    subtitle: "Diversified Portfolio Growth",
    description:
      "Balanced exposure across markets and asset classes, optimized for tax benefits.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    subtitle: "Regulatory Compliance Assurance",
    description:
      "Full compliance with CMVM Portuguese regulations and U.S. SEC requirements, including comprehensive FATCA and PFIC reporting.",
  },
  {
    icon: Users2,
    title: "Management",
    subtitle: "Institutional Management",
    description:
      "Professional portfolio management by licensed financial advisors, certified planners, and experienced investment specialists.",
  },
];

export default function InvestmentAdvantages() {
  return (
    <section className="w-full py-[40px] px-[15px] md:px-0 bg-gradient-to-b from-white to-[#fffaf0]">
      {/* Header */}
<div className="max-w-6xl mx-auto text-left">
  <h2 className="text-3xl lg:text-4xl font-bold text-[#002D3D] tracking-wide">
    <span className="text-[#C5A253]">Investment Advantages</span>
  </h2>
  <p className="mt-3 text-sm lg:text-base text-[#002D3D]/80 max-w-3xl">
    Key benefits of the <span className="text-[#C5A253] font-semibold">Portuguese & European Golden Visa</span> programs - 
    offering secure, flexible, and fast-track pathways to EU residency and citizenship.
  </p>
  <p className="mt-2 text-sm lg:text-base text-[#002D3D]/80 max-w-3xl">
    Tailored for global investors aiming to combine lifestyle, opportunity, and long-term security within Europe.
  </p>
</div>



      {/* Grid */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, subtitle, description }) => (
          <article
            key={title}
            className="rounded-2xl border border-[#C5A253]/30 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <Icon className="w-7 h-7 text-[#C5A253]" strokeWidth={2} />
            <h3 className="mt-4 text-lg font-semibold text-[#002D3D]">{title}</h3>
            <p className="text-sm font-medium text-[#C5A253]">{subtitle}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#002D3D]/80">
              {description}
            </p>
          </article>
        ))}
      </div>

      {/* CTA */}
<div className="max-w-6xl mx-auto flex justify-center mt-10">
  <button
    onClick={scrollToTop}
    className="bg-[#C5A253] text-white text-sm font-semibold px-6 py-2 rounded-full border border-[#C5A253] hover:bg-white hover:text-[#002D3D] transition-all duration-300 inline-flex items-center gap-2"
  >
    Book Your Free Consultation <ArrowRight size={16} strokeWidth={2} />
  </button>
</div>

    </section>
  );
}
