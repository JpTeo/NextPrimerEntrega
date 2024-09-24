"use client";

import { useState } from "react";
import Boton from "./Boton";
import Counter from "./Counter";

// Complejidad es 6: It’s time to do something...
const QtySelector = ({ item, inStock }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    console.log({
      ...item,
      quantity,
    });
  };

  return (
    <div className="flex flex-col gap-5 mt-6">
      <Counter max={inStock} counter={quantity} setCounter={setQuantity} />
      <Boton className="w-full hover:bg-blue-600" onClick={handleAdd}>
        Agregar al carrito
      </Boton>
    </div>
  );
};

export default QtySelector;
