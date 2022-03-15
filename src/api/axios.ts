import axios, {AxiosRequestConfig} from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5500/',
    withCredentials: true,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers!.Authorization = localStorage.getItem('access') || '';

    return config;
})

export default api;
