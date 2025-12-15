import Head from 'next/head'
import App from '@/app/about-explorer-investments/app'
import Script from 'next/script'

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Explorer Investments",
      "url": "https://goldenvisashub.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://goldenvisashub.com/social-share.jpg"
      },
      "sameAs": [
        "https://www.linkedin.com/company/explorerinvestments",
        "https://twitter.com/ExplorerInvest"
      ],
      "description":
        "Explorer Investments is Portugal’s largest private equity firm, managing €1.8B in assets with over 20 years of experience. The firm is regulated by CMVM and offers Golden Visa investment access with institutional-grade transparency.",
      "foundingDate": "2005",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lisbon",
        "addressCountry": "PT"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "Investor Relations",
          "name": "André Bandeira",
          "email": "ab@explorerinvestments.com",
          "url": "https://goldenvisashub.com"
        },
        {
          "@type": "ContactPoint",
          "contactType": "Investor Relations",
          "name": "Maria Campos Silva",
          "email": "mcs@explorerinvestments.com",
          "url": "https://goldenvisashub.com"
        }
      ]
    },
    {
      "@type": "WebPage",
      "name": "About Explorer Investments",
      "url": "https://goldenvisashub.com/about-explorer-investments",
      "description": "Learn about Explorer Investments - Portugal’s leading CMVM-regulated private equity firm with €1.8B AUM.",
      "publisher": {
        "@type": "Organization",
        "name": "Explorer Investments",
        "url": "https://goldenvisashub.com"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Explorer Investments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Explorer Investments is Portugal’s leading private equity firm with €1.8B in assets under management and over 20 years of experience."
          }
        },
        {
          "@type": "Question",
          "name": "Is Explorer regulated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Explorer is fully regulated by the CMVM - Portugal’s Securities Market Commission - ensuring security and transparency."
          }
        },
        {
          "@type": "Question",
          "name": "Who leads the Investor Relations team?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our dedicated Investor Relations team includes André Bandeira and Maria Campos Silva - experienced professionals offering full support to international clients."
          }
        },
        {
          "@type": "Question",
          "name": "Can I co-invest with institutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Explorer offers Golden Visa investors the rare opportunity to co-invest alongside major institutional investors in a regulated fund."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose Explorer for the Golden Visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Explorer combines 20+ years of experience, a proven investment strategy, transparency, and investor-focused service - making it the #1 choice for Golden Visa investors in Portugal."
          }
        }
      ]
    }
  ]
}

export const metadata = {
  title: "About Explorer Investments | Portugal's #1 Golden Visa Fund",
  description:
    "Discover Explorer Investments - Portugal’s leading CMVM-regulated private equity firm with €1.8B AUM. Backing Golden Visa investors with 20+ years of performance.",
  keywords:
    "Explorer Investments, About Explorer, Portugal Private Equity, CMVM Fund, Golden Visa Portugal, Investment Fund, Institutional Fund, Residency Investment",
  robots: "index, follow",
  openGraph: {
    title: "About Explorer Investments | Portugal's #1 Golden Visa Fund",
    description:
      "Learn about Explorer Investments - Portugal’s most trusted fund for Golden Visa investors with full transparency, regulation, and support.",
    url: "https://goldenvisashub.com/about-explorer-investments",
    type: "website",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "About Explorer Investments | Portugal's Top Fund",
    description:
      "Explorer Investments - €1.8B AUM, CMVM-regulated fund supporting global Golden Visa investors with trusted private equity experience.",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  }
}

export default function AboutExplorerPage() {
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
        id="ld-json-about"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <App />
    </>
  )
}
