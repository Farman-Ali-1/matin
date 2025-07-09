import React from 'react'
import second_last_home_section from "../../../../../public/assets/second_last_home_section.png"
import Image from 'next/image'

function Second_Last() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Background Image */}
      <Image
        src={second_last_home_section}
        alt="second_last_home_section"
        className="object-cover w-full h-full"
        fill
        priority
      />

      {/* Overlay Text */}
      <div className="absolute top-[70%] left-[5%] transform -translate-y-1/2 flex flex-col gap-2 z-10">
        <h1 className="text-xl uppercase text-[#CBA135]">OWN THE DAY</h1>
        <h1 className="text-6xl font-bold text-[#CBA135]">Heritage Collection</h1>
        <button className="text-sm sm:text-base w-fit uppercase px-4 py-2 button-text font-poppins button-background">
          Shop Dates
        </button>
      </div>
    </div>
  )
}

export default Second_Last
