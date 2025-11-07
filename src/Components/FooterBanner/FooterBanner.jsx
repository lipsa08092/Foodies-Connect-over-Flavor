import React from "react";
import Banner from "../../assets/Footer-Banner.avif";

function FooterBanner() {
  return (
    <div
      className="w-full h-[500px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative  flex flex-col justify-center items-center h-full text-center space-y-4 px-4">
        <h2 className="text-3xl font-thin italic text-white ">SUBSCRIBE</h2>
        <h2 className="text-6xl font-serif text-gray-100 animate-pulse ">
          NEWSLETTER
        </h2>

        <div className="flex items-center mt-6 space-x-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 w-80 rounded-md bg-white text-gray-800 focus:outline-none"
          />
          <button className="p-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-950 transition">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;
