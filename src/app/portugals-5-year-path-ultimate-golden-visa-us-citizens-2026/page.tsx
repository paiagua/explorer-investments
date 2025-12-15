import Head from 'next/head';
import App from '@/app/portugals-5-year-path-ultimate-golden-visa-us-citizens-2026/app';
import Script from 'next/script';

const CANONICAL_URL =
  'https://goldenvisashub.com/portugals-5-year-path-ultimate-golden-visa-us-citizens-2026';
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-vs-europe-us-citizens-2026.jpg'; // Imagem nova
const PUBLISHED = '2025-10-22T09:00:00+01:00'; // Data de hoje
const MODIFIED = '2025-10-22T09:00:00+01:00';

/** JSON-LD - Article */
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    "Portugal's 5-Year Path: The Ultimate Golden Visa for US Citizens in 2026?",
  description:
    "A 2026 analysis for US citizens comparing European Golden Visas. We break down why Portugal's 5-year citizenship path beats Spain, Greece, and Malta for savvy investors.",
  image: [OG_IMAGE],
  mainEntityOfPage: CANONICAL_URL,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: { '@type': 'Person', name: 'André Bandeira' },
  publisher: {
    '@type': 'Organization',
    name: 'Explorer Investments',
    logo: {
      '@type': 'ImageObject',
      url: 'https://goldenvisashub.com/logo.png',
    },
  },
  articleSection: [
    'Golden Visa',
    'Portugal',
    'US Investors',
    'Market Analysis',
    'EU Citizenship',
  ],
  keywords: [
    'Portugal Golden Visa for US citizens',
    'best European Golden Visa 2026',
    'Portugal 5-year citizenship path',
    'compare Golden Visas Portugal vs Spain',
    'US investor EU residency',
    'Explorer Investments Golden Visa',
    'Portugal investment fund visa',
    'FATCA PFIC Portugal Golden Visa',
  ],
};

/** JSON-LD - Breadcrumbs */
const schemaBreadcrumbs = {
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
      name: 'Insights',
      item: 'https://goldenvisashub.com/golden-visa-portugal-blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name:
        "Portugal's 5-Year Path: The Ultimate Golden Visa for US Citizens in 2026?",
      item: CANONICAL_URL,
    },
  ],
};

/** JSON-LD - FAQPage (US Investor Focus) */
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best Golden Visa in Europe for US citizens in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "Portugal's Golden Visa is widely considered the best for US citizens. Its primary advantage is the 5-year path to citizenship, one of the fastest in the EU, combined with minimal physical stay requirements and secure, regulated investment fund options.",
      },
    },
    {
      '@type': 'Question',
      name: "How does Portugal's Golden Visa compare to Spain's for US citizens?",
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "The biggest difference is the timeline to citizenship. Portugal requires 5 years of legal residency. Spain requires 10 years. For US investors seeking an EU passport as their 'Plan B', Portugal's 5-year timeline is significantly more attractive.",
      },
    },
    {
      '@type': 'Question',
      name: "Isn't Greece's €250,000 real estate option cheaper?",
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "While Greece's entry price is lower, it's primarily a *residency* program with a 7-year citizenship path that has stricter integration requirements. Portugal's 5-year rule is a clear *citizenship* strategy. Furthermore, Portugal's €500k fund route is an investment in an asset, not a real estate purchase which was phased out in 2023.",
      },
    },
    {
      '@type': 'Question',
      name: 'What about US tax compliance (FATCA/PFIC) with Portuguese funds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'This is a critical point for US Persons. You must ensure your chosen fund can provide the necessary tax documentation for PFIC (Passive Foreign Investment Company) reporting, such as a QEF election. Institutional managers like Explorer Investments are experienced with US investors and structured to provide this reporting, ensuring tax compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get EU citizenship faster with Malta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Malta offers direct citizenship in 12-36 months, but it is not an *investment*. It is a *donation* (sunk cost) of €600,000 to €750,000 plus other costs. Portugal\'s €500,000 is an investment in a fund (an asset) that aims for capital preservation and appreciation. For most US investors, Portugal offers a vastly superior financial proposition.',
      },
    },
  ],
};

export const metadata = {
  title:
    "Portugal's 5-Year Path: The Ultimate Golden Visa for US Citizens in 2026?",
  description:
    "A 2026 analysis for US citizens comparing European Golden Visas. We break down why Portugal's 5-year citizenship path beats Spain, Greece, and Malta for savvy investors.",
  keywords:
    'Portugal Golden Visa for US citizens, best European Golden Visa 2026, Portugal 5-year citizenship path, compare Golden Visas Portugal vs Spain, US investor EU residency, Explorer Investments, FATCA PFIC',
  robots:
    'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title:
      'Portugal, Spain, or Malta? Why Portugal\'s 5-Year Golden Visa Wins for US Investors in 2026.',
    description:
      "US Citizens: Don't just get residency. Get the fastest, most credible path to EU citizenship. We break down why Portugal's fund-based visa beats the competition.",
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    locale: 'en_US',
    site_name: 'Golden Visa Explorer Investments',
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      section: 'Market Analysis',
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'Golden Visa',
        'US Citizens',
        'Portugal',
        'Spain',
        'Malta',
        'Greece',
        'EU Citizenship',
        '2026',
        'Investment Funds',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title:
      "Portugal's 5-Year Golden Visa vs. The Rest: 2026 Guide for US Citizens",
    description:
      'A comparison of the best EU Golden Visas for Americans. Why Portugal\'s 5-year path to citizenship is the clear winner for savvy investors.',
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      en: CANONICAL_URL,
    },
  },
};

export default function PortugalVsEuropeUSCitizensPage() {
  return (
    <>
      <Head>
        {/* Primary */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <link
          rel="canonical"
          href={metadata.alternates?.canonical || CANONICAL_URL}
        />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
        <meta
          property="article:published_time"
          content={metadata.openGraph.article.publishedTime}
        />
        <meta
          property="article:modified_time"
          content={metadata.openGraph.article.modifiedTime}
        />
        <meta
          property="article:section"
          content={metadata.openGraph.article.section}
        />
        {metadata.openGraph.article.tags.map((t: string) => (
          <meta key={t} property="article:tag" content={t} />
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        {/* Preconnect hints */}
        <link rel="preconnect" href="https://goldenvisashub.com" />
        <link rel="dns-prefetch" href="https://goldenvisashub.com" />
      </Head>

      {/* JSON-LD: Article, Breadcrumbs, FAQs */}
      <Script
        id="ld-article"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <Script
        id="ld-breadcrumbs"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* Page App */}
      <App />
    </>
  );
}