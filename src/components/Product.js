import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/product.css';

function Product() {
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [userComments, setUserComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!isProfileMenuOpen);
    };

    const closeProfileMenu = () => {
        setProfileMenuOpen(false);
    };

    const openProductPopup = (product) => {
        setSelectedProduct(product);
        setUserComments(product.comments || []); // Load predefined comments for the product
    };

    const closeProductPopup = () => {
        setSelectedProduct(null);
        setUserComments([]);
    };

    const handleAddComment = () => {
        if (newComment.trim()) {
            const updatedComments = [...userComments, { user: 'You', comment: newComment }];
            setUserComments(updatedComments);
            setNewComment('');
        }
    };

    const products = [
        {
            id: 1,
            category: 'Prestasi',
            src: '/photo/prestasi.jpg',
            alt: 'Product A',
            description: 'Deskripsi Prestasi 1',
            comments: [
                { user: 'User1', comment: 'Keren sekali!' },
                { user: 'User2', comment: 'Saya sangat terinspirasi.' },
            ],
        },
        {
            id: 2,
            category: 'Prestasi',
            src: '/photo/prestasi1.jpg',
            alt: 'Product B',
            description: 'Deskripsi Prestasi 2',
            comments: [
                { user: 'User3', comment: 'Foto yang mengesankan!' },
                { user: 'User4', comment: 'Luar biasa, semangat selalu!' },
            ],
        },
        // Produk lainnya
    ];

    return (
        <div className="container-product">
            <header className="header-product">
                <div className="logo">
                    <img src="/udblogo.png" alt="Logo UDB" />
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
                <div className="main">
                    <h1>Gallery Product</h1>
                    <p>Universitas Duta Bangsa Surakarta</p>
                </div>
                <div className="product-gallery">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="product-item"
                            onClick={() => openProductPopup(product)}
                        >
                            <h3>{product.category}</h3>
                            <img src={product.src} alt={product.alt} />
                        </div>
                    ))}
                </div>
            </section>

            {selectedProduct && (
                <div className="product-popup">
                    <div className="popup-content">
                        <button className="close-popup" onClick={closeProductPopup}>×</button>
                        <div className="popup-left">
                            <img src={selectedProduct.src} alt={selectedProduct.alt} />
                        </div>
                        <div className="popup-right">
                            <h3>{selectedProduct.category}</h3>
                            <p>{selectedProduct.description}</p>
                            <div className="comment-section">
                                <h4>Comments</h4>
                                <ul>
                                    {userComments.map((comment, index) => (
                                        <li key={index}>
                                            <strong>{comment.user}:</strong> {comment.comment}
                                        </li>
                                    ))}
                                </ul>
                                <input
                                    type="text"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Add a comment"
                                />
                                <button onClick={handleAddComment}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Product;
