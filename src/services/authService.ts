import api from "../api/axios";
import {AxiosResponse} from "axios";
import { AuthServiceInterface } from "../interfaces/AuthService.interface";

interface ILoginPayload  {
    phone_number: string,
    password: string
}

class AuthService implements AuthServiceInterface {
    async login (payload : ILoginPayload ): Promise<AxiosResponse> {
        const { password, phone_number } = payload

        return await api.post('/api/v1/auth/login', {phone_number, password})
    }

    async loginVk(access_token: string, vk_user_id: number, email: string, phone_number?: string) : Promise<AxiosResponse>{
        let userVk = await this.getUserFromVk(vk_user_id, access_token);

        userVk = {
            email,
            phone_number,
            vk_user_id,
            first_name: userVk.first_name,
            last_name: userVk.last_name,
            avatar_url: userVk.photo_400
        }

        return await api.post('/api/v1/auth/login-vk', userVk);
    }

    async me () : Promise<AxiosResponse> {
        return await api.get('/api/v1/users/me')
    }

    async refresh () : Promise<AxiosResponse> {
        return await api.get('/api/v1/auth/refresh')
    }

    async logout () : Promise<AxiosResponse> {
        localStorage.removeItem('access');

        return await api.post('/api/v1/auth/logout')
    }

    async getUserFromVk(user_id: number, token: string): Promise<any> {
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

export default new AuthService();
