import React, { useEffect } from "react";
import { useProductsContext } from "../context/ProductsContextApi";
import { readProductData } from "../services/firebaseDatabase";

export default function Home() {
  const { products, setProducts } = useProductsContext();
  useEffect(() => {
    readProductData(setProducts);
  }, []);
  return (
    <div className='p-3 w-full h-full flex flex-col gap-8'>
      <div className='relative'>
        <h1 className='absolute top-14 left-10 text-6xl italic font-semibold text-white'>
          Style your day!
        </h1>
        <img
          className='object-cover  w-full h-80'
          src='/images/homeBanner.jpg'
          alt=''
        />
      </div>
      <div className='flex gap-3'>
        {products &&
          products.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.image} alt='' />
              </div>
            );
          })}
      </div>
    </div>
  );
}
