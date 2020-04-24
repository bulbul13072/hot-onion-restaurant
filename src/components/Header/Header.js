import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../logo2.png';
import Inventory from '../Inventory/Inventory';


const Header = () => {
    return (
        <div>
            <div className='header-line'>
                    <a href="/"> <img src={logo} alt=""/> </a>
                    <nav>
                        <a href="/cart"><FontAwesomeIcon icon={faShoppingCart} /></a>
                        <a href="/addFood">Add Food to Menu</a>
                        <a href="/login">Login</a>
                        <button type="submit" className="search-button">Sign Up</button>
                    </nav>
                </div>

            <section className="top-banner">
                <div className="header">
                    <h1>Best Quality Food is Waiting for Your Belly</h1>
                    <div className="search-box">
                        <input type="text" placeholder="Search food items" />
                        <span><button type="submit" className="search-button">Search</button></span>
                    </div>   
                </div>             
            </section>
        </div> 
    );
};

export default Header;