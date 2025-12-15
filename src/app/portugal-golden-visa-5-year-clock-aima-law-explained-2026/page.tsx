import Head from 'next/head';
import App from '@/app/portugal-golden-visa-5-year-clock-aima-law-explained-2026/app';
import Script from 'next/script';

const CANONICAL_URL =
  'https://goldenvisashub.com/portugal-golden-visa-5-year-clock-aima-law-explained-2026';
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-5-year-clock-aima-law.jpg'; // Imagem nova
const PUBLISHED = '2025-10-23T09:00:00+01:00'; // Data de hoje
const MODIFIED = '2025-10-23T09:00:00+01:00';

/** JSON-LD - Article */
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    "The 5-Year Clock & AIMA Delays: How a New Law Changed Everything for Golden Visa Investors (2026)",
  description:
    "AIMA delays are the #1 fear for Golden Visa investors. But a critical law change (Art. 158-A) means the 5-year clock for citizenship may now start from your *application date*, not card approval. We explain.",
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
    'Golden Visa News',
    'Legal Update',
    'AIMA',
    'Citizenship',
  ],
  keywords: [
    'portugal golden visa 5 year clock',
    'when does 5 year citizenship clock start portugal',
    'AIMA delays golden visa',
    'portugal golden visa law change',
    'artigo 158-A lei de estrangeiros',
    'golden visa citizenship timeline',
    'Explorer Investments',
    'AIMA portugal golden visa 2026',
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
        "The 5-Year Clock & AIMA Delays: How a New Law Changed Everything (2026)",
      item: CANONICAL_URL,
    },
  ],
};

/** JSON-LD - FAQPage (AIMA & Clock Focus) */
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When does the 5-year clock for Portugal Golden Visa citizenship *really* start?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "This is the most critical question. Historically, it started from the date the first residency card was issued. However, a legal amendment (Article 158-A) now allows the time to be counted from the date the residency application is *submitted*.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do AIMA delays (1-2 years) mean I have to wait 6-7 years for citizenship?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No. This is the good news. Because the clock can now start from your *application date*, the AIMA processing delay is "absorbed" into your 5-year timeline. You are effectively "earning" your 5 years while you wait for AIMA approval.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Article 158-A (Artigo 158-A) of the Foreigners Law?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'It is a crucial legal provision that states the time elapsed since the submission of a residency application (which is paid) is considered for the purposes of calculating the total time for Portuguese citizenship, provided the application is ultimately approved.',
      },
    },
    {
      '@type': 'Question',
      name: 'So, what is the most important step for an investor now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The bottleneck is no longer just AIMA. The new bottleneck is *starting*. You must get your application submitted as fast as possible. This means choosing a fund manager, like Explorer Investments, who can provide all necessary subscription and CMVM declarations in 24-48 hours, not weeks.',
      },
    },
  ],
};

export const metadata = {
  title:
    "The 5-Year Clock & AIMA Delays: How a New Law Changed Everything for Golden Visa Investors (2026)",
  description:
    "AIMA delays are the #1 fear for Golden Visa investors. But a critical law change (Art. 158-A) means the 5-year clock for citizenship may now start from your *application date*, not card approval. We explain.",
  keywords:
    'portugal golden visa 5 year clock, when does citizenship clock start, AIMA delays golden visa, portugal golden visa law change, artigo 158-A, golden visa citizenship timeline, Explorer Investments, AIMA portugal',
  robots:
    'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title:
      'AIMA Delays (2-Yrs) vs. The 5-Year Clock: The Law That Changes Everything for Investors.',
    description:
      'Are AIMA delays "costing" you 2 years on your citizenship timeline? No. A critical law (Art. 158-A) means the 5-year clock starts on application. This is the most important update for 2026.',
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    locale: 'en_US',
    site_name: 'Golden Visa Explorer Investments',
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      section: 'Legal Update',
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'Golden Visa',
        'AIMA',
        'Citizenship',
        'Law Change',
        '5-Year Clock',
        'Portugal',
        'Investment Strategy',
        '2026',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title:
      "Worried AIMA Delays Will Cost You 2 Years? They Won't. (The 5-Year Clock Law Explained)",
    description:
      "The #1 investor fear is that AIMA's 2-year delay makes the citizenship path 7 years. This is wrong. We explain the law that starts your 5-year clock on day 1.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      en: CANONICAL_URL,
    },
  },
};

export default function GoldenVisaClockLawExplainedPage() {
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