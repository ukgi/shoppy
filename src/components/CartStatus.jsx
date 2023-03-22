import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import useCarts from "../hooks/useCarts";

export default function CartStatus() {
  const {
    cartsQuery: { data: products },
  } = useCarts();

  return (
    <div className='relative'>
      <BsFillCartFill className='text-4xl' />
      {products && (
        <p className='w-6 h-6 text-center bg-violet-500 text-white text-lg font-medium rounded-full absolute -top-1 -right-2 flex items-center justify-center'>
          {products.length}
        </p>
      )}
    </div>
  );
}
