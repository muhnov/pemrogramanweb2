// src/components/ProductDetailPopup.js
import React, { useState } from 'react';
import '../css/ProductDetail.css';

function ProductDetailPopup({ image, title, description, onClose }) {
    const [comment, setComment] = useState('');

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = () => {
        // Implement comment submit logic here
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
