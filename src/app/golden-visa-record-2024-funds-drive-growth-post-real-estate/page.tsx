import Head from 'next/head';
// A importação agora aponta para o componente da notícia do recorde
import App from '@/app/golden-visa-record-2024-funds-drive-growth-post-real-estate/app';
import Script from 'next/script';

// ===================================================================
// CONSTANTES ATUALIZADAS PARA A NOTÍCIA DO RECORDE GV 2024
// ===================================================================
const CANONICAL_URL =
  'https://goldenvisashub.com/golden-visa-record-2024-funds-drive-growth-post-real-estate'; // URL da Notícia
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/golden-visa-record-2024-funds-drive-growth-post-real-estate.jpg'; // Imagem da Notícia
const PUBLISHED = '2025-10-19T16:00:00+01:00'; // Data de Publicação da Notícia
const MODIFIED  = '2025-10-19T16:00:00+01:00'; // Data de Modificação da Notícia

// ===================================================================
// JSON-LD - NewsArticle (Atualizado para a Notícia do Recorde)
// ===================================================================
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle', // Alterado para NewsArticle
  headline:
    'Historic Record in 2024: Golden Visas Soar Driven by Investment Funds Post-Real Estate, Expresso Reports',
  description:
    'Expresso newspaper confirms Portugal\'s Golden Visa hit a record €1.2B+ investment in 2024, overwhelmingly (>90%) via CMVM-regulated funds, validating the institutional shift led by firms like Explorer Investments.',
  image: [OG_IMAGE],
  mainEntityOfPage: CANONICAL_URL,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: {
    '@type': 'Organization', // Notícias publicadas pela organização
    name: 'Explorer Investments',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Explorer Investments',
    logo: {
      '@type': 'ImageObject',
      url: 'https://goldenvisashub.com/assets/images/explorer-logo.png',
    },
  },
  articleSection: [ // Secções relevantes
    'News',
    'Golden Visa',
    'Portugal',
    'Investment Funds',
    'Market Trends',
    'Explorer Investments',
  ],
  keywords: [ // Keywords relevantes
    'Golden Visa record 2024',
    'Expresso Vistos Gold',
    'Investment funds Golden Visa Portugal',
    'CMVM funds ARI',
    'Portugal Golden Visa without real estate',
    'Explorer Investments Golden Visa funds',
    'Private Equity Portugal Golden Visa',
    '€1.2 billion Golden Visa',
    'Golden Visa statistics 2024',
  ],
};

// ===================================================================
// JSON-LD - Breadcrumbs (Atualizado para a Notícia do Recorde)
// ===================================================================
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
      name: 'News', // Assumindo que a notícia fica numa secção 'News' ou 'Insights'
      item: 'https://goldenvisashub.com/news', // Ajustar URL da secção
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Golden Visa Hits Record Investment in 2024 Driven by Funds', // Título curto para breadcrumb
      item: CANONICAL_URL,
    },
  ],
};

// ===================================================================
// JSON-LD - FAQPage REMOVIDO (Não aplicável a NewsArticle)
// ===================================================================
// const schemaFAQ = { ... }; // Removido

// ===================================================================
// METADATA Object (Atualizado para a Notícia do Recorde)
// ===================================================================
export const metadata = {
  title:
    'Golden Visa Record 2024: Funds Drive Growth Post-Real Estate | Explorer Investments', // Título otimizado
  description:
    'Expresso reports Portugal\'s Golden Visa hit a historic €1.2B+ in 2024, with >90% via funds. Learn how Explorer Investments leads this institutional shift.', // Descrição otimizada
  keywords: // Keywords relevantes
    'Golden Visa record 2024, Expresso Vistos Gold, Investment funds Golden Visa Portugal, CMVM funds ARI, Portugal Golden Visa without real estate, Explorer Investments Golden Visa funds, Private Equity Portugal Golden Visa, €1.2 billion Golden Visa',
  robots:
    'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title:
      'Historic Record in 2024: Golden Visas Soar Driven by Investment Funds Post-Real Estate, Expresso Reports', // Título completo para OG
    description:
      'Expresso confirms Portugal\'s Golden Visa hit a record €1.2B+ investment in 2024, overwhelmingly (>90%) via CMVM-regulated funds like those from Explorer Investments.',
    url: CANONICAL_URL,
    type: 'article', // Tipo correto para notícia
    images: [OG_IMAGE],
    locale: 'en_US', // Ajustar se necessário
    site_name: 'Explorer Investments Golden Visa',
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      section: 'News', // Secção
      // authors: ['...'] // Opcional
      tags: [ // Tags relevantes
        'Golden Visa',
        'Portugal',
        'Investment Funds',
        'Market Trends',
        'CMVM',
        'Explorer Investments',
        'News',
        '2024 Record',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest', // Manter
    title:
      'Golden Visa Record 2024: Funds Dominate Post-Real Estate (Expresso News)', // Título para Twitter
    description:
      'Expresso: Portugal\'s Golden Visa hits record €1.2B+ in 2024, driven by CMVM funds like those from Explorer Investments.', // Descrição para Twitter
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      en: CANONICAL_URL, // Assumindo inglês
    },
  },
};

// ===================================================================
// NOME DA FUNÇÃO MANTIDO CONFORME PEDIDO, mas agora carrega a notícia
// ===================================================================
export default function GoldenVisaFundProcessGuidePage() { // Nome original mantido
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

        {/* Preconnect hints (manter) */}
        <link rel="preconnect" href="https://goldenvisashub.com" />
        <link rel="dns-prefetch" href="https://goldenvisashub.com" />
      </Head>

      {/* JSON-LD: NewsArticle e Breadcrumbs (FAQ removido) */}
      <Script
        id="ld-news-record" // ID único
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <Script
        id="ld-breadcrumbs-record" // ID único
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
 
      <App />
    </>
  );
}