import Head from 'next/head'
import Script from 'next/script'
import App from '@/app/golden-visa-faq/app'

const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://goldenvisashub.com#organization",
      "name": "Explorer Investments",
      "url": "https://goldenvisashub.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://goldenvisashub.com/social-share.jpg"
      },
      "sameAs": [
        "https://www.linkedin.com/company/explorerinvestments",
        "https://twitter.com/ExplorerInvest"
      ]
    },
    {
      "@type": "WebPage",
      "name": "Golden Visa FAQ",
      "url": "https://goldenvisashub.com/golden-visa-faq",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Golden Visa Explorer Investments",
        "url": "https://goldenvisashub.com"
      },
      "about": { "@id": "https://goldenvisashub.com#organization" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://goldenvisashub.com/social-share.jpg"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://goldenvisashub.com/" },
        { "@type": "ListItem", "position": 2, "name": "FAQ",  "item": "https://goldenvisashub.com/golden-visa-faq" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I get the Golden Visa in Portugal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can obtain the Golden Visa by investing €500,000 in a qualified fund regulated by the CMVM. Explorer Investments offers a top-performing fund with institutional backing."
          }
        },
        {
          "@type": "Question",
          "name": "What is the minimum investment for Portugal’s Golden Visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The minimum fund investment for Golden Visa eligibility is €500,000."
          }
        },
        {
          "@type": "Question",
          "name": "Can I include my family in the Golden Visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Spouses, dependent children, and dependent parents can be included under one application."
          }
        },
        {
          "@type": "Question",
          "name": "What are the stay requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You must spend only 7 days per year in Portugal to maintain your Golden Visa residency."
          }
        },
        {
          "@type": "Question",
          "name": "Is Explorer Investments regulated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Explorer is fully regulated by the Portuguese Securities Market Commission (CMVM) and manages over €1.8B in assets."
          }
        }
      ]
    }
  ]
}

export const metadata = {
  title: "Golden Visa FAQ | Common Questions Answered",
  description:
    "Learn everything about Portugal’s Golden Visa - investment requirements, family inclusion, stay obligations, and fund regulation.",
  keywords:
    "Golden Visa Portugal, FAQ, investment minimum, CMVM fund, family residency, EU visa, Portugal residency, Explorer Investments",
  robots: "index, follow",
  openGraph: {
    title: "Golden Visa FAQ | Investment & Residency Explained",
    description:
      "Get answers to the most frequently asked questions about Portugal's Golden Visa, investment minimums, and eligibility.",
    url: "https://goldenvisashub.com/golden-visa-faq",
    type: "website",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Golden Visa FAQ | Portugal Residency by Investment",
    description:
      "Answers to key questions about Portugal’s Golden Visa. From €500,000 investment to including family and residency rules.",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  }
}

export default function GoldenVisaFaqPage() {
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
        id="ld-json-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <App />
    </>
  )
}
