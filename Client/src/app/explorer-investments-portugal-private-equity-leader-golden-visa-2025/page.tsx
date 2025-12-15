import Head from 'next/head';
import App from '@/app/explorer-investments-portugal-private-equity-leader-golden-visa-2025/app';
import Script from 'next/script';

// ===================================================================
// NOVO FAQ SCHEMA (Específico para o artigo da Explorer)
// ===================================================================
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the minimum investment for the Explorer Golden Visa fund?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The minimum investment for the ARI / Golden Visa eligible fund is €500,000, as required by the program legislation."
      }
    },
    {
      "@type": "Question",
      "name": "Can I invest in Explorer if I do not need the Golden Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Explorer offers other institutional-grade private equity solutions for investors focused purely on capital growth, with minimums often starting at €250,000."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Explorer's Private Equity and Venture Capital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Venture Capital (VC) invests in speculative startups. Explorer (PE) invests in solid, mature, and profitable businesses. Explorer gets actively involved-taking board seats and working with CEOs-to make these solid companies better, which is a fundamentally more fundamentals-based approach."
      }
    },
    {
      "@type": "Question",
      "name": "What is Explorer Investments' track record?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Explorer Investments is Portugal's largest and most experienced independent private equity platform, with over 20 years of operations and approximately €1.8 Billion in assets under management."
      }
    }
  ]
};

// ===================================================================
// NOVO METADATA (Específico para o artigo da Explorer)
// ===================================================================
export const metadata = {
  title: "Explorer Investments: 20-Year PE Leader | Golden Visa (€500k) & Growth Funds",
  description: "Invest with Portugal's #1 Private Equity firm. Explorer Investments offers a 20-year track record and hands-on solutions for Golden Visa (€500k) and growth investors (from €250k).",
  keywords: "Explorer Investments, Private Equity Portugal, Best PE fund Portugal, Portugal Golden Visa funds, Invest in Portugal €250k, €500k investment fund, Explorer Investments track record, CMVM regulated funds, Portuguese private equity",
  robots: "index, follow",
  openGraph: {
    title: "Explorer Investments: Portugal's 20-Year Private Equity Leader",
    description: "Why choose Explorer? A 20-year track record, €1.8B AUM, and a hands-on PE model for solid growth. Solutions for Golden Visa (€500k) and non-GV investors.",
    // A URL canónica deve ser a do novo artigo
    url: "https://goldenvisashub.com/explorer-investments-portugal-private-equity-leader-golden-visa-2025",
    type: "article",
     // Sugiro usar uma imagem específica para este artigo
    images: ["https://goldenvisashub.com/assets/images/blog/explorer-investments-portugal-private-equity-leader-golden-visa-2025.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Explorer Investments: Portugal's 20-Year Private Equity Leader",
    description: "Why Explorer? A 20-year track record, €1.8B AUM, and a hands-on PE model for solid growth. Solutions for Golden Visa (€500k) and non-GV investors.",
     // Sugiro usar uma imagem específica para este artigo
    images: ["https://goldenvisashub.com/assets/images/blog/explorer-investments-pe-leader.webp"]
  }
};

// ===================================================================
// ESTRUTURA ORIGINAL MANTIDA
// ===================================================================
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
        id="ld-json-explorer-leader" // Mudei o ID do script para evitar duplicados
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <App />
    </>
  );
}