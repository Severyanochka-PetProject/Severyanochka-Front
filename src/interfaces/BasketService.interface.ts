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

    /**
     * Обновление продукта в Корзине
     */
    updateBasketProduct(id_user: number, id_food: number, count: number): Promise<AxiosResponse>;

    /**
     * Сохранение продукта в LocalStorage
     * @param basketProduct
     */
    saveInLocalStorage (basketProduct: BasketProduct): void;

    /**
     * Удаление продукта из LocalStorage
    */
    removeInLocalStorage (id_food: number): void;
}
