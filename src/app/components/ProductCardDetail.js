import React from "react";
import Image from "next/image";
import Boton from "./Boton";
import Link from "next/link";
import Counter from "./Counter";

function ProductCardDetail({ title, description, price, category, image, slug }) {
  return (
    <Link href={`/nosotros/${title}`} className="flex flex-col">
      <div className="max-w-3xl flex rounded overflow-hidden shadow-lg m-4 bg-gradient-to-r from-gray-300 to-white">
        {/* Imagen a la izquierda */}
        <div className="w-1/3">
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido a la derecha */}
        <div className="w-2/3 p-6 flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-xl mb-2 text-gray-800">{title}</h2>
            <p className="text-gray-700 text-base mb-2">{description}</p>
            <h2 className="font-bold text-xl mb-2 text-gray-800">
              ${price.toFixed(2)}
            </h2>
          </div>
    <Counter></Counter>
          <div className="flex items-center justify-between ">
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
              {category}
            </span>
            <span className="">
              <Boton>Agregar al carrito</Boton>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCardDetail;
