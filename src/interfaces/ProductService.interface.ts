import { AxiosResponse } from "axios";
import { Food } from "../domain/Food.domain";
import {Review} from "../domain/Review.domain";

export interface IResponseServerReviews {
    count: number,
    reviews: Review[],
    reviewsStatistic: {
        0: number,
        1: number,
        2: number,
        3: number,
        4: number,
        5: number,
    }
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
     *  Получение списка отзывов о товаре
     *
     *  @return Food
     */
    getProductReviews(id: number): Promise<AxiosResponse<IResponseServerReviews>>
}
