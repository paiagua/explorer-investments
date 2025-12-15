'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, ArrowRight } from 'lucide-react';

const FALLBACK_IMAGE = "/assets/images/logoblue.png";

function safeFormatDate(dateStr) {
  const t = Date.parse(dateStr || '');
  if (Number.isNaN(t)) return 'Unknown date';
  try {
    return new Date(t).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  } catch {
    return 'Unknown date';
  }
}

export default function BlogGridClient({ articles = [], maxItems = 3 }) {
  
  // O estado de visibilidade vive aqui, no cliente
  const [visibleCount, setVisibleCount] = useState(maxItems);

  const loadMore = () => {
    setVisibleCount((prev) => prev + (maxItems > 0 ? maxItems : 3));
  };

  return (
    <>
  {/* Grelha de Artigos (UX melhorada) */}
<ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr">
  {articles.slice(0, visibleCount).map(({ slug, title, description, date, image, readingTime }, idx) => {
    const formattedDate = safeFormatDate(date);
    const href = `/${slug}`;
    const imageUrl = image || FALLBACK_IMAGE;

    return (
      <li key={slug} className="h-full">
        {/* Card inteiro clicável + foco acessível */}
        <Link
          href={href}
          className="group block h-full rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm ring-0 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4A77E] focus-visible:ring-offset-2"
          aria-labelledby={`title-${slug}`}
        >
          {/* Media */}
          <figure className="relative w-full aspect-[16/9]">
            <Image
              src={imageUrl}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading={idx < 3 ? 'eager' : 'lazy'}
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
            {/* Chips sobre a imagem */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              {readingTime ? (
                <span className="rounded-full bg-black/60 text-white text-xs px-2 py-1 backdrop-blur-sm">
                  🕒 {readingTime} min
                </span>
              ) : null}
              <span className="rounded-full bg-white/85 text-[#002D3D] text-xs px-2 py-1 border border-white/60 shadow-sm">
                {formattedDate}
              </span>
            </div>
            {/* Fade para legibilidade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent" />
          </figure>

          {/* Conteúdo */}
          <div className="flex flex-col h-full p-5">
            <h3
              id={`title-${slug}`}
              className="text-[1.125rem] sm:text-lg font-semibold leading-snug text-[#002D3D] line-clamp-2 group-hover:underline underline-offset-4"
            >
              {title}
            </h3>

            <p className="mt-2 text-sm text-[#15364A]/90 leading-relaxed line-clamp-3">
              {description}
            </p>

            {/* Meta + CTA discreta */}
            <div className="mt-4 flex items-center justify-between gap-3 pt-3 border-t border-gray-100">
              <span className="text-xs text-[#5A6F7B]">
                Updated {formattedDate}
              </span>

              <span
                className="inline-flex items-center gap-2 text-sm font-medium text-[#002D3D] group-hover:text-[#001f2b]"
                aria-hidden="true"
              >
                Read article
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </Link>
      </li>
    );
  })}
</ul>

{/* Botão "Load More" (mais polido) */}
{visibleCount < articles.length && (
  <div className="mt-10 flex justify-center">
    <button
      onClick={loadMore}
      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-[#002D3D] text-white text-sm font-semibold shadow-sm hover:bg-[#001f2b] active:scale-[0.99] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4A77E] focus-visible:ring-offset-2"
      aria-label="Load more articles"
    >
      Load more
      <ArrowRight className="w-4 h-4" />
    </button>
  </div>
)}

    </>
  );
}