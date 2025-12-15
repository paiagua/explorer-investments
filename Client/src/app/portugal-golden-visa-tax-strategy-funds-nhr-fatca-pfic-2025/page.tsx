 
import Head from 'next/head';
import App from '@/app/portugal-golden-visa-tax-strategy-funds-nhr-fatca-pfic-2025/app';
import Script from 'next/script';

const SITE_URL = 'https://goldenvisashub.com';
const CANONICAL_URL = `${SITE_URL}/portugal-golden-visa-cmvm-funds-2025`;
const OG_IMAGE = `${SITE_URL}/assets/images/blog/portugal-gv-tax-strategy-og.jpg`;
const LOGO_URL = `${SITE_URL}/logo.png`;
const PUBLISHED = '2025-10-17T09:00:00+01:00'; 
const MODIFIED  = '2025-10-17T09:00:00+01:00';

 
const ORG_TWITTER = '@ExplorerInvest';
const ORG_NAME = 'Explorer Investments';
const ORG_SAME_AS = [
 
].filter(Boolean);
const AUTHOR_NAME = 'André Bandeira';
const AUTHOR_SAME_AS = [
 
].filter(Boolean);

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
  author: { '@type': 'Person', name: AUTHOR_NAME, sameAs: AUTHOR_SAME_AS },
  publisher: {
    '@type': 'Organization',
    name: ORG_NAME,
    logo: { '@type': 'ImageObject', url: LOGO_URL },
    sameAs: ORG_SAME_AS,
  },
  articleSection: ['Golden Visa', 'Portugal', 'Investment Funds', 'CMVM', 'Explorer Investments'],
  keywords: [
    'portugal golden visa cmvm funds 2025',
    'Portugal Golden Visa investment fund',
    'CMVM regulated funds Portugal',
    'Explorer Investments Golden Visa',
    'Portugal residency by investment',
    'FATCA PFIC compliant fund',
    'US investors Portugal Golden Visa',
  ],
  // Sinais de E-E-A-T (liga o conteúdo a entidades)
  about: [
    { '@type': 'Thing', name: 'Portugal Golden Visa' },
    { '@type': 'Organization', name: 'CMVM', sameAs: ['https://www.cmvm.pt/'] },
  ],
  mentions: [
    { '@type': 'Place', name: 'Portugal' },
    { '@type': 'FinancialProduct', name: 'Investment Fund' },
  ],
};

/** JSON-LD - WebSite + SearchAction (Sitelinks SearchBox) */
const schemaWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: SITE_URL,
  name: 'Golden Visa Explorer Investments',
  inLanguage: 'en',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

/** JSON-LD - Organization */
const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: ORG_NAME,
  url: SITE_URL,
  logo: LOGO_URL,
  sameAs: ORG_SAME_AS,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Investor Relations',
      email: 'ir@explorerinvestments.com', // TODO se aplicável
      availableLanguage: ['en', 'pt'],
    },
  ],
};

/** JSON-LD - WebPage (para a própria página/guia) */
const schemaWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: CANONICAL_URL,
  name: 'Portugal Golden Visa - CMVM-Regulated Funds vs Private Capital (2025 Guide)',
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  isPartOf: { '@type': 'WebSite', url: SITE_URL, name: 'Golden Visa Explorer Investments' },
  primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE },
  breadcrumb: { '@id': '#breadcrumbs' },
};

/** JSON-LD - Breadcrumbs */
const schemaBreadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': '#breadcrumbs',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Insights',
      item: `${SITE_URL}/about-explorer-investments`,
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
      authors: [`${SITE_URL}/about-explorer-investments`],
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
    site: ORG_TWITTER,
    title:
      'Portugal Golden Visa: CMVM-Regulated Funds (2025 Investor Guide)',
    description:
      'Process, compliance, FAQs and strategy - by André Bandeira (Explorer Investments).',
    images: [OG_IMAGE],
    creator: ORG_TWITTER, // se o autor tiver handle próprio, substitui
  },
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      'en': CANONICAL_URL,
      // 'pt-PT': `${SITE_URL}/pt/portugal-golden-visa-cmvm-funds-2025`, // opcional
      'x-default': CANONICAL_URL,
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
        <meta name="googlebot" content={metadata.robots} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0b132b" />
        <meta name="author" content={AUTHOR_NAME} />
        <meta name="publisher" content={ORG_NAME} />

        {/* Canonical & hreflang */}
        <link rel="canonical" href={metadata.alternates?.canonical || CANONICAL_URL} />
        <link rel="alternate" hrefLang="x-default" href={CANONICAL_URL} />
        <link rel="alternate" hrefLang="en" href={CANONICAL_URL} />
        {/* <link rel="alternate" hrefLang="pt-PT" href={`${SITE_URL}/pt/portugal-golden-visa-cmvm-funds-2025`} /> */}

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
        <meta property="og:image:alt" content="Portugal Golden Visa 2025 investor guide - CMVM funds vs private capital" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        {/* <meta property="og:locale:alternate" content="pt_PT" /> */}
        <meta property="article:published_time" content={metadata.openGraph.article.publishedTime} />
        <meta property="article:modified_time" content={metadata.openGraph.article.modifiedTime} />
        <meta property="article:section" content={metadata.openGraph.article.section} />
        {metadata.openGraph.article.tags.map((t: string) => (
          <meta key={t} property="article:tag" content={t} />
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="twitter:image:alt" content="Portugal Golden Visa 2025 investor guide - CMVM funds vs private capital" />

        {/* Preload OG image for faster social/first paint */}
<link rel="preload" as="image" href={OG_IMAGE} fetchPriority="high" />
        
        {/* Preconnect / DNS Prefetch */}
        <link rel="preconnect" href={SITE_URL} />
        <link rel="dns-prefetch" href={SITE_URL} />
        {/* Adiciona aqui outros domínios que usas para fontes/CDN/analytics */}

        {/* (Opcional) RSS para Discover/News se tiveres feed */}
        {/* <link rel="alternate" type="application/rss+xml" title="Explorer Investments Insights" href={`${SITE_URL}/feed.xml`} /> */}
      </Head>

      {/* JSON-LD: Article, WebPage, WebSite, Organization, Breadcrumbs, FAQs */}
      <Script id="ld-article" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <Script id="ld-webpage" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }} />
      <Script id="ld-website" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }} />
      <Script id="ld-organization" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <Script id="ld-breadcrumbs" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }} />
      <Script id="ld-faq" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* Page App */}
      <App />
    </>
  );
}
