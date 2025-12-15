import Head from 'next/head';
import App from '@/app/portugal-golden-visa-explorer-investments/app';
import Script from 'next/script';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the Portugal Golden Visa still available in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes - the Portugal Golden Visa remains active through regulated investment funds, including those managed by Explorer Investments."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum investment required for the Golden Visa in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You must invest at least €500,000 in a CMVM-regulated private equity or venture capital fund, such as those managed by Explorer Investments."
      }
    },
    {
      "@type": "Question",
      "name": "Can I include my family in the Golden Visa application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Your spouse, dependent children, and parents can be included under one single Golden Visa application."
      }
    },
    {
      "@type": "Question",
      "name": "Do I have to live in Portugal full-time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The residency requirement is only 7 days per year, making it ideal for international investors."
      }
    },
    {
      "@type": "Question",
      "name": "When can I apply for Portuguese citizenship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After maintaining your investment and residency status for 5 years, you can apply for Portuguese citizenship."
      }
    },
    {
      "@type": "Question",
      "name": "Why invest with Explorer Investments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Explorer is one of Portugal’s most reputable private equity firms with €1.8B AUM and a proven record of Golden Visa-compliant funds regulated by the CMVM."
      }
    }
  ]
};

export const metadata = {
  title: "Portugal Golden Visa 2025 | Invest with Explorer Investments Fund",
  description:
    "Learn why Explorer Investments’ regulated fund is one of the best ways to secure Portugal’s Golden Visa in 2025. Get EU residency, diversify your capital, and build long-term value with a CMVM-regulated investment vehicle.",
  keywords:
    "Portugal Golden Visa 2025, Explorer Investments Fund, CMVM Regulated Fund, EU Residency by Investment, Portuguese Citizenship, Golden Visa Portugal Fund Route, Best Funds for Golden Visa, Explorer Capital Portugal",
  robots: "index, follow",
  openGraph: {
    title: "Portugal Golden Visa 2025 | Invest with Explorer Investments Fund",
    description:
      "Explore the smartest way to obtain EU residency - invest €500K in Explorer’s CMVM-regulated private equity fund and access Portugal’s Golden Visa benefits for you and your family.",
    url: "https://goldenvisashub.com/portugal-golden-visa-explorer-investments",
    type: "article",
    images: [
      "https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-explorer.webp"
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Portugal Golden Visa 2025 | Explorer Investments Fund Opportunity",
    description:
      "Secure your Portugal Golden Visa through Explorer’s CMVM-regulated investment fund. EU residency, family inclusion, and strong portfolio growth potential.",
    images: [
      "https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-explorer.webp"
    ]
  }
};

export default function PortugalGoldenVisaExplorerPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
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
        id="ld-json-golden-visa-explorer"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <App />
    </>
  );
}
