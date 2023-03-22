import React from "react";
import { IoShirt } from "react-icons/io5";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logInGoogle, logOut } from "../services/firebaseAuth";
import { useUserContext } from "../context/UserContextApi";

import User from "./User";
import Button from "./ui/Button";
import CartStatus from "./CartStatus";

export default function Header() {
  const { user } = useUserContext();

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
        {user && (
          <Link to='/carts' className='relative text-1xl md:text-2xl'>
            <CartStatus />
          </Link>
        )}
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
