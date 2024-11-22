import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Dashboard.css';

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/'); // Navigasi ke halaman utama
    };

    const handleUpload = () => {
        navigate('/uploadphoto'); // Navigasi ke halaman upload foto
    };

    const handleBlockUser = () => {
        navigate('/blockuser'); // Navigasi ke halaman block user
    };

    const handleSettings = () => {
        navigate('/settings'); // Placeholder untuk halaman pengaturan
    };

    const handleDeletePhoto = () => {
        navigate('/deletephoto');
    };

    const handleEditPhoto = () => {
        navigate('/editphoto');
    };


    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1 className="dashboard-title">Admin Dashboard</h1>
                <button className="dashboard-button logout" onClick={handleLogout}>Logout</button>
            </header>

            <main className="dashboard-content">
                <div className="dashboard-card" onClick={handleBlockUser}>
                    <h2>Manage Users</h2>
                    <p>Control user accounts and permissions.</p>
                </div>
                <div className="dashboard-card" onClick={handleUpload}>
                    <h2>Upload Photos</h2>
                    <p>Add and manage gallery photos.</p>
                </div>
                <div className="dashboard-card" onClick={handleSettings}>
                    <h2>Settings</h2>
                    <p>Configure application preferences.</p>
                </div>
                <div className="dashboard-card" onClick={handleDeletePhoto}>
                    <h2>Delete Photo</h2>
                    <p>Remove unwanted photos from the gallery.</p>
                </div>
                <div className="dashboard-card" onClick={handleEditPhoto}>
                    <h2>Edit Photo</h2>
                    <p>Modify photo details or upload a new version.</p>
                </div>

            </main>
        </div>
    );
}

export default Dashboard;
