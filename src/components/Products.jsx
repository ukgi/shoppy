import React from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { container } from "../animation/Variants";
import useProducts from "../hooks/useProducts";

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <motion.ul
        variants={container}
        initial='hidden'
        animate='visible'
        className='w-full grid grid-flow-row place-items-stretch lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-4'
      >
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </motion.ul>
    </>
  );
}
