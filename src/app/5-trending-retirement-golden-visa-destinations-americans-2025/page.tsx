// ✅ New Article - Trending Destinations Format (in English)
// Fully styled + ready for Explorer Golden Visa positioning

import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
 import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';
 
export const revalidate = 600;
export const fetchCache = 'force-cache';

import { Globe, TrendingUp, ShieldCheck, BarChart, TreePalm, MapPin } from 'lucide-react';

// ===================================================================
// METADATA
// ===================================================================
const SLUG = '5-trending-retirement-golden-visa-destinations-americans-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/usa-trending-destinations.jpg';
const PUBLISHED = '2025-10-28T09:00:00+00:00';

export const metadata = {
  title:
    '5 Trending Retirement & Golden Visa Destinations for Americans (2025)',
  description:
    'Golden visa interest from Americans is surging. Explore the top 5 residency and retirement destinations offering lifestyle, affordability and global mobility - including quotes from André Bandeira at Explorer Investments.',
  openGraph: {
    title: '5 Trending Golden Visa Destinations for Americans (2025)',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

// Helper
const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#002741] bg-[#FFFCF3] py-3 px-4 rounded-md my-6 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

export default function TrendingDestinationsGoldenVisa() {
  return (
    <>
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata) }} />
      <Header />

      {/* === Article === */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Title */}
          <header>
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <TrendingUp size={16} /> Retirement & Global Mobility
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              5 Trending Retirement & Golden Visa Destinations for Americans
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              Driven by golden visas, lifestyle upgrades and tax-friendly frameworks, more Americans are planning life outside U.S. borders.
            </p>
            <p className="text-xs text-[#5A6F7B] mt-2">By Explorer Investments • Updated 2025</p>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image src={OG_IMAGE} alt="Americans seeking retirement abroad and EU Golden Visas" fill className="object-cover" />
          </figure>

          {/* Intro Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">US Investors</p>
              <p className="text-xl font-bold">Growing Fast</p>
            </div>
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">Mobility</p>
              <p className="text-xl font-bold">Schengen+</p>
            </div>
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">Stay</p>
              <p className="text-xl font-bold">Low Presence</p>
            </div>
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">Lifestyle</p>
              <p className="text-xl font-bold">High Ranking</p>
            </div>
          </div>

          {/* André Bandeira Insight */}
          <Quote>
            <span className="font-semibold">André Bandeira, Explorer Investments:</span> “Global mobility is becoming a retirement plan. For U.S. families, Europe offers optionality, quality of life and structured investment routes like €500k CMVM‑regulated funds in Portugal.”
          </Quote>

          {/* List of Destinations */}
          <h2 className="text-2xl font-bold flex items-center gap-2"><Globe /> The Trending 5</h2>
          <ol className="space-y-8 list-decimal pl-4">

            <li>
              <h3 className="text-xl font-bold flex items-center gap-2"><MapPin /> Portugal</h3>
              <p className="text-[#15364A] mt-2">
                EU access, strong healthcare, top passport rankings and the <strong>€500k fund‑based Golden Visa</strong>.
                Low physical presence (~7 days/year) and a five‑year pathway to long‑term status.
              </p>
              <p className="text-sm text-[#0A4F3C] mt-2">Best for: Diversification + EU base + family relocations</p>
            </li>

            <li>
              <h3 className="text-xl font-bold flex items-center gap-2"><TreePalm /> Greece</h3>
              <p className="text-[#15364A] mt-2">
                Mediterranean living and EU mobility attract retirees. Property‑linked Golden Visa historically popular.
              </p>
              <p className="text-sm text-[#0A4F3C] mt-2">Best for: Coastal living + real estate investors</p>
            </li>

            <li>
              <h3 className="text-xl font-bold flex items-center gap-2"><ShieldCheck /> Panama</h3>
              <p className="text-[#15364A] mt-2">
                Pensionado Visa with modest income requirements; widely spoken English and proximity to U.S.
              </p>
              <p className="text-sm text-[#0A4F3C] mt-2">Best for: Quick retirement setup close to home</p>
            </li>

            <li>
              <h3 className="text-xl font-bold flex items-center gap-2"><BarChart /> Costa Rica</h3>
              <p className="text-[#15364A] mt-2">
                Renowned for wellness culture, eco‑lifestyle and affordability under $2k/month.
              </p>
              <p className="text-sm text-[#0A4F3C] mt-2">Best for: Nature, wellness + community</p>
            </li>

            <li>
              <h3 className="text-xl font-bold flex items-center gap-2"><MapPin /> Spain</h3>
              <p className="text-[#15364A] mt-2">
                Vibrant cities, infrastructure and non‑lucrative visas make relocation smooth.
              </p>
              <p className="text-sm text-[#0A4F3C] mt-2">Best for: Mediterranean lifestyle + culture</p>
            </li>

          </ol>

          {/* Explorer Angle */}
          <Quote>
            “Capital should remain productive. The Portuguese fund route does that - an investment, not a donation - while opening the door to European mobility.” - <strong>André Bandeira</strong>
          </Quote>

          {/* CTA */}
          <CtaSection />
        </div>
      </section>
    <BlogPreviewGridFromXML currentSlug={SLUG} />
 
      <Footer />
    </>
  );
}
