import api from "../api/axios";
import {AxiosResponse} from "axios";
import axios from "axios";

interface ILoginPayload  {
    phone_number: string,
    password: string
}

interface IRegistrationVkPayload {
    access_token: string,
    email: string | null,
    vk_user_id: number,
    phone_number?: string
}

class AuthService {

    static async login (payload : ILoginPayload ): Promise<AxiosResponse> {
        const { password, phone_number } = payload

        return await api.post('/auth/login', {phone_number, password})
    }

    static async loginVk(payload: IRegistrationVkPayload) : Promise<AxiosResponse>{
        let userVk = await this.getUserFromVk(payload.vk_user_id, payload.access_token);

        console.log(userVk);

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

    static async getUserFromVk(user_id: number, token: string): Promise<any> {
        return new Promise((resolve, reject) => {
            // @ts-ignore
            VK.Api.call('users.get', {
                user_ids: user_id,
                fields: ['photo_400', 'home_town', 'contacts'],
                v: '5.131',
                access_token: token
            }, function(r: any) {
                if(r.response) {
                    resolve(r.response[0])
                } else {
                    reject(r)
                }
            });
        })
    }
}

export default AuthService;
