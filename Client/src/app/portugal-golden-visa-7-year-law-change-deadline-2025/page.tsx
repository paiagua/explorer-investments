import Head from 'next/head'; // NOTA: Removido do 'return' mas mantido se o seu 'App' precisar
import App from '@/app/portugal-golden-visa-7-year-law-change-deadline-2025/app'; // Assumindo que o seu componente do artigo se chama 'app.js'
import Script from 'next/script';

// ===================================================================
// CONSTANTES GLOBAIS PARA ESTA PÁGINA (ARTIGO URGENTE)
// ===================================================================
const CANONICAL_URL =
  'https://goldenvisashub.com/portugal-golden-visa-7-year-law-change-deadline-2025';
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/golden-visa-7-year-law-change-deadline.jpg';
// Data de hoje (Notícia de última hora) - Assumindo fuso horário de Lisboa (WEST = +01:00)
const PUBLISHED = '2025-10-20T12:00:00+01:00';
const MODIFIED = '2025-10-20T12:00:00+01:00';

// ===================================================================
// METADATA (Otimizado para SEO - ARTIGO URGENTE)
// ===================================================================
export const metadata = {
  title:
    'URGENT: Golden Visa 7-Year Path Vote This Wed (Oct 22). 10 Weeks to Secure 5-Year Rule.',
  description:
    'Portugal votes this Wednesday on a 7-year Golden Visa path for 2026 applicants. This is your 10-week guide to securing the 5-year rule before the Dec 31 deadline.',
  keywords:
    'Golden Visa law change 2025, Golden Visa 7 years, Portugal citizenship deadline, Golden Visa 10-week deadline, Golden Visa vote 2025, new Golden Visa law, apply Golden Visa before 2026, Explorer Investments',
  robots:
    'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title:
      "Portugal's 5-Year Golden Visa Rule Ends Dec 31? Urgent Vote This Week.",
    description:
      'A draft law proposes a 7-year Golden Visa path for 2026. This is your urgent guide to securing the 5-year rule before the 10-week deadline.',
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    locale: 'en_US',
    site_name: 'Golden Visa Explorer Investments',
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      section: 'Golden Visa News', // Categoria atualizada
      authors: [
        'https://goldenvisashub.com/about-explorer-investments', // Link para a página "About" ou perfil do André
      ],
      tags: [
        'Golden Visa',
        'Law Change',
        'Urgent',
        'Deadline',
        'Portugal',
        'Citizenship',
        '2025',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest', // Assumindo o seu Twitter handle
    title:
      'URGENT: Golden Visa 7-Year Path Vote This Wed (Oct 22). 10 Weeks to Secure 5-Year Rule.',
    description:
      'A draft law proposes a 7-year Golden Visa path for 2026. This is your urgent guide to securing the 5-year rule before the 10-week deadline.',
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
// JSON-LD SCHEMAS (ATUALIZADOS PARA O ARTIGO URGENTE)
// ===================================================================

/** JSON-LD - Article (ou NewsArticle) */
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle', // Alterado para NewsArticle por ser uma notícia de última hora
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
      name: 'What is the new Portugal Golden Visa law being voted on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Portuguese Parliament is voting on Oct 22, 2025, on a proposal to change the Golden Visa citizenship path from 5 years to 7 years. This new rule would apply to all applications submitted after December 31, 2025.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the deadline to apply for the 5-year Golden Visa rule?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The deadline to submit your application under the current 5-year rule is December 31, 2025. This leaves approximately 10 weeks from the vote date to prepare and submit all documents.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the 7-year Golden Visa path mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The proposed 7-year clock starts from your first residency card. The law also gives AIMA a 90-working-day (approx. 5-month) deadline, meaning the total time from application could be closer to 7.5 years, not 5.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I still apply for the 5-year Golden Visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but you must submit your complete application before December 31, 2025. This requires starting the process immediately to get your NIF, bank account, and fund subscription documents.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the fastest way to get my fund documents for the deadline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must choose an institutional fund manager. Explorer Investments provides the critical fund subscription and CMVM declarations in 24-48 hours, eliminating this bottleneck and allowing you to meet the 10-week deadline.',
      },
    },
  ],
};

// ===================================================================
// COMPONENTE DA PÁGINA
// ===================================================================
export default function UrgentLawChangePage() {
  return (
    <>
      {/* O <Head> de 'next/head' foi removido. 
        O objeto 'export const metadata' acima irá gerir 
        automaticamente todo o <head> da página no Next.js App Router.
      */}

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

      {/* Page App (O seu componente de artigo) */}
      <App />
    </>
  );
}