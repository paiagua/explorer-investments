import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';
import { Globe, Home, BarChart, MapPin, ShieldCheck, Briefcase, Building, Compass, Star } from 'lucide-react';

// ===================================================================
// METADATA (SEO)
// ===================================================================
const SLUG = 'algarve-american-investment-hotspot-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/algarve-investment-hotspot.jpg';
const PUBLISHED = '2025-10-28T09:00:00+00:00';
const MODIFIED  = '2025-10-28T09:00:00+00:00';

export const metadata = {
  title: 'Why the Algarve Became America’s European Investment Hotspot (2025 Analysis)',
  description:
    'The Algarve has emerged as a magnet for American investors seeking lifestyle, yield, and EU access. Explore data on luxury real estate, resort developments, and the evolution of global residency-by-investment strategies for U.S. citizens.',
  keywords:
    'Algarve real estate 2025, American investors in Portugal, Portugal property market, Algarve investment opportunities, JW Marriott Algarve, Palmares Resort, Aroeira Missoni, Portugal Golden Visa alternatives, Portuguese residency, U.S. expats in Europe, Schengen residency, CMVM fund Portugal, Portugal lifestyle investment, Portugal tourism growth',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large',
  openGraph: {
    title: 'The Algarve 2025: How Portugal’s Southern Coast Became America’s Investment Magnet',
    description:
      'U.S. investors are flooding Portugal’s Algarve region for its real estate opportunities, lifestyle, and EU connectivity. Explore why the Algarve has become the top relocation and investment hotspot of 2025.',
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'Algarve Real Estate',
        'American Investment',
        'Portugal Property',
        'Residency by Investment',
        'Portugal Golden Visa',
        'JW Marriott Algarve',
        'Palmares Resort',
        'Missoni Aroeira',
        'Schengen Residency'
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title: 'Algarve 2025: How Portugal’s Coast Became America’s Top Investment Destination',
    description:
      'Luxury property, 300 days of sun, golf resorts and EU mobility. Discover why Americans are turning to Portugal’s Algarve for real estate and global residency opportunities.',
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
export default function AlgarveInvestmentHotspotArticlePage() {
  return (
    <>
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />

      <Header />

      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-10">
          <header className="text-left">
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <Globe size={16} /> Global Real Estate & Mobility Trends
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              The Algarve 2025: How Portugal’s Coast Became America’s Favorite Investment and Residency Hotspot
            </h1>
            <p className="text-lg text-[#15364A] font-light text-balance">
              The Algarve, Portugal’s southern jewel, has rapidly evolved from a European vacation spot into an American investment epicenter. With record‑breaking property growth, luxury resort developments and simplified residency options, U.S. investors are redefining global diversification on Portugal’s sun‑soaked coast.
            </p>
          </header>

          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src={OG_IMAGE}
              alt="Luxury Algarve coast viewed from above with resort villas and golf course - symbol of rising American investment in Portugal."
              fill
              priority
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-2 text-xs sm:text-sm text-white/95 bg-gradient-to-t from-black/60 to-transparent">
              The Algarve: a convergence of lifestyle, yield, and residency opportunity.
            </figcaption>
          </figure>

          <nav aria-label="On this page" className="border border-gray-200 rounded-lg p-4 bg-[#F9F9FC]">
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#15364A]">
              <li><a href="#growth" className="hover:underline">U.S. Capital Flows and Market Growth</a></li>
              <li><a href="#why-algarve" className="hover:underline">Why Americans Are Choosing the Algarve</a></li>
              <li><a href="#developments" className="hover:underline">Major Developments & Resort Investments</a></li>
              <li><a href="#process" className="hover:underline">Investment Process & Residency Pathways</a></li>
              <li><a href="#global-context" className="hover:underline">Global Mobility & Tax Considerations</a></li>
              <li><a href="#conclusion" className="hover:underline">The Future of Transatlantic Investment</a></li>
            </ul>
          </nav>

          <section id="growth" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D]">U.S. Capital Flows and Market Growth</h2>
            <p>North American investment in Portuguese luxury real estate grew by <strong>82%</strong> in late‑2024. In the Algarve, over <strong>10% of home buyers</strong> are now U.S. citizens. Property appreciation in premium Algarve districts reached <strong>14-18% year‑on‑year</strong>, outperforming the EU average by more than double.</p>
            <p>Rental yields remain strong (5-6%), with the rise of hybrid tourism models-combining short‑let and long‑stay rentals-helping American investors achieve stable income while retaining personal use flexibility.</p>
          </section>

          <section id="why-algarve" className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF]">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><ShieldCheck className="text-[#B4A77E]" /> Why Americans Are Choosing the Algarve</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li><strong>Climate & Lifestyle:</strong> Over 300 sunny days per year, beaches, golf, Michelin dining, and safety.</li>
              <li><strong>Accessibility:</strong> Direct flights to Faro from U.S. hubs like Newark; robust tourism infrastructure.</li>
              <li><strong>Cost Advantage:</strong> Quality of life at ~40-50% lower cost than coastal U.S. equivalents.</li>
              <li><strong>Legal Stability:</strong> Transparent ownership, strong property rights, and Schengen travel access.</li>
              <li><strong>Investment Appeal:</strong> High yield potential, growing expat demand, and limited supply of prime units.</li>
            </ul>
          </section>

          <section id="developments" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><Building className="text-[#B4A77E]" /> Major Developments & Resort Investments</h2>
            <p>The Algarve’s luxury renaissance is led by integrated resort projects where Americans represent up to one‑third of total investors:</p>
            <ul className="list-disc pl-6 space-y-1 text-[#15364A]">
              <li><strong>Palmares Ocean Living & Golf:</strong> Near Lagos, includes a 27‑hole Robert Trent Jones Jr. course, Michelin‑starred restaurant Al Sud, and dozens of ocean‑facing villas. Over 35% of investors are American.</li>
              <li><strong>JW Marriott Algarve (opening 2028):</strong> The first JW Marriott in Portugal-133 branded residences, 5‑star hotel, spa, and coastal integration with eco‑roof design.</li>
              <li><strong>Aroeira Collections by Missoni:</strong> 28 luxury villas near Lisbon designed with Missoni interiors, LEED certification, and two PGA golf courses.</li>
            </ul>
            <p>These projects exemplify the shift toward branded, professionally managed assets-offering American investors turnkey ownership, rental management, and global recognition.</p>
          </section>

          <section id="process" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><Compass className="text-[#B4A77E]" /> Investment Process & Residency Pathways</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[#15364A]">
              <li><strong>Select investment objective:</strong> Lifestyle, income, or residency optionality.</li>
              <li><strong>Due diligence:</strong> Verify developer credentials, management model, and CMVM regulation for fund options.</li>
              <li><strong>Tax and legal structure:</strong> Engage cross‑border advisors to ensure compliance with U.S. FATCA and Portuguese frameworks.</li>
              <li><strong>Residency options:</strong> Golden Visa (fund or business), D7 passive income visa, or D2 entrepreneur visa-all allow ~7 days/year stay average.</li>
              <li><strong>Timeline:</strong> 5 years to citizenship eligibility, 1 week minimum presence per year.</li>
            </ol>
          </section>

          <section id="global-context" className="space-y-4 bg-[#F9F9FC] p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><BarChart className="text-[#B4A77E]" /> Global Mobility & Tax Considerations</h2>
            <p>Americans relocating or investing in Portugal must navigate cross‑border reporting and taxation. The Non‑Habitual Resident (NHR) regime-though evolving-still offers favorable conditions for ten years of residence. Alternative programs emphasize lawful transparency under EU AML and OECD CRS frameworks.</p>
            <p>For those not pursuing EU residency, global alternatives-Panama, Uruguay, UAE, St Lucia-are gaining traction, but Portugal remains uniquely balanced between lifestyle, safety, and European access.</p>
          </section>

          <section id="conclusion" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><Star className="text-[#B4A77E]" /> The Future of Transatlantic Investment</h2>
            <p>The Algarve’s transformation into an American investment hotspot symbolizes a broader trend: high‑net‑worth families diversifying not just portfolios but jurisdictions. With stable legal frameworks, growing yields, and unmatched lifestyle advantages, southern Portugal stands as a premier transatlantic bridge between wealth, wellbeing, and mobility.</p>
            <p><strong>Explorer Investments</strong> continues to monitor the evolution of Portugal’s investment landscape and its impact on U.S. investor portfolios.</p>
          </section>

          <CtaSection />
          <BlogPreviewGridFromXML currentSlug={SLUG} />
        </div>
      </section>

      <Footer />
    </>
  );
}
