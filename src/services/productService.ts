import api from "../api/axios";
import { AxiosResponse } from "axios";
import { Food } from "../domain/Food.domain";
import {IProductService, IResponseServerReviews} from "../interfaces/ProductService.interface";

class ProductService implements IProductService {

    async getProducts(): Promise<AxiosResponse<Food[]>> {
        return await api.get('/product-apiV1/products');
    }

    async getProductById(id: number): Promise<AxiosResponse<Food>> {
        return await api.get(`/product-apiV1/products?id=${ id }`);
    }

    async getProductReviews(id: number): Promise<AxiosResponse<IResponseServerReviews>> {
        return await api.get(`/product-apiV1/reviews?id=${ id }`);
    }
}

export default new ProductService();
