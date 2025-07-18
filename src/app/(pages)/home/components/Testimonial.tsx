'use client';

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
    quote:
      'The AI consultation saved me a trip to the doctor. I got immediate answers to my questions and peace of mind. When I needed more detailed advice, the expert call was incredibly helpful.',
  },
  {
    name: 'Michael Chen',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
    quote:
      'As someone with a busy schedule, being able to get health advice at any time of day has been a game-changer. The voice feature makes it feel like I\'m talking to a real person.',
  },
  {
    name: 'Emily Rodriguez',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 4,
    quote:
      'I was skeptical at first, but the AI gave me surprisingly accurate information about my symptoms. The premium plan is worth it for the expert calls alone.',
  },
  {
    name: 'Daniel Smith',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    quote:
      'Super helpful tool! Got suggestions that matched my symptoms exactly. Highly recommended.',
  },
  {
    name: 'Ayesha Patel',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    quote:
      'It’s like having a doctor in your pocket. Very user-friendly and fast responses.',
  },
];

const Testimonial: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.clientWidth / 3; // Show 3 at a time on desktop
      container.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative bg-amber-50 text-black py-16 sm:py-24 w-full ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="text-center mb-8">
          <p className="text-4xl font-extrabold sm:text-5xl">What Our Users Say</p>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute top-1/2 left-4 z-20 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute top-1/2 right-4 z-20 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto hide-scrollbar gap-6 scroll-smooth  snap-x snap-mandatory pb-4"
        >
          {testimonials.map((review, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 w-[90%] sm:w-[70%] md:w-[45%] lg:w-[32%] bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center">
                <Image
                  className="rounded-full object-cover"
                  src={review.img}
                  alt={review.name}
                  width={48}
                  height={48}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold">{review.name}</h4>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-yellow-400 stroke-current fill-none'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm">&quot;{review.quote}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
