import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
// import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import About from "./Components/About";
import Product from "./Components/Product";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
// import Login from './Components/UserAction/Login';

function App() {
  return (
    <>
      <Navbar />
      {/* <Home/> */}

      <Router>
        <div>
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/products" element={<Products />}></Route>
            <Route exact path="/product/:id" element={<Product />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
