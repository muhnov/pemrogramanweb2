import React from 'react';

import '../css/Blockuser.css';

function BlockUser() {
    const users = [
        { id: 1, name: 'User One' },
        { id: 2, name: 'User Two' },
        { id: 3, name: 'User Three' },
    ];

    const handleBlockUser = (userId) => {
        alert(`User ${userId} has been blocked`);
    };

    return (
        <div className="block-user-container">
            <h1 className="block-user-title">Block User</h1>
            <div className="user-list">
                {users.map((user) => (
                    <div key={user.id} className="user-card">
                        <span>{user.name}</span>
                        <button
                            className="block-button"
                            onClick={() => handleBlockUser(user.id)}
                        >
                            Block
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlockUser;
