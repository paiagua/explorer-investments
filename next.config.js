/** @type {import('next').NextConfig} */

// Durações de cache (segundos)
const ONE_YEAR = 60 * 60 * 24 * 365;
const ONE_MONTH = 60 * 60 * 24 * 30;

// 👇 ADICIONEI ESTA LINHA
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const nextConfig = {
  // 🔧 Básico
  reactStrictMode: true,
  // poweredByHeader: false, // (A sua linha original swcMinify: true, foi removida daqui pois é padrão agora)
  poweredByHeader: false,
  compress: true, // gzip/brotli
  trailingSlash: false, // URLs sem barra final (consistente para SEO)

  // 🚀 Otimizações de build
  compiler: {
    // Remove console.* em produção (mantém warn/error)
    removeConsole:
      IS_PRODUCTION // Usei a constante para consistência
        ? { exclude: ['error', 'warn'] }
        : false,
  },

  images: {
    // ... (as suas outras configurações como formats, deviceSizes, etc.) ...
    minimumCacheTTL: ONE_MONTH,

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'goldenvisashub.com',
        pathname: '/assets/images/**',
      },
      {
        protocol: 'http',
        hostname: 'goldenvisashub.com',
        pathname: '/assets/images/**',
      },
    ],
  },

  // 🔁 Redirecionamentos (evita cadeias)
  // 👇 AQUI ESTÁ A CORREÇÃO PRINCIPAL
  async redirects() {
    // Só aplica estes redirecionamentos em PRODUÇÃO
    if (IS_PRODUCTION) {
      return [
        // http -> https (caso a CDN não force)
        {
          source: '/:path*',
          has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
          destination: 'https://goldenvisashub.com/:path*',
          permanent: true,
        },
        // www -> apex (nota: para 100% fiável, ideal é usar middleware.ts)
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'www.goldenvisashub.com' }],
          destination: 'https://goldenvisashub.com/:path*',
          permanent: true,
        },
      ];
    }

    // Em desenvolvimento (localhost), não devolve nenhuma regra
    return [];
  },

  // 🧱 Headers globais (cache forte + segurança)
  async headers() {
    return [
      // estáticos do Next (hashados)
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: `public, max-age=${ONE_YEAR}, immutable` },
        ],
      },
      // imagens transformadas pelo Next (/_next/image)
      {
        source: '/_next/image',
        headers: [
          { key: 'Cache-Control', value: `public, max-age=${ONE_YEAR}, immutable` },
        ],
      },
      // assets “crus” servidos da pasta /public/assets
      {
        source: '/assets/:path*',
        headers: [
          { key: 'Cache-Control', value: `public, max-age=${ONE_YEAR}, immutable` },
        ],
      },
      // segurança + performance (aplicado a todas as rotas)
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;