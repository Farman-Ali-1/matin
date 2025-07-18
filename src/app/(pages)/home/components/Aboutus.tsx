export default function AboutUs() {
  return (
    <section id="about" className="relative w-full bg-white text-[#333333] py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative Background Shape */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-100 rounded-full opacity-20 z-0 blur-2xl"></div>
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow-200 rounded-full opacity-20 z-0 blur-2xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          About <span className="text-yellow-500">Azura</span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Azura is a symbol of gourmet excellence rooted in Arabian heritage. We craft luxurious date products and fine foods
          that blend traditional craftsmanship with modern elegance. From our signature filled dates to our premium gift sets,
          every product is made to deliver a remarkable experience.
        </p>
        <p className="mt-6 text-lg md:text-xl leading-relaxed">
          With a presence in over 20 countries, Azura boutiques and cafes invite you to explore a world of refined taste and timeless indulgence.
        </p>
        <div className="mt-10">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300">
            Explore Our Story
          </button>
        </div>
      </div>
    </section>
  );
}
