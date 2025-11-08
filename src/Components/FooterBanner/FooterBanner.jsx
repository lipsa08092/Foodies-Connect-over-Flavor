import React from "react";
import Banner from "../../assets/Footer-Banner.avif";
import {motion} from "framer-motion"
import {Slideup} from "../Hero/Hero"

function FooterBanner() {
  return (
    <div
      className="w-full h-[500px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative  flex flex-col justify-center items-center h-full text-center space-y-4 px-4">
        <motion.h2 variants={Slideup(0.4)}
                  initial="hidden"
                  whileInView="show" className="text-3xl lg:text-4xl font-thin italic text-white ">SUBSCRIBE</motion.h2>
        <motion.h2  variants={Slideup(0.6)}
                  initial="hidden"
                  whileInView="show"
             className="text-5xl lg:text-7xl  font-serif text-gray-100 animate-pulse ">
          NEWSLETTER
        </motion.h2>

        <div className="flex items-center mt-6 space-x-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 w-50 lg:w-80 md:w-80 rounded-md bg-white text-gray-800 focus:outline-none"
          />
          <button className="p-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-950 transition">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;
