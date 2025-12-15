'use client';
import { useState, useEffect } from 'react';
import { Download, Loader2, Mail } from 'lucide-react';

import { useRouter } from "next/navigation";



import BlogArticles  from './BlogArticles';
import Link from "next/link";



import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'flag-icon-css/css/flag-icons.min.css';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';

const GoldenVisaGuideForm = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('pt');
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();
        setCountry(data.country.toLowerCase());
      } catch {
        setCountry('pt');
      }
    };
    detectCountry();
  }, []);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const phoneIsValid = () => {
    try {
      const phoneNumber = parsePhoneNumber('+' + phone);
      return phoneNumber.isValid();
    } catch {
      return false;
    }
  };

  const sendDataToGoogleSheet = async () => {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyt9VFGmfU9DBHfdDqhCzn51rYuezLIiLcJvV7i_boxH8h6U4By_nIu2saunr5hqnyv/exec';
    const formData = new FormData();
    formData.append('leadId', `guide_${Date.now()}`);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('stepForm', 'guide');

    try {
      const res = await fetch(scriptUrl, {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();
      console.log('📄 Sent to Google Sheet:', result);
    } catch (err) {
      console.error('❌ Google Sheet error:', err);
    }
  };

  const sendDownloadEmail = async () => {
    const html = `
      <p>Hi,</p>
      <p>Thank you for your interest in the Golden Visa Guide 2025.</p>
      <p>You can access the full set of updated rules, eligibility criteria, and investment insights using the link below:</p>
      <p><a href="https://goldenvisashub.com/how-to-get-a-golden-visa-portugal-2025" target="_blank">Access Guide</a></p>
      <p>If you have any questions or would like to explore your options in more detail, feel free to visit our official site:<br />
      <a href="https://goldenvisashub.com/" target="_blank">goldenvisashub.com</a></p>
      <p>You’re also very welcome to book a no-obligation call directly through our website - we’ll be happy to assist you.</p>
      <p>Kind regards,<br><strong>Joana</strong><br>Investor Support - Explorer</p>
    `;

    try {
      const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const res = await fetch(`https://goldenvisashub.com/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: email,
          subject: 'Your Golden Visa Guide 2025',
          html,
        }),
      });
      const data = await res.json();
      console.log('📨 Email sent:', data);
    } catch (error) {
      console.error('❌ Email error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }
    if (!phoneIsValid()) {
      setMessage({ type: 'error', text: 'Please enter a valid phone number.' });
      return;
    }

    setLoading(true);
    setMessage({});

    try {
      await sendDownloadEmail();
      await sendDataToGoogleSheet();
      setSubmitted(true);
      setMessage({
        type: 'success',
        text: ` Your Golden Visa Guide 2025 has just landed in your inbox (${email}). Check your email to access the full investment insights and next steps towards EU residency!`
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#F1EFE7] py-10 lg:py-20 px-6 lg:px-16 flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between gap-6 text-[#002741]">
        <div className="flex-1 text-left">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">
            Download the <span className="text-[#B4A77E]">Golden Visa Guide 2025</span> - Free
          </h2>
          <p className="text-base lg:text-lg">
            Get your complete, <strong>free</strong> guide to the Portuguese Golden Visa. Learn how to invest with confidence through <strong>Explorer Investments</strong>, the country's largest private equity fund.
          </p>
        </div>

        <div className="flex-shrink-0 w-full lg:w-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="relative w-full">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-11 pr-4 py-3 rounded-lg border border-gray-300 text-base w-full"
                />
              </div>
              <PhoneInput
                country={country}
                value={phone}
                onChange={(val) => setPhone(val)}
                inputClass="!w-full !py-[12px] !pl-[75px] !pr-4 !text-base !rounded-lg !border !border-gray-300"
                containerClass="!w-full"
                buttonClass="!p-3"
                inputProps={{ autoComplete: 'tel' }}
              />
              {message.text && (
                <p className={`${message.type === 'error' ? 'text-red-500' : 'text-green-700'} text-sm font-semibold`}>
                  {message.text}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className={`bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-lg px-8 py-4 rounded-full transition inline-flex items-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <Download size={20} />
                    Download the Guide
                  </>
                )}
              </button>
            </form>
          ) : (
            <p className="text-green-700 font-semibold text-base max-w-md w-full break-words text-left">
              {message.text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoldenVisaGuideForm;