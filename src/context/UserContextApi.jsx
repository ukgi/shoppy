import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  logInGoogle,
  logOut,
  onUserStateChange,
} from "../services/firebaseAuth";

export const UserContext = createContext();

export function UserContextApiProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, [setUser]);

  return (
    <UserContext.Provider
      value={{
        user,
        uid: user && user.uid,
        setUser,
        login: logInGoogle,
        logout: logOut,
      }}
    >
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
