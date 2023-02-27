import React from "react";

export default function User({ user }) {
  const { photoURL, displayName } = user;
  return (
    <>
      <img
        className='w-12 rounded-full'
        src={photoURL}
        alt='userGoogleImage'
        referrerPolicy='no-referrer'
      />
      <h2 className='hidden md:block text-2xl'>{displayName}</h2>
    </>
  );
}
