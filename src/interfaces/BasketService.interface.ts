import {AxiosResponse} from "axios";
import {BasketProduct} from "../domain/Basket.domain";

export interface BasketServiceInterface {
    /**
     * Получение корзины пользователя
    */
    getUserBasket(id_user: number): Promise<AxiosResponse>
}
