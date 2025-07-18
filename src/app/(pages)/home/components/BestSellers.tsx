import Image from 'next/image';

export default function BestSellers() {
  const products = [
    {
      id: 1,
      title: 'Palm Gift Set',
      price: 'From $29.00',
      img: '/sellers/seller1.webp',
    },
    {
      id: 2,
      title: 'Noor Gift Set',
      price: 'From $22.00',
      img: '/sellers/seller2.webp',
    },
    {
      id: 3,
      title: 'Crescent Gift Set',
      price: 'From $75.00',
      img: '/sellers/seller3.webp',
    },
  ];

  return (
    <section className="bg-amber-50 text-black  w-svw py-12 px-10">
      <div className=" mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Best-Sellers</h2>
          <a href="#" className="text-sm underline ">Show All Products</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className=" rounded-lg shadow hover:shadow-md transition p-4">
              <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden">
                <Image src={p.img} alt={p.title} fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm ">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
