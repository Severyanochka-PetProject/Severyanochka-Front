import api from "../api/axios";
import {AxiosResponse} from "axios";

interface ILoginPayload  {
    phone_number: string,
    password: string
}

interface IRegistrationVkPayload {
    access_token: string,
    email: string | null,
    user_id: number,
}

class AuthService {

    static async login (payload : ILoginPayload ): Promise<AxiosResponse> {
        const { password, phone_number } = payload

        return await api.post('/auth/login', {phone_number, password})
    }

    static async loginVk(payload: IRegistrationVkPayload) : Promise<AxiosResponse>{
        return await api.post('/auth/login-vk', payload);
    }

    static async me () : Promise<AxiosResponse> {
        return await api.get('/users/me')
    }

    static async refresh () : Promise<AxiosResponse> {
        return await api.get('/auth/refresh')
    }

    static async logout () : Promise<AxiosResponse> {
        localStorage.removeItem('access');

        return await api.post('/auth/logout')
    }
}

export default AuthService;
