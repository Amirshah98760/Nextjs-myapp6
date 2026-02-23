"use client";
import React, { use } from 'react'
import { useSearchParams } from 'next/navigation';

const ProductList = () => {
    const searchParams = useSearchParams();
    console.log(searchParams);

    const category = searchParams.get('category');
    const sort = searchParams.get('sort');
    const page = searchParams.get('page');



  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Product List</h1>
      <p>Category: {category}</p>
      <p>Sort: {sort}</p>
      <p>Page: {page}</p>
    </div>
  )
}

export default ProductList