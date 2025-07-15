import Image from 'next/image';

export default function DiscoverSection() {
  return (
    <section className=" bg-white w-svw text-black  py-22 px-4">
      <div className='max-w-6xl mx-auto '>
        <div className="  mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-80 w-full rounded-lg overflow-hidden">
          <Image src="/carousel/slide1.jpg" alt="Gourmet Delights" fill className="object-cover" />
        </div>
        <div className="relative h-80 w-full rounded-lg overflow-hidden">
          <Image src="/carousel/slide2.jpg" alt="Leather Gift Sets" fill className="object-cover" />
        </div>
      </div>
      <div className="text-center   mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full mx-auto">
        <div>
          <h3 className="text-lg font-semibold">Discover Gourmet Delights</h3>
          <p className="text-sm mt-1">Experience culinary excellence with the finest ingredients and craftsmanship</p>
          <button className="mt-2 text-sm  underline">Shop Collection</button>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Leather Gift Sets</h3>
          <p className="text-sm  mt-1">Elevate your gifting experience with Bateel’s luxurious leather collection</p>
          <button className="mt-2 text-sm underline">Shop Collection</button>
        </div>
      </div>
      </div>
    </section>
  );
}
