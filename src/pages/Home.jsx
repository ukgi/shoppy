import React from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";

export default function Home() {
  return (
    <div className='p-5 w-full h-full flex flex-col gap-8'>
      <Banner />
      <Products />
    </div>
  );
}
