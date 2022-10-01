import { AxiosResponse } from "axios";
import { Food } from "../domain/Food.domain";
import {Review} from "../domain/Review.domain";

export interface IResponseServerReviewsStatistic {
    count: number,
    reviewsStatistic: {
        0: number,
        1: number,
        2: number,
        3: number,
        4: number,
        5: number,
    }
}

export interface IResponseServerReviews {
    reviewsPage: Review[]
}

export interface IProductService {
    /**
     *  Получение всех продуктов
     *
     *  @return Food[]
     */
    getProducts(): Promise<AxiosResponse<Food[]>>;

    /**
     *  Получение продукта по ID
     *
     *  @return Food
     */
    getProductById(id: number): Promise<AxiosResponse<Food>>;

    /**
     *  Получение статистики отзывов о товаре
     */
     getProductReviewsStatistic(id: number): Promise<AxiosResponse<IResponseServerReviewsStatistic>>;

     /**
     *  Получение постраинчного спика отзывов о товаре
     */
     getProductReviews(id: number, page: number, perPage: number): Promise<AxiosResponse<IResponseServerReviews>>;
}
