import Head from 'next/head';
import App from '@/app/portugal-golden-visa-2025-best-eu-investment-route/app';
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
        "text": "Yes. Portugal's Golden Visa is active through fund, job creation, and donation routes."
      }
    },
    {
      "@type": "Question",
      "name": "How much do I need to invest in a fund for Golden Visa Portugal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A minimum of €500,000 in a CMVM-regulated investment fund like Explorer Investments."
      }
    },
    {
      "@type": "Question",
      "name": "Can I still get EU citizenship through Portugal’s Golden Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Citizenship is available after 5 years of legal residency, starting from application date."
      }
    },
    {
      "@type": "Question",
      "name": "Does Portugal require me to move permanently?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Just 7 days/year of physical presence in Portugal is required."
      }
    },
    {
      "@type": "Question",
      "name": "What is Explorer Investments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Explorer is Portugal’s top private equity fund manager with €1.8B AUM, offering institutional-grade Golden Visa investment opportunities."
      }
    },
    {
      "@type": "Question",
      "name": "Why is Portugal the best Golden Visa in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Portugal remains the only Western EU country with a fully active, fund-based Golden Visa route offering fast-track citizenship and strong returns."
      }
    }
  ]
};

export const metadata = {
  title: "Portugal Golden Visa 2025 | Best EU Residency Investment Route",
  description: "Get EU residency through Portugal’s active Golden Visa fund route. Invest €500K in Explorer’s top CMVM-regulated fund. No relocation. Full family coverage. Citizenship in 5 years.",
  keywords: "Portugal Golden Visa 2025, EU Residency by Investment, Fund Investment Portugal, Explorer Investments, Best Golden Visa Europe, Citizenship by Investment, CMVM Fund, Residency without Relocation",
  robots: "index, follow",
  openGraph: {
    title: "Portugal Golden Visa 2025 | Best EU Residency Investment Route",
    description: "Invest €500K in Portugal’s leading private equity fund and unlock fast-track EU residency. Family included. No relocation required. Secure your path to citizenship.",
    url: "https://www.explorerinvestments.com/portugal-golden-visa-2025-best-eu-investment-route",
    type: "website",
    images: ["https://goldenvisashub.com/portugal-2025-golden-visa.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Portugal Golden Visa 2025 | Best EU Residency Investment Route",
    description: "Secure EU residency and citizenship with a €500K investment in Explorer’s Golden Visa fund. Family included. Minimal stay required.",
    images: ["https://goldenvisashub.com/portugal-2025-golden-visa.jpg"]
  }
};

export default function PortugalGoldenVisa2025InvestmentRoutePage() {
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
        id="ld-json-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <App />
    </>
  );
}
