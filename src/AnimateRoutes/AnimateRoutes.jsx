import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import NewProduct from "../pages/NewProduct";
import ProductDetail from "../pages/ProductDetail";
import MyCart from "../pages/MyCart";

export default function AnimateRoutes() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/products' exact element={<AllProducts />}></Route>
        <Route path='/products/new' exact element={<NewProduct />}></Route>
        <Route path='/products/:id' exact element={<ProductDetail />}></Route>
        <Route path='/carts' exact element={<MyCart />}></Route>
      </Routes>
    </AnimatePresence>
  );
}
