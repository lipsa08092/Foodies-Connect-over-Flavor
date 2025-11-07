import React from "react";
import {
  FaPhone,
  FaTelegram,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../../assets/logo-Foodies.png";
import { FaMapLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-14">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img
            src={logo}
            alt="Foodies Logo"
            className="w-36 mb-4 animate-bounce"
          />
          <p className="text-gray-400 text-sm">
            At <span className="text-yellow-500 font-semibold">Foodies</span>,
            we blend taste and creativity to bring you dishes that excite your
            senses. From local favorites to international delights, every bite
            tells a story.
          </p>
          <div className="flex space-x-5 mt-6 text-2xl">
            <FaFacebook className="text-gray-400 hover:text-blue-500 transition cursor-pointer" />
            <FaInstagram className="text-gray-400 hover:text-pink-500 transition cursor-pointer" />
            <FaTwitter className="text-gray-400 hover:text-sky-400 transition cursor-pointer" />
            <FaTelegram className="text-gray-400 hover:text-blue-400 transition cursor-pointer" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className=" text-2xl text-yellow-500 font-bold mb-4 space-x-3">
            Central Branch
          </h2>
          <div className="flex item-center space-x-3">
            <FaLocationDot className="text-yellow-500 text-2xl" />
            <p className="text-gray-400">
              732/21 Second Street, Manchester, Kind Street, Kinfstone United
              Kingdom
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-yellow-500" />
            <p className="text-gray-400">1800-456-4678</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapLocationDot className="text-yellow-500" />
            <p className="text-gray-400">Get Directions</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">
            Customer Care
          </h2>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">
                Track Your Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Returns & Refunds
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Feedback
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="rounded-xl overflow-hidden shadow-lg mb-5 border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14971.775029378472!2d85.78511798038463!3d20.261167179367924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a799c0bfde1f%3A0x6620519121bc5b58!2sJagamara%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1762517022857!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="space-y-3 text-gray-300">
            <div className="flex items-center space-x-3">
              <FaPhone className="text-yellow-500" />
              <p>1800-456-4678</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapLocationDot className="text-yellow-500" />
              <p>Jayadev Vihar, Bhubaneswar, Odisha</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 border-t border-gray-800 pt-6 text-gray-500 text-sm">
        ©2025
        <span className="text-yellow-500 font-semibold ">Foodies</span> | All
        Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
