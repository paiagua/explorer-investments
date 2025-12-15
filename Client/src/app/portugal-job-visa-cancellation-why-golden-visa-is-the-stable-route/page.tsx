import Head from 'next/head';
import App from '@/app/portugal-job-visa-cancellation-why-golden-visa-is-the-stable-route/app';
import Script from 'next/script';

const CANONICAL_URL =
  'https://goldenvisashub.com/portugal-job-visa-cancellation-why-golden-visa-is-the-stable-route';
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/portugal-job-visa-vs-golden-visa-stability.jpg'; // Imagem nova
const PUBLISHED = '2025-10-22T20:30:00+01:00'; // Data de hoje
const MODIFIED = '2025-10-22T20:30:00+01:00';

/** JSON-LD - Article */
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Portugal Cancels Job Seeker Visas. Why Golden Visa Investors Are Secure.',
  description:
    "Portugal just canceled its job seeker visa overnight, creating chaos. We analyze why this volatility proves the Golden Visa's €500k fund route is the secure, legislated path to EU citizenship.",
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
    'Market Analysis',
    'Portugal Immigration',
    'Investment Strategy',
  ],
  keywords: [
    'portugal job seeker visa canceled',
    'Portugal immigration law change 2025',
    'Golden Visa stability',
    'why Portugal Golden Visa',
    'ARI vs job visa',
    'investment residency stability',
    'Explorer Investments',
    'visto para procura de trabalho',
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
        'Portugal Cancels Job Seeker Visas. Why Golden Visa Investors Are Secure.',
      item: CANONICAL_URL,
    },
  ],
};

/** JSON-LD - FAQPage (Stability Focus) */
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Did Portugal cancel the Golden Visa in October 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No. The Golden Visa (ARI) program was *not* canceled and is not affected. The Portuguese government canceled the "job seeker visa" (visto para procura de trabalho), a completely separate program related to labor immigration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why did Portugal cancel the job seeker visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The government announced it is replacing the general job seeker visa with a new "qualified job seeker visa" to better align with the country\'s labor market needs. This highlights how standard immigration policies can change quickly based on political or economic shifts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is the Golden Visa more stable than other Portuguese visas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The Golden Visa is an *investment residency program* (ARI), not a *labor policy*. Its rules are set by law (Lei de Estrangeiros) and are based on a significant, long-term capital investment (€500,000). This provides a secure, legislated path for investors that is insulated from the exact kind of abrupt volatility affecting labor-based visas.',
      },
    },
  ],
};

export const metadata = {
  title:
    'Portugal Cancels Job Seeker Visas. Why Golden Visa Remains the Most Stable Path.',
  description:
    "Portugal just canceled its job seeker visa overnight. We analyze why this volatility proves the Golden Visa's €500k fund route is the secure, legislated path to EU citizenship.",
  keywords:
    'portugal job seeker visa canceled, Portugal immigration law change, Golden Visa stability, why Portugal Golden Visa, ARI vs job visa, investment residency stability, Explorer Investments',
  robots:
    'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title:
      'Portugal Axed Its Job Seeker Visa Overnight. Here’s Why Golden Visa Investors Aren’t Worried.',
    description:
      "A sudden policy change just threw Portugal's labor visas into chaos. This is precisely why the Golden Visa's legislated stability is its most valuable asset.",
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    locale: 'en_US',
    site_name: 'Golden Visa Explorer Investments',
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      section: 'Golden Visa News',
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'Golden Visa',
        'Portugal',
        'Immigration Law',
        'Job Seeker Visa',
        'Investment Strategy',
        'Stability',
        '2025',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title:
      'Portugal Job Visa Canceled Overnight. Golden Visa Stability Proven.',
    description:
      'News of Portugal canceling its job seeker visa highlights the value of a stable, legislated "Plan B". We explain why Golden Visa investors are unaffected and secure.',
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      en: CANONICAL_URL,
    },
  },
};

export default function JobVisaCancellationGVSecurityPage() {
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