import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    const login = (userData) => {
        setAuth(userData);
        localStorage.setItem('token', userData.token); // Simpan token ke localStorage
    };

    const logout = () => {
        setAuth(null);
        localStorage.removeItem('token'); // Hapus token dari localStorage
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;