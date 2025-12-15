

import Head from 'next/head';
import App from '@/app/golden-visa-portugal-investment-fund-explorer/app';
import Script from 'next/script';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Portugal Golden Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Residency-by-investment program through regulated funds."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum investment amount?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "€500,000 in CMVM-approved funds."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to live in Portugal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Just 7 days/year required."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "3-6 months depending on processing."
      }
    },
    {
      "@type": "Question",
      "name": "Can I include my family?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Spouse, kids, parents."
      }
    },
    {
      "@type": "Question",
      "name": "When can I apply for citizenship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After 5 years of holding the visa."
      }
    },
    {
      "@type": "Question",
      "name": "Will I be taxed in Portugal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only if you become a tax resident."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose the fund investment path?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Funds eliminate property management, offer diversification, and meet CMVM regulation."
      }
    },
    {
      "@type": "Question",
      "name": "Who is Explorer Investments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Portugal’s top private equity firm with €1.8B AUM, offering regulated fund paths to residency."
      }
    }
  ]
};

export const metadata = {
  title: "Golden Visa Portugal | Invest in EU Residency with Explorer Fund",
  description: "Secure EU residency through Portugal's Golden Visa. Invest €500K in Explorer's top fund. No relocation needed. Family included. 3x MOIC potential.",
  keywords: "Golden Visa Portugal, Explorer Investments, EU Residency, Portugal Investment Fund, CMVM Fund, Portugal Citizenship, Residency by Investment, 2025 Golden Visa",
  robots: "index, follow",
  openGraph: {
    title: "Golden Visa Portugal | Invest in EU Residency with Explorer Fund",
    description: "Invest €500K in Portugal’s leading private equity fund. No relocation, full family coverage, and EU citizenship path in 5 years.",
    url: "https://www.explorerinvestments.com/golden-visa-portugal-investment-fund-explorer",
    type: "website",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Golden Visa Portugal | Invest in EU Residency with Explorer Fund",
    description: "Secure your future in Europe. Discover fund-based Golden Visa investment options with Explorer.",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  }
};

export default function GoldenVisaInvestmentFundExplorerPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <link rel="canonical" href={metadata.openGraph.url} />
      </Head>
      <Script
        id="ld-json-investment-fund"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <App />
    </>
  );
}
