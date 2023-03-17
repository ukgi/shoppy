import { useQuery } from "@tanstack/react-query";
import React from "react";
import CartItem from "../components/CartItem";
import { useUserContext } from "../context/UserContextApi";
import { readCartsData } from "../services/firebaseDatabase";

export default function MyCart() {
  const { uid } = useUserContext();
  const { isLoading, data: products } = useQuery(["carts"], () =>
    readCartsData(uid)
  );
  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  console.log("쇼핑카트", products);
  return (
    <section className='px-36'>
      <h1 className='py-4 mb-5 text-center border-b-2'>내 장바구니</h1>
      <ul>
        {hasProducts &&
          products.map((product, index) => (
            <CartItem key={index} product={product} />
          ))}
      </ul>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <button>주문하기</button>
    </section>
  );
}
