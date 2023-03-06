import React from "react";
import { readProductData } from "../services/firebaseDatabase";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { container } from "../animation/Variants";

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], readProductData);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <motion.ul
        variants={container}
        initial='hidden'
        animate='visible'
        className='flex gap-4'
      >
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </motion.ul>
    </>
  );
}
