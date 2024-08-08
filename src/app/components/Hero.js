import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: "url(/path-to-medieval-image.jpg)" }}
    >
      <div className="container mx-auto text-center py-20">
        <h2 className="text-5xl text-yellow-200 font-bold font-serif">
          Bienvenido a la Era de la Innovación
        </h2>
        <p className="mt-4 text-xl text-white">
          Descubre nuestros electrodomésticos de calidad real.
        </p>
      </div>
    </section>
  );
};
export default Hero;
