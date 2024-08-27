import axios, { AxiosError } from "axios";

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

instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            window.location.replace("/login");
        }
        return Promise.reject(error);
    }
);


export default instance;