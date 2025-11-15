import React from "react";

function ContactUs() {
  return (
    <div className="container flex items-center justify-center p-6">
      <div className="bg-white p-8 w-full max-w-3xl rounded-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-600 font-serif">Contact Us</h1>

        <p className="text-center text-yellow-600 mb-8">
          Have any questions or feedbacks ? we'd love to hear from you !
        </p>

        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block font-semibold mb-1">Your Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email Address</label>
            <input
              type="email"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              className="w-full p-3 rounded-xl border border-gray-300 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-gray-600">
          <p>Or reach us directly at :</p>
          <p className="font-semibold text-gray-700 mt-1">Goocify.com</p>
          <p className="font-semibold text-gray-700">+91 98765 43210</p>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
