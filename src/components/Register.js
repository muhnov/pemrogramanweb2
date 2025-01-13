import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import '../css/Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const registerResponse = await axios.post('http://localhost:4000/api/register', {
                username,
                email,
                password
            });

            if (registerResponse.status === 201) {
                // Registrasi berhasil, lakukan login otomatis
                const loginResponse = await axios.post('http://localhost:4000/api/login', {
                    email,
                    password
                });

                if (loginResponse.data.isAdmin) {
                    login(loginResponse.data);
                    navigate('/dashboard');
                } else if (loginResponse.data.isUser) {
                    login(loginResponse.data);
                    navigate('/home');
                } else {
                    alert('Login gagal setelah registrasi');
                }
            } else {
                alert('Registrasi gagal');
            }
        } catch (error) {
            console.error('Error during registration or login:', error);
            alert('Registrasi atau login gagal');
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />

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

                    <button type="submit">Register</button>
                    <p>Sudah punya akun? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;