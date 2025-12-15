import Head from 'next/head'
import App from '@/app/portugal-foreigners-law-2025-golden-visa-fund-route-explorer-investments/app'
import Script from 'next/script'

const canonicalUrl =
  'https://goldenvisashub.com/portugal-foreigners-law-2025-golden-visa-fund-route-explorer-investments'

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
        "url": "https://goldenvisashub.com/assets/images/og/portugal-golden-visa-2025-fund-route-explorer.webp"
      },
      "sameAs": [
        "https://www.linkedin.com/company/explorerinvestments",
        "https://twitter.com/ExplorerInvest"
      ]
    },
    {
      "@type": "WebPage",
      "url": canonicalUrl,
      "name": "Portugal Golden Visa 2025: Fund Route Guide - Explorer Investments",
      "description": "Guia prático da Foreigners Law 2025 e da rota do Golden Visa via fundos em Portugal. Elegibilidade, passos, prazos e como investir com a Explorer Investments.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Golden Visa Explorer Investments",
        "url": "https://goldenvisashub.com"
      },
      "about": { "@id": "https://goldenvisashub.com#organization" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://goldenvisashub.com/assets/images/og/portugal-golden-visa-2025-fund-route-explorer.webp"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://goldenvisashub.com/" },
        { "@type": "ListItem", "position": 2, "name": "Portugal Golden Visa 2025: Fund Route Guide", "item": canonicalUrl }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "O que é a rota via fundos do Golden Visa em Portugal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "É a modalidade que permite candidatar-se ao Golden Visa através de investimento em fundos regulados (por exemplo, private equity/venture capital regulados pela CMVM)."
          }
        },
        {
          "@type": "Question",
          "name": "Quais são os requisitos gerais em 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "De forma geral, exige-se investimento elegível em fundo regulado, manutenção do investimento por um período mínimo e cumprimento de critérios legais atualizados. Consulte sempre as condições em vigor antes de avançar."
          }
        },
        {
          "@type": "Question",
          "name": "Cidadãos dos EUA podem candidatar-se?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Americanos podem investir em fundos elegíveis e seguir o procedimento de residência, incluindo a possibilidade de incluir familiares, conforme a lei aplicável."
          }
        },
        {
          "@type": "Question",
          "name": "Quais os benefícios mais comuns do Golden Visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tipicamente incluem residência em Portugal, livre circulação Schengen, possibilidade de reagrupamento familiar e caminho para residência permanente/ cidadania mediante requisitos legais."
          }
        },
        {
          "@type": "Question",
          "name": "Porque considerar a Explorer Investments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A opção por um fundo gerido por uma casa com histórico e supervisão regulatória aumenta transparência, governança e acompanhamento profissional do investimento."
          }
        }
      ]
    }
  ]
}

export const metadata = {
  title: 'Portugal Golden Visa 2025: Fund Route Guide - Explorer Investments',
  description:
    'Guia prático da Foreigners Law 2025 e da rota do Golden Visa via fundos em Portugal. Elegibilidade, passos, prazos e como investir com a Explorer Investments.',
  keywords:
    'Portugal Golden Visa 2025, Foreigners Law 2025, Golden Visa Fund, Explorer Investments, Residency by Investment Portugal, EU Residency',
  robots: 'index, follow',
  openGraph: {
    title: 'Portugal Golden Visa 2025: Fund Route Guide - Explorer Investments',
    description:
      'Entenda a rota via fundos do Golden Visa em 2025, requisitos e próximos passos. Comece aqui com a Explorer Investments.',
    url: canonicalUrl,
    type: 'article',
    images: [
      'https://goldenvisashub.com/assets/images/og/portugal-golden-visa-2025-fund-route-explorer.webp'
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title:
      'Portugal Golden Visa 2025 - Fund Route Guide (Explorer Investments)',
    description:
      'Tudo o que precisa para avançar pela rota via fundos do Golden Visa em 2025. Veja requisitos, passos e como começar.',
    images: [
      'https://goldenvisashub.com/assets/images/og/portugal-golden-visa-2025-fund-route-explorer.webp'
    ]
  }
}

export default function PortugalGoldenVisaFundRoute2025Page() {
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
        id="ld-json-faq-goldenvisa-2025-fund-route"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <App />
    </>
  )
}
