import Head from 'next/head';
// A importação do componente App está correta para o novo artigo
import App from '@/app/golden-visa-fund-application-process-portugal-2025/app';
import Script from 'next/script';

// ===================================================================
// NOVAS CONSTANTES PARA O ARTIGO "PROCESS GUIDE"
// ===================================================================
const CANONICAL_URL =
  'https://goldenvisashub.com/golden-visa-fund-application-process-portugal-2025'; // Nova URL
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/golden-visa-fund-application-process-portugal-2025.jpg'; // Nova Imagem
const PUBLISHED = '2025-10-18T10:00:00+01:00'; // Nova Data
const MODIFIED  = '2025-10-18T10:00:00+01:00'; // Nova Data

// ===================================================================
// JSON-LD - Article (Atualizado para o "Process Guide")
// ===================================================================
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Demystifying the Golden Visa Fund Application (2025): A Detailed Step-by-Step Guide with Explorer Investments',
  description:
    'A comprehensive guide to navigating the Portugal Golden Visa application process via investment funds. Covers documentation, AIMA submission, timelines, lawyer coordination, pitfalls, and Explorer Investments\' support.',
  image: [OG_IMAGE],
  mainEntityOfPage: CANONICAL_URL,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: { // Pode ser Org ou Person
    '@type': 'Organization',
    name: 'Explorer Investments Investor Relations',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Explorer Investments',
    logo: {
      '@type': 'ImageObject',
      url: 'https://goldenvisashub.com/logo.png', // Manter logo da Explorer
    },
  },
  articleSection: [ // Secções relevantes para o artigo
    'Golden Visa Process',
    'Portugal',
    'Investment Funds',
    'AIMA',
    'CMVM',
    'Explorer Investments',
  ],
  keywords: [ // Novas Keywords
    'Processo Golden Visa Fundos',
    'Golden Visa Portugal step-by-step',
    'Documentos ARI Portugal',
    'AIMA Golden Visa application',
    'Submissão AIMA 2025',
    'Advogado Golden Visa Portugal',
    'Prazos Visto Gold',
    'Golden Visa fund checklist',
    'Explorer Investments Golden Visa process',
    'CMVM fund application',
    'Biometria AIMA',
  ],
};

// ===================================================================
// JSON-LD - Breadcrumbs (Atualizado para o "Process Guide")
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
      name: 'Insights', // Ou 'Blog' se for o nome da secção
      item: 'https://goldenvisashub.com/golden-visa-portugal-blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name:
        'Demystifying the Golden Visa Fund Application (2025): A Detailed Step-by-Step Guide', // Nome do novo artigo
      item: CANONICAL_URL, // URL do novo artigo
    },
  ],
};

// ===================================================================
// JSON-LD - FAQPage (Atualizado para o "Process Guide")
// ===================================================================
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
      {
        "@type": "Question",
        "name": "What are the main steps for the Golden Visa fund application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Key steps include: 1) Initial setup (NIF, bank account), 2) Fund selection & investment (€500k minimum), 3) Obtaining proof of investment, 4) Online AIMA application submission by a lawyer, 5) Biometrics appointment in Portugal, 6) Receiving the residency card."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are needed for the Golden Visa fund application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Essential documents include passport, proof of legal entry, criminal records, NIF, Portuguese bank account details, proof of fund subscription (declarations from bank & manager), health insurance, and completed AIMA forms. Documents often require apostilles/translations."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the Golden Visa application process take in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Timelines vary significantly due to AIMA processing loads. From investment to receiving the first card, expect anywhere from 12 to 24 months, potentially longer. It's crucial to start early and have realistic expectations."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a lawyer for the Golden Visa application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, engaging an experienced Portuguese immigration lawyer is highly recommended and practically essential. They handle the AIMA submission, document verification, scheduling, and communication with authorities."
        }
      },
       {
        "@type": "Question",
        "name": "How does Explorer Investments help with the Golden Visa process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Explorer Investments provides the compliant investment vehicle, issues the necessary fund declarations, works with trusted custodian banks, and can connect investors with experienced legal partners to ensure a coordinated and smoother application experience."
        }
      }
    ]
};

// ===================================================================
// METADATA Object (Atualizado para o "Process Guide")
// ===================================================================
export const metadata = {
  title:
    'Golden Visa Fund Application Process (2025): Step-by-Step Guide | Explorer Investments',
  description:
    'Demystifying the Portugal Golden Visa fund application for 2025. Detailed steps, document checklist, realistic timelines, lawyer roles, and how Explorer Investments assists.',
  keywords: // Novas Keywords
    'Processo Golden Visa Fundos, Golden Visa Portugal step-by-step, Documentos ARI Portugal, AIMA Golden Visa application, Submissão AIMA 2025, Advogado Golden Visa Portugal, Prazos Visto Gold, Golden Visa fund checklist, Explorer Investments Golden Visa process',
  robots:
    'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title:
      'Golden Visa Fund Application Process (2025): Step-by-Step Guide | Explorer Investments',
    description:
      'Your complete guide to the Golden Visa fund process in Portugal. Understand documents, AIMA submission, biometrics, timelines, and avoid common pitfalls with Explorer Investments.',
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    locale: 'en_US', // Manter ou alterar se o artigo for noutra língua
    site_name: 'Explorer Investments Golden Visa', // Nome do site
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      section: 'Golden Visa Process', // Secção mais específica
      authors: ['https://goldenvisashub.com/about-explorer-investments'], // Pode manter a org
      tags: [ // Tags relevantes para o processo
        'Golden Visa',
        'Portugal',
        'Application Process',
        'AIMA',
        'CMVM Funds',
        'Explorer Investments',
        'Documentation',
        'Timelines',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest', // Manter se aplicável
    title:
      'Guide: Portugal Golden Visa Fund Application Process (2025)', // Título mais curto para Twitter
    description:
      'Navigate the Portugal Golden Visa fund application with confidence. Docs, AIMA process, timelines & expert insights from Explorer Investments.',
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      en: CANONICAL_URL, // Assumindo inglês como língua principal
    },
  },
};

// ===================================================================
// NOME DA FUNÇÃO ATUALIZADO
// ===================================================================
export default function GoldenVisaFundProcessGuidePage() {
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

      {/* JSON-LD: Article, Breadcrumbs, FAQs */}
      <Script
        id="ld-article-process" // Novo ID
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <Script
        id="ld-breadcrumbs-process" // Novo ID
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <Script
        id="ld-faq-process" // Novo ID
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* Page App (importado corretamente no topo) */}
      <App />
    </>
  );
}