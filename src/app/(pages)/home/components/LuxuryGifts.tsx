import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function LuxuryGifts() {
  const products = [
    {
      id: 1,
      title: 'Nakhla Gift Set',
      price: 'From $197.00',
      img: '/gifts/gift1.webp',
    },
    {
      id: 2,
      title: 'Zareen Gift Set',
      price: 'From $167.00',
      img: '/gifts/gift2.webp',
    },
    {
      id: 3,
      title: 'Gulf Map Gift Set',
      price: 'From $217.00',
      img: '/gifts/gift3.webp',
    },
  ];
  const router = useRouter();
  return (
    <section className=" w-svw bg-white text-black py-12 px-10">
      <div className=" mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 onClick={()=>router.push("/shop")} className="text-2xl font-bold">Luxury Gifts</h2>
          <a href="#" className="text-sm underline ">Show All Products</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div onClick={()=>router.push("/product_detail")}  key={p.id} className=" rounded-lg shadow hover:shadow-md transition p-4">
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
