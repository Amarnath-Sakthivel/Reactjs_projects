import React from 'react'
// import { BrowserRouter as Router, Route, Routes, Navl } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand fw-bold fs-4" href="/">Ecomsite</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/products">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <div className='buttons'>
                            <a href="/login" className='btn btn-outline-dark'> <i className=' fa fa-sign-in me-1'></i>Login</a>
                            <a href="" className='btn btn-outline-dark ms-2'> <i className=' fa fa-user-plus me-1'></i>Register</a>
                            <a href="/cart" className='btn btn-outline-dark ms-2'> <i className=' fa fa-cart-plus me-1'></i>Cart (0)</a>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar