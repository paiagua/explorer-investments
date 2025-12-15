'use client';
import { Send } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-white text-center text-neutral-800">
      {/* Logo */}
      <img
        src="https://goldenvisashub.com/assets/images/logoblue.webp"
        alt="Explorer Logo"
        className="w-40 mb-6"
      />

      {/* Headline */}
<h1 className="text-3xl md:text-5xl font-bold mb-4">
  500 - Internal Server Error
</h1>
<p className="text-lg md:text-xl max-w-xl mb-8">
  Something went wrong on our side. But our team is here to help you move forward with confidence.
</p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <a
          href="/"
          className="bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold px-6 py-3 rounded-full transition"
        >
          ← Back to Home
        </a>
        <a
          href="/"
          className="bg-transparent border border-[#B4A77E] text-[#B4A77E] hover:bg-[#B4A77E] hover:text-white font-semibold px-6 py-3 rounded-full transition"
        >
          Contact Us
        </a>
      </div>

      {/* Team Section */}
      <div className="bg-[#1c1c1c] text-white rounded-2xl p-8 max-w-3xl w-full">
        <h3 className="text-lg font-semibold mb-6">
          Your Trusted Investor Relations Team
        </h3>

        <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
          {/* André */}
          <div className="flex items-start gap-4">
            <img
              src="https://goldenvisashub.com/assets/images/andre_2025.jpg"
              alt="André Bandeira"
              className="w-16 h-16 rounded-full object-cover border border-white"
            />
            <div className="text-sm leading-snug">
              <p className="font-bold">André Bandeira</p>
              <a
                href="mailto:ab@explorerinvestments.com?subject=Golden%20Visa%20Investment%20Inquiry%20from%20Website"
                className="flex items-center gap-2 text-[#B4A77E] hover:underline"
              >
                <FontAwesomeIcon icon={faEnvelope} /> ab@explorerinvestments.com
              </a>
            </div>
          </div>

          {/* Maria */}
          <div className="flex items-start gap-4">
            <img
              src="https://goldenvisashub.com/assets/images/maria_2025.jpg"
              alt="Maria Campos Silva"
              className="w-16 h-16 rounded-full object-cover border border-white"
            />
            <div className="text-sm leading-snug">
              <p className="font-bold">Maria Campos Silva</p>
              <a
                href="mailto:mcs@explorerinvestments.com?subject=Golden%20Visa%20Investment%20Inquiry%20from%20Website"
                className="flex items-center gap-2 text-[#B4A77E] hover:underline"
              >
                <FontAwesomeIcon icon={faEnvelope} /> mcs@explorerinvestments.com
              </a>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="/"
          className="mt-10 inline-flex items-center gap-2 bg-[#B4A77E] hover:bg-[#9c9067] text-white font-semibold text-base px-6 py-3 rounded-full transition"
        >
          <Send size={18} strokeWidth={2} />
          <span>Start Your Investor Journey</span>
        </a>
      </div>
    </div>
  );
}
