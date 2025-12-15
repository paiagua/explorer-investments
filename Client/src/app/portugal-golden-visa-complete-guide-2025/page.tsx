import Head from 'next/head'
import App from '@/app/portugal-golden-visa-complete-guide-2025/app'
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
        "url": "https://goldenvisashub.com/social-share-guide.jpg"
      },
      "sameAs": [
        "https://www.linkedin.com/company/explorerinvestments",
        "https://twitter.com/ExplorerInvest"
      ]
    },
    {
      "@type": "WebPage",
      "name": "Portugal Golden Visa: The Complete Guide for Investors (2025)",
      "url": "https://goldenvisashub.com/portugal-golden-visa-complete-guide-2025",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Golden Visa Explorer Investments",
        "url": "https://goldenvisashub.com"
      },
      "about": { "@id": "https://goldenvisashub.com#organization" },
      "description": "Your ultimate 2025 guide to the Portugal Golden Visa. Learn about eligibility, investment options (funds from €500k), the step-by-step application process, and the timeline to EU citizenship.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://goldenvisashub.com/social-share-guide.jpg"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://goldenvisashub.com/" },
        { "@type": "ListItem", "position": 2, "name": "Portugal Golden Visa: Complete Guide (2025)", "item": "https://goldenvisashub.com/portugal-golden-visa-complete-guide-2025" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Portugal Golden Visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Portugal Golden Visa is a residency-by-investment program that grants non-EU investors and their families legal residency in Portugal. After five years, it provides a clear pathway to permanent residency or EU citizenship."
          }
        },
        {
          "@type": "Question",
          "name": "What are the main investment options for the Golden Visa in 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As of 2025, qualifying routes include: a €500,000 investment in regulated private equity or venture capital funds; a €250,000 donation to cultural heritage; a €500,000 donation to scientific research; or business-related job creation. Direct real estate investment is no longer eligible."
          }
        },
        {
          "@type": "Question",
          "name": "What are the minimum stay requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You must be in Portugal 14 days during the first two years, and 21 days during the subsequent three years (average of 7 days per year)."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to get Portuguese citizenship with the Golden Visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You may apply after five years of legal residency, with an A2 level Portuguese language certificate and a clean criminal record."
          }
        },
        {
          "@type": "Question",
          "name": "Who is eligible for the Portugal Golden Visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Any non-EU/EEA/Swiss citizen over 18, with a clean criminal record and qualifying investment from a legitimate source, may apply."
          }
        }
      ]
    }
  ]
}

// Metadata otimizado e consistente (fundos €500k)
export const metadata = {
  title: "Portugal Golden Visa: The Complete Guide for Investors (2025)",
  description:
    "Your ultimate 2025 guide to the Portugal Golden Visa. Learn about eligibility, investment options (funds from €500k), the step-by-step application process, and the timeline to EU citizenship.",
  keywords:
    "Portugal Golden Visa, Golden Visa guide, residency by investment Portugal, how to apply for Golden Visa, Portugal investment visa, EU citizenship by investment, Golden Visa investment funds, AIMA Portugal, Golden Visa requirements 2025",
  robots: "index, follow",
  openGraph: {
    title: "Portugal Golden Visa: A Complete Guide to EU Residency & Citizenship in 2025",
    description:
      "Everything you need to know about Portugal's Golden Visa. Explore investment options, eligibility, and the full application process to secure your family's future in Europe.",
    url: "https://goldenvisashub.com/portugal-golden-visa-complete-guide-2025",
    type: "article",
    images: ["https://goldenvisashub.com/social-share-guide.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Your Ultimate Portugal Golden Visa Guide for 2025 🇵🇹",
    description:
      "Thinking about EU residency? Our complete guide covers all investment routes, requirements, and the step-by-step process for Portugal's Golden Visa.",
    images: ["https://goldenvisashub.com/social-share-guide.jpg"]
  }
}

export default function GoldenVisaCompleteGuidePage() {
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
        id="ld-json-guide"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <App />
    </>
  )
}
