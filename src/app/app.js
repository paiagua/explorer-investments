'use client';
import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

import { jwtDecode } from 'jwt-decode';
import { isValidPhoneNumber } from 'libphonenumber-js';
import FloatingContact from "../components/FloatingContact";

import CountUp from 'react-countup';
import About_Fund from '../components/About_Fund';
import Header from '../components/Menu';
import { MessageCircle } from 'lucide-react';
import GoogleLoginButton from '../components/GoogleLoginButton';
import '../assets/css/App.css';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'flag-icon-css/css/flag-icons.min.css';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { InlineWidget } from 'react-calendly';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Benefits from '../components/Benefits';

import Footer from '../components/Footer';
import { Play } from 'lucide-react';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import useUserTimezone from '../components/useUserTimezone';

// import AndreFloatingHelpPortal from '../components/AndreFloatingHelpPortal'; // <- se precisares deste, descomenta

function App() {

 

  const timezone = useUserTimezone();

  const sendGoldenVisaEmail1stStep = async ({ name, email, investment }) => {
    console.log('Server=' + process.env.REACT_APP_API_URL);
    const encodedURL = `https://goldenvisashub.com?confirm=1&name=${encodeURIComponent(
      name
    )}&email=${encodeURIComponent(email)}&investment=${encodeURIComponent(investment)}`;
    const firstName = name.split(' ')[0];

    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Golden Visa Follow-Up</title></head><body style="margin:0;padding:0;background-color:#f9f9f9;font-family:Arial,sans-serif;"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f9f9f9;padding:30px;"><tr><td align="center"><table role="presentation" width="100%" style="max-width:600px;background-color:#ffffff;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.05);padding:30px;"><tr><td align="center"><img src="https://goldenvisashub.com/assets/images/logoblue.png" alt="Explorer Logo" width="180" style="max-width:180px;width:100%;height:auto;margin-bottom:20px;" /><h2 style="color:#0d2c40;margin-bottom:16px;">${firstName}, <br>Just One More Step</h2><p style="font-size:16px;color:#333;margin:0 0 16px;">Thank you for taking the first step towards your Golden Visa journey with us. We’re excited to help you explore this opportunity!</p><p style="font-size:16px;color:#333;margin:0 0 24px;">To make sure we can support you personally, could you confirm your phone number? It only takes a few seconds.</p><table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto 24px;"><tr><td align="center" bgcolor="#0d2c40" style="border-radius:8px;"><table border="0" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:14px 32px;font-size:16px;font-family:Arial,sans-serif;font-weight:bold;color:#ffffff;text-decoration:none;border-radius:8px;background-color:#0d2c40;"><a href="${encodedURL}" target="_blank" style="color:#ffffff;text-decoration:none;display:inline-block;">✅&nbsp;&nbsp;Confirm My Phone Number</a></td></tr></table></td></tr></table><p style="font-size:14px;color:#666;margin-top:16px;">Already submitted your number? Perfect - we’ll be in touch very soon.</p><hr style="margin:30px 0;"><p style="font-size:14px;color:#888;margin:0;">Kind regards,<br><strong>Joana</strong><br>Investor Support - Explorer</p></td></tr></table></td></tr></table></body></html>`;

    try {
      const res = await fetch(`https://goldenvisashub.com/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: email,
          subject: firstName + ', Just 2 Steps Away - Add Your Phone Number',
          html,
        }),
      });

      const data = await res.json();
      console.log('📨 Email sent:', data);
    } catch (error) {
      console.error('❌ Email error:', error);
    }
  };

  const sendGoldenVisaEmail2stStep = async ({ name, email, phone, investment, timezone }) => {
    const encodedURL = `https://goldenvisashub.com?confirm=2&name=${encodeURIComponent(
      name
    )}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
      phone
    )}&investment=${encodeURIComponent(investment)}&timezone=${encodeURIComponent(timezone)}`;
    const firstName = name.split(' ')[0];

    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Golden Visa Follow-Up</title></head><body style="margin:0;padding:0;background-color:#f9f9f9;font-family:Arial,sans-serif;"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f9f9f9;padding:30px;"><tr><td align="center"><table role="presentation" width="100%" style="max-width:600px;background-color:#ffffff;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.05);padding:30px;"><tr><td align="center"><img src="https://goldenvisashub.com/assets/images/logoblue.png" alt="Explorer Logo" width="180" style="max-width:180px;width:100%;height:auto;margin-bottom:20px;" /><h2 style="color:#0d2c40;margin-bottom:16px;">${firstName}, <br>Shall We Connect?</h2><p style="font-size:16px;color:#333;margin:0 0 16px;">We’d love to introduce you to Portugal’s leading Golden Visa fund in a relaxed, no-commitment conversation.</p><p style="font-size:16px;color:#333;margin:0 0 24px;">Simply choose a time that suits you best - we’re happy to answer your questions and share how it all works.</p><table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto 24px;"><tr><td align="center" bgcolor="#0d2c40" style="border-radius:8px;"><table border="0" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:14px 32px;font-size:16px;font-family:Arial,sans-serif;font-weight:bold;color:#ffffff;text-decoration:none;border-radius:8px;background-color:#0d2c40;"><a href="${encodedURL}" target="_blank" style="color:#ffffff;text-decoration:none;display:inline-block;">📅&nbsp;&nbsp;Confirm My Call Slot</a></td></tr></table></td></tr></table><p style="font-size:14px;color:#666;margin-top:16px;">Already booked? Fantastic - we look forward to speaking with you!</p><hr style="margin:30px 0;"><p style="font-size:14px;color:#888;margin:0;">Kind regards,<br><strong>Joana</strong><br>Investor Support - Explorer</p></td></tr></table></td></tr></table></body></html>`;

    try {
      const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      void API_BASE; // silence unused var

      const res = await fetch(`https://goldenvisashub.com/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: email,
          subject: firstName + ', You are Almost Done ',
          html,
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
    leadGeo,
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
      'Someone’s thinking long-term - let’s help them move forward.',
      "Feels like a thoughtful investor - let's guide them right.",
      'Could be a great match - just landed now.',
      'Always nice to see interest like this midweek!',
      'Looks warm - maybe they’ve been doing their homework.',
      'They came to us - now let’s show what we can do.',
      'Worth a call today - might just surprise us.',
      'Early sign of trust - let’s follow that momentum.',
      `Perfect timing for a ${weekday} call.`,
      `Fresh lead this ${weekday} - don’t let it cool down.`,
      'Timing feels right - take a moment to check this one.',
      'Take a moment to check this out!',
      'Another investor showing interest.',
      'This might be a hot one!',
      'Looks promising - worth a look.',
      "Let's not miss this opportunity.",
    ];

    const closingLines = [
      `Let’s wrap up this ${weekday} with a solid follow-up.`,
      'One thoughtful call can turn this into a conversion.',
      `A call today could be all it takes - especially on a ${weekday}.`,
      'Feels like they’re ready - let’s not miss the window.',
      'Let’s not keep them waiting - a quick follow-up might be all they need.',
      'Momentum is everything - this one has it.',
      'Imagine this turning into a deal before the weekend!',
      'Perfect timing to show we care - reach out now.',
      'Friendly voice, fast call - let’s earn their trust.',
      'Let’s move while interest is fresh and relevant.',
      `This one landed on a ${weekday} for a reason - trust the timing.`,
      'Could be today’s win - let’s connect.',
      'Let\'s close this one - follow up fast and make the sale happen!',
      "Don't let this one slip - investor interest is hot!",
      'Act now - this could convert quickly!',
      "Move fast - there's momentum here.",
      'Your next conversion might be this one!',
    ];

    const selectedRemark = randomRemarks[Math.floor(Math.random() * randomRemarks.length)];
    const selectedClosing = closingLines[Math.floor(Math.random() * closingLines.length)];

    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>New Lead Notification</title></head><body style="margin:0;padding:0;background-color:#f9f9f9;font-family:Arial,sans-serif;"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f9f9f9;padding:30px;"><tr><td align="center"><table role="presentation" width="100%" style="max-width:600px;background-color:#ffffff;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.05);padding:30px;"><tr><td align="center"><img src="https://goldenvisashub.com/assets/images/logoblue.png" alt="Explorer Logo" width="180" style="margin-bottom:20px;" /><h2 style="color:#0d2c40;margin-bottom:16px;">${greeting} ${firstName},</h2><p style="font-size:16px;color:#333;margin:0 0 16px;">${selectedRemark}</p><table width="100%" style="border-collapse:collapse;margin-bottom:16px;"><tr style="background-color:#f1f1f1;"><td style="padding:6px 8px;font-weight:bold;">Potential Investor</td><td style="padding:6px 8px;">${leadName}</td></tr><tr><td style="padding:6px 8px;font-weight:bold;">Contact Email</td><td style="padding:6px 8px;">${leadEmail}</td></tr><tr style="background-color:#f1f1f1;"><td style="padding:6px 8px;font-weight:bold;">Phone to Call</td><td style="padding:6px 8px;">${leadPhone}</td></tr><tr><td style="padding:6px 8px;font-weight:bold;">Investment Amount</td><td style="padding:6px 8px;">${leadInvestment}</td></tr><tr style="background-color:#f1f1f1;"><td style="padding:6px 8px;font-weight:bold;">IP Address</td><td style="padding:6px 8px;">${leadIP}</td></tr><tr><td style="padding:6px 8px;font-weight:bold;">Geolocation</td><td style="padding:6px 8px;">${leadGeo}</td></tr><tr style="background-color:#f1f1f1;"><td style="padding:6px 8px;font-weight:bold;">Submission Timestamp</td><td style="padding:6px 8px;">${timestamp}</td></tr></table><br /><table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto 24px;"><tr><td align="center" bgcolor="#0d2c40" style="border-radius:8px;"><table border="0" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:14px 32px;font-size:16px;font-family:Arial,sans-serif;font-weight:bold;color:#ffffff;"><a href="https://docs.google.com/spreadsheets/d/1icwWoagiQ0k2qO8c0SMt1_Yai3FL3DJvc2eJDDfECa4/edit?gid=0" target="_blank" style="color:#ffffff;text-decoration:none;">📄 View Full Details</a></td></tr></table></td></tr></table><p style="font-size:14px;color:#888;margin:0;">${selectedClosing}</p></td></tr></table></td></tr></table></body></html>`;

    try {
      const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      void API_BASE;

      const res = await fetch(`https://goldenvisashub.com/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: toEmail,
          subject: `New Lead: ${leadName} is interested in investing`,
          html,
        }),
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
    expirationDate.setMonth(expirationDate.getMonth() + 1);
    localStorage.setItem('legalModalClosedUntil', expirationDate.toISOString());
    setShowLegalModal(false);
  };
  useEffect(() => {
    const storedDate = localStorage.getItem('legalModalClosedUntil');
    if (storedDate) {
      const now = new Date();
      const closeUntil = new Date(storedDate);
      if (now < closeUntil) {
        setShowLegalModal(false);
      } else {
        setShowLegalModal(true);
      }
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
          setCountry(data.country.toLowerCase());
        } else {
          setCountry('pt');
        }
      } catch (err) {
        console.error('Erro ao detectar país:', err);
        setCountry('pt');
      }
    };

    detectCountry();
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [showMoreText, setShowMoreText] = useState(false);
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
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
    if (!phoneIsValid()) {
      setErrorMessage('Please enter a valid international phone number.');
      setIsSubmitting(false);
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const nomeinp = useRef();
  const emailinp = useRef();
  const mobileinp = useRef();
  const messageinp = useRef();

  const validateform = (e) => {
    const oldData = { ...formdata };
    const inp = e.target.name;
    const inpvalue = e.target.value.slice(0, e.target.maxLength);
    oldData[inp] = inpvalue;
    setFormdata(oldData);
  };

  const checkemail = (inp) => {
    const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

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
    return formdata.phone ? isValidPhoneNumber('+' + formdata.phone) : false;
  };

  const handleGoogleResponse = async (response) => {
    setIsSubmitting(true);

    try {
      const token = response.credential;
      const decoded = jwtDecode(token);

      console.log('✅ Dados do Google decodificados:', decoded);

      const name = decoded.name || '';
      const email = decoded.email || '';

      setFormdata((prev) => ({
        ...prev,
        name,
        email,
        message: prev.message || '',
      }));

      const ip = await getIPAddress();
      const geo = await getGeoLocation();

      await sendDataToGoogleSheet({
        leadId: sessionValue,
        name,
        email,
        investment: '',
        phone: '',
        ip,
        geo,
        stepForm: '1',
      });
      setErrorMessage('');

      scrollToTop();
    } catch (error) {
      console.error('Erro no login com Google:', error);
    }

    setIsSubmitting(false);
  };

  const CalendlyInline = ({ name, email }) => {
    const timezone = useUserTimezone();

    const calendlyUrl = `https://calendly.com/mcs-3i-a/explorer-v?name=${encodeURIComponent(
      formdata.name
    )}&email=${encodeURIComponent(formdata.email)}&timezone=${encodeURIComponent(timezone)}`;
    console.log('Calendly URL:', calendlyUrl);

    return (
      <div className="w-full max-w-4xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
        <InlineWidget
          url={calendlyUrl}
          styles={{ height: '700px' }}
          pageSettings={{
            backgroundColor: 'ffffff',
            primaryColor: '002741',
            textColor: '000000',
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

  const toggleDivSubAskSubSimulationVisibility = () => {
    const div = document.getElementById('DivSubAskSubSimulation');
    if (!div) return;
  };

  const scrollToTop = () => {
    const element = document.getElementById('DivAskSimulation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sendDataToGoogleSheet = async ({
    leadId = '',
    name = '',
    email = '',
    investment = '',
    phone = '',
    ip = '',
    geo = '',
    stepForm = '',
  } = {}) => {
    const scriptUrl =
      'https://script.google.com/macros/s/AKfycbyt9VFGmfU9DBHfdDqhCzn51rYuezLIiLcJvV7i_boxH8h6U4By_nIu2saunr5hqnyv/exec';

    const formData = new FormData();
    formData.append('leadId', leadId);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('investment', investment);
    formData.append('phone', phone);
    formData.append('ip', ip);
    formData.append('geo', geo);
    formData.append('stepForm', stepForm);

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        console.log('✅ Dados enviados com sucesso:', result.message);
      } else {
        console.warn('⚠️ Falha ao enviar:', result.message);
      }

      return result;
    } catch (error) {
      console.error('❌ Erro ao enviar dados:', error);
      return { success: false, message: error.message };
    }
  };

 

 const senddata = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    const leadId = sessionStorage.getItem('user_session');

    const valid = isFormValid();

    if (!valid) {
      setIsSubmitting(false);
      return;
    }

    const ip = await getIPAddress();
    const geo = await getGeoLocation();

    try {
      // 1. Enviar para o Google Sheet primeiro
      await sendDataToGoogleSheet({
        leadId: leadId,
        name: formdata.name,
        email: formdata.email,
        investment: formdata.message,
        phone: formdata.phone,
        ip,
        geo,
        stepForm: '1',
      });

      // 2. Enviar TODOS os emails em paralelo
      await Promise.all([
        sendNewLeadAlertEmail({
          toName: 'Ricardo',
          toEmail: 'paiaguaricardo@gmail.com',
          leadName: formdata.name,
          leadEmail: formdata.email,
          leadPhone: formdata.phone,
          leadInvestment: formdata.message,
          leadIP: ip,
          leadGeo: geo,
        }),
        sendNewLeadAlertEmail({
          toName: 'Maria',
          toEmail: 'mcs@explorerinvestments.com',
          leadName: formdata.name,
          leadEmail: formdata.email,
          leadPhone: formdata.phone,
          leadInvestment: formdata.message,
          leadIP: ip,
          leadGeo: geo,
        }),
        sendNewLeadAlertEmail({
          toName: 'André',
          toEmail: 'ab@explorerinvestments.com',
          leadName: formdata.name,
          leadEmail: formdata.email,
          leadPhone: formdata.phone,
          leadInvestment: formdata.message,
          leadIP: ip,
          leadGeo: geo,
        }),
      ]);

      // 3. SÓ DEPOIS de tudo ter corrido bem, atualizar a UI
      setIsSubmitting(false);
      setFormstep(3);
      scrollToTop();

    } catch (error) {
      // Se algo falhar (sheet ou email), parar o loading e mostrar erro
      console.error("Erro ao submeter o formulário:", error);
      setErrorMessage("Ocorreu um erro ao enviar os seus dados. Tente novamente.");
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    // Detecta país via IP (redundante com o ipinfo, mas mantido se preferires)
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_code) {
          setCountry(data.country_code.toLowerCase());
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
    // sendDataToGoogleSheet({ fromwhere: "load", publisher: publishername });
    toggleDivSubAskSubSimulationVisibility();
  };

  
  // 🚑 Fix: garantir que "investment" existe aqui também
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
        message: prev.message || '',
      }));

      setFormstep(2);
      scrollToTop();
    } else {
      console.warn('❌ Faltam query params:', { name, email, investment });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 🚑 Fix: "investment" estava a ser usado sem estar definido
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
        phone,
      }));

      setFormstep(3);
      setShowCalendly(true);
      scrollToTop();
      
    } else {
      console.warn('❌ Faltam query params:', { name, email, investment });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
<section className="relative w-full min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] overflow-hidden bg-white">
  {/* CAMADA 2: O OVERLAY PRETO — REMOVIDO PARA FUNDO LIMPO */}

  {/* CAMADA 3: O CONTEÚDO */}
  <div className="relative z-10 w-full mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-12 py-14 lg:py-24">
    <div className="max-w-xl">
      <p className="text-[#B4A77E] text-sm sm:text-base font-semibold tracking-[0.08em] uppercase mb-3">
        Explorer Investments
      </p>

      <h2 className="text-black font-bebasneuepro text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
        The Most Trusted Private Equity Firm
        <br className="hidden sm:block" /> for the Portuguese Golden Visa
      </h2>

      <p className="text-black/80 text-sm sm:text-base lg:text-lg mb-8">
        Invest with confidence in Portugal’s leading regulated fund - your gateway to European residency.
      </p>

      <button
        className="inline-flex items-center gap-2 rounded-full bg-[#B4A77E] text-white text-base sm:text-lg font-semibold px-8 py-3 hover:bg-[#9c9067] transition-all duration-300 shadow-lg"
        onClick={() =>
          document.querySelector('#DivAskSimulation')?.scrollIntoView({ behavior: 'smooth' })
        }
        aria-label="Request information about the Portuguese Golden Visa"
      >
        Request Information
      </button>
    </div>
  </div>
</section>

      {showFullScreenLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90 text-white text-xl font-bold">
          <div className="animate-pulse text-center px-6">Unlocking the gateway to Europe...</div>
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
                      </a>
                      .
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
                      </a>
                      .
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

<div className="w-full flex flex-col lg:flex-row h-auto relative overflow-hidden bg-gradient-to-br from-[#3b2e1a] via-[#5a4725] to-[#7a5f32] p-0 m-0 lg:p-12 lg:m-auto">
  <div className="absolute inset-0 p-0 m-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer pointer-events-none"></div> 
 
        <div className="w-full flex flex-col lg:flex-row h-auto px-[15px] lg:px-0">
          <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-start px-4 lg:px-24 text-white relative mt-[70px]">
            <div
              className="flex flex-col w-[90%] max-w-xl relative"
              style={{
                borderColor: '#E4E0CF',
                backgroundColor: 'transparent',
              }}
            >
              <div className="w-full">
                <h1
                  className="font-bebasneuepro text-[1.5rem] sm:text-[2rem] md:text-[2.2rem] lg:text-4xl font-bold uppercase leading-tight text-white"
                  style={{ fontFamily: "'Bebas Neue Pro', sans-serif" }}
                >
             
                              Access Europe, with Return on Investment
                </h1>

                <h2
                  className="font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wide text-gray-300 mt-2"
                  style={{ lineHeight: '1.2' }}
                >
               Explorer Investments 
                </h2>
                <h3>is Portugal’s #1 Fund Manager</h3>
              </div>

              <div className="mt-6">
    

                <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-6 text-center text-white border-t border-white/10 pt-6">
                  <div className="relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm px-3 py-4 transition-transform hover:scale-[1.02]">
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#b4a77e]">AUM</p>
                    <h3 className="text-2xl sm:text-3xl font-bold tabular-nums">
                      <CountUp start={1.0} end={1.8} duration={2} decimals={1} suffix="BN" />
                    </h3>
                    <span aria-hidden="true" className="absolute inset-x-6 bottom-1 h-px bg-white/10" />
                  </div>

                  <div className="relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm px-3 py-4 transition-transform hover:scale-[1.02]">
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#b4a77e]">Assets</p>
                    <h3 className="text-2xl sm:text-3xl font-bold tabular-nums">
                      <CountUp start={1} end={100} duration={2} suffix="+" />
                    </h3>
                    <span aria-hidden="true" className="absolute inset-x-6 bottom-1 h-px bg-white/10" />
                  </div>

                  <div className="relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm px-3 py-4 transition-transform hover:scale-[1.02]">
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#b4a77e]">Exits</p>
                    <h3 className="text-2xl sm:text-3xl font-bold tabular-nums">
                      <CountUp start={1} end={39} duration={2} />
                    </h3>
                    <span aria-hidden="true" className="absolute inset-x-6 bottom-1 h-px bg-white/10" />
                  </div>
                </div>
              </div>

              <div className="w-full border-t border-b border-white bg-gradient-to-r from-[#59492D] to-[#6B5632] rounded-2xl p-8 mt-8">
          

                       <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                  <span className="relative font-semibold text-white">
                    Explorer Investments 
                    <span aria-hidden="true" className="absolute left-0 -bottom-1 h-[2px] w-full bg-white/80 rounded-sm" />
                  </span>
                  <br />
                  the only major player allowing investors to invest alongside institutions through the
                  country’s most experienced Private Equity platform.
                </p>
              </div>
            </div>
          </div>
        </div>
 
<div
  id="DivAskSimulation"
  className="
    w-full md:w-[98%] lg:w-full
    mx-0 md:mx-auto
    mt-[30px] lg:mt-[60px]
    mb-0 md:mb-[60px] lg:mb-0
    px-0 md:px-8 lg:px-16 md:pb-8 lg:pb-16

    overflow-visible lg:overflow-hidden
    scroll-mt-[72px] md:scroll-mt-[88px]
  "
>






 


          {formstep === 2 && (
            <div className="text-white text-center font-bebasneuepro text-2xl lg:text-3xl font-semibold mt-10 lg:mt-5 lg:mb-5">
              <div>Just one more detail <br /> Unlock Your Golden Visa Today</div>
            </div>
          )}

      

<div
  className={`bg-white rounded-md shadow-sm mx-4 pt-2 px-4 lg:px-12 mb-3 ${
    formstep < 4 && !showCalendly ? 'block' : 'hidden'
  }`}
  style={{ height: 'auto', paddingBottom: '20px' }}
>


          
  {formstep === 1 && (
    <div className="text-left text-neutral-900 mt-[20px]">

    <div className="font-bebasneuepro space-y-1">
      <h2 className="text-xl lg:text-2xl font-semibold leading-snug">
        Portuguese Private Equity
      </h2>

      <p className="text-[11px] lg:text-xs text-neutral-500 tracking-wide uppercase">
        Your Gateway to European Residency
      </p>

 
    </div>
 
  </div>
)}

<div
  className={`w-full ${formstep === 3 ? 'mt-[30px]' : ''}`}
>
  <h2 className="text-sm sm:text-base md:text-lg font-semibold text-left text-[#3D301B] rounded-md">
    {formstep === 1 && (
      <>
        Start Your Investment Consultation
      </>
    )}
    {formstep === 3 && 'Finalize Your Submission'}
  </h2>

  {/* Linha dourada escura */}
<div className="w-full h-[1px] bg-[#3D301B] mt-2 mb-[20px]"></div>

</div>




            <div className={`${formstep === 1 ? 'block' : 'hidden'}`}>
     <div className="space-y-3 sm:space-y-4">

  {/* NAME */}
  <div className="relative group">
    <input
      type="text"
      ref={nomeinp}
      name="name"
      value={formdata.name}
      onChange={validateform}
      placeholder="Name"
      maxLength={100}
      className="w-full h-11 bg-white text-sm sm:text-base rounded-md
                 pl-10 pr-3 appearance-none
                 border border-neutral-300 outline-none
                 focus:border-[#b8912b] focus:ring-2 focus:ring-[#b8912b]/25"
    />
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-[#b8912b]">
      <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
    </span>
  </div>

  {/* EMAIL */}
  <div className="relative group">
    <input
      type="email"
      ref={emailinp}
      name="email"
      value={formdata.email}
      onChange={validateform}
      placeholder="Email"
      maxLength={100}
      className="w-full h-11 bg-white text-sm sm:text-base rounded-md
                 pl-10 pr-3 appearance-none
                 border border-neutral-300 outline-none
                 focus:border-[#b8912b] focus:ring-2 focus:ring-[#b8912b]/25"
    />
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-[#b8912b]">
      <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
    </span>
  </div>

  {/* PHONE */}
  <div className="relative">
<PhoneInput
  country={country}
  value={formdata.phone}
  onChange={(val) => setFormdata({ ...formdata, phone: val })}
  enableLongNumbers
  containerClass="!w-full"
  inputClass="!w-full !h-11 !bg-white !text-sm sm:!text-base !rounded-md
              !pl-[68px] !pr-3 !appearance-none
              !border !border-neutral-300 !outline-none
              focus:!border-[#b8912b] focus:!ring-2 focus:!ring-[#b8912b]/25"
  buttonClass="!h-11 !px-3 !rounded-l-md !border !border-neutral-300 !bg-white"
  dropdownClass="!text-sm"
  inputProps={{ autoComplete: 'tel', name: 'phone' }}
/>

  </div>

  {/* MESSAGE */}
  <div className="relative">
    <textarea
      name="message"
      value={formdata.message}
      ref={messageinp}
      onChange={validateform}
      placeholder="Would you like to leave us any further information?"
      maxLength={500}
      className="w-full bg-white text-sm sm:text-base rounded-md
                 h-28 sm:h-32 px-3 py-3
                 border border-neutral-300 outline-none resize-none
                 focus:border-[#b8912b] focus:ring-2 focus:ring-[#b8912b]/25"
    />
  </div>

</div>


              <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <p className="text-xs lg:text-md text-[#212121]">
                  <strong onClick={() => setShowMoreText(!showMoreText)} style={{ cursor: 'pointer' }}>
                    See Terms and Conditions
                  </strong>
                  <br />
                  {showMoreText && (
                    <div style={{ fontSize: '10px' }} className="lg:text-xs text-gray-600 leading-snug ">
                      <p>
                        I authorize that the data provided here can be used by Explorer Investments Sociedade de Capital
                        de Risco, S.A. - in accordance with its&nbsp;
                        <a href="https://www.explorerinvestments.com/en/privacy-policy/" target="_blank" rel="noreferrer noopener">
                          Privacy Policy
                        </a>
                        &nbsp;and its{' '}
                        <a
                          rel="noreferrer noopener"
                          href="https://www.explorerinvestments.com/en/terms-and-conditions/"
                          target="_blank"
                        >
                          Terms and Conditions
                        </a>{' '}
                        - to know more about its Golden Visa product via email, call and/or sms.
                      </p>
                    </div>
                  )}
                </p>
              </div>
            </div>

            {errorMessage && formstep < 3 && (
              <div className="text-red-500 text-center mb-4 font-semibold text-sm">{errorMessage}</div>
            )}

            <div
              id="DivSucessMessage"
              className={`max-w-[100%] lg:max-w-[100%] mx-auto ${
                formstep > 2 && !showCalendly ? 'block' : 'hidden'
              } text-left font-bebasneuepro text-2xl lg:text-3xl p-[10px]`}
            >
              <div className="text-[#002D3D] text-left">
                <h2 className="text-xl lg:text-2xl font-bold mb-1"> {formdata.name}</h2>
                <p className="text-base font-semibold mb-4">
                  Secure Your Golden Visa With Portugal’s Largest Private Equity Fund
                </p>

                <p className="text-sm lg:text-base mb-4">
                  To move forward, choose a time for your <strong>100% confidential call</strong> with one of our senior
                  advisors.
                </p>

                <button
                  onClick={() => setShowCalendly(true)}
                  className="relative inline-flex items-center justify-center gap-2 bg-[#1B7F37] text-white font-bold text-sm sm:text-base px-6 py-3 rounded-full shadow-lg transition-all duration-300 overflow-visible"
                >
<span className="relative z-10 flex items-center gap-2">
  <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4 animate-icon-shake" />
  Schedule My <br className="block sm:hidden" />
 Call Now
</span>

                </button>

                <p className="text-sm lg:text-base font-semibold mt-4 mb-2">In your call, you'll:</p>
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
                  <img src="/assets/images/logoblue.webp" alt="Explorer Logo" className="w-[120px] h-auto mb-4 mt-[30px]" />
                </a>
              </div>
            </div>

            {formstep < 3 && (
              <div className="flex flex-col items-center space-y-4 pb-4">
{formstep === 1 && (
 <div className="w-full flex flex-col items-center text-center">
   <button
  onClick={senddata}
  disabled={isSubmitting}
  aria-busy={isSubmitting}
  // aria-live não é necessário no botão, podes remover
  className={`group relative w-full px-6 sm:px-8 py-5 sm:py-6 text-lg sm:text-xl font-bold rounded-xl transform
    ${isSubmitting
      // 👉 estado LOADING: nada de pulse, nada de hover/transition
      ? 'bg-gray-300 text-gray-700 cursor-wait pointer-events-none ring-2 ring-gray-300 transition-none'
      // 👉 estado NORMAL: com hover/transition
      : 'bg-[#002741] border border-white hover:brightness-110 text-white hover:scale-[1.02] shadow-[0_12px_30px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-in-out'
    }`}
>
  <div className="w-full flex flex-col items-center justify-center leading-snug sm:leading-tight text-center gap-1 sm:gap-1.5">
    {isSubmitting ? (
      <>
        <span className="inline-flex items-center gap-2 text-base sm:text-lg">
          <span className="inline-block w-5 h-5 border-2 border-gray-700 border-t-transparent rounded-full animate-spin" />
          {formdata.name?.trim()?.split(' ')?.[0] ? `${formdata.name.trim().split(' ')[0]}, ` : ''}
          scheduling your call…
        </span>
        <span className="text-xs text-gray-700/85">Please wait a moment</span>
      </>
    ) : (
      <>
        <span className="inline-flex items-center gap-2 sm:gap-3 tracking-normal leading-tight">
          <span className="relative flex flex-col items-center sm:flex-row sm:items-center">
            <span className="block sm:hidden">
              Schedule My <br /> My Call Now
            </span>
            <span className="hidden sm:inline">Schedule My Call Now</span>
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 sm:ml-2 mt-2 sm:mt-0 text-[#B4A77E] motion-safe:animate-[arrowMove_1.2s_ease-in-out_infinite]"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </span>
      </>
    )}
  </div>

  {/* Mantém a animação da seta; evita piscar do botão */}
  <style jsx>{`
    @keyframes arrowMove {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(6px); }
    }
  `}</style>
</button>


  {/* Texto fora do botão */}
  {!isSubmitting && (
<p className="mt-3 sm:mt-4 text-[11px] sm:text-[12px] text-black/80">
  Takes 30 sec • No obligation
</p>

  )}
</div>


)}


                {formstep === 2 && (
                  <button
                    onClick={submitform}
                    disabled={isSubmitting}
                    className={`relative w-full pl-14 pr-6 py-4 text-xl font-bold rounded-xl shadow-lg transition-transform hover:scale-105 ${
                      isSubmitting ? 'bg-[#B4A77E] text-white cursor-not-allowed' : 'bg-[#1B7F37] text-white hover:bg-[#16a34a]'
                    }`}
                  >
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      {isSubmitting ? (
                        <span className="inline-block w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        <CheckCircleIcon className="w-9 h-9" />
                      )}
                    </div>

                    <div className="w-full text-center leading-tight flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <div>
                          <span className="block text-sm">{formdata.name ? `${formdata.name.split(' ')[0]},` : ''}</span>
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
 
                    <GoogleLoginButton formstep={formstep} onSuccess={handleGoogleResponse} />

                    <div className="my-2"></div>
                  </>
                )}

           

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

            
<div
  className={` mx-4  px-4 lg:px-12  ${
     showCalendly ? 'block' : 'hidden'
  }`}
  style={{ height: 'auto', paddingBottom: '20px' }}
>

            <CalendlyInline name={formdata.name} email={formdata.email} phone={formdata.phone} />

            </div>
          )}
        </div>
      </div>
 
      <Benefits />

 
 
      <Footer />
      
    </>
  );
}

export default App;
