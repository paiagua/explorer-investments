'use client';

import { AlertTriangle, Anchor, Clock, Flag } from 'lucide-react';
import React from 'react';
	  import BlogArticles from "./BlogArticles";
/**
 * WhyNowSection
 * - Alinhado ao teu layout (azul #002741, dourado #B4A77E)
 * - Ícones dourados
 * - CTA final com scroll suave para o formulário ("DivAskSimulation")
 * - Responsivo: 1x4 -> 2x2 -> 4 colunas
 */
export default function WhyNowSection({
  ctaText = 'Begin My Golden Visa Application',
  ctaHref = '#DivAskSimulation', // se começa por #, faz scroll suave
  onCtaClick, // opcional: callback externo
}) {
  const items = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-[#B4A77E]" aria-hidden />,
      title: 'EU Pressure on Golden Visa Programs',
      body:
        "The landscape is shifting for all Golden Visa schemes. The EU’s top court recently struck down Malta’s citizenship-by-investment program, and Brussels continues to pressure member states to phase out or restrict Golden Visas. While the programs remain in place, they are becoming increasingly limited.",
    },
    {
      icon: <Anchor className="h-8 w-8 text-[#B4A77E]" aria-hidden />,
      title: 'Grandfathering Protection',
      body:
        "Most jurisdictions apply the principle of fairness, ensuring that existing applicants are protected (‘grandfathered’) under the rules in force at the time of their application. Submitting an application now helps lock in today’s conditions.",
    },
    {
      icon: <Clock className="h-8 w-8 text-[#B4A77E]" aria-hidden />,
      title: 'Portugal’s Citizenship Timeline at Risk',
      body:
        "In Portugal, one of the most attractive features - the five‑year path to citizenship - is under review. The government is considering extending the timeline (potentially to 10 years). While permanent residency will remain available, acting now gives applicants a strong chance (though not a guarantee) of securing the shorter five‑year route.",
    },
    {
      icon: <Flag className="h-8 w-8 text-[#B4A77E]" aria-hidden />,
      title: 'U.S. Political Uncertainty',
      body:
        'Shifts are happening across the Atlantic as well. Political volatility in the United States is at historic highs, with proposals once unthinkable now entering mainstream debate. For many investors, securing a “Plan B” abroad while conditions remain favorable has become a priority.',
    },
  ];

  const isHashHref = typeof ctaHref === 'string' && ctaHref.startsWith('#');

  const handleClick = () => {
    if (onCtaClick) {
      onCtaClick();
      return;
    }
    if (isHashHref) {
      const id = ctaHref.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    // fallback: navega normal se for link absoluto/relativo
    if (typeof window !== 'undefined' && ctaHref) {
      window.location.href = ctaHref;
    }
  };

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
       <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0C2A45]">
  Why <span className="text-[#B4A77E]">Now</span> ?
  <br className="block sm:hidden" />
  Why the <span className="text-[#B4A77E]">Rush</span>?
</h2>

          <p className="mt-4 text-slate-500 text-base sm:text-lg">
            A Golden Visa investment is a significant undertaking, and proper due diligence is essential.
            However, there are compelling reasons behind the recent surge in applications:
          </p>
        </div>

        {/* Reasons grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#0C2A45] leading-snug">
                {item.title}
              </h3>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Callout banner with CTA */}
        <div className="mt-12 sm:mt-14">
          <div className="rounded-2xl bg-gradient-to-r from-[#002741] to-[#003952] text-white px-5 py-6 sm:px-8 sm:py-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              <p className="text-center sm:text-left text-sm sm:text-base font-medium flex-1">
                While careful due diligence is always essential, these factors explain why more qualified investors are
                choosing to move quickly-before today’s opportunities narrow or disappear altogether.
              </p>

              <button
                onClick={handleClick}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#B4A77E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#9c9067] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B4A77E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#003952] active:scale-[0.99]"
                aria-label={ctaText}
              >
                {ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    
    </section>
   
  );
}
