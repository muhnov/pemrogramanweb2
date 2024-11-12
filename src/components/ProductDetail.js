// src/components/ProductDetailPopup.js
import React, { useState } from 'react';
import '../css/ProductDetail.css';

function ProductDetailPopup({ image, title, description, onClose }) {
    const [comment, setComment] = useState('');
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [profileName, setProfileName] = useState('User Name');
    const [profileBio, setProfileBio] = useState('Bio goes here');

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleProfileEdit = () => {
        setIsEditingProfile(true);
    };

    const handleProfileSave = () => {
        setIsEditingProfile(false);
    };

    const handleSubmit = () => {
        console.log("Comment submitted:", comment);
        setComment('');
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-btn" onClick={onClose}>✖</button>
                <img src={image} alt={title} className="popup-image" />
                <h2>{title}</h2>
                <p>{description}</p>

                {isEditingProfile ? (
                    <div className="profile-edit-section">
                        <input 
                            type="text"
                            value={profileName}
                            onChange={(e) => setProfileName(e.target.value)}
                            placeholder="Enter new name"
                        />
                        <textarea
                            value={profileBio}
                            onChange={(e) => setProfileBio(e.target.value)}
                            placeholder="Enter bio"
                        ></textarea>
                        <button onClick={handleProfileSave}>Save</button>
                    </div>
                ) : (
                    <div className="profile-section">
                        <h3>{profileName}</h3>
                        <p>{profileBio}</p>
                        <button onClick={handleProfileEdit}>Edit Profile</button>
                    </div>
                )}

                <textarea
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={handleCommentChange}
                ></textarea>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default ProductDetailPopup;
