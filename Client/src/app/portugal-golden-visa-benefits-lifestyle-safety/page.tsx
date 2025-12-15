// ✅ SEO Article - Portugal Golden Visa Benefits: Safety, Climate & Lifestyle
// Fully styled Next.js + SEO + structured content

import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';

export const revalidate = 600;
         import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';

        
export const fetchCache = 'force-cache';

import {
  Globe,
  ShieldCheck,
  TrendingUp,
  Sun,
  Users,
  CheckCircle2,
  MapPin,
  HeartHandshake,
  Building2,
} from 'lucide-react';

// ===================================================================
// METADATA
// ===================================================================
const SLUG = 'portugal-golden-visa-benefits-lifestyle-safety';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/portugal-lifestyle-safety.jpg';
const PUBLISHED = '2025-11-05T09:00:00+00:00';

export const metadata = {
  title: 'Why Portugal’s Golden Visa Remains a Top Choice: Safety, Climate & Lifestyle (2025)',
  description:
    'Portugal combines a world‑leading safety ranking, Mediterranean climate, EU mobility and low physical presence requirements - making its Golden Visa one of the most attractive residency strategies in Europe even amid reforms.',
  openGraph: {
    title: 'Portugal Golden Visa Benefits: Safety, Climate & Lifestyle (2025)',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3"><CheckCircle2 className="mt-[2px] flex-shrink-0" size={18} /> <span>{children}</span></li>
);

export default function PortugalGoldenVisaBenefits() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    datePublished: PUBLISHED,
    image: [OG_IMAGE],
    mainEntityOfPage: CANONICAL_URL,
    author: { '@type': 'Organization', name: 'Explorer Investments' },
  };

  return (
    <>
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Header />

      {/* === Article === */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Title */}
          <header>
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2"><TrendingUp size={16} /> Golden Visa Advantages</div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">Portugal Golden Visa - Why Investors Still Choose Portugal in 2025</h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              With world‑leading safety, a mild coastal climate and a strategic EU position, Portugal continues to attract globally mobile families and investors seeking a secure and rewarding residency plan.
            </p>
          </header>

          {/* Hero */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image src={OG_IMAGE} alt="Portugal Golden Visa lifestyle and safety" fill className="object-cover" />
          </figure>

          {/* Overview */}
          <p>
            The Portuguese Golden Visa remains one of Europe’s most sought‑after residency‑by‑investment programmes. Since 2012, it has granted residency to more than <strong>12,000 international investors and their families</strong>, while driving over <strong>€7.5 billion</strong> in capital into the country’s economy.
          </p>

          {/* Safety & Climate */}
          <h2 className="text-2xl font-bold flex items-center gap-2"><ShieldCheck /> One of the Safest Countries in the World</h2>
          <p>
            Portugal consistently ranks in the <strong>Top 10 safest nations globally</strong> (Global Peace Index), offering families predictability, social stability and peace of mind - a priceless benefit in uncertain times.
          </p>

          <h2 className="text-2xl font-bold flex items-center gap-2"><Sun /> Europe’s Healthiest Climate</h2>
          <ul className="space-y-2">
            <Li>300+ days of sunshine per year</Li>
            <Li>Clean Atlantic air and coastal lifestyle</Li>
            <Li>Mild winters - ideal for retirees and remote workers</Li>
          </ul>

          {/* Lifestyle */}
          <h2 className="text-2xl font-bold flex items-center gap-2"><HeartHandshake /> A Lifestyle Upgrade for Every Generation</h2>
          <ul className="space-y-2">
            <Li>High‑quality healthcare and top private hospitals</Li>
            <Li>English‑friendly services in Lisbon, Porto & Algarve</Li>
            <Li>Excellent international schools & EU university access</Li>
            <Li>Rich culture, food, nature & connectivity across Europe</Li>
          </ul>

          {/* Programme Summary */}
          <h2 className="text-2xl font-bold flex items-center gap-2"><Globe /> Why the Golden Visa Still Leads Europe</h2>
          <ul className="space-y-2">
            <Li>Visa‑free Schengen access</Li>
            <Li>Right to live and work in Portugal</Li>
            <Li><strong>Low physical presence</strong> to maintain status (~7 days/year avg., confirm at application)</Li>
            <Li>Family coverage included</Li>
          </ul>

          {/* Investment Options */}
          <h2 className="text-2xl font-bold flex items-center gap-2"><Building2 /> Investment Options</h2>
          <p>The programme now prioritises capital that drives innovation and diversification:</p>
          <ul className="space-y-2">
            <Li><strong>€500k CMVM‑regulated investment funds</strong> (private equity, VC, real assets)</Li>
            <Li><strong>€200k-€250k cultural donations</strong></Li>
            <Li>Business creation supporting jobs</Li>
          </ul>

          {/* Citizenship Outlook */}
          <h2 className="text-2xl font-bold flex items-center gap-2"><MapPin /> Citizenship Outlook</h2>
          <p>
            Proposed amendments in 2025 may extend the residency time required before applying for citizenship. However, the path to<strong> Permanent Residency after 5 years</strong> remains a major value driver - giving families EU stability without requiring relocation.
          </p>

          {/* CTA */}
          <CtaSection />
        </div>
      </section>
 
                 <BlogPreviewGridFromXML currentSlug={SLUG} ></BlogPreviewGridFromXML>
       
      <Footer />
    </>
  );
}
