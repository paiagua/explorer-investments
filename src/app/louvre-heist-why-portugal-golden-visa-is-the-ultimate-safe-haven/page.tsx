import App from '@/app/louvre-heist-why-portugal-golden-visa-is-the-ultimate-safe-haven/app'; // O seu componente do artigo
import Script from 'next/script';

// ===================================================================
// CONSTANTES GLOBAIS
// ===================================================================
const CANONICAL_URL =
  'https://goldenvisashub.com/louvre-heist-why-portugal-golden-visa-is-the-ultimate-safe-haven';
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/louvre-heist-portugal-safe-haven.jpg';
const PUBLISHED = '2025-10-20T14:30:00+01:00'; // Publicado hoje, 20 de Out
const MODIFIED = '2025-10-20T14:30:00+01:00';

// ===================================================================
// METADATA (Otimizado para SEO)
// ===================================================================
export const metadata = {
  title:
    "Louvre Heist 2025: A Wake-Up Call. Why Portugal's Security is the Golden Visa's True Value.",
  description:
    "The 'priceless' Napoleon jewels heist at the Louvre highlights a core investor concern: security. We analyze why Portugal's safety (7th globally) makes its Golden Visa the ultimate 'Plan B'.",
  keywords:
    'Louvre heist 2025, Portugal security, Golden Visa safe haven, why Portugal Golden Visa, investor security, Paris vs Lisbon security, Global Peace Index Portugal, secure investment Portugal',
  robots:
    'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: "Louvre Jewels Stolen in 7 Minutes. Is Your 'Plan B' Truly Safe?",
    description:
      "The brazen Louvre heist is a wake-up call. We explain why Portugal's #1 asset for Golden Visa investors isn't just residency-it's security.",
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    locale: 'en_US',
    site_name: 'Golden Visa Explorer Investments',
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      section: 'Market Analysis',
      authors: [
        'https://goldenvisashub.com/about-explorer-investments',
      ],
      tags: [
        'Golden Visa',
        'Security',
        'Safe Haven',
        'Portugal',
        'Louvre',
        'Investment Strategy',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title:
      "Louvre Heist 2025: A Wake-Up Call. Why Portugal's Security is the Golden Visa's True Value.",
    description:
      "The brazen Louvre heist is a wake-up call. We explain why Portugal's #1 asset for Golden Visa investors isn't just residency-it's security.",
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
// JSON-LD SCHEMAS
// ===================================================================

/** JSON-LD - NewsArticle */
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
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
      url: 'https://goldenvisashub.com/logo.png',
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
      item: 'https://goldenvisashub.com/golden-visa-portugal-blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: metadata.title,
      item: CANONICAL_URL,
    },
  ],
};

/** JSON-LD - FAQPage (Focado no "Porquê Portugal?") */
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does the 2025 Louvre heist mean for investors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The brazen daylight robbery of "priceless" Napoleon-era jewels from the Louvre highlights a growing trend of insecurity in major European hubs. For high-net-worth investors, it serves as a wake-up call to prioritize personal and asset security in their "Plan B" strategies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is Portugal considered a safe haven for Golden Visa investors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Portugal is consistently ranked one of the safest countries in the world. In 2024, it was ranked the 7th most peaceful country globally by the Global Peace Index. This high level of safety and social stability stands in stark contrast to the rising crime seen in other major cities, making it a top choice for investors seeking peace of mind.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is a Golden Visa fund investment more secure than physical assets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Louvre heist proves physical assets, even in a vault, are vulnerable. A Portuguese Golden Visa investment in a fund like Explorer\'s is an intangible, financial asset. It is regulated by the CMVM (Portugal\'s SEC), held in a custodian bank, and managed by an institutional team. It cannot be physically stolen.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best Golden Visa investment for security?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best investment balances residency, returns, and security. A Private Equity (PE) fund from an established manager like Explorer Investments offers this. It provides a secure, regulated asset in a country ranked 7th globally for peace, offering a complete "safe haven" solution for both your family and your capital.',
      },
    },
  ],
};

// ===================================================================
// COMPONENTE DA PÁGINA
// ===================================================================
export default function LouvreHeistAnalysisPage() {
  return (
    <>
      {/* O Next.js App Router gere o <head> através do objeto 'metadata' */}

      {/* JSON-LD Schemas */}
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

      {/* O Componente do Artigo */}
      <App />
    </>
  );
}