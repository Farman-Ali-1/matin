"use client";

import React from "react";
import Image from "next/image";
import LandingPage from "../../../../public/assets/Landing_Page_banner.png";
import ExploreSection from './components/Explore';
import Signature_Collection from "./components/Signature_Collection";
import Navbar from "@/app/_components/HomeNavbar";
import Occation_Base_Gifting from "./components/Occation_base_gafiting";
import Chose_your_own from "./components/Chose_your_own";
import Second_Last from "./components/Second_Last";
import "../../../app/globals.css";

function Page() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-full">
         <Navbar />
      </div>
      {/* ✅ Banner section (responsive) */}
      <div className="relative  lg:h-[100vh] w-full min-h-[500px]">
        <Image
          src={LandingPage}
          alt="Landing Page"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute top-[50%] left-[7%] max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] flex flex-col justify-center items-start gap-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-bold text-headings-homebanner font-poppins">
            BEST DATE
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-bold text-headings-homebanner font-poppins">
            QUALITY
          </h1>
          <p className="text-base sm:text-lg text-white font-poppins mt-2">
            From Desert Root to Luxe Rituals.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <button className="text-sm sm:text-base uppercase px-4 py-2 button-text font-poppins button-background">
              Bespoke
            </button>
            <button className="text-sm sm:text-base uppercase px-4 py-2 button-text font-poppins button-background">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Explore More Section (already responsive inside) */}
      <ExploreSection />

      {/* ✅ Signature Collection (assumed responsive) */}
      <Signature_Collection />

      {/* occation base gifting        */}
      <Occation_Base_Gifting />

      {/* your own choice */}
      <Chose_your_own />

      {/* second last section  */}
      <Second_Last />
    </div>
  );
}

export default Page;
