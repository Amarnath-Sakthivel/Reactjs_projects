import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

const Products = ({ addProductToCart, cart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProductsFromStoreAPI() {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    }
    fetchProductsFromStoreAPI();
  }, []);
  return (
    <div>
      <h3 className="display-8 fw-bolder text-center">All Products</h3>

      <div className="d-flex flex-wrap justify-content-center">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addProductToCart={addProductToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
