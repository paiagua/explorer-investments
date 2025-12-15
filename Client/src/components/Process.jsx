
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { Play } from 'lucide-react'; // or wherever it's from
 

import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FileCheck } from 'lucide-react';

import { faPen, faPhone, faTv, faCommentDots, faIdCard , faStar } from '@fortawesome/free-solid-svg-icons';
 
 
     import CMVM from '../assets/CMVM_Resources_IS.CMVMLOGO.svg';
 
import {
  LineChart,
  ShieldCheck,
  CalendarClock,
  Users,
  Flag,
  Globe
} from 'lucide-react';

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
  src={CMVM}
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
              <button     onClick={() => scrollToIdOrHome('DivAskSimulation')} className="bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-base px-6 py-3 rounded-full transition">
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
   


<section className="bg-[#F9F9FC] py-16 px-6">
  <div className="max-w-[1200px] w-[95%] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
    
    {/* Título (esquerda no desktop) */}
    <div className="md:w-1/2">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#002D3D] text-left mb-2">
        You're not just looking for a visa
      </h2>
      <p className="text-[#002D3D] text-sm lg:text-base font-medium text-left">
        you're investing in freedom, security, and growth.
      </p>
    </div>

    {/* Descrição (direita no desktop) */}
    <div className="md:w-1/2">
      <p className="text-[#002D3D] text-base lg:text-lg font-medium leading-relaxed text-left">
        Explorer offers exclusive access to Portugal’s Golden Visa through the country’s largest private equity fund - <strong>€1.8B in AUM</strong> and over <strong>20 years</strong> of proven results.
      </p>
    </div>

  </div>
</section>



 
<section className="py-16 px-6 text-center bg-[#E4E0CF]">


<h2 className="text-3xl lg:text-4xl font-bold text-[#002D3D] mb-10">
  <span className="block text-3xl lg:text-4xl">
    Get EU Residency Through a Proven, Fast-Track Investment
  </span>
  <span className="block text-xl lg:text-2xl text-[#002D3D] mt-2">
    With a Free Expert Session to Start
  </span>
</h2>

<div className="max-w-[1200px] mx-auto flex flex-wrap justify-center items-start gap-6 relative w-full">
  {/* Step 1 */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-6 flex-1 w-full">
    <div className="relative bg-[#fff8e1] rounded-lg px-6 py-6 flex-1 min-w-[200px] text-center shadow-sm flex flex-col items-center min-h-[250px] border border-[#f1e4b8]">
    <div className="absolute -top-3 -left-3 bg-[#002d3d] text-white text-[11px] font-semibold px-3 py-1 rounded-tr-md rounded-bl-md shadow-md">Step 1</div>
    <FontAwesomeIcon icon={faPen} className="text-[#002d3d] mb-2 text-xl" />
     <p className="text-base font-semibold text-[#002d3d] mb-2">Free 1-Hour Consultation</p>
      <p className="text-[11px] text-[#002d3d] mb-3">Book your exclusive session with Portugal’s leading investment specialists - with no cost, no obligation.</p>
      <button   onClick={() => scrollToIdOrHome('DivAskSimulation')} className="bg-[#B4A77E] hover:bg-[#9c9067] text-white text-xs font-bold px-3 py-1 rounded-md transition duration-300 inline-flex items-center gap-1">
        <Play size={14} strokeWidth={2} /> Book Now
      </button>
  </div>


    {/* Timeline: 1 day */}
    <div className="flex flex-col items-center justify-center">
      <div className="block md:hidden w-[1px] h-10 bg-gray-400 mb-1"></div>
      <div className="hidden md:block h-[1px] w-10 bg-gray-400 mb-1"></div>
      <span className="text-xs text-gray-600">1 day</span>
    </div>

    {/* Step 2 */}
    <div className="relative bg-[#f9f9fc] rounded-lg px-6 py-6 flex-1 min-w-[200px] text-center shadow-sm flex flex-col items-center min-h-[250px]">
      <div className="absolute -top-3 -left-3 bg-[#002d3d] text-white text-[11px] font-semibold px-3 py-1 rounded-tr-md rounded-bl-md shadow-md">Step 2</div>
      <FontAwesomeIcon icon={faPhone} className="text-[#002d3d] mb-2 text-xl" />
      <p className="text-base font-semibold text-[#002d3d]">Meet Your Expert</p>
      <p className="text-[11px] text-[#002d3d] mb-3">Receive confirmation and connect with your specialist</p>
    </div>

    {/* Timeline: 3 days */}
    <div className="flex flex-col items-center justify-center">
      <div className="block md:hidden w-[1px] h-10 bg-gray-400 mb-1"></div>
      <div className="hidden md:block h-[1px] w-10 bg-gray-400 mb-1"></div>
      <span className="text-xs text-gray-600">3 days</span>
    </div>

    {/* Step 3 */}
    <div className="relative bg-[#f9f9fc] rounded-lg px-6 py-6 flex-1 min-w-[200px] text-center shadow-sm flex flex-col items-center min-h-[250px]">
      <div className="absolute -top-3 -left-3 bg-[#002d3d] text-white text-[11px] font-semibold px-3 py-1 rounded-tr-md rounded-bl-md shadow-md">Step 3</div>
      <FontAwesomeIcon icon={faTv} className="text-[#002d3d] mb-2 text-xl" />
      <p className="text-base font-semibold text-[#002d3d]">Live Presentation</p>
      <p className="text-[11px] text-[#002d3d] mb-3">Discover how the fund operates, its track record, and the long-term returns - while learning how to secure EU residency through smart investment.</p>
    </div>

    {/* Timeline: 5 days */}
    <div className="flex flex-col items-center justify-center">
      <div className="block md:hidden w-[1px] h-10 bg-gray-400 mb-1"></div>
      <div className="hidden md:block h-[1px] w-10 bg-gray-400 mb-1"></div>
      <span className="text-xs text-gray-600">5 days</span>
    </div>

    {/* Step 4 */}
    <div className="relative bg-[#f9f9fc] rounded-lg px-6 py-6 flex-1 min-w-[200px] text-center shadow-sm flex flex-col items-center min-h-[250px]">
      <div className="absolute -top-3 -left-3 bg-[#002d3d] text-white text-[11px] font-semibold px-3 py-1 rounded-tr-md rounded-bl-md shadow-md">Step 4</div>
      <FontAwesomeIcon icon={faCommentDots} className="text-[#002d3d] mb-2 text-xl" />
      <p className="text-base font-semibold text-[#002d3d]">Tailored Proposal</p>
      <p className="text-[11px] text-[#002d3d] mb-3">Get a personalized roadmap designed around your goals</p>
    </div>
  </div>

  {/* Spacer */}
  <div className="w-full"></div>

  {/* Step 5 */}
  <div className="bg-[#B4A77E] rounded-lg p-4 w-full max-w-[664px] mx-auto shadow-md flex flex-col items-center md:flex-row md:justify-between text-white">
    <div className="flex items-center gap-2">
      <FontAwesomeIcon icon={faIdCard} className="text-xl" />
      <span className="text-sm font-medium">Step 5</span>
      <FontAwesomeIcon icon={faArrowRight} className="hidden md:inline text-2xl" />
      <FontAwesomeIcon icon={faArrowDown} className="md:hidden text-2xl" />
    </div>
    <button   onClick={() => scrollToIdOrHome('DivAskSimulation')} className="mt-3 md:mt-0 bg-[#002741] border border-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white hover:text-[#002741] transition duration-300 inline-flex items-center gap-1">
      <FileCheck size={16} strokeWidth={2} /> Get Portuguese Golden Visa
    </button>
  </div>
</div>
</section>

 <section className="bg-[#F9F9FC] py-16 px-4">
  <div className="w-[95%] max-w-[1200px] mx-auto">
    <h2 className="text-3xl lg:text-4xl font-bold text-[#002D3D] text-left mb-10">
      Why Choose Explorer
    </h2>
 
 

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#002D3D] text-base">
  <div className="p-6 flex items-start gap-4">
    <LineChart size={24} />
    <div>
      <h3 className="font-semibold text-lg mb-2">Real Returns</h3>
      <p>3x target MOIC from a fund with institutional-grade performance.</p>
    </div>
  </div>

  <div className="p-6 flex items-start gap-4">
    <ShieldCheck size={24} />
    <div>
      <h3 className="font-semibold text-lg mb-2">Secure & Regulated</h3>
      <p>Overseen by CMVM with over 20 years of private equity experience.</p>
    </div>
  </div>

  <div className="p-6 flex items-start gap-4">
    <CalendarClock size={24} />
    <div>
      <h3 className="font-semibold text-lg mb-2">Minimal Stay</h3>
      <p>Only 7 days per year required to maintain your residency status.</p>
    </div>
  </div>

  <div className="p-6 flex items-start gap-4">
    <Users size={24} />
    <div>
      <h3 className="font-semibold text-lg mb-2">Family Coverage</h3>
      <p>Include your spouse and dependent children under the same visa.</p>
    </div>
  </div>

  <div className="p-6 flex items-start gap-4">
    <Flag size={24} />
    <div>
      <h3 className="font-semibold text-lg mb-2">Fast Track to Citizenship</h3>
      <p>Permanent residency after 5 years. Apply for citizenship in 6.</p>
    </div>
  </div>

  <div className="p-6 flex items-start gap-4">
    <Globe size={24} />
    <div>
      <h3 className="font-semibold text-lg mb-2">Full EU Access</h3>
      <p>Live, work, and travel freely across the entire European Union.</p>
    </div>
  </div>
</div>

  </div>
</section>




 

 
 
    </>
    
  )
}

export default Benefits