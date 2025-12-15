'use client';
import React, { useEffect, useRef, useState } from 'react';

// ---- Types ----
type Kpi = { label: string; value: string; tip: string };
type Step = {
  key: string;
  title: string;
  value: number;
  height: number;
  tone: string; // Tailwind classes
  description?: string;
  highlight?: string;
  footnote?: string;
};

// ---- Data ----
const kpis: Kpi[] = [
  { label: 'Target MOIC', value: '3x', tip: 'Multiple on invested capital (target)' },
  { label: 'Gross IRR (Explorer III)', value: '~22%', tip: 'Gross internal rate of return' },
  { label: 'Avg. Multiple Expansion', value: '43%', tip: 'From ~5.3x to 7.6x (avg.)' },
  { label: 'AUM', value: '€1.8B', tip: 'Assets Under Management' },
];

const steps: Step[] = [
  {
    key: 'equity',
    title: 'Equity Invested',
    value: 100,
    height: 120,
    tone: 'bg-[#ECE8D9] text-[#0f2430]',
    description: 'Initial equity capital committed to the strategy.',
  },
  {
    key: 'op',
    title: 'EBITDA Increase',
    value: 88,
    height: 200,
    tone: 'bg-[#3A5564] text-white',
    highlight: 'OPERATIONAL IMPACT',
    description: 'Transformation plan grows EBITDA at 10% CAGR via efficiency and export growth.',
  },
  {
    key: 'cash',
    title: 'Cash Generation',
    value: 44,
    height: 260,
    tone: 'bg-[#2E4855] text-white',
    highlight: 'CASH GENERATION',
    description: 'Low-risk, resilient companies that reliably generate cash without excessive leverage.',
  },
  {
    key: 'mult',
    title: 'Multiple Expansion',
    value: 68,
    height: 320,
    tone: 'bg-[#203B49] text-white',
    highlight: 'BUYING, SELLING WELL',
    description: 'Proprietary sourcing in a less competitive market and exits to international buyers.',
    footnote: 'Average multiple expansion from entry to exit was 43% (from 5.3x to 7.6x).',
  },
];

// ---- Hooks ----
const usePrefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  !!window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

 const useCountUpOnVisible = (
  end: number,
  duration: number = 1200
): [number, React.MutableRefObject<HTMLDivElement | null>] => {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasRun, setHasRun] = useState<boolean>(false);
  const reduce = usePrefersReducedMotion();





  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun) {
          if (reduce) {
            setCount(end);
            setHasRun(true);
            return;
          }
          let start = 0;
          const step = end / (duration / 16);
          const id = window.setInterval(() => {
            start += step;
            if (start >= end) {
              start = end;
              window.clearInterval(id);
            }
            setCount(Math.floor(start));
          }, 16);
          setHasRun(true);
        }
      },
      { threshold: 0.35 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration, hasRun, reduce]);

  return [count, ref];
};


// ---- Component ----
const PerformanceSection: React.FC = () => {
  const reduce = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // progress bar sticky no topo da secção
  useEffect(() => {
    const el = document.getElementById('perfProgress');
    const section = sectionRef.current;
    if (!el || !section) return;
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = Math.max(1, rect.height - vh);
      const passed = Math.min(total, Math.max(0, -rect.top));
      const pct = Math.round((passed / total) * 100);
      (el as HTMLDivElement).style.width = `${pct}%`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // CTA fixo quando a secção está visível
  const [showCta, setShowCta] = useState<boolean>(false);
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      const inView = rect.top < vh * 0.9 && rect.bottom > 140;
      setShowCta(inView);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // contadores / animações
  const [total, totalRef] = useCountUpOnVisible(300, 1400);
  const barsRef = useRef<HTMLDivElement | null>(null);
  const [animateBars, setAnimateBars] = useState<boolean>(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setAnimateBars(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (barsRef.current) obs.observe(barsRef.current);
    return () => obs.disconnect();
  }, []);

  // KPI scroller: reveal, focus, setas e fades
  const kpiRef = useRef<HTMLDivElement | null>(null);
  const kpiScrollerRef = useRef<HTMLDivElement | null>(null);
  const [kpiIn, setKpiIn] = useState<boolean>(false);
  const [kpiFocus, setKpiFocus] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);
  const [showSwipeHint, setShowSwipeHint] = useState<boolean>(true);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setKpiIn(entry.isIntersecting),
      { threshold: 0.25 }
    );
    if (kpiRef.current) obs.observe(kpiRef.current);
    return () => obs.disconnect();
  }, []);

  // atualiza estado das setas/fades conforme o scroll
  const updateKpiScrollState = () => {
    const el = kpiScrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  };

  useEffect(() => {
    updateKpiScrollState();
    const el = kpiScrollerRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateKpiScrollState, { passive: true });
    window.addEventListener('resize', updateKpiScrollState);
    return () => {
      el.removeEventListener('scroll', updateKpiScrollState);
      window.removeEventListener('resize', updateKpiScrollState);
    };
  }, []);

  const onKpiKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setKpiFocus((i) => (i + 1) % kpis.length);
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setKpiFocus((i) => (i - 1 + kpis.length) % kpis.length);
    }
  };

  const scrollKpisBy = (dir: number = 1) => {
    const el = kpiScrollerRef.current;
    if (!el) return;
    const step = Math.min(280, el.clientWidth * 0.6);
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const onFirstUserInteract = () => {
    if (showSwipeHint) setShowSwipeHint(false);
  };

  const getHeaderOffset = () => {
  const header = document.querySelector('header');
  return header?.offsetHeight ?? (window.innerWidth < 768 ? 72 : 88);
};

const scrollToIdWithOffset = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return false;
  const y = el.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  window.scrollTo({ top: y, behavior: 'smooth' });
  return true;
};

 
const scrollToIdOrHome = (id = 'DivAskSimulation') => {
  if (typeof window === 'undefined') return;
  const ok = scrollToIdWithOffset(id);

  if (!ok) {
 
    window.location.href = `/#${id}`;
  }
};
  return (
    <section ref={sectionRef} className="w-full bg-white relative">
      {/* progress bar da secção */}
      <div aria-hidden="true" className="sticky top-0 z-40 h-1 bg-transparent">
        <div id="perfProgress" className="h-1 bg-[#B4A77E] w-0 transition-[width] duration-150 ease-out" />
      </div>

      {/* CTA FIXO (mobile + desktop) - aparece apenas quando a secção está visível */}
    

      {/* Headline */}
      <div className="max-w-screen-xl mx-auto px-6 pt-10">
        <h3 className="text-[22px] md:text-[28px] font-extrabold text-[#0E2A38] leading-snug">
          …supported by value creation across our investment model levers
        </h3>
        <p className="mt-3 text-[#0E2A38] font-semibold">
          EXPLORER III achieved a <span className="font-extrabold">+3x MOIC</span> and{' '}
          <span className="font-extrabold">~22% Gross IRR</span>
        </p>
      </div>

      {/* KPI chips: scroller mobile + wrap desktop */}
      <div
        ref={kpiRef}
        className="max-w-screen-xl mx-auto px-6 mt-6"
        onKeyDown={onKpiKey}
        role="region"
        aria-label="Fund performance KPIs"
      >
        <div className="relative">
          {/* Fades laterais (mobile) */}
          <div
            aria-hidden="true"
            className={[
              'pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent',
              'rounded-l-xl md:hidden',
              canScrollLeft ? 'opacity-100' : 'opacity-0',
              'transition-opacity',
            ].join(' ')}
          />
          <div
            aria-hidden="true"
            className={[
              'pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent',
              'rounded-r-xl md:hidden',
              canScrollRight ? 'opacity-100' : 'opacity-0',
              'transition-opacity',
            ].join(' ')}
          />

          {/* Botões de scroll (apenas mobile) */}
          <button
            type="button"
            onClick={() => {
              scrollKpisBy(-1);
              onFirstUserInteract();
            }}
            className={[
              'md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white shadow',
              'grid place-items-center ring-1 ring-black/10 active:scale-95 transition',
              canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none',
            ].join(' ')}
            aria-label="Scroll KPIs left"
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => {
              scrollKpisBy(1);
              onFirstUserInteract();
            }}
            className={[
              'md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white shadow',
              'grid place-items-center ring-1 ring-black/10 active:scale-95 transition',
              canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none',
            ].join(' ')}
            aria-label="Scroll KPIs right"
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Scroller */}
          <div
            ref={kpiScrollerRef}
            className={[
              // mobile: horizontal scroller; desktop: pode quebrar linhas
              'flex md:flex-wrap gap-3 md:gap-3 overflow-x-auto md:overflow-x-visible pr-2',
              'snap-x snap-mandatory md:snap-none',
              'no-scrollbar',
            ].join(' ')}
            style={{ WebkitOverflowScrolling: 'touch' as any }}
            onScroll={onFirstUserInteract}
            onPointerDown={onFirstUserInteract}
            onWheel={onFirstUserInteract}
            role="listbox"
            aria-orientation="horizontal"
          >
            {kpis.map((k, i) => (
              <div
                key={k.label}
                role="option"
                tabIndex={kpiFocus === i ? 0 : -1}
                onFocus={() => setKpiFocus(i)}
                className={[
                  'group snap-start inline-flex items-center gap-2 rounded-full px-4 py-2',
                  'bg-[#F1EFE7] text-[#0E2A38] ring-1 ring-[#E0DCCB]',
                  'hover:bg-[#E7E3D2] hover:shadow transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00538B]',
                  // mobile UX: impedir encolher, dar área de toque, largura mínima
                  'shrink-0 min-w-[72%] xs:min-w-[60%] sm:min-w-[280px] md:min-w-0',
                  reduce ? '' : `opacity-0 translate-y-2 ${kpiIn ? 'animate-[fadeIn_.45s_ease-out_forwards]' : ''}`,
                ].join(' ')}
                style={{ animationDelay: `${i * 80}ms` as any }}
                aria-describedby={`kpi-tip-${i}`}
              >
                <span className="text-sm font-bold">{k.value}</span>
                <span className="text-xs opacity-70">{k.label}</span>

                {/* Tooltip acessível */}
                <span className="relative">
                  <span className="ml-1 inline-block w-4 h-4 text-[10px] leading-4 text-center rounded-full bg-[#0E2A38] text-white/90">i</span>
                  <span
                    id={`kpi-tip-${i}`}
                    role="tooltip"
                    className="pointer-events-none absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-[#0E2A38] text-white text-xs px-2 py-1 rounded shadow"
                  >
                    {k.tip}
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* hint “Swipe to see more” (mobile, só antes de interagir) */}
          {showSwipeHint && canScrollRight && (
            <div className="md:hidden flex items-center gap-1 text-[11px] text-[#0E2A38]/60 mt-2 pl-1 animate-pulse">
              <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-70">
                <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Swipe to see more
            </div>
          )}
        </div>
      </div>

      {/* Barras (stair) */}
      <div className="max-w-screen-xl mx-auto px-6 mt-10">
        <div className="relative overflow-hidden rounded-2xl bg-[#FAF9F5] ring-1 ring-[#E7E3D5]">
          {/* baseline animada */}
          <div
            className={[
              'absolute left-0 right-0 bottom-16 h-[2px] bg-[#CFCAB7]',
              reduce ? '' : 'origin-left scale-x-0 transition-transform duration-700',
              animateBars ? 'scale-x-100' : '',
            ].join(' ')}
          />
          {/* brilho leve */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/[.02]" />

          {/* conteúdo */}
          <div ref={barsRef} className="px-6 pt-10 pb-20">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-12 gap-4 sm:gap-6 items-end">
              {steps.map((s, idx) => (
                <div key={s.key} className="md:col-span-3 group">
                  <div
                    className={[
                      'relative rounded-md flex items-end justify-center',
                      s.tone,
                      reduce ? '' : 'transition-all ease-out',
                      animateBars ? 'duration-700' : 'duration-300',
                      animateBars ? `delay-[${idx * 120}ms]` : '',
                      'shadow-[inset_0_1px_0_rgba(255,255,255,.25)]',
                    ].join(' ')}
                    style={{
                      height: animateBars && !reduce ? s.height : 20,
                      transform: (animateBars || reduce) ? 'translateY(0)' : 'translateY(8px)',
                    }}
                    aria-label={`${s.title} bar value ${s.value}`}
                  >
                    {/* label topo */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[11px] text-[#6b7280] whitespace-nowrap">
                      {s.title}
                    </div>

                    {/* label flutuante (hover/tap) */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/70 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none">
                      {s.value} - {s.title}
                    </div>

                    {/* valor com pop */}
                    <span
                      className={[
                        'text-xl sm:text-2xl font-bold mb-4 rounded-md px-2',
                        reduce ? '' : 'scale-95 opacity-0',
                        animateBars ? 'animate-[popIn_.35s_ease-out_.2s_forwards]' : '',
                      ].join(' ')}
                    >
                      {s.value}
                    </span>

                    {/* glow leve ao hover */}
                    <span className="pointer-events-none absolute inset-0 rounded-md opacity-0 group-hover:opacity-10 transition bg-white" />
                  </div>

                  {/* texto auxiliar */}
                  {(s.highlight || s.description) && (
                    <div className="mt-3 text-sm">
                      {s.highlight && <div className="font-bold text-[#0E2A38] tracking-tight">{s.highlight}</div>}
                      {s.description && <p className="text-[#334155] opacity-80">{s.description}</p>}
                      {s.footnote && <p className="text-[#475569] text-xs mt-2">{s.footnote}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Card total */}
            <div
              ref={totalRef}
              className={[
                'mt-8 rounded-xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4',
                'bg-[#0E2A38] text-white',
                reduce ? '' : 'translate-y-3 opacity-0',
                !reduce ? 'animate-[riseIn_.45s_ease-out_.2s_forwards]' : '',
              ].join(' ')}
            >
              <div>
                <div className="text-sm uppercase opacity-80">Total Realised Return</div>
                <div className="text-4xl font-extrabold tracking-tight mt-1">{total}</div>
                <div className="text-xs mt-1 opacity-80">
                  Ratio vs. equity invested: <strong>~3x MOIC</strong>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Institutional-grade strategy', 'Low leverage, cash-flow focus', 'Proprietary deal-flow'].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs bg-white/10 ring-1 ring-white/20">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollToIdOrHome('DivAskSimulation')}
                  className="group inline-flex items-center gap-2 bg-[#B4A77E] text-[#0E2A38] font-semibold px-4 py-3 rounded-full hover:bg-[#a39771] active:scale-[0.98] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <span className="whitespace-normal md:whitespace-nowrap">
                    Begin My Golden Visa
                    <br className="block md:hidden" />
                    Application
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className="shrink-0 transition-transform group-hover:translate-x-[2px]"
                  >
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* labels do eixo X */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2 px-6 pb-5">
            {['Equity Invested', 'EBITDA Increase', 'Cash Generation', 'Multiple Expansion', 'Total Realised Return'].map(
              (t) => (
                <div key={t} className="text-[12px] text-[#0E2A38] opacity-80">
                  {t}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bloco CTA secundário */}
      <div className="max-w-screen-xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#F1EFE7] rounded-2xl p-5 ring-1 ring-[#E0DCCB]">
          <div className="md:max-w-[70%]">
            <div className="text-sm text-[#0E2A38] opacity-80">Performance Focus</div>
            <p className="text-[#0E2A38] font-semibold">
              The strategy combines <strong>operational growth</strong>, <strong>cash generation</strong>, and{' '}
              <strong>multiple expansion</strong> - delivering <strong>consistent profitability</strong>.
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <button
             onClick={() => scrollToIdOrHome('DivAskSimulation')}
              className="group inline-flex items-center gap-2 bg-[#00538B] text-white font-semibold px-5 py-3 rounded-full hover:bg-[#004472] active:scale-[0.98] transition"
            >
              <span className="whitespace-nowrap">Talk to an Expert</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="shrink-0 transition-transform group-hover:translate-x-[2px]"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Keyframes (inline) */}
      <style jsx>{`
        @keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }
        @keyframes popIn { to { opacity: 1; transform: scale(1); } }
        @keyframes riseIn { to { opacity: 1; transform: translateY(0); } }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default PerformanceSection;
