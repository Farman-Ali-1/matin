"use client";

import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaPaperPlane,
} from "react-icons/fa";

function ContactPage() {
  return (
    <div className="h-fit bg-white flex items-center justify-center p-4">
      <div className=" grid grid-cols-1 md:grid-cols-2 overflow-hidden ">
        {/* Left Section – Contact Info */}
        <div className="bg-white text-white p-8 flex flex-col gap-6 justify-center">
          <h2 className="text-3xl font-bold text-[#CBA135]">Contact Us</h2>
          <p className="text-[#CBA135]">
            We&apos;d love to hear from you. Please reach out using any method
            below.
          </p>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-[#CBA135]" />
            <span className="text-black">+92 300 1234567</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#CBA135]" />
            <span className="text-black">support@example.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-[#CBA135]" />
            <span className="text-black">
              123 Main Street, Islamabad, Pakistan
            </span>
          </div>
        </div>

        {/* Right Section – Contact Form */}
        <div className="p-8 bg-white ">
          <form className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-[#CBA135]"
              >
                Your Name
              </label>
              <div className="flex items-center border border-[#CBA135] rounded-lg px-3 mt-1">
                <FaUser className="text-[#CBA135] mr-2" />
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full py-2 bg-transparent text-[#CBA135] placeholder:text-[#CBA135]/40 outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#CBA135]"
              >
                Email Address
              </label>
              <div className="flex items-center border border-[#CBA135] rounded-lg px-3 mt-1">
                <FaEnvelope className="text-[#CBA135] mr-2" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full py-2 bg-transparent text-[#CBA135] placeholder:text-[#CBA135]/40 outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-[#CBA135]"
              >
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message here..."
                rows={4}
                className="w-full py-2 bg-transparent text-[#CBA135] placeholder:text-[#CBA135]/40 outline-none border p-2 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#CBA135] hover:opacity-90 text-white py-2 px-4 rounded-lg transition-colors"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
