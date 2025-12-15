'use client';
import React from "react";
import {
  ExternalLink,
  Users2,
  Briefcase,
  HandCoins,
  ArrowRight,
  CalendarDays,
  MapPin,
  Globe2,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function FooterQuickLinksSection({
  title = "Explore",
  subtitle = "Quick access to the main areas",
  links = DEFAULT_LINKS,
  logoSrc = "https://www.explorerinvestments.com/wp-content/uploads/2025/02/logo_explorer180.svg",
  ctaText = "Talk to an Expert",
  ctaHref = "#DivAskSimulation",
  agendaTitle = "Our Upcoming Presence",
  agendaSubtitle = "Will you meet André Bandeira (Investor Relations) at the event or would you prefer to schedule a call?",
  agendaItems = DEFAULT_AGENDA,
}) {
  const router = useRouter();

  // Função genérica igual ao Footer
  const scrollToForm = () => {
    if (typeof window === "undefined") return;

    const header = document.querySelector("header");
    const offset = header?.offsetHeight ?? (window.innerWidth < 768 ? 72 : 88);

    const el = document.getElementById("DivAskSimulation");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      router.push("/#DivAskSimulation");
    }
  };

  return (
    <section className="w-full bg-[#F1EFE7] border-t border-black/10" aria-labelledby="footer-links-title">
      <div className="mx-auto w-[90%] max-w-[1200px] py-12">
        {/* Header with logo */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <div>
            <h2 id="footer-links-title" className="text-2xl md:text-3xl font-bold text-[#0D3343]">
              {title}
            </h2>
            {subtitle && <p className="text-[#0D3343]/80 mt-1">{subtitle}</p>}
          </div>
          <a href="/" className="shrink-0 inline-flex items-center" aria-label="Explorer Investments home">
            <img
              src={logoSrc}
              alt="Explorer Investments"
              className="h-8 md:h-9 w-auto"
              loading="lazy"
            />
          </a>
        </div>

        {/* Links grid */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" role="list">
          {links.map((l, i) => (
            <li key={i}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block rounded-2xl ring-1 transition-all p-5 h-full
                  ${
                    l.highlight
                      ? "bg-[#00538B] text-white ring-[#004472] shadow-md hover:shadow-lg hover:bg-[#004472]"
                      : "bg-white ring-black/10 hover:ring-black/20 shadow-sm hover:shadow-md"
                  }`}
                aria-label={l.label}
              >
                <div className="flex items-start gap-3">
                  <div className={`shrink-0 rounded-xl p-3 ${l.highlight ? "bg-white/20" : "bg-[#EAE6D7]"}`}>
                    {l.Icon ? (
                      <l.Icon className={`h-5 w-5 ${l.highlight ? "text-white" : "text-[#0D3343]"}`} />
                    ) : (
                      <ExternalLink className={`h-5 w-5 ${l.highlight ? "text-white" : "text-[#0D3343]"}`} />
                    )}
                  </div>
                  <div>
                    <h3 className={`font-semibold leading-tight ${l.highlight ? "text-white" : "text-[#0D3343]"}`}>
                      {l.label}
                    </h3>
                    {l.desc && (
                      <p className={`text-sm mt-1 ${l.highlight ? "text-white/80" : "text-[#0D3343]/70"}`}>
                        {l.desc}
                      </p>
                    )}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* WORLD WIDE AGENDA */}
        <div className="mt-12">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <Globe2 className="h-6 w-6 text-[#0D3343]" aria-hidden="true" />
              <h3 className="text-xl md:text-2xl font-bold text-[#0D3343]">{agendaTitle}</h3>
            </div>

            {/* Compact CTA */}
            <button
              onClick={scrollToForm}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#00538B] px-4 py-2 text-white text-sm font-semibold hover:bg-[#004472] transition"
            >
              Talk to André
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Subtitle + two CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
            {agendaSubtitle && <p className="text-[#0D3343]/80">{agendaSubtitle}</p>}
            <div className="flex gap-2">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center rounded-full bg-[#00538B] px-4 py-2 text-white text-sm font-semibold hover:bg-[#004472] transition"
              >
                Meet at the event
              </button>
              <button
                onClick={scrollToForm}
                className="inline-flex items-center rounded-full bg-white ring-1 ring-black/10 px-4 py-2 text-sm font-semibold text-[#0D3343] hover:ring-black/20 transition"
              >
                Schedule a call
              </button>
            </div>
          </div>

          {/* Event cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-x-auto md:overflow-visible">
            {agendaItems.map((ev, i) => (
              <article
                key={i}
                className="rounded-2xl bg-white ring-1 ring-black/10 p-5 shadow-sm hover:shadow-md transition"
                aria-label={`${ev.title} in ${ev.city}, ${ev.country}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-[#0D3343] font-semibold leading-snug">
                      {ev.title}
                    </h4>
                    <p className="text-xs text-[#0D3343]/60 mt-0.5">
                      André Bandeira - Investor Relations
                    </p>
                    {ev.host && (
                      <p className="text-xs text-[#0D3343]/50">{ev.host}</p>
                    )}
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-[#0D3343] bg-[#EAE6D7] px-3 py-1 rounded-full">
                    <CalendarDays className="h-4 w-4" />
                    {ev.date}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-[#0D3343]/80">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {ev.venue}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Globe2 className="h-4 w-4" />
                    {ev.city}, {ev.country}
                  </span>
                </div>

                {ev.blurb && (
                  <p className="mt-3 text-sm text-[#0D3343]/80">{ev.blurb}</p>
                )}

                {/* Card CTA */}
                <div className="mt-4">
                  <button
                    onClick={scrollToForm}
                    className="inline-flex items-center gap-2 text-[#00538B] hover:text-[#004472] font-medium"
                    aria-label="Talk to André about this event"
                  >
                    Talk to André
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 rounded-full bg-[#00538B] px-6 py-3 text-white font-semibold hover:bg-[#004472] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00538B]"
          >
            <span>Talk to André</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Defaults ---------------- */
const DEFAULT_LINKS = [
  {
    label: "Open Funds",
    href: "https://www.explorerinvestments.com/home/open-funds/",
    desc: "Opportunities for investors",
    Icon: HandCoins,
    highlight: true,
  },
  {
    label: "Team",
    href: "https://www.explorerinvestments.com/home/team/",
    desc: "Meet our people",
    Icon: Users2,
  },
  {
    label: "Heritage",
    href: "https://www.explorerinvestments.com/home/heritage/",
    desc: "Our history",
  },
  {
    label: "Impact",
    href: "https://www.explorerinvestments.com/home/impact/",
    desc: "Sustainability and impact",
  },
  {
    label: "Investment Strategies",
    href: "https://www.explorerinvestments.com/home/strategies/",
    desc: "Buyouts, Growth, Hospitality",
    Icon: Briefcase,
  },
  {
    label: "Portfolio",
    href: "https://www.explorerinvestments.com/home/portfolio/",
    desc: "Our investments",
  },
];

const DEFAULT_AGENDA = [
  {
    title: "Brazil Private Markets Meeting",
    host: "In-person",
    date: "November 11, 2025",
    city: "São Paulo",
    country: "Brazil",
    venue: "Rosewood São Paulo",
    blurb:
      "Focused on Brazil’s private markets ecosystem, connecting institutional investors, family offices, and managers around opportunities and trends.",
  },
];
