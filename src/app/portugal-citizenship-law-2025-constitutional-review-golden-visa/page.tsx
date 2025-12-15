import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';
import {
  Scale,
  ShieldCheck,
  Clock,
  AlertTriangle,
  Users,
  Globe2,
  FileCheck,
  MapPin,
} from 'lucide-react';

// ===================================================================
// METADATA (SEO)
// ===================================================================
const SLUG = 'portugal-citizenship-law-2025-constitutional-review-golden-visa';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/portugal-citizenship-law-constitutional-review-2025.jpg';
const PUBLISHED = '2025-11-14T09:00:00+00:00';
const MODIFIED = '2025-11-14T09:00:00+00:00';

export const metadata = {
  title:
    'Portugal Citizenship Law 2025: Constitutional Court Review & What It Means for Golden Visa Investors',
  description:
    'Portugal’s new Citizenship Law proposal extends the residence requirement to 10 years, but it has now been suspended and sent for preventive review by the Constitutional Court. Understand what is approved, what is frozen, and what it means for Golden Visa and fund investors.',
  keywords:
    'Portugal citizenship law 2025, Portuguese nationality law reform, constitutional court review Portugal, Golden Visa citizenship 10 years, Portugal Golden Visa investors, permanent residency Portugal, AIMA biometrics 2026, Portugal immigration 2025, CPLP citizenship Portugal, EU nationals 7 years citizenship',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large',
  openGraph: {
    title:
      'Portugal Citizenship Law 2025: Preventive Constitutional Review & Golden Visa Implications',
    description:
      'The Portuguese Parliament approved a major Citizenship Law reform - but a rare preventive constitutional review has frozen it. See what stays at 5 years, what may become 10 years, and how Golden Visa investors should react.',
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'Portugal Citizenship Law',
        'Golden Visa',
        'Residency by Investment',
        'Constitutional Court',
        'Portuguese Nationality',
        'Permanent Residency',
        'AIMA',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title:
      'Portugal Citizenship Law 2025: 5-Year Rule Still in Force While Court Reviews Reform',
    description:
      'A rare preventive constitutional review has frozen Portugal’s new citizenship law proposal. Learn what this means for Golden Visa timelines, permanent residency and investor strategy.',
    images: [OG_IMAGE],
  },
  alternates: { canonical: CANONICAL_URL },
};

// ===================================================================
// SCHEMA DATA
// ===================================================================
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  mainEntityOfPage: CANONICAL_URL,
  headline:
    'Portugal Citizenship Law 2025: Constitutional Court Review & What It Means for Golden Visa Investors',
  description:
    'Deep dive into Portugal’s 2025 Citizenship Law proposal, the preventive constitutional review that froze it, and the concrete impact on Golden Visa investors and permanent residency strategies.',
  image: [OG_IMAGE],
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: { '@type': 'Organization', name: 'Explorer Investments' },
  publisher: {
    '@type': 'Organization',
    name: 'Explorer Investments',
    logo: {
      '@type': 'ImageObject',
      url: 'https://goldenvisashub.com/logo.png',
    },
  },
};

// ===================================================================
// PAGE COMPONENT
// ===================================================================
export default function PortugalCitizenshipLawChange2025Page() {
  return (
    <>
      <Script
        id="ld-article-citizenship-law-change-2025"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <Header />

      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Badge + Title */}
          <header className="text-left">
            <div className="mt-[20px] text-xs sm:text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <Scale size={16} />
              Portugal Citizenship, Constitutional Review & Golden Visa Strategy
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              Portugal Citizenship Law Change 2025: What the Constitutional
              Court Review Means for Golden Visa Investors
            </h1>

            <p className="text-lg text-[#15364A] font-light text-balance">
              On 28 October 2025, the Portuguese Parliament approved a major
              reform to the Citizenship Law, extending the residence requirement
              for most applicants from five to ten years. But on 13 November,
              an extraordinary move by the Socialist Party (PS) sent the
              proposal straight to the Constitutional Court for a preventive
              review—freezing the law before it could take effect.
            </p>

            <p className="mt-3 text-sm text-gray-600">
              <strong>Updated:</strong> 14 November 2025. The situation is
              evolving. This guide explains what is on the table, what is
              suspended, and how it may affect Portugal Golden Visa investors.
            </p>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src={OG_IMAGE}
              alt="Portuguese Parliament and Constitutional Court themes symbolising the 2025 nationality law reform and its impact on Golden Visa investors."
              fill
              priority
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-2 text-xs sm:text-sm text-white/95 bg-gradient-to-t from-black/60 to-transparent">
              The 2025 Citizenship Law proposal is now frozen under a rare
              preventive review by Portugal’s Constitutional Court.
            </figcaption>
          </figure>

          {/* On this page navigation */}
          <nav
            aria-label="On this page"
            className="border border-gray-200 rounded-lg p-4 bg-[#F9F9FC]"
          >
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#15364A]">
              <li>
                <a href="#overview" className="hover:underline">
                  Overview: What Changed and Why It Was Frozen
                </a>
              </li>
              <li>
                <a href="#approved" className="hover:underline">
                  What Has Actually Been Approved by Parliament?
                </a>
              </li>
              <li>
                <a href="#effect" className="hover:underline">
                  Is the New Law in Force? How the Preventive Review Works
                </a>
              </li>
              <li>
                <a href="#golden-visa" className="hover:underline">
                  What This Means for Golden Visa Holders (Now vs Later)
                </a>
              </li>
              <li>
                <a href="#applied" className="hover:underline">
                  If You’ve Already Applied for Citizenship
                </a>
              </li>
              <li>
                <a href="#not-applied" className="hover:underline">
                  If You Have Not Yet Applied for Citizenship
                </a>
              </li>
              <li>
                <a href="#pr" className="hover:underline">
                  Permanent Residency After 5 Years: Your Safety Net
                </a>
              </li>
              <li>
                <a href="#next" className="hover:underline">
                  What Happens Next at the Constitutional Court
                </a>
              </li>
              <li>
                <a href="#conclusion" className="hover:underline">
                  Our Take: How Serious Investors Should Position Themselves
                </a>
              </li>
            </ul>
          </nav>

          {/* 1. Overview */}
          <section id="overview" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <Globe2 className="text-[#B4A77E]" /> Overview: What Changed and
              Why the Law Was Frozen
            </h2>
            <p>
              After months of political debate, the Portuguese Parliament
              approved a reform to the Citizenship Law on{' '}
              <strong>28 October 2025</strong>. The proposal would:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#15364A]">
              <li>
                Extend the standard residence requirement for citizenship from{' '}
                <strong>5 to 10 years</strong> for most applicants;
              </li>
              <li>
                Introduce a <strong>7-year track</strong> for{' '}
                <strong>CPLP nationals</strong> and{' '}
                <strong>EU citizens</strong>;
              </li>
              <li>
                Add new requirements on civic knowledge, clean criminal record,
                and proof of sufficient means.
              </li>
            </ul>
            <p>
              On <strong>11 November</strong>, the decree was sent to the
              President for promulgation. But on <strong>13 November</strong>,{' '}
              the Socialist Party (PS) invoked{' '}
              <strong>Article 278(4)</strong> of the Constitution and announced
              it would request a <strong>preventive review</strong> from the
              Constitutional Court.
            </p>
            <p>
              This move is <strong>extremely rare</strong>—only the third time
              in over four decades of parliamentary history—and it{' '}
              <strong>immediately suspends the law</strong>. Until the Court
              rules, there is:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#15364A]">
              <li>no presidential signature,</li>
              <li>no publication,</li>
              <li>no entry into force.</li>
            </ul>
            <p className="text-sm text-gray-700">
              Result: for now, the{' '}
              <strong>current 5-year citizenship rule remains in force</strong>,
              even though a 10-year model has been approved at parliamentary
              level.
            </p>
          </section>

          {/* 2. What has been approved */}
          <section
            id="approved"
            className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF]"
          >
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <FileCheck className="text-[#B4A77E]" /> What Has Actually Been
              Approved by Parliament?
            </h2>
            <p>
              The text approved by Parliament reforms the naturalisation
              framework along several axes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li>
                <strong>Residence requirement</strong>:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>
                    <strong>10 years</strong> of legal residence for most
                    applicants;
                  </li>
                  <li>
                    <strong>7 years</strong> for{' '}
                    <strong>CPLP nationals</strong> and{' '}
                    <strong>EU citizens</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Counting from residence card issuance</strong>:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>
                    The qualifying period starts from the{' '}
                    <strong>date of issuance of the first residence card</strong>
                    , not the date of application.
                  </li>
                </ul>
              </li>
              <li>
                <strong>New or reinforced requirements</strong>:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>
                    <strong>A2 Portuguese</strong> language level (unchanged);
                  </li>
                  <li>
                    a new <strong>civic knowledge test</strong> (culture,
                    rights, duties, history);
                  </li>
                  <li>
                    <strong>formal declaration</strong> of adherence to
                    democratic principles;
                  </li>
                  <li>
                    <strong>clean criminal record</strong> with a lower
                    threshold (two-year sentence instead of three);
                  </li>
                  <li>
                    <strong>proof of sufficient means</strong> of subsistence;
                  </li>
                  <li>
                    no <strong>UN or EU sanctions</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Sephardic Jewish ancestry route</strong> is terminated
                in its former broad version.
              </li>
              <li>
                New wording allows for <strong>loss of nationality</strong> in
                very serious criminal cases, to be detailed in secondary
                regulation.
              </li>
            </ul>
            <p className="text-sm text-gray-700">
              Remember: this is the <strong>approved text</strong>, not yet the{' '}
              <strong>effective law</strong>—its entry into force now depends on
              the Constitutional Court’s decision.
            </p>
          </section>

          {/* 3. In force? */}
          <section id="effect" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <Clock className="text-[#B4A77E]" /> Is the New Law in Force? How
              the Preventive Review Works
            </h2>
            <p>
              The short answer: <strong>no</strong>. The law is{' '}
              <strong>formally suspended</strong> for preventive review.
            </p>
            <p>
              On 13 November, the Socialist Party (PS) announced it would use a
              rarely invoked tool: a{' '}
              <strong>preventive constitutional review</strong> of the
              Nationality Law under Article 278(4) of the Constitution. This:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#15364A]">
              <li>
                blocks the President from signing the decree until the Court
                rules;
              </li>
              <li>
                prevents publication and entry into force during the review;
              </li>
              <li>
                keeps the <strong>current 5-year regime fully applicable</strong>.
              </li>
            </ul>
            <p>
              The request from PS is expected to be formally filed in the week
              of <strong>18 November</strong>. Once received, the Constitutional
              Court has up to <strong>25 days</strong> to issue a ruling.
            </p>
            <p className="text-sm text-gray-700">
              Until that happens, the “10-year citizenship” headlines are
              political, not operational. Naturalisation continues to be
              processed under the <strong>existing 5-year law</strong>.
            </p>
          </section>

          {/* 4. Golden Visa impact */}
          <section
            id="golden-visa"
            className="space-y-4 bg-[#F9F9FC] p-6 rounded-lg border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <ShieldCheck className="text-[#B4A77E]" /> What This Means for
              Golden Visa Holders (Now vs Later)
            </h2>
            <p>
              The key point for investors: the{' '}
              <strong>Golden Visa (ARI) is a residency program</strong>. The
              proposed reform affects <strong>citizenship</strong>, not residency
              rights.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li>
                The <strong>Golden Visa program itself remains in place</strong>.
              </li>
              <li>
                Holders keep their ability to{' '}
                <strong>reside, renew, travel within Schengen</strong> and{' '}
                <strong>reunite with family</strong>, as long as they comply
                with standard rules.
              </li>
              <li>
                The <strong>preventive review</strong> means that, for now,{' '}
                <strong>no new citizenship timeline applies</strong>. The
                five-year framework is still the reference.
              </li>
            </ul>
            <p>
              If, after the Court’s ruling and presidential decision, the law
              enters into force as approved, then:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#15364A]">
              <li>
                new Golden Visa-based citizenship applications would follow the{' '}
                <strong>7- or 10-year rule</strong>, depending on nationality;
              </li>
              <li>
                the timeline would be counted from the{' '}
                <strong>first residence card issuance date</strong>.
              </li>
            </ul>
            <p className="text-sm text-gray-700">
              For now, the priority is to{' '}
              <strong>stabilise your residency status</strong> and have a clear
              strategy for five-, seven- and ten-year milestones. For a broader
              strategic view, see also{' '}
              <Link
                href="/portuguese-citizenship-legacy-passport-eu-mobility-2025"
                className="text-[#B4A77E] underline underline-offset-4"
              >
                our EU mobility & legacy citizenship analysis
              </Link>
              .
            </p>
          </section>

          {/* 5. Already applied */}
          <section id="applied" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <FileCheck className="text-[#B4A77E]" /> If You’ve Already
              Applied for Citizenship
            </h2>
            <p>
              If you have already filed a{' '}
              <strong>complete citizenship application</strong> under the
              current law, the expectation—based on public statements and legal
              practice—is that your case will continue under the{' '}
              <strong>existing 5-year rule</strong>.
            </p>
            <p>In practical terms:</p>
            <ul className="list-disc pl-6 space-y-1 text-[#15364A]">
              <li>
                Completed files already submitted should stay under the current
                regime.
              </li>
              <li>
                Future applications (filed after any new law comes into
                force) would follow the new 7- or 10-year timeline, if the
                reform is ultimately upheld.
              </li>
            </ul>
            <p>
              The absence of a clear, written{' '}
              <strong>transition / grandfather clause</strong> is one of the
              main constitutional concerns and is likely to be at the heart of
              the Court’s review.
            </p>
          </section>

          {/* 6. Not yet applied */}
          <section
            id="not-applied"
            className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF]"
          >
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <AlertTriangle className="text-[#B4A77E]" /> If You Have Not Yet
              Applied for Citizenship
            </h2>
            <p>
              While the law is suspended, the <strong>current 5-year rule</strong>{' '}
              remains valid. However, if the reform eventually comes into force
              as approved, you should plan for:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#15364A]">
              <li>
                <strong>10 years of residence</strong> (or 7 years for CPLP and
                EU nationals), counted from the{' '}
                <strong>first residence card issuance</strong>;
              </li>
              <li>
                meeting the <strong>A2 language</strong> requirement,{' '}
                <strong>civic test</strong>, and the strengthened{' '}
                <strong>conduct & means</strong> criteria;
              </li>
              <li>
                closer scrutiny on <strong>“real ties” and integration</strong>,
                especially for low-physical-stay investors.
              </li>
            </ul>
            <p>
              For Golden Visa and fund investors, this doesn’t cancel the case
              for Portugal, but shifts it towards a{' '}
              <strong>longer-term mobility & backup-plan jurisdiction</strong>{' '}
              rather than a short “5-year passport” play.
            </p>
          </section>

          {/* 7. Permanent Residency */}
          <section id="pr" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <MapPin className="text-[#B4A77E]" /> Permanent Residency After 5
              Years: Your Safety Net
            </h2>
            <p>
              One constant in this moving landscape:{' '}
              <strong>Permanent Residency (PR) after 5 years</strong> remains on
              the table and is now more strategically important than ever.
            </p>
            <p>
              After five years of legal residence under the Golden Visa, you
              can generally choose between:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-[#15364A]">
              <li>
                <strong>Regular Permanent Residency</strong> (general regime)
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>Lower fees.</li>
                  <li>
                    Typically requires evidence of{' '}
                    <strong>effective residence</strong>.
                  </li>
                  <li>
                    Each family member has an{' '}
                    <strong>independent PR card</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Investment Permanent Residency</strong> (for Golden Visa
                holders)
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>
                    Higher fees, but <strong>no strict full-time presence</strong>{' '}
                    requirement.
                  </li>
                  <li>
                    Designed for international investors with limited physical
                    stay.
                  </li>
                  <li>
                    Again, each family member receives an independent PR permit.
                  </li>
                </ul>
              </li>
            </ol>

            <p>
              Under the investment PR route, the PR card is valid for about{' '}
              <strong>five years, renewable</strong>; A2 Portuguese is required,
              but there are <strong>no new investment obligations</strong> and
              no full-time residence requirement.
            </p>
            <p>
              This can allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#15364A]">
              <li>
                secure <strong>long-term Portuguese residency</strong> and EU
                mobility;
              </li>
              <li>
                potentially <strong>liquidate your qualifying investment</strong>{' '}
                once PR is granted;
              </li>
              <li>
                continue—if you wish—towards citizenship under the new timeline,
                if and when it is confirmed.
              </li>
            </ul>

            <p className="text-sm text-gray-700">
              For a deeper dive on how regulated funds fit into a resilient
              long-term plan, see:{' '}
              <Link
                href="/secure-steps-portugal-golden-visa-funds-explorer-investments"
                className="text-[#B4A77E] underline underline-offset-4"
              >
                “Secure Steps for Portugal Golden Visa Funds”
              </Link>
              .
            </p>
          </section>

          {/* 8. Families */}
          <section
            id="families"
            className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF]"
          >
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <Users className="text-[#B4A77E]" /> Family Strategy: Age Limits &
              Independent Permits
            </h2>
            <p>
              Continuing indefinitely with Golden Visa (ARI) renewals keeps
              family members formally <strong>dependent on the main applicant</strong>.
            </p>
            <p>
              If your children are approaching the program’s{' '}
              <strong>age limits</strong>, it may be prudent to consider PR at
              year five so that:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#15364A]">
              <li>
                each family member holds an{' '}
                <strong>independent residence permit</strong>;
              </li>
              <li>
                the risk of “ageing out” of the program is materially reduced;
              </li>
              <li>
                children and spouses gain more flexibility for{' '}
                <strong>study, work and travel</strong>.
              </li>
            </ul>
            <p>
              In a world where citizenship timelines may move to 7 or 10 years,
              structuring the family’s residency properly at year five becomes{' '}
              <strong>a core part of wealth and mobility planning</strong>, not
              a technical detail.
            </p>
          </section>

          {/* 9. What next */}
          <section id="next" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <Clock className="text-[#B4A77E]" /> What Happens Next at the
              Constitutional Court?
            </h2>
            <p>
              The process now sits with the{' '}
              <strong>Constitutional Court (Tribunal Constitucional)</strong>.
            </p>
            <p>Once the PS request is formally submitted, there are two main paths:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li>
                <strong>The Court finds parts of the law unconstitutional</strong>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>
                    Parliament will need to amend or remove those provisions;
                  </li>
                  <li>
                    or reconfirm them by a <strong>two-thirds vote</strong>.
                  </li>
                  <li>
                    This would delay the reform and may force changes to
                    transitional rules and timelines.
                  </li>
                </ul>
              </li>
              <li>
                <strong>The Court upholds the law</strong>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>
                    The decree returns to the President, who can sign or veto
                    it;
                  </li>
                  <li>
                    if signed, the new citizenship timelines would{' '}
                    <strong>enter into force</strong> after publication.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Until the Court rules, the{' '}
              <strong>5-year citizenship rule remains applicable</strong> for
              naturalisation. The reform itself was approved with{' '}
              <strong>157 votes in favour</strong> (PSD, Chega, IL, CDS-PP, JPP)
              and <strong>64 against</strong> (PS, Livre, PCP, BE, PAN).
            </p>
            <p className="text-sm text-gray-700">
              In parallel, AIMA has accelerated the scheduling of{' '}
              <strong>biometric appointments</strong> for Golden Visa applicants
              who had been waiting since 2022-2025, many now being called for
              the first half of 2026. For now, dependants are often not yet
              being scheduled, and this is being monitored closely.
            </p>
          </section>

          {/* 10. Our take */}
          <section
            id="conclusion"
            className="space-y-4 bg-[#F9F9FC] p-6 rounded-lg border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <Scale className="text-[#B4A77E]" /> Our Take: How Serious
              Investors Should Position Themselves
            </h2>
            <p>
              This reform—if and when it comes into force—would align Portugal’s
              naturalisation timelines more closely with European averages. But
              it also introduces uncertainty for thousands of{' '}
              <strong>law-abiding residents and investors</strong> who acted
              under a five-year expectation.
            </p>
            <p>
              For thoughtful Golden Visa and fund investors, we believe the
              right response is to:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-[#15364A]">
              <li>
                <strong>Anchor residency first</strong>: ensure your ARI and
                future PR position are robust before obsessing over citizenship
                headlines.
              </li>
              <li>
                <strong>Plan for multiple timelines</strong>: five-year PR,
                seven- or ten-year citizenship, and family milestones.
              </li>
              <li>
                <strong>Use regulated structures</strong> such as{' '}
                <Link
                  href="/secure-steps-portugal-golden-visa-funds-explorer-investments"
                  className="text-[#B4A77E] underline underline-offset-4"
                >
                  CMVM-supervised investment funds
                </Link>{' '}
                that remain viable across a longer horizon.
              </li>
            </ol>
            <p>
              At <strong>Explorer Investments</strong>, we will continue to
              monitor the legislative and judicial process and its impact on
              residency-by-investment strategies. Once the Constitutional Court
              decision and any revised text are public, this analysis will be
              updated.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Disclaimer:</strong> This article is a general information
              resource and does not constitute legal, tax, or investment advice.
              For decisions on your specific case, you should consult your
              immigration lawyer and regulated advisors.
            </p>
          </section>

          {/* CTA + Related */}
          <CtaSection />
      
        </div>
      </section>
    <BlogPreviewGridFromXML currentSlug={SLUG} />
      <Footer />
    </>
  );
}
