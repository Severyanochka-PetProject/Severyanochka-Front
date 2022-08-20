import {AxiosResponse} from "axios";
import {BasketProduct} from "../domain/Basket.domain";

export interface BasketServiceInterface {
    /**
     * Получение корзины пользователя
    */
    getUserBasket(id_user: number): Promise<AxiosResponse>;

    /**
     * Добавление продукта в Корзину
     */
    addProductToBasket(product: BasketProduct, id_user: number): Promise<AxiosResponse>;

    /**
     * Удаление продукта из Корзину
     */
    removeProductFromBasket(id_food: number, id_user: number): Promise<AxiosResponse>;
}
