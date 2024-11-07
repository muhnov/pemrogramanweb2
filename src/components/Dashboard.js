// src/components/Dashboard.js
import React from 'react';
import '../css/Dashboard.css';


function Dashboard() {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Dashboard Admin</h1>

            <div className="dashboard-actions">
                <button className="dashboard-button logout"><a href='/'>Logout</a></button>
                <button className="dashboard-button back">Back</button>
            </div>

            <div className="dashboard-content">
                <div className="dashboard-card">
                    <h2>Pengguna</h2>
                    <p>Manage users and permissions</p>
                    <div className="card-actions">
                        <button className="dashboard-button block"><a href='/blockuser'>Block User</a></button>
                    </div>
                </div>
                <div className="dashboard-card">
                    <h2>Pengaturan</h2>
                    <p>Configure your application settings</p>
                    <div className="card-actions">
                        <button className="dashboard-button upload"><a href='/uploadphoto'>Upload Photo</a></button>
                        <button className="dashboard-button edit">Edit</button>
                        <button className="dashboard-button delete">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
