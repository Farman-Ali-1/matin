'use client';
import { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

export default function FilterSidebar() {
  const [expanded, setExpanded] = useState<string | null>('category');

  const toggleSection = (section: string) => {
    setExpanded(expanded === section ? null : section);
  };

  const categories = [
    'Festive gifting',
    'Weddings',
    'Celebrations',
    'Customized inspired',
    'Emirates',
    'Bakra inspired',
  ];

  const colors = [
    { name: 'Red', class: 'bg-red-600' },
    { name: 'Green', class: 'bg-green-500' },
    { name: 'Pink', class: 'bg-pink-400' },
    { name: 'Yellow', class: 'bg-yellow-400' },
    { name: 'Blue', class: 'bg-blue-500' },
    { name: 'Purple Brown', class: 'bg-purple-700' },
  ];

  const sizes = ['4XS', '3XS', '2XS', 'XS', 'S', 'M', 'L', 'XL', 'All Size'];

  return (
    <aside className="w-full md:w-72 rounded-3xl border border-[#CBA135] bg-[#0E1A34] p-4 text-[#CBA135]">
      <h2 className="text-xl font-semibold mb-4">Filter Products</h2>

      {/* Section: Category */}
      <div>
        <button
          className="w-full flex justify-between items-center py-2 font-medium"
          onClick={() => toggleSection('category')}
        >
          <span>Category</span>
          {expanded === 'category' ? <FaChevronDown /> : <FaChevronRight />}
        </button>
        {expanded === 'category' && (
          <div className="ml-2 flex flex-col gap-2 text-sm">
            {categories.map((item, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#CBA135]" />
                {item}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Section: Price */}
      <div className="mt-4">
        <button
          className="w-full flex justify-between items-center py-2 font-medium"
          onClick={() => toggleSection('price')}
        >
          <span>Price</span>
          {expanded === 'price' ? <FaChevronDown /> : <FaChevronRight />}
        </button>
        {expanded === 'price' && (
          <div className="px-2 mt-2 text-sm">
            <div className="flex justify-between text-white/70 text-xs mb-1">
              <span>$100</span>
              <span>$200</span>
            </div>
            <input type="range" min={100} max={200} className="w-full" />
          </div>
        )}
      </div>

      {/* Section: Colors */}
      <div className="mt-4">
        <button
          className="w-full flex justify-between items-center py-2 font-medium"
          onClick={() => toggleSection('colors')}
        >
          <span>Colors</span>
          {expanded === 'colors' ? <FaChevronDown /> : <FaChevronRight />}
        </button>
        {expanded === 'colors' && (
          <div className="flex flex-wrap gap-2 px-2 mt-2">
            {colors.map((color, i) => (
              <div key={i} className="flex items-center gap-1 text-xs">
                <div className={`w-4 h-4 rounded-full ${color.class}`}></div>
                <span className="text-white/70">{color.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Section: Sizes */}
      <div className="mt-4">
        <button
          className="w-full flex justify-between items-center py-2 font-medium"
          onClick={() => toggleSection('sizes')}
        >
          <span>Sizes</span>
          {expanded === 'sizes' ? <FaChevronDown /> : <FaChevronRight />}
        </button>
        {expanded === 'sizes' && (
          <div className="grid grid-cols-3 gap-2 px-2 mt-2 text-sm">
            {sizes.map((size, i) => (
              <label key={i} className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#CBA135]" />
                {size}
              </label>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
