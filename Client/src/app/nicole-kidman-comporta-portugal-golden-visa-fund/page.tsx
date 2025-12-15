import Head from 'next/head'
import Script from 'next/script'
import App from '@/app/nicole-kidman-comporta-portugal-golden-visa-fund/app'

const CANONICAL_URL =
  'https://goldenvisashub.com/nicole-kidman-comporta-portugal-golden-visa-fund'
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/nicole.jpg'
const PUBLISHED = '2025-10-15T09:00:00+01:00'
const MODIFIED = '2025-10-16T09:00:00+01:00'

/** ===== JSON-LD (teu bloco original adaptado) ===== */
const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is the minimum investment for Portugal's Golden Visa in 2025?",
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'As of 2025, a common route is a subscription of at least €500,000 into a CMVM-regulated fund that is eligible for the Golden Visa. Always confirm current rules before investing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can U.S. citizens apply and include family members?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. U.S. citizens can apply and typically include a spouse, dependent children, and in some cases dependent parents, subject to documentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is real estate still eligible for the Golden Visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Recent reforms curtailed most real estate options in key areas. Many new applicants now choose CMVM-regulated investment funds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days do I need to stay in Portugal each year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A low physical-presence requirement applies (often averaging around 7 days per year). Check your attorney’s guidance for your case.',
      },
    },
  ],
}

const jsonLdBreadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://goldenvisashub.com/' },
    { '@type': 'ListItem', position: 2, name: 'Golden Visa', item: 'https://goldenvisashub.com/golden-visa' },
    { '@type': 'ListItem', position: 3, name: 'Portugal Golden Visa 2025', item: CANONICAL_URL },
  ],
}

const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Nicole Kidman Considers Luxury Home in Comporta - What It Means for Portugal’s Golden Visa (2025 Guide)',
  description:
    'A comprehensive, SEO-optimized guide linking celebrity interest in Comporta to Portugal’s Golden Visa fund route, with steps, FAQs and compliance tips.',
  mainEntityOfPage: CANONICAL_URL,
  image: [OG_IMAGE],
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: { '@type': 'Person', name: 'Editorial Team' },
  publisher: {
    '@type': 'Organization',
    name: 'Explorer Investments',
    logo: {
      '@type': 'ImageObject',
      url: 'https://goldenvisashub.com/logo.png',
    },
  },
  articleSection: ['Golden Visa', 'Portugal', 'Investment Funds', 'Comporta'],
  keywords: [
    'Nicole Kidman Comporta',
    'Hamptons of Portugal',
    'Portugal Golden Visa fund',
    'CMVM regulated fund',
    'Explorer Investments',
    'Residency by investment 2025',
    'American investors Portugal',
  ],
}

/** ===== Meta tags (Open Graph / Twitter / canonical) ===== */
export const metadata = {
  title:
    'Nicole Kidman & Comporta: Portugal Golden Visa Fund Route (2025 Guide)',
  description:
    'Investor-focused guide linking the Comporta spotlight to Portugal’s Golden Visa fund route in 2025. Steps, FAQs, compliance checklist, and how CMVM-regulated funds work.',
  keywords:
    'Nicole Kidman Comporta, Hamptons of Portugal, Portugal Golden Visa fund, CMVM regulated funds, Explorer Investments, EU residency by investment, American investors Portugal, Comporta luxury property',
  robots:
    'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title:
      'Nicole Kidman & Comporta - Golden Visa Fund Route (2025)',
    description:
      'Comporta buzz meets investor clarity: understand Portugal’s Golden Visa fund route in 2025, from steps and eligibility to FAQs.',
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    locale: 'en_US',
    site_name: 'Golden Visa Explorer Investments',
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      section: 'Golden Visa',
      authors: ['https://goldenvisashub.com/about'],
      tags: [
        'Nicole Kidman',
        'Comporta',
        'Hamptons of Portugal',
        'Golden Visa',
        'CMVM Funds',
        'Explorer Investments',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title:
      'Comporta & the Golden Visa Fund Route - 2025 Investor Guide',
    description:
      'Actionable breakdown of Portugal’s Golden Visa fund path in 2025: eligibility, steps, risks, and FAQs.',
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: CANONICAL_URL,
    languages: { en: CANONICAL_URL },
  },
}

export default function NicoleKidmanComportaGVFundPage() {
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
        {metadata.openGraph.article.tags.map((t) => (
          <meta key={t} property="article:tag" content={t} />
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        {/* Perf */}
        <link rel="preconnect" href="https://goldenvisashub.com" />
        <link rel="dns-prefetch" href="https://goldenvisashub.com" />
      </Head>

      {/* JSON-LD (3 blocos) */}
      <Script
        id="ld-article"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <Script
        id="ld-breadcrumbs"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      <App />
    </>
  )
}
