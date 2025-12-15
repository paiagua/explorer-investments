'use client';

import React, { useEffect, useMemo, useRef, useState } from "react";
import { CalendarDays, ArrowRight, Search, ChevronLeft, ChevronRight, Pause, Play, X, Filter, AlertTriangle, Loader2 } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import BannerCTA from "./BannerCTA";

const BLOG_HOST = 'https://goldenvisashub.com'; // ajusta se precisares

const hostname = (u) =>
  (u || '').replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/.*$/, '');

const toSlug = (s) =>
  (s || '')
    .toString()
    .trim()
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/[^a-z0-9]+/g, '-')                      // separadores
    .replace(/(^-|-$)/g, '');                         // trim '-'

const urlToSlug = (link, title) => {
  try {
    const u = new URL(link);
    const sameHost = hostname(u.href) === hostname(BLOG_HOST);
    // se for o mesmo host: usa pathname; senão: slugify do título
    const path = sameHost ? u.pathname.replace(/^\/|\/$/g, '') : '';
    return path || toSlug(title) || `fallback-${Math.floor(Math.random()*1e6)}`;
  } catch {
    return toSlug(title) || `fallback-${Math.floor(Math.random()*1e6)}`;
  }
};

const getFormattedDate = (dateString) => {
  if (!dateString || isNaN(Date.parse(dateString))) return "Invalid date";
  return new Date(dateString).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
};
const normalizeArticles = (arr = []) =>
  (Array.isArray(arr) ? arr : [])
    .filter((a) => a && (a.title || a.link)) // remove null/undefined logo no início
    .map((a, i) => {
      const dateISO =
        !a?.date || isNaN(Date.parse(a.date))
          ? null
          : new Date(a.date).toISOString();

      const slug =
        a?.slug && a.slug.trim()
          ? a.slug.replace(/^\/|\/$/g, "")
          : urlToSlug(a?.link, a?.title);

      return {
        ...a,
        slug,
        date: dateISO || a?.date || "",
        image: a?.image || site.fallbackImage,
        tags: Array.isArray(a?.tags)
          ? a.tags.filter(Boolean)
          : (a?.categories || a?.keywords || "")
              .toString()
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean),
        _key: `${slug}-${dateISO || i}`,
      };
    })
    .filter((a) => a && a.title && a.slug); // reforço aqui

const formatTimeAgo = (dateString) => {
  if (!dateString || isNaN(Date.parse(dateString))) return "";
  const date = new Date(dateString); const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (seconds < 5) return "Just now";
  if (seconds < 60) return `${Math.floor(seconds)} sec${seconds>1?'s':''}`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min${minutes>1?'s':''}`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr${hours>1?'s':''}`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} day${days>1?'s':''}`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} mo${months>1?'s':''}`;
  const years = Math.floor(days / 365);
  return `${years} yr${years>1?'s':''}`;
};
const site = { fallbackImage: "/assets/images/logoblue.png" };

/* ================= cards ================= */
const HeroArticleCard = ({ article, onTagClick, priority = false }) => {
  if (!article || !article.slug) {
    return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3" role="alert">Error loading featured article.</div>;
  }
  const { slug, title, description, date, image, readingTime, tags = [] } = article;
  const absoluteArticleUrl = `/${slug}`;
  const backgroundStyle = image ? { backgroundImage: `url('${image}')` } : { backgroundColor: '#e5e7eb' };

  return (
    <article className="bg-white shadow-md border border-gray-200 overflow-hidden transition hover:shadow-lg grid grid-cols-1 md:grid-cols-2 md:h-[36rem]" aria-labelledby={`hero-title-${slug}`}>
      <div className="p-8 md:p-12 flex flex-col gap-6 order-2 md:order-1 overflow-hidden h-full">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600">
          {readingTime && <span className="flex items-center gap-1">🕒 {readingTime} min read</span>}
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-2"><CalendarDays size={16} /> {getFormattedDate(date)}</span>
        </div>
        <h3 id={`hero-title-${slug}`} className="text-3xl lg:text-4xl font-extrabold text-[#002D3D] leading-tight">
          <Link href={absoluteArticleUrl} className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#B4A77E]">
            {title || "Untitled Article"}
          </Link>
        </h3>
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {tags.slice(0, 4).map((tag, i) => (
              <button
                key={`${tag}-${i}`} onClick={() => onTagClick(tag)}
                className="text-xs font-semibold bg-gray-100 text-[#002D3D] px-3 py-1 border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-[#B4A77E]"
                title={`Filter by tag: ${tag}`} aria-label={`Filter by tag: ${tag}`}
              >{tag}</button>
            ))}
          </div>
        )}
        {description && <p className="text-lg text-gray-700 max-w-prose flex-grow mb-4 overflow-y-auto">{description}</p>}
        <div className="mt-auto pt-2">
          <Link href={absoluteArticleUrl} className="inline-flex items-center gap-2 text-[#B4A77E] font-semibold hover:underline focus:outline-none focus:ring-1 focus:ring-[#B4A77E]" aria-label={`Read more about ${title || 'this article'}`}>
            Read More <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <Link href={absoluteArticleUrl} aria-label={`Read more about ${title || 'this article'} (visual link)`} className="order-1 md:order-2 block h-80 md:h-full bg-gray-300 bg-cover bg-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B4A77E]" style={backgroundStyle}>
        <span className="sr-only">Featured image for {title || 'article'}</span>
        {priority && image && (<link rel="preload" href={image} as="image" />)}
      </Link>
    </article>
  );
};

const SecondaryArticleCard = ({ article, onTagClick }) => {
  // 🔒 se vier undefined, não rebenta
  if (!article || !article.slug) return null;

  const { slug, title, date, image, tags = [], readingTime } = article;
  const absoluteArticleUrl = `/${slug}`;
  const imageUrl = image || site.fallbackImage;

  return (
    <article className="bg-white shadow-sm border border-gray-200 overflow-hidden transition hover:shadow-md flex flex-col h-full" aria-labelledby={`secondary-title-${slug}`}>
      {imageUrl && (
        <Link href={absoluteArticleUrl} aria-hidden="true" tabIndex={-1} className="relative block h-40 w-full">
          <Image src={imageUrl} alt="" fill className="object-cover" loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
        </Link>
      )}
      <div className="p-5 flex flex-col flex-grow gap-3">
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, i) => (
              <button
                key={`${tag}-${i}`}
                onClick={() => onTagClick?.(tag)}
                className="text-[11px] font-semibold bg-gray-100 text-[#002D3D] px-2.5 py-1 border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-[#B4A77E]"
              >
                {tag}
              </button>
            ))}
          </div>
        )}
        <h3 id={`secondary-title-${slug}`} className="text-lg font-semibold text-[#002D3D] leading-snug flex-grow">
          <Link href={absoluteArticleUrl} className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#B4A77E]">
            {title || "Untitled Article"}
          </Link>
        </h3>
        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-[#555]">
          <span className="flex items-center gap-1">
            <CalendarDays size={12} /> {getFormattedDate(date)}
          </span>
        </div>
      </div>
    </article>
  );
};


const GridArticleCard = ({ article, onTagClick }) => {
 
  if (!article || !article.slug) {
    return null;  
  }

  const { slug, title, description, date, image, tags = [] } = article;
  const absoluteArticleUrl = `/${slug}`;
  const imageUrl = image || site.fallbackImage;

  return (
    <article
      className="bg-white p-6 shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col h-full"
      aria-labelledby={`grid-title-${slug}`}
    >
      {imageUrl && (
        <Link
          href={absoluteArticleUrl}
          aria-hidden="true"
          tabIndex={-1}
          className="mb-4 block relative h-48 w-full"
        >
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </Link>
      )}

      <div className="flex flex-col flex-grow">
        {tags?.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, i) => (
              <button
                key={`${tag}-${i}`}
                onClick={() => onTagClick?.(tag)}
                className="text-xs font-semibold bg-gray-100 text-[#002D3D] px-2.5 py-1 border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-[#B4A77E]"
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <h3
          id={`grid-title-${slug}`}
          className="mb-2 text-xl font-semibold leading-tight text-[#002D3D]"
        >
          <Link
            href={absoluteArticleUrl}
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#B4A77E]"
          >
            {title || "Untitled Article"}
          </Link>
        </h3>

        {description && (
          <p className="mb-4 line-clamp-4 text-sm text-gray-700">
            {description}
          </p>
        )}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-[#555]">
        <span className="flex items-center gap-2">
          <CalendarDays size={16} /> {getFormattedDate(date)}
        </span>
        <Link
          href={absoluteArticleUrl}
          className="inline-flex items-center gap-2 font-semibold text-[#B4A77E] hover:underline focus:outline-none focus:ring-1 focus:ring-[#B4A77E]"
          aria-label={`Read more about ${title || "this article"}`}
        >
          Read More <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
};



/* ================= sidebar ================= */
const LatestHeadlines = ({ articles }) => {
  const safe = Array.isArray(articles) ? articles : [];
  return (
    <div className="rounded-md border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 border-b border-gray-200 pb-3 text-xl font-bold text-[#002D3D]">Latest Updates</h3>
      <ul className="space-y-4">
        {safe.length ? safe.map((a) => (
          <li key={a.slug + '-latest'} className="flex items-start gap-3">
            <span className="w-14 shrink-0 pt-0.5 text-right text-sm text-gray-500">{formatTimeAgo(a.date)}</span>
            <Link href={`/${a.slug}`} className="leading-tight text-sm font-semibold text-gray-800 hover:underline focus:outline-none focus:ring-1 focus:ring-[#B4A77E]">
              {a.title}
            </Link>
          </li>
        )) : <li className="text-sm text-gray-500">No recent articles.</li>}
      </ul>
    </div>
  );
};

const InFocusTags = ({ tags, onTagClick, activeTags }) => {
  const safeTags = Array.isArray(tags) ? tags : [];
  const act = Array.isArray(activeTags) ? activeTags : [];
  return (
    <div className="mt-8 rounded-md border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 border-b border-gray-200 pb-3 text-xl font-bold text-[#002D3D]">Filter by Topic</h3>
      {safeTags.length ? (
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by tags">
          {safeTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagClick(tag)}
              className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-[#B4A77E] ${
                act.includes(tag)
                  ? "border-[#002D3D] bg-[#002D3D] text-white"
                  : "border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-black"
              }`}
              aria-pressed={act.includes(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      ) : <p className="text-sm text-gray-500">No topics available.</p>}
    </div>
  );
};

/* ================= hero carousel ================= */
const HeroCarousel = ({ items, onTagClick }) => {
  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(!prefersReducedMotion);
  const timer = useRef(null);
  const safeItems = useMemo(() => items || [], [items]);

  const go = (dir) => { if (safeItems.length <= 1) return; setIndex((i) => (i + dir + safeItems.length) % safeItems.length); };
  const goTo = (i) => { if (safeItems.length <= 1) return; setIndex(((i % safeItems.length) + safeItems.length) % safeItems.length); };

  useEffect(() => {
    if (!playing || safeItems.length <= 1) { clearInterval(timer.current); return; }
    clearInterval(timer.current);
    timer.current = setInterval(() => go(1), 6000);
    return () => clearInterval(timer.current);
  }, [playing, safeItems.length, index]);

  useEffect(() => () => clearInterval(timer.current), []);

  if (!safeItems.length) return null;
  const currentItem = safeItems[index];

  return (
    <section aria-roledescription="carousel" aria-label="Top stories" className="relative mb-12">
      <div className="relative group">
        {currentItem && <HeroArticleCard key={currentItem.slug + index} article={currentItem} onTagClick={onTagClick} priority={index === 0} />}
        {safeItems.length > 1 && (
          <>
            <button className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/95 p-2 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#B4A77E]" onClick={() => go(-1)} aria-label="Previous story"><ChevronLeft size={20} /></button>
            <button className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/95 p-2 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#B4A77E]" onClick={() => go(1)} aria-label="Next story"><ChevronRight size={20} /></button>
            <div className="absolute bottom-4 left-0 right-0 z-10 flex items-center justify-center gap-3">
              <button onClick={() => setPlaying((p) => !p)} className="rounded-full bg-white/95 p-1.5 shadow focus:outline-none focus:ring-2 focus:ring-[#B4A77E]" aria-label={playing ? "Pause autoplay" : "Start autoplay"}>
                {playing ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <ol className="flex gap-2" role="tablist" aria-label="Featured articles navigation">
                {safeItems.map((it, i) => (
                  <li key={it.slug + '-dot'} role="presentation">
                    <button role="tab" aria-selected={index === i} onClick={() => goTo(i)} className={`block h-2 w-7 rounded-full border border-black/10 shadow transition-colors duration-200 ${index === i ? "bg-[#B4A77E]" : "bg-white/90 hover:bg-white"}`} aria-label={`Go to article ${i + 1}: ${it.title}`} />
                  </li>
                ))}
              </ol>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

/* ================= homepage section (ONLY “More News”) ================= */
const PAGE_CHUNK = 32;

const NewsHomepageSection = ({ articles = [], onTagClick, allTags = [], activeTags = [], toggleFilterTag }) => {
  const [visible, setVisible] = useState(PAGE_CHUNK);
  const [loadingMore, setLoadingMore] = useState(false);
  const canLoadMore = visible < articles.length;

  const loadMore = async () => {
    if (!canLoadMore) return;
    setLoadingMore(true);
    // simula tempo de render; em dados SSR já tens tudo local
    await new Promise(r => setTimeout(r, 350));
    setVisible((v) => Math.min(v + PAGE_CHUNK, articles.length));
    setLoadingMore(false);
  };

  // ItemList JSON-LD dos visíveis (bom para SEO sem ser “infinite-only”)
  const jsonLd = useMemo(() => {
    if (!articles?.length) return null;
    const slice = articles.slice(0, visible);
    const itemList = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: slice.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `/${p.slug}`,
        name: p.title
      })),
    };
    return JSON.stringify(itemList);
  }, [articles, visible]);

  return (
    <>
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />}
      <section aria-labelledby="more-news-title">
        <h2 id="more-news-title" className="mb-5 border-b border-gray-200 pb-3 text-2xl font-bold text-[#002D3D]">
          More News
        </h2>

        {articles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
              {articles.slice(0, visible).map((a) => (
                <SecondaryArticleCard key={a.slug + '-secondary'} article={a} onTagClick={onTagClick} />
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center">
              {canLoadMore ? (
                <button
                  onClick={loadMore}
                  className="inline-flex items-center gap-2 rounded-full border border-[#B4A77E] bg-[#B4A77E] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#B4A77E]"
                  aria-live="polite"
                >
                  {loadingMore && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                  Load more
                </button>
              ) : (
                <span className="text-sm text-gray-500">You’ve reached the end.</span>
              )}
            </div>
          </>
        ) : (
          <p className="text-gray-500">No news articles available yet.</p>
        )}

        {/* Sidebar ao lado deste bloco (fora daqui, no layout principal) */}
      </section>
    </>
  );
};

/* ================= main ================= */
const PAGE_SIZE_SEARCH = 30;
const scrollToMainTop = () => {
  const el = document.getElementById("main-content") || document.querySelector("main");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  else window.scrollTo({ top: 0, behavior: "smooth" });
};

const Benefits = ({ initialArticles, initialAllTags }) => {

  useEffect(() => {
  scrollToMainTop();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


const [articles, setArticles] = useState(() => normalizeArticles(initialArticles) || []);
const [allTags, setAllTags] = useState(() => (initialAllTags || []).filter(Boolean));

  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTags, setActiveTags] = useState([]);
  const [sortBy, setSortBy] = useState("date_desc");

  // filtragem + ordenação
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filtered = useMemo(() => {
    let list = articles;
    if (normalizedQuery) {
      list = list.filter(a =>
        (a.title?.toLowerCase() || '').includes(normalizedQuery) ||
        (a.description?.toLowerCase() || '').includes(normalizedQuery) ||
        (a.keywords?.toLowerCase() || '').includes(normalizedQuery) ||
        (a.tags || []).some(t => t?.toLowerCase().includes(normalizedQuery))
      );
    }
    if (activeTags.length > 0) {
      const lt = activeTags.map(t => t.toLowerCase());
      list = list.filter(a => lt.every(t => (a.tags || []).map(x => x?.toLowerCase()).includes(t)));
    }
    const sorted = [...list];
    switch (sortBy) {
      case "date_asc": sorted.sort((a,b)=>new Date(a.date)-new Date(b.date)); break;
      case "title_asc": sorted.sort((a,b)=>(a.title||'').localeCompare(b.title||'')); break;
      case "title_desc": sorted.sort((a,b)=>(b.title||'').localeCompare(a.title||'')); break;
      default: sorted.sort((a,b)=>new Date(b.date)-new Date(a.date));
    }
    return sorted;
  }, [articles, normalizedQuery, activeTags, sortBy]);


  useEffect(() => {
  setArticles(normalizeArticles(initialArticles));
}, [initialArticles]);

  // “Load more” para a vista de pesquisa/filtro
  const [visibleSearch, setVisibleSearch] = useState(PAGE_SIZE_SEARCH);
  useEffect(() => { setVisibleSearch(PAGE_SIZE_SEARCH); }, [normalizedQuery, activeTags, sortBy]);
  const canLoadMoreSearch = visibleSearch < filtered.length;
 
 const handleTagClick = (tag) => {
  setSearchQuery(tag);
  setActiveTags([]);
  setVisibleSearch(PAGE_SIZE_SEARCH); // reset do “load more” da pesquisa
  scrollToMainTop();
};

const toggleFilterTag = (tag) => {
  setActiveTags((prev) => {
    const next = prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag];
    return next;
  });
  setVisibleSearch(PAGE_SIZE_SEARCH);
  scrollToMainTop();
};

const clearAll = () => {
  setSearchQuery("");
  setActiveTags([]);
  setVisibleSearch(PAGE_SIZE_SEARCH);
  scrollToMainTop();
};

  const heroItems = articles.slice(0, 5);
  const latestHeadlines = articles.slice(0, 6);

  return (
    <main className=" px-4 py-16" role="main" id="main-content">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#002D3D]">Insights & News</h1>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600 md:mx-0">
            Stay informed about the latest developments in Portugal’s Golden Visa - from investment fund trends to new regulations and residency opportunities.
          </p>
        </header>

        {/* search + filtros */}
 

        {/* estado inicial vazio */}
        {articles.length === 0 ? (
          <div className="min-h-[300px] rounded-md border border-gray-200 bg-white p-8 text-center shadow-sm">
            <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-amber-500" />
            <p className="text-xl font-semibold">No Articles Found</p>
            <p className="mt-2 text-sm text-gray-500">{error || "Could not load articles from the feed or the feed is empty."}</p>
          </div>
        ) : (
          <>
            {/* HERO + CTA */}
            <HeroCarousel items={heroItems} onTagClick={(t)=>{ setSearchQuery(t); setActiveTags([]); }} />
            <div className="mx-auto my-12 max-w-7xl px-4 sm:px-0"><BannerCTA /></div>

            {/* MODE: search/filter -> grid com “Load more” */}
            {(searchQuery || activeTags.length) ? (
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
                <section className="lg:col-span-3" aria-live="polite">
                  {filtered.length === 0 ? (
                    <div className="min-h-[300px] rounded-md border border-gray-200 bg-white p-8 text-center shadow-sm">
                      <p className="text-2xl font-semibold text-gray-700">No articles match your criteria.</p>
                      <p className="mt-2 text-gray-500">Try adjusting your search or filters.</p>
                      <button onClick={clearAll} className="mt-6 rounded-md bg-[#B4A77E] px-6 py-3 font-semibold text-white shadow hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#B4A77E] focus:ring-offset-2">
                        View All News
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="grid auto-rows-fr grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
{filtered.slice(0, visibleSearch).map((a, idx) => {
 
  if (!a || !a.slug) return null;

  return (
    <GridArticleCard
      key={a._key || `${a.slug}-${idx}`}
      article={a}
      onTagClick={handleTagClick}
    />
  );
})}


                      </div>
                      <div className="mt-10 flex items-center justify-center">
                        {canLoadMoreSearch ? (
                          <button
                            onClick={()=>setVisibleSearch(v=>Math.min(v+PAGE_SIZE_SEARCH, filtered.length))}
                            className="inline-flex items-center gap-2 rounded-full border border-[#B4A77E] bg-[#B4A77E] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#B4A77E]"
                          >
                            Load more
                          </button>
                        ) : (
                          <span className="text-sm text-gray-500">End of results.</span>
                        )}
                      </div>
                    </>
                  )}
                </section>
                <aside className="h-fit lg:sticky lg:top-[90px] lg:col-span-1">
                  <InFocusTags tags={allTags} onTagClick={toggleFilterTag} activeTags={activeTags} />
                </aside>
              </div>
            ) : (
              // MODE: homepage padrão -> ONLY “More News” (10 + load more), sem “From the Archive”
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
                <div className="lg:col-span-3">
                  <NewsHomepageSection
                    articles={articles}  // usa todos, mas mostra progressivo
                    onTagClick={(t)=>{ setSearchQuery(t); setActiveTags([]); }}
                    allTags={allTags}
                    activeTags={activeTags}
                    toggleFilterTag={toggleFilterTag}
                  />
                </div>
                <aside className="h-fit lg:sticky lg:top-[90px] lg:col-span-1">
                  <LatestHeadlines articles={latestHeadlines} />
                  <InFocusTags tags={allTags} onTagClick={toggleFilterTag} activeTags={activeTags} />
                </aside>
              </div>
            )}
          </>
        )}
<section
  id="search-and-filters-section"
  aria-label="Search and filters"
  className="mt-[40px] mb-8 rounded-md border border-gray-200 bg-white p-5 shadow-sm"
>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-grow md:max-w-md lg:max-w-lg">
              <label htmlFor="search-input" className="sr-only">Search articles</label>
              <input
                id="search-input" type="search" placeholder="Search articles…"
                className="w-full rounded-md border border-gray-300 p-3 pl-11 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B4A77E]"
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" aria-hidden="true" />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-gray-100" aria-label="Clear search">
                  <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
                </button>
              )}
            </div>
            <div className="flex items-center justify-center gap-3 md:justify-end">
              <label htmlFor="sort-select" className="sr-only">Sort articles by</label>
              <Filter className="h-4 w-4 shrink-0 text-gray-500" aria-hidden="true" />
      <select
  id="sort-select"
  value={sortBy}
  onChange={(e) => { setSortBy(e.target.value); setVisibleSearch(PAGE_SIZE_SEARCH); scrollToMainTop(); }}
  className="rounded-md border border-gray-300 bg-white p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#B4A77E]"
>

                <option value="date_desc">Newest First</option>
                <option value="date_asc">Oldest First</option>
                <option value="title_asc">Title A-Z</option>
                <option value="title_desc">Title Z-A</option>
              </select>
              {(activeTags.length || searchQuery) ? (
                <button onClick={clearAll} className="ml-2 rounded-md border border-[#B4A77E] bg-[#B4A77E] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#B4A77E] focus:ring-offset-1">
                  View All News
                </button>
              ) : null}
            </div>
          </div>

          {allTags.length > 0 && (
            <div className="mt-4 border-t border-gray-200 pt-4">
              <strong className="mr-2 block text-sm font-medium text-gray-600 md:mb-0 md:inline">Filter by topic:</strong>
              <div className="inline-flex flex-wrap gap-2" role="group" aria-label="Filter by tags">
                {allTags.map((tag) => (
                  <button
                    key={tag} onClick={() => toggleFilterTag(tag)}
                    className={`rounded-full border px-3 py-1 text-xs transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-[#B4A77E] ${
                      activeTags.includes(tag)
                        ? "border-[#002D3D] bg-[#002D3D] text-white"
                        : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-100"
                    }`}
                    aria-pressed={activeTags.includes(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
      
    </main>
  );
};

export default Benefits;
