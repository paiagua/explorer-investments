'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers, faGlobeEurope, faPassport, faSuitcaseRolling, faUniversity, faHeart,
  faUserFriends, faBriefcaseMedical, faPlaneDeparture, faChartLine
} from '@fortawesome/free-solid-svg-icons';
import { ArrowRight } from 'lucide-react';

/* ===================== helpers ===================== */
const sanitizeImg = (src) => (!src ? '' : src.startsWith('http://') ? src.replace('http://', 'https://') : src);
const fmtDate = (d) =>
  d && !Number.isNaN(Date.parse(d))
    ? new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    : null;

const timeAgo = (isoOrRfc) => {
  const t = Date.parse(isoOrRfc || '');
  if (Number.isNaN(t)) return null;
  const diff = Math.floor((Date.now() - t) / 1000);
  const units = [
    ['year', 31536000],
    ['month', 2592000],
    ['week', 604800],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
  ];
  for (const [name, sec] of units) {
    if (diff >= sec) {
      const v = Math.floor(diff / sec);
      return `${v} ${name}${v > 1 ? 's' : ''} ago`;
    }
  }
  return 'just now';
};
const hostnameOf = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
};

/* ===================== conteúdo estático ===================== */
const visaOptions = [
  {
    icon: faChartLine,
    title: 'Investment in Qualified Funds',
    description:
      'Invest a minimum of €500,000 in a regulated venture/private equity fund that capitalises Portuguese companies.',
  },
  {
    icon: faSuitcaseRolling,
    title: 'Business & Job Creation',
    description:
      'Create at least 10 full-time jobs. From €500,000 total company capitalisation; reductions apply in low-density areas.',
  },
  {
    icon: faGlobeEurope,
    title: 'Donation to Arts, Culture, or Science',
    description:
      '€250,000 for artistic production/cultural heritage or €500,000 for scientific research activities.',
  },
];

const familyMembers = [
  { icon: faUserFriends, text: 'Spouse or partner in a stable union' },
  { icon: faUsers, text: 'Children under 18 years old' },
  { icon: faUniversity, text: 'Dependent children up to 26 (single + studying)' },
  { icon: faHeart, text: 'Investor’s or spouse’s financially dependent parents' },
  { icon: faUserFriends, text: 'Underage siblings under guardianship (specific cases)' },
];

const familyBenefits = [
  { icon: faPassport, text: 'All members get legal residency in Portugal' },
  { icon: faBriefcaseMedical, text: 'Access to public healthcare and education' },
  { icon: faPlaneDeparture, text: 'Schengen travel freedom' },
];

/* ===================== seções ===================== */
const InvestmentOptionsSection = ({ options }) => (
  <section className="w-full bg-white py-14 px-6" aria-labelledby="opts-title">
    <div className="mx-auto max-w-screen-xl">
      <header className="mb-8">
        <h2 id="opts-title" className="text-3xl font-bold text-[#002741] tracking-tight">
          Portuguese Golden Visa 2025 - Options
        </h2>
        <p className="mt-2 max-w-3xl text-base text-gray-600">
          After the 2023 changes, these are the primary routes. The fund option is currently the most popular for
          combining residency eligibility with potential returns.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {options.map((option, i) => (
          <Link
            key={i}
            href="#DivAskSimulation"
            scroll
            className="group flex flex-col rounded-2xl border border-gray-200 bg-[#F7F6F1] p-6 shadow-sm transition hover:bg-[#F1EFE7] focus:outline-none focus:ring-2 focus:ring-[#B4A77E]"
            aria-label={`Get details about ${option.title}`}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E4E0CF] bg-white">
                <FontAwesomeIcon icon={option.icon} className="text-lg text-[#B4A77E]" />
              </span>
              <h3 className="text-lg font-semibold text-[#002741]">{option.title}</h3>
            </div>
            <p className="mt-3 flex-1 text-sm text-gray-700">{option.description}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#002741]">
              Get Full Details <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          href="#DivAskSimulation"
          scroll
          className="rounded-full bg-[#002741] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#01425b]"
        >
          Request Your Investment Analysis
        </Link>
        <Link href="#DivAskSimulation" scroll className="inline-flex items-center gap-1 text-sm font-semibold text-[#002741]">
          Talk to a Specialist <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
);

const NewsGrid = ({ posts, title = 'Latest Insights on the Portuguese Golden Visa', subtitle }) => {
  // JSON-LD (ItemList + Articles)
  const jsonLd = useMemo(() => {
    if (!posts?.length) return null;
    const itemList = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: posts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: p.loc,
        name: p.title,
      })),
    };
    const articles = posts.map((p) => ({
      '@context': 'https://schema.org',
      '@type': 'Article',
      mainEntityOfPage: p.loc,
      headline: p.title,
      description: p.description || undefined,
      datePublished: p.date || undefined,
      dateModified: p.date || undefined,
      image: sanitizeImg(p.image) || undefined,
    }));
    return JSON.stringify([itemList, ...articles]);
  }, [posts]);

  return (
    <>
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />}
      <section className="w-full" aria-labelledby="news-title">
        <header className="mb-8 text-center">
          <h2 id="news-title" className="text-3xl font-bold tracking-tight text-[#002741]">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-2 max-w-2xl text-base text-gray-600">
              {subtitle}
            </p>
          )}
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list" aria-label="Latest News">
          {posts.map((post, i) => {
            const img = sanitizeImg(post.image);
            const ago = timeAgo(post.date);
            const fresh = post.date && Date.now() - Date.parse(post.date) < 7 * 24 * 60 * 60 * 1000; // 7 dias
            const host = hostnameOf(post.loc);

            return (
              <article
                key={post.loc || i}
                role="listitem"
                className={`group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-within:-translate-y-0.5 focus-within:shadow-md ${
                  i >= 3 ? 'hidden sm:block' : ''
                }`}
                itemScope
                itemType="https://schema.org/Article"
              >
                <Link
                  href={post.loc}
                  target="_blank"
                  rel="noopener"
                  className="flex h-full flex-col focus:outline-none"
                  aria-label={`Read: ${post.title}`}
                >
                  {/* imagem */}
                  <div className="relative h-44 w-full bg-gray-100 lg:h-48">
                    {img ? (
                      <Image
                        src={img}
                        alt={post.title || 'Portuguese Golden Visa news'}
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                        priority={i === 0}
                        className="object-cover"
                      />
                    ) : (
                      <span className="sr-only">No image</span>
                    )}
                    {fresh && (
                      <span className="absolute left-2 top-2 rounded bg-[#B4A77E] px-2 py-0.5 text-[11px] font-semibold text-white">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* conteúdo */}
                  <div className="flex flex-1 flex-col p-4">
                    {/* meta-row */}
                    <div className="mb-2 flex items-center gap-2 text-[12px] text-gray-600">
                      {host ? (
                        <img
                          src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=64`}
                          alt=""
                          width={14}
                          height={14}
                          className="rounded-sm opacity-80"
                          loading="lazy"
                        />
                      ) : null}
                      {host && <span className="max-w-[40%] truncate">{host}</span>}
                      {host && ago && <span>•</span>}
                      {ago && (
                        <time dateTime={post.date} itemProp="datePublished">
                          {ago}
                        </time>
                      )}
                    </div>

                    {/* título */}
                    <h3
                      className="line-clamp-2 text-[15px] font-semibold leading-snug text-[#0f2f46] group-hover:underline"
                      itemProp="headline"
                    >
                      {post.title}
                    </h3>

                    {/* categorias */}
                    {post.cats?.length ? (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {post.cats.slice(0, 3).map((c, idx) => (
                          <span
                            key={idx}
                            className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[11px] font-medium"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    {/* descrição */}
                    {post.description && (
                      <p className="mt-2 line-clamp-3 text-[13px] text-gray-700" itemProp="description">
                        {post.description}
                      </p>
                    )}

                    {/* CTA */}
                    <span className="mt-4 self-end inline-flex items-center gap-1.5 rounded-md border border-[#5F4F33] bg-[#705D3B] px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm transition hover:bg-[#5F4F33]">
                      See More <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {/* CTA mobile */}
        <div className="mt-5 sm:hidden">
          <Link
            href="/golden-visa-portugal-blog"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00538B] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#00406d]"
          >
            View all <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
};

const FamilyBlock = () => (
  <section className="px-6 py-10" aria-labelledby="family-title">
    <div className="mx-auto max-w-screen-xl">
      <header className="mb-4">
        <h2 id="family-title" className="text-3xl font-bold text-[#002741]">
          The Portuguese Golden Visa Is for You
        </h2>
        <p className="mt-1 text-base text-[#002741]">- and Your Family</p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-2 font-semibold text-[#002741]">Who Can Be Included</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            {familyMembers.map((m, i) => (
              <li key={i} className="flex items-start gap-2">
                <FontAwesomeIcon icon={m.icon} className="mt-1 text-[#002741]" />
                <span>{m.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-semibold text-[#002741]">Family Benefits</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            {familyBenefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <FontAwesomeIcon icon={b.icon} className="mt-1 text-[#002741]" />
                <span>{b.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href="#DivAskSimulation"
          scroll
          className="rounded-full bg-[#002741] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#01425b]"
        >
          Request Your Investment Analysis
        </Link>
      </div>
    </div>
  </section>
);

/* ===================== componente principal ===================== */
export default function BenefitsWithFamilyAndNews() {
  const [posts, setPosts] = useState([]);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/data/feed.rss', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to load RSS');
        const xml = await res.text();

        const textBetween = (s, tag) =>
          (s.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'))?.[1] ?? '').trim();
        const cdataOrText = (s, tag) => {
          const raw = textBetween(s, tag);
          const c = raw.match(/<!\[CDATA\[(.*)\]\]>/s);
          return (c ? c[1] : raw).trim();
        };
        const mediaUrl = (s) => s.match(/<media:content[^>]*url="([^"]+)"/i)?.[1] ?? '';
        const categories = (s) =>
          Array.from(s.matchAll(/<category[^>]*>([\s\S]*?)<\/category>/gi))
            .map((m) => (m[1].match(/<!\[CDATA\[(.*)\]\]>/s)?.[1] ?? m[1]).trim())
            .filter(Boolean);

        const itemsXml = Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)).map((m) => m[1]);

        const items = itemsXml
          .map((it) => ({
            loc: textBetween(it, 'link'),
            date: textBetween(it, 'pubDate'),
            title: cdataOrText(it, 'title'),
            description: cdataOrText(it, 'description'),
            image: mediaUrl(it),
            cats: categories(it),
          }))
          .filter((p) => p.title && p.loc)
          .sort((a, b) => Date.parse(b.date || '') - Date.parse(a.date || ''))
          .slice(0, 6);

        setPosts(items);
      } catch (e) {
        console.error(e);
        setLoadError(true);
      }
    })();
  }, []);

  return (
    <>
      <InvestmentOptionsSection options={visaOptions} />

      <section className="bg-white px-6 py-10">
        <div className="mx-auto max-w-screen-xl">
          {loadError ? (
            <p className="text-sm text-gray-600">We couldn’t load the news right now. Please refresh the page.</p>
          ) : (
            <NewsGrid
              posts={posts}
              title="Latest Insights on the Portuguese Golden Visa"
              subtitle="Explore our most recent analyses, investor guides, and policy updates - always up to date with the latest developments in Portugal’s investment residency program."
            />
          )}
        </div>
      </section>

      <FamilyBlock />
    </>
  );
}
