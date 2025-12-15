'use client';
import React, { useEffect, useState, useRef } from 'react';

// Icons
import { Send, X, Loader2, Mail, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

// Phone Input
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'flag-icon-css/css/flag-icons.min.css';

// Lib for phone validation
import { parsePhoneNumber } from 'libphonenumber-js';


 
const modalOptions = [
  {
    image: '/assets/images/andre_2025.jpg',
    title: 'Ready to Build Your Golden Visa Strategy?',
    text: `You’re serious about securing EU residency - let’s turn that into a clear investment plan with Portugal’s #1 private equity fund.`,
    signature: '- André Bandeira, Head of Investor Relations',
    cta: 'Yes, Let’s Plan My Visa Strategy',
  },
  {
    image: '/assets/images/maria_2025.jpg',
    title: 'Still Have Questions About the Golden Visa?',
    text: `A short call can bring total clarity. Get expert insights into fund performance, timelines, and your family’s eligibility.`,
    signature: '- Maria Campos Silva, Investor Relations',
    cta: 'Book My Golden Visa Call',
  },
  {
    image: '/assets/images/team.webp',
    title: 'Your Path to EU Residency Starts Here',
    text: `Join thousands of investors who chose fund-based residency. Let us guide you through your Golden Visa options - step by step.`,
    signature: '- Your Investor Relations Team',
    cta: 'Claim My Personalized Consultation',
  },
];


const firstTimeModal = {
    image: '/assets/images/team.webp',
    title: 'Your Free Golden Visa Call Awaits',
    text: `Take the first step towards EU residency and high-potential returns. Book a complimentary, no-obligation call with Portugal's top investment experts.`,
    signature: 'IR Team: André Bandeira & Maria Campos Silva',
    cta: 'Get My Free Consultation',
};


// --- MAIN COMPONENT: RandomModal ---
function RandomModal() {
    // --- COMPONENT STATE ---
    const [selected, setSelected] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [animateIn, setAnimateIn] = useState(false);
    const initialized = useRef(false);
    const [isConverted, setIsConverted] = useState(false);
    const [formStep, setFormStep] = useState('phone'); // 'phone', 'email', 'success'
    
    // Form State
    const [leadId, setLeadId] =useState(''); // To link the two submissions
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('pt');
    const [message, setMessage] = useState({ type: '', text: '' });
    const [loading, setLoading] = useState(false);

    // --- LOGIC & HANDLERS ---
    useEffect(() => {
        const detectCountry = async () => {
            try {
                const response = await fetch('https://ipinfo.io/json');
                const data = await response.json();
                if (data && data.country) setCountry(data.country.toLowerCase());
            } catch {
                setCountry('pt');
            }
        };
        detectCountry();
    }, []);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const phoneIsValid = () => {
        try { return parsePhoneNumber('+' + phone).isValid(); } catch { return false; }
    };
    
    // NEW: Flexible function to send partial data
    const sendDataToGoogleSheet = async (dataPayload) => {
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbyt9VFGmfU9DBHfdDqhCzn51rYuezLIiLcJvV7i_boxH8h6U4By_nIu2saunr5hqnyv/exec';
        const formData = new FormData();
        
        // Add all properties from the payload to formData
        for (const key in dataPayload) {
            formData.append(key, dataPayload[key]);
        }
        formData.append('stepForm', 'modal_multistep_EN');
        
        try {
            const res = await fetch(scriptUrl, { method: 'POST', body: formData });
            await res.json();
            console.log(`📄 Step data sent to Google Sheet:`, dataPayload);
        } catch (err) {
            console.error('❌ Google Sheet error:', err);
            // Throw error to be caught by the handler
            throw new Error('Failed to send data to Google Sheet');
        }
    };

    const sendConsultationEmail = async () => { /* Unchanged */ };

    // UPDATED: Handler for the first step (phone)
    const handlePhoneSubmit = async (e) => {
        e.preventDefault();
        setMessage({});
        if (!phoneIsValid()) {
            return setMessage({ type: 'error', text: 'Please enter a valid phone number.' });
        }
        
        setLoading(true);
        try {
            const newLeadId = `modal_multistep_${Date.now()}`;
            setLeadId(newLeadId); // Save ID for the next step
            
            // Send ONLY phone and leadId
            await sendDataToGoogleSheet({ leadId: newLeadId, phone });
            
            setFormStep('email'); // Advance to next step on success
        } catch (error) {
             setMessage({ type: 'error', text: 'A submission error occurred. Please try again.' });
        } finally {
            setLoading(false);
        }
    };
    
    // UPDATED: Final submission handler
    const handleFinalSubmit = async (e) => {
        e.preventDefault();
        setMessage({});
        if (!validateEmail(email)) {
            return setMessage({ type: 'error', text: 'Please enter a valid email address.' });
        }
        
        setLoading(true);
        try {
            // Send ONLY email and the existing leadId
            await sendDataToGoogleSheet({ leadId, email });
            
            // Send the complete email to the user
            await sendConsultationEmail();

            setFormStep('success');
            setIsConverted(true);
            setMessage({ type: 'success', text: `Thank you! An expert will contact you shortly. A confirmation has been sent to your email.` });
        } catch (error) {
            setMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setAnimateIn(false);
        setTimeout(() => {
            setShowModal(false);
            setFormStep('phone');
            setEmail('');
            setPhone('');
            setMessage({});
            setLeadId('');
        }, 300);
    };

    useEffect(() => {
        if (initialized.current || isConverted) return;
        initialized.current = true;
        
        const modalViewCount = parseInt(localStorage.getItem('goldenVisaModalViews') || '0', 10);
        let timeoutDuration = modalViewCount === 0 ? 40000 : 30000;
        
        const chosen = modalViewCount === 0 ? firstTimeModal : modalOptions[Math.floor(Math.random() * modalOptions.length)];
        
        const timer = setTimeout(() => {
            setSelected(chosen);
            setShowModal(true);
            setTimeout(() => setAnimateIn(true), 10);
            localStorage.setItem('goldenVisaModalViews', (modalViewCount + 1).toString());
        }, timeoutDuration);

        return () => clearTimeout(timer);
    }, [isConverted]);

    if (!showModal || !selected) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
            <div className={`bg-white rounded-2xl shadow-xl w-full max-w-md sm:w-[95%] mx-auto p-6 text-gray-800 text-center relative transform transition-all duration-300 ease-out ${animateIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600" aria-label="Close"><X size={22} /></button>

                {formStep === 'phone' && (
                    <form onSubmit={handlePhoneSubmit}>
                        <img src={selected.image} alt="Advisor" className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-white shadow-md mb-4" />
                        <h2 className="text-xl lg:text-2xl font-bold mb-2 text-gray-900">{selected.title}</h2>
                        <p className="whitespace-pre-line text-sm text-gray-600 mb-4">{selected.text}</p>
                        <p className="italic text-[#B4A77E] text-sm font-semibold mb-6">Step 1 of 2: Your Phone Number</p>
                        <div className="flex flex-col gap-4 text-left">
                            <PhoneInput country={country} value={phone} onChange={(val) => setPhone(val)} containerClass="w-full" inputClass="!w-full !h-[58px] !pl-[75px] !pr-4 !text-base !rounded-lg !border !border-gray-300 !focus:ring-2 !focus:ring-[#B4A77E] !focus:border-transparent" buttonClass="!h-[58px] !px-3 !border-r-0" searchClass="!z-[60]" />
                            {message.text && <p className="text-red-500 text-sm font-semibold text-center">{message.text}</p>}
                            <button type="submit" disabled={loading} className={`w-full justify-center h-[58px] bg-[#B4A77E] hover:bg-[#a5986a] text-white font-bold px-6 rounded-lg transition-all duration-300 inline-flex items-center gap-3 text-lg disabled:opacity-60 disabled:cursor-not-allowed`}>
                                {loading ? (<><Loader2 size={24} className="animate-spin" /> Saving...</>) : (<>Continue <ArrowRight size={20} /></>)}
                            </button>
                        </div>
                    </form>
                )}
                
                {formStep === 'email' && (
                    <form onSubmit={handleFinalSubmit}>
                        <h2 className="text-xl lg:text-2xl font-bold mb-2 text-gray-900">Great! Just one last step.</h2>
                        <p className="text-sm text-gray-600 mb-6">Step 2 of 2: Your Best Email Address</p>
                        <div className="flex flex-col gap-4 text-left">
                            <div className="relative w-full">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input type="email" placeholder="Your best email" value={email} onChange={(e) => setEmail(e.target.value)} required className="h-[58px] pl-12 pr-4 rounded-lg border border-gray-300 text-base w-full focus:ring-2 focus:ring-[#B4A77E] focus:border-transparent outline-none transition" />
                            </div>
                            {message.text && <p className="text-red-500 text-sm font-semibold text-center">{message.text}</p>}
                            <div className="flex items-center gap-3">
                                <button type="button" onClick={() => setFormStep('phone')} className="h-[58px] bg-gray-200 hover:bg-gray-300 text-gray-700 p-4 rounded-lg transition-all"><ArrowLeft size={20} /></button>
                                <button type="submit" disabled={loading} className={`w-full justify-center h-[58px] bg-[#B4A77E] hover:bg-[#a5986a] text-white font-bold px-6 rounded-lg transition-all duration-300 inline-flex items-center gap-3 text-lg disabled:opacity-60 disabled:cursor-not-allowed`}>
                                    {loading ? (<><Loader2 size={24} className="animate-spin" /> Submitting...</>) : (<><Send size={20} /> {selected.cta}</>)}
                                </button>
                            </div>
                        </div>
                    </form>
                )}

                {formStep === 'success' && (
                     <>
                        <CheckCircle size={52} className="mx-auto text-green-600 mb-4" />
                        <h2 className="text-2xl font-bold mb-3">Thank You!</h2>
                        <p className="text-base mb-6 break-words">{message.text}</p>
                        <button onClick={handleClose} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg">Close</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default RandomModal;