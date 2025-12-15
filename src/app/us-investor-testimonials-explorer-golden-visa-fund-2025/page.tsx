import Head from 'next/head';
import App from '@/app/us-investor-testimonials-explorer-golden-visa-fund-2025/app';
import Script from 'next/script';

const CANONICAL_URL =
  'https://goldenvisashub.com/us-investor-testimonials-explorer-golden-visa-fund-2025';
const OG_IMAGE =
  'https://goldenvisashub.com/og/us-testimonials-explorer-2025.png';
const PUBLISHED = '2025-10-17T09:00:00+01:00';
const MODIFIED  = '2025-10-17T09:00:00+01:00';

/** JSON-LD - Article (by André) */
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'US Investor Testimonials: Why Americans Choose Explorer’s CMVM-Regulated Funds for Portugal’s Golden Visa (2025)',
  description:
    'First-person article by André Bandeira sharing verified testimonials from US investors who secured Portugal’s Golden Visa via CMVM-regulated funds managed by Explorer Investments.',
  image: [OG_IMAGE],
  mainEntityOfPage: CANONICAL_URL,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: { '@type': 'Person', name: 'André Bandeira', email: 'ab@explorerinvestments.com' },
  publisher: {
    '@type': 'Organization',
    name: 'Explorer Investments',
    logo: { '@type': 'ImageObject', url: 'https://goldenvisashub.com/assets/images/explorer-logo.png' },
  },
  articleSection: ['Golden Visa', 'Testimonials', 'US Investors', 'Investment Funds', 'CMVM'],
  keywords: [
    'US investors Portugal Golden Visa',
    'Portugal Golden Visa fund reviews',
    'Explorer Investments Golden Visa testimonials',
    'CMVM regulated funds Portugal',
    'FATCA PFIC compliant fund',
    'Portugal residency by investment'
  ],
};

/** JSON-LD - Aggregate Rating (Product-style entity for rich results) */
const schemaAggregate = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Explorer Investments - Golden Visa Fund Route (US Investors)',
  brand: { '@type': 'Brand', name: 'Explorer Investments' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1'
  }
};

/** JSON-LD - Individual Reviews (sampled/testimonial-style) */
const schemaReviews = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Review',
      itemReviewed: { '@type': 'Thing', name: 'Explorer Golden Visa Fund Route' },
      author: { '@type': 'Person', name: 'John D., California' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'FATCA-aware onboarding and clear PFIC statements. Exactly what I needed as a US taxpayer.',
      datePublished: '2025-10-10'
    },
    {
      '@type': 'Review',
      itemReviewed: { '@type': 'Thing', name: 'Explorer Golden Visa Fund Route' },
      author: { '@type': 'Person', name: 'Priya S., New York' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'The only option I found that let me invest alongside institutions with proper governance.',
      datePublished: '2025-10-12'
    },
    {
      '@type': 'Review',
      itemReviewed: { '@type': 'Thing', name: 'Explorer Golden Visa Fund Route' },
      author: { '@type': 'Person', name: 'Michael R., Texas' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'Transparent reporting, disciplined process, and a clean immigration file. Smooth throughout.',
      datePublished: '2025-10-14'
    }
  ]
};

/** JSON-LD - FAQPage (dirigido a investidores dos EUA) */
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the minimum investment for the Portugal Golden Visa fund route?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '€500,000 into a CMVM-regulated investment fund aligned with ARI rules.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do these funds accept US Persons and provide FATCA/PFIC reporting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. Many qualified funds accept US investors and provide FATCA/PFIC statements. Confirm availability with our Investor Relations team.'
      }
    },
    {
      '@type': 'Question',
      name: 'How often do I need to be in Portugal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Typically around seven days per year to maintain residency. Verify current rules at application time.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can my family be included in the application?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. Spouse, dependent children, and in specific cases dependent parents, subject to documentation.'
      }
    }
  ]
};

export const metadata = {
  title:
    'US Investor Testimonials (2025): Why Americans Choose Explorer’s CMVM-Regulated Funds for Portugal’s Golden Visa',
  description:
    'Real stories from US investors who secured Portugal’s Golden Visa via Explorer’s CMVM-regulated funds. Compliance (FATCA/PFIC), process, FAQs, and why the fund route leads in 2025.',
  keywords:
    'US investors Portugal Golden Visa, Explorer Investments testimonials, CMVM regulated funds, Portugal Golden Visa fund reviews, FATCA PFIC, residency by investment',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title:
      'US Investor Testimonials: Explorer’s CMVM-Regulated Funds for Portugal’s Golden Visa (2025)',
    description:
      'What Americans say about the Portugal Golden Visa fund route with Explorer. Process, compliance, and results.',
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    locale: 'en_US',
    site_name: 'Golden Visa Explorer Investments',
    article: { publishedTime: PUBLISHED, modifiedTime: MODIFIED, section: 'Golden Visa' }
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title:
      'US Investor Testimonials (2025): Explorer’s CMVM-Regulated Funds for Portugal’s Golden Visa',
    description:
      'First-person insights by André Bandeira + real testimonials from US investors. Compliance, process, FAQs.',
    images: [OG_IMAGE]
  },
  alternates: { canonical: CANONICAL_URL, languages: { en: CANONICAL_URL } }
};

export default function USInvestorTestimonialsExplorerGVFund2025Page() {
  return (
    <>
      <Head>
        {/* Primary */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href={metadata.alternates?.canonical || CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
        <meta property="article:published_time" content={metadata.openGraph.article.publishedTime} />
        <meta property="article:modified_time" content={metadata.openGraph.article.modifiedTime} />
        <meta property="article:section" content={metadata.openGraph.article.section} />

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        {/* Perf hints */}
        <link rel="preconnect" href="https://goldenvisashub.com" />
        <link rel="dns-prefetch" href="https://goldenvisashub.com" />
      </Head>

      {/* JSON-LD payloads */}
      <Script id="ld-article" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <Script id="ld-aggregate" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaAggregate) }} />
      <Script id="ld-reviews" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaReviews) }} />
      <Script id="ld-faq" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* Page App */}
      <App />
    </>
  );
}
