import Head from 'next/head'
import App from '@/app/true-value-golden-visa-portugal-explorer/app'
import Script from 'next/script'

const schema = {
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
      "name": "True Value of Portugal’s Golden Visa for Families | Explorer Fund 2025",
      "url": "https://goldenvisashub.com/true-value-golden-visa-portugal-explorer",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Golden Visa Explorer Investments",
        "url": "https://goldenvisashub.com"
      },
      "about": { "@id": "https://goldenvisashub.com#organization" },
      "description": "Discover the real lifetime value of Portugal’s Golden Visa for families. Fund-based EU residency with Explorer Investments - returns, mobility & multigenerational benefits.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://goldenvisashub.com/social-share.jpg"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://goldenvisashub.com/" },
        { "@type": "ListItem", "position": 2, "name": "True Value of Portugal’s Golden Visa", "item": "https://goldenvisashub.com/true-value-golden-visa-portugal-explorer" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the real value of Portugal’s Golden Visa for families?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Golden Visa offers access to EU education, healthcare, and business mobility - often resulting in over €300,000 in lifetime benefits for families."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose the Explorer Fund for the Portugal Golden Visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Explorer is Portugal’s largest private equity fund, regulated by CMVM, offering diversified, professionally managed investments with high growth potential."
          }
        },
        {
          "@type": "Question",
          "name": "Can my family be included in the Golden Visa through a fund investment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Portuguese Golden Visa allows you to include your spouse and dependent children, securing residency and future citizenship rights for all."
          }
        }
      ]
    }
  ]
}

export const metadata = {
  title: "True Value of Portugal Golden Visa | Family Residency via Explorer Fund",
  description:
    "Explore the true lifetime value of Portugal’s Golden Visa for families. Learn how a fund-based investment with Explorer delivers EU residency and long-term returns.",
  keywords:
    "Portugal Golden Visa 2025, Golden Visa for Families, EU Residency Fund, Explorer Investments, CMVM Portugal, Golden Visa Returns, Fund Investment Portugal",
  robots: "index, follow",
  openGraph: {
    title: "Golden Visa Portugal 2025 | Maximize Value with Explorer Fund",
    description:
      "Get EU residency, education access, and long-term ROI with Portugal’s top private equity fund. Discover the value of a family-focused Golden Visa strategy.",
    url: "https://goldenvisashub.com/true-value-golden-visa-portugal-explorer",
    type: "article",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "True Value of Portugal Golden Visa | EU Residency for Families",
    description:
      "See how families are securing EU residency and long-term financial returns through Portugal’s Golden Visa with the Explorer Fund.",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  }
}

export default function TrueValueGoldenVisaPage() {
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
        id="ld-json-true-value"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <App />
    </>
  )
}
