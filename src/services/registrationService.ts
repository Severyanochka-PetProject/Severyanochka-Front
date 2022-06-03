import api from "../api/axios";
import {AxiosResponse} from "axios";

interface IRegistrationPayload {
    first_name: string,
    last_name?: string,
    phone_number: string,
    password: string,
    avatar_url?: string
}

class RegistrationService {
    static async registration(payload: IRegistrationPayload): Promise<AxiosResponse> {
        return await api.post('/api/v1/auth/registration', payload);
    }
}

export default RegistrationService;
