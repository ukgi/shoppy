import React from "react";
import ProductCard from "../components/ProductCard";

import { useProductsContext } from "../context/ProductsContextApi";

export default function AllProducts() {
  const { products } = useProductsContext();

  return (
    <div className='p-3 flex gap-3'>
      {products &&
        products.map((item, index) => {
          return <ProductCard item={item} key={index} />;
        })}
    </div>
  );
}
