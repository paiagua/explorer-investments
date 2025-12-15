'use client';

import Head from 'next/head';
import Script from 'next/script';
import App from '@/app/how-to-get-a-golden-visa-portugal-2025/app';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "How to Get a Golden Visa in Portugal (2025 Guide)",
      "url": "https://goldenvisashub.com/how-to-get-a-golden-visa-portugal-2025",
      "description": "The ultimate 2025 guide to obtaining Portugal’s Golden Visa. Learn about new eligibility criteria, investment options, application steps, and common pitfalls.",
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
          "name": "What changed in Portugal’s Golden Visa after 2023?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Real estate and capital transfer routes were removed. Fund-based investment remains the preferred and compliant option in 2025."
          }
        },
        {
          "@type": "Question",
          "name": "What’s the minimum investment for a Golden Visa in 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "€500,000 in a regulated Portuguese investment fund."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to move to Portugal full-time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. You only need to stay in Portugal 7 days per year to maintain your residency."
          }
        },
        {
          "@type": "Question",
          "name": "Who can I include in my Golden Visa application?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your spouse, dependent children, and dependent parents are eligible."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get citizenship through the Golden Visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. After 5 years of maintaining residency and meeting requirements, you can apply for Portuguese citizenship."
          }
        }
      ]
    }
  ]
};

function MetaGoldenVisaHowTo() {
  return (
    <>
      <Head>
        <title>How to Get a Golden Visa in Portugal (2025 Guide)</title>
        <meta name="description" content="Explore how to obtain Portugal’s Golden Visa in 2025. Learn step-by-step how to qualify via fund investments, key legal changes, and what to avoid." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://goldenvisashub.com/how-to-get-a-golden-visa-portugal-2025" />
        <meta property="og:title" content="How to Get a Golden Visa Portugal 2025 | Full Guide" />
        <meta property="og:description" content="Step-by-step guide to securing your Portugal Golden Visa in 2025. Discover compliant investment routes, benefits, and common mistakes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goldenvisashub.com/how-to-get-a-golden-visa-portugal-2025" />
        <meta property="og:image" content="https://goldenvisashub.com/social-share.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Get Portugal’s Golden Visa in 2025 | Updated Guide" />
        <meta name="twitter:description" content="Everything you need to know about the 2025 Golden Visa: new rules, fund paths, step-by-step process, and expert insights." />
        <meta name="twitter:image" content="https://goldenvisashub.com/social-share.jpg" />
        <meta name="twitter:site" content="@ExplorerInvest" />
      </Head>
      <Script
        id="ld-json-how-to"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}

export default function GoldenVisaHowToPage() {
  return (
    <>
      <MetaGoldenVisaHowTo />
      <App />
    </>
  );
}