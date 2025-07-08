"use client";

import React from "react";
import Image from "next/image";
// Images
import explore_left_up from "../../../../../public/assets/explore_left_up.png";
import explore_left_down_1st from "../../../../../public/assets/explore_left_down_1st.png";
import explore_left_down_2nd from "../../../../../public/assets/explore_left_down_2nd.png";
import explore_right from "../../../../../public/assets/explore_right.png";



export default function ExploreSection() {
  return (
    <div className="container mx-auto p-4 m-3 w-full md:w-11/12">
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[600px] gap-4">
        {/* Left Column */}
        <div className="flex flex-col w-full md:w-1/2 h-full gap-4">
          {/* Top Left Carousel */}
          <div className="relative w-full h-[300px] md:h-[48%]">
            <Image
              src={explore_left_up}
              alt="left-up"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>

          {/* Bottom Two Carousels */}
          <div className="flex flex-row w-full h-[300px] md:h-[48%] gap-4">
            {/* Bottom Left Image */}
            <div className="relative w-1/2 h-full">
              <Image
                src={explore_left_down_1st}
                alt="left-down-left"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>

            {/* Bottom Right Carousel */}
            <div className="relative w-1/2 h-full">
              <Image
                src={explore_left_down_2nd}
                alt="left-down-left"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column Carousel */}
        <div className="relative w-full md:w-1/2 h-[600px]">
          <Image
            src={explore_right}
            alt="right"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
          <button className="relative explore_button px-8 py-3 top-[80%] left-[5%] uppercase">
            EXPLORE MORE
          </button>
        </div>
      </div>
    </div>
  );
}
