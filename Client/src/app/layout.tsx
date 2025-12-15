import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // ← ADICIONA ISTO
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 export const metadata: Metadata = {
 
  icons: {
    icon: "/favicon.ico", // para navegadores
    shortcut: "/favicon.ico", // para compatibilidade
    apple: "/favicon.png", // opcional para iOS
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
  <meta httpEquiv="Cache-Control" content="no-store, no-cache, must-revalidate" />
  <meta httpEquiv="Pragma" content="no-cache" />
  <meta httpEquiv="Expires" content="0" />
</Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script id="gtag-consent" strategy="beforeInteractive">
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

        <Script id="gtm" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KWXPJ29Q');
          `}
        </Script>

        <Script
          id="gtag-src"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17322381757"
          strategy="beforeInteractive"
          async
        />

        <Script id="gtag-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17322381757');
          `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KWXPJ29Q"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}

