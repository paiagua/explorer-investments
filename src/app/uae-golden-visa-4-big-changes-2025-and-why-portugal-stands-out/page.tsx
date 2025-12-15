// ✅ High-CTR SEO Article Component - UAE Golden Visa Changes + Portugal Advantage
// Next.js + Tailwind + SEO (Article + FAQ JSON-LD) + OG + strong CTAs

import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';

export const revalidate = 600;
export const fetchCache = 'force-cache';

import {
  TrendingUp,
  Globe2,
  Target,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  Phone,
  Plane,
  FileCheck2,
  HeartHandshake,
} from 'lucide-react';

// ===================================================================
// METADATA
// ===================================================================
const SLUG = 'uae-golden-visa-4-big-changes-2025-and-why-portugal-stands-out';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/uae-golden-visa-4-changes-2025.jpg';
const PUBLISHED = '2025-11-04T13:00:00+00:00';

export const metadata = {
  title:
    'UAE Golden Visa: 4 Big Changes You Must Know (2025) - Plus, the Portugal Advantage for EU Rights & Lifestyle',
  description:
    'The UAE rolled out new, “unprecedented” benefits for 10-year Golden Visa holders: emergency travel docs, 24/7 hotline, crisis evacuation, and repatriation services. See who qualifies - and why Portugal’s D7 & Golden Visa still win for safety, climate and long-term EU options.',
  openGraph: {
    title:
      'UAE Golden Visa 2025 - 4 Key Changes Explained. And Why Portugal Still Wins for Families.',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

// Helpers
const Kicker = ({ children }: { children: React.ReactNode }) => (
  <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
    <TrendingUp size={16} /> {children}
  </div>
);

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center">
    <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">{label}</p>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <CheckCircle2 className="mt-[2px] flex-shrink-0" size={18} /> <span>{children}</span>
  </li>
);

export default function UAEGoldenVisaChangesArticle() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    image: [OG_IMAGE],
    mainEntityOfPage: CANONICAL_URL,
    author: { '@type': 'Organization', name: 'Explorer Investments' },
    publisher: { '@type': 'Organization', name: 'Explorer Investments' },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the new UAE Golden Visa benefits announced in 2025?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'New support includes: emergency travel documents if a passport is lost/damaged abroad, 24/7 hotline assistance, inclusion in evacuation/crisis plans, and repatriation/burial services coordinated via consular channels.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who qualifies for the UAE Golden Visa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Eligibility spans investors, entrepreneurs, scientists, professionals and top students. Some emirates have expanded categories (e.g., educators, content creators, gaming professionals, nurses). Check current criteria locally.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why consider Portugal alongside the UAE?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Portugal offers EU residency pathways (D7 & Golden Visa) with top-tier safety, mild climate, international schools and future EU mobility options for families. D7 is relocation-focused; Golden Visa provides low average presence with fund-based investing.',
        },
      },
    ],
  };

  return (
    <>
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />

      {/* === Article === */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Title */}
          <header>
            <Kicker>UAE Golden Visa • 2025 Update • Consular Benefits</Kicker>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              UAE Golden Visa: 4 Big Changes Every Holder Should Know - And Why Portugal Is the EU Plan B That Families Prefer
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              The UAE has introduced “unprecedented” consular-style support for Golden Visa residents abroad. Below, the four changes in plain English -
              and a comparison with Portugal’s residency pathways for families targeting safety, climate, schools and long-term EU options.
            </p>
       <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link href="/" className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#a3956f] transition"><Target size={16}/> Request Private Consultation</Link>
              <Link href="https://www.linkedin.com/in/maria-campos-silva-2218a2265" target='_blank' className="inline-flex items-center gap-2 border border-[#B4A77E] text-[#002741] px-4 py-2 rounded-lg font-semibold hover:bg-[#FFFCF3] transition"><ShieldCheck size={16}/> Meet Maria Campos Silva</Link>
              <Link href="https://www.explorerinvestments.com/" className="inline-flex items-center gap-2 underline font-semibold"><ArrowRight size={16}/> Explore CMVM‑Regulated Funds</Link>
            </div>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image src={OG_IMAGE} alt="UAE Golden Visa 2025 new benefits and the Portugal advantage" fill className="object-cover" />
          </figure>

          {/* Intro Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Stat label="Residency" value="10-year UAE" />
            <Stat label="New Perks" value="4 consular services" />
            <Stat label="Support" value="24/7 hotline" />
            <Stat label="EU Plan B" value="Portugal D7/GV" />
          </div>

          {/* 4 Big Changes */}
          <h2 className="text-2xl font-bold flex items-center gap-2"><Globe2 /> The 4 Big UAE Golden Visa Changes - At a Glance</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-4 bg-white/70">
              <div className="font-semibold flex items-center gap-2"><FileCheck2 size={18} /> 1) Emergency Travel Documents</div>
              <p className="mt-2">
                Lost or damaged passport while abroad? Golden Visa holders can obtain an electronic return document (valid for a limited period) to re-enter the UAE with Ministry support.
              </p>
            </div>
            <div className="rounded-xl border p-4 bg-white/70">
              <div className="font-semibold flex items-center gap-2"><Phone size={18} /> 2) 24/7 Assistance Hotline</div>
              <p className="mt-2">
                A dedicated around-the-clock hotline for urgent queries and guidance - a safety net for residents who need rapid consular-style support while overseas.
              </p>
            </div>
            <div className="rounded-xl border p-4 bg-white/70">
              <div className="font-semibold flex items-center gap-2"><Plane size={18} /> 3) Inclusion in Emergency & Crisis Plans</div>
              <p className="mt-2">
                In major incidents (e.g., natural disasters), long-term residents are now explicitly included in evacuation and emergency coordination via UAE missions abroad.
              </p>
            </div>
            <div className="rounded-xl border p-4 bg-white/70">
              <div className="font-semibold flex items-center gap-2"><HeartHandshake size={18} /> 4) Repatriation & Family Support</div>
              <p className="mt-2">
                Streamlined procedures for repatriation and burial in the unfortunate event of a death abroad - with coordination and support for families.
              </p>
            </div>
          </div>

          {/* Who Qualifies (UAE) */}
          <h2 className="text-2xl font-bold">Who Qualifies for the UAE Golden Visa?</h2>
          <p>
            Originally focused on outstanding contributors and key sectors, eligibility now spans <strong>investors, entrepreneurs, scientists, professionals, top students</strong> and additional local categories (varies by emirate).
          </p>

          {/* Mid CTA */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between border rounded-xl p-5 bg-[#FFFCF3]">
            <div className="text-sm">
              <div className="font-bold text-[#002741]">Comparing UAE vs. Portugal vs. EU routes?</div>
              <div className="text-[#15364A]">Get a tailored plan for where your family will thrive - and how to keep global optionality.</div>
            </div>
            <Link href="/" className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#a3956f] transition">
              <Target size={16} /> Talk to an Advisor
            </Link>
          </div>

          {/* Portugal Advantage */}
          <h2 className="text-2xl font-extrabold flex items-center gap-2"><ShieldCheck /> Why Portugal Still Stands Out for Families (EU Rights, Safety & Lifestyle)</h2>
          <p>
            The UAE’s new benefits strengthen support when you’re abroad - but <strong>Portugal</strong> offers something different: a runway to <strong>EU life and rights</strong>.
            Choose <strong>D7</strong> if you can relocate on stable/passive income (no investment required), or opt for the <strong>Golden Visa</strong> if you need low average presence and prefer regulated fund investments.
          </p>
          <ul className="space-y-2">
            <Li><strong>Safety:</strong> Among the world’s Top-10 safest countries; low crime and high trust.</Li>
            <Li><strong>Climate:</strong> ~300 sunny days; Atlantic lifestyle; Mediterranean diet.</Li>
            <Li><strong>Family:</strong> International schools, EU universities, quality public/private healthcare.</Li>
            <Li><strong>Long-term:</strong> PR around 5 years; citizenship thereafter (verify live rules/timelines).</Li>
            <Li><strong>Flexibility:</strong> D7 (move now) or Golden Visa (low presence; CMVM-regulated funds).</Li>
          </ul>

          {/* Mini Comparison */}
          <div className="overflow-x-auto border border-gray-200 rounded-lg my-6">
            <table className="w-full text-sm text-left text-[#002741]">
              <thead className="bg-gray-50 text-[#15364A] text-xs uppercase">
                <tr>
                  <th className="px-3 py-2">Destination</th>
                  <th className="px-3 py-2">Model</th>
                  <th className="px-3 py-2">Investment Needed</th>
                  <th className="px-3 py-2">Presence</th>
                  <th className="px-3 py-2">Family Benefit</th>
                  <th className="px-3 py-2">Long-Term Path</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-3 py-3 font-bold">UAE</td>
                  <td className="px-3 py-3">10-year Golden Visa</td>
                  <td className="px-3 py-3">Yes (varies by route)</td>
                  <td className="px-3 py-3">Residence in UAE</td>
                  <td className="px-3 py-3">New consular-style support abroad</td>
                  <td className="px-3 py-3">Long-term UAE residency</td>
                </tr>
                <tr className="border-t bg-[#FFFCF3]">
                  <td className="px-3 py-3 font-bold">Portugal</td>
                  <td className="px-3 py-3">D7 (income) / Golden Visa (funds)</td>
                  <td className="px-3 py-3">No for D7 / Yes for GV</td>
                  <td className="px-3 py-3">Relocation (D7) / Low presence (GV)</td>
                  <td className="px-3 py-3">Schools, healthcare, EU lifestyle</td>
                  <td className="px-3 py-3 font-semibold">PR ~5 yrs; EU citizenship later*</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Strong CTA */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between border rounded-xl p-5 bg-[#fff9e8]">
            <div className="text-sm">
              <div className="font-bold text-[#002741]">Portugal for Families: EU rights you can pass to your children.</div>
              <div className="text-[#15364A]">D7 if you can move now. Golden Visa if you need flexibility and low presence.</div>
            </div>
         <div className="flex flex-wrap gap-2">
              <Link href="/" className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#a3956f] transition"><Target size={16}/> Start Your Portugal Plan</Link>
              <Link href="https://www.explorerinvestments.com/" target="_blank" className="inline-flex items-center gap-2 border border-[#B4A77E] text-[#002741] px-4 py-2 rounded-lg font-semibold hover:bg-[#FFFCF3] transition"><ArrowRight size={16}/> Explore CMVM Funds</Link>
            </div>
          </div>

          {/* Legal Note */}
          <div className="rounded-xl border p-4 text-sm text-[#15364A] bg-gray-50 flex items-start gap-2">
            <AlertTriangle className="mt-[2px]" size={18} /> Immigration rules change. Always verify current eligibility, presence requirements and citizenship timelines with qualified counsel before committing to any route.
          </div>

          {/* Location Note */}
          <div className="rounded-xl border p-4 text-xs text-[#5A6F7B] bg-white flex items-start gap-2">
            <MapPin className="mt-[2px]" size={16} /> Portuguese residency confers the right to live in Portugal and Schengen travel. Full EU freedom of movement across countries applies after obtaining EU citizenship.
          </div>

          {/* Site CTA & Related */}
          <div className="pt-4"><CtaSection /></div>
        </div>
      </section>

 
      <BlogPreviewGridFromXML currentSlug={SLUG} />
      <Footer />
    </>
  );
}
