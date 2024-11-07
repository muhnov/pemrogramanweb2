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
                <div className="logo">Logo</div>
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
                <h1>Our Products</h1>
                <p>Explore a variety of products we offer!</p>
                <div className="product-gallery">
                    <div className="product-item">
                        <h3>Product A</h3>
                        <img src="/productA.jpg" alt="Product A" />
                    </div>
                    <div className="product-item">
                        <h3>Product B</h3>
                        <img src="/productB.jpg" alt="Product B" />
                    </div>
                    {/* Add more product items as needed */}
                </div>
            </section>
        </div>
    );
}

export default Product;
