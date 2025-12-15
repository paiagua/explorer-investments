// app/(blog)/portugal-world-travel-awards-2025-algarve-madeira-golden-visa/page.tsx
// SEO article + Explorer | Golden Visa positioning

import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Menu';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import BlogPreviewGridFromXML from '@/components/BlogPreviewGridFromXML';

export const revalidate = 600;
export const fetchCache = 'force-cache';

import { Globe, TrendingUp, ShieldCheck, BarChart, TreePalm, MapPin } from 'lucide-react';

const SLUG = 'portugal-world-travel-awards-2025-algarve-madeira-golden-visa';
const CANONICAL_URL = `https://goldenvisashub.com/${SLUG}`;
const OG_IMAGE =
  'https://goldenvisashub.com/assets/images/blog/portugal-world-travel-awards-2025.jpg';
const PUBLISHED = '2025-12-08T09:00:00+00:00';

export const metadata = {
  title:
    'Portugal Wins 12 World Travel Awards (2025) – Algarve, Madeira & Golden Visa Outlook',
  description:
    'Portugal arrecadou 12 World Travel Awards em 2025, incluindo o Algarve como Melhor Destino de Praia do Mundo. Descubra o impacto para o Golden Visa, private equity e a estratégia de investimento da Explorer.',
  openGraph: {
    title:
      'Portugal Wins 12 World Travel Awards (2025) – Algarve, Madeira & Golden Visa Outlook',
    description:
      'Algarve e Madeira reforçam Portugal como destino nº1 para lifestyle, turismo e Golden Visa. Veja o que isto significa para investidores e para fundos regulados de €500k como os da Explorer.',
    images: [OG_IMAGE],
    url: CANONICAL_URL,
  },
  alternates: { canonical: CANONICAL_URL },
  // opcional: pode mapear parte disto para Article JSON-LD no Script abaixo
};

const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-[#B4A77E] pl-4 italic text-[#002741] bg-[#FFFCF3] py-3 px-4 rounded-md my-6 shadow-sm">
    <p>“{children}”</p>
  </blockquote>
);

export default function PortugalWorldTravelAwards2025() {
  return (
    <>
      <Script
        id="ld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': CANONICAL_URL,
            },
            headline:
              'Portugal Wins 12 World Travel Awards (2025) – Algarve, Madeira & Golden Visa Outlook',
            image: [OG_IMAGE],
            datePublished: PUBLISHED,
            dateModified: PUBLISHED,
            author: {
              '@type': 'Organization',
              name: 'Explorer Investments',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Explorer Investments',
              logo: {
                '@type': 'ImageObject',
                url: 'https://goldenvisashub.com/assets/images/logo-explorer.png',
              },
            },
            description:
              'Portugal arrecadou 12 World Travel Awards em 2025, com o Algarve e a Madeira a reforçarem o país como destino premium para turismo, lifestyle e Golden Visa – incluindo a rota de investimento em fundos privados regulados.',
          }),
        }}
      />

      <Header />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#002741]">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* LABEL + H1 */}
          <header>
            <div className="text-xs sm:text-sm uppercase text-[#B4A77E] font-semibold mb-2 flex items-center gap-2">
              <Globe size={16} />
              <span>Portugal • Golden Visa • Tourism</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
              Portugal conquista 12 World Travel Awards em 2025 – o que isto
              significa para investidores Golden Visa
            </h1>

            <p className="text-[#15364A] text-lg font-light mt-3 text-balance">
              O Algarve volta a ser eleito Melhor Destino de Praia do Mundo e a
              Madeira mantém o título de Melhor Destino Insular. Este reforço da
              marca Portugal não é só boa notícia para o turismo – é um sinal
              claro para famílias e investidores que procuram residência,
              diversificação e fundos privados regulados através do{' '}
              <strong>Golden Visa Portugal</strong>.
            </p>

            <p className="text-xs text-[#5A6F7B] mt-2">
              Por Explorer Investments • Atualizado 8 Dez 2025
            </p>
          </header>

          {/* HERO IMAGE */}
          <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow border border-gray-200">
            <Image
              src={OG_IMAGE}
              alt="Portugal World Travel Awards 2025 – Algarve e Madeira em destaque"
              fill
              className="object-cover"
            />
          </figure>

          {/* STATS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div>
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">
                Prémios 2025
              </p>
              <p className="text-xl font-bold">12</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">
                Algarve
              </p>
              <p className="text-xl font-bold flex items-center justify-center gap-1">
                <TreePalm size={16} /> #1 Praia
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">
                Madeira
              </p>
              <p className="text-xl font-bold">11.º ano</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wide text-[#5A6F7B]">
                Tese Explorer
              </p>
              <p className="text-xl font-bold">Turismo &amp; Fundos</p>
            </div>
          </div>

          {/* INTRO EXPLORER ANGLE */}
          <Quote>
            <span className="font-semibold">André Bandeira, Explorer:</span>{' '}
            A consistência de prémios internacionais mostra que Portugal não é
            só um destino de férias – é um ativo estrutural. Para investidores,
            o Golden Visa via fundos privados permite alinhar residência
            europeia com exposição a um setor vencedor como o turismo.
          </Quote>

          {/* TABLE OF CONTENTS (MANUAL) */}
          <nav
            aria-label="Table of contents"
            className="border border-[#E2E5EA] rounded-xl p-4 bg-[#F8FAFB] text-sm"
          >
            <p className="font-semibold mb-2 flex items-center gap-2">
              <TrendingUp size={16} />
              Conteúdos deste artigo
            </p>
            <ol className="list-decimal list-inside space-y-1 text-[#15364A]">
              <li>
                <a href="#premios-2025" className="hover:underline">
                  Portugal em destaque nos World Travel Awards 2025
                </a>
              </li>
              <li>
                <a href="#algarve" className="hover:underline">
                  Algarve: Melhor Destino de Praia do Mundo (4.ª vez)
                </a>
              </li>
              <li>
                <a href="#madeira" className="hover:underline">
                  Madeira: Melhor Destino Insular – 11 anos seguidos
                </a>
              </li>
              <li>
                <a href="#impacto-investidor" className="hover:underline">
                  O impacto para investidores Golden Visa e HNWI
                </a>
              </li>
              <li>
                <a href="#fundos-explorer" className="hover:underline">
                  Fundos privados &amp; Golden Visa: abordagem Explorer
                </a>
              </li>
              <li>
                <a href="#proximos-passos" className="hover:underline">
                  Próximos passos para famílias e investidores
                </a>
              </li>
            </ol>
          </nav>

          {/* SECTION 1 – OVERALL AWARDS */}
          <section id="premios-2025" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <BarChart size={22} />
              Portugal reforça liderança com 12 World Travel Awards
            </h2>

            <p className="text-[#15364A]">
              Nos <strong>World Travel Awards (WTA) 2025</strong>, muitas vezes
              apelidados de “Óscares do turismo”, Portugal voltou a destacar-se,
              arrecadando <strong>12 prémios globais</strong>. Entre eles, dois
              títulos âncora:
            </p>

            <ul className="list-disc pl-5 space-y-1 text-[#15364A]">
              <li>
                Algarve eleito <strong>Melhor Destino de Praia do Mundo</strong>{' '}
                pela 4.ª vez – um recorde absoluto;
              </li>
              <li>
                Madeira confirmada como{' '}
                <strong>Melhor Destino Insular do Mundo</strong> pelo 11.º ano
                consecutivo.
              </li>
            </ul>

            <p className="text-[#15364A]">
              A estes títulos juntam-se distinções para resorts de luxo no
              Algarve, projetos de turismo sustentável, companhias aéreas e
              unidades urbanas em Lisboa. Em conjunto, sinalizam um ecossistema
              turístico robusto, diversificado e com forte reconhecimento
              internacional – exatamente o tipo de enquadramento que{' '}
              <strong>investidores Golden Visa</strong> procuram quando avaliam
              risco-país, liquidez e valorização de longo prazo.
            </p>

            <p className="text-[#15364A]">
              Para uma visão mais ampla de destinos em alta junto de
              investidores internacionais, veja também o nosso artigo:{' '}
              <Link
                href="/5-trending-retirement-golden-visa-destinations-americans-2025"
                className="text-[#B4A77E] underline underline-offset-4"
              >
                5 Trending Retirement &amp; Golden Visa Destinations for
                Americans (2025)
              </Link>
              .
            </p>
          </section>

          {/* SECTION 2 – ALGARVE */}
          <section id="algarve" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MapPin size={22} />
              Algarve: Melhor Destino de Praia do Mundo pela 4.ª vez
            </h2>

            <p className="text-[#15364A]">
              Banhos de sol quase todo o ano, praias de classe mundial,
              gastronomia, golfe e uma oferta extensa de hotéis, resorts e
              condomínios privados colocam o{' '}
              <strong>Algarve no topo das preferências globais</strong>. Em
              2025, a região volta a vencer destinos como Cancun, Caraíbas ou
              Tailândia, sendo a única a conquistar o título de Melhor Destino
              de Praia do Mundo por quatro vezes.
            </p>

            <p className="text-[#15364A]">
              Paralelamente, resorts como <strong>Vila Joya</strong>,{' '}
              <strong>Domes Lake Algarve</strong> e{' '}
              <strong>Dunas Douradas Beach Club</strong> foram distinguidos em
              categorias de boutique, família e golfe &amp; vilas, reforçando o
              posicionamento do Algarve em segmentos de{' '}
              <strong>turismo premium</strong> e lifestyle de longa duração.
            </p>

            <Quote>
              O Algarve tornou-se um hub natural para famílias que querem unir
              residência europeia, educação internacional e um lifestyle de
              resort. É um dos principais destinos analisados na nossa tese de
              investimento em turismo e hospitality.
            </Quote>

            <p className="text-[#15364A]">
              Do ponto de vista de <strong>Golden Visa Portugal</strong>, este
              reconhecimento aumenta a visibilidade da região e, com ela, a
              procura por ativos turísticos e imobiliários de qualidade – seja
              de forma direta, seja através de{' '}
              <strong>fundos privados regulados</strong> com exposição a
              hospitality e turismo.
            </p>
          </section>

          {/* SECTION 3 – MADEIRA */}
          <section id="madeira" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShieldCheck size={22} />
              Madeira: 11 anos como Melhor Destino Insular do Mundo
            </h2>

            <p className="text-[#15364A]">
              A <strong>Madeira</strong> consolidou a sua posição como um dos
              destinos insulares mais consistentes a nível global, vencendo
              novamente destinos como Bali, Havai, Fiji ou Taiti. Não é apenas
              uma paisagem exuberante: a ilha reforça ano após ano uma oferta
              turística diversificada, com foco em autenticidade, natureza e
              experiências de alto valor acrescentado.
            </p>

            <p className="text-[#15364A]">
              Para famílias que ponderam <strong>mudar de vida</strong>, a
              Madeira oferece:
            </p>

            <ul className="list-disc pl-5 space-y-1 text-[#15364A]">
              <li>Clima ameno, segurança e qualidade de vida;</li>
              <li>Conectividade aérea crescente com a Europa;</li>
              <li>
                Um enquadramento fiscal competitivo em determinadas estruturas
                empresariais;
              </li>
              <li>
                Possibilidade de ser base residencial num contexto de{' '}
                <strong>Golden Visa</strong> obtido via investimento em fundos.
              </li>
            </ul>
          </section>

          {/* SECTION 4 – IMPACTO PARA INVESTIDORES */}
          <section id="impacto-investidor" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <TrendingUp size={22} />
              Porque é que estes prémios interessam a quem procura Golden Visa
              Portugal
            </h2>

            <p className="text-[#15364A]">
              Os <strong>World Travel Awards</strong> não são apenas uma
              curiosidade mediática. Para investidores e famílias HNWI, são um
              indicador relevante de:
            </p>

            <ul className="list-disc pl-5 space-y-1 text-[#15364A]">
              <li>
                <strong>Força da marca-país</strong> – mais procura turística
                tende a suportar receitas, taxas de ocupação e valorização de
                ativos ligados ao setor;
              </li>
              <li>
                <strong>Estabilidade de longo prazo</strong> – séries de prémios
                consecutivos (como no Algarve e Madeira) sugerem consistência e
                não apenas peaks temporários;
              </li>
              <li>
                <strong>Atratividade para realocação</strong> – famílias que já
                visitam o país acabam frequentemente por considerar residência
                fiscal ou de longo prazo;
              </li>
              <li>
                <strong>Contexto ideal para veículos regulados</strong> – fundos
                de private equity e turismo podem capturar valor neste ciclo
                positivo.
              </li>
            </ul>

            <p className="text-[#15364A]">
              No caso do <strong>Golden Visa Portugal</strong>, o canal de
              entrada dominante passou a ser o{' '}
              <strong>investimento mínimo de €500k em fundos regulados</strong>,
              geridos por equipas com track-record e supervisão CMVM. É aqui que
              a abordagem de <strong>private equity</strong> da Explorer se
              torna particularmente relevante.
            </p>
          </section>

          {/* SECTION 5 – FUNDOS EXPLORER */}
          <section id="fundos-explorer" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <BarChart size={22} />
              Private equity &amp; Golden Visa: como a Explorer lê o turismo
              português
            </h2>

            <Quote>
              Capital dedicado ao Golden Visa deve ser produtivo. O investimento
              em fundos regulados permite alinhar objetivos de residência
              familiar com estratégias profissionais de criação de valor em
              setores como turismo, hospitality e imobiliário selecionado.
            </Quote>

            <p className="text-[#15364A]">
              A <strong>Explorer Investments</strong> acompanha de perto o
              desenvolvimento do turismo português há vários anos, com foco em:
            </p>

            <ul className="list-disc pl-5 space-y-1 text-[#15364A]">
              <li>
                <strong>Ativos turísticos diferenciados</strong> em zonas como
                Algarve, Lisboa, Cascais e Madeira;
              </li>
              <li>
                <strong>Projetos com forte componente ESG</strong>, incluindo
                turismo responsável e regenerativo;
              </li>
              <li>
                <strong>Estruturas robustas de governance</strong> e reporting
                profissional, essenciais para investidores internacionais;
              </li>
              <li>
                Alinhamento entre{' '}
                <strong>Golden Visa, planeamento sucessório e mobilidade
                global</strong>.
              </li>
            </ul>

            <p className="text-[#15364A]">
              Para famílias que avaliam alternativas, recomendamos a leitura em
              paralelo do artigo sobre destinos de reforma e mobilidade global,{' '}
              especialmente para americanos, disponível aqui:{' '}
              <Link
                href="/5-trending-retirement-golden-visa-destinations-americans-2025"
                className="text-[#B4A77E] underline underline-offset-4"
              >
                5 Trending Retirement &amp; Golden Visa Destinations for
                Americans (2025)
              </Link>
              . Este contexto ajuda a comparar{' '}
              <strong>Portugal vs. Espanha, Grécia, Panamá ou Costa Rica</strong>{' '}
              na perspetiva de residência e lifestyle.
            </p>

            <p className="text-[#15364A]">
              Pode também acompanhar as distinções oficiais no site dos{' '}
              <a
                href="https://www.worldtravelawards.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B4A77E] underline underline-offset-4"
              >
                World Travel Awards
              </a>
              , que detalham as categorias atribuídas a Portugal em 2025.
            </p>
          </section>

          {/* SECTION 6 – CALL TO ACTION / NEXT STEPS */}
          <section id="proximos-passos" className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Globe size={22} />
              Próximos passos para quem quer ligar Golden Visa ao boom do
              turismo
            </h2>

            <p className="text-[#15364A]">
              Se está a avaliar o <strong>Golden Visa Portugal</strong> como
              solução de mobilidade e proteção patrimonial, os resultados dos
              World Travel Awards 2025 são um sinal adicional: o país continua a
              consolidar-se como <strong>destino nº1 de lifestyle na Europa</strong>, com um
              setor turístico sofisticado, resiliente e com procura global.
            </p>

            <p className="text-[#15364A]">
              Através de <strong>fundos privados regulados</strong>, a Explorer
              procura transformar esta realidade em oportunidades concretas de
              investimento, combinando:
            </p>

            <ul className="list-disc pl-5 space-y-1 text-[#15364A]">
              <li>Residência e mobilidade para toda a família;</li>
              <li>Diversificação em euros e ativos europeus;</li>
              <li>
                Exposição profissionalmente gerida a{' '}
                <strong>turismo, hospitality e imobiliário selecionado</strong>;
              </li>
              <li>
                Estruturas alinhadas com requisitos de Golden Visa e supervisão
                CMVM.
              </li>
            </ul>

            <p className="text-[#15364A] font-semibold">
              O próximo passo é simples: compreender qual o veículo certo, o
              calendário adequado e como o investimento em fundos pode encaixar
              na sua estratégia global de património.
            </p>
          </section>

          {/* CTA EXPLORER */}
          <CtaSection />
        </div>
      </section>

      <BlogPreviewGridFromXML currentSlug={SLUG} />

      <Footer />
    </>
  );
}
