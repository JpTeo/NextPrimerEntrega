"use client";
import { useParams } from "next/navigation";
import React from "react";
import mockData from "../../../../data/mockData";
import ProductList from "@/app/components/ProductList";
import NavigationMenu from "@/app/components/NavigationMenu";
import ProductDetail from "@/app/components/ProductDetail";

const Tipo = () => {
  const { title } = useParams();
  const filterData =
    title === "all"
      ? mockData
      : mockData.filter(
          (item) => item.title.toLowerCase() === title.toLowerCase()
        );
  return (
    <>
    

      <ProductDetail category={title} data={filterData} />
    </>
  );
};

export default Tipo;
