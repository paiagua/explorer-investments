import Head from 'next/head';
// A importação do App está correta para a notícia
import App from '@/app/andre-bandeira-brazil-private-markets-meeting-sao-paulo-2025/app';
import Script from 'next/script';

// ===================================================================
// NOVO METADATA (Específico para a notícia do evento no Brasil)
// ===================================================================
export const metadata = {
  title: "Explorer Investments Strengthens Brazil Ties: André Bandeira at Brazil Private Markets Meeting 2025",
  description: "Explorer Investments announces André Bandeira's participation in the Brazil Private Markets Meeting (Nov 11, 2025, São Paulo), highlighting opportunities for Brazilian investors in Portuguese PE and Golden Visa funds.",
  keywords: "Explorer Investments Brazil, Brazil Private Markets Meeting 2025, André Bandeira São Paulo, Investimento Portugal Brasileiros, Golden Visa Portugal Brasileiros, Private Equity Portugal, Family Office Brasil, CMVM fundos Portugal",
  robots: "index, follow", // Standard robots meta
  openGraph: {
    title: "Explorer Investments Strengthens Brazil Ties: André Bandeira at Brazil Private Markets Meeting 2025",
    description: "André Bandeira (Explorer Investments) to attend key private markets event in São Paulo, Nov 11, 2025. Connecting with Brazilian investors on PE & Golden Visa opportunities.", // Slightly shorter for OG
    url: "https://goldenvisashub.com/andre-bandeira-brazil-private-markets-meeting-sao-paulo-2025", // URL canónica da notícia
    type: "article", // Use 'article' for news items in OG
    images: ["https://goldenvisashub.com/assets/images/blog/andre.jpg"], // Imagem específica para o evento
    // Add article specific tags if relevant for OG
    article: {
        publishedTime: "2025-10-18T23:30:00+01:00", // Data de publicação
        modifiedTime: "2025-10-18T23:30:00+01:00", // Data de modificação
        // author could be added here too if needed for OG Article
    }
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExplorerInvest", // Manter se aplicável
    title: "Explorer Investments at Brazil Private Markets Meeting 2025 (São Paulo)", // Título mais curto
    description: "André Bandeira representing Explorer Investments in São Paulo, Nov 11. Discussing Portuguese PE & Golden Visa funds with Brazilian investors.",
    images: ["https://goldenvisashub.com/assets/images/blog/andre.jpg"] // Mesma imagem
  }
};

// ===================================================================
// FAQ SCHEMA REMOVIDO - Não apropriado para NewsArticle
// ===================================================================
// const faqSchema = { ... }; // Removido

// ===================================================================
// NOME DA FUNÇÃO ORIGINAL MANTIDO conforme pedido
// ===================================================================
export default function GoldenVisaInvestmentFundExplorerPage() {
  // JSON-LD Schema específico para NewsArticle (sem FAQ)
  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": metadata.openGraph.url, // Usar a URL canónica
    },
    "headline": metadata.title, // Reutilizar o título
    "description": metadata.description, // Reutilizar a descrição
    "image": metadata.openGraph.images, // Reutilizar a imagem
    "datePublished": metadata.openGraph.article?.publishedTime || "2025-10-18T23:30:00+01:00", // Usar data do OG ou fallback
    "dateModified": metadata.openGraph.article?.modifiedTime || "2025-10-18T23:30:00+01:00", // Usar data do OG ou fallback
    "author": {
      "@type": "Organization", // Notícias geralmente publicadas pela organização
      "name": "Explorer Investments",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Explorer Investments",
      "logo": {
        "@type": "ImageObject",
        "url": "https://goldenvisashub.com/assets/images/explorer-logo.png", // Logo da Explorer
      },
    },
     "keywords": metadata.keywords, // Reutilizar keywords
     "articleSection": "News", // Secção
  };


  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
         {metadata.openGraph.article?.publishedTime && <meta property="article:published_time" content={metadata.openGraph.article.publishedTime} />}
         {metadata.openGraph.article?.modifiedTime && <meta property="article:modified_time" content={metadata.openGraph.article.modifiedTime} />}
        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <link rel="canonical" href={metadata.openGraph.url} />
      </Head>
      {/* Script JSON-LD apenas para NewsArticle */}
      <Script
        id="ld-json-news-brazil-event" // ID único para este script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }}
      />
 
      <App />
    </>
  );
}