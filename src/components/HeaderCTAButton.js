// /components/HeaderCTAButton.js
'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { CalendarCheck } from 'lucide-react';

export default function HeaderCTAButton({ className, onAfterClick }) {
  const router = useRouter();
  const pathname = usePathname();

  const goToSimulation = () => {
    if (typeof window === 'undefined') return;

    if (pathname === '/') {
      document.getElementById('DivAskSimulation')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      router.push('/#DivAskSimulation');
    }

    // Função opcional para ser chamada depois do clique (ex: fechar o menu mobile)
    if (onAfterClick) {
      onAfterClick();
    }
  };

  return (
    <button
      onClick={goToSimulation}
      // Recebemos o className como prop para ser flexível
      className={className}
    >
      <CalendarCheck size={16} />
      Book Your Free Consultation
    </button>
  );
}