import axios from "axios";

const instance = axios.create({
    baseURL: 'https://proforme-backend.onrender.com',
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (!!config.headers) {
        config.headers.Authorization = token ? `Bearer ${token}` : "";
    }

    return config;
});

export default instance;