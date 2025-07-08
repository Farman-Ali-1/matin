import Image from 'next/image';
import React from 'react';
import image1 from "../../../public/assets/explore_left_up.png"; // example image

// Sample product data
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
  // Add more items as needed
];

function Card() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col p-2 items-start gap-4">
          <Image src={product.image} alt={product.name} width={300} height={400} />
          <div className="flex flex-col items-start justify-center text-[#CBA135]">
            <h1 className="text-lg font-bold">{product.name}</h1>
            <p className="text-sm text-[#CBA135]">{product.description}</p>
            <p className="text-sm flex items-center gap-2">
              <span className="line-through line-through-[#CBA135] text-[#CBA135]">{product.oldPrice}</span>
              <span className="text-[#CBA135] font-semibold">{product.newPrice}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
