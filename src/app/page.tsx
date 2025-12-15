// src/app/page.tsx
import Script from "next/script";
import App from '@/app/app';
export const dynamic = 'error';   
export const revalidate = false;
export const metadata = {
  title: "Golden Visa Fund | EU Residency with Explorer",
  description:
    "Golden Visa Portugal via Explorer: €1.8B fund, EU residency with 7-day stay/year. Apply now for secure family relocation.",
  keywords:
    "Golden Visa Portugal, EU residency, private equity Portugal, Portugal investment fund, Explorer Investments, Golden Visa fund, secure residency Europe",
  robots: "index, follow",
  openGraph: {
    title: "Golden Visa Fund | Invest with Explorer and Get EU Residency",
    description:
      "Join Portugal’s top Golden Visa investment fund and secure EU residency for your family. Backed by Explorer Investments, €1.8B AUM, and full regulatory oversight.",
    url: "https://goldenvisashub.com/",
    type: "website",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Golden Visa Portugal | Secure Residency with a Trusted Fund",
    description:
      "Portugal's top Golden Visa fund. Transparent, secure, and regulated by CMVM. Trusted by global investors.",
    images: ["https://goldenvisashub.com/social-share.jpg"]
  }
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "Golden Visa Hub",
      "url": "https://goldenvisashub.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://goldenvisashub.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
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
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Investor Support",
        "email": "info@explorerinvestments.com",
        "url": "https://goldenvisashub.com"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Portugal Golden Visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Portugal Golden Visa allows non-EU citizens to obtain residency and access the Schengen Area by investing in a qualifying fund."
          }
        },
        {
          "@type": "Question",
          "name": "How do I qualify through fund investment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "By investing €500,000 in a regulated fund like Explorer Investments, which has over €1.8B in assets under management."
          }
        },
        {
          "@type": "Question",
          "name": "Do I have to live in Portugal full time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. You only need to spend 7 days per year in Portugal to keep your residency active."
          }
        },
        {
          "@type": "Question",
          "name": "Can I include my family?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Your spouse, children, and dependent parents can all be included under one application."
          }
        },
        {
          "@type": "Question",
          "name": "Is my investment secure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Explorer is regulated by CMVM, and you invest alongside large institutional investors with full transparency."
          }
        }
      ]
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <App />
    </>
  );
}
