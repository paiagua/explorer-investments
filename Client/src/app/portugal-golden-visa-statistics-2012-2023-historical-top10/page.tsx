import React from 'react';
import Script from 'next/script';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import Image from 'next/image';
import Link from 'next/link';
import { BarChart3, PieChart as PieIcon, Database, HelpCircle, Users, Table as TableIcon, BookOpen, ChevronRight } from 'lucide-react';
import { BarSimple, PieSimple } from '@/components/ChartsClient';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';

export const revalidate = 600;
export const fetchCache = 'force-cache';

// ===================================================================
// METADATA
// ===================================================================
const SLUG = 'portugal-golden-visa-statistics-2012-2023-historical-top10';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-stats.jpg';
const PUBLISHED = '2025-11-06T09:00:00+00:00';

export const metadata = {
  title: 'Portugal Golden Visa Statistics (2012-2023): Historical Trends & Top 10 Nationalities',
  description:
    'AIMA/SEF Golden Visa data: applicants per year (2012-2023), Top 10 nationalities (all-time), 2023 breakdown by nationality and investment route, plus backlog & citizenship FAQs.',
  keywords: [
    'Portugal Golden Visa statistics',
    'AIMA data Golden Visa',
    'SEF Golden Visa historical',
    'Portugal Golden Visa nationalities',
    'Portugal investment funds 500k',
    'Portugal residency by investment data',
  ],
  openGraph: {
    title: 'Portugal Golden Visa: Historical Data & Top 10 Nationalities (2012-2023)',
    description:
      'Official AIMA/SEF data visualized: yearly applicants, top nationalities, 2023 breakdown by route, and FAQs.',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portugal Golden Visa Statistics (2012-2023): Historical + Top 10',
    description:
      'AIMA/SEF data: yearly applicants, all-time top nationalities, 2023 nationality & route breakdown, and FAQs.',
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

// ===================================================================
// DATA (official figures where available)
// ===================================================================

// 2023: Nationalities
const nationalityData2023 = [
  { name: 'USA', value: 567 },
  { name: 'China', value: 306 },
  { name: 'United Kingdom', value: 234 },
  { name: 'Brazil', value: 219 },
  { name: 'India', value: 199 },
];

// 2023: Investment routes (applications)
const investmentData2023 = [
  { name: 'Real Estate (≥€500k)', value: 49 },
  { name: 'Renovation (€350-280k)', value: 50 },
  { name: 'Funds (CMVM)', value: 50 },
  { name: 'Capital Transfer', value: 7 },
];

// Historical main applicants per year (SEF/AIMA consolidated)
const historicalApplicants = [
  { year: '2012', applicants: 2 },
  { year: '2013', applicants: 494 },
  { year: '2014', applicants: 1526 },
  { year: '2015', applicants: 766 },
  { year: '2016', applicants: 1414 },
  { year: '2017', applicants: 1351 },
  { year: '2018', applicants: 1409 },
  { year: '2019', applicants: 1245 },
  { year: '2020', applicants: 1182 },
  { year: '2021', applicants: 865 },
  { year: '2022', applicants: 1281 },
  { year: '2023', applicants: 4455 },
];

// All-time Top 10 nationalities (main applicants)
const topNationalitiesAllTime = [
  { rank: 1, country: 'China', permits: 5407 },
  { rank: 2, country: 'Brazil', permits: 1256 },
  { rank: 3, country: 'USA', permits: 781 },
  { rank: 4, country: 'Turkey', permits: 613 },
  { rank: 5, country: 'South Africa', permits: 574 },
  { rank: 6, country: 'Russia', permits: 549 },
  { rank: 7, country: 'India', permits: 357 },
  { rank: 8, country: 'Lebanon', permits: 336 },
  { rank: 9, country: 'Pakistan', permits: 306 },
  { rank: 10, country: 'Vietnam', permits: 268 },
];

// 2023 split (main vs family)
const totals2023 = { total: 4455, main: 1554, family: 2901 };

// SEF cumulative investment 2012-2022 (rounded)
const cumulativeInvestment2012_2022 = '€6.56bn';

export default function PortugalGVStatsArticleUpdated() {
  // JSON-LD
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    description: metadata.description,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    mainEntityOfPage: CANONICAL_URL,
    image: [OG_IMAGE],
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
        name: 'What is the backlog of Portugal Golden Visa applications?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'AIMA has been rolling out digital systems to reduce pending files (2024-2025). Timelines improve as the new workflows stabilize.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to obtain Portuguese citizenship?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Traditionally about 5 years of legal residency. Amendments discussed in 2025 may affect some routes; confirm the rules in force before filing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the most popular investment option now?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'CMVM-regulated investment funds (minimum €500k) have become the primary route after the removal of the real estate option.',
        },
      },
    ],
  };

  const breadcrumbsLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://goldenvisashub.com/' },
      { '@type': 'ListItem', position: 2, name: 'Data & Insights', item: 'https://goldenvisashub.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Portugal Golden Visa Statistics (2012-2023)', item: CANONICAL_URL },
    ],
  };

  return (
    <>
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Script id="ld-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />

      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Title */}
          <header>
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <Database size={16} /> AIMA / SEF Official Statistics
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Portugal Golden Visa Statistics (2012-2023): Historical Trends & Top 10 Nationalities
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              Visualized Golden Visa data from AIMA/SEF — yearly applicant trends, all-time nationalities, and a 2023 snapshot by nationality and investment route.
              For investor guidance, see our{' '}
              <Link href="/portugal-golden-visa-fund-route-us-investors" className="underline">€500k fund-route guide</Link>.
            </p>
            <p className="text-xs text-[#5A6F7B] mt-2">By <Link className="underline" href="https://www.linkedin.com/in/andre-bandeira-cfa-7a7258b/?originalSubdomain=pt" target="_blank">André Bandeira, CFA</Link> • Updated: November 2025</p>

            {/* TOC */}
            <nav className="mt-5 rounded-xl border border-gray-200 bg-white shadow-sm p-4">
              <div className="text-[12px] uppercase text-[#5A6F7B] font-semibold mb-2 flex items-center gap-2">
                <BookOpen size={14} /> Contents
              </div>
              <ul className="text-sm grid sm:grid-cols-2 gap-y-2">
                <li><a className="flex items-center gap-1 hover:underline" href="#kpis"><ChevronRight size={14}/> KPIs Overview</a></li>
                <li><a className="flex items-center gap-1 hover:underline" href="#historical"><ChevronRight size={14}/> Applicants per Year (2012-2023)</a></li>
                <li><a className="flex items-center gap-1 hover:underline" href="#top10"><ChevronRight size={14}/> Top 10 Nationalities — All-Time</a></li>
                <li><a className="flex items-center gap-1 hover:underline" href="#nat2023"><ChevronRight size={14}/> 2023: Top Nationalities</a></li>
                <li><a className="flex items-center gap-1 hover:underline" href="#routes2023"><ChevronRight size={14}/> 2023: Investment Routes</a></li>
                <li><a className="flex items-center gap-1 hover:underline" href="#faq"><ChevronRight size={14}/> FAQ</a></li>
              </ul>
            </nav>
          </header>

          {/* Hero */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image src={OG_IMAGE} alt="Portugal Golden Visa statistics charts and AIMA/SEF data visualization" fill className="object-cover" />
          </figure>

          {/* KPI Summary */}
          <section id="kpis" aria-labelledby="kpi-title">
            <h2 id="kpi-title" className="sr-only">Key Metrics Summary</h2>
            <div className="grid sm:grid-cols-4 gap-4 text-center">
              <SummaryCard
                title="Applicants in 2023"
                value={totals2023.total.toLocaleString()}
                subtle={`Main ${totals2023.main.toLocaleString()} • Family ${totals2023.family.toLocaleString()}`}
              />
              <SummaryCard title="Main Investors (All-Time)" value="12,718" />
              <SummaryCard title="Family Members (All-Time)" value="20,424" />
              <SummaryCard title="Total Investment 2012-2022" value={cumulativeInvestment2012_2022} subtle="SEF cumulative" />
            </div>
            <p className="text-[12px] text-[#5A6F7B] mt-2">
              Sources: <a href="https://www.aima.gov.pt/" className="underline" target="_blank" rel="noopener">AIMA</a> & historical <a href="https://sefstat.sef.pt" className="underline" target="_blank" rel="noopener">SEF</a>.
            </p>
          </section>

          {/* Historical 2012-2023 */}
          <section id="historical" className="space-y-2" aria-labelledby="hist-title">
            <h2 id="hist-title" className="text-2xl font-bold flex items-center gap-2"><BarChart3 /> Applicants per Year (2012-2023)</h2>
            <p className="text-[#15364A] mt-2 text-sm">Source: AIMA/SEF. Official annual totals included.</p>
            <div className="h-72 mt-6" role="img" aria-label="Bar chart of Golden Visa main applicants per year from 2012 to 2023">
              <BarSimple data={historicalApplicants} xKey="year" yKey="applicants" height={288} />
            </div>
          </section>

          {/* All-time Top 10 nationalities */}
          <section id="top10" className="space-y-2" aria-labelledby="top10-title">
            <h2 id="top10-title" className="text-2xl font-bold flex items-center gap-2"><TableIcon /> Top 10 Nationalities — All-Time</h2>
            <p className="text-[#15364A] mt-2 text-sm">Main applicants granted since 2012.</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <caption className="sr-only">All-time top 10 nationalities of Golden Visa main applicants</caption>
                <thead className="bg-[#FFFCF3]">
                  <tr>
                    <th className="text-left p-3 border-b">#</th>
                    <th className="text-left p-3 border-b">Country</th>
                    <th className="text-left p-3 border-b">Permits (All-Time)</th>
                  </tr>
                </thead>
                <tbody>
                  {topNationalitiesAllTime.map((row) => (
                    <tr key={row.rank} className="odd:bg-white even:bg-gray-50">
                      <td className="p-3 border-b">{row.rank}</td>
                      <td className="p-3 border-b">{row.country}</td>
                      <td className="p-3 border-b">{row.permits.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 2023 Nationalities */}
          <section id="nat2023" className="space-y-2" aria-labelledby="nat-title">
            <h2 id="nat-title" className="text-2xl font-bold flex items-center gap-2"><Users /> Top Nationalities — 2023</h2>
            <div className="h-64 mt-6" role="img" aria-label="Bar chart of 2023 top nationalities for Golden Visa applicants">
              <BarSimple data={nationalityData2023} xKey="name" yKey="value" height={256} />
            </div>
          </section>

          {/* 2023 Investment Routes */}
          <section id="routes2023" className="space-y-2" aria-labelledby="routes-title">
            <h2 id="routes-title" className="text-2xl font-bold flex items-center gap-2"><PieIcon /> Investment Routes — 2023</h2>
            <div className="h-64 mt-6" role="img" aria-label="Pie chart of 2023 investment routes for Golden Visa applications">
              <PieSimple data={investmentData2023} />
            </div>
            <p className="text-sm text-[#15364A]">
              Considering the investment path? Review the{' '}
              <Link href="/portugal-golden-visa-fund-route-us-investors" className="underline">CMVM-regulated €500k fund route</Link>.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-6" aria-labelledby="faq-title">
            <h2 id="faq-title" className="text-2xl font-bold flex items-center gap-2"><HelpCircle /> Frequently Asked Questions</h2>
            <div>
              <h3 className="font-semibold">What is the backlog today?</h3>
              <p className="text-[#15364A]">AIMA is rolling out digital systems to reduce pending files (2024-2025).</p>
            </div>
            <div>
              <h3 className="font-semibold">How long to citizenship?</h3>
              <p className="text-[#15364A]">Traditionally 5 years. Amendments approved in 2025 may extend some routes to 10 years — always confirm the current rules before applying.</p>
            </div>
            <div>
              <h3 className="font-semibold">Most popular investment option?</h3>
              <p className="text-[#15364A]">CMVM-regulated funds, following the removal of the real estate route.</p>
            </div>
            <p className="text-[12px] text-[#5A6F7B]">
              Official portals: <a href="https://www.aima.gov.pt/" className="underline" target="_blank" rel="noopener">AIMA</a> •{' '}
              <a href="https://www.cmvm.pt/en/Pages/homepage.aspx" className="underline" target="_blank" rel="noopener">CMVM</a>
            </p>
          </section>

          {/* Conversion */}
          <CtaSection />
        </div>
      </section>

      <BlogPreviewGridFromXML currentSlug={SLUG} />
      <Footer />
    </>
  );
}

// Reusable summary card
function SummaryCard({ title, value, subtle }: { title: string; value: string | number; subtle?: string }) {
  return (
    <div className="rounded-xl p-4 bg-white shadow border border-gray-200">
      <p className="text-xl font-bold">{value}</p>
      <p className="text-[12px] uppercase">{title}</p>
      {subtle && <p className="text-[11px] text-[#5A6F7B] mt-1">{subtle}</p>}
    </div>
  );
}
