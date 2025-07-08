'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import logo from "../../../public/logo.png";
import Image from 'next/image';
import { IoBagOutline } from 'react-icons/io5';
import { GoPerson } from 'react-icons/go';
import { RiSearch2Line } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // 🔒 Don't show Navbar on Home page
  if (pathname === '/home') return null;

  return (
    <div className="relative z-50">
      {/* Navbar Bar */}
      <div className="flex items-center justify-between p-4 bg-transparent">
        {/* Logo */}
        <div className="w-1/2 sm:w-1/6 min-w-[100px]">
          <Image src={logo} alt="logo" height={40} />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden sm:flex flex-1 justify-center items-center gap-6 text-sm font-medium text-gray-700">
          {['Home', 'Shop All', 'Shop By Category', 'Contact'].map((item) => (
            <span
              key={item}
              className="uppercase cursor-pointer hover:underline p-2 text-[#CBA135]"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Icons + Hamburger */}
        <div className="flex gap-4 items-center w-1/2 sm:w-1/6 justify-end text-[#CBA135]">
          <RiSearch2Line className="text-xl cursor-pointer" />
          <GoPerson className="text-xl cursor-pointer" />
          <IoBagOutline className="text-xl cursor-pointer" />

          {/* Hamburger on small screens */}
          <button onClick={() => setIsOpen(true)} className="sm:hidden text-2xl">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Drawer Menu (Mobile) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end">
          <div className="w-64 bg-white h-full shadow-lg p-6 flex flex-col gap-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-[#CBA135]">Menu</h2>
              <button onClick={() => setIsOpen(false)} className="text-2xl text-[#CBA135]">
                <IoClose />
              </button>
            </div>

            {['Home', 'Shop All', 'Shop By Category', 'Contact'].map((item) => (
              <span
                key={item}
                className="uppercase cursor-pointer hover:underline p-2 text-[#CBA135]"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </span>
            ))}
          </div>
          {/* Clicking outside closes drawer */}
          <div
            className="flex-1"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
