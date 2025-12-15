import Head from 'next/head';
import App from '@/app/portugal-golden-visa-2025-explore-fund-best-retirement-destination/app';
import Script from 'next/script';

// ───────────────────────────────────────────────────────────
// Structured Data (JSON-LD)
// ───────────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Portugal’s Golden Visa still available in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The programme remains active via regulated fund investments (no direct real estate)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum investment for a Golden Visa fund route?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "€500,000 in a CMVM-regulated investment fund that complies with current legislation."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to live full-time in Portugal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The typical physical-presence requirement is limited (e.g., about seven days on average per year)."
      }
    },
    {
      "@type": "Question",
      "name": "Who can be included in the same application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spouse or partner, dependent children, and in some cases dependent parents, subject to eligibility."
      }
    },
    {
      "@type": "Question",
      "name": "When can I apply for Portuguese citizenship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally after five years of legal residency, plus meeting language and legal requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Why consider the Explore Fund route?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fund routes diversify away from property, channel capital to the real economy, and can align with a long-term residency strategy while remaining within regulatory oversight."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Portugal Tops 2025: Golden Visa by Explore Fund & The World’s Best European Retirement Destination",
  "description": "Portugal ranks first for retirees in 2025 and the Golden Visa remains available through CMVM-regulated funds like the Explore route. Learn benefits, requirements, and timelines.",
  "author": {
    "@type": "Person",
    "name": "Matilde Rosa Cardoso"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Golden Visa Explorer Investments",
    "logo": {
      "@type": "ImageObject",
      "url": "https://goldenvisashub.com/assets/images/logo.png"
    }
  },
  "image": [
    "https://goldenvisashub.com/assets/images/blog/golden-visa-2025.webp"
  ],
  "datePublished": "2025-10-11",
  "dateModified": "2025-10-12",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://goldenvisashub.com/portugal-golden-visa-2025-explore-fund-best-retirement-destination"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://goldenvisashub.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Articles",
      "item": "https://goldenvisashub.com "
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Portugal Golden Visa 2025: Explore Fund & Retirement",
      "item": "https://goldenvisashub.com/portugal-golden-visa-2025-explore-fund-best-retirement-destination"
    }
  ]
};

// ───────────────────────────────────────────────────────────
// Meta / OpenGraph / Twitter
// ───────────────────────────────────────────────────────────

export const metadata = {
  title: "Portugal Golden Visa 2025: Explore Fund Route & #1 European Retirement Destination",
  description:
    "Portugal ranks first for retirement in 2025. Discover how the Golden Visa remains available via CMVM-regulated funds (Explore route), minimums, timelines, family inclusion, and path to citizenship.",
  keywords:
    "Portugal Golden Visa 2025, Explore Fund Portugal, CMVM regulated fund, EU residency by investment, Portuguese citizenship timeline, D7 vs Golden Visa, retire in Portugal 2025",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title:
      "Portugal Golden Visa 2025: Explore Fund Route & #1 European Retirement Destination",
    description:
      "The Golden Visa is alive through fund investments. See how Explore-style funds support EU residency, family inclusion, low stay requirements, and a 5-year path to citizenship.",
    url:
      "https://goldenvisashub.com/portugal-golden-visa-2025-explore-fund-best-retirement-destination",
    type: "article",
    images: [
      "https://goldenvisashub.com/assets/images/blog/golden-visa-2025.webp"
    ],
    locale: "en_GB"
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourbrand",
    title:
      "Portugal Golden Visa 2025: Explore Fund Route & #1 European Retirement Destination",
    description:
      "Fund-based Golden Visa explained: investment minimums, family eligibility, stay rules, and the citizenship timeline - plus why Portugal leads for retirees.",
    images: [
      "https://goldenvisashub.com/assets/images/blog/golden-visa-2025.webp"
    ]
  },
  alternates: {
    canonical:
      "https://goldenvisashub.com/portugal-golden-visa-2025-explore-fund-best-retirement-destination"
  }
};

// ───────────────────────────────────────────────────────────

export default function GoldenVisaInvestmentSEOPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>

        {/* Primary Meta */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href={metadata.alternates.canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
        <meta property="og:locale" content={metadata.openGraph.locale} />

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
      </Head>

      {/* JSON-LD: FAQPage */}
      <Script
        id="ld-json-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* JSON-LD: Article */}
      <Script
        id="ld-json-article"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* JSON-LD: Breadcrumbs */}
      <Script
        id="ld-json-breadcrumbs"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <App />
    </>
  );
}
