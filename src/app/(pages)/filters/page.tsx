'use client'
import Image from "next/image";
import { useState } from "react";

const products = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Dates Box ${i + 1}`,
  price: 80 + (i * 5) % 100,
  category: ["Premium", "Luxury", "Traditional", "Standard"][
    i % 4
  ],
  image: "/assets/dates5.webp",
}));

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(200);
  const [sortBy, setSortBy] = useState("lowToHigh");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 9;

  const filteredProducts = products
    .filter((p) =>
      selectedCategory === "All" ? true : p.category === selectedCategory
    )
    .filter((p) => p.price <= maxPrice)
    .sort((a, b) =>
      sortBy === "lowToHigh" ? a.price - b.price : b.price - a.price
    );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <main className="min-h-screen bg-background text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Dates Gift Store</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full h-fit text-primary border-primary border md:w-1/4 bg-background px-4 py-8 rounded-4xl">
          <h2 className="text-2xl font-bold mb-4">Filter Products</h2>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 bg-background rounded"
            >
              <option value="All">All</option>
              <option value="Premium">Premium</option>
              <option value="Luxury">Luxury</option>
              <option value="Traditional">Traditional</option>
              <option value="Standard">Standard</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Max Price (${maxPrice})</label>
            <input
              type="range"
              min="50"
              max="200"
              step="5"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full"
            />
          </div>
        </aside>

        <div className="flex-1 flex flex-col gap-4">
          {/* Top Bar with Applied Filters & Sort By */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-background mb-4">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                Showing {paginatedProducts.length} results from total{" "}
                {filteredProducts.length} for{" "}
                <span className="text-primary font-semibold">Dates Gifting</span>
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedCategory !== "All" && (
                  <span className="px-3 py-1 bg-primary text-background rounded-full text-xs">
                    {selectedCategory} ✕
                  </span>
                )}
                {maxPrice !== 200 && (
                  <span className="px-3 py-1 bg-primary text-background rounded-full text-xs">
                    Under ${maxPrice} ✕
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className="mr-2 text-sm">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-2 bg-primary text-background rounded"
              >
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-background text-primary  p-4 "
              >
                <Image
                  height={260}
                  width={160}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-70 object-cover rounded-t-3xl mb-2"
                />
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-white font-semibold">${product.price}</p>
                </div>
                <p className="text-sm">{product.category}</p>
              </div>
            ))}
          </section>

          {/* Pagination */}
          <div className="flex items-center  justify-evenly gap-2 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="border border-primary px-4 py-2 rounded-full flex items-center gap-1"
            >
              ← Previous
            </button>

            {[...Array(totalPages).keys()].slice(0, 5).map((i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 rounded-full ${
                  currentPage === i + 1
                    ? "bg-primary text-background"
                    : "text-primary"
                }`}
              >
                {i + 1}
              </button>
            ))}

            {totalPages > 5 && (
              <>
                <span className="text-primary">...</span>
                <button
                  onClick={() => handlePageChange(totalPages)}
                  className={`px-3 py-1 rounded-full ${
                    currentPage === totalPages
                      ? "bg-primary text-background"
                      : "text-primary"
                  }`}
                >
                  {totalPages}
                </button>
              </>
            )}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="border border-primary px-4 py-2 rounded-full flex items-center gap-1"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
