"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { IoBagOutline, IoClose } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { RiSearch2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMailBulk, FaPhoneAlt, FaGlobe } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface HomeNavbarProps {
  onAboutClick?: () => void;
  isSticky?: boolean; // ✅ Accept as optional prop
}

function HomeNavbar({ onAboutClick, isSticky = false }: HomeNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const router = useRouter();
  const langRef = useRef<HTMLDivElement>(null);

  // ❌ Removed internal `scrolled` state and its useEffect

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setShowLangDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: string) => {
    console.log("Selected language:", lang);
    setShowLangDropdown(false);
  };

  return (
    <div className="w-full flex flex-col">
      {/* Sticky Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isSticky ? "bg-white" : "bg-transparent"
        }`}
      >
        {/* Topbar */}
        <div className="w-full flex items-center h-12 justify-between bg-background px-4 text-white text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#CBA135]" />
              <span>Call us</span>
            </span>
            <span className="flex items-center gap-2">
              <FaMailBulk className="text-[#CBA135]" />
              <span>Email message</span>
            </span>
          </div>

          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 text-sm rounded border border-gray-300 bg-white text-black shadow-sm focus:outline-none focus:ring-1 focus:ring-[#CBA135]"
            />
          )}

          <div className="flex items-center gap-4 transition-colors duration-200 text-white">
            <RiSearch2Line
              className="text-xl cursor-pointer"
              onClick={() => setShowSearch(!showSearch)}
            />
            <GoPerson className="text-xl cursor-pointer" />
            <IoBagOutline
              className="text-xl cursor-pointer"
              onClick={() => router.push("/cart")}
            />

            <div className="relative" ref={langRef}>
              <FaGlobe
                className="text-xl cursor-pointer"
                onClick={() => setShowLangDropdown(!showLangDropdown)}
              />
              {showLangDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg border z-[9999]">
                  <ul className="text-sm">
                    {["English", "French", "Spanish"].map((lang, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleLanguageChange(lang)}
                      >
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="sm:hidden text-2xl"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="w-1/2 sm:w-1/6 min-w-[100px]">
            <Image src={logo} alt="logo" height={40} />
          </div>

          <div className="hidden sm:flex flex-1 justify-center items-center gap-6 text-lg font-medium">
            {[
              "Home",
              "Shop",
              "About",
              "Customised Gift",
              "Corporate Gift",
              "Contact",
            ].map((item) => {
              const path = `/${item.toLowerCase().replace(/\s+/g, "_")}`;

              if (item === "About" && onAboutClick) {
                return (
                  <span
                    key={item}
                    onClick={onAboutClick}
                    className={`uppercase cursor-pointer hover:underline p-2 transition-colors duration-200 ${
                      isSticky ? "text-[#333333]" : "text-[#CBA135]"
                    }`}
                  >
                    {item}
                  </span>
                );
              }

              return (
                <Link
                  href={path}
                  key={item}
                  className={`uppercase cursor-pointer hover:underline p-2 transition-colors duration-200 ${
                    isSticky ? "text-[#333333]" : "text-[#CBA135]"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end">
          <div className="w-64 bg-white h-full shadow-lg p-6 flex flex-col gap-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-[#CBA135]">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl text-[#CBA135]"
              >
                <IoClose />
              </button>
            </div>

            {["Home", "Shop", "About", "Contact"].map((item) => {
              if (item === "About" && onAboutClick) {
                return (
                  <span
                    key={item}
                    onClick={() => {
                      onAboutClick();
                      setIsOpen(false);
                    }}
                    className="uppercase cursor-pointer hover:underline p-2 text-[#CBA135]"
                  >
                    {item}
                  </span>
                );
              }

              return (
                <Link
                  href={`/${item.toLowerCase().replace(/\s+/g, "_")}`}
                  key={item}
                  className="uppercase cursor-pointer hover:underline p-2 text-[#CBA135]"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              );
            })}
          </div>
          <div className="flex-1" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default HomeNavbar;
