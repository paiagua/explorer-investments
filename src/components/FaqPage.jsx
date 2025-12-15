import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { ChartNoAxesColumnDecreasingIcon } from 'lucide-react';

const faqs = [
  {
    question: "How do I get the Golden Visa in Portugal?",
    answer:
      "You can obtain Portugal’s Golden Visa by investing a minimum of €500,000 in a qualified investment fund. Explorer Investments offers a CMVM-regulated fund with over €1.8B AUM and a proven 20+ year track record."
  },
  {
    question: "How much does the Portugal Golden Visa cost?",
    answer:
      "The base investment is €500,000, with additional legal, government, and processing fees. Explorer’s fund offers full transparency and no hidden charges throughout your investment journey."
  },
  {
    question: "What are the main benefits of Portugal's Golden Visa?",
    answer:
      "The Golden Visa grants EU residency with visa-free travel in 27 countries, minimal stay requirements (just 7 days per year), and full family inclusion - including spouse and dependent children."
  },
  {
    question: "Can I apply for Portuguese citizenship through the Golden Visa?",
    answer:
      "Yes. After holding the Golden Visa for 5 years and meeting basic residency and language requirements, you may apply for Portuguese citizenship and get an EU passport."
  },
  {
    question: "Do I need to live full-time in Portugal?",
    answer:
      "No. You’re only required to spend an average of 7 days per year in Portugal to maintain your Golden Visa status. This flexibility is ideal for global investors."
  },
  {
    question: "What is the Golden Visa investment fund route?",
    answer:
      "Instead of buying property, you can invest in a regulated private equity fund like Explorer’s - the only major fund offering access alongside institutional investors and targeting a 3x return (MOIC)."
  },
  {
    question: "Is the investment safe and regulated?",
    answer:
      "Yes. Explorer Investments is regulated by CMVM (Portuguese Securities Market Commission), offering institutional-grade transparency, audited results, and capital protection policies."
  },
  {
    question: "Can my family get residency through my Golden Visa?",
    answer:
      "Absolutely. Your spouse, dependent children, and even dependent parents can be included in the same application with full residency rights."
  },
  {
    question: "How long does the Golden Visa process take?",
    answer:
      "The process typically takes 3-6 months, depending on how quickly documents are submitted. Explorer’s team helps you at every step to ensure smooth approval."
  },
  {
    question: "What kind of returns can I expect from the investment fund?",
    answer:
      "Explorer targets a 20-25% internal rate of return (IRR) and a 3x multiple on invested capital (MOIC). You’ll invest alongside institutions with full portfolio visibility."
  },
  {
    question: "Why choose a fund over real estate for the Golden Visa?",
    answer:
      "Fund investments are more flexible, require no property management, and come with full CMVM regulation. Explorer’s model also avoids inflated real estate costs."
  },
  {
    question: "How do I start the Golden Visa application?",
    answer:
      "Fill out the consultation form on this page. Our Investor Relations team (André Bandeira & Maria Campos Silva) will contact you to guide your next steps."
  }
];


export default function FaqsGoldenVisa() {
  return (

<div className="w-full bg-[#E4E0CF] pt-10">
  <div className="w-[95%] max-w-[1200px] mx-auto px-4 py-10 text-left">
    <h2 className="text-3xl font-bold text-[#002D3D] mb-8">FAQS Golden Visa</h2>
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <Disclosure key={idx}>
          {({ open }) => (
            <div className="border-b border-gray-300 pb-2">
              <Disclosure.Button className="flex justify-between w-full text-left font-semibold text-[#002D3D] py-3 hover:text-[#B4A77E]">
                <span>{faq.question}</span>
                <ChevronUpIcon
                  className={`w-5 h-5 text-[#002D3D] transition-transform ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="text-sm text-gray-700 mt-1">
                {faq.answer}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  </div>
</div>
  );
}
