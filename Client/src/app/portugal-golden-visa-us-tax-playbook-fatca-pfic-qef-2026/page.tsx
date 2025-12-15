import Head from 'next/head';
import App from '@/app/portugal-golden-visa-us-tax-playbook-fatca-pfic-qef-2026/app'; // Adjust path
import Script from 'next/script';

// ===================================================================
// CONSTANTS
// ===================================================================
const SLUG = 'portugal-golden-visa-us-tax-playbook-fatca-pfic-qef-2026';
const CANONICAL_URL = `https://goldenvisashub.com/ss${SLUG}`;
const OG_IMAGE = `https://goldenvisashub.com/assets/images/blog/gv-us-tax-fatca-pfic-guide.jpg`; // Create a specific image
const PUBLISHED = '2025-10-26T10:00:00+00:00'; // Today (Assuming WET=GMT)
const MODIFIED = '2025-10-26T10:00:00+00:00';

// ===================================================================
// METADATA (SEO Optimized)
// ===================================================================
export const metadata = {
  title: "The US Investor's Tax Playbook for Portugal Golden Visa Funds (2026): FATCA, PFIC & QEF Explained Simply",
  description: "US Citizen investing in a Portugal Golden Visa fund? Understand crucial US tax rules: FATCA reporting, the PFIC trap, and why a QEF election (requiring specific fund statements) is vital. Simplified guide by Explorer Investments.",
  keywords: "PFIC golden visa fund, QEF election portugal golden visa, FATCA portugal fund, US tax golden visa, explorer investments PFIC reporting, US investor tax compliance portugal, golden visa tax playbook, avoid PFIC tax trap",
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: "US Investors: Avoid the Golden Visa Tax Trap! PFIC & QEF Explained (2026).",
    description: "Investing €500k in a Portuguese fund? Don't get caught by punitive US PFIC taxes. Learn about FATCA, PFIC, and why QEF reporting from your fund manager is non-negotiable.",
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    locale: 'en_US',
    site_name: 'Golden Visa Explorer Investments',
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      section: 'Tax Strategy', // Or 'Guides', 'US Investors'
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'Golden Visa', 'Portugal', 'US Investors', 'Tax Strategy', 'FATCA', 'PFIC', 'QEF Election', 'Compliance', 'Investment Funds', 'CMVM Funds', 'Explorer Investments', 'Guide', '2026',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest', // Your Twitter handle
    title: "US Tax Guide for Portugal GV Funds: PFIC & QEF Simplified (2026)",
    description: "Crucial reading for US investors eyeing Portugal's Golden Visa fund route. Understand FATCA, the PFIC issue, and the importance of QEF-ready fund managers like Explorer.",
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
  '@type': 'Article', // Can be TechArticle if focusing heavily on tax rules
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
  keywords: metadata.keywords,
};

/** JSON-LD - Breadcrumbs */
const schemaBreadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://goldenvisashub.com/' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://goldenvisashub.com/golden-visa-portugal-blog' },
    { '@type': 'ListItem', position: 3, name: "US Investor Tax Playbook for GV Funds", item: CANONICAL_URL }, // Shorter title
  ],
};

/** JSON-LD - FAQPage (Directly addressing core tax questions) */
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is PFIC and why does it matter for US investors in Portugal Golden Visa funds?',
      acceptedAnswer: { '@type': 'Answer', text: 'PFIC stands for Passive Foreign Investment Company. Most non-US investment funds, including Portuguese Golden Visa funds, fall under this US tax classification. It matters immensely because the default US tax rules for PFICs are extremely punitive, often resulting in higher tax rates and complex calculations unless specific elections are made.' },
    },
    {
      '@type': 'Question',
      name: 'What is a QEF election for a PFIC?',
      acceptedAnswer: { '@type': 'Answer', text: 'A Qualified Electing Fund (QEF) election is generally the most favorable way for a US taxpayer to handle PFIC taxation. It allows the investor to pay US tax on their share of the fund\'s ordinary earnings and net capital gains annually, typically at lower capital gains rates, mirroring how US domestic funds are often taxed.' },
    },
    {
      '@type': 'Question',
      name: 'What do I need from the fund manager to make a QEF election?',
      acceptedAnswer: { '@type': 'Answer', text: 'To make a QEF election, the US investor absolutely needs an annual "PFIC Annual Information Statement" from the fund manager. This statement provides the necessary details about the investor\'s share of the fund\'s income and gains, calculated according to US tax principles. Without this statement, the QEF election is impossible.' },
    },
     {
      '@type': 'Question',
      name: 'Do all Portugal Golden Visa funds provide PFIC Annual Information Statements for QEF?',
      acceptedAnswer: { '@type': 'Answer', text: 'No, not necessarily. Providing these statements requires specific expertise and administrative processes aligned with US tax rules. It is crucial for US investors to verify *before investing* that the fund manager is experienced with US clients and contractually obligated or reliably provides these annual statements. Institutional managers like Explorer Investments typically offer this reporting.' },
    },
     {
      '@type': 'Question',
      name: 'What is FATCA?',
      acceptedAnswer: { '@type': 'Answer', text: 'FATCA (Foreign Account Tax Compliance Act) is a US law requiring foreign financial institutions (banks, funds) to report information about accounts held by US taxpayers to the IRS. It\'s primarily an information reporting requirement for the institution, not a direct tax on the investor, but necessitates providing US identification (like a W-9) to the Portuguese bank and fund.' },
    },
  ],
};

// ===================================================================
// PAGE COMPONENT
// ===================================================================
export default function GoldenVisaUSTaxPlaybookPage() {
  return (
    <>
      {/* Metadata handled by export */}
      {/* JSON-LD Schemas */}
      <Script id="ld-article" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <Script id="ld-breadcrumbs" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}/>
      <Script id="ld-faq" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* Main Content Component */}
      <App />
    </>
  );
}