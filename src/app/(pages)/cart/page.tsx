"use client";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import useStore from "@/app/store/store";

export default function Page() {
  const cart = useStore((state) => state.cart);
  const { incrementQuantity, decrementQuantity, removeFromCart } = useStore();

  const handleQuantity = (index: number, type: string) => {
    const product = cart[index];
    if (type === "inc") {
      incrementQuantity(product.id, product.size);
    } else if (type === "dec") {
      decrementQuantity(product.id, product.size);
    }
  };

  const handleRemove = (index: number) => {
    const product = cart[index];
    removeFromCart(product.id, product.size);
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  // const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal  + deliveryFee;

  return (
    <div className="min-h-screen bg-white text-text p-4 sm:px-6 md:px-10 lg:px-20 font-sans flex flex-col gap-10">
      {/* Cart & Summary Section */}
      <div className="flex flex-col lg:flex-row gap-10 w-full">
        {/* Cart Items */}
        <div className="border border-primary rounded-4xl p-4 sm:p-6 w-full lg:w-2/3">
          <div className="flex flex-col gap-6">
            {cart.length === 0 ? (
              <div className="text-center text-gray-400 py-10 text-sm">
                Your cart is empty.
              </div>
            ) : (
              cart.map((product, index) => (
                <div
                  key={`${product.id}-${product.size}`}
                  className="flex flex-row sm:items-start justify-between gap-4 border-b pb-4"
                >
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={80}
                      height={80}
                      className="rounded-lg w-20 h-24 object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-semibold text-sm">{product.name}</p>
                    <p className="text-xs">Size: {product.size}</p>
                    <p className="mt-1 font-bold">${product.price}</p>
                  </div>

                  {/* Quantity & Remove */}
                  <div className="flex flex-col items-center gap-4">
                    <FaTrash
                      className="text-sm text-background cursor-pointer"
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
              ))
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="border border-primary rounded-4xl p-6 w-full lg:w-1/3">
          <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          {/* <div className="flex justify-between text-sm mb-2">
            <span>Discount(-20%)</span>
            <span>-${discount.toFixed(0)}</span>
          </div> */}
          <div className="flex justify-between text-sm mb-4">
            <span>Delivery Fee</span>
            <span>${deliveryFee}</span>
          </div>
          <hr className="border-primary w-[90%] mx-auto my-5" />
          <div className="flex justify-between font-bold text-base mb-4">
            <span>Total</span>
            <span>${total.toFixed(0)}</span>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="text"
              placeholder="Add promo code"
              className="flex-1 px-3 py-2 rounded  text-sm text-[#CBA135] outline-none border border-[#CBA135]"
            />
            <button className="px-4 py-2 text-sm bg-background text-white rounded-full hover:opacity-90">
              Apply
            </button>
          </div> */}

          <button className="w-full py-3 bg-background text-white rounded-full font-semibold hover:opacity-90">
            Go to checkout →
          </button>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="border border-primary flex flex-col md:flex-row items-center justify-between gap-6 rounded-4xl p-6 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold md:w-2/3 font-serif uppercase text-[#CBA135]">
          Stay connect about our latest offers
        </h3>
        <button className="bg-[#CBA135] px-6 py-3 rounded-full text-white font-medium hover:opacity-90 w-full md:w-auto">
          Subscribe to our Newsletter
        </button>
      </div>
    </div>
  );
}
