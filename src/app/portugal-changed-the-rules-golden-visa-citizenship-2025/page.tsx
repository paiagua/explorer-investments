// ✅ SEO Article - Portugal Changes the Rules (English)
// Next.js/React component - heavy SEO, structured data, and Portugal value-adds

import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
         import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';

        
export const revalidate = 600;
export const fetchCache = 'force-cache';

import {
  TrendingUp,
  AlertTriangle,
  Clock4,
  Globe,
  CheckCircle2,
  XCircle,
  Scale,
  Landmark,
  ShieldCheck,
  MapPin,
  Plane,
  Building2,
  BookOpen,
  Users,
  Wallet,
  Shield,
} from 'lucide-react';

// ===================================================================
// METADATA
// ===================================================================
const SLUG = 'portugal-changed-the-rules-golden-visa-citizenship-2025';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE = 'https://goldenvisashub.com/assets/images/blog/portugal-golden-visa-changes.jpg';
const PUBLISHED = '2025-10-28T09:00:00+00:00';

export const metadata = {
  title: 'Portugal Changed the Rules: The Uncertain Future of the Golden Visa & Citizenship (2025)',
  description:
    'Portugal approved sweeping amendments that could double the residency period for citizenship from 5 to 10 years. Learn what changed, who is affected, the Portugal advantage (low physical presence), risk factors, and strategic next steps for investors and families.',
  openGraph: {
    title: 'Portugal Golden Visa & Citizenship - What Changed in 2025 and What to Do Next',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
};

// Helpers
const Kicker = ({ children }: { children: React.ReactNode }) => (
  <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
    <TrendingUp size={16} /> {children}
  </div>
);

const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#002741] bg-[#FFFCF3] py-3 px-4 rounded-md my-6 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center">
    <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">{label}</p>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

const Table = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-x-auto border border-gray-200 rounded-lg my-6">
    <table className="w-full text-sm text-left text-[#002741]">{children}</table>
  </div>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3"><CheckCircle2 className="mt-[2px] flex-shrink-0" size={18} /> <span>{children}</span></li>
);

export default function PortugalGoldenVisaCitizenshipArticle() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    image: [OG_IMAGE],
    mainEntityOfPage: CANONICAL_URL,
    author: { '@type': 'Organization', name: 'Explorer Investments' },
    publisher: { '@type': 'Organization', name: 'Explorer Investments' },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Has Portugal eliminated the Golden Visa? ',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'No. The investment-based residency route remains, though program criteria and citizenship timelines may evolve. Many investors still use Portugal to secure EU residency with low average presence and family coverage.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the biggest advantage of Portugal now?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Low average physical presence to maintain residency, EU mobility, lifestyle quality, and the option to invest through CMVM-regulated funds rather than a donation-based model.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long until I can apply for citizenship under the new framework?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'If the amendments are finalized as drafted, most non-EU applicants would need 10 years of residency (7 for EU/CPLP). With card-issuance delays, the real timeline can extend to ~12-15 years. Always check the latest law with counsel.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Permanent Residency a good stepping stone?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes. Many families now target Permanent Residency at year five for stability and EU flexibility, and revisit citizenship later depending on personal plans and legal context.',
        },
      },
    ],
  };

  return (
    <>
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />

      {/* === Article === */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Title */}
          <header>
            <Kicker>Golden Visa & Citizenship - 2025 Update</Kicker>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Portugal Changed the Rules: The Uncertain Future of the Golden Visa & Citizenship
            </h1>
            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              In late October 2025, Portugal’s Parliament approved one of the most consequential reforms to nationality rules in recent memory: the citizenship residency requirement could extend from <strong>5 to 10 years</strong> - or <strong>7 years</strong> for EU and CPLP citizens. The bill still awaits Presidential review, but the political message is clear: Portugal is moving away from “easy citizenship.”
            </p>
            <p className="text-xs text-[#5A6F7B] mt-2">By Explorer Investments • Updated 2025</p>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image src={OG_IMAGE} alt="Portugal golden visa and citizenship changes in 2025" fill className="object-cover" />
          </figure>

          {/* Intro Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Stat label="Impact" value="All foreign residents" />
            <Stat label="Residency → Citizenship" value="5 → 10 years" />
            <Stat label="Clock Start" value="Card issuance" />
            <Stat label="Realistic Timeline" value="12-15 years" />
          </div>

          {/* ----------------------------------------------- */}
          {/* What changed */}
          {/* ----------------------------------------------- */}
          <h2 className="text-2xl font-bold flex items-center gap-2"><AlertTriangle /> What Changed - and Why It Matters</h2>
          <p>
            The approved amendments (pending promulgation) extend the citizenship residency period for most foreign nationals. Crucially, the clock would begin at <strong>residence card issuance</strong>, not at application, meaning the <em>effective</em> journey can be substantially longer for applicants who face processing delays.
          </p>

          <Table>
            <thead className="bg-gray-50 text-[#15364A] text-xs uppercase">
              <tr>
                <th className="px-3 py-2">Topic</th>
                <th className="px-3 py-2">Before</th>
                <th className="px-3 py-2">Now (Proposed)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-3 py-3">Years to citizenship</td>
                <td className="px-3 py-3">5</td>
                <td className="px-3 py-3">10 (7 for EU/CPLP)</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-3">When the clock starts</td>
                <td className="px-3 py-3">Application date</td>
                <td className="px-3 py-3">Residence card issuance</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-3">New requirements</td>
                <td className="px-3 py-3">A2 Portuguese</td>
                <td className="px-3 py-3">A2 + civic knowledge test</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-3">Who’s affected</td>
                <td className="px-3 py-3">Primarily new residents</td>
                <td className="px-3 py-3 text-red-700 font-semibold">All residents (no grandfathering in draft)</td>
              </tr>
            </tbody>
          </Table>

          <div className="flex items-center gap-2 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
            <Clock4 size={18} /> With issuance delays of ~2-3 years, many applicants may face an <strong>effective 12-15 year</strong> path to citizenship.
          </div>

          {/* ----------------------------------------------- */}
          {/* Portugal advantage */}
          {/* ----------------------------------------------- */}
          <h2 className="text-2xl font-bold flex items-center gap-2"><Globe /> Portugal’s Key Advantage: Minimal Physical Presence</h2>
          <p>
            Even with longer timelines, Portugal remains competitive because many investment categories allow residency to be maintained with <strong>low average physical presence</strong> (commonly cited as ~7 days/year; confirm thresholds at the time of application).
          </p>

          <Table>
            <thead className="bg-gray-50 text-[#15364A] text-xs uppercase">
              <tr>
                <th className="px-3 py-2">Country</th>
                <th className="px-3 py-2">Required Days/Year</th>
                <th className="px-3 py-2">Time to Citizenship</th>
                <th className="px-3 py-2">Political Stability</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-3 py-3 font-bold">Portugal</td>
                <td className="px-3 py-3">~7 (avg.)</td>
                <td className="px-3 py-3">10+ years</td>
                <td className="px-3 py-3">High - trust under scrutiny</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-3">Greece</td>
                <td className="px-3 py-3 text-red-700">183</td>
                <td className="px-3 py-3">7</td>
                <td className="px-3 py-3">Strong</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-3">Italy</td>
                <td className="px-3 py-3">None (residency)</td>
                <td className="px-3 py-3">10</td>
                <td className="px-3 py-3">Bureaucracy risk</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-3">Hungary</td>
                <td className="px-3 py-3">None</td>
                <td className="px-3 py-3">8</td>
                <td className="px-3 py-3">Political risk</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-3">Malta</td>
                <td className="px-3 py-3">Substantial</td>
                <td className="px-3 py-3">Variable</td>
                <td className="px-3 py-3">EU pressure</td>
              </tr>
            </tbody>
          </Table>

          <Quote>
            “If your goal is a resilient EU base and global mobility - not immediate naturalization - Portugal still works. Capital stays productive through regulated funds, and families keep their options open.”
          </Quote>

          {/* ----------------------------------------------- */}
          {/* Trust issue */}
          {/* ----------------------------------------------- */}
          <h2 className="text-2xl font-bold flex items-center gap-2"><ShieldCheck /> The Trust Problem</h2>
          <p>
            Portugal has delivered major policy shifts in recent years:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>2023 → End of real estate as an eligible Golden Visa route</li>
            <li>2024 → Wind-down of the NHR tax regime</li>
            <li>2025 → Nationality timeline reforms (pending)</li>
          </ul>
          <p className="mt-2">
            This time, however, investors point to <strong>no transitional protection</strong>, <strong>no grandfathering</strong> and a lack of explanation for multi‑year processing delays - creating a sense of <em>rule‑change mid‑game</em>.
          </p>

          {/* ----------------------------------------------- */}
          {/* Why is this happening */}
          {/* ----------------------------------------------- */}
          <h2 className="text-2xl font-bold flex items-center gap-2"><Scale /> Why Is This Happening?</h2>
          <Table>
            <thead className="bg-gray-50 text-[#15364A] text-xs uppercase">
              <tr>
                <th className="px-3 py-2">Suggested Driver</th>
                <th className="px-3 py-2">What It Means</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="px-3 py-3">Domestic political pressure</td><td className="px-3 py-3">Electorate more sensitive to immigration</td></tr>
              <tr className="border-t"><td className="px-3 py-3">Perceived abuse</td><td className="px-3 py-3">Concerns around “citizenship shopping”</td></tr>
              <tr className="border-t"><td className="px-3 py-3">EU agenda</td><td className="px-3 py-3">Stricter stance on investment migration</td></tr>
              <tr className="border-t"><td className="px-3 py-3">Planning failures</td><td className="px-3 py-3">Fast demand growth, limited admin capacity</td></tr>
              <tr className="border-t"><td className="px-3 py-3">Institutional misalignment</td><td className="px-3 py-3">Parliament, Government & AIMA out of sync</td></tr>
            </tbody>
          </Table>
          <p>
            Bottom line: policymakers are signaling stronger integration expectations and fewer “phantom residencies.”
          </p>

          {/* ----------------------------------------------- */}
          {/* Who benefits vs who should reconsider */}
          {/* ----------------------------------------------- */}
          <h2 className="text-2xl font-bold flex items-center gap-2"><Users /> Who Still Benefits from the Golden Visa?</h2>
          <ul className="space-y-2">
            <Li>Investors seeking flexible <strong>Plan B</strong> EU residency and mobility</Li>
            <Li>Families planning a <strong>future relocation</strong> to Portugal</Li>
            <Li><strong>CPLP citizens</strong> (7-year track)</Li>
            <Li>Those who value <strong>fund-based investing</strong> over donations</Li>
          </ul>

          <h2 className="text-2xl font-bold flex items-center gap-2"><XCircle /> Who Should Look Elsewhere?</h2>
          <ul className="list-disc pl-6 space-y-1 text-[#7A1F1F]">
            <li>Citizenship-first planners needing an EU passport before 2035</li>
            <li>Investors intolerant of policy uncertainty</li>
            <li>Short-term, yield-only strategies</li>
          </ul>

          {/* ----------------------------------------------- */}
          {/* PR first strategy */}
          {/* ----------------------------------------------- */}
          <h2 className="text-2xl font-bold flex items-center gap-2"><Landmark /> A New Strategy: Permanent Residency First</h2>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Target <strong>Permanent Residency (PR)</strong> at year five</li>
            <li>Reassess <strong>citizenship</strong> later based on goals and legal context</li>
          </ol>

          <div className="grid sm:grid-cols-2 gap-4 mt-4 text-sm">
            <div className="rounded-xl border p-4 bg-white/70">
              <div className="text-sm font-semibold flex items-center gap-2"><Wallet size={16}/> Portugal Value Stack</div>
              <ul className="mt-2 space-y-2">
                <Li>Diversification into EU assets via CMVM‑regulated vehicles</Li>
                <Li>Low average presence fits U.S. work and tax planning</Li>
                <Li>Family coverage (spouse/dependents) and EU mobility</Li>
              </ul>
            </div>
            <div className="rounded-xl border p-4 bg-white/70">
              <div className="text-sm font-semibold flex items-center gap-2"><Shield size={16}/> Practical Risk Controls</div>
              <ul className="mt-2 space-y-2">
                <Li>Independent legal review before committing capital</Li>
                <Li>Due diligence on fund strategy, governance and fees</Li>
                <Li>Expect processing variability; build timeline buffers</Li>
              </ul>
            </div>
          </div>

          {/* ----------------------------------------------- */}
          {/* Scenarios */}
          {/* ----------------------------------------------- */}
          <h2 className="text-2xl font-bold flex items-center gap-2"><BookOpen /> What Happens Next? Four Scenarios</h2>
          <Table>
            <thead className="bg-gray-50 text-[#15364A] text-xs uppercase">
              <tr>
                <th className="px-3 py-2">Scenario</th>
                <th className="px-3 py-2">Impact</th>
                <th className="px-3 py-2">Likelihood</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="px-3 py-3">Law signed without changes</td><td className="px-3 py-3 text-red-700">Severe trust damage</td><td className="px-3 py-3">Medium</td></tr>
              <tr className="border-t"><td className="px-3 py-3">Constitutional Court review requires grandfathering</td><td className="px-3 py-3">Reputation partially restored</td><td className="px-3 py-3 font-semibold">High</td></tr>
              <tr className="border-t"><td className="px-3 py-3">Presidential veto</td><td className="px-3 py-3">Temporary relief</td><td className="px-3 py-3">Low-Medium</td></tr>
              <tr className="border-t"><td className="px-3 py-3">Government clarifies / adjusts</td><td className="px-3 py-3">Market rewarms</td><td className="px-3 py-3">Medium</td></tr>
            </tbody>
          </Table>

          {/* ----------------------------------------------- */}
          {/* Conclusion */}
          {/* ----------------------------------------------- */}
          <h2 className="text-2xl font-bold flex items-center gap-2"><ShieldCheck /> Conclusion</h2>
          <div className="p-5 bg-gray-50 border rounded-lg text-sm space-y-2">
            <p>The Golden Visa is not dead - but it is different.</p>
            <ul className="list-disc pl-6">
              <li><strong>Fast-track → Patience track</strong></li>
              <li><strong>Clarity → Prolonged uncertainty</strong></li>
              <li><strong>Trust premium → Due diligence premium</strong></li>
            </ul>
            <p className="mt-2">In investment migration, reputation is currency. Portugal’s next moves will determine whether it remains a premier EU residency platform or becomes a cautionary case study.</p>
          </div>

          {/* Internal Links / SEO helpers */}
          <div className="text-sm text-[#5A6F7B] space-x-3">
            <Link href="/" className="underline hover:text-[#002741]">Speak with an Explorer advisor</Link>
            <span>•</span>
            <Link href="/" className="underline hover:text-[#002741]">Explore CMVM‑regulated fund options</Link>
            <span>•</span>
            <Link href="/" className="underline hover:text-[#002741]">Permanent Residency guide</Link>
          </div>

          {/* CTA */}
          <div className="pt-8"><CtaSection /></div>
        </div>
      </section>
 
                 <BlogPreviewGridFromXML currentSlug={SLUG} ></BlogPreviewGridFromXML>
       
      <Footer />
    </>
  );
}
