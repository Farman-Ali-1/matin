"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
const products = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Dates Box ${i + 1}`,
  price: 80 + ((i * 5) % 100),
  category: ["Premium", "Luxury", "Traditional", "Standard"][i % 4],
  image: "/assets/dates5.webp",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  size: "Small",
}));
import useStore from "../../store/store";
import useProductStore from "@/app/store/product";

export default function Page() {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(200);
  const [sortBy, setSortBy] = useState("lowToHigh");
  const [currentPage, setCurrentPage] = useState(1);
  const [showCategories, setShowCategories] = useState(false);
  const { addtoCart } = useStore();
  const productsPerPage = 9;
  const setSelectedProduct = useProductStore(
    (state) => state.setSelectedProduct
  );

  
  const handlAddtoCart = (product: any) => {
    addtoCart(product);
  };

  const filteredProducts = products
    .filter((p) =>
      selectedCategories.length === 0
        ? true
        : selectedCategories.includes(p.category)
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

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <main className="min-h-screen bg-white text-white p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Dates Gift Store</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 border border-primary rounded-4xl p-4 text-primary h-fit">
          <h2 className="text-2xl font-bold mb-4">Filter Products</h2>

          {/* Category Filter with Checkboxes */}
          <div className="mb-4">
            <button
              className="flex items-center justify-between w-full font-semibold py-2"
              onClick={() => setShowCategories(!showCategories)}
            >
              <span>Category</span>
              <span
                className={`transform transition-transform duration-200 ${
                  showCategories ? "rotate-90" : ""
                }`}
              >
                ▶
              </span>
            </button>
            <div
              className={`${
                showCategories ? "block" : "hidden"
              } mt-2 pl-2 space-y-2`}
            >
              {["Premium", "Luxury", "Traditional", "Standard"].map((cat) => (
                <label key={cat} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    value={cat}
                    checked={selectedCategories.includes(cat)}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (e.target.checked) {
                        setSelectedCategories((prev) => [...prev, value]);
                      } else {
                        setSelectedCategories((prev) =>
                          prev.filter((item) => item !== value)
                        );
                      }
                    }}
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">
              Max Price (${maxPrice})
            </label>
            <input
              type="range"
              min="50"
              max="200"
              step="5"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        </aside>

        {/* Product Section */}
        <section className="flex-1 flex flex-col gap-4">
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white">
            <div>
              <p className="text-sm text-black">
                Showing {paginatedProducts.length} results from total{" "}
                {filteredProducts.length} for{" "}
                <span className="text-primary font-semibold">
                  Dates Gifting
                </span>
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedCategories.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 bg-primary text-black rounded-full text-xs flex items-center gap-1"
                  >
                    {cat}
                    <button
                      onClick={() =>
                        setSelectedCategories((prev) =>
                          prev.filter((c) => c !== cat)
                        )
                      }
                      className="text-xs"
                    >
                      ✕
                    </button>
                  </span>
                ))}
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

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white  text-primary p-4 rounded-2xl border "
              >
                <Image
                  onClick={() => {
                    setSelectedProduct(product);
                    router.push("/product_detail");
                  }}
                  height={260}
                  width={160}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-t-3xl mb-2"
                />
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-[#CBA135] font-semibold">
                    ${product.price}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">{product.category}</p>
                  <button
                    className="p-1 border"
                    onClick={() => handlAddtoCart(product)}
                  >
                    Add Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="border border-primary text-primary px-4 py-2 rounded-full"
            >
              ← Previous
            </button>

            {[...Array(totalPages).keys()].slice(0, 5).map((i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 rounded-full ${
                  currentPage === i + 1
                    ? "bg-background text-white"
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
              className="border border-primary text-primary px-4 py-2 rounded-full"
            >
              Next →
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
