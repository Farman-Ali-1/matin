"use client";

import Image from "next/image";
import React, { useState } from "react";
import banner from "../../../../public/corporate_gifts/banner.jpg";
import customisation from "../../../../public/corporate_gifts/customisation-options.webp";
import packing1 from "../../../../public/corporate_gifts/paking1.webp";
import packing2 from "../../../../public/corporate_gifts/packing2.webp";
import packing3 from "../../../../public/corporate_gifts/packing3.webp";
import packing4 from "../../../../public/corporate_gifts/packing4.webp";
import packing5 from "../../../../public/corporate_gifts/packing5.webp";
import packing6 from "../../../../public/corporate_gifts/packing6.webp";
import Product_Customisation1 from "../../../../public/corporate_gifts/Wrapped_2_of_4_-_260_x_210.webp";
import Product_Customisation2 from "../../../../public/corporate_gifts/Wrapped_3_of_4_-_260_x_210.webp";
import Product_Customisation3 from "../../../../public/corporate_gifts/Wrapped_4_of_4_-_260_x_210.webp";
import Product_Customisation4 from "../../../../public/corporate_gifts/wrapped-chocolates.webp";
import Expert_Advice from "../../../../public/corporate_gifts/corporate-advice.webp";

const bespoke_packing = [
  { image: packing1, title: "Branded Wooden Packaging" },
  { image: packing2, title: "Branded Wooden Packaging" },
  { image: packing3, title: "Branded Wooden Packaging" },
  { image: packing4, title: "Branded Wooden Packaging" },
  { image: packing5, title: "Branded Wooden Packaging" },
  { image: packing6, title: "Branded Wooden Packaging" },
];

const Product_Customisation = [
  {
    image: Product_Customisation1,
    title: "Customised printed sleeves for individually-wrapped chocolates",
  },
  {
    image: Product_Customisation2,
    title: "Customised stickers for individually-wrapped chocolates",
  },
  {
    image: Product_Customisation3,
    title: "Individually-wrapped dates in customised premium packaging",
  },
  {
    image: Product_Customisation4,
    title: "Customised printed sleeves for individually-wrapped dates",
  },
];

export default function Page() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submission:", formData);
  };

  return (
    <div className="bg-white w-full flex flex-col gap-8">
      {/* Banner */}
      <div className="w-full h-[70vh] relative">
        <Image
          src={banner}
          alt="corporate_gift"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Corporate Gifts */}
      <div className="px-4 md:px-20 md:py-14 lg:px-32 lg:py-20 text-center flex flex-col items-center gap-4">
        <h1 className="font-semibold text-3xl md:text-4xl capitalize">
          Corporate Gifts
        </h1>
        <p className="text-gray-700 max-w-4xl">
          As a world-renowned brand for gourmet dates and fine chocolates,
          Bateel has elevated the art of gifting. A gift from Bateel is not only
          a reflection of fine craftsmanship but also of impeccable taste.
        </p>
      </div>

      {/* Customisation Options */}
      <div className="flex flex-col lg:flex-row px-4 md:px-10 lg:px-20 items-center gap-8">
        <div className="w-full lg:w-1/2">
          <Image
            src={customisation}
            alt="customisation options"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h2 className="font-semibold text-2xl md:text-3xl capitalize">
            Customisation Options
          </h2>
          <p className="text-gray-700">
            Our extensive range of luxurious gift collections are fully
            customisable and suitable for any personal or corporate occasion.
            Preview our collection through the catalog link provided below.
          </p>
          <button className="bg-[#CBA135] text-white px-6 py-2 w-max hover:bg-[#b8912f] transition">
            Download
          </button>
        </div>
      </div>

      {/* Bespoke Packaging */}
      <div className="flex flex-col px-4 md:px-10 lg:px-20 gap-4">
        <h1 className="text-2xl md:text-3xl capitalize font-normal">
          Bespoke Packaging
        </h1>
        <div className="flex flex-wrap justify-center">
          {bespoke_packing.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 p-4 flex flex-col items-center gap-4"
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover"
              />
              <p className="text-black text-xl font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Customisation */}
      <div className="flex flex-col px-4 md:px-10 lg:px-20 gap-4">
        <h1 className="text-2xl md:text-3xl capitalize font-normal">
          Product Customisation
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {Product_Customisation.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[23%] p-4 flex flex-col items-center gap-4"
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover"
              />
              <p className="text-black text-center text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Expert Advice */}
      <div className="flex flex-col lg:flex-row px-4 md:px-10 lg:px-20 items-center gap-8">
        <div className="w-full lg:w-1/2">
          <Image
            src={Expert_Advice}
            alt="expert advice"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h2 className="font-semibold text-2xl md:text-3xl capitalize">
            Expert Advice
          </h2>
          <p className="text-gray-700">
            Get in touch with our team of experts to create a bespoke gift box
            according to your personalised requirements. Choose from a range of
            premium gift boxes, date varieties and fillings for all your
            corporate requirements.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col px-4 md:px-10 lg:px-20 w-full gap-4 pb-10">
        <h1 className="text-2xl md:text-3xl capitalize">Contact Us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-3xl">
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName">Full Name *</label>
            <input
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full h-14 border border-gray-400 px-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone">Contact Phone Number *</label>
            <input
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full h-14 border border-gray-400 px-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">E-mail *</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-14 border border-gray-400 px-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message">How can we help? *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full h-28 border border-gray-400 px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-fit px-6 py-2 border border-gray-700 hover:bg-gray-100 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
