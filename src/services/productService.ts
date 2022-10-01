import api from "../api/axios";
import { AxiosResponse } from "axios";
import { Food } from "../domain/Food.domain";
import {IProductService, IResponseServerReviews, IResponseServerReviewsStatistic} from "../interfaces/ProductService.interface";

class ProductService implements IProductService {

    async getProducts(): Promise<AxiosResponse<Food[]>> {
        return await api.get('/product-apiV1/products');
    }

    async getProductById(id: number): Promise<AxiosResponse<Food>> {
        return await api.get(`/product-apiV1/products?id=${ id }`);
    }

    async getProductReviewsStatistic(id: number): Promise<AxiosResponse<IResponseServerReviewsStatistic>> {
        return await api.get(`/product-apiV1/reviews/reviews-statistic?id=${ id }`);
    }

    async getProductReviews(id: number, page: number, perPage: number): Promise<AxiosResponse<IResponseServerReviews>> {
        return await api.get(`/product-apiV1/reviews?id=${ id }&perPage=${ perPage }&page=${ page }`);
    }
}

export default new ProductService();
