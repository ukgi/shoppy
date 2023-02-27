import React from "react";
import { useLocation } from "react-router-dom";

export default function ProductDetail() {
  // ⬇️ useLocation 을 통해 현재 url의 정보를 취득할 수 있다
  const { state } = useLocation();
  const { category, description, title, price, image } = state;
  console.log("state", state);
  return (
    <div className='py-5 w-full h-full flex flex-col items-center'>
      <div>
        <img src={image} />
      </div>
      <div className='text-center'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
