/** @type {import('next').NextConfig} */

// Durações de cache (segundos)
const ONE_YEAR = 60 * 60 * 24 * 365;
const ONE_MONTH = 60 * 60 * 24 * 30;

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const nextConfig = {
  // 🔧 Básico
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,

  // 🚀 Otimizações de build
  compiler: {
    removeConsole: IS_PRODUCTION ? { exclude: ['error', 'warn'] } : false,
  },

  images: {
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

  // (REMOVI A SECÇÃO REDIRECTS - O Netlify trata disto automaticamente)

  // 🧱 Headers globais
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: `public, max-age=${ONE_YEAR}, immutable` },
        ],
      },
      {
        source: '/_next/image',
        headers: [
          { key: 'Cache-Control', value: `public, max-age=${ONE_YEAR}, immutable` },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [
          { key: 'Cache-Control', value: `public, max-age=${ONE_YEAR}, immutable` },
        ],
      },
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