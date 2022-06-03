import axios, {AxiosRequestConfig} from 'axios';

// const baseUrl = process.env.NODE_ENV !== "development" ? "https://tankistpro-food.ru" : "";

// const createOptionsDevelopment = {
//     withCredentials: true,
// }
//
// const createOptionsProduction = {
//     baseURL: "https://tankistpro-food.ru",
//     withCredentials: true,
// }
//
// const createOptions = process.env.NODE_ENV !== "development" ? createOptionsProduction : createOptionsDevelopment;

const api = axios.create({
    baseURL: "https://tankistpro-food.ru",
    withCredentials: true,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers!.Authorization = localStorage.getItem('access') || '';

    return config;
})

export default api;
