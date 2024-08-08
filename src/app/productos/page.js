"use client"
import React from 'react'
import ProductList from '../components/ProductList'
import mockData from '../../../data/mockData';


function productos() {
  return (
    <>
      <h1>Productos:</h1>
      <ProductList  category={"all"} data={mockData}/>
    </>
  );
}

export default productos