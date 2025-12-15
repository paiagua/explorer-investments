import Head from 'next/head'; // Importação padrão, mas metadata agora lida pelo Next.js App Router
import App from '@/app/portugal-golden-visa-glossary-terms-institutions-explained/app'; // Caminho para o seu componente
import Script from 'next/script';

 
const SLUG = 'portugal-golden-visa-glossary-terms-institutions-explained';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = `https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-glossary.jpg`; // Criar uma imagem específica para o glossário
const PUBLISHED = '2025-10-24T10:00:00+01:00'; // Data de publicação
const MODIFIED = '2025-10-24T10:00:00+01:00'; // Data da última modificação

 
export const metadata = {
  title: "The Ultimate Portugal Golden Visa Glossary (2026): Terms, Institutions & Processes Explained",
  description: "Your definitive A-Z guide to Portugal's Golden Visa. Understand key terms (AIMA, CMVM, NIF, ARI), institutions, investment types, and the application process. Updated for 2026.",
  keywords: "Portugal Golden Visa glossary, Golden Visa terms, AIMA Portugal, CMVM meaning, NIF Portugal, ARI visa, Golden Visa process, Portugal investment fund visa, SEF AIMA transition, Golden Visa institutions, Portugal residency terms",
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: "Confused by Golden Visa Jargon? The Ultimate Portugal GV Glossary is Here.",
    description: "AIMA vs SEF? CMVM? NIF? ARI? Demystify Portugal's Golden Visa with our comprehensive A-Z glossary. Essential reading for investors in 2026.",
    url: CANONICAL_URL,
    type: 'article', // ou 'website' se for uma página pilar fora do blog
    images: [OG_IMAGE],
    locale: 'en_US',
    site_name: 'Golden Visa Explorer Investments',
    article: { // Incluir mesmo se type for 'website' para contexto
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      section: 'Guides', // Ou 'Reference', 'Golden Visa Essentials'
      authors: ['https://goldenvisashub.com/about-explorer-investments'], // Link para página 'sobre nós' ou autor
      tags: [
        'Golden Visa', 'Portugal', 'Glossary', 'Definitions', 'AIMA', 'CMVM', 'NIF', 'ARI', 'Investment Funds', 'Residency by Investment', 'Citizenship', 'Guide',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest', // Substituir pelo seu Twitter handle
    title: "The Ultimate Portugal Golden Visa Glossary (2026 A-Z Guide)",
    description: "Decode Portugal's Golden Visa: Understand every term, acronym, and institution from AIMA to NIF. Your essential reference by Explorer Investments.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      'en': CANONICAL_URL,
    },
  },
};

// ===================================================================
// JSON-LD SCHEMAS
// ===================================================================

/** JSON-LD - Article/WebPage (pode ser WebPage com mainEntity Article se preferir) */
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article', // Ou 'WebPage' e adicionar mainEntity: { '@type': 'Article', ... }
  headline: metadata.title,
  description: metadata.description,
  image: [OG_IMAGE],
  mainEntityOfPage: CANONICAL_URL,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: { '@type': 'Organization', name: 'Explorer Investments' }, // Pode ser Person se quiser
  publisher: {
    '@type': 'Organization',
    name: 'Explorer Investments',
    logo: {
      '@type': 'ImageObject',
      url: 'https://goldenvisashub.com/logo.png', // Verifique o caminho do logo
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://goldenvisashub.com/' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://goldenvisashub.com/golden-visa-portugal-blog' }, // Link para o blog/insights
    { '@type': 'ListItem', position: 3, name: "Portugal Golden Visa Glossary", item: CANONICAL_URL }, // Título curto para breadcrumb
  ],
};

/** JSON-LD - FAQPage (ESSENCIAL para Glossários) */
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { // Exemplo 1: AIMA
      '@type': 'Question',
      name: 'What is AIMA in Portugal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AIMA (Agência para a Integração, Migrações e Asilo) is the Portuguese Agency for Integration, Migration, and Asylum. As of October 2023, it took over the administrative functions related to residence permits, including the Golden Visa, previously handled by SEF (Serviço de Estrangeiros e Fronteiras). AIMA processes Golden Visa applications and renewals.',
      },
    },
    { // Exemplo 2: CMVM
      '@type': 'Question',
      name: 'What does CMVM stand for and why is it important for the Golden Visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CMVM stands for Comissão do Mercado de Valores Mobiliários (Portuguese Securities Market Commission). It is the regulatory body overseeing Portugal\'s financial markets. For the Golden Visa, investing in a fund requires the fund to be regulated by the CMVM, ensuring compliance, transparency, and investor protection.',
      },
    },
    { // Exemplo 3: NIF
      '@type': 'Question',
      name: 'What is a NIF number in Portugal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NIF (Número de Identificação Fiscal) is the Portuguese Tax Identification Number. It is essential for any financial transaction in Portugal, including opening a bank account, making investments (like for the Golden Visa), buying property, or setting up utilities. Non-residents can obtain a NIF through a fiscal representative.',
      },
    },
    { // Exemplo 4: ARI
      '@type': 'Question',
      name: 'What is ARI in the context of the Golden Visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ARI stands for Autorização de Residência para Atividade de Investimento (Residence Permit for Investment Activity). This is the official legal name for the Portugal Golden Visa program.',
      },
    },
     { // Exemplo 5: Minimum Stay
      '@type': 'Question',
      name: 'What is the minimum stay requirement for the Portugal Golden Visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The minimum stay requirement is an average of 7 days per year over the residency period. This can be fulfilled as 14 days over the first two-year permit cycle, and 14 days over subsequent two-year cycles, or variations thereof averaging 7 days annually.',
      },
    },
     { // Exemplo 6: 5-Year Clock Law
      '@type': 'Question',
      name: 'When does the 5-year Golden Visa citizenship clock start?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Due to Article 158-A of the Foreigners Law, the time count for the 5 years required for citizenship eligibility generally starts from the date the residency application is submitted and paid for, provided the application is ultimately approved. This means AIMA processing delays do not necessarily extend the total time to citizenship beyond 5 years from application.',
      },
    },
  ],
};

// ===================================================================
// COMPONENTE DA PÁGINA
// ===================================================================
export default function GoldenVisaGlossaryPage() {
  return (
    <>

      <App />
    </>
  );
}