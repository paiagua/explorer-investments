import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';
import { Globe, BarChart, LineChart, Landmark, ShieldCheck, Compass, Star } from 'lucide-react';

// ===================================================================
// METADATA (SEO)
// ===================================================================
const SLUG = 'greece-golden-visa-slowdown-portugal-stable-investment-2026';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/greece-golden-visa-slowdown-2026.jpg';
const PUBLISHED = '2025-11-12T09:00:00+00:00';
const MODIFIED = '2025-11-12T09:00:00+00:00';

export const metadata = {
  title: 'Greece Golden Visa Slowdown: Why Portugal Emerges as Europe’s Stable Investment Path (2026 Outlook)',
  description:
    'With Greece facing a sharp slowdown in Golden Visa applications after its policy overhaul, investors are turning to Portugal’s regulated funds and balanced residency framework. Discover how Portugal maintains growth without overheating its real estate market.',
  keywords:
    'Greece Golden Visa 2025, Portugal Golden Visa funds, European residency by investment, CMVM regulated funds, Greece property investment slowdown, Portugal vs Greece Golden Visa, EU citizenship by investment 2026, Portuguese fund residency, Schengen residency program, investor migration trends 2026',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large',
  openGraph: {
    title: 'Greece Golden Visa Slowdown: Portugal’s Rise as Europe’s Stable Investment Route (2026 Outlook)',
    description:
      'Greece’s Golden Visa slowdown reshapes Europe’s residency market. Learn why Portugal’s fund route is attracting global investors seeking stability and compliance.',
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'Greece Golden Visa',
        'Portugal Golden Visa',
        'CMVM Funds',
        'Residency by Investment',
        'European Citizenship',
        'Investment Migration 2026',
        'Golden Visa Comparison',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title: 'Greece Golden Visa Slowdown: Why Portugal Leads Europe’s Residency Market',
    description:
      'After Greece’s Golden Visa slowdown, Portugal’s regulated fund model emerges as the most resilient and transparent path to EU residency in 2026.',
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
export default function GreeceVisaSlowdownArticle() {
  return (
    <>
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />

      <Header />

      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-10">
          <header className="text-left">
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <Globe size={16} /> European Residency & Investment Trends
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
              Greece Golden Visa Slowdown: Why Portugal Emerges as Europe’s Stable Investment Path (2026 Outlook)
            </h1>
            <p className="text-lg text-[#15364A] font-light">
              Greece’s 2025 Golden Visa data revealed a sharp decline in real estate-driven applications — a direct consequence of new restrictions meant to cool housing prices.
              As Greece pauses for recalibration, Portugal’s regulated fund model quietly solidifies its position as the most transparent and sustainable residency-by-investment route in Europe.
            </p>
          </header>

          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src={OG_IMAGE}
              alt="Athens skyline with Acropolis under sunset — symbol of Greece Golden Visa slowdown and investment shift to Portugal."
              fill
              priority
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-2 text-xs sm:text-sm text-white/95 bg-gradient-to-t from-black/60 to-transparent">
              A turning point: Greece’s slowdown reshapes Europe’s investment migration landscape.
            </figcaption>
          </figure>

          <nav aria-label="On this page" className="border border-gray-200 rounded-lg p-4 bg-[#F9F9FC]">
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#15364A]">
              <li><a href="#slowdown" className="hover:underline">Greece’s Slowdown and the 2025 Data Shock</a></li>
              <li><a href="#origins" className="hover:underline">Investor Shifts: Turks and Israelis Lead</a></li>
              <li><a href="#portugal" className="hover:underline">Portugal’s Balanced Golden Visa Framework</a></li>
              <li><a href="#funds" className="hover:underline">From Property to Funds: The New Investment Logic</a></li>
              <li><a href="#2026" className="hover:underline">2026 Outlook: Building Europe’s “Golden Balance”</a></li>
            </ul>
          </nav>

          <section id="slowdown" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><LineChart className="text-[#B4A77E]" /> Greece’s Slowdown and the 2025 Data Shock</h2>
            <p>
              According to Greece’s Ministry of Migration and Asylum, Golden Visa applications fell from <strong>822 in September 2024 to just 392 in 2025</strong> — a dramatic 52.5% plunge.
              Permit approvals dropped even further, with only one approval recorded in the same period last year that saw 607. Renewals decreased by nearly 75%.
            </p>
            <p>
              The Greek government’s policy to curb housing inflation by raising investment thresholds and restricting property zones succeeded in cooling the market —
              but at the cost of foreign capital inflows. Analysts now question whether the correction went too far, too fast.
            </p>
          </section>

          <section id="origins" className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF]">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><Landmark className="text-[#B4A77E]" /> Investor Shifts: Turks and Israelis Lead</h2>
            <p>
              While China still leads in total applications (8,792, +29%), new nationalities are emerging.
              <strong>Turkey’s investor permits rose 153%</strong> and <strong>Israel’s grew 84%</strong>, reflecting geopolitical instability and the search for safer jurisdictions within the EU.
            </p>
            <p>
              Interestingly, a growing segment of these investors — particularly institutional and family-office capital — is now <strong>redirecting toward Portugal</strong>,
              attracted by its transparent fund-based route and stable political environment.
            </p>
          </section>

          <section id="portugal" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><ShieldCheck className="text-[#B4A77E]" /> Portugal’s Balanced Golden Visa Framework</h2>
            <p>
              Unlike Greece, Portugal’s 2023 reforms <strong>did not abolish the Golden Visa</strong> but repositioned it toward regulated capital markets.
              The program’s evolution reflects a mature understanding of how to <strong>attract investment without distorting housing supply</strong>.
            </p>
            <p>
              CMVM-regulated funds — including those from <Link href="/secure-steps-portugal-golden-visa-funds-explorer-investments" className="text-[#B4A77E] hover:underline">Explorer Investments</Link> —
              channel investor capital into productive sectors such as energy, technology, and infrastructure. This model enhances transparency and sustainability.
            </p>
          </section>

          <section id="funds" className="space-y-4 bg-[#F9F9FC] p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><Compass className="text-[#B4A77E]" /> From Property to Funds: The New Investment Logic</h2>
            <p>
              The shift from real estate to financial instruments is transforming the European investment migration industry.
              For investors, regulated funds eliminate ownership management burdens, diversify exposure, and reduce legal complexity.
            </p>
            <p>
              Moreover, they <strong>meet ESG standards</strong> and are compliant with EU directives — a major attraction for institutional and ethical investors
              seeking both residency benefits and long-term portfolio stability.
            </p>
            <p>
              For a practical comparison of both models, read: <Link href="/from-real-estate-to-regulated-funds-portugal-golden-visa-2025" className="text-[#B4A77E] hover:underline">From Real Estate to Regulated Funds: The New Golden Visa Playbook</Link>.
            </p>
          </section>

          <section id="2026" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2"><Star className="text-[#B4A77E]" /> 2026 Outlook: Building Europe’s “Golden Balance”</h2>
            <p>
              As Greece recalibrates and Spain debates new thresholds, Portugal’s hybrid strategy — coupling compliance with competitiveness — may set the template for Europe’s next generation of residency programs.
            </p>
            <p>
              The 2026 horizon points toward a more institutional, transparent, and sustainable model where <strong>Portugal leads as Europe’s stable bridge between capital and residency</strong>.
            </p>
          </section>

          <CtaSection />
          <BlogPreviewGridFromXML currentSlug={SLUG} />
        </div>
      </section>

      <Footer />
    </>
  );
}
