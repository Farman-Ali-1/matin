import React from 'react';
import logo from "../../../public/logo.png";
import Image from 'next/image';
import { IoBagOutline } from 'react-icons/io5';
import { GoPerson } from 'react-icons/go';
import { RiSearch2Line } from 'react-icons/ri';

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-white ">
      {/* Logo */}
      <div className="w-1/6 min-w-[100px]">
        <Image src={logo} alt="logo" height={40} />
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex justify-center items-center gap-6 text-sm font-medium text-gray-700">
        <span className="uppercase cursor-pointer hover:underline p-2 text-[#CBA135]">Home</span>
        <span className="uppercase cursor-pointer hover:underline p-2 text-[#CBA135]">Shop All</span>
        <span className="uppercase cursor-pointer hover:underline p-2 text-[#CBA135]">Shop By Category</span>
        <span className="uppercase cursor-pointer hover:underline p-2 text-[#CBA135]">Contact</span>
      </div>

      {/* Icons */}
      <div className="flex gap-8 items-center w-1/6 justify-start text-[#CBA135]">
        <RiSearch2Line className="text-xl cursor-pointer" />
        <GoPerson className="text-xl cursor-pointer" />
        <IoBagOutline className="text-xl cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
