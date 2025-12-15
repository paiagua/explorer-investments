// ✅ Portuguese Citizenship - Legacy Article Component (EN)
// Next.js + Tailwind + SEO (Article + FAQ + Breadcrumb JSON-LD) + OG + CTAs + Interlinking

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
  ShieldCheck,
  TrendingUp,
  Globe2,
  Users,
  CheckCircle2,
  HeartHandshake,
  GraduationCap,
  Hospital,
  Landmark,
  Plane,
  Sun,
  MapPin,
  BookOpen,
  ChevronRight,
} from 'lucide-react';

// ===================================================================
// METADATA
// ===================================================================
const SLUG = 'portuguese-citizenship-legacy-passport-eu-mobility-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/portuguese-citizenship-legacy.jpg';
const PUBLISHED = '2025-11-05T10:00:00+00:00';

export const metadata = {
  title:
    'Portuguese Citizenship (2025 Guide): EU Passport, Golden Visa Pathway & Family Legacy',
  description:
    'How to get Portuguese citizenship in 2025: EU rights, global mobility, safety, healthcare and education benefits. Golden Visa fund route, relocation options, timelines, and how citizenship passes to children.',
  keywords: [
    'Portuguese citizenship 2025',
    'Portugal EU passport',
    'Portugal Golden Visa citizenship',
    'Portugal residency to citizenship',
    'CMVM funds Golden Visa',
    'move to Portugal US investors',
    'EU mobility passport',
  ],
  openGraph: {
    title: 'Portuguese Citizenship: EU Passport, Golden Visa Pathway & Family Legacy (2025)',
    description:
      'Everything you need to know about Portuguese citizenship: benefits, eligibility, timelines, Golden Visa vs relocation, and how to pass citizenship to children.',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portuguese Citizenship (2025): EU Passport & Golden Visa Route',
    description:
      'Benefits, timelines and pathways (Golden Visa & relocation). EU rights, mobility, healthcare, education, and family legacy.',
    images: [OG_IMAGE],
  },
  alternates: { canonical: CANONICAL_URL },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
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
  <li className="flex items-start gap-2"><CheckCircle2 className="mt-[2px] flex-shrink-0" size={18} /> <span>{children}</span></li>
);

export default function PortugueseCitizenshipLegacy() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Portuguese Citizenship (2025 Guide): EU Passport, Golden Visa Pathway & Family Legacy',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    image: [OG_IMAGE],
    mainEntityOfPage: CANONICAL_URL,
    author: {
      '@type': 'Person',
      name: 'André Bandeira, CFA',
      url: 'https://www.linkedin.com/in/andre-bandeira-cfa-7a7258b/?originalSubdomain=pt',
    },
    publisher: { '@type': 'Organization', name: 'Explorer Investments' },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can Portuguese citizenship be passed to children?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes. In many cases citizenship can be transmitted to children (and future generations), including those born abroad, subject to legal requirements at the time of application.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Portuguese citizenship allow me to live anywhere in the EU?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes. As an EU citizen you can live, work and study in any EU/EEA country and Switzerland, with access to local healthcare and education systems.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the Golden Visa still a pathway to citizenship?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes, the residency-by-investment route remains operational. Timelines and requirements may evolve; many families target permanent residency at year five and evaluate citizenship based on rules in force.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the minimum presence requirement during residency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Historically low stay requirements (often ~7 days/year) have applied to certain residency routes. Always confirm the current legal requirement at application time.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which investment route is most popular after real estate changes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'CMVM-regulated investment funds for €500k have become the primary route after the removal of direct real estate options.',
        },
      },
    ],
  };

  const breadcrumbsLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://goldenvisashub.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guides',
        item: 'https://goldenvisashub.com/guides',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Portuguese Citizenship (2025)',
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Script id="ld-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />

      <Header />

      {/* === Article === */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* Title */}
          <header>
            <Kicker>Citizenship • EU Rights • Legacy Planning</Kicker>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Portuguese Citizenship (2025 Guide): EU Passport, Golden Visa Pathway & Family Legacy
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              Freedom, security and choice — a Portuguese passport delivers all three. Live and work anywhere in the EU, access healthcare and education, and pass these rights on to your children. Compare the{' '}
              <Link href="/portugal-golden-visa-fund-route-us-investors" className="underline">Golden Visa fund route</Link>{' '}
              and relocation options, then check the{' '}
              <Link href="/portugal-golden-visa-statistics-2012-2023-historical-top10" className="underline">latest AIMA/SEF data</Link>.
            </p>
            <p className="text-xs text-[#5A6F7B] mt-2">
              By <Link href="https://www.linkedin.com/in/andre-bandeira-cfa-7a7258b/?originalSubdomain=pt" target="_blank" className="underline">André Bandeira, CFA</Link> • Updated November 2025
            </p>
            {/* TOC */}
            <nav className="mt-5 rounded-xl border border-gray-200 bg-white shadow-sm p-4">
              <div className="text-[12px] uppercase text-[#5A6F7B] font-semibold mb-2 flex items-center gap-2">
                <BookOpen size={14} /> Contents
              </div>
              <ul className="text-sm grid sm:grid-cols-2 gap-y-2">
                <li><a className="flex items-center gap-1 hover:underline" href="#benefits"><ChevronRight size={14}/> Benefits of Portuguese Citizenship</a></li>
                <li><a className="flex items-center gap-1 hover:underline" href="#legacy"><ChevronRight size={14}/> Citizenship & Family Legacy</a></li>
                <li><a className="flex items-center gap-1 hover:underline" href="#quality"><ChevronRight size={14}/> Quality of Life & Safety</a></li>
                <li><a className="flex items-center gap-1 hover:underline" href="#pathways"><ChevronRight size={14}/> Pathways: Golden Visa vs Relocation</a></li>
                <li><a className="flex items-center gap-1 hover:underline" href="#eu"><ChevronRight size={14}/> EU Optionality in Practice</a></li>
                <li><a className="flex items-center gap-1 hover:underline" href="#faq"><ChevronRight size={14}/> FAQs</a></li>
              </ul>
            </nav>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image src={OG_IMAGE} alt="Portuguese citizenship benefits: EU mobility, safety, healthcare, education" fill className="object-cover" />
          </figure>

          {/* Intro Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Stat label="Global Mobility" value="180+ countries" />
            <Stat label="EU Rights" value="Live & work anywhere" />
            <Stat label="Safety" value="Top-10 worldwide" />
            <Stat label="Climate" value="300+ sunny days" />
          </div>

          {/* Core Benefits */}
          <section id="benefits" className="space-y-3">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Globe2 /> Benefits of Portuguese Citizenship</h2>
            <ul className="space-y-2">
              <Li>Right to live, work and study across the EU/EEA + Switzerland</Li>
              <Li>Visa-free or streamlined travel to 180+ countries</Li>
              <Li>Dual citizenship permitted — keep your original nationality</Li>
              <Li>Full civic and political rights within Portugal and the EU</Li>
              <Li>Global reputation and minimal travel friction</Li>
            </ul>
            <p className="text-sm text-[#5A6F7B]">
              Considering the residency step first? See the{' '}
              <Link href="/portugal-golden-visa-fund-route-us-investors" className="underline">€500k CMVM-regulated Golden Visa fund route</Link>.
            </p>
          </section>

          {/* Legacy */}
          <section id="legacy" className="space-y-3">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Users /> Citizenship & Family Legacy</h2>
            <p>
              Portuguese citizenship can often be transmitted to children — even when born abroad — subject to prevailing legal criteria. This creates a durable, international foundation for education, careers and family life that compounds over time.
            </p>
            <ul className="space-y-2">
              <Li>EU study access with subsidised tuition and scholarships</Li>
              <Li>Freedom to build a career anywhere in the Single Market</Li>
              <Li>Succession planning aligned with EU legal protections</Li>
            </ul>
          </section>

          {/* Quality of Life */}
          <section id="quality" className="space-y-3">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Sun /> Safety, Climate & Quality of Life</h2>
            <ul className="space-y-2">
              <Li>Portugal consistently ranks among the world’s <strong>Top-10 safest</strong> countries</Li>
              <Li>300+ days of sunshine, Atlantic lifestyle and Mediterranean diet</Li>
              <Li>Access to both public and private healthcare of high quality</Li>
              <Li>English widely spoken in Lisbon, Porto and the Algarve</Li>
            </ul>
            <p className="text-sm text-[#5A6F7B]">
              Read how lifestyle improvements impact health in our expat story: <Link href="/american-leaves-us-healthcare-finds-new-life-in-portugal" className="underline">“I Left the U.S. Drowning in Medical Bills.”</Link>
            </p>
          </section>

          {/* Pathways */}
          <section id="pathways" className="space-y-3">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Landmark /> Pathways to Portuguese Citizenship</h2>
            <div className="rounded-xl border p-5 bg-white/70 text-[#15364A] space-y-3">
              <div className="font-semibold">Golden Visa Residency (Investment)</div>
              <ul className="space-y-2">
                <Li>Historically low physical presence (often ~7 days/year — confirm current law)</Li>
                <Li>Capital invested via <strong>CMVM-regulated</strong> funds (private equity, VC, real assets)</Li>
                <Li>Family inclusion for spouse and dependent children</Li>
              </ul>
              <p className="text-sm text-[#5A6F7B]">
                Explore investor specifics in the{' '}
                <Link href="/portugal-golden-visa-fund-route-us-investors" className="underline">U.S. investor fund route guide</Link>.
              </p>
              <div className="font-semibold mt-3">Relocation Routes (e.g., D7, Digital Nomad)</div>
              <ul className="space-y-2">
                <Li>Lifestyle-driven move with potentially faster integration</Li>
                <Li>Lower investment thresholds; standard EU residency conditions apply</Li>
              </ul>
              <p className="text-xs text-[#5A6F7B] mt-2">
                Timelines and naturalisation requirements can change. Always verify the rules in force with qualified counsel.
              </p>
            </div>
          </section>

          {/* CTA band */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between border rounded-xl p-5 bg-[#FFFCF3]">
            <div className="text-sm">
              <div className="font-bold text-[#002741]">Design a multi-jurisdiction future for your family.</div>
              <div className="text-[#15364A]">EU rights, global mobility and a passport your children can inherit.</div>
            </div>
            <Link href="/" className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#a3956f] transition"><ShieldCheck size={16}/> Start Your Plan</Link>
          </div>

          {/* EU Optionality */}
          <section id="eu" className="space-y-3">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Plane /> EU Optionality in Practice</h2>
            <ul className="space-y-2">
              <Li>Live in Portugal, study in Germany, launch a company in Spain</Li>
              <Li>Access Switzerland and the EEA for specialised careers</Li>
              <Li>Leverage EU consumer and investor protections across borders</Li>
            </ul>
          </section>

          {/* Location Note */}
          <div className="rounded-xl border p-4 text-sm text-[#15364A] bg-gray-50 flex items-start gap-2">
            <MapPin className="mt-[2px]" size={18}/> Benefits apply wherever you choose to live in the EU/EEA + Switzerland once you become a Portuguese (EU) citizen.
          </div>

          {/* Footer CTA */}
          <CtaSection />
        </div>
      </section>

      {/* Related reading from your RSS feed */}
      <BlogPreviewGridFromXML currentSlug={SLUG} />

      <Footer />
    </>
  );
}
