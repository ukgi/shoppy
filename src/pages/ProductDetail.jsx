import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductDetail() {
  // ⬇️ useLocation 을 통해 현재 url의 정보를 취득할 수 있다
  const { state } = useLocation();
  const { category, description, title, price, image, options } = state;
  const [option, setOption] = useState();

  const handleOption = (e) => {
    return setOption(e.target.value);
  };

  console.log("state", state);
  return (
    <div className='py-5 w-full h-full flex justify-center gap-5'>
      <img className='w-80 h-full' src={image} alt='' />
      <div className='p-3 flex flex-col'>
        <div className='py-3 border-b-2'>
          <h2 className='pb-1 text-3xl font-semibold'>{title}</h2>
          <h2 className='text-2xl font-semibold'>{price}원</h2>
        </div>
        <p className='py-3'>{description}</p>
        <div className='w-full flex items-center gap-5'>
          <label htmlFor='select'>옵션 : </label>
          <select
            onChange={handleOption}
            className='py-2 border-dashed border-2'
          >
            <option>옵션을 골라주세요</option>
            {options.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
        </div>
        <motion.button
          whileHover={{ scale: 1.08 }}
          className='mt-5 p-2 flex items-center justify-center bg-violet-500 text-base text-white font-semibold rounded-md'
        >
          장바구니에 추가
        </motion.button>
      </div>
    </div>
  );
}
