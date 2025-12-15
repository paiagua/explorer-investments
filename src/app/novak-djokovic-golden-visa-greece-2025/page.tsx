import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';
import { Globe, Trophy, Landmark, ShieldCheck, Compass, Star } from 'lucide-react';

// ===================================================================
// METADATA (SEO)
// ===================================================================
const SLUG = 'novak-djokovic-golden-visa-greece-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/novak-djokovic-golden-visa-greece.jpg';
const PUBLISHED = '2025-11-12T12:00:00+00:00';
const MODIFIED = '2025-11-12T12:00:00+00:00';

export const metadata = {
  title: "Novak Djokovic Secures Greek Golden Visa — What It Means for Europe's Residency Market (2025)",
  description:
    "Novak Djokovic has reportedly obtained a Greek Golden Visa, joining a growing list of global athletes and investors seeking European residency. Explore the costs, benefits, and how Greece compares to Portugal’s regulated investment model.",
  keywords:
    "Novak Djokovic Greece golden visa, Greek residency program, celebrity golden visa, Greece investment immigration, Novak Djokovic Athens home, Schengen residency 2025, Portugal Golden Visa comparison, CMVM fund Portugal, European residency trends 2025",
  robots: 'index, follow, max-snippet:-1, max-image-preview:large',
  openGraph: {
    title: "Novak Djokovic Obtains Greece's Golden Visa — Inside the 2025 Trend",
    description:
      "The tennis legend joins a wave of high-net-worth individuals turning to Greece for residency. We examine why—and how Portugal’s fund route is becoming Europe’s stable alternative.",
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'Novak Djokovic',
        'Greece Golden Visa',
        'Portugal Golden Visa',
        'Residency by Investment',
        'Schengen Area',
        'Investment Migration',
        'Sports & Mobility',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title: "Novak Djokovic’s Greek Golden Visa: What It Means for Europe’s Residency Programs",
    description:
      "Djokovic reportedly gains Greece’s Golden Visa—part of a wider wave of global investors relocating to southern Europe. Discover how Greece compares with Portugal in 2025.",
    images: [OG_IMAGE],
  },
  alternates: { canonical: CANONICAL_URL },
};

// ===================================================================
// SCHEMA DATA
// ===================================================================
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
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
export default function NovakDjokovicGoldenVisaGreece() {
  return (
    <>
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />

      <Header />

      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-10">
          <header className="text-left">
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <Globe size={16} /> Celebrity Investment & Mobility News
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              Novak Djokovic Secures Greek Golden Visa — What It Means for Europe's Residency Market
            </h1>
            <p className="text-lg text-[#15364A] font-light">
              Tennis legend <strong>Novak Djokovic</strong> has reportedly joined Greece’s Golden Visa program after purchasing property in Athens, adding his name to a growing list of high-profile investors using residency-by-investment schemes to anchor their European presence.
            </p>
          </header>

          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src={OG_IMAGE}
              alt="Novak Djokovic celebrating victory in Athens after reportedly obtaining a Greek Golden Visa."
              fill
              priority
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-2 text-xs sm:text-sm text-white/95 bg-gradient-to-t from-black/60 to-transparent">
              Novak Djokovic in Athens — where he’s said to have gained residency through Greece’s Golden Visa program.
            </figcaption>
          </figure>

          <nav aria-label="On this page" className="border border-gray-200 rounded-lg p-4 bg-[#F9F9FC]">
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#15364A]">
              <li><a href="#investment" className="hover:underline">Djokovic’s Greek Investment</a></li>
              <li><a href="#program" className="hover:underline">Inside Greece’s Golden Visa Program</a></li>
              <li><a href="#comparison" className="hover:underline">Portugal vs. Greece: Contrasting Strategies</a></li>
              <li><a href="#trend" className="hover:underline">The Celebrity and HNWI Trend</a></li>
              <li><a href="#future" className="hover:underline">Europe’s Golden Visa Future</a></li>
            </ul>
          </nav>

          <section id="investment" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <Trophy className="text-[#B4A77E]" /> Djokovic’s Greek Investment
            </h2>
            <p>
              Serbian publication <em>Sportal</em> reports that Djokovic and his family relocated to Athens earlier this year,
              acquiring property valued above €700,000 — the minimum threshold required for residency in the Greek capital.
              He has since spoken publicly about feeling “at home” in Greece during the <strong>Hellenic Championship</strong>, where he secured his 101st career title.
            </p>
            <p>
              His decision highlights how the Golden Visa can serve both as a lifestyle enhancement and a strategic base for travel, education, and business operations across the EU.
            </p>
          </section>

          <section id="program" className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF]">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <Landmark className="text-[#B4A77E]" /> Inside Greece’s Golden Visa Program
            </h2>
            <p>
              Greece’s program remains one of Europe’s most accessible, with entry points starting at €250,000 outside major zones and €500,000-€700,000 in Athens, Thessaloniki, and select islands.
              It grants renewable, indefinite residence permits and extends to spouses, children, and parents of both partners.
            </p>
            <p>
              Holders gain visa-free movement across the <strong>Schengen Area</strong> and may maintain their main residence elsewhere.
              For many, this flexibility — combined with cultural familiarity and a Mediterranean lifestyle — makes Greece highly appealing.
            </p>
          </section>

          <section id="comparison" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <ShieldCheck className="text-[#B4A77E]" /> Portugal vs. Greece: Contrasting Strategies
            </h2>
            <p>
              While Greece focuses on property investment, <Link href="/portugal-golden-visa-2025-investment-first-guide" className="text-[#B4A77E] hover:underline">Portugal’s Golden Visa</Link> has shifted toward <strong>regulated investment funds</strong>.
              These vehicles, supervised by the <strong>CMVM</strong>, channel capital into productive sectors such as green energy, technology, and infrastructure.
            </p>
            <p>
              This distinction is key: Portugal’s reform preserved the program’s long-term value while aligning with EU housing and transparency goals — a strategy many view as the model for sustainable residency programs.
            </p>
            <p>
              For deeper insight, read: <Link href="/from-real-estate-to-regulated-funds-portugal-golden-visa-2025" className="text-[#B4A77E] hover:underline">From Real Estate to Regulated Funds — The New Golden Visa Playbook</Link>.
            </p>
          </section>

          <section id="trend" className="space-y-4 bg-[#F9F9FC] p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <Compass className="text-[#B4A77E]" /> The Celebrity and HNWI Trend
            </h2>
            <p>
              Djokovic’s move reflects a broader shift among high-net-worth individuals using residency programs as tools for diversification and global mobility.
              Other athletes, entertainers, and tech founders are similarly pursuing European residency through structured investment channels.
            </p>
            <p>
              The combination of lifestyle, visa-free travel, and wealth planning advantages continues to make Southern Europe the epicenter of the <strong>“golden passport” era</strong>.
            </p>
          </section>

          <section id="future" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <Star className="text-[#B4A77E]" /> Europe’s Golden Visa Future
            </h2>
            <p>
              As programs evolve, transparency and regulation will determine their longevity.
              Greece may face tightening oversight after 2025’s real-estate surge, while Portugal’s fund model positions it as Europe’s stable, institution-friendly alternative.
            </p>
            <p>
              Djokovic’s choice illustrates how residency strategies are entering mainstream discourse — where sports, finance, and mobility intersect.
            </p>
          </section>

          <CtaSection />
         
        </div>
      </section>
 <BlogPreviewGridFromXML currentSlug={SLUG} />
      <Footer />
    </>
  );
}
