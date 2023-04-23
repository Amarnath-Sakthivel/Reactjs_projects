import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./NavBar";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import CartProduct from "../Data/CartProduct";
import axios from "axios";
import ShowSingleProduct from "./ShowSingleProduct";

const RouterPage = () => {
  const fetchProduct = async (product_id) => {
    const { data } = await axios.get("http://localhost:8080/products");
    return await data.filter((product) => product.id === product_id);
  };

  const addProductToCart = async (product) => {
    const isProductExists = await fetchProduct(product.id);
    if (isProductExists.length === 0) {
      await axios.post("http://localhost:8080/products", {...product,...product, quantity:1});
    }
  };
  return (
    <>
      <Navbar />

      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home addProductToCart = {addProductToCart} />}></Route>
            <Route
              exact
              path="/all-products"
              element={<Products addProductToCart={addProductToCart} />}
            ></Route>
            <Route exact path="/my-cart" element={<Cart />}></Route>
            <Route exact path="/product/:id" element={<ShowSingleProduct addProductToCart = {addProductToCart} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default RouterPage;
