import Head from 'next/head'; // Keep for potential fallback or specific tags
import App from '@/app/portugal-golden-visa-fund-due-diligence-checklist-2026/app'; // Adjust path
import Script from 'next/script';

// ===================================================================
// CONSTANTS
// ===================================================================
const SLUG = 'portugal-golden-visa-fund-due-diligence-checklist-2026';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = `https://goldenvisashub.com/assets/images/blog/gv-fund-due-diligence-checklist.jpg`; // Create a specific image
const PUBLISHED = '2025-10-24T11:00:00+01:00'; // Today
const MODIFIED = '2025-10-24T11:00:00+01:00'; // Today

// ===================================================================
// METADATA (SEO Optimized)
// ===================================================================
export const metadata = {
  title: "15 Critical Questions: Your Portugal Golden Visa Fund Due Diligence Checklist (2026)",
  description: "Choosing a €500k Golden Visa fund? Don't invest blind. Use our essential 15-question checklist covering manager, strategy, fees, compliance (CMVM, PFIC), and exit. Guide by Explorer Investments.",
  keywords: "portugal golden visa fund checklist, golden visa due diligence questions, choose golden visa fund, compare portugal gv funds, explorer investments golden visa, CMVM fund requirements, PFIC QEF golden visa fund, golden visa fund red flags",
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: "Don't Risk Your €500k: The Essential Golden Visa Fund Due Diligence Checklist.",
    description: "15 must-ask questions before investing in a Portugal Golden Visa fund. Covers manager track record, strategy, fees, compliance (CMVM/PFIC), and exit plan. Essential reading for 2026.",
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    locale: 'en_US',
    site_name: 'Golden Visa Explorer Investments',
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      section: 'Guides',
      authors: ['https://goldenvisashub.com/about-explorer-investments'], // Link to about page
      tags: [
        'Golden Visa', 'Portugal', 'Investment Funds', 'Due Diligence', 'Checklist', 'CMVM', 'PFIC', 'FATCA', 'Investment Strategy', 'Risk Management', 'Explorer Investments', 'Guide',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest', // Your Twitter handle
    title: "Portugal GV Fund Checklist: 15 Questions Before Investing €500k",
    description: "Avoid costly mistakes. Use this essential due diligence checklist when choosing your Portugal Golden Visa fund (Manager, Fees, Compliance, Exit).",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: CANONICAL_URL,
    languages: { 'en': CANONICAL_URL },
  },
};

// ===================================================================
// JSON-LD SCHEMAS
// ===================================================================

/** JSON-LD - Article */
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article', // Could also be TechArticle or HowTo
  headline: metadata.title,
  description: metadata.description,
  image: [OG_IMAGE],
  mainEntityOfPage: CANONICAL_URL,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: { '@type': 'Organization', name: 'Explorer Investments' },
  publisher: {
    '@type': 'Organization',
    name: 'Explorer Investments',
    logo: { '@type': 'ImageObject', url: 'https://goldenvisashub.com/logo.png' }, // Verify logo path
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
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://goldenvisashub.com/golden-visa-portugal-blog' },
    { '@type': 'ListItem', position: 3, name: "Golden Visa Fund Due Diligence Checklist", item: CANONICAL_URL }, // Shorter title
  ],
};

/** JSON-LD - FAQPage (Focus on DD Questions) */
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the most important factor when choosing a Golden Visa fund?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There isn\'t one single factor, but key areas include: the fund manager\'s track record and reputation, clear alignment of the fund structure and strategy with Golden Visa rules (CMVM regulation, maturity, investment focus), transparent fees, and specific compliance for your nationality (e.g., PFIC/FATCA reporting for US investors).',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I verify if a fund is CMVM-regulated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should ask the fund manager for their CMVM registration number and verify it directly on the CMVM\'s official website (cmvm.pt). Reputable managers will provide this information readily in their documentation (PPM/Prospectus). Never invest in a fund for the Golden Visa unless its CMVM regulation is confirmed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are common red flags to watch for in Golden Visa funds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Red flags include: lack of CMVM regulation, overly high guaranteed return promises (especially in PE/VC), unclear fee structures, managers with no track record, pressure selling tactics, vague investment strategies, and inability to provide clear answers on compliance (e.g., for US tax reporting).',
      },
    },
    {
       '@type': 'Question',
       name: 'Why is PFIC/FATCA reporting important for US investors?',
       acceptedAnswer: {
         '@type': 'Answer',
         text: 'US citizens are taxed on worldwide income. Investing in a non-US fund triggers Passive Foreign Investment Company (PFIC) rules, which can lead to very high tax rates unless specific elections (like QEF) are made. FATCA requires foreign institutions to report US account holders. Choosing a fund that understands and provides necessary PFIC statements and FATCA reporting is crucial for US tax compliance.',
       },
    },
  ],
};

// ===================================================================
// PAGE COMPONENT
// ===================================================================
export default function GoldenVisaChecklistPage() {
  return (
    <>
      {/* Metadata is handled by the exported 'metadata' object */}

      {/* JSON-LD Schemas */}
      <Script id="ld-article" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <Script id="ld-breadcrumbs" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}/>
      <Script id="ld-faq" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* Main Content Component */}
      <App />
    </>
  );
}