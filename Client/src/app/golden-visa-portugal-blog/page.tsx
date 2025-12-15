// app/golden-visa-portugal-blog/page.tsx
// ESTE FICHEIRO É UM SERVER COMPONENT (SEM 'use client')

import Script from 'next/script';
// A linha abaixo assume que o seu componente de cliente está em 'app/golden-visa-portugal-blog/app.tsx'
// E que esse ficheiro exporta 'default' (ex: export default BlogClientGrid;)
import App from '@/app/golden-visa-portugal-blog/app'; // O seu Client Component
import { promises as fs } from 'fs';
import path from 'path';
import { XMLParser, XMLValidator } from 'fast-xml-parser'; // Importar o parser
import { Metadata } from 'next';

// --- DEFINIÇÕES DO SITE ---
const site = {
  origin: process.env.NEXT_PUBLIC_SITE_URL || "https://goldenvisashub.com",
  brand: "Golden Visa Explorer Investments",
  author: "Golden Visa Explorer Investments Editorial Team",
  logo: "/assets/images/logo/rss-logo-144.png", // Verifique o caminho
  fallbackImage: "/assets/images/logoblue.png", // Verifique o caminho
  insightsPath: "/golden-visa-portugal-blog",
};

// --- FUNÇÃO DE FETCH NO SERVIDOR (CORRIGIDA) ---
async function getBlogData() {
  try {
    const rssPath = path.join(process.cwd(), 'public', 'data', 'feed.rss');
    const xmlText = await fs.readFile(rssPath, 'utf-8');

    if (XMLValidator.validate(xmlText) !== true) {
      console.warn("Aviso: O feed RSS XML pode ser inválido, mas a tentativa de processamento continua.");
    }

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
      cdataPropName: "__cdata",
      parseTagValue: true,
      parseAttributeValue: true,
      trimValues: true,
      isArray: (name) => name === "item" || name === "category",
    });

    const feed = parser.parse(xmlText);
    const items: any[] = feed?.rss?.channel?.item || [];

    if (items.length === 0) {
        console.warn("RSS feed processado, mas não foram encontrados items <item>.");
    }

    const allTagsSet = new Set<string>();

    const articles = items.map((node: any, index: number) => {
      
      const getText = (selector: string): string => {
        const data = node[selector];
        if (typeof data === 'object' && data !== null && data.__cdata) { return data.__cdata.trim(); }
        if (data !== null && data !== undefined) { return String(data).trim(); }
        return "";
      };
      
      const getAttr = (selector: string, attr: string): string => { return node[selector]?.[attr] || ""; };

      const link = getText("link");
      const slug = link ? link.replace(/^https?:\/\/[^/]+\/?/, "") : `fallback-slug-${index}`;
      const pubDate = getText("pubDate");
      const title = getText("title");
      const description = getText("description");
      const contentEncoded = getText("content:encoded");
      const image = getAttr("media:content", "@_url") || getAttr("enclosure", "@_url") || "";

      const contentText = (contentEncoded || description).replace(/<[^>]+>/g, " ");
      const words = contentText.split(/\s+/).filter(Boolean).length;
      const readingTime = Math.max(1, Math.round(words / 200)).toString();

      // --- SECÇÃO CORRIGIDA ---
      const tags: string[] = (node.category || []).map((c: any): string | null => {
          if (typeof c === 'object' && c !== null && c.__cdata) {
              return c.__cdata.trim();
          }
          if (c !== null && c !== undefined) {
              return String(c).trim();
          }
          return null;
      })
      .filter((tag: string | null): tag is string => {
          if (!tag) { // Filtra null, undefined, e ""
              return false;
          }
          return tag.trim() !== ''; // Filtra strings com apenas espaços
      });
      // --- FIM DA CORREÇÃO ---
      
      tags.forEach(tag => allTagsSet.add(tag));

      if (!title || !slug || !pubDate || isNaN(Date.parse(pubDate))) {
         console.warn("A saltar item RSS inválido:", { title, link, pubDate });
         return null;
      }

      return {
        slug, title,
        description: description.replace(/<[^>]+>/g, "").replace(/\s+/g, ' ').trim().slice(0, 260),
        image: image || site.fallbackImage,
        date: new Date(pubDate).toISOString(),
        readingTime, tags, keywords: tags.join(", "),
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const tagCounts = articles.reduce((acc, article) => {
        (article.tags || []).forEach(tag => { if (tag) acc[tag] = (acc[tag] || 0) + 1; });
        return acc;
    }, {} as Record<string, number>);
    
    const allTags = Object.entries(tagCounts)
        .sort(([, countA], [, countB]) => countB - countA)
        .map(([tag]) => tag)
        .slice(0, 20);

    return { articles, allTags };

  } catch (err) {
    console.error("CRÍTICO: Falha ao carregar ou processar RSS no servidor:", err);
    return { articles: [], allTags: [] };
  }
}

// ===================================================================
// METADATA EXPORT (SEO)
// ===================================================================
const canonicalUrl = `${site.origin}${site.insightsPath}`;
const ogImageUrl = `${site.origin}/assets/images/blog/gv-blog-og-image.jpg`;

export const metadata: Metadata = {
  title: "Golden Visa Portugal Blog: 2026 Insights, Fund Analysis & AIMA Updates",
  description: "The official Explorer Investments blog for Portugal's Golden Visa. Get 2026 news on AIMA, CMVM fund strategies, US investor tax (PFIC), and application guides.",
  keywords: "Golden Visa Portugal blog, 2026 Golden Visa updates, AIMA delays, CMVM regulated funds, Portugal investment funds, Explorer Investments, EU residency blog, Portugal citizenship path, US investor PFIC, Golden Visa news",
  robots: "index, follow, max-snippet:-1, max-image-preview:large",
  
  alternates: {
    canonical: canonicalUrl,
    types: {
      'application/rss+xml': [{ url: `${site.origin}/data/feed.rss`, title: 'Explorer Insights RSS' }],
    },
  },
  
  openGraph: {
    title: "Golden Visa Portugal Blog: 2026 Insights & Fund Analysis | Explorer Investments",
    description: "Expert analysis on AIMA, CMVM funds, US tax (PFIC), and application strategies for Portugal's Golden Visa.",
    url: canonicalUrl,
    type: "website",
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "Portugal Golden Visa Insights Blog" }],
    siteName: "Golden Visa Explorer Investments", // Corrigido
  },
  
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest",
    title: "Golden Visa Portugal Blog: 2026 Insights, Fund Analysis & AIMA Updates",
    description: "Expert analysis on AIMA, CMVM funds, US tax (PFIC), and application strategies for Portugal's Golden Visa.",
    images: [ogImageUrl],
  }
};

// ===================================================================
// SCHEMA JSON-LD (SEO)
// ===================================================================
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question", "name": "Is Portugal’s Golden Visa still available in 2026?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, the Portugal Golden Visa (ARI) is fully available in 2026. The primary route is now through a minimum €500,000 investment in a qualifying, CMVM-regulated fund. Direct residential real estate investment is no longer eligible." }
    },
    {
      "@type": "Question", "name": "What is the best investment for the Golden Visa in 2026?",
      "acceptedAnswer": { "@type": "Answer", "text": "The most secure and compliant route is investing €500,000 in a Private Equity (PE) or Venture Capital (VC) fund regulated by the CMVM (Portuguese Securities Market Commission). This ensures professional management, diversification, and adherence to legal requirements." }
    },
    {
      "@typeA": "Question", "name": "Do AIMA delays affect the 5-year citizenship clock?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Due to Article 158-A, the 5-year count for citizenship eligibility starts from the date the Golden Visa application is submitted and paid for (if approved). This means processing delays by AIMA do not extend your overall 5-year timeline." }
    },
    {
      "@type": "Question", "name": "What should US investors know about Golden Visa funds?",
      "acceptedAnswer": { "@type": "Answer", "text": "US investors must ensure their chosen fund provides annual PFIC (Passive Foreign Investment Company) statements to allow for a QEF election. This is critical for avoiding punitive US tax rates. Always confirm this capability with the fund manager before investing." }
    },
    {
      "@type": "Question", "name": "Where can I find all Golden Visa terms explained?",
      "acceptedAnswer": { 
          "@type": "Answer", 
          "text": `You can find a complete A-Z list of terms, acronyms (like AIMA, CMVM, NIF), and processes in our <a href="${site.origin}${site.insightsPath}/portugal-golden-visa-glossary-terms-institutions-explained">Ultimate Portugal Golden Visa Glossary</a>.`
      }
    }
  ]
};

// ===================================================================
// O COMPONENTE DA PÁGINA (agora assíncrono)
// ===================================================================
export default async function GoldenVisaBlogPage() {
  // 1. DADOS CARREGADOS NO SERVIDOR
  const { articles, allTags } = await getBlogData();

  return (
    <>
      {/* 2. Schema JSON-LD é injetado */}
      <Script
        id="ld-json-blog-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      
      {/* 3. Dados são passados para o Client Component <App> */}
      <App 
        initialArticles={articles} 
        initialAllTags={allTags} 
      />
    </>
  );
}