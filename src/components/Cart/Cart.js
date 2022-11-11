import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Total Added Cart: {props.cart.length}</h4>
        </div>
    );
};

export default Cart;