// terms
import Head from 'next/head';
import App from '@/app/terms/app';
import Script from 'next/script';

const termsSchema = {
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
          "email": "ab@explorerinvestments.com",
          "url": "https://goldenvisashub.com"
        }
      ]
    },
    {
      "@type": "WebPage",
      "name": "Terms and Conditions",
      "url": "https://goldenvisashub.com/terms",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Golden Visa Explorer Investments",
        "url": "https://goldenvisashub.com"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://goldenvisashub.com/social-share.jpg"
      },
      "about": {
        "@id": "https://goldenvisashub.com#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://goldenvisashub.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Terms and Conditions",
          "item": "https://goldenvisashub.com/terms"
        }
      ]
    }
  ]
};

export const metadata = {
  title: "Terms and Conditions | Explorer Investments",
  description:
    "Read the Terms and Conditions for using Golden Visa Explorer Investments and Explorer Investments’ online services, including user obligations, limitations of liability, and legal notices.",
  keywords:
    "Terms and Conditions, Explorer Investments Terms, Legal, Website Terms, Golden Visa Explorer Investments",
  robots: "index, follow",
  openGraph: {
    title: "Terms and Conditions | Explorer Investments",
    description:
      "Official Terms and Conditions governing the use of Golden Visa Explorer Investments and Explorer Investments’ online services.",
    url: "https://goldenvisashub.com/terms",
    type: "website",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Terms and Conditions | Explorer Investments",
    description:
      "Read the official Terms and Conditions for Golden Visa Explorer Investments by Explorer Investments.",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  }
};

export default function TermsAndConditionsPage() {
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
        id="ld-json-terms"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />

 
      <App />
    </>
  );
}
