import React from "react";
import Image from "next/image";
import your_own_choice_left from "../../../../../public/assets/own_choice_left.png";
import your_own_choice_right_up from "../../../../../public/assets/own_choice_right_up.png";
import your_own_choice_right_down from "../../../../../public/assets/own_choice_right_down.png";
function Chose_your_own() {
  return (
    <div className="flex flex-col lg:h-screen h-fit gap-4 mx-auto p-4 m-3 w-full md:w-11/12">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold uppercase text-center text-[#CBA135]">
          Chose your own
        </h1>
        <p className="text-[#CBA135]">Chose your choice , your idea</p>
      </div>
      <div className="flex flex-row gap-2 w-full">
        <div className="flex flex-row justify-center items-end h-full p-6  w-1/2">
          <Image
            src={your_own_choice_left}
            alt="your_own_choice_left"
            width={400}
            height={400}
          />
        </div>
        <div className="w-1/2 h-full flex flex-col relative ">
          {/* Main Base Image */}
          <Image
            src={your_own_choice_right_up}
            alt="Top Image"
            width={400}
            height={400}
            className=""
          />

          {/* Overlay Image */}
          <Image
            src={your_own_choice_right_down}
            alt="Bottom Overlay Image"
            width={150}
            height={150}
            className="absolute lg:flex hidden top-[70%] right-[30%]"
          />
        </div>
      </div>
    </div>
  );
}

export default Chose_your_own;
