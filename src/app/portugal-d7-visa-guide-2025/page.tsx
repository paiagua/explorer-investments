// ✅ SEO Optimized Article — Portugal D7 Visa 2025 Guide
// Next.js + Tailwind + Schema (Article + FAQ) + Cross-links

import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';
import { Plane, Home, Wallet, Clock, ShieldCheck, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const revalidate = 600;
export const fetchCache = 'force-cache';

const SLUG = 'portugal-d7-visa-guide-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/portugal-d7-visa-2025.jpg';
const PUBLISHED = '2025-11-09T09:00:00+00:00';

export const metadata = {
  title: 'Portugal D7 Visa 2025 Guide — Requirements, Income & How to Apply',
  description:
    'Full guide to the Portugal D7 Visa in 2025: minimum income requirements, documents, costs, timeline, tax tips and how it compares to the Digital Nomad and Golden Visa.',
  openGraph: {
    title: 'Portugal D7 Visa 2025 — Income Rules, Documents & Application Process',
    description:
      'Learn everything about the D7 Visa: income, documents, timeline, tax benefits and how it compares to Digital Nomad and Golden Visa options.',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="mt-[2px]" />{children}</li>
);

export default function PortugalD7Visa2025() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the Portugal D7 Visa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The D7 visa is a Portuguese residency permit for non-EU citizens with passive or stable income such as pensions, dividends or remote work earnings.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the income requirements for D7 Visa 2025?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Applicants must prove monthly income of at least 4× the national minimum wage (€870 × 4 = €3,480 per month). Couples or families require proportionally higher income.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I include family members in my D7 application?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Spouses and dependent children can be included as family reunification applicants, provided you show adequate income and housing.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long until I get residency and citizenship?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The D7 visa usually grants 2 years initially, renewable for 3 more. Citizenship can be requested after 5 years of legal residence (subject to language test).',
        },
      },
    ],
  };

  return (
    <>
      <Script id="ld-faq-d7" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          <header>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">Portugal D7 Visa 2025 — Requirements, Income & How to Apply</h1>
            <p className="text-[#15364A] text-lg font-light mt-3">
              The D7 Visa remains Portugal’s most popular residency route for retirees, remote workers and passive income earners — no investment needed, only stable income and accommodation.
            </p>
          </header>

          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border">
            <Image src={OG_IMAGE} alt="Portugal D7 Visa 2025 requirements" fill className="object-cover" />
          </figure>

          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2"><Wallet /> Minimum Income Requirements (2025)</h2>
            <ul className="space-y-2 mt-2">
              <Li>Main applicant: €3,480/month</Li>
              <Li>Spouse: +50% = €1,740/month</Li>
              <Li>Dependent child: +30% each = €1,044/month</Li>
            </ul>
            <p className="text-sm text-[#5A6F7B] mt-2">Source: SEF/AIMA official guidelines, updated for 2025.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2"><Home /> Accommodation & Documents</h2>
            <ul className="space-y-2 mt-2">
              <Li>Proof of accommodation (rental or property ownership)</Li>
              <Li>Health insurance valid in Portugal</Li>
              <Li>Criminal record certificate</Li>
              <Li>Bank statements (6-12 months)</Li>
              <Li>Portuguese NIF (tax number)</Li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2"><Clock /> Timeline & Validity</h2>
            <ul className="space-y-2 mt-2">
              <Li>Processing time: 60-90 days on average</Li>
              <Li>Initial permit: 2 years</Li>
              <Li>Renewal: +3 years → total 5 years to citizenship eligibility</Li>
            </ul>
          </div>

          <div className="border rounded-xl p-4 bg-[#FFFCF3] text-sm flex items-start gap-2">
            <ShieldCheck size={18} className="mt-[2px]" />
            <p>The D7 Visa is relocation-based. If you prefer low physical presence and diversification, explore the <Link href="/portugal-golden-visa-funds-2025" className="underline">Golden Visa Fund Route</Link>.</p>
          </div>

          <CtaSection />
        </div>
      </section>

      <BlogPreviewGridFromXML currentSlug={SLUG} />
      <Footer />
    </>
  );
}
