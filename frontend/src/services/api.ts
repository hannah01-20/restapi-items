// SERVICE DIRECTORY IS WHERE THE API CALLS ARE MADE

import axios from 'axios';

// Create an instance of axios with default settings
export const API = axios.create({
    baseURL:  'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
    },
})

// Add a request interceptor to include the access token in the headers when it's available
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