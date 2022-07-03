import { AxiosResponse } from "axios";

interface ILoginPayload  {
    phone_number: string,
    password: string
}

export interface AuthServiceInterface {
    /**
     * Авторизация через сайт
    */
    login(payload: ILoginPayload): Promise<AxiosResponse>;
    
    /**
     * Авторизация через VK 
     */
    loginVk(
        access_token: string, 
        vk_user_id: number,
        email: string,
        phone_number?: string
        ): Promise<AxiosResponse>;

    /**
     * Получение информации о пользователе
     */
    me(): Promise<AxiosResponse>;

    refresh(): Promise<AxiosResponse>;
    
    /**
     * Получение данных пользователя из VK
     */
    getUserFromVk(user_id: number, token: string): Promise<AxiosResponse>;
}