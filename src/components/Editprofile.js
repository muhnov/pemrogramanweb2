// src/components/ProductDetailPopup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ProductDetail.css';

function ProductDetailPopup({ image, title, description }) {
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [email, setEmail] = useState('user@example.com');
    const [username, setUsername] = useState('User Name');
    const [password, setPassword] = useState('');

    const navigate = useNavigate(); // Initialize navigate hook

    const handleProfileEdit = () => {
        setIsEditingProfile(true);
    };

    const handleProfileSave = () => {
        setIsEditingProfile(false);
        // Save logic can go here
        console.log("Profile updated:", { email, username, password });
    };

    // Navigate to home on close
    const handleClose = () => {
        navigate("/home"); // Redirect to homepage
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-btn" onClick={handleClose}>✖</button>
                <div className="popup-image-container">
                    <img src={image} alt={title} className="popup-image" />
                </div>
                <h2 className="popup-title">{title}</h2>
                <p className="popup-description">{description}</p>

                <div className="profile-section">
                    {isEditingProfile ? (
                        <div className="profile-edit-section">
                            <input 
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter new email"
                                className="profile-input"
                            />
                            <input 
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter new username"
                                className="profile-input"
                            />
                            <input 
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter new password"
                                className="profile-input"
                            />
                            <button onClick={handleProfileSave} className="profile-save-btn">Save</button>
                        </div>
                    ) : (
                        <div className="profile-view-section">
                            <h3 className="profile-email">Email: {email}</h3>
                            <h3 className="profile-username">Username: {username}</h3>
                            <button onClick={handleProfileEdit} className="profile-edit-btn">Edit Profile</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPopup;
