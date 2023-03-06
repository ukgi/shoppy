import React from "react";
import { useEffect } from "react";
import { readCartsData } from "../services/firebaseDatabase";

export default function MyCart() {
  useEffect(() => {
    readCartsData().then((data) => console.log(data));
  }, []);

  return <div>My Cart</div>;
}
