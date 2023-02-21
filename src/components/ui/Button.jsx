import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className='bg-indigo-500 text-white py-2 px-4 rounded-sm hover:brightness-110'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
