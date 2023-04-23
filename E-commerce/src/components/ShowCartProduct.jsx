import axios from "axios";
import React from "react";
import { useState } from "react";

const ShowCartProduct = (props) => {
  const { id, title, image, price, category, description, rating, quantity } =
    props.product;

  const [productQantity, setProductQuantity] = useState([]);

  const decreaseProductQuantity = async (id) => {
    if (quantity > 0) {
      const { data } = await axios.put(`http://localhost:8080/products/${id}`, {
        ...props.product,
        quantity: quantity - 1,
      });
    }
  };

  const increaseProductQuantity = async (id) => {
    const { data } = await axios.put(`http://localhost:8080/products/${id}`, {
      ...props.product,
      quantity: quantity + 1,
    });
  };

  const deleteCartProduct = async (id) => {
    const { data } = await axios.delete(`http://localhost:8080/products/${id}`);
  };
  return (
    <>
      <div className="md-2 flex">
        <div className="cart-product shadow p-3 mb-5 bg-body rounded">
          <>
            <div className="row">
              <div className="col-3">
                <img height={150} width={100} src={image}></img>
              </div>
              <div className="col-3">
                <p>
                  <span>{title}</span>s
                </p>
                <p>
                  <span>In Stock: {rating.count}</span>
                </p>
                <h4>Price: ${price}</h4>

                <a href={`product/${id}`} className="me-3">
                  View
                </a>
                <a href="/my-cart" onClick={() => deleteCartProduct(id)}>
                  Remove
                </a>
              </div>
              <div className="col-3">
                <h5>Quantity</h5>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => decreaseProductQuantity(id)}
                >
                  -
                </button>{" "}
                {quantity}{" "}
                <button
                  className="btn btn-outline-dark"
                  onClick={() => increaseProductQuantity(id)}
                >
                  +
                </button>
              </div>
              <div className="col-3">
                <h5>Amount</h5> <h4>$ {quantity * price} </h4>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default ShowCartProduct;
