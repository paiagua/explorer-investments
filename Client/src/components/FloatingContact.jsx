'use client';

import React, { useEffect, useState, useMemo } from "react";
import { Phone, MessageCircle, CalendarDays, X, Mail, ExternalLink } from "lucide-react";

export default function FloatingContact() {
  const PHONE_DISPLAY = "+351 939 046 691";
  const PHONE_TEL = "+351939046691";
  const EMAIL = "ab@explorerinvestments.com";

  const SESSION_DISMISSED_KEY = "gv_fc_session_dismissed";

  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Golden Visa inquiry");
    const body = encodeURIComponent(
      `Hi,\n\nI'm interested in the Golden Visa.\n\nPage: ${
        typeof window !== "undefined" ? window.location.href : ""
      }\n`
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }, []);

  useEffect(() => {
    const update = () => {
      try {
        setIsMobile(window.matchMedia("(max-width: 767px)").matches);
      } catch {
        setIsMobile(false);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_DISMISSED_KEY) === "1") {
        setDismissed(true);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (dismissed) return;

    let timeoutId; // ✅ JavaScript version
    const threshold = isMobile ? 20 : 30;

    const onScroll = () => {
      const top = window.scrollY || 0;
      const raw = document.documentElement.scrollHeight - window.innerHeight;
      const total = Math.max(raw, 0);
      const pct = total === 0 ? 100 : (top / total) * 100;

      if (timeoutId) clearTimeout(timeoutId);
      if (pct >= threshold) {
        timeoutId = setTimeout(() => setVisible(true), 100);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isMobile, dismissed]);

  const handleClose = () => {
    setVisible(false);
    setDismissed(true);
    try {
      sessionStorage.setItem(SESSION_DISMISSED_KEY, "1");
    } catch {}
  };

  const getHeaderOffset = () =>
    (document.querySelector("header")?.offsetHeight) ??
    (typeof window !== "undefined" && window.innerWidth < 768 ? 72 : 88);

  const scrollToIdWithOffset = (id) => {
    const el = document.getElementById(id);
    if (!el) return false;
    const y = el.getBoundingClientRect().top + window.scrollY - (getHeaderOffset() || 0);
    window.scrollTo({ top: y, behavior: "smooth" });
    return true;
  };

  const scrollToIdOrHome = (id = "DivAskSimulation") => {
    const ok = scrollToIdWithOffset(id);
    if (!ok) window.location.href = `/#${id}`;
  };

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-3 right-3 z-[2147483647] print:hidden transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
      aria-live="polite"
      role="complementary"
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
      <div className="relative w-64 sm:w-72 md:w-80 rounded-2xl shadow-xl border border-black/10 bg-white text-[#252C32] overflow-hidden">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-black/10 transition-colors duration-300"
          aria-label="Close contact widget"
        >
          <X size={18} />
        </button>

        <div className="px-4 pt-4 pb-4 text-center">
          <p className="text-sm font-semibold mb-3 text-[#002D3D]">
            Talk to a <span className="text-[#C5A253] font-bold">Golden Visa specialist</span>
          </p>

          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center justify-center gap-2 rounded-full border border-[#B4A77E] text-[#002D3D] text-sm font-semibold px-4 py-2 mb-2 hover:bg-[#B4A77E] hover:text-white transition-all duration-300"
          >
            <Phone size={16} /> Call {PHONE_DISPLAY}
          </a>

          <a
            href="https://wa.me/351939046691"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white text-sm font-semibold px-4 py-2 mb-2 hover:opacity-90 transition-all duration-300"
          >
            <MessageCircle size={16} /> WhatsApp Message
          </a>

          <a
            href={mailtoHref}
            className="flex items-center justify-center gap-2 rounded-full border border-[#B4A77E] text-[#002D3D] text-sm font-semibold px-4 py-2 mb-2 hover:bg-[#B4A77E] hover:text-white transition-all duration-300"
          >
            <Mail size={16} /> Send email
          </a>

          <button
            onClick={() => {
              setVisible(false);
              scrollToIdOrHome("DivAskSimulation");
            }}
            className="group flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-[#C5A253] to-[#B4A77E] text-white text-base font-semibold px-5 py-3 mb-3 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
          >
            <CalendarDays size={18} className="transition-transform duration-300 group-hover:rotate-6" />
            <span>Book Your Free Consultation</span>
          </button>

          <a
            href="https://www.explorerinvestments.com/home/open-funds/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-full bg-[#002D3D] text-white text-sm font-semibold px-4 py-2 hover:bg-[#00455A] transition-all duration-300"
          >
            <ExternalLink size={16} /> Know more about Explorer Investments
          </a>

          <p className="text-xs text-[#252C32]/70 mt-3">
            Choose your preferred way to connect with our Golden Visa team.
          </p>
        </div>
      </div>
    </div>
  );
}
