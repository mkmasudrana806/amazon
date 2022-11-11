import React from 'react';
import logo from '../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='header-nav'>
            <img src={logo} alt="" />
            <div>
            <a href="/shop">Shop</a>
            <a href="/Home">Home</a>
            <a href="/Orders">Orders</a>
            <a href="/About">About</a>
            </div>
        </div>
    );
};

export default Header;