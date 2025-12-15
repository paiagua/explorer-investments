// src/components/BlogPreviewGridFromXML.js
import Script from 'next/script'
import BlogGridClient from './BlogGridClient'

const BLOG_HOST = 'https://goldenvisashub.com'
const FALLBACK_IMAGE = '/assets/images/logoblue.png'
const PUBLISHER_NAME = 'Explorer Investments'
const PUBLISHER_LOGO = `${BLOG_HOST}/assets/images/logo/rss-logo-144.png`

/* ---------------- Helpers ---------------- */
function stripLeadingSlash(s) {
  return s ? s.replace(/^\//, '') : s
}
function toISO(dateStr) {
  const t = Date.parse(dateStr || '')
  return Number.isNaN(t) ? '' : new Date(t).toISOString()
}

/* ---------------- Fetch + Parse RSS (Server) ---------------- */
async function fetchAndParseArticles(currentSlug) {
  try {
    const res = await fetch(`${BLOG_HOST}/data/feed.rss`, {
      // REMOVE: cache: 'no-store',
      // REMOVE: next: { revalidate: 0 },
      next: { revalidate: 3600 }, // refaz a cada 1h (ajusta como quiseres)
    })
    if (!res.ok) throw new Error(`Failed to fetch feed: ${res.statusText}`)
 

    const xmlText = await res.text()
    const { DOMParser } = await import('@xmldom/xmldom')
    const xmlDoc = new DOMParser().parseFromString(xmlText, 'text/xml')

    const items = Array.from(xmlDoc.getElementsByTagName('item')).map((node) => {
      const get = (tag) => node.getElementsByTagName(tag)[0]?.textContent?.trim() || ''
      const getNS = (ns, tag) => node.getElementsByTagNameNS(ns, tag)[0]?.textContent?.trim() || ''
      const getMediaUrl = () =>
        node.getElementsByTagNameNS('http://search.yahoo.com/mrss/', 'content')[0]?.getAttribute('url') || ''

      const title = get('title')
      const link = get('link')
      const description = get('description')
      const pubDate = get('pubDate')
      const author = getNS('http://purl.org/dc/elements/1.1/', 'creator') || PUBLISHER_NAME
      const image = getMediaUrl() || FALLBACK_IMAGE
      const categories = Array.from(node.getElementsByTagName('category')).map((c) => c.textContent?.trim()).filter(Boolean)

      const slug = link ? link.replace(`${BLOG_HOST}/`, '').replace(/\/$/, '') : ''
      const date = toISO(pubDate)

      if (!title || !slug || !date) return null

      return {
        slug,
        title,
        description,
        image,
        date,
        author,
        categories,
        link, // absoluto (canonical do artigo)
      }
    })

    const valid = items
      .filter(Boolean)
      .filter((a) => a.slug !== stripLeadingSlash(currentSlug))
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))

    return valid
  } catch (err) {
    console.error('Error parsing feed.rss on server:', err)
    return []
  }
}

/* ---------------- JSON-LD (ItemList + BlogPosting) ---------------- */
function buildJsonLd(articles) {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: "Latest Insights on Portugal's Golden Visa Program",
    itemListElement: articles.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: a.link || `${BLOG_HOST}/${a.slug}`,
      name: a.title,
    })),
  }

  const blogPostings = articles.map((a) => ({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: a.link || `${BLOG_HOST}/${a.slug}`,
    headline: a.title,
    description: a.description || undefined,
    image: [a.image],
    datePublished: a.date,
    dateModified: a.date,
    author: { '@type': 'Person', name: a.author || PUBLISHER_NAME },
    publisher: {
      '@type': 'Organization',
      name: PUBLISHER_NAME,
      logo: { '@type': 'ImageObject', url: PUBLISHER_LOGO },
    },
    articleSection: a.categories?.join(', ') || undefined,
    inLanguage: 'en',
  }))

  return JSON.stringify([itemList, ...blogPostings])
}

/* ---------------- Server Component ---------------- */
export default async function BlogPreviewGridFromXML({
  currentSlug = '',
  maxItems = 3,
  title = "Latest Insights on Portugal's Golden Visa Program",
}) {
  const articles = await fetchAndParseArticles(currentSlug)
  if (!articles.length) return null

  const jsonLd = buildJsonLd(articles)

  return (
    <section className="bg-[#F9F9FC] py-12 px-4" aria-labelledby="related-insights-title">
      <Script id="jsonld-rss" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="max-w-6xl mx-auto">
        <h2 id="related-insights-title" className="mb-10 text-3xl font-bold text-[#002D3D]">
          {title}
        </h2>

        {/* Client grid (paginado/infinite conforme o teu BlogGridClient) */}
        <BlogGridClient articles={articles} maxItems={maxItems} />
      </div>
    </section>
  )
}
