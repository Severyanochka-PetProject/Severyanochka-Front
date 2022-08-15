import { AxiosResponse } from "axios";
import { Food } from "../domain/Food.domain";

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
}