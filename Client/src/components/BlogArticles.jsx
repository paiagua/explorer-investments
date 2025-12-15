'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { CalendarDays, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

const BLOG_HOST = 'https://goldenvisashub.com';
const FALLBACK_IMAGE = '/assets/images/logoblue.png';
const PUBLISHER_NAME = 'Explorer Investments';
const PUBLISHER_LOGO = `${BLOG_HOST}/assets/images/logo/rss-logo-144.png`;

/* ---------------- Helpers ---------------- */
const clean = (s) => (typeof s === 'string' ? s.replace(/\s+/g, ' ').trim() : '');
const safeDate = (s) => {
  const t = Date.parse(s || '');
  return Number.isNaN(t) ? null : new Date(t);
};
const fmtDate = (s) => {
  const d = safeDate(s);
  return d
    ? d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    : 'Unknown date';
};

/* ---------------- Component ---------------- */
export default function BlogPreviewGridFromRSS({
  feedUrl = '/data/feed.rss',
  currentSlug = '',
  maxItems = 3,
  sectionTitle = "Latest Insights on Portugal's Golden Visa Program",
  headingLevel = 'h2',
}) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(maxItems || 3);

  // ---------- FETCH ----------
  useEffect(() => {
    let cancelled = false;
    const fetchRSS = async () => {
      setLoading(true);
      try {
        const res = await fetch(feedUrl, { cache: 'force-cache' });
        if (!res.ok) throw new Error(`Failed to fetch RSS: ${res.statusText}`);
        const xmlText = await res.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        const items = Array.from(xmlDoc.getElementsByTagName('item')).map((item) => {
          const get = (tag) => item.getElementsByTagName(tag)[0]?.textContent?.trim() || '';
          const getNS = (ns, tag) => item.getElementsByTagNameNS(ns, tag)[0]?.textContent?.trim() || '';
          const title = get('title');
          const link = get('link');
          const description = get('description');
          const pubDate = get('pubDate');
          const creator = getNS('http://purl.org/dc/elements/1.1/', 'creator') || 'Explorer Investments';
          const imageEl = item.getElementsByTagNameNS('http://search.yahoo.com/mrss/', 'content')[0];
          const image = imageEl?.getAttribute('url') || FALLBACK_IMAGE;
          const categories = Array.from(item.getElementsByTagName('category')).map((c) => c.textContent?.trim());
// helpers fora do componente (ou acima do map)
const hostname = (u) => u.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/.*$/, '');
const toSlug = (s) =>
  clean(s)
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/[^a-z0-9]+/g, '-')                     // separadores
    .replace(/(^-|-$)/g, '');                        // trim '-'

// dentro do map(...)
let slug = '';
try {
  const linkUrl = new URL(link);
  const hostOk = hostname(linkUrl.href) === hostname(BLOG_HOST);
  // se for o mesmo host, usa o pathname; caso contrário, slugify do título
  slug = hostOk
    ? linkUrl.pathname.replace(/^\/|\/$/g, '')
    : toSlug(title);
} catch {
  // se link inválido, usa título; em último caso, um fallback claro
  slug = toSlug(title) || `fallback-slug-${Math.floor(Math.random() * 1e6)}`;
}

          const date = safeDate(pubDate)?.toISOString() || '';
          return { title, link, slug, description, image, date, creator, categories };
        });

        const filtered = items
          .filter((a) => a.title && a.slug && a.date)
          .filter((a) => a.slug !== currentSlug)
          .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

        if (!cancelled) setArticles(filtered);
      } catch (err) {
        console.error('Error parsing RSS feed:', err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchRSS();
    return () => { cancelled = true; };
  }, [feedUrl, currentSlug]);

  // ---------- JSON-LD ----------
  const jsonLd = useMemo(() => {
    if (!articles.length) return null;
    const visibleItems = articles.slice(0, visible);

    const itemList = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: sectionTitle,
      itemListElement: visibleItems.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: a.link,
        name: a.title,
      })),
    };

    const postings = visibleItems.map((a) => ({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: a.link,
      headline: a.title,
      description: a.description,
      image: [a.image],
      datePublished: a.date,
      dateModified: a.date,
      author: { '@type': 'Person', name: a.creator },
      publisher: {
        '@type': 'Organization',
        name: PUBLISHER_NAME,
        logo: { '@type': 'ImageObject', url: PUBLISHER_LOGO },
      },
      articleSection: a.categories?.join(', ') || undefined,
      inLanguage: 'en',
    }));

    return JSON.stringify([itemList, ...postings]);
  }, [articles, visible, sectionTitle]);

  const HeadingTag = headingLevel;

  // ---------- Render ----------
  if (!loading && articles.length === 0) return null;

  return (
    <section className="bg-[#F9F9FC] py-12 px-4" aria-labelledby="related-insights-title">
      {jsonLd && (
        <Script id="jsonld-rss" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      )}

      <div className="max-w-6xl mx-auto">
        <HeadingTag id="related-insights-title" className="text-3xl font-bold text-[#002D3D] mb-10">
          {sectionTitle}
        </HeadingTag>

        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]" aria-busy="true">
            <Loader2 className="h-8 w-8 animate-spin text-[#B4A77E]" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
              {articles.slice(0, visible).map((a, idx) => (
                <article
                  key={a.slug}
                  className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col"
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <meta itemProp="mainEntityOfPage" content={a.link} />

                  <Link href={a.link} className="block mb-4 relative h-48 w-full" aria-hidden="true">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      priority={idx === 0}
                      className="object-cover rounded-md"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </Link>

                  <h3 className="text-xl font-semibold text-[#002D3D] mb-2 leading-tight" itemProp="headline">
                    <Link href={a.link} className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#B4A77E]">
                      {a.title}
                    </Link>
                  </h3>

                  {a.description && (
                    <p className="text-sm text-gray-700 mb-4 line-clamp-4" itemProp="description">
                      {a.description}
                    </p>
                  )}

                  <div className="mt-auto flex justify-between items-center border-t border-gray-100 pt-3 text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      <CalendarDays size={16} aria-hidden />
                      <time itemProp="datePublished" dateTime={a.date}>
                        {fmtDate(a.date)}
                      </time>
                    </span>

                    <Link
                      href={a.link}
                      className="inline-flex items-center gap-2 bg-[#B4A77E] text-white px-4 py-2 rounded-full hover:bg-[#a4956a] transition"
                      aria-label={`Read more: ${a.title}`}
                    >
                      Read More <ArrowRight size={16} aria-hidden />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {visible < articles.length && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setVisible((v) => v + (maxItems || 3))}
                  className="px-6 py-2 bg-[#002D3D] text-white rounded-md hover:bg-[#001f2b] transition"
                >
                  Load More Articles
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
