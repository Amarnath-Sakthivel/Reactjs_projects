import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartProduct from "../Data/CartProduct";
import Form from "react-bootstrap/Form";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark"  expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <i class="fa fa-etsy" />
          comsite
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="navbar-nav mx-auto mb-2 mb-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">
              <i className=" fa fa-home me-1"></i>Home
            </Nav.Link>
            <Nav.Link href="/all-products">
              <i className=" fa fa-shopping-basket me-1"></i>Products
            </Nav.Link>
            {/* <Nav.Link href="/my-cart">
              <i className=" fa fa-cart-plus me-1"></i>Cart(
              {CartProduct.products.length})
            </Nav.Link> */}
            <Nav.Link href="#action1">
              <i className=" fa fa-user me-1"></i>About
            </Nav.Link>
            <Nav.Link href="#action1">
              <i className=" fa fa-handshake-o me-1"></i>Contact
            </Nav.Link>
          </Nav>
          <div className="buttons">
            <a href="/logout" className="btn btn-outline-dark">
              {" "}
              <i className=" fa fa-sign-in me-1"></i>Logout
            </a>
            <a href="/my-cart" className="btn btn-outline-dark ms-2">
              {" "}
              <i className=" fa fa-cart-plus me-1"></i>Cart (
              {CartProduct.products.length})
            </a>
          </div>{" "}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
