import React from "react";
import ProductCard from "./ProductCard";
import ProductCardDetail from "./ProductCardDetail";

function ProductDetail({ data, category }) {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {data.map((product, index) => (
        <ProductCardDetail
          key={index}
          title={product.title}
          slug={product.slug}
          inStock={product.inStock}
          description={product.description}
          price={product.price}
          category={product.category}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductDetail;
