"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useProductStore from "@/app/store/product";
import { BsBox } from "react-icons/bs";
import useStore from "@/app/store/store";

export default function ProductDetail() {
  const { selectedProduct } = useProductStore();
  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState<
    "XS" | "S" | "M" | "L" | "XL"
  >("XS");
  const [quantity, setQuantity] = useState(1);
  const { addtoCart } = useStore();
  // Size details
  const sizeDetails: Record<
    string,
    { dimensions: string; weight: string; price: number }
  > = {
    XS: { dimensions: "11x11x4 cm", weight: "156g", price: 90 },
    X: { dimensions: "21.5x4.2x3 cm", weight: "130g", price: 75 },
    S: { dimensions: "15.5x15.5x4 cm", weight: "359g", price: 155 },
    M: { dimensions: "21x21x4 cm", weight: "644g", price: 245 },
  };

  useEffect(() => {
    if (!selectedProduct) {
      router.push("/shop");
    }
  }, [selectedProduct, router]);

  if (!selectedProduct) return null;

  const handleAddToCart = () => {
    const sizeInfo = sizeDetails[selectedSize];
    const cartItem = {
      ...selectedProduct,
      size: selectedSize, // 🔥 fix here
      dimensions: sizeInfo.dimensions, // (optional, can remove if not used elsewhere)
      weight: sizeInfo.weight, // (optional, can remove if not needed)
      price: sizeInfo.price,
      quantity,
      total: sizeInfo.price * quantity, // (optional, not used in Product interface)
    };

    console.log("Added to Cart:", cartItem);
    addtoCart(cartItem);
  };

  return (
    <div className="bg-white text-text p-4 flex flex-col justify-around lg:flex-row gap-10">
      {/* Left Image Section */}
      <div className="flex flex-col p-2 gap-4 items-center w-full lg:w-1/2">
        <div className="w-full h-[200px] sm:h-[300px] relative rounded-xl overflow-hidden">
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full flex flex-col gap-1 text-lg font-normal text-justify">
          <h1 className="text-2xl font-medium">Item Description</h1>
          <p>{selectedProduct.description}</p>
        </div>
      </div>

      {/* Product Info Section */}
      <div className="w-full lg:w-2/5 mt-6 lg:mt-0">
        <p className="text-sm text-black uppercase mb-1">Category</p>
        <span className="text-2xl flex flex-row gap-2 md:text-3xl font-bold mb-3">
          {selectedProduct.name}{" "}
          <p className="text-sm">({selectedProduct.category})</p>
        </span>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-xl font-semibold text-primary">
            AED {sizeDetails[selectedSize].price.toFixed(2)}
          </span>
        </div>

        {/* Box Size Selector */}
        <div className="mb-4 flex flex-col gap-2">
          <p className="font-medium mb-2">Box Size</p>
          <div className="flex flex-wrap gap-6 my-1">
            {Object.keys(sizeDetails).map((size) => {
              const isSelected = selectedSize === size;
              return (
                <button
                  type="button"
                  title={`${size} - ${sizeDetails[size].dimensions}`}
                  key={size}
                  className={`border-2 rounded-md flex items-center justify-center p-3 ${
                    isSelected
                      ? "bg-primary text-white border-primary"
                      : "border-gray-300"
                  }`}
                  onClick={() =>
                    setSelectedSize(size as "XS" | "S" | "M" | "L" | "XL")
                  }
                >
                  <BsBox size={20} />
                  <span className="ml-2">{size}</span>
                </button>
              );
            })}
          </div>

          {/* Show Selected Size Info */}
          <div className="mt-2 text-sm text-gray-600">
            <p>Dimensions: {sizeDetails[selectedSize].dimensions}</p>
            <p>Weight: {sizeDetails[selectedSize].weight}</p>
          </div>

          {/* Quantity */}
          <div className="mb-4 flex items-center gap-4 mt-4">
            <button
              onClick={() => quantity > 1 && setQuantity((prev) => prev - 1)}
              className="px-3 py-1 border-2 font-bold text-xl rounded-full border-primary"
            >
              -
            </button>
            <span className="text-lg max-w-fit">{quantity}</span>
            <button
              onClick={() => quantity < 10 && setQuantity((prev) => prev + 1)}
              className="px-3 py-1 border-2 font-bold text-xl rounded-full border-primary"
            >
              +
            </button>
          </div>

          {/* Add to Cart */}
          <div className="flex w-full mb-4">
            <button
              onClick={handleAddToCart}
              className="w-full px-6 py-3 bg-primary text-white rounded-lg"
            >
              Add to Cart
            </button>
          </div>

          {/* Devlivery Details   */}
          <div className="flex flex-col gap-1.5 w-full">
            <label htmlFor="">Delivery Details :</label>
            <textarea
              name="address"
              className="border-2 outline-none p-2 border-[#CBA135]"
              id=""
            ></textarea>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="">Gifting Information :</label>
            <select
              name="packing"
              className="p-2 border border-[#CBA135] outline-none"
              id=""
            >
              <option value="packing1">Packing 1</option>
              <option value="packing2">Packing 2</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
