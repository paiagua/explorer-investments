import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';
import {
  ShieldCheck,
  TrendingUp,
  Landmark,
  FileCheck2,
  BookOpen,
  ChevronRight,
  LineChart,
  CheckCircle2,
  HelpCircle,
  Building2,
  Users,
  Clock,
} from 'lucide-react';

export const revalidate = 600;
export const fetchCache = 'force-cache';

const SLUG = 'portugal-golden-visa-fund-route-us-investors';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-fund-route.jpg';
const PUBLISHED = '2025-11-06T09:00:00+00:00';

export const metadata = {
  title: 'Portugal Golden Visa Fund Route for U.S. Investors (2025 Guide) — €500k CMVM-Regulated Option',
  description:
    'Definitive guide for U.S. investors: €500k Portugal Golden Visa via CMVM-regulated funds. Timeline, eligibility, costs, U.S. tax notes (FATCA/PFIC), risks, and conversion-focused FAQs.',
  openGraph: {
    title: 'Portugal Golden Visa Fund Route — U.S. Investors (2025)',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full border border-[#B4A77E]/40 bg-[#FFF9EB] text-[#213D4B]">
    <CheckCircle2 size={12} /> {children}
  </span>
);

export default function GoldenVisaFundRoutePillar() {
  return (
    <>
      {/* Article + FAQ Schema */}
      <Script
        id="schema-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: metadata.title,
            description: metadata.description,
            datePublished: PUBLISHED,
            dateModified: PUBLISHED,
            mainEntityOfPage: CANONICAL_URL,
            image: OG_IMAGE,
            author: {
              '@type': 'Person',
              name: 'André Bandeira, CFA',
              url: 'https://www.linkedin.com/in/andre-bandeira-cfa-7a7258b/?originalSubdomain=pt',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Explorer Investments',
            },
          }),
        }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is the minimum investment for Portugal Golden Visa fund route?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '€500,000 into a CMVM-regulated fund that meets the ARI/GV requirements.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long until citizenship in Portugal?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Traditionally after 5 years of legal residency. Amendments discussed in 2025 may impact timelines; always confirm current rules before applying.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can U.S. investors use IRAs or 401(k) rollovers?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'In certain cases via self-directed IRA structures. Professional advice is essential to avoid triggering taxes or penalties.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is real estate still eligible for Golden Visa?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. The property route has been removed; the fund route is now the primary investment pathway.',
                },
              },
            ],
          }),
        }}
      />

      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Title / Hero */}
          <header className="space-y-2">
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-1 flex items-center gap-2">
              <Landmark size={16} /> Residency & Investment
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Portugal Golden Visa Fund Route for U.S. Investors (2025 Guide)
            </h1>
            <p className="text-[#15364A] text-lg font-light">
              The definitive guide to the €500k CMVM-regulated fund route — eligibility, timeline, costs, U.S. tax notes (FATCA/PFIC), risks, and how to move from research to residency.
            </p>
            <p className="text-xs text-[#5A6F7B]">By <Link className="underline" href="https://www.linkedin.com/in/andre-bandeira-cfa-7a7258b/?originalSubdomain=pt" target="_blank">André Bandeira, CFA</Link> • Updated 2025</p>
          </header>

          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image src={OG_IMAGE} alt="Portugal Golden Visa fund route — CMVM regulated funds" fill className="object-cover" />
          </figure>

          {/* TOC */}
          <nav className="rounded-xl border border-gray-200 bg-white shadow-sm p-4">
            <div className="text-[12px] uppercase text-[#5A6F7B] font-semibold mb-2 flex items-center gap-2">
              <BookOpen size={14} /> Contents
            </div>
            <ul className="text-sm grid sm:grid-cols-2 gap-y-2">
              <li><a className="flex items-center gap-1 hover:underline" href="#what"> <ChevronRight size={14}/> What is the fund route?</a></li>
              <li><a className="flex items-center gap-1 hover:underline" href="#why-us"> <ChevronRight size={14}/> Why U.S. investors choose funds</a></li>
              <li><a className="flex items-center gap-1 hover:underline" href="#eligibility"> <ChevronRight size={14}/> Eligibility & family</a></li>
              <li><a className="flex items-center gap-1 hover:underline" href="#requirements"> <ChevronRight size={14}/> CMVM fund requirements</a></li>
              <li><a className="flex items-center gap-1 hover:underline" href="#timeline"> <ChevronRight size={14}/> Timeline (year 0-5)</a></li>
              <li><a className="flex items-center gap-1 hover:underline" href="#ustax"> <ChevronRight size={14}/> U.S. tax notes</a></li>
              <li><a className="flex items-center gap-1 hover:underline" href="#risks"> <ChevronRight size={14}/> Risks & governance</a></li>
              <li><a className="flex items-center gap-1 hover:underline" href="#costs"> <ChevronRight size={14}/> Costs & estimates</a></li>
              <li><a className="flex items-center gap-1 hover:underline" href="#faq"> <ChevronRight size={14}/> FAQ</a></li>
            </ul>
          </nav>

          {/* 1. What */}
          <section id="what" className="space-y-3">
            <h2 className="text-2xl font-bold flex items-center gap-2"><ShieldCheck /> What is the Portugal Golden Visa fund route?</h2>
            <p className="text-[#15364A]">
              The Golden Visa (ARI) grants residency to non-EU nationals investing <strong>€500,000</strong> in a qualifying <strong>CMVM-regulated</strong> private equity or venture capital fund that meets the legal criteria for the program.
            </p>
            <div className="flex flex-wrap gap-2">
              <Pill>Schengen mobility</Pill>
              <Pill>~7 days/year presence</Pill>
              <Pill>Pathway to PR/Citizenship</Pill>
              <Pill>Family included</Pill>
            </div>
            <p className="text-sm text-[#5A6F7B]">
              Data & context: <Link className="underline" href="/portugal-golden-visa-statistics-2012-2023-historical-top10">Portugal Golden Visa — Data & Statistics (2012-2023)</Link>.
            </p>
          </section>

          {/* 2. Why U.S. */}
          <section id="why-us" className="space-y-3">
            <h2 className="text-2xl font-bold flex items-center gap-2"><TrendingUp /> Why U.S. investors choose funds</h2>
            <ul className="list-disc pl-6 text-[#15364A] space-y-1">
              <li>Real estate path closed — funds are now the primary route.</li>
              <li>Professional oversight and audited reporting under CMVM.</li>
              <li>Diversified exposure vs. single-asset property risk.</li>
              <li>Cleaner accounting and exit mechanics.</li>
              <li>Alignment with long-term residency goals.</li>
            </ul>
            <p className="text-sm text-[#0A4F3C]">
              Related reading: <Link className="underline" href="/american-leaves-us-healthcare-finds-new-life-in-portugal">Health & wellbeing case study (American in Portugal)</Link>.
            </p>
          </section>

          {/* 3. Eligibility */}
          <section id="eligibility" className="space-y-3">
            <h2 className="text-2xl font-bold flex items-center gap-2"><FileCheck2 /> Eligibility & family members</h2>
            <ul className="list-disc pl-6 text-[#15364A] space-y-1">
              <li>Non-EU/EEA/Swiss nationals.</li>
              <li>Clean criminal record and source-of-funds/wealth documentation.</li>
              <li>Family aggregation: spouse/partner, dependent children, and—subject to proof—dependent parents.</li>
              <li>~7 days per year physical presence requirement.</li>
            </ul>
          </section>

          {/* 4. CMVM Requirements */}
          <section id="requirements" className="space-y-3">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Building2 /> Golden Visa fund requirements (CMVM)</h2>
            <ul className="list-disc pl-6 text-[#15364A] space-y-1">
              <li>Registered and supervised by <strong>CMVM</strong>.</li>
              <li>Defined strategy with Portuguese economic exposure (commonly &gt;60% in PT companies).</li>
              <li>Appropriate maturity (≥5 years) and compliant offering docs.</li>
              <li>Independent depositary / auditor; periodic reporting.</li>
              <li>No guaranteed returns; risks disclosed and monitored.</li>
            </ul>
            <p className="text-sm text-[#5A6F7B]">
              Learn more: <Link className="underline" href="/secure-steps-portugal-golden-visa-funds-explorer-investments">How CMVM-regulated funds safeguard investor goals</Link>.
            </p>
          </section>

          {/* 5. Timeline */}
          <section id="timeline" className="space-y-3">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Clock /> Timeline — from investment to citizenship</h2>
            <ol className="list-decimal pl-6 text-[#15364A] space-y-1">
              <li>Pre-check: KYC/AML, fund selection, subscription docs.</li>
              <li>Investment: €500k into a qualifying fund (proof issued).</li>
              <li>Application & biometrics with AIMA.</li>
              <li>Initial 2-year residency; two renewals across ~5 years.</li>
              <li>Eligibility for PR/citizenship (verify current rules before filing).</li>
            </ol>
            <p className="text-sm text-[#5A6F7B]">Note: Processing times evolve as AIMA digitizes workflows.</p>
          </section>

          {/* 6. U.S. Tax */}
          <section id="ustax" className="space-y-3">
            <h2 className="text-2xl font-bold flex items-center gap-2"><LineChart /> U.S. tax notes (FATCA, PFIC, IRA)</h2>
            <ul className="list-disc pl-6 text-[#15364A] space-y-1">
              <li><strong>FATCA reporting</strong> and foreign account disclosures may apply.</li>
              <li><strong>PFIC</strong> rules can impact fund taxation; seek specialist advice.</li>
              <li><strong>Self-Directed IRA</strong> usage may be possible with careful structuring; avoid prohibited transactions.</li>
              <li>Coordinate with U.S./PT tax counsel to optimize timing and reporting.</li>
            </ul>
          </section>

          {/* 7. Risks */}
          <section id="risks" className="space-y-3">
            <h2 className="text-2xl font-bold flex items-center gap-2"><ShieldCheck /> Risks & governance — what to check</h2>
            <ul className="list-disc pl-6 text-[#15364A] space-y-1">
              <li>Strategy concentration and sector risk.</li>
              <li>Manager track record and governance.</li>
              <li>Liquidity & redemption gates timing.</li>
              <li>Fees and performance alignment.</li>
              <li>Regulatory and policy updates.</li>
            </ul>
          </section>

          {/* 8. Costs */}
          <section id="costs" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Users /> Costs & working estimates</h2>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-[#FFFCF3]">
                  <tr>
                    <th className="text-left p-3">Cost Type</th>
                    <th className="text-left p-3">Estimate</th>
                    <th className="text-left p-3">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">Fund Subscription</td>
                    <td className="p-3">€500,000</td>
                    <td className="p-3">Minimum required for eligibility</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Legal Fees</td>
                    <td className="p-3">€5,000-€10,000</td>
                    <td className="p-3">Depends on family size & complexity</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Application Fees (AIMA)</td>
                    <td className="p-3">~€533 per person</td>
                    <td className="p-3">As published by AIMA</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Residency Permits</td>
                    <td className="p-3">~€5,325 per person</td>
                    <td className="p-3">Initial issuance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-[#FFF9EB] border border-[#B4A77E]/40 p-5 rounded-xl space-y-2 shadow">
              <p className="font-semibold">Ready to evaluate qualifying funds?</p>
              <p className="text-[#15364A]">Our team at Explorer Investments can share a short-list of CMVM-regulated vehicles aligned with your timeline and risk profile.</p>
      
            </div>
          </section>

          {/* 9. FAQ */}
          <section id="faq" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2"><HelpCircle /> Frequently Asked Questions</h2>
            <details className="rounded-lg border p-4">
              <summary className="font-semibold cursor-pointer">Is real estate still valid for Golden Visa?</summary>
              <p className="mt-2 text-[#15364A]">No — the property route was removed. The fund route is now the primary investment pathway.</p>
            </details>
            <details className="rounded-lg border p-4">
              <summary className="font-semibold cursor-pointer">How long to citizenship?</summary>
              <p className="mt-2 text-[#15364A]">Historically 5 years of legal residency. In 2025, amendments may affect certain timelines; confirm the rule in force with counsel before filing.</p>
            </details>
            <details className="rounded-lg border p-4">
              <summary className="font-semibold cursor-pointer">Can I use a Self-Directed IRA?</summary>
              <p className="mt-2 text-[#15364A]">Sometimes, via specialist custodians. Ensure compliance to avoid prohibited transactions and unintended U.S. tax events.</p>
            </details>
            <details className="rounded-lg border p-4">
              <summary className="font-semibold cursor-pointer">What about AIMA backlogs?</summary>
              <p className="mt-2 text-[#15364A]">AIMA is digitizing processes to reduce wait times; check current SLAs at the time of filing.</p>
            </details>
          </section>

          {/* Interlinks Block */}
          <section className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2"><BookOpen /> Continue reading</h3>
            <ul className="list-disc pl-6 text-[#15364A] space-y-1">
              <li>
                <Link className="underline" href="/secure-steps-portugal-golden-visa-funds-explorer-investments">
                  Secure Steps: How CMVM-Regulated Golden Visa Funds Safeguard Investor Goals
                </Link>
              </li>
              <li>
                <Link className="underline" href="/portugal-golden-visa-statistics-2012-2023-historical-top10">
                  Portugal Golden Visa — Data & Insights (2012-2023): Historical + Top 10 Nationalities
                </Link>
              </li>
              <li>
                <Link className="underline" href="/american-leaves-us-healthcare-finds-new-life-in-portugal">
                  “I Left the U.S. Drowning in Medical Bills” — Life & Health in Portugal
                </Link>
              </li>
            </ul>
          </section>

          {/* Final CTA */}
          <div className="bg-[#FFF9EB] border border-[#B4A77E]/40 p-6 rounded-xl space-y-3 shadow">
            <div className="flex gap-2 items-center font-bold text-lg">
              <TrendingUp className="text-[#B4A77E]" /> Talk to a Portugal Golden Visa Specialist
            </div>
            <p>
              Explore a curated list of CMVM-regulated funds that qualify for the €500k Golden Visa route — aligned with U.S. investor needs and timelines.
            </p>
            <CtaSection />
          </div>
        </div>
      </section>

      {/* Dynamic related content from your RSS feed */}
      <BlogPreviewGridFromXML currentSlug={SLUG} />

      <Footer />
    </>
  );
}
