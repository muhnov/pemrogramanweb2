// src/components/Product.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/product.css';

function Product() {
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!isProfileMenuOpen);
    };

    const closeProfileMenu = () => {
        setProfileMenuOpen(false);
    };

    return (
        <div className="product-container"> 
            <header className="header">
            <div className="logo">
                <img src='/udblogo.png'></img>
                </div>
                <nav className="navbar">
                    <Link to="/home" className="nav-link">Home</Link>
                    <Link to="/product" className="nav-link">Products</Link>
                    <Link to="/about" className="nav-link">About</Link>
                </nav>
                <div className="profile" onClick={toggleProfileMenu}>
                    <span className="profile-name">Profile ▾</span>
                    {isProfileMenuOpen && (
                        <div className="profile-menu" onMouseLeave={closeProfileMenu}>
                            <Link to="#" className="profile-menu-item">Edit Profile</Link>
                            <Link to="#" className="profile-menu-item">Comment</Link>
                            <Link to="/" className="profile-menu-item" id="logout">Logout</Link>
                        </div>
                    )}
                </div>
            </header>
            
            <section className="product-content">
            <div className='main'>
            <h1>Gallery UDB</h1>
            <p>Explore a variety of products we offer!</p>
            </div>
                <div className="product-gallery">
                    <div className="product-item">
                        <h3>Product A</h3>
                        <img src="/udb1.jpg" alt="Product A" />
                    </div>
                    <div className="product-item">
                        <h3>Product B</h3>
                        <img src="/udb1.jpg" alt="Product B" />
                    </div>
                    <div className="product-item">
                        <h3>Product C</h3>
                        <img src="/udb1.jpg" alt="Product C" />
                    </div>
                    <div className="product-item">
                        <h3>Product D</h3>
                        <img src="/udb1.jpg" alt="Product D" />
                    </div>
                    <div className="product-item">
                        <h3>Product E</h3>
                        <img src="/udb1.jpg" alt="Product E" />
                    </div>
                    <div className="product-item">
                        <h3>Product F</h3>
                        <img src="/udb1.jpg" alt="Product F" />
                    </div>
                    <div className="product-item">
                        <h3>Product G</h3>
                        <img src="/udb1.jpg" alt="Product G" />
                    </div>
                    <div className="product-item">
                        <h3>Product H</h3>
                        <img src="/udb1.jpg" alt="Product H" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Product;
