// "use client";

// import React, { useState } from "react";
// import { usePathname } from "next/navigation";
// import logo from "../../../public/logo.png";
// import Image from "next/image";
// import { IoBagOutline } from "react-icons/io5";
// import { GoPerson } from "react-icons/go";
// import { RiSearch2Line } from "react-icons/ri";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoClose } from "react-icons/io5";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   // 🔒 Don't show Navbar on Home page
//   if (pathname === "/home") return null;

//   return (
//     <div className="relative z-50">
//       {/* Navbar Bar */}
//       <div className="flex items-center justify-between p-4 bg-transparent">
//         {/* Logo */}
//         <div className="w-1/2 sm:w-1/6 min-w-[100px]">
//           <Image src={logo} alt="logo" height={40} />
//         </div>

//         {/* Desktop Nav Links with search in same row */}
//         <div className="hidden sm:flex flex-1 justify-center items-center gap-4 text-sm font-medium text-gray-700">
//           {["Home", "Shop All", "Shop By Category", "Contact"].map((item) => (
//             <Link
//               href={`/${item.toLowerCase().replace(/\s+/g, "_")}`}
//               key={item}
//               className="uppercase cursor-pointer hover:underline p-2 text-[#CBA135]"
//             >
//               {item}
//             </Link>
//           ))}

//           {/* Search Input */}
//           {showSearch && (
//             <input
//               type="text"
//               placeholder="Search..."
//               className="px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#CBA135] transition-all duration-200 bg-white text-black"
//             />
//           )}
//         </div>

//         {/* Icons + Hamburger */}
//         <div className="flex gap-4 items-center w-1/2 sm:w-1/6 justify-end text-[#CBA135] relative">
//           {/* Search Icon toggles input */}
//           <RiSearch2Line
//             className="text-xl cursor-pointer"
//             onClick={() => setShowSearch((prev) => !prev)}
//           />
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
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional for hamburger
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="w-full text-text  shadow-sm">
      {/* Top Bar */}
      <div className="bg-background text-text py-3 text-sm flex justify-end items-center px-4 ">
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-3 items-center text-lg">
            🔍 👤 🛒
          </div>
        </div>
      </div>

      {/* Center Logo + Menu Toggle */}
      <div className="flex bg-white justify-between items-center py-4 px-4 relative">
        <div className="flex sm:hidden items-center">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="mx-auto text-center">
          <h1 className="text-2xl font-serif">ازورا</h1>
          <p className="text-sm">Azura</p>
        </div>
        <div className="flex sm:hidden items-center gap-2">🔍 👤 🛒</div>
      </div>

      {/* Bottom Nav */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } sm:flex bg-white  justify-center items-center gap-6 text-sm font-semibold  pb-4   sm:pb-0`}
      >
        {["Home", "Shop All", "Shop By Category", "Contact"].map((item) => (
          <div
            className="flex items-center md:flex-row pb-3 flex-col gap-2"
            key={item}
          >
            <Link
              href={`/${item.toLowerCase().replace(/\s+/g, "_")}`}
              key={item}
              className="uppercase cursor-pointer hover:underline p-2 text-[#CBA135]"
            >
              {item}{" "}
            </Link>
          </div>
        ))}
      </nav>
    </header>
  );
}
