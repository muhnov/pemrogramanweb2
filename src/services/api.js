import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:4000/api', // Ganti dengan URL backend Anda
});

// Tambahkan interceptor untuk menambahkan token ke setiap permintaan
API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Atau cara lain untuk mendapatkan token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default API;