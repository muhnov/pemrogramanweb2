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
                    <h1>Tentang</h1>
                    <p>Website ini adalah proyek yang dikembangkan oleh mahasiswa Universitas Duta Bangsa, khususnya program studi S1 Teknik Informatika. Website ini dirancang untuk menjadi platform berbagi foto yang memungkinkan pengguna dapat melihat foto, dan mencari inforamsi tentang udb secara mudah.</p>
                    <div className="about-section">
                        <h2>Tujuan</h2>
                        <p>Tujuan pembuatan website gallery UDB adalah untuk menyediakan platform digital yang dapat menampilkan berbagai karya mahasiswa secara terorganisir dan mudah diakses. Website ini bertujuan untuk menjadi wadah apresiasi, inspirasi, dan dokumentasi bagi karya kreatif mahasiswa, terutama dalam bidang teknologi informasi dan desain. Selain itu, platform ini diharapkan dapat memperkuat identitas universitas sebagai institusi yang mendukung inovasi dan kreativitas, serta mempermudah kolaborasi dan interaksi antar mahasiswa, dosen, dan pihak eksternal. Melalui website ini, mahasiswa dapat mengembangkan kemampuan teknis, manajerial, dan kreatif dalam membangun aplikasi berbasis web yang fungsional dan estetis.</p>
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
