"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import image1 from "../../../public/assets/explore_left_up.png";

const products = [
  {
    id: 1,
    name: 'Heritage Collection',
    description: 'Dates styled and packaged to honor',
    oldPrice: '$229.00',
    newPrice: '$129.00',
    image: image1,
  },
  {
    id: 2,
    name: 'Signature Collection',
    description: 'Luxurious dates with rich flavor',
    oldPrice: '$199.00',
    newPrice: '$119.00',
    image: image1,
  },
  {
    id: 3,
    name: 'Signature Collection',
    description: 'Luxurious dates with rich flavor',
    oldPrice: '$199.00',
    newPrice: '$119.00',
    image: image1,
  },
  {
    id: 4,
    name: 'Signature Collection',
    description: 'Luxurious dates with rich flavor',
    oldPrice: '$199.00',
    newPrice: '$119.00',
    image: image1,
  },
  {
    id: 5,
    name: 'Signature Collection',
    description: 'Luxurious dates with rich flavor',
    oldPrice: '$199.00',
    newPrice: '$119.00',
    image: image1,
  },
];

function Card() {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product_detail`); // Ensure dynamic route exists
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div
          onClick={() => handleClick()}
          key={product.id}
          className="cursor-pointer flex flex-col p-2 items-start gap-4"
        >
          <Image src={product.image} alt={product.name} width={300} height={400} />
          <div className="flex flex-col items-start justify-center text-[#CBA135]">
            <h1 className="text-lg font-bold">{product.name}</h1>
            <p className="text-sm">{product.description}</p>
            <p className="text-sm flex items-center gap-2">
              <span className="line-through">{product.oldPrice}</span>
              <span className="font-semibold">{product.newPrice}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
