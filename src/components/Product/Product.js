import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {addToCart, product} = props;
    const {name,img, seller, price, ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p className='price'>Price: {price}</p>
            <p className='seller'><small>Seller: {seller}</small></p>
            <p className='rating'><small>Ratings: {ratings}</small></p>
            </div>
            <div onClick={()=> addToCart(product)} className='cart-btn'>
            <button className='cart-btn'>Add To Cart</button>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Product;