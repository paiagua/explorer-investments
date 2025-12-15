import Head from 'next/head';
import App from '@/app/explorer-investments-brazil-private-markets-meeting-2025-golden-visa-global-investors/app'; // Adjust path
import Script from 'next/script';

// ===================================================================
// CONSTANTS
// ===================================================================
const SLUG = 'explorer-investments-brazil-private-markets-meeting-2025-golden-visa-global-investors';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = `https://goldenvisashub.com/assets/images/blog/explorer-brazil-private-markets-gv-link.webp`; // Create specific image
const PUBLISHED = '2025-10-25T09:00:00+01:00'; // Today
const MODIFIED = '2025-10-25T09:00:00+01:00'; // Today
const EVENT_DATE = '2025-11-11';
const EVENT_LOCATION = 'Rosewood São Paulo, São Paulo, Brazil';

// ===================================================================
// METADATA (SEO Optimized)
// ===================================================================
export const metadata = {
  title: "Explorer Investments at Brazil Private Markets Meeting 2025: Bridging LatAm Capital to Portugal Golden Visa & EU Residency",
  description: "André Bandeira (Explorer Investments) attends São Paulo's premier private markets event (Nov 11). Discussing Portugal PE, CMVM funds & the Golden Visa opportunity for Brazilian & US investors seeking EU access.",
  keywords: "Brazil Private Markets Meeting 2025, Explorer Investments Brazil, André Bandeira São Paulo, Portugal Golden Visa Brazil, Portugal Golden Visa US investors, CMVM regulated funds, Portugal Private Equity, EU residency investment, alternative investments LatAm, Explorer Investments Golden Visa",
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: "Connecting Brazil to Europe: Explorer Investments Highlights Golden Visa at São Paulo Private Markets Event.",
    description: "Meet André Bandeira in São Paulo (Nov 11) to explore Portugal's leading PE platform & the strategic Golden Visa fund route for Brazilian and US investors seeking diversification and EU residency.",
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    locale: 'en_US', // Or pt_BR if primarily targeting Brazil, but using en for broader SEO
    site_name: 'Golden Visa Explorer Investments',
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      section: 'News & Events',
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'Golden Visa', 'Portugal', 'Brazil', 'US Investors', 'Private Equity', 'CMVM Funds', 'Events', 'São Paulo', 'Alternative Investments', 'EU Residency', 'Explorer Investments', 'News',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest', // Your Twitter handle
    title: "Explorer Investments in São Paulo: Linking Brazil PE Interest to Portugal Golden Visa",
    description: "André Bandeira attending Brazil Private Markets Meeting (Nov 11). Discussing Portugal PE & the GV fund route for LatAm/US investors.",
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

/** JSON-LD - NewsArticle announcing event participation */
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
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
   about: { // Indicate the event the article is about
     '@type': 'Event',
     name: 'Brazil Private Markets Meeting 2025',
     startDate: EVENT_DATE,
     location: {
       '@type': 'Place',
       name: 'Rosewood São Paulo',
       address: EVENT_LOCATION,
     },
     url: "https://www.carmocompanies.com/ticketsonly/p/brazil-private-markets-meeting" // Link to event if available
   }
};

/** JSON-LD - Breadcrumbs */
const schemaBreadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://goldenvisashub.com/' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://goldenvisashub.com/golden-visa-portugal-blog' },
    { '@type': 'ListItem', position: 3, name: "Explorer Investments at Brazil Private Markets Meeting 2025", item: CANONICAL_URL }, // Shorter title
  ],
};

// Optional FAQPage
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is Explorer Investments attending the Brazil Private Markets Meeting?',
      acceptedAnswer: { '@type': 'Answer', text: 'Explorer Investments is attending to connect with Brazilian institutional investors and family offices, share insights on the Portuguese Private Equity market, and discuss investment opportunities, including the Portugal Golden Visa fund route as a strategic tool for diversification and EU residency.' },
    },
    {
      '@type': 'Question',
      name: 'How does this event relate to US investors interested in the Golden Visa?',
      acceptedAnswer: { '@type': 'Answer', text: 'While the event is in Brazil, the themes of alternative investments, diversification, and seeking stable international opportunities resonate globally. The Portugal Golden Visa fund route, managed by firms like Explorer, attracts significant interest from both Brazilian and US investors looking for a secure path to EU residency and citizenship.' },
    },
    {
       '@type': 'Question',
       name: 'Can I meet André Bandeira at the event?',
       acceptedAnswer: { '@type': 'Answer', text: 'Yes, André Bandeira (Investor Relations) will be attending the Brazil Private Markets Meeting in São Paulo on November 11, 2025, and is available for pre-scheduled meetings to discuss Explorer Investments\' platform and the Golden Visa. Contact details are available in the article.' },
    },
  ],
};

// ===================================================================
// PAGE COMPONENT
// ===================================================================
export default function ExplorerBrazilEventPage() {
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