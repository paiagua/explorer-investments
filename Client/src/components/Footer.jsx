// /components/Footer.js
// REMOVEMOS O 'use client'; - Isto agora é um Server Component (muito mais rápido)

import React from 'react';
import Image from 'next/image'; // Importamos o 'next/image'
import Link from 'next/link'; // Usamos 'next/link' para navegação interna
import dynamic from 'next/dynamic'; // Importamos o 'dynamic' para lazy loading
import { Send, Mail } from 'lucide-react'; // Trocámos FontAwesome por Mail de lucide

// Carregamento Lento (Lazy Loading) dos componentes pesados
const GoldenVisaGuideForm = dynamic(() => import('./GoldenVisaGuideForm'));
const Share = dynamic(() => import('./Share'));

// Importamos o nosso novo botão de cliente
import FooterCTAButton from './FooterCTAButton';

function Footer() {
  // Toda a lógica de cliente (hooks, funções) foi movida para FooterCTAButton.js

  return (
    <>
      <GoldenVisaGuideForm />
      <div className="w-full bg-[#252C32] text-white py-6" id="page-footer">
        <div className="max-w-[1200px] mx-auto text-left text-sm pb-12 px-3">
          <div className="mt-10 pb-10">
            <Link href="/">
              <Image
                src="https://goldenvisashub.com/assets/images/logo-footer-white.png"
                alt="Explorer Logo"
                width={200} // Obrigatório para next/image
                height={50} // Ajuste a altura correta do seu logo
                style={{ height: 'auto' }} // Mantém a proporção
                priority={false} // Não é prioritário (está no footer)
                className="mb-5 max-w-[200px] w-full"
              />
            </Link>
          </div>
          <div className="pb-10">
            <h3 className="text-white text-md font-semibold mb-[20px]">
              Your Investor Relations Team
            </h3>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* André */}
              <div className="flex items-start gap-3">
           
                <div className="text-white text-sm leading-snug">
                  <p className="font-bold">André Bandeira</p>
                  <a
                    href="mailto:ab@explorerinvestments.com?subject=Golden%20Visa%20Investment%20Inquiry%20from%20Website"
                    className="flex items-center gap-1 text-[#B4A77E] hover:underline"
                  >
                    <Mail size={14} /> {/* Ícone substituído */}
                    ab@explorerinvestments.com
                  </a>
                </div>
              </div>

              {/* Maria */}
              <div className="flex items-start gap-3">
            
                <div className="text-white text-sm leading-snug">
                  <p className="font-bold">Maria Campos Silva</p>
                  <a
                    href="mailto:mcs@explorerinvestments.com?subject=Golden%20Visa%20Investment%20Inquiry%20from%20Website"
                    className="flex items-center gap-1 text-[#B4A77E] hover:underline"
                  >
                    <Mail size={14} /> {/* Ícone substituído */}
                    mcs@explorerinvestments.com
                  </a>
                </div>
              </div>
            </div>

            {/* Aqui usamos o nosso novo Componente de Cliente */}
            <FooterCTAButton />
          </div>

          <div>Explorer</div>
          <div className="flex flex-col md:flex-row md:gap-6 gap-2 text-[#B4A77E] text-sm font-medium w-full md:w-auto mt-4 mb-10">
            {/* Usar Link do Next.js para navegação interna é mais rápido */}
            <Link href="/" className="hover:text-white transition text-left">
              Home
            </Link>
            <Link
              href="/about-explorer-investments"
              className="hover:text-white transition text-left"
            >
              About Explorer Investments
            </Link>
            <Link
              href="/golden-visa-portugal-blog"
              className="hover:text-white transition text-left"
            >
              Golden Visa Latest News
            </Link>
            <Link
              href="/golden-visa-process"
              className="hover:text-white transition text-left"
            >
              Golden Visa Application Process
            </Link>
            <Link
              href="/golden-visa-benefits"
              className="hover:text-white transition text-left"
            >
              Golden Visa Benefits
            </Link>
          </div>
          <div>Latest Golden Visa Articles</div>
          <div className="flex flex-col md:flex-row md:gap-6 gap-2 text-[#B4A77E] text-sm font-medium w-full md:w-auto mt-4 mb-10">
            <Link
              href="/portugal-golden-visa-complete-guide-2025"
              className="hover:text-white transition text-left"
            >
              Complete 2025 Guide
            </Link>
            <Link
              href="/avoid-expensive-golden-visa-mistakes-2025"
              className="hover:text-white transition text-left"
            >
              Expensive Golden Visa Mistakes to Avoid
            </Link>
            <Link
              href="/why-invest-in-portugal-2025"
              className="hover:text-white transition text-left"
            >
              Why Invest in Portugal in 2025
            </Link>
            <Link
              href="/portugal-golden-visa-2025-last-chance-for-americans"
              className="hover:text-white transition text-left"
            >
              Golden Visa 2025 - Act Fast
            </Link>
          </div>

          {/* O bloco de HTML duplicado e escondido foi REMOVIDO */}

          <div>Sharing this could change someone’s future.</div>
          <div>
            <Share />
          </div>
          <br></br>
          <br></br>

          <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <a
              href="/assets/docs/cmvm.pdf"
              className="hover:text-white transition text-left"
              target="_blank"
              rel="noopener noreferrer"
            >
              CMVM Registration
            </a>
            <Link
              href="/terms"
              className="hover:text-white transition text-left"
              target="_blank"
            >
              Terms and conditions
            </Link>
            <Link
              href="/cookie"
              className="hover:text-white transition text-left"
              target="_blank"
            >
              Cookie policy
            </Link>
            <Link
              href="/policy"
              className="hover:text-white transition text-left"
              target="_blank"
            >
              Privacy policy
            </Link>
          </div>
          <br></br>
          <br></br>

          <p className="font-bold mb-6 text-md lg:text-sm">
            Copyright © 2025 Explorer Investments
          </p>
          <p className="mb-4">
            It is recommended to consult Chapter V of Decree-Law nº 162/2014, of
            October 31st, published in the Official Gazette, as well as its
            revision by Law nº 2/2020, of March 31st. The information included
            here is of a general nature, and therefore each potential investor
            should seek independent advice (e.g., legal, financial, tax, etc.)
          </p>
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default Footer;