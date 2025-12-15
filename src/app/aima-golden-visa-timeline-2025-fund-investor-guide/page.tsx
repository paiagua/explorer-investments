import Head from 'next/head';
// A importação do App aponta para o componente que contém o artigo
import App from '@/app/aima-golden-visa-timeline-2025-fund-investor-guide/app';
import Script from 'next/script';

// ===================================================================
// CONSTANTES GLOBAIS PARA ESTA PÁGINA
// ===================================================================
const CANONICAL_URL =
  'https://goldenvisashub.com/aima-golden-visa-timeline-2025-fund-investor-guide';
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/aima-golden-visa-timeline-2025-guide.jpg';
const PUBLISHED = '2025-10-20T09:30:00+01:00';
const MODIFIED = '2025-10-20T09:30:00+01:00';

// ===================================================================
// METADATA (Otimizado para SEO - AIMA TIMELINE)
// ===================================================================
export const metadata = {
  title:
    "AIMA Golden Visa Timeline 2025: A Fund Investor's Guide | Explorer Investments",
  description:
    "Worried about AIMA delays? Our 2025 step-by-step guide for fund investors demystifies the AIMA Golden Visa process, timelines, biometrics, and required documents.",
  keywords:
    'AIMA Golden Visa timeline 2025, AIMA approval times, Portugal Golden Visa process, AIMA fund investor guide, Golden Visa Portugal delays, AIMA biometrics, Golden Visa 5-year clock, Golden Visa fund subscription documents, Explorer Investments, CMVM funds',
  robots:
    'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title:
      "AIMA Golden Visa Timelines 2025: A Manager's Step-by-Step Guide for Fund Investors",
    description:
      "We demystify the AIMA Golden Visa process for fund investors, from the critical subscription documents to your final residency card.",
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    locale: 'en_US',
    site_name: 'Golden Visa Explorer Investments',
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      section: 'Golden Visa Guide',
      authors: [
        'https://goldenvisashub.com/about-explorer-investments', // Link para a página "About" ou perfil do André
      ],
      tags: [
        'AIMA',
        'Golden Visa',
        'Portugal',
        'Timeline',
        'Process',
        'Investment Funds',
        'Guide',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title: "AIMA Golden Visa Timeline 2025: A Fund Investor's Guide",
    description:
      "Worried about AIMA delays? We demystify the process for fund investors: timelines, biometrics, and the '5-year clock' explained.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      en: CANONICAL_URL,
    },
  },
};

// ===================================================================
// JSON-LD SCHEMAS (MUITO SEO)
// ===================================================================

/** JSON-LD - Article (ou BlogPosting) */
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: metadata.title,
  description: metadata.description,
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
      url: 'https://goldenvisashub.com/logo.png', // Ajuste o caminho do logo se necessário
    },
  },
  articleSection: metadata.openGraph.article.section,
  keywords: metadata.keywords,
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
      item: 'https://goldenvisashub.com/golden-visa-portugal-blog', // Assumindo o URL do blog
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: metadata.title,
      item: CANONICAL_URL,
    },
  ],
};

/** JSON-LD - FAQPage (CRÍTICO para este artigo) */
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long is the AIMA Golden Visa timeline for 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The AIMA timeline is variable and consists of two phases: 1) The 'Sprint' (1-2 weeks) where you get your NIF, bank account, and fund documents. 2) The 'Marathon' (several months to over a year) which is AIMA's processing time for pre-approval, biometrics, and final card issuance.",
      },
    },
    {
      '@type': 'Question',
      name: 'When does the 5-year clock for Portuguese citizenship start?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The 5-year countdown for citizenship does *not* start when you invest. It only starts from the exact date your first residency card is issued by AIMA after biometrics and final approval.",
      },
    },
    {
      '@type': 'Question',
      name: "What is the 'Golden Document' for a fund investor?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It is the official 'Declaração' (Declaration) issued by your Fund Manager (like Explorer Investments) and the Custodian Bank. This document proves to AIMA that your €500,000 investment has been successfully subscribed and is the key document for your application.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are AIMA delays a problem for my investment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Bureaucratic delays are frustrating but are less of a financial risk if you choose the right fund. A Private Equity (PE) fund has a patient, 8-10 year timeline, which aligns perfectly with a long AIMA process. A short-term (3-5 year) VC fund may create a timeline mismatch, forcing a risky reinvestment.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are the main steps in the AIMA Golden Visa process for fund investors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1. Get NIF & Bank Account. 2. Subscribe to a qualified fund (e.g., Explorer Fund V). 3. Receive the "Declaração". 4. Lawyer submits application to AIMA. 5. Wait for Pre-Approval. 6. Attend Biometrics in Portugal. 7. Receive Final Approval and Residency Card.',
      },
    },
  ],
};

// ===================================================================
// COMPONENTE DA PÁGINA
// ===================================================================
export default function AimaTimelineGuidePage() {
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