import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const faqs = [
  {
    question: "What is the Portugal Golden Visa?",
    answer:
      "It’s a residency-by-investment program that allows non-EU citizens to live, work, and travel freely within the Schengen Area by investing in Portugal.",
  },
  {
    question: "How can I get the Golden Visa through a fund investment?",
    answer:
      "You qualify by investing a minimum of €500,000 in a regulated investment fund. Explorer Investments offers access to one of Portugal’s leading private equity funds.",
  },
  {
    question: "What is the minimum investment amount?",
    answer:
      "The legal minimum is €500,000 in a qualified Portuguese investment fund.",
  },
  {
    question: "How long does the Golden Visa process take?",
    answer:
      "It typically takes between 3 to 6 months, depending on documentation and SEF processing times.",
  },
  {
    question: "What returns can I expect from the investment?",
    answer:
      "Explorer targets 20%-25% IRR and a 3x MOIC, with a strong track record and institutional investment strategy.",
  },
  {
    question: "Do I need to live in Portugal full-time?",
    answer:
      "No. You’re only required to spend 7 days per year in Portugal to maintain your residency.",
  },
  {
    question: "Can I include my family in the application?",
    answer:
      "Yes. Your spouse, dependent children, and dependent parents can be included in the same application.",
  },
  {
    question: "When can I apply for Portuguese citizenship?",
    answer:
      "After 5 years of legal residency, you can apply for citizenship if you meet the basic requirements.",
  },
  {
    question: "Is my investment secure?",
    answer:
      "Yes. Explorer is regulated by the CMVM (Portuguese Securities Market Commission) and offers full transparency to investors.",
  },
  {
    question: "Will I be taxed in Portugal?",
    answer:
      "It depends on your tax residency status. You may benefit from exemptions.",
  },
  {
    question: "Why choose Explorer Investments?",
    answer:
      "Portugal’s largest private equity firm with €1.8B AUM, 20+ years of performance, and exclusive access for Golden Visa investors.",
  },
  {
    question: "How do I start the application?",
    answer:
      "Fill out the form on our website to book a free consultation with our Investor Relations team.",
  },
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
