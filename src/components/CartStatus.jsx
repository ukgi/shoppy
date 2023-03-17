import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useUserContext } from "../context/UserContextApi";
import { readCartsData } from "../services/firebaseDatabase";

export default function CartStatus() {
  const { uid } = useUserContext();

  const { data: products } = useQuery(["carts"], () => readCartsData(uid));

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
