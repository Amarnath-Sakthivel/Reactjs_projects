import React, { useState, useEffect } from 'react'
import { useOutlet, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import Cart from './Cart';

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [disable, setDisable] = useState(false);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    let componentMounted = true;
    const [cart, setCart] = useState([]);
    // const arr = [];

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    })



    const Loading = () => {
        return (
            <>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
            </>);
    };

    const disableEvent = (product) => {
        return (
            setDisable(true),
            cart.push(...product, product),
            setCart(localStorage.setItem('item', JSON.stringify(cart)))
        )

    }

    const ShowProduct = () => {
        return (
            <>
                <div className='col-md-6'>
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className='col-md-6'> <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bolder'>Rating {product.rating && product.rating.rate} <i className='fa fa-star' /></p>
                    <h3 className='display-6 fw-bold my-4'> ${product.price}</h3>
                    <p className='lead'>{product.description}</p>
                    <button cart = {cart} disabled={disable} onClick={() => disableEvent(product)} className='btn btn-outline-dark'> <i className=' fa fa-cart-plus me-1'></i>Add to Cart</button>
                    <a href="/cart" className='btn btn-outline-dark ms-2'> <i className=' fa fa-caret-square-o-right me-1'></i>Go to Cart</a>
                </div>
            </>
        )
    }


    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    {loading ? <Loading /> : <ShowProduct />}
                    {/* <ShowProduct /> */}
                </div>
                <hr></hr>
                <h3 className='display-8 fw-bolder text-center'>Related products</h3>
                {console.log(product.category)}
            </div>

        </div>
    )
}

export default Product