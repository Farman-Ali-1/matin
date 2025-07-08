import Card from "@/app/_components/Card";
import React from "react";

function Signature_Collection() {
  return (
    <div className="flex flex-col gap-2 mx-auto p-4 m-3 w-full md:w-11/12">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold uppercase text-center text-[#CBA135]">
          SIGNATURE COLLECTIONS
        </h1>
        <p className="text-[#CBA135]">Flagship, evergreen premium offerings.</p>
      </div>
      <Card />
    </div>
  );
}

export default Signature_Collection;
