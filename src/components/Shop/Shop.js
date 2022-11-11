import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
useEffect( () => {
    const storedCart = getShoppingCart();
    for(const id in storedCart){
        const addedproduct = products.find( product =>  product.id = id);
        console.log(addedproduct);
    }
},[])
const handleAddToCart = (product) => {
   const newCart = [...cart, product];
   setCart(newCart);
   addToDb(product.id);
}

    return (
        <div className='shop-container'>
            <div className="products-container">
            {
                products.map(product => <Product
                    product={product}
                    key={product.id}
                addToCart={() => handleAddToCart(product)}
            
                ></Product> )
            }
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;