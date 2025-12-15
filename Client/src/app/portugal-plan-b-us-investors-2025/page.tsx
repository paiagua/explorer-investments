import Head from 'next/head'
import App from '@/app/portugal-plan-b-us-investors-2025/app'
import Script from 'next/script'

const canonicalUrl =
  'https://goldenvisashub.com/portugal-plan-b-us-investors-2025'

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
      "url": canonicalUrl,
      "name": "Portugal Golden Visa: A Plan B for Americans in 2025",
      "description": "Explore why more Americans are turning to Portugal’s Golden Visa as a global Plan B. Gain EU residency and citizenship via secure, regulated investment in 2025.",
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
        { "@type": "ListItem", "position": 2, "name": "Plan B for Americans (2025)", "item": canonicalUrl }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why are Americans applying for the Portugal Golden Visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Portugal Golden Visa offers Americans a secure Plan B with EU residency, minimal stay requirements, and a path to EU citizenship - all while maintaining U.S. ties."
          }
        },
        {
          "@type": "Question",
          "name": "Can I keep my U.S. citizenship if I get Portugal's Golden Visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Portugal Golden Visa allows dual residency and eventually dual citizenship, without affecting your U.S. nationality."
          }
        },
        {
          "@type": "Question",
          "name": "What is the minimum investment for Americans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The minimum is €500,000 in a CMVM-regulated investment fund. This path is secure, transparent, and tax-efficient."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to live full-time in Portugal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. You only need to spend 7 days per year in Portugal to maintain residency."
          }
        },
        {
          "@type": "Question",
          "name": "How long until I get EU citizenship?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can apply for Portuguese citizenship after 5 years of residency, with just 7 days/year required in-country."
          }
        }
      ]
    }
  ]
}

export const metadata = {
  title: "Portugal Golden Visa: A Plan B for Americans in 2025",
  description:
    "Explore why more Americans are turning to Portugal’s Golden Visa as a global Plan B. Gain EU residency and citizenship via secure, regulated investment in 2025.",
  keywords:
    "Portugal Golden Visa, Plan B for Americans, Portugal investment visa, Golden Visa for US citizens, EU residency 2025, second passport USA, Explorer Investments Portugal",
  robots: "index, follow",
  openGraph: {
    title: "Portugal Golden Visa: A Plan B for Americans in 2025",
    description:
      "Secure EU residency with Portugal's Golden Visa. A safe, strategic Plan B for U.S. investors seeking freedom, security, and global mobility in 2025.",
    url: canonicalUrl,
    type: "article",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Portugal Golden Visa for Americans | Secure Your Plan B in 2025",
    description:
      "Discover how the Portugal Golden Visa gives Americans a smart path to EU residency and citizenship - with just 7 days/year required.",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  }
}

export default function PlanBUSA2025Page() {
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
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <Script
        id="ld-json-planb-us-2025"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <App />
    </>
  )
}
