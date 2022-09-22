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
     * Перенос продуктов из LocalStorage в Корзину авторизованного пользователя
     * (продукты из LocalStorage удаляются)
     */
    addRangProductsFromLocalStorageToUserBasket(id_user: number): Promise<boolean>;

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
     * Получение корзины из LocalStorage
     */
    getBasketInLocalStorage(): BasketProduct[] | [];

    /**
     * Удаление продукта из LocalStorage
    */
    removeInLocalStorage (id_food: number): void;

    /**
     * Обновление данных о товаре в LocalStorage
     */
    updateInLocalStorage (basketProduct: BasketProduct): void;

    /**
     * Полная очистка корзины
     */
    clearBasketLocalStorage (): void;

    /**
     * Добавление несколькиз продуктов в Корзину
     */
    addRangeProducts (id_user: number, products: BasketProduct[]): Promise<AxiosResponse<boolean>>
}
