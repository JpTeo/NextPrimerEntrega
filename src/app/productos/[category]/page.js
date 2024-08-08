"use client";
import { useParams } from "next/navigation";
import React from "react";
import mockData from "../../../../data/mockData";
import ProductList from "@/app/components/ProductList";


const Tipo = () => {
  const { category } = useParams();
  const filterData = category === "all"
    ? mockData
    : mockData.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
  return (
    <>
      <h1> Esta pagina es por el tipo: {category} </h1>
      <ProductList category={category} data={filterData} />
     
    </>
  );
};

export default Tipo;
