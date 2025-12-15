// ✅ SEO Article: Web Summit 2025 + AI + Portugal Innovation Hub + Golden Visa
// Next.js + Tailwind + Schema + OG

import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';
import { Cpu, TrendingUp, Brain, Globe2, Landmark, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const revalidate = 600;
export const fetchCache = 'force-cache';

const SLUG = 'web-summit-2025-ai-portugal-golden-visa-innovation';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/web-summit-2025-ai-portugal.jpg';
const PUBLISHED = '2025-11-11T22:00:00+00:00';

export const metadata = {
  title:
    'Web Summit 2025: AI Dominates Lisbon — and Why Portugal’s Golden Visa Fuels Its Innovation Hub',
  description:
    'AI took center stage at Web Summit Lisbon 2025 as Portugal positioned itself as a global innovation hub — supported by its Golden Visa, Tech Visa, and foreign investment inflows.',
  openGraph: {
    title:
      'Web Summit 2025: AI Takes Over Lisbon — Portugal’s Golden Visa Powers Its Innovation Hub',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <CheckCircle2 className="mt-[2px] flex-shrink-0" size={18} />
    <span>{children}</span>
  </li>
);

export default function WebSummitAIGoldenVisaArticle() {
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
        name: 'What were the main themes of Web Summit 2025?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Artificial Intelligence dominated Web Summit 2025, with discussions on generative AI, automation, and the geopolitical race for technological leadership — including a strong presence of Chinese robotics firms.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is Portugal positioning itself in the AI and tech space?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Portugal aims to become a global innovation hub, supported by a National AI Strategy, digital skills training for over 2 million people, and policies promoting data centers, sovereign cloud, and startup ecosystems.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the Golden Visa connect to Portugal’s innovation goals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Through CMVM-regulated funds and innovation-linked investments, the Golden Visa channel attracts qualified foreign capital into Portuguese technology, infrastructure, and AI startups — complementing Tech and Startup Visa programs.',
        },
      },
    ],
  };

  return (
    <>
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          <header>
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <TrendingUp size={16} /> Web Summit 2025 • AI • Innovation • Investment
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Web Summit 2025: AI Takes Over Lisbon — and Why Portugal’s Golden Visa Is Powering Its Innovation Hub
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3">
              From humanoid robots to sovereign clouds — Lisbon’s Web Summit 2025 proved that AI has become the engine of global innovation. Portugal is seizing this momentum, linking digital transformation with smart investment pathways like the Golden Visa and Tech Visa.
            </p>
          </header>

          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image src={OG_IMAGE} alt="Web Summit 2025 Lisbon AI and Golden Visa innovation hub" fill className="object-cover" />
          </figure>

          <h2 className="text-2xl font-bold flex items-center gap-2"><Brain /> AI Becomes the Core of Global Competition</h2>
          <p>
            Web Summit 2025 opened with a clear message: <strong>Artificial Intelligence is no longer a promise — it’s the new arena of political and economic power</strong>. Paddy Cosgrave warned that the most advanced humanoid robots showcased in Lisbon this year were not from the West, but from China, marking a shift in global tech leadership.
          </p>

          <h2 className="text-2xl font-bold flex items-center gap-2"><Globe2 /> Portugal’s Vision: Becoming a Global Innovation Hub</h2>
          <p>
            Portuguese officials, including Minister Gonçalo Matias, outlined an ambitious plan to make Portugal a global center for innovation. Initiatives include a National AI Strategy, a sovereign cloud infrastructure, and a Digital Skills Pact to train over two million citizens by 2030.
          </p>
          <p>
            As Lisbon’s mayor Carlos Moedas noted, “the challenge ahead is not just technological — it’s cultural and social.” The goal: make Lisbon not only Europe’s innovation capital, but also a model for inclusive progress.
          </p>

          <h2 className="text-2xl font-bold flex items-center gap-2"><Landmark /> Golden Visa Meets the Innovation Economy</h2>
          <p>
            As AI reshapes global markets, investors are looking for stable jurisdictions that combine innovation, quality of life, and access to Europe. Portugal’s <strong>Golden Visa fund route</strong> — regulated by the CMVM — has become one of the few EU investment pathways that directly channels foreign capital into the country’s innovation ecosystem.
          </p>
          <ul className="space-y-2">
            <Li>Funds now target AI startups, digital infrastructure, and sustainability projects</Li>
            <Li>Residency in an EU state with access to Schengen and EU rights</Li>
            <Li>Low average presence requirements (often ~7 days/year)</Li>
          </ul>

          <h2 className="text-2xl font-bold flex items-center gap-2"><Cpu /> AI Beyond Tech — Culture, Sports & Creativity</h2>
          <p>
            Speakers like Maria Sharapova and IBM’s Sarah Meron highlighted how AI is already transforming professional sports through performance analytics and fan engagement. Meanwhile, creators like Khaby Lame discussed AI’s impact on the creator economy, while startups like Lovable showcased code-generation AI that can replace entire development teams.
          </p>

          <div className="border p-5 rounded-xl bg-[#FFFCF3] text-sm">
            <strong>Investor Insight:</strong> AI, automation, and innovation are now strategic themes in Golden Visa funds. For high-net-worth families, Portugal is becoming both a tech hub and a financial safe haven.
          </div>

          <CtaSection />
        </div>
      </section>

      <BlogPreviewGridFromXML currentSlug={SLUG} />
      <Footer />
    </>
  );
}
