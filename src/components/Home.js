// src/components/Home.js
import React, { useState } from 'react';
import '../css/Home.css';

function Home() {
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!isProfileMenuOpen);
    };

    const closeProfileMenu = () => {
        setProfileMenuOpen(false);
    };

    return (
        <div className="container-home"> 
            <header className="header-home">
                <div className="logo">
                    <img src='/udblogo.png' alt="Logo" />
                </div>
                <nav className="navbar-home">
                    <a href="#">Home</a>
                    <a href="/product">Products</a>
                    <a href="/about">About</a>
                </nav>
                <div className="profile" onClick={toggleProfileMenu}>
                    Profile ▾
                    {isProfileMenuOpen && (
                        <div className="profile-menu-home" onMouseLeave={closeProfileMenu}>
                            <a href="/editprofile">Edit Profile</a>
                            <a href="/coment">Comment</a>
                            <a id="logout" href="/">Logout</a>
                        </div>
                    )}
                </div>
            </header>
            
            <section className="content">
                <div className="main-image">
                    <img src="/udb.jpg" alt="Main Product" />
                    <h1 className="title">Gallery Product UDB</h1>
                </div>
                <div className="gallery">
                    <div className="gallery-item">
                        <h3>Seminar</h3>
                        <img src="/photo/seminar.jpg" alt="Product 1" />
                    </div>
                    <div className="gallery-item">
                        <h3>Organisasi</h3>
                        <img src="/photo/organisasi.jpg" alt="Product 2" />
                    </div>
                    <div className="gallery-item">
                        <h3>Gedung</h3>
                        <img src="/photo/gedung.jpg" alt="Product 3" />
                    </div>
                    <div className="gallery-item">
                        <h3>Pameran</h3>
                        <img src="/photo/pameran.jpg" alt="Product 4" />
                    </div>
                    <div className="gallery-item">
                        <h3>Fasilitas</h3>
                        <img src="/photo/fasilitas.jpg" alt="Product 5" />
                    </div>
                </div>
            </section>

            <footer className="footer-home">
                <p>&copy; 2024 Gallery Product UDB. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
