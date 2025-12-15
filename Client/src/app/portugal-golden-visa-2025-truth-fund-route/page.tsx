import Head from 'next/head';
import App from '@/app/portugal-golden-visa-2025-truth-fund-route/app';
import Script from 'next/script';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is real estate still eligible for Portugal’s Golden Visa in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, most property routes were phased out for new applications. In 2025, the fund route-via CMVM-regulated investment funds-is a primary path to the Golden Visa."
      }
    },
    {
      "@type": "Question",
      "name": "How does the Golden Visa fund route work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Invest a minimum of €500,000 in a CMVM-regulated private equity or venture capital fund. After subscription and compliance checks, you submit your ARI application and maintain the investment for five years."
      }
    },
    {
      "@type": "Question",
      "name": "What are the stay requirements with the fund route?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The stay requirement is typically about 7 days per year, making the fund route suitable for internationally mobile investors."
      }
    },
    {
      "@type": "Question",
      "name": "Can my family be included under the fund route?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can include your spouse, dependent children, and dependent parents in a single Golden Visa application."
      }
    },
    {
      "@type": "Question",
      "name": "When can I apply for Portuguese citizenship through the fund route?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After maintaining residency for five years and meeting language and legal requirements, you can apply for citizenship."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose a CMVM-regulated fund instead of property?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Funds provide diversification, professional governance, and alignment with current Golden Visa rules-without the complexity of buying and managing property."
      }
    }
  ]
};

export const metadata = {
  title: "Portugal Golden Visa 2025: The Truth About the Fund Route (Not Real Estate)",
  description:
    "Real estate is out for new Golden Visa applications in most areas. Learn the facts about Portugal’s 2025 fund route: how it works, minimum €500K investment, family inclusion, timelines, risks and compliance.",
  keywords:
    "Portugal Golden Visa 2025, Golden Visa fund route, CMVM regulated fund Portugal, residency by investment Portugal, Explorer Investments, EU residency fund, Portuguese citizenship by investment",
  robots: "index, follow",
  openGraph: {
    title: "Portugal Golden Visa 2025: The Truth About the Fund Route (Not Real Estate)",
    description:
      "Understand the 2025 Golden Visa fund route-CMVM-regulated funds, €500K minimum, 7 days/year stay, family inclusion, and a clear path to residency and citizenship.",
    url: "https://goldenvisashub.com/portugal-golden-visa-2025-truth-fund-route",
    type: "article",
    images: [
      "https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-2025-truth-fund-route.webp"
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Portugal Golden Visa 2025 - The Truth About the Fund Route",
    description:
      "Property isn’t the path. Discover how CMVM-regulated funds power Portugal’s Golden Visa in 2025: €500K minimum, low stay, family inclusion, and compliance tips.",
    images: [
      "https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-2025-truth-fund-route.webp"
    ]
  }
};

export default function PortugalGoldenVisaFundRouteSEOPage() {
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
        id="ld-json-golden-visa-fund-route"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <App />
    </>
  );
}
