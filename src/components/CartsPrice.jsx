import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function CartsPrice({ products }) {
  const deliveryFee = 3000;
  const [cartsPrice, setCartsPrice] = useState(0);

  useEffect(() => {
    let allPrice = 0;

    const handleCartsPrice = () => {
      products.map((product) => {
        allPrice += product.price * product.quantity;
        return setCartsPrice(allPrice);
      });
    };
    handleCartsPrice();
  }, [products]);

  return (
    <div className='mb-5 flex justify-between'>
      <div className='text-center bg-gray-50 p-8 mx-2 rounded-2xl text-lg md:text-xl'>
        <h2>상품 총액</h2>
        <span className='font-bold text-purple-400 text-xl md:text-2xl'>
          {cartsPrice}원
        </span>
      </div>
      <div className='text-center bg-gray-50 p-8 mx-2 rounded-2xl text-lg md:text-xl'>
        <h2>배송액</h2>
        <span className='font-bold text-purple-400 text-xl md:text-2xl'>
          {deliveryFee}원
        </span>
      </div>
      <div className='text-center bg-gray-50 p-8 mx-2 rounded-2xl text-lg md:text-xl'>
        <h2>총가격</h2>
        <span className='font-bold text-purple-400 text-xl md:text-2xl'>
          {cartsPrice + deliveryFee}원
        </span>
      </div>
    </div>
  );
}
