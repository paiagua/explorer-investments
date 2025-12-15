import Head from 'next/head';
import App from '@/app/golden-visa-simulator/app';
import Script from 'next/script';

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Portugal Golden Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Portugal’s Golden Visa is a residency-by-investment program that grants non-EU investors (and eligible family members) the right to live, work, and study in Portugal, with Schengen mobility and a potential path to permanent residency or citizenship after five years."
      }
    },
    {
      "@type": "Question",
      "name": "What are the main investment options for the Golden Visa in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As of 2025, the most common qualifying route is a €500,000 subscription into an eligible CMVM-regulated investment fund. Other categories include contributions to scientific research, cultural heritage, and business/job creation. Traditional residential real estate routes have largely been phased out."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum investment for the fund route?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typically €500,000 into an eligible Portuguese fund that is regulated by the CMVM and structured to meet Golden Visa criteria. Always verify eligibility with licensed advisors and the fund manager."
      }
    },
    {
      "@type": "Question",
      "name": "What are the minimum stay requirements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stay requirements are light. Over five years, you typically average around seven days per year in Portugal, attending renewals and biometrics as required."
      }
    },
    {
      "@type": "Question",
      "name": "How long until I can apply for Portuguese citizenship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You may become eligible to apply for citizenship after maintaining legal residency for five years, subject to an A2 Portuguese language exam and standard legal checks."
      }
    },
    {
      "@type": "Question",
      "name": "Who is eligible for the Portugal Golden Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non-EU/EEA/Swiss citizens aged 18+ with a clean criminal record who make a qualifying investment from legitimate funds and meet due-diligence (KYC/AML) requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Can my family be included in the same application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Spouses, dependent children, and-in specific circumstances-dependent parents can be included if documentation and dependency criteria are met."
      }
    },
    {
      "@type": "Question",
      "name": "What documents are usually required?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common documents include passport, clean criminal record, proof of investment/subscription, Portuguese tax number (NIF), proof of health coverage, civil status/relationship documents for dependents, and translated/apostilled certificates where applicable."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the process take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timelines vary, but many investors complete subscription, file the application, and attend biometrics within several months. Processing and card issuance depend on caseload and region."
      }
    },
    {
      "@type": "Question",
      "name": "Is real estate still eligible for the Golden Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In general, traditional residential real estate purchases no longer qualify. Current applications favor fund subscriptions and other non-real-estate categories. Always confirm the latest rules before investing."
      }
    },
    {
      "@type": "Question",
      "name": "What fees should I expect besides the investment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Expect government application/issuance fees per person, biometrics/card costs, legal and translation costs, document issuance/apostilles, and applicable VAT on services. Use a cost simulator to estimate totals for your household."
      }
    },
    {
      "@type": "Question",
      "name": "Are fund investments guaranteed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. All investments carry risk, including manager and market risk, illiquidity, and regulatory changes. Review the fund’s strategy, fees, governance, auditor, custodian, and liquidity policy before subscribing."
      }
    },
    {
      "@type": "Question",
      "name": "Can I withdraw my investment early?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Early redemption is typically restricted by fund lock-ups and may jeopardize your Golden Visa status. Most investors plan to hold for at least five years."
      }
    },
    {
      "@type": "Question",
      "name": "Do Golden Visa holders have the right to work or study in Portugal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Golden Visa residency permits grant the right to live, work, and study in Portugal, plus visa-free travel within the Schengen Area."
      }
    },
    {
      "@type": "Question",
      "name": "Will I become a tax resident in Portugal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Residency by investment does not automatically confer tax residency. Tax residency generally depends on presence (e.g., 183+ days) and other criteria. Seek personalized tax advice regarding local rules and any preferential regimes."
      }
    },
    {
      "@type": "Question",
      "name": "What is the CMVM and why does it matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The CMVM is Portugal’s securities regulator. Funds regulated by CMVM follow oversight standards and typically appoint independent auditors and custodians-important safeguards for Golden Visa investors."
      }
    },
    {
      "@type": "Question",
      "name": "What costs are included in a typical legalization cost estimate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Government fees per applicant/dependent, biometrics and card issuance, translations, document procurement/apostilles, legal advisory, and a contingency buffer. VAT applies to service fees. Exact amounts vary by case."
      }
    },
    {
      "@type": "Question",
      "name": "How do fund fees affect my return (ROI)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Returns can be reduced by management fees, performance fees (carry), subscription/administration fees, and fund expenses. Use an ROI simulator to model MOIC and IRR across conservative, base, and ambitious scenarios."
      }
    },
    {
      "@type": "Question",
      "name": "Can U.S. citizens apply for the Portugal Golden Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. U.S. citizens apply like any other non-EU national. Many choose the fund route for diversification, governance, and streamlined eligibility."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if regulations change after I invest?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Programs evolve. Historically, transitional rules may protect in-process applications, but you should always confirm current law and keep your file and stay requirements fully compliant."
      }
    },
    {
      "@type": "Question",
      "name": "How do renewals work under the Golden Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Residence cards are renewed periodically (initially after one year and then typically every two years), provided the qualifying investment and minimum stay requirements are maintained."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a Portuguese bank account and NIF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most investors obtain a Portuguese tax number (NIF) and open a local bank account to complete the fund subscription and handle fees. Your advisor can coordinate this process."
      }
    },
    {
      "@type": "Question",
      "name": "Are translations and apostilles mandatory?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most foreign documents must be translated into Portuguese and legalized (apostille or consular legalization) to be accepted by the authorities. Your legal team will specify the format and validity."
      }
    },
    {
      "@type": "Question",
      "name": "Is this FAQ and the simulator legal or financial advice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. All content and simulators are informational and illustrative only. They do not constitute legal, tax, or investment advice. Always consult licensed professionals for personalized guidance."
      }
    }
  ]
};


export const metadata = {
  title: "Portugal Golden Visa 2025 - Complete Investor Guide, Costs & Fund Simulator",
  description:
    "Definitive 2025 guide to the Portugal Golden Visa. Discover eligibility, investment fund options (€500k+), updated rules after real estate removal, legalization costs, timelines, and simulators for ROI & fees. Updated for AIMA Portugal reforms.",
  keywords:
    "Portugal Golden Visa, Golden Visa Portugal 2025, Golden Visa simulator, Golden Visa calculator, Golden Visa fund investment, CMVM regulated funds, AIMA Portugal, Portugal residency by investment, Portugal citizenship by investment, Golden Visa requirements, Golden Visa application process, Golden Visa costs, Golden Visa ROI, permanent residency Portugal, EU citizenship by investment",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title:
      "Portugal Golden Visa 2025 - Full Guide, Fund Route & Cost Simulators",
    description:
      "Everything you need to know about Portugal’s Golden Visa in 2025: eligibility, €500k fund route, application steps, new regulations after real estate removal, and interactive cost & ROI simulators.",
    url: "https://goldenvisashub.com/golden-visa-simulator",
    type: "article",
    images: [
      "https://goldenvisashub.com/assets/images/social-share-simulator.webp",
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Portugal Golden Visa 2025 - Investor Guide & Fund Simulators 🇵🇹",
    description:
      "Free 2025 guide to the Portugal Golden Visa: fund route, costs, ROI, updated rules, and a full step-by-step process to EU residency and citizenship.",
    images: [
      "https://goldenvisashub.com/assets/images/social-share-simulator.webp",
    ],
  },
};


export default function USGoldenVisaPage() {
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
        id="ld-json-faq-us"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <App />
    </>
  );
}
