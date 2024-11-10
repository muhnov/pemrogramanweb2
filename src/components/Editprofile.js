import React, { useState } from 'react';
import '../css/EditProfile.css';

const EditProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');

    const handleSave = () => {
        // Simpan perubahan (misalnya, panggil API untuk menyimpan data)
        console.log('Data disimpan:', { name, email, bio });
    };

    return (
        <div className="edit-profile-container">
            <h2>Edit Profile</h2>
            <form className="edit-profile-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                        id="bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Tell us about yourself"
                    />
                </div>

                <button type="button" onClick={handleSave} className="save-btn">
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default EditProfile;
