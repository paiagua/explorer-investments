import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  LineChart, ShieldCheck, CalendarClock, Flag, Globe, Info, Euro,
  BriefcaseBusiness, Microscope, Landmark, Users, FileText, Gavel,
  Plane, TrendingUp, Banknote, ThumbsUp, UserCheck, ClipboardList,
  GraduationCap, BadgeCheck, UserPlus, Send, FileCheck, Play, Wallet,
  IdCard, // <-- CORRIGIDO AQUI
  ScrollText, PartyPopper, Scale, CheckCircle, XCircle, Building,
  HeartHandshake, Fingerprint, PenSquare, MessageCircle
} from "lucide-react";
import { useRouter } from "next/navigation";
// Helper component for styled notes like "Also read:"
const AsideNote = ({ children }) => (
  <aside className="p-4 my-4 bg-blue-50 border-l-4 border-[#B4A77E] text-sm text-[#002741]">
    <p className="italic">{children}</p>
  </aside>
);

// Helper component for CTA sections
const CallToAction = ({ scrollToTop }) => (
  <div className="my-12 p-6 bg-[#E4E0CF] rounded-lg text-center shadow-md">
    <h3 className="text-xl font-bold text-[#002D3D]">Get Your Personalized Golden Visa Cost Report</h3>
    <p className="text-[#002D3D] my-2">Receive a complete and exclusive PDF in your inbox-tailored to your profile, with a breakdown of costs and next steps.</p>
   <Link
      href="/"
      className="mt-3 inline-flex items-center gap-2 bg-[#002741] text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-[#004166] transition duration-300"
    >
      <FileCheck size={16} strokeWidth={2} /> Get My Personalized PDF
    </Link>
  </div>
);

const GoldenVisaGuide = () => {
  const scrollToTop = () => {
    // This assumes you have a div with id="DivAskSimulation" at the top of your page or where the form is.
    const element = document.getElementById("DivAskSimulation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section id="GoldenVisaGuide2025" className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Section 1: What is the Portugal Golden Visa? */}
          <motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-left">
              What is the Portugal Golden Visa?
            </h1>
            <div className="space-y-5 text-base leading-relaxed">
              <p>The Portugal Golden Visa is one of the most effective and attractive residency-by-investment programs in the world. Launched in 2012, the program has granted legal residency to nearly 13,000 investors and their respective families, generating over €7 billion in investment for the country.</p>
              <p>In 2025, the Portugal Golden Visa continues to offer a fast track to European residency and citizenship through secure investment options, such as private equity funds, cultural donations, and job creation. The program is particularly appealing to individuals and families seeking greater global mobility, long-term stability, and financial diversification in the European Union.</p>
              <p>With minimal stay requirements, flexible investment routes, and the possibility of acquiring Portuguese citizenship after just five years, the Portugal Golden Visa remains a top choice among American, Brazilian, British, Turkish, South African, and Chinese investors.</p>
            </div>
            <CallToAction scrollToTop={scrollToTop} />
          </motion.div>

          {/* Section 2: Why Choose the Portugal Golden Visa? */}
          <motion.div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-left">
              Why Choose the Portugal Golden Visa?
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { icon: <Flag />, text: "One of the shortest timelines to EU citizenship or permanent residency (just 5 years)." },
                { icon: <CalendarClock />, text: "No need to relocate - only 14 days in Portugal in the first 2 years and 21 days in the following 3 years." },
                { icon: <Plane />, text: "Visa-free travel across 29 Schengen countries." },
                { icon: <BriefcaseBusiness />, text: "Allows you and your family the right to live, work, retire, and study in Portugal, with access to some of the best international schools in Portugal." },
                { icon: <Users />, text: "Full family inclusion (spouse, children, parents)." },
                { icon: <ShieldCheck />, text: "Dual citizenship permitted." },
                { icon: <TrendingUp />, text: "Multiple investment options, starting from €250,000." },
                { icon: <Banknote />, text: "Tax advantages for new residents, including special benefits for Golden Visa investors." },
                { icon: <GraduationCap />, text: "Free access to public healthcare and education." },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-[#B4A77E] mt-1">{React.cloneElement(item.icon, { size: 20 })}</div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
             <div className="space-y-5 text-base leading-relaxed">
                <p>The Portugal Golden Visa is more than just legal residency-it's a strategy for future generations, combining quality of life, political stability, and global access in a single program.</p>
                <AsideNote>Also read: Portugal was chosen as the best country in the world to retire.</AsideNote>
                
                <h3 className="text-xl font-semibold pt-4">Ideal for Global Investors and Their Families</h3>
                <p>The Portugal Golden Visa has become the preferred residency-by-investment solution for individuals and families worldwide who seek flexibility, security, and global mobility-often wondering: what is it like to live in Portugal?</p>
                <p>While investors from the United States currently lead in the number of applications, strong interest also comes from Brazil, Canada, the United Kingdom, Turkey, China, and South Africa. These applicants are often motivated by growing political and economic uncertainty in their home countries, as well as the opportunity to secure EU citizenship for future generations.</p>
                <AsideNote>Also read: Compared to other visa alternatives like D2, D7, and D8, this is the biggest advantage of the Golden Visa. Which is the right visa for you to choose?</AsideNote>
                <p>The Portugal Golden Visa offers a highly secure legal framework, a predictable application process, and one of the few programs that does not require full relocation. Families benefit from access to public healthcare, top international schools, and the ability to live, work, and study in Portugal-or simply maintain residency without the need to move.</p>
                 <AsideNote>Also read: What are the benefits of the Portugal Golden Visa?</AsideNote>
                <p>For many global investors, the Portugal Golden Visa is a reliable Plan B-and a strategic way to protect wealth, preserve family mobility, and obtain EU citizenship through a trusted and established path.</p>
                <AsideNote>Also read: Why you need a Plan B in today's unpredictable world.</AsideNote>
                <p className="font-semibold pt-4">Portugal is one of the freest countries in the world and also has one of the most powerful passports in the world.</p>
             </div>
             <CallToAction scrollToTop={scrollToTop} />
          </motion.div>

          {/* Section 3: Eligibility Requirements */}
          <motion.div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-left">
              Eligibility Requirements for the Portugal Golden Visa
            </h2>
            <p className="mb-6">To qualify for the Portugal Golden Visa, applicants must meet specific legal, financial, and documentation requirements. The program is open to a wide range of investors, offering an accessible and efficient path to EU residency.</p>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><UserCheck /> Nationality and Age</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You must be a non-EU, non-EEA, and non-Swiss citizen.</li>
                  <li>The main applicant must be at least 18 years old at the time of application.</li>
                </ul>
                <AsideNote>British citizens are eligible after Brexit - Also read: Is the Portugal Golden Visa a good option for British investors?</AsideNote>
              </div>
              <div>
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Users /> Family Members You Can Include</h3>
                 <p>Under the Portugal Golden Visa, you can include the following family members in your application:</p>
                 <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Spouse or legal partner (including same-sex and de facto unions lasting more than 2 years).</li>
                  <li>Children under 18 years of age, or if over 18, they must be single, studying, and financially dependent on the applicant.</li>
                  <li>Parents over 65 years of age, or under 65 if they are financially dependent on the applicant.</li>
                </ul>
              </div>
               <div>
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Gavel /> Criminal and Immigration Record</h3>
                 <ul className="list-disc pl-6 space-y-2">
                  <li>You must have a clean criminal record in both your country of residence and Portugal.</li>
                  <li>You cannot have been flagged by Schengen Immigration Systems (SIS) for entry restrictions.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Banknote /> Proof of Investment and Funds</h3>
                 <ul className="list-disc pl-6 space-y-2">
                  <li>You must invest in an eligible route from €250,000. Eligible alternatives include private equity funds, a donation to research, or a cultural project, and you must maintain the investment for at least five years.</li>
                  <li>The funds must come from legitimate sources, and you must provide clear proof of origin.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Building /> Portuguese Tax Identification Number and Bank Account</h3>
                 <ul className="list-disc pl-6 space-y-2">
                  <li>You must obtain a Portuguese Tax Identification Number (NIF).</li>
                  <li>Opening a bank account in Portugal is required before making the investment.</li>
                </ul>
                 <AsideNote>Also read: How can we help you get a Tax Identification Number (NIF) and a Bank Account in Portugal?</AsideNote>
              </div>
               <div>
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><FileText /> Documentation Requirements</h3>
                <p>All documents issued outside of Portugal must be legalized with an apostille or authenticated by the Portuguese Consulate/Embassy and, when not in English, French, or Spanish, translated into Portuguese. The main documents required include:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Copy of passport</li>
                    <li>Criminal record certificate</li>
                    <li>Proof of residence</li>
                    <li>Marriage or birth certificates (for family inclusion)</li>
                    <li>Bank confirmation of funds transfer</li>
                    <li>Declaration from the fund manager confirming the investment</li>
                    <li>Health insurance valid in Portugal or internationally</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Investment Options */}
      <section className="bg-[#F9F9FC] py-16 px-4">
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#002D3D] text-left mb-4">
            Investment Options for the Portugal Golden Visa
          </h2>
          <p className="mb-10 text-gray-700">To qualify for the program, applicants must make a qualifying investment and maintain it for at least five years. As real estate or capital transfers for deposits or government bond purchases are no longer eligible, Portugal now offers a diverse set of investment routes tailored to different investor profiles. Below are the officially recognized investment options:</p>
          <div className="space-y-12">
            <div>
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-3"><Wallet /> 1. Investment Funds</h3>
                <p className="font-semibold text-lg text-[#B4A77E]">Minimum Investment: €500,000</p>
                <p className="my-3 font-semibold">Most Popular Route in 2025 - Almost all Golden Visa applicants choose this option.</p>
                <p className="my-3">Since real estate investments were removed as a qualifying option, Eligible Investment Funds have gained prominence, especially Private Equity Funds, now a central choice for many. Introduced in 2017 as an eligible option for the Golden Visa, Investment Funds now account for almost 100% of all applications. American investors have shown significant interest in this option from the beginning.</p>
                <p className="my-3">The Explorer Investments team uses its expertise to guide investors through the complexities of investment funds, ensuring a seamless experience.</p>
                <div className="mt-6 p-6 border-l-4 border-gray-300 bg-white rounded-r-lg">
                    <h4 className="font-semibold text-xl">Benefits of Eligible Investment Funds:</h4>
                    <ul className="list-disc pl-6 mt-4 space-y-3">
                        <li><strong>Diversification:</strong> Funds are composed of a diverse set of assets, and investors can spread their capital across several qualified funds.</li>
                        <li><strong>Expert Management:</strong> Managed by industry experts, these funds often generate higher returns than individual investments.</li>
                        <li><strong>Tax Incentives:</strong> Income from these funds is tax-exempt for non-residents, except for those residing in tax haven countries that do not have double taxation treaties with Portugal.</li>
                        <li><strong>Regulatory Oversight:</strong> The Securities Market Commission (CMVM) provides strict regulation, ensuring a high level of protection and transparency, and making sure that Private Equity Funds adhere to European financial standards.</li>
                        <li><strong>Annual Audits:</strong> External auditors, primarily from major firms, review these funds to ensure credibility.</li>
                    </ul>
                </div>
                <AsideNote>Also read: What are the conditions for a fund to be eligible for Golden Visa purposes?</AsideNote>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-3"><Microscope /> 2. Donation for Scientific Research</h3>
              <p className="font-semibold text-lg text-[#B4A77E]">Minimum Investment: €500,000</p>
              <p className="my-3">Support for public or private scientific research institutions integrated into the national scientific and technological system.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-3"><Landmark /> 3. Donation for Cultural Heritage or Artistic Projects</h3>
              <p className="font-semibold text-lg text-[#B4A77E]">Minimum Amount: €250,000 <span className="text-gray-600 font-normal">(reduced to €200,000 in a low-density area)</span></p>
              <p className="my-3">Support for Portuguese cultural institutions, art restoration projects, or national heritage conservation. This is the lowest-cost route to access the Portugal Golden Visa-but it is non-refundable.</p>
              <h4 className="font-semibold mt-4">Eligible Beneficiaries:</h4>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Public art museums and institutions</li>
                  <li>Historical preservation programs</li>
                  <li>Music, cinema, or performing arts</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-3"><BriefcaseBusiness /> 4. Job Creation Through Company Formation</h3>
              <p className="font-semibold text-lg text-[#B4A77E]">Minimum Investment: €500,000</p>
              <p className="my-3">Create a new company headquartered in Portugal and generate at least 5 jobs for a minimum period of 3 years, or increase the share capital of an existing company, creating at least 5 jobs or maintaining 10 jobs for 3 years.</p>
              <h4 className="font-semibold mt-4">Alternatively:</h4>
              <p className="my-3">Directly create 10 full-time jobs in an existing company for a minimum period of three years (no minimum investment limit set) or 8 jobs in a lower-density area.</p>
              <div className="mt-4 p-4 border border-gray-200 bg-white rounded-lg">
                <h4 className="font-semibold">Notes:</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-sm">
                    <li>The company must remain active and the jobs must be maintained for at least 3 consecutive years.</li>
                    <li>Offers more control and operational engagement for entrepreneurs.</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4 text-[#002D3D]">Quick Comparison Table</h3>
              <div className="grid grid-cols-5 gap-4 text-center p-2 bg-[#002D3D] text-white font-semibold rounded-t-lg text-sm">
                <div>Investment Type</div><div>Minimum</div><div>Refundable</div><div>Risk Level</div><div>Popularity</div>
              </div>
              <div className="grid grid-cols-5 gap-4 text-center p-4 bg-white border-x border-b rounded-b-lg items-center">
                <div>Investment Funds</div><div>€500,000</div><div><CheckCircle className="mx-auto text-green-600"/></div><div>Medium/High</div><div>🔝 High</div>
                <div>Scientific Research</div><div>€500,000</div><div><XCircle className="mx-auto text-red-600"/></div><div>Low</div><div>Low</div>
                <div>Cultural Donation</div><div>€250,000</div><div><XCircle className="mx-auto text-red-600"/></div><div>Low</div><div>Low</div>
                <div>Job Creation</div><div>€500,000</div><div><CheckCircle className="mx-auto text-green-600"/>*</div><div>High</div><div>Low</div>
              </div>
              <p className="text-xs mt-2 text-right">*Only if the business becomes profitable or is sold in the future.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 5: Step-by-Step Application Process */}
      <section className="bg-white py-16 px-4">
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#002D3D] mb-4">Step-by-Step: How to Apply for the Portugal Golden Visa</h2>
          <p className="mb-10 text-gray-700">Applying for the Portugal Golden Visa involves several steps, most of which can be completed remotely. Below, you will find a clear breakdown of the process, from preparing documentation to receiving your residence card.</p>
          <ol className="space-y-8">
              <li>
                  <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><HeartHandshake /> 1. Onboarding of Applicants and Their Families</h3>
                  <p>The consultant and lawyer designated by Explorer Investments will clearly explain all questions regarding the legal context, the specifics of Portugal, the Golden Visa process, and the investment options.</p>
              </li>
              <li>
                  <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><ScrollText /> 2. Gather the Necessary Documents</h3>
                  <p>Start by gathering all necessary documents, for both the main applicant and family members. They include:</p>
                  <ul className="list-disc pl-8 mt-2 space-y-1 text-sm bg-gray-50 p-4 rounded-md">
                      <li>Visa application form.</li>
                      <li>Copy of passport.</li>
                      <li>Proof of residence.</li>
                      <li>Valid criminal record certificate.</li>
                      <li>Permission from the applicant for AIMA (Agency for Integration, Migration, and Asylum) to check the Portuguese criminal record, included in the application form.</li>
                      <li>Marriage certificate, if including a spouse/partner.</li>
                      <li>Birth certificates, if including children.</li>
                      <li>A declaration from a Portuguese bank, confirming the transfer of funds.</li>
                      <li>A sworn statement confirming compliance with the minimum investment requirement for a period of 5 years.</li>
                      <li>Proof of student enrollment if dependents are over 18 years of age.</li>
                      <li>Proof of investment, i.e., a declaration from the fund management company.</li>
                      <li>Confirmation of health coverage, whether in Portugal or through an insurer with international coverage.</li>
                      <li>Receipt of payment of the application fee.</li>
                  </ul>
              </li>
              <li>
                  <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><IdCard /> 3. Obtain a Portuguese Tax Identification Number (NIF)</h3>
                  <p>The NIF is essential for opening a bank account and completing your investment. It can be obtained at a Portuguese tax office or remotely with the help of a tax representative. Explorer Investments provides full support for NIF registration and tax representation.</p>
              </li>
              <li>
                  <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Building /> 4. Open a Portuguese Bank Account</h3>
                  <p>This account is used to fund your investment. Some banks allow remote account opening. You will need to provide your passport, NIF, proof of funds, and address, among other documents.</p>
              </li>
              <li>
                  <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Wallet /> 5. Choose and Fund Your Investment</h3>
                  <p>Select your preferred investment route (likely a private equity fund) and transfer the required amount from your Portuguese bank account. You must obtain written confirmation of the investment from both the bank and the fund manager or beneficiary institution.</p>
              </li>
              <li>
                  <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Send /> 6. Online Application to AIMA</h3>
                  <p>Once your investment is confirmed, your legal team will submit your Portugal Golden Visa application to AIMA. The five-year countdown to citizenship begins from this submission date, not the approval date. Application fees are also paid at this stage.</p>
              </li>
              <li>
                  <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Fingerprint /> 7. Attend the Biometric Appointment</h3>
                  <p>Once AIMA approves your application, you will be invited to schedule a biometric appointment in Portugal. This step includes fingerprint collection, photographs, and identity confirmation. You can reschedule this appointment, if necessary, upon presenting a valid reason.</p>
              </li>
              <li>
                  <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><FileCheck /> 8. Receive Your Residence Card</h3>
                  <p>After your biometric appointment, your first residence card will be issued, valid for 2 years. The second card, valid for 3 years, is issued after the first renewal.</p>
              </li>
              <li>
                  <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><CalendarClock /> 9. Maintain Eligibility and Renew</h3>
                  <p>To maintain your Portugal Golden Visa, you must:</p>
                  <ul className="list-disc pl-8 mt-2 space-y-1 text-sm">
                      <li>Spend at least 14 days in Portugal for the first 2-year residence permit and 21 days for the second 3-year residence permit.</li>
                      <li>Maintain your qualifying investment.</li>
                      <li>Present updated documentation at each renewal.</li>
                  </ul>
                  <p className="text-sm mt-2">The renewal application is made online via the AIMA portal.</p>
              </li>
              <li>
                  <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><PartyPopper /> 10. Apply for Citizenship or Permanent Residency</h3>
                  <p>After 5 years, you can apply for Portuguese citizenship or permanent residency. To qualify for citizenship, you must meet criteria including:</p>
                  <ul className="list-disc pl-8 mt-2 space-y-1 text-sm">
                      <li>No pending tax or social security obligations in Portugal.</li>
                      <li>A clean criminal record in Portugal and your country of residence.</li>
                      <li>A clean health record (no serious communicable diseases).</li>
                      <li>Basic level (A2) Portuguese language certification.</li>
                  </ul>
              </li>
          </ol>
        </div>
      </section>

      {/* Section 6: Residency and Citizenship Timeline */}
      <section className="bg-[#E4E0CF] py-16 px-4">
          <div className="w-[95%] max-w-[1200px] mx-auto text-[#002D3D]">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Residency and Citizenship Timeline</h2>
              <p className="mb-8">The Portugal Golden Visa offers one of the fastest and most reliable paths to European citizenship. While the legal framework is clear, the actual experience depends on AIMA's current processing speed. That's where we come in-guiding you through each step so there are no surprises.</p>
              <div className="grid md:grid-cols-2 gap-8">
                  <div>
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><Scale /> The Legal Advantage: 5 Years from Day One</h3>
                      <p>Unlike many countries, Portugal starts your five-year period the moment your application is submitted-not when it is approved. This means every month under review counts towards your citizenship goal.</p>
                  </div>
                   <div>
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><Info /> What to Expect in Practice</h3>
                      <p>High demand has led to waiting times, especially for biometric appointments. Below is a realistic overview of the journey, based on our clients' current experience.</p>
                  </div>
              </div>
              <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Key Milestones in Your Journey</h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3"><Send className="w-5 h-5 mt-1 text-[#B4A77E]"/><div><strong>Application Submission:</strong> Once your NIF, bank account, and investment are complete, we will submit your application to AIMA. From this moment, your five-year countdown begins.</div></li>
                    <li className="flex items-start gap-3"><Fingerprint className="w-5 h-5 mt-1 text-[#B4A77E]"/><div><strong>Biometrics Appointment:</strong> You will be invited for an in-person appointment to provide fingerprints and photographs. <span className="font-semibold">Current average waiting time: 12 to 24 months after submission.</span></div></li>
                    <li className="flex items-start gap-3"><IdCard className="w-5 h-5 mt-1 text-[#B4A77E]"/><div><strong>First Residence Card:</strong> Issued shortly after biometrics, valid for 2 years. This is your official residency status in Portugal.</div></li>
                    <li className="flex items-start gap-3"><ClipboardList className="w-5 h-5 mt-1 text-[#B4A77E]"/><div><strong>Renewal: Second Residence Card:</strong> Renew your residence card before it expires. The second card is valid for 3 years.</div></li>
                    <li className="flex items-start gap-3"><Flag className="w-5 h-5 mt-1 text-[#B4A77E]"/><div><strong>Citizenship or Permanent Residency:</strong> After 5 years from your initial submission, you are eligible to apply for Portuguese citizenship or permanent residency-provided all conditions are met. This is where your investment becomes a legacy.</div></li>
                </ul>
              </div>
              <AsideNote>Also read: AIMA updates Golden Visa rules: prioritization, efficiency, and less bureaucracy</AsideNote>
          </div>
      </section>

      {/* Section 7: What Makes Explorer Investments Different */}
      <section className="bg-white py-16 px-4">
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#002D3D] text-left mb-10">
            What Makes Explorer Investments Different
          </h2>
          <div className="space-y-8 text-[#002D3D]">
            <div><h3 className="text-xl font-semibold">Specialized in the Portugal Golden Visa</h3><p>Our team focuses exclusively on the Golden Visa program and Portugal's D Visa. We don't divide our attention among multiple countries-we live and breathe the Portuguese market.</p></div>
            <div><h3 className="text-xl font-semibold">Investment Fund Experts</h3><p>With real estate no longer eligible, investment funds are now the primary path for the Golden Visa. We only work with verified and CMVM-registered funds to ensure compliance, investor protection, and long-term security.</p></div>
            <div>
                <h3 className="text-xl font-semibold">End-to-End Support</h3>
                <p>We handle every step of the process so you don't have to:</p>
                <ul className="list-disc pl-8 mt-2 grid grid-cols-2 gap-2 text-sm">
                    <li>NIF Registration</li>
                    <li>Bank Account Opening</li>
                    <li>Investment Selection</li>
                    <li>Legal Representation</li>
                    <li>Application Preparation and Submission</li>
                    <li>Biometrics Scheduling and Renewals</li>
                    <li>Tax Representation</li>
                    <li>Citizenship Application</li>
                </ul>
                <p className="mt-2 font-semibold">Everything you need-all in one place.</p>
            </div>
            <div><h3 className="text-xl font-semibold">Proven Track Record with US Clients</h3><p>We have successfully guided dozens of American families through the Golden Visa process. We understand your specific challenges and have trusted partners to support you.</p></div>
            <div><h3 className="text-xl font-semibold">Transparent Pricing and Personalized Advice</h3><p>We believe in clarity and trust. Every cost is explained upfront, and our guidance is personalized to your goals, risk profile, and family needs.</p></div>
            <div><h3 className="text-xl font-semibold">Multilingual and Multicultural Team</h3><p>Our founders and legal partners have experienced the expatriate journey firsthand. We understand what it means to move, invest, and settle abroad-and we speak your language, both literally and culturally.</p></div>
            <div className="mt-6 p-6 bg-blue-50 border-l-4 border-[#B4A77E] rounded-r-lg">
                <h3 className="text-xl font-semibold">What You Can Expect</h3>
                <ul className="list-disc pl-8 mt-2 space-y-2">
                    <li>Reliable and up-to-date information</li>
                    <li>Direct access to senior advisors</li>
                    <li>Efficient communication</li>
                    <li>Strategic fund guidance</li>
                    <li>Personalized support throughout your 5-year journey-and beyond</li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Contact and Final CTA */}
      <section className="bg-[#002D3D] text-white px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Start Your Portugal Golden Visa Journey with Confidence
            </h2>
            <p className="mb-8 text-gray-300">Your Golden Visa is more than just paperwork-it's a long-term investment in your family's future. Whether you seek global mobility, a strategic relocation plan, or European citizenship for the next generation, Portugal offers one of the most flexible and rewarding residency programs in the world. At Explorer Investments, we handle the entire process so you can focus on your future, not the forms.</p>
            
            <div className="bg-white text-[#002D3D] p-6 rounded-lg shadow-lg mb-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-4">Next Steps</h3>
                <ul className="text-left space-y-2">
                    <li className="flex items-center gap-2"><MessageCircle className="text-[#B4A77E]"/> Schedule a consultation with one of our advisors.</li>
                    <li className="flex items-center gap-2"><PenSquare className="text-[#B4A77E]"/> Receive a personalized proposal with clear costs, steps, and timelines.</li>
                    <li className="flex items-center gap-2"><ShieldCheck className="text-[#B4A77E]"/> Secure your application before the next government update.</li>
                </ul>
                <p className="mt-4 font-semibold">The sooner you start, the sooner your five-year citizenship clock begins ticking.</p>
            </div>
            
   <Link
  href="/"
  className="bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-base px-8 py-3 rounded-full transition text-center inline-flex items-center gap-2 shadow-lg"
>
  <Send size={18} strokeWidth={2} />
  <span>Schedule My Free Consultation</span>
</Link>
        </div>
      </section>
    </>
  );
};

export default GoldenVisaGuide;