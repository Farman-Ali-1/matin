"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import { IoBagOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { RiSearch2Line } from "react-icons/ri";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-background text-text lg:px-28 md:px-16 px-6">
      {/* Logo */}
      <div className="w-1/6 min-w-[100px]">
        <Link href="/">
          <Image src={logo} alt="logo" height={40} className="cursor-pointer" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-6 text-sm font-medium">
        <Link href="/" className="uppercase hover:underline p-2 text-[#CBA135]">
          Home
        </Link>
        <Link href="/cartsection" className="uppercase hover:underline p-2 text-[#CBA135]">
          Cartsection
        </Link>
        <Link href="/shop" className="uppercase hover:underline p-2 text-[#CBA135]">
          Shop All
        </Link>
        <Link href="/category" className="uppercase hover:underline p-2 text-[#CBA135]">
          Shop By Category
        </Link>
        <Link href="/contact" className="uppercase hover:underline p-2 text-[#CBA135]">
          Contact
        </Link>
      </div>

      {/* Icons */}
      <div className="flex gap-6 items-center w-1/6 justify-end text-[#CBA135] text-xl">
        <RiSearch2Line className="cursor-pointer" />
        <GoPerson className="cursor-pointer" />
        <IoBagOutline className="cursor-pointer" />
      </div>
    </nav>
  );
}
