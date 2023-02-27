import React from "react";
import { useState } from "react";
import { uploadImage } from "../services/cloudinary";
import { v4 as uuid } from "uuid";
import { writeProductData } from "../services/firebaseDatabase";
import { BiHappyBeaming } from "react-icons/bi";

export default function NewProduct() {
  const [product, setProduct] = useState({
    image: "",
    title: "",
    price: 0,
    category: "",
    description: "",
    options: [],
    id: "",
  });

  const [upload, setUpload] = useState(false);

  const handleImageChange = async (e) => {
    const data = await uploadImage(e.target.files[0]);
    setProduct((prev) => ({ ...prev, image: data.url, id: uuid() }));
  };

  const handleTitleChange = (e) =>
    setProduct((prev) => ({ ...prev, title: e.target.value }));

  const handlePriceChange = (e) =>
    setProduct((prev) => ({ ...prev, price: e.target.value }));

  const handleCategoryChange = (e) =>
    setProduct((prev) => ({ ...prev, category: e.target.value }));

  const handleDescriptionChange = (e) =>
    setProduct((prev) => ({ ...prev, description: e.target.value }));

  const handleOptionsChange = (e) => {
    const str = e.target.value;
    const arr = str.split(",");
    setProduct((prev) => ({ ...prev, options: arr }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    writeProductData(product.id, product, setUpload);
  };

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h1 className='text-2xl py-5'>새로운 상품을 등록하세요</h1>
      {upload && (
        <div className='pb-3 flex justify-center'>
          <BiHappyBeaming className='text-2xl' />
          <h3>상품 등록에 성공했습니다</h3>
        </div>
      )}
      <form className='pb-5 flex flex-col' onSubmit={handleSubmit}>
        {product.image ? (
          <img className='h-80' src={product.image} alt='' />
        ) : (
          <span></span>
        )}
        <input
          className='pl-2 py-3 w-96 border border-slate-300'
          type='file'
          accept='image/*'
          placeholder='상품 업로드'
          onChange={handleImageChange}
        />
        <input
          className='pl-2 py-3 w-96 border border-slate-300'
          name='title'
          type='text'
          placeholder='상품명'
          onChange={handleTitleChange}
        />
        <input
          className='pl-2 py-3 w-96 border border-slate-300'
          name='price'
          type='number'
          placeholder='상품 가격'
          onChange={handlePriceChange}
        />
        <select
          className='pl-2 py-3 w-96 border border-slate-300'
          name='category'
          onChange={handleCategoryChange}
        >
          <option>성별을 골라주세요</option>
          <option value='남성'>남성</option>
          <option value='여성'>여성</option>
        </select>
        <input
          className='pl-2 py-3 w-96 border border-slate-300'
          name='desc'
          type='text'
          placeholder='상품 설명'
          onChange={handleDescriptionChange}
        />
        <input
          className='pl-2 py-3 w-96 border border-slate-300'
          name='options'
          type='text'
          placeholder='사이즈'
          onChange={handleOptionsChange}
        />
        <button
          className='py-3 w-full bg-violet-500 font-semibold text-slate-100'
          type='submit'
        >
          제품 등록하기
        </button>
      </form>
    </div>
  );
}
