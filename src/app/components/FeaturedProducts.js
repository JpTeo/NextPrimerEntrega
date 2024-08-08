import Image from "next/image";

const FeaturedProducts = () => {
  return (
    <section className="bg-yellow-50 py-10">
      <div className="container mx-auto">
        <h3 className="text-3xl font-serif text-center text-gray-800">
          Productos Destacados
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            "Refrigerador Medieval",
            "Horno Encantado",
            "Lava Trastos Mágico",
          ].map((producto, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
                            <h4 className="text-xl font-serif mt-4">{producto}</h4>
              <p className="mt-2 text-gray-600">
                Con tecnología del más alto calibre.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
