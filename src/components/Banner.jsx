import React from "react";

export default function Banner() {
  return (
    <div className='h-96 relative'>
      <h1 className='z-10 absolute top-14 left-10 text-6xl italic font-semibold text-gray-400'>
        Style your day!
      </h1>
      <div className='w-full h-full bg-cover bg-banner opacity-80' alt=''></div>
    </div>
  );
}
