import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
       
        <div className="md:ml-8 mt-6 md:mt-0">
          <h3 className="text-3xl font-serif text-gray-800">
            Nuestra Historia
          </h3>
          <p className="mt-4 text-gray-600">
            Somos una empresa de electrodomésticos con más de 100 años de
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;


