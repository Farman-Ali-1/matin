'use client';

import React, { useEffect, useRef, useState } from 'react';
import Carousel from './components/Carosel';
import DiscoverSection from './components/DiscoverSection';
import BestSellers from './components/BestSellers';
import LuxuryGifts from './components/LuxuryGifts';
// import MakingBox from './components/MakingBox';
import Testimonial from './components/Testimonial';
import AboutUs from './components/Aboutus';
import HomeNavbar from '../../_components/HomeNavbar'; // ✅ Navbar component
import '../../../app/globals.css';

const Page: React.FC = () => {
  const images: string[] = [
    '/carousel/slide1.jpg',
    '/carousel/slide2.jpg',
    '/carousel/slide3.jpg',
  ];

  const aboutRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  // Scroll to "About" when called
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Listen to scroll to change navbar bg
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden w-full">
      {/* Navbar with sticky prop */}
      <HomeNavbar onAboutClick={scrollToAbout} isSticky={isSticky} />

      {/* Carousel */}
      <div className="relative z-0">
        <Carousel images={images} interval={5000} />
      </div>

      {/* Sections */}
      <DiscoverSection />
      <BestSellers />
      <LuxuryGifts />
      {/* <MakingBox /> */}
      <Testimonial />
      <div ref={aboutRef} id="about">
        <AboutUs />
      </div>
    </div>
  );
};

export default Page;










// "use client";

// import React from "react";
// import Image from "next/image";
// import LandingPage from "../../../../public/assets/Landing_Page_banner.png";
// import ExploreSection from './components/Explore';
// import Signature_Collection from "./components/Signature_Collection";
// // import Navbar from "@/app/_components/HomeNavbar";
// import Occation_Base_Gifting from "./components/Occation_base_gafiting";
// import Chose_your_own from "./components/Chose_your_own";
// import Second_Last from "./components/Second_Last";
// import "../../../app/globals.css";
// import Carousel from "./components/Carosel";
// import Navbar from "@/app/_components/Navbar";
// import LatestProducts from "./components/DiscoverSection";
// import DiscoverSection from "./components/DiscoverSection";
// import BestSellers from "./components/BestSellers";
// import FeaturedProducts from "./components/FeaturedProducts";
// import LuxuryGifts from "./components/LuxuryGifts";
// import MakingBox from "./components/MakingBox";
// import BoutiqueSection from "./components/BoutiqueSection";
// import Testimonial from "./components/Testimonial";
// import AboutUs from "./components/Aboutus";

// function Page() {
//   const images = [
//   '/carousel/slide1.jpg',
//   '/carousel/slide2.jpg',
//   '/carousel/slide3.jpg',
// ];

//   return (
//     <div className="flex flex-col overflow-x-hidden justify-center items-center w-full">
//       <div className="w-full">
//          {/* <Navbar /> */}
//       </div>
//       {/* ✅ Banner section (responsive) */}
//       {/* <div className="relative  lg:h-[100vh] w-full min-h-[500px]"> */}
//         {/* Carosel */}
//         {/* <Image
//           src={LandingPage}
//           alt="Landing Page"
//           fill
//           className="object-cover"
//           priority
//         />

//         <div className="absolute top-[50%] left-[7%] max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] flex flex-col justify-center items-start gap-2">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-bold text-headings-homebanner font-poppins">
//             BEST DATE
//           </h1>
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-bold text-headings-homebanner font-poppins">
//             QUALITY
//           </h1>
//           <p className="text-base sm:text-lg text-white font-poppins mt-2">
//             From Desert Root to Luxe Rituals.
//           </p>
//           <div className="flex flex-wrap gap-3 mt-4">
//             <button className="text-sm sm:text-base uppercase px-4 py-2 button-text font-poppins button-background">
//               Bespoke
//             </button>
//             <button className="text-sm sm:text-base uppercase px-4 py-2 button-text font-poppins button-background">
//               Shop Now
//             </button>
//           </div>
//         </div> */}
//       {/* </div> */}
//             <Carousel images={images} interval={5000} />

//       <DiscoverSection />
//       <BestSellers />
//       {/* <FeaturedProducts /> */}
//       <LuxuryGifts />
//       <MakingBox />
//       <Testimonial />
//       <AboutUs/>


















//       {/* ✅ Explore More Section (already responsive inside) */}
//       {/* <ExploreSection /> */}

//       {/* ✅ Signature Collection (assumed responsive) */}
//       {/* <Signature_Collection /> */}

//       {/* occation base gifting        */}
//       {/* <Occation_Base_Gifting /> */}

//       {/* your own choice */}
//       {/* <Chose_your_own /> */}

//       {/* second last section  */}
//       {/* <Second_Last /> */}
//     </div>
//   );
// }

// export default Page;
