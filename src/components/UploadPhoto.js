import React from 'react';
import '../css/UploadPhoto.css';

function UploadPhoto() {
    const handleUpload = () => {
        alert("Upload Foto");
    };

    const handleCrop = () => {
        alert("Crop Foto");
    };

    const handleSave = () => {
        alert("Foto berhasil disimpan");
    };

    const handleBack = () => {
        window.history.back();
    };

    return (
        <div className="upload-photo-container">
            <h1 className="upload-photo-title">Upload Foto</h1>
            <div className="upload-photo-actions">
                <button className="upload-photo-button" onClick={handleUpload}>Upload</button>
                <button className="upload-photo-button" onClick={handleCrop}>Crop</button>
                <button className="upload-photo-button" onClick={handleSave}>Save</button>
                <button className="upload-photo-button back" onClick={handleBack}>Kembali</button>
            </div>
        </div>
    );
}

export default UploadPhoto;
