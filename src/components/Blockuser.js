import React, { useState } from 'react';
import '../css/Blockuser.css';

function BlockUser() {
    const [users, setUsers] = useState([
        { id: 1, username: 'userone', email: 'userone@example.com', loginDate: '2024-11-18', blocked: false },
        { id: 2, username: 'usertwo', email: 'usertwo@example.com', loginDate: '2024-11-17', blocked: false },
        { id: 3, username: 'userthree', email: 'userthree@example.com', loginDate: '2024-11-16', blocked: false },
    ]);

    const toggleBlockUser = (userId) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === userId ? { ...user, blocked: !user.blocked } : user
            )
        );
    };

    return (
        <div className="block-user-container">
            <h1 className="block-user-title">Manage Users</h1>
            <div className="user-list">
                {users.map((user) => (
                    <div key={user.id} className="user-card">
                        <div className="user-info">
                            <h2>{user.username}</h2>
                            <p>Email: {user.email}</p>
                            <p>Last Login: {user.loginDate}</p>
                        </div>
                        <button
                            className={`toggle-button ${user.blocked ? 'blocked' : ''}`}
                            onClick={() => toggleBlockUser(user.id)}
                        >
                            {user.blocked ? 'Unblock' : 'Block'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlockUser;
