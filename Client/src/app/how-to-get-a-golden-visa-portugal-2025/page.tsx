import Head from 'next/head';
import App from '@/app/how-to-get-a-golden-visa-portugal-2025/app';
import Script from 'next/script';

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What changed in Portugal’s Golden Visa after 2023?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Real estate and capital transfer routes were removed. Fund-based investment remains the preferred and compliant option in 2025."
      }
    },
    {
      "@type": "Question",
      "name": "What’s the minimum investment for a Golden Visa in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "€500,000 in a regulated Portuguese investment fund."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to move to Portugal full-time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. You only need to stay in Portugal 7 days per year to maintain your residency."
      }
    },
    {
      "@type": "Question",
      "name": "Who can I include in my Golden Visa application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your spouse, dependent children, and dependent parents are eligible."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get citizenship through the Golden Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. After 5 years of maintaining residency and meeting requirements, you can apply for Portuguese citizenship."
      }
    }
  ]
};

export const metadata = {
  title: "How to Get a Golden Visa in Portugal (2025 Guide)",
  description: "Explore how to obtain Portugal’s Golden Visa in 2025. Learn step-by-step how to qualify via fund investments, key legal changes, and what to avoid.",
  keywords: "Golden Visa Portugal 2025, Portuguese residency by investment, fund-based visa Portugal, Explorer Investments", 
  robots: "index, follow",
  openGraph: {
    title: "How to Get a Golden Visa Portugal 2025 | Full Guide",
    description: "Step-by-step guide to securing your Portugal Golden Visa in 2025. Discover compliant investment routes, benefits, and common mistakes.",
    url: "https://goldenvisashub.com/how-to-get-a-golden-visa-portugal-2025",
    type: "website",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "How to Get Portugal’s Golden Visa in 2025 | Updated Guide",
    description: "Everything you need to know about the 2025 Golden Visa: new rules, fund paths, step-by-step process, and expert insights.",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  }
};

export default function GoldenVisaHowToPage() {
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
        id="ld-json-how-to"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <App />
    </>
  );
}
