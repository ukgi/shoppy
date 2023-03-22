import React from "react";
import CartItem from "../components/CartItem";
import CartsPrice from "../components/CartsPrice";
import Button from "../components/ui/Button";
import useCarts from "../hooks/useCarts";

export default function MyCart() {
  const {
    cartsQuery: { isLoading, data: products },
  } = useCarts();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;

  return (
    <section className='flex flex-col px-36 pb-5'>
      <h1 className='py-4 mb-5 text-center border-b-2'>내 장바구니</h1>
      <ul>
        {hasProducts &&
          products.map((product, index) => (
            <CartItem key={index} product={product} />
          ))}
      </ul>
      <CartsPrice products={products} />
      <Button text={"주문하기"} />
    </section>
  );
}
