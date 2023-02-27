import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const ProductsContext = createContext();

export default function ProductsContextApiProvider({ children }) {
  const [products, setProducts] = useState([]);
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductsContext() {
  const value = useContext(ProductsContext);
  if (value === undefined) {
    throw new Error("context는 context.provider 안에서 사용해야합니다");
  } else return value;
}
