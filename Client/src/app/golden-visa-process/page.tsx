// app/golden-visa-process/page.tsx

import Script from 'next/script';
import App from './app';

const CANONICAL =
  'https://goldenvisashub.com/golden-visa-process';

export const metadata = {
  title: 'Golden Visa Process | Step-by-Step Application Guide',
  description:
    'Understand the Golden Visa process in Portugal - from consultation to residency. Step-by-step guide by Explorer Investments.',
  keywords:
    'Golden Visa Portugal Process, Step-by-step Golden Visa, Portugal Residency by Investment, Explorer Investments, EU Residency Process',
  robots: 'index, follow',
  alternates: {
    canonical: CANONICAL, // <<-- ISTO GERA <link rel="canonical">
  },
  openGraph: {
    title: 'Golden Visa Application Process | Portugal Residency',
    description:
      'Discover the simple steps to secure your Portugal Golden Visa. Backed by Explorer Investments and regulated by the CMVM.',
    url: CANONICAL,
    type: 'website',
    images: ['https://goldenvisashub.com/social-share.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title: 'Golden Visa Process | Portugal Residency Step-by-Step',
    description:
      '5 clear steps to obtain your Portugal Golden Visa - with support from Explorer Investments, a €1.8B private equity firm.',
    images: ['https://goldenvisashub.com/social-share.jpg'],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'Golden Visa Application Process',
      url: CANONICAL,
      description:
        'Step-by-step breakdown of the Portugal Golden Visa process with Explorer Investments - regulated and backed by €1.8B in private equity.',
      publisher: {
        '@type': 'Organization',
        name: 'Explorer Investments',
        url: 'https://goldenvisashub.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://goldenvisashub.com/social-share.jpg',
        },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the steps to apply for the Golden Visa in Portugal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'The process includes 5 simple steps: Register, Email & Call, Presentation, Feedback, and Investment. Explorer handles everything from consultation to application.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does the Golden Visa process take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Most clients complete the process and receive pre-approval in just a few weeks. Final residency can be secured within months.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a minimum stay requirement in Portugal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes, only 7 days per year in Portugal are required to maintain your Golden Visa residency.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I include my family in the application?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes, the Golden Visa allows you to include your spouse and dependent children under the same visa.',
          },
        },
      ],
    },
  ],
};

export default function GoldenVisaProcessPage() {
  return (
    <>
      {/* NADA de <Head> aqui no App Router */}
      <Script
        id="ld-json-process"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <App />
    </>
  );
}
