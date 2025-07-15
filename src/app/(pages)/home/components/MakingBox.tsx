import Image from 'next/image';

export default function MakingBox() {
  return (
    <section className="w-svw  pr-4">
      <div className="max-w-screen mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div className="relative  h-[65vh]   overflow-hidden">
          <Image
            src="/sellers/seller1.webp"
            alt="The Making Of A Bateel Box"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Text */}
        <div>
          <p className="text-sm uppercase  font-medium mb-2">Featured</p>
          <h2 className="text-2xl font-bold mb-4">The Making Of A Bateel Box</h2>
          <p className="">
            Discover the creative inspiration and artisan techniques behind the "perfect treasure chests".
          </p>
        </div>
      </div>
    </section>
  );
}
