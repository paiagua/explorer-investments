import React from 'react';
import teamImage from '../assets/team.jpg';
import logofooter from '../assets/logo.png';
import HomePage from '../Meta/404'; //
const NotFound = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <HomePage />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F1EFE7] text-[#002D3D] text-center p-6">
        <h1 className="text-5xl font-extrabold mb-4">Oops... Lost in Translation?</h1>
        <h2 className="text-xl font-medium mb-3">
          But your path to Portugal is still wide open.
        </h2>

        <p className="mb-6 text-gray-700 max-w-xl">
          This page may be gone - but André & Maria are here to guide you back.  
          Let’s get your journey back on track.
        </p>

        <a
          href="/"
          className="bg-[#08425E] text-white px-6 py-3 rounded-full hover:bg-[#052f43] transition font-medium mb-8"
        >
          Talk to Our Team
        </a>

        <div className="flex flex-col items-center max-w-lg text-center">
          <img
            src={teamImage}
            alt="Investor Relations Team"
            className="w-full max-w-sm rounded-lg shadow-lg mb-4 object-cover"
          />
          <p className="font-semibold text-lg">Your Investor Relations Team</p>
          <p className="text-sm text-gray-600">André Bandeira & Maria Campos Silva</p>
        </div>
      </div>

      <div className="w-full bg-[#252C32] text-white py-6" id="page-footer">
        <div className="max-w-[1200px] mx-auto text-left text-sm pb-12 px-3">
          <img src={logofooter} alt="" className="mb-5 max-w-[200px] w-full" />
          <p className="font-bold mb-6 text-md lg:text-sm">
            Copyright © 2025 Explorer Investments
          </p>
          <p className="mb-4">
            It is recommended to consult Chapter V of Decree-Law nº 162/2014, of October 31st, published in the Official Gazette, as well as its revision by Law nº 2/2020, of March 31st.
          </p>
        
        </div>
      </div>
    </>
  );
};

export default NotFound;
