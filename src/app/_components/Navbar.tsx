"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { IoBagOutline, IoClose } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { RiSearch2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMailBulk, FaPhoneAlt, FaGlobe } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    if (pathname === "/home") return null;
  };

  const isHome = pathname === "/home";

  return (
    <div className="w-full flex flex-col">
      {/* Sticky Topbar + Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || !isHome ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        {/* Topbar */}
        <div className="w-full flex flex-row items-center h-12 justify-between bg-[#333333] px-4 text-white text-sm relative">
          <div className="flex flex-row items-center gap-6">
            <span className="flex flex-row items-center gap-2">
              <FaPhoneAlt className="text-[#CBA135]" />
              <span>Call us</span>
            </span>
            <span className="flex flex-row items-center gap-2">
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

          <div
            className="flex items-center gap-4 transition-colors duration-200 text-white"
          >
            <RiSearch2Line
              className="text-xl cursor-pointer"
              onClick={() => setShowSearch((prev) => !prev)}
            />
            <GoPerson className="text-xl cursor-pointer" />
            <IoBagOutline className="text-xl cursor-pointer" />
            {/* Language Dropdown */}
            <div className="relative" ref={langRef}>
              <FaGlobe
                className="text-xl cursor-pointer"
                onClick={() => setShowLangDropdown((prev) => !prev)}
              />
              {showLangDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg border z-[9999]">
                  <ul className="text-sm">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleLanguageChange("en")}
                    >
                      English
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleLanguageChange("fr")}
                    >
                      French
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleLanguageChange("es")}
                    >
                      Spanish
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Hamburger */}
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
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop" },
              { label: "About", href: "#about" },
              { label: "Customised Gift", href: "/customised_gift" },
              { label: "Corporate Gift", href: "/corporate_gift" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <button
                key={label}
                onClick={() => {
                  if (href.startsWith("#")) {
                    scrollToSection(href.substring(1));
                  } else {
                    window.location.href = href;
                  }
                }}
                className={`uppercase cursor-pointer hover:underline p-2 transition-colors duration-200 ${
                  scrolled || !isHome ? "text-[#333333]" : "text-[#CBA135]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer to avoid content under nav */}
      <div className={`${scrolled || !isHome ? "h-[112px]" : "h-0"}`} />

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-[9999] flex justify-end">
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

            {["Home", "Shop", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item === "About") {
                    scrollToSection("about");
                  } else {
                    window.location.href = `/${item
                      .toLowerCase()
                      .replace(/\s+/g, "_")}`;
                  }
                  setIsOpen(false);
                }}
                className="uppercase cursor-pointer hover:underline p-2 text-[#CBA135] text-left"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex-1" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
}

// "use client";

// import React, { useState, useEffect } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import Image from "next/image";
// import logo from "../../../public/logo.png";
// import { IoBagOutline, IoClose } from "react-icons/io5";
// import { GoPerson } from "react-icons/go";
// import { RiSearch2Line } from "react-icons/ri";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaMailBulk, FaPhoneAlt, FaGlobe } from "react-icons/fa";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [showLangDropdown, setShowLangDropdown] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLanguageChange = (lang: string) => {
//     console.log("Language selected:", lang);
//     setShowLangDropdown(false);
//   };

//   // 🔒 Don't show Navbar on /home
//   if (pathname === "/home") return null;

//   return (
//     <div className="relative z-50 flex flex-col">
//       {/* Topbar */}
//       <div className="w-full flex items-center h-12 justify-between bg-[#333333] px-4 text-white text-sm">
//         <div className="flex gap-6">
//           <span className="flex items-center gap-2">
//             <FaPhoneAlt className="text-[#CBA135]" />
//             <span>Call us</span>
//           </span>
//           <span className="flex items-center gap-2">
//             <FaMailBulk className="text-[#CBA135]" />
//             <span>Email message</span>
//           </span>
//         </div>
//         {showSearch && (
//           <input
//             type="text"
//             placeholder="Search..."
//             className="px-2 py-1 text-sm rounded border border-gray-300 bg-white text-black shadow-sm focus:outline-none focus:ring-1 focus:ring-[#CBA135]"
//           />
//         )}
//         <div className="flex items-center gap-4 text-[#CBA135] relative">
//           <RiSearch2Line
//             className="text-xl cursor-pointer"
//             onClick={() => setShowSearch((prev) => !prev)}
//           />
//           <GoPerson className="text-xl cursor-pointer" />
//           <IoBagOutline
//             className="text-xl cursor-pointer"
//             onClick={() => router.push("/cart")}
//           />
//           {/* Language Dropdown */}
//           <div className="relative">
//             <FaGlobe
//               className="text-xl cursor-pointer"
//               onClick={() => setShowLangDropdown((prev) => !prev)}
//             />
//             {showLangDropdown && (
//               <div className="absolute right-0 top-8 z-50 bg-white border rounded shadow-md w-40 text-black">
//                 <button
//                   onClick={() => handleLanguageChange("en")}
//                   className="w-full text-left px-4 py-2 hover:bg-[#CBA135] hover:text-white"
//                 >
//                   English
//                 </button>
//                 <button
//                   onClick={() => handleLanguageChange("fr")}
//                   className="w-full text-left px-4 py-2 hover:bg-[#CBA135] hover:text-white"
//                 >
//                   French
//                 </button>
//                 <button
//                   onClick={() => handleLanguageChange("es")}
//                   className="w-full text-left px-4 py-2 hover:bg-[#CBA135] hover:text-white"
//                 >
//                   Spanish
//                 </button>
//               </div>
//             )}
//           </div>
//           {/* Hamburger */}
//           <button
//             onClick={() => setIsOpen(true)}
//             className="sm:hidden text-2xl"
//           >
//             <GiHamburgerMenu />
//           </button>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div
//         className={`flex items-center justify-between px-4 py-3 transition-all duration-300 ${
//           scrolled ? "bg-white shadow-md" : "bg-transparent"
//         }`}
//       >
//         {/* Logo */}
//         <div className="w-1/2 sm:w-1/6 min-w-[100px]">
//           <Image src={logo} alt="logo" height={40} />
//         </div>

//         {/* Desktop Nav Links */}
//         <div className="hidden sm:flex flex-1 justify-center items-center gap-6 text-lg font-medium">
//           {[
//             "Home",
//             "Shop",
//             "About",
//             "Customised Gift",
//             "Corporate Gift",
//             "Contact",
//           ].map((item) => (
//             <Link
//               href={`/${item.toLowerCase().replace(/\s+/g, "_")}`}
//               key={item}
//               className={`uppercase cursor-pointer hover:underline p-2 transition-colors duration-200 ${
//                 scrolled ? "text-[#333333]" : "text-[#CBA135]"
//               }`}
//             >
//               {item}
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Push down content below fixed nav */}
//       <div className="pt-[112px]" />

//       {/* Mobile Drawer */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end">
//           <div className="w-64 bg-white h-full shadow-lg p-6 flex flex-col gap-6">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold text-[#CBA135]">Menu</h2>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="text-2xl text-[#CBA135]"
//               >
//                 <IoClose />
//               </button>
//             </div>

//             {["Home", "Shop", "About", "Contact"].map((item) => (
//               <Link
//                 href={`/${item.toLowerCase().replace(/\s+/g, "_")}`}
//                 key={item}
//                 className="uppercase cursor-pointer hover:underline p-2 text-[#CBA135]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item}
//               </Link>
//             ))}
//           </div>
//           <div className="flex-1" onClick={() => setIsOpen(false)} />
//         </div>
//       )}
//     </div>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { Menu, X } from 'lucide-react';
// import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen((prev) => !prev);

//   const categories = [
//     { name: 'Men', path: '/shop/men' },
//     { name: 'Women', path: '/shop/women' },
//     { name: 'Gourmet', path: '/shop/gourmet' },
//     { name: 'Luxury', path: '/shop/luxury' },
//   ];

//   return (
//     <header className="w-full text-text shadow-sm">
//       {/* Top Bar */}
//       <div className="bg-background text-text py-3 text-sm flex justify-end items-center px-4">
//         <div className="flex items-center gap-4">
//           <div className="hidden sm:flex gap-4 items-center text-lg text-white">
//             <FaSearch />
//             <FaUser />
//             <Link href="/cart">
//               <FaShoppingCart className="cursor-pointer hover:text-[#CBA135]" />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Logo and Hamburger */}
//       <div className="flex bg-white justify-between items-center py-4 px-4 relative">
//         {/* Mobile Menu Toggle */}
//         <div className="flex sm:hidden items-center">
//           <button onClick={toggleMenu}>
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Logo */}
//         <div className="mx-auto text-center text-gray-700">
//           <h1 className="text-2xl font-serif">ازورا</h1>
//           <p className="text-sm">Azura</p>
//         </div>

//         {/* Mobile Icons */}
//         <div className="flex sm:hidden items-center gap-4 text-gray-700">
//           <FaSearch />
//           <FaUser />
//           <Link href="/cart">
//             <FaShoppingCart className="cursor-pointer hover:text-[#CBA135]" />
//           </Link>
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <nav
//         className={`${
//           menuOpen ? 'block' : 'hidden'
//         } sm:flex bg-white justify-center items-center gap-6 text-sm pb-4 sm:pb-0 relative z-50`}
//       >
//         {/* Home */}
//         <div className="flex items-center md:flex-row pb-3 flex-col gap-2 uppercase">
//           <Link href="/home" className="uppercase cursor-pointer text-gray-700">
//             Home
//           </Link>
//         </div>

//         {/* Shop with Dropdown */}
//         <div className="relative group flex items-center md:flex-row pb-3 flex-col gap-2 uppercase">
//           <Link href="/shop" className="uppercase cursor-pointer text-gray-700">
//             Shop
//           </Link>
//           {/* Dropdown */}
//           <div className="absolute top-full mt-2 left-0 hidden group-hover:flex flex-col bg-white shadow-md border rounded-md min-w-[150px] z-50">
//             {categories.map((cat) => (
//               <Link
//                 key={cat.name}
//                 href={cat.path}
//                 className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap"
//               >
//                 {cat.name}
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Customised Gift */}
//         <div className="flex items-center md:flex-row pb-3 flex-col gap-2 uppercase">
//           <Link
//             href="/customised_gift"
//             className="uppercase cursor-pointer text-gray-700"
//           >
//             Customised Gift
//           </Link>
//         </div>

//         {/* Corporate Gift */}
//         <div className="flex items-center md:flex-row pb-3 flex-col gap-2 uppercase">
//           <Link
//             href="/corporate_gift"
//             className="uppercase cursor-pointer text-gray-700"
//           >
//             Corporate Gift
//           </Link>
//         </div>

//         {/* Contact */}
//         <div className="flex items-center md:flex-row pb-3 flex-col gap-2 uppercase">
//           <Link href="/contact" className="uppercase cursor-pointer text-gray-700">
//             Contact
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// }
