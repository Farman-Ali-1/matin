// 'use client';

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import logo from "../../../public/logo.png";
// import { IoBagOutline } from "react-icons/io5";
// import { GoPerson } from "react-icons/go";
// import { RiSearch2Line } from "react-icons/ri";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoClose } from "react-icons/io5";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// function HomeNavbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-[#1E2B45] shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="flex items-center justify-between p-4">
//         {/* Logo */}
//         <div className="w-1/2 sm:w-1/6 min-w-[100px]">
//           <Image src={logo} alt="logo" height={40} />
//         </div>

//         {/* Desktop Nav Links */}
//         <div className="hidden sm:flex flex-1 justify-center items-center gap-6 text-sm font-medium">
//           {["Home", "Shop All", "Shop By Category", "Contact"].map((item) => (
//             <Link
//               href={`/${item.toLowerCase().replace(/\s+/g, "_")}`}
//               key={item}
//               className={`uppercase cursor-pointer hover:underline p-2 transition-colors duration-200 ${
//                 scrolled ? "text-[#CBA135]" : "text-[#333333]"
//               }`}
//             >
//               {item}
//             </Link>
//           ))}
//           {showSearch && (
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="px-2 py-1 text-sm rounded border border-gray-300 bg-white text-black shadow-sm focus:outline-none focus:ring-1 focus:ring-[#CBA135]"
//               />
//             )}
//         </div>

//         {/* Icons + Search + Hamburger */}
//         <div
//           className={`flex items-center gap-4 w-1/2 sm:w-1/6 justify-end transition-colors duration-200 ${
//             scrolled ? "text-[#CBA135]" : "text-[#333333]"
//           }`}
//         >
//           {/* Search Icon and Input */}
//           {/* <div className="flex items-center gap-2"> */}
//             <RiSearch2Line
//               className="text-xl cursor-pointer"
//               onClick={() => setShowSearch(prev => !prev)}
//             />
//           {/* </div> */}

//           <GoPerson className="text-xl cursor-pointer" />
//           <IoBagOutline
//             className="text-xl cursor-pointer"
//             onClick={() => router.push("/cart")}
//           />

//           {/* Hamburger on small screens */}
//           <button
//             onClick={() => setIsOpen(true)}
//             className="sm:hidden text-2xl"
//           >
//             <GiHamburgerMenu />
//           </button>
//         </div>
//       </div>

//       {/* Drawer Menu (Mobile) */}
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

//             {["Home", "Shop All", "Shop By Category", "Contact"].map((item) => (
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
//           {/* Clicking outside closes drawer */}
//           <div className="flex-1" onClick={() => setIsOpen(false)} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default HomeNavbar;
