import api from "../api/axios";
import {BasketServiceInterface} from "../interfaces/BasketService.interface";
import {AxiosResponse} from "axios";
import {BasketProduct} from "../domain/Basket.domain";
import {Food} from "../domain/Food.domain";

class basketService implements BasketServiceInterface {

    async addRangeProducts(id_user: number, products: BasketProduct[]): Promise<AxiosResponse<boolean>> {
        const payload = {
            id_user,
            products: products.map(p => {
                return {
                    id_product: p.id_food,
                    count: p.count
                }
            })
        }

        return await api.post('/product-apiV1/baskets/add-range-basket', payload);
    }

    async getUserBasket(id_user: number): Promise<AxiosResponse> {
        return await api.get(`/product-apiV1/baskets/get-user-basket?id_user=${ id_user }`);
    }

    // FIXME: получать id_user на сервере через access_token
    async addProductToBasket(product: BasketProduct, id_user: number): Promise<AxiosResponse<boolean>> {
        const payload = {
            id_user,
            count: 1,
            id_food: product.id_food
        }
        return await api.post('/product-apiV1/baskets/add-product-basket', payload)
    }

    async removeProductFromBasket(id_food: number, id_user: number): Promise<AxiosResponse<boolean>> {
        const payload = {
            id_user,
            id_food
        }

        return await api.delete('/product-apiV1/baskets/remove-product-basket', {
            data: payload
        });
    }

    async updateBasketProduct(id_user: number, id_food: number, count: number): Promise<AxiosResponse> {
        return await api.patch('/product-apiV1/baskets/update-product-basket', {
            id_user,
            id_food,
            count
        })
    }

    saveInLocalStorage (basketProduct: BasketProduct) {
        const currentLocalBasket = localStorage.getItem('user_basket');
        let localBasket: BasketProduct[] = [];

        if (!currentLocalBasket) {
            localBasket.push(basketProduct);
        } else {
            localBasket = JSON.parse(currentLocalBasket);
            localBasket.push(basketProduct);
        }

        localStorage.setItem('user_basket', JSON.stringify(localBasket));
    }

    removeInLocalStorage (id_food: number) {
        let currentLocalBasket = JSON.parse(localStorage.getItem('user_basket') || '[]');

        const productIndex = currentLocalBasket.findIndex((value : Food, index: number) => value.id_food === id_food);
        currentLocalBasket.splice(productIndex, 1);

        localStorage.setItem('user_basket', JSON.stringify(currentLocalBasket));
    }

    updateInLocalStorage (basketProduct: BasketProduct): void {
        let currentLocalBasket = JSON.parse(localStorage.getItem('user_basket') || '[]');

        const productIndex = currentLocalBasket.findIndex((value : Food, index: number) => value.id_food === basketProduct.id_food);

        if (productIndex > -1) {
            currentLocalBasket[productIndex].count = basketProduct.count

            localStorage.setItem('user_basket', JSON.stringify(currentLocalBasket));
        }
    }

    clearBasketLocalStorage (): void {
        localStorage.removeItem('user_basket')
    }

    getBasketInLocalStorage(): BasketProduct[] | [] {
        return JSON.parse(localStorage.getItem('user_basket') || '[]');
    }

    async addRangProductsFromLocalStorageToUserBasket(id_user: number): Promise<boolean> {
        const localBasket = this.getBasketInLocalStorage();

        if (localBasket.length) {
            try {
                await this.addRangeProducts(id_user, localBasket);
            } catch (err) {
                return false
            }
        }

        this.clearBasketLocalStorage();

        return true
    }
}

export default new basketService();
