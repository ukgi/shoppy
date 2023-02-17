import React from "react";
import { IoShirt } from "react-icons/io5";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logInGoogle, logOut } from "../services/firebaseAuth";
import { useUserContext } from "../context/UserContextApi";

export default function Header() {
  const { user, setUser } = useUserContext();
  return (
    <div className='w-full p-5 border-b border-gray-300  flex justify-between items-center'>
      <Link to='/' className='flex items-center cursor-pointer'>
        <IoShirt className='text-5xl text-violet-500' />
        <h1 className='text-4xl text-violet-500'>SHOPPY</h1>
      </Link>
      <div className='flex gap-x-5 items-center'>
        <Link to='/products' className='text-2xl'>
          Products
        </Link>
        <Link to='/carts' className='text-2xl'>
          Carts
        </Link>
        <Link to='/products/new' className='text-2xl'>
          <BsFillPencilFill />
        </Link>
        {user ? (
          <button className='text-2xl' onClick={() => logOut(setUser)}>
            Logout
          </button>
        ) : (
          <button className='text-2xl' onClick={() => logInGoogle(setUser)}>
            Login
          </button>
        )}
      </div>
    </div>
  );
}
