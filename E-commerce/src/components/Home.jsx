import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Product from "./Product";


const Home = ({addProductToCart}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/category/men's clothing"
      );
      console.log(data);
      setProducts(data);
    };

    fetchCategory();
  }, []);


  return (
    <>

    <div className="py-5">

    <Header />
    </div>
     
<hr />
      <h3 className="display-8 fw-bolder text-center">Top Products</h3>
      <div className="d-flex flex-wrap justify-content-center">
      
      {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addProductToCart={addProductToCart}
          />
        ))}
      </div>
      <div>
        <a href="/all-products" className="display-8 fw-bolder d-flex flex-wrap justify-content-center">view all products</a>
      </div>
      <hr></hr>
    </>
  );
};

export default Home;
