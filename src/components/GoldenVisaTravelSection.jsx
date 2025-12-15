import { ArrowRight } from "lucide-react";

import { useRouter } from "next/navigation";



import BlogArticles  from './BlogArticles';
import Link from "next/link";



import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
 
export default function GoldenVisaTravelSection() {
  const schengenCountries = [
    "France", "Germany", "Spain", "Italy", "Belgium", "Netherlands",
    "Austria", "Sweden", "Denmark", "Poland", "Greece", "Finland",
    "Croatia", "Malta", "Estonia", "Latvia", "Czech Republic", "Switzerland",
    "Norway", "Iceland", "Portugal", "Luxembourg", "Slovenia", "Slovakia",
    "Lithuania", "Bulgaria", "Romania", "Liechtenstein", "Hungary"
  ];
const bilateralAgreementCountries = [
  "United Kingdom",
  "United States",
  "Canada",
  "Japan",
  "South Korea",
  "United Arab Emirates",
  "Macau"
];
  const lusophoneCountries = [
    "Angola", "Mozambique", "Cape Verde", "Guinea-Bissau", "São Tomé and Príncipe",
    "Equatorial Guinea", "Brazil"
  ];

  const getFlagUrl = (countryName) => {
    const codeMap = {
      "France": "fr", "Germany": "de", "Spain": "es", "Italy": "it", "Belgium": "be",
      "Netherlands": "nl", "Austria": "at", "Sweden": "se", "Denmark": "dk", "Poland": "pl",
      "Greece": "gr", "Finland": "fi", "Croatia": "hr", "Malta": "mt", "Estonia": "ee",
      "Latvia": "lv", "Czech Republic": "cz", "Switzerland": "ch", "Norway": "no",
      "Iceland": "is", "Portugal": "pt", "Luxembourg": "lu", "Slovenia": "si",
      "Slovakia": "sk", "Lithuania": "lt", "Bulgaria": "bg", "Romania": "ro",
      "Liechtenstein": "li", "Hungary": "hu",
      "Angola": "ao", "Mozambique": "mz", "Cape Verde": "cv", "Guinea-Bissau": "gw",
      "São Tomé and Príncipe": "st", "Equatorial Guinea": "gq", "Brazil": "br","United Kingdom": "gb", "United States": "us", "Canada": "ca",
"Japan": "jp", "South Korea": "kr", "United Arab Emirates": "ae",
"Macau": "mo"
    };
    const code = codeMap[countryName];
    return code ? `https://flagcdn.com/w40/${code}.png` : null;
  };

  return (
    
<div className="w-full bg-[#F1EFE7] py-16 pt-[30px]">

      <div className="max-w-screen-xl mx-auto w-[90%] lg:w-[1200px]">
        <h2 className="text-left text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          <span className="text-[#B4A77E] block mb-2">Travel Europe. Connect with the Lusophone World</span>
       One investment. Unlimited mobility. 
        </h2>

        <p className="text-left text-gray-700 text-lg mb-8 max-w-3xl ">
  The Portugal Golden Visa grants you access to Europe’s Schengen Zone, strategic ties with Lusophone countries, and global bilateral partners.


        </p>

        <Accordion type="single" collapsible className="mb-12">
          <AccordionItem value="schengen">
<AccordionTrigger className="text-xl font-semibold text-[#002741] text-left w-full break-words">
Visa-Free Travel Across Europe</AccordionTrigger>
            <AccordionContent>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-700 text-left">
                {schengenCountries.map((country, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    {getFlagUrl(country) && (
                      <img
                        src={getFlagUrl(country)}
                        alt={country + ' flag'}
                        className="w-6 h-4 object-cover"
                      />
                    )}
                    <span className="text-left">{country}</span>
                  </div>
                ))}
              </div>
          
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="lusophone">
<AccordionTrigger className="text-xl font-semibold text-[#002741] text-left w-full break-words">
Strategic Access to Portuguese-Speaking Countries</AccordionTrigger>
            <AccordionContent>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-700 text-left">
                {lusophoneCountries.map((country, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    {getFlagUrl(country) && (
                      <img
                        src={getFlagUrl(country)}
                        alt={country + ' flag'}
                        className="w-6 h-4 object-cover"
                      />
                    )}
                    <span className="text-left">{country}</span>
                  </div>
                ))}
              </div>
        
            </AccordionContent>
          </AccordionItem>
<AccordionItem value="bilateral">
<AccordionTrigger className="text-xl font-semibold text-[#002741] text-left w-full break-words">
Key Bilateral Partnerships</AccordionTrigger>
  <AccordionContent>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-700 text-left">
      {bilateralAgreementCountries.map((country, idx) => (
        <div key={idx} className="flex items-center gap-2">
          {getFlagUrl(country) && (
            <img
              src={getFlagUrl(country)}
              alt={country + ' flag'}
              className="w-6 h-4 object-cover"
            />
          )}
          <span className="text-left">{country}</span>
        </div>
      ))}
    </div>
 
  </AccordionContent>
</AccordionItem>

      
        </Accordion>

           <p className="text-left text-gray-700 text-lg mb-8 max-w-3xl  ">
With one of the highest English proficiency rates in Europe, Portugal ensures smooth communication for business, education, and daily life.</p>
      </div>
    </div>
  );
}