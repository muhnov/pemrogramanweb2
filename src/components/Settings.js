import React, { useState } from 'react';
import '../css/Settings.css';

function Settings() {
    const [username, setUsername] = useState('Admin');
    const [email, setEmail] = useState('admin@example.com');
    const [password, setPassword] = useState('');

    const handleSave = () => {
        alert('Settings have been saved successfully!');
    };

    return (
        <div className="settings-container">
            <header className="settings-header">
                <h1 className="settings-title">Settings</h1>
            </header>

            <main className="settings-content">
                <div className="settings-form">
                    <div className="settings-field">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                        />
                    </div>

                    <div className="settings-field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="settings-field">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter new password"
                        />
                    </div>

                    <button className="settings-button save" onClick={handleSave}>
                        Save Changes
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Settings;
