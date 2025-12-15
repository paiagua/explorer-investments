import Head from 'next/head';
import App from '@/app/avoid-expensive-golden-visa-mistakes-2025/app';
import Script from 'next/script';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the most secure way to get the Portugal Golden Visa in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Investing in CMVM-regulated private equity funds like those offered by Explorer Investments is the most compliant and secure route."
      }
    },
    {
      "@type": "Question",
      "name": "What mistakes should I avoid when applying for the Golden Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Avoid ineligible assets, unregulated advisors, ignoring tax impacts, incomplete documentation, and unverified funds."
      }
    },
    {
      "@type": "Question",
      "name": "Does Portugal still allow real estate for Golden Visa in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. As of 2025, residential real estate is no longer an eligible investment path."
      }
    },
    {
      "@type": "Question",
      "name": "How can Explorer help me avoid these mistakes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Explorer provides CMVM-regulated fund options, legal and tax onboarding, and full compliance guidance."
      }
    },
    {
      "@type": "Question",
      "name": "What’s the minimum investment for the Golden Visa fund route?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "€500,000 is the minimum investment required in a CMVM-approved fund."
      }
    }
  ]
};

export const metadata = {
  title: "Why Invest in Portugal in 2025 | Secure EU Residency with Explorer",
  description:
    "Avoid costly mistakes in 2025. Invest in CMVM-regulated funds through Explorer to secure Portugal’s Golden Visa. Family inclusion, full compliance, and 3x MOIC.",
  keywords:
    "Golden Visa Portugal 2025, Portugal Investment Fund, Explorer Investments, Residency by Investment, EU Visa Fund Path, Avoid Visa Mistakes, CMVM Fund, Secure Residency",
  robots: "index, follow",
  openGraph: {
    title: "Why Invest in Portugal in 2025 | Secure EU Residency with Explorer",
    description:
      "Portugal's Golden Visa no longer accepts real estate. Learn how to invest smarter with CMVM-regulated funds. Avoid 5 costly mistakes. Get full support from Explorer.",
    url: "https://goldenvisashub.com/avoid-expensive-golden-visa-mistakes-2025",
    type: "article",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Avoid Costly Golden Visa Mistakes in 2025 | Portugal Fund Strategy",
    description:
      "Explore the 5 biggest mistakes Golden Visa applicants make and how Explorer Investments helps avoid them. Secure your EU future with confidence in 2025.",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  }
};

export default function HomePage() {
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
