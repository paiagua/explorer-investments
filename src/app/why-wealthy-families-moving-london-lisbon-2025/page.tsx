import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';
import {
  ShieldCheck,
  BarChart,
  Landmark,
  Globe,
  MapPin,
  Users,
  TrendingUp,
  Building,
  ArrowRight,
} from 'lucide-react';

// ===================================================================
// METADATA (SEO)
// ===================================================================
const SLUG = 'why-wealthy-families-moving-london-lisbon-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/london-to-lisbon-wealthy-families-2025.jpg';
const PUBLISHED = '2025-11-11T09:00:00+00:00';
const MODIFIED  = '2025-11-11T09:00:00+00:00';

export const metadata = {
  title: 'Why Wealthy Families Are Moving from London to Lisbon in 2025',
  description:
    'With UK tax reforms squeezing HNWIs, Lisbon offers regulated Golden Visa funds, lifestyle, safety and a 5-year path to EU citizenship. See why family offices and entrepreneurs are relocating in 2025.',
  keywords:
    'UK non-dom 2025, move from London to Lisbon, Lisbon for family offices, Portugal Golden Visa funds, CMVM regulated funds, UK millionaire tax changes, Portugal residency 2025, EU citizenship 5 years, London exodus, Lisbon private wealth',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large',
  openGraph: {
    title: 'London → Lisbon: The 2025 Shift of Wealthy Families',
    description:
      'Tax pressure in the UK, stability in Portugal, and a fund-based Golden Visa route. Why Lisbon is the new European base for global families.',
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'UK Non-Dom',
        'Wealth Migration',
        'Golden Visa Funds',
        'Portugal Residency',
        'EU Citizenship',
        'Family Offices',
        'Lisbon'
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title: 'Why Wealthy Families Are Moving from London to Lisbon in 2025',
    description:
      'Regulated funds, safety, education, and EU rights. Lisbon is becoming the preferred base for global families.',
    images: [OG_IMAGE],
  },
  alternates: { canonical: CANONICAL_URL },
};

// ===================================================================
// SCHEMA DATA
// ===================================================================
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  mainEntityOfPage: CANONICAL_URL,
  headline: metadata.title,
  description: metadata.description,
  image: [OG_IMAGE],
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: { '@type': 'Organization', name: 'Explorer Investments' },
  publisher: {
    '@type': 'Organization',
    name: 'Explorer Investments',
    logo: { '@type': 'ImageObject', url: 'https://goldenvisashub.com/logo.png' },
  },
};

// ===================================================================
// PAGE COMPONENT
// ===================================================================
export default function LondonToLisbonHNWIArticlePage() {
  return (
    <>
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />

      <Header />

      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-10">
          <header className="text-left">
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <TrendingUp size={16} /> Wealth Migration • UK → Portugal
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              Why Wealthy Families Are Moving from London to Lisbon in 2025
            </h1>
            <p className="text-lg text-[#15364A] font-light text-balance">
              With the UK tightening non-dom rules and increasing tax pressure, high-net-worth families are choosing Lisbon for <strong>regulated Golden Visa funds</strong>, <strong>quality of life</strong> and a <strong>5-year path to EU citizenship</strong>.
            </p>
          </header>

          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src={OG_IMAGE}
              alt="Wealthy families relocating from London to Lisbon in 2025"
              fill
              priority
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-2 text-xs sm:text-sm text-white/95 bg-gradient-to-t from-black/60 to-transparent">
              Lisbon combines lifestyle, safety and EU optionality with CMVM-regulated fund routes.
            </figcaption>
          </figure>

          <nav aria-label="On this page" className="border border-gray-200 rounded-lg p-4 bg-[#F9F9FC]">
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#15364A]">
              <li><a href="#drivers" className="hover:underline">The 2025 Drivers: Tax & Stability</a></li>
              <li><a href="#why-lisbon" className="hover:underline">Why Lisbon Wins for Families</a></li>
              <li><a href="#funds" className="hover:underline">CMVM-Regulated Funds & Golden Visa</a></li>
              <li><a href="#playbook" className="hover:underline">Relocation Playbook (London → Lisbon)</a></li>
              <li><a href="#future" className="hover:underline">What to Expect in 2026</a></li>
            </ul>
          </nav>

          <section id="drivers" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><BarChart className="text-[#B4A77E]" /> The 2025 Drivers: Tax & Stability</h2>
            <p>
              The UK’s revised non-dom regime and capital gains changes have accelerated outflows of HNWIs. Many are re-basing in EU jurisdictions with <strong>predictable frameworks</strong> and access to Schengen. Lisbon leads due to its combination of <strong>rule-of-law</strong>, <strong>safety</strong> and <strong>mobility</strong>.
            </p>
            <p>
              Families seek <strong>asset protection</strong>, <strong>education quality</strong> and <strong>succession planning</strong>. Portugal’s path to EU citizenship in ~5 years is a defining advantage compared to other hubs.
            </p>
          </section>

          <section id="why-lisbon" className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF]">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><MapPin className="text-[#B4A77E]" /> Why Lisbon Wins for Families</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>Safety & Lifestyle:</strong> Top-tier safety rankings, international schools, culture, ocean.</li>
              <li><strong>Education & Healthcare:</strong> Strong ecosystem of international curricula and private care.</li>
              <li><strong>Connectivity:</strong> Direct links to major hubs; thriving tech & finance communities.</li>
              <li><strong>Property & Costs:</strong> Prime real estate still competitive vs. London/Paris; high quality of life.</li>
            </ul>
            <p className="text-sm text-[#5A6F7B]">
              Tip: See our <Link href="/algarve-american-investment-hotspot-2025" className="underline">Algarve investment deep-dive</Link> for lifestyle-plus-yield strategies.
            </p>
          </section>

          <section id="funds" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><Landmark className="text-[#B4A77E]" /> CMVM-Regulated Funds & the Golden Visa</h2>
            <p>
              Post real-estate route, the preferred pathway is via <strong>CMVM-supervised private equity/VC/real asset funds</strong>. This keeps capital <em>productive and transparent</em>, aligning with EU compliance and long-term planning.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li>Professional governance, independent audits, custodians</li>
              <li>Clear mandates, liquidity windows, and reporting cadence</li>
              <li>Optionality: <Link href="/portugal-golden-visa-2025-investment-first-guide" className="underline">Golden Visa investment-first guide</Link></li>
            </ul>
            <p>
              Start here: <Link href="/secure-steps-portugal-golden-visa-funds-explorer-investments" className="text-[#B4A77E] font-semibold underline">
                Secure Steps — Portugal Golden Visa Funds</Link>.
            </p>
          </section>

          <section id="playbook" className="space-y-4 bg-[#F9F9FC] p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><ShieldCheck className="text-[#B4A77E]" /> Relocation Playbook (London → Lisbon)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[#15364A]">
              <li>Define objectives: lifestyle, education, EU rights, or capital allocation.</li>
              <li>Choose vehicle: <strong>D7/D8</strong> relocation or <strong>Golden Visa</strong> low-presence plan.</li>
              <li>Fund DD: mandate, fees, exits, governance (<Link href="/golden-visa-fund-pitfalls-red-flags-2026" className="underline">avoid red flags</Link>).</li>
              <li>Tax & structure: align UK exit and Portugal entry; coordinate succession.</li>
              <li>Timeline: PR at ~5 years, citizenship thereafter (verify current rules).</li>
            </ol>
            <div className="flex flex-wrap gap-2 text-sm">
              <Link href="/portuguese-citizenship-legacy-passport-eu-mobility-2025" className="inline-flex items-center gap-1 underline">
                <Users size={14}/> Citizenship as a Family Legacy
              </Link>
              <Link href="/best-countries-to-emigrate-2025-no-lottery-no-investment" className="inline-flex items-center gap-1 underline">
                <Globe size={14}/> Compare Non-Investment Routes
              </Link>
            </div>
          </section>

          <section id="future" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><Building className="text-[#B4A77E]" /> What to Expect in 2026</h2>
            <p>
              Expect continued demand from UK families, tighter fund selection standards, and deeper Lisbon private-markets activity. Portugal’s <em>capital markets narrative</em> is strengthening — see our coverage of the{' '}
              <Link href="/portugal-innovation-economy-ai-data-golden-visa-private-markets" className="underline">Portugal Innovation & Private Markets</Link> theme.
            </p>
            <div className="mt-3">
              <Link
                href="/secure-steps-portugal-golden-visa-funds-explorer-investments"
                className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#a3956f] transition"
              >
                Explore Golden Visa Funds <ArrowRight size={16}/>
              </Link>
            </div>
          </section>

          <CtaSection />
          <BlogPreviewGridFromXML currentSlug={SLUG} />
        </div>
      </section>

      <Footer />
    </>
  );
}
