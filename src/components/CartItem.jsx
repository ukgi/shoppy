import React from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useUserContext } from "../context/UserContextApi";
import { storeCartProduct } from "../services/firebaseDatabase";

export default function CartItem({ product }) {
  const { uid } = useUserContext();
  const { image, options, price, title, quantity } = product;

  const handleQuantityPluse = () => {
    return storeCartProduct(uid, { ...product, quantity: quantity + 1 });
  };
  return (
    <div className='mb-7 flex justify-between items-center'>
      <div className='flex items-center gap-3'>
        <img src={image} alt='cartImage' />
        <div>
          <h3>{title}</h3>
          <h2>{options} 사이즈</h2>
          <h2>{price}원</h2>
        </div>
      </div>
      <div className='flex items-center gap-1'>
        <AiOutlinePlusSquare onClick={handleQuantityPluse} />
        <span>{quantity}</span>
        <AiOutlineMinusSquare />
        <BsFillTrashFill />
      </div>
    </div>
  );
}
