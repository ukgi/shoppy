import React from "react";
import { useEffect } from "react";
import { readCartsData } from "../services/firebaseDatabase";

export default function MyCart() {
  useEffect(() => {
    readCartsData() //
      .then((data) => {
        console.log("장바구니 데이터", data);
      });
  }, []);

  return <div>My Cart</div>;
}
