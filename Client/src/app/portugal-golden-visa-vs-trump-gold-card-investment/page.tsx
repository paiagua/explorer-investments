import Head from 'next/head';
import App from '@/app/portugal-golden-visa-vs-trump-gold-card-investment/app';
import Script from 'next/script';

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Portugal’s Golden Visa Program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Portugal’s Golden Visa is a residency-by-investment program granting access to the EU through investments such as private equity funds. It includes benefits like Schengen travel, low stay requirements, and a path to citizenship in 5-6 years."
      }
    },
    {
      "@type": "Question",
      "name": "How does Portugal’s Golden Visa compare to the proposed Trump Gold Card?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While Trump’s $5M Gold Card is only a proposal, Portugal’s Golden Visa is active now and requires just €500K. It offers EU residency, minimal stay requirements, and a path to citizenship within 6 years."
      }
    },
    {
      "@type": "Question",
      "name": "Can Americans apply for Portugal’s Golden Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. U.S. citizens can invest €500,000 in a CMVM-regulated fund like Explorer to gain residency rights and eventually full EU citizenship."
      }
    },
    {
      "@type": "Question",
      "name": "Is fund investment a safe route for the Golden Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Investing through a regulated private equity fund like Explorer - Portugal’s largest PE fund with €1.8B AUM - is one of the most secure and transparent options available."
      }
    },
    {
      "@type": "Question",
      "name": "What benefits does the Portugal Golden Visa offer U.S. investors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Benefits include EU residency with just 7 days/year in Portugal, Schengen travel access, family inclusion, and the ability to gain citizenship after 6 years."
      }
    }
  ]
};

export const metadata = {
  title: "Portugal Golden Visa vs Trump Gold Card: The Smarter Path to EU Citizenship",
  description: "Compare Portugal's proven €500K Golden Visa program with the proposed $5M Trump Gold Card. Discover why Americans are choosing Portugal in 2025.",
  keywords: "Portugal Golden Visa, Trump Gold Card, EU Residency 2025, Citizenship by Investment, Golden Visa Fund, American Expats, Golden Visa for Americans",
  robots: "index, follow",
  openGraph: {
    title: "Portugal Golden Visa vs Trump Gold Card: The Smarter Path to EU Citizenship",
    description: "Discover why savvy U.S. investors are choosing Portugal's Golden Visa over the proposed Trump Gold Card - and how to get started today.",
    url: "https://goldenvisashub.com/portugal-golden-visa-vs-trump-gold-card-investment",
    type: "article",
    images: ["https://goldenvisashub.com/assets/images/blog/portugal-vs-trump-golden-visa.webp"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Why U.S. Investors Prefer Portugal’s €500K Golden Visa Over Trump’s $5M Gold Card",
    description: "Portugal offers real benefits - fast-track EU residency, low stay requirements, and proven investment returns. Learn how to apply today.",
    images: ["https://goldenvisashub.com/assets/images/blog/portugal-vs-trump-golden-visa.webp"]
  }
};

export default function PortugalVsTrumpGoldenVisaPage() {
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
        id="ld-json-faq-goldenvisa-trump"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <App />
    </>
  );
}
