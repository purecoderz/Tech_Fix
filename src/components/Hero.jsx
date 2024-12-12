import React from "react";
import phone from "/phone5.png";
import { contactInfo } from "./Data";
import { FaDollarSign, FaShield, FaRocket } from "react-icons/fa6";
export const Hero = () => {
  const text = ["Affordable", "Reliable", "Quick Repairs"];

  return (
    <div id="home" className="h-screen overflow-x-hidden bg-gradient-to-b from-indigo-500 to-purple-500 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-40">
    {/* Left side text */}
    <div className="w-full md:w-1/2 text-white space-y-6 text-center md:text-left">
      <h2 className="text-2xl sm:text-3xl md:text-3xl text-start font-bold">Faulty?</h2>
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold whitespace-nowrap">
        Restore It
      </h1>
      <button className="mt-6 bg-white text-purple-600 px-4 sm:px-6 py-3 rounded-xl text-base sm:text-lg md:text-2xl font-medium hover:bg-gray-100 transition-colors">
        Fix Now
      </button>
  
      {/* Contact Section */}
      <div className="w-full grid grid-cols-2 gap-6">
        {contactInfo.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <span className="p-3 sm:p-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg sm:text-xl">
              {item.icon}
            </span>
            <div>
              <h3 className="text-white text-left text-sm sm:text-base font-bold">
                {item.title}
              </h3>
              <p className="text-sm text-left sm:text-base text-white font-medium">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  
    {/* Right side image */}
    <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-5 flex items-center justify-center">
      <img
        className="object-contain max-w-full max-h-full w-auto h-auto"
        src={phone}
        alt="hero-image"
      />
    </div>
  </div>
  
  );
};
