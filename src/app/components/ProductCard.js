import React from "react";
import Image from "next/image";
import Counter from "./Counter";

function ProductCard({ title, description, price, category, image }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex flex-wrap items-center justify-between">
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mb-2">
          {category}
        </span>
        <span className="inline-block bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold mb-2">
          ${price.toFixed(2)}
          
        </span>
        <Counter></Counter>
      </div>
    </div>
  );
}

export default ProductCard;
