"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);

  return (
    <div className="  bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-64">

        <div className="flex justify-center items-center mb-4">
          <button
            onClick={decrement}
            className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-l-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
          >
            -
          </button>
          <span className="mx-4 text-2xl font-semibold text-gray-800">
            {count}
          </span>
          <button
            onClick={increment}
            className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-r-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          >
            +
          </button>
        </div>
        <button
          onClick={reset}
          className="w-full bg-yellow-500 text-white font-bold py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Counter;