// components/ProductDetail.tsx
"use client";
import Image from "next/image";
import { useState } from "react";

const productData = {
  name: "StoneWind Trekker",
  price: 99.29,
  oldPrice: 102.34,
  rating: 4.9,
  sold: 488,
  color: "Velvet Pink",
  sizes: ["S", "M", "L", "XL", "XXL"],
  description: "Premium Dark Chocolate: 40% Fresh Dates 60%",
  images: [
    "/assets/dates1.webp",
    "/assets/dates2.jpg",
    "/assets/dates3.webp",
    "/assets/dates4.jpeg",
  ],
};

export default function Page() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedImage, setSelectedImage] = useState(productData.images[0]);
  const [size, setsize] = useState(3);
  return (
    <div className="bg-background text-text p-4 flex flex-col justify-around lg:flex-row gap-10">
      {/* Left Image Gallery */}
      <div className="flex flex-col-reverse  lg:flex-row gap-4 items-center w-full lg:w-1/2">
        {/* Thumbnails */}
        <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible w-full lg:w-auto justify-center">
          {productData.images.map((img, i) => (
            <div
              key={i}
              className={`min-w-[80px] min-h-[80px] w-20 h-20 relative rounded-md border cursor-pointer ${
                selectedImage === img ? "border-primary" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img}
                alt={`thumbnail-${i}`}
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Main Image */}
        <div className="w-full h-[300px] sm:h-[400px] relative rounded-xl overflow-hidden">
          <Image
            src={selectedImage}
            alt={productData.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="w-full lg:w-2/5 mt-6 lg:mt-0">
        <p className="text-sm text-white uppercase mb-1">Jacket</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          {productData.name}
        </h2>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xl font-semibold text-primary">
            ${productData.price.toFixed(2)}
          </span>
          <span className="line-through text-gray-500">
            ${productData.oldPrice.toFixed(2)}
          </span>
          <span className="text-yellow-500">⭐ {productData.rating}</span>
        </div>
        <p className="text-sm text-muted mb-3">
          {productData.sold} Products sold out
        </p>

        <div className="mb-4">
          <p className="font-medium">
            Color <span className="text-gray-500">({productData.color})</span>
          </p>
          <div className="flex gap-2 mt-2">
            <div className="w-10 h-10 bg-pink-300 rounded-full border-2 border-primary"></div>
            <div className="w-10 h-10 bg-gray-300 rounded-full border"></div>
          </div>
        </div>

        <div className="mb-4">
          <p className="font-medium mb-2">Size</p>
          <div className="flex flex-wrap gap-2">
            {productData.sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 border rounded-md ${
                  selectedSize === size
                    ? "bg-primary text-white"
                    : "border-gray-400"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-muted mb-4">
          Composition: {productData.description}
        </p>

        <div className="mb-4 flex items-center gap-4">
          <button onClick={()=>size>0&&setsize((prev)=>prev-1)} className="px-3 py-1 border-2 font-bold text-xl rounded-full border-primary">
            -
          </button>
                  <span className="text-lg max-w-fit">{size}</span>
          <button onClick={()=>size<10&&setsize((prev)=>prev+1)} className="px-3 py-1 border-2 font-bold text-xl rounded-full border-primary">
            +
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
          <button className="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-lg">
            Add to Cart
          </button>
          <button className="w-full sm:w-auto px-6 py-3 bg-yellow-500 text-white rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
