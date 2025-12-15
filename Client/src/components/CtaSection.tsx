"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileSignature } from "@fortawesome/free-solid-svg-icons";
import {
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  Share2,
  Link as LinkIcon,
  Check,
  Share,
} from "lucide-react";

function usePageMeta() {
  const [meta, setMeta] = useState<{ title: string; url: string }>(() => ({
    title: typeof document !== "undefined" ? document.title?.trim() || "" : "",
    url: typeof window !== "undefined" ? window.location.href : "",
  }));

  useEffect(() => {
    const get = (sel: string, attr: string): string =>
      document.querySelector(sel)?.getAttribute(attr) || "";

    const ogTitle = get('meta[property="og:title"]', "content");
    const twTitle = get('meta[name="twitter:title"]', "content");
    const h1Text =
      (document.querySelector("article h1, main article h1, h1")?.textContent ||
        "").trim();
    const docTitle = (document.title || "").trim();

    const ogUrl = get('meta[property="og:url"]', "content");
    const canonical = get('link[rel="canonical"]', "href");
    const href = window.location.href;

    const title = ogTitle || twTitle || h1Text || docTitle || "";
    const url = ogUrl || canonical || href || "";

    setMeta({ title, url });
  }, []);

  return meta;
}

const ArticleEndSection: React.FC = () => {
  const { title, url } = usePageMeta();
  const [copied, setCopied] = useState(false);

  const safeTitle = useMemo(() => title || "This article", [title]);
  const safeUrl = useMemo(() => url || "", [url]);

  const isWebShareSupported =
    typeof navigator !== "undefined" && typeof (navigator as any).share === "function";

  const handleShare = useCallback(async () => {
    if (!safeUrl) return;

    const fallback = () => {
      navigator.clipboard?.writeText(safeUrl).catch(() => {});
      setCopied(true);

      const intent = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        safeUrl
      )}&text=${encodeURIComponent(safeTitle)}`;
      window.open(intent, "_blank", "noopener,noreferrer");

      setTimeout(() => setCopied(false), 1400);
    };

    try {
      if (!isSecureContext || window.top !== window.self) return fallback();

      if (isWebShareSupported) {
        await (navigator as any).share({
          title: safeTitle || document.title || "Share",
          text: safeTitle,
          url: safeUrl,
        });
      } else {
        fallback();
      }
    } catch (err: any) {
      if (err?.name !== "AbortError") fallback();
    }
  }, [safeTitle, safeUrl, isWebShareSupported]);

  const shareLinks = useMemo(
    () =>
      !safeUrl
        ? []
        : ([
            {
              name: "LinkedIn",
              href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                safeUrl
              )}&title=${encodeURIComponent(safeTitle)}`,
              Icon: Linkedin,
            },
            {
              name: "X",
              href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                safeUrl
              )}&text=${encodeURIComponent(safeTitle)}`,
              Icon: Twitter,
            },
            {
              name: "Facebook",
              href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                safeUrl
              )}`,
              Icon: Facebook,
            },
            {
              name: "Email",
              href: `mailto:?subject=${encodeURIComponent(
                "Check this article: " + safeTitle
              )}&body=${encodeURIComponent(safeUrl)}`,
              Icon: Mail,
            },
          ] as const),
    [safeTitle, safeUrl]
  );

  const handleCopy = useCallback(async () => {
    if (!safeUrl) return;
    try {
      await navigator.clipboard.writeText(safeUrl);
      setCopied(true);
    } catch {
      const el = document.createElement("textarea");
      el.value = safeUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
    } finally {
      setTimeout(() => setCopied(false), 1400);
    }
  }, [safeUrl]);

  return (
    <>
      {/* SHARE BAR */}
      <div className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold flex items-center justify-center gap-2 text-[#B4A77E]">
          <Share2 className="w-6 h-6 text-[#B4A77E]" />
          Share this Article
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {isWebShareSupported && (
            <button
              onClick={handleShare}
              className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#B4A77E] bg-[#B4A77E] text-[#002741] transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md font-semibold text-xs"
              type="button"
              aria-label="Share"
              disabled={!safeUrl}
              title={!isSecureContext ? "Share requires HTTPS" : undefined}
            >
              <Share className="w-4 h-4" />
              Share
            </button>
          )}

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#B4A77E] bg-[#B4A77E] text-[#002741] transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md font-semibold text-xs sm:text-sm"
            type="button"
            aria-label="Copy link"
            disabled={!safeUrl}
          >
            {copied ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
            {copied ? "Copied!" : "Copy"}
          </button>

          {shareLinks.length > 0 ? (
            shareLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share on ${name}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#B4A77E] bg-[#B4A77E] text-[#002741] transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md font-semibold text-xs sm:text-sm"
              >
                <Icon className="w-4 h-4" />
                {name}
              </a>
            ))
          ) : (
            <span className="text-white/70 text-xs">Loading share options…</span>
          )}
        </div>
      </div>

      {/* CTA */}
      <section
        id="article-end"
        className="space-y-10 text-center bg-[#002741] p-8 rounded-lg shadow-lg mt-12"
      >
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold flex flex-col items-center justify-center gap-1 text-white text-center">
            <Link
              href="/"
              aria-label="Explorer Investments – Home"
              className="flex items-center justify-center"
            >
              <Image
                src="https://goldenvisashub.com/assets/images/logo-footer-white.png"
                alt="Explorer Investments Logo"
                width={200}
                height={50}
                style={{ height: "auto" }}
                priority={false}
                className="mb-2 max-w-[200px] w-full"
              />
            </Link>
          </h2>

          <p className="text-gray-200 max-w-2xl mx-auto">
            Whether you are exploring the <strong>Portugal Golden Visa</strong> for EU
            residency or you simply want to allocate capital to{" "}
            <strong>private equity funds in Portugal</strong>, our Investor Relations
            team can help. We will walk you through CMVM-regulated fund options,
            clarify how they work for residency and for pure investment, and coordinate
            with trusted immigration and tax advisers. Schedule your confidential,
            no-obligation strategy call today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-6">
            <div className="flex items-center gap-3">
              <img
                src="https://goldenvisashub.com/assets/images/andre_2025.jpg"
                alt="André Bandeira"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#B4A77E]"
                loading="lazy"
              />
              <div className="text-sm leading-snug text-left">
                <p className="font-bold text-white">André Bandeira</p>
                <a
                  href="mailto:ab@explorerinvestments.com?subject=Portugal%20Golden%20Visa%20or%20Private%20Equity%20Investment%20Inquiry"
                  className="flex items-center gap-1 text-[#B4A77E] hover:underline"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3" />
                  ab@explorerinvestments.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="https://goldenvisashub.com/assets/images/maria_2025.jpg"
                alt="Maria Campos Silva"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#B4A77E]"
                loading="lazy"
              />
              <div className="text-sm leading-snug text-left">
                <p className="font-bold text-white">Maria Campos Silva</p>
                <a
                  href="mailto:mcs@explorerinvestments.com?subject=Portugal%20Golden%20Visa%20or%20Private%20Equity%20Investment%20Inquiry"
                  className="flex items-center gap-1 text-[#B4A77E] hover:underline"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3" />
                  mcs@explorerinvestments.com
                </a>
              </div>
            </div>
          </div>

          <Link
            href="/#DivAskSimulation"
            className="mt-6 inline-flex items-center gap-2 bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-sm sm:text-base px-6 py-2.5 rounded-full transition shadow-md hover:shadow-lg"
          >
            <FontAwesomeIcon icon={faFileSignature} />
            Book Your Free Call
          </Link>
        </div>
      </section>
    </>
  );
};

export default ArticleEndSection;
