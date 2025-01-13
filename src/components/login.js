import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/login', {
                email,
                password
            });

            if (response.data.isAdmin) {
                navigate('/dashboard');
            } else if (response.data.isUser) {
                navigate('/home');
            } else {
                alert('Login gagal, periksa email dan password Anda');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Login gagal, periksa email dan password Anda');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />

                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />

                    <button type="submit">Login</button>
                    <p>Belum punya akun? <Link to="/register">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;   