import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowSingleProduct = ({addProductToCart}) => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  const [disabled, setDisabled] = useState(false)
  const [message, setMessage] = useState('Add to Cart')

  const disbleCartButton = () =>{
    setDisabled(true)
    setMessage('Added to Cart')
  }
  

  useEffect(() => {
    const fetchProductById = async () => {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(data);
    };

    fetchProductById();
  }, []);
  return (
    <div className="row py-5">
      {" "}
      <div className="col-md-6 jumbotron">
        <img
          src={product.image}
          alt={product.title}
          height="400px"
          width="400px"
        />
      </div>
      <div className="col-md-5 container">
        {" "}
        <h4 className="text-uppercase text-black-50">{product.category}</h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead fw-bolder">
          Rating {product.rating && product.rating.rate}{" "}
          <i className="fa fa-star" />
        </p>
        <h3 className="display-6 fw-bold my-4"> ${product.price}</h3>
        <p className="lead">{product.description}</p>
        <button disabled={disabled} className="btn btn-outline-dark me-1" onClick={() => addProductToCart(product)}>
          {" "}
          <i onClick={disbleCartButton} className=" fa fa-cart-plus me-1"></i>{message}
        </button>
        <a href="/my-cart" className="btn btn-outline-dark ms-2">
          {" "}
          <i className=" fa fa-caret-square-o-right"></i>Go to Cart
        </a>
        <button
        className="btn btn-outline-dark ms-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Buy now
      </button>
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
    </div>
  );
};

export default ShowSingleProduct;
