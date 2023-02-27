import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ item }) {
  const { image, id } = item;
  const navigate = useNavigate();
  const handleDetailPage = () => {
    navigate(`/products/${id}`, { state: item });
  };
  return (
    <div className='cursor-pointer' onClick={handleDetailPage}>
      <img src={image} alt='' />
    </div>
  );
}
