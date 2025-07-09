"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-background text-text px-4 md:px-40 py-12">
      <div className="flex flex-col lg:flex-row gap-12 justify-between border-b border-white/20 pb-10">
        {/* Left Section */}
        <div className="flex flex-col gap-4 max-w-md">
          <Image width={70} alt="logo" height={70} src='/assets/logo.png'/>
          <p className="text-sm">
            We earned a reputation of being good at what we do. Let us take your
            online shop to new dimension in success!
          </p>
          <div className="flex items-center gap-2 text-sm mt-2">
            <FiMapPin />
            <span>XYZ, Country 1234</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FiMail />
            <span>contact@azura.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FiPhone />
            <span>01234567890</span>
          </div>
          <div className="flex gap-4 text-xl mt-3">
            <FaFacebookF className="cursor-pointer hover:text-primary" />
            <FaInstagram className="cursor-pointer hover:text-primary" />
            <FaTwitter className="cursor-pointer hover:text-primary" />
            <FaLinkedinIn className="cursor-pointer hover:text-primary" />
          </div>
        </div>

        <div className="flex flex-col  gap-8 lg:gap-12 w-full lg:w-auto">
          {/* Email Updates */}
          <div className="flex-1 max-w-lg">
            <h3 className="text-lg font-semibold mb-4 uppercase">
              Receive Email Updates
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 px-4 py-2 rounded bg-[#cba135]/20 border border-[#cba135]/30 text-sm text-white outline-none"
              />
              <button className="bg-primary text-white px-6 py-2 rounded hover:opacity-90 text-sm">
                JOIN
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">
            <div>
              <h4 className="font-semibold uppercase mb-4">Shop</h4>
              <ul className="space-y-5">
                <li>Shop</li>
                <li>Collection</li>
                <li>Outlet</li>
                <li>Lookbook</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold uppercase mb-4">Help</h4>
              <ul className="space-y-5">
                <li>FAQ</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>Return and Exchanges</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold uppercase mb-4">About</h4>
              <ul className="space-y-5">
                <li>Journal</li>
                <li>Our Story</li>
                <li>Contact</li>
                <li>Store Location</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-xs mt-8 text-white/60">
        Copyright © 2020. Your company name. All rights reserved
      </div>
    </footer>
  );
}
