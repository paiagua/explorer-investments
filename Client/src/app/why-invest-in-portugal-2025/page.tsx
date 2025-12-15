import Head from 'next/head';
import App from '@/app/why-invest-in-portugal-2025/app';
import Script from 'next/script';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Why Invest in Portugal in 2025",
      "url": "https://goldenvisashub.com/why-invest-in-portugal-2025",
      "description": "Portugal 2025: EU access, Golden Visa, and fund-based investments for international investors. Backed by Explorer Investments.",
      "publisher": {
        "@type": "Organization",
        "name": "Explorer Investments",
        "url": "https://goldenvisashub.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://goldenvisashub.com/social-share.jpg"
        }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why is Portugal a top investment destination in 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Portugal offers economic stability, EU access, modern infrastructure, and a skilled workforce-making it ideal for global investors."
          }
        },
        {
          "@type": "Question",
          "name": "How does the Golden Visa support investment goals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Golden Visa grants EU residency, allows Schengen travel, and provides a path to citizenship-aligned with strategic investment returns."
          }
        },
        {
          "@type": "Question",
          "name": "Why are funds preferred over real estate in 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Following policy changes, residential real estate is no longer eligible. Funds offer compliance, diversification, and efficiency."
          }
        }
      ]
    }
  ]
};

export const metadata = {
  title: "Why Invest in Portugal 2025 | EU Residency & Strategic Growth",
  description: "Explore Portugal’s 2025 investment advantages - Golden Visa, economic stability, and EU access via regulated funds with Explorer Investments.",
  keywords: "Invest in Portugal 2025, Golden Visa Investment, EU Residency Fund, Explorer Investments, CMVM Fund Portugal, Portugal Citizenship",
  robots: "index, follow",
  openGraph: {
    title: "Why Invest in Portugal 2025 | EU Residency & Growth",
    description: "Portugal 2025: secure EU residency through compliant funds, supported by Explorer Investments. Golden Visa route explained.",
    url: "https://goldenvisashub.com/why-invest-in-portugal-2025",
    type: "website",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Invest in Portugal 2025 | EU Residency Through Funds",
    description: "Learn why 2025 is the ideal year to invest in Portugal. Strategic access to the EU with regulated funds and residency options.",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  }
};

export default function WhyInvestInPortugalPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <link rel="canonical" href={metadata.openGraph.url} />
      </Head>
      <Script
        id="ld-json-invest"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <App />
    </>
  );
}
