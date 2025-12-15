import Head from 'next/head';
import App from '@/app/portugal-golden-visa-2025-last-chance-for-americans/app';
import Script from 'next/script';

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is 2025 the last year for Americans to apply for the Portugal Golden Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2025 may be the final year to apply under current rules due to political and EU pressure. Apply now to be grandfathered."
      }
    },
    {
      "@type": "Question",
      "name": "Why is Portugal’s Golden Visa still a good option in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It offers EU residency with minimal stay, family inclusion, and a path to citizenship. Regulated fund investment remains the most compliant route."
      }
    },
    {
      "@type": "Question",
      "name": "What are the risks of waiting to apply?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rules may change, costs may rise due to dollar decline, and delays could void grandfathering protection."
      }
    },
    {
      "@type": "Question",
      "name": "How much do I need to invest?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "€500,000 in a CMVM-approved fund."
      }
    },
    {
      "@type": "Question",
      "name": "How can Explorer help?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Explorer guides U.S. investors with a compliant fund, legal onboarding, and full support to secure EU residency."
      }
    }
  ]
};

export const metadata = {
  title: "Portugal Golden Visa 2025 | Last Chance for Americans to Secure EU Residency",
  description: "Secure your EU residency before the rules change. 2025 could be the final chance for Americans to apply for Portugal’s Golden Visa under favorable terms.",
  keywords: "Portugal Golden Visa 2025, Golden Visa Last Chance, Americans EU Residency, Explorer Fund Investment, CMVM Regulated Fund, Golden Visa Changes 2025",
  robots: "index, follow",
  openGraph: {
    title: "Portugal Golden Visa 2025 | Last Chance for Americans to Secure EU Residency",
    description: "Act now: Rising EU pressure and U.S. volatility make 2025 a key deadline. Secure Golden Visa residency through Explorer’s fund pathway before reforms hit.",
    url: "https://goldenvisashub.com/portugal-golden-visa-2025-last-chance-for-americans",
    type: "article",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Golden Visa 2025: Why Americans Must Act Now",
    description: "Portugal’s fund-based Golden Visa is still open to Americans - but the window is closing. Apply today and get grandfathered under current rules.",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  }
};

export default function USGoldenVisaPage() {
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
        id="ld-json-faq-us"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <App />
    </>
  );
}
