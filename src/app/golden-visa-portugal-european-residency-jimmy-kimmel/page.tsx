import Head from 'next/head';
import App from '@/app/golden-visa-portugal-european-residency-jimmy-kimmel/app';
import Script from 'next/script';

const siteUrl = "https://goldenvisashub.com";
const slug = "golden-visa-portugal-european-residency-jimmy-kimmel";
const pageUrl = `${siteUrl}/${slug}`;
const shareImage = `${siteUrl}/social-share.jpg`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why did Jimmy Kimmel get Italian dual citizenship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jimmy Kimmel obtained Italian citizenship through his grandmother’s lineage. While he used ancestry rights, most Americans do not qualify this way and need alternative routes such as residency-by-investment programs."
      }
    },
    {
      "@type": "Question",
      "name": "How does Jimmy Kimmel’s case relate to Portugal’s Golden Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kimmel’s story highlights the growing interest in European residency. Unlike ancestry, Portugal’s Golden Visa allows anyone to obtain legal residency - and later citizenship - through a regulated investment, making Europe accessible without family ties."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Portugal Golden Visa program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is a residency-by-investment program. By investing €500,000 in CMVM-regulated investment funds, applicants and their families can gain Portuguese residency with a pathway to citizenship after 5-6 years."
      }
    },
    {
      "@type": "Question",
      "name": "Can I include my family in the Golden Visa application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The program covers the main applicant, spouse, dependent children, and in some cases dependent parents."
      }
    },
    {
      "@type": "Question",
      "name": "How much time do I need to spend in Portugal to maintain residency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program requires only an average of 7 days per year spent in Portugal to keep residency status valid."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Jimmy Kimmel’s Dual Citizenship Highlights the Importance of Portugal’s Golden Visa",
  "description": "Jimmy Kimmel revealed his Italian dual citizenship, sparking global conversations about second passports. For those without ancestry, Portugal’s Golden Visa offers a legal, strategic path to EU residency and citizenship.",
  "image": shareImage,
  "author": {
    "@type": "Organization",
    "name": "Golden Visa Explorer Investments"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Golden Visa Explorer Investments",
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/logo.png`
    }
  },
  "url": pageUrl,
  "datePublished": "2025-09-18",
  "dateModified": "2025-09-18"
};

export const metadata = {
  title: "Jimmy Kimmel’s Dual Citizenship | Why Portugal’s Golden Visa Matters",
  description: "Jimmy Kimmel got Italian citizenship by ancestry - but most Americans can’t. Portugal’s Golden Visa is the leading legal path to EU residency and citizenship without family roots.",
  keywords: "Jimmy Kimmel Italian Citizenship, Dual Citizenship Europe, Portugal Golden Visa 2025, Residency by Investment, American Expats Europe, EU Citizenship Path, Portuguese Golden Visa",
  robots: "index, follow",
  openGraph: {
    title: "Jimmy Kimmel’s Dual Citizenship | Why Portugal’s Golden Visa Matters",
    description: "For those without ancestry, Portugal’s Golden Visa is the smart, legal route to EU residency and citizenship. Accessible, family-friendly, and future-proof.",
    url: pageUrl,
    type: "article",
    images: [shareImage]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Jimmy Kimmel’s Dual Citizenship | Why Portugal’s Golden Visa Matters",
    description: "Jimmy Kimmel’s Italian passport sparked headlines. Most Americans need Portugal’s Golden Visa to secure EU residency. Learn how it works.",
    images: [shareImage]
  }
};

export default function JimmyKimmelGoldenVisaPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <link rel="canonical" href={metadata.openGraph.url} />
      </Head>
      <Script
        id="ld-json-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="ld-json-article"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <App />
    </>
  );
}
