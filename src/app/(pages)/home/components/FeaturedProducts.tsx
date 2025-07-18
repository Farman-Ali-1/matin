import Image from 'next/image';

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      title: 'Assorted Dates Ballotin',
      price: 'From $29.00',
      img: '/carousel/slide1.jpg',
    },
    {
      id: 2,
      title: 'Nura Gift Set',
      price: 'From $60.00',
      img: '/carousel/slide2.jpg',
    },
    {
      id: 3,
      title: 'Gold Palm Nuts Gift Set',
      price: '$120.00',
      img: '/carousel/slide3.jpg',
    },
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-lg shadow hover:shadow-md transition p-4">
              <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden">
                <Image src={p.img} alt={p.title} fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
