"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useProductStore from "@/app/store/product";

export default function ProductDetail() {
  const { selectedProduct } = useProductStore();
  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState("M");
  // const [selectedImage, setSelectedImage] = useState("");
  const [size, setSize] = useState(1);

  useEffect(() => {
    if (!selectedProduct) {
      router.push("/products");
    }
    // } else {
    //   const defaultImg = selectedProduct.images?.[0] || "";
    //   // setSelectedImage(defaultImg);
    // }
  }, [selectedProduct]);

  if (!selectedProduct) return null;

  // Determine thumbnail images
  // const thumbnailImages =
  //   selectedProduct.images?.length === 1
  //     ? Array(4).fill(selectedProduct.images[0])
  //     : selectedProduct.images;

  return (
    <div className="bg-white text-text p-4 flex flex-col justify-around lg:flex-row gap-10">
      {/* Left Image Gallery */}
      <div className="flex flex-col-reverse lg:flex-row gap-4 items-center w-full lg:w-1/2">
        {/* Thumbnails */}
        {/* <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible w-full lg:w-auto justify-center">
          {thumbnailImages?.map((img, i) =>
            img ? (
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
            ) : null
          )}
        </div> */}

        {/* Main Image */}
        <div className="w-full h-[300px] sm:h-[400px] relative rounded-xl overflow-hidden">
          <Image
            src={selectedProduct.images}
            alt={selectedProduct.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="w-full lg:w-2/5 mt-6 lg:mt-0">
        <p className="text-sm text-black uppercase mb-1">Dates</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          {selectedProduct.name}
        </h2>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-xl font-semibold text-primary">
            ${selectedProduct.price?.toFixed(2)}
          </span>
          {selectedProduct.oldPrice && (
            <span className="line-through text-gray-500">
              ${selectedProduct.oldPrice?.toFixed(2)}
            </span>
          )}
          <span className="text-yellow-500">⭐ {selectedProduct.rating}</span>
        </div>

        <p className="text-sm text-muted mb-3">
          {selectedProduct.sold} Products sold out
        </p>

        {/* Box Size Selector */}
        <div className="mb-4">
          <p className="font-medium mb-2">Box Size</p>
          <div className="flex flex-wrap gap-2">
            {["S", "M", "L", "XL"].map((sizeOption) => (
              <button
                key={sizeOption}
                className={`px-4 py-2 border rounded-md ${
                  selectedSize === sizeOption
                    ? "bg-primary text-white"
                    : "border-gray-400"
                }`}
                onClick={() => setSelectedSize(sizeOption)}
              >
                {sizeOption}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-muted mb-4">
          Composition: {selectedProduct.description}
        </p>

        {/* Quantity */}
        <div className="mb-4 flex items-center gap-4">
          <button
            onClick={() => size > 1 && setSize((prev) => prev - 1)}
            className="px-3 py-1 border-2 font-bold text-xl rounded-full border-primary"
          >
            -
          </button>
          <span className="text-lg max-w-fit">{size}</span>
          <button
            onClick={() => size < 10 && setSize((prev) => prev + 1)}
            className="px-3 py-1 border-2 font-bold text-xl rounded-full border-primary"
          >
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
