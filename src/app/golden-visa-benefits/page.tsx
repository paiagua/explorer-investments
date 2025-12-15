import Head from 'next/head'
import App from '@/app/golden-visa-benefits/app'
import Script from 'next/script'

const benefitsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Golden Visa Benefits",
      "url": "https://goldenvisashub.com/golden-visa-benefits",
      "description": "Gain EU residency in just 5 years - with minimal stay requirements, visa-free travel, and full family inclusion. Invest with Explorer, Portugal's largest private equity fund.",
      "publisher": {
        "@type": "Organization",
        "name": "Explorer Investments",
        "url": "https://goldenvisashub.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://goldenvisashub.com/social-share.jpg"
        }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the benefits of Portugal's Golden Visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Golden Visa provides EU residency, access to top healthcare and education, visa-free travel across Europe, and a fast-track to citizenship after 5 years."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to live in Portugal full-time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. You only need to stay 7 days per year in Portugal to maintain your residency."
          }
        },
        {
          "@type": "Question",
          "name": "Can my family benefit from the Golden Visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Spouses and dependent children can be included, granting them the same residency rights."
          }
        }
      ]
    }
  ]
}

export const metadata = {
  title: "Golden Visa Benefits | Secure EU Residency, Travel & Citizenship",
  description:
    "Explore all the benefits of Portugal’s Golden Visa - from fast-track citizenship and EU residency to visa-free travel, family inclusion, and access to world-class services.",
  keywords:
    "Golden Visa Portugal, EU residency, citizenship, visa-free travel, family inclusion, Explorer Investments, Portugal investment fund",
  robots: "index, follow",
  openGraph: {
    title: "Golden Visa Benefits | Secure EU Residency & More",
    description:
      "Portugal’s Golden Visa offers fast EU residency, citizenship, and travel across Europe. Backed by Explorer’s €1.8B fund.",
    url: "https://goldenvisashub.com/golden-visa-benefits",
    type: "website",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Golden Visa Benefits | Portugal Residency and Freedom",
    description:
      "Live, work, and travel in the EU. Invest €500K in a regulated fund and secure Portuguese residency for your family.",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  }
}

export default function GoldenVisaBenefitsPage() {
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

        {/* Canonical */}
        <link rel="canonical" href={metadata.openGraph.url} />
      </Head>

      <Script
        id="ld-json-benefits"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(benefitsSchema) }}
      />

      <App />
    </>
  )
}
