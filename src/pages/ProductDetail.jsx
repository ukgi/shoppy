import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { readCartsData, storeCartProduct } from "../services/firebaseDatabase";
import { useCartsContext } from "../context/CartsContextApi";

export default function ProductDetail() {
  // ⬇️ useLocation 을 통해 현재 url의 정보를 취득할 수 있다
  const { state } = useLocation();
  const { category, description, title, price, image, options } = state;
  const [option, setOption] = useState(options && options[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState();
  const { setCarts } = useCartsContext();

  const handleOption = (e) => {
    return setOption(e.target.value);
  };

  const handleStoreCart = () => {
    setIsLoading(true);
    storeCartProduct(state, option) //
      .then(() => {
        setSuccess("성공적으로 장바구니에 저장되었습니다👍");
        setTimeout(() => {
          setSuccess(null);
        }, 4000);
        readCartsData() //
          .then((data) => {
            setCarts(data.length);
            localStorage.setItem("carts", data.length);
          });
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  return (
    <div className='py-5 w-full h-full flex flex-col items-center md:flex-row md:justify-center gap-5'>
      <div>
        <p>{category}</p>
        <img className='mt-2 w-80 h-full' src={image} alt={title} />
      </div>
      <div className='p-3 flex flex-col'>
        <div className='py-3 border-b-2 border-violet-300'>
          <h2 className='pb-1 text-3xl font-semibold'>{title}</h2>
          <h2 className='text-2xl font-semibold'>{price}원</h2>
        </div>
        <p className='py-3'>{description}</p>
        <div className='w-full flex items-center gap-5'>
          <label htmlFor='select'>옵션 : </label>
          <select
            onChange={handleOption}
            className='w-36 py-2 border-dashed border-2 outline-none border-violet-300'
            value={option}
          >
            {options &&
              options.map((option, index) => {
                return <option key={index}>{option}</option>;
              })}
          </select>
        </div>
        <p className='mt-3 font-semibold'>{success}</p>
        <motion.button
          whileHover={{ scale: 1.08 }}
          className='mt-5 p-2 flex items-center justify-center bg-violet-500 text-base text-white font-semibold rounded-md'
          onClick={handleStoreCart}
        >
          {isLoading ? "잠시만 기다려주세요..." : " 장바구니에 추가"}
        </motion.button>
      </div>
    </div>
  );
}
