import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/About.css';

function About() {
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
    const toggleProfileMenu = () => {
        setProfileMenuOpen(!isProfileMenuOpen);
    };

    const closeProfileMenu = () => {
        setProfileMenuOpen(false);
    };

    return (
        <div className="container-about">
            <header className="header-about">
                <div className="logo">
                    <img src='udblogo.png' alt="Logo"></img>
                </div>
                <nav className="navbar-about">
                    <Link to="/home" className="nav-link">Home</Link>
                    <Link to="/product" className="nav-link">Products</Link>
                    <Link to="/about" className="nav-link">About</Link>
                </nav>
                <div className="profile" onClick={toggleProfileMenu}>
                    <span className="profile-name">Profile ▾</span>
                    {isProfileMenuOpen && (
                        <div className="profile-menu-about" onMouseLeave={closeProfileMenu}>
                            <Link to="#" className="profile-menu-item">Edit Profile</Link>
                            <Link to="#" className="profile-menu-item">Comment</Link>
                            <Link to="/" className="profile-menu-item" id="logout">Logout</Link>
                        </div>
                    )}
                </div>
            </header>
            
            <section className="about-content">
                <div className="about-text">
                    <h1>About Us</h1>
                    <p>Welcome to our website! We are dedicated to providing high-quality products that bring joy and inspiration to your life.</p>
                    <div className="about-section">
                        <h2>Our Mission</h2>
                        <p>To deliver exceptional quality and unforgettable experiences through our carefully curated products.</p>
                    </div>
                    <div className="about-section">
                        <h2>Our Vision</h2>
                        <p>Quality, customer satisfaction, and innovation drive everything we do. We believe in creating lasting value and building meaningful relationships with our customers.</p>
                    </div>
                </div>
                <div className="about-image">
                    <img src="photo/logo-udb.png" alt="About Us" />
                </div>
            </section>
        </div>
    );
}

export default About;
