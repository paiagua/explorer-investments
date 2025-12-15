import Head from 'next/head';
import App from '@/app/golden-visa-portugal-2025-fastest-path-live-in-europe/app';
import Script from 'next/script';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is Portugal ranked the best country to retire in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Portugal combines safety, high quality of life, mild climate, strong healthcare, and affordability, making it a top destination for retirees."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Portugal D7 visa for retirees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The D7 visa is designed for non-EU retirees or passive-income holders (e.g., pensions, rentals). It grants residency with a modest income requirement and a path to permanent residency or citizenship."
      }
    },
    {
      "@type": "Question",
      "name": "How does the Portugal Golden Visa work in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Golden Visa grants residency through investment, including a €500,000 allocation in qualified funds. Benefits include Schengen travel, low minimum stay (about 7 days/year), and eligibility for citizenship after 5 years."
      }
    },
    {
      "@type": "Question",
      "name": "Can I invest with Explorer Investments for the Golden Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Explorer Investments is Portugal’s leading private equity platform. It allows Golden Visa investors to invest alongside institutions via regulated funds, combining immigration benefits with institutional-grade returns."
      }
    },
    {
      "@type": "Question",
      "name": "What are the key tax considerations for retirees in Portugal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Portugal offers a global taxation system with specific regimes that may optimize taxes for new residents. Always consult an independent tax advisor for your personal situation."
      }
    }
  ]
};

export const metadata = {
  title: "Portugal: Best Country to Retire in 2025 | Golden Visa Guide",
  description:
    "Portugal ranked #1 place to retire in 2025. Discover why-safety, lifestyle, and costs-and how to secure residency via Portugal’s €500k Golden Visa fund route with Explorer Investments.",
  keywords:
    "retire in Portugal 2025, Portugal best country to retire, Portugal Golden Visa, D7 visa Portugal, Portuguese citizenship, EU residency, Explorer Investments, Golden Visa fund",
  robots: "index, follow",
  openGraph: {
    title: "Portugal: Best Country to Retire in 2025 | Golden Visa Guide",
    description:
      "See why Portugal tops 2025 retirement rankings and how the €500k Golden Visa fund route with Explorer Investments can secure EU residency and a path to citizenship.",
    url: "https://goldenvisashub.comgolden-visa-portugal-2025-fastest-path-live-in-europea",
    type: "article",
    images: [
      "https://goldenvisashub.com/assets/images/blog/portugal-best-country-to-retire-2025.webp"
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Portugal: Best Country to Retire in 2025 | Golden Visa Guide",
    description:
      "Portugal is #1 for retirement in 2025. Learn the benefits and how to get EU residency via the Golden Visa fund path with Explorer Investments.",
    images: [
      "https://goldenvisashub.com/assets/images/blog/portugal-best-country-to-retire-2025.webp"
    ]
  }
};

export default function PortugalBestCountryToRetire2025Page() {
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
        id="ld-json-retire-portugal-2025"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <App />
    </>
  );
}
