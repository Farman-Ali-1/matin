"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import image from "../../../../public/assets/own_choice_right_up.png";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const filters = [
    "All",
    "Collector Edition",
    "Festive Edition",
    "Heritage Collection",
    "Corporate Gifting Kits",
  ];

  const cards = [
    {
      title: "Collector Edition",
      desc: "Modern style gifting on custom order.",
      img: image,
      category: "Collector Edition",
    },
    {
      title: "Festive Edition",
      desc: "Order festival base gifts",
      img: image,
      category: "Festive Edition",
    },
    {
      title: "Wedding & Celebrations",
      desc: "Pre order for your wedding events.",
      img: image,
      category: "Corporate Gifting Kits",
    },
    {
      title: "Heritage Collection",
      desc: "Order with traditional style packaging",
      img: image,
      category: "Heritage Collection",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  // Filter logic
  const filteredCards =
    activeFilter === "All"
      ? cards
      : cards.filter((card) => card.category === activeFilter);

  return (
    <div className="flex flex-col gap-6 px-10 py-8 bg-[#1C2640] text-white">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row w-full gap-4">
        {/* Left */}
        <div className="flex flex-col gap-2 w-full lg:w-1/2">
          <h1 className="text-[#CBA135] text-4xl font-bold">.AZURA</h1>
          <h2 className="text-[#CBA135] text-2xl font-semibold leading-tight">
            Conscious Reads for <br className="hidden sm:block" />
            the Modern Minimalist.
          </h2>
        </div>
        {/* Right */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2 justify-center">
          <p className="text-[#CBA135] leading-relaxed">
            Welcome to the Azura, redefines indulgence with premium Medjool dates, blending desert
            heritage and luxurious rituals. Each curated creation embodies artisanal craftsmanship,
            exclusivity, and timeless elegance — a sophisticated statement for discerning,
            experience-driven clientele.
          </p>
          <div className="flex flex-wrap gap-3">
            {filters.map((item, idx) => (
              <span
                key={idx}
                onClick={() => setActiveFilter(item)}
                className={`px-4 py-1 rounded-full cursor-pointer transition-all duration-200 ${
                  activeFilter === item
                    ? "bg-[#CBA135] text-white font-semibold"
                    : "bg-white text-gray-700 hover:bg-[#CBA135] hover:text-white"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div onClick={()=>router.push("/product_detail")} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCards.map((card, index) => (
          <div key={index} className="flex flex-col gap-2">
            <Image
              src={card.img}
              alt="Card Image"
              className="w-full h-[300px] object-cover rounded"
            />
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <h3 className="text-base font-medium">{card.title}</h3>
                <p className="text-sm text-gray-300">{card.desc}</p>
              </div>
              <FaSquareArrowUpRight className="text-[#CBA135] mt-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
