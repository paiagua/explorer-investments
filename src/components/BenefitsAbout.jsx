
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
 
import { faPen, faPhone, faTv, faCommentDots, faIdCard , faStar,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Disclosure } from '@headlessui/react';
 import DistanceToOffice from './DistanceToOffice';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
  import { MessageCircle } from "lucide-react"; // importa o ícone
 import { faUserTie } from "@fortawesome/free-solid-svg-icons";
 
  import EvidenceGallerySection from '@/components/EvidenceGallerySection';
  
import { faLock } from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect, useRef } from 'react';

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

 
const scrollToIdOrHome = (id = 'DivAskSimulation') => {
  if (typeof window === 'undefined') return;
  const ok = scrollToIdWithOffset(id);

  if (!ok) {
 
    window.location.href = `/#${id}`;
  }
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

function BenefitsAbout() {
   const [showDetails, setShowDetails] = useState(false);

  return (
   
   <div>


<div className="w-full bg-[#002F49]">
  <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-10">
<div className="w-full lg:w-1/2 text-left p-[30px] lg:p-0">

      <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">How We Create Value</h2>
      <p className="text-lg font-medium text-white mb-4">
        We share our international mindset, our experience, and our network.
      </p>
      <p className="text-base text-white mb-4 leading-relaxed">
        We breathe new life into assets and operations, boosting sales and marketing, and build their reputation on the global stage.
      </p>
      <p className="text-base text-white leading-relaxed">
        We have done this successfully through multiple economic cycles and across multiple strategies and sectors: our reputation for determination, resilience and sustainable performance is well-earned.
      </p>
    </div>
    <img
      src="https://www.explorerinvestments.com/wp-content/uploads/2025/03/20250210JF_EXPLORER-II-HR-CREDITS-JOANA-FREITAS-54-e1741718176842.jpg"
      alt="How We Create Value"
      className="w-full lg:w-1/2"
    />
  </div>
</div>
<div className="w-full bg-gradient-to-r from-[#002741] to-[#003952] text-white py-12 px-6 lg:px-20 parallax">
  <div className="max-w-screen-xl w-full mx-auto">
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
 
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
<h2
  className="text-2xl lg:text-4xl font-bold text-left mb-[30px]"
>
  Your Golden Visa Investment
  <br className="block sm:hidden" /> & Advisory Team
</h2>


<div className="flex flex-col items-center lg:items-start text-center lg:text-left">
 <div className="flex flex-col items-start">
  <div className="flex flex-col gap-6">
    {/* André */}
    <div className="flex items-start gap-4">
      <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-white shrink-0">
        <img
          src="https://goldenvisashub.com/assets/images/andre_2025.jpg"
          alt="André Bandeira"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="text-left text-sm lg:text-base leading-snug">
        <p className="font-bold">André Bandeira</p>
        <a
          href="mailto:ab@explorerinvestments.com?subject=Golden%20Visa%20Investment%20Inquiry%20from%20Website"
          className="flex items-center gap-2 text-[#B4A77E] hover:underline break-all"
        >
          <FontAwesomeIcon icon={faEnvelope} /> ab@explorerinvestments.com
        </a>
      </div>
    </div>

    {/* Maria */}
    <div className="flex items-start gap-4">
      <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-white shrink-0">
        <img
          src="https://goldenvisashub.com/assets/images/maria_2025.jpg"
          alt="Maria Campos Silva"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="text-left text-sm lg:text-base leading-snug">
        <p className="font-bold">Maria Campos Silva</p>
        <a
          href="mailto:mcs@explorerinvestments.com?subject=Golden%20Visa%20Investment%20Inquiry%20from%20Website"
          className="flex items-center gap-2 text-[#B4A77E] hover:underline break-all"
        >
          <FontAwesomeIcon icon={faEnvelope} /> mcs@explorerinvestments.com
        </a>
      </div>
    </div>
  </div>
</div>


</div>

    </div>

    
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
     
 <div className="grid grid-cols-2 lg:flex lg:flex-wrap justify-center lg:justify-start gap-4 mb-8">
  {/* Círculo 1 */}
  <div className="flex justify-center">
    <div className="w-24 h-24 rounded-full bg-white text-[#00538B] flex flex-col items-center justify-center font-semibold shadow-md text-center px-2">
      <span className="text-base whitespace-nowrap">€ 1.8B</span>
      <span className="text-[10px] leading-tight tracking-wide uppercase">AUM</span>
    </div>
  </div>

  {/* Círculo 2 */}
  <div className="flex justify-center">
    <div className="w-24 h-24 rounded-full bg-white text-[#00538B] flex flex-col items-center justify-center font-semibold shadow-md text-center px-2">
      <span className="text-base whitespace-nowrap">+20</span>
      <span className="text-[10px] leading-tight tracking-wide uppercase">Years of Experience</span>
    </div>
  </div>

  {/* Círculo 3 */}
  <div className="flex justify-center">
    <div className="w-24 h-24 rounded-full bg-white text-[#00538B] flex flex-col items-center justify-center font-semibold shadow-md text-center px-2">
      <span className="text-base whitespace-nowrap">3x</span>
      <span className="text-[10px] leading-tight tracking-wide uppercase">Target MOIC</span>
    </div>
  </div>

  {/* Círculo 4 */}
<div className="flex justify-center">
  <div className="relative w-24 h-24 cursor-pointer"  onClick={() => scrollToIdOrHome('DivAskSimulation')}>
    {/* Borda branca animada */}
    <div className="absolute inset-0 rounded-full border-[3px] border-white animate-pulse-ring"></div>

    {/* Círculo interno fixo */}
    <div className="w-full h-full rounded-full bg-[#B4A77E] text-white flex flex-col items-center justify-center font-semibold shadow-md text-center px-2 relative z-10">
      <span className="text-sm leading-tight tracking-wide uppercase">
        Golden<br />Visa
      </span>
    </div>
  </div>
</div>

</div>






      {/* HEADLINE */}
   

      {/* BODY TEXT */}
      <p className="text-base text-gray-200 mb-6 max-w-lg">
        Our team is dedicated to supporting you with transparency and efficiency.
        We’re here to assist with anything you need, ensuring a smooth and seamless experience.
        Contact André and Maria for more information.
      </p>

 
<button
   onClick={() => scrollToIdOrHome('DivAskSimulation')}
  className="bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-base px-6 py-3 rounded-full transition flex items-center gap-2"
>
  <FontAwesomeIcon icon={faUserTie} className="w-5 h-5" />
Book Golden Visa Call
</button>
    </div>
  </div>
<div style={{ marginTop: '30px' }}>
  <TeamSection title="Who Is Our Leadership Team?" teamData={leadership} />
</div>
<div style={{ marginTop: '30px' }}>
<TeamSection title="Meet Our Investment Professionals" teamData={investmentProfessionals} />
</div>

<div className="w-full bg-white py-16 px-6 lg:px-20 pt-10 mt-10">

  <div className="max-w-screen-xl mx-auto">
    <h2 className="text-2xl lg:text-4xl font-bold text-[#00538B] mb-8">
      Invest with Explorer and secure your Golden Visa
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* LEFT DISCLOSURE */}
      <div className="space-y-4">
      <Disclosure as="div"  >
          {({ open }) => (
            <div>
              <Disclosure.Button className="w-full flex justify-between items-center py-4 text-left font-semibold text-[#00538B] border-b border-gray-300">
                <span>Portugal’s #1 Private Equity Firm</span>
                <ChevronUpIcon className={`w-5 h-5 transform ${open ? 'rotate-180' : ''}`} />
              </Disclosure.Button>
              <Disclosure.Panel className="text-sm text-gray-700 pt-2">
                Over €1.8 billion AUM with 20+ years of success.
              </Disclosure.Panel>
          </div>
          )}
        </Disclosure>

          <Disclosure as="div"  >
          {({ open }) => (
            <div>
              <Disclosure.Button className="w-full flex justify-between items-center py-4 text-left font-semibold text-[#00538B] border-b border-gray-300">
                <span>Exclusive Golden Visa Access</span>
                <ChevronUpIcon className={`w-5 h-5 transform ${open ? 'rotate-180' : ''}`} />
              </Disclosure.Button>
              <Disclosure.Panel className="text-sm text-gray-700 pt-2">
                The only major private equity fund allowing GV investors to invest alongside institutional investors.
              </Disclosure.Panel>
          </div>
          )}
        </Disclosure>

      <Disclosure as="div"  >
          {({ open }) => (
            <div>
              <Disclosure.Button className="w-full flex justify-between items-center py-4 text-left font-semibold text-[#00538B] border-b border-gray-300">
                <span>Proven Investment Strategy</span>
                <ChevronUpIcon className={`w-5 h-5 transform ${open ? 'rotate-180' : ''}`} />
              </Disclosure.Button>
              <Disclosure.Panel className="text-sm text-gray-700 pt-2">
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>Buy:</strong> Acquiring profitable local businesses at attractive valuations</li>
                  <li><strong>Transform:</strong> Enhancing operations, increasing exports, and expanding internationally</li>
                  <li><strong>Sell:</strong> Generating high returns by exiting through competitive international markets</li>
                </ul>
              </Disclosure.Panel>
          </div>
          )}
        </Disclosure>
      </div>

      {/* RIGHT DISCLOSURE */}
      <div className="space-y-4">
      <Disclosure as="div"  >
          {({ open }) => (
            <div>
              <Disclosure.Button className="w-full flex justify-between items-center py-4 text-left font-semibold text-[#00538B] border-b border-gray-300">
                <span>Ambitious Returns</span>
                <ChevronUpIcon className={`w-5 h-5 transform ${open ? 'rotate-180' : ''}`} />
              </Disclosure.Button>
              <Disclosure.Panel className="text-sm text-gray-700 pt-2">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Target IRR: 20%-25%</li>
                  <li>Target MOIC: 3x</li>
                  <li>Proven Track Record: 3.1x MOIC in Fund III and strong distributions in Fund IV</li>
                </ul>
              </Disclosure.Panel>
          </div>
          )}
        </Disclosure>

      <Disclosure as="div"  >
          {({ open }) => (
            <div>
              <Disclosure.Button className="w-full flex justify-between items-center py-4 text-left font-semibold text-[#00538B] border-b border-gray-300">
                <span>“Skin in the game”</span>
                <ChevronUpIcon className={`w-5 h-5 transform ${open ? 'rotate-180' : ''}`} />
              </Disclosure.Button>
              <Disclosure.Panel className="text-sm text-gray-700 pt-2">
                Explorer commits a significant stake in the fund, aligning our interests with investors.
              </Disclosure.Panel>
          </div>
          )}
        </Disclosure>

      <Disclosure as="div"  >
          {({ open }) => (
            <div>
              <Disclosure.Button className="w-full flex justify-between items-center py-4 text-left font-semibold text-[#00538B] border-b border-gray-300">
                <span>Transparency and Investor Support</span>
                <ChevronUpIcon className={`w-5 h-5 transform ${open ? 'rotate-180' : ''}`} />
              </Disclosure.Button>
              <Disclosure.Panel className="text-sm text-gray-700 pt-2">
                Full access 24/7 via our Explorer Portal and dedicated Investor Relations team.
              </Disclosure.Panel>
          </div>
          )}
        </Disclosure>
      </div>
    </div>

 
    <div className="text-center mt-10">
  <button
     onClick={() => scrollToIdOrHome('DivAskSimulation')}
    className="inline-flex items-center gap-2 bg-[#00538B] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#004472] transition"
  >
    <FontAwesomeIcon icon={faLock} className="w-5 h-5" />
    Begin My Golden Visa Application
  </button>

    </div>
  </div>
</div>
 

</div>
</div>
   <EvidenceGallerySection />
 <DistanceToOffice />

 <RegulatoryHighlight />



<div className="w-full bg-[#E3DFCF]">
  <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-10">
    <img
      src="https://www.explorerinvestments.com/wp-content/uploads/2025/02/20241211JF_EXPLORER-LR-25-1-e1740648982322-1193x1536.jpg"
      alt="Our Vision"
      className="w-full lg:w-1/2"
    />
<div className="w-full lg:w-1/2 text-left p-[30px] lg:p-0">
      <h2 className="text-2xl lg:text-4xl font-bold text-[#002F49] mb-4">Our Vision</h2>
      <p className="text-lg font-medium text-[#002F49] mb-4">Elizabeth Rothfield, Founding Partner, CEO</p>
      <p className="text-base text-[#002F49] mb-4 leading-relaxed">
        I am proud of the extraordinary impact we have had on our portfolio and in the wider community. We are embracing the next decades of our story with energy and confidence.
      </p>
      <p className="text-base text-[#002F49] leading-relaxed">
        Explorer has been investing successfully for more than 20 years, but there is still much more to be done. Huge opportunities lie ahead.
      </p>
    </div>
  </div>
</div>


 


 <div className="relative w-full h-[500px] sm:h-[600px]">
  <img
    src="/assets/images/Background.webp"
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




 

 
 

 


<div className="w-full bg-[#F1EFE7]">
  <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-10">
 <div className="w-full lg:w-1/2 text-left p-[30px] lg:p-0">

      <h2 className="text-2xl lg:text-4xl font-bold text-[#002F49] mb-4">Our Values</h2>
      <p className="text-base text-[#002F49] mb-4 leading-relaxed">
        Our people are at the center of all aspects of Explorer’s work. Although they have different roles and diverse backgrounds, they all share one common belief - a commitment to a shared set of values.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-base text-[#002F49]">
        <li><strong>Independence</strong> - We are independent thinkers, always ready to challenge the status quo.</li>
        <li><strong>Team Spirit</strong> - We work closely with our colleagues and partners towards our shared success.</li>
        <li><strong>Initiative</strong> - We have a proactive attitude and are always ready to drive positive change.</li>
        <li><strong>Resilience</strong> - We overcome challenges with creativity and determination; we never give up.</li>
        <li><strong>Generosity</strong> - Encompasses all our values, guiding how we think, collaborate, and overcome challenges together.</li>
      </ul>
    </div>
    <img
      src="https://www.explorerinvestments.com/wp-content/uploads/2025/03/20241211JF_EXPLORER-LR-41-e1741718552224.jpg"
      alt="Our Values"
      className="w-full lg:w-1/2"
    />
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
 </div>
    
    
  )
}

export default BenefitsAbout