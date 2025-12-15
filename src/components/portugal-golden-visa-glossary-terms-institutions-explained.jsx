'use client';
import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CtaSection from './CtaSection';
import BlogArticles from './BlogArticles';
import {
  BookMarked,
  Building2,
  Landmark,
  Scale,
  FileText,
  Euro,
  Users,
  Globe,
  Clock,
  Search,
  ArrowUp,
  ExternalLink,
  LinkIcon,
  ShieldCheck,
  HelpCircle,
  CheckCircle2,
  Info,
} from 'lucide-react';

// ===================================================================
// GLOSSARY - EXPANDED, DATA-DRIVEN + SEARCH, TAGS, SOURCES
// ===================================================================
const GoldenVisaGlossaryArticle = () => {
  const [query, setQuery] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const site = {
    origin:
      typeof window !== 'undefined'
        ? window.location.origin
        : 'https://goldenvisashub.com',
    brand: 'Golden Visa Explorer Investments',
    author: 'Golden Visa Explorer Investments Editorial Team',
    logo: '/assets/images/logo/rss-logo-144.png',
    fallbackImage: '/assets/images/logoblue.png',
  };

  const ensureAbsoluteUrl = (url) => {
    if (!url || typeof url !== 'string') return null;
    try {
      if (url.startsWith('http://') || url.startsWith('https://')) return url;
      if (url.startsWith('/')) return `${site.origin}${url}`;
      if (url.startsWith(site.origin)) return url;
      return `${site.origin}/${url.replace(/^\//, '')}`;
    } catch (e) {
      console.error('Error creating absolute URL for:', url, e);
      return null;
    }
  };

  // -----------------------------------------------
  // Glossary entries (add, edit, or remove freely)
  // Each entry can have multiple external sources
  // -----------------------------------------------
  const glossaryEntries = [
    // A
    {
      id: 'aima',
      letter: 'A',
      term: 'AIMA (Agência para a Integração, Migrações e Asilo)',
      body:
        'Portuguese Agency for Integration, Migration, and Asylum. Since Oct 2023, AIMA handles residence permits (incl. Golden Visa), previously by SEF.',
      tags: ['authority', 'residency', 'appointments'],
      sources: [
        { label: 'Official Website', href: 'https://aima.gov.pt/pt' },
        { label: 'English', href: 'https://aima.gov.pt/en' },
        { label: 'Portal de Agendamentos', href: 'https://agendamentos.aima.gov.pt/' },
      ],
    },
    {
      id: 'apostille',
      letter: 'A',
      term: 'Apostille (Hague Convention 1961)',
      body:
        'Form of document authentication recognized among Hague Convention countries. Required for foreign-issued docs (e.g., criminal records) used in Portugal.',
      tags: ['documents', 'legalization'],
      sources: [
        { label: 'HCCH Apostille', href: 'https://www.hcch.net/en/instruments/conventions/specialised-sections/apostille' },
      ],
    },
    {
      id: 'ari',
      letter: 'A',
      term: 'ARI - Autorização de Residência para Atividade de Investimento',
      body: 'Official legal name of Portugal’s Golden Visa residence permit for investment activity.',
      tags: ['program', 'residency'],
      sources: [
        { label: 'Portuguese Law (Foreigners Law)', href: 'https://dre.pt' },
      ],
    },
    {
      id: 'art158a',
      letter: 'A',
      term: 'Article 158-A (Lei de Estrangeiros)',
      body:
        'Clarifies that time since submission/payment of a residency application counts towards the 5-year citizenship clock, provided approval is ultimately granted.',
      tags: ['law', 'citizenship-clock'],
      sources: [
        {
          label: 'Diário da República (Portuguese) - 158.º-A',
          href: 'https://dre.pt',
        },
        {
          label: 'Explorer explainer',
          href: ensureAbsoluteUrl(
            '/portugal-golden-visa-5-year-clock-aima-law-explained-2026'
          ),
        },
      ],
    },

    // B
    {
      id: 'bportugal',
      letter: 'B',
      term: 'Banco de Portugal (Bank of Portugal)',
      body:
        'Portugal’s central bank. Supervises the banking system where investment funds and client accounts are held; works alongside CMVM on market stability.',
      tags: ['banking', 'regulator'],
      sources: [{ label: 'Official Website', href: 'https://www.bportugal.pt/en' }],
    },
    {
      id: 'biometrics',
      letter: 'B',
      term: 'Biometrics Appointment',
      body:
        'In-person capture of fingerprints, photograph, and signatures at an AIMA office after pre-approval.',
      tags: ['appointments', 'aima'],
      sources: [
        { label: 'AIMA - Appointments', href: 'https://agendamentos.aima.gov.pt/' },
      ],
    },

    // C
    {
      id: 'capital-transfer',
      letter: 'C',
      term: 'Capital Transfer',
      body:
        'Historic GV route (e.g., deposits, share acquisitions). Current mainstream options center on CMVM-regulated funds, job creation, or donations; verify current law.',
      tags: ['routes', 'investments'],
      sources: [
        { label: 'CMVM', href: 'https://www.cmvm.pt/en' },
      ],
    },
    {
      id: 'citizenship',
      letter: 'C',
      term: 'Citizenship (Portuguese)',
      body:
        'After 5 years of legal residency, eligible applicants may apply for naturalization. Requires A2 Portuguese exam, clean criminal record, and legal residence history.',
      tags: ['citizenship', 'language-test'],
      sources: [
        { label: 'IRN - Nationality', href: 'https://irn.justica.gov.pt/' },
        { label: 'CAPLE (Portuguese exams)', href: 'https://caple.letras.ulisboa.pt/' },
      ],
    },
    {
      id: 'cmvm',
      letter: 'C',
      term: 'CMVM (Comissão do Mercado de Valores Mobiliários)',
      body:
        'Securities Market Commission. Regulates funds and managers. GV fund route requires CMVM-regulated fund with compliant structure and custodian bank.',
      tags: ['regulator', 'funds'],
      sources: [
        { label: 'CMVM - Official', href: 'https://www.cmvm.pt/en' },
        { label: 'CMVM - Fund Registry', href: 'https://web3.cmvm.pt/sdi/ifi/'} ,
      ],
    },
    {
      id: 'compliance',
      letter: 'C',
      term: 'Compliance (AML/KYC)',
      body:
        'Adherence to law and regulation (CMVM rules, AML/KYC). Applies to investors, banks, and fund managers; critical for application success.',
      tags: ['compliance', 'aml', 'kyc'],
      sources: [
        { label: 'EU AML Authority (overview)', href: 'https://finance.ec.europa.eu/anti-money-laundering-supervision_en' },
      ],
    },
    {
      id: 'criminal-record',
      letter: 'C',
      term: 'Criminal Record Certificate',
      body:
        'Police clearance from country of origin and places lived (>12 months). Usually issued within 90 days; apostille/legalization typically required.',
      tags: ['documents'],
      sources: [
        { label: 'HCCH Apostille', href: 'https://www.hcch.net/en/instruments/conventions/specialised-sections/apostille' },
      ],
    },
    {
      id: 'cultural-donation',
      letter: 'C',
      term: 'Cultural Heritage Donation',
      body:
        'Qualifying GV option: donation (often ≥ €250,000) to approved cultural heritage projects designated by the Portuguese authorities.',
      tags: ['routes', 'donation'],
      sources: [
        { label: 'DGPC - Património Cultural', href: 'https://www.patrimoniocultural.gov.pt/' },
      ],
    },
    {
      id: 'custodian-bank',
      letter: 'C',
      term: 'Custodian Bank',
      body:
        'Holds fund assets segregated from the manager. Examples in PT include Bison Bank, Banco Carregosa, and larger banks such as BPI or Novo Banco.',
      tags: ['banking', 'funds'],
      sources: [
        { label: 'Bison Bank', href: 'https://www.bisonbank.com/' },
        { label: 'Banco Carregosa', href: 'https://www.bancocarregosa.com/' },
        { label: 'BPI', href: 'https://www.bpi.pt/' },
        { label: 'Novo Banco', href: 'https://www.novobanco.pt/' },
      ],
    },

    // D
    {
      id: 'dependents',
      letter: 'D',
      term: 'Dependents (Reagrupamento Familiar)',
      body:
        'Spouse/partner, minor children, dependent adult children (studying, unmarried), and dependent parents/in-laws subject to criteria.',
      tags: ['family', 'eligibility'],
      sources: [
        { label: 'AIMA - Family Reunification', href: 'https://aima.gov.pt' },
      ],
    },
    {
      id: 'dtt',
      letter: 'D',
      term: 'Double Taxation Treaty (DTT)',
      body:
        'Bilateral treaties to avoid double taxation. Relevant if/when you become Portuguese tax resident while keeping foreign income sources.',
      tags: ['tax'],
      sources: [
        { label: 'OECD - Tax Treaties', href: 'https://www.oecd.org/tax/treaties/' },
      ],
    },
    {
      id: 'due-diligence',
      letter: 'D',
      term: 'Due Diligence',
      body:
        'Checks by investors, managers, and authorities to validate investment legitimacy, source of funds, and background compliance (KYC/AML).',
      tags: ['compliance', 'kyc', 'aml'],
      sources: [
        { label: 'CMVM - Investors Corner', href: 'https://www.cmvm.pt/en/Investidor/Paginas/default.aspx' },
      ],
    },

    // E
    {
      id: 'eea',
      letter: 'E',
      term: 'EEA (European Economic Area)',
      body: 'EU + Iceland, Liechtenstein, Norway. EEA/Swiss citizens don’t need GV for residence rights in Portugal.',
      tags: ['europe'],
      sources: [
        { label: 'EU - EEA Info', href: 'https://ec.europa.eu/info/' },
      ],
    },
    {
      id: 'eu',
      letter: 'E',
      term: 'EU (European Union)',
      body:
        'Political and economic union of 27 states. Portuguese citizenship grants EU freedom of movement, work, and residence.',
      tags: ['europe'],
      sources: [
        { label: 'Europa.eu', href: 'https://europa.eu/' },
      ],
    },

    // F
    {
      id: 'family-reunification',
      letter: 'F',
      term: 'Family Reunification',
      body:
        'Legal mechanism for bringing eligible family members under the main applicant’s residency status in Portugal.',
      tags: ['family'],
      sources: [{ label: 'AIMA - Family', href: 'https://aima.gov.pt' }],
    },
    {
      id: 'fatca',
      letter: 'F',
      term: 'FATCA (Foreign Account Tax Compliance Act)',
      body:
        'US law requiring foreign FIs to report US account holders to the IRS. Ensure fund is FATCA-compliant if you are a US person.',
      tags: ['tax', 'us'],
      sources: [
        { label: 'IRS - FATCA', href: 'https://www.irs.gov/businesses/corporations/foreign-account-tax-compliance-act-fatca' },
        {
          label: 'US Tax Guide',
          href: ensureAbsoluteUrl(
            '/portugal-golden-visa-tax-strategy-funds-nhr-fatca-pfic-2025'
          ),
        },
      ],
    },
    {
      id: 'fiscal-representative',
      letter: 'F',
      term: 'Fiscal Representative',
      body:
        'Local representative for non-residents interacting with Portuguese Tax Authority (e.g., NIF, bank account).',
      tags: ['tax', 'nif'],
      sources: [
        { label: 'AT - Portal das Finanças', href: 'https://www.portaldasfinancas.gov.pt/' },
      ],
    },
    {
      id: 'fund-manager',
      letter: 'F',
      term: 'Fund Manager',
      body:
        'Entity managing a fund’s strategy and operations. Must be CMVM-regulated for GV-qualifying funds (e.g., Explorer Investments).',
      tags: ['funds', 'regulation'],
      sources: [
        { label: 'CMVM - Managers', href: 'https://web3.cmvm.pt/sdi/ifi/' },
      ],
    },
    {
      id: 'fund-subscription-declaration',
      letter: 'F',
      term: 'Fund Subscription Declaration',
      body:
        'Document from the fund manager confirming a minimum €500,000 subscribed in a qualifying fund; mandatory in GV files.',
      tags: ['documents', 'funds'],
      sources: [],
    },

    // G
    {
      id: 'golden-visa',
      letter: 'G',
      term: 'Golden Visa (Portugal)',
      body:
        'Common name for ARI - Residence Permit for Investment Activity. Provides residency with low stay requirement and path to citizenship.',
      tags: ['program'],
      sources: [
        { label: 'AIMA - Residence', href: 'https://aima.gov.pt' },
      ],
    },

    // I
    {
      id: 'investment-fund',
      letter: 'I',
      term: 'Investment Fund (CMVM-Regulated)',
      body:
        'Primary GV route post-2023. Minimum €500,000 in eligible PE/VC funds meeting criteria (maturity, % in Portuguese companies, custodian, etc.).',
      tags: ['funds', 'routes'],
      sources: [
        { label: 'CMVM - Rules', href: 'https://www.cmvm.pt/en' },
        {
          label: 'Choosing a Fund',
          href: ensureAbsoluteUrl(
            '/why-smart-investors-choose-cmvm-regulated-funds-portugal-golden-visa-2025'
          ),
        },
      ],
    },
    {
      id: 'irn',
      letter: 'I',
      term: 'IRN (Instituto dos Registos e Notariado)',
      body:
        'Handles nationality registrations and civil registry matters. Involved in final stages of citizenship applications.',
      tags: ['citizenship', 'authority'],
      sources: [{ label: 'IRN - Official', href: 'https://irn.justica.gov.pt/' }],
    },

    // J
    {
      id: 'job-creation',
      letter: 'J',
      term: 'Job Creation Route',
      body:
        'Qualifying GV option by creating ≥10 full-time jobs (or ≥8 in low-density areas), maintained for the required period.',
      tags: ['routes', 'employment'],
      sources: [
        { label: 'AICEP - Regions & Investment', href: 'https://www.portugalglobal.pt/' },
      ],
    },

    // K
    {
      id: 'kyc',
      letter: 'K',
      term: 'KYC - Know Your Customer',
      body:
        'Identity and background verification by banks/funds to meet AML standards; required during subscription and onboarding.',
      tags: ['compliance', 'aml'],
      sources: [
        { label: 'EU AML Overview', href: 'https://finance.ec.europa.eu/anti-money-laundering-supervision_en' },
      ],
    },

    // M
    {
      id: 'minimum-stay',
      letter: 'M',
      term: 'Minimum Stay Requirement',
      body:
        'Average ~7 days/year (e.g., 14 days per 2-year period) to maintain residency. Low physical presence is a key GV advantage.',
      tags: ['requirements', 'residency'],
      sources: [
        { label: 'AIMA - Residence Duties', href: 'https://aima.gov.pt' },
      ],
    },

    // N
    {
      id: 'naturalization',
      letter: 'N',
      term: 'Naturalization',
      body:
        'Process to obtain Portuguese citizenship after 5 years of legal residency, subject to requirements and background checks.',
      tags: ['citizenship'],
      sources: [{ label: 'IRN - Nationality', href: 'https://irn.justica.gov.pt/' }],
    },
    {
      id: 'nhr',
      letter: 'N',
      term: 'NHR / NHR 2.0 (Tax Regime)',
      body:
        'Original NHR ended for new applicants in 2024; replaced by targeted benefits (professions/income types). GV investors may not qualify unless meeting criteria.',
      tags: ['tax', 'nhr'],
      sources: [
        {
          label: 'Tax Guide',
          href: ensureAbsoluteUrl(
            '/portugal-golden-visa-tax-strategy-funds-nhr-fatca-pfic-2025'
          ),
        },
        { label: 'AT - Personal Income Tax', href: 'https://www.portaldasfinancas.gov.pt/' },
      ],
    },
    {
      id: 'nif',
      letter: 'N',
      term: 'NIF - Número de Identificação Fiscal',
      body:
        'Portuguese tax number used for almost all financial activities (opening bank account, investing, contracts). Often requires a fiscal representative if non-resident.',
      tags: ['tax', 'nif', 'documents'],
      sources: [
        { label: 'AT - NIF', href: 'https://www.portaldasfinancas.gov.pt/' },
      ],
    },
    {
      id: 'niss',
      letter: 'N',
      term: 'NISS - Social Security Number',
      body:
        'Needed if you become employed/self-employed in Portugal and to register with SNS in some cases.',
      tags: ['social-security'],
      sources: [
        { label: 'Segurança Social', href: 'https://www.seg-social.pt/' },
      ],
    },

    // P
    {
      id: 'permanent-residency',
      letter: 'P',
      term: 'Permanent Residency (Autorização de Residência Permanente)',
      body:
        'Available after 5 years of temporary residence. Grants indefinite status but not citizenship. Requirements differ from naturalization.',
      tags: ['residency'],
      sources: [{ label: 'AIMA - Residence', href: 'https://aima.gov.pt' }],
    },
    {
      id: 'pfic',
      letter: 'P',
      term: 'PFIC - Passive Foreign Investment Company (US Tax)',
      body:
        'US classification for certain foreign funds. May trigger punitive taxation without elections/reporting; request PFIC statements from your fund.',
      tags: ['tax', 'us'],
      sources: [
        { label: 'IRS - PFIC', href: 'https://www.irs.gov/individuals/international-taxpayers/passive-foreign-investment-companies' },
        {
          label: 'US Tax Guide',
          href: ensureAbsoluteUrl(
            '/portugal-golden-visa-tax-strategy-funds-nhr-fatca-pfic-2025'
          ),
        },
      ],
    },
    {
      id: 'pre-approval',
      letter: 'P',
      term: 'Pre-Approval (AIMA Online Review)',
      body:
        'Initial check of submitted documents; once approved, you are invited to schedule biometrics in Portugal.',
      tags: ['process', 'aima'],
      sources: [{ label: 'AIMA - Online Services', href: 'https://aima.gov.pt' }],
    },
    {
      id: 'private-equity',
      letter: 'P',
      term: 'Private Equity (PE) Fund',
      body:
        'Invests in mature private companies, value creation, and exits. Many CMVM-regulated PE funds qualify for the GV route.',
      tags: ['funds'],
      sources: [
        {
          label: 'About Explorer PE',
          href: ensureAbsoluteUrl(
            '/explorer-investments-portugal-private-equity-leader-golden-visa-2025'
          ),
        },
      ],
    },

    // Q
    {
      id: 'qef',
      letter: 'Q',
      term: 'QEF - Qualified Electing Fund (US Tax Election)',
      body:
        'US taxpayers can elect QEF for PFIC holdings to improve tax treatment when the fund provides annual PFIC statements.',
      tags: ['tax', 'us'],
      sources: [
        { label: 'IRS - PFIC QEF', href: 'https://www.irs.gov' },
      ],
    },

    // R
    {
      id: 'real-estate',
      letter: 'R',
      term: 'Real Estate Investment (Current Status)',
      body:
        'Since Oct 2023, direct/indirect residential/commercial real estate generally no longer qualifies for new GV applications, with limited exceptions (e.g., interior regions).',
      tags: ['routes', 'real-estate'],
      sources: [
        { label: 'Portuguese Legislation', href: 'https://dre.pt' },
      ],
    },
    {
      id: 'renewal',
      letter: 'R',
      term: 'Renewal of Residence Card',
      body:
        'Initial permits ~2 years; renewals usually for 2-3 years. Requires maintaining investment, meeting stay requirement, and updated documents.',
      tags: ['process', 'residency'],
      sources: [{ label: 'AIMA - Renewals', href: 'https://aima.gov.pt' }],
    },
    {
      id: 'residency-permit',
      letter: 'R',
      term: 'Residency Permit (Cartão de Residência)',
      body: 'Physical card proving legal residency status in Portugal under the GV program.',
      tags: ['documents'],
      sources: [{ label: 'AIMA', href: 'https://aima.gov.pt' }],
    },
    {
      id: 'residency-vs-citizenship',
      letter: 'R',
      term: 'Residency vs. Citizenship',
      body:
        'Residency grants right to live/work/study in PT & travel in Schengen; citizenship adds EU passport and political rights in Portugal.',
      tags: ['citizenship', 'residency'],
      sources: [
        { label: 'IRN - Nationality', href: 'https://irn.justica.gov.pt/' },
        { label: 'Schengen - EU', href: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/schengen-area_en' },
      ],
    },

    // S
    {
      id: 'safe-haven',
      letter: 'S',
      term: 'Safe Haven',
      body:
        'Portugal’s safety, quality of life, and stability attract investors seeking diversification and geopolitical resilience.',
      tags: ['strategy'],
      sources: [
        {
          label: 'Portugal as Safe Haven',
          href: ensureAbsoluteUrl(
            '/louvre-heist-why-portugal-golden-visa-is-the-ultimate-safe-haven'
          ),
        },
      ],
    },
    {
      id: 'schengen',
      letter: 'S',
      term: 'Schengen Area',
      body:
        '26+ European countries with abolished internal border checks. PT residence card enables visa-free short stays (90/180 rule).',
      tags: ['travel', 'europe'],
      sources: [
        { label: 'European Commission - Schengen', href: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/schengen-area_en' },
      ],
    },
    {
      id: 'scientific-research',
      letter: 'S',
      term: 'Scientific Research Investment',
      body:
        'Qualifying GV route: ≥ €500,000 into research activities in institutions integrated into Portugal’s national system.',
      tags: ['routes', 'research'],
      sources: [
        { label: 'FCT - Ciência em Portugal', href: 'https://www.fct.pt/' },
      ],
    },
    {
      id: 'sef',
      letter: 'S',
      term: 'SEF (Serviço de Estrangeiros e Fronteiras) [historic]',
      body:
        'Former immigration service. Admin functions shifted to AIMA in Oct 2023; policing functions distributed to other forces.',
      tags: ['history', 'authority'],
      sources: [
        { label: 'Gov - SEF transition (PT)', href: 'https://www.portugal.gov.pt/' },
      ],
    },
    {
      id: 'sns',
      letter: 'S',
      term: 'SNS - Serviço Nacional de Saúde',
      body:
        'National Health Service. Legal residents can register and access public healthcare, often at low cost.',
      tags: ['health'],
      sources: [
        { label: 'SNS', href: 'https://www.sns.gov.pt/' },
      ],
    },

    // T
    {
      id: 'tax-authority',
      letter: 'T',
      term: 'Tax Authority - Autoridade Tributária (AT)',
      body:
        'Manages taxes in Portugal. Interaction includes obtaining NIF and fulfilling tax obligations if you become tax resident.',
      tags: ['tax'],
      sources: [{ label: 'Portal das Finanças', href: 'https://www.portaldasfinancas.gov.pt/' }],
    },
    {
      id: 'tax-residency',
      letter: 'T',
      term: 'Tax Residency (183-day / habitual residence)',
      body:
        'Tax residency if ≥183 days in PT in a 12-month period or maintaining habitual residence. Triggers worldwide income reporting; see DTTs/NHR.',
      tags: ['tax'],
      sources: [
        { label: 'AT - PIT', href: 'https://www.portaldasfinancas.gov.pt/' },
      ],
    },

    // V
    {
      id: 'vc',
      letter: 'V',
      term: 'Venture Capital (VC) Fund',
      body:
        'Invests in early-stage startups with higher risk/return. Some CMVM-regulated VC funds qualify for the GV route.',
      tags: ['funds'],
      sources: [
        { label: 'CMVM - Funds', href: 'https://www.cmvm.pt/en' },
      ],
    },
  ];

  const lettersWithEntries = useMemo(() => {
    const map = new Map();
    for (const e of glossaryEntries) {
      if (!map.has(e.letter)) map.set(e.letter, []);
      map.get(e.letter).push(e);
    }
    for (const [k, arr] of map.entries()) arr.sort((a, b) => a.term.localeCompare(b.term));
    return map;
  }, []);

  const filteredMap = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return lettersWithEntries;
    const map = new Map();
    lettersWithEntries.forEach((arr, letter) => {
      const matches = arr.filter((e) => {
        const hay = `${e.term} ${e.body} ${e.tags?.join(' ')}`.toLowerCase();
        return hay.includes(q);
      });
      if (matches.length) map.set(letter, matches);
    });
    return map;
  }, [query, lettersWithEntries]);

  const navLetters = alphabet.filter((l) => lettersWithEntries.has(l));

  // -----------------------------------------------
  // Small presentational helpers
  // -----------------------------------------------
  const Badge = ({ children }) => (
    <span className="inline-flex items-center rounded-full border border-[#E4E0CF] px-2 py-0.5 text-[11px] font-medium text-[#5a6f7b]">
      {children}
    </span>
  );

  const SourceLink = ({ href, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-[#B4A77E] hover:underline text-sm"
    >
      {label} <ExternalLink size={14} aria-hidden />
    </a>
  );

  const CopyAnchorButton = ({ targetId }) => (
    <button
      onClick={async () => {
        const url = `${window.location.origin}${window.location.pathname}#${targetId}`;
        await navigator.clipboard.writeText(url);
      }}
      className="ml-2 inline-flex items-center gap-1 text-xs text-[#5a6f7b] hover:text-[#002D3D]"
      aria-label="Copy link to this term"
    >
      <LinkIcon size={14} /> Copy link
    </button>
  );

  // -----------------------------------------------
  // RENDER
  // -----------------------------------------------
  return (
    <>
      <section className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Header */}
          <motion.header
            id="glossary-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <BookMarked size={16} /> Golden Visa Reference
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-balance">
              The Ultimate Portugal Golden Visa Glossary (2026 Update)
            </h1>
            <p className="text-base text-[#5a6f7b]">
              Published: October 24, 2025 | Last Updated: October 24, 2025
            </p>
            <p className="mt-4 text-lg text-[#15364A] font-light text-balance">
              Navigate the A-Z of Portugal’s Golden Visa: clean definitions, trustworthy sources, and practical notes about process, regulators, routes, and requirements.
            </p>

            {/* Quick facts row */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="flex items-center gap-2 rounded-xl border border-[#E4E0CF] p-3">
                <ShieldCheck size={18} className="shrink-0" />
                <div>
                  <div className="font-semibold">CMVM-Regulated Funds</div>
                  <div className="text-[#5a6f7b]">Primary GV route since 2023</div>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-[#E4E0CF] p-3">
                <Clock size={18} className="shrink-0" />
                <div>
                  <div className="font-semibold">5-Year Path</div>
                  <div className="text-[#5a6f7b]">Time counts from application (Art. 158-A)</div>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-[#E4E0CF] p-3">
                <Globe size={18} className="shrink-0" />
                <div>
                  <div className="font-semibold">Schengen Access</div>
                  <div className="text-[#5a6f7b]">90/180-day travel rule</div>
                </div>
              </div>
            </div>
          </motion.header>

          {/* Tools row: search + A-Z */}
          <div className="bg-gray-50 p-4 border border-gray-200 sticky top-16 z-10 space-y-3">
            <label className="relative block">
              <span className="absolute left-3 top-1/2 -translate-y-1/2"><Search size={16} /></span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search terms, tags (e.g., fund, tax, AIMA)…"
                className="w-full rounded-md border border-gray-300 py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B4A77E]"
              />
            </label>
            <nav aria-label="Glossary Navigation" className="flex flex-wrap justify-center gap-x-2 gap-y-1">
              {navLetters.map((letter) => (
                <button
                  key={letter}
                  onClick={() => scrollToId(`section-${letter}`)}
                  className="text-sm font-semibold text-[#002D3D] hover:text-[#B4A77E] hover:underline px-1 py-0.5 focus:outline-none focus:ring-1 focus:ring-[#B4A77E]"
                  aria-label={`Jump to section ${letter}`}
                >
                  {letter}
                </button>
              ))}
            </nav>
          </div>

          {/* Sections */}
          {[...filteredMap.keys()].sort().map((letter) => (
            <section key={letter} id={`section-${letter}`} className="space-y-4 scroll-mt-24 pt-4">
              <h2 className="text-2xl font-bold text-[#B4A77E] border-b border-[#E4E0CF] pb-2">{letter}</h2>
              <div className="space-y-4 pl-1">
                {filteredMap.get(letter).map((e) => (
                  <div key={e.id} id={e.id} className="group">
                    <p className="text-[15px] leading-relaxed">
                      <strong className="font-semibold text-[#002D3D]">{e.term}:</strong>{' '}
                      {e.body}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      {e.tags?.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                      {e.sources?.map((s, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1">
                          <SourceLink href={s.href} label={s.label} />
                        </span>
                      ))}
                      <CopyAnchorButton targetId={e.id} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Disclaimer */}
          <section id="glossary-conclusion" className="pt-8 border-t border-gray-200 mt-10">
            <h3 className="text-xl font-semibold text-[#002741] mb-3 flex items-center gap-2">
              <Info size={18} /> Disclaimer
            </h3>
            <p className="text-[#15364A] text-balance text-sm">
              This glossary is informational only and does not constitute legal, financial, or investment advice. Rules can change. Always consult qualified counsel, tax advisors, and licensed financial professionals. Explorer Investments is CMVM-regulated and does not provide immigration or legal services. Last updated: October 24, 2025.
            </p>
          </section>

          {/* CTA */}
          <CtaSection />
        </div>
      </section>

      {/* Related */}
      <BlogArticles />

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-[#002741] text-white px-3 py-2 shadow-lg hover:bg-[#014063] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B4A77E]"
          aria-label="Back to top"
        >
          <ArrowUp size={16} /> Top
        </button>
      )}

      {/* JSON-LD (Article) - keep lightweight inside component */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The Ultimate Portugal Golden Visa Glossary (2026 Update)',
            description:
              'A-Z glossary for the Portugal Golden Visa with definitions, sources, and practical notes about regulators, funds, documents, and process.',
            author: { '@type': 'Organization', name: site.author },
            publisher: {
              '@type': 'Organization',
              name: site.brand,
              logo: { '@type': 'ImageObject', url: ensureAbsoluteUrl(site.logo) },
            },
            image: [ensureAbsoluteUrl(site.fallbackImage)],
            datePublished: '2025-10-24',
            dateModified: '2025-10-24',
            mainEntityOfPage: ensureAbsoluteUrl('/'),
          }),
        }}
      />
    </>
  );
};

export default GoldenVisaGlossaryArticle;
