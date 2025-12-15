// app/(blog)/moving-family-to-portugal-golden-visa-lifestyle-education/page.tsx

import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';
import {
  Globe,
  School,
  ShieldCheck,
  Sun,
  MapPin,
  FileCheck2,
} from 'lucide-react';

export const revalidate = 600;
export const fetchCache = 'force-cache';

const SLUG = 'moving-family-to-portugal-golden-visa-lifestyle-education';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/moving-family-to-portugal-golden-visa-lifestyle-education.jpg';
const PUBLISHED = '2025-12-09T09:00:00+00:00';

export const metadata = {
  title:
    'Moving Your Family to Portugal with the Golden Visa – Lifestyle, Education & 5-Year Citizenship Plan',
  description:
    'Family-focused guide to moving to Portugal through the Golden Visa: lifestyle, schools, healthcare, safety and how CMVM-regulated funds can underpin a five-year citizenship plan.',
  openGraph: {
    title:
      'Moving Your Family to Portugal with the Golden Visa – Lifestyle, Education & 5-Year Citizenship Plan',
    description:
      'Learn how families use the Portugal Golden Visa fund route to relocate to Portugal, access international schools and healthcare, and build a medium-term EU citizenship strategy.',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#002741] bg-[#FFFCF3] py-3 px-4 rounded-md my-6 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

const articleLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://goldenvisashub.com/' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://goldenvisashub.com/guides' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Moving Your Family to Portugal with the Golden Visa',
          item: CANONICAL_URL,
        },
      ],
    },
    {
      '@type': 'Article',
      headline:
        'Moving Your Family to Portugal with the Golden Visa – Lifestyle, Education & 5-Year Citizenship Plan',
      description:
        'Family-focused guide on using CMVM-regulated Portugal Golden Visa funds to support a relocation to Portugal, including lifestyle, schooling, healthcare and citizenship planning.',
      author: { '@type': 'Organization', name: 'Explorer Investments' },
      publisher: {
        '@type': 'Organization',
        name: 'Golden Visas Hub',
        logo: {
          '@type': 'ImageObject',
          url: 'https://goldenvisashub.com/assets/images/logo.png',
        },
      },
      datePublished: PUBLISHED,
      dateModified: '2025-12-09T09:00:00+00:00',
      image: OG_IMAGE,
      mainEntityOfPage: CANONICAL_URL,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I move my whole family to Portugal with the Golden Visa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The Portugal Golden Visa allows the main investor to include a spouse and dependent children, providing residency rights for the whole family when the investment and legal criteria are met.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do my children need to attend school in Portugal under the Golden Visa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you relocate fully and become residents, school-age children are expected to attend school. Many families choose international or bilingual schools in Lisbon, Porto or the Algarve.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the Golden Visa enough to get Portuguese citizenship?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Golden Visa provides residency. After around five years of legal residency, a family may apply for citizenship, subject to language and legal requirements at that time.',
          },
        },
      ],
    },
  ],
};

export default function MovingFamilyToPortugalGoldenVisaLifestyleEducation() {
  return (
    <>
      <Script
        id="ld-moving-family-pt-gv-lifestyle-education"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Intro */}
          <header>
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <Globe size={16} /> Portugal Golden Visa • Family & Lifestyle
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Moving Your Family to Portugal with the Golden Visa: Lifestyle,
              Schools and a 5-Year Citizenship Plan
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              For many families, the Portugal Golden Visa is no longer just a
              “Plan B passport project”. It is a way to rebase their lives in a
              safe, sunny EU country with good schools, accessible healthcare
              and a clear path to citizenship – underpinned by a regulated
              investment fund rather than random property.
            </p>
            <p className="text-xs text-[#5A6F7B] mt-2">
              By Explorer Investments • Updated 9 December 2025
            </p>
          </header>

          {/* Hero image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image
              src={OG_IMAGE}
              alt="Family moving to Portugal with the Golden Visa"
              fill
              className="object-cover"
            />
          </figure>

          {/* Quick points */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="text-center border rounded-lg py-3 px-2 text-xs sm:text-sm">
              <p className="uppercase tracking-wide text-[#5A6F7B]">Route</p>
              <p className="text-xl font-bold">Golden Visa</p>
              <p className="text-[11px] text-[#5A6F7B] mt-1">Fund-based</p>
            </div>
            <div className="text-center border rounded-lg py-3 px-2 text-xs sm:text-sm">
              <p className="uppercase tracking-wide text-[#5A6F7B]">Timeline</p>
              <p className="text-xl font-bold">~5 yrs</p>
              <p className="text-[11px] text-[#5A6F7B] mt-1">To citizenship app.</p>
            </div>
            <div className="text-center border rounded-lg py-3 px-2 text-xs sm:text-sm">
              <p className="uppercase tracking-wide text-[#5A6F7B]">Focus</p>
              <p className="text-xl font-bold">Family</p>
              <p className="text-[11px] text-[#5A6F7B] mt-1">Schools & lifestyle</p>
            </div>
            <div className="text-center border rounded-lg py-3 px-2 text-xs sm:text-sm">
              <p className="uppercase tracking-wide text-[#5A6F7B]">Investment</p>
              <p className="text-xl font-bold">€500k</p>
              <p className="text-[11px] text-[#5A6F7B] mt-1">CMVM fund</p>
            </div>
          </div>

          <Quote>
            The most successful Golden Visa projects are not just about the
            passport. They are about designing a life that your children will
            thank you for – with schooling, healthcare and community built in
            from day one.
          </Quote>

          {/* TOC */}
          <section
            id="table-of-contents"
            className="border border-gray-200 rounded-xl p-5 bg-[#F8FAFC]"
          >
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <FileCheck2 size={18} /> Table of Contents
            </h2>
            <ol className="space-y-1 text-sm text-[#15364A] list-decimal list-inside">
              <li>
                <a href="#why-portugal" className="hover:text-[#B4A77E]">
                  1. Why Families Choose Portugal for a Second Home
                </a>
              </li>
              <li>
                <a href="#how-gv-works" className="hover:text-[#B4A77E]">
                  2. How the Golden Visa Works for Families
                </a>
              </li>
              <li>
                <a href="#schools" className="hover:text-[#B4A77E]">
                  3. Schools and Education Options in Portugal
                </a>
              </li>
              <li>
                <a href="#healthcare" className="hover:text-[#B4A77E]">
                  4. Healthcare, Safety and Everyday Life
                </a>
              </li>
              <li>
                <a href="#funds" className="hover:text-[#B4A77E]">
                  5. Using CMVM-Regulated Funds as the Backbone of the Plan
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-[#B4A77E]">
                  6. The 5-Year Citizenship Timeline for Families
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#B4A77E]">
                  7. FAQs: Moving Your Family to Portugal with the Golden Visa
                </a>
              </li>
            </ol>
          </section>

          {/* 1. Why Portugal */}
          <section id="why-portugal" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Sun size={22} /> 1. Why Families Choose Portugal for a Second Home
            </h2>
            <p className="text-[#15364A]">
              Portugal consistently scores highly on indices of{' '}
              <strong>quality of life, safety and cost of living</strong>. For
              families, the draw is usually:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>Mild climate and plenty of outdoor lifestyle</li>
              <li>Relatively affordable compared to many Western capitals</li>
              <li>Low crime rates and political stability</li>
              <li>Access to both local and international schooling</li>
            </ul>
          </section>

          {/* 2. How GV works */}
          <section id="how-gv-works" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShieldCheck size={22} /> 2. How the Golden Visa Works for Families
            </h2>
            <p className="text-[#15364A]">
              The Golden Visa is a <strong>residency by investment</strong> program. The
              most robust route today is the <strong>fund route</strong>, where a family:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>Invests at least €500,000 into a CMVM-regulated fund</li>
              <li>Includes spouse and dependent children in the application</li>
              <li>Maintains the investment and minimum presence over time</li>
              <li>
                After ~5 years of residency, may apply for citizenship (subject
                to rules and language test)
              </li>
            </ul>
            <p className="text-[#15364A] text-sm">
              For a deeper technical look at fund structures, see our article on{' '}
              <Link
                href="/private-equity-funds-portugal-golden-visa"
                className="text-[#B4A77E] underline"
              >
                private equity funds for the Portugal Golden Visa
              </Link>
              .
            </p>
          </section>

          {/* 3. Schools */}
          <section id="schools" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <School size={22} /> 3. Schools and Education Options in Portugal
            </h2>
            <p className="text-[#15364A]">
              One of the biggest drivers for Golden Visa families is schooling.
              In and around Lisbon, Porto and the Algarve you will find:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>International schools following IB, British or US curricula</li>
              <li>Bilingual Portuguese–English schools</li>
              <li>Public schools for families who want full integration</li>
            </ul>
            <p className="text-[#15364A]">
              Many families choose a hybrid strategy: start with international
              schools to ease the transition, then consider more local options
              as children pick up Portuguese.
            </p>
          </section>

          {/* 4. Healthcare & life */}
          <section id="healthcare" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShieldCheck size={22} /> 4. Healthcare, Safety and Everyday Life
            </h2>
            <p className="text-[#15364A]">
              Portugal offers both a public healthcare system and a wide range
              of private options. Many Golden Visa families:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>Maintain private health insurance for shorter wait times</li>
              <li>Access international-standard clinics in major cities</li>
              <li>
                Appreciate the sense of safety and community feel in Portuguese
                neighbourhoods
              </li>
            </ul>
          </section>

          {/* 5. Funds */}
          <section id="funds" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Globe size={22} /> 5. Using CMVM-Regulated Funds as the Backbone
              of the Plan
            </h2>
            <p className="text-[#15364A]">
              A Golden Visa family plan stands or falls on the quality of its{' '}
              <strong>underlying investment</strong>. CMVM-regulated funds help by
              offering:
            </p>
            <ul className="list-disc pl-5 text-[#15364A] space-y-1">
              <li>Professional management and independent audits</li>
              <li>Clear reporting to investors</li>
              <li>Alignment with EU financial regulation</li>
            </ul>
            <p className="text-[#15364A]">
              Explorer’s role is to make sure that the immigration logic (5-year
              timeline, renewals) and the investment logic (risk, returns,
              exits) are aligned rather than in conflict.
            </p>
          </section>

          {/* 6. Timeline */}
          <section id="timeline" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MapPin size={22} /> 6. The 5-Year Citizenship Timeline for Families
            </h2>
            <p className="text-[#15364A]">
              A typical path for a Golden Visa family:
            </p>
            <ol className="list-decimal pl-5 text-[#15364A] space-y-1">
              <li>Structure the investment and submit Golden Visa applications.</li>
              <li>Receive residence permits and start spending time in Portugal.</li>
              <li>Choose schools, settle housing and integrate gradually.</li>
              <li>
                Maintain investment and minimal presence across five-year
                residency period.
              </li>
              <li>
                After ~5 years, consider citizenship applications, including
                language tests and full legal review.
              </li>
            </ol>
          </section>

          {/* 7. FAQs */}
          <section id="faqs" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShieldCheck size={22} /> 7. FAQs: Moving Your Family to Portugal
              with the Golden Visa
            </h2>
            <div className="space-y-3 text-[#15364A] text-sm sm:text-base">
              <div>
                <h3 className="font-semibold">
                  Do we have to move immediately if we get a Golden Visa?
                </h3>
                <p>
                  No. The Golden Visa allows for a phased move. Some families
                  start with part-time stays and only later transition to full
                  residency.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Which cities are most popular for Golden Visa families?
                </h3>
                <p>
                  Lisbon, Cascais and the Algarve are common choices because of
                  international schools and expat communities. Porto is another
                  strong contender for families who prefer a slightly quieter,
                  more traditional environment.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Can we switch from Golden Visa to another residency route later?
                </h3>
                <p>
                  In many cases, yes – for example, if you later take up
                  employment or start a local business. Your legal team can
                  advise on transitions.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Globe size={22} /> 8. Designing a Family-Centred Golden Visa Plan
            </h2>
            <p className="text-[#15364A]">
              A family move is bigger than a Golden Visa. But the Golden Visa –
              when anchored in a CMVM-regulated fund – is often the most
              efficient legal and financial backbone for that move.
            </p>
            <p className="text-[#15364A]">
              Explorer can help you translate your goals around lifestyle,
              schooling and long-term citizenship into a concrete investment and
              residency structure that makes sense over the full five-year
              horizon.
            </p>

            <CtaSection />
          </section>
        </div>
      </section>

      <BlogPreviewGridFromXML currentSlug={SLUG} />
      <Footer />
    </>
  );
}
