import React from 'react';
import '../css/DeletePhoto.css';

function DeletePhoto() {
    return (
        <div className="delete-photo-container">
            <h1 className="delete-photo-title">Delete Photo</h1>
            <p className="delete-photo-description">Select photos you wish to delete from your gallery.</p>
            <div className="photo-grid">
                {/* Example photos */}
                <div className="photo-card">
                    <img src="/example-photo1.jpg" alt="Photo 1" className="photo" />
                    <button className="delete-button">Delete</button>
                </div>
                <div className="photo-card">
                    <img src="/example-photo2.jpg" alt="Photo 2" className="photo" />
                    <button className="delete-button">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default DeletePhoto;
