 

import Head from 'next/head';
import App from '@/app/portugal-golden-visa-2025-american-interest-travel-real-estate/app';
import Script from 'next/script';

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why was Portugal ranked the top retirement destination in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Portugal offers affordability, healthcare, climate, safety, and a welcoming expat environment, making it ideal for retirement."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Golden Visa and how can I use it to retire in Portugal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It’s a residency-by-investment program. By investing €500,000 in CMVM-regulated funds, you gain legal EU residency."
      }
    },
    {
      "@type": "Question",
      "name": "Can I include my family in the application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the Golden Visa includes spouse, children, and dependent parents."
      }
    },
    {
      "@type": "Question",
      "name": "How much time do I need to spend in Portugal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only 7 days per year are required to maintain residency."
      }
    },
    {
      "@type": "Question",
      "name": "How soon can I get citizenship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You may apply after 5 years with basic language skills and clean criminal record."
      }
    }
  ]
};

export const metadata = {
  title: "Portugal: Best Place to Retire in 2025 | Golden Visa Legal Route",
  description: "Forbes named Portugal the best retirement country in 2025. Secure EU residency through the Golden Visa with fund investment. Legal, easy, family-friendly.",
  keywords: "Portugal Best Place to Retire 2025, Golden Visa Retirement, Retire in Lisbon, Forbes Retirement Ranking, EU Residency Fund, CMVM Fund Portugal, American Expats Portugal",
  robots: "index, follow",
  openGraph: {
    title: "Portugal: Best Place to Retire in 2025 | Golden Visa Legal Route",
    description: "Live in Europe legally with Portugal’s Golden Visa. Fund investment gives you and your family EU residency - with low taxes, healthcare access, and sunshine.",
    url: "https://goldenvisashub.com/portugal-best-place-to-retire-2025-golden-visa",
    type: "article",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Retire in Portugal with Golden Visa | 2025 Top Country by Forbes",
    description: "Retire legally in Europe. Get Portugal residency through Explorer’s Golden Visa fund investment in 2025. Forbes top destination.",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  }
};

export default function RetirePortugalPage() {
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
        id="ld-json-retire"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <App />
    </>
  );
}
