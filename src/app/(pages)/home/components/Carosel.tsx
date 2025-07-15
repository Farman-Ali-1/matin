'use client'; // Only if you're using Next.js 13+ with the app directory

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const Carousel = ({ images = [], interval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => resetTimeout();
  }, [current, images.length, interval]);

  const handleDotClick = (index) => setCurrent(index);

  return (
    <div className="relative w-svw  mx-auto overflow-hidden  shadow-md">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="w-full flex-shrink-0 relative h-64 md:h-96" key={index}>
            <Image
              src={img}
              alt={`Slide ${index}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? 'bg-white' : 'bg-gray-400'
            } transition-colors duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
