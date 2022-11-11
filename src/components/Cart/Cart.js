import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;

    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = total * 0.1;
const grandTotal = total + tax + shipping;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h4>Total Selected Cart: {cart.length}</h4>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;