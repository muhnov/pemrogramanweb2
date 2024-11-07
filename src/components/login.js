// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Login.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const isAdmin = email === 'admin@gmail.com' && password === 'adminpass';
        const isUser = email !== '' && password === 'userpass';
        
        if (isAdmin) {
            // Navigasi ke halaman Admin Dashboard
            navigate('/dashboard');
        } else if (isUser) {
            // Navigasi ke halaman Beranda Pengguna
            navigate('/home');
        } else {
            alert('Login gagal, periksa email dan password Anda');
        }
        
    };

    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     // Logika login bisa ditambahkan di sini
    //     console.log('Login dengan:', { email, password });

    //     // Setelah login sukses, arahkan ke halaman beranda
    //     navigate('/Dashboard');
    // };

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
