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
        <div className="container-product"> 
            <header className="header-product">
            <div className="logo">
                <img src='/udblogo.png'></img>
                </div>
                <nav className="navbar-product">
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
            <h1>Gallery Product</h1>
            <p>Universitas Duta Bangsa Surakarta</p>
            </div>
                <div className="product-gallery">
                    <div className="product-item">
                        <h3>Prestasi</h3>
                        <img src="/photo/prestasi.jpg" alt="Product A" />
                    </div>
                    <div className="product-item">
                        <h3>Prestasi</h3>
                        <img src="/photo/prestasi1.jpg" alt="Product B" />
                    </div>
                    <div className="product-item">
                        <h3>Prestasi</h3>
                        <img src="/photo/prestasi2.jpg" alt="Product C" />
                    </div>
                    <div className="product-item">
                        <h3>Aktivitas</h3>
                        <img src="/photo/aktivitas.jpg" alt="Product D" />
                    </div>
                    <div className="product-item">
                        <h3>Aktivitas</h3>
                        <img src="/photo/aktivitas1.jpg" alt="Product E" />
                    </div>
                    <div className="product-item">
                        <h3>Pendaftaran</h3>
                        <img src="/photo/pendaftaran.jpg" alt="Product F" />
                    </div>
                    <div className="product-item">
                        <h3>Pendaftaran</h3>
                        <img src="/photo/pendaftaran1.jpg" alt="Product F" />
                    </div>
                    <div className="product-item">
                        <h3>Pendaftaran</h3>
                        <img src="/photo/pendaftaran2.jpg" alt="Product F" />
                    </div>
                    <div className="product-item">
                        <h3>Pendaftaran</h3>
                        <img src="/photo/pendaftaran3.jpg" alt="Product F" />
                    </div>
                    <div className="product-item">
                        <h3>Pendaftaran</h3>
                        <img src="/photo/pendaftaran4.jpg" alt="Product F" />
                    </div>
                    <div className="product-item">
                        <h3>Pendaftaran</h3>
                        <img src="/photo/pendaftaran5.jpg" alt="Product F" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Product;
