'use client'; // <-- ISTO É CRUCIAL. ESTE É O CLIENT COMPONENT

import React, { useEffect, useRef, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { MessageCircle } from "lucide-react";
import GoogleLoginButton from '@/components/GoogleLoginButton';
import { CalendarDaysIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'flag-icon-css/css/flag-icons.min.css';
import { faCalendarAlt, faUser, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InlineWidget } from "react-calendly";
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from "lucide-react";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import useUserTimezone from '@/components/useUserTimezone';
export const dynamic = 'force-dynamic';
// NOTA: Removi o <Header>, <Footer>, <Benefits> e <AndreFloatingHelpPortal> daqui.
// Eles devem pertencer ao layout (no page.js) ou ser componentes separados.
// Este ficheiro deve conter APENAS a lógica do formulário.

// ... (Copie TODA a lógica do seu 'app.js' para aqui) ...
// ... (sendGoldenVisaEmail1stStep, sendGoldenVisaEmail2stStep, etc...) ...

// Vou colar apenas a função App() e o JSX relevante do formulário
// para manter a resposta curta. Cole o resto das suas funções aqui.

function GoldenVisaForm() {
  
  // ... (Cole aqui todas as suas funções: sendGoldenVisaEmail1stStep, sendGoldenVisaEmail2stStep, sendNewLeadAlertEmail, etc.) ...
  // ... (Cole aqui todos os seus useState, useEffects, refs, etc.) ...
  
  // (Omiti as funções de envio de email, etc. por brevidade)
  // (Certifique-se de que as importa/cola aqui)

   const [formstep, setFormstep] = useState(1);
   const [formdata, setFormdata] = useState({
     petage: '',
     name: '',
     email: '',
     phone: ''
   });
   const [ageValue, setAgeValue] = useState(0);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');
   const [sessionValue, setSessionValue] = useState(null);
   const [country, setCountry] = useState('us');
   const [showCalendly, setShowCalendly] = useState(false);
   const timezone = useUserTimezone();
   const nomeinp = useRef();
   const emailinp = useRef();

   // ... (Cole o resto dos seus hooks e funções que estão no app.js) ...

   // Funções de exemplo que você precisa colar
  const sendGoldenVisaEmail1stStep = async ({ name, email, investment }) => { console.log('Simulando envio 1...', name, email); };
  const sendGoldenVisaEmail2stStep = async ({ name, email, phone, investment, timezone }) => { console.log('Simulando envio 2...', name, email); };
  const sendNewLeadAlertEmail = async (data) => { console.log('Simulando alerta de lead...', data.leadName); };
  const sendDataToGoogleSheet = async (data) => { console.log('Simulando envio Google Sheet...', data.name, data.stepForm); return { success: true }; };
  const getIPAddress = async () => '127.0.0.1';
  const getGeoLocation = async () => 'Local, Unknown';
  const checkemail = (inp) => inp.current?.value.includes('@') || false;
  const phoneIsValid = () => formdata.phone ? isValidPhoneNumber('+' + formdata.phone) : false;
  const getpetage = (newValue) => {
    switch (newValue) {
      case 0: return "I'm not sure yet - I need expert advice";
      case 1: return "Less than €500K (Not eligible for Golden Visa)";
      case 2: return "Between €500K and €1M";
      case 3: return "Between €1M and €2M";
      case 4: return "Between €2M and €5M";
      case 5: return "More than €5M";
      default: return "I'm not sure yet";
    }
  };
  const scrollToTop = () => { /* ... */ };
  const handleSelectChange = (e) => {
    const selectedValue = Number(e.target.value);
    setAgeValue(selectedValue);
    setFormdata((prevData) => ({
      ...prevData,
      petage: getpetage(selectedValue),
    }));
  };
  const validateform = (e) => {
    setFormdata(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const isFormValid = () => {
    const nameFilled = formdata.name.trim() !== '';
    const emailValid = checkemail(emailinp);
    if (!formdata.petage) { setErrorMessage("Please select your investment amount."); return false; }
    if (!nameFilled) { setErrorMessage('Tell us your name so we can contact you.'); return false; }
    if (!emailValid) { setErrorMessage('Please enter a valid email address.'); return false; }
    setErrorMessage('');
    return true;
  };
  const senddata = async () => { /* ... (cole a sua lógica) ... */ setFormstep(2); console.log("Form step 1 submitted"); };
  const submitform = async () => { /* ... (cole a sua lógica) ... */ setFormstep(3); console.log("Form step 2 submitted"); };
  const handleGoogleResponse = async (response) => { /* ... (cole a sua lógica) ... */ setFormstep(2); console.log("Google login submitted"); };
  // ... (Cole TODOS os seus useEffects)
  useEffect(() => {
    let value = sessionStorage.getItem('user_session');
    if (!value) {
      value = `session_${Date.now()}`;
      sessionStorage.setItem('user_session', value);
    }
    setSessionValue(value);
  }, []);


  return (
    // Esta secção é o seu formulário.
    // O ID "DivAskSimulation" é importante se o seu "scrollToTop" o usar.
    <section id="DivAskSimulation" className="bg-gray-100 py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <AnimatePresence mode="wait">
          
          {/* PASSO 1: Coletar Email/Nome */}
          {formstep === 1 && (
            <motion.div key="step1" /*... (as suas props de motion) ...*/>
              <h2 className="text-2xl font-bold text-[#002D3D] mb-4">Start Your Golden Visa Journey</h2>
              <p className="text-gray-600 mb-6">Get expert advice from Portugal's leading private equity firm.</p>

              {/* O seu GoogleLoginButton */}
              <GoogleLoginButton onGoogleResponse={handleGoogleResponse} isSubmitting={isSubmitting} />
              <div className="my-4 text-center text-gray-500">or</div>

              {/* O seu formulário manual */}
              <div className="space-y-4">
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="investment-label">Investment Amount</InputLabel>
                  <Select
                    labelId="investment-label"
                    value={ageValue}
                    onChange={handleSelectChange}
                    label="Investment Amount"
                  >
                    <MenuItem value={0}>I'm not sure yet</MenuItem>
                    <MenuItem value={1}>Less than €500K</MenuItem>
                    <MenuItem value={2}>Between €500K - €1M</MenuItem>
                    <MenuItem value={3}>Between €1M - €2M</MenuItem>
                    <MenuItem value={4}>Between €2M - €5M</MenuItem>
                    <MenuItem value={5}>More than €5M</MenuItem>
                  </Select>
                </FormControl>
                <div>
                  <input ref={nomeinp} name="name" type="text" placeholder="Full Name" onChange={validateform} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                  <input ref={emailinp} name="email" type="email" placeholder="Email Address" onChange={validateform} className="w-full p-3 border rounded-md" />
                </div>
                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                <button onClick={senddata} disabled={isSubmitting} className="w-full bg-[#B4A77E] text-white p-4 rounded-md font-bold">
                  {isSubmitting ? 'Sending...' : 'Next Step'}
                </button>
              </div>
            </motion.div>
          )}

          {/* PASSO 2: Coletar Telefone */}
          {formstep === 2 && (
            <motion.div key="step2" /*... (as suas props de motion) ...*/>
              <h2 className="text-2xl font-bold text-[#002D3D] mb-4">Just one more step...</h2>
              <p className="text-gray-600 mb-6">Please provide your phone number so our team can connect with you.</p>
              <PhoneInput
                country={country}
                value={formdata.phone}
                onChange={(phone) => setFormdata(prev => ({...prev, phone}))}
                // ... (suas outras props do PhoneInput)
              />
              {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
              <button onClick={submitform} disabled={isSubmitting} className="w-full bg-[#B4A77E] text-white p-4 rounded-md font-bold mt-4">
                {isSubmitting ? 'Saving...' : 'Book Your Call'}
              </button>
            </motion.div>
          )}

          {/* PASSO 3: Calendly */}
          {formstep === 3 && (
            <motion.div key="step3" /*... (as suas props de motion) ...*/>
              <h2 className="text-2xl font-bold text-[#002D3D] mb-4">Thank You!</h2>
              <p className="text-gray-600 mb-6">Please choose a time below for your complimentary consultation.</p>
              <InlineWidget
                url={`https://calendly.com/mcs-3i-a/explorer-v?name=${encodeURIComponent(formdata.name)}&email=${encodeURIComponent(formdata.email)}&timezone=${encodeURIComponent(timezone)}`}
                styles={{ height: "700px" }}
              />
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}

export default GoldenVisaForm;