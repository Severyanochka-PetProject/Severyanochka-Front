import axios, {AxiosRequestConfig} from 'axios';

const createOptionsDevelopment = {
    withCredentials: true,
}

const createOptionsProduction = {
    baseURL: "https://tankistpro-food.ru",
    withCredentials: true,
}

const createOptions = process.env.NODE_ENV !== "development" ? createOptionsProduction : createOptionsDevelopment;

const api = axios.create(createOptions);

api.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers!.Authorization = localStorage.getItem("access") || "";

    return config;
})

export default api;
