import { Barlow } from 'next/font/google'
import Script from 'next/script'
import './globals.css' // Garante que tens o teu CSS global importado

// 1. Configuração Otimizada da Fonte Barlow
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
})

// 2. Metadados (Favicon, Theme Color, Viewport)
export const metadata = {
  title: 'Golden Visa Hub',
  description: 'Portuguese Golden Visa Investment Guide',
  themeColor: '#08425E',
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" translate="no" className={barlow.variable}>
      <head>
        {/* Preconnects manuais (opcional, pois o Next.js já otimiza alguns) */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      
      <body className={barlow.className}>
        
        {/* --- GTM NOSCRIPT (Deve ser o primeiro item no body) --- */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KWXPJ29Q"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* --- SCRIPTS --- */}

        {/* 1. Google Identity Services */}
        <Script 
          src="https://accounts.google.com/gsi/client" 
          strategy="lazyOnload" 
        />

        {/* 2. Google Tag Manager (Script Principal) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KWXPJ29Q');
          `}
        </Script>

        {/* 3. Google Ads */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=AW-17322381757" 
          strategy="afterInteractive" 
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17322381757', { send_page_view: false });
          `}
        </Script>

        {/* 4. Google Consent Mode */}
        {/* Usamos lazyOnload para simular o "window load" e não bloquear o site */}
        <Script id="consent-mode" strategy="lazyOnload">
          {`
            window.gtag = window.gtag || function () {
              (window.dataLayer = window.dataLayer || []).push(arguments);
            };
            window.gtag('consent', 'default', {
              ad_storage: 'granted',
              analytics_storage: 'granted',
              functionality_storage: 'granted',
              ad_personalization: 'granted',
              personalization_storage: 'granted',
              security_storage: 'granted',
              wait_for_update: 500
            });
          `}
        </Script>

        {/* --- O SITE RENDERIZA AQUI --- */}
        {/* Isto substitui o <div id="root"></div> */}
        {children}

      </body>
    </html>
  )
}