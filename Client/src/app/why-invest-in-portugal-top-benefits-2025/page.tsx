import Head from 'next/head';
import App from '@/app/why-invest-in-portugal-top-benefits-2025/app';
import Script from 'next/script';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why invest in Portugal in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Portugal offers economic stability, EU residency through Golden Visa, favorable tax regimes, and access to global markets."
      }
    },
    {
      "@type": "Question",
      "name": "Is Portugal a good destination for American investors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Americans are increasingly drawn by Portugal’s quality of life, business opportunities, and dual taxation treaties."
      }
    },
    {
      "@type": "Question",
      "name": "What are the top sectors to invest in Portugal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Technology, renewable energy, tourism, real estate (non-Golden Visa), and private equity funds are top-performing sectors."
      }
    },
    {
      "@type": "Question",
      "name": "Does Portugal offer investor protections?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Portugal is part of the EU and Eurozone, with strong legal protections and financial regulations."
      }
    }
  ]
};

export const metadata = {
  title: "Top 10 Reasons to Invest in Portugal in 2025 | Golden Visa & Growth",
  description: "Explore the top 10 reasons Portugal is a top EU investment hub in 2025 - from Golden Visa access and tax advantages to quality of life, tech growth, and global reach.",
  keywords: "Invest in Portugal 2025, Portugal Golden Visa, EU Investment, Tax Residency Portugal, Portuguese Citizenship, Portugal Private Equity Fund, CMVM Fund Investment, Best Countries to Invest Europe",
  robots: "index, follow",
  openGraph: {
    title: "Top 10 Reasons to Invest in Portugal in 2025 | Golden Visa & Growth",
    description: "Portugal leads as a 2025 EU investment destination. See why investors choose it for growth, lifestyle, and secure Golden Visa access.",
    url: "https://goldenvisashub.com/why-invest-in-portugal-top-benefits-2025",
    type: "article",
    images: ["https://goldenvisashub.com/assets/images/blog/invest-in-portugal-2025.webp"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Top 10 Reasons to Invest in Portugal in 2025 | Golden Visa & Growth",
    description: "Secure your EU future with Portugal: tax-friendly, stable, innovative, and offering Golden Visa access through regulated funds.",
    images: ["https://goldenvisashub.com/assets/images/blog/invest-in-portugal-2025.webp"]
  }
};

export default function WhyInvestInPortugal2025SEOPage() {
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
        id="ld-json-invest-portugal"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <App />
    </>
  );
}
