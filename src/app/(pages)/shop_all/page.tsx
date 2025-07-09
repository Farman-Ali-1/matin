import React from "react";

function page() {
  return (
    <div className="flex flex-row w-full gap-2">
      <div className="flex flex-col gap-2 w-1/3 p-2">
        <h1 className="text-[#CBA135] text-4xl font-bold">.AZURA</h1>
        <h1 className="text-[#CBA135] text-3xl ">Conscious Reads for the Modern Minimalist.</h1>
      </div>
      <div className="flex flex-col gap-2 w-2/3 items-start">
        <p className="text-[#CBA135] ">
          Welcome to the Azura,redefines indulgence with premium Medjool dates,
          blending desert heritage and luxurious rituals. Each curated creation
          embodies artisanal craftsmanship, exclusivity, and timeless elegance —
          a sophisticated statement for discerning, experience-driven clientele.
        </p>
        <div className="flex flex-row justify-center items-center">
          <span className="px-4 py-1 w-fit rounded-2xl bg-white text-gray-600">
            All
          </span>
        </div>
      </div>
    </div>
  );
}

export default page;
