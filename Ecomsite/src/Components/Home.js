import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div class="card bg-dark text-white border-0">
                <img src="/images/bg1.jpg" class="card-img" alt="bgimage" height="600px" />
                <div class="card-img-overlay">
                    <div className='container'>
                        <h5 class="card-title display-3 fw-bolder mb-0">Ecomsite</h5>
                        <p class="card-text"> <i>Communication is at the heart of ecommerce and community...</i></p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    )
}

export default Home