import axios, {AxiosRequestConfig} from 'axios';

const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:5500/" : "http://5.63.155.57:5500"

const api = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers!.Authorization = localStorage.getItem('access') || '';

    return config;
})

export default api;
