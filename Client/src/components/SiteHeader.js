// /components/SiteHeader.js
// IMPORTANTE: REMOVEMOS O 'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logoblue.png';

// Importamos os nossos novos componentes de cliente
import HeaderMobile from './HeaderMobile';
import HeaderCTAButton from './HeaderCTAButton';

export default function SiteHeader() {
  // Toda a lógica de estado e hooks foi movida para os componentes de cliente

  return (
    <>
      {/* 1. O COMPONENTE DE CLIENTE PARA O MOBILE */}
      <HeaderMobile />

      {/* 2. O COMPONENTE DE SERVIDOR PARA O DESKTOP (RÁPIDO E BOM PARA SEO) */}
      <header className={`hidden md:block fixed top-0 inset-x-0 z-[9999] border-b border-black/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80`}>
        <div className="max-w-6xl mx-auto h-20 px-4 flex items-center justify-between">
          <Link href="/" className="shrink-0 inline-flex items-center gap-2">
            <Image src={logo} alt="Explorer Logo" className="h-14 w-auto" priority />
          </Link>

          <nav className="flex items-center gap-6 text-[15px]" style={{ color: '#002741' }}>
            {/* Estes links agora são renderizados no servidor. Perfeito! */}
            <Link href="/" className="hover:text-[#B4A77E] transition">Home</Link>
            <Link href="/about-explorer-investments" className="hover:text-[#B4A77E] transition">About Explorer</Link>
            <Link href="/golden-visa-process" className="hover:text-[#B4A77E] transition">Golden Visa Process</Link>
            <Link href="/golden-visa-benefits" className="hover:text-[#B4A77E] transition">Benefits</Link>
            <Link href="/golden-visa-simulator" className="hover:text-[#B4A77E] transition">Roi Simulator</Link>
            <Link href="/golden-visa-portugal-blog" className="hover:text-[#B4A77E] transition">Insights</Link>

            {/* 3. O COMPONENTE DE CLIENTE SÓ PARA O BOTÃO */}
            <HeaderCTAButton
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-[#B4A77E] text-white text-sm font-semibold px-4 py-2 hover:bg-[#9c9067] transition"
            />
          </nav>
        </div>
      </header>

      {/* Spacer para não tapar conteúdo (altura mobile/desktop) */}
      <div className="h-16 md:h-20" />
    </>
  );
}