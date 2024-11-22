import React, { useState } from 'react';
import '../css/UploadPhoto.css';

function EditPhoto() {
    const [photos, setPhotos] = useState([
        { id: 1, title: 'Sunset Beach', description: 'A beautiful sunset.', url: '/example-photo1.jpg' },
        { id: 2, title: 'Mountain Hike', description: 'Breathtaking mountain views.', url: '/example-photo2.jpg' },
        { id: 3, title: 'City Skyline', description: 'The city lights at night.', url: '/example-photo3.jpg' },
        // Add more photos as needed
    ]);

    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const handlePhotoSelect = (photo) => {
        setSelectedPhoto(photo);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedPhoto((prevPhoto) => ({
            ...prevPhoto,
            [name]: value,
        }));
    };

    const handleSave = () => {
        setPhotos((prevPhotos) =>
            prevPhotos.map((photo) =>
                photo.id === selectedPhoto.id ? selectedPhoto : photo
            )
        );
        alert('Photo details updated successfully!');
        setSelectedPhoto(null);
    };

    return (
        <div className="edit-photo-container">
            <h1 className="edit-photo-title">Manage Your Photos</h1>
            <p className="edit-photo-subtitle">Click on a photo to edit its details.</p>
            
            <div className="photo-gallery">
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className={`photo-card ${selectedPhoto?.id === photo.id ? 'active' : ''}`}
                        onClick={() => handlePhotoSelect(photo)}
                    >
                        <img src={photo.url} alt={photo.title} className="photo-thumbnail" />
                        <div className="photo-info">
                            <h3>{photo.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {selectedPhoto && (
                <div className="edit-photo-form">
                    <h2>Edit Photo Details</h2>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={selectedPhoto.title}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={selectedPhoto.description}
                        onChange={handleInputChange}
                    ></textarea>

                    <button className="save-button" onClick={handleSave}>
                        Save Changes
                    </button>
                </div>
            )}
        </div>
    );
}

export default EditPhoto;
