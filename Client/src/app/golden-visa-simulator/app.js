'use client';
import React, { useEffect, useRef, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
 import { isValidPhoneNumber } from 'libphonenumber-js';
import Image from 'next/image';
 
import Header from '@/components/Menu';  
import { MessageCircle } from "lucide-react";  
import GoogleLoginButton from '@/components/GoogleLoginButton';
 
import { CalendarDaysIcon } from '@heroicons/react/24/solid';
import { CheckCircleIcon } from '@heroicons/react/24/solid';  
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'flag-icon-css/css/flag-icons.min.css';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';  
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { InlineWidget } from "react-calendly";
 
import { motion, AnimatePresence } from 'framer-motion';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Benefits from '@/components/goldenvisasimulator';
 
import Footer from '@/components/Footer';
 import { Play } from "lucide-react";

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import useUserTimezone from '@/components/useUserTimezone';  





function App() {

 const timezone = useUserTimezone();

 
 


 

 
const [showLegalModal, setShowLegalModal] = useState(false);
const floatingFooterRef = useRef();


 
 
 


 


 




   const [formstep, setFormstep] = useState(1); 
 





 const [showFullScreenLoading, setShowFullScreenLoading] = useState(false);

 


const handleClose = () => {
  const expirationDate = new Date();
  expirationDate.setMonth(expirationDate.getMonth() + 1); // +1 mês
  localStorage.setItem('legalModalClosedUntil', expirationDate.toISOString());
  setShowLegalModal(false);
};
useEffect(() => {
  const storedDate = localStorage.getItem('legalModalClosedUntil');
  if (storedDate) {
    const now = new Date();
    const closeUntil = new Date(storedDate);
    if (now < closeUntil) {
      setShowLegalModal(false); // ainda está no prazo → não mostrar
    }else{setShowLegalModal(true)}
    
  }
}, []);


const [showCalendly, setShowCalendly] = useState(false);


 
  const [show, setShow] = useState(false);
const [country, setCountry] = useState('us');
 
useEffect(() => {
  const detectCountry = async () => {
    try {
      const response = await fetch('https://ipinfo.io/json');
      if (!response.ok) throw new Error('Failed to fetch IP info');
      const data = await response.json();
      if (data && data.country) {
        setCountry(data.country.toLowerCase()); // exemplo: "pt"
      } else {
        setCountry('pt'); // fallback
      }
    } catch (err) {
      console.error('Erro ao detectar país:', err);
      setCountry('pt'); // fallback
    }
  };

  detectCountry();
}, []);

 

 

const handleGoogleResponse = async (response) => {
  setIsSubmitting(true);  

  try {
    const token = response.credential;
    const decoded = jwtDecode(token);

    console.log("✅ Dados do Google decodificados:", decoded);

    const name = decoded.name || '';
    const email = decoded.email || '';

    // Atualiza formdata
    setFormdata((prev) => ({
      ...prev,
      name,
      email,
    }));

    const ip = await getIPAddress();
    const geo = await getGeoLocation();

    await sendDataToGoogleSheet({
      leadId: sessionValue,
      name,
      email,
      investment: formdata.petage,
      phone: '',
      ip,
      geo,
      stepForm: "1"
    });
  setErrorMessage('');
    setFormstep(2);
    scrollToTop();
sendGoldenVisaEmail1stStep({ name, email, investment: getpetage(ageValue) });


  } catch (error) {
    console.error("Erro no login com Google:", error);
  }

  setIsSubmitting(false);  
};


 
 
  const getIPAddress = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Erro ao obter o IP:', error);
      return 'IP Não Disponível';
    }
  };


  
useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const showThreshold = isMobile ? 2800 : 600;
    const hideDistance = isMobile ? 1800 : 100;

    const footer = document.getElementById('page-footer');
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top + window.scrollY;
      const distanceFromBottom = footerTop - (scrollY + window.innerHeight);

      if (distanceFromBottom <= hideDistance) {
        setShow(false);
        return;
      }
    }

    // Mostrar o botão apenas se passou do ponto
    setShow(scrollY >= showThreshold);
  };

  // ✅ Escutar scroll + resize (garantir atualização de isMobile)
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll); // ← importante

  // Executar inicialmente
  handleScroll();

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleScroll);
  };
}, []);






 
 
  const toggleDivSubAskSubSimulationVisibility = () => {
    const div = document.getElementById("DivSubAskSubSimulation");
    if (!div) return;
  
    
 
  };
  
  const scrollToTop = () => {
    const element = document.getElementById("DivAskSimulation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
 
 
  const [isSubmitting, setIsSubmitting] = useState(false); // Adicionar este estado

  
// Correto
  const [errorMessage, setErrorMessage] = useState('');
 
  const [showMoreText, setShowMoreText] = useState(false); // Toggle para termos e condições
  const [formdata, setFormdata] = useState({

    petage: '',
    name: '',
    email: '',
    phone: ''
  });





  const [sessionValue, setSessionValue] = useState(null);

  useEffect(() => {
    let value = sessionStorage.getItem('user_session');
    if (!value) {
      value = `session_${Date.now()}`;
      sessionStorage.setItem('user_session', value);
    }
    setSessionValue(value);
  }, []);

  
 
 
const isFormValid = () => {
  const nameFilled = formdata.name.trim() !== '';
  const emailValid = checkemail(emailinp);

  if (!nameFilled) {
    setErrorMessage('Tell us your name so we can contact you.');
    nomeinp.current?.focus();
    return false;
  }

  if (!emailValid) {
    setErrorMessage('Please enter a valid email address.');
    emailinp.current?.focus();
    return false;
  }
if (!formdata.petage) {
  setErrorMessage("Please select your investment amount.");
  setIsSubmitting(false);
  return;
}
  setErrorMessage('');
  return true;
};

  
  
 
  const nomeinp = useRef();
  const emailinp = useRef();
  const nifinp = useRef();
  const zipinp = useRef();
  const mobileinp = useRef();
  const petNameimp = useRef();


 

 
  const [ageValue, setAgeValue] = useState(0);
 
useEffect(() => {
  setFormdata((prev) => ({
    ...prev,
    petage: getpetage(ageValue),
    agerange: getagerange(ageValue),
  }));
}, []);

const handleSelectChange = (e) => {
  const selectedValue = Number(e.target.value);
  setAgeValue(selectedValue);
  
  setFormdata((prevData) => ({
    ...prevData,
    petage: getpetage(selectedValue), // isso vai para o Google Sheet
    agerange: getagerange(selectedValue), // isso só é usado para UI
  }));
};
  const getagerange = (newValue) => {
    switch (newValue) {
      case 1:
        return <>Entre <span className='text-themered text-5xl px-2'>2</span> e <span className='text-themered text-5xl px-2'>6</span> meses</>;
      case 2:
        return <>Entre <span className='text-themered text-5xl px-2'>6</span> meses e <span className='text-themered text-5xl px-2'>1,5</span> anos</>;
      case 3:
        return <>Entre <span className='text-themered text-5xl px-2'>1,5</span> anos e <span className='text-themered text-5xl px-2'>2</span> anos</>;
      case 4:
        return <>Entre <span className='text-themered text-5xl px-2'>2</span> anos e <span className='text-themered text-5xl px-2'>4</span> anos</>;
      case 5:
        return <>Entre <span className='text-themered text-5xl px-2'>4</span> anos e <span className='text-themered text-5xl px-2'>7</span> anos</>;
      default:
        return <>Entre <span className='text-themered text-5xl px-2'>7</span> anos e <span className='text-themered text-5xl px-2'>8</span> anos</>;
    }
  };
  
const getpetage = (newValue) => {
  switch (newValue) {
    case 0: return "I'm not sure yet - I need expert advice";
case 1: return "Less than €500K (Not eligible for Golden Visa)";
    case 2: return "Between €500K and €1M";
    case 3: return "Between €1M and €2M";
    case 4: return "Between €2M and €5M";
    case 5: return "More than €5M";
  }
};
 
  const validateform = (e) => {
    let oldData = { ...formdata };
    let inp = e.target.name;
    let inpvalue = e.target.value.slice(0, e.target.maxLength);
    oldData[inp] = inpvalue;
    setFormdata(oldData);
  };

 
  const checkemail = (inp) => {
    const errorMessage = document.getElementById('emaillbl');
    var emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!inp.current || !inp.current.value) {
    
      return false;
    }
    
    if (!emailregex.test(inp.current.value)) {
 
      inp.current.focus();
      return false;
    } else {
  
      return true;
    }
  };
  

 
 
 
  
 
 

   

const phoneIsValid = () => {
  return formdata.phone
    ? isValidPhoneNumber('+' + formdata.phone)
    : false
}



 

 const submitform = async () => {
  if (isSubmitting) return;  
  setIsSubmitting(true);  

  if (formstep === 2) {
    if (!phoneIsValid()) {
      setErrorMessage("Please enter a valid international phone number.");
      setIsSubmitting(false);  
      return;
    }

     const ip = await getIPAddress();
    const geo = await getGeoLocation();

    await sendDataToGoogleSheet({
      leadId: sessionValue,
      name: formdata.name,
      email: formdata.email,
      investment: formdata.petage,
      phone: formdata.phone,
      ip,
      geo,
      stepForm: "2"
    });

    setFormstep(3);
sendGoldenVisaEmail2stStep({
  name: formdata.name,
  email: formdata.email,
        phone: formdata.phone,
  investment: getpetage(ageValue),
  timezone,
});

sendNewLeadAlertEmail({
  toName: "Ricardo",
  toEmail: "paiaguaricardo@gmail.com",
  leadName: formdata.name,
  leadEmail: formdata.email,
  leadPhone: formdata.phone,
  leadInvestment: getpetage(ageValue),
  leadIP: ip,
  leadGeo: geo
});
sendNewLeadAlertEmail({
  toName: "Maria",
  toEmail: "mcs@explorerinvestments.com",
  leadName: formdata.name,
  leadEmail: formdata.email,
  leadPhone: formdata.phone,
  leadInvestment: getpetage(ageValue),
  leadIP: ip,
  leadGeo: geo
});
sendNewLeadAlertEmail({
  toName: "André",
  toEmail: "ab@explorerinvestments.com",
  leadName: formdata.name,
  leadEmail: formdata.email,
  leadPhone: formdata.phone,
  leadInvestment: getpetage(ageValue),
  leadIP: ip,
  leadGeo: geo
});

        scrollToTop();
  }

  setIsSubmitting(false); // ⬅️ DESATIVAR LOADING no final
};



const sendDataToGoogleSheet = async ({
  leadId = "",
  name = "",
  email = "",
  investment = "",
  phone = "",
  ip = "",
  geo = "",
  stepForm = ""
} = {}) => {
  const scriptUrl = "https://script.google.com/macros/s/AKfycbyt9VFGmfU9DBHfdDqhCzn51rYuezLIiLcJvV7i_boxH8h6U4By_nIu2saunr5hqnyv/exec";

  // FormData ao invés de JSON
  const formData = new FormData();
  formData.append("leadId", leadId);
  formData.append("name", name);
  formData.append("email", email);
  formData.append("investment", investment);
  formData.append("phone", phone);
  formData.append("ip", ip);
  formData.append("geo", geo);
  formData.append("stepForm", stepForm);

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      console.log("✅ Dados enviados com sucesso:", result.message);
    } else {
      console.warn("⚠️ Falha ao enviar:", result.message);
    }

    return result;
  } catch (error) {
    console.error("❌ Erro ao enviar dados:", error);
    return { success: false, message: error.message };
  }
};




  
 



 



 const senddata = async () => {
  if (isSubmitting) return;

  setIsSubmitting(true);

const leadId = sessionStorage.getItem('user_session');

 

  const valid = isFormValid();

  if (!valid) {
    setIsSubmitting(false); // ⬅️ Libera o botão se inválido
    return;
  }

  const ip = await getIPAddress();
  const geo = await getGeoLocation();

  await sendDataToGoogleSheet({
    leadId: leadId ,
    name: formdata.name,
    email: formdata.email,
    investment: formdata.petage,
    phone: formdata.phone,
    ip,
    geo,
    stepForm: "1"
  });
sendGoldenVisaEmail1stStep({
  name: formdata.name,
  email: formdata.email,
  investment: formdata.petage || getpetage(ageValue)
});

  setIsSubmitting(false);

  setFormstep(2);
  scrollToTop();
};





  

 
  
 

  useEffect(() => {
    // Detecta país via IP
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_code) {
          setCountry(data.country_code.toLowerCase()); // exemplo: "PT"
        }
      })
      .catch((err) => {
        console.error('Erro ao detectar país:', err);
      });
  }, []);

 
 
  


      useEffect(() => {
        window.addEventListener('load', handleLoad, { once: true });
      
        return () => window.removeEventListener('load', handleLoad);
      }, []);
      
      const handleLoad = () => {
        //sendDataToGoogleSheet({ fromwhere: "load", publisher: publishername });
        toggleDivSubAskSubSimulationVisibility();  

        
      };
      

useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  const name = params.get('name');
  const email = params.get('email');
  const investment = params.get('investment');
  const confirm = params.get('confirm');

  if (name && email && investment && confirm === '1') {
    console.log('✅ Query params confirmados:', { name, email, investment });

    setFormdata((prev) => ({
      ...prev,
      name,
      email,
      petage: investment,
    }));

    setFormstep(2);
    scrollToTop();
  } else {
    console.warn('❌ Faltam query params:', { name, email, investment });
  }
  // ⚠️ eslint-disable-next-line react-hooks/exhaustive-deps
}, []);  

useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  const name = params.get('name');
  const email = params.get('email');
 const phone = params.get('phone');
  const investment = params.get('investment');
  const confirm = params.get('confirm');

  if (name && email && investment && confirm === '2') {
    console.log('✅ Query params confirmados:', { name, email, investment });

    setFormdata((prev) => ({
      ...prev,
      name,
      email,
      phone ,
      petage: investment,
    }));

    setFormstep(3);
    setShowCalendly(true);
    scrollToTop();
  } else {
    console.warn('❌ Faltam query params:', { name, email, investment });
  }
  // ⚠️ eslint-disable-next-line react-hooks/exhaustive-deps
}, []);  


  return (
    <>
      <Header />
 

<section className="relative w-full bg-[#f3f3f3] text-[#1c1c1c] pt-10">
  <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-12 py-20 lg:py-32">

    {/* SEO: H1 principal */}
    <h1 className="text-[#B4A77E] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">
      Golden Visa Investment Simulator
    </h1>

    <div className="max-w-2xl space-y-6">
      <p className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#1c1c1c]">
        Calculate Your Golden Visa Investment - 
        <span className="block mt-1">Costs, Returns & Fund Options</span>
      </p>

      <p className="text-base sm:text-lg text-[#444] max-w-xl">
        Simulate potential profits, fees and total costs for Portugal’s Golden Visa through investment funds.
        Compare scenarios and make informed decisions before investing.
      </p>

      <a
        href="#DivSimulation"
        className="inline-flex items-center justify-center rounded-full
                   bg-[#B4A77E] text-white text-base sm:text-lg font-semibold
                   px-8 py-3 hover:bg-[#9c9067] transition-colors duration-300
                   focus-visible:outline-none focus-visible:ring-2
                   focus-visible:ring-[#B4A77E]"
      >
        Start Simulation
      </a>
    </div>

  </div>
</section>


 
    <Benefits />
 


 

    <Footer />





    </>
   
  );
}

export default App;
