"use client";
import Image from "next/image";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const initialProducts = [

  {
    name: "Gradient Graphic T‑shirt",
    size: "Large",
    color: "White",
    price: 145,
    image: "https://northwestriders.com/products/blank-midweight-60-40-blend-t-shirt-white", // from turn0image1
    quantity: 1,
  },
  {
    name: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    image: "https://sanfranpsycho.com/products/red-black-checkered-sfp-flannel",  // from turn0image10
    quantity: 1,
  },
  {
    name: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    image: "https://partsandlaborshop.com/products/short-sleeve-crew-neck-t-shirt-in-white",  // from turn0image6
    quantity: 1,
  },

];

export default function Page() {
  const [products, setProducts] = useState(initialProducts);

  const handleQuantity = (index, type) => {
    setProducts((prev) => {
      const updated = [...prev];
      const current = updated[index];
      if (type === "dec" && current.quantity > 1) current.quantity -= 1;
      if (type === "inc") current.quantity += 1;
      return updated;
    });
  };

  const handleRemove = (index) => {
    setProducts((prev) => prev.filter((_, i) => i !== index));
  };

  const subtotal = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen bg-background text-text p-4 md:px-20 font-sans flex pt-5 flex-col gap-10">
      {/* Cart & Summary Section */}
      <div className="flex flex-col lg:flex-row gap-10 justify-between">
        {/* Cart Items */}
        <div className="border-primary border rounded-4xl p-6 flex-1">
          <div className="flex flex-col gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start justify-between gap-4"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                  className=" rounded-lg object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold text-sm">{product.name}</p>
                  <p className="text-xs">Size: {product.size}</p>
                  <p className="text-xs">Color: {product.color}</p>
                  <p className="mt-1 font-bold">${product.price}</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <FaTrash
                    className="text-sm cursor-pointer"
                    onClick={() => handleRemove(index)}
                  />
                  <div className="flex items-center gap-2 text-sm">
                    <button
                      className="px-2 border rounded"
                      onClick={() => handleQuantity(index, "dec")}
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      className="px-2 border rounded"
                      onClick={() => handleQuantity(index, "inc")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="border-primary border rounded-4xl p-6 w-full max-w-md">
          <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Discount(-20%)</span>
            <span>-${discount.toFixed(0)}</span>
          </div>
          <div className="flex justify-between text-sm mb-4">
            <span>Delivery Fee</span>
            <span>${deliveryFee}</span>
          </div>
          <hr className="border-primary w-[90%] mx-auto my-5" />
          <div className="flex justify-between font-bold text-base mb-4">
            <span>Total</span>
            <span>${total.toFixed(0)}</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Add promo code"
              className="flex-1 px-3 py-2 rounded bg-[#0e1a34] text-sm text-white outline-none border border-white/30"
            />
            <button className="px-4 py-2 text-sm bg-[#CBA135] text-white rounded-full hover:opacity-90">
              Apply
            </button>
          </div>
          <button className="w-full py-3 bg-[#CBA135] text-white rounded-full font-semibold hover:opacity-90">
            Go to checkout →
          </button>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="border-primary border flex flex-col md:flex-row items-center justify-around gap-5 rounded-4xl p-6 text-center">
        <h3 className="md:text-4xl font-semibold md:w-1/2 text-start font-serif uppercase text-[#CBA135]">
          Stay connect about our latest offers
        </h3>
        <button className="bg-[#CBA135] px-6 py-3 rounded-full text-white font-medium hover:opacity-90">
          Subscribe to our Newsletter
        </button>
      </div>
    </div>
  );
}
