import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { item } from "../animation/Variants";

export default function ProductCard({ product }) {
  const { image, id, title, price, category } = product;
  const navigate = useNavigate();
  const handleDetailPage = () => {
    navigate(`/products/${id}`, { state: product });
  };
  return (
    <motion.li
      className='rounded-lg overflow-hidden w-70 h-full shadow-md shadow-gray-300 cursor-pointer'
      variants={item}
      whileHover={{ scale: 1.05 }}
      onClick={handleDetailPage}
    >
      <img className='w-full' src={image} alt='' />
      <div className='px-3 pt-2 flex justify-between'>
        <h3 className='font-semibold'>{title}</h3>
        <h4 className='font-semibold'>{price}원</h4>
      </div>
      <p className='px-3 py-2 text-xs text-gray-400'>{category}</p>
    </motion.li>
  );
}
