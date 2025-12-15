'use client';
import React, { useEffect, useRef, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
 import { isValidPhoneNumber } from 'libphonenumber-js';
 import CountUp from 'react-countup';
 
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
import Benefits from '@/components/FaqPage';
 
import Footer from '@/components/Footer';
 import { Play } from "lucide-react";

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import useUserTimezone from '@/components/useUserTimezone';  





function App() {

 const timezone = useUserTimezone();

 const sendGoldenVisaEmail1stStep = async ({ name, email, investment }) => {
  console.log('Server='+process.env.REACT_APP_API_URL);
const encodedURL = `https://goldenvisashub.com?confirm=1&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&investment=${encodeURIComponent(investment)}`;
const firstName = name.split(' ')[0];

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Golden Visa Follow-Up</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f9f9f9; font-family: Arial, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; padding: 30px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); padding: 30px;">
            <tr>
              <td align="center">
          <img src="https://goldenvisashub.com/assets/images/logoblue.png"
     alt="Explorer Logo"
     width="180"
     style="max-width: 180px; width: 100%; height: auto; margin-bottom: 20px;" />

<h2 style="color: #0d2c40; margin-bottom: 16px;">${firstName}, <br>Just One More Step</h2>
<p style="font-size: 16px; color: #333; margin: 0 0 16px;">
  Thank you for taking the first step towards your Golden Visa journey with us. We’re excited to help you explore this opportunity!
</p>
<p style="font-size: 16px; color: #333; margin: 0 0 24px;">
  To make sure we can support you personally, could you confirm your phone number? It only takes a few seconds.
</p>

 
                
                <!-- Botão com mais altura -->
<!-- Bulletproof button, compatível com todos os clientes de email -->
<table border="0" cellpadding="0" cellspacing="0" align="center" style="margin: 0 auto 24px;">
  <tr>
    <td align="center" bgcolor="#0d2c40" style="border-radius: 8px;">
      <table border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center"
              style="
                padding: 14px 32px;
                font-size: 16px;
                font-family: Arial, sans-serif;
                font-weight: bold;
                color: #ffffff;
                text-decoration: none;
                border-radius: 8px;
                background-color: #0d2c40;
              ">
            <a href="${encodedURL}" target="_blank"
               style="
                 color: #ffffff;
                 text-decoration: none;
                 display: inline-block;
               ">
              ✅&nbsp;&nbsp;Confirm My Phone Number
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>



<p style="font-size: 14px; color: #666; margin-top: 16px;">
  Already submitted your number? Perfect - we’ll be in touch very soon.
</p>
                <hr style="margin: 30px 0;">
                <p style="font-size: 14px; color: #888; margin: 0;">
             Kind regards,<br><strong>Joana</strong><br>Investor Support - Explorer
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;



  try {
 

const res = await fetch(`https://goldenvisashub.com/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: email, 
 
        subject:  firstName+ ', Just 2 Steps Away - Add Your Phone Number',
        html
      }),
    });

    const data = await res.json();
    console.log('📨 Email sent:', data);
  } catch (error) {
    console.error('❌ Email error:', error);
  }
};


const sendGoldenVisaEmail2stStep = async ({ name, email,  phone, investment, timezone }) => {
 


const encodedURL = `https://goldenvisashub.com?confirm=2&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&investment=${encodeURIComponent(investment)}&timezone=${encodeURIComponent(timezone)}`;
const firstName = name.split(' ')[0];

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Golden Visa Follow-Up</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f9f9f9; font-family: Arial, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; padding: 30px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); padding: 30px;">
            <tr>
              <td align="center">
                <img src="https://goldenvisashub.com/assets/images/logoblue.png"
                  alt="Explorer Logo"
                  width="180"
                  style="max-width: 180px; width: 100%; height: auto; margin-bottom: 20px;" />

                <h2 style="color: #0d2c40; margin-bottom: 16px;">${firstName}, <br>Shall We Connect?</h2>
                <p style="font-size: 16px; color: #333; margin: 0 0 16px;">
                  We’d love to introduce you to Portugal’s leading Golden Visa fund in a relaxed, no-commitment conversation.
                </p>
                <p style="font-size: 16px; color: #333; margin: 0 0 24px;">
                  Simply choose a time that suits you best - we’re happy to answer your questions and share how it all works.
                </p>

                <!-- Button -->
                <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin: 0 auto 24px;">
                  <tr>
                    <td align="center" bgcolor="#0d2c40" style="border-radius: 8px;">
                      <table border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center"
                              style="
                                padding: 14px 32px;
                                font-size: 16px;
                                font-family: Arial, sans-serif;
                                font-weight: bold;
                                color: #ffffff;
                                text-decoration: none;
                                border-radius: 8px;
                                background-color: #0d2c40;
                              ">
                            <a href="${encodedURL}" target="_blank"
                               style="
                                 color: #ffffff;
                                 text-decoration: none;
                                 display: inline-block;
                               ">
                              📅&nbsp;&nbsp;Confirm My Call Slot
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <p style="font-size: 14px; color: #666; margin-top: 16px;">
                  Already booked? Fantastic - we look forward to speaking with you!
                </p>
                <hr style="margin: 30px 0;">
                <p style="font-size: 14px; color: #888; margin: 0;">
          Kind regards,<br><strong>Joana</strong><br>Investor Support - Explorer
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;




  try {
const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const res = await fetch(`https://goldenvisashub.com/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: email,
   
        subject:  firstName+ ', You are Almost Done ',
        html
      }),
    });

    const data = await res.json();
    console.log('📨 Email sent:', data);
  } catch (error) {
    console.error('❌ Email error:', error);
  }
};

const sendNewLeadAlertEmail = async ({
  toName,
  toEmail,
  leadName,
  leadEmail,
  leadPhone,
  leadInvestment,
  leadIP,
  leadGeo
}) => {
  const firstName = toName.split(' ')[0];
  const now = new Date();
  const hour = now.getHours();
  const timestamp = now.toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' });

  let greeting = 'Good morning';
  if (hour >= 12 && hour < 18) greeting = 'Good afternoon';
  else if (hour >= 18) greeting = 'Good evening';
const today = new Date();
const weekday = today.toLocaleDateString('en-US', { weekday: 'long' });

const randomRemarks = [
  `Happy ${weekday}! A new lead just came in - have a look.`,
  `It's ${weekday} and someone just showed interest. Could be the one.`,
  `This came in today (${weekday}) - feels like a good sign!`,
  "They've taken the first step - time for us to meet them halfway.",
  "Someone’s thinking long-term - let’s help them move forward.",
  "Feels like a thoughtful investor - let's guide them right.",
  "Could be a great match - just landed now.",
  "Always nice to see interest like this midweek!",
  "Looks warm - maybe they’ve been doing their homework.",
  "They came to us - now let’s show what we can do.",
  "Worth a call today - might just surprise us.",
  "Early sign of trust - let’s follow that momentum.",
  `Perfect timing for a ${weekday} call.`,
  `Fresh lead this ${weekday} - don’t let it cool down.`,
  "Timing feels right - take a moment to check this one.",
  "Take a moment to check this out!",
  "Another investor showing interest.",
  "This might be a hot one!",
  "Looks promising - worth a look.",
  "Let's not miss this opportunity."
];

const closingLines = [
  `Let’s wrap up this ${weekday} with a solid follow-up.`,
  "One thoughtful call can turn this into a conversion.",
  `A call today could be all it takes - especially on a ${weekday}.`,
  "Feels like they’re ready - let’s not miss the window.",
  "Let’s not keep them waiting - a quick follow-up might be all they need.",
  "Momentum is everything - this one has it.",
  "Imagine this turning into a deal before the weekend!",
  "Perfect timing to show we care - reach out now.",
  "Friendly voice, fast call - let’s earn their trust.",
  "Let’s move while interest is fresh and relevant.",
  `This one landed on a ${weekday} for a reason - trust the timing.`,
  "Could be today’s win - let’s connect.",
  "Let's close this one - follow up fast and make the sale happen!",
  "Don't let this one slip - investor interest is hot!",
  "Act now - this could convert quickly!",
  "Move fast - there's momentum here.",
  "Your next conversion might be this one!"
];

  const selectedRemark = randomRemarks[Math.floor(Math.random() * randomRemarks.length)];
  const selectedClosing = closingLines[Math.floor(Math.random() * closingLines.length)];

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Lead Notification</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f9f9f9; font-family: Arial, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; padding: 30px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); padding: 30px;">
            <tr>
              <td align="center">
                <img src="https://goldenvisashub.com/assets/images/logoblue.png" alt="Explorer Logo" width="180" style="margin-bottom: 20px;" />
                <h2 style="color: #0d2c40; margin-bottom: 16px;">${greeting} ${firstName},</h2>
                <p style="font-size: 16px; color: #333; margin: 0 0 16px;">
                  ${selectedRemark}
                </p>
<table width="100%" style="border-collapse: collapse; margin-bottom: 16px;">
  <tr style="background-color: #f1f1f1;">
    <td style="padding: 6px 8px; font-weight: bold;">Potential Investor</td>
    <td style="padding: 6px 8px;">${leadName}</td>
  </tr>
  <tr>
    <td style="padding: 6px 8px; font-weight: bold;">Contact Email</td>
    <td style="padding: 6px 8px;">${leadEmail}</td>
  </tr>
  <tr style="background-color: #f1f1f1;">
    <td style="padding: 6px 8px; font-weight: bold;">Phone to Call</td>
    <td style="padding: 6px 8px;">${leadPhone}</td>
  </tr>
  <tr>
    <td style="padding: 6px 8px; font-weight: bold;">Investment Amount</td>
    <td style="padding: 6px 8px;">${leadInvestment}</td>
  </tr>
  <tr style="background-color: #f1f1f1;">
    <td style="padding: 6px 8px; font-weight: bold;">IP Address</td>
    <td style="padding: 6px 8px;">${leadIP}</td>
  </tr>
  <tr>
    <td style="padding: 6px 8px; font-weight: bold;">Geolocation</td>
    <td style="padding: 6px 8px;">${leadGeo}</td>
  </tr>
  <tr style="background-color: #f1f1f1;">
    <td style="padding: 6px 8px; font-weight: bold;">Submission Timestamp</td>
    <td style="padding: 6px 8px;">${timestamp}</td>
  </tr>
</table>

                <br />
                <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin: 0 auto 24px;">
                  <tr>
                    <td align="center" bgcolor="#0d2c40" style="border-radius: 8px;">
                      <table border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" style="padding: 14px 32px; font-size: 16px; font-family: Arial, sans-serif; font-weight: bold; color: #ffffff;">
                            <a href="https://docs.google.com/spreadsheets/d/1icwWoagiQ0k2qO8c0SMt1_Yai3FL3DJvc2eJDDfECa4/edit?gid=0" target="_blank" style="color: #ffffff; text-decoration: none;">
                              📄 View Full Details
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <p style="font-size: 14px; color: #888; margin: 0;">
                  ${selectedClosing}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  try {
const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const res = await fetch(`https://goldenvisashub.com/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: toEmail,
 
        subject: `New Lead: ${leadName} is interested in investing`,
        html
      })
    });

    const data = await res.json();
    console.log('📨 Lead alert sent successfully:', data);
  } catch (error) {
    console.error('❌ Error sending lead alert:', error);
  }
};



const [andreClosed, setAndreClosed] = useState(false);

useEffect(() => {
  const dismissed = localStorage.getItem('andreDismissed') === 'true';
  setAndreClosed(dismissed);
}, []);

const [canShowAndreHelp, setCanShowAndreHelp] = useState(false);
const [showLegalModal, setShowLegalModal] = useState(false);
const floatingFooterRef = useRef();


const isFloatingCtaVisible = () => {
  if (!floatingFooterRef.current) return false;
  const rect = floatingFooterRef.current.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
};
 
 
 


 


 




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


const CalendlyInline = ({ name, email }) => {
  
  const timezone = useUserTimezone();

const calendlyUrl = `https://calendly.com/mcs-3i-a/explorer-v?name=${encodeURIComponent(formdata.name)}&email=${encodeURIComponent(formdata.email)}&timezone=${encodeURIComponent(timezone)}`;
console.log("Calendly URL:", calendlyUrl);

  return (
    
    <div className="w-full max-w-4xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      <InlineWidget
        url={calendlyUrl}
        styles={{ height: "700px" }}
        pageSettings={{
          backgroundColor: "ffffff",
          primaryColor: "002741",
          textColor: "000000",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
        }}
      />
    </div>
  );
};
 
  const getGeoLocation = async () => {
    try {
      const response = await fetch('https://ipinfo.io/json');
      if (!response.ok) {
        throw new Error('Failed to fetch IP information');
      }
      const result = await response.json();
      if (result && result.country && result.region && result.city) {
        return `${result.country}, ${result.region}, ${result.city}`;
      } else {
        return 'Localização não encontrada';
      }
    } catch (error) {
      console.error('Erro ao obter geolocalização:', error);
      return 'Localização não encontrada';
    }
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





 

 <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[950px] relative overflow-hidden bg-gradient-to-br from-[#3b2e1a] via-[#5a4725] to-[#7a5f32] ">

 
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer pointer-events-none"></div>

<div className="w-full flex flex-col lg:flex-row h-auto lg:h-[950px] px-[15px] lg:px-0">

  <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-center pt-4 lg:pt-0 px-4 lg:px-24 text-white relative">
    
    <div
      className="flex flex-col w-[90%] max-w-xl relative"
      style={{
        borderColor: '#E4E0CF',
        backgroundColor: 'transparent',
        marginBottom: '5rem',
        marginTop: '2rem',
      }}
    >
      {/* BLOCO FIXO (logo + h1 + h2) */}
 <div className="absolute top-0 left-0 w-full z-10">
 
 


  <h1
    className="font-bebasneuepro text-[1.5rem] sm:text-[2rem] md:text-[2.2rem] lg:text-4xl font-bold uppercase leading-tight text-white"
    style={{
      fontFamily: "'Bebas Neue Pro', sans-serif",
    }}
  >
    Get a <span style={{ color: '#B4A77E' }}>Golden</span><br />
    Visa in Portugal
  </h1>

  <h2
    className="font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wide text-gray-300 mt-2"
    style={{ lineHeight: '1.2' }}
  >
FAQs<br />
 
  </h2>
</div>


      {/* ESPAÇO RESERVADO IGUAL AO BLOCO FIXO */}
      <div className="pt-[300px]"> {/* Ajusta este valor conforme o tamanho do bloco fixo */}
        <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed">
Everything You Need to Know before You Invest
Find clear answers to the most common questions about Portugal’s Golden Visa - from investment requirements and timelines to family inclusion, tax status, and citizenship. Backed by Explorer Investments, Portugal’s #1 private equity fund.
     </p>  

        <div className="mt-10 grid grid-cols-3 gap-6 text-center text-white border-t border-b border-white/40 py-6">
          {/* AUM */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#b4a77e]">AUM</p>
            <h3 className="text-2xl sm:text-3xl font-bold">
              <CountUp start={1.0} end={1.8} duration={2} decimals={1} suffix="BN" />
            </h3>
          </div>

          {/* Assets */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#b4a77e]">Assets</p>
            <h3 className="text-2xl sm:text-3xl font-bold">
              <CountUp start={1} end={100} duration={2} suffix="+" />
            </h3>
          </div>

          {/* Exits */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#b4a77e]">Exits</p>
            <h3 className="text-2xl sm:text-3xl font-bold">
              <CountUp start={1} end={39} duration={2} />
            </h3>
          </div>
        </div>
      </div>
<div className="w-full border-b border-white pb-5">
  <div className="mt-5 text-left text-4xl md:text-5xl">
    Invest <strong>€500,000</strong> 
  </div>

  <div className="mt-5 text-left text-2xl md:text-3xl">
    in Portugal’s Leading <br />
    <strong>Private Equity Fund</strong> <br />
    and Get Your Portuguese/European<strong>Golden Visa</strong>

    <button
      onClick={() => navigate("/")}
      className="mt-6 bg-[#002741] hover:bg-[#9c9067] border border-white text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-full transition flex items-center gap-2 lg:hidden"
    >
      <MessageCircle className="w-5 h-5" />
      Talk to an Expert
    </button>
  </div>
</div>

    </div>
  </div>
</div>



 
<div
  id="DivAskSimulation"
  className="w-full lg:px-16 lg:pb-16 mt-0 mb-[60px] lg:mt-[60px] lg:mb-0"
>






 


  
  {formstep === 1 && (
 <div className="text-white text-center mt-10 lg:mt-5 lg:mb-5">

  {/* Título Principal (com os seus próprios estilos) */}
<div className="font-bebasneuepro text-2xl lg:text-3xl font-semibold">
  {/* Mobile Version */}
<div className="block lg:hidden">
  Request Your <br className="block lg:hidden" />
  Private Consultation for the <br />
  Portuguese Golden Visa <br />
  <span className="text-sm">Your Gateway to European Residency</span>
</div>

{/* Desktop Version */}
<div className="hidden lg:block">
  Request Your <br className="block lg:hidden" />
  Private Consultation for the <br />
  Portuguese Golden Visa <br />
  <span className="text-sm">Your Gateway to European Residency</span>
</div>
</div>

  {/* Subtítulo (agora separado e com os seus próprios estilos) */}
  {/* A classe "mt-2" adiciona um pequeno espaço entre o título e o subtítulo */}
<div className="text-[11px] md:text-sm lg:text-base leading-tight mt-2 mb-2.5">


This 30-second form connects you with Portugal’s #1 private equity fund <br   /> trusted by Golden Visa investors.



 
 

 </div>

</div>


)}

{formstep === 2 && (


<div className="text-white text-center font-bebasneuepro text-2xl lg:text-3xl font-semibold mt-10 lg:mt-5 lg:mb-5">
 
  <div  >
Just one more detail <br></br> Unlock Your Golden Visa Today

 
  </div>

 



</div>


)}

{formstep === 3 && !showCalendly && (


<div className="text-white text-center font-bebasneuepro text-2xl lg:text-3xl font-semibold mt-10 lg:mt-5 lg:mb-5">
 
<div  >
Final Step
 <br /> <span className="text-sm">Schedule Your 100% Confidential Call</span>
</div>


 
 



</div>


)}

<div
className={`bg-white rounded-xl mx-4 pt-2 px-4 lg:px-12 mb-3 ${formstep < 4 && !showCalendly ? 'block' : 'hidden'} `}
style={{ height:  'auto', paddingBottom: '20px' }} 
>
<div className="flex justify-between items-start mt-4 mb-2 px-2">


 <h2 className="text-sm sm:text-base md:text-lg font-semibold text-left" style={{ color: "#B4A77E" }}>
  {formstep === 1 && (
    <>
Need Expert Guidance 
<br></br>
on the Portuguese <br></br>Golden Visa?
    </>
  )}
  {formstep === 2 && "Just one step left"}
  {formstep === 3 && "Finalize Your Submission"}
</h2>

<div className="text-xs sm:text-sm flex items-center" style={{ color: "#B4A77E" }}>
  <span className="mr-2 font-medium">Step {formstep} of 3</span>

  <div className="flex space-x-1 relative">
    {[1, 2, 3].map((step) => (
      <div key={step} className="relative w-3 h-3">
        {step === formstep && (
          <span className="absolute top-0 left-0 w-full h-full rounded-full ring-2 ring-[#ECE8D9] animate-ping-ring z-0"></span>
        )}
        <span
          className={`relative w-3 h-3 rounded-full block z-10 ${
            step === formstep ? "bg-[#B4A77E]" : "bg-gray-400"
          }`}
        ></span>
      </div>
    ))}
  </div>
</div>
</div>

<div className={` ${formstep == 1 ? 'block' :'hidden'}`}>
 
 
 

 




 
 



 
<FormControl
  fullWidth
  className="mb-4"
  variant="outlined"
  sx={{ marginTop: '20px' }} // ou sx={{ mt: 2.5 }}
>
  <InputLabel
    id="investment-label"
    htmlFor="investment-select"
    shrink
    sx={{
      fontSize: '1rem',
      fontWeight: 'bold',
      whiteSpace: 'normal',
      lineHeight: 1.2,
      backgroundColor: 'white',
      px: 0.5,
    }}
  >
    How much do you want to invest?
  </InputLabel>

  <Select
    labelId="investment-label"
    id="investment-select"
    value={ageValue}
    onChange={handleSelectChange}
    label="How much do you want to invest?"
    sx={{
      fontSize: '1rem',
      fontWeight: 'bold',
    }}
  >
    {[0, 1, 2, 3, 4, 5].map((val) => (
      <MenuItem
        key={val}
        value={val}
        sx={{ fontSize: '1rem', fontWeight: 'bold' }}
      >
        {getpetage(val)}
      </MenuItem>
    ))}
  </Select>
</FormControl>


 
<div className="mb-5 mt-[20px] relative">

  <input
    type='text'
    ref={nomeinp}
    name="name"
    value={formdata.name}
    onChange={validateform}
    className={`block w-full py-3 pl-12 pr-4 rounded-md border border-gray-300 focus:border-blue-500 outline-none text-lg placeholder:text-gray-500`}
    placeholder="What's your name?"
    maxLength={100}
  />
  <span className='absolute top-1/2 -translate-y-1/2 left-4 text-[#002741]'>
    <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
  </span>
</div>

 
<div className='mb-5 relative'>
  <input
    type='email'
    ref={emailinp}
    name="email"
    value={formdata.email}
    onChange={validateform}
    className={`block w-full py-3 pl-12 pr-4 rounded-md border border-gray-300 focus:border-blue-500 outline-none text-lg placeholder:text-gray-500`}
    placeholder="What's your email?"
    maxLength={100}
  />
  <span className='absolute top-1/2 -translate-y-1/2 left-4 text-[#002741]'>
    <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
  </span>
</div>




    
<div style={{ marginTop: '20px', marginBottom: '20px' }}>


<p className='text-xs lg:text-md text-[#212121]'>
<strong
onClick={() => setShowMoreText(!showMoreText)} // Toggle on click
style={{ cursor: 'pointer' }} // Pointer style
>
See Terms and Conditions
</strong>
<br />
{/* Conditionally render additional text */}
{showMoreText && (
  <div style={{ fontSize: '10px' }} className="lg:text-xs text-gray-600 leading-snug ">

 
<p>I authorize that the data provided here can be used by Explorer Investments Sociedade de Capital de Risco, S.A. - in accordance with its&nbsp;<a href="https://www.explorerinvestments.com/en/privacy-policy/" target="_blank" rel="noreferrer noopener">Privacy Policy</a>&nbsp;and its <a rel="noreferrer noopener" href="https://www.explorerinvestments.com/en/terms-and-conditions/" target="_blank">Terms and Conditions</a> - to know more about its Golden Visa product via email, call and/or sms.</p>

  
</div>
)}
</p>
</div>

      
           
            

</div>
<div className={` ${formstep === 2 ? 'block' :'hidden'}`}>
 
 
 

 


<div className="bg-[#F1EFE7]  relative border border-gray-300  text-sm text-gray-800 rounded-lg px-4 py-4 mt-5 mb-5 shadow-sm leading-relaxed text-left">
 
  <p className="mb-2">
    <strong>{formdata["name"]}, </strong><br></br> just one more step to receive <b>your personalized Golden Visa investment proposal.</b>
  </p>
  <p>
    Complete your phone number below and <b>our team will contact you with everything you need</b> - including fund details, investment guidance, and next steps.
  </p></div>




 

<div className="text-center mb-5" style={{ marginBottom: '20px' }}>
Please enter your phone number.
</div>

 

<div className="w-full flex justify-center items-center mb-6">
 
  <div className="w-full max-w-md px-4">
<PhoneInput
  country={country}
  value={formdata.phone}
  onChange={(val) => setFormdata({ ...formdata, phone: val })}
  inputClass="!w-full !py-5 !pl-[75px] !pr-4 !text-xl !rounded-md !border !border-gray-300 !focus:border-blue-500"
  containerClass="!w-full"
  buttonClass="!p-3"
  enableLongNumbers={true}

  inputProps={{
    autoComplete: 'tel'
  }}
/>


  </div>
</div>


 
 
</div>


{errorMessage && formstep  < 3 && (
  <div className="text-red-500 text-center mb-4 font-semibold text-sm">
    {errorMessage}
  </div>
)}


 
<div
  id="DivSucessMessage"
  className={`max-w-[100%] lg:max-w-[100%] mx-auto ${formstep > 2 && !showCalendly ? 'block' : 'hidden'} text-left font-bebasneuepro text-2xl lg:text-3xl p-[10px]`}
>
 <div className="text-[#002D3D] text-left">
 
  <h2 className="text-xl lg:text-2xl font-bold mb-1">
    Thank you, {formdata.name}
  </h2>
  <p className="text-base font-semibold mb-4">
Secure Your Golden Visa With Portugal’s Largest Private Equity Fund
  </p>

  <p className="text-sm lg:text-base mb-4">
    To move forward, choose a time for your <strong>100% confidential call</strong> with one of our senior advisors.
  </p>
 
<button
  onClick={() => setShowCalendly(true)}
  className="relative inline-flex items-center justify-center gap-2 bg-[#1B7F37] text-white font-bold text-sm sm:text-base px-6 py-3 rounded-full shadow-lg transition-all duration-300 overflow-visible"
>
  <span className="relative z-10 flex items-center gap-2">
    <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4 animate-icon-shake" />
Book My <br></br>Golden Visa Call Now
  </span>
</button>





  <p className="text-sm lg:text-base font-semibold mt-4 mb-2">
    In your call, you'll:
  </p>
  <ul className="list-disc pl-6 text-sm lg:text-base mb-6">
    <li>Confirm your eligibility</li>
    <li>Get expert investment guidance</li>
    <li>Access Portugal’s top Golden Visa fund</li>
  </ul>

<div className="flex flex-col lg:flex-row items-start gap-6 mt-4">
  <div className="flex items-center gap-3">
    <img
      src="/assets/images/andre_2025.jpg"
      alt="André Bandeira"
      className="w-14 h-14 rounded-full object-cover border-2 border-themered"
    />
    <div>
      <p className="font-bold text-sm">André Bandeira</p>
      <p className="text-sm text-gray-600">Investor Relations</p>
    </div>
  </div>

  <div className="flex items-center gap-3">
    <img
      src="https://goldenvisashub.com/assets/images/maria_2025.jpg"
      alt="Maria Campos Silva"
      className="w-14 h-14 rounded-full object-cover border-2 border-themered"
    />
    <div>
      <p className="font-bold text-sm">Maria Campos Silva</p>
      <p className="text-sm text-gray-600">Investor Relations</p>
    </div>
  </div>
</div>

<a href="/">
  <img
    src="/assets/images/logoblue.webp"
    alt="Explorer Logo"
    className="w-[120px] h-auto mb-4 mt-[30px]"
  />
</a>


</div>

</div>

{formstep <3   && (
  <div className="flex flex-col items-center space-y-4 pb-4">
    {formstep === 1 && (
 
<button
  onClick={senddata}
  disabled={isSubmitting}
  className={`relative w-full py-4 text-xl font-bold rounded-xl transition-all duration-300 ease-in-out transform ${
    isSubmitting
      ? 'bg-gray-400 text-gray-800 cursor-not-allowed ring-4 ring-offset-2 ring-offset-gray-400 ring-[#9C8B5E] animate-pulse'
      : 'bg-[#002741]  border border-white hover:brightness-110  text-white hover:scale-105 shadow-[0_12px_30px_rgba(0,0,0,0.3)]'
  }`}
>
   <div className="w-full text-center leading-tight flex items-center justify-center gap-2">
    {isSubmitting ? (
      <div>
        <span className="block text-sm">
          {formdata.name ? `${formdata.name.split(' ')[0]},` : ''}
        </span>
        Just a sec...
      </div>
    ) : (
      <div>
        <span className="block text-sm"> Book My </span>
Free Call Now 
      </div>
    )}
  </div>
</button>










    )}

    {formstep === 2 && (
 
 
 <button
  onClick={submitform}
  disabled={isSubmitting}
  className={`relative w-full pl-14 pr-6 py-4 text-xl font-bold rounded-xl shadow-lg transition-transform hover:scale-105 ${
    isSubmitting
      ? 'bg-[#B4A77E] text-white cursor-not-allowed'
      : 'bg-[#1B7F37] text-white hover:bg-[#16a34a]'
  }`}
>
  {/* Ícone à esquerda - muda consoante o estado */}
  <div className="absolute left-4 top-1/2 -translate-y-1/2">
    {isSubmitting ? (
      <span className="inline-block w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
    ) : (
      <CheckCircleIcon className="w-9 h-9" />
    )}
  </div>

  {/* Texto centralizado em duas linhas */}
  <div className="w-full text-center leading-tight flex items-center justify-center gap-2">
    {isSubmitting ? (
      <div>
        <span className="block text-sm">
          {formdata.name ? `${formdata.name.split(' ')[0]},` : ''}
        </span>
        One Last Step to Go!
      </div>
    ) : (
      <div>
        <span className="block text-sm">Confirm</span>
        and Continue
      </div>
    )}
  </div>
</button>

    )}

{formstep === 1 && (
  <>
    <p className="text-sm text-center mb-2">
      Save time - pre-fill with your Google or Microsoft account
    </p>

    <GoogleLoginButton formstep={formstep} onSuccess={handleGoogleResponse} />

    <div className="my-2"></div>

 
  </>
)}


    <p className="text-[10px] text-gray-800 uppercase font-semibold tracking-wide text-center block sm:hidden">
      Your information is 100% secure <br /> and will never be shared.
    </p>

    <p className="text-[10px] text-gray-800 uppercase font-semibold tracking-wide text-center hidden sm:block">
      Your information is 100% secure and will never be shared.
    </p>

    {formstep !== 1 && (
      <button
        onClick={() => {
          setFormstep(1);
          scrollToTop();
        }}
        className="text-sm font-bold text-[#444] hover:text-black bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 shadow-sm"
      >
        Back
      </button>
    )}
  </div>
)}

 


</div>


 


{formstep > 2 && showCalendly && (
  <CalendlyInline
    name={formdata.name}
    email={formdata.email}
    phone={formdata.phone}
  />
)}


  </div>
</div>




 

 


 
    <Benefits />
{canShowAndreHelp && !andreClosed && (
  <AndreFloatingHelpPortal
    onScrollAndClose={() => {
      scrollToTop();
      setAndreClosed(true);
      localStorage.setItem('andreDismissed', 'true');
    }}
    onClose={() => {
      setAndreClosed(true);
      localStorage.setItem('andreDismissed', 'true');
    }}
  />
)}


 

    <Footer />





    </>
   
  );
}

export default App;
