"use client"
import React from 'react'
import ProductList from '../components/ProductList'
import mockData from '../../../data/mockData';


function productos() {
  return (
    <>
        <ProductList  category={"all"} data={mockData}/>
    </>
  );
}

export default productos