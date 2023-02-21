import React from "react";
import { IoShirt } from "react-icons/io5";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  logInGoogle,
  logOut,
  onUserStateChange,
} from "../services/firebaseAuth";
import { useUserContext } from "../context/UserContextApi";
import { useEffect } from "react";
import User from "./User";
import Button from "./ui/Button";

export default function Header() {
  const { user, setUser } = useUserContext();

  useEffect(() => {
    onUserStateChange(setUser);
  }, [setUser]);

  return (
    <nav className='w-full p-5 border-b border-gray-300  flex justify-between items-center'>
      <Link to='/' className='flex items-center cursor-pointer'>
        <IoShirt className='text-3xl md:text-5xl text-violet-500' />
        <h1 className='text-2xl md:text-4xl text-violet-500'>SHOPPY</h1>
      </Link>
      <div className='flex gap-x-5 items-center'>
        <Link to='/products' className='text-1xl md:text-2xl'>
          Products
        </Link>
        <Link to='/carts' className='text-1xl md:text-2xl'>
          Carts
        </Link>
        {user && user.isAdmin && (
          <Link to='/products/new' className='text-1xl md:text-2xl'>
            <BsFillPencilFill />
          </Link>
        )}
        {user ? (
          <div className='flex items-center gap-3'>
            <User user={user} />
            <Button text={"Logout"} onClick={logOut} />
          </div>
        ) : (
          <Button text={"Login"} onClick={logInGoogle} />
        )}
      </div>
    </nav>
  );
}
