import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export function UserContextApiProvider({ children }) {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const value = useContext(UserContext);
  if (value === undefined) {
    throw new Error("context는 context.provider 안에서 사용해야합니다");
  } else return value;
}
