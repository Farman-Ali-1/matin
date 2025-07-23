"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import useStore from "@/app/store/store";

// Images
import packing1 from "../../../../public/packing/packing1.jpg";
import packing2 from "../../../../public/packing/packing2.jpg";
import date1 from "../../../../public/dates/dates1.jpg";
import date2 from "../../../../public/dates/dates2.jpg";
import date3 from "../../../../public/dates/dates3.jpg";

const packagings = [
  { image: packing1, title: "Gold Leaf Gift Set", price: 29.0 },
  { image: packing2, title: "Elegant Wrap", price: 35.0 },
];

const sizes = [
  { label: "Small", weight: 400, capacity: 4, price: 80 },
  { label: "Medium", weight: 600, capacity: 6, price: 120 },
  { label: "Large", weight: 900, capacity: 8, price: 183 },
];

const dateFillings = [
  { image: date1, title: "Khidri Dates with Roasted Almond" },
  { image: date2, title: "Wanan Dates with Orange Peel" },
  { image: date3, title: "Segai Dates with Pecan" },
];

export default function Page() {
  const [step, setStep] = useState(1);
  const [selectedPackaging, setSelectedPackaging] = useState<number | null>(
    null
  );
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedDates, setSelectedDates] = useState<Record<number, number>>(
    {}
  );

  // const scrollToRef = (id: string) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const handlePackagingSelect = (index: number) => {
    setSelectedPackaging(index);
    setStep(2);
    window.location.hash = "#sizes";
  };

  const handleSizeSelect = (index: number) => {
    setSelectedSize(index);
    setSelectedDates({});
    setStep(3);
    window.location.hash = "#fillings";
  };

  const handleDateToggle = (index: number) => {
    if (selectedSize === null) return;
    const max = sizes[selectedSize].capacity;
    const copy = { ...selectedDates };

    if (copy[index]) {
      if (copy[index] < max && getTotalSelected() < max) {
        copy[index]++;
      } else {
        delete copy[index];
      }
    } else if (getTotalSelected() < max) {
      copy[index] = 1;
    }

    setSelectedDates(copy);
  };

  const getTotalSelected = () =>
    Object.values(selectedDates).reduce((acc, count) => acc + count, 0);

  const getTotalPrice = () => {
    if (selectedSize === null || selectedPackaging === null) return 0;
    return sizes[selectedSize].price;
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      window.location.hash = "#boxes";
    } else if (step === 3) {
      setStep(2);
      window.location.hash = "#sizes";
    }
  };

  // const handleAddToCart = () => {
  //   const cartData = {
  //     packaging:
  //       selectedPackaging !== null ? packagings[selectedPackaging] : null,
  //     size: selectedSize !== null ? sizes[selectedSize] : null,
  //     fillings: Object.keys(selectedDates).map((key) => ({
  //       ...dateFillings[parseInt(key)],
  //       quantity: selectedDates[parseInt(key)],
  //     })),
  //     totalPrice: getTotalPrice(),
  //   };
  //   console.log("Selected Cart Data:", cartData);
  // };

  const removeItem = (index: number) => {
    const copy = { ...selectedDates };
    if (copy[index]) {
      delete copy[index];
      setSelectedDates(copy);
    }
  };


  const addCustomizedBoxToCart = useStore((state) => state.addCustomizedBoxToCart);
  const handleAddToCart = () => {
  if (selectedPackaging === null || selectedSize === null) return;

  const packaging = packagings[selectedPackaging];
  const size = sizes[selectedSize];
  const fillings = Object.keys(selectedDates).map((key) => ({
    ...dateFillings[parseInt(key)],
    quantity: selectedDates[parseInt(key)],
  }));

  addCustomizedBoxToCart(packaging, size, fillings, packaging.image.src);
};

  return (
    <div className="flex flex-col lg:flex-row px-4 py-6 w-full bg-white gap-6">
      {/* Main Section */}
      <div className="w-full lg:w-2/3">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold mb-2">
            Customise Your Bateel Gift
          </h1>
          <p className="text-gray-600">
            Create your bespoke gift box from exquisite packaging, filled with
            your favorite gourmet dates.
          </p>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-between border-b pb-4 mb-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-sm text-white ${
                  step >= s ? "bg-[#8a747a]" : "bg-gray-300"
                }`}
              >
                {s}
              </span>
              <span className="text-sm">
                {s === 1
                  ? "Choose Packaging"
                  : s === 2
                  ? "Choose Size"
                  : "Choose Date Fillings"}
              </span>
            </div>
          ))}
        </div>

        {step > 1 && (
          <button
            onClick={handleBack}
            className="mb-4 text-sm text-[#8a747a] hover:underline"
          >
            ← Go Back
          </button>
        )}

        {/* Step 1: Packaging */}
        {step === 1 && (
          <div
            id="boxes"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {packagings.map((item, index) => (
              <div
                key={index}
                onClick={() => handlePackagingSelect(index)}
                className={`cursor-pointer border rounded-lg p-3 hover:shadow-md transition ${
                  selectedPackaging === index ? "ring-2 ring-[#8a747a]" : ""
                }`}
              >
                <Image
                  src={item.image}
                  width={250}
                  height={250}
                  alt={item.title}
                  className="mx-auto"
                />
                <h2 className="mt-4 text-lg font-semibold text-center">
                  {item.title}
                </h2>
                <p className="text-center text-gray-600">From: ${item.price}</p>
              </div>
            ))}
          </div>
        )}

        {/* Step 2: Size */}
        {step === 2 && (
          <div
            id="sizes"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {sizes.map((size, index) => (
              <div
                key={index}
                onClick={() => handleSizeSelect(index)}
                className="cursor-pointer border hover:border-black p-3 rounded-lg transition"
              >
                <Image
                  src={date1}
                  width={250}
                  height={200}
                  alt={size.label}
                  className="mx-auto"
                />
                <div className="mt-2 text-sm text-gray-700">
                  <p className="font-bold">{size.label}</p>
                  <p>Price: ${size.price}</p>
                  <p>Weight: {size.weight}g</p>
                  <p>Capacity: {size.capacity} pieces</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 3: Dates */}
        {step === 3 && (
          <div id="fillings">
            <p className="mb-2 text-gray-600">
              You can select <strong>{sizes[selectedSize!].capacity}</strong>{" "}
              fillings.{" "}
              <span className="text-[#8a747a] font-semibold">
                {getTotalSelected()}/{sizes[selectedSize!].capacity}
              </span>{" "}
              selected.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {dateFillings.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleDateToggle(index)}
                  className={`relative border rounded-lg p-3 cursor-pointer hover:shadow-md ${
                    selectedDates[index] ? "ring-2 ring-[#8a747a]" : ""
                  }`}
                >
                  <Image
                    src={item.image}
                    width={250}
                    height={180}
                    alt={item.title}
                    className="mx-auto"
                  />
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span>{item.title}</span>
                    {selectedDates[index] ? (
                      <FaCheckCircle className="text-[#8a747a]" />
                    ) : null}
                  </div>
                  {selectedDates[index] && (
                    <span className="absolute top-2 right-2 bg-[#8a747a] text-white text-xs px-2 py-1 rounded-full">
                      {selectedDates[index]}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Selected Items</h2>

        <div className="mb-3">
          <p className="text-sm text-gray-600">🎁 Packaging</p>
          {selectedPackaging !== null && (
            <p>{packagings[selectedPackaging].title}</p>
          )}
        </div>

        <div className="mb-3">
          <p className="text-sm text-gray-600">📦 Size</p>
          {selectedSize !== null && <p>{sizes[selectedSize].label}</p>}
        </div>

        <div className="mb-3">
          <p className="text-sm text-gray-600">🍬 Fillings</p>
          <div className="flex flex-wrap gap-2">
            {Object.keys(selectedDates).map((i) => {
              const idx = parseInt(i);
              return (
                <div key={i} className="relative group">
                  <Image
                    src={dateFillings[idx].image}
                    width={40}
                    height={40}
                    alt={dateFillings[idx].title}
                    className="rounded"
                  />
                  <span
                    className="absolute -top-2 -right-2 bg-[#8a747a] text-white text-xs px-1.5 py-0.5 rounded-full group-hover:flex hidden cursor-pointer"
                    onClick={() => removeItem(idx)}
                  >
                    ×
                  </span>
                  <div className="text-center text-xs">
                    {selectedDates[idx]}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-sm text-right mt-1 text-gray-500">
            {getTotalSelected()}/
            {selectedSize !== null ? sizes[selectedSize].capacity : 0}
          </p>
        </div>

        {/* Total and CTA */}
        <div className="mt-4 border-t pt-4">
          <p className="text-lg font-bold">
            Price per box: ${getTotalPrice().toFixed(2)}
          </p>
          <button
            onClick={handleAddToCart}
            className="mt-4 w-full bg-[#8a747a] text-white py-2 rounded hover:bg-[#7a646a] transition"
            disabled={getTotalSelected() !== sizes[selectedSize!]?.capacity}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
