"use client";
import { useParams } from "next/navigation";
import React from "react";
import mockData from "../../../../data/mockData";
import ProductList from "@/app/components/ProductList";
import NavigationMenu from "@/app/components/NavigationMenu";





const Tipo = () => {
  const { category } = useParams();
  const filterData = category === "all"
    ? mockData
    : mockData.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
  return (
    <>
      <h1 className="bg-black text-white text-4xl font-bold w-full text-center py-4 capitalize">
        {" "}
        {category}{" "}
      </h1>
    
      <ProductList category={category} data={filterData} />
          </>
  );
};

export default Tipo;
