// BannerCTA.tsx
"use client";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function BannerCTA() {
  return (
    <section
      aria-label="Golden Visa CTA"
      className="relative mt-8 md:mt-12 rounded-2xl overflow-hidden"
    >
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002D3D] via-[#0c3f52] to-[#15506a]" />
      <div className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 text-white grid gap-6 md:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <p className="uppercase tracking-wide text-[#B4A77E] font-semibold text-xs sm:text-sm">
            Portugal Golden Visa
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
            Want to learn how to apply for Portugal’s Golden Visa?
          </h2>
          <p className="mt-3 text-white/90 max-w-2xl">
            Book a meeting with an <span className="font-semibold">Explorer Investments</span> fund advisor and get clear,
            practical guidance on eligibility, timelines, and fund options.
          </p>

          <ul className="mt-4 text-sm text-white/90 space-y-1">
            <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#B4A77E]" /> CMVM-regulated funds</li>
            <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#B4A77E]" /> Transparent fees & reporting</li>
            <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#B4A77E]" /> Visa process clarity</li>
          </ul>
        </div>

<div className="flex md:justify-end">
  <Link
    href="/"
    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold px-6 py-3 text-base transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B4A77E]"
    aria-label="Go to homepage to book your consultation"
  >
    Book Your Free Consultation
    <ArrowRight className="w-5 h-5" />
  </Link>
</div>

      </div>
    </section>
  );
}
