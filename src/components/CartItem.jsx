import React from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import useCarts from "../hooks/useCarts";

export default function CartItem({ product }) {
  const { handleStoreUpdate, handleDeleteItem } = useCarts();
  const { id: productId, image, options, price, title, quantity } = product;

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
        <AiOutlinePlusSquare
          className='cursor-pointer'
          onClick={() =>
            handleStoreUpdate.mutate({ ...product, quantity: quantity + 1 })
          }
        />
        <span>{quantity}</span>
        {quantity === 1 ? (
          <span></span>
        ) : (
          <AiOutlineMinusSquare
            className='cursor-pointer'
            onClick={() =>
              handleStoreUpdate.mutate({ ...product, quantity: quantity - 1 })
            }
          />
        )}
        <BsFillTrashFill
          className='cursor-pointer'
          onClick={() => handleDeleteItem.mutate({ productId })}
        />
      </div>
    </div>
  );
}
