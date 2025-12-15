// ✅ High-CTR SEO Article Component - Explorer Investments Fund Advantage for Golden Visa
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
} from 'lucide-react';

// ===================================================================
// METADATA
// ===================================================================
const SLUG = 'explorer-investments-fund-advantage-for-portugal-golden-visa-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/explorer-fund-advantage-2025.jpg';
const PUBLISHED = '2025-11-04T15:00:00+00:00';

export const metadata = {
  title:
    'Why the Explorer Investments Fund is Your Smartest Route for Portugal Golden Visa in 2025',
  description:
    'Maria Campos  Silva, Investor Relations, explains why Explorer Investments’ CMVM-regulated funds deliver transparency, compliance and value creation - the optimal investment route for Portugal’s Golden Visa in 2025.',
  openGraph: {
    title: 'Explorer Investments Fund Advantage - Portugal Golden Visa 2025',
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

export default function ExplorerFundAdvantageArticle() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    image: [OG_IMAGE],
    mainEntityOfPage: CANONICAL_URL,
    author: { '@type': 'Person', name: 'Maria Campos Silva' },
    publisher: { '@type': 'Organization', name: 'Explorer Investments' },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What makes Explorer Investments funds eligible for Portugal Golden Visa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Explorer Investments offers CMVM-regulated funds that meet the Portuguese Golden Visa investment route criteria. They provide compliant governance, diversification and direct eligibility for non-EU investors.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the investment minimums and process?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Typically the minimum investment is around €500,000 into a qualifying fund. With Explorer you follow a structured process: consultation, fund subscription, residence permit application, and family inclusion.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Explorer Investments deliver value beyond compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Explorer Investments leverages 20+ years of track record, multidisciplinary strategies in buyouts, growth and hospitality, operational value creation and co-investment alignment to deliver institutional-style returns to Golden Visa investors.',
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
          <header>
            <Kicker>Explorer Investments • Fund Advantage • Portugal Golden Visa</Kicker>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Why the Explorer Investments Fund is Your Smartest Route for Portugal Golden Visa in 2025
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              I'm <strong>Maria Campos Silva</strong>, Investor Relations at Explorer Investments. In this article I’ll explain why our CMVM-regulated fund route is the preferred option for serious Golden Visa investors seeking clarity, governance and value-creation.
            </p>
 <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link href="/" className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#a3956f] transition"><Target size={16}/> Request Private Consultation</Link>
              <Link href="https://www.linkedin.com/in/maria-campos-silva-2218a2265" target='_blank' className="inline-flex items-center gap-2 border border-[#B4A77E] text-[#002741] px-4 py-2 rounded-lg font-semibold hover:bg-[#FFFCF3] transition"><ShieldCheck size={16}/>Meet Maria Campos Silva</Link>
              <Link href="https://www.explorerinvestments.com/" className="inline-flex items-center gap-2 underline font-semibold"><ArrowRight size={16}/> Explore CMVM‑Regulated Funds</Link>
            </div>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image src={OG_IMAGE} alt="Explorer Investments fund advantage for Portugal Golden Visa" fill className="object-cover" />
          </figure>

          {/* Intro Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Stat label="AUM" value="€1.8 bn+" />
            <Stat label="Investment Route" value="CMVM-Regulated Fund" />
            <Stat label="Minimum Investment" value="€500k" />
            <Stat label="Golden Visa Presence" value="Low (~7 days/yr*)" />
          </div>
          <p className="text-xs text-[#5A6F7B] -mt-2">*Check latest legislative presence requirement.</p>

          {/* Section: The Challenge */}
          <h2 className="text-2xl font-bold">What Many Golden Visa Investors Overlook</h2>
          <p className="text-[#15364A]">
            With regulatory changes tightening the traditional real-estate route, many applicants are discovering that <em>not all investment paths are equal</em>. Eligibility clarity, fund governance, diversification and operational value matter more than ever.
          </p>
          <ul className="space-y-2">
            <Li>Single-asset real estate risks - lack of diversification.</Li>
            <Li>Opaque governance in non-regulated vehicles.</Li>
            <Li>Increased compliance scrutiny (US FATCA, PFIC, OECD standards).</Li>
            <Li>Changing residence/presence requirements globally.</Li>
          </ul>

          {/* Section: Why Explorer Stands Out */}
          <h2 className="text-2xl font-bold">Why Explorer Investments Stands Out</h2>
          <p className="text-[#15364A]">
            At Explorer we combine institutional strength with fund availability for non-EU investors seeking the Golden Visa. Key advantages include:
          </p>
          <ul className="space-y-2">
            <Li><strong>Track record:</strong> 20+ years investing in Portugal, across buyouts, growth and hospitality.</Li>
            <Li><strong>Regulated route:</strong> Funds eligible under the Portuguese Golden Visa programme.</Li>
            <Li><strong>Governance & transparency:</strong> CMVM-regulated, institutional-style operations.</Li>
            <Li><strong>Minimum investment aligned:</strong> €500k into qualifying fund - clean structure for eligibility.</Li>
            <Li><strong>Family-friendly:</strong> Spouse + dependent children included, efficient onboarding.</Li>
          </ul>

          {/* Section: Investment Process (Step-by-Step) */}
          <h2 className="text-2xl font-bold">How the Process Works - Step-by-Step</h2>
          <ol className="list-decimal pl-5 space-y-2 text-[#15364A]">
            <li>Free 1-hour consultation with our IR team.</li>
            <li>Live fund presentation and legal/tax onboarding.</li>
            <li>Subscription into the qualifying CMVM-regulated fund.</li>
            <li>Apply for Portuguese residence permit (Golden Visa) including family.</li>
            <li>Maintain minimal presence; five-year horizon to PR; evaluate citizenship thereafter.</li>
          </ol>

          {/* CTA Mid */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between border rounded-xl p-5 bg-[#FFFCF3]">
            <div className="text-sm">
              <div className="font-bold text-[#002741]">Ready to invest the compliant way?</div>
              <div className="text-[#15364A]">Book your meeting today; let us map the fund, visa and family strategy.</div>
            </div>
            <Link href="/" className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#a3956f] transition">
              <Target size={16}/> Schedule Your Consultation
            </Link>
          </div>

          {/* Section: What to Look For in a Fund */}
          <h2 className="text-2xl font-bold">Checklist: What to Look For in a Golden Visa Fund</h2>
          <ul className="space-y-2">
            <Li>CMVM-regulated investment vehicle eligible for Golden Visa.</Li>
            <Li>Transparent operations, clear exit strategy and track record of value creation.</Li>
            <Li>Family inclusion rules and minimal presence requirement.</Li>
            <Li>Tax and compliance support (FATCA, PFIC if relevant).</Li>
          </ul>

          {/* Strong CTA */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between border rounded-xl p-5 bg-[#fff9e8]">
            <div className="text-sm">
              <div className="font-bold text-[#002741]">Choose a fund that matches institutional standards and Golden Visa eligibility.</div>
              <div className="text-[#15364A]">Explorer Investments opens the same engine room that institutions use - now available for you and your family.</div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/" className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#a3956f] transition">
                <Target size={16}/> Start Your Fund + Visa Journey
              </Link>
              <Link
                href="https://www.explorerinvestments.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#B4A77E] text-[#002741] px-4 py-2 rounded-lg font-semibold hover:bg-[#FFFCF3] transition"
              >
                <ArrowRight size={16}/> Explore Explorer Funds
              </Link>
            </div>
          </div>

          {/* Legal Note */}
          <div className="rounded-xl border p-4 text-sm text-[#15364A] bg-gray-50 flex items-start gap-2">
            <AlertTriangle className="mt-[2px]" size={18}/> Investment into alternative funds involves risk, may be illiquid and is intended for sophisticated investors. Past performance is not a guarantee of future results. Consult independent legal, tax and investment advisers.
          </div>

          {/* Location Note */}
          <div className="rounded-xl border p-4 text-xs text-[#5A6F7B] bg-white flex items-start gap-2">
            <MapPin className="mt-[2px]" size={16}/> Explorer Investments (Lisbon) supports international investors in accessing European residence via Portugal’s Golden Visa. Eligible funds are CMVM-regulated and open to non-EU investors.
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
