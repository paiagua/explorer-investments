import Head from 'next/head';
import App from '@/app/beat-the-clock-start-golden-visa-before-2026/app'; // Adjust path
import Script from 'next/script';

// ===================================================================
// CONSTANTS
// ===================================================================
const SLUG = 'beat-the-clock-start-golden-visa-before-2026';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = `https://goldenvisashub.com/assets/images/blog/gv-year-end-strategy-2025.jpg`; // Create a specific image
const PUBLISHED = '2025-10-26T09:00:00+00:00'; // Today (Assuming WET = GMT+0 for simplicity, adjust if needed)
const MODIFIED = '2025-10-26T09:00:00+00:00';

// ===================================================================
// METADATA (SEO Optimized)
// ===================================================================
export const metadata = {
  title: "Beat the Clock: The Strategic Advantage of Starting Your Portugal Golden Visa Before 2026",
  description: "Only weeks left in 2025. Discover why starting your Portugal Golden Visa fund application NOW is crucial. Leverage Article 158-A to start your 5-year citizenship clock sooner, secure current rules, and avoid 2026 bottlenecks. Your year-end strategy guide.",
  keywords: "start golden visa before 2026, golden visa deadline 2025, portugal golden visa year end, strategic advantage golden visa, article 158-A 5 year clock, secure golden visa rules, golden visa application time, AIMA delays citizenship, Explorer Investments fund speed",
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: "9 Weeks Left: Why Starting Your Portugal Golden Visa Before 2026 is Critical.",
    description: "Don't delay your EU citizenship journey. Learn the strategic benefits of applying for Portugal's Golden Visa now - activate your 5-year clock sooner (Art. 158-A) & lock in current rules.",
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    locale: 'en_US',
    site_name: 'Golden Visa Explorer Investments',
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      section: 'Investment Strategy', // Or 'Guides'
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'Golden Visa', 'Portugal', 'Deadline', 'Year-End Strategy', 'Investment Strategy', 'Citizenship Timeline', 'Article 158-A', 'AIMA', 'CMVM Funds', 'Explorer Investments', 'Urgency', '2025', '2026',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest', // Your Twitter handle
    title: "Time is Running Out on 2025: Start Your Portugal Golden Visa Now!",
    description: "Strategic reasons to begin your GV application before year-end. Activate the 5-year clock sooner & secure today's rules. Your essential Q4 guide.",
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
  '@type': 'Article',
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
    { '@type': 'ListItem', position: 3, name: "Strategic Advantage: Starting Golden Visa Before 2026", item: CANONICAL_URL }, // Shorter title
  ],
};

/** JSON-LD - FAQPage */
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there a deadline to apply for the Portugal Golden Visa in 2025?',
      acceptedAnswer: { '@type': 'Answer', text: 'While there isn\'t an official program closure deadline *within* 2025 for the current 5-year rule, applying before year-end offers strategic advantages. It allows you to start your 5-year citizenship clock sooner due to Article 158-A and potentially secure the current rules amidst ongoing regulatory discussions in Europe.' },
    },
    {
      '@type': 'Question',
      name: 'How does applying before 2026 affect the 5-year citizenship timeline?',
      acceptedAnswer: { '@type': 'Answer', text: 'Thanks to Article 158-A, the 5-year count towards citizenship eligibility begins from the date your residency application is submitted and paid (if approved). By submitting sooner (e.g., late 2025 vs. mid-2026), you effectively start accumulating your required residency time earlier, potentially reaching eligibility for citizenship months sooner.' },
    },
    {
       '@type': 'Question',
       name: 'How long does it take to prepare a Golden Visa fund application before submission?',
       acceptedAnswer: { '@type': 'Answer', text: 'Preparing the application *before* submitting to AIMA involves several steps: obtaining a NIF and bank account (days-weeks), fund due diligence and subscription (days-weeks, depending on manager speed), and gathering/legalizing personal documents (can take 6-10 weeks or more). Starting the process well before year-end is advisable.' },
    },
     {
       '@type': 'Question',
       name: 'Why is the fund manager\'s speed important for a year-end strategy?',
       acceptedAnswer: { '@type': 'Answer', text: 'Your application cannot be submitted until you have the official Fund Subscription and CMVM Registration declarations. An efficient, institutional manager like Explorer Investments can provide these within 24-48 hours, enabling your lawyer to submit the application quickly and start your 5-year clock. Slower managers can cause weeks or months of delay.' },
     },
  ],
};

// ===================================================================
// PAGE COMPONENT
// ===================================================================
export default function BeatTheClockGVPage() {
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