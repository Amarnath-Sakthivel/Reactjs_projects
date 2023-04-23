import React from "react";
import CartProduct from "../Data/CartProduct";
import ShowCartProduct from "./ShowCartProduct";
import axios from "axios";

const Cart = () => {
  const products = CartProduct.products;

  let amount = 0;

  const removeCartProduct = async () => {
    // const {data} = await axios.delete('http://localhost:8080/products/8');
    console.log("cleared cart");
  };

  const totalProductPrice = async () => {
    const { data } = await axios.get("http://localhost:8080/products");
    const price = data.map((data) => data.price * data.quantity);
    console.log(price);
  };

  return (
    <div className="container justify-content-center">
      <h3 className="display-8 fw-bolder text-center">My cart</h3>

      {products.length > 0 && (
        <div class="d-grid gap-2 d-md-flex justify-content-md-end my-2">
          <button
            onClick={removeCartProduct}
            className="btn btn-primary"
            type="button"
          >
            Clear cart
          </button>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            Buy all Products
          </button>
        </div>
      )}
      <div>
        {CartProduct.products.length == 0 && (
          <h3 className="display-8 fw-bolder text-center">
            Your cart is empty
          </h3>
        )}
      </div>
      <div className=" flex-wrap justify-content-center ">
        {products.map((product) => {
          // console.log(product);
          return <ShowCartProduct key={product.id} product={product} />;
        })}
      </div>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          {/* <h5 id="offcanvasRightLabel">Total products: {products.length}</h5>
          <h5 id="offcanvasRightLabel">Total Amount: {() =>totalProductPrice}</h5> */}
          <h5>Please enter your details for shipping</h5> <hr />
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="John"
            />
            <label for="floatingInput">Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="number"
              class="form-control"
              id="floatingInput"
              placeholder="+919876543210"
            />
            <label for="floatingInput">Mobile</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Area"
            />
            <label for="floatingInput">Area</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="district"
            />
            <label for="floatingInput">District</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="number"
              class="form-control"
              id="floatingInput"
              placeholder="pincode"
            />
            <label for="floatingInput">Pincode</label>
          </div>
          <div>
            <button className="btn btn-outline-success">Order</button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Cart;
