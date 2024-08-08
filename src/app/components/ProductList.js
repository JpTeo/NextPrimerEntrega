import React from 'react'
import ProductCard from './ProductCard'

function ProductList({data, category}) {
  return (
    <div className='flex flex-wrap justify-center items-center'>
{data.map((product, index) => (
<ProductCard
key={index}
title={product.title}
description={product.description}
price={product.price}
category={product.category}
image={product.image}/>


))}

    </div>
  )
}

export default ProductList