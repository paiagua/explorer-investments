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
const SLUG = 'portugal-citizenship-law-2025-golden-visa-investor-strategy';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/portugal-citizenship-law-2025-golden-visa.jpg';
const PUBLISHED = '2025-11-12T09:00:00+00:00';
const MODIFIED = '2025-11-12T09:00:00+00:00';

export const metadata = {
  title:
    'Portugal Citizenship Law 2025: What 10-Year Rules Mean for Golden Visa & Fund Investors',
  description:
    'Portugal approved a major 2025 Citizenship Law reform, extending residence requirements to 10 years. Understand the impact on Golden Visa investors, permanent residency options, timelines, and strategic actions you can still take.',
  keywords:
    'Portugal citizenship law 2025, Portuguese citizenship 10 years, Golden Visa citizenship changes, Portugal residency by investment, Portugal permanent residency, Golden Visa EU citizenship, AIMA biometrics 2026, Portugal nationality reform, CPLP citizenship rules, EU mobility Portugal',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large',
  openGraph: {
    title:
      'Portugal Citizenship Law 2025: New 10-Year Rules for Golden Visa & Residency Investors',
    description:
      'Portugal’s 2025 Citizenship Law reform raises the bar from 5 to 10 years for most applicants. See what this means for Golden Visa investors, fund strategies, and permanent residency.',
    url: CANONICAL_URL,
    type: 'article',
    images: [OG_IMAGE],
    article: {
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      authors: ['https://goldenvisashub.com/about-explorer-investments'],
      tags: [
        'Portugal Citizenship Law',
        'Portugal Golden Visa',
        'Residency by Investment',
        'Permanent Residency Portugal',
        'EU Citizenship',
        'AIMA',
        'Portugal Immigration 2025',
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ExplorerInvest',
    title:
      'Portugal Citizenship Law 2025: What 10-Year Rules Mean for Golden Visa Investors',
    description:
      'The 2025 reform extends citizenship timelines and reshapes Golden Visa expectations. Learn how serious investors can adapt with permanent residency and regulated funds.',
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
    'Portugal Citizenship Law 2025: What 10-Year Rules Mean for Golden Visa & Fund Investors',
  description:
    'Deep-dive analysis of Portugal’s 2025 Citizenship Law reform and its impact on Golden Visa investors, permanent residency strategies and long-term EU mobility planning.',
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
export default function PortugalCitizenshipLaw2025GoldenVisaStrategyPage() {
  return (
    <>
      <Script
        id="ld-article-citizenship-law-2025"
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
              Portugal Citizenship, Residency & Golden Visa Strategy
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              Portugal Citizenship Law 2025: What New 10-Year Rules Mean for
              Golden Visa & Fund Investors
            </h1>

            <p className="text-lg text-[#15364A] font-light text-balance">
              In late 2025, the Portuguese Parliament approved a major reform of
              the Citizenship Law, extending the standard residence requirement
              from five to ten years. While headlines focus on the politics,
              serious investors want to know one thing: how does this change the
              strategy for Golden Visa, residency-by-investment, and long-term
              EU mobility planning?
            </p>

            <p className="mt-3 text-sm text-gray-600">
              <strong>Updated:</strong> 12 November 2025. This article summarises
              public information available to date and is for informational
              purposes only. It is not legal advice.
            </p>
          </header>

          {/* Hero Image */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src={OG_IMAGE}
              alt="View of Lisbon and the Portuguese Parliament representing the 2025 citizenship law reform and its impact on Golden Visa investors."
              fill
              priority
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-2 text-xs sm:text-sm text-white/95 bg-gradient-to-t from-black/60 to-transparent">
              Portugal’s 2025 citizenship reform: a political story on the
              surface, a strategic planning challenge for investors underneath.
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
                  Overview: What Changed and Why Investors Care
                </a>
              </li>
              <li>
                <a href="#approved" className="hover:underline">
                  What Exactly Was Approved in October 2025?
                </a>
              </li>
              <li>
                <a href="#status" className="hover:underline">
                  Is the Law in Force Yet? The President & Constitutional Court
                  Timeline
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:underline">
                  Impact on Golden Visa Holders: Residency vs Citizenship
                </a>
              </li>
              <li>
                <a href="#pr" className="hover:underline">
                  Permanent Residency After 5 Years: The “Plan B” for Investors
                </a>
              </li>
              <li>
                <a href="#families" className="hover:underline">
                  Family Strategy: Age Limits, Dependants & Risk Management
                </a>
              </li>
              <li>
                <a href="#next" className="hover:underline">
                  What to Expect Next in 2025-2026
                </a>
              </li>
              <li>
                <a href="#conclusion" className="hover:underline">
                  Our Take: How Serious Investors Should React
                </a>
              </li>
            </ul>
          </nav>

          {/* 1. Overview */}
          <section id="overview" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <Globe2 className="text-[#B4A77E]" /> Overview: What Changed and
              Why Investors Care
            </h2>
            <p>
              On <strong>28 October 2025</strong>, the Portuguese Parliament
              approved a reform to the Citizenship Law that{' '}
              <strong>extends the standard residence requirement</strong> to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#15364A]">
              <li>
                <strong>10 years</strong> for most applicants;
              </li>
              <li>
                <strong>7 years</strong> for citizens of{' '}
                <strong>CPLP countries</strong> and <strong>EU nationals</strong>
                .
              </li>
            </ul>
            <p>
              This reform does <strong>not</strong> abolish the{' '}
              <Link
                href="/portugal-golden-visa-2025-investment-first-guide"
                className="text-[#B4A77E] underline underline-offset-4"
              >
                Portugal Golden Visa
              </Link>{' '}
              or other residency permits. Instead, it fundamentally changes the{' '}
              <strong>path to Portuguese citizenship and EU passports</strong>{' '}
              for those planning around a five-year horizon.
            </p>
            <p>
              For investors using{' '}
              <Link
                href="/secure-steps-portugal-golden-visa-funds-explorer-investments"
                className="text-[#B4A77E] underline underline-offset-4"
              >
                CMVM-regulated investment funds
              </Link>{' '}
              or real assets as a basis for long-term EU mobility, this is not
              a reason to panic—but it is a reason to{' '}
              <strong>recalibrate strategy, timelines and family planning</strong>
              .
            </p>
          </section>

          {/* 2. What was approved */}
          <section
            id="approved"
            className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF]"
          >
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <FileCheck className="text-[#B4A77E]" /> What Exactly Was Approved
              in October 2025?
            </h2>
            <p>
              The reform updates several pillars of the Portuguese
              naturalisation framework. In simplified investor language:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li>
                <strong>Residence period for citizenship</strong>:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>10 years for most foreign nationals;</li>
                  <li>7 years for citizens of CPLP and EU member states.</li>
                </ul>
              </li>
              <li>
                <strong>Starting point</strong>: the clock now runs from the{' '}
                <strong>date of issuance of the first residence card</strong>,
                not from the date the application was filed.
              </li>
              <li>
                <strong>Substantive requirements</strong> include:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>
                    <strong>A2-level Portuguese</strong> language proficiency
                    (unchanged);
                  </li>
                  <li>
                    a new <strong>civic knowledge test</strong> (culture,
                    rights, duties, history);
                  </li>
                  <li>
                    a formal declaration of{' '}
                    <strong>adherence to democratic principles</strong>;
                  </li>
                  <li>
                    <strong>clean criminal record</strong> with the threshold
                    reduced from three to{' '}
                    <strong>two years of imprisonment</strong>;
                  </li>
                  <li>
                    proof of <strong>sufficient means of subsistence</strong>;
                  </li>
                  <li>
                    no <strong>UN or EU sanctions</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Sephardic Jewish ancestry route</strong> is terminated
                in its previous form.
              </li>
              <li>
                A new provision allows for possible{' '}
                <strong>loss of nationality</strong> in very serious criminal
                cases, to be detailed in secondary regulation.
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              Note: the above is a simplified overview for investors; only the
              official legal text and subsequent regulations have binding force.
            </p>
          </section>

          {/* 3. Status / President */}
          <section id="status" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <Clock className="text-[#B4A77E]" /> Is the Law in Force Yet? The
              President & Constitutional Court Timeline
            </h2>
            <p>
              As of <strong>12 November 2025</strong>, the law is{' '}
              <strong>not yet fully in force</strong>. On 11 November, the
              decree left the Assembly of the Republic and was formally sent to
              the President of the Republic for review.
            </p>
            <p>
              Under the Constitution, the President has up to{' '}
              <strong>20 days</strong> to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#15364A]">
              <li>
                <strong>Promulgate</strong> the law (approve it);
              </li>
              <li>
                <strong>Veto</strong> it and return it to Parliament with
                comments; or
              </li>
              <li>
                Request a <strong>constitutional review</strong> from the
                Constitutional Court.
              </li>
            </ul>
            <p>
              If the President refers the law to the Constitutional Court, that
              step must occur within <strong>8 days</strong> of reception. Once
              seized, the Court has up to <strong>25 days</strong> to issue its
              decision.
            </p>
            <p>
              Several legal scholars have highlighted potential concerns,
              particularly the <strong>absence of a clear transitional / “grandfather” clause</strong> for
              people already in the pipeline. As a result, a Constitutional
              Court review is seen by many observers as{' '}
              <strong>more likely than not</strong>.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Until the legislative process is completed</strong>, the
              current citizenship law continues to apply to applications
              already filed under existing rules—subject to how the final law
              and regulations define transitional arrangements.
            </p>
          </section>

          {/* 4. Impact on Golden Visa */}
          <section
            id="impact"
            className="space-y-4 bg-[#F9F9FC] p-6 rounded-lg border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <ShieldCheck className="text-[#B4A77E]" /> Impact on Golden Visa
              Holders: Residency vs Citizenship
            </h2>
            <p>
              A crucial distinction for investors: the{' '}
              <strong>Golden Visa (ARI) is a residency program</strong>. The
              reform targets <strong>nationality</strong>, not your right to
              live in, enter or re-enter Portugal.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li>
                The <strong>Golden Visa program remains in place</strong> as a
                residency-by-investment route.
              </li>
              <li>
                Golden Visa holders continue to enjoy{' '}
                <strong>residency rights, renewals, Schengen travel</strong> and{' '}
                <strong>family reunification</strong>, subject to general
                compliance.
              </li>
              <li>
                What changes is the{' '}
                <strong>
                  timeline and conditions for naturalisation (citizenship)
                </strong>
                .
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#002D3D] mt-4">
              If you have already applied for citizenship
            </h3>
            <p>
              In line with public statements and past precedent, applications
              that are <strong>already submitted and complete</strong> before
              the new law enters into force are expected to{' '}
              <strong>remain under the 5-year regime</strong>. Files that are
              incomplete or “placeholder” submissions may be more exposed.
            </p>

            <h3 className="text-xl font-semibold text-[#002D3D] mt-4">
              If you have not yet applied
            </h3>
            <p>
              If the law comes into force as currently approved:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#15364A]">
              <li>
                You will generally need <strong>10 years</strong> of legal
                residence (or 7 years for CPLP/EU nationals), counted from the{' '}
                <strong>first residence card issuance date</strong>.
              </li>
              <li>
                You must satisfy the language, civic knowledge and conduct
                requirements.
              </li>
              <li>
                Authorities are likely to place greater emphasis on{' '}
                <strong>“real ties” and integration</strong> when deciding
                naturalisation applications.
              </li>
            </ul>

            <p className="text-sm text-gray-700">
              For many investors, this shifts the citizenship narrative from a
              “5-year fast EU passport” to a{' '}
              <strong>long-term jurisdictional diversification strategy</strong>.
              The case for Portugal remains strong, but the horizon becomes
              longer.
            </p>
          </section>

          {/* 5. Permanent Residency */}
          <section id="pr" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <MapPin className="text-[#B4A77E]" /> Permanent Residency After 5
              Years: The “Plan B” for Investors
            </h2>
            <p>
              One of the most under-appreciated features of Portugal’s legal
              framework is that{' '}
              <strong>Permanent Residency remains available after 5 years</strong>,
              independently of the citizenship debate.
            </p>
            <p>
              After five years of legal residence under the Golden Visa,
              investors generally have two main Permanent Residency (PR) routes:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-[#15364A]">
              <li>
                <strong>Regular Permanent Residency (general regime)</strong>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>Lower fees.</li>
                  <li>
                    Typically requires evidence of{' '}
                    <strong>effective residence</strong> in Portugal.
                  </li>
                  <li>
                    Each family member holds an <strong>independent PR card</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Investment Permanent Residency (for Golden Visa holders)</strong>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>
                    Higher fees, but designed for investors with{' '}
                    <strong>limited physical stay</strong>.
                  </li>
                  <li>
                    Waives the classical “full-time resident” expectations tied
                    to PR.
                  </li>
                  <li>
                    Each family member again holds an independent PR permit.
                  </li>
                </ul>
              </li>
            </ol>

            <p>
              Assuming you opt for the <strong>investment PR route</strong>:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#15364A]">
              <li>The PR card is typically valid for 5 years, renewable.</li>
              <li>
                A2-level Portuguese is required, but there is{' '}
                <strong>no new investment obligation</strong> and no
                full-time residence requirement.
              </li>
              <li>
                You can, in principle,{' '}
                <strong>divest from your qualifying investment</strong> after
                securing PR, while maintaining your residency status.
              </li>
            </ul>

            <p className="text-sm text-gray-700">
              For many families, this structure supports a two-step strategy:{' '}
              <strong>Golden Visa → Permanent Residency → optional citizenship</strong>{' '}
              over a longer time frame.
            </p>

            <p className="text-sm text-gray-700">
              For a broader context on citizenship and EU mobility beyond the
              Golden Visa, see also our analysis:{' '}
              <Link
                href="/portuguese-citizenship-legacy-passport-eu-mobility-2025"
                className="text-[#B4A77E] underline underline-offset-4"
              >
                “Portuguese Citizenship, Legacy & EU Mobility 2025”
              </Link>
              .
            </p>
          </section>

          {/* 6. Family strategy */}
          <section
            id="families"
            className="space-y-4 bg-[#FFFCF3] p-6 rounded-lg border border-[#E4E0CF]"
          >
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <Users className="text-[#B4A77E]" /> Family Strategy: Age Limits,
              Dependants & Risk Management
            </h2>
            <p>
              Golden Visa family planning is where legal timelines meet real
              life: children, university decisions, career moves and
              cross-border lifestyles. The new law increases the cost of{' '}
              <strong>“waiting and seeing”</strong>.
            </p>
            <p>
              As long as you remain in the Golden Visa (ARI) structure, family
              members are generally <strong>dependent on the main applicant</strong>.
            </p>
            <p>
              For families with teenagers or young adults, this can create
              pressure around age limits and continued eligibility. One
              increasingly relevant strategy is:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-[#15364A]">
              <li>
                At year five, consider{' '}
                <strong>transitioning from ARI to Permanent Residency</strong>{' '}
                for all family members.
              </li>
              <li>
                Each family member obtains an{' '}
                <strong>independent PR card</strong>, reducing “age-out” risk.
              </li>
              <li>
                This gives children and spouses more flexibility for{' '}
                <strong>study, work and mobility</strong> decisions across the
                EU.
              </li>
            </ul>

            <p>
              The same applies to future citizenship applications: family
              members may have different timelines, language progress and
              integration patterns. Structuring residency correctly at year
              five can preserve optionality even in a 10-year world.
            </p>
          </section>

          {/* 7. What next */}
          <section id="next" className="space-y-4">
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <AlertTriangle className="text-[#B4A77E]" /> What to Expect Next in
              2025-2026
            </h2>
            <p>
              The next steps in the legislative and administrative process
              include:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#15364A]">
              <li>
                <strong>Presidential review</strong> within the constitutional
                deadline;
              </li>
              <li>
                Possible <strong>Constitutional Court review</strong>, focusing
                on transitional rules and potential retroactivity issues;
              </li>
              <li>
                Publication of <strong>secondary regulation</strong> defining
                the civic test, documentation, and detailed procedures;
              </li>
              <li>
                Operational implementation by AIMA and the civil registry
                offices.
              </li>
            </ul>
            <p>
              In parallel, there are important administrative moves already in
              motion:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#15364A]">
              <li>
                AIMA has accelerated long-delayed{' '}
                <strong>biometric appointments</strong> for Golden Visa
                applicants.
              </li>
              <li>
                Many principal applicants who had been waiting since{' '}
                <strong>2022-2025</strong> are now being scheduled in the{' '}
                <strong>first half of 2026</strong>.
              </li>
              <li>
                For now, dependants are often not being scheduled at the same
                time—something that investors and advisors are tracking closely.
              </li>
            </ul>
            <p className="text-sm text-gray-700">
              Processing times and experiences still vary significantly from
              case to case. For investors, this reinforces the need for{' '}
              <strong>documented compliance and realistic timelines</strong>,
              rather than marketing-driven expectations.
            </p>
          </section>

          {/* 8. Our Take / Conclusion */}
          <section
            id="conclusion"
            className="space-y-4 bg-[#F9F9FC] p-6 rounded-lg border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-[#002D3D] flex items-center gap-2">
              <Scale className="text-[#B4A77E]" /> Our Take: How Serious
              Investors Should React
            </h2>
            <p>
              Portugal’s 2025 citizenship reform brings the country closer to
              the European average in terms of naturalisation timelines. It also
              creates uncertainty for thousands of law-abiding residents and
              investors who planned around a five-year horizon.
            </p>
            <p>
              For <strong>long-term, globally mobile families</strong>, the
              core value proposition remains: Portugal offers legal stability,
              EU access, lifestyle quality and a mature financial system,
              including{' '}
              <Link
                href="/secure-steps-portugal-golden-visa-funds-explorer-investments"
                className="text-[#B4A77E] underline underline-offset-4"
              >
                regulated Golden Visa funds
              </Link>
              . The main adjustment is timeline, not fundamentals.
            </p>
            <p>
              At <strong>Explorer Investments</strong>, we see three priority
              actions for sophisticated investors:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-[#15364A]">
              <li>
                <strong>Clarify your timeline</strong>: citizenship vs
                residency vs “plan B” jurisdictional diversification.
              </li>
              <li>
                <strong>Structure your investment</strong> through compliant,
                CMVM-regulated vehicles that can adapt to a 10-year horizon if
                needed.
              </li>
              <li>
                <strong>Protect the family</strong>: consider Permanent
                Residency at year five to secure independent permits and reduce
                age-out risk.
              </li>
            </ol>
            <p>
              We continue to monitor the legislative process and its impact on
              Golden Visa & residency investors. Once the Presidential decision
              and Constitutional Court developments are public, this analysis
              will be updated.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Disclaimer:</strong> This article is a general information
              resource and does not constitute legal, tax, or investment advice.
              Investors should always seek counsel from qualified professionals
              before making decisions.
            </p>
          </section>

          {/* CTA + Related Articles */}
          <CtaSection />

          <BlogPreviewGridFromXML currentSlug={SLUG} />
        </div>
      </section>

      <Footer />
    </>
  );
}
