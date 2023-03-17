import React, { createContext, useContext, useState } from "react";

export const CartsContext = createContext();

export default function CartsContextApiProvider({ children }) {
  const [carts, setCarts] = useState();

  return (
    <CartsContext.Provider value={{ carts, setCarts }}>
      {children}
    </CartsContext.Provider>
  );
}

export function useCartsContext() {
  const value = useContext(CartsContext);
  if (value === undefined) {
    throw new Error("context는 context.provider 안에서 사용해야합니다");
  } else return value;
}
