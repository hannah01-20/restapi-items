import axios from 'axios';

export const API = axios.create({
    baseURL: "https://restapi-backend.hannahflorano.me",
    headers: {
        'Content-Type': 'application/json',
    },
})

API.interceptors.request.use(
    (config) => {
        const access = localStorage.getItem('access');
        if (access) {
            config.headers.Authorization = `Bearer ${access}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);