import React from "react";
import { useState } from "react";
import { uploadImage } from "../services/cloudinary";
import { writeProductData } from "../services/firebaseDatabase";
import { BiHappyBeaming } from "react-icons/bi";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [success, setSuccess] = useState();
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = async (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      console.log(files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        writeProductData(product, url) //
          .then(() => {
            setSuccess("성공적으로 제품이 추가되었습니다!");
            setTimeout(() => setSuccess(null), 4000);
          });
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h1 className='text-2xl py-5'>새로운 상품을 등록하세요</h1>
      {success && (
        <div className='pb-3 flex justify-center'>
          <BiHappyBeaming className='text-2xl' />
          <h3>{success}</h3>
        </div>
      )}
      <form className='pb-5 flex flex-col' onSubmit={handleSubmit}>
        {file ? (
          <img className='h-80' src={URL.createObjectURL(file)} alt='' />
        ) : (
          <span></span>
        )}
        <input
          className='pl-2 py-3 w-96 border border-slate-300'
          type='file'
          accept='image/*'
          name='file'
          required
          placeholder='상품 업로드'
          onChange={handleChange}
        />
        <input
          className='pl-2 py-3 w-96 border border-slate-300'
          name='title'
          value={product.title ?? ""}
          type='text'
          placeholder='상품명'
          onChange={handleChange}
        />
        <input
          className='pl-2 py-3 w-96 border border-slate-300'
          name='price'
          value={product.price ?? ""}
          type='number'
          placeholder='상품 가격'
          onChange={handleChange}
        />
        <select
          className='pl-2 py-3 w-96 border border-slate-300'
          name='category'
          value={product.category ?? ""}
          onChange={handleChange}
        >
          <option>성별을 골라주세요</option>
          <option value='남성'>남성</option>
          <option value='여성'>여성</option>
        </select>
        <input
          className='pl-2 py-3 w-96 border border-slate-300'
          name='description'
          value={product.description ?? ""}
          type='text'
          placeholder='상품 설명'
          onChange={handleChange}
        />
        <input
          className='pl-2 py-3 w-96 border border-slate-300'
          name='options'
          value={product.options ?? ""}
          type='text'
          placeholder='사이즈(콤마(,)로 구분해주세요)'
          onChange={handleChange}
        />
        <button
          className='py-3 w-full bg-violet-500 font-semibold text-slate-100'
          type='submit'
          disabled={isUploading}
        >
          {isUploading ? "업로드중..." : "제품 등록하기"}
        </button>
      </form>
    </div>
  );
}
