import Head from 'next/head';
import App from '@/app/portugal-golden-visa-tax-strategy-funds-nhr-fatca-pfic-2025/app';
import Script from 'next/script';

const CANONICAL_URL =
  'https://goldenvisashub.com/portugal-golden-visa-cmvm-funds-2025';
const OG_IMAGE =
  'https://goldenvisashub.com/og/andre-guide-2025.png';
const PUBLISHED = '2025-10-17T09:00:00+01:00';
const MODIFIED  = '2025-10-17T09:00:00+01:00';

/** JSON-LD - Article */
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Portugal Golden Visa: CMVM-Regulated Funds vs Private Capital (2025 Guide)',
  description:
    'Investor guide by André Bandeira (Explorer Investments) comparing CMVM-regulated funds to open-ended options for Portugal’s Golden Visa in 2025 - compliance, process, FAQs.',
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
    'Investment Funds',
    'CMVM',
    'Explorer Investments',
  ],
  keywords: [
    'portugal golden visa cmvm funds 2025',
    'Portugal Golden Visa investment fund',
    'CMVM regulated funds Portugal',
    'Explorer Investments Golden Visa',
    'Portugal residency by investment',
    'FATCA PFIC compliant fund',
    'US investors Portugal Golden Visa',
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
      item: 'https://goldenvisashub.com/about-explorer-investments',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Portugal Golden Visa - CMVM Funds (2025 Guide)',
      item: CANONICAL_URL,
    },
  ],
};

/** JSON-LD - FAQPage (fund route focus) */
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the minimum investment for the fund route?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          '€500,000 into a CMVM-regulated investment fund that satisfies Portugal’s ARI (Golden Visa) eligibility rules.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do CMVM-regulated funds still qualify after the 2023 reforms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. While traditional real estate routes were curtailed, the qualified fund option remains prevalent when structured in line with ARI rules.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long must I keep the investment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Typically at least five years. Check the fund’s term, lock-ups, redemption windows and exit mechanics in the official documents.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days do I need to stay in Portugal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Commonly around seven days per year to maintain residency. Confirm specifics with your immigration counsel at the time of application.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can US citizens invest and qualify for the Portugal Golden Visa through funds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. Many funds accept US Persons and provide FATCA/PFIC reporting. Verify with Investor Relations and your tax advisor.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the main risks and fees with funds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Illiquidity during lock-ups and performance variability. Fees may include management, performance (carry), custody, audit and admin. Review the prospectus/PPM and KID/KIID.',
      },
    },
  ],
};

export const metadata = {
  title:
    'Portugal Golden Visa - CMVM-Regulated Funds vs Private Capital (2025 Guide)',
  description:
    'Why disciplined investors choose CMVM-regulated funds for Portugal’s Golden Visa in 2025. Process, compliance, risk/return, FAQs - by André Bandeira, Explorer Investments.',
  keywords:
    'portugal golden visa cmvm funds 2025, Portugal Golden Visa investment fund, CMVM regulated funds Portugal, Explorer Investments, best Golden Visa funds Portugal, EU residency by investment, US investors Portugal, FATCA PFIC compliant',
  robots:
    'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title:
      'Portugal Golden Visa - CMVM Funds vs Private Capital (2025 Guide)',
    description:
      'Deep-dive investor guide by André Bandeira on the CMVM-regulated fund route to Portugal’s Golden Visa.',
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    locale: 'en_US',
    site_name: 'Golden Visa Explorer Investments',
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      section: 'Golden Visa',
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'Golden Visa',
        'Portugal',
        'CMVM Funds',
        'Explorer Investments',
        'Investment Funds',
        'Residency by Investment',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title:
      'Portugal Golden Visa: CMVM-Regulated Funds (2025 Investor Guide)',
    description:
      'Process, compliance, FAQs and strategy - by André Bandeira (Explorer Investments).',
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      en: CANONICAL_URL,
    },
  },
};

export default function PortugalGoldenVisaCMVMFunds2025Page() {
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
