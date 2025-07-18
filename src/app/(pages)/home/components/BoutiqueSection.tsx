import Image from 'next/image';

export default function BoutiqueSection() {
  return (
    <section className="bg-[#fef9f2] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Text */}
        <div>
          <p className="text-sm uppercase text-gray-500 font-medium mb-2">Experience</p>
          <h2 className="text-2xl font-bold mb-4">Boutique Finder</h2>
          <p className="text-gray-700 mb-4">
            Visit your nearest Bateel boutique and indulge in a unique selection of gourmet products.
          </p>
          <button className="text-sm text-black underline">Find a Boutique</button>
        </div>

        {/* Right: Image */}
        <div className="relative w-full h-72 md:h-96 rounded-md overflow-hidden">
          <Image
            src="/carousel/slide1.jpg"
            alt="Bateel Boutique"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
