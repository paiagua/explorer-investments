// /components/HeaderMobile.js
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Só precisamos deste
import { X } from 'lucide-react';
import logo from '../assets/logoblue.png';
import HeaderCTAButton from './HeaderCTAButton'; // Reutilizamos o botão CTA

export default function HeaderMobile() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Efeito para bloquear o scroll do body
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open);
    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  // Efeito para fechar o menu quando a rota muda
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* ===== MOBILE BAR (split 50/50) ===== */}
      <div className="md:hidden fixed top-0 inset-x-0 z-[9999] border-b border-black/10">
        <div className="flex h-16">
          {/* metade ESQUERDA: fundo branco + logo centrado */}
          <div className="w-1/2 bg-white flex items-center justify-center">
            <Link href="/" aria-label="Go to homepage" className="shrink-0">
              <Image src={logo} alt="Explorer Logo" className="h-12 w-auto" priority />
            </Link>
          </div>

          {/* metade DIREITA: bege + hamburger centrado */}
          <div className="w-1/2 bg-[#E8E4D6] flex items-center justify-center">
            <button
              onClick={() => setOpen(o => !o)}
              aria-label={open ? "Close main menu" : "Open main menu"}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              className="inline-flex flex-col items-center justify-center h-12 w-12 p-2 gap-[3px]"
            >
              <span className="block w-full h-[4px] bg-black rounded" />
              <span className="block w-full h-[4px] bg-black rounded" />
              <span className="block w-full h-[4px] bg-black rounded" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {/* Backdrop */}
      <button
        aria-hidden={!open}
        onClick={closeMenu}
        className={`md:hidden fixed inset-0 z-[60] bg-black/40 transition-opacity ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className={`md:hidden fixed top-0 right-0 z-[61] h-screen w-[82%] max-w-xs
                   bg-[#E8E4D6] text-black shadow-xl transition-transform duration-300
                   ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between h-14 px-4 border-b border-black/10">
          <Link href="/" onClick={closeMenu} className="shrink-0" aria-label="Go to homepage">
            <Image src={logo} alt="Explorer Logo" className="h-10 w-auto" />
          </Link>
          <button onClick={closeMenu} aria-label="Close menu" className="p-2">
            <X size={26} />
          </button>
        </div>

        <nav className="px-4 pt-4 pb-24 overflow-y-auto">
          <ul className="text-sm font-semibold space-y-1.5">
            <li><Link href="/" onClick={closeMenu} className="block px-2 py-2 rounded hover:bg-black/5">Home</Link></li>
            <li><Link href="/about-explorer-investments" onClick={closeMenu} className="block px-2 py-2 rounded hover:bg-black/5">About Explorer & <br></br>the Portugal Golden Visa</Link></li>
            <li><Link href="/golden-visa-process" onClick={closeMenu} className="block px-2 py-2 rounded hover:bg-black/5">Golden Visa Process</Link></li>
            <li><Link href="/golden-visa-benefits" onClick={closeMenu} className="block px-2 py-2 rounded hover:bg-black/5">Golden Visa Benefits</Link></li>
            <li><Link href="/golden-visa-simulator" onClick={closeMenu} className="block px-2 py-2 rounded hover:bg-black/5">Roi Simulator</Link></li>
            <li><Link href="/golden-visa-portugal-blog" onClick={closeMenu} className="block px-2 py-2 rounded hover:bg-black/5">Golden Visa Blog</Link></li>
            <li><Link href="https://www.explorerinvestments.com/" target="_blank" onClick={closeMenu} className="block px-2 py-2 rounded hover:bg-black/5">ExplorerInvestments.com</Link></li>
          </ul>
        </nav>

        <div className="fixed bottom-0 right-0 w-[82%] max-w-xs bg-[#E8E4D6] border-t border-black/10 p-4">
          <HeaderCTAButton
            onAfterClick={closeMenu} // Passamos a função para fechar o menu
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#B4A77E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#9c9067]"
          />
        </div>
      </aside>
    </>
  );
}