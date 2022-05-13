import api from "../api/axios";
import {AxiosResponse} from "axios";

interface IRegistrationPayload {
    first_name: string,
    last_name?: string,
    phone_number: string,
    password: string,
    avatar_url?: string
}

interface IRegistrationVkPayload {
    access_token: string,
    email: string | null,
    user_id: number,
}


class RegistrationService {
    static async registration(payload: IRegistrationPayload): Promise<AxiosResponse> {
        return await api.post('/auth/registration', payload);
    }

    static async registrationVk(payload: IRegistrationVkPayload) : Promise<AxiosResponse>{
        return await api.post('/auth/oauth/vk', payload);
    }
}

export default RegistrationService;
