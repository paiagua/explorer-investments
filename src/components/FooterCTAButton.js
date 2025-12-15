// /components/FooterCTAButton.js
'use client';

import React from 'react';
import { Send } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export default function FooterCTAButton() {
  const router = useRouter();
  const pathname = usePathname();

  // scroll com offset (compensa o header fixo)
  const scrollToIdWithOffset = (id, offset) => {
    const el = document.getElementById(id);
    if (!el) return false;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    return true;
  };

  const handleFooterCTA = () => {
    // A verificação 'window' já não é necessária se a lógica só corre no cliente
    // tenta scroll local primeiro
    const header = document.querySelector('header');
    const offset = header?.offsetHeight ?? (window.innerWidth < 768 ? 72 : 88);

    const ok = scrollToIdWithOffset('DivAskSimulation', offset);

    if (!ok) {
      // se não existe aqui, vai para a home já com âncora
      router.push('/#DivAskSimulation');
    }
  };

  return (
    <button
      onClick={handleFooterCTA}
      className="mt-[20px] mb-[30px] bg-[#B4A77E] hover:bg-[#9c9067] text-white font-medium text-sm px-4 py-2 rounded-full transition text-center inline-flex items-center gap-2"
    >
      <Send size={16} strokeWidth={2} />
      <span>Get Your Golden Visa Details</span>
    </button>
  );
}