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
        <div className="about-container">
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
            
            <section className="about-content">
                <h1>About Us</h1>
                <p>Welcome to our website! We are dedicated to providing high-quality products that bring joy and inspiration to your life. Our team works tirelessly to curate a unique selection of items, each chosen with great care and attention to detail.</p>
                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>To deliver exceptional quality and unforgettable experiences through our carefully curated products.</p>
                </div>
                <div className="about-section">
                    <h2>Our Values</h2>
                    <p>Quality, customer satisfaction, and innovation drive everything we do. We believe in creating lasting value and building meaningful relationships with our customers.</p>
                </div>
            </section>
        </div>
    );
}

export default About;
