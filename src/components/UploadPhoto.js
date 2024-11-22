import React from 'react';
import '../css/EditPhoto.css';

function EditPhoto() {
    return (
        <div className="edit-photo-container">
            <h1 className="edit-photo-title">Edit Photo</h1>
            <form className="edit-photo-form">
                <label htmlFor="photo-title">Photo Title:</label>
                <input type="text" id="photo-title" name="photo-title" placeholder="Enter new title" />
                
                <label htmlFor="photo-description">Description:</label>
                <textarea id="photo-description" name="photo-description" placeholder="Enter new description"></textarea>
                
                <label htmlFor="photo-file">Upload New Photo:</label>
                <input type="file" id="photo-file" name="photo-file" />
                
                <button type="submit" className="edit-button">Save Changes</button>
            </form>
        </div>
    );
}

export default EditPhoto;
