
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

  import { MessageCircle } from "lucide-react"; // importa o ícone

import { faCommentDots, faIdCard , faStar } from '@fortawesome/free-solid-svg-icons';
import { Disclosure } from '@headlessui/react';
  import { Play } from "lucide-react";
import { ArrowRight } from "lucide-react";
 import { ChevronUpIcon } from '@heroicons/react/20/solid';
 
 import { ChevronDown, ChevronUp } from 'lucide-react';

 import { Users, Banknote, Map, Landmark } from 'lucide-react';
import {
  CalendarCheck,
  Flag,
  LineChart,
 
  Globe,
  Home
} from 'lucide-react'
 



import React, { useState, useEffect, useRef } from 'react';

// --- Scroll helpers (reuso em todo o app) ---
const getHeaderOffset = () => {
  const header = document.querySelector('header');
  return header?.offsetHeight ?? (window.innerWidth < 768 ? 72 : 88);
};

const scrollToIdWithOffset = (id) => {
  const el = document.getElementById(id);
  if (!el) return false;
  const y = el.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  window.scrollTo({ top: y, behavior: 'smooth' });
  return true;
};

// tenta scroll; se não existir, vai para home com âncora
const scrollToIdOrHome = (id = 'DivAskSimulation') => {
  if (typeof window === 'undefined') return;
  const ok = scrollToIdWithOffset(id);
  if (!ok) {
    // usa hash para que o browser já tente ancorar ao abrir
    window.location.href = `/#${id}`;
  }
};

const useCountUpOnVisible = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun) {
          let start = 0;
          const increment = end / (duration / 20);
          const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(interval);
            }
            setCount(Math.floor(start));
          }, 20);
          setHasRun(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasRun]);

  return [count, ref];
};

const StatsSection = () => {
  const [aum, aumRef] = useCountUpOnVisible(1.8 * 100); // 170 for formatting
  const [assets, assetsRef] = useCountUpOnVisible(100);
  const [exits, exitsRef] = useCountUpOnVisible(39);

  return (
    <div className="w-full bg-[#ECE8D9] py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-[#002d3d] text-xl font-semibold uppercase mb-10">
          Explorer in Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-[#002d3d]">
          {/* AUM */}
          <div ref={aumRef}>
            <h3 className="text-sm mb-2">AUM</h3>
            <hr className="border-t border-[#002d3d]/30 mb-2" />
            <p className="text-4xl font-bold">€{(aum / 100).toFixed(1)}BN</p>
            <hr className="border-t border-[#002d3d]/30 mt-2" />
          </div>

          {/* Assets */}
          <div ref={assetsRef}>
            <h3 className="text-sm mb-2">ASSETS</h3>
            <hr className="border-t border-[#002d3d]/30 mb-2" />
            <p className="text-4xl font-bold">{assets}+</p>
            <hr className="border-t border-[#002d3d]/30 mt-2" />
          </div>

          {/* Exits */}
          <div ref={exitsRef}>
            <h3 className="text-sm mb-2">EXITS</h3>
            <hr className="border-t border-[#002d3d]/30 mb-2" />
            <p className="text-4xl font-bold">{exits}</p>
            <hr className="border-t border-[#002d3d]/30 mt-2" />
          </div>
        </div>


      </div>
    </div>
  );
};
 
 const PortugalWeatherBanner = () => {
  const [weather, setWeather] = useState(null);
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    // Get weather
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=38.72&longitude=-9.14&current_weather=true"
    )
      .then((res) => res.json())
      .then((data) => setWeather(data.current_weather))
      .catch((err) => console.error("Failed to fetch weather:", err));

    // Get local time in Lisbon
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Europe/Lisbon",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      const time = new Intl.DateTimeFormat("en-GB", options).format(now);
      setLocalTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // update every minute

    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (code) => {
    if (code === 0) return "☀️";
    if (code >= 1 && code <= 3) return "⛅️";
    if (code === 45 || code === 48) return "🌫️";
    if (code >= 51 && code <= 67) return "🌧️";
    if (code >= 71 && code <= 77) return "❄️";
    if (code >= 80 && code <= 82) return "🌧️";
    if (code >= 95) return "⛈️";
    return "☀️";
  };

  return (
 
    <div className="flex flex-col gap-3 w-full lg:w-1/2">
 
      {weather ? (
<div className="my-5 bg-[#F1EFE7] text-[#002d3d] text-sm px-5 py-3 rounded-lg shadow-md inline-block w-fit">
          <div className="flex items-center gap-2 mb-1">
            <span>{getWeatherIcon(weather.weathercode)}</span>
            <strong>Lisbon:</strong>
            <span>{weather.temperature}°C</span>
            <span className="text-gray-500 text-xs">
              | Wind: {weather.windspeed} km/h
            </span>
          </div>
          <div className="text-xs text-gray-600">
            Local time: <span className="font-semibold">{localTime}</span>
          </div>
        </div>
      ) : (
        <div className="text-sm text-gray-500">Fetching weather...</div>
      )}
    </div>

   
 

  );
};

const RegulatoryHighlight = () => {
  const [expanded, setExpanded] = useState(false);
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
 <section style={{ backgroundColor: '#002741', width: '100%', padding: '4rem 0' }}>
      <div
        style={{
          maxWidth: '1200px',
          width: '90%',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem',
          color: '#fff'
        }}
      >
        {/* Left Content */}
        <div style={{ flex: '1 1 600px' }}>
  <div style={{ marginBottom: '1.5rem' }}>
  <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>
  Explorer’s Fund - Regulated by CMVM
  </h2>
  <p style={{ fontSize: '1.2rem', fontWeight: 400, marginTop: '0.5rem', color: '#ccc' }}>
    Backed by Portugal’s Largest Private Equity Fund
  </p>
</div>


<img
  src="https://goldenvisashub.com/assets/images/CMVM_Resources_IS.CMVMLOGO.svg"
  alt="CMVM Logo"
  style={{ height: '32px', marginBottom: '1.5rem', filter: 'brightness(0) invert(1)' }}
/>


 
        {expanded && (
  <div style={{ fontSize: '1rem', lineHeight: 1.6, marginTop: '1rem', color: '#fff' }}>
    <p>
      Explorer Investments is fully regulated by the <strong>CMVM - Portuguese Securities Market Commission</strong>,
      Portugal’s official financial regulator. We manage the <strong>largest private equity fund in the country</strong>,
      with over <strong>€1.8 billion in assets</strong> and more than <strong>20 years of experience</strong>.
    </p>

    <p style={{ marginTop: '1.5rem' }}>
      We operate independently, with strict compliance, transparency, and institutional-grade governance.
      Our alignment with both international investors and leading institutions makes us the trusted choice for
      those seeking performance with peace of mind.
    </p>

    {/* Final title and subtitle */}
    <div style={{ marginTop: '2rem' }}>
      <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: 0, color: '#E3DFCF' }}>
        You’re not just applying for a Golden Visa
      </h3>
      <p style={{ fontSize: '1.1rem', fontWeight: 400, marginTop: '0.3rem', color: '#E3DFCF' }}>
        you’re investing with the best.
      </p>
    </div>
  </div>
)}


        {expanded && (
            <div className="mt-6">
                  <button
                  onClick={() => scrollToIdOrHome('DivAskSimulation')}
                className="mt-5 bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-base px-6 py-3 rounded-full transition flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Talk to an Expert
              </button>
            </div>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 bg-transparent border border-[#B4A77E] text-[#B4A77E] hover:bg-[#1e3a4f] font-semibold text-sm px-4 py-2 rounded-full transition"
          >
            {expanded ? 'Show Less' : 'See More'}
          </button>

          {/* Show only if expanded */}
  
        </div>

        {/* Right Content */}
        <div style={{ minWidth: '200px', textAlign: 'left' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>€1.8BN</div>
          <div style={{ fontSize: '1rem', color: '#ccc' }}>Assets Under Management</div>
          <div style={{ fontSize: '0.9rem', color: '#aaa', marginTop: '0.5rem' }}>
            As of {formattedDate}
          </div>
        </div>
      </div>
    </section>
  );
};

 
const leadership = [
  {
    name: 'Elizabeth Rothfield',
    role: 'Founding Partner, CEO',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-25-1-e1740648982322.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/elizabeth-rothfield/',
  },
  {
    name: 'José Tiago Silva',
    role: 'Partner, Hospitality',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-24-e1740649239182.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/jose-tiago-silva/',
  },
  {
    name: 'Pedro Coutinho',
    role: 'Partner, Buyouts',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-10-e1741181573708.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/pedro-miguel-coutinho/',
  },
  {
    name: 'Tiago Gonçalves',
    role: 'Partner, Buyouts',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-3-e1740649907938.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/tiago-goncalves/',
  },
  {
    name: 'António Rocha e Silva',
    role: 'Partner, Growth',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-2-e1740649961985.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/antonio-rocha-e-silva/',
  },
];

 

const investmentProfessionals = [
  {
    name: 'Ricardo Nuno André',
    role: 'Hospitality',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-53-e1740650097406.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/ricardo-nuno-andre/',
  },
  {
    name: 'Tiago Alcoforado Calhau',
    role: 'Hospitality',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-45-e1740650308882.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/tiago-a-calhau/',
  },
  {
    name: 'Maria Caçorino',
    role: 'Buyouts',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-37-e1740650430195.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/maria-cacorino/',
  },
  {
    name: 'João Caro de Sousa',
    role: 'Growth',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-57-e1740650524991.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/joao-caro-de-sousa/',
  },
  {
    name: 'Luís Belchior',
    role: 'Hospitality',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/03/20250210JF_EXPLORER-II-HR-CREDITS-JOANA-FREITAS-2-e1741721133777.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/luis-belchior/',
  },
  {
    name: 'Gonçalo Arruda Pereira',
    role: 'Growth',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-63-e1740650197253.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/goncalo-arruda-pereira/',
  },
  {
    name: 'Miguel Castello Branco',
    role: 'Hospitality',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-8-e1740650585771.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/miguel-castello-branco/',
  },
  {
    name: 'Pedro Correia Barros',
    role: 'Growth',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-61-e1740650652749.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/pedro-correia-barros/',
  },
  {
    name: 'João Dória',
    role: 'Buyouts',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-39-1-e1740650703322.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/joao-doria/',
  },
  {
    name: 'João Martins',
    role: 'Hospitality',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-48-e1740650770624.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/joao-martins/',
  },
  {
    name: 'Massimo Massimilla',
    role: 'Hospitality',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-65-e1740650818912.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/massimo-massimilla/',
  },
  {
    name: 'Diogo Mexia Alves',
    role: 'Buyouts',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-54-e1740650878579.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/diogo-mexia-alves/',
  },
  {
    name: 'Pedro Pereira Nunes',
    role: 'Hospitality',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-46-e1740650939466.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/pedro-pereira-nunes/',
  },
  {
    name: 'Beatriz Sim-Sim',
    role: 'Buyouts',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-68-e1740650993725.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/beatriz-sim-sim/',
  },
  {
    name: 'Margarida Teixeira',
    role: 'Growth',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-66-e1740651034279.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/margarida-teixeira/',
  },
  {
    name: 'Bruno Varandas',
    role: 'Buyouts',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/03/20241211JF_EXPLORER-LR-51-2-e1742994543894.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/bruno-varandas/',
  },
  {
    name: 'João Vazão',
    role: 'Buyouts',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-40-e1740651141838.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/joao-vazao/',
  },
];
 
 

 



 

function TeamSection({ title, teamData }) {
  const [isOpen, setIsOpen] = useState(false);

 
const buttonTexts = [
  "Let’s Talk",
  "Talk to Us",
  "Start Now",
  "Get Started",
  "Speak to an Expert",
  "Start Your Plan",
  "Begin Your Journey",
  "Talk to Our Team",
  "Book a Call",
  "Join Us Now"
];

// Retorna uma frase aleatória para cada renderização
const getRandomButtonText = () => {
  const randomIndex = Math.floor(Math.random() * buttonTexts.length);
  return buttonTexts[randomIndex];
};
return (
  <div className="w-full text-left">
    <div
      className="cursor-pointer flex justify-between items-center text-white mb-8 transition-all hover:text-[#B4A77E]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <h2 className="text-2xl md:text-4xl font-bold transition-all">
        {title}
      </h2>
      <span className="text-3xl font-bold transition-all">
        {isOpen ? '−' : '+'}
      </span>
    </div>

    {isOpen && (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {teamData.map((person, i) => (
       <div
  key={i}
  className="group transition-transform hover:scale-105"
>
  <div
    className="relative cursor-pointer"
      onClick={() => scrollToIdOrHome('DivAskSimulation')}
  >
    <img
      src={person.img}
      alt={person.name}
      className="w-full h-auto object-cover"
    />

<div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-left">
  <div className="mb-[3px]">
    <span className="block bg-[#002F49] text-white font-semibold text-sm px-2 py-0.5 rounded-sm w-fit">
      {person.name}
    </span>
  </div>
  <div>
    <span className="block bg-[#002F49] text-white text-xs px-2 py-0.5 rounded-sm w-fit">
      {person.role}
    </span>
  </div>
</div>



    {/* Botão no fundo da imagem */}
    <button
      onClick={(e) => {
        e.stopPropagation();
         scrollToIdOrHome('DivAskSimulation')();
      }}
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#B4A77E] text-white text-xs font-medium py-1.5 px-3 rounded-md transition-none"
    >
    {getRandomButtonText()}
    </button>
  </div>
</div>

        ))}
      </div>
    )}
  </div>
);

}




const investorRelations = [
  {
    name: 'André Bandeira',
    role: 'Investor Relations',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-5-e1740651315443.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/andre-bandeira/',
  },
  {
    name: 'Maria Campos Silva',
    role: 'Investor Relations',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-7-e1740651453850.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/maria-campos-silva/',
  },
  {
    name: 'Alexandre Holtreman',
    role: 'Operating Partner',
    img: 'https://www.explorerinvestments.com/wp-content/uploads/2025/06/20250522JF_EXPLORER-JUNHO-25-HR-CREDITS-JOANA-FREITAS-5.jpg',
    link: 'https://www.explorerinvestments.com/team_portrait/alexandre-holtreman/',
  },
];

function Benefits() {
   const [showDetails, setShowDetails] = useState(false);

  return (
    <>
   



 



  <div className="max-w-screen-xl mx-auto p-6">
<h2 className="text-base md:text-3xl font-bold text-center text-gray-800 mb-10">
  Get Exclusive Benefits with Your <br />
  <span className="text-[#B4A77E]"> Portuguese Golden Visa</span>
</h2>
 
 
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
   {[
     {
       title: 'Fast-Track to Citizenship',
       text: 'Get permanent residency in just 5 years and full citizenship after 6.',
     },
     {
       title: 'Minimal Stay Requirement',
       text: 'Only 7 days per year required in Portugal to maintain your residency.',
     },
     {
       title: 'Seamless European Travel',
       text: 'Enjoy visa-free access to 27 Schengen countries across Europe.',
     },
     {
       title: 'Unlimited Opportunities',
       text: 'Live, work, and study freely throughout the European Union.',
     },
     {
       title: 'Family-Friendly Benefits',
       text: 'Extend full residency rights to your spouse and children.',
     },
     {
       title: 'World-Class Services',
       text: 'Access Portugal’s top-tier healthcare and education systems.',
     },
   ].map((benefit, index) => (
     <div
       key={index}
       className="p-6 rounded-lg shadow-md text-left flex flex-col justify-between"
       style={{ backgroundColor: '#E4E0CF' }}
     >
       <div>
         <div className="mb-4">
           <FontAwesomeIcon
             icon={faCheckCircle}
             size="2x"
             style={{ color: '#002741' }}
           />
         </div>
         <h3 className="text-xl font-bold text-gray-800 mb-2">
           {benefit.title}
         </h3>
         <p className="text-gray-700 text-sm mb-4">{benefit.text}</p>
       </div>
 
 <div className="flex justify-end mt-4">
   <button
       onClick={() => scrollToIdOrHome('DivAskSimulation')}
     className="inline-flex items-center gap-2 border border-white text-[#002741] text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-white hover:text-[#002741] transition duration-300"
   >
     Learn More
     <ArrowRight size={16} />
   </button>
 </div>
 
     </div>
   ))}
 </div>
 
 </div>
 <RegulatoryHighlight />

 <div className="relative w-full h-[500px] sm:h-[600px]">
  <img
    src="assets/images/Background.webp"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover"
    loading="lazy"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 lg:bg-black/30 z-10"></div>

  {/* Conteúdo */}
  <div className="absolute inset-0 flex flex-col justify-center px-6 text-white z-20">
    <div className="max-w-screen-xl w-[90%] lg:w-[1200px] mx-auto text-left">
      <h1 className="font-bebasneuepro text-4xl lg:text-6xl font-bold mb-4 uppercase mt-8">
        Invest in Portugal’s
      </h1>

      <p className="font-bebasneuepro text-lg lg:text-2xl">
        Leading private equity fund with €1.8B AUM.
      </p>

      <p className="font-bebasneuepro text-lg lg:text-xl mt-2">
        Secure EU residency, citizenship - and high-growth potential.
      </p>

      <PortugalWeatherBanner />

              <button
              onClick={() => scrollToIdOrHome('DivAskSimulation')}
            className="mt-5 bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-base px-6 py-3 rounded-full transition flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Talk to an Expert
          </button>
    </div>
  </div>
</div>


 
     <div className="bg-[#E4E0CF] w-full py-12 px-6  parallax">
  <div className="max-w-screen-xl w-[90%] lg:w-[1200px] mx-auto text-center flex flex-col items-center">
    <h2 className="font-bebasneuepro text-3xl lg:text-5xl font-bold mb-5 lg:mb-2">
      Get Your Golden Visa with Real Return
    </h2>
    <p className="font-bebasneuepro uppercase text-xl lg:text-2xl tracking-wide mb-5">
      Residency. Citizenship. Freedom to live, work and travel across Europe.
    </p>


  <div className="w-full mt-10   ">
<div className="py-12 px-6 mb-[30px] bg-[#F9F9F9] rounded-lg">

  <div className="max-w-screen-xl mx-auto text-center">
<h2 className="text-3xl font-bold text-[#002D3D] mb-4 text-left">
  Portugal in Numbers<br />
  <span className="text-1xl font-normal">Why Investors Choose It</span>
</h2>

<h3 className="text-[#002D3D] text-base mb-8 max-w-2xl text-left">
  A stable economy, strategic location, and world-class lifestyle make Portugal one of the most attractive destinations in Europe - for families and investors alike.
</h3>


 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[#002D3D] mb-10 text-center">
  {/* Population */}
  <div className="flex flex-col items-center gap-1">
    <Users size={24} className="text-[#B4A77E]" />
    <h4 className="text-sm uppercase tracking-wider">Population</h4>
    <h5 className="text-2xl font-bold">10,372,674</h5>
  </div>

  {/* GDP */}
  <div className="flex flex-col items-center gap-1">
    <Banknote size={24} className="text-[#B4A77E]" />
    <h4 className="text-sm uppercase tracking-wider">GDP</h4>
    <h5 className="text-2xl font-bold">$231.35 billion</h5>
  </div>

  {/* Area */}
  <div className="flex flex-col items-center gap-1">
    <Map size={24} className="text-[#B4A77E]" />
    <h4 className="text-sm uppercase tracking-wider">Total Area</h4>
    <h5 className="text-2xl font-bold">92,090 sq. km</h5>
  </div>

  {/* Capital */}
  <div className="flex flex-col items-center gap-1">
    <Landmark size={24} className="text-[#B4A77E]" />
    <h4 className="text-sm uppercase tracking-wider">Capital</h4>
    <h5 className="text-2xl font-bold">Lisbon</h5>
  </div>
</div>

{showDetails && (


 <div id="Details">
<div className="overflow-x-auto text-sm">
<h3 className="text-3xl font-bold text-[#002D3D] mb-4">
  Portugal Compared:<br></br>
  <span className="text-base font-normal"> What Makes It the Best EU Option?</span>
</h3>
  <table className="min-w-[800px] w-full border border-gray-300 text-left">
    <thead className="bg-gray-100 text-[#002741] font-bold uppercase text-xs">
      <tr>
        <th className="p-3">Country</th>
        <th className="p-3">Minimum Investment</th>
        <th className="p-3">Time to Citizenship</th>
        <th className="p-3">Stay Requirement</th>
        
      </tr>
    </thead>
    <tbody className="text-gray-800 text-sm">
<tr
  className="bg-[#B4A77E] text-white cursor-pointer hover:bg-[#9c9067] transition"
    onClick={() => scrollToIdOrHome('DivAskSimulation')}
  role="button"
  tabIndex={0}
  onKeyDown={(e) => e.key === 'Enter' &&  scrollToIdOrHome('DivAskSimulation')()}
>
  <td className="p-3 font-semibold">Portugal</td>
  <td className="p-3">€500,000 (Explorer Fund)</td>
  <td className="p-3">6 years</td>
  <td className="p-3">7 days/year</td>
</tr>

      <tr className="bg-gray-50">
        <td className="p-3">Spain</td>
        <td className="p-3">€500,000 (real estate)</td>
        <td className="p-3">10 years</td>
        <td className="p-3">183 days/year</td>
 
 
      </tr>
      <tr className="bg-white">
        <td className="p-3">Greece</td>
        <td className="p-3">€250,000 (real estate)</td>
        <td className="p-3">7 years</td>
        <td className="p-3">None</td>
 
 
      </tr>
      <tr className="bg-gray-50">
        <td className="p-3">Malta</td>
        <td className="p-3">€690,000 (donation + property)</td>
        <td className="p-3">12-18 months (donation)</td>
        <td className="p-3">None</td>
 
    
      </tr>
      <tr className="bg-white">
        <td className="p-3">Italy</td>
        <td className="p-3">€250,000-€500,000</td>
        <td className="p-3">10 years</td>
        <td className="p-3">183 days/year</td>
 
      </tr>
    </tbody>
  </table>

 


</div>
<div className="mt-6 mb-5 bg-green-50 border border-green-200 rounded-lg p-6 text-[#002741] text-left">
  <h3 className="text-green-700 font-semibold text-lg mb-4 flex items-center gap-2">
    Why Portugal stands out:
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
    {/* Shortest stay requirement */}
    <div className="flex items-start gap-3">
      <CalendarCheck size={20} className="text-[#B4A77E] mt-1" />
      <div>
        <p className="font-semibold">Shortest stay requirement:</p>
        <p>Only 7 days/year</p>
      </div>
    </div>

    {/* Fastest path to EU citizenship */}
    <div className="flex items-start gap-3">
      <Flag size={20} className="text-[#B4A77E] mt-1" />
      <div>
        <p className="font-semibold">Fastest path to EU citizenship:</p>
        <p>6 years</p>
      </div>
    </div>

    {/* Institutional-grade investment */}
    <div className="flex items-start gap-3">
      <LineChart size={20} className="text-[#B4A77E] mt-1" />
      <div>
        <p className="font-semibold">Institutional-grade investment:</p>
        <p>Explorer Fund (€1.8B AUM, 3x MOIC)</p>
      </div>
    </div>

    {/* Includes family */}
    <div className="flex items-start gap-3">
      <Users size={20} className="text-[#B4A77E] mt-1" />
      <div>
        <p className="font-semibold">Includes family:</p>
        <p>Spouse + children</p>
      </div>
    </div>

    {/* Full access to Schengen */}
    <div className="flex items-start gap-3">
      <Globe size={20} className="text-[#B4A77E] mt-1" />
      <div>
        <p className="font-semibold">Full access to:</p>
        <p>27 Schengen countries</p>
      </div>
    </div>

    {/* No relocation needed */}
    <div className="flex items-start gap-3">
      <Home size={20} className="text-[#B4A77E] mt-1" />
      <div>
        <p className="font-semibold">No relocation needed:</p>
        <p>Maintain residence in your home country</p>
      </div>
    </div>
  </div>
</div>

 

    </div>
)}
<button
  onClick={() => setShowDetails((prev) => !prev)}
  className="inline-flex items-center gap-2 bg-[#002741] text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-[#002D3D] transition"
>
  {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
  {showDetails ? 'Hide Details' : 'See More Details'}
</button>


  </div>
</div>

  <div className="max-w-screen-xl w-[90%] md:w-[90%] lg:w-[1200px] mx-auto flex flex-col lg:flex-row justify-between gap-10">
    
   

    {/* Accordion com 2 colunas e texto alinhado à esquerda */}
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        {
          title: "Safe & Peaceful",
          content:
            "Portugal is one of the safest countries in the world, ranked #7 in the Global Peace Index. Low crime, high stability.",
        },
        {
          title: "Perfect Climate",
          content:
            "Over 300 days of sunshine per year. Mild winters, warm summers. Ideal for outdoor living all year round.",
        },
        {
          title: "World-Class Quality of Life",
          content:
            "Top healthcare, excellent education, and a welcoming culture. Portugal ranks among the best places to live and retire in Europe.",
        },
        {
          title: "Family-Friendly",
          content:
            "Clean cities, international schools, and strong community values make Portugal perfect for families.",
        },
      ].map((item, index) => (
        <Disclosure key={index}>
          {({ open }) => (
       <div className="bg-[#F1EFE7] rounded-md shadow text-left">

              <Disclosure.Button className="flex justify-between items-center w-full px-4 py-3 text-left text-[#002d3d] font-semibold hover:bg-gray-100 transition">
                <span>{item.title}</span>
                <ChevronUpIcon
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-2 pb-4 text-sm text-gray-700 text-left">
                {item.content}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  </div>
</div>

    
<button
    onClick={() => scrollToIdOrHome('DivAskSimulation')}
  className="mt-10 bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-base px-6 py-3 rounded-full transition inline-flex items-center gap-2"
>
  <Play size={18} />
  Get Started Today
</button>



  </div>
</div>
 
    <div className="py-12 px-4 bg-[#F3F6F9]">
    <h2 className="text-2xl lg:text-3xl font-bold text-center text-[#002D3D] mb-10">
      What our investors say
    </h2>
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
  
      {/* Testimonial 1 */}
      <div className="bg-[#E4E0CF] p-6 rounded-xl  text-[#002D3D] text-center flex flex-col items-center gap-4">
        <div className="bg-[#004C78] w-12 h-12 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faCommentDots} className="text-white text-lg" />
        </div>
  
        <p className="italic text-sm leading-relaxed">
          “I wanted a safe way to get residency, but also something that made financial sense. Explorer was the only fund that gave me access alongside institutions-and real returns.”
        </p>
  
        <div className="flex justify-center gap-1 text-[#004C78]">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4" />
          ))}
        </div>
  
     
   <button
      onClick={() => scrollToIdOrHome('DivAskSimulation')}
    className="mt-5 bg-[#002741] hover:bg-[#001f33] text-white font-medium text-sm px-4 py-2 rounded-full transition flex items-center gap-2"
  >
    <MessageCircle className="w-4 h-4" />
    Talk to an Expert
  </button>
  
  
      </div>
  
      {/* Testimonial 2 */}
      <div className="bg-[#E4E0CF] p-6 rounded-xl  text-[#002D3D] text-center flex flex-col items-center gap-4">
        <div className="bg-[#004C78] w-12 h-12 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faCommentDots} className="text-white text-lg" />
        </div>
  
        <p className="italic text-sm leading-relaxed">
          “The only fund I found that lets Golden Visa investors co-invest with large institutions. That gave me all the confidence I needed to go ahead.”
        </p>
  
        <div className="flex justify-center gap-1 text-[#004C78]">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4" />
          ))}
        </div>
  
     
  
  <button
      onClick={() => scrollToIdOrHome('DivAskSimulation')}
    className="mt-5 bg-[#002741] hover:bg-[#001f33] text-white font-medium text-sm px-4 py-2 rounded-full transition flex items-center gap-2"
  >
    <MessageCircle className="w-4 h-4" />
    Talk to an Expert
  </button>
  
  
      </div>
  
      {/* Testimonial 3 */}
      <div className="bg-[#E4E0CF] p-6 rounded-xl  text-[#002D3D] text-center flex flex-col items-center gap-4">
        <div className="bg-[#004C78] w-12 h-12 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faCommentDots} className="text-white text-lg" />
        </div>
  
        <p className="italic text-sm leading-relaxed">
          “I was impressed by how transparent and available the Explorer team was. I always knew where my investment stood-and how it was performing.”
        </p>
  
        <div className="flex justify-center gap-1 text-[#004C78]">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4" />
          ))}
        </div>
  
    
  <button
      onClick={() => scrollToIdOrHome('DivAskSimulation')}
    className="mt-5 bg-[#002741] hover:bg-[#001f33] text-white font-medium text-sm px-4 py-2 rounded-full transition flex items-center gap-2"
  >
    <MessageCircle className="w-4 h-4" />
    Talk to an Expert
  </button>
  
      </div>
  
    </div>
  </div>


 
 
    </>
    
  )
}

export default Benefits