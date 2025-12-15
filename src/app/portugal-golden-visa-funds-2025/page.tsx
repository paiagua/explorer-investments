// ✅ SEO Optimized Article — Portugal Golden Visa Funds 2025
// Next.js + Tailwind + Schema + Interlinking

import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';
import { BarChart3, Banknote, FileText, ShieldCheck, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const revalidate = 600;
export const fetchCache = 'force-cache';

const SLUG = 'portugal-golden-visa-funds-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-funds-2025.jpg';
const PUBLISHED = '2025-11-09T09:00:00+00:00';

export const metadata = {
  title: 'Portugal Golden Visa Funds 2025 — CMVM-Regulated Investment Route',
  description:
    'The Portugal Golden Visa fund route explained: eligibility, minimum investment (€500,000), CMVM regulation, tax aspects, and 2025 approved strategies.',
  openGraph: {
    title: 'Portugal Golden Visa 2025 — CMVM Funds Explained',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="mt-[2px]" />{children}</li>
);

export default function PortugalGVFunds2025() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can I still apply for a Golden Visa through funds in 2025?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the fund route remains active. Investors can apply by subscribing to a CMVM-regulated investment fund of at least €500,000.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are Golden Visa funds regulated by CMVM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Eligible funds must be managed and supervised by entities licensed under Portugal’s CMVM, ensuring transparency and investor protection.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does the Golden Visa process take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Processing can take 6-9 months. Residency is initially granted for 2 years, renewable, with citizenship after 5 years of holding period.',
        },
      },
    ],
  };

  return (
    <>
      <Script id="ld-faq-gvfunds" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          <header>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">Portugal Golden Visa Funds 2025 — CMVM-Regulated Route</h1>
            <p className="text-[#15364A] text-lg font-light mt-3">
              With real estate routes closed, regulated investment funds are now the only path to obtain the Portuguese Golden Visa in 2025 — offering diversification, governance and a route to citizenship.
            </p>
          </header>

          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border">
            <Image src={OG_IMAGE} alt="Portugal Golden Visa CMVM funds 2025" fill className="object-cover" />
          </figure>

          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2"><Banknote /> Minimum Investment & Eligibility</h2>
            <ul className="space-y-2 mt-2">
              <Li>Minimum investment: €500,000</Li>
              <Li>Fund must be CMVM-regulated and based in Portugal</Li>
              <Li>Hold investment for 5 years</Li>
              <Li>Can include family (spouse + dependents)</Li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2"><FileText /> Key Benefits of the Fund Route</h2>
            <ul className="space-y-2 mt-2">
              <Li>Low physical presence (7 days in 1st year, 14 days every 2 years)</Li>
              <Li>Professional fund management and diversification</Li>
              <Li>Access to tax-efficient vehicles and reporting standards</Li>
              <Li>Eligibility for citizenship after 5 years</Li>
            </ul>
          </div>

          <div className="border rounded-xl p-4 bg-[#FFFCF3] text-sm flex items-start gap-2">
            <ShieldCheck size={18} className="mt-[2px]" />
            <p>Compare with the <Link href="/portugal-d7-visa-guide-2025" className="underline">D7 Visa 2025 Guide</Link> or the <Link href="/portuguese-citizenship-2025" className="underline">Citizenship Timeline 2025</Link> to choose the right route.</p>
          </div>

          <CtaSection />
        </div>
      </section>

      <BlogPreviewGridFromXML currentSlug={SLUG} />
      <Footer />
    </>
  );
}
