import axios, {AxiosRequestConfig} from 'axios';

const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:5500/api/v1/" : "https://tankistpro-food.ru:5500/api/v1/"

const api = axios.create({
    withCredentials: true,
    proxy: false,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers!.Authorization = localStorage.getItem('access') || '';

    return config;
})

export default api;
