import Head from 'next/head';
import App from '@/app/why-celebrities-are-moving-to-portugal/app';
import Script from 'next/script';

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why are so many celebrities moving to Portugal in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Celebrities are drawn by Portugal’s safety, lifestyle, tax-friendly environment, and Golden Visa benefits - allowing them to secure EU residency without relocation."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Portugal Golden Visa still available in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, through investment in regulated private equity funds like Explorer. Real estate is no longer eligible."
      }
    },
    {
      "@type": "Question",
      "name": "Can Americans qualify for Portugal’s Golden Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Americans can invest €500,000 in a CMVM-approved fund and gain residency with minimal physical presence in Portugal."
      }
    },
    {
      "@type": "Question",
      "name": "Which celebrities live in Portugal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nicole Kidman, Scarlett Johansson, Madonna, Monica Bellucci, and George Clooney are among several international figures with properties or residency in Portugal."
      }
    },
    {
      "@type": "Question",
      "name": "What is the safest way to apply for the Golden Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Investing in a CMVM-regulated private equity fund with full onboarding and legal support from a trusted partner like Explorer Investments."
      }
    }
  ]
};

export const metadata = {
  title: "Why Celebrities Are Moving to Portugal | Golden Visa Attraction in 2025",
  description: "From Nicole Kidman to George Clooney, discover why global celebrities are choosing Portugal in 2025 - and how you can follow their path with the Golden Visa.",
  keywords: "Portugal Golden Visa, Celebrities in Portugal, Nicole Kidman Portugal, EU Residency 2025, Golden Visa Fund Investment, Portugal Lifestyle, American Expats",
  robots: "index, follow",
  openGraph: {
    title: "Why Celebrities Are Moving to Portugal | Golden Visa Attraction in 2025",
    description: "Portugal is attracting international stars with its safety, lifestyle, and residency benefits. Learn how you can get the Golden Visa through Explorer’s regulated fund.",
    url: "https://goldenvisashub.com/why-celebrities-are-moving-to-portugal",
    type: "article",
    images: ["https://goldenvisashub.com/assets/images/blog/celebrity-golden-visa-portugal.webp"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Why Global Celebrities Are Moving to Portugal in 2025",
    description: "Portugal is becoming the home of stars like Nicole Kidman and George Clooney. Discover the lifestyle and Golden Visa that’s attracting the elite.",
    images: ["https://goldenvisashub.com/assets/images/blog/celebrity-golden-visa-portugal.webp"]
  }
};

export default function CelebrityGoldenVisaPage() {
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
        id="ld-json-faq-celeb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <App />
    </>
  );
}
