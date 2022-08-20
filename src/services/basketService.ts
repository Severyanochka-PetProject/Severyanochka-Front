import api from "../api/axios";
import {BasketServiceInterface} from "../interfaces/BasketService.interface";
import {AxiosResponse} from "axios";
import {BasketProduct} from "../domain/Basket.domain";

class basketService implements BasketServiceInterface {
    async getUserBasket(id_user: number): Promise<AxiosResponse> {
        return await api.get(`/product-apiV1/baskets/get-user-basket?id_user=${ id_user }`);
    }
}

export default new basketService();
