import React from "react";

const Boton = ({ children, className, ...args }) => {
  return (
    <button
      className={`max-w-xs bg-orange-500 text-white font-bold py-1 px-2 border-4 border-orange-500 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition-transform transform hover:scale-105 ${className}`}
      {...args}
    >
      {children}
    </button>
  );
};

export default Boton;
