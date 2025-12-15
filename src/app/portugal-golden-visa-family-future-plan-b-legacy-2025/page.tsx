// ✅ High-CTR SEO Article Component - Portugal Golden Visa for Families (Plan B & Legacy)
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
  HeartHandshake,
  GraduationCap,
  Hospital,
  Landmark,
} from 'lucide-react';

// ===================================================================
// METADATA
// ===================================================================
const SLUG = 'portugal-golden-visa-family-future-plan-b-legacy-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-family.jpg';
const PUBLISHED = '2025-11-04T14:00:00+00:00';

export const metadata = {
  title:
    'Portugal Golden Visa: The Most Powerful Plan B for Your Family’s Future - EU Rights, Safety, Schools & Generational Legacy (2025)',
  description:
    'Why globally mobile families choose Portugal: Top-10 safety, mild climate, international schools, EU mobility and a pathway to PR and citizenship. See D7 vs Golden Visa, presence rules, timelines, costs, and why CMVM-regulated funds make the difference.',
  openGraph: {
    title:
      'Portugal Golden Visa for Families - Plan B, EU Rights & Legacy (2025)',
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

export default function PortugalGoldenVisaFamilyArticle() {
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
        name: 'Why is the Portugal Golden Visa considered a strong Plan B for families?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'It combines low crime (Top-10 safety), mild climate, international schools, Schengen mobility and a pathway to Permanent Residency (~5 years) and citizenship thereafter. Families can include spouse and dependent children on the same application.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I have to move to Portugal full-time?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Not with the Golden Visa. It typically allows a low average physical presence (often cited ~7 days/year; confirm at application). If you want to relocate now, consider the D7 route based on stable/passive income.',
        },
      },
      {
        '@type': 'Question',
        name: 'What’s the difference between D7 and the Golden Visa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'D7 is relocation-oriented and does not require an investment; the Golden Visa is investment-led (e.g., CMVM-regulated funds) and suits those who need flexibility and minimal presence. Both can lead to PR and, later, citizenship (subject to law).',
        },
      },
      {
        '@type': 'Question',
        name: 'Can my children inherit Portuguese citizenship?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Citizenship can often be passed to children, including those born abroad, subject to the law in force at the time of application. This makes it a genuine generational asset.',
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
            <Kicker>Portugal Golden Visa • Family Strategy • EU Legacy</Kicker>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Portugal Golden Visa: The Most Powerful Plan B for Your Family’s Future - EU Rights, Safety, Schools & Generational Legacy
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              Keep your life exactly as it is today - and secure a European option your children will thank you for. Portugal blends world-class safety, climate and education with a clear pathway to long-term EU rights.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link href="/" className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#a3956f] transition">
                <Target size={16}/> Request Private Consultation
              </Link>
              <Link href="https://www.linkedin.com/in/maria-campos-silva-2218a2265" target="_blank" className="inline-flex items-center gap-2 border border-[#B4A77E] text-[#002741] px-4 py-2 rounded-lg font-semibold hover:bg-[#FFFCF3] transition">
                <ShieldCheck size={16}/> Meet Maria Campos Silva
              </Link>
              <Link href="https://www.explorerinvestments.com/" target="_blank" className="inline-flex items-center gap-2 underline font-semibold">
                <ArrowRight size={16}/> Explore CMVM-Regulated Funds
              </Link>
            </div>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image src={OG_IMAGE} alt="Portugal Golden Visa family plan B and legacy" fill className="object-cover" />
          </figure>

          {/* Intro Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Stat label="Presence (GV)" value="Low ~7 days/yr*" />
            <Stat label="PR Milestone" value="~5 years" />
            <Stat label="Safety Rank" value="Top-10 globally" />
            <Stat label="Climate" value="300+ sunny days" />
          </div>
          <p className="text-xs text-[#5A6F7B] -mt-2">*Often cited requirement; always confirm the current presence rules at application.</p>

          {/* Why Families Choose Portugal */}
          <h2 className="text-2xl font-bold flex items-center gap-2"><HeartHandshake /> Why Families Choose Portugal</h2>
          <ul className="space-y-2">
            <Li>Top-tier safety with low crime and high social trust</Li>
            <Li>Mild Atlantic climate and healthy Mediterranean lifestyle</Li>
            <Li>International schools in Lisbon, Porto and the Algarve</Li>
            <Li>Access to EU universities and scholarship networks</Li>
            <Li>Schengen mobility and a pathway to long-term EU rights</Li>
          </ul>

          {/* What You Get */}
          <h2 className="text-2xl font-bold flex items-center gap-2"><Globe2 /> What You Get with Portuguese Residence</h2>
          <ul className="space-y-2">
            <Li>Right to live and work in Portugal</Li>
            <Li>Schengen travel without separate visas</Li>
            <Li>Family inclusion (spouse and dependent children)</Li>
            <Li>Eligibility to seek Permanent Residency (~5 years)</Li>
            <Li>Potential path to citizenship thereafter (subject to law)</Li>
          </ul>

          {/* Schools & Healthcare */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border p-4 bg-white/70">
              <div className="font-semibold flex items-center gap-2"><GraduationCap size={18}/> Education</div>
              <p className="mt-2 text-[#15364A]">International schools and EU university access at local rates - a real advantage for long-term planning.</p>
            </div>
            <div className="rounded-xl border p-4 bg-white/70">
              <div className="font-semibold flex items-center gap-2"><Hospital size={18}/> Healthcare</div>
              <p className="mt-2 text-[#15364A]">Quality public and private systems; strong network in major metros and the Algarve.</p>
            </div>
          </div>

          {/* D7 vs Golden Visa */}
          <h2 className="text-2xl font-extrabold flex items-center gap-2"><Landmark /> D7 vs Golden Visa - Which Fits Your Life?</h2>
          <div className="overflow-x-auto border border-gray-200 rounded-lg my-6">
            <table className="w-full text-sm text-left text-[#002741]">
              <thead className="bg-gray-50 text-[#15364A] text-xs uppercase">
                <tr>
                  <th className="px-3 py-2">Route</th>
                  <th className="px-3 py-2">Best For</th>
                  <th className="px-3 py-2">Investment</th>
                  <th className="px-3 py-2">Presence</th>
                  <th className="px-3 py-2">Family</th>
                  <th className="px-3 py-2">Long-Term Path</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-3 py-3 font-bold">D7 (Income)</td>
                  <td className="px-3 py-3">Relocate now on stable/passive income</td>
                  <td className="px-3 py-3">No investment required</td>
                  <td className="px-3 py-3">Residence in Portugal</td>
                  <td className="px-3 py-3">Spouse + dependents</td>
                  <td className="px-3 py-3">PR ~5 yrs; citizenship later*</td>
                </tr>
                <tr className="border-t bg-[#FFFCF3]">
                  <td className="px-3 py-3 font-bold">Golden Visa (Funds)</td>
                  <td className="px-3 py-3">Flexibility + minimal presence</td>
                  <td className="px-3 py-3">Yes - CMVM-regulated funds</td>
                  <td className="px-3 py-3">Low avg. presence (~7 days/yr)**</td>
                  <td className="px-3 py-3">Spouse + dependents</td>
                  <td className="px-3 py-3 font-semibold">PR ~5 yrs; citizenship later*</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#5A6F7B] -mt-4">*Verify current nationality law and timelines before planning. **Presence rules can change; confirm at application.</p>

          {/* Mid CTA */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between border rounded-xl p-5 bg-[#FFFCF3]">
            <div className="text-sm">
              <div className="font-bold text-[#002741]">Build an EU option you can pass to your children.</div>
              <div className="text-[#15364A]">Get a tailored plan for D7 vs Golden Visa and fund selection aligned with your goals.</div>
            </div>
            <Link href="/" className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#a3956f] transition">
              <Target size={16} /> Talk to an Advisor
            </Link>
          </div>

          {/* Strong CTA: Explorer + Maria */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between border rounded-xl p-5 bg-[#fff9e8]">
            <div className="text-sm">
              <div className="font-bold text-[#002741]">Portugal for Families: EU rights you can pass to your children.</div>
              <div className="text-[#15364A]">D7 if you can move now. Golden Visa if you need flexibility and low presence.</div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/" className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#a3956f] transition">
                <Target size={16}/> Start Your Portugal Plan
              </Link>
              <Link href="https://www.explorerinvestments.com/" target="_blank" className="inline-flex items-center gap-2 border border-[#B4A77E] text-[#002741] px-4 py-2 rounded-lg font-semibold hover:bg-[#FFFCF3] transition">
                <ArrowRight size={16}/> Explore CMVM Funds
              </Link>
              <Link href="https://www.linkedin.com/in/maria-campos-silva-2218a2265" target="_blank" className="inline-flex items-center gap-2 underline font-semibold">
                <ShieldCheck size={16}/> Speak with Maria Campos Silva
              </Link>
            </div>
          </div>

          {/* Legal Note */}
          <div className="rounded-xl border p-4 text-sm text-[#15364A] bg-gray-50 flex items-start gap-2">
            <AlertTriangle className="mt-[2px]" size={18} /> Immigration rules and timelines change. Always verify eligibility, presence requirements and citizenship pathways with qualified counsel before committing to any route.
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
