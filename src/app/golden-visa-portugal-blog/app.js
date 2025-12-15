'use client';
import React, { useEffect, useRef, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { isValidPhoneNumber } from 'libphonenumber-js';

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
import Benefits from '@/components/Blog'; // Este é o seu BlogPreviewGridFromXML
import Footer from '@/components/Footer';
import { Play } from "lucide-react";

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import useUserTimezone from '@/components/useUserTimezone';  

// **** CORREÇÃO 1: Aceite as props 'initialArticles' e 'initialAllTags' ****
function App({ initialArticles, initialAllTags }) {

  // ... (todo o seu código de estado e useEffects existentes pode ficar) ...
  const [andreClosed, setAndreClosed] = useState(false);
  useEffect(() => {
    const dismissed = localStorage.getItem('andreDismissed') === 'true';
    setAndreClosed(dismissed);
  }, []);
  const [canShowAndreHelp, setCanShowAndreHelp] = useState(false);
  const [showLegalModal, setShowLegalModal] = useState(false);
  const floatingFooterRef = useRef();
  // ...
  const isFloatingCtaVisible = () => {
    if (!floatingFooterRef.current) return false;
    const rect = floatingFooterRef.current.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  };
  // ...
  const [formstep, setFormstep] = useState(1); 
  const [showFullScreenLoading, setShowFullScreenLoading] = useState(false);
  // ...
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
  // ...
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
  // ...
  const getGeoLocation = async () => { /* ... sua função ... */ };
  const getIPAddress = async () => { /* ... sua função ... */ };
  // ...
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
      setShow(scrollY >= showThreshold);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  // ...
  const toggleDivSubAskSubSimulationVisibility = () => { /* ... sua função ... */ };
  const scrollToTop = () => { /* ... sua função ... */ };
  // ... (Fim dos seus hooks e funções) ...

  return (
    <>
      <Header />

    {/* ... (Seu JSX de Loading e Modal Legal) ... */}
    {showFullScreenLoading && (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90 text-white text-xl font-bold">
        <div className="animate-pulse text-center px-6">
          Unlocking the gateway to Europe...
        </div>
      </div>
    )}
    <AnimatePresence>
      {showLegalModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md rounded-lg p-6 text-white text-left"
            style={{ backgroundColor: '#B4A77E' }}
          >
           <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-md rounded-lg p-6 text-white text-left"
        style={{ backgroundColor: '#B4A77E' }}
      >
        {/* Botão da Cruz no canto superior direito */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white hover:text-gray-200 text-xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
    
        <div className="mb-4">
     <a href="/" className="block">
      <img src="/assets/images/logo.webp" alt="Explorer Logo" className="w-[160px] h-auto mb-4" />
    </a>
          <h2 className="text-xl font-bold mb-2">Terms & Policies</h2>
          <p className="text-sm mb-4">
            By browsing this website, you agree to the{' '}
            <a
              href="https://www.explorerinvestments.com/home/terms-and-conditions/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-white"
            >
              Terms and Conditions of Use
            </a>.
            <br />
            Please also review our{' '}
            <a
              href="https://www.explorerinvestments.com/home/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-white"
            >
              Privacy Policy
            </a>{' '}
            and{' '}
            <a
              href="https://www.explorerinvestments.com/home/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-white"
            >
              Cookie Policy
            </a>.
          </p>
        </div>
    
        <button
          onClick={handleClose}
          className="bg-white text-[#B4A77E] font-bold px-5 py-2 rounded-full hover:bg-gray-200 transition"
        >
          Close
        </button>
      </div>
    </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* **** CORREÇÃO 2: Passe os 44 artigos para o componente <Benefits> **** */}
    <Benefits 
      initialArticles={initialArticles} 
      initialAllTags={initialAllTags}
    />
    
    {/* ... (Seu JSX do AndreFloatingHelp) ... */}
    {/* {canShowAndreHelp && !andreClosed && ( ... )} */}

    <Footer />
    </>
  );
}

export default App;